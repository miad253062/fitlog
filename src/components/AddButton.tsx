'use client'
import { FitContext } from "@/context/FitContext"
import { FitlogType } from "@/types/type"
import { useContext } from "react"
import { MdOutlineDateRange } from "react-icons/md"
import { toast } from "react-toastify"


interface ClickedDataProp {
    clickedData: FitlogType
}
function AddButton ({clickedData}: ClickedDataProp) {
    const {todaylist, setTodaylist} = useContext(FitContext)
    const isFull: boolean = (todaylist.length >=5)? true : false
    const handleSaveLater = () => {
        const exist: FitlogType | undefined = todaylist.find(data => data.id === clickedData.id)
        if(!exist){
            setTodaylist([...todaylist, clickedData])
            toast.success(`${clickedData.name} added`)
        }else{
            toast.error(`${clickedData.name} already in list`)
        }
    }
    return (
    <button 
        className={`flex items-center px-4 py-2 text-black rounded-2xl font-bold gap-2 ${
            isFull 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-[#ccff00] cursor-pointer hover:scale-105'
        }`}
        disabled={isFull}
        onClick={handleSaveLater}
    >
        <MdOutlineDateRange /> Add to today's plan
    </button>
)
}

export default AddButton