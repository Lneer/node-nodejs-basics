export const calculateHash = async () => {
    const path = await import ('path');
    const fs = await import('fs');
    const crypto = await import('crypto');
    const readFile = path.resolve('src','hash','files','fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256')
    const rf = await fs.promises.readFile(readFile);
   return new Promise((resolve) => {
    const data = hash.update(rf).digest('hex')
       resolve(data)
   })
};
console.log(await calculateHash());