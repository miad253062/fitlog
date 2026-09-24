'use client'
import { FitContext } from "@/context/FitContext"
import { useContext } from "react"
import TodayCard from "./TodayCard"


function TodayCards () {
    const {sort, todaylist,} = useContext(FitContext)
    const sortingTodayData = () => {
        const sortedData = [...todaylist]
        if(sort === 'duration'){
            sortedData.sort((a, b) => b.duration - a.duration)
        }else if(sort === 'calories'){
            sortedData.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
        }else{
            sortedData.sort((a, b) => b.rating - a.rating)
        }
        return sortedData
    }

    const sortedToday = sortingTodayData()

    
    
    
    return (
        <div className="w-full">
            {
                sortedToday.map(today => <TodayCard key={today.id} todayData={today} ></TodayCard>)
            }
        </div>
    )
    
}

export default TodayCards