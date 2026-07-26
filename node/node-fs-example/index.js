const fs = require("node:fs");

fs.stat("./test-file.txt", (err, stats) => {
    if (err) {
        console.log(err);
    }

    console.log(stats.size);
})