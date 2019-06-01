import React from 'react';

  
class  IdHTML extends React.Component{
  render() {
      
    let style2 = {border: "3px solid rgb(29, 29, 204)" }
                
                    if(this.props.genre === "F"){
                       { style2 = {border: "3px solid yellow" }
                       }
                    }
    return (
       
        <div style={style2}>
          <img
            className="img"
            src={this.props.avatarUrl}
            alt={this.props.name}
          />
        
          <h5 className="test">{this.props.name}</h5>  
        
        
        <h5 className="test">   {this.props.text}</h5>  
        
        </div>
       
     
    );
  }
  


}
  

  export default IdHTML;