'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname().split("/");
  const currentArea =pathname[2];
  const recipeID = pathname[3];
  console.log(pathname)
  return (
    <div className='py-5 bg-slate-300 flex items-center justify-between px-2 '>
    <div>
        <Link href="/">
        <h1 className='text-red-700 font-bold text-5xl text-center'>
            Food Recipe
        </h1>
        </Link>

    </div>
    {pathname && currentArea && ( 
    <Link 
    className='bg-red-700 text-white p-4 text-x5 rounded font-bold
    '
    href={recipeID ? `/types/${currentArea}` : "/types"}>
      Back to {recipeID? `${currentArea} recipes` : "recipetypes"}
      </Link>
    )}

    </div>
  )
}

export default Header;
