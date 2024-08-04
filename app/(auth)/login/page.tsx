"use client";

import React from "react";
import { useFormState } from "react-dom";
import { FormState, loginAction } from "../actions";
import FormButton from "@/components/ui/FormButton";
import Link from "next/link";

const initialState: FormState = {
  message: "",
};

export default function Login() {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-secondary">
            Welcome
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={formAction} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-secondary"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-secondary"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-1.5 text-primary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <FormButton>Login</FormButton>
            </div>
            <div className="h-8">
              <div className="text-green-700">{state.message}</div>
              <div className="text-red-700">{state.error}</div>
            </div>
          </form>
          <Link
            href={"/register"}
            className="text-secondary text-sm py-6 hover:text-tertiary w-full flex justify-center"
          >
            or Register
          </Link>
        </div>
      </div>
    </>
  );
}
