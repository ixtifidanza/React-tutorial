import React, { Component } from 'react'
import styled from "styled-components"
import Brand from "./img/Brand.png"


export class Brands extends Component {
    render() {
        return (
            <BrandsBack>
                <Title>
                    <h4>наши бренды</h4>
                    <p></p>
                <Flex>
                    <img src={Brand}/>
                    <img src={Brand}/>
                    <img src={Brand}/>
                    <img src={Brand}/>

                </Flex>
                </Title>

                
            </BrandsBack>
        )
    }
}

export default Brands

const BrandsBack = styled.div`
    div {
        background: #0F0F0F;
        padding: 40px 0;
        margin-top: 60px;
    }
`
const Flex = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
`
const Title = styled.div`
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 36px;
    font-family: 'Playfair Display', serif;
    padding-top: 60px;
    padding-bottom: 20px;
    p {
        border: 1px solid #fff;
        width: 120px;
        margin: 50px auto;
    }

`
