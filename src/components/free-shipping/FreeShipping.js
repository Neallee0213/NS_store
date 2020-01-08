import React from 'react'
import './FreeShipping.scss'
const FreeShipping = () => {
    return (
        <div className="container">
            <div className="shipping">
                <div className="row jumbot">
                    <div className="col-sm-12 col-lg-9 col-xl-10">
                        <h3>2020 SALE</h3>
                        <p>FREE SHIPPING OVER $1 FOR INTERNATIONAL ORDERS</p>
                    </div>
                    <div className="col-sm-12 col-lg-3 col-xl-2 btn-col">
                        <a href="/shop"><button type="button" className="btn btn-outline-secondary btn-lg">Show now</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeShipping
