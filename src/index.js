import React from 'react';
import ReactDom from 'react-dom';
import './ReactApp.css';
import Picture from './resources/banana.gif';
import EpsilonPic from './resources/singleband7.jpg';
import EpsilonPicArm from './resources/armband7.jpg';


const HeaderInfo = {
  img: Picture,
  headertitle: 'WhoRU LLC.',
  headertext: "This is a WhoRU React website!",
  author: 'Gabriel Dennett'
}

const Epsilon = {
  img: EpsilonPic,
  pagetitle: 'Series Epsilon',
  author: 'Gabriel Dennett'
}

const Epsilon2 = {
  img: EpsilonPicArm,
  pagetitle: 'Series Epsilon(Designer View)',
  author: 'Alex Cruz'
}


const Header = (props) => {
  return (
    <div className="headerdiv">
      <h1 className="header">{HeaderInfo.headertitle.toUpperCase()}</h1>
      <img className="centerpic" src={HeaderInfo.img} alt='bananapic'/>
      <p className="centertext mediumtext">{HeaderInfo.headertext}</p>
    </div>
    );
}
const Product = (props) => {
  return (
    <div className="contentdiv">
      <div className="subdiv">
        <h1 className="centertext mediumtext">{props.pagetitle}</h1>
        <img className="mainpagepic centerpic" src={props.img} alt='marketpic1' />
        <p className="centertext">{props.author}</p>
      </div>
    </div>
  );
}


// function Greeting(){
//   return (
//   <div>
//     <h1>Hello, I am Gabriel Dennett!</h1>;
//     </div>);
// }

const WhoRUSite = () => {
  return (
    <div>
      <Header />
      <Product img={Epsilon.img} pagetitle={Epsilon.pagetitle} author={Epsilon.author} />
      <Product img={Epsilon2.img} pagetitle={Epsilon2.pagetitle} author={Epsilon2.author} />
    </div>
  );
  // return React.createElement('div', {}, React.createElement('h1', {}, 'Hello React'));
}




ReactDom.render(<WhoRUSite/>, document.getElementById('root'));