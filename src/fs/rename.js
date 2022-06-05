export const rename = async () => {
  const path = await import ('path');
  const fs = await import('fs/promises');
  const oldFileName = path.resolve('src','fs','files', 'wrongFilename.txt');
  const newFileName = path.resolve('src','fs','files', 'properFilename.md'); 
  try{
    await fs.stat(oldFileName).catch(() => {throw new Error('FS operation failed') })
    await fs.stat(newFileName)
    .then((newStat) => {
      if(newStat){
        throw new Error('FS operation failed')
      }
    }) 
  }
  catch(err) {
    switch(err.message){
      case 'FS operation failed':
        console.error(err.message);
        break;
      default :
        fs.rename(oldFileName,newFileName);
        break;
    }
  }  
};
rename();
