import React,{Component} from "react";

import './Sidebar.less';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            skills:[
                { catalog:"Backend",items:["java","nodejs",'php']},
                { catalog:"Frontend",items:["html/html5","css/css3",'javascript',"bootstrap","vue","react","angular"]},
                { catalog:"App",items:["android","hybrid app",'wechat']},
                { catalog:"Database",items:["mysql/oracle/mssql/postgresql","mongodb",'redis','elastic search']},
                { catalog:"Devops",items:["windows/linux/macos","nginx",'tomcat','docker']},
                { catalog:"Tec",items:["webrtc","cluster",'load balance','concurrency']},
                { catalog:"Tools",items:["git/svn","jenkins",'photoshop/sketch']},
            ]
        };
    }
    render() {
        const skills = this.state.skills.map((sk,i)=>{
            return (
            <div className="skill" key={i}>
                <div className="skill-catalog">{sk.catalog}</div>
                <div className="skill-catalog-list">
                    {
                        sk.items.map((item,j)=>{
                            return (
                                <div key={i+""+j}>{item}</div>
                            );
                        })
                    }
                </div>
            </div>);
        });

        return (
            <div className="sidebar animated slideInRight">
                <h2>Skills</h2>
                <div className="box-content">
                    {skills}
                </div>
            </div>
        );
    }
}

export default Sidebar;