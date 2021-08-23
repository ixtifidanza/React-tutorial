import React, { Component } from 'react'
import styled from "styled-components"
import CollectionBg from "./img/Collection-bg.jpg"



export class Collection extends Component {
    render() {
        return (
            <div>
                <CollectionBlock>
                            <img src={CollectionBg}/>
                        <Flex>
                            <h4>
                              коллекция 2018
                            </h4>
                            <p></p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </span>

                            <button>посмотреть коллекцию</button>
                        </Flex>
                        
                </CollectionBlock>
                 
            </div>
        )
    }
}

export default Collection

const CollectionBlock = styled.div`
    font-family: Playfair Display;
    width: 100%;
    margin-top: 150px;
    display: flex;
    align-items: center;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 470px;
    text-align: center;
    margin-left: 285px;
    color: #fff;
    span {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 1.9;
        margin-bottom: 61px;
    }
    h4 {
        text-transform: uppercase;
        font-size: 36px;
    }
    p {
        border: 1px solid #fff;
        width: 120px;
        margin: 50px 0;
    }
    button {
        background: none;
        outline: none;
        color: #fff;
        text-transform: uppercase;
        padding: 12px 28px;
        transition: 0.5s ease;
        &:hover{
            cursor: pointer;
            transform: scale(1.1);

        }
    }
`



