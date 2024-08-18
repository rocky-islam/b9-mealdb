import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();

  console.log(food.meals[0]);

  const { strMeal, strInstructions, strMealThumb, strArea, strCategory } =
    food.meals[0];

  return (
    <div>
      <div className="p-1 card card-side bg-base-100 w-3/4 mx-auto shadow-xl grid grid-cols-4 items-start my-20">
        <figure className="col-span-2">
          <img
            src={strMealThumb}
            alt="food"
          />
        </figure>
        <div className="card-body col-span-2">
          <h2 className="card-title">{strMeal}</h2>
          <h3>Category: {strCategory}</h3>
          <h3>Area: {strArea}</h3>
          <p>{strInstructions}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">BUY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
