import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Checkout = ({setOrder}) => {
    const [billingToggle, setbillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        postCode: "",
    })
    const [paymentToggle, setPaymentToggle] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState()
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const handleOrder =() =>{
        const newOrder = {
            products: cart.products,
            orderNumber: "84758",
            shippingInfo: shippingInfo,
            totalPrice: cart.totalPrice
        }
        setOrder(newOrder)
        navigate('/orderConfirmation')
    }


  return (
    <div className='container mt-32 mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h3 className='text-2xl font-semibold mb-4 flex justify-center'>CHECKOUT</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>

            <div className="border p-2 mb-6"> 
                <div className="flex items-center justify-between" onClick={() => setbillingToggle(!billingToggle)}>
                    <h3 className="text-lg font-semibold mb-2">Billing Address</h3>
                    {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                    <div>
                        <label htmlFor="" className="block text-gray-700">Name</label>
                        <input type="text" placeholder="Enter Name"  className="w-full px-3 py-2 border"/>
                    </div>

                    <div>
                        <label htmlFor="" className="block text-gray-700">Email</label>
                        <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 border" />
                    </div>

                    <div>
                        <label htmlFor="" className="block text-gray-700">Phone</label>
                        <input type="" placeholder="Enter Phone number" className="w-full px-3 py-2 border"/>
                    </div>
                </div>
            </div>
            
                    {/* shipping adddress  */}
            <div className="border p-2 mb-6">
                <div className="flex items-center justify-between" onClick={() => setShippingToggle(!shippingToggle)}>
                    <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                    {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                    <div>
                        <label htmlFor="" className="block text-gray-700">Address</label>
                        <input type="text" placeholder="Enter Address" onChange={(e)=> setShippingInfo({...shippingInfo, address: e.target.value})} className="w-full px-3 py-2 border"/>
                    </div>

                    <div>
                        <label htmlFor="" className="block text-gray-700">City</label>
                        <input type="email" placeholder="Enter City" onChange={(e)=> setShippingInfo({...shippingInfo, city: e.target.value})} className="w-full px-3 py-2 border" />
                    </div>

                    <div>
                        <label htmlFor="" className="block text-gray-700">Post Code</label>
                        <input type="" placeholder="Enter Post Code" onChange={(e)=> setShippingInfo({...shippingInfo, postCode: e.target.value})} className="w-full px-3 py-2 border"/>
                    </div>
                </div>
            </div> 
                                {/* payment infor  */}
            <div className="border p-2 mb-6">
                <div className="flex items-center justify-between" onClick={() => setPaymentToggle(!paymentToggle)}>
                    <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
                    {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                </div>
                <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                    <div className="flex items-center mb-2">
                        <input type="radio"name="payment"  checked = {paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")}/>
                        <label htmlFor="" className="block text-gray-700 ml-2">Payment on Delivery</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="radio"name="payment"  checked = {paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")}/>
                        <label htmlFor="" className="block text-gray-700 ml-2">Debit Card</label>
                    </div>
                </div>
                {paymentMethod === "dc" && (
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>

                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Card Number</label> 
                            <input type="text" placeholder="Enter Card Number" className="border p-2 w-full rounded" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="block text-gray-700 font-semibold mb-2" >Card Holder Name</label> 
                            <input type="text" className="border p-2 w-full rounded" />
                        </div>

                        <div className="flex justify-between mb-4">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Expire Date</label> 
                                <input type="text" placeholder="MM/YY" required className="border p-2 w-full rounded"/>
                            </div>
                            <div className="w-1/2 ml-2">
                                <label htmlFor="" className="block text-gray-700 font-semibold mb-2">CVV</label> 
                                <input type="text" placeholder="CVV" required className="border p-2 w-full rounded"/>
                            </div>
                        </div>    
                    </div>
                    
                )}
            </div>
            
        </div>
        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                <div className="space-y-4">
                    {cart.products.map((product) => (
                        <div key={product.id} className="flex justify-between">
                            <div className="flex items-center">
                                <img className="w-16 h-16 object-contain rounded" src={product.imagedata} alt="" />
                                <div className="ml-4">
                                    <h4 className="text-md font-semibold">{product.name}</h4>
                                    <p className="text-gray-600"> 
                                        ${product.price} * {product.quantity}
                                    </p>
                                </div>
                            </div>
                            <div className="text-gray-600">
                                ${product.price * product.quantity}
                            </div>
                        </div>
                    ))} 
                </div>
                <div className="mt-4 border-t pt-4">
                    <div className="flex justify-between">
                        <span>Total Price</span>
                        <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-black text-white py-2 mt-6 hover:bg-gray-800" onClick={handleOrder}>Place Order</button>
                </div>
        </div>
      </div>
    </div>
  ); 
};

export default Checkout
