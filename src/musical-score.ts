export enum Pitch {
    C,
    D,
    E,
    F,
    G,
    A,
    B,
};

export enum Accidental {
    SHARP,
    FLAT,
    NATURAL,
};

export interface MusicalNote {
    pitch: Pitch;
    accidental?: Accidental;
    beats: number;
};

export const BEATS_PER_MINUTE = 120;