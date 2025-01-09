import women from "../assets/images/women.webp"
import men from "../assets/images/men.jpeg"
import kids from "../assets/images/kids.webp"
import beauty from "../assets/images/beauty.webp"
const CategorySection = () => {
    const Categories = [
        {
            title: "Men",
            image: men,
        },
        {
            title: "Women",
            image: women,
        },
        {
            title: "Kids",
            image: kids,
        },
        {
            title: "Beauty",
            image: beauty,
        },
    ];
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {Categories.map((category, index) =>(
            <div key={index} className="relative h-64 w-60 rounded-full text-center shadow transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={category.image} alt="" className="w-full h-full object-cover rounded-full shadow-md" />
                <div>
                    <p className="text-xl font-bold">{category.title}</p>
                    <p className="text-gray-600">View All</p>
                </div>
            </div>

        ))}
    </div>
  )
}

export default CategorySection
