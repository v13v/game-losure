'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
     start = function(){
        do{money = prompt ('Ваш месячный доход?'); 
            }while(!isNumber(money));
    };
   
  start(); 
  let expenses =[];


  let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    expensesSum: [],
    addIncome: [],
    expenses: [],
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 0,
    asking(){     
     let addExpenses = prompt('Введите обязательные статьи расходов');
          appData.addExpenses = addExpenses.toLowerCase().split(',');
          appData.deposit = confirm ('Eсть ли у Вас депозит в банке?');
            
             let newSum ; 
            
        for(let i = 0; i < 2; i++){
           
           appData.expenses[i] = prompt('Введите обязательную статью расходов');  
     
             do{
                newSum = prompt ("Во сколько это обойдется?");
                
              }while(!isNumber(newSum));

              appData.expensesSum.push(newSum)
        }

        //console.log( appData.expensesSum);
        //console.log( appData.expenses);
         
    },
    getExpensesMonth() { 
       for(let key in appData.expensesSum){
        appData.expensesMonth = Number(appData.expensesSum[0]) + Number(appData.expensesSum[1]);
           
       } 
    },
    getBudget (){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth/30;
       
        return appData.budgetDay, appData.budgetMonth;
    },
    getTargetMonth (){
        appData.period = appData.mission/appData.budgetMonth * 12;
        
        if(appData.period < 0){
           console.log('Цель не будет достигнута!');   
       }
    },
    getStatusIncome (){
        if(appData.budgetDay > 1200){
            return('У вас высокий уровень дохода!');
        }else if( appData.budgetDay >= 600 && appData.budgetDay<= 1200){
            return('У вас средний уровень дохода');  
        }else if(appData.budgetDay <= 600 && appData.budgetDay >= 1 ){
            return('К сожалению у вас уровень дохода ниже среднего');  
        }else {
            return('Что то пошло не так');    
        }
        
    }
  }

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();


console.log('— Расходы за месяц: ',appData.expensesMonth);
console.log('— Цель будет достигнута за' + appData.period +' месяцев');
console.log(appData.getStatusIncome());

for(let key in appData){
    console.log("Наша программа включает в себя данные: " , appData[key]);
}