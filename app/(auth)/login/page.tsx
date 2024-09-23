"use client";

import Image from "@/node_modules/next/image";
import { useState } from "react";
import { ActionAuth } from "@/actions/auth-actions";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";
import { useRouter } from "@/node_modules/next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const initialState = {
    message: " ",
  };
  const [state, formAction] = useFormState(ActionAuth, initialState);
  const session = useSession();
  const router = useRouter();
  console.log(session);

  if (session.status !== "authenticated") {
    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-32 lg:py-36 2xl:py-40 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-20 w-auto"
            src="https://pspexpress.com/wp-content/uploads/2023/06/PSP-Logo-01-1.svg"
            alt="Your Company"
            height={10}
            width={30}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={formAction}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-dark"
              >
                Sign In{" "}
              </button>
            </div>
          </form>
          {state?.message && (
            <p className="mt-4 text-red-500">{state.message}</p>
          )}
        </div>
      </div>
    );
  } else {
    router.push("/");
  }
}
