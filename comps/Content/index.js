import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.bgcolor ? props.bgcolor : "blue"};
background-image: ${props=> props.bgimg ? props.bgimg : "none"};
background-size: cover;
min-width: 10px;
min-height: 10px;
`;

const Content = ({children, bgcolor, bgimg}) => {
    return <Container bgcolor={bgcolor} bgimg = {bgimg}>
            {children}
    </Container>
}

Content.defaultProps = {
 bgcolor: "blue",
 bgimg: "/user.png"
}

export default Content;