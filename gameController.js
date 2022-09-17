class GameController {
    constructor() {
        this.pointCounter = new PointCounter;
    }
}

class PointCounter {
    constructor() {
        this.div = document.createElement('div');
        this.counter = 0;

        this.init();
    }

    init() {
        this.div.setAttribute('id', 'point-counter')
        grid.div.appendChild(this.div);
    }

    increase() {
        this.counter++;
        this.div.innerText = this.counter;
    }

    setDefault() {
        this.counter = 0;
        this.div.innerText = this.counter;
    }
}