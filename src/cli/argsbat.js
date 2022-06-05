import {parseArgs} from './args.js';
let args = process.argv;
let clicedArgs = args.slice(2)

if(clicedArgs.length === 0) {
	process.argv = args.concat(["--propName","value","--prop2Name","value2"])
}

parseArgs();