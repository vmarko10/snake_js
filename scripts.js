class Scripts {
    numberSeq (size) {
        return Array.from(Array(size).keys());
    }

    randomWithExists(maxX=0, maxY=1, exists=[]) {
        let randomX = parseInt(Math.random() * maxX);
        let randomY = parseInt(Math.random() * maxY);

        while (typeof(exists
            .find(e => e.pos[0] === randomX && e.pos[1] === randomY)) !== 'undefined') {
                randomX = parseInt(Math.random() * maxX);
                randomY = parseInt(Math.random() * maxY);

                console.log(typeof(exists
                    .find(e => e.pos[0] === randomX && e.pos[1] === randomY)) !== 'undefined');
        }

        return [randomX, randomY];
    }
}