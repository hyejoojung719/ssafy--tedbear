import LevelCard from 'components/level/LevelCard';
import { Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { authApi } from 'utils/api/customAxios';

// Function
const LevelWord = () => {
  const [Loaded, setLoaded] = useState(false); // 데이터 GET
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    console.log('useEffectWord');
    async function fetchData() {
      await authApi
        .get(`member/test/problem`)
        .then(response => {
          const data = response.data.wordMeanList
            .slice(0, 6)
            .map((item, index) => {
              return { ...item, flipped: false, id: index }; // flipped 초기값은 false => 뒤집으면 true 됨
            });
          console.log(data);
          setCardList(data);
        })
        .catch(error => {
          console.log(error.data);
        });
    }
    setLoaded(true);
    fetchData();
  }, []);

  const handleClick = index => {
    let updateCards = cardList.map(card => {
      if (card.id === index) {
        card.flipped = !card.flipped; // 뒤집으면 true <-> false 바뀜
      }
      return card;
    });
    setCardList(updateCards); // 카드 리스트를 업데이트 (flipped 속성이 업데이트 된 리스트가 cardList)
  };

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          padding: 100,
          margin: '75px 30px 30px 30px',
        }}
      >
        <div className="game-board">
          {cardList.map((card, index) => (
            <LevelCard
              key={index}
              id={index}
              content={card.content}
              mean={card.mean}
              score={card.score}
              flipped={card.flipped}
              clicked={handleClick}
            />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default LevelWord;