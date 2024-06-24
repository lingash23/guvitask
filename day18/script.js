//async function getTodos () {
   // const response = await fetch ("https://jsonplaceholder.typicode.com/todos/");
  //  const result= await response.json();
  //  console.log(result);
  //  console.log("hellow all");
//}
//getTodos();

async function prom1(num = 0) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 ==0){
                resolve("even num");
            } else {
                reject("odd num");
            }
        },5000);
    });
}

async function 