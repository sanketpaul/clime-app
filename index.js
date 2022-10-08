

const getweather=()=>{
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showlocation)
}
else{
    console.log("geo not supported on your browser")
}
function showlocation(data){
    
    let lat=data.coords.latitude;
    let lon=data.coords.longitude;
   
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
       
        document.getElementById('city').innerHTML=data.city.name;
        document.getElementById('temp').innerHTML=data.list[0].temp.max;
        document.getElementsByClassName('desc')[0].innerHTML=data.list[0].weather[0].description;
        document.getElementById('wind').innerHTML=data.list[0].speed;
        document.getElementById('humi').innerHTML=data.list[0].humidity;
        document.getElementById('png').src=`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
    })


}


}
window.onload=getweather()
let getcity=()=>{
    let city=document.getElementById('inputcity').value;
    
    url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=4a7ee9263ab763e52e826907535c0554`
    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        
        document.getElementById('city').innerHTML=data.name;
        document.getElementById('temp').innerHTML=data.main.temp;
        document.getElementsByClassName('desc')[0].innerHTML=data.weather[0].description;
        document.getElementById('wind').innerHTML=data.wind.speed;
        document.getElementById('humi').innerHTML=data.main.humidity;
        document.getElementById('png').src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        

    })

}




