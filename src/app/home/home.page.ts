import { Component } from '@angular/core';
import { MyGame } from './../game/game';
import { GameScene } from './../game/game.scene';
import 'Phaser';
import { getElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  game;
  constructor() {
    console.log('creating game');
    this.game = new MyGame();
    console.log('done');
  }
}
