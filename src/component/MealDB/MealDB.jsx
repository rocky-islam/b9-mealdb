import { useEffect, useState } from "react";
import Foods from "./Foods";

const MealDB = () => {
  const [food, setFood] = useState([]);
  const [item, setItem] = useState(food)

  console.log(food);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => {
        setFood(data.meals)
        setItem(data.meals)
    });
  }, []);

  const search = e =>{
    setItem(food.filter(f => f.strMeal.toLowerCase().includes(e.target.value)))
  }

  return (
    <div>
      <div className="my-20">
        <h1 className="text-3xl text-red-400 font-semibold text-center">
          Total Food: {item.length}
        </h1>
        <div className="flex justify-center">
          <input
          onChange={search}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-10/12 "
          />
        </div>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {item.map((food) => (
          <Foods key={food.idMeal} food={food}></Foods>
        ))}
      </div>
    </div>
  );
};

export default MealDB;
