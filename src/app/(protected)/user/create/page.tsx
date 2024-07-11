"use client";
import React from "react";
import { Create } from "@/shadcn/components/crud";
import { UserForm } from "../containers/form";

export default function UserCreate({ params }: { params: { id: number } }): JSX.Element {
  return (
    <Create>
      <div className="flex justify-center">
        <div className="flex flex-col border rounded-2xl">
          <div className="w-full p-5 text-2xl font-bold text-center text-primary-foreground bg-primary border border-border rounded-t-2xl">
            ຟອມສ້າງບັນຊີເຂົ້າລະບົບ
          </div>
          <UserForm id={0} />
        </div>
      </div>
    </Create>
  );
}
