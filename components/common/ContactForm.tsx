import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full max-w-[1000px] bg-white rounded-lg shadow-2xl p-8 md:p-12 lg:p-16">
      <form className="flex flex-col gap-10">
        
        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-sm font-semibold">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-bold">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-gray-700"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-bold">Phone Number</label>
            <input
              type="tel"
              defaultValue="+1 012 3456 789"
              className="border-b border-black py-2 focus:outline-none focus:border-black transition-colors font-medium text-black"
            />
          </div>
        </div>

        {/* Row 3: Select Subject (Radio Buttons) */}
        <div className="flex flex-col gap-4">
          <label className="text-black text-sm font-bold">Select Subject?</label>
          <div className="flex flex-wrap gap-6">
            {[1, 2, 3, 4].map((i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  defaultChecked={i === 1} // Check the first one by default
                  className="w-4 h-4 text-black border-gray-300 focus:ring-black accent-black"
                />
                <span className="text-gray-500 text-sm">General Inquiry</span>
              </label>
            ))}
          </div>
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-500 text-sm font-semibold">Message</label>
          <textarea
            placeholder="Write your message.."
            rows={1}
            className="border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none"
          />
        </div>

        {/* Row 5: Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#0a1520] text-white px-8 py-4 rounded-md font-medium hover:bg-black transition-colors"
          >
            Send Message
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;