import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const RecipeList = ({recipes,type}) => {
  return (
    <div className='grid grid-cols-1 gap-5 p-5 sm::grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
     {recipes.map((recipe,idx) => {
        return(
            <div  className="rounded overflow-hidden bg-slate-300 "key={idx}>
                <Image 
                alt='Recipe Image'
                width={500} 
                height={500}
                src={recipe.strMealThumb }
                />
                <div className='p-5'>
                    
                    
                    <h2 className='text-2xl font-bold'>{recipe.strMeal}</h2>
                    <Link  className="text-white bg-red-700 rounded py-1 px-3  block mt-5 text-center hover:bg-red-600"href={`/types/${type}/${recipe.idMeal}`}>
                    Recipe Details
                    </Link>
                </div>

            </div>
        )
     })}
    </div>
  )
}

export default RecipeList
