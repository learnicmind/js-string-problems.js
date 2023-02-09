const lyrics = 'tumi bondhu kala pakhi ami jeno ki?boshonto kale tomay bolte parini';

search:
const doesexist = lyrics.includes("boshonto");
// console.log(doesexist);

// split:
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(chars);

// slice;
const partial = lyrics.slice(5, 8);
console.log(partial);