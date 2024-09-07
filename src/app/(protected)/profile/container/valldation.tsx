import { validateDateSchema, validateImageSchema } from "@src/common/lib";
import * as z  from "zod";

export const profileShama = z
.object({
    fullname:z.string().min(2,{
        message:"fullname is required",
    }),
    nickname:z.string().min(2,{
        message:"fullname is required",
    }),
    district:z.number().min(2,{
        message:"fullname is required",
    }),
    phone:z.string().min(2,{
        message:"fullname is required",
    }),
    age: z.number().or(z.string().min(1, {message:"ກະລະນາປ້ອນອາຍຸ"})),

    birthday:validateDateSchema({message:"birhtday required"}),
    image:validateImageSchema({message:"birhtday required"}),

}) .transform((val) => {
    if (val.image === undefined || typeof val.image === "string"){
        delete val.image
    }
    return val;
})