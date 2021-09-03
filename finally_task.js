const fs = require("fs")

console.log("*** 🥰 Welcome To Zomato App 🥰***\n")
const readlineSync = require("readline-sync");
const  userName = readlineSync.question("User Enter Your Name---\n");

console.log("\n");
console.log(`Hello ${userName} Welcome To Zomato App🍽️\n`);
console .log("Please Login The Page--\n");


var veg_dish = ["Pizza","Bargur","Momos","Chaumin"];
var veg_dish_price = {"Pizza": 50,"Bargur":55,"Momos":60,"Chaumin":65}

var non_veg_dish = ["Chiken-Korma","Brillient-Briyani","Egg-Pop","Fish-Cary"];
var non_veg_dish_price = {"Chiken-Korma":70,"Brillient-Briyani":75,"Egg-Pop":80,"Fish-Cary":85}

var addTocard = {}
var delivaryCharge = 20;

const loginApp = ()=>{
    const user = readlineSync.question("Enter Your Name--\n")
    console.log("\n");
    
    const password = readlineSync.question("Enter Your  password--\n")
    console.log("\n");
    console.log("Login Successful\n");

    const myAddress = readlineSync.question("Enter Your Location--\n")
    console.log(`My Address is ${myAddress}\n`);
}
let getLoginApp = loginApp();


let dishCategorie = readlineSync.question("Enter Which Food Do You Want To Order--\n1.veg_food\n2.non_veg_food\n")

    if(dishCategorie=="1") {
        console.log(veg_dish);
        console.log("\n")
        
        console.log("1.Pizza:-50Rs.\n","2.Bargur:-55Rs.\n","3.Momos:-60Rs.\n","4.Chaumin:-65Rs.\n")
        var dish = readlineSync.question("Enter Your Dish--\n")
        var x = 0;
        while(x<veg_dish.length) {
            if(dish==veg_dish[x]) {
                console.log("1.Mirazur-Restaurant\n2.Noma-Restaurant\n3.Burma-Restraueant\n4.Hawaii-Restaurant\n")
                searchBar1();
                
            
            }x++   
            
        }
    }else{
        console.log(non_veg_dish);
        console.log("\n")

        console.log("1.Chiken-Korma:-70Rs.\n","2.Brillient-Briyani:-75Rs.\n","3.Egg-Pop:-80Rs.\n","4.Fish-Cary:-85Rs.\n")
        var dish1 = readlineSync.question("Enter Your Dish--\n")
        var y = 0;
        while(y<non_veg_dish.length) {
            if(dish1==non_veg_dish[y]){
                console.log("1.Dizo-Restaurant\n2.Miligo-Restaurant\n3.Lahaina-Restaurant\n4.Hawa-mahal-Restaurant\n")

                searchBar2();
                
            }y++  
        }
    }


function searchBar1(){
    var chooseRestaurant = readlineSync.questionInt("Which Restaurant Do You Want To Choose--\n")
    if(chooseRestaurant==1) {
        console.log("Mirazur-Restaurant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish)
        console.log(veg_dish_price[dish])

        addTocard[dish] = veg_dish_price[dish]+delivaryCharge
    

    }else if(chooseRestaurant==2) {
        console.log("Noma-Restaurant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish)
        console.log(veg_dish_price[dish])

        addTocard[dish] = veg_dish_price[dish]+delivaryCharge
        


    }else if(chooseRestaurant==3) {
        console.log("Burma-Restraueant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish)
        console.log(veg_dish_price[dish])

        addTocard[dish] =veg_dish_price[dish]+delivaryCharge
        

    }else if(chooseRestaurant==4) {
        console.log("Hawaii-Restaurant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish)
        console.log(veg_dish_price[dish])

        addTocard[dish] = veg_dish_price[dish]+delivaryCharge
        

    }else{
        console.log("sorry wrong Restaurant address\n")
    }
}

function searchBar2(){
    var chooseRestaurant = readlineSync.questionInt("Which Restaurant Do You Want To Choose--\n")
    if(chooseRestaurant==1) {
        console.log("Dizo-Restaurant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish1)
        console.log(non_veg_dish_price[dish1])

        addTocard[dish1] = non_veg_dish_price[dish1]+delivaryCharge
        
        

    }else if(chooseRestaurant==2) {
        console.log("Miligo-Restaurant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish1)
        console.log(non_veg_dish_price[dish1])

        addTocard[dish1] = non_veg_dish_price[dish1]+delivaryCharge
        


    }else if(chooseRestaurant==3) {
        console.log("Lahaina-Restaurant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish1)
        console.log(non_veg_dish_price[dish1])

        addTocard[dish1] = non_veg_dish_price[dish1]+delivaryCharge
        


    }else if(chooseRestaurant==4) {
        console.log("Hawa-mahal-Restaurant\n")
        console.log(`Your Delivery Charge is this ${delivaryCharge}Rs.\n`)

        console.log(dish1)
        console.log(non_veg_dish_price[dish1])

        addTocard[dish1] = non_veg_dish_price[dish1]+delivaryCharge
        

    }else{
        console.log("sorry wrong Restaurant address\n")
    }
}

console.log("with delivery charge\n")
console.log("addToCard :-",addTocard)


function payment(){
    var paymentProcess = readlineSync.question("How You Want To Do Payment--\n1.By Cash\n2.Googlpay/Phonepay\n")
    if(paymentProcess=="1") {
        console.log("ByCash\n");
        console.log("Your cash delivary sucessfully\n")
    }else{
        console.log("Googlpay/Phonepay\n")
        var onlinepayment = readlineSync.question("Enter Your Number\n")
        console.log("Your online payment sucessfully\n")
    }
    
}
payment();

console.log("It will reach  after 20min\n")

console.log("Thankyou For Using Zomato");

