import React from 'react';
import Header from '../../components/header';
import apis from '../../../apis';

const Cart = () => {

    const productList = apis.product.list()

    return (
        <div>
            <Header/>
        </div>
    );
};

export default Cart;
