"use client";

import { Edit } from "@src/shadcn/components/crud";
import React from "react";
import { ProfileForm } from "../../components/form";

const ProfileEdit = () => {
  return (
    <div>
      <Edit>
        <ProfileForm />
      </Edit>
    </div>
  );
};

export default ProfileEdit;
