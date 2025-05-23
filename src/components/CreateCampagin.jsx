import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const { addCampaign } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    conversionRate: "",
  });
  const [errors, setErrors] = useState({});

  const navigate =useNavigate()

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Campaign name is required";
    if (!formData.startDate) errs.startDate = "Start date is required";
    if (!formData.endDate) errs.endDate = "End date is required";
    if (!formData.conversionRate || isNaN(formData.conversionRate)) {
      errs.conversionRate = "Conversion rate must be a number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    addCampaign(formData);
    setFormData({ name: "", startDate: "", endDate: "", conversionRate: "" });
    alert("Campaign created!");
    navigate("/partner")
    
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Campaign Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
        </div>
        <div>
          <label className="block">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}
        </div>
        <div>
          <label className="block">Conversion Rate</label>
          <input
            type="number"
            name="conversionRate"
            value={formData.conversionRate}
            className="border p-2 w-full"
            onChange={handleChange}
          />
          {errors.conversionRate && <p className="text-red-500">{errors.conversionRate}</p>}
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCampaign;
