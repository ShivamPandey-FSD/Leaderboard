import React, { useEffect, useState } from 'react'
import { LeaderboardContainer } from '../../styled';
import Streamer from '../Streamer/Streamer';

const Leaderboard = ({ initailStreamers }) => {
  const [streamers, setStreamers] = useState(initailStreamers);

  useEffect(() => {
    const interval = setInterval(() => {
      setStreamers((prevStreamers) => {
        const updatedStreamers = prevStreamers.map((streamer) => ({
          ...streamer,
          score: streamer.score + Math.floor(Math.random() * 100)
        }));
        updatedStreamers.sort((a, b) => b.score - a.score)

        const randomIndex = Math.floor(Math.random() * (updatedStreamers.length -1)) + 1;
        const selectedStreamer = updatedStreamers[randomIndex];

        if (randomIndex > 0) {
          const sortDifference = (updatedStreamers[randomIndex-1].score - selectedStreamer.score) + 300;
          updatedStreamers[randomIndex].score += sortDifference;
        }
        updatedStreamers.sort((a, b) => b.score - a.score)

        return updatedStreamers;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <LeaderboardContainer>
      {streamers.map((streamer, index) => (
        <Streamer key={streamer.userID} streamer={streamer} position={index+1} />
      ))}
    </LeaderboardContainer>
  )
}

export default Leaderboard