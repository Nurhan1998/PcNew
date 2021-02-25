import React,{ useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext/ProductsContext';
import { Button, Image} from "react-bootstrap"

const ProductsFavorites = () => {
    const { favorites,getFavorites } = useContext(productsContext)

    useEffect(() => {
        getFavorites()
    }, [])


    return (
            <div>
                
                <ul>
      FavoritesList
      {favorites?.map((item, index) => (
        <div key={item.id}>
          <Image src={item.image[0]} fluid className="border border-primary" />
          <h5 className="text-center">{item.name}</h5>
          <li><strong>Category: </strong>{item.category}</li>
          <li><strong>Price: </strong>{item.price} USD</li>
          <li><strong>Platform: </strong>{item.description}</li>
          <Link to={`favorites/${item.id}`} style={{ textDecoration: "none" }}>
            <Button className="rounded-pill mt-3" block>Details</Button>
          </Link>
          <form className="text-center mt-2 mb-2 ">
            <Button variant="outline-primary" className="rounded-pill mr-2">Add to cart</Button>
            <input
              type="number"
              min="1"
              style={{ width: "50px" }}
              
            />
          </form>
        </div>
      ))}
      </ul>
                
            </div>
    );
};

export default ProductsFavorites;