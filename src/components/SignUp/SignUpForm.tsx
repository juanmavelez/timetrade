import { useFormik } from 'formik';
import { FC } from "react";
import {validationSchema} from "./validationSchema";
import {useRouter} from "next/router";
import { TextField, Button, Container, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import {LOCAL_SIGN_UP} from "../../constants/endpoints";
import {HOME_PAGE} from "../../constants/urls";
import {localStorageService} from "../../services/localStorageService";

const SignUpForm: FC = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            birthday: '',
            gender: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch(LOCAL_SIGN_UP, {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            firstname: values.firstname,
                            lastname: values.lastname,
                            birthday: values.birthday,
                            gender: values.gender,
                            email: values.email,
                            password: values.password,
                            password_confirmation: values.password,
                        }
                    })
                });

                if (response.ok) {
                    const signUpResponse = await response.json();
                    const token =  signUpResponse.split(' ')[1];
                    localStorageService.setItem('Bearer', token);
                    void router.push(HOME_PAGE);
                }
            } catch (error){
                console.error(error);
            }
        }
    });

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                    helperText={formik.touched.firstname && formik.errors.firstname}
                />
                <TextField
                    fullWidth
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                    helperText={formik.touched.lastname && formik.errors.lastname}
                />
                <TextField
                    fullWidth
                    id="birthday"
                    name="birthday"
                    label="Birthday"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                    helperText={formik.touched.birthday && formik.errors.birthday}
                />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    fullWidth
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    label="Confirma la contraseña"
                    type="password"
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                    error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                    helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default SignUpForm;
