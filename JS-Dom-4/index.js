//sync JS
    // function sync(){
    //     console.log('first');
    // }

    // sync();
    
    // console.log('second');

//asyn JS
    // setTimeout(function() {
    //     console.log('third');
    // },3000);

    // function sync(){
    //         console.log('first');
    //     }
    // sync();

    // console.log('second');


//promise
    // let meraPromise1 = new Promise(function(resolve, reject){
    //     setTimeout(function(){
    //         console.log('i am inside promise1');
    //     },5000);
    //     resolve(1404);
    //     // reject(new Error('Bhaisahab error ayee hai !'));
    // })

    // meraPromise1.then((value) =>{console.log(value)} , (error) =>{console.log('Received an error')});


    // let meraPromise2 = new Promise(function(resolve, reject){
    //     setTimeout(function(){
    //         console.log('i am inside promise2');
    //     },3000);
    //     // resolve(1404);
    //     reject(new Error('Bhaisahab error ayee hai !'));
    // })

    // meraPromise2.catch((error) =>{console.log('Received an error')});

    // console.log('phela');


    // let waada1= new Promise(function(resolve, reject){
    //     setTimeout(()=> {
    //         console.log('settimeout1 started');
    //     },2000);
    //     resolve(true);
    // })

    // waada1.then(()=> {
    //     let waada2= new Promise(function(resolve, reject){
    //         setTimeout(()=> {
    //             console.log('settimeout2 started');
    //         },3000);
    //         resolve('returned value');
    //     });
    //     return waada2;
    // }).then((value)=> console.log(value));


//Async function
    // async function utility(){

    //     let delhiMausam = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('Delhi mei bht grmi hai');
    //         },50000);
    //     });

    //     let ukMausam = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("Uttarakhand is cool");
    //         },10000);
    //     });

        // let dm = delhiMausam;
        // let um = ukMausam;

        //await
            // let dm = await delhiMausam;
            // let um = await ukMausam;

    //     return(dm, um);

    // }

//Fetch API

        //get
            // async function utility(){
            //     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            //     let output = await content.json()
            //     console.log(output)
            //     // console.log(content)
            // }
            // utility();

        // async function helper(){
        //     //post
        //         //yeh copy paste from https://jsonplaceholder.typicode.com/guide/
        //         let options = {
        //             method: 'POST',
        //             body: JSON.stringify({
        //             title: 'Aditya',
        //             body: 'Bht mst',
        //             userId: 14,
        //             }),
        //             headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //             },
        //         };

        //         let content = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        //         let response = content.json();
        //         return response;

        // }

        // async function utility(){
        //     let ans = await helper();
        //     console.log(ans);
        // }

        // utility();


//Closure

    // function init(){
    //     let name = 'aditya';
    //     function printName(){
    //         let name ='chamoli';
    //         console.log(name);
    //     }
    //     printName();
    // }
    // init();


    function init(){
        let name = 'aditya';
        function displayName(){
            console.log(name);
        }
        return displayName;
    }
    let a = init();

    a();
  
