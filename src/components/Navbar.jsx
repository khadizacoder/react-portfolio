import React from 'react'
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { NavLink } from 'react-router';

const Navbar = () => {
    const socialLink = [
        {
            id: 1,
            link: '#',
            title: 'Linkdin',
        },
        {
            id: 1,
            link: '#',
            title: 'Facebook',
        },
        {
            id: 1,
            link: '#',
            title: 'Instagram',
        },
    ]
    return (
        <header className='bg-black/70'>
            <div className='max-w-screen-lg w-11/12 mx-auto flex items-center justify-between py-4 text-base font-medium'>
                <div className='flex items-center gap-2 text-white'>
                    <span className='w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full'><MdOutlineMarkEmailRead size={20}/></span>
                    <span className='text-gray-200 hover:text-white transition-all duration-300 ease-in-out cursor-pointer'>khadizacoder@gmail.com</span>
                </div>

                {/* desktop navigation */}
                <nav className='hidden md:flex'>
                    <ul className='flex items-center justify-center gap-4'>
                        {
                            socialLink.map((item, index) => (
                                <li key={item.id} className='space-x-4 text-white'>
                                    <NavLink to={item.link} className={`text-gray-200 hover:text-white transition-all duration-300 ease-in-out`}> {item.title}</NavLink>
                                    {index < 2 && <span>/</span>}
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className='w-full h-1 bg-red-600'></div>
        </header>
    )
}

export default Navbar;