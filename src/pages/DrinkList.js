import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const DrinkList = () => {
	const [ drinks, setDrinks ] = useState([]);

	useEffect(() => {
		fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin').then((res) => res.json()).then((json) => {
			setDrinks(json.drinks);
		});
	}, []);

	return (
		<div>
			{drinks.map((drink) => (
				<div key={drink.idDrink}>
					<img src={drink.strDrinkThumb} alt={drink.strDrink} />
					<Link to={`/drinks/${drink.idDrink}`}>
						<h3>{drink.strDrink}</h3>
					</Link>
				</div>
			))}
		</div>
	);
};
