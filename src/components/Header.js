import React, { Component } from 'react'
import styled from "styled-components"
import Phone from "./img/nav-phone.svg"
import Reg from "./img/reg.svg"
import Logo from "./img/logo.png"
import Search from "./img/search.svg"
import Cart from "./img/cart.svg"


export class Header extends Component {
    render() {
        return (
            <Wrapper>
                <NavbarTop>
                     <Container>
                    <nav>
                        <ul>
                            <li>
                                <img src={Phone}  alt="" />
                            </li>
                            <li>
                              8 (812) 123-45-67 
                            </li>
                            <li>
                              Работаем 7 дней в неделю  
                            </li>
                            <li>
                              9:00 — 18:00
                            </li>
                        </ul>
                        <div>
                            <img src={Reg}  alt="" />
                            <h1>Войти / Регистрация</h1>
                        </div>
                    </nav>
           

            
                </Container>
            </NavbarTop>
                <NavbarBottom>
                    <Container>
                        <Flex>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <LinksTop>
                            <a href="">Понравилось</a>
                            <a href="">Личный кабинет</a>
                            <a href="">Настройки</a>
                            <img src={Cart}/>
                            <img src={Search}/>
                        </LinksTop>
                        </Flex>
                    </Container>
                </NavbarBottom>
            </Wrapper>
        )
    }
}

export default Header



const NavbarTop = styled.div`
    background: #000;
    color: #fff;
    padding: 20px 0;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                list-style: none;
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: #969696;
                padding: 0 15px;
            }
            li:nth-child(3) {
                border-right: 1px solid #969696;
                border-left: 1px solid #969696;
            }
        }
        div {
            display: flex;
            align-items: center;
            h1 {
                color: #969696;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 16px;
                text-align: right;
                margin-left: 10px;
            }
        }
    }
`

const Wrapper = styled.div`
    width: 100%;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img {
        padding: 15px 0;
    }
`

const NavbarBottom = styled.div`
    background: #0F0F0F;
    // padding: 15px 0;
`

const LinksTop = styled.div`
    display: flex;
    align-items: center;

    img {
        padding-left: 25px;
    }

    a {
        padding: 20px 15px;
        display: inline-block;
        text-decoration: none; 
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-transform: uppercase;
        color: #969696;
        &:hover {
            background: #1F1F1F;
        }
            

    }
`

const Container = styled.div`
        max-width: 1110px;
        margin: 0 auto;
 `



