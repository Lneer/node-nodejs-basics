import path from 'path';
import fs from 'fs';
import  { release, version } from 'os';
import  {createServer as createServerHttp} from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const aFile = await fs.promises.readFile(path.join(__dirname, 'files','a.json'))
const bFile = await fs.promises.readFile(path.join(__dirname, 'files','b.json'))
const random = Math.random();


let unknownObject;

if (random > 0.5) {
    unknownObject = await JSON.parse(aFile) ;
} else {
    unknownObject = await JSON.parse(bFile) ;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};

