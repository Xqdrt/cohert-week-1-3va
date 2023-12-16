let start=new Date();

function procces() {
  let endTime = new Date();
  let elapsedTime = endTime - start;

  console.log("Time elapsed:", elapsedTime, "milliseconds");
}
setTimeout(procces,1000);
