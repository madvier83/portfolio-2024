import React from "react";
import MainLayout from "../components/MainLayout";
import Timeline from "./Timeline";

export default function page() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl text-white mb-8 font-semibold mt-32">
            Career
          </h1>
          <p className="mb-8">
            I'm Muhammad Advie Rifaldy, an IT student from Indonesia, with a
            strong dedication to web development. Over the past 5 years, I've
            passionately nurtured my love for programming, building a solid
            foundation in this field.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-8">
        <Timeline></Timeline>
      </div>
    </MainLayout>
  );
}
