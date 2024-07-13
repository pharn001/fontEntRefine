"use client";
import { Create } from "@src/shadcn/components/crud";
import React from "react";
import { ProfileForm } from "../components/form";

const ProfileCreate = () => {
  return (
    <div>
      <Create>
        <ProfileForm action="create"/>
      </Create>
    </div>
  );
};

export default ProfileCreate;
