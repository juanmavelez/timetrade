import type {FC} from 'react';
import { Box, Typography } from "@mui/material";
import Link from "../src/components/Link";
import {HOME_PAGE} from "../src/constants/urls";

const Page404: FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 200px)',
            gap: "1rem"
        }}>
            <Typography variant="h3" component="h1" sx={{fontWeight: "bold"}}>404</Typography>
            <Typography variant="body1" component="p">No hemos podido encontrar lo que estas buscando</Typography>
            <Link href={HOME_PAGE} sx={{
                fontSize: "1rem",
            }}>
                Intenta ir al Home
            </Link>
        </Box>
    );
};

export default Page404;
