'use strict';
 
const isText = function(data){
  const pattern = new RegExp('[а-яё]','gi');
    return pattern.test(data);
 
};
 
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
     start = function(){
        do{money = prompt ('Ваш месячный доход?',50000); 
            }while(!isNumber(money));
    };  
  start(); 
  
  let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0, 
    income: {},
    addIncome: [],
    expenses: [],
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking(){   
        
        if(confirm('Есть ли у Вас дополнительный заработок?')){
         
          let itemIncome;
          do{
            itemIncome = prompt('Какой у Вас дополнительный заработок?','Таксую');
          }while(!isText(itemIncome));
 
          let cashIncome;
            do{
             cashIncome = prompt('Каккую сумму Вы зарабатываете в месяц?', 10000);
            } while(!isNumber(cashIncome));
 
            appData.income[itemIncome] = cashIncome;
          
        }
        let addExpenses;
        do{
            addExpenses = prompt('Введите обязательные статьи расходов','Интернет, Такси, Коммунальные расходы');
        }while(!isText(addExpenses));
      
          appData.addExpenses = addExpenses.toLowerCase().split(',');
          appData.deposit = confirm ('Eсть ли у Вас депозит в банке?');               
        for(let i = 0; i < 2; i++){
           
            let itemExpenses; 
            do{
                itemExpenses  = prompt('Введите обязательную статью расходов','Садик государственный');
            }while(!isText(itemExpenses));
               
     let cachExpanses;
             do{
                cachExpanses = prompt ("Во сколько это обойдется?",2500);
                
              }while(!isNumber(cachExpanses));
 
              appData.expenses[itemExpenses] = cachExpanses;
        }
 
    },
    getExpensesMonth() { 
       for(let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];         
       } 
    },
    getBudget (){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth (){
        return appData.mission/appData.budgetMonth;   
    },
    getStatusIncome (){
        if(appData.budgetDay > 800){
            return('У вас высокий уровень дохода!');
 
        }else if( appData.budgetDay > 300){
            return('У вас средний уровень дохода');  
        }else if(appData.budgetDay > 0 ){
            return('У вас низкий уровень дохода');  
        }else {
            return('Что то пошло не так');    
        }
        
    },
    getInfoDeposit(){
        if(appData.deposit){
          
          do{
            appData.percentDeposit = prompt('Какой годовой процент?',10);   
          }while(!isNumber(appData.percentDeposit));
 
           do{
            appData.moneyDeposit = prompt('Какая сумма заложена в банк?',10000);
           }while(!isNumber(appData.moneyDeposit));
            
        }
    },
 
    calcSavedMoney(){
       return appData.budgetMonth * appData.period;
    }
  };
 
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log('— Расходы за месяц: ',appData.expensesMonth);
 
if(appData.getTargetMonth() > 0){
    console.log('— Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
    
}else{
    console.log('— Цель не будет достигнута');  
}
console.log(appData.getStatusIncome());
 
for(let key in appData){
    console.log("Наша программа включает в себя данные: "  + key + '-' + appData[key]);
}
 appData.getInfoDeposit();
 

 let str = appData.addExpenses.join();//интернет, такси, коммунальные расходы
 
 function ucFirst(str){
    return str.toUpperCase(str).slice(0, 1) + str.slice(1);  //нтернет, такси, коммунальные расходы
    }
    var arr = str.split(' ');
    var newstr ='';
    for(let key in arr){
    newstr += ucFirst(arr[key]) + ' ';
    
    }
    console.log(newstr);
  
 