import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tracks: undefined,
    play: false,
    currentTrackID: undefined
}

export const playlist = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addInitialTracks: (state, action) => {
            state.tracks = action.payload
            state.currentTrackID = action.payload[0].id
        },
        togglePlay: (state, action) => {
            state.play = !state.play
        },
        nextTrack: (state, action) => {
            if(action.payload === state.tracks.length) {
                state.currentTrackID = state.tracks[0].id
            } else {
                state.currentTrackID = state.tracks[action.payload].id
            }
        },
        previousTrack: (state, action) => {
            if(action.payload < 0) {
                state.currentTrackID = state.tracks[state.tracks.length - 1].id
            } else {
                state.currentTrackID = state.tracks[action.payload].id
            }
        },
        changeTrack: (state, action) => {
          state.currentTrackID = action.payload
        },

    }
})

export function getTracksData(action) {
    return function(dispatch, getState) {
        fetch("/data/playlist.json")
        .then(data => data.json())
        .then(data => dispatch(addInitialTracks(data.playlist)))
    }
}

export const { 
    addInitialTracks,
    togglePlay,
    nextTrack,
    previousTrack,
    changeTrack
} = playlist.actions
export default playlist.reducer