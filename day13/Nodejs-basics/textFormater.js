const getCapitalText = (txt) => {
    const words = txt.trim().split(" ");
    const resArr = words.map((elem)=>{
        const firstChar = elem[0];
        const remainingWords = elem?.slice(1);
        return `${firstChar?.toUpperCase()}${remainingWords?.toLowerCase()}`;
    });
    return resArr.join(" ");
};
const getCamelCase = (txt) => {
    const words = txt.trim().split(" ");
    const resArr = words.map((elem,idx)=>{
        if (idx!==0){
            const firstChar = elem[0]?.toUpperCase();
            const remainingWords = elem?.slice(1).toLowerCase();
            return `${firstChar}${remainingWords}`;
        }else {
            return elem.toLowerCase();
        }
    });
    return resArr.join("");
}



module.exports = {
    getCapitalText: getCapitalText,
    getCamelCase: getCamelCase,

};