export const parseEnv = () => {
    const env = process.env
    let result = ''
    for (let elem in env){
        if (elem.includes('RSS_')){
        result += `${elem}=${env[elem]}; `
        }
    }
    console.log(result.slice(0, result.length-2))
};