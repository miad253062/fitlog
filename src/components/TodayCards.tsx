'use client'
import { FitContext } from "@/context/FitContext"
import { useContext } from "react"
import TodayCard from "./TodayCard"


function TodayCards () {
    const {todaylist} = useContext(FitContext)
    
    
    return (
        <div className="w-full">
            {
                todaylist.map(today => <TodayCard key={today.id} todayData={today} ></TodayCard>)
            }
        </div>
    )
    
}

export default TodayCards