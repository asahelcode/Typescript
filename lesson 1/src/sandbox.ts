type strOrNum = string | number;
type userObject = { name: string; uid: strOrNum };

const logDetails = (uid: strOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: userObject) => {
  console.log(`${user.name} is the daedarus of code`);
};

greet({ name: 'henry', uid: '3849309049' });
