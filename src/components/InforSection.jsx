import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from "react-icons/fa"

const InforSection = () => {
  const inforItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "Get more information",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund on return",
    },
    { 
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Secure fast payment",
      description: "Safe payment details",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enjoy the best prices on our product",
    },
  ];

  return(
      <div className=" pb-8 pt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {inforItems.map((item, index) =>(
            <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default InforSection
