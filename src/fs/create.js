export const create = async () => {
  const path = await import ('path');
  const fs = await import('fs/promises');
  const filePath = path.resolve('src','fs','files','fresh.txt');
  const fileContent = 'I am fresh and young';
  try{
    const stat = await fs.stat(filePath)
    if(stat.isDirectory()) {throw new Error('don\'t try to deceive me')}
    else {throw new Error('FS operation failed')}
  }
  catch(err) {

    switch(err.message){
      case 'don\'t try to deceive me' : 
        console.error(err.message);
        break;
      case 'FS operation failed':
        console.error(err.message);
        break;

      default:
        console.log('Ok, lets create file')
        try{
          await fs.open(filePath,'w')
          await fs.appendFile(filePath, fileContent);
          console.log('file created')
        }
        catch(err){
          console.error(err)
        }
    }  
  };
}
create();