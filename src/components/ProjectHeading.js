import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import '../App.css';

function Projects(props) {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
      {/*  Digital Menus */}
      <Thumbnail
          link="/untappd-trial"
          image="img/utfb-trial/Freetrial-thumb.jpg"
          title="Untappd Self Sign-up"
          category=""
        />
      {/*  Digital Menus */}
        <Thumbnail
          link="/untappd-digital-menus"
          image="img/firetv/firetv_thumb.jpg"
          title="Untappd Digital Menus"
          category=""
        />
        {/*  Virtual Fest */}
        <Thumbnail
          link="/virtual-fest"
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
          link="/illustration"
          image="img/illustrations/dietrying.jpg"
          title="Illustrations"
          category=""
        />
    </div>
  )
}

export default Projects;