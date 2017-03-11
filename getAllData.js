
/*
var apiKey = "YOURKEY";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
 }
}

xhr.send();

*/




getAll();
function getAll() {

  //http://destinyapiguide.azurewebsites.net/firstRequest
  //http://destinyapiguide.azurewebsites.net/moreRequests
  //http://bungienetplatform.wikia.com/wiki/Endpoints

  console.log("getAll function called");

  var apiKey = "YOURKEY";

  $.ajax({
//url: "https://www.bungie.net/Content/Site/News/10/1",

//url: "https://www.bungie.net/Platform/Destiny/Explorer/Items/",

url: "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/",

 //url: "https://www.bungie.net/en/Application/Authorize/11586",
  headers: {
  "X-API-Key": apiKey
  }
  }).done(function(json){

console.log("get JSON called");
  //console.log(json.Response.data.inventoryItem.itemName);  //Gjallarhorn

  //var data = $.parseJSON(json.Response.data);
  //var dataLength = json.Response.data.itemHashes.length;
  alert(json.Response.data.inventoryItem.itemName);
  //alert(json.Response.data.itemHashes[0]);
  //alert(dataLength);

  //data(Object.keys(json.Response.data[0]).length);
  //alert(dataLength);
  /*
  for (var i = 0; i < json.Response.data.length; i++) {



  }
*/



  });
}

