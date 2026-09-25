"use client";
import FilterSection from "@/components/FilterSection";
import SaveCards from "@/components/SaveCards";
import TodayCards from "@/components/TodayCards";
import { FitContext } from "@/context/FitContext";
import Link from "next/link";
import { useContext } from "react";

function Myplan() {
  const { todaylist, saveforlater, activeTab } = useContext(FitContext);
  return (
    <div className="container mx-auto p-4">
      <div className="mt-10">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold font-oswald">MY PLAN</h1>
          <p className="text-xl text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2 divide-x divide-gray-700 bg-gray-900 p-10 rounded-2xl  border border-gray-700">
          <div className="p-2">
            <p className="text-sm text-gray-500">Exercises</p>
            <h1 className="text-5xl text-[#ccff00] font-bold font-oswald">
              {activeTab === "today" ? todaylist.length : saveforlater.length}
            </h1>
          </div>
          <div className="p-2">
            <p className="text-sm text-gray-500">Minutes</p>
            <h1 className="text-5xl font-bold font-oswald">
              {activeTab === "today"
                ? todaylist
                    .map((today) => today.duration)
                    .reduce((acc, value) => acc + value, 0)
                : saveforlater
                    .map((save) => save.duration)
                    .reduce((acc, value) => acc + value, 0)}
            </h1>
          </div>
          <div className="p-2">
            <p className="text-sm text-gray-500">Calories</p>
            <h1 className="text-5xl font-bold font-oswald">
              {activeTab === "today"
                ? todaylist
                    .map((today) => today.caloriesBurned)
                    .reduce((acc, value) => acc + value, 0)
                : saveforlater
                    .map((save) => save.caloriesBurned)
                    .reduce((acc, value) => acc + value, 0)}
            </h1>
          </div>
        </div>
      </div>
      <FilterSection />
      <div className={`h-fit flex justify-center items-center ${(activeTab === 'today' && todaylist.length === 0 || activeTab === 'saved' && saveforlater.length === 0) && 'border border-dashed border-gray-500 rounded-3xl'}`}>
        {(activeTab === "today" && todaylist.length === 0) ||
        (activeTab === "saved" && saveforlater.length === 0) ? (
          <div className="text-center p-10 space-y-4">
            <h1 className="text-3xl font-bold font-oswald">NOTHING HERE YET</h1>
            <p>Browse the library and add a lift to get today moving</p>
            <Link
              href={"/"}
              className="px-4 py-2 bg-[#ccff00] text-black font-bold rounded-4xl"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
            (activeTab === 'today')? <TodayCards /> : <SaveCards/>
          
        )}
      </div>
    </div>
  );
}

export default Myplan;
