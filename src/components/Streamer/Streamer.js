import React from 'react'
import { ScoreContainer, StreamerContainer } from '../../styled'

const Streamer = ({ streamer, position }) => {
  return (
    <StreamerContainer>
      <span>{position}. {streamer.displayName}</span>
      <ScoreContainer>{streamer.score}</ScoreContainer>
    </StreamerContainer>
  )
}

export default Streamer