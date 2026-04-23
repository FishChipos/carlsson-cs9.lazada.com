import Image from 'next/image'

export default function Product({ width, image, name, price }: {
    width: string,
    image: [string, string],
    name: string,
    price: number,
}) {
    return (
        <div className={`${width} h-full flex flex-col gap-1`}>
            <Image
                src={image[0]}
                alt={image[1]}
                width={200}
                height={400}
                className='w-full h-4/5 object-contain'
            />
            <div className='text-base text-bold'>{name}</div>
            <div className='text-lg text-rose-500'>Rp. {price}</div> 
        </div>
    )
}
