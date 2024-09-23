"use client";
import { redirect } from "@/node_modules/next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

const SettingsPage = () => {
  const session = useSession();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleProfileUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  if (session?.data?.user?.role === "admin") {
    return (
      <div className="min-h-screen bg-[#EEF4FF] p-6">
        <h1 className="text-2xl mt-3 lg:mt-8 mb-6 ">Settings</h1>
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
      </div>
    );
  } else {
    redirect("/list");
  }
};
export default SettingsPage;
