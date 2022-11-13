// reading files in human readable format
const decoder = new TextDecoder('utf-8');

const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));

// writing files
// encoder
const encoder = new TextEncoder();
const text = encoder.encode('hello ya back');
await Deno.writeFile('readme.txt', text);

