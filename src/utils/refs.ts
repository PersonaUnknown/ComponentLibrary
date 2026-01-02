export type TypewriterRef = {
    typeForward: () => void;
    startTyping: () => void;
}

export type TextAlongPathRef = {
    play: () => void;
    rewind: () => void;
    pause: () => void;
    reset: () => void;
}

export type CarouselRef = {
    scrollLeft: () => void;
    scrollRight: () => void;
}