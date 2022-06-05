export const write = async () => {
    const path = await import ('path');
    const fs = await import('fs');
    const writeFile = path.resolve('src','streams','files','fileToWrite.txt');

    const ws = fs.createWriteStream(writeFile);
    process.stdout.write('input you text:\t');

    process.stdin.on('data', (chunk)=>{
      if(chunk.toString().trim() === 'exit'){
        process.exit();
      }
      ws.write(chunk);
    })
    process.stdin.on('error', (err)=>{
      throw new Error('somthing wrong')
    })
};

write();