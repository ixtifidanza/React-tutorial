import React, { Component } from 'react'
import styled from "styled-components"
import Phone from "./img/nav-phone.svg"
import Reg from "./img/reg.svg"

export class Header extends Component {
    render() {
        return (
                <NavbarTop>
                    <nav>
                        <ul>
                            <li>
                                <img src={Phone} />
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
                            <img src={Reg} />
                            <h1>Войти / Регистрация</h1>
                        </div>
                    </nav>
            </NavbarTop>
        )
    }
}

export default Header



const NavbarTop = styled.div`
    background: #000;
    color: #fff;
    width: 100%;
    padding: 14px 400px;

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



