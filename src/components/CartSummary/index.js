// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCost = 0

      const cartListCount = cartList.length
      cartList.forEach(element => {
        const cost = element.price * element.quantity
        totalCost += cost
      })

      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total: <span className="total-cost">{totalCost}</span>
          </h1>
          <p className="cart-summary-para">{cartListCount} Items in cart </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
