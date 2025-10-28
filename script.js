//http://api.weatherapi.com/v1/current.json?key=0f747862f0504b86b35174202252810&q=hyderabad&aqi=no
//let thlocation="hyderabad"
let locationname=document.querySelector(".name")
let humidityvalue=document.querySelector(".humidity")
let timehere=document.getElementsByClassName(".date-day")
let conditionnn=document.getElementsByClassName(".condition")
let timehere2=document.querySelector(".date-day")
let condition2=document.querySelector(".condition")


console.log(timehere)
console.log(timehere2)
console.log(conditionnn)
console.log(condition2)
//let form=document.querySelector("form")

//form.addEventListener('submit',search)

navigator.geolocation.getCurrentPosition(success,error);
function success(position){
    const lat=position.coords.latitude;
    const log=position.coords.longitude;
    fetchresults(lat,log)
}
function error(){
    console.log("unable to retrieve your loc")
}



//const fetchresults = async (lat,log)=>{
       async function fetchresults (lat,log){
    let url=`http://api.weatherapi.com/v1/current.json?key=0f747862f0504b86b35174202252810&q=${lat},${log}`
    const res=await fetch(url)
    const data= await res.json()
    console.log(data)
    let location=data.location.name
    let humidity=data.current.humidity
    let time=data.location.localtime
    let condition=data.current.condition.text
    let temp=data.current.temp_c
    update(location,temp,time,humidity,condition)

}
    /*console.log(data.location.name)
    let nameofthelocation= data.location.name
    let humidityy= data.current.humidity
    console.log(data.current.condition.icon)
    let icns=data.current.condition.icon
    let icoons="https:"+icns
    updates(nameofthelocation,humidityy,icoons)



}

function updates(nameofthelocation,humidityy,icoons){

    locationname.innerText=nameofthelocation
    humidityvalue.innerText=humidityy
    document.getElementsByClassName(".icons").src=icoons

}

function search(e){
    e.preventDefault()
    thlocation=document.getElementById("searching").value;
    fetchresults(thlocation)

}
*/


//fetchresults(thlocation)


function update( location,temp,time,humidity,condition){
    locationname.innerText=location
    timehere2.innerText=time
    humidityvalue.innerText=humidity
    condition2.innerText=condition
     document.querySelector(".temp").innerText=temp

}
