import * as iconv from 'iconv-lite';

const sjis = Buffer.from([0x82, 0xa0]);
const utf8 = Buffer.from([0xe3, 0x81, 0x82]);

console.log(iconv.decode(sjis, 'CP932'));
console.log(iconv.decode(utf8, 'utf-8'));
