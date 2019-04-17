import 'Phaser';

export class GameScene extends Phaser.Scene {

    init(): void {
    }

    preload(): void {
        this.load.image('logo', 'assets/img/logo.png');
    }

    create(): void {
        console.log('creating scene');
        const centerX = this.game.canvas.width / 2;
        const centerY = this.game.canvas.height / 2;
        const logo = this.add.sprite(centerX, centerY, 'logo');

        logo.setInteractive();
        logo.on('pointerdown', () => this.onLogoClick());
        logo.on('pointerup', () => this.onLogoUnClick());

        const info = this.add.text(10, 10, '---', { font: '24px Arial Bold', fill: '#FBFBAC' });
        info.name = 'textCounter';

        const txtClick = this.add.text(10, 30, 'no click', { font: '24px Arial Bold', fill: '#FBFBAC' });
        txtClick.name = 'textClicker';

        console.log('creating scene complete');
    }

    update(time: number): void {
        const info = this.children.getByName('textCounter') as Phaser.GameObjects.Text;
        info.setText(this.game.canvas.width + 'x' + this.game.canvas.height + ' T: ' + time);
    }

    onLogoClick(): void {
        const txtClick = this.children.getByName('textClicker') as Phaser.GameObjects.Text;
        txtClick.setText('clicked');
    }

    onLogoUnClick(): void {
        const txtClick = this.children.getByName('textClicker') as Phaser.GameObjects.Text;
        txtClick.setText('unclicked');
    }
}
