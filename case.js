const userName = 'blackPink';
const userInput = 'blackPinK';

console.log(userName.toLocaleLowerCase());

if (userName.toLocaleLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}