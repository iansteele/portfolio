import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';

function SocialLink(props) {
  return (
    <div className="project mt-4">
      <Link to={props.link}>
        <div className="project-image relative">
          <img src={props.image} alt="Project Image"/>
          <div className="bg-white rounded-full  absolute top-4 left-4 py-2 px-6">
            <div className="project-title font-semibold">
              {props.title}
            </div>
            <div className="project-category">
              {props.category}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SocialLink;
