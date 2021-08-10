import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

function Projects(props) {
  return (
    <div className="text-white mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 px-4 pt-4 md:px-6 auto-rows-max	">
        {/*  Digital Menus */}
          <Thumbnail
            link="/untappd-digital-menus"
            image="img/firetv/firetv_thumb.jpg"
            title="Untappd Digital Menus"
            category=""
          />
          {/*  Virtual Fest */}
          <Thumbnail
            link="/portfolio/virtual-fest"
            image="img/ut/v-fest/thumb.jpg"
            title="Untappd Virtual Fest"
            category=""
          />
          {/*  Grading */}
          <Thumbnail
            link="/grading"
            image="img/grading-thumb.png"
            title="Assignment grading"
            category=""
          />
          {/*  Illustrations */}
          <Thumbnail
            link="/grading"
            image="img/illustrations/dietrying.jpg"
            title="Illustrations"
            category=""
          />
      </div>
    </div>
  )
}

export default Projects;
