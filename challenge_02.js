/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

let vorname = prompt("Wie ist dein Name?");
let age = parseInt(prompt("Wie Alt bist du?"));
switch (true) 
{
    case (age >=0 && age <=5): console.log(vorname + " hat freigabe für Milch.");break;
    case (age >=6 && age <=12): console.log(vorname +" hat freigabe für Milch und Saft.");break;
    case (age >=13 && age <=17): console.log(vorname + " hat freigabe für Milch, Saft und Cola.");break;
    case (age > 17): console.log(vorname + " hat freigabe für Milch, Saft, Cola und Wein.");break;
    default: console.log("Ausgabe verweigert!!!!");
    break;
};