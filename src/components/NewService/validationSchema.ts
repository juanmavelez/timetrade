import * as yup from "yup";

export const validationSchema = yup.object({
    title: yup
        .string()
        .min(3,'Title should be of minimum 3 characters length')
        .required('Title is required'),
    description: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Description is required'),
    isRequest: yup.boolean().required('Please select if you are requesting on offering the service')
});
