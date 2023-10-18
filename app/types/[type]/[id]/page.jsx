import React from "react";
import Image from "next/image";

const getRecipeDetails = async (id) => {
	const res = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
	);
	return res.json();
};

const page = async ({ params }) => {
	const recipeDetails = await getRecipeDetails(params.id);
	const details =
		recipeDetails && recipeDetails.meals ? recipeDetails.meals[0] : {};
	const ingredients = Object.keys(details)
		.filter((key) => key.indexOf("Ingredient") > 0)
		.map((ingKey) => details[ingKey])
		.filter(Boolean);
	// console.log(details);

	return (
		<div className="grid  grid-cols-1 md:grid-cols-2">
			<div className="border-r-2  flex justify-center items-center p-5">
				<Image
					src={details.strMealThumb}
					width={300}
					height={300}
					alt="Recipe Image"
					className="h-full w-full  object-contain rounded-lg"
				/>
			</div>
			<div className="p-5">
				<h1>
					<span className="font-medium text-2xl">
						{details.strMeal}
					</span>
				</h1>
				<div className="tags mt-3">
					<h1 className="text-xl font-medium">Ingredients List :</h1>
					{ingredients.map((ing, idx) => (
						<span
							className="bg-red-600 text-white px-1 py-1 rounded inline-block mt-3 mr-2 mb-2 "
							key={idx}
						>
							{ing}
						</span>
					))}
				</div>
				{details.strYoutube && (
					<div className="mt-3">
						<h1 className="text-xl font-medium">Video Link :</h1>
						<a
							target="_blank"
							rel="noreferrer"
							className="text-red-700 "
							href={details.strYoutube}
						>
							How to make {details.strMeal}
						</a>
					</div>
				)}
				<div className="h-fit mt-3 ">
					<h1 className="text-xl font-medium">Instructions :</h1>
					<div className="border-t-2 mt-3 p-2 text-justify font-medium">
						<p>{details.strInstructions}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
