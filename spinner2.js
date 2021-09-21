const symbol = ["|", "-", "\\", "|", "-", "\\", "|"];
let timeOut = 0;
for (const i of symbol) {
  timeOut += 1000;
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, timeOut);

}

setTimeout(() => {
  process.stdout.write('\n');
}, timeOut + 1000);

