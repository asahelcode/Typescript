type strOrNum = string | number;
type userObject = { name: string; uid: strOrNum };
type bankAccount = {
  name: string;
  balance: number;
  guarantor: string;
  passcode: string;
};

const logDetails = (uid: strOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: userObject) => {
  console.log(`${user.name} is the daedarus of code`);
};

const creditAccount = (account: bankAccount, amount: number): void => {
  account.balance += amount;
  console.log(
    `Your account has successfully been credited with ${amount}, balance N${account.balance}`
  );
};

greet({ name: 'henry', uid: '3849309049' });

creditAccount(
  { name: 'Henry', balance: 560000, guarantor: 'Blend', passcode: '4559' },
  450830
);
