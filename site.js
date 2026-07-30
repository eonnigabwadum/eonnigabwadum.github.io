const dateButtons = [...document.querySelectorAll(".date-tab")];
const dealRows = [...document.querySelectorAll(".deal-row")];
const headerCount = document.querySelector("#header-count");
const resultCount = document.querySelector("#result-count");
const dateHeading = document.querySelector("#date-heading");
const emptyMessage = document.querySelector("#empty-message");

const dateHeadings = {
  today: "7월 30일",
  yesterday: "7월 29일",
  "0728": "7월 28일",
  "0727": "7월 27일",
};

function selectDate(date) {
  const visibleRows = dealRows.filter((row) => row.dataset.date === date);

  dealRows.forEach((row) => {
    row.hidden = !visibleRows.includes(row);
  });

  dateButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.date === date);
  });

  const countLabel = `${visibleRows.length}개`;
  headerCount.textContent = countLabel;
  resultCount.textContent = countLabel;
  dateHeading.textContent = dateHeadings[date];
  emptyMessage.hidden = visibleRows.length !== 0;
}

dateButtons.forEach((button) => {
  button.addEventListener("click", () => selectDate(button.dataset.date));
});

document.querySelectorAll(".deal-link").forEach((button) => {
  button.addEventListener("click", () => {
    button.firstChild.textContent = "디자인 시안 ";
    window.setTimeout(() => {
      button.firstChild.textContent = "상품 보기 ";
    }, 1200);
  });
});
