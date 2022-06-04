export const decompress = async () => {
    const path = await import ('path');
    const fs = await import('fs');
    const zlib = await import('zlib');
    const stream = await import('stream')

    const readFile = path.resolve('src','zip','files','archive.gz');
    const destinationFile = path.resolve('src','zip','files','fileToCompress1.txt');
    
    stream.pipeline(
        fs.createReadStream(readFile),
        zlib.createUnzip(),
        fs.createWriteStream(destinationFile),
        (err) => {
            if(err){
                console.error(err.message)
            }
            
        }
    )
       
   
};
decompress();