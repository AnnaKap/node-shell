const pwd = require('./pwd.js');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd'){ 
      pwd();
    // process.stdout.write(process.env.PWD);
    // process.stdout.write(process.cwd());
  } else {
    process.stdout.write('invalid input: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});

