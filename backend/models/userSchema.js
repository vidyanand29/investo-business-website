const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true,
    maxlength: [20, "Name must be 20 characters or less!"]
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Please use a valid email address!"]
  },
  phone: {
    type: String,
    required: [true, "Phone is required!"],
    unique: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}/.test(v)
      },
      message: "Please input valid phone number!"
    }
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: [6, "Password must be six characters!"],
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, "Password Confirm is required!"],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: "Password confirm do not matched!"
    }
  },
  role: {
    type: String,
    required: [true, "Role is required!"],
    enum: ["Entrepreneur", "Investor"]
  },

  //Imvestor specific fields

  interests: {
    type: String,
    required: function () {
      return this.role === "Investor";
    }
  },

  budgetRange: {
    min: {
      type: Number,
      required: function () {
        return this.role === "Investor";
      }
    },

    max: {
      type: Number,
      required: function () {
        return this.role === "Investor";
      }
    }
  }
},
  {
    timestamps: true
  });


userSchema.pre('save', async function () {
if (!this.isModified('password')) {
return;
}
this.password = await bcrypt.hash(this.password, 10);
this.passwordConfirm = undefined;
})

userSchema.methods.comparePassword = function (candidatePassword) {
return bcrypt.compare(candidatePassword,
this.password);
}

module.exports = mongoose.model('User',
userSchema);