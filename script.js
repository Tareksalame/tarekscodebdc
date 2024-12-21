let projectList = [
  {
    name: "ZainShop",
    img: "./logos/zainshop.jpg",
    link: "https://www.zainshop2.store/",
  },
  {
    name: "AmenRayanDigitalAgency",
    img: "./logos/amenrayan.png",
    link: "https://tareksalame.github.io/amenrayan/",
  },
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
    link: "https://warapp-20ed7c9be98d.herokuapp.com/",

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

let reviews = [
  {
    name: "Review1",
    text: "الموقع ساعدني بزيادة المبيعات وسهّل علي خدمة زبايني",
    color: "rgb(198, 168, 154)",
  },
  {
    name: "Review1",
    text: "السعر ممتاز والمعاملة جدًا مميزة",
    color: "rgb(198, 168, 154)",
  },
  {
    name: "Review1",
    text: "شكرًا الك جد معاملة ممتازة وانا كل واحد بده يسألني كيف عملت الموقع بدي ادلو عليك",
    color: "rgb(198, 168, 154)",
  },
  {
    name: "Review1",
    text: "الموقع ممتاز واحترافي",
    color: "rgb(198, 168, 154)",
  },
];
const showReviews = () => {
  return reviews.map((review) => {
    const reviews = document.getElementById("reviews");
    const reviewsDiv = document.createElement("div");
    const text = document.createElement("p");
    reviewsDiv.className = "reviewsDiv";
    text.innerHTML = review.text;
    text.style.backgroundColor = review.color;
    reviewsDiv.appendChild(text);
    reviews.appendChild(reviewsDiv);
  });
};
showReviews();
