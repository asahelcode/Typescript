"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} is the daedarus of code`);
};
greet({ name: 'henry', uid: '3849309049' });
