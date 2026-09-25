import { FitContext } from "@/context/FitContext";
import { FitlogType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { IoTimer } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

function TodayCard ({todayData}: {todayData: FitlogType}) {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const {todaylist, setTodaylist} = useContext(FitContext)
    const exist: FitlogType | undefined = todaylist.find(f => f.id === todayData.id)
    const handleDelete = () => {
        if(exist){
            const remaining: FitlogType[] = todaylist.filter(f => f.id !== todayData.id)
            setTodaylist(remaining)
            toast.error(`${todayData.name} deleted!`)
        }else{
            toast.error(`${todayData.name} not found!`)
        }
    }

    const handleMarkAsDone = () => {
        setIsSelected(!isSelected)
        if(isSelected){
            toast.success('Mark as undone.')
        }else{
            toast.success('Mark as done.')
        }
        
    }
    return (
        <div>
            <div className="flex flex-wrap gap-2 justify-between items-center p-4 m-3 bg-slate-800 border border-gray-500 rounded-2xl">
                <div className="flex items-center gap-4">
                    <Image src={todayData.image} alt={todayData.name} width={100} height={100} className="rounded-2xl"></Image>
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold font-oswald">{todayData.name}</h1>
                        <p>{todayData.equipment}</p>
                        <div className="flex items-center gap-2">
                            <p className="flex items-center gap-1"><IoTimer className="text-[#d0fe00]" /> {todayData.duration} min</p>
                            <p className="flex items-center gap-1"><FaFire className="text-[#d0fe00]" /> {todayData.caloriesBurned} kcal</p>
                            <p className="flex items-center gap-1"><FaStar className="text-[#d0fe00]" /> {todayData.rating}</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <Link href={`/workouts/${todayData.id}`} className="px-4 py-2 rounded-4xl border border-gray-500">View Details</Link>
                    <button  className="flex items-center px-4 py-2 cursor-pointer rounded-4xl bg-[#d0fe00] text-black" onClick={handleMarkAsDone}><GiCheckMark />{`${isSelected? 'Done': 'Mark as Done'}`}</button>
                    <button onClick={handleDelete}  className="text-2xl hover:text-red-500 cursor-pointer"><RxCross2 /></button>
                </div>
            </div>
       </div>     
    )
}

export default TodayCard