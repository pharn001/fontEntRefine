/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/naming-convention */
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateDateSchema, validateImageSchema } from "@common/lib/validation/validationFormUtils";
import { type FormAction } from "@refinedev/core";
import { z } from "zod";

export const useProfileForm = ({ action, id }: { id?: number, action: FormAction }) => {
  const { ...form } = useForm<{ id?: number }>({
    resolver: zodResolver(profileSchema()),
    defaultValues: {
      fullname: "",
      nickname: "",
      age: "",
      phone: "",
      gender: "",
      birthday: "",
      district: 0,
      image: undefined,
    },
    refineCoreProps: {
      resource: "profile",
      action,
      id,
      redirect: "list",
      meta: {
        headers: {
          "content-type": "multipart/form-data",
        },
      },
      successNotification: () => {
        return { message: "ສ້າງຂໍ້ມູນສ່ວນບຸກຄົນ", type: "success" };
      },
    },
    warnWhenUnsavedChanges: true,
  });
  return { form };
};

export const profileSchema = () => {
  return z
    .object({
      fullname: z.string().min(1, { message: "ກະລຸນາໃສ່ຊື່ແທ້ ແລະ ນາມສະກຸນ" }),
      nickname: z.string().min(1, { message: "nickname is required" }),
      age: z.number().or(z.string().min(1, { message: "ກະລຸນາປ້ອນອາຍຸ" })),
      phone: z
        .string()
        .min(8, { message: "ກະລຸນາໃສ່ເບີໂທ" })
        .regex(/^(20\d{8})$/, { message: "ກະລຸນາປ້ອນເບີໂທ ໂດຍຮູບແບບທີ່ຖືກຕ້ອງ (20XXXXXXXX)" }),
      gender: z.string().min(1, { message: "ກະລຸນາເລືອກເພດ" }),
      birthday: validateDateSchema({ message: "ກະລຸນາເລືອກຮູບພາບ" }),
      image: validateImageSchema({ required: true, message: "ກະລຸນາເລືອກຮູບພາບ" }),
      district: z.number().min(1, { message: "ກະລຸນາເລືອກເມືອງ" }),
    }).transform((val) => {
      if (val.image === undefined || typeof val.image === "string") {
        delete val.image;
      }
      return val;
    });
};

