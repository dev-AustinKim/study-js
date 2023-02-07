let account = {
    owner : "김동한",
    password : "1234",
    account :  "110-22-1231231"
};

console.log(account);

account.age = 20;

console.log(account.age);

account.money = 10000;
account.deposit = function(money){this.money += money};

account.deposit(30000);
console.log(`${account.money}원`);