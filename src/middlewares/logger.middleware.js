import { devLogger, prodLogger } from '../config/logger.config.js';
import config from '../process.js'

export const addLogger = (req, res, next) => {
  if (config.enviroment === 'DEV') {
    req.logger = devLogger

    req.logger.debug(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.http(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.info(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.warning(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.error(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.fatal(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)

  } else if (config.enviroment !== 'DEV') {
    req.logger = prodLogger
    
    req.logger.info(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.warning(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.error(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
    req.logger.fatal(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
  }
  next();
}