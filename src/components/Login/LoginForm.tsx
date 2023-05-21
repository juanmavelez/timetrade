import {useFormik} from 'formik';
import {Button, Container, TextField} from '@mui/material';
import {FC} from "react";
import {validationSchema} from "./validationSchema";
import {LOCAL_LOGIN_ENDPOINT} from "../../constants/endpoints";
import {localStorageService} from "../../services/localStorageService";
import {useRouter} from "next/router";
import {HOME_PAGE} from "../../constants/urls";

const LoginForm: FC = () => {
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
                const loginResponse = await loginFetch.json()
                const parsedResponse = JSON.parse(loginResponse);
                const user = parsedResponse.user;
                const bearerToken = parsedResponse.token

                if (user !== undefined && user !== "") {
                    localStorageService.setItem("userId", user.id);
                }

                if (bearerToken !== undefined && bearerToken !== "") {
                    const token = bearerToken.split(' ')[1];
                    localStorageService.setItem('Bearer', token);
                    void router.push(HOME_PAGE);
                }
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <Container maxWidth="sm" sx={{marginTop: "1rem"}}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    margin="normal"
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
                    margin="normal"
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
                <Button color="primary" fullWidth variant="contained" type="submit" sx={{display: "grid", mt: "2rem"}}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default LoginForm
