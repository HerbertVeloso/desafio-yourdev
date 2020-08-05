import styled from "styled-components"
import media from "styled-media-query"

export const RecommendedWrapper = styled.section`
  margin-bottom: 7rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  color: #808080;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 800;
  color: #FFF;

  ${media.lessThan("small")`
    font-size: 2rem;
  `}
`

export const RecommendedContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Artist = styled.h3`
  margin-bottom: 1rem;
  padding-bottom: .5rem;
  border-bottom: 1px solid #808080;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFF;

  ${media.lessThan("small")`
    font-size: 1.2rem;
  `}
`

export const MusicList = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;

  ${media.lessThan("small")`
    justify-content: center;
  `}
`