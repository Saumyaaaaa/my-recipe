import React from 'react'
import Image from 'next/image'


const RecipeList = ({recipes,type}) => {
  return (
    <div className='grid grid-cols-1 gap-5 p-5 sm::grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
     {recipes.map((recipe,idx) => {
        return(
            <div  className="rounded bg-slate-400 "key={idx}>
                <Image 
                alt='Recipe Image'
                width={500} 
                height={500}
                src={recipe.strMealThumb }
                />

            </div>
        )
     })}
    </div>
  )
}

export default RecipeList
