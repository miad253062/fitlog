import AddButton from "@/components/AddButton";
import SaveForLater from "@/components/SaveForLater";
import { FitlogType } from "@/types/type";
import Image from "next/image";

interface PageProps {
    params: {
        workid: string;
    }
}

const singleWorkoutDetails = async (id: number)=> {
    try {
        const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
        const data = await response.json()
        return data;
    }catch(error) {
        console.error("Error fetching books data:", error); 
        return [];
    }
}





async function Details ({params}: PageProps) {
    const {workid} = await params
    const workoutDetails: FitlogType = await singleWorkoutDetails(parseInt(workid))
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-10">
                <Image src={workoutDetails.image} alt={workoutDetails.name} width={700} height={500} className="mx-auto rounded-2xl"/>
            <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">{workoutDetails.name}</h1>
                <p className="text-gray-400 text-xl">{workoutDetails.description}</p>
                <p>{workoutDetails.muscleGroups.map((mg, index) => <span key={index} className="px-2 py-1 rounded-2xl text-black bg-lime-400 mr-2 font-bold">{mg}</span>)}</p>
                <div className="bg-gray-800 rounded-3xl text-sm font-bold text-gray-400">
                    <div className="flex justify-between items-center border-b border-gray-700 p-4">
                        <p>EQUIPMENT</p>
                        <p>{workoutDetails.equipment}</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 p-4">
                        <p>DIFFICULTY</p>
                        <p>{workoutDetails.difficulty}</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 p-4">
                        <p>SETS</p>
                        <p>{workoutDetails.sets}</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 p-4">
                        <p>REPS</p>
                        <p>{workoutDetails.reps}</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 p-4">
                        <p>DURATION</p>
                        <p>{workoutDetails.duration}</p>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 p-4">
                        <p>CALORIES</p>
                        <p>{workoutDetails.caloriesBurned}</p>
                    </div>
                    <div className="flex justify-between items-center p-4">
                        <p>RATTING</p>
                        <p>{workoutDetails.rating}</p>
                    </div>
                </div>
                <h2>INSTRUCTIONS</h2>
                <ol className="list-decimal pl-4 space-y-2">
                    {
                        workoutDetails.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)
                    }
                </ol>
                <div className="flex items-center gap-10">
                    <AddButton clickedData={workoutDetails}/>
                    <SaveForLater clickedData={workoutDetails}/>
                </div>
            </div>
            </div>
            
            
        </div>
    )
}
export default Details