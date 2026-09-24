'use client'

import { FitContext } from "@/context/FitContext"
import { FitlogType } from "@/types/type"
import { useContext } from "react"
import { IoBookmark } from "react-icons/io5"
import { toast } from "react-toastify"


interface ClickedDataProp {
    clickedData: FitlogType
}
function SaveForLater ({clickedData}: ClickedDataProp) {

    
    const {saveforlater, setSaveforlater} = useContext(FitContext)
    const handleSaveLater = () => {
        const exist: FitlogType | undefined = saveforlater.find(data => data.id === clickedData.id)
        if(!exist){
            setSaveforlater([...saveforlater, clickedData])
            toast.success(`${clickedData.name} added`)
        }else{
            toast.error(`${clickedData.name} already in list`)
        }
        

    }
    return (
        <button className="flex items-center px-4 py-2 border border-gray-700 rounded-2xl font-bold gap-2 cursor-pointer hover:scale-102 hover:duration-200" onClick={handleSaveLater}><IoBookmark />Save for later</button>
    )
}

export default SaveForLater