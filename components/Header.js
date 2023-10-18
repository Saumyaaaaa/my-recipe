'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='py-5 bg-slate-300 '>
    <div>
        <Link href="/">
        <h1 className='text-red-700 font-bold text-5xl text-center'>
            Foodie
        </h1>
        </Link>

    </div>
    </div>
  )
}

export default Header;
