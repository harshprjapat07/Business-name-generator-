/*create a business name genetor by combining list of adjectives and shop name and another word:

adjectives=>
    Crazy 
    Amazing
    Fire

Shop Name=>
    Engine
    Foods 
    garments

another words==>
    bros
    limited
    Hub
don't use the array
only use string. 
*/

let rand = Math.random();
console.log(rand);
let first, second, third;
//first-name
if (rand<0.33)
{
    first = "Crazy";
}
else if (rand<0.66 && rand>0.33){
    first = "Amazing";
}
else{
    first = "Fire";
}
//Second- name
if (rand<0.33)
{
    second = "Engine";
}
else if (rand<0.66 && rand>0.33){
    second = "Foods";
}
else{
    second = "Garments";
}
//third-name
if (rand<0.33)
{
    third = "Bros";
}
else if (rand<0.66 && rand>0.33){
    third = "Limited";
}
else{
    third = "Hub";
}
console.log("Your Business name is :",first,"",second,"",third );
