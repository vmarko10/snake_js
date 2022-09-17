class Grid {
    constructor(config) {

        this.div = document.createElement('div');
        this.table = document.createElement('table');
        this.horGridCount = config.horGridCount;
        this.verGridCount = config.verGridCount;
        this.gridSize = config.gridSize;

        this.tiles = [];

        this.init();
    }

    init() {
        this.div.setAttribute('id', 'main-grid-container');

        this.table.setAttribute('id', 'main-grid');
        this.table.style.width = this.horGridCount * this.gridSize + "px";
        this.table.style.height = this.verGridCount * this.gridSize + "px";

        this.createTiles();

        this.div.appendChild(this.table);
        container.appendChild(this.div);
    }

    createTiles() {
        const verTileArr = scripts.numberSeq(this.verGridCount);
        const horTileArr = scripts.numberSeq(this.horGridCount);

        verTileArr.forEach(e => {
            const tr = document.createElement('tr');
            this.table.appendChild(tr);

            horTileArr.forEach(e => {
                const td = document.createElement('td');

                tr.appendChild(td);
            })
        });

    }

    getTile(x, y) {
        return this.table.querySelectorAll('tr')[y]
                .querySelectorAll('td')[x];
    }

    getCenterTile() {
        const halfWayX = parseInt(this.horGridCount / 2);
        const halfWayY = parseInt(this.verGridCount / 2);

        return [halfWayX, halfWayY];
    }
}