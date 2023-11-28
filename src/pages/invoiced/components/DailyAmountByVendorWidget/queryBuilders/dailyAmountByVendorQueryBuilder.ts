import { buildDatesWhere } from "../../../../../utils/tinyBirdSqlBuilder";

export const buildQuery = (from: string | undefined, to: string | undefined) =>
  [
    "select round(sum(total_amount)) as amount, vendorid as id, toDate(tpep_dropoff_datetime) as date",
    "from _",
    `${buildDatesWhere("date", from, to)}`,
    "group by date, vendorid",
    "order by date",
  ].join(" ");

