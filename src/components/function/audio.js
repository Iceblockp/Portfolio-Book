import pageTurnAudio from "../../assets/audio/page-turn.mp3"
import pageFlipAudio from "../../assets/audio/page-flip.mp3"

const pageTurn = new Audio(pageTurnAudio);
const pageFlip = new Audio(pageFlipAudio);

export const playPage = () => {
    pageTurn.play();
}

export const playPageFlip = () => {
    pageFlip.play()
}

