String.prototype.toJadenCase = function () {
    return this.split(" ").map(el => el[0].toUpperCase() + el.substring(1, el.length)).join(' ');
};

