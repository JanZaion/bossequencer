import Header from './components/Header';
import TrackSelector from './components/TrackSelector';
import Intro from './components/Intro';
import Outro from './components/Outro';
import { Player } from 'tone';

function App() {
  const players = [];
  for (let i = 0; i < 16; i++) {
    const loop = new Player().toDestination();
    loop.loop = true;
    players.push(loop);
  }

  return (
    <>
      {/* <Header /> */}
      <main className="appContainer">
        <Intro />
        <TrackSelector players={players} />
        <Outro />
      </main>
    </>
  );
}

export default App;
