import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../App.css';

function Thumbnail(props) {
  return (
      <Link className="relative min-h-full transition-transform duration-500 transform-gpu hover:ring hover:ring-brand-secondary hover:scale-101 hover:ring-offset-2" to={props.link}>
        <img className="rounded-xl" src={process.env.PUBLIC_URL + "/"+ props.image} alt="Project Image"/>
        <div className="absolute top-0 px-4 py-2 bg-opacity-90 rounded-bl-xl rounded-br-xl bg-brand-primary right-4">
          <div className="text-xs font-semibold text-white project-title">
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
