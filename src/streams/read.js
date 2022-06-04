export const read = async () => {
    const path = await import ('path');
    const fs = await import('fs');
    const readFile = path.resolve('src','streams','files','fileToRead.txt');
    
      const rs = fs.createReadStream(readFile);
      rs.on('data', chunk => {
        process.stdout.write(chunk.toString())
      })
  
      rs.on('error', () => {
        throw new Error ('Error read file')
      })
};