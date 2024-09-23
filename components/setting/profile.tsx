"use client";
import { useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleProfileUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="mt-8">
        <hr className="w-full my-2 " />
        <h2 className="text-xl  my-4">Profile</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block font-medium mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="sm:col-span-3">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue text-white px-4 py-3 rounded-md hover:bg-blue-dark
             transition duration-300"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Profile;
