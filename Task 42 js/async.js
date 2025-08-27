function checkAge(age) {
    let myPromise = new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve({
                    message: "Age verified successfully",
                    data: {
                        age: age,
                        status: "Eligible for voting"
                    }
                });
            }, [2000]);
        } else {
            setTimeout(() => {
                reject({
                    message: "Age verification failed, Not eligible"
                });
            }, [5000]);
        }
    });
    return myPromise;
}
let verifyAge =async(age)=>{
    try {
        let resolve = await checkAge(age);
        console.log("Result:", resolve);
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Verification attempt completed.");
    }
}
verifyAge(20);
verifyAge(15);
verifyAge(28);