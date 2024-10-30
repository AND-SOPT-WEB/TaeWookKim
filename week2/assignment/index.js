import { members as defaultMembers } from './members-info.js'; 
// 모달
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-button');
const closeModal = document.getElementById('close-button');
// 모달 열기
openModal.addEventListener('click', function(){
    modal.style.display = 'block';
});
//모달 닫기
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});
// 백드롭 클릭 시 모달 닫기
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeToModal();
    }
});

// localStorage에 값이 비워져있으면 defaultMembers값 불러오기
function loadMembers(){
    const storedMembers = localStorage.getItem("membersData");
    return storedMembers ? JSON.parse(storedMembers) : defaultMembers;
}

let members = loadMembers();

//페이지 로드시 테이블을 채우는 함수
document.addEventListener('DOMContentLoaded', ()=>{
    fillTable(members);
})

//localStorage에 데이터 저장
function saveMembers(data){
    localStorage.setItem('membersData', JSON.stringify(data));
}

// table에 localStorage data값 넣기
function fillTable(data){

    const tBody = document.querySelector("tbody");
    tBody.innerHTML = '';

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
        gitLink.target = "_blank";
        gitLink.textContent = member.github;
        githubTd.appendChild(gitLink);

        const genderTd = document.createElement("td");
        const positionTd = document.createElement("td");
        const oneweekTd = document.createElement("td");
        const twoweekTd = document.createElement("td");

        nameTd.textContent = member.name;
        englishnameTd.textContent = member.englishName;
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

        const checkBoxes = document.querySelectorAll('tbody input[type="checkbox"]');
        const allCheckbox = document.querySelector('.check-all');

        //체크박스 전체 선택
        allCheckbox.addEventListener('change', (event)=>{
            const ischecked = event.target.checked;
            checkBoxes.forEach(checkbox =>{
                checkbox.checked = ischecked;
            })
        });

        //체크 박스 하나라도 선택 해제하면 전체 선택 해제
        checkBoxes.forEach(checkbox =>{
            checkbox.addEventListener('change',()=>{
                const findcheck = Array.from(checkBoxes).every (checkbox => checkbox.checked);
                allCheckbox.checked = findcheck;
            });
        });
    })
}

//필터링 검색
document.querySelector('.search-button').addEventListener('click', ()=>{
    const members = loadMembers();
    const nameInput = document.querySelector('input[name="name"]').value;
    const englishNameInput = document.querySelector('input[name="englishname"]').value.toLowerCase();
    const githubInput = document.querySelector('input[name="github"]').value.toLowerCase();
    const genderInput = document.querySelector('select[name="gender"]').value;
    const positionInput = document.querySelector('select[name="position"]').value;
    const oneWeekInput = document.querySelector('input[name="oneweek"]').value;
    const twoWeekInput = document.querySelector('input[name="twoweek"]').value;

    const filteringMembers = members.filter(member =>
        member.name.includes(nameInput) &&
        member.englishName.toLowerCase().includes(englishNameInput) &&
        member.github.toLowerCase().includes(githubInput) &&
        (genderInput === '' || member.gender === genderInput) &&
        (positionInput === '' || member.role === positionInput) &&
        (oneWeekInput === '' || member.firstWeekGroup === parseInt(oneWeekInput)) && 
        (twoWeekInput === '' || member.secondWeekGroup === parseInt(twoWeekInput))
    );

    fillTable(filteringMembers);
})

//초기화 버튼
document.querySelector('.clear-button').addEventListener('click', () => {
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
    document.querySelectorAll("select").forEach(select => {
        select.value = "";
    });
    const members = loadMembers(); // 초기화 하면서 최신 데이터 로드
    fillTable(members);
});

//선택 삭제 버튼
document.querySelector('.select-delete-button').addEventListener('click', () => {
    let members = loadMembers();
    const updateMembers = members.filter((member, index) => {
        const checkedBox = document.querySelectorAll('tbody input[type="checkbox"]')[index];
        return !checkedBox.checked;
    });
    saveMembers(updateMembers); 
    fillTable(updateMembers); 
});

//추가 버튼
document.querySelector('.modal-add-button').addEventListener('click', ()=>{
    const name = document.getElementById('modal-name').value;
    const englishName = document.getElementById('modal-english-name').value;
    const github = document.getElementById('modal-github').value;
    const gender = document.getElementById('modal-gender').value;
    const role = document.getElementById('modal-position').value;
    const firstWeekGroup = document.getElementById('modal-one-week').value;
    const secondWeekGroup = document.getElementById('modal-two-week').value;

    if (!name || !englishName || !github || !gender || !role || !firstWeekGroup || !secondWeekGroup) {
        alert("모든 필드를 채워주세요.");
        return;
    }

    // 새로운 멤버 생성
    const newMember = {
        id: members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 1,
        name,
        englishName,
        github,
        gender,
        role,
        firstWeekGroup: parseInt(firstWeekGroup),
        secondWeekGroup: parseInt(secondWeekGroup)
    };

    members.push(newMember);
    saveMembers(members);

    fillTable(members); 
    closeToModal(); 

});

//모달 닫으면서 모달 내 입력값 초기화
function closeToModal(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    document.querySelectorAll('.modal-input').forEach(input => input.value = '');
    document.querySelectorAll('.modal-select').forEach(select => select.value = '');
}