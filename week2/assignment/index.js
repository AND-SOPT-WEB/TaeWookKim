import { members as defaultMembers } from './members-info.js'; 

function loadMembers(){
    const storedMembers = localStorage.getItem("membersData");
    return storedMembers ? JSON.parse(storedMembers) : defaultMembers;
}

let members = loadMembers();

document.addEventListener('DOMContentLoaded', ()=>{
    fillTable(members);
})

// table에 localStorage data값 넣기
function fillTable(data){

    const tBody = document.querySelector("tbody");
    data.forEach (member =>{
        const tr = document.createElement("tr");

        const checkTd = document.createElement("td");
        const checkbox =document.createElement("input");
        checkbox.type = "checkbox";
        checkTd.appendChild(checkbox);
        
        const nameTd = document.createElement("td");
        const englishnameTd = document.createElement("td");

        const githubTd = document.createElement("td");
        const gitLink = document.createElement("a");
        gitLink.href = `https://github.com/${member.github}`;
        gitLink.taget = "_blank";
        githubTd.appendChild(gitLink);

        const genderTd = document.createElement("td");
        const positionTd = document.createElement("td");
        const oneweekTd = document.createElement("td");
        const twoweekTd = document.createElement("td");

        nameTd.textContent = member.name;
        englishnameTd.textContent = member.englishName;
        githubTd.textContent = member.github;
        genderTd.textContent = member.gender === 'male' ? '남자' : '여자';
        positionTd.textContent = member.role;
        oneweekTd.textContent = member.firstWeekGroup;
        twoweekTd.textContent = member.secondWeekGroup;

        tr.appendChild(checkTd);
        tr.appendChild(nameTd);
        tr.appendChild(englishnameTd);
        tr.appendChild(githubTd);
        tr.appendChild(genderTd);
        tr.appendChild(positionTd);
        tr.appendChild(oneweekTd);
        tr.appendChild(twoweekTd);

        tBody.appendChild(tr);
    })
}








