console.log("^^^^ 1000 In Opinion Classifer");
const net = new brain.recurrent.LSTM();
console.log(" 200");
/*const trainingData = [
  { input: 'I agree with the statement', output: 'agree' },
  { input: 'I disagree', output: 'disagree' },
  { input: 'I agree', output: 'agree' }
];
*/
/*
net.train([
  { input: 'I feel great about the world!', output: 'happy' },
  { input: 'The world is a terrible place!', output: 'sad' },
], {
                            // Defaults values --> expected validation
      iterations: 5000,    // the maximum times to iterate the training data --> number greater than 0
      errorThresh: 0.005,   // the acceptable error percentage from training data --> number between 0 and 1
      log: false,           // true to use console.log, when a function is supplied it is used --> Either true or a function
      logPeriod: 10,        // iterations between logging out --> number greater than 0
      learningRate: 0.3,    // scales with delta to effect training rate --> number between 0 and 1
      momentum: 0.1,        // scales with next layer's change value --> number between 0 and 1
      callback: null,       // a periodic call back that can be triggered while training --> null or function
      callbackPeriod: 10,   // the number of iterations through the training data between callback calls --> number greater than 0
      timeout: 50000 // Infinity     // the max number of milliseconds to train for --> number greater than 0
});
*/





net.train([
  { input: 'I agree with the statement', output: 'agree' },
  { input: 'I disagree', output: 'disagree' },
  { input: 'I agree', output: 'agree' },
  { input: 'I can see that', output: 'agree' },
  { input: 'I cannot do that', output: 'disagree' }]);

console.log("300 ******** Finished training");


let output = net.run('I Disagree with that statement'); 
console.log("500 ***** Output is : " + output);
/***************
let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};
//var output = "not defined";
function execute(input) {
   let results = trainedNet(encode(input));
   console.log("&&&& Results is: " + results.toString());
   let output;
   //results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
   //console.log("100 output values. Agree: " + results.trump + " Disagree: " + results.kardashian);
   results.agree > results.disagree ? output = 'Agree' : output = 'Disagree';
   console.log("100 output values. Agree: " + results.agree + " Disagree: " + results.disagree);
   return output;
}

train(trainingData);

console.log("*** 200");


var testInput = prompt("Please input test tweet");
console.log("300 User input was: " + testInput);

var response = execute(testInput);
console.log("400 the tweet is from: " + response);
alert("The tweet was from : " + response);

*/
