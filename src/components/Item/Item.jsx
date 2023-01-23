import ItemCount from "../ItemCount/ItemCount";


const Item = ({producto}) => {
  return (
    <li>
        <div>
            <h1>{producto.title}</h1>
        </div>
        <ItemCount/>
    </li>
  )
};

export default Item;