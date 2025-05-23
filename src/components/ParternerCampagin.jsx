import React from "react";
import { useAppContext } from "../context/AppContext";

const ParternerCampagin = () => {
  const { campaigns } = useAppContext();

  const getStatus = (endDate) => {
    return new Date(endDate) >= new Date() ? "Active" : "Completed";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-[#4CAF50] font-[Montserrat]">
        Partner Campaigns
      </h2>
      {campaigns.length === 0 ? (
        <p className="text-[#333333]">No campaigns created yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-[#ffffff] shadow-[0_4px_6px_rgba(0,0,0,0.1)] rounded-lg p-4 text-[#333333] font-[Montserrat]"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#2196F3]">
                {campaign.name}
              </h3>
              <p>
                <strong>Status:</strong>{" "}
                <span className={getStatus(campaign.endDate) === "Active" ? "text-[#4CAF50]" : "text-gray-500"}>
                  {getStatus(campaign.endDate)}
                </span>
              </p>
              <p>
                <strong>Points Processed:</strong> {campaign.points || 0}
              </p>
              <p>
                <strong>Fees Earned:</strong> ₹{campaign.fees || 0}
              </p>
              <p>
                <strong>Conversion Rate:</strong> {campaign.conversionRate}%
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {campaign.startDate} to {campaign.endDate}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ParternerCampagin;
