import { Card, CardContent, CardActions, Button } from '@mui/material'
import React from 'react'

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <div>Type: {props.type}</div>
                <div>Capacity: {props.capacity} Gb</div>
                <div>Price: {props.price} $</div>
            </CardContent>
            <CardActions>
                <Button>Add to card</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem