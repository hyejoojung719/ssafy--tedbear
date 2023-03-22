import styled from 'styled-components';
import BookmarkFull from 'assets/img/bookmarkFull.svg';
import BookmarkEmpty from 'assets/img/bookmarkEmpty.svg';
import LearningMic from 'assets/img/learningMic.svg';
import Dot from 'assets/img/dot.svg';
import VideoLevel from 'assets/img/videoLevel.svg';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getVideoDesc, VideoDesc } from 'utils/api/leaningApi';

interface ToggleStyledProps {
  toggle: boolean;
}

const Wrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 56px 120px;
`;

const TitleBox = styled.div`
  /* border: 1px solid blue; */

  height: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 24px;
  }
`;

const ViedoLevelImg = styled.img`
  width: 32px;
  margin-right: 16px;
`;

const ContentBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  height: 92%;
`;

const ContentLeft = styled.div`
  /* border: 1px solid green; */
  width: 60%;
  height: 100%;
  margin-right: 16px;
`;

const BookmarkEmptyImg = styled.img`
  width: 20px;
  cursor: pointer;
`;

const YoutubeBox = styled.div`
  /* background-color: red; */
  height: 60%;
  margin-bottom: 8px;
  position: relative;

  ${BookmarkEmptyImg} {
    position: absolute;
    z-index: 9999;
    top: 0px;
    right: 24px;
  }

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: 0;
    position: absolute;
    top: 0px;
  }
`;

const SpeakBox = styled.div`
  background-color: ${props => props.theme.pointLigntGrdColor8};
  border-radius: 16px;
  height: 40%;
  padding: 24px;
  box-shadow: 2px 3px 3px ${props => props.theme.shadowColor};

  > div {
    background-color: ${props => props.theme.whiteColor};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
`;

const SentenceBox = styled.div`
  /* border: 1px solid black; */
  height: 50%;
  max-height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* overflow: scroll; */

  p {
    /* border: 1px solid blue; */
    font-weight: bold;
    font-size: 14px;
    width: 90%;
  }
`;

const MicBox = styled.div`
  /* border: 1px solid black; */
  background-color: ${props => props.theme.learningBoxDefaultColor};
  height: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  p {
    /* border: 1px solid blue; */
    font-size: 14px;
    width: 90%;
  }
`;

const LearningMicImg = styled.img`
  width: 24px;
  cursor: pointer;
`;

const ContentRight = styled.div`
  /* border: 1px solid purple; */
  background-color: white;
  width: 40%;
  height: 100%;
  border-radius: 16px;
  box-shadow: 2px 3px 3px ${props => props.theme.shadowColor};
`;

const ContentRightTop = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 24px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      color: ${props => props.theme.textColor2};
      padding: 0 8px;
      font-size: 14px;
    }
  }
`;

const ToggleBtn = styled.div<ToggleStyledProps>`
  background-color: ${ToggleStyledProps =>
    ToggleStyledProps.toggle ? '#FEAD55' : '#8E8E8E'};
  transition: 0.3s;
  border-radius: 50px;
  position: relative;
  width: 48px;
  height: 20px;
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const Circle = styled.div<ToggleStyledProps>`
  background: ${props => props.theme.whiteColor};
  width: 20px;
  height: 20px;
  z-index: 999;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px #00000053;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  ${ToggleStyledProps =>
    ToggleStyledProps.toggle &&
    `
      transform: translateX(28px);
    `}
`;

const DotImg = styled.img`
  width: 4px;
  cursor: pointer;
`;

const ContentRightMiddle = styled.ul`
  /* border: 1px solid black; */
  overflow-y: scroll;
  height: 80%;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: ${props => props.theme.mainLightColor};
    border-radius: 10px;
  }
`;

const ScriptEl = styled.li`
  /* border: 1px solid red; */
  margin: 8px 32px 24px;
  /* height: 30%; */
`;

const English = styled.div`
  /* border: 1px solid black; */
  padding-bottom: 14px;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.textColor1};
`;

const Korean = styled(English)`
  cursor: default;
  color: ${props => props.theme.textColor2};
`;

const ContentRightFooter = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 24px;
`;

const CompleteBtn = styled.button`
  background-color: ${props => props.theme.pointLightColor};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 16px;
  box-shadow: 2px 3px 3px ${props => props.theme.shadowColor};

  &:hover {
    background-color: #f08e25;
    transition: all 0.3s;
    transform: translateY(3px);
  }
`;

const LearningPage = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const clickedToggle = () => {
    setToggle(!toggle);
  };

  // 유튜브 아이디
  const { state } = useLocation();

  // 받아온 data
  const [videoDesc, setVideoDesc] = useState<VideoDesc>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVideoDesc('mt4o-R9wzrs');
      setVideoDesc(data);
    };
    fetchData();
  }, []);

  // 하이라이팅
  const [highlight, setHighlight] = useState<boolean>(false);

  // 문장 클릭
  const onSentenceClick = () => {
    setHighlight(true);
  };

  //하이라이팅 하다 끝남

  return (
    <Wrapper>
      <TitleBox>
        <ViedoLevelImg src={VideoLevel} />
        <p>{videoDesc?.title}</p>
      </TitleBox>
      <ContentBox>
        <ContentLeft>
          <YoutubeBox>
            <iframe
              width="560"
              height="315"
              src={videoDesc?.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <BookmarkEmptyImg src={BookmarkEmpty} />
          </YoutubeBox>
          <SpeakBox>
            <div>
              <SentenceBox>
                <BookmarkEmptyImg src={BookmarkEmpty} />
                <p>{videoDesc?.sentenceInfoList[0].content}</p>
              </SentenceBox>
              <MicBox>
                <LearningMicImg src={LearningMic} />
                <p></p>
              </MicBox>
            </div>
          </SpeakBox>
        </ContentLeft>
        <ContentRight>
          <ContentRightTop>
            <div>
              <p>KOR</p>
              <ToggleBtn toggle={toggle}>
                <Circle onClick={clickedToggle} toggle={toggle}></Circle>
              </ToggleBtn>
              <DotImg src={Dot} />
            </div>
          </ContentRightTop>
          <ContentRightMiddle>
            {videoDesc?.sentenceInfoList.map((el, index) => {
              return (
                <ScriptEl key={index}>
                  <English onClick={onSentenceClick}>{el.content}</English>

                  {toggle && <Korean>{el.translation}</Korean>}
                </ScriptEl>
              );
            })}
          </ContentRightMiddle>
          <ContentRightFooter>
            <CompleteBtn>Complete</CompleteBtn>
          </ContentRightFooter>
        </ContentRight>
      </ContentBox>
    </Wrapper>
  );
};

export default LearningPage;
