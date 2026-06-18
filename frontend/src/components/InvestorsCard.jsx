import React from "react";

const InvestorsCard = ({investor}) => {


  return (
    <div className="bg-[#161B22] border border-[#2D333B] rounded-xl p-4 sm:p-5 shadow-md text-[#E5E7EB] w-full hover:border-[#4ADE80] transition-all duration-300">

      {/* Header */}
      <div className="mb-5">

        <div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row">

          <h2 className="text-xl sm:text-2xl font-bold text-[#E5E7EB] break-words">
            {investor.name}
          </h2>

          <span className="bg-[#4ADE80]/20 text-[#4ADE80] text-[10px] sm:text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap">
            {investor.role}
          </span>
        </div>

        <p className="text-[#9CA3AF] text-sm sm:text-base mt-3 leading-6">
          Interested in{" "}
          <span className="text-[#E5E7EB] font-medium break-words">
            {investor.interests}
          </span>
        </p>
      </div>

      {/* Budget Section */}
      <div className="bg-[#0D1117] rounded-lg p-3 sm:p-4 mb-5 border border-[#2D333B]">

        <p className="text-[#9CA3AF] text-sm mb-2">
          Investment Budget
        </p>

        <h3 className="text-[#4ADE80] text-lg sm:text-xl font-bold break-words leading-8">
          ₹ {investor.budgetRange.min.toLocaleString()} - ₹{" "}
          {investor.budgetRange.max.toLocaleString()}
        </h3>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mb-5">

        <div>
          <p className="text-[#9CA3AF] text-sm mb-1">
            Email
          </p>

          <p
            href={`mailto:${investor.email}`}
            className="text-[#E5E7EB] hover:text-[#4ADE80] transition-colors break-all text-sm sm:text-base"
          >
            {investor.email}
          </p>
        </div>

        <div>
          <p className="text-[#9CA3AF] text-sm mb-1">
            Phone
          </p>

          <p
            href={`tel:${investor.phone}`}
            className="text-[#E5E7EB] hover:text-[#4ADE80] transition-colors text-sm sm:text-base"
          >
            +91 {investor.phone}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#2D333B] pt-4 flex flex-col gap-3">

        <p className="text-[11px] sm:text-xs text-[#6B7280] text-center">

          Posted on {investor?.createdAt ? new Date(investor.createdAt).toLocaleDateString("en-IN",{
day:"numeric",
month:"short",
year:"numeric"
}) : "N/A"}
        </p>

      </div>
    </div>
  );
};

export default InvestorsCard;