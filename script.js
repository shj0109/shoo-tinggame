let userAim = null;

const aimButtons = document.querySelectorAll('.aimBtn');
const shootBtn = document.getElementById('shootBtn');
const resultArea = document.getElementById('resultArea');

// 사용자가 방향 선택
aimButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    aimButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    userAim = btn.getAttribute('data-direction');
    shootBtn.disabled = false;
    resultArea.textContent = ''; // 선택 시 이전 결과 초기화
  });
});

// 방향에 따라 숫자 매핑
const directionToNum = {
  left: 0,
  center: 1,
  right: 2
};

// 쏘기 버튼 클릭
shootBtn.addEventListener('click', () => {
  const computerAim = Math.floor(Math.random() * 3); // 0~2 랜덤
  const userNum = directionToNum[userAim];

  if (userNum === computerAim) {
    resultArea.textContent = `🎯 명중! (${userAim.toUpperCase()} 방향 맞춤)`;
    resultArea.style.color = 'green';
  } else {
    const missedDir = Object.keys(directionToNum).find(key => directionToNum[key] === computerAim);
    resultArea.textContent = `💨 빗나감! 컴퓨터는 ${missedDir.toUpperCase()} 쪽에 있었어요.`;
    resultArea.style.color = 'gray';
  }
});