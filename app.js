const scripts = new Scripts;
const movement = new Movement;
let mainIntervalTimeout = 80;
let mainInterval = false;
let input = false;

const grid = new Grid({
    horGridCount: 30,
    verGridCount: 30,
    gridSize: 30,
});

const snake = new Snake;
const food = new Food;

const main = function() {
    input = true;
    movement.move();
    snake.move();
}

const mainmain = function () {
    if (mainInterval)
        return;

    setTimeout(() => {
        main();
        mainInterval = setInterval(main, mainIntervalTimeout);
    }, 1300);    
}

const stopmainmain = function () {
    clearInterval(mainInterval);
    mainInterval = false;

}

window.addEventListener('load', () => {
    mainmain();
    gameController = new GameController;
    gameController.pointCounter.setDefault();
});