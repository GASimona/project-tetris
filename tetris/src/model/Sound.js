export default class Sound {
  constructor() {
    this.background = new Audio(require("../sounds/background.mp3"));
    this.deleteLine = new Audio(require("../sounds/deleteLine.wav"));
    this.clickButton = new Audio(require("../sounds/clickButton.wav"));
    this.gameOver = new Audio(require("../sounds/gameOver.wav"));
    this.isPlay = false;
  }
  toggleSound() {
    if (this.isPlay) {
      this.background.pause();
      this.isPlay = false;
    } else {
      this.background.loop = true;
      this.background.play();
      this.isPlay = true;
    }
  }
  playBackground() {
    if (this.isPlay) {
      this.background.play();
    }
  }
  playDeleteLine() {
    if (this.isPlay) {
      this.deleteLine.play();
    }
  }
  playClickButoon() {
    if (this.isPlay) {
      this.clickButton.play();
    }
  }
  playGameOver() {
    if (this.isPlay) {
      this.background.pause();
      this.gameOver.play();
    }
  }
}
