import AddButton from "@/components/AddButton";
import SaveForLater from "@/components/SaveForLater";
import { FitlogType } from "@/types/type";
import Image from "next/image";

interface PageProps {
  params: {
    workid: string;
  };
}

const singleWorkoutDetails = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

async function Details({ params }: PageProps) {
  const { workid } = await params;
  const workoutDetails: FitlogType = await singleWorkoutDetails(
    parseInt(workid),
  );
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-10">
        <Image
          src={workoutDetails.image}
          alt={workoutDetails.name}
          width={700}
          height={500}
          className="mx-auto rounded-2xl"
        />
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold font-oswald">
            {workoutDetails.name}
          </h1>
          <p className="text-gray-400 text-xl">{workoutDetails.description}</p>
          <p>
            {workoutDetails.muscleGroups.map((mg, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-2xl text-black bg-lime-400 mr-2 font-bold"
              >
                {mg}
              </span>
            ))}
          </p>
          <div className="bg-[#1a1d24] rounded-2xl overflow-hidden mt-6">
            <table className="w-full text-sm text-left">
              <tbody className="divide-y divide-gray-700/60 font-medium">
                <tr>
                  <td className="py-4 px-4 text-gray-400 font-bold text-xs md:text-sm">
                    EQUIPMENT
                  </td>
                  <td className="py-4 px-4 text-gray-200 text-right">
                    {workoutDetails.equipment}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-400 font-bold text-xs md:text-sm">
                    DIFFICULTY
                  </td>
                  <td className="py-4 px-4 text-gray-200 text-right">
                    {workoutDetails.difficulty}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-400 font-bold text-xs md:text-sm">
                    SETS
                  </td>
                  <td className="py-4 px-4 text-gray-200 text-right">
                    {workoutDetails.sets}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-400 font-bold text-xs md:text-sm">
                    REPS
                  </td>
                  <td className="py-4 px-4 text-gray-200 text-right">
                    {workoutDetails.reps}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-400 font-bold text-xs md:text-sm">
                    DURATION
                  </td>
                  <td className="py-4 px-4 text-gray-200 text-right">
                    {workoutDetails.duration} min
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-400 font-bold text-xs md:text-sm">
                    CALORIES
                  </td>
                  <td className="py-4 px-4 text-gray-200 text-right">
                    {workoutDetails.caloriesBurned} kcal
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-400 font-bold text-xs md:text-sm">
                    RATING
                  </td>
                  <td className="py-4 px-4 text-gray-200 text-right">
                    {workoutDetails.rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>INSTRUCTIONS</h2>
          <ol className="list-decimal pl-4 space-y-2">
            {workoutDetails.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <div className="flex items-center gap-10">
            <AddButton clickedData={workoutDetails} />
            <SaveForLater clickedData={workoutDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
