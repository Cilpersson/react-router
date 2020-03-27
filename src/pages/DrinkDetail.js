import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// const drinkIngredients = (arr) => {
//   let ingredients = "";
//   let ingredient = "";
//  arr.forEach((drinkIng, index) => (
//    ingredient = `${drinkIng}.strIngredient${index + 1}`
//    if(ingredient !== null) {
//      ingridients += ingredient;
//    }
//  ))
//  return ingredients;
// }

export const DrinkDetail = () => {
	const { drinkId } = useParams();
	const [ drinkInfo, setDrinkInfo ] = useState([]);

	useEffect(
		() => {
			fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
				.then((res) => res.json())
				.then((json) => {
					console.log(json);
					setDrinkInfo(json.drinks);
				});
		},
		[ drinkId ]
	);

	return (
		<div>
			{drinkInfo.map((drink) => (
				<div key={drink.idDrink}>
					<h1>{drink.strDrink}</h1>
					<img src={drink.strDrinkThumb} alt={drink.strDrink} />
					<h3>Instructions</h3>
					<p>{drink.strInstructions}</p>
				</div>
			))}
		</div>
	);
};
