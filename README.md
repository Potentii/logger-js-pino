# LoggerJS [pino]

[![NPM Version][npm-image]][npm-url]


A logger wrapper around pino.

<br>

---

## Usage


Basic usage out of the box:

```javascript
import Logger from '@potentii/logger-js-pino';

//...

Logger
    .withLevel('info') // Possible levels: debug, trace, info, warn, error, fatal
    .customField({ service: 'my-app' }) // Optional fields to compose your logs (at top level)
    .set({ correlationId: '8888' }); // Optional data to compose your logs (inside 'data' special field)

//...

Logger.info('USER_FETCH_SUCCESS', 'User fetch successfully', { userId: '1234' });

// ...

try{
    // ...
} catch (err){
    Logger.error('PROCESS_FAILED', 'Processing has failed', err, { userId: '1234', processType: '...' });
}


```


<br>

---

<br>

## License
[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@potentii/logger-js-pino.svg
[npm-url]: https://npmjs.org/package/@potentii/logger-js-pino
