/**
 * Framer Motion Animation Data
 */

export const yAnim = {
    initial:{
        y: 0
    },
    animate:{
        y: [0, -5, 0, 5, 0],
    },
    transition:{ 
        duration: 1,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY
    }
}

export const scaleAnim = {
    initial: {
        scale: 1
    },
    animate:{
        scale: [1, 1.5, 1, 0.5],
    },
    transition:{ 
        duration: 1,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY
    }
}

export const moveScaleAnim = {
    initial:{
        scale: 1,
        y: 0
    },
    animate:{
        scale: [1, 1.5, 1, 0.5],
        y: [0, -5, 0, 5, 0],
    },
    transition:{ 
        duration: 1,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY
    }
}