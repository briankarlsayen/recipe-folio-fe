import { useEffect } from 'react';
import recipes from './data/recipes';
import { Link } from 'react-router-dom';

function App() {
  const recipeList = recipes;

  return (
    <div className='app'>
      <Link to='/recipe/new' className='w-fit'>
        <button className='btn btn-primary m-4'>New Recipe</button>
      </Link>

      <div className='flex items-center justify-center'>
        <ul className='flex flex-col max-w-xl w-full'>
          {recipeList.map((recipe) => (
            <Card key={recipe.id} props={recipe} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const Card = ({ props }) => {
  return (
    <li className='p-2 items-center'>
      <div className='card bg-neutral text-neutral-content h-full'>
        <Link to={`/recipe/${props.id}`}>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default App;
