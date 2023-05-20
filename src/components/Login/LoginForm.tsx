import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FC } from "react";
import Container from '@mui/material/Container';
import {validationSchema} from "./validationSchema";
import {LOCAL_LOGIN_ENDPOINT} from "../../constants/endpoints";
import {localStorageService} from "../../services/loclStorageService";
import {useRouter} from "next/router";
import {HOME_PAGE} from "../../constants/urls";

type LoginFormProps = {
    isLogin?: boolean
}


const LoginForm: FC<LoginFormProps> = ({isLogin = false}) => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const base64 = btoa(values.email + ':' + values.password);
                const loginFetch = await fetch(LOCAL_LOGIN_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + base64
                    }
                })
                const loginResponse = await loginFetch.json();
                const token =  loginResponse.split(' ')[1];
                localStorageService.setItem('Bearer', token);
                void router.push(HOME_PAGE);
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
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
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default LoginForm
