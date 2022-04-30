function bookingSuccessfull() {
    alert('Hi your booking is successfull!');
}


// var form = document.getElementById("bookingForm");
// form.onsubmit = function(e){
// //   e.preventDefault();
// var name = document.getElementById("name").value;
//   console.log(name);
// document.getElementById('customerName').innerText=name;
// }



let url = new URLSearchParams(location.search);
//! HTTP request for hotel details
let sendHttpRequestHotel = () => {
    let xhr = new XMLHttpRequest();
 
    xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
 
          let result = JSON.parse(this.responseText).data[0];
 
          document.getElementById("hotel-name").innerText = result.name;
          document.getElementById("ranking").innerText = result.ranking;
          document.getElementById("address").innerText = result.address;
 
          let descriptionPara = document.createElement("h6");
          descriptionPara.innerHTML = result.description;
          document.getElementById("description").appendChild(descriptionPara);
 
         
       }     
 
    });
 
    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "hotels/get-details?lang=en_US&location_id=" + url.get('id'));
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "acf2c06430mshef8ada3955966dfp1a26c5jsn47fbc989a8f3");
 
    xhr.send();
 }
 
 //! HTTP request for hotel photos
 let sendHttpRequestPhoto = () => {
    let xhr = new XMLHttpRequest();
 
    xhr.addEventListener("readystatechange", function () {
       if (this.readyState === this.DONE) {
          let image = document.getElementById("image-div");
          let result = JSON.parse(this.responseText).data;
                
             let img = document.createElement("img");
             img.src = result[0].images.medium.url;
             image.appendChild(img);
                  
       }
    });
    xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "photos/list?lang=en_US&location_id=" + url.get('id'));
    xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "acf2c06430mshef8ada3955966dfp1a26c5jsn47fbc989a8f3");
 
    xhr.send();
 }

 
 sendHttpRequestHotel();
 sendHttpRequestPhoto();