const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class BankAccount {
    constructor(id, name, account_no, bal) {
        this.id = id
        this.name = name
        this.account_no = account_no
        this.bal = bal
    }

    credit_amount(amount) {
        this.bal = this.bal + amount
        console.log("Balance after credit is " + this.bal)
    }

    deposite_amount(amount) {
        if (amount > this.bal) {
            console.log("Insufficient balance")
        } else {
            this.bal = this.bal - amount
            console.log("Balance after deposit is " + this.bal)
        }
    }

    show_details() {
        console.log("Id " + this.id)
        console.log("Name " + this.name)
        console.log("Account Number " + this.account_no)
        console.log("Balance " + this.bal)
    }
}

const acc = new BankAccount(1, "Snehal", 123456, 5000)

console.log("1 Check Account Details")
console.log("2 Credit Amount")
console.log("3 Deposite Amount")
console.log("4 Exit")

rl.question("Enter option number ", function(option) {
    option = parseInt(option)

    switch (option) {
        case 1:
            acc.show_details()
            rl.close()
            break

        case 2:
            rl.question("Enter amount ", function(amount) {
                acc.credit_amount(parseInt(amount))
                rl.close()
            })
            break

        case 3:
            rl.question("Enter amount ", function(amount) {
                acc.deposite_amount(parseInt(amount))
                rl.close()
            })
            break

        case 4:
            console.log("Exit")
            rl.close()
            break

        default:
            console.log("Invalid option")
            rl.close()
    }
})
