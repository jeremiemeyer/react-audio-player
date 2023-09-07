import prevIcon from "../../assets/prev-icon.svg"
import { useSelector, useDispatch } from "react-redux"
import { previousTrack } from "../../features/playlist"

export default function PreviousButton() {
  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  function handleClick(){
    if(playlist.tracks) {
      const previousIndex = playlist.tracks.findIndex(track => track.id === playlist.currentTrackID) - 1
      dispatch(previousTrack(previousIndex))
    }
  }

  return (
    <button
    onClick={handleClick}
    className="w-9 h-9 mr-4 bg-slate-400 rounded-full flex justify-center items-center">
        <img src={prevIcon} className="w-5 h-5" alt="previous track" />
    </button>
  )
}