import React, {useState} from 'react';
import Menu from '../comps/Menu';
import Content from '../comps/Content';


export default function Home() {

  const [contentColor, setContentColor] = useState(false);

  const [contentImg, setContentImg] = useState(false);

  const [contentText, setContentText] = useState("Welcome to my page");

  const HandleMenu = (str) => {
    //capture what happen in the menu and change the page state based on it
    // alert(str);
    if (str === "bg") {
      setContentColor("yellow");
    }else if (str === "img") {
      setContentImg("url('/img1.jpg')");
    }else if (str === "help") {
      setContentText("Help");
    }
  }
  
  return <div className="home">
    <div className="content">
      <Content bgcolor={contentColor} bgimg={contentImg}>
        <h1>{contentText}</h1>
        <div>Hi</div>
      </Content>
    </div>
    <div className="menu">
      <Menu onMenuSelect={HandleMenu}/>
    </div>
  </div>
}