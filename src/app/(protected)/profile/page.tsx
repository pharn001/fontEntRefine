'use client';
import { useTable } from '@refinedev/react-table';
import { getActionsColumn } from '@src/common/containers/column';
import { List } from '@src/shadcn/components/crud';
import { Table } from '@src/shadcn/components/table';
import React, { useMemo } from 'react'

function Page() {
    const {table} = UseTableOne();
    console.log(table.options.data)
  return (
    <div>
        <List>
             <Table table={table} >
            <Table.Column header="fullname" id="fullname" accessorKey="fullname"/>
            <Table.Column header="nickname" id="nickname" accessorKey="nickname"/>
            <Table.Column header="gender" id="gender" accessorKey="gender"/>
            <Table.Column header="birthday" id="birthday" accessorKey="birthday"/>
            <Table.Column header="gender" id="gender" accessorKey="gender"/>
            <Table.Column header="phone" id="phone" accessorKey="phone"/>
            {getActionsColumn({ resource: "profile" })}
        </Table>
        </List>
       
    </div>
  )
}

export default Page
const UseTableOne = ()=>{
    const columns = useMemo(()=> [],[]);
    const table = useTable({
        columns,
        enableSorting:true,
        enableColumnFilters:true,
        refineCoreProps:{
            resource:"profile",
        },
    })
    return {table}
}
