import { Table } from "@/shadcn/components/table";
import { statusBadge } from "@src/common/containers/column/statusBadge";
export function statusColumn() {
  return (
    <Table.Column
      header="Status"
      id="isActive"
      accessorKey="isActive"
      enableSorting
      enableHiding
      cell={(props) => {
        const status = props.getValue() as unknown as boolean;
        return statusBadge(status);
      }}
    />
  );
}
