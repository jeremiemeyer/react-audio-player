import Playlist from "./components/Playlist"
import Player from "./components/Player"
import PlayerPanel from "./layout/Player/PlayerPanel"

function App() {
  return <>
    <div className="min-h-screen bg-slate-800 pt-20 px-4">
      <div className="max-w-xl mx-auto">
        <Player />
        <h1 className="text-slate-100 text-2xl">Audio Player</h1>
        <Playlist />
      </div>
    </div>
    <PlayerPanel />
  </>
}

export default App
