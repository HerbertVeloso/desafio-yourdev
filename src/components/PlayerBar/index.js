import React, { useState, useEffect } from 'react'
import $ from 'jquery'

import PlayerCard from "../PlayerCard"
import Player from "../Player"

import * as S from "./style"

const PlayerBar = () => {
  // Pega o token do local storage
  const token = localStorage.getItem('desafio/token');

  const [isPlaying, setIsPlaying] = useState(false)
  const [progressMs, setProgressMs] = useState(0)
  const [noData, setNoData] = useState(true)
  const [shuffleState, setShuffleState] = useState(false)
  const [repeatState, setRepeatState] = useState("off")
  const [musicInfos, setMusicInfos] = useState({
    album: {
      images: [{ url: "" }]
    },
    name: "",
    artists: [{ name: "" }],
    duration_ms: 0
  })

  // Começa as chamadas a API quando carrega a página
  useEffect(() => {
    getCurrentlyPlaying(token);
    
    // Fazendo atualização do estado do player a cada 3s
    setInterval(() => getCurrentlyPlaying(token), 3000);
  }, [])

  // Busca na API o estado atual do player
  const getCurrentlyPlaying = token => {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Verificar se retornou um objeto vazio antes de salvar os dados
        if(data) {
          setMusicInfos(data.item)
          setIsPlaying(data.is_playing)
          setProgressMs(data.progress_ms)
          setShuffleState(data.shuffle_state)
          setRepeatState(data.repeat_state)
          setNoData(false) 
        } else {
          setNoData(true)
        }
      }
    });
  }

  

  return (
    <S.PlayerWrapper>
      {/* Verifica se está tocando para poder renderizar as infos da música */}
      {noData ?
        null
      : 
        <PlayerCard
          musicInfos={musicInfos}
        />
      }
      <Player
        musicInfos={musicInfos}
        isPlaying={isPlaying}
        progressMs={progressMs}
        shuffleState={shuffleState}
        repeatState={repeatState}
      />
    </S.PlayerWrapper>
  )
}

export default PlayerBar