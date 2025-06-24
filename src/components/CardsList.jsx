import React from "react";
import Cards from "./Cards";
import fighterData from "../data/fighters";
import { useState } from "react";
import Header from "./Header";
import Quiz from "./Quiz";


// make a state for back of card to add a flip effect later
const CardsList = () => {
    const [cardIndex, SetCardIndex] = useState(1);

    const [currentCard, setCurrentCard] = useState(0);
    const currFighter = fighterData[currentCard];
    const nextCard = () =>{
        if (currentCard < fighterData.length - 1) {
            setCurrentCard(currentCard + 1);
            SetCardIndex(cardIndex + 1);
        }}
    const prevCard = () => {
        if(currentCard > 0){
            setCurrentCard(currentCard - 1);
            SetCardIndex(cardIndex - 1);
        }
    }
    const [suffled, setShuffled] = useState(false);
    const handleShuffle = () => {
        setShuffled(!suffled);
        SetCardIndex(Math.floor(Math.random() * fighterData.length));
        setCurrentCard(Math.floor(Math.random() * fighterData.length));
    };

    const correctAnswer = (fighterans) =>{
        const fighterans = parseInt(currFighter.ans);
        if (fighterData.title === fighterans) {
            return <p className="text-green-500">Correct!</p>;
        } else {
            return <p className="text-red-500">Incorrect!</p>;
        }
    }

    return (
        <>
        <Header
            index= {currFighter.originalIndex+1}
        />
        <div className="">
        <Cards
            key={currFighter.id}
            title={currFighter.title}
            description={currFighter.description}
            imageUrl={currFighter.imageUrl}
            ans={currFighter.ans}
            Link={currFighter.Link}
        />
        </div>
        <button onClick={prevCard}>left</button>
        <button onClick={nextCard}>right</button>
            <button className="Shuffle" onClick={handleShuffle}>Shuffle Card</button>
            <input type="text" placeholder={`How many title defences: ${correctAnswer(fighterans)}?`} />
            <button className="Submit">Submit</button>
            </>
            
        );
    }
        


export default CardsList;