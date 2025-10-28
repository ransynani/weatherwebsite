//http://api.weatherapi.com/v1/current.json?key=0f747862f0504b86b35174202252810&q=hyderabad&aqi=no
let thlocation="hyderabad"
let locationname=document.querySelector(".name")
let humidityvalue=document.querySelector(".humidity")
let form=document.querySelector("form")

form.addEventListener('submit',search)





const fetchresults = async (thlocation)=>{
    let url=`http://api.weatherapi.com/v1/current.json?key=0f747862f0504b86b35174202252810&q=${thlocation}&aqi=no`
    const res=await fetch(url)
    const data= await res.json()
    console.log(data)
    console.log(data.location.name)
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

fetchresults(thlocation)
