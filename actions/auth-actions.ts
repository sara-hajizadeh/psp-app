"use server";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

interface AuthResponse {
  message: string;
}

export async function ActionAuth(
  prevState: any,
  formData: FormData
): Promise<AuthResponse> {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) return { message: "Something went wrong." };
  }

  redirect("/");
  return { message: "authenticated" };
}
