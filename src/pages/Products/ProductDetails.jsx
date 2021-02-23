import classes from './Products.module.css';
import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext/ProductsContext';

const ProductDetails = () => {
    const { id } = useParams()
    const { getProductDetail, productDetail, productDelete, productEdit, isAdmin } = useContext(productsContext)

    useEffect(() => {

        getProductDetail(id)
    }, [])

    function handleClickDelete(id) {
        productDelete(id)
    }
    function handleClickEdit(id) {
        productEdit(id)
    }

    return (
        <div className={classes.product_detail_content}>

            <h4>Detail</h4>
            <div >

                {productDetail?.name}

                {
                    productDetail?.image.map((item, index) => (
                        <div className={classes.imgWrapper} key={index}>
                            <img src={item} alt={`product image ${index + 1}`} />
                        </div>
                    ))
                }


                {!isAdmin ?
                    (
                        <> {productDetail?.description}</>
                    ) : (
                        <>

                            {productDetail?.description}

                            <Link onClick={() => handleClickEdit(id)} to={'/admin-edit'}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => handleClickDelete(id)} >
                                Delete
                            </button>

                            <Link to='/admin-list'>
                                <button>Exit</button>
                            </Link>
                        </>
                    )
                }
            </div>
        </div>

    );
};

export default ProductDetails;