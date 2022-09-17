class SnakeBlock {
    constructor() {
        this.div = document.createElement('div');
        this.prevPos = [0, 0];
        this.pos = [0, 0];

        this.init();
    }

    init() {
        this.div.setAttribute('class', 'snake-block');
    }

    setPosition(x, y, lead=false) {
        this.prevPos[0] = this.pos[0];
        this.prevPos[1] = this.pos[1];

        if (x !== 'same') {
            this.pos[0] = x;
        }
        
        if (y !== 'same') {
            this.pos[1] = y;
        }

        const tile = grid.getTile(this.pos[0], this.pos[1]);

        if (lead) {
            const classAttr = tile.children[0]?.getAttribute('class');

            if (classAttr === 'food') {
                snake.createTail();
                food.spawn();
                gameController.pointCounter.increase();
            } else if (classAttr === 'snake-block') {
                stopmainmain();
                snake.die();
            }
        }

        tile.appendChild(this.div);
    }
}