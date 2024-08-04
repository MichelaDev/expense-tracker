"use client"

import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import Card from "./ui/Card";
import FakeDashboard from "./FakeDashboard";

const LandingPage = () => {
  const router = useRouter();
  return (
    <>
    <section className="col-span-1 md:col-span-2 lg:col-span-3 bg-primary text-secondary rounded py-12 px-6 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Expense Tracker</h2>
      <p className="text-lg mb-8">
        Easily manage your expenses and stay on top of your finances.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => router.push("/login")}>
          Login to start
        </Button>
      </div>
    </section>
    <FakeDashboard />
  </>
  );
};

export default LandingPage;
