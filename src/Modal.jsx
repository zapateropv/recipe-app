import React from 'react';

const Modal = ({ foods, onClose }) => {
  if (!foods) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="flex flex-col justify-center items-center bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        <div className="flex justify-between items-center w-full mb-4">
          <h1 className="font-jetbrains text-2xl">{foods.title}</h1>
          <button onClick={onClose} className="text-2xl font-bold cursor-pointer">×</button>
        </div>
        <div>
          <img
            src={foods.image}
            alt={foods.title}
            className="w-full h-60 rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-start items-start mt-4 w-full">
          <h1 className="font-semibold mb-2">Ingredients</h1>
          <ul className="flex flex-col list-disc list-inside">
            {foods.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 w-full">
          <h1 className="font-semibold mb-2">Instructions</h1>
          <p>{foods.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
