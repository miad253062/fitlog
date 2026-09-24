import Image from "next/image";
import Hero from '@/assets/banner.png'
import Link from "next/link";

function Banner () {
    return (
        <section className="container mx-auto p-2">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-20 py-10 bg-[#15161d] mt-15 rounded-2xl h-fit">
                <div className="space-y-4 md:col-span-2">
                    <p className="text-lime-400 font-bold">WORKOUT LIBRARY</p>
                    <h1 className="font-bold text-3xl md:text-6xl">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="text-xl text-gray-400">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/> into today's plan, and watch the week's work add up.</p>
                    <a 
                        href="#library" 
                        className="inline-block px-4 py-2 bg-lime-400 font-oswald text-black rounded-xl hover:bg-lime-600 hover:scale-105 hover:transform transition-all duration-300"
                    >
                        BROWSE WORKOUTS
                    </a>
                </div>
                <div className="md:col-span-1">
                    <Image src={Hero} width={400} height={400} alt={'Banner Image'} className="mx-auto"></Image>
                </div>
            </div>
        </section>
        
    )
}

export default Banner;