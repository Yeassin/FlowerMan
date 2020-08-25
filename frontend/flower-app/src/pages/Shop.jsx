import React, { Component } from 'react'
import '../css/Shop.css'
import shop_flowers from '../images/shop.jpg'

export default class Shop extends Component {
    render() {
        return (
            <div>
                <div className="shop-banner">
                    <div className="shop-heading">
                        <h1>SHOP</h1>
                    </div>
                    <img src={shop_flowers} />
                </div>
                
            </div>
        )
    }
}
