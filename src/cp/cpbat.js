import {spawnChildProcess} from './cp.js'
const args=process.argv;
let clicedArgs = args.slice(2)

if(clicedArgs.length === 0) {
	clicedArgs = clicedArgs.concat(["--propName","value","--prop2Name","value2"])
		
}
spawnChildProcess(clicedArgs)