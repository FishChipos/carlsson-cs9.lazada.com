export default function Search() {
    return (
        <div className='flex h-full justify-center border-2 border-neutral-800 rounded-md'>
            <input className='grow bg-neutral-800 px-3 focus:outline-none' placeholder='Cari di Lazada' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-2 h-full transition hover:stroke-rose-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
    )
}
