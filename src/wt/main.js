import { resolve } from 'path';
import { setTimeout } from 'timers';

export const performCalculations = async () => {
  const {Worker} = await import('worker_threads')
  const os = await import ('os')
  const path = await import ('path');
  const cpuNum =  os.cpus().length;
  const workerPath = path.resolve('src','wt','worker.js')
  let result = []
  let nFib = 10;
  for (let i = 0; i < cpuNum; i++){
    new Worker(workerPath, { workerData: nFib })
    .on('message', (message)=> result.push(message)) ;
    nFib++
  }
 setTimeout(()=>console.log(result),200 )
  
};

performCalculations();