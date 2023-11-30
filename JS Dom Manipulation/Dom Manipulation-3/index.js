//adding 100 para
    //esme 100 baar reflow and 100 baar repaint hua

    //creating a timestamp
    // const t1=performance.now();

    // for(let i=1;i<=100;i++){
    //     let newElement = document.createElement('p');
    //     newElement.textContent='This is para' +i;

    //     document.body.appendChild(newElement);
    // }

    // const t2=performance.now();
    // console.log('This took ' + (t2-t1) + 'ms');



//optimizinng a bit
    // const t3=performance.now();

    // let myDiv = document.createElement('div');

    // for(let i=1;i<=100;i++){
    //     let element = document.createElement('p');
    //     element.textContent='This is para' +i;

    //     myDiv.appendChild(element);
    // }
    // document.body.appendChild(myDiv);

    // const t4=performance.now();
    // console.log('This is the time for optimised wala ' + (t3-t4) + 'ms');



//using fragment
    // const t5=performance.now();
    // let fragment=document.createDocumentFragment();
    // for(let i=1;i<=100;i++){
    //     let newElement = document.createElement('p');
    //     newElement.textContent='This is para' +i;

    //     document.body.appendChild(newElement);
    // }
    // document.body.appendChild(fragment);
    // const t6=performance.now();

    // console.log('This is the time for optimised wala ' + (t5-t6) + 'ms');


//Single threading -> at a time single line/message execute hgi

    // function addPara(){
    //     let para=document.createElement('p');
    //     para.textContent='JS is Single Threaded language';
    //     document.body.appendChild(para);
    // }

    // function appendnNewMessage(){
    //     let para=document.createElement('p');
    //     para.textContent='Yeh dusra para hai';
    //     document.body.appendChild(para);
    // }

    // addPara();
    // appendnNewMessage();


//Set time out

    setTimeout(function(){
        console.log('Hello everyOne');
    },4000);
