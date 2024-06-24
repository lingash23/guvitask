function oddOrEven (num = 0) {
    return new promise ((resolve, reject) => {
        if(num % 2 === 0) resolve("even number");
        else reject("odd number")
    });
}

async function run(num = 0) {
    let result = 0;
    try {
        result = await oddOrEven(num);
        console.log(result);
    } catch (error) {
        console.log("=>", error)
    }
}
run(9);
run(10);
run(11);
run(12);