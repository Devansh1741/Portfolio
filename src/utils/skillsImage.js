import html from "../assets/svg/skills/html.svg";
import docker from "../assets/svg/skills/docker.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import react from "../assets/svg/skills/react.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import c from "../assets/svg/skills/c.svg";
import cplusplus from "../assets/svg/skills/cplusplus.svg";
import python from "../assets/svg/skills/python.svg";
import aws from "../assets/svg/skills/aws.svg";
import django from "../assets/svg/skills/django.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import git from "../assets/svg/skills/git.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import expressjs from "../assets/svg/skills/express-js.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "express js":
      return expressjs;
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "python":
      return python;
    case "aws":
      return aws;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "git":
      return git;
    case "materialui":
      return materialui;
    default:
      break;
  }
};
