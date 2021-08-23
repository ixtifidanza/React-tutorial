import React, { Component } from 'react'
import styled from "styled-components"
import FooterBg from "./img/footerBg.jpg"



export class Footer extends Component {
    render() {
        return (
            <div>
                <img src={FooterBg}/>

                {/* <FooterBlock>
                    <FooterItem>
                <img src={FooterBg}/>
                        <h4>О магазине</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.
                        </p>
                    </FooterItem>
                    <FooterItem>
                        <h4>Категории</h4>
                    </FooterItem>

                    <FooterItem>
                        <h4>РАссылка</h4>
                    </FooterItem>
                </FooterBlock> */}
            </div>
        )
    }
}

export default Footer

const FooterBlock = styled.div`
`
const FooterItem = styled.div``


