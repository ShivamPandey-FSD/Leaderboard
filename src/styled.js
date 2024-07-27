import styled from "styled-components";

/** App.js */

export const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeadingContainer = styled.h1`
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

/** Leaderboard.js */

export const LeaderboardContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`

/** Streamer.js */

export const StreamerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 5px 0;
  transition: all 0.5s ease;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &:nth-of-type(even) {
    background: rgba(255, 255, 255, 0.3);
  }
    
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.02);
  }
`

export const ScoreContainer = styled.span`
  transition: all 0.5s ease;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`
