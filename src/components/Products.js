import React, { Component } from 'react'
import styled from "styled-components"
import Product from "./img/product.png"


export class Products extends Component {
    render() {
        return (
            <div>
                <Title>
                    <h4>новые поступления</h4>
                    <p></p>
                </Title>

                <Items>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                        </Items>
                        
                <Items>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                            <Item>
                                <img src={Product} alt="" />
                                <ItemText>Louis XVI ATHOS
                                <span>165 000 руб.</span>
                                </ItemText>
                            </Item>
                        </Items>
            </div>
        )
    }
}

export default Products


const Title = styled.div`
    margin: 120px 0;
    color: #fff;
    font-size: 36px;
    text-align: center;
    text-transform: uppercase;
    font-family: Playfair Display;
    p {
        border: 1px solid #fff;
        width: 120px;
        margin: 50px auto;
    }

`
const Items = styled.div`
        display: flex;
        algin-items: center;
        justify-content: center;

`
const Item = styled.div`
        font-family: 'Playfair Display', serif;
        background: #191B1C;
        width: 260px;
        padding: 50px 23px;
        margin: 25px;
        transition: ease 0.5s;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
`
const ItemText = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #fff;
        margin-top: 10px;
        font-size: 18px;
        span {
            font-size: 16px;
        }
`

