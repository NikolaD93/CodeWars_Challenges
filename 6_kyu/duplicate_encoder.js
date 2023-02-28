const duplicateEncode = (word) => {
    let encoder = "";
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if(word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
            encoder += "(";
        } else{
            encoder += ")";
        }
    }

    return encoder;
}




