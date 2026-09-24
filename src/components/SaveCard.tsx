import { FitContext } from "@/context/FitContext";
import { FitlogType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { IoTimer } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

function SaveCard ({todayData}: {todayData: FitlogType}) {
    const {saveforlater, setSaveforlater} = useContext(FitContext)
    const exist: FitlogType | undefined = saveforlater.find(f => f.id === todayData.id)
    const handleDelete = () => {
        if(exist){
            const remaining: FitlogType[] = saveforlater.filter(f => f.id !== todayData.id)
            setSaveforlater(remaining)
            toast.error(`${todayData.name} deleted!`)
        }else{
            toast.error(`${todayData.name} not found!`)
        }
    }
    return (
        <div>
            <div className="flex flex-wrap gap-2 justify-between items-center p-4 m-3 bg-gray-700 rounded-2xl">
                <div className="flex items-center gap-4">
                    <Image src={todayData.image} alt={todayData.name} width={100} height={100} className="rounded-2xl"></Image>
                    <div>
                        <h1 className="text-2xl font-bold">{todayData.name}</h1>
                        <p>{todayData.equipment}</p>
                        <div className="flex items-center gap-2">
                            <p className="flex items-center gap-1"><IoTimer className="text-[#d0fe00]" /> {todayData.duration} min</p>
                            <p className="flex items-center gap-1"><FaFire className="text-[#d0fe00]" /> {todayData.caloriesBurned} kcal</p>
                            <p className="flex items-center gap-1"><FaStar className="text-[#d0fe00]" /> {todayData.rating}</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <Link href={`/workouts/${todayData.id}`} className="px-4 py-2 rounded-2xl border border-gray-500">View Details</Link>
                    <button onClick={handleDelete}  className="text-2xl hover:text-red-500 cursor-pointer"><RxCross2 /></button>
                </div>
            </div>
       </div>     
    )
}

export default SaveCard