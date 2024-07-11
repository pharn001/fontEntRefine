import { Table } from "@/shadcn/components/table";
import { statusBadge } from "@src/common/containers/column/statusBadge";
import { CardView } from "@src/shadcn/components/table/card-view";
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

export function StatusRow() {
  return (
    <CardView.Row
      header="isActive"
      id="isActive"
      accessorKey="isActive"
      cell={({ row }: any) => {
        const isActive = row.original?.isActive;
        return statusBadge(isActive);
      }}
    />
  );
}
