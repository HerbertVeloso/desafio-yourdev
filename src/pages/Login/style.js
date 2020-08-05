import styled from "styled-components"
import media from "styled-media-query"

import background from "../../images/background.jpg"

export const Background = styled.main`
  height: 100vh;
  background-color: #fff;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("small")`
    background: #282828;
  `}
`

export const LoginWrapper = styled.section`
  width: 100%;
  max-width: 380px;
  padding: 4rem 1rem 3rem;
  background-color: #282828;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 3rem;
`

export const Title = styled.p`
  margin-bottom: 2rem;
  padding-bottom: .5rem;
  border-bottom: 2px solid #1db954;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
`

export const Button = styled.a`
  margin-bottom: 4rem;
  background-color: #1db954;
  display: block;
  padding: .8rem 4rem;
  border-radius: 2rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .5s;

  &:hover {
    transform: scale(1.1);
  }
`

export const Copyright = styled.p`
  font-size: .8rem;
  color: #b3b3b3;
`