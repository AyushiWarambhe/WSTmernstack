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

checkAge(20).then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
});

checkAge(15).then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
});

checkAge(18).then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>{
    console.log(reject);
});