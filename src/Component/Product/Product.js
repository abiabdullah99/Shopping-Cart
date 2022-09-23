import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../Cart/Cart';
const Product = () => {

    const [product, setProduct] = useState([])
    const [filterProduct, setFilterProduct] = useState([])
    useEffect(() => {
        const url = 'https://dummyjson.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data);
                setFilterProduct(data.products)
            })
    }, [])

    const filterItem = (categItem) => {
        const updatedItems = product?.products?.filter((item) => {
            return item?.category === categItem;
        });

        setFilterProduct(updatedItems);
    };

    const [agree, setAgree] = useState(false);

    const [filter, setFilter] = useState("");
    const searchEvent = (event) => {
        setFilter(event.target.value);
    };

    let dataSeacrch = filterProduct.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        );
    });


    const [cartItems, setCartItems] = useState([])

    const removeFromCart = (id) => {
        setCartItems((prev) =>
          prev.reduce((ack, item) => {
            if (item.id === id) {
              if (item.amount === 1) return ack;
              return [...ack, { ...item, amount: item.amount - 1 }];
            } else {
              return [...ack, item];
            }
          }, [])
        );
      };

console.log(cartItems);
    const addToCart = (clickedItem) => {
        setCartItems((prev) => {
            const isItemInCart = prev.find((item) => item.id === clickedItem.id);

            if (isItemInCart) {
                return prev.map((item) =>
                    item.id === clickedItem.id
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }
            // First time the item is added
            return [...prev, { ...clickedItem, amount: 1 }];
        });
    };

    const [cancle, setCancle] = useState(false);

    const crossHandle = () => {
        setCancle(false)
    }
    return (
        <div>
            <div className='flex items-center justify-between w-10/12 mx-auto mt-40'>
                <div className='flex items-center gap-20'>
                    <div className="form-control w-full max-w-xs">
                        <select className="select select-bordered border-2 border-primary font-mono text-white">
                            <option onClick={() => setFilterProduct(product.products)} className='text-lg text-white' selected>All Proucts</option>
                            <option onClick={() => filterItem("laptops")} className='text-lg text-white' selected>laptops</option>
                            <option onClick={() => filterItem("smartphones")} className='text-lg text-white' selected>smartphones</option>
                            <option onClick={() => filterItem("fragrances")} className='text-lg text-white' selected>fragrances</option>
                            <option onClick={() => filterItem("skincare")} className='text-lg text-white' selected>skincare</option>
                            <option onClick={() => filterItem("groceries")} className='text-lg text-white' selected>groceries</option>
                            <option onClick={() => filterItem("home-decoration")} className='text-lg text-white' selected>home-decoration</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={() => setFilterProduct(product.products)} className='text-lg btn btn-primary text-white' selected>  Reset</button>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <input
                        type="text"
                        className=" placeholder-secondary  px-2 text-md  font-mono input py-4 border-2 border-primary w-52 text-secondary"
                        value={filter}
                        placeholder="Search Your Products"
                        onChange={searchEvent.bind(this)}
                    />
                    <div>
                        <button className='text-lg font-mono btn-primary btn text-white' ><label htmlFor="my-modal-3" className=" uppercase    cursor-pointer">Add To Cart</label></button>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal mt-10 w-full">
                            <div className="relative sm:w-96 rounded-lg md:w-[1000px] lg:w-[1300px] bg-primary">
                                <label htmlFor="my-modal-3" onClick={crossHandle} className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold">✕</label>
                                <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}></Cart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table-auto w-10/12 mx-auto mt-10">
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
                            Image
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
                               font-mono
                               "
                        >
                            Name
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
                            Category
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
                            Stock
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
                            Price
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
                            Buy
                        </th>
                    </tr>
                </thead>
                {dataSeacrch?.slice(0, 6)?.map((item) => (
                    <tbody className='w-full mx-auto'>
                        <tr className="font-mono text-center">
                            <td
                            >
                                <img className="w-24 h-24" src={item.thumbnail} alt="" />
                            </td>
                            <td
                            >
                                <h1 className='text-lg  text-white'>{item.title}</h1>
                            </td>
                            <td
                            >
                                <h1 className='text-lg  text-white'>{item.category}</h1>
                            </td>
                            <td
                            >
                                <h1 className='text-lg  text-white'>{item.stock}</h1>
                            </td>
                            <td
                            >
                                <h1 className='text-lg  text-white'>${item.price}</h1>
                            </td>

                            <td
                            >
                                <div className='flex items-center gap-3 justify-center'>
                                    <h1 className='text-lg  text-white'>1</h1>
                                    <h1 className='rounded-md mr-2 text-secondary text-lg font-semibold py-2 px-3 bg-primary'>< AiOutlineShoppingCart /> </h1>
                                    <div className="form-control">
                                        <div onClick={() => addToCart(item)}>
                                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" className='text-3xl' id="terms" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default Product;