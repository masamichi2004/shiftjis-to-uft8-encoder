import * as iconv from 'iconv-lite';

const text = 'あ';

const sjis = iconv.encode(text, 'CP932');
const utf8 = iconv.encode(text, 'utf-8');

console.log(sjis);
console.log(utf8);
