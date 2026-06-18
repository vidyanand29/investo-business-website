const businessIdeaSchema = require('../models/businessIdeaSchema');

//gett business idea
const getAllIdeas = async (req, res) => {
  const response = await businessIdeaSchema.find().populate("intrestedInvestors");
  res.status(200).json({
    response: response,
user:req.user
  });
}

//post business idea
const submitIdea = async(req, res) => {
  if (req.user.role !== "Entrepreneur") {
    return res.status(403).json({
      message: "Only Entrepreneur is allowed!"
    });
  }
  const data = req.body;
  data.entrepreneurId = req.user.id
  const user = await new businessIdeaSchema(data).save();
  res.status(201).json({
    message: "Business idea posted successfully", response: user
  })
}


//add intrest
const showInterest = async (req, res) => {
    // 1. Role check
    if (req.user.role !== "Investor") {
        return res.status(403).json({
            message: "Only investors can express interest"
        });
    }

    // 2. Find the idea
    const idea = await businessIdeaSchema.findById(req.params.id);
    if (!idea) {
        return res.status(404).json({
            message: "Business idea not found"
        });
    }


    // 3. Check if user already interested
    if (idea.intrestedInvestors.includes(req.user.id)) {
        return res.status(400).json({
            message: "You already showed interest"
        });
    }

    // 4. Add user to interestedInvestor array
    idea.intrestedInvestors.push(req.user.id);
    await idea.save();

    // 5. Send response
    res.status(200).json({
        message: "Interest added successfully",
        data: idea
    });
};
  


//put
const updateIdea = async(req, res) => {
  if (req.user.role !== "Entrepreneur") {
    return res.status(403).json({
      message: "Only Entrepreneur is allowed!"
    })};
  const {
    id
  } = req.params;
  const data = req.body
  const response = await businessIdeaSchema.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  })
  res.status(201).json({
    message: "Business updated successfully", response: response
  })
}

//delete
const deleteIdea = async(req, res) => {
  if (req.user.role !== "Entrepreneur") {
    return res.status(403).json({
      message: "Only Entrepreneur is allowed!"
    })};
  const {
    id
  } = req.params;
  const response = await businessIdeaSchema.findByIdAndDelete(id);
  res.status(201).json({
    message: "Business deleted successfully"
  })
}

module.exports = {
  getAllIdeas,
  submitIdea,
  showInterest,
  updateIdea,
  deleteIdea
};