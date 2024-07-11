"use client";

import { List } from "@/shadcn/components/crud";
import { Table } from "@/shadcn/components/table";
import { useTable } from "@refinedev/react-table";
import { type IUser } from "./interface";
import { SequenceColumn } from "@src/common/containers/column/select";
import { getActionsColumn } from "@src/common/containers/column/action";
import { dateJoinedColumn, usernameColumn, groupColumn, statusColumn, UsernameRow, StatusRow, dateJoinetRow, GroupRow, ImageColumn } from "./containers/column";
import { useMemo } from "react";
import { CardView } from "@src/shadcn/components/table/card-view";

export default function UserList(): JSX.Element {
  const { table } = useTableUser();
  return (
    <div className="mx-auto">
      <List>
        <Table table={table}>
          {SequenceColumn()}
          {usernameColumn()}
          {statusColumn()}
          {groupColumn()}
          {dateJoinedColumn()}
          {getActionsColumn({ resource: "user" })}
        </Table>
        <CardView table={table} className="w-[340px] h-[350px]">
          <CardView.Row header="User" id="User" accessorKey="user" isHeader={true} />
          {UsernameRow()}
          {StatusRow()}
          {dateJoinetRow()}
          {GroupRow()}
          {ImageColumn()}
        </CardView>
      </List>
    </div>
  );
}

const useTableUser = () => {
  const columns = useMemo(() => [], []);
  const table = useTable<IUser>({
    columns,
    enableSorting: true,
    enableColumnFilters: true,
    refineCoreProps: {
      resource: "user",
    },
  });
  return { table };
};
