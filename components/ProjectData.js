function addIdsToProjects(projects) {
  projects.forEach((project, index) => {
    project.id = index;
  });
}

const Project = [
  {
    title: "Backpack UI",
    link: "/projects/BackpackUI",
    image: "/img/backpack/thumb.jpg",
    altLabel: "IL Classroom's UI Kit",
    roles: ["Design ops", "Design Systems"],
    client: "Imagine Learning Classroom",
    description: "Bridging the gap between design and dev",
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
    title: "Grading Redux",
    link: "/projects/Grading",
    image: "/img/grading/grading-thumb.jpg",
    altLabel:
      "UI components that were created to improve the grading experience at Imagine Learning Classroom",
    roles: ["User research", "Design Thinking", "Prototyping"],
    client: "Imagine Learning Classroom",
    description: "Reimagining our grading workflow",
  },

  {
    title: "Untappd for Business Trial",
    link: "/projects/UntappdTrial",
    image: "/img/ut/trial/hero.jpg",
    altLabel: "Screenshots of the Untappd for Business free trial experience",
    roles: ["UX", "Product Design"],
    client: "Untappd for Business",
    description: "Connecting businesses & customers",
  },
  {
    title: "Untappd Virtual Fest",
    link: "/projects/VirtualFest",
    image: "/img/ut/v-fest/thumb.jpg",
    altLabel:
      "Website design and marketing adds for the Untappd Virtual Festival campaign",
    roles: ["Illustration"],
    client: "Untappd",
    description: "Celebrating beer... pandemic style",
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
