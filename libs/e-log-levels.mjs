/**
 * @typedef {'debug'|'trace'|'info'|'warn'|'error'|'fatal'} ELogLevel
 */
/**
 *
 * @enum {ELogLevel}
 */
const E_LOG_LEVELS = Object.freeze({
    debug: 'debug',
    trace: 'trace',
    info: 'info',
    warn: 'warn',
    error: 'error',
    fatal: 'fatal',
});

export default E_LOG_LEVELS;