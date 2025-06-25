import React from "react";

const Cards = ({ title, description, imageUrl, ans, Link, isFlipped, onFlip }) => {
    return (
        <div className="flip-card w-64 h-72 md:w-72 md:h-80 perspective-1000">
            <div 
                className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}
                onClick={onFlip}
            >
                {/* Front of card */}
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg p-3 md:p-4 flex flex-col items-center justify-center">
                    <img 
                        src={imageUrl} 
                        alt={title}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mb-2 md:mb-3"
                    />
                    <h2 className="text-base md:text-lg font-bold text-center mb-1 md:mb-2">{title}</h2>
                    <p className="text-gray-600 text-center text-xs md:text-sm">{description}</p>
                </div>

                {/* Back of card */}
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg p-3 md:p-4 flex flex-col items-center justify-center text-white rotate-y-180">
                    <h2 className="text-lg md:text-xl font-bold mb-3">{title}</h2>
                    <div className="text-center space-y-2 md:space-y-3">
                        <p className="text-sm md:text-base">
                            <span className="font-semibold">Title Defenses:</span> {ans}
                        </p>
                        <a 
                            href={Link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-blue-600 px-2 py-1 md:px-3 md:py-1.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-xs md:text-sm"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View UFC Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;