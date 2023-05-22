import {useFormik} from 'formik';
import {Button, Container, TextField} from '@mui/material';
import * as React from "react";
import {FC} from "react";
import {validationSchema} from "./validationSchema";
import {requestTask} from "../../utils/requests/requestTask";

interface HoursRequestedForm {
    service_id: string
}

const HoursRequestedForm: FC<HoursRequestedForm> = (props) => {
    const {service_id} = props;


    const formik = useFormik({
        initialValues: {
            hours: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const requested = await requestTask(service_id, values.hours);
            if (requested) {
                window.location.reload();
            }
        }
    });

    if (service_id === undefined) {
        return null
    }


    return (
        <Container maxWidth="sm" sx={{marginTop: "1rem"}}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="hours"
                    name="hours"
                    label="Horas"
                    type="number"
                    value={formik.values.hours}
                    onChange={formik.handleChange}
                    error={formik.touched.hours && Boolean(formik.errors.hours)}
                    helperText={formik.touched.hours && formik.errors.hours}
                />
                <Button color="primary" fullWidth variant="contained" type="submit" sx={{display: "grid", mt: "2rem"}}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default HoursRequestedForm;
