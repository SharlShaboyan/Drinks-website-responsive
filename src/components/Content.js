import "./content.css"
import { useState } from 'react';
import { Row, Col } from "antd";
import Formm from './Form';

function MyContent() {

    const [arts, setArts] = useState([])

    function onSubmit() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            res.drinks.map((e) =>{
                setArts(arts.push((e)))
            })
            setArts(arts.map((e, i) => {
                return (
                    
                        <Col key={i} xs={24} sm={12} md={8} lg={6} style={{padding : "20px"}}>
                            <Row>
                            <h4 className="drink-title">{e.strIngredient1}</h4>
                            </Row>
                            <Row>
                            <img className="api-img" src={e.strDrinkThumb} />
                            </Row>
                        </Col>
                    
                )
            }))
        })
    }

    return (
        <>
            {arts.length === 0 ? <Formm onSubmit={onSubmit} /> : null }
            {arts.length !== 0 ? <h2 className="content-title">DRINKS</h2> : null }
            
            <div className="wrap">
                <Row gutter={[24, 24]}>
                {
                    arts
                }
                </Row>
            </div>
            
        </>
    )
}

export default MyContent