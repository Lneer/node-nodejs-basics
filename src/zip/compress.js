export const compress = async () => {
    const path = await import ('path');
    const fs = await import('fs');
    const zlib = await import('zlib');

    const readFile = path.resolve('src','zip','files','fileToCompress.txt');
    const destinationFile = path.resolve('src','zip','files','archive.gz');
    const rs = fs.createReadStream(readFile);
    const ws = fs.createWriteStream(destinationFile);

    rs.pipe(zlib.createGzip()).pipe(ws);
};
compress();