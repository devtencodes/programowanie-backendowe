import logger from "pino";
import dayjs from "dayjs";

const log = logger({
    base: {
        pid: false, // pid stands for process id
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;
