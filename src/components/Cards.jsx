import React from "react";



const Cards = ({ title, description, imageUrl, Link}) => {
    return (
        <>
        <div className="max-w-md card flex flex-col items-center p-4 shadow-lg rounded-lg mx-auto">        <img src = {imageUrl} alt={title}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{Link}</p>
        </div>
        </>
    )
}

export default Cards;