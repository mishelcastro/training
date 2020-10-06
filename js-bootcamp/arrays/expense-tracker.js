//first challenge
const account = {
    name:'Mishel Castro',
    expenses:[],
    income:[],
    addExpense: function(description,amount){
        this.expenses.push({
            description:description,
            amount:amount
        })
    },
    addIncome: function(description,amount){
        this.income.push({
            description:description,
            amount:amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function(expense){
            totalExpenses=totalExpenses + expense.amount
        })

        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome -totalExpenses
        return `${this.name} has a balance of ${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }

}

//expense --> description (string); amount (how much was spent in num)
//addExpense method - two args, (description, amount) - 
//getAccountSummary - no args, total up all expenses and print 'mishel castro has
//$123212323 in expenses' - use forEach to get each cost 

account.addExpense('Rent',950)
account.addExpense ('Coffee', 2)
account.addExpense('Vet Bills', 600)
account.addIncome ('Work', 4500)
console.log (account.getAccountSummary())
 