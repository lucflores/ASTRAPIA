import Item from "../Item/Item"


const ItemList = ({ productos }) => {
    return (
        <div className="container">
            <div className="row">
                {productos.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
    )
}

export default ItemList