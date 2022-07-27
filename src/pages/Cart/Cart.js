import React from "react";
import { useSelector, useDispatch } from "react-redux"
import CartTable from "./CartTable";
import Content from "../../components/Content";
import EmptyCart from "./EmptyCart";

function Cart() {
    const cartItem = useSelector(state => state.cartItem);
    const dispatch = useDispatch();

    return (
        <>
            <Content padding="100px 0" direction="center">
                {
                    cartItem.length === 0 ?
                    <EmptyCart></EmptyCart> :
                    <CartTable cartItem={cartItem} dispatch={dispatch} />
                }
            </Content>
        </>
    );
}

export default Cart;