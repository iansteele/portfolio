const Project = [
  {
    title: "Annotations",
    link: "/projects/Annotations",
    image: "/img/annotation/project-thumb2.jpg",
    altLabel:
      "Tool illustrations from the Annotation feature for Imagine Learning Classroom",
    id: 1,
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
    id: 2,
    roles: ["User research", "Design Thinking", "Prototyping"],
    client: "Imagine Learning Classroom",
    description:
      "How we refactored existing functionality to improve the assignment grading experience",
  },
  {
    title: "Untappd Trial",
    link: "/projects/UntappdTrial",
    image: "/img/ut/trial/hero.jpg",
    altLabel: "Screenshots of the Untappd for Business free trial experience",
    id: 3,
    roles: ["UX", "Product Design"],
    client: "Untappd for Business",
    description:
      "Lowering the barrier of entry into the Untappd for Business platform",
  },
  {
    title: "Virtual Fest",
    link: "/projects/VirtualFest",
    image: "/img/ut/v-fest/thumb.jpg",
    altLabel:
      "Website design and marketing adds for the Untappd Virtual Festival campaign",
    id: 4,
    roles: ["Illustration"],
    client: "Untappd",
    description: "Untappd's first virtual beer festival",
  },
  {
    title: "Illustrations",
    link: "/projects/Illustration",
    image: "/img/illustrations/dietrying.jpg",
    altLabel: "Illustration of a headstone that reads Die Trying",
    id: 5,
    roles: [],
    client: "",
    description: "",
  },
  {
    title: "Digital Menus",
    link: "/projects/DigitalMenus",
    image: "/img/firetv/firetv_thumb.jpg",
    altLabel: "Illustration of a headstone that reads Die Trying",
    id: 6,
    roles: [],
    client: "Untappd",
    description: "Displaying digital menus in your Untappd venue",
    draft: true,
  },
];

Project.forEach((Project) => {
  if (!("draft" in Project)) {
    Project.draft = false;
  }
});

export default Project;
