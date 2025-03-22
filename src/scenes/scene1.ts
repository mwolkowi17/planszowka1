import { Scene } from "phaser";

export class Scene1 extends Scene {
  constructor() {
    super({
      key: "GameScene1",
    });
  }
  create(): void {
    //adding assets to stage
    this.add.image(640, 360, "plansza_start").scale = 0.5;
    const el = document.createElement("input");
    const stage = document.querySelector("div");
    stage.appendChild(el);
    el.textContent = "Wpisz coś";
    el.style.height = "30px";
    el.style.width = "100px";
    el.style.position = "absolute";
    el.style.zIndex = "2";
    el.style.right = "400px";
    el.style.bottom = "500px";
  }
}
