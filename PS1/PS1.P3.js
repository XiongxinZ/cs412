const doOperation = (value, operation) => operation(value);
const bit_stuffing = doOperation(
    "supercalifragilisticexpialidocious",
    (value) => value.split(/(?=c)/g) // Lookahead assertion: match everything followed by "c"
);
// console.log(bit_stuffing);
// console.log(doOperation(
//     "javajavascriptjsonjekinsjupyter",
//     (value) => value.split(/(?=j)/g)
// ))
const replace_a_with_A = doOperation(
    "supercalifragilisticexpialidocious",
    (value) => ({
        originalString: value,
        modifiedString: value.replace(/a/g, "A"), // It seems that replaceAll does not work. TypeError: value.replaceAll is not a function
        numberReplaced: (value.match(/a/g, "A") || []).length,
        length: value.replace(/a/g, "A").length
    })
);
// console.log(replace_a_with_A);
// console.log(doOperation(
//     "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?",
//     (value) => ({
//             originalString: value,
//             modifiedString: value.replace(/dog/g, "ferret"),
//             numberReplaced: (value.match(/dog/g, "ferret") || []).length,
//             length: value.replace(/dog/g, "ferret").length
//         }
// )))
module.exports = {doOperation};