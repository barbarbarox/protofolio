//DATA SKILL
const hardSkills = [
  { name: "HTML", percent: 70, icon: "logo-html.png" },
  { name: "CSS", percent: 40, icon: "logo-css.png" },
  { name: "JavaScript", percent: 20, icon: "logo-javascript.png" },
  { name: "Python", percent: 80, icon: "logo-python.png" },
  { name: "Git & Github", percent: 30, icon: "logo-gitgithub.png" },
  { name: "UI/UX (Figma)", percent: 40, icon: "logo-figma.png" },
  { name: "MySQL", percent: 70, icon: "logo-mysql.png" },
  { name: "Cyber Security", percent: 30, icon: "logo-cyber.png" },
  { name: "Linux", percent: 50, icon: "logo-linux.png" },
  { name: "Multimedia", percent: 60, icon: "multimedia.png"}
];

const softSkills = [
  { name: "Kerja Tim", percent: 80, icon: "logo-teamwork.png" },
  { name: "Komunikasi", percent: 80, icon: "logo-communication.png" },
  { name: "Problem Solving", percent: 70, icon: "logo-solving.png" },
  { name: "Rasa Ingin Tahu", percent: 90, icon: "logo-penasaran.png" },
  { name: "kreativitas", percent: 80, icon: "kreatifitas.png" },
  { name: "manajemen", percent: 70, icon: "manajemen.png" }
];

function createSkillElement(skill) {
  const item = document.createElement("div");
  item.classList.add("skill-item");

  item.innerHTML = `
    <img src="icons/${skill.icon}" alt="${skill.name}">
    <div class="skill-name">${skill.name}</div>
    <div class="progress-container">
      <div class="progress-bar" style="width: ${skill.percent}%"></div>
    </div>
    <div class="percent">${skill.percent}%</div>
  `;
  return item;
}

// TAMBAHKAN KE HTML 
const hardSkillList = document.getElementById("hardSkillList");
const softSkillList = document.getElementById("softSkillList");

hardSkills.forEach(skill => {
  const el = createSkillElement(skill);
  hardSkillList.appendChild(el);
});

softSkills.forEach(skill => {
  const el = createSkillElement(skill);
  softSkillList.appendChild(el);
});

// ✅ GANDAKAN untuk scroll-loop mulus
hardSkillList.innerHTML += hardSkillList.innerHTML;
softSkillList.innerHTML += softSkillList.innerHTML;
