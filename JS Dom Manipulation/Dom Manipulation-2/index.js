//----- addEventListner -----------

    // document.addEventListener('click',function(){
    //     console.log('Youu clicked on the document');
    // });

    // function eventFunction(){
    //     console.log('Hey you have clicked on the document');
    // };
    // document.addEventListener('click',eventFunction);

//removeEventListner
    // function event_fun(){
    //     console.log('Hii');
    // }

    // document.addEventListener('click',event_fun);
    // document.removeEventListener('click',event_fun);

//event object
    // let content=document.querySelector('#wrapper');

    // content.addEventListener('click',function(event){
    //     console.log(event);
    // });

//the default action
    // let links=document.querySelectorAll('a');
    // let thirdlink=links[2];

    // thirdlink.addEventListener('click',function(event){
    //     event.preventDefault();
    //     console.log('Maza aya');
    // });

//Avoid too many events
    let myDiv=document.createElement('div');

    for(let i=1;i<=100;i++){
        let newElement=document.createElement('p');
        newElement.textContent='this is a new para' + i;

        newElement.addEventListener('click',function(event){
            console.log('i have clicked on para');
        });
        myDiv.appendChild(newElement);
    }
    document.appendChild(myDiv);