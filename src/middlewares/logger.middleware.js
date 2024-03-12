import { devLogger, prodLogger } from '../config/logger.config.js';
import config from '../config/config.js';

export const addLogger = (req, res, next) => {
  if (req.originalUrl === '/loggerTest') {
    if (config.enviroment === 'DEV') {
      req.logger = devLogger;
      req.logger.Debug(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Http(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Info(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Warning(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Error(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Fatal(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
    
    } else {
      req.logger = prodLogger;
      req.logger.Info(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Warning(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Error(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
      req.logger.Fatal(`${req.method} on ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
    }
    next();
  } else {
    next('route');
  }
}
