const items = [
    { name: "ayam goreng krispi", price: 15000, category: "food"},
    { name: "ayam bakar", price: 20000, category: "food" },
    { name: "ayam puk puk", price: 13000, category: "food" },
    { name: "esteh", price: 5000, category: "drink" },
    { name: "es jeruk", price: 7000, category: "drink" }
];

const taxFood = 0.05;      
const taxDrink = 0.03;     
const transactionTax = 0.15; 

function calculateTotal(order) {
    let foodTotal = 0;
    let drinkTotal = 0;

    order.forEach(orderItem => {
        const item = items.find(i => i.name === orderItem.name);
        if (item) {
            if (item.category === "food") {
                foodTotal += item.price * orderItem.quantity * (1 + taxFood); 
                console.log(foodTotal)
            } else if (item.category === "drink") {
                drinkTotal += item.price * orderItem.quantity * (1 + taxDrink); 
            }
        }
    });
    const total = (foodTotal+drinkTotal) * (1 + transactionTax);
    
    return total;
}

const rehanOrder = [
    { name: "ayam bakar", quantity: 2 },
    { name: "esteh", quantity: 1 }
];

const ambaOrder = [
    { name: "ayam puk puk", quantity: 1 },
    { name: "esteh", quantity: 3 }
];

const faizOrder = [
    { name: "ayam bakar", quantity: 1 },
    { name: "ayam puk puk", quantity: 1 },
    { name: "esteh", quantity: 1 },
    { name: "ayam goreng krispi", quantity: 1},
    { name: "es jeruk", quantity: 1}
];

const rehanTotal = calculateTotal(rehanOrder);
const ambaTotal = calculateTotal(ambaOrder);
const faizTotal = calculateTotal(faizOrder);

console.log("Total biaya untuk Rehan Whangsap: Rp", rehanTotal.toFixed(0));
console.log("Total biaya untuk Amba Roni: Rp", ambaTotal.toFixed(0));
console.log("Total biaya untuk Faiz Ngawi: Rp", faizTotal.toFixed(0));
