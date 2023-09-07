import play from "../../assets/play-icon.svg"
import pause from "../../assets/pause-icon.svg"
import { useDispatch, useSelector } from "react-redux"
import { togglePlay } from "../../features/playlist"

export default function TogglePlayButton() {
  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  return (
    <button
    onClick={() => dispatch(togglePlay())}
    className="bg-slate-50 w-10 h-10 shadow-md rounded-full flex items-center justify-center outline-none">
        <img className="w-20 h-20" src={playlist.play ? pause : play} alt="toggle play" />
    </button>
  )
}