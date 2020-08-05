import styled from "styled-components"
import media from "styled-media-query"

export const PlayerWrapper = styled.section`
  width: 100%;
  height: 7rem;
  background-color: #282828;
  padding: 1.5rem;
  display: flex;
  color: #b3b3b3;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;

  ${media.lessThan("medium")`
    padding: 1rem;
    flex-direction: column-reverse;
  `}
`

export const Player = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayerButtons = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  width: 1rem;
  height: 1.5rem;
  margin: 0 .5rem;
  transition: all .3s;
  

  &:hover {
    color: #fff;
  }
`

export const PlayIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 .5rem;
  transition: all .3s;

  &:hover {
    color: #fff;
  }
`

export const PlayerBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius 4px;
  background-color: #535353;

`