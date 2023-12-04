import Card from "../../../../components/ui/Card";
import Message from "../../../../components/ui/Message";
import PieChart from "../../../../components/ui/PieChart";
import useFetchYellowTripData from "../../hooks/useFetchDataByVendor";
import { TotalAmountByVendor } from "./models/TotalAmountByVendor";
import { buildQuery } from "./queryBuilders/totalAmountByVendorQueryBuilder";

interface TotalAmountByVendorWidgetProps {
  from: string | undefined;
  to: string | undefined;
}

export default function TotalAmountByVendorWidget({
  from,
  to,
}: TotalAmountByVendorWidgetProps) {
  const query = buildQuery(from, to);
  const { data, error, loading } =
    useFetchYellowTripData<TotalAmountByVendor>(query);

  const showPie = data && data.length > 0;
  const showNoData = !loading && (!data || !data.length);

  return (
    <Card
      id="total-invoiced-amount-by-vendor"
      title="Total Invoiced Amount by Vendor"
      icon="circle-dollar-to-slot"
      loading={loading}
      error={error?.message}
    >
      {showPie && (
        <PieChart<TotalAmountByVendor>
          
          data={data}
          labelField="id"
          valueField="amount"
          legend="Total Invoiced Amount"
        />
      )}
      {showNoData && <Message text="No data" type="info" />}
    </Card>
  );
}
