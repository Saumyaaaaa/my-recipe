import React from 'react'
import Image from 'next/image';


const getRecipeDetails= async (id)=>{
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  );
  return res.json();
}


const page = async ({ params }) => {
  const recipeDetails = await getRecipeDetails(params.id);
  const details = recipeDetails.meals[0];
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredients") > 0)
    .map((ingKey) => details[ingKey])
    .filter(Boolean);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image
          src={details.strMealThumb}
          width={500}
          height={500}
          alt='Recipe Image'
          className='w-full'
        />
      </div>
      <div className='p-5'>
        <h1>
          Recipe Name:{" "}
          <span className='font-bold text-2xl'>{details.strMeal}</span>
        </h1>
        <div className='tags mt-3'>
          <p>
            Ingredients List :
          </p>
          {ingredients.map((ing,idx) => (
          <span key={idx}>{ing}</span>
          ))}

        </div>
      </div>
    </div>
  );
};

export default page;
