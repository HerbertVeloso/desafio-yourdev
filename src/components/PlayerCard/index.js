import React from 'react'

import * as S from "./style"

const PlayerCard = ({ musicInfos }) => {
  return (
    <S.PlayerCardWrapper>
      <S.AlbumImageWrapper>
        <S.AlbumImage src={musicInfos.album.images[0].url} />
      </S.AlbumImageWrapper>
      <S.InfosWrapper>
        <S.MusicName>
          {musicInfos.name}
        </S.MusicName>
        <S.ArtistName>
          {musicInfos.artists[0].name}
        </S.ArtistName>
      </S.InfosWrapper>
    </S.PlayerCardWrapper>
  )
}

export default PlayerCard