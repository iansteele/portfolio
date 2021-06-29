import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

function Projects(props) {
  return (
    <div className="text-white mx-auto">
      <h2 className="mt-8 ml-6 font-semibold text-left">
        Work
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 pt-4 px-6">
        {/*  Digital Menus */}
        <Thumbnail
          link="/untappd-digital-menus"
          image="img/firetv/firetv_thumb.jpg"
          title="Untappd Digital Menus"
          category=""
        />
        {/*  Virtual Fest */}
        <Thumbnail
          link="VirtualFest"
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
