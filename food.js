class Food {
    constructor() {
        this.div = document.createElement('div');
        this.pos = [0 ,0];

        this.init();
    }

    init() {
        this.div.setAttribute('class', 'food');

        this.spawn();
    }

    spawn() {
        document.querySelector('food')?.remove();

        const randPos = scripts.randomWithExists(grid.horGridCount - 1, grid.verGridCount - 1, snake.arr);

        this.pos = [randPos[0], randPos[1]];

        const tile = grid.getTile(randPos[0], randPos[1]);
        tile.appendChild(this.div);
    }
}