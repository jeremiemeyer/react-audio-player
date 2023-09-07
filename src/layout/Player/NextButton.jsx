import nextIcon from "../../assets/next-icon.svg"
import { useSelector, useDispatch } from "react-redux"
import { nextTrack } from "../../features/playlist"

export default function NextButton() {
  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  function handleClick(){
    if(playlist.tracks) {
      const nextIndex = playlist.tracks.findIndex(track => track.id === playlist.currentTrackID) + 1
      dispatch(nextTrack(nextIndex))
    }
  }

  return (
    <button
    onClick={handleClick}
    className="w-9 h-9 ml-4 bg-slate-400 rounded-full flex justify-center items-center">
        <img src={nextIcon} className="w-5 h-5" alt="next track" />
    </button>
  )
}