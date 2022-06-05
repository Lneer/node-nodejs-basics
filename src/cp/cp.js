export const spawnChildProcess = async (args) => {
  const cp = await import('child_process');
  const path = await import ('path');
  const childPath = path.resolve('src','cp','files', 'script.js')

 /*  ----   Solution with spaw ---- 
  // const childProc = cp.spawn('node',[childPath,...args])
  // childProc.stdout.on('data', (data) => 
  //   process.stdout.write(data));

  //   process.stdin.on('data', (data) => 
  //   childProc.stdin.write(data)); */

  const childProc = cp.fork(childPath,[...args])
  

};