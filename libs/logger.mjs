import pino from "pino";


export default class Logger {

    /**
     *
     * @type {?Logger}
     */
    static #instance = null;

    /**
     * @type {pino.Logger}
     */
    #pino;

    /**
     *
     * @type {ELogLevel}
     */
    #level;
    #ctx = {};
    #customFields = {};


    /**
     *
     * @param {{ level: ?ELogLevel }} [opts]
     */
    constructor(opts) {
        this.#level = opts?.level || 'info';
        this.#updatePino();
    }


    #updatePino() {
        this.#pino = pino({
            level: this.#level,
            timestamp: pino.stdTimeFunctions.isoTime,
            formatters: {
                level: label => ({level: label})
            }
        });
    }


    /**
     *
     * @returns {Logger}
     */
    static get instance() {
        if (!Logger.#instance)
            Logger.#instance = new Logger();
        return Logger.#instance;
    }


    /**
     *
     * @param {ELogLevel} level
     * @returns {Logger}
     */
    static withLevel(level) {
        return Logger.instance.withLevel(level);
    }


    /**
     *
     * @param {ELogLevel} level
     * @returns {Logger}
     */
    withLevel(level) {
        this.#level = level;
        this.#updatePino();
        return this;
    }


    /**
     *
     * @returns {Logger}
     */
    static subLogger() {
        return Logger.instance.subLogger();
    }


    /**
     *
     * @returns {Logger}
     */
    subLogger(){
        const subLogger = new Logger({ level: this.#level });
        subLogger.customField(this.#customFields);
        subLogger.set(this.#ctx);
        subLogger.#updatePino();
        return subLogger;
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {object|*[]} [data]
     */
    static debug(code, message, data) {
        Logger.instance.debug(code, message, data);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {object|*[]} [data]
     */
    debug(code, message, data) {
        this.#pino.debug({
            code: code,
            message: message,
            ...this.#customFields,
            data: this.#buildData(data, this.#ctx),
        }, message);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {object|*[]} [data]
     */
    static trace(code, message, data) {
        Logger.instance.trace(code, message, data);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {object|*[]} [data]
     */
    trace(code, message, data) {
        this.#pino.trace({
            code: code,
            message: message,
            ...this.#customFields,
            data: this.#buildData(data, this.#ctx),
        }, message);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {object|*[]} [data]
     */
    static info(code, message, data) {
        Logger.instance.info(code, message, data);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {object|*[]} [data]
     */
    info(code, message, data) {
        this.#pino.info({
            code: code,
            message: message,
            ...this.#customFields,
            data: this.#buildData(data, this.#ctx),
        }, message);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {Error} err
     * @param {object|*[]} [data]
     */
    static warn(code, message, err, data) {
        Logger.instance.warn(code, message, err, data);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {Error} [err]
     * @param {object|*[]} [data]
     */
    warn(code, message, err, data) {
        this.#pino.warn({
            code: code,
            message: message,
            err: err,
            ...this.#customFields,
            data: this.#buildData(data, this.#ctx),
        }, message);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {Error} err
     * @param {object|*[]} [data]
     */
    static error(code, message, err, data) {
        Logger.instance.error(code, message, err, data);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {Error} err
     * @param {object|*[]} [data]
     */
    error(code, message, err, data) {
        this.#pino.error({
            code: code,
            message: message,
            err: err,
            ...this.#customFields,
            data: this.#buildData(data, this.#ctx),
        }, message);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {Error} err
     * @param {object|*[]} [data]
     */
    static fatal(code, message, err, data) {
        Logger.instance.fatal(code, message, err, data);
    }


    /**
     *
     * @param {string} code
     * @param {string} message
     * @param {Error} err
     * @param {object|*[]} [data]
     */
    fatal(code, message, err, data) {
        this.#pino.fatal({
            code: code,
            message: message,
            err: err,
            ...this.#customFields,
            data: this.#buildData(data, this.#ctx),
        }, message);
    }


    /**
     *
     * @param {object} ctx
     * @returns {Logger}
     */
    static set(ctx) {
        return Logger.instance.set(ctx);
    }

    /**
     *
     * @param {object} ctx
     * @returns {Logger}
     */
    set(ctx) {
        this.#ctx = {...(this.#ctx || {}), ...(ctx || {})};
        return this;
    }



    /**
     *
     * @param {object} customFields
     * @returns {Logger}
     */
    static customField(customFields) {
        return Logger.instance.customField(customFields);
    }

    /**
     *
     * @param {object} customFields
     * @returns {Logger}
     */
    customField(customFields) {
        this.#customFields = {...(this.#customFields || {}), ...(customFields || {})};
        return this;
    }


    #buildData(data, ctx) {
        return {...(ctx || {}), ...(data || {})};
    }

}




