"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} is the daedarus of code`);
};
const creditAccount = (account, amount) => {
    account.balance += amount;
    console.log(`Your account has successfully been credited with ${amount}, balance N${account.balance}`);
};
greet({ name: 'henry', uid: '3849309049' });
creditAccount({ name: 'Henry', balance: 560000, guarantor: 'Blend', passcode: '4559' }, 450830);
