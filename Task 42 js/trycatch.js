function withdraw(balance, amount) {
    try {
        if (amount > balance) {
            throw ("Insufficient balance!");
        }
        console.log("Withdrawal successful: Rs" + amount);
    } catch (err) {
        console.log("Transaction Failed: "+ err);
    } finally {
        console.log("Thank you for banking with us.");
    }
}

withdraw(5000, 2000);
withdraw(3000, 5000);
withdraw(10000, 1000);