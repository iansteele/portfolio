import React from "react";
import Thumbnail from "./Thumbnail.js";
import "../App.css";

function Projects(props) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
      {/*  Grading */}
      <Thumbnail
        link="/grading"
        image="img/grading/grading-thumb.jpg"
        title="ILC Grading"
        altLabel="UI components that were created to improve the grading experience at Imagine Learning Classroom"
      />
      {/*  Annotation */}
      <Thumbnail
        link="/annotation"
        image="img/annotation/ui-thumb.jpg"
        title="Annotation"
        altLabel="Tool illustrations from the Annotation feature for Imagine Learning Classroom"
      />
      {/*  Untappd Trial */}
      <Thumbnail
        link="/untappd-trial"
        image="img/ut/trial/hero.jpg"
        title="UTFB Free Trial"
        altLabel="Screenshots of the Untappd for Business free trial experience"
      />
      {/*  Digital Menus */}
      <Thumbnail
        link="/untappd-digital-menus"
        image="img/firetv/firetv_thumb.jpg"
        title="Digital Menus"
        altLabel="Untappd Digital Board displaying the Menu Id from the Amazon Fire TV app"
      />
      {/*  Virtual Fest */}
      <Thumbnail
        link="/virtual-fest"
        image="img/ut/v-fest/thumb.jpg"
        title="Virtual Fest"
        altLabel="Website design and marketing adds for the Untappd Virtual Festival campaign"
      />
      {/*  Illustrations */}
      <Thumbnail
        link="/illustration"
        image="img/illustrations/dietrying.jpg"
        title="Illustrations"
        altLabel="Illustration of a headstone that reads Die Trying"
      />
    </div>
  );
}

export default Projects;
