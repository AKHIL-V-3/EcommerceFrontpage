import { IconBell, IconMenu2,  IconShoppingCart, IconUser } from '@tabler/icons-react'
import React from 'react'

function Header() {
    return (
        <>
            <div className='w-full h-20  border-b-2 flex justify-between items-center px-10'>
                <div className='flex gap-5 w-1/3'>
                    <IconMenu2 />
                    <p>Home</p>
                    <p>Shop</p>
                </div>
                <div className='flex w-1/3 justify-center items-center'>
                    <h1 className='text-2xl font-semibold'>CYCLE</h1>
                </div>
                <div className='flex w-1/3 justify-end gap-5'>
                    <div className='w-12 h-12 rounded-full flex justify-center items-center border'><IconBell /></div>
                    <div className='w-12 h-12 rounded-full flex justify-center items-center border relative'>
                        <IconShoppingCart />
                        <div className='w-5 h-5 absolute top-0 right-0 rounded-full bg-red-500 flex justify-center items-center text-white text-xs p-1'>
                            12
                        </div>
                    </div>
                    <div className='w-12 h-12 rounded-full flex justify-center items-center border' ><IconUser /></div>
                </div>

            </div>
        </>
    )
}

export default Header