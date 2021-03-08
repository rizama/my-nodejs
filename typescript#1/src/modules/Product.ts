import Asus from "./Asus";
import Msi from "./Msi";

let asus = new Asus("Swift 3", false, true);
console.log(asus)
console.log(asus.pressA())

let modern = new Msi("Prestige", true, true);
console.log(modern)
console.log(modern.pressB())