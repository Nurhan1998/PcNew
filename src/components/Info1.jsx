import React from 'react';
import {Image} from 'react-bootstrap';

const Info1 = () => {
    return (
        <div>
             <Image 
                style={{
                    height:"100%",
                    position: "relative",
                    width: "100%",
                    objectFit: "cover",
                    zIndex: "-1"}}
                    // left: "50%",
                    // right: "50%",
                    // top: "50%",
                    // height: "100%",
                    // transform: "translate(-50%, 50%)",
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-page-background-desktop-block-01-en-15jun20?$native$" fluid/>      
             {/* <Container fluid>
             <h3>Коллекция PlayStation Plus</h3>
                 <div style={{width:"auto"}}>
            <p>Наслаждайтесь подборкой лучших игр поколения PS4, доступных подписчикам PlayStation Plus без дополнительных трат.6. Получите доступ к целой библиотеке игр, как только получите свою PS5.</p>
                 </div>
             </Container> */}
                    
        </div>
    );
};

export default Info1;