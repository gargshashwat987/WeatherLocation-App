//alert("Test javascript code");

//document.getElementById("greeting").innerHTML = "Good Evening";

//document.querySelector("p#weather").innerHTML= "The weather is Sunny"

//document.querySelector("p#weather").style.color='red';

//document.querySelector("p#weather").style.backgroundColor='green';

/*
document.querySelector("p#weather").classList.add("redbg");
document.querySelector("p#weather").classList.remove("redbg");
document.querySelector("p#weather").classList.toggle("redbg");
document.querySelector("p#weather").classList.toggle("redbg");
*/

/*document.querySelector("p#weather").addEventListener("click", function(){
    alert("weather is updated automatically");
})

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    alert("menu button clicked");
})
*/


const weatherAPIKey = "98b4b419cff83701b7d515bdfdc08692";
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`;

const galleryImages= [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
];

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ];



function menuHandler (){
    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}


/*var customer="SHASHWAT"
let balance=200
console.log("HELLO, " +customer +  ". Your balance is " +balance);

balance= balance + 50
console.log("HELLO, " +customer +  ". Your new balance is " +balance);
*/

/*STRINGS

let accountNumber='I385282390'
accountNumber.length
11
accountNumber[2]
8
accountNumber.slice(0,2)
I38
accountNumber.replace('I','Z')
Z38327582

NUMBERS

let price=14.665
Math.round(price)
15
Math.floor(price)
14
Math.ceil(price)
15
price.toFixed(1)
14.6
#parseFloat is used to add 2 variable type numbers numerically.
num.toString is used to convert a num to string. 
*/




//GREETING SECTION

function greetingHandler(){
    let currentHour = new Date().getHours();
    let greetingText;


    if ( currentHour < 12){
        greetingText = "Good Morning!";
    } else if ( currentHour < 19){
        greetingText = " Good Afternoon!";
    } else if ( currentHour < 24){
        greetingText = "Good Evening! ";
    } else{
        greetingText = "Welcome";
    }


//const greetingText = "Good Morning!";

document.querySelector("#greeting").innerHTML = greetingText;



}





function weatherHandler(){
    navigator.geolocation.getCurrentPosition( position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let url = weatherAPIURL
            .replace("{lat}",latitude).replace("{lon}",longitude).replace("{API key}", weatherAPIKey);
        fetch(url)
        .then( response => response.json())
        .then(data => {
    
            const condition = data.weather[0].description;
            const location = data.name;
            const temper = data.main.temp;
    
            
    let celsiusText = `The weather is ${condition} in ${location} and it's ${temper.toFixed(1)}	°C outside.`
    let fahrText = `The weather is ${condition} in ${location} and it's ${celsiusToFahr(temper).toFixed(1)}°F outside.`
    
    document.querySelector("p#weather").innerHTML = celsiusText;
    
    document.querySelector(".weather-group").addEventListener("click", function(e){
        if(e.target.id == "celsius"){
            document.querySelector("p#weather").innerHTML = celsiusText;
        } else if (e.target.id == "fahr"){
            document.querySelector("p#weather").innerHTML = fahrText;
        }     
    });
    }).catch((err => {
        document.querySelector("p#weather").innerHTML= "Unable to get the weather information. Try again later! "
    }));
    });

};





/*ARRAY

let array1 = [2,4,6,8];
array1
[2,4,6,8]
array1.length
4
array1.push(10)   adds in the end. 
array1
[2,4,6,8,10]
array1.unshift(0)  adds element in the starting.
array1
[0,2,4,6,8,10]

array2= [12,14]

array1.concat(array2)
array1=array1.concat(array2)
array1
[0,2,4,6,8,10,12,14]


OBJECTS

student = { "name":"SHASHA", "YOB":"2003", "PLACE":"GZB"}
student["name"]
>>SHASHA
student.name
>>SHASHA
student.id= 1  adds a new object in student. 
student1={ "name":"SHAS", "YOB":"2004"}
student2={ "name":"VAIB", "YOB":"2002"}
students=[student1, student2];


num1 = 8
num2 = 10
num1 != num2
>>true


DATE & TIME

new Date().getHours();
>>2
new Date().getMinutes();
>>34

*/




//TIME DATE SECTION

function celsiusToFahr(temper){
    let fahr=( temper * 9/5 ) + 32;
    return fahr;
}

function clockHandler(){
    setInterval(function(){  //sets an interval for the clock. 
        let localtime = new Date();
    
        document.querySelector("span[data-time=hours]").textContent=localtime.getHours().toString().padStart(2,"0");
        //padStart is used to give padding. 
        document.querySelector("span[data-time=minutes]").textContent=localtime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent=localtime.getSeconds().toString().padStart(2,"0");
    },1000);   
}





/*LOOPING

for (let a=0; a<10; a++){
    console.log(a);
}
let animals = ["shash","vauh","manu"];
for (let a=0; a<animals.length; a++){
    console.log(animals[a]);
}
>>shash
>>vauh
>>manu

OR

for (let a in animals){
    console.log(animals[a]);
}
>>shash
>>vauh
>>manu


*/



//GALLERY SECTION

//src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"



function galleryHandler(){
    let mainImage = document.querySelector("#gallery > img"); 
    let thumbnails = document.querySelector("#gallery .thumbnails");

//<img src="./assets/gallery/image1.jpg" 
//alt="Thumbnail Image 1" 
//data-array-index="0" data-selected="true">


    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;




// for (let i in galleryImages){
//     console.log(galleryImages[i])
// };

galleryImages.forEach(function(image,index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false ;
    thumbnails.appendChild(thumb);

    thumb.addEventListener("click", function(e){
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = galleryImages[selectedIndex];
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;
        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        });
        e.target.dataset.selected = true;

    });


});

}






//PRODUCT SECTION


function populateProducts(productList){
    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";

    productList.forEach(function(product,index){
        
        
        //create html element for individual product.
        let productel = document.createElement("div");
        productel.classList.add("product-item");
       
       
        //create the product image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;


        //create product details section
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        //create product title,author,price-title,price
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.textContent = product.author;

        
        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.textContent = "Price";

        
        let productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.textContent = product.price>0 ? "$" + product.price.toFixed(2) : "FREE";



        //append the product details

        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(productPrice);
        
        
        
        //add child elements
        productel.append(productImage);
        productel.append(productDetails);
        productsSection.append(productel);

    });

}


function productsHandler(){
    
    let freeProducts = products.filter(function(item){
        return !item.price || item.price<=0;
    });

    let paidProducts = products.filter((item) => {
        return item.price>0;
    });

    // run a loop through the products and create an html element ("product-item") for each of them.
    populateProducts(products);

    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productsFilter = document.querySelector(".products-filter");
    productsFilter.addEventListener("click", function(e){
        if (e.target.id === "all"){
            populateProducts(products);
        } else if (e.target.id === "paid"){
            populateProducts(paidProducts); 
        } if (e.target.id === "free"){
            populateProducts(freeProducts);
        }
    }); 

};



//ARROW => === FUNCTIONS

//Use of array filter

// let numbers = [1,2,3,4,5,6,7,8];
// let greaterthan4 = numbers.filter(function(item){
//     return item>4;
// });
// console.log(greaterthan4);
// >>>[5,6,7,8]



function footerHandler(){
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `© ${currentYear} - All rights reserved`;

};








menuHandler();
greetingHandler();
weatherHandler();
clockHandler();
galleryHandler();
productsHandler();
footerHandler();






