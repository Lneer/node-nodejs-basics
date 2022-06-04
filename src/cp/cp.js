export const spawnChildProcess = async (args) => {
  const cp = await import('child_process');
  const path = await import ('path');
  const childPath = path.resolve('src','cp','files', 'script.js')

  const childProc = cp.fork(childPath,args )
  childProc.stdin
};


spawnChildProcess([1,2])