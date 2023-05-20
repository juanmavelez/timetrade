import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import { FC } from "react";
import Container from '@mui/material/Container';
import {validationSchema} from "./validationSchema";
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import {CREATE_SERVICE_ENDPOINT} from "../../constants/endpoints";
import {getBearer} from "../../utils/getBearer";

const NewService: FC = () => {
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
                if(response.ok) {
                    //TODO send to the service page once we have the id
                }
            }catch (e) {
                console.error(e)
            }

        },
    });

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <TextField
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

                <FormControlLabel control={<Checkbox onChange={formik.handleChange}/>} label="Busco este servicio" />

                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default NewService
