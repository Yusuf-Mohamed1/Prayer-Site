var cities=["القاهره","القليوبية","الغربية","الشرقية","الدقهليه","الفيوم","الجيزة","الاسكندرية","اسوان","قنا","سوهاج","اسيوط","الاقصر","كفر الشيخ","الاسماعليه","المنوفيه","المنيا","السويس","بورسعيد","دمياط","البحر الاحمر","الوادي الجديد"]

for(let i of cities){
    let content=`
    <option>${i}</option>
    `
    document.getElementById("select_ciites").innerHTML +=content
}

window.onload = function(){
    initial()
}

function initial(){
    getprayers("القاهره")
}

document.getElementById("select_ciites").addEventListener("change",function(){
    var x=document.getElementById("select_ciites").value
    document.getElementById("town").innerHTML =x
    if(this.value =="الدقهليه") getprayers("Ad Daqahlīyah")
    if(this.value =="البحر الاحمر") getprayers("Al Baḩr al Aḩmar")
    if(this.value =="الفيوم") getprayers("Al Fayyūm")
    if(this.value =="القاهره") getprayers("Al Qāhirah")
    if(this.value =="القليوبية") getprayers("Al Qalyūbīyah")
    if(this.value =="الغربية") getprayers("	Al Gharbīyah")
    if(this.value =="الشرقية") getprayers("Ash Sharqīyah")
    if(this.value =="الجيزة") getprayers("Al Jīzah")
    if(this.value =="الاسكندرية") getprayers("Al Iskandarīyah")
    if(this.value =="اسوان") getprayers("Aswān")
    if(this.value =="قنا") getprayers("Qinā")
    if(this.value =="سوهاج") getprayers("Sūhāj")
    if(this.value =="اسيوط") getprayers("Asyūţ")
    if(this.value =="الاقصر") getprayers("Al Uqşur")
    if(this.value =="الاسماعليه") getprayers("Al Ismā'īlīyah")
    if(this.value =="المنوفيه") getprayers("Al Minūfīyah")
    if(this.value =="المنيا") getprayers("Al Minyā")
    if(this.value =="السويس") getprayers("As Suways")
    if(this.value =="بورسعيد") getprayers("Būr Sa‘īd")
    if(this.value =="دمياط") getprayers("Dumyāţ")
    if(this.value =="الوادي الجديد") getprayers("Al Wādī al Jadīd")
    if(this.value =="كفر الشيخ") getprayers("Kafr ash Shaykh")
})

function getprayers(cityname){
    let params ={
        country:"EG",
        city:cityname //"Makkah al Mukarramah"
    }
    
    axios.get('https://api.aladhan.com/v1/timingsByCity', {params: params})
        .then(function (response) {
            const timings =response.data.data.timings
            gettime("fajr",timings.Fajr)
            gettime("shorok",timings.Sunrise)
            gettime("tohor",timings.Dhuhr)
            gettime("asr",timings.Asr)
            gettime("magrab",timings.Maghrib)
            gettime("asha",timings.Isha)
            const day=response.data.data.date
            const dayandmonth=response.data.data.date.gregorian.date
            document.getElementById("history").innerHTML = dayandmonth
            document.getElementById("today").innerHTML = day.hijri.weekday.ar
        })
        .catch(function (error) {
            console.log(error);
        })
}


function gettime(id,time){
    document.getElementById(id).innerHTML=time
} 
