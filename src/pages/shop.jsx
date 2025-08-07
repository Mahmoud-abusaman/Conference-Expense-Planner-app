import React, { useState } from "react";
import "./shop.css";
import Header from "../components/hedear";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartslice";
const plants = [
    {
        name: "Snake Plant",
        price: "$15",
        description: "Produces oxygen at night, improving air quality.",
        image: "paradise-nursery-shopping-application/blur-background-2.webp",
        sale: true,
    },
    {
        name: "Spider Plant",
        price: "$12",
        description: "Filters formaldehyde and xylene from the air.",
        image: "paradise-nursery-shopping-application/blur-background-2.webp",
        sale: true,
    },
    {
        name: "Peace Lily",
        price: "$18",
        description: "Removes mold spores and purifies the air.",
        image: "paradise-nursery-shopping-application/blur-background-2.webp",
        sale: true,
    },
    {
        name: "Boston Fern",
        price: "$14",
        description: "Effective in removing indoor air pollutants.",
        image: "paradise-nursery-shopping-application/blur-background-2.webp",
        sale: true,
    },
    {
        name: "Rubber Plant",
        price: "$16",
        description: "Removes airborne toxins and fights tropical diseases.",
        image: "paradise-nursery-shopping-application/blur-background-2.webp",
        sale: false,
    },
    {
        name: "Aloe Vera",
        price: "$10",
        description: "Known for healing properties and purifying air.",
        image: "paradise-nursery-shopping-application/blur-background-2.webp",
        sale: true,
    },
];

function Shop() {
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    return (
        <div className="App">

            <Header cartCount={cart.length} />
            <main>
                <h2 className="section-title">Air Purifying Plants</h2>
                <div className="plant-grid">
                    {plants.map((plant, index) => (
                        <div key={index} className="plant-card">
                            {plant.sale && <div className="badge">SALE</div>}
                            <img src={plant.image} alt={plant.name} className="plant-image" />
                            <h3>{plant.name}</h3>
                            <p className="price">{plant.price}</p>
                            <p className="desc">{plant.description}</p>
                            <button className="add-button" onClick={() => {
                                dispatch(addToCart(plant)); console.log(cart);
                            }}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Shop
