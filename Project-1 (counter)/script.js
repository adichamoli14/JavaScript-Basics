// const countValue = document.querySelector('#counter');
const countValue = document.getElementById('counter');

const increment = () =>{
    // get the value from UI
    let value = parseInt (countValue.innerText);   
    // update the value     
    value = value + 1;
    // Set the value
    countValue.innerText = value;
}

const decrement = () =>{
    let value = parseInt (countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}


