console.log("100 *** In Opinion Classifier App  ***");
var brain = require("brain");
const net = new brain.recurrent.LSTM();
console.log(" 200");

function writeTextFile(afilename, output)
{
  var txtFile =new File(afilename);
  txtFile.writeln(output);
  txtFile.close();
};


var outFile = "trainedNetwork.json";
let fileData = "This is  a test file content";
writeTextFile(outFile, fileData);
console.log("200A ******** Finished writing the file");