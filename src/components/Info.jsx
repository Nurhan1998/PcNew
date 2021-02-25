import React from 'react';
import { Container,Image } from 'react-bootstrap';

const Info = () => {
    return (
        <>
            <Image 
                style={{
                    position: "relative",
                    width: "100%",
                    objectFit: "cover",
                    zIndex: "-1"}}
                    // left: "50%",
                    // right: "50%",
                    // top: "50%",
                    // height: "100%",
                    // transform: "translate(-50%, 50%)",
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-collection-banner-hero-desktop-01-ps4-30oct20$en?$native$" fluid/>      
             {/* <Container fluid>
             <h3>Коллекция PlayStation Plus</h3>
                 <div style={{width:"auto"}}>
            <p>Наслаждайтесь подборкой лучших игр поколения PS4, доступных подписчикам PlayStation Plus без дополнительных трат.6. Получите доступ к целой библиотеке игр, как только получите свою PS5.</p>
                 </div>
             </Container> */}
                        
        </>
    );
};

export default Info;