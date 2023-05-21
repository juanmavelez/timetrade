import {useFormik} from 'formik';
import {FC} from "react";
import {validationSchema} from "./validationSchema";
import {Button, Checkbox, Container, FormLabel, TextField, Typography,} from '@mui/material';
import {CREATE_SERVICE_ENDPOINT} from "../../constants/endpoints";
import {getBearer} from "../../utils/getBearer";
import {responseSchema} from "./responseSchema";
import {useRouter} from "next/router";
import {SERVICE_PAGE} from "../../constants/urls";

const NewService: FC = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            isRequest: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch(CREATE_SERVICE_ENDPOINT, {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        'Authorization': `Bearer ${getBearer()}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            title: values.title,
                            description: values.description,
                            isRequest: values.isRequest,
                        }
                    })
                });

                if (response.ok) {
                    const responseValue = await response.json();
                    const isValidSchema = await responseSchema.isValid(responseValue);
                    if (isValidSchema) {
                        void router.push(`${SERVICE_PAGE}${responseValue.id}`)
                    } else {
                        console.error("Wrong schema returned when creating a service");
                    }
                }
            } catch (e) {
                console.error(e)
            }

        },
    });

    return (
        <Container maxWidth="sm" sx={{marginTop: "2rem"}}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="title"
                    name="title"
                    label="titulo"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && formik.errors.title !== undefined}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    id="description"
                    name="description"
                    label="Descripción"
                    type="text"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && formik.errors.description !== undefined}
                    helperText={formik.touched.description && formik.errors.description}
                />

                <FormLabel sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="body1">Busco este servicio</Typography>
                    <Checkbox onChange={formik.handleChange}/>
                </FormLabel>

                <Button color="primary" variant="contained" fullWidth type="submit" sx={{display: "grid", mt: "2rem"}}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default NewService
