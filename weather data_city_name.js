var city_name ="Kabul";
var link="http://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=94528344c93dc44101c66757981d3e5a"

//creating req var
var request =new XMLHttpRequest();
//open the request

request.open('GET',link,true);
//request send
request.send();
//load the responce
request.onload = function (){
    var data=JSON.parse(this.response)
   
        console.log(data.weather)
    
}
console.log("hellow world");

