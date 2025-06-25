import React from "react";
import Cards from "./Cards";
import fighterData from "../data/fighters";
import { useState } from "react";
import Header from "./Header";
import Quiz from "./Quiz";

const CardsList = () => {
    const [cardIndex, SetCardIndex] = useState(1);
    const [currentCard, setCurrentCard] = useState(0);
    const [userAnswer, setUserAnswer] = useState(""); 
    const [showResult, setShowResult] = useState(false); 
    const [isFlipped, setIsFlipped] = useState(false); // Add flip state
    
    const currFighter = fighterData[currentCard];
    
    const nextCard = () => {
        if (currentCard < fighterData.length - 1) {
            setCurrentCard(currentCard + 1);
            SetCardIndex(cardIndex + 1);
            setUserAnswer("");
            setShowResult(false);
            setIsFlipped(false); // Reset flip when changing cards
        }
    }
    
    const prevCard = () => {
        if(currentCard > 0){
            setCurrentCard(currentCard - 1);
            SetCardIndex(cardIndex - 1);
            setUserAnswer("");
            setShowResult(false);
            setIsFlipped(false); // Reset flip when changing cards
        }
    }
    
    const [shuffled, setShuffled] = useState(false);
    const handleShuffle = () => {
        setShuffled(!shuffled);
        SetCardIndex(Math.floor(Math.random() * fighterData.length) + 1);
        setCurrentCard(Math.floor(Math.random() * fighterData.length));
        setUserAnswer("");
        setShowResult(false);
        setIsFlipped(false); // Reset flip when shuffling
    };

    const checkAnswer = () => {
        const userNum = parseInt(userAnswer);
        const correctNum = parseInt(currFighter.ans);
        return userNum === correctNum;
    };

    const handleSubmit = () => {
        if (userAnswer.trim() !== "") {
            setShowResult(true);
        }
    };

    const isCorrect = showResult && checkAnswer();
    const isIncorrect = showResult && !checkAnswer();

    return (
        <>
        <div className="h-screen flex flex-col overflow-hidden">
            
            <div className="flex-shrink-0">
                <Header
                    index={currFighter.originalIndex + 1}
                />
            </div>
            
            <div className="flex-1 flex justify-center items-center px-4 py-2">
                <div className="w-full flex justify-center">
                    <Cards
                        key={currFighter.id}
                        title={currFighter.title}
                        description={currFighter.description}
                        imageUrl={currFighter.imageUrl}
                        ans={currFighter.ans}
                        Link={currFighter.Link}
                        isFlipped={isFlipped}
                        onFlip={() => setIsFlipped(!isFlipped)}
                    />
                </div>
            </div>
            

            <div className="flex-shrink-0 pb-2 px-4 space-y-2">
                <div className="flex justify-center items-center space-x-3">
                    <button 
                        onClick={prevCard}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded text-sm"
                    >
                        Left
                    </button>
                    <button 
                        onClick={nextCard}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded text-sm"
                    >
                        Right
                    </button>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                    <div className="flex space-x-2">
                        <button 
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1.5 px-4 rounded text-sm" 
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                        <button 
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1.5 px-3 rounded text-sm" 
                            onClick={handleShuffle}
                        >
                            Shuffle
                        </button>
                    </div>
                    
                    <input 
                        type="number" 
                        placeholder="How many title defenses?" 
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 w-48 text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-center">
                    {isCorrect && <p className="text-green-600 font-semibold text-sm">Correct!</p>}
                    {isIncorrect && <p className="text-red-600 font-semibold text-sm">Incorrect! Answer: {currFighter.ans}</p>}
                </div>
            </div>
        </div>
        </>
    );
}

export default CardsList;