function designerPdfViewer(h, word) {
    const alphabet = [...Array(26)].map((x, i) => String.fromCharCode(i + 97))
    const chars = word.split("");
    let heights = [];
    for (const char of chars) {
        const index = alphabet.findIndex(item => item === char);
        heights.push(h[index])
    }
    console.log(heights);
    const maxHeight = heights.reduce((acc, height) => {
        return (acc > height ? acc : height)
    });

    return chars.length * maxHeight;
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "zaba"));