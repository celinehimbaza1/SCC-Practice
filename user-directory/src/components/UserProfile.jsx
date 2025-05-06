import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p className="p-6 text-center text-gray-500">Loading user data...</p>;

  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200">
          👤 {user.name}
        </h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-medium"> Username:</span> {user.username}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          <p><span className="font-medium">Phone:</span> {user.phone}</p>
          <p><span className="font-medium">Website:</span> {user.website}</p>
          <p><span className="font-medium">Address:</span> {user.address.street}, {user.address.city}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
