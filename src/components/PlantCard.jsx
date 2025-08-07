import React from "react";

const PlantCard = ({ plant }) => {
    return (
        <div className="relative bg-white border rounded-lg p-4 shadow-sm text-center">
            {/* SALE Badge */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
            </div>

            <img src={plant.image} alt={plant.name} className="h-32 mx-auto" />
            <h2 className="mt-2 text-lg font-semibold">{plant.name}</h2>
            <p className="text-red-600 font-bold">${plant.price}</p>
            <p className="text-sm text-gray-600 mt-1">{plant.description}</p>

            <button className="mt-3 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
};

export default PlantCard;
