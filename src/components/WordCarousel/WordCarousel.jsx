import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCarousel.css";

const WordCarousel = ({words})=> {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [learnedWordsCount, setLearnedWordsCount] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(Math.max(currentIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex(Math.min(currentIndex + 1, words.length - 1));
    };

    const handleWordsLearned = () => {
        setLearnedWordsCount(learnedWordsCount + 1);
    };

    const isFirstCard = currentIndex === 0;
    const isLastCard = currentIndex === words.length - 1;

    return (
        <div className="word-carousel">
            <div >
                <div>
                    <button className="carousel-button" onClick={handlePrev}
                        disabled={isFirstCard}>
                        ←
                    </button>
                </div>

                {words.map((words, index) => (
                    <div key={index} style={{ display: index === currentIndex ? "block" : "none" }} >
                        <WordCard
                            word={words.word}
                            transcription={words.transcription}
                            translation={words.translation}
                            counter={handleWordsLearned}
                        />
                    </div>
                ))}

                <div>
                    <button className="carousel-button" onClick={handleNext}
                        disabled={isLastCard}>
                        →
                    </button>
                </div>

                <div>
                    {currentIndex + 1}/{words.length}
                </div>

                <div>
                    <h3>Words Learned:{learnedWordsCount}</h3>
                </div>
            </div>
        </div>
    );
}

export default WordCarousel;

// const WordCarousel = () => {
//     const [currentCardIndex, setCurrentCardIndex] = useState(0);

//     const handlePrevCard = () => {
//         setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
//     };

//     const handleNextCard = () => {
//         setCurrentCardIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
//     };


//     const handleReset = () => {
//         setCurrentCardIndex(0);
//     };

//     return (
//         <div className="word-carousel">
//             {words.length > 0 ? (
//                 <>
//                     <button onClick={handlePrevCard}>←</button>
//                     <WordCard
//                         word={words[currentCardIndex].word}
//                         translation={words[currentCardIndex].translation}
//                         transcription={words[currentCardIndex].transcription}
//                     />
//                     <button onClick={handleNextCard}>→</button>
//                 </>
//             ) : (
//                 <p>No words to display.</p>
//             )}
//             <button onClick={handleReset}>Reset</button>
//         </div>
//     );
// };

// // WordCarousel.defaultProps = {
// //     initialIndex: 0,
// // };

// export default WordCarousel;






