import logger from "pino";
import dayjs from "dayjs";
import pretty from "pino-pretty";

// Needed for formatting logging output
const stream = pretty({
    colorize: true,
});

const log = logger(
    {
        base: {
            pid: false, // pid stands for process id
        },
        timestamp: () => `,"time":"${dayjs().format()}"`,
    },
    stream
);

export default log;
