"use client";

import { Edit } from "@src/shadcn/components/crud";
import React from "react";
import { ProductForm } from "../../components/form";

const ProfileEdit = () => {
  return (
    <div>
      <Edit>
        <ProductForm />
      </Edit>
    </div>
  );
};

export default ProfileEdit;
