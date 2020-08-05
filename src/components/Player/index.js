import React from "react";
import $ from 'jquery'
import {Random} from "@styled-icons/fa-solid/Random"
import {StepBackward} from "@styled-icons/fa-solid/StepBackward"
import {PlayCircle} from "@styled-icons/boxicons-regular/PlayCircle"
import {PauseCircle} from "@styled-icons/boxicons-regular/PauseCircle"
import {StepForward} from "@styled-icons/fa-solid/StepForward"
import {Redo} from "@styled-icons/fa-solid/Redo"

import * as S from "./style"

const Player = ({musicInfos, isPlaying, progressMs, shuffleState, repeatState }) => {
  // Pega o token do local storage
  const token = localStorage.getItem('desafio/token')

  // Calcula o tamanho da barra do player
  const progress = (progressMs * 100 / musicInfos.duration_ms) + '%'

  // Função para dar o play
  const playMusic = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/play",
      type: "PUT",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      }
    })
  }

  // Função para dar o pause
  const pauseMusic = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/pause",
      type: "PUT",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      }
    })
  }

  // Função para ir para música anterior
  const previousMusic = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/previous",
      type: "POST",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      }
    })
  }

  // Função para ir para próxima música
  const nextMusic = () => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/next",
      type: "POST",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      }
    })
  }

  // Função para alternar o modo aleatório 
  const shufflePlaylist = () => {
    $.ajax({
      url: `https://api.spotify.com/v1/me/player/shuffle?state=${!shuffleState}`,
      type: "PUT",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      }
    })
  }

  // Função para alternar o modo repetição 
  const repeatMusic = () => {
    const verifyRepeat = (repeatState === "off" ? "track" : "off")
    $.ajax({
      url: `https://api.spotify.com/v1/me/player/repeat?state=${verifyRepeat}`,
      type: "PUT",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      }
    })
  }

  return (
    <S.Player>
      <S.PlayerButtons>
        <S.IconWrapper>
          <Random 
            // Muda a cor caso esteja no modo aleatório
            color={shuffleState ? "#1db954" : "#b3b3b3"}
            onClick={() => shufflePlaylist()}
          />
        </S.IconWrapper>
        <S.IconWrapper>
          <StepBackward 
            onClick={() => previousMusic()}
          />
        </S.IconWrapper>
        <S.PlayIconWrapper>
          {isPlaying ? 
            <PauseCircle 
              onClick={() => pauseMusic()}
            /> 
          : 
            <PlayCircle 
              onClick={() => playMusic()}
            />
          }
        </S.PlayIconWrapper>
        <S.IconWrapper>
          <StepForward 
            onClick={() => nextMusic()}
          />
        </S.IconWrapper>
        <S.IconWrapper>
          <Redo 
            // Muda a cor caso esteja no modo repetição
            color={repeatState === "track" ? "#1db954" : "#b3b3b3"}
            onClick={() => repeatMusic()}
          />
        </S.IconWrapper>
      </S.PlayerButtons>
      <S.ProgressBar>
        <S.Progress progress={progress} />
      </S.ProgressBar>
    </S.Player>
  );
}

export default Player;
