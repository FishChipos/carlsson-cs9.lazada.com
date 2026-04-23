export default function Navigation({ links }: {
    links: string[], // Ig this would also include the routes to other pages.
}) {
    return (
        <div>
            <ul className='flex justify-center w-full'>
                {links.map((link: string) => (
                    <li className='p-4 cursor-pointer transition hover:text-rose-500 hover:bg-neutral-800' key={link}>{link}</li>
                ))}
            </ul>
        </div>
    )
}
