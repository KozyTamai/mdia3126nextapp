import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: inline-flex;
flex-direction: column;
`;

const DropDownMenu = styled.div`
border: 1px solid #BDBDBD;
box-sizing: border-box;
border-radius: 20px;
display: inline-felx;
justify-content: center;
align-items: center;
cursor: pointer;
background-color:#fff;
transition: background-color 0.5s;
&:hover {
    background-color: #ddd;
}
`;

const DropDownBox = styled.div`
width: 100%;
padding: 10px;
display: flex;

div {
    margin: 0 10px;
}

`;

const Expand = styled.div`
background: #FFFFFF;
border: 1px solid #EAEAEA;
box-sizing: border-box;
box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
display: ${props=>props.expanded ? "inline-flex" : "hidden"};
height: ${props=>props.expanded ? "auto" : "0px"};
font-size: ${props=>props.expanded ? "18px" : "0px"};
opacity: ${props=>props.expanded ? 1 : 0};
transition: opacity 0.5s;
flex-direction: column;
margin-top: 10px;
 div {
    padding: ${props=>props.expanded ? "20px 15px" : "0px"};
    margin: ${props=>props.expanded ? "5px 0" : "0px"};
     cursor:pointer;
     &:hover {
        background-color: #ddd;
    }
 }

`;

const ExpandImg = styled.img `
transform: ${props=>props.expandImg ? "rotate(180deg)" : "none"};
`;




const Menu = ({expand, onMenuSelect}) => {

    const [expanded, setExpanded] = useState(false);
    const [expandImg, setImg] = useState(false);

    useEffect (()=> {
        setExpanded(expand)
    }, [expand])

    return <Container>
        <DropDownMenu onClick={()=>{
            setExpanded(!expanded);
        }}>
            <DropDownBox>
                <div><img src="/user.png" /></div>
                <div>johndoe.bcit.ca</div>
                <div><ExpandImg src="/expand.png" expandImg={expandImg} 
                onClick = {()=>{
                    setImg(!expandImg);
                }}
                /></div>
            </DropDownBox>
        </DropDownMenu>
        <Expand expanded={expanded}>
            <div onClick={()=> {
                onMenuSelect("bg");
            }}>Change BG Color</div>
            <div onClick={()=> {
                onMenuSelect("img");
            }}>Change BG Image</div>
            <div onClick={()=> {
                onMenuSelect("help");
            }}>Help</div>
        </Expand>
    </Container>
}

Menu.defaultProps = {
    expand: false


}

export default Menu;