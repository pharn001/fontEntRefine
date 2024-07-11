import { Table } from "@/shadcn/components/table";
import { CardView } from "@src/shadcn/components/table/card-view";
import moment from "moment";

export function dateJoinedColumn() {
  return (
    <Table.Column
      header="Created At"
      id="dateJoined"
      accessorKey="dateJoined"
      enableSorting
      enableHiding
      cell={(props) => {
        const dateValue = props.getValue();
        if (typeof dateValue === "string") {
          return moment(dateValue).format("DD MMM YYYY");
        }
        return "";
      }}
    />
  );
}

export function dateJoinetRow() {
  return (
    <CardView.Row
      header="isActive"
      id="isActive"
      accessorKey="isActive"
      cell={(props) => {
        const dateValue = props.getValue();
        if (typeof dateValue === "string") {
          return moment(dateValue).format("DD MMM YYYY");
        }
        return "";
      }}
    />
  );
}
