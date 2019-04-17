import 'Phaser';
import { GameScene } from './game.scene';

export class MyGame extends Phaser.Game {
    constructor() {
      super({
        title: 'MyGame',
        type: Phaser.WEBGL,
        parent: document.getElementById('phaser'),
        canvas: document.getElementById('phaser-canvas') as HTMLCanvasElement,
        width: document.body.offsetWidth,
        height: document.body.offsetHeight,
        scene: [GameScene],
        physics: {
          default: 'arcade',
          arcade: {
            debug: false
          }
        },
        backgroundColor: '#000033',
      });
    }
}
