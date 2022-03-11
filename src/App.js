import React from "react";

import { CssBaseline, Grid } from "@material-ui/core";

//components 
import Header from "./components/Header/Header";
import List from "./components/List"
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";


const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <List></List>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PlaceDetails/>
                    </Grid>

            </Grid>
        </>
    )
}

export default App;