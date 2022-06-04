export const read = async () => {
  const path = await import ('path');
  const fs = await import('fs');
  const readFile = path.resolve('src','fs','files','fileToRead.txt');
  
    const rs = fs.createReadStream(readFile);
    rs.on('data', chunk => {
      console.log(chunk.toString())
    })

    rs.on('error', () => {
      try {
      throw new Error('FS operation failed');
      }
      catch (error) {
        console.error(error.message)
      }
    })
  
};
read();