import React from 'react';
import { Form } from 'react-router-dom';
import Loading from '../components/Loading';
import {useParams, Link} from "react-router-dom";
const url = "`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`"

function SingleCocktail() {

  const{id} = useParams();

  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() =>{
    setLoading(true);
    async function getCocktail(){
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data);
        if (data.drinks) {
          const{strDrinks:name, strDrinkThumb: image, strAlcoholic:info, strCategory:category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = data.drinks[0];
          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
          const newCoctail = {
            name, image, info, category, glass, instructions, ingredients
          }

          setCocktail(newCoctail)

        }else{
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {

        setLoading(false)

        console.log(error);
        
      }
    }
  },[id])
  return (
    <div>
      <h2>{id}</h2>
    </div>
  )
}

export default SingleCocktail