
import createAxiosClient from "./apiConfig/apiconfig.js"


var getProducts = async () =>{

 try {
    const response = await createAxiosClient.get("/PRODUCT/product/getall");
    return response.data;
  } catch (err) {
    console.error("Error updating profile", err);
    throw err;
  }

  
}

export default getProducts;