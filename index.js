const tfi = require("text-from-image");
const fs = require("fs");
tfi("complextest2.png").then(text=>{
    console.log(text)
}).catch(err=>{
    console.log(err)
});
