import { Table, type TableFilterProps } from "@/shadcn/components/table";
import { CardView } from "@src/shadcn/components/table/card-view";
export function usernameColumn() {
  return (
    <Table.Column
      header="Username"
      id="username"
      accessorKey="username"
      enableSorting
      enableHiding
      filter={(props: TableFilterProps) => (
        <Table.Filter.Search {...props} title="Search Username" />
      )}
    />
  );
}

export function UsernameRow() {
  return (
    <CardView.Row
      header="Username"
      id="username"
      accessorKey="username"
      cell={({ row }: any) => {
        const username = row.original?.username;
        return <>{username ?? ""}</>;
      }}
    />
  );
}
