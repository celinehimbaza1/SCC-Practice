import { useState } from "react";
import React from "react";

export function Poem() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [favColor, setFavColor] = useState("");
  const [hobby, setHobby] = useState("");
  const [petName, setPetName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !petName || !address || !favColor || !hobby) {
      alert("Please fill all form fields");
      setIsSubmitted(false);
    } else {
      console.log("Form Submitted");
      setIsSubmitted(true);
    }
  };

  const renderPoem = () => {
    if (!isSubmitted) {
      return <em className="text-gray-500">Fill in the form to reveal your Poem</em>;
    }
    return (
      <div className="bg-white p-4 rounded-xl shadow-md mt-4 space-y-2">
        <p>
          In the land of <strong>{address}</strong> where the sky is <strong>{favColor}</strong>,
        </p>
        <p>
          Lived <strong>{firstName} {lastName}</strong>, who loved <strong>{hobby}</strong> so much.
        </p>
        <p>
          With their pet <strong>{petName}</strong> always nearby, they laughed and played as the sun went down.
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-100 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Your Poem</h3>
      <div className="mb-6">{renderPoem()}</div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={address}
            placeholder="Address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={petName}
            placeholder="Pet Name"
            name="petName"
            onChange={(e) => setPetName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={hobby}
            placeholder="Hobby"
            name="hobby"
            onChange={(e) => setHobby(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            value={favColor}
            placeholder="Favorite Color"
            name="favColor"
            onChange={(e) => setFavColor(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 