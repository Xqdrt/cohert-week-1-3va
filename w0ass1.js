let i=30;
function hello(){
  console.log(i);
  i--;

  if(i<0){
    clearInterval(id);;
  }
    
}
let id =setInterval(hello,1000);
