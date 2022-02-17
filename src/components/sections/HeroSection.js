import React from "react"
import styled from "styled-components"
import Mockups from "../animations/Mockups"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
        <Title>Design <br />
         and Code React apps</Title>
        <Descripition>
          Don't skip design. Learn design and code by building real apps with
          React and Swift. Complete courses about the best tools.
        </Descripition>
        <PurchaseButton
        title = "Start learning"
        subtitles = "120+ hours of video"
        />
        </TextWrapper>
        <Mockups />        
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
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
`
const Title = styled(H1)`
color: ${themes.dark.text1};
`
const Descripition = styled(MediumText)`
font-size: 17px;
line-height: 130%;
`









