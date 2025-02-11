let total_milk = 0;
let cow = 1;
let cow_cost = 300;
let milk = 3;
let milk_cost = 3;
let remain = 0;
let day;
day = Number(window.prompt("After how much days:"));
function cowculator(days){
    while(days>0){
        daily_benefit = cow*milk*milk_cost; 
        total_benefit = daily_benefit + remain; 
        total_milk = total_milk + cow*milk; 
        if(total_benefit/cow_cost>=1){
            cow=cow+Math.floor(total_benefit/cow_cost);
            remain = total_benefit - Math.floor(total_benefit/cow_cost)*cow_cost; 
        }else{
            remain = total_benefit;
        }
        days = days-1;
    } 
    total_profit = (total_milk)*milk_cost;
    return [cow, total_profit, total_milk, total_benefit];           
}
cowculator(day);
console.log(`The number of cows: ${cow}`);
console.log(`The amount of total profit: ${total_profit}$`);
console.log(`The amount of current budge: ${remain}$`);
console.log(`The amount of total milk: ${total_milk}L`);
console.log(`The amount of total cost: ${(cow-1)*cow_cost}$`);

