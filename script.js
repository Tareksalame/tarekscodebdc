let projectList = [
  {
    name: "Qatr Elnada",
    img: "./logos/qatrelnada.svg",
    link: "https://qatrelnada-1126d8747345.herokuapp.com/",
  },
  {
    name: "3raysna",
    img: "./logos/arays.PNG",
    link: "https://threeraysna.onrender.com/",
  },
  {
    name: "War",
    img: "./logos/war.jpg",
    link: "https://wargame.onrender.com/",
  },
  {
    name: "Eshkolot",
    img: "./logos/eshkiolot.PNG",
    link: "https://eshkolot.onrender.com/",
  },
  {
    name: "Miniu",
    img: "./logos/miniu.jpg",
    link: "https://miniu.onrender.com/",
  },

  {
    name: "Barber",
    img: "./logos/barber.JPG",
    link: "https://barbershop-3d09.onrender.com",
  },
  {
    name: "Wafrly",
    img: "./logos/وفرلي.png",
    link: "https://wafrly-6cf1e09c924a.herokuapp.com/",
  },
];
const showProjects = () => {
  return projectList.map((project) => {
    const projects = document.getElementById("projects");
    const projectDiv = document.createElement("div");
    projectDiv.className = "projectDiv";
    const itemimg = document.createElement("img");
    const itemlink = document.createElement("a");
    itemimg.src = project.img;
    itemimg.alt = project.name;
    itemlink.href = project.link;
    itemlink.target = "_blank";
    itemlink.appendChild(itemimg);
    projectDiv.appendChild(itemlink);
    projects.appendChild(projectDiv);
  });
};
showProjects();
