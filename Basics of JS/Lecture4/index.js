console.log('Hii bro')

//Hoisting
    // run();
    // function run(){
    //     console.log('runnnig');
    // }

//function assignment
    // let stand=function walk(){
    //     console.log("walking");
    // }
    // stand()

//Error handling
    //function to print a message if it is a string else throw exception
        // function print(value){
        //     if (typeof value !== 'string'){
        //         throw new Error("You have not entered a string");
        //     }
        //     console.log(`This function is excecuted successfully and you have entered: ${value}`);
        // }

        // try{
        //     print('adi');
        // }
        // catch(e){
        //     alert(e);
        // }

//Reduce an array
    let arr=[1,2,3,4];
    // let total=0;

    // for(let val of arr)
    //     total=total+val;

    // console.log(total);

    let totalSum=arr.reduce((accumulator, currentvalue)=>accumulator+currentvalue,0)
    console.log(totalSum)
