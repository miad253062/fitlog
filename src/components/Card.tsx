import { FitlogType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaStar } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";

interface FitProps {
    fitdata: FitlogType
}

function Card ({fitdata}: FitProps) {
    
    return (
        <div className="rounded-2xl bg-[#15161d] hover:scale-102 duration-300 hover:border-2 hover:border-lime-500">
            <Link href={`/workouts/${fitdata.id}`}>
                <div>
                    <Image src={fitdata.image} alt={fitdata.name} height={500} width={500} className="mx-auto rounded-t-2xl"></Image>
                    <div className="p-4 space-y-4">
                        <p>
                            {
                                fitdata.muscleGroups.map((mg, index) => <span className="px-2 py-1 rounded-2xl text-black bg-lime-400 mr-2 font-bold" key={index}>{mg}</span>)
                            }
                        </p>
                        <h1 className="text-2xl font-bold">{fitdata.name}</h1>
                        <p>
                            {
                                fitdata.equipment
                            }
                        </p>
                        <hr className="text-gray-700" />
                        <div className="flex justify-around items-center">
                            <p className="flex items-center gap-2"><LuTimer />{fitdata.duration} min</p>
                            <p className="flex items-center gap-2"><FaFire />{fitdata.caloriesBurned} kcal</p>
                            <p className="flex items-center gap-2"><FaStar />{fitdata.rating}</p>
                        </div>
                        
                    </div>
                </div>
                

            </Link>
        </div>
    )
}


export default Card;