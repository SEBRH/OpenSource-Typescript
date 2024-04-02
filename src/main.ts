import {SalesOrder} from "./sales/domain/model/sales-order";

const developer: "Developer" = "Developer";

export function hello(who: string = developer): string {
    return `welcome, ${who}`;
}

let welcomeMessage : string = hello();

console.log("Functional Section");

console.log(welcomeMessage);

console.log("Object-Oriented Section");

const salesOrder :SalesOrder = new SalesOrder( "C001");
salesOrder.addItem("P001", 2,100);
salesOrder.addItem("P002",3,200);
console.log(`Sales total price is ${salesOrder.calculateItemPrice()}`)