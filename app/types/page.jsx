import Link from "next/link";
import React from "react";
const fetchRecipeAreas = async () => {
	const res = await fetch(
		"https://www.themealdb.com/api/json/v1/1/list.php?a=list"
	);
	const response = await res.json();
	return response.meals.map((a) => a.strArea);
};

const page = async () => {
	const areas = await fetchRecipeAreas();
	return (
		<div className="grid grid-cols-1 gap-5 p-5 sm::grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
			{areas.map((a, idx) => (
				<Link
					className="  rounded text-center shadow-gray-500 bg-gray-300 text-2xl py-10 font-bold hover:bg-red-500 hover:text-white"
					key={idx}
					href={`/types/${a}`}
				>
					{a}
				</Link>
			))}
		</div>
	);
};

export default page;
