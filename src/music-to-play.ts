import { MusicalNote, Pitch, Accidental } from "./musical-score";

export const notesToPlayInOrder: Array<MusicalNote> = [{
    pitch: Pitch.G,
    beats: 5,
}, {
    pitch: Pitch.D,
    beats: 1,
}, {
    pitch: Pitch.B,
    accidental: Accidental.FLAT,
    beats: 1,
}, {
    pitch: Pitch.A,
    beats: 6,
}];