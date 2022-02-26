import React from "react"
import styled, { keyframes } from "styled-components"
import Mockups from "../animations/Mockups"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br />
            and Code React apps
          </Title>
          <Descripition>
            Don't skip design. Learn design and code by building real apps with
            React and Swift. Complete courses about the best tools.
          </Descripition>
          <PurchaseButton
            title="Start learning"
            subtitles="120+ hours of video"
          />
        </TextWrapper>
        <Mockups />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: (10px); }
  100% { opacity: 1; transform: translateY(0px); filter: (0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  animation: ${animation} 1s 0.1s forwards;

  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Descripition = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`
