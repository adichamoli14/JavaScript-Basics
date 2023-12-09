console.log('hii hello');
const API_KEY = 'da9c2364505e4a329fdf30179101b15f';

//To display the data on UI
function renderWeatherUpdates(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} ॰C`;
    document.body.appendChild(newPara);
}

//Function to fetch the data from API
async function fetchWeatherUpdates(){
    try{
        const lat = 30.3165;
        const lon = 78.0322;


        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log('here is the data',data);

        renderWeatherUpdates(data);
    }

    catch(e){
        console.log('Error Found',e);
    }
    
}



//Geolocation of the user
function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Geolocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}

