"use client";

import { useTable } from "@refinedev/react-table";
import { List } from "@src/shadcn/components/crud";
import { Table } from "@src/shadcn/components/table";
import React, { useMemo } from "react";
import NextImage from "next/image";
import { CardView } from "@src/shadcn/components/table/card-view";
import { getActionsColumn } from "@src/common/containers/column";
import { getActionsRow } from "@src/common/containers/column/actionCard";
export default function Profile(): JSX.Element {
  const { table } = useTableProfile();

  return (
    <div>
      <List>
        <div>Profile</div>
        <Table table={table}>
          <Table.Column header="fullname" id="fullname" accessorKey="fullname" />
          <Table.Column header="nickname" id="nickname" accessorKey="nickname" />
          <Table.Column header="gender" id="gender" accessorKey="gender" />
          <Table.Column header="age" id="age" accessorKey="age" />
          <Table.Column header="age" id="age" accessorKey="age" />
          {ImageColumn()}
          {getActionsColumn({ resource: "profile" })}
        </Table>
        <br />
        <CardView table={table} className="w-[340px] h-[350px]">
          <CardView.Row header="User" id="User" accessorKey="user" isHeader={true} />
          <CardView.Row header="fullname" id="fullname" accessorKey="fullname"/>
          <CardView.Row header="nickname" id="nickname" accessorKey="nickname"/>
          <CardView.Row header="gender" id="gender" accessorKey="gender"/>
          <CardView.Row header="age" id="age" accessorKey="age"/>
          {ImageRow()}
          {getActionsRow({ resource: "profile" })}
        </CardView>
      </List>
    </div>
  );
}

export function ImageColumn() {
  return (
    <Table.Column
      header="Image"
      id="image"
      accessorKey="image"
      cell={(props) => {
        const image = props.row.original.image;
        return (
          <div className="my-2">
            <NextImage
              src={image}
              alt="image"
              width={50}
              height={50}
              className="rounded-lg shadow-sm"
            />
          </div>
        );
      }}
    />
  );
}
export function ImageRow() {
  return (
    <CardView.Row
      header="Image"
      id="image"
      accessorKey="image"
      cell={(props) => {
        const image = props.row.original.image;
        return (
          <div className="my-2">
            <NextImage
              src={image}
              alt="image"
              width={100}
              height={120}
              className="rounded-lg shadow-sm"
            />
          </div>
        );
      }}
    />
  );
}

const useTableProfile = () => {
  const columns = useMemo(() => [], []);
  const table = useTable({
    columns,
    enableSorting: true,
    enableColumnFilters: true,
    refineCoreProps: {
      resource: "profile",
    },
  });
  return { table };
};
