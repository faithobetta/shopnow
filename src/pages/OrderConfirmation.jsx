
import { useNavigate } from "react-router-dom";

const OrderConfirmation = ({ order }) => {
const navigate = useNavigate()

  return (
    <div className="container mt-32 mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4 flex justify-center">Order Confirmation!</h3>
      <p>Your order has been placed successfully! You will receive an email confirmation shortly.</p>
      <div className="mt-6 p-4 boarder rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p className="text-md font-semibold mb-2">Order Number: {order.orderNumber}</p>
        <div className="mt-4">
            <h4 className="text-md font-semibold mt-4">Shipping Information</h4>
            <div className="mt-2">
                <p>{order.shippingInfo.address}</p>
                <p>{order.shippingInfo.city}</p>
                <p>{order.shippingInfo.postCode}</p>
            </div>

        </div>

        <div className="mt-4">
            <h4 className="text-md font-semibold mt-4">Ordered Items</h4>
            {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
                <p>
                {product.name} x {product.quantity}  
                </p>
                <p>
                ${product.price * product.quantity}
                </p>
            </div>
            ))}
        </div>

        <div className="mt-4 flex justify-between">
            <span className="text-md font-semibold mt-4">Total Price</span>
            <span>${order.totalPrice.toFixed(2)}</span>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-green-700 hover:bg-green-500 text-white py-2 px-4">Order Tracking</button>
          <button className="bg-black hover:bg-gray-800 text-white py-2 px-4" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
