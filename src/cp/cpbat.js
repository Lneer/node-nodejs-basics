import {spawnChildProcess} from './cp.js'
const args=process.argv;
let clicedArgs = args.slice(2)

spawnChildProcess(clicedArgs)