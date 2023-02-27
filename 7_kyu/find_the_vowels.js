const vowelIndices = (word) => {
    let vowels = 'aeiouyAEIOUY';
    let result = [];

    word.split("").forEach((letter, idx) => {
        if(vowels.includes(letter)) result.push(idx + 1);
    })

    return result;
};

