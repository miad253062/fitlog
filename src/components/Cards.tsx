import { FitlogType } from "@/types/type";
import Card from "./Card";

const getData = async () => {
    try {
        const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
        const data = await response.json()
        return data;
    }catch(error) {
        console.error("Error fetching books data:", error); 
        return [];
    }
}


async function Cards () {
    const fitdata: FitlogType[] = await getData()
    return (
        <div className="container mx-auto p-4 space-y-4 mt-10" id="library">
            <div>
                <h1 className="text-3xl font-bold font-oswald">THE LIBRARY</h1>
                <p className="text-xl text-gray-500">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 justify-center items-center">
                {
                    fitdata.map(exercise => <Card key={exercise.id} fitdata={exercise}></Card>)
                }
            </div>
            
        </div>
    )

}

export default Cards;