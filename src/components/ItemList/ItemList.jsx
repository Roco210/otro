import Item from "../Item/Item";


const ItemList = ({productos}) => {
  return (
      <ul>
        {productos.map((prod)=>(<Item producto={prod} key={prod.title}/> ))};
      <h1>hola</h1>
    </ul>
  );
};

export default ItemList