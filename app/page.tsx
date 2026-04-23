import Image from 'next/image'

import Navigation from './navigation'
import LogoName from './logoname'
import Search from './search'
import Cart from './cart'
import Slideshow from './slideshow'
import Product from './product'

export default function Home() {
    return (
        <div>
            <div className='h-12 mt-4 mx-8'>
                <Navigation
                    links={['MASUKAN', 'LEBIH MURAH DI APP', 'MENJADI SELLER', 'CUSTOMER CARE', 'LACAK PESANAN', 'LOGIN', 'DAFTAR']}
                />
            </div>
            <div className='flex h-12 mt-8 mx-8 gap-8'>
                <LogoName />
                <div className='grow'>
                    <Search />
                </div>
                <Cart />
            </div>
            <main>
                <div className='flex h-96 mt-8 mx-8 gap-4'>
                    <div className='grow h-full'>
                        <Slideshow 
                            images={[
                                ['/test.png', 'Test image'],
                                ['/test2.png', 'Test image'],
                                ['/test3.png', 'Test image'],
                            ]}
                        />
                    </div>
                    <div className='w-1/6 h-full relative'>
                        <Image 
                            src='/test4.png'
                            alt='Apaan cok'
                            fill={true}
                            className='object-contain'
                        />
                    </div>
                </div>
                <div className='mt-8 mx-8 text-2xl'>
                    <div>Flash Sale</div>
                    <div className='flex mt-8 gap-8'>
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <Product 
                                key={index}
                                width='w-1/6'
                                image={['/product_test.png', 'Test']}
                                name='Test Product'
                                price={100000}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <div className='flex justify-end my-8 mx-8'>
                <div className='text-neutral-500'>&#169; Lazada (Not really) 2026</div>
            </div>
        </div>
    )
}
