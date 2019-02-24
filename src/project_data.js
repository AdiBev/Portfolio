import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faGithub } from "@fortawesome/free-brands-svg-icons";

export const projectData = [
  {
    port_data: [
      {
        data: {
          proj_title: "WeatherSense",
          proj_desc:
            "A weather app built using React and Styled-components with CSS Grid layout.",
          proj_url: "https://weathersensepro.firebaseapp.com/",
          github_url: "https://github.com/AdiBev/WeatherSense",
          proj_icons: {
            react_icon: faReact,
            js_icon: faJs
          }
        }
      },

      {
        data: {
          proj_title: "YumRecipes",
          proj_desc:
            "A Recipe finder app built with React, React-router, Redux and Bootstrap4.",
          proj_url: "https://recipe-finder-007.firebaseapp.com/",
          github_url: "https://github.com/AdiBev/YUMRecipes",
          proj_icons: {
            react_icon: faReact,
            js_icon: faJs
          }
        }
      },

      {
        data: {
          proj_title: "React-boilerplate",
          proj_desc: "This is a boilerplate for React-Babel-Webpack projects.",
          proj_url: false,
          github_url: "https://github.com/AdiBev/react-boilerplate",
          proj_icons: {
            react_icon: faReact,
            js_icon: faJs
          }
        }
      },
      {
        data: {
          proj_title: "Portfolio",
          proj_desc: "Personal portfolio built using CSS grid, flexbox and React.",
          proj_url: "https://adi-portfolio.firebaseapp.com/",
          github_url: "https://github.com/AdiBev/Portfolio",
          proj_icons: {
            react_icon: faReact,
            js_icon: faJs
          }
        }
      }
    ]
  }
];
