function addIdsToProjects(projects) {
  projects.forEach((project, index) => {
    project.id = index;
  });
}

const Project = [
  {
    title: "Data Insights",
    link: "/projects/Data-Insights",
    image: "/img/data/thumb.jpg",
    altLabel: "Data representing student scores",
    roles: ["UX", "Research", "UI", "Front-end dev"],
    client: "Imagine Learning Classroom",
    description: "Informing instruction & support through data",
  },
  {
    title: "Annotations",
    link: "/projects/Annotations",
    image: "/img/annotation/project-thumb2.jpg",
    altLabel:
      "Tool illustrations from the Annotation feature for Imagine Learning Classroom",
    roles: ["UX", "Research", "UI", "Front-end dev"],
    client: "Imagine Learning Classroom",
    description: "Promoting dialogue during classroom discussion",
  },
  {
    title: "Backpack UI",
    link: "/projects/BackpackUI",
    image: "/img/backpack/thumb.jpg",
    altLabel: "IL Classroom's UI Kit",
    roles: ["Design ops", "Design Systems"],
    client: "Imagine Learning Classroom",
    description: "Design & Dev's Trapper Keeper",
  },
  {
    title: "Assignment Grading",
    link: "/projects/Grading",
    image: "/img/grading/grading-thumb.jpg",
    altLabel:
      "UI components that were created to improve the grading experience at Imagine Learning Classroom",
    roles: ["User research", "Design Thinking", "Prototyping"],
    client: "Imagine Learning Classroom",
    description: "Giving teachers their time back",
  },

  {
    title: "Untappd for Business Trial",
    link: "/projects/UntappdTrial",
    image: "/img/ut/trial/hero.jpg",
    altLabel: "Screenshots of the Untappd for Business free trial experience",
    roles: ["UX", "Product Design"],
    client: "Untappd for Business",
    description: "Reducing our customer aquisition cost",
  },
  {
    title: "Untappd Virtual Fest",
    link: "/projects/VirtualFest",
    image: "/img/ut/v-fest/thumb.jpg",
    altLabel:
      "Website design and marketing adds for the Untappd Virtual Festival campaign",
    roles: ["Illustration"],
    client: "Untappd",
    description: "Celebrating beer... in the middle of a pandemic",
  },
  {
    title: "Illustrations",
    link: "/projects/Illustration",
    image: "/img/illustrations/dietrying.jpg",
    altLabel: "Illustration of a headstone that reads Die Trying",
    roles: [],
    client: "",
    description: "Sometimes you just gotta create things, you know?",
  },
  {
    title: "Digital Menus",
    link: "/projects/DigitalMenus",
    image: "/img/firetv/firetv_thumb.jpg",
    altLabel: "Illustration of a headstone that reads Die Trying",
    roles: [],
    client: "Untappd",
    description: "Displaying digital menus in your Untappd venue",
    draft: true,
  },
];

addIdsToProjects(Project);

Project.forEach((Project) => {
  if (!("draft" in Project)) {
    Project.draft = false;
  }
});

export default Project;
