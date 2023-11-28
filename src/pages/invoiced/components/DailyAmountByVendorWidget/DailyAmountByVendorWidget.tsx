import Card from "../../../../components/ui/Card";
import LineChart from "../../../../components/ui/LineChart";
import Message from "../../../../components/ui/Message";
import useFetchYellowTripData from "../../hooks/useFetchDataByVendor";
import { DailyAmountByVendor } from "./models/DailyAmountByVendor";
import { buildQuery } from "./queryBuilders/dailyAmountByVendorQueryBuilder";

const buildDatasets = (data: DailyAmountByVendor[]) => {
  const vendors = [...new Set(data.map((d) => d.id))];

  return vendors.map((vendor) => ({
    label: vendor,
    data: data
      .filter((d) => d.id === vendor)
      .sort()
      .map((d) => d.amount),
  }));
};

const buildUniqueDates = (data: DailyAmountByVendor[]): string[] => {
  return [...new Set(data.map((d) => d.date))];
};

interface DailyAmountByVendorWidgetProps {
  from: string | undefined;
  to: string | undefined;
}

export default function DailyAmountByVendorWidget({
  from,
  to,
}: DailyAmountByVendorWidgetProps) {
  const query = buildQuery(from, to);
  const { data, error, loading } =
    useFetchYellowTripData<DailyAmountByVendor>(query);

  const showLine = data && data?.length > 0;
  const showNoData = !loading && (!data || !data.length);

  return (
    <Card
      title="Daily Invoiced Amount by Vendor"
      icon="chart-line"
      loading={loading}
      error={error?.message}
    >
      {showLine && (
        <LineChart
          xLabels={buildUniqueDates(data)}
          datasets={buildDatasets(data)}
        />
      )}
      {showNoData && <Message text="No data" type="info" />}
    </Card>
  );
}
