"use client";
import React from "react";
import { Create } from "@/shadcn/components/crud";
import { ProfileForm } from "../components/form/form";

export default function ProfileCreate(): JSX.Element {
  return (
    <Create>
      <div className="flex justify-center">
        <div className="flex flex-col border rounded-2xl">
          <div className="w-full p-5 text-2xl font-bold text-center text-primary-foreground bg-primary border border-border rounded-t-2xl">
            ສ້າງໂປຣໄຟລ໌
          </div>
          <ProfileForm action="create"/>
        </div>
      </div>
    </Create>
  );
}
