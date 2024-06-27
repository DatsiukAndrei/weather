//Its a wrapper around dayjs library to provide a common interface for date time operations

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isoWeek from "dayjs/plugin/isoWeek";
import dayjs, { type Dayjs } from "dayjs";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);

export default dayjs;
export type {Dayjs};

//Add more formats as needed
export const formatTemplates = {
  date: "D MMMM YYYY - HH:mm A",
};
