import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center space-y-4 mt-10'>
      <h2 className='text-3xl font-bold text-center'>404 Not Found</h2>
      <p className='text-gray-500'>Could not find requested resource</p>
      <Link className='px-4 py-2 rounded-2xl bg-[#d0fe00] text-black' href="/">Return Home</Link>
    </div>
  )
}