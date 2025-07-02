const textHelper = require("./textFormater.js");

function formatParagraph(text) {
    const sentences = text.split(".");
    const capitalizedSentences = sentences.map((sentence) => {
        return textHelper.getCapitalText(sentence);
    });
    return capitalizedSentences.join(".\n");
}
module.exports = {
    formatParagraph,
}