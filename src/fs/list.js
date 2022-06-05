export const list = async () => {
    const path = await import ('path');
    const fs = await import('fs/promises');
    const listFolder = path.resolve('src','fs','files');
    try {
      await fs.readdir(listFolder)
      .then((list) => {list.forEach((elem) => {console.log(elem)})})
      .catch(() => {throw new Error ('FS operation failed')})
    } 
    catch (error) {
      console.error(error.message);
    }
};
list();