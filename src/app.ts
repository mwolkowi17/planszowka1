import "phaser";
import Boot from "./scenes/boot";
import Preload from "./scenes/preload";
import { GameStart as GameSceneStart } from "./scenes/gameStart";

const config: Phaser.Types.Core.GameConfig = {
  title: "Demo Game",

  scene: [Boot, Preload, GameSceneStart],
  backgroundColor: "#333",
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-container",
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: 1280,
    height: 720,
    max: {
      width: 1280,
      height: 720,
    },
  },
};

window.addEventListener("load", () => {
  window["game"] = new Phaser.Game(config);
});
