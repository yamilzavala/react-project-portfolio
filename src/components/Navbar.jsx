import React from 'react';
import { links } from '../data/data';

const Navbar = () => {
    return (
        <nav className="bg-violet-100 fixed z-10 w-full">
            <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
                <h2 className="text-3xl font-bold">
                    Web<span className="text-violet-600">UI</span>
                </h2>
                <div className="flex gap-x-3">
                    {links.map(link => {
                        const {id, href, text} = link;
                        return (
                            <a key={id} href={href} className="capitalize text-lg tracking-wide hover:text-violet-600 duration-300">{text}</a>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;