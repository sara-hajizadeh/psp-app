import Profile from "@/components/setting/profile";
import { redirect } from "@/node_modules/next/navigation";
import { auth } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  if (session?.user?.role === "admin") {
    return (
      <div className="min-h-screen bg-[#EEF4FF] p-6">
        <h1 className="text-2xl mt-3 lg:mt-8 mb-6 ">Settings</h1>
        <Profile />
      </div>
    );
  } else {
    redirect("/list");
  }
}
