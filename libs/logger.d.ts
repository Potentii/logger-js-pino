export type ELogLevel = 'debug' | 'trace' | 'info' | 'warn' | 'error' | 'fatal';

/**
 * Options used to configure a logger instance.
 */
export interface LoggerOptions {
    /**
     * Minimum level of logs to write.
     */
    level?: ELogLevel | null;
}

export default class Logger {
    /**
     * Creates a logger with the provided options.
     *
     * @param opts - Logger configuration options.
     */
    constructor(opts?: LoggerOptions);

    /**
     * Returns the shared logger instance.
     *
     * @returns The shared logger instance.
     */
    static get instance(): Logger;

    /**
     * Sets the log level on the shared logger instance.
     *
     * @param level - Minimum level of logs to write.
     * @returns The shared logger instance.
     */
    static withLevel(level: ELogLevel): Logger;

    /**
     * Sets the log level for this logger instance.
     *
     * @param level - Minimum level of logs to write.
     * @returns This logger instance.
     */
    withLevel(level: ELogLevel): this;

    /**
     * Available logger levels.
     */
    static readonly levels: Readonly<Record<ELogLevel, ELogLevel>>;
    /**
     * Available logger levels.
     */
    readonly levels: Readonly<Record<ELogLevel, ELogLevel>>;

    /**
     * Creates a child logger from the shared logger instance.
     *
     * @returns A child logger instance.
     */
    static subLogger(): Logger;

    /**
     * Creates a child logger from this logger instance.
     *
     * @returns A child logger instance.
     */
    subLogger(): Logger;

    /**
     * Writes a debug-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param data - Optional structured data to include in the log entry.
     */
    static debug(code: string, message: string, data?: Record<string, any> | any[]): void;

    /**
     * Writes a debug-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param data - Optional structured data to include in the log entry.
     */
    debug(code: string, message: string, data?: Record<string, any> | any[]): void;

    /**
     * Writes a trace-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param data - Optional structured data to include in the log entry.
     */
    static trace(code: string, message: string, data?: Record<string, any> | any[]): void;

    /**
     * Writes a trace-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param data - Optional structured data to include in the log entry.
     */
    trace(code: string, message: string, data?: Record<string, any> | any[]): void;

    /**
     * Writes an info-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param data - Optional structured data to include in the log entry.
     */
    static info(code: string, message: string, data?: Record<string, any> | any[]): void;

    /**
     * Writes an info-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param data - Optional structured data to include in the log entry.
     */
    info(code: string, message: string, data?: Record<string, any> | any[]): void;

    /**
     * Writes a warning-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param err - Optional error associated with the log entry.
     * @param data - Optional structured data to include in the log entry.
     */
    static warn(code: string, message: string, err?: Error | null, data?: Record<string, any> | any[]): void;

    /**
     * Writes a warning-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param err - Optional error associated with the log entry.
     * @param data - Optional structured data to include in the log entry.
     */
    warn(code: string, message: string, err?: Error | null, data?: Record<string, any> | any[]): void;

    /**
     * Writes an error-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param err - Optional error associated with the log entry.
     * @param data - Optional structured data to include in the log entry.
     */
    static error(code: string, message: string, err?: Error | null, data?: Record<string, any> | any[]): void;

    /**
     * Writes an error-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param err - Optional error associated with the log entry.
     * @param data - Optional structured data to include in the log entry.
     */
    error(code: string, message: string, err?: Error | null, data?: Record<string, any> | any[]): void;

    /**
     * Writes a fatal-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param err - Optional error associated with the log entry.
     * @param data - Optional structured data to include in the log entry.
     */
    static fatal(code: string, message: string, err?: Error | null, data?: Record<string, any> | any[]): void;

    /**
     * Writes a fatal-level log entry.
     *
     * @param code - Application-specific log code.
     * @param message - Human-readable log message.
     * @param err - Optional error associated with the log entry.
     * @param data - Optional structured data to include in the log entry.
     */
    fatal(code: string, message: string, err?: Error | null, data?: Record<string, any> | any[]): void;

    /**
     * Adds contextual data to subsequent logs on the shared logger instance.
     *
     * @param ctx - Contextual data to include in subsequent log entries.
     * @returns The shared logger instance.
     */
    static set(ctx: Record<string, any>): Logger;

    /**
     * Adds contextual data to subsequent logs on this logger instance.
     *
     * @param ctx - Contextual data to include in subsequent log entries.
     * @returns This logger instance.
     */
    set(ctx: Record<string, any>): this;

    /**
     * Adds top-level custom fields to subsequent logs on the shared logger instance.
     *
     * @param customFields - Custom fields to include at the top level of subsequent log entries.
     * @returns The shared logger instance.
     */
    static customField(customFields: Record<string, any>): Logger;

    /**
     * Adds top-level custom fields to subsequent logs on this logger instance.
     *
     * @param customFields - Custom fields to include at the top level of subsequent log entries.
     * @returns This logger instance.
     */
    customField(customFields: Record<string, any>): this;
}
