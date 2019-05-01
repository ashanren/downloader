
import * as pino from "pino";

export const log = pino({
  level: 'trace',
  base: null,
  prettyPrint: {
    colorize: true,
    translateTime: 'SYS:ddd mmm dd yyyy HH:MM:ss Z'
  }
});

