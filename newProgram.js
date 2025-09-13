function getInput(prompt){
    console.log(prompt);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    let name = new Promise((resolve, reject) => {
        process.stdin.once('data', (data)=> {
            process.stdin.pause();
            resolve(data.toString().trim());
        });
    })
    return name; 
}

async function main(){
    let i = await getInput("Enter Your Name");
    console.log(i);
    console.log("bye");
}

main();
