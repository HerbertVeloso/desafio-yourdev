import React from "react"
import $ from 'jquery'

import * as S from "./style"

const Card = ({ img, name, artists, uri }) => {
  // Pega o token do local storage
  const token = localStorage.getItem('desafio/token')

  // Coloca a música na fila e avança para a música
  const playMusic = () => {
    $.ajax({
      url: `https://api.spotify.com/v1/me/player/queue?uri=${uri}`,
      type: "POST",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: () => {
        $.ajax({
          url: "https://api.spotify.com/v1/me/player/next",
          type: "POST",
          beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          }
        })
      }
    })
  }

  return (
    <S.CardWrapper onClick={() => playMusic()}>
      <S.CardImage src={img} />
      <S.CardName>{name}</S.CardName>
      <S.CardArtist>{artists[0].name}</S.CardArtist>
    </S.CardWrapper>
  )
}

export default Card