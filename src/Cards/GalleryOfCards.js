import React from 'react';
import getCards from './CardContent';
import MyCard from '../Cards/Card';
import { Grid } from "@material-ui/core";


export default function GalleryOfCards() {
    return (
        // <div style={{ padding: 20 }}>
            <Grid container spacing={3}>
                <Grid container item xs={3} sm={12} justify="center">
                    {
                        getCards().map(({ id, title, picture }) => (
                            <MyCard
                                key={id}
                                id={id}
                                title={title}
                                picture={picture} />
                        ))
                    }
                </Grid>
            </Grid>
        // </div>
    )
}