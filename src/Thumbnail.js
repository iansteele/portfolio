import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';

function Thumbnail(props) {
  return (
      <Link className="transform transition duration-500 hover:ring hover:ring-brand-secondary hover:ring-offset-2 hover:scale-101 rounded-xl relative overflow-hidden " to={props.link}>
        <img className="" src={process.env.PUBLIC_URL + "/"+ props.image} alt="Project Image"/>
        <div className="bg-brand-primary rounded-full  absolute bottom-2 right-2 py-2 px-4">
          <div className="project-title text-xs font-semibold">
            {props.title}
          </div>
          <div className="">
            {props.category}
          </div>
        </div>
      </Link>
  );
}

export default Thumbnail;
