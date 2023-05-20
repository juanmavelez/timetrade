import * as yup from "yup";

export const responseSchema = yup.object().shape({
    id: yup.number().required(),
    description: yup.string().required(),
    beneficiary_id: yup.number().nullable(),
    supplier_id: yup.number().nullable(),
    created_at: yup.string().required(),
    updated_at: yup.string().required(),
    title: yup.string().required(),
    url: yup.string().url().required(),
});
