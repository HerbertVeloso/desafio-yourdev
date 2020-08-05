import styled from "styled-components"
import media from "styled-media-query"

export const Player = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  // ${media.lessThan("medium")`
  //   display: none;
  // `}

  ${media.lessThan("medium")`
    width: 100%;
    margin-right: 0;
    flex-direction: column-reverse;
    position: static;
    top: 0;
    left: 0;
    transform: none;
  `}
`

export const PlayerButtons = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
    margin-bottom: 0;
  `}
`

export const IconWrapper = styled.div`
  width: 1rem;
  height: 1.5rem;
  margin: 0 .5rem;
  color: ${props => props.color};
  transition: all .1s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  ${media.lessThan("medium")`
    width: .8rem;
    height: 1.2rem;
  `}
`

export const PlayIconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 .5rem;
  transition: all .5s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  ${media.lessThan("medium")`
    width: 2rem;
    height: 2rem;
  `}
`

export const ProgressBar = styled.div`
  width: 100%;
  height: .25rem;
  border-radius .25rem;
  background-color: #535353;

  &:hover div {
    background-color: #1db954;

    &::before {
      opacity: 100%
    }
  }

  ${media.lessThan("medium")`
    border-radius 0;
    position: absolute;
    top: 0;
  `}
`

export const Progress = styled.div`
  width: ${props => props.progress || "0%"};
  height: 100%;
  border-radius .25rem;
  background-color: #fff;
  position: relative;
  transition: width 2s, color .2s;

  &::before {
    content: "";
    width: .75rem;
    height: .75rem;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 0.375rem);
    right: 0;
    opacity: 0%;
    transition: all .2s;
  }

  ${media.lessThan("medium")`
    border-radius 0;
  `}
`