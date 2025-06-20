import React from "react";



const Header = ({index}) => {
    return (
        <>
        <div className="text-2xl text-center text-black p-4 font-bold" >
        <h1>UFC Champions</h1>
        <div className="text-lg text-gray-600">
        <h4>Current champion number: {index}</h4>
        <div className="text-sm text-gray-600">
        <p>you a casual?</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default Header;