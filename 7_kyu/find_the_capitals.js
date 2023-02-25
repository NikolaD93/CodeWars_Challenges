const capitals = (word) => {
    let indexes = [];

    for (let i = 0; i < word.length; i++) {
        if(word[i] === word[i].toUpperCase()) {
            indexes.push(word.indexOf(word[i]))
        }
    }

    return indexes;
};

console.log(capitals("CodEWaRs"))
