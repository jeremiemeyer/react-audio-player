import { useSelector, useDispatch } from "react-redux"
import { getTracksData, changeTrack } from "../features/playlist"

export default function Playlist() {
  const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  if(!playlist.tracks){
    dispatch(getTracksData())
  }

  return (
    <ul className="mt-4 pb-[300px]">
        {playlist?.tracks?.length && playlist.tracks.map(track => (
            <li
            onClick={() => dispatch(changeTrack(track.id))}
            key={track.id}
            className="p-2 border-2 font-semibold bg-indigo-100 hover:bg-indigo-200 text-slate-800 mb-3 rounded cursor-pointer"
            >
                <span>{track.title} - </span>
                {track.artist}
            </li>
        ))}
    </ul>
  )
}