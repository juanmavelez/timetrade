import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FC } from "react";
import Container from '@mui/material/Container';
import {validationSchema} from "./validationSchema";
import {loginEndpoint} from "../../constants/endpoints";

type LoginFormProps = {
    isLogin?: boolean
}


const LoginForm: FC<LoginFormProps> = ({isLogin = false}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            //TODO send data to server
            try {
                const base64 = btoa(values.email + ':' + values.password);
                const loginFetch = await fetch(loginEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + base64
                    }
                })
                const loginResponse = loginFetch.json();
                console.log(loginResponse);
            } catch (error) {
                console.log(error);
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
