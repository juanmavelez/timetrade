import * as yup from 'yup';

export const validationSchema = yup.object({
    hours: yup.number()
        .required('Required'),
})
