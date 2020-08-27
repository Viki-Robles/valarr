import React from 'react';
import getCards from './CardContent';
import MyCard from '../Cards/Card';
import { Grid } from "@material-ui/core";
import './Card.css';


const Content = () => {
    const HomePage = HomeObj => {
      return (
        <Grid item xs={12} sm={4}>
          <MyCard {...HomeObj} />
        </Grid>
      );
    };
  
    return (
      <Grid container spacing={2}>
        {getCards.map(HomeObj => HomePage(HomeObj))}
      </Grid>
    );
  };
// export default function GalleryOfCards() {
//     return (
//         // <div style={{ padding: 20 }}>
//             <Grid container spacing={3}>
//                 <Grid container item xs={12} sm={12} justify="center">
//                     {
//                         getCards().map(({ id, title, picture }) => (
//                             <MyCard
//                                 key={id}
//                                 id={id}
//                                 title={title}
//                                 picture={picture} />
//                         ))
//                     }
//                 </Grid>
//             </Grid>
//         // </div>
//     )
// }
export default Content;
