// n should be received from main thread
const {workerData, parentPort,threadId} = await import ('worker_threads')

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


export const sendResult = () => {
  const fibN = nthFibonacci(workerData);
  const result = {}
  if (fibN){
    result.status = 'resolved'
    result.data = fibN
    result.coreID = threadId
  } else{
    result.status = 'error'
    result.data = null
    result.coreID = threadId
  }
  parentPort.postMessage(result)
};
sendResult();