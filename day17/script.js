const x = new Promise((resolve, reject) => {
        resolve("success");
    });
console.log(x);
x.then((response) => {
    console.log("Response", response);
});
.catch ((error) => {
    console.log("Error", error);
});
