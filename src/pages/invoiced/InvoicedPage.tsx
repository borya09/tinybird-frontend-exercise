import { useSearchParams } from "react-router-dom";
import InputDate from "../../components/ui/InputDate";
import styles from "./InvoicedPage.module.css";
import TotalAmountByVendorWidget from "./components/TotalAmountByVendorWidget";
import DailyAmountByVendorWidget from "./components/DailyAmountByVendorWidget";

const defaultMinDate = "2017-01-01";
const defaultMaxDate = "2017-12-31";

export default function InvoicedPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFromFilter = (
    filter: "from" | "to",
    date: string | undefined
  ) => {
    if (!date) {
      searchParams.delete(filter);
    } else {
      searchParams.set(filter, date);
    }
    setSearchParams(searchParams);
  };

  const from = searchParams.get("from") || defaultMinDate;
  const to = searchParams.get("to") || defaultMaxDate;

  return (
    <>
      <h1>NYC Taxi Trips Invoiced Amount</h1>
      <div className={styles.filters}>
        <InputDate
          label="From"
          name="from"
          value={from}
          min={defaultMinDate}
          max={to}
          onChange={(d) => handleFromFilter("from", d)}
        />
        <InputDate
          label="To"
          name="to"
          value={to}
          min={from}
          max={defaultMaxDate}
          onChange={(d) => handleFromFilter("to", d)}
        />
      </div>
      <div className={styles.cards}>
        <DailyAmountByVendorWidget from={from} to={to} />
        <TotalAmountByVendorWidget from={from} to={to} />
      </div>
    </>
  );
}
