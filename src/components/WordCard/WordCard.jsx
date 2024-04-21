import React, { useState, useEffect, useRef } from "react";
import "./WordCard.css";

const WordCard = (props) => {
    const [showTranslation, setShowTranslation] = useState(false);

    const translateButton = useRef(null);

    useEffect(() => {
        if (translateButton.current) {
            translateButton.current.focus();
        }
    }, [props.english]);

    const handleToggleTranslation = () => {
        setShowTranslation((prevShowTranslation) => !prevShowTranslation);
        props.counter();
    };

    return (
        <div className="word-card" onClick={handleToggleTranslation} >
            <p>{props.english}</p>
            <p>{props.transcription}</p>
            {showTranslation && <p>{props.russian}</p>}

        </div >
    );
};


export default WordCard;