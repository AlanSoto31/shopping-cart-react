import React from 'react'
import Pizza from './Pizza'

const List = ({listState}) => {

    const products = listState.map( product => (
        <Pizza key={product.id} product={product} />
    )) 

    return (
        <>
            {products}
        </>
    )
}

export default List
