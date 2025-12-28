// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function contactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "Doe",
    email: "",
    phone: "+1 012 3456 789",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Subject Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Select Subject?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "General Inquiry",
                "General Inquiry",
                "General Inquiry",
                "General Inquiry",
              ].map((subject, index) => (
                <label key={index} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="subject"
                    value={subject}
                    checked={formData.subject === subject && index === 0}
                    onChange={handleChange}
                    className="w-4 h-4 text-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-700">{subject}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message.."
              rows={4}
              className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-gray-600 outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
