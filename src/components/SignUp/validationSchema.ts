import * as yup from 'yup'; // for validation

export const validationSchema = yup.object({
    firstname: yup.string()
        .required('Required'),
    lastname: yup.string()
        .required('Required'),
    birthday: yup.date()
        .required('Required'),
    gender: yup.string()
        .required('Required'),
    email: yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
    passwordConfirmation: yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
})
