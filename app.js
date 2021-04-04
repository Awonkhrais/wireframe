// This code now for 102:lab04

// alert('Hello Iam Awon Khrais');
// /*
//    I live in Irbid,Idoun .
//    I am graduated before 2 years from Yarmouk universit from civil engineer department.
//    And now I am learning to as softwer developer.
// */
// alert('I was born in:'+1996);

// var X = 25;
// alert(X+25);

// var MyGithupUsername='Githup account:awonkhrais';
// document.write(MyGithupUsername);

// var x=  prompt('enter you age','25');

// alert(x/2);

// if(x<0) {
// alert('you input a negative value')
// }
// else{
//     alert('You input a positive value');
// }
// if(x==25)
// {
// alert(25);
// }

// This code now for 102:lab05
// 1) Keep asking until an acceptable value is entered.
// 2) Show an image related to your page’s topic, repeated within your page.

alert ("Welcome To Khrais Company:Electronic Company");

var Password = prompt ('please enter the password for this company:');
while(Password !== 'khrais') {
    Password = prompt ('You cannot enter,your password wrong please check form it');
    Password = prompt ('The correct password is khrais');
}


var favouriteBrands = prompt("What Is Your Favourite Brands?");

while (favouriteBrands !== 'dell' && favouriteBrands !== 'hp') {
   favouriteBrands = prompt('please write just dell or hp');
   if(favouriteBrands=='dell'||favouriteBrands=='hp' )
   {
       alert ('Welcome to Laptop World');
       document.write('<h3> Welcome to Laptop World <h3>') ;
   }
   
    
        }
    
    


    var getfavouriteBrands = function () {
    var numberOfProducts = prompt('How many number of this products do you want?');
        var Products = '5';
       

        for ( var i = 0; i < numberOfProducts; i++){
            console.log(i);
        
if (favouriteBrands == 'dell') {
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg"/> ');

} else if (favouriteBrands == 'hp') {
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Logo_HP.PNG/1200px-Logo_HP.PNG"/> ');
    
}
 console.log(Products);
 console.log(i);
 

  

}
    }
getfavouriteBrands();