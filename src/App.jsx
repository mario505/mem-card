import Card from "./components/Card"
import GameHeader from "./components/GameHeader"
import { useEffect, useState } from "react";

const cardValues = [
  '🍌','🍉','🍎','🍓','🥜','🍍','🍐','🍋',
  '🍌','🍉','🍎','🍓','🥜','🍍','🍐','🍋'
]

function App() {

  const [cards, setCards] = useState([]);
    
  function initializeGame(){
      // shuffle the cards

      const finalCards = cardValues.map((value, index) => (
        {
            id: index, 
            value,
            isFlipped: false,
            isMatched: false
        }
      ));
      setCards(finalCards);
  }

  useEffect(()=> {
    initializeGame();
  }, []);

  function handleCardClick (card) {
    // dont allow clicking if card is already flipped or matched
    if (card.isFlipped || card.isMatched) {
      return;
    }

    // update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id){
        return {...c, isFlipped : true};
      } else {
        return c;
      }
    });

    setCards(newCards);
  }

  return (
    <div className="app">
      <GameHeader score={0} moves={3}/>

      <div className="cards-grid">
        {cards.map((card, index)=>(
          <Card key={index} card={card} onClick={handleCardClick}/>
        ))}
      </div>
    </div>
  )
}

export default App
