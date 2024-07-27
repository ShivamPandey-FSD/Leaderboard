import Leaderboard from './components/Leaderboard/Leaderboard';
import { streamers } from './data';
import { AppContainer, HeadingContainer } from './styled';

function App() {
  return (
    <AppContainer>
      <HeadingContainer>Streamer Leaderboard</HeadingContainer>
      <Leaderboard initailStreamers={streamers} />
    </AppContainer>
  );
}

export default App;
