class Snake {
    constructor() {
        this.arr = [];

        this.init();
    }

    init() {
        this.spawn();
    }

    spawn() {
        const getCenterTile = grid.getCenterTile();
        const firstBLock = this.makeSnakeBlock();

        firstBLock.setPosition(getCenterTile[0], getCenterTile[1]);

        this.arr.push(firstBLock);
    }

    makeSnakeBlock() {
        const snakeBlock = new SnakeBlock;
        return snakeBlock;
    }

    createTail() {
        const block = this.makeSnakeBlock();
        block.setPosition(
            this.arr[this.arr.length - 1].pos[0],
            this.arr[this.arr.length - 1].pos[1]
        );

        this.arr.push(block);
    }

    move() {
        this.arr.forEach((e, i) => {
            let x = 'same', y = 'same';
            let lead = false;

            if (!i) {
                if (movement.direction === 0)
                    y = e.pos[1] - 1 === -1
                        ? grid.verGridCount - 1
                        : e.pos[1] - 1;

                else if (movement.direction === 1)
                    x = e.pos[0] + 1 === grid.horGridCount
                        ? 0
                        : e.pos[0] + 1;

                else if (movement.direction === 2)
                    y = e.pos[1] + 1 === grid.verGridCount
                        ? 0
                        : e.pos[1] + 1;

                else
                    x = e.pos[0] - 1 === -1
                        ? grid.horGridCount - 1
                        : e.pos[0] - 1;

                lead = true;
            } else {
                x = this.arr[i - 1].prevPos[0];
                y = this.arr[i - 1].prevPos[1];
            }
            
            e.setPosition(x, y, lead);
        });
    }

    die() {
        this.arr[1].div.style.backgroundColor = "red";
    }
}