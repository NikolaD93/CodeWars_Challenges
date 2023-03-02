const cubeChecker = (volume,side) => {
    if (volume <= 0 || side <= 0) return false;

    if(volume / (side * side) === side) {
        return true;
    }else{
        return false;
    }
}

console.log(cubeChecker(56.3,1));