const menu = [
    { name: 'Margherita', price: 8 },
    { name: 'Pepperoni', price: 10 },
    { name: 'Hawaiian', price: 10 },
    { name: 'Veggie', price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

type pizzaObject = {
    name: string;
    price: number;
};
type orderType = {
    id: number;
    pizza: object;
    status: string;
};

function addNewPizza(pizzaObj: pizzaObject) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder: orderType = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number) {
    const order: object = orderQueue.find((order) => order.id === orderId);
    order.status = 'completed';
    return order;
}

addNewPizza({ name: 'Chicken Bacon  Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 11 });

placeOrder('Chicken Bacon Ranch');
completeOrder(1);

console.log('Menu:', menu);
console.log('Cash in red register:', cashInRegister);
console.log('Order queue:', orderQueue);
