const tesseract = require("node-tesseract-ocr");
const fs = require("fs");

const config = {
    lang:'eng',
    oem:1,
    psm:3
}

tesseract.recognize(fs.readFileSync("test2.jpg"),config).then((text)=>{
    console.log(text)
});
