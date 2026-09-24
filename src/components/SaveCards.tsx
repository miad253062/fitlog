'use client'
import { FitContext } from "@/context/FitContext"
import { useContext } from "react"
import SaveCard from "./SaveCard"


function SaveCards () {
    const {saveforlater} = useContext(FitContext)
    
    
    return (
        <div className="w-full">
            {
                saveforlater.map(save => <SaveCard key={save.id} todayData={save} ></SaveCard>)
            }
        </div>
    )
    
}

export default SaveCards