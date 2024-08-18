import { useState } from "react";
import { Link } from "react-router-dom";

const Foods = ({ food }) => {
  console.log(food);

  const { idMeal, strMeal, strInstructions, strMealThumb } = food;

  const [ins, setIns] = useState(150);

  return (
    <>
      <div className="">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={strMealThumb} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{strMeal}</h2>
            <p>{strInstructions.slice(0, ins)}.......</p>
            <div className="card-actions justify-end">
              <Link to={`/food/${idMeal}`}>
                <button className="btn btn-primary">Show Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foods;
