import React, { useState, useEffect } from "react";
import "./comingSoonGame.css";

const ComingSoonGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [moves, setMoves] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalStyle = {
    display: isModalOpen ? "block" : "none",
  };

  useEffect(() => {
    const cardValues = window.matchMedia("(max-width: 359px)").matches
      ? ["A", "B"]
      : window.matchMedia("(max-width: 599px)").matches
      ? ["A", "B", "C"]
      : ["A", "B", "C", "D", "E", "F", "G", "H"];
    const initialCards = [];
    for (let i = 0; i < cardValues.length; i++) {
      initialCards.push({ value: cardValues[i], flipped: false });
      initialCards.push({ value: cardValues[i], flipped: false });
    }
    initialCards.sort(() => Math.random() - 0.5); // Shuffle the cards
    setCards(initialCards);
  }, []);

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const timeout = setTimeout(() => {
        checkForMatch();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [flippedIndexes]);

  useEffect(() => {
    if (matchedIndexes.length === cards.length) {
      setCompleted(true);
      setIsModalOpen(true);
    } else {
      if (completed) {
        setCompleted(false);
        setIsModalOpen(false);
      }
    }
  }, [matchedIndexes, cards]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCardClick = (index) => {
    if (
      flippedIndexes.length === 2 ||
      matchedIndexes.includes(index) ||
      completed
    )
      return;

    setFlippedIndexes((prev) =>
      prev.includes(index) ? [...prev] : [...prev, index]
    );
  };

  const checkForMatch = () => {
    const [index1, index2] = flippedIndexes;
    if (cards[index1].value === cards[index2].value) {
      setMatchedIndexes([...matchedIndexes, index1, index2]);
    }
    setFlippedIndexes([]);
    setMoves(moves + 1);
  };

  const restartGame = () => {
    setFlippedIndexes([]);
    setMatchedIndexes([]);
    setMoves(0);
    setCompleted(false);
    setIsModalOpen(false);
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  return (
    <div className="coming-soon-game">
      <h1>Coming Soon!</h1>
      <p className="coming-soon-title">
        We're working hard to bring you an amazing website. Play our memory game
        while you wait!
      </p>
      <div className="game-board-container">
        <div className="game-board">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${
                flippedIndexes.includes(index) || matchedIndexes.includes(index)
                  ? "flipped"
                  : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{card.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>Moves: {moves}</p>
      <button onClick={restartGame}>Restart Game</button>
      {isModalOpen && (
        <div className="modal" style={modalStyle}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Congratulations! You completed the game in {moves} moves.</p>
            <button onClick={restartGame}>Restart Game</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComingSoonGame;
