const pwd = function (cmd) {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
      // process.stdout.write(process.env.PWD);
      process.stdout.write(process.cwd());
    } 
    process.stdout.write('\nprompt > '); 
}


process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    // process.stdout.write(process.env.PWD);
    process.stdout.write(process.cwd());
  } 
  process.stdout.write('\nprompt > ');
});

module.exports = {
    pwd
};