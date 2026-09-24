'use client';
import { FitContext } from '@/context/FitContext';
import { useContext } from 'react';

export default function FilterSection() {
    const {activeTab, setActiveTab, sort, setSort} = useContext(FitContext)
    return (
        <div className="flex items-center justify-between w-full py-4">

            <div className="flex items-center bg-[#15161d] p-1 rounded-xl border border-gray-800">
                <button
                    onClick={() => setActiveTab('today')}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeTab === 'today'
                            ? 'bg-[#272935] text-white shadow'
                            : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                    Today's Plan
                </button>
                
                <button
                    onClick={() => setActiveTab('saved')}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeTab === 'saved'
                            ? 'bg-[#272935] text-white shadow'
                            : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                    Saved
                </button>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm">Sort By</span>
                <div className="relative">
                    <select className="appearance-none bg-[#15161d] border border-gray-700 text-white text-sm rounded-xl pl-4 pr-10 py-2 focus:outline-none  cursor-pointer" value={sort} onChange={(event) => setSort(event.target.value as 'duration' | 'calories' | 'rating')}>
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>   
        </div>
    );
}