import { useSelector } from "react-redux"
import NextButton from "./NextButton"
import PreviousButton from "./PreviousButton"
import TogglePlayButton from "./TogglePlayButton"
import Progress from "./Progress"

export default function PlayerPanel() {
  const playlist = useSelector(state => state.playlist)
  const currentTrack = playlist.tracks?.find(obj => obj.id === playlist.currentTrackID)

  return (
    <div className="fixed w-full bottom-0 rounded border-t-2 border-gray-800 p-6 bg-gradient-to-r from-indigo-100 to-purple-200">
      <div className="max-w-[800px] mx-auto mb-2">
        <p className="text-xl text-slate-800 font-semibold">
            {playlist.tracks && currentTrack.title}
        </p>
        <div className="flex justify-between">
            <p className="text-lg text-gray-900">
                {playlist.tracks && currentTrack.artist}
            </p>
            <p className="text-lg text-gray-900">
               {playlist.tracks?.findIndex(track => track.id === playlist.currentTrackID) + 1} / {playlist.tracks?.length}
            </p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <PreviousButton />
        <TogglePlayButton />
        <NextButton />
      </div>
      <Progress />
    </div>
  )
}
