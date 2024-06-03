import React from "react";
import styled, { keyframes, css } from "styled-components";

function Partners({ darkMode, row1, row2 }) {
  const AppContainer = styled.div`
    width: 100vw;
    color: #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;

  const Marquee = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    user-select: none;
    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0)
    );
  `;

  const scrollX = keyframes`
    from {
      left: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `;

  const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%;
    animation: ${scrollX} 30s linear infinite;
  `;

  const MarqueeGroup = styled.div`
    ${common}
  `;

  const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay: -3s;
  `;

  const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(100rem, 1rem + 30vmin, 30rem) / 100);
  `;

  const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    padding: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `;

  return (
    <AppContainer className="py-32 overflow-hidden">
      <Wrapper className="px-0 md:px-32">
        <h2
          className={`font-bold text-${
            darkMode ? "white" : "[#045CD3]"
          } text- justify-around mb-6`}
        >
          Our Partners
        </h2>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Partners;
