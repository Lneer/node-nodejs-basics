export const parseArgs = () => {
    const argsArr = process.argv;
    let result = ''
    argsArr.forEach((elem, i,arr) => {
        if(elem.includes('--')){
            result += `${elem.replace('--', '')} is ${arr[i+1]}, `
        }
    })
    console.log(result.slice(0,result.length-2))
};