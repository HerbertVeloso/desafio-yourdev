import styled from "styled-components"
import media from "styled-media-query"

export const CardWrapper = styled.div`
  width: 180px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${media.lessThan("small")`
    width: 120px;
    margin: .5rem;
  `}
`

export const CardImage = styled.img`
  width: 100%;
  margin-bottom: .5rem;
`

export const CardName = styled.p`
  margin-bottom: .5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #FFF;

  ${media.lessThan("small")`
    font-size: .8rem;
  `}
`

export const CardArtist = styled.p`
  font-size: 1rem;
  color: #808080;

  ${media.lessThan("small")`
    font-size: .6rem;
  `}
`