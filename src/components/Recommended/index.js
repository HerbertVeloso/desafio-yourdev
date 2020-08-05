import React, { useState, useEffect } from 'react'
import $ from 'jquery'

import Card from "../Card"

import * as S from "./style"

const Recommended = () => {
  // Pega o token do local storage
  const token = localStorage.getItem('desafio/token');

  const [artists, setArtists] = useState([])
  const [musicsArtist1, setMusicsArtists1] = useState({})
  const [musicsArtist2, setMusicsArtists2] = useState({})
  const [musicsArtist3, setMusicsArtists3] = useState({})

  // Pega os 3 top artistas do user
  const getArtists = () =>{
    $.ajax({
      url: "https://api.spotify.com/v1/me/top/artists",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        setArtists([
          {
            id: data.items[0].id,
            name: data.items[0].name
          },
          {
            id: data.items[1].id,
            name: data.items[1].name
          },
          {
            id: data.items[2].id,
            name: data.items[2].name
          },
        ])
      }
    })    
  }

  // Pega as top musics de cada artista
  const getMusics = () =>{
    if (artists[0] !== undefined) {
      let count = 0
      artists.map(item => {
        $.ajax({
          url: `https://api.spotify.com/v1/artists/${item.id}/top-tracks?country=BR`,
          type: "GET",
          beforeSend: xhr => {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
          },
          success: data => {
            // Seleciona se vai salvar na lista do artista 1, 2 ou 3
            switch (count) {
              case 0:
                setMusicsArtists1(data)
                break;
              case 1:
                setMusicsArtists2(data)
                break;
              case 2:
                setMusicsArtists3(data)
                break;
            }
            count++
          }
        })
      })
    }
  }

  // Chama função de carregar os artistas quando carrega a página
  useEffect(() => {
    getArtists()
  }, [])

  // Chama função de carregar as músicas artistas quando carrega os artistas
  useEffect(() => {
    getMusics()
  }, [artists])

  return (
    <S.RecommendedWrapper>
      <S.Title>Músicas Recomendadas</S.Title>
      {/* Lista os dados para cada artista */}
      {artists.map((item, index) => {
        let musics = 0
        switch (index) {
          // Seleciona de qual lista vai pegar
          case 0:
            musics = musicsArtist1
            break;
          case 1:
            musics = musicsArtist2
            break;
          case 2:
            musics = musicsArtist3
            break;
        }

        return (
          <S.RecommendedContainer>
            <S.Artist>{item.name}</S.Artist>
            <S.MusicList>
              {/* Renderiza um card para cada música do artista  */}
              {
                musics.tracks !== undefined ?
                  musics.tracks.map(item => 
                    <Card 
                      img={item.album !== undefined ? item.album.images[0].url : null}
                      name={item.name}
                      artists={item.artists}
                      uri={item.uri}
                    />
                  )
                :
                  null
              }
            </S.MusicList>
          </S.RecommendedContainer>
        )
      })}
    </S.RecommendedWrapper>
  )
}

export default Recommended