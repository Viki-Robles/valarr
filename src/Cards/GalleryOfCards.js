import React from 'react';
import getCards from './CardContent';
import MyCard from '../Cards/Card';

export default function GalleryOfCards() {
    return (
        <>
            {
                getCards().map(({ id, title, picture}) => (
                    <MyCard
                        key={id}
                        id={id}
                        title={title}
                        picture={picture} />
                ))
            }
        </>
    )
}