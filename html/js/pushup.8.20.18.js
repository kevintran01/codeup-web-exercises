function multiply(x, y) {
    var product = 0;
    for (var i = 0; i < y; i++) {
        product = product += x;
    }
    return product;
}

function exponentiate(x, y) {
    var product = 1;
    for (var i = 0; i < y; i++) {
        product = product *= x;
    }
    return product;
}