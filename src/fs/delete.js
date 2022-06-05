export const remove = async () => {
  const path = await import ('path');
  const fs = await import('fs/promises');
  const deleteFile = path.resolve('src','fs','files','fileToRemove.txt');
  try {
    await fs.rm(deleteFile).catch((err) => { throw new Error ('FS operation failed')})
  } catch (error) {
    console.error(error.message);
    console.log('file already removed')
  }
};
remove();