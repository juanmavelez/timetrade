import * as React from 'react';
import { NextPage } from "next";
import Container from "@mui/material/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useFormik} from "formik";
import {validationSchema} from "../../src/components/Login/validationSchema";
import {Checkbox} from "@mui/material";


const Service : NextPage= () =>{
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            isRequested: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //TODO send data to server
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
    <>
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
                        label="descripcion"
                        type="password"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={formik.touched.description && formik.errors.description !== undefined}
                        helperText={formik.touched.description && formik.errors.description}
                    />
                    <Checkbox
                        onChange={formik.handleChange}
                        required
                        name="isRequested" />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>
                </form>
            </Container>
        </>
    );
}

export default Service;
