const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

function shuffle (array) {
    for (let e = 0; array )
        for (let i = 0; array.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));

            let temp = array[i]
            array[i] = array[j]
            array[j] = temp;
        }
}