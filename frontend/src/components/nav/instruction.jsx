import React from "react";
import userjob from '../images/userjob.gif'
import jobshow from '../images/jobshow.gif'
import '../../styles/instructions.scss'
import "../../styles/forms.scss";

class Instructions extends React.Component {
  constructor(props) {
        super(props);
  }

  render() {
    const pathname = this.props.location.pathname;
    const userType = this.props.session.user.userType;

    return (
      <div>
        {
    pathname === '/' && userType === 'user' ? (
      <div className="signup-form">
          <p className="instruct-title">User Instructions</p>
          <ol className="instructions-ol">
            <li><p>Click on which type of transportation you would like to request.</p></li>
            <li><p>Fill out moving details, such as what you are moving.</p></li>
            <li><p>Enter in a starting and ending address located in the San Francisco area.</p></li>
            <li><p>Once all fields are complete click on "Request Hauler."</p></li>
          </ol>
          <img className="instruct-gif" src={userjob} height='200' width=''></img>
          {/* <img className="instruct-gif" src={userjob} height='200' width=''></img> */}
        </div> 
    ) : 
      pathname === '/' && userType === 'hauler' ? (
      <div className="signup-form">
          <p className="instruct-title">Hauler Instructions</p>
          <ol className="instructions-ol">
            <li className="instructions-list"><p>Click the "Jobs" button in navbar to take you to job listings.</p></li>
            <li className="instructions-list"><p>To view a route click "View Route" on any job.</p></li>
            <li className="instructions-list"><p>To accept a job click "Accept Job."</p></li>
            <li className="instructions-list"><p>Once job is finished click "Complete Job."</p></li>
          </ol>
          <img className="instruct-gif" src={jobshow} height='300' width=''></img>
        </div> 
      ) : (
      pathname === '/userjob' ? (
        <div className="signup-form">
          <p className="instruct-title">User Instructions</p>
          <ol className="instructions-ol">
            <li><p>To delete a request you no longer need click "Delete."</p></li>
            <li><p>To accept a job click "Accept Job."</p></li>
            <li><p>Once job is finished click "Complete Job."</p></li>
          </ol>
          <img className="instruct-gif" src={userjob} height='200' width=''></img>
        </div> 
      ) : pathname === '/jobs' ? (
        <div className="signup-form">
          <p className="instruct-title">Hauler Instructions</p>
    
          <ol className="instructions-ol">
            <li><p>To view a route click "View Route" on any job.</p></li>
            <li><p>To accept a job click "Accept Job."</p></li>
            <li><p>Once job is finished click "Complete Job."</p></li>
          </ol>
      
          <img className="instruct-gif" src={jobshow} height='300' width=''></img>
        </div> 
      ) : null )
  }
      </div>
    );
  }

}


export default Instructions;