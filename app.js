// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// phoneManufacturers.forEach(brand => {
//     document.write(`<option>${brand}</option>`);
// });
// document.write("</select>");


// var lifoArray = [];
// lifoArray.push("First");
// lifoArray.push("Second");
// lifoArray.push("Third");
// document.write("LIFO: " + lifoArray.pop() + ", " + lifoArray.pop() + ", " + lifoArray.pop() + "<br>");

// var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran",
//     "Iraq","Ireland","Isle of Man","Israel","Italy",
//     "Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya",
//     "Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho",
//     "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau",
//     "Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
//     "Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat",
//     "Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia",
//     "New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea",
//     "Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda",
//     "Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles",
//     "Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis",
//     "St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan",
//     "Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan",
//     "Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela",
//     "Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// var arr = [];

// for (var i=0; i < country_list.length;i++){
//   if(country_list[i].includes("St")) { 
//         arr.push(country_list[i]);
//     }  
// }
// console.log(arr);


// var input = +prompt("Enter Password Range");
// var randomValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_#$*';
// var Password = "";
// for(var i= 0 ; i < input; i++){
//     var randomNumbers = Math.floor(Math.random() * randomValues.length);
//     Password += randomValues[randomNumbers];
// }

// console.log(Password);


// var headUser = prompt("Enter head username");
// var tailUser = prompt("Enter tail username");

// var toss = Math.random();
// var selectedValue = Math.round(toss);

// if (selectedValue === 0){
//     al
// }


var userInput = prompt("Enter any word");
var palindromeValue = "";
for(var i = userInput.length-1 ; i >= 0; i--){
    palindromeValue += userInput[i];
}
    if (userInput === palindromeValue){
        alert("It is Palindrome")
    }
    else{
        alert("Its not")
    }
