import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {

    const total = cartItems?.reduce((accumulator, object) => {
        return accumulator + object?.price * object.amount;
    }, 0);

    console.log(total);

    return (
        <div className='flex flex-wrap items-center justify-center'>
            <table className="table-auto w-8/12 mr-auto mt-20">
                <thead>
                    <tr className="bg-primary/40 text-center font-mono mx-auto">
                        <th
                            className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               border-l border-transparent
                               font-mono
                               "
                        >
                            Product
                        </th>

                        <th
                            className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
                        >
                            price
                        </th>
                        <th
                            className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
                        >
                            stock
                        </th>
                        <th
                            className="
                               w-1/6
                               min-w-[160px]
                               text-lg
                               font-semibold
                               text-secondary
                               py-4
                               lg:py-4
                               px-3
                               lg:px-4
                               "
                        >
                            Subtotal
                        </th>
                    </tr>
                </thead>
                {cartItems.map(cartItems => (<tbody className='w-full mx-auto'>
                    <tr className="font-mono text-center">
                        <td className='flex items-center gap-3'
                        >
                            <img className="w-24 h-24" src={cartItems.thumbnail} alt="" />
                            <h1 className='text-lg  text-white'>{cartItems.title}</h1>

                        </td>
                        <td
                        >
                            <h1 className='text-lg  text-white'>${cartItems.price}</h1>
                        </td>

                        <td
                        >
                            <div className='flex flex-col'>
                                <div className="flex gap-2 items-center mx-auto mt-4">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => addToCart(cartItems)}
                                    >
                                        +
                                    </button>
                                    <h1 className='text-xl text-white'>{cartItems.amount}</h1>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => removeFromCart(cartItems.id)}
                                    >
                                        -
                                    </button>

                                </div>
                            </div>
                        </td>

                        <td
                        >
                            <p className='text-xl text-white'>${(cartItems.amount * cartItems.price).toFixed(2)}</p>

                        </td>
                    </tr>
                </tbody>))}
            </table>
            <div className="mr-auto w-60 bg-slate-50 font-mono h-64 rounded-md px-4 pb-20">
                <h1 className='text-xl text-black py-4'>Carts Total</h1>
                <h1 className='text-lg mb-2 text-black'>Subtotal: ${total}</h1>
                <hr />
                <h1 className='mt-3 text-lg text-black'>Total <span className='text-blue-500 ml-7'>${total}</span></h1>
                <Link to="/Checkout"> <button className='text-md btn btn-primary mt-10'>Proceed to Checkout</button></Link>
            </div>
        </div>
    );
};

export default Cart;