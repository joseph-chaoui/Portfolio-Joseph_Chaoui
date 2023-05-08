import './style.scss';
import {
  personnalInformation,
  mesCompetences,
  mesPassions,
} from './content/content-aside';

import { myProject } from './content/content-project';

// INFORMATION PERSONNEL

const listInfo = document.querySelector('.information-list');

const createPersonnalInfo = () => {
  let persoInfoLi = personnalInformation.map((elem) => {
    const mli = document.createElement('li');
    mli.classList.add('information-list-elem');
    mli.innerHTML = `<h4>${elem.nom}</h4>
                    <p>${elem.value}</p>`;
    return mli;
  });
  return persoInfoLi;
};

const displayPersonnalInfo = () => {
  listInfo.innerHTML = '';
  listInfo.append(...createPersonnalInfo());
};

displayPersonnalInfo();

// COMPETENCES

const listskills = document.querySelector('.skills-list');

const createskills = () => {
  let skillsLi = mesCompetences.map((elem) => {
    const mli = document.createElement('li');
    mli.classList.add('skills-list-elem');
    mli.innerHTML = `<h4>${elem.nom}</h4>
                    <div class="jauge">
                    <div class="${elem.myClass}"></div>
                    </div>`;
    return mli;
  });
  return skillsLi;
};

const displayskills = () => {
  listskills.innerHTML = '';
  listskills.append(...createskills());
};

displayskills();

// MES PASSIONS

const hobbiesList = document.querySelector('.hobbies-list');

const createPassion = () => {
  let passionli = mesPassions.map((elem) => {
    const hobbies = document.createElement('li');
    hobbies.innerHTML = elem;
    return hobbies;
  });
  return passionli;
};

const displayPassion = () => {
  hobbiesList.innerHTML = '';
  hobbiesList.append(...createPassion());
};

displayPassion();

// PROJECT

const projectDiv = document.querySelector('.project');

const createProject = () => {
  let projectList = myProject.map((elem) => {
    const divproject = document.createElement('div');
    divproject.classList.add('project-elem');
    divproject.innerHTML = `<h3>${elem.nom}</h3>
                            <h4>${elem.language}</h4>
                            <p>${elem.description}</p>`;
    return divproject;
  });
  return projectList;
};

const displayProject = () => {
  projectDiv.innerHTML = '';
  projectDiv.append(...createProject());
};

displayProject();
