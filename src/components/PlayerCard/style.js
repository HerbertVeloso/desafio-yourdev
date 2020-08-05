import styled from "styled-components"
import media from "styled-media-query"

export const PlayerCardWrapper = styled.div`
  display: flex;
  // align-items: center;
`

export const AlbumImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;

  ${media.lessThan("medium")`
    width: 3.5rem;
    height: 3.5rem;
  `}
`

export const AlbumImage = styled.img`
  width: 100%;
`

export const InfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan("medium")`
    width: calc(100% - 4.5rem);
  `}
`

export const MusicName = styled.p`
  margin-bottom: .5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`

export const ArtistName = styled.p`
  font-size: 1rem;
  color: #b3b3b3;

  ${media.lessThan("medium")`
    font-size: .8rem;
  `}
`