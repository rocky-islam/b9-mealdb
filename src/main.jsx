import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './component/Root/Root.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import MealDB from './component/MealDB/MealDB.jsx'
import FoodDetails from './component/MealDB/FoodDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/mealDB',
        element : <MealDB></MealDB>
      },
      {
        path : '/food/:idMeal',
        loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element : <FoodDetails></FoodDetails>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
