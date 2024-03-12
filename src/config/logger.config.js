import winston, { transports } from "winston";

const customLevelsOptions = {
    levels: {
        Fatal: 0,
        Error: 1,
        Warning: 2,
        Info: 3,
        Http: 4,
        Debug: 5
    },
    colors: {
        Fatal: 'red',
        Error: 'magenta',
        Warning: 'yellow',
        Info: 'blue',
        Http: 'red',
        Debug: 'white'
    }
};
winston.addColors(customLevelsOptions.colors);

export const devLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new transports.Console(
            {
                level: "Debug",
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.simple()
                )
            }
        ),
    ]
})

export const prodLogger = winston.createLogger({
    levels: customLevelsOptions.levels,
    transports: [
        new transports.Console(
            {
                level: "Info",
                format: winston.format.combine(
                    winston.format.colorize({ colors: customLevelsOptions.colors }),
                    winston.format.simple()
                )
            }
        ),
        new transports.File(
            {
                filename: './errors.log',
                level: 'error',
                format: winston.format.simple()
            }
        )
    ]
})