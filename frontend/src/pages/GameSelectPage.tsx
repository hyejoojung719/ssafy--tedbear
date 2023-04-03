import styled, { keyframes } from 'styled-components';
import PuzzleIcon from 'assets/img/puzzleIcon.svg';
import CrosswordIcon from 'assets/img/crosswordIcon.svg';
import { useNavigate } from 'react-router-dom';

const upDown = keyframes`
    from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(-10px);
  }
`;

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 56px 120px;
  position: relative;
`;

const Box = styled.div`
  border-radius: 50px;
  width: 500px;
  height: 330px;
  box-shadow: 6px 6px 20px #61616142;
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  justify-content: end;

  p:nth-child(2) {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 16px;
    color: ${props => props.theme.textColor1};
  }

  p:nth-child(3) {
    font-size: 18px;
    margin-bottom: 16px;
    /* color: #ffffffad; */
    color: ${props => props.theme.textColor2};
  }

  &:hover {
    transform: scale(1.03);
    transition: 0.5s;
  }
`;

const PuzzleDiv = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Box} {
    /* background: linear-gradient(
      220deg,
      rgba(255, 182, 170, 1) 0%,
      rgba(255, 144, 124, 1) 42%,
      rgba(255, 97, 70, 1) 76%,
      rgba(249, 50, 15, 1) 100%
    ); */
    background-color: white;
  }
`;

const CrossDiv = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Box} {
    /* background: linear-gradient(
      220deg,
      rgba(204, 232, 171, 1) 0%,
      rgba(180, 228, 124, 1) 42%,
      #8ede32 76%,
      #65b20d 100%
    ); */
    background-color: white;
  }
`;

const PuzzleIconImg = styled.img`
  width: 280px;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 80px);
  animation: 1.4s infinite ease-in-out alternate ${upDown};
`;

const CrosswordIconImg = styled(PuzzleIconImg)`
  width: 300px;
  top: calc(50% - 210px);
  left: calc(50% - 70px);
`;

const GameSelectPage = () => {
  const navigate = useNavigate();

  const goPuzzle = () => {
    navigate('/game/detail');
  };

  const goCross = () => {
    navigate('/cross-word');
  };

  return (
    <Wrapper>
      <PuzzleDiv>
        <Box onClick={goPuzzle}>
          <PuzzleIconImg src={PuzzleIcon} />
          <p>퍼즐</p>
          <p>단어를 맞춰서 귀여운 그림을 모아보세요!</p>
        </Box>
      </PuzzleDiv>
      <CrossDiv>
        <Box onClick={goCross}>
          <CrosswordIconImg src={CrosswordIcon} />
          <p>십자말풀이</p>
          <p>단어를 맞춰서 격자판을 채워보세요! </p>
        </Box>
      </CrossDiv>
    </Wrapper>
  );
};

export default GameSelectPage;
