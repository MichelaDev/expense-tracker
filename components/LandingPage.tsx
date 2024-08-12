"use client";

import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import Card from "./ui/Card";
import FakeDashboard from "./FakeDashboard";

const LandingPage = () => {
  const router = useRouter();
  return (
    <>
      <section className="col-span-1 flex flex-col items-center justify-center rounded bg-primary px-6 py-12 text-secondary md:col-span-2 lg:col-span-3">
        <h2 className="mb-4 text-4xl font-bold">Welcome to Expense Tracker</h2>
        <p className="mb-8 text-lg">
          Easily manage your expenses and stay on top of your finances.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => router.push("/login")}>Login to start</Button>
        </div>
      </section>
      <FakeDashboard />
    </>
  );
};

export default LandingPage;
