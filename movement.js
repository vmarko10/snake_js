class Movement {
    constructor() {
        this.direction = 0;
    }

    move() {
        window.addEventListener("keydown", e => {
            if (!input)
                return;

            if (["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"]
                .find(key => key === e.key)); input = false;

            e.key === "ArrowUp" && this.direction != 2 ? this.direction = 0
            : e.key === "ArrowRight" && this.direction != 3 ? this.direction = 1
            : e.key === "ArrowDown" && this.direction != 0 ? this.direction = 2
            : e.key === "ArrowLeft" && this.direction != 1 ? this.direction = 3
            : null;
        });
    }
}