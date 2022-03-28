
import React from "react";
import './Chips.css';

class Chips extends React.Component {
    state = {
        skills: this.props.skills //if data is coming from external component then go for props else 
                                    //if coming from inside or have to update internally go for state   
    };

// skills can be used as items 
onEnter = (e) =>{
    if(e.charCode === 13 || e.charCode === 32){
        const skills = this.state.skills;
         if(skills.indexOf(e.target.value)=== -1){
             skills.push(e.target.value);
             this.props.onSkillsChange(skills);
             this.setState({ skills });
         }
        e.target.value = '';

    }
}

onRemove = (i)=>{
    const skills = this.state.skills;
    skills.splice(i,1);
    this.setState({ skills});
    //console.log('removed',i);
}

render()
{ return <div>
            <div className="m-3">
                {this.state.skills.map( 
               (skills,i) => { return <span className="chip">
               <span>{skills}</span>
                <i onClick={() => this.onRemove(i)} className="fa fa-close"></i>
                </span>
                 })}
            </div>
            <div>
            <input onKeyPress={this.onEnter} type ="text" placeholder="Skill" 
            className="form-control form-control"/>
            </div>
        </div>
}

}



export default Chips;