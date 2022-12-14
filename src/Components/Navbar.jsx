import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Qœur</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>contact us</li>
                        <li>Shop</li>
                    </ul>
                </div>

                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'> Sign In</button>
                    <button className='px-6 py-3'> Sign Up</button>

                </div>

                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <AiOutlineMenu className='w-5' /> : <AiOutlineClose className='w-5' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300'>Home</li>
                <li className='border-b-2 border-zinc-300'>About</li>
                <li className='border-b-2 border-zinc-300'>Support</li>
                <li className='border-b-2 border-zinc-300'>contact US</li>
                <li className='border-b-2 border-zinc-300'>Shop</li>
                <div className='flex flex-col my-4'>
                    <button className=' bg-transparent text-indigo-600 px-8 py-3 mb-4'> Sign In</button>
                    <button className='px-8 py-3'> Sign Up</button>

                </div>

            </ul>


        </div>
    )
}

export default Navbar