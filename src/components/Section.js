import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
  downArrowImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Reveal effect='animate__fadeInUp'>
        <ItemText>
          <h1>{title}</h1>

          <p>{description}</p>
        </ItemText>
      </Reveal>

      <ButtonGroup>
        <LeftButton>{leftBtnText}</LeftButton>

        {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
      </ButtonGroup>
      <DownArrow src={downArrowImg} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url(${props.bgImage})`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 400px;
  @media (max-width: 600px) {
    flex-direction: column;
    ${'' /* align-items: stretch; */}
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  display: flex;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

export default Section;
