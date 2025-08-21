const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const tagFilter = document.getElementById("tagFilter");
const dateFilter = document.getElementById("dateFilter");

const articles = document.querySelectorAll(".article-preview");

function searchArticles() {
  const keyword = searchInput.value.toLowerCase().trim();
  const tag = tagFilter.value.toLowerCase();
  const date = dateFilter.value;

  articles.forEach(article => {
    const title = article.querySelector("h2").innerText.toLowerCase();
    const summary = article.querySelector("p:nth-of-type(2)").innerText.toLowerCase();
    const articleTag = (article.dataset.tag || "").toLowerCase();
    const articleDate = article.dataset.date || "";

    let visible = true;

    // Filter: keyword dalam title atau summary
    if (keyword && !title.includes(keyword) && !summary.includes(keyword)) {
      visible = false;
    }

    // Filter: multi tag (cek apakah salah satu tag cocok)
    if (tag) {
      const tagList = articleTag.split(" ");
      if (!tagList.includes(tag)) {
        visible = false;
      }
    }

    // Filter: tanggal
    if (date && articleDate !== date) {
      visible = false;
    }

    // Tampilkan atau sembunyikan
    article.style.display = visible ? "block" : "none";
  });
}

function handleEnter(e) {
  if (e.key === "Enter") {
    searchArticles();
  }
}

searchBtn.addEventListener("click", searchArticles);
searchInput.addEventListener("keypress", handleEnter);
tagFilter.addEventListener("change", searchArticles);
dateFilter.addEventListener("change", searchArticles);
