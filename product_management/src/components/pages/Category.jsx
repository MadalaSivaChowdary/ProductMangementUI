import "./Category.css"
import { useParams } from "react-router";
import getProducts from "../../service/getProducts.js"
import {useEffect, useState } from "react";
import ListProduct from "../listProducts/ListProduct.jsx";
import {useSelector} from "react-redux"


var listCategory =() =>{
const [products ,setProducts] = useState([]);
 const { name: categoryName } = useParams();

const searchTerm = useSelector(state => state);






 // 🔄 Fetch products when component mounts
//category
 useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getProducts();
        let filteredProducts = [];

        if (!searchTerm || searchTerm.trim() === "") {
          filteredProducts = allProducts.filter(x => x.category === categoryName);
        } else {
          const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(escapedTerm, "i");

          filteredProducts = allProducts.filter(x =>
            x.category === categoryName &&
            (regex.test(x.brand) || regex.test(x.title))
          );
        }

        setProducts(filteredProducts.length > 0 ? filteredProducts : null);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, [categoryName, searchTerm]);



    return(
        <div className="container">
<div className="img_container">

   <p>
    Electronic content, often referred to as e-content, encompasses any digital information that can be created, stored, and distributed electronically, typically over computer networks like the internet. This includes a wide range of formats such as text, images, graphics, audio, video, and animations. E-content is frequently used in education, particularly in online learning, where it provides accessible and versatile resources for learners. E-content plays a crucial role in online courses, providing learners with digital textbooks, video lectures, interactive exercises, and other resources. 
    Electronic content, often referred to as e-content, encompasses any digital information that can be created, stored, and distributed electronically, typically over computer networks like the internet. This includes a wide range of formats such as text, images, graphics, audio, video, and animations. E-content is frequently used in education, particularly in online learning, where it provides accessible and versatile resources for learners. E-content plays a crucial role in online courses, providing learners with digital textbooks, video lectures, interactive exercises, and other resources. 
   </p>
   
</div>
<div className="category_container">
 
{products && <ListProduct products={products} />}
</div>

        </div>
    )
}

export default listCategory