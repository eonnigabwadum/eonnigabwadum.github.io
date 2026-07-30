const deals = [
  {
    id: 1,
    date: "오늘",
    category: "생활",
    shop: "쿠팡",
    title: "3겹 데코 화장지 30롤",
    price: "9,950원",
    unitPrice: "한 롤 332원꼴",
    note: "휴지 떨어졌으면 이 정도면 사도 됨",
    image:
      "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=85&w=700",
  },
  {
    id: 2,
    date: "오늘",
    category: "식품",
    shop: "쿠팡",
    title: "즉석밥 210g 24개",
    price: "18,900원",
    unitPrice: "한 개 788원꼴",
    note: "밥 자주 먹으면 쟁여놔도 괜찮아요",
    image:
      "https://images.pexels.com/photos/17424346/pexels-photo-17424346.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 3,
    date: "오늘",
    category: "생활",
    shop: "오늘의집",
    title: "고농축 세탁세제 2.7L 2개",
    price: "12,900원",
    unitPrice: "배송비까지 확인",
    note: "세제 남았으면 굳이 급하게 안 사도 됨",
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=85&w=700",
  },
  {
    id: 4,
    date: "어제",
    category: "생활",
    shop: "쿠팡",
    title: "캡형 물티슈 100매 10팩",
    price: "10,900원",
    unitPrice: "한 팩 1,090원꼴",
    note: "물티슈 매일 쓰는 집이면 무난해요",
    image:
      "https://images.unsplash.com/photo-1584839404042-8bc21d240e91?auto=format&fit=crop&q=85&w=700",
  },
];

let selectedDate = "오늘";
let selectedCategory = "전체";

function render() {
  const visibleDeals = deals.filter(
    (deal) =>
      deal.date === selectedDate &&
      (selectedCategory === "전체" || deal.category === selectedCategory),
  );

  document.querySelector("#dealCount").textContent = `${visibleDeals.length}개`;
  document.querySelector("#emptyState").hidden = visibleDeals.length !== 0;
  document.querySelector("#dealList").innerHTML = visibleDeals
    .map(
      (deal) => `
        <article class="deal-row">
          <img src="${deal.image}" alt="" />
          <div class="deal-content">
            <div class="deal-meta">
              <span>${deal.shop}</span>
              <small>${deal.category}</small>
            </div>
            <h3>${deal.title}</h3>
            <strong class="deal-price">${deal.price}</strong>
            <span class="unit-price">${deal.unitPrice}</span>
            <p>${deal.note}</p>
          </div>
          <button class="deal-link" disabled title="예시 상품입니다">예시</button>
        </article>
      `,
    )
    .join("");
}

document.querySelector(".date-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-date]");
  if (!button) return;
  selectedDate = button.dataset.date;
  document.querySelectorAll("[data-date]").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  render();
});

document.querySelector(".category-filter").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  document.querySelectorAll("[data-category]").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  render();
});

render();
