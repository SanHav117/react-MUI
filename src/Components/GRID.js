import * as React from 'react';
import '../ssttyyllee.css'
import { Button, Container, Grid } from '@mui/material';

export default function GRID() {
    return (<>

        <Container maxWidth="xl">

            <Grid container spacing={2}>
                {/* <Grid item xs={8}>

                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                </Grid> */}
                <Button></Button>

            </Grid>
        </Container>
    </>
    )
}