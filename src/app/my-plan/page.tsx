'use client'
import { FitContext } from "@/context/FitContext"
import { useContext } from "react"

function Myplan () {
    const {todaylist, saveforlater} = useContext(FitContext)
    return (
        <div className="container mx-auto">
            <div className="mt-10">
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold">MY PLAN</h1>
                    <p className="text-xl text-gray-500">Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-2 divide-x divide-gray-700 bg-gray-900 p-10 rounded-2xl  border border-gray-700">
                    <div className="p-2">
                        <p className="text-sm text-gray-500">Exercises</p>
                         <h1 className="text-5xl text-[#ccff00] font-bold">{todaylist.length}</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm text-gray-500">Minutes</p>
                        <h1 className="text-5xl font-bold">{todaylist.map(today => today.duration).reduce((acc, value) => acc+value, 0)}</h1>
                    </div>
                    <div className="p-2">
                        <p className="text-sm text-gray-500">Calories</p>
                        <h1 className="text-5xl font-bold">{todaylist.map(today => today.caloriesBurned).reduce((acc, value) => acc+value, 0)}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myplan