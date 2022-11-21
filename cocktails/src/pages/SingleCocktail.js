import React from 'react';
import { Form } from 'react-router-dom';
import Loading from '../components/Loading';
import {useParams, Link} from "react-router-dom";
const url = "`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`"

function SingleCocktail() {

  const [loading, setloading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() =>{
    setloading(true);
    async function getCoctail(){
      try {
        
      } catch (error) {
        
      }
    }
  })
  return (
    <div>SingleCocktail</div>
  )
}

export default SingleCocktail