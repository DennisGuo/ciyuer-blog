import React,{Component} from "react";

import Slogan from './Slogan';
import './Header.less';

class HeaderContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            brand:{
                title:"Dennis Guo",
                subtitle:"A FULLSTACK WEB DEVELOPER"
            },
            slogans:[
                {content:"However difficult life may seem, there is always something you can do and succeed at.",author:"Stephen Hawking"},
                {content:"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",author:"Stephen Hawking"},
            ],
            contact:{
                email:"guohengxi.dennis@gmail.com",
                gplus:"https://plus.google.com/u/0/113253717737540008691",
                github:"http://dennisguo.github.io/"
            }            
        }
    }

    render(){
        const {brand,contact,slogans} = this.state;
        return (
            <div className="header">
                <div className="brand animated slideInLeft">                
                    <h1>{brand.title}</h1>
                    <p className="subtitle">{brand.subtitle}</p>
                </div>

               <Slogan data={slogans}/>

                <div className="contact animated slideInRight">
                    <ul>
                        <li><a href={contact.github} target="_blank"><span className="fa fa-github-square"></span></a></li>
                        <li><a href={contact.gplus}  target="_blank"><span className="fa fa-google-plus-square"></span></a></li>
                    </ul>
                    <a href={"mailto:"+contact.email} className="email" target="_blank">{contact.email}</a>
                </div>
            </div>
        );
    }
}

export default HeaderContainer;