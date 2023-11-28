import { buildDatesWhere } from "../../../../../utils/tinyBirdSqlBuilder";

export const buildQuery = (from: string | undefined, to: string | undefined) =>
  [
    "select round(sum(total_amount)) as amount, vendorid as id",
    "from _",
    `${buildDatesWhere("tpep_dropoff_datetime", from, to)}`,
    "group by vendorid",
  ].join(" ");
