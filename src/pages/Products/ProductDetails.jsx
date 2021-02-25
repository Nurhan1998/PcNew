import classes from './Products.module.css';
import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext/ProductsContext';
import { Button,Row,Container,Col } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

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

            
            
            
            
        <Container  >
            <Row>
                <Col>
                {
                    productDetail?.image.map((item, index) => (
                        <div className={classes.imgWrapper} key={index}>
                            <img src={item} alt={`product image ${index + 1}`} />
                        </div>
                    ))
                }
                </Col>
                <Col>
                <Container>

                {!isAdmin ?
                    (
                        <> {productDetail?.description}</>
                    ) : (
                        <>

                            {productDetail?.description}

                            <Link onClick={() => handleClickEdit(id)} to={'/admin-edit'}>
                                <Button>Edit</Button>
                            </Link>
                            <Button onClick={() => handleClickDelete(id)} >
                                Delete
                            </Button>

                            <Link to='/admin-list'>
                                <Button>Exit</Button>
                            </Link>
                        </>
                    )
                }
                </Container>
                 <Button
                    // onClick={() => handleClickCart(item)}
                    variant="outline-primary"
                    className="rounded-pill mr-2"
                    >
                    <FaCartPlus/>
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="rounded-pill mr-2"
                  >
                    <AiOutlineHeart/>
                  </Button>
                </Col>                
            </Row>  
                </Container>
            
        </div>

    );
};

export default ProductDetails;