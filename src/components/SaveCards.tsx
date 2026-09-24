'use client'
import { FitContext } from "@/context/FitContext"
import { useContext } from "react"
import SaveCard from "./SaveCard"


function SaveCards () {
    const {sort, saveforlater} = useContext(FitContext)
    const sortingSaveData = () => {
        const sortedSaveData = [...saveforlater]
        if(sort === 'duration'){
            sortedSaveData.sort((a, b) => b.duration - a.duration)
        }else if(sort === 'calories'){
            sortedSaveData.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
        }else{
            sortedSaveData.sort((a, b) => b.rating - a.rating)
        }
        return sortedSaveData
    }

    const sortedSave = sortingSaveData()
    
    
    return (
        <div className="w-full">
            {
                sortedSave.map(save => <SaveCard key={save.id} saveData={save} ></SaveCard>)
            }
        </div>
    )
    
}

export default SaveCards