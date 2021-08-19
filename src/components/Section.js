import React, { Component } from 'react'
import styled from "styled-components"
import SecBlockBg from "./img/Sec-block-bg.jpg"
import Product from "./img/product.png"


export class Section extends Component {
    render() {
        return (
            <div>
                <SecondSection>
                    <FirstBlock>
                        <Flex>
                        СЕЗОН 2020/21
                        <p></p>
                        </Flex>

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
                        </Items>
                        

                    </FirstBlock>
                    <SecondBlock>
                        <img src={SecBlockBg} alt=""/>
                        <Content>
                            <Flex>
                                <h1>Новая коллекция</h1>
                                <p></p>
                                <button>Каталог</button>
                            </Flex>
                        </Content>
                    </SecondBlock>
                </SecondSection>
                
            </div>
        )
    }
}

export default Section

const SecondSection = styled.div`
    width: 100%;
    background-color: #000;
    position: relative;
    padding: 0 80px;
`

const Flex = styled.div`
        color: #fff;
        text-align: center;
        font-family: 'Playfair Display', serif;
        font-weigth: bold;
        font-size: 36px;
        padding: 60px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p {
            border: 1px solid #fff;
            width: 120px;
            margin: 50px 0 0;
        }
`

const FirstBlock = styled.div`  
        width: 50%;
        height: auto;

`

const SecondBlock = styled.div`
        position: absolute;
        top: 0;
        right: 0;
        img {
            width: 100%;
        }
`

const Content = styled.div`
        position: absolute;
        top: 50%;
        left: 30%;
        h1 {
            font-family: Playfair Display;
            font-weight: bold;
            font-size: 36px;
            text-transform: uppercase;
        }

        p {
            margin: 30px 0 ;
        }
        button {
            background: none;
            outline: none;
            border: 1px solid #fff;
            padding: 12px 28px;
            color: #fff;
            font-family: Playfair Display;
            text-transform: uppercase;
            font-size: 18px;
            transition: ease 0.5s;
            &:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }
`

const Items = styled.div`
        display: flex;
        algin-items: center;
        justify-content: space-between;

`
const Item = styled.div`
        font-family: 'Playfair Display', serif;
        background: #191B1C;
        width: 260px;
        padding: 50px 23px;
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