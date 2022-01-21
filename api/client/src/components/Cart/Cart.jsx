import React,{useState,useEffect} from 'react'
import axios from 'axios';
import CartItem from './CartItem'
import { useGlobalContext } from '../context/context';
import { baseUrl } from '../../config';
import './Cart.css'
import StripeCheckout from "react-stripe-checkout";
const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const { cart } = useGlobalContext()
  const [stripeToken, setStripeToken] = useState(null);
  const [total,setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
 
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
    
        const res = await axios.post(baseUrl + "/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        window.push("/", {
          stripeData: res.data });
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }


 
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>shs{total}</span>
          </h4>
        </div>
        <StripeCheckout
              name="perez Bookshop"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is ${total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
        <button className='btn clear-btn'>
          Purchase
        </button>
        </StripeCheckout>
      </footer>
    </section>
  )
}

export default Cart
