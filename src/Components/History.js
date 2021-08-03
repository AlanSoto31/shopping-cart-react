import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'

const History = () => {
    const [shopHistory, setShopHistory] = useState([])

    useEffect(() => {
        setShopHistory(JSON.parse(localStorage.getItem('cartHistory')))
    }, [])

    const renderHistory = () => (
        shopHistory ? shopHistory.map(item => (
            <div key={Math.random()} className='mb-4'>
                <div><strong>Date:</strong> {item.date}</div>
                <div><strong>Items:</strong>  
                {
                    item.items.map(item => <span className='mx-2'>{`${item.type}(${item.qty})`}</span>)
                }
                </div>
                <div><strong>Total:</strong>  {`$${item.total}`}</div>
            </div>
        )) : "There is no history yet!"
    )

    return (
        <Container className='mt-4'>
            { renderHistory() }
        </Container>
    )
}

export default History
