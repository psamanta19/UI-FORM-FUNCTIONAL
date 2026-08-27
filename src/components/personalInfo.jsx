import { useState } from "react";

function PersonalInfo({ setCurrentStep }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="p-12">
      <div>
        <h1 className="text-3xl font-bold text-blue-950">
          Personal info
        </h1>

        <p className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div className="mt-8">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-blue-950 mb-2"
        >
          Name
        </label>

        <input
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-blue-950 mb-2"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-blue-950 mb-2"
        >
          Phone Number
        </label>

        <input
          id="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
        />
      </div>

      <div className="flex justify-end mt-12">
        <button
          onClick={() => setCurrentStep(2)}
          className="bg-blue-950 text-white px-6 py-3 rounded-lg cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;