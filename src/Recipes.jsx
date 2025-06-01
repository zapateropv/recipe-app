import React from 'react'
import { useState, useEffect, createContext } from 'react'
import recipes from './data'
import Modal from './Modal'
import { Link, Route, Routes } from 'react-router-dom'

export const recipeContext = createContext();

const Recipes = () => {


  const [foods, setFoods] = useState([])
  const [search, setSearch] = useState("")
  const [dropDown, setDropDown] = useState("All Categories")
  const [selected, setSelected] = useState(null)
  const [toggle, isToggle] = useState(false);




  const filteredFoods = foods.filter((food) => {
    const matchesSearch =
      food.title.toLowerCase().includes(search.toLowerCase()) ||
      food.category.toLowerCase().includes(search.toLowerCase());

    const matchesDropdown =
      dropDown === "All Categories" || dropDown === "" || food.category === dropDown;

    return matchesSearch && matchesDropdown;
  });

  const showModal = (food) => {
    //console.log(food)
    setSelected(food)
    isToggle(true)
  }





  useEffect(() => {
    setFoods(recipes)

  }, [])



  return (
    <recipeContext.Provider value={foods}>
      <div className='flex flex-col justify-center items-center'>
        <div>
          <h1 className='text-4xl font-jetbrains mt-10 mb-10 font-bold '>Featured Recipes</h1>
        </div>
        <div className='flex justify-between items-center gap-5'>
          <input placeholder='Search for recipes...' className='bg-white w-100 text-l outline-none 
        p-3 rounded-2xl pl-5' value={search} onChange={(e) => setSearch(e.target.value)} />
          <select name="foods" id="menu" className='bg-white w-50 h-10 outline-none rounded-2xl pl-3' onChange={(e) => setDropDown(e.target.value)}>
            <option value="All Categories">All Categories</option>
            <option value="Pasta">Pasta</option>
            <option value="Pizza">Pizza</option>
            <option value="Dessert">Dessert</option>
            <option value="Salad">Salad</option>
            <option value="Main Course">Main Course</option>
            <option value="Stir-Fry">Stir-Fry</option>
            <option value="Mexican">Mexican</option>
          </select>
          <button className='bg-gray-700 text-white p-3 text-md rounded-md hover:bg-gray-900 cursor-pointer'>Clear Search</button>
        </div>
        <div className='flex justify-center items-center flex-wrap'>
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food, index) => (
              <div key={index} className='bg-white m-20 w-100 h-80 flex flex-col rounded-2xl items-center cursor-pointer'
                onClick={() => showModal(food)}>
                <img src={food.image} className='w-120 h-70 rounded-tl-2xl rounded-tr-2xl' />
                <span className='text-center text-2xl'>{food.title}</span>
              </div>
            ))
          ) : (
            <p className="text-xl text-gray-500 mt-10">No recipes found</p>
          )}
        </div>

{toggle && (
  <Modal
    foods={selected}
    onClose={() => {
      isToggle(false);
      setSelected(null);
    }}
  />
)}

      </div>
    </recipeContext.Provider>
  )
}

export default Recipes
