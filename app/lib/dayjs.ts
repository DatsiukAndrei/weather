import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isoWeek from "dayjs/plugin/isoWeek";
import dayjs, { type Dayjs } from "dayjs";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);

export default dayjs;
export type {Dayjs};

export const formatTemplates = {
  date: "D MMMM YYYY - HH:mm A",
};
