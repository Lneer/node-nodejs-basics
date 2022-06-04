export const copy = async () => {
  const path = await import ('path');
  const fs = await import('fs/promises');
  const fromPath = path.resolve('src','fs','files');
  const toPath = path.resolve('src','fs','files_copy');

  const copyDir = async (sourcePath, targetPath) => {
    try{
      fs.mkdir(targetPath)
      const fileList = await fs.readdir(sourcePath,{withFileTypes:true})
      fileList.forEach((elem)=> {
       
        if (elem.isFile()){fs.copyFile(path.join(sourcePath, elem.name), path.join(targetPath, elem.name))} 
        else {
          copyDir(path.join(sourcePath, elem.name) ,path.join(targetPath, elem.name));}
      })
    }
    catch (err){
      console.error(err.message);
    }
  };

  try{
    const statFrom = await fs.stat(fromPath)
    const statTo = await fs.stat(toPath)
    if(statFrom.isFile()) {
      fs.copyFile( fromPath, toPath)
    }
    if(statTo) {
    throw new Error('FS operation failed')
    }
  }

  catch(err) {
    if(err.message === 'FS operation failed'){
      console.error(err.message);
    } else {
       copyDir(fromPath, toPath);
    }       
  }  
};