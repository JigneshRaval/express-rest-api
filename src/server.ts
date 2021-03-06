// server.ts

/* = Method 1
=========================================*/
import app from './app';
import * as express from 'express';
import * as path from 'path';

const port = process.env.PORT || '3000';

app.listen(port, (error: any) => {
    if (error) {
        return console.log(error)
    }

    return console.log(`Server is listening at http://localhost:${port}/`);
});

/* = Method 2
=========================================
import * as express from 'express';
import router from './routers';

const app = express();
const port: number | string = process.env.port || 3000;

router.use((req: any, res: any, next: any) => {
    res.send({ message: 'Hello there !', name: 'hiren' });
    next();
});

app.use('/api', router);

app.listen(port, () => console.log(`Listening at http://localhost:${port}/`));
*/

// JS Documentation Example 1
// https://github.com/planttheidea/unchanged/blob/master/src/index.js
// ======================================
/**
 * @function has
 *
 * @description
 * does the nested path exist on the object
 *
 * @param {Array<number|string>|null|number|string} path the path to match on the object
 * @param {Array<*>|Object} object the object to get the value from
 * @returns {boolean} does the path exist
 */
/*
export const has = curry((path, object) => {
    return isEmptyKey(path) ? !!object : hasNestedProperty(path, object);
  });
  */
