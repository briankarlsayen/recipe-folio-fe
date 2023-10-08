import React, { useEffect, useState } from 'react';
import recipes from '../data/recipes';
import { useParams } from 'react-router-dom';

function Recipe() {
  const recipeList = recipes;
  const params = useParams();
  console.log('params', params);
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    setRecipe(getRecipe());
  }, []);

  const getRecipe = () => {
    const res = recipeList.find(
      (e) => e.id.toString() === params.id.toString()
    );
    return res;
  };

  return recipe ? (
    <div className='text-center'>
      <h1 className='text-2xl pt-20'>{recipe.title}</h1>
      <p className='pt-4'>Description: {recipe.description}</p>
      <p>Recipe by: {recipe.userName}</p>
      <p>Preparation time: {recipe.creationMin}</p>
      <p>Rating: {recipe.rating}</p>
    </div>
  ) : (
    <div>Error</div>
  );
}

export default Recipe;
