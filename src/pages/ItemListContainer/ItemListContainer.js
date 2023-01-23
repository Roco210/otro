
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
  const [ products, setProducts ] = useState([]);
  const {category} =useParams();


  const getProducts = fetch ('https://fakestoreapi.com/products', {
    method:'GET',
    headers: {
      'content-type':'json',

    },
   })

  useEffect(() => {
    getProducts
    .then((res) => {
      return res.json();
      }).then((response) => {
        if(category){
          const prodsFilt= response.filter((p)=>p.category === category)
        setProducts(response);
        }else {setProducts(response)}
      })
    .catch((error) => console.log(error));
  },[category])
  console.log(products)
  return (
  <div>
    <ItemList productos={products}/>
    </div>
  );
};

export default ItemListContainer