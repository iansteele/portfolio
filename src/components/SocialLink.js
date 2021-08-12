import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../App.css';

function SocialLink(props) {
  return (
    <div className="mt-4 project">
      <Link to={props.link}>
        <div className="relative project-image">
          <img src={props.image} alt="Project Image"/>
          <div className="absolute px-6 py-2 bg-white rounded-full top-4 left-4">
            <div className="font-semibold project-title">
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
