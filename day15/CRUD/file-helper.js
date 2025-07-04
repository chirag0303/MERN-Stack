const fsPromises = require("fs/promises");
const { v4: uuidv4 } = require('uuid');

const saveArrayToFile = async (arr,filePath) => {
    
    try {
        const stringifyArr = JSON.stringify(arr,null,4);
        await fsPromises.writeFile(filePath, stringifyArr, 'utf-8');

    }catch(err){
        console.error("Error saving file: ",err.message);
        return null;
    }
};

const saveObjectToArrayInFile = async (obj, filePath) => {
    const arr = await getAllDataFromArrayFromFile(filePath);
    obj.id = uuidv4();
    arr.push(obj);
    saveArrayToFile(arr,filePath);
};


const getAllDataFromArrayFromFile = async (filePath) => {

    try{
        const txt =await fsPromises.readFile(filePath,'utf-8');
        try {
            const data = JSON.parse(txt);
            return data;
        } catch {
            console.warn("FIle is corrupted, Resetting it");
            await fsPromises.writeFile(filePath,"[]",'utf-8');
            return [];
        }
        
    }catch (err) {
        if (err.code === "ENOENT"){
            console.warn("Creating File: ");
            await fsPromises.writeFile(filePath,"[]", 'utf-8');
            return [];
        } 
        console.error("error reading file:",err.code);
        return null;
    }
};


const editObjectFromArrayFromFile = async (newObjProperties, elemId, filePath) => {
    const arr = await getAllDataFromArrayFromFile(filePath);
    const idx = arr.findIndex((elem)=> {
        if (elem.id === elemId){
            return true;
        }
        return false;
    });

    if (idx ===-1){
        console.error("Invalid Id, no object found");
        return arr;
    }


    //changing the object here
    const currentObj = arr[idx];
    const newobj = {...currentObj, ...newObjProperties}
    arr[idx] = newobj;

    saveArrayToFile(arr, filePath);
};

module.exports = {
    saveObjectToArrayInFile,
    getAllDataFromArrayFromFile,
    editObjectFromArrayFromFile,
    //deleteObjectFromArrayFromFile,
};