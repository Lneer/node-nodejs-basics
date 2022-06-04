export const transform = async () => {
    const path = await import ('path');
    const fs = await import('fs');
    
    process.stdin.on('data', (chunk) =>{
        if(chunk.toString().trim() === 'exit'){
            process.exit();
          }
        let reversedchunk = chunk.toString().split('').reverse().join('') + '\n'
        process.stdout.write(reversedchunk)
    })
    process.stdin.on('error', (err)=>{
        throw new Error('somthing wrong')
      })
};
transform();