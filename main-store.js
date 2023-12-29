let searchBox = document.querySelector(".search-box");
let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");
let showMore = document.querySelector(".show-more-btn");
let searchResult = document.querySelector(".search-result");
let searchName = "";
let page = 1;
let body = document.querySelector("body");
const API_KEY = "W6sqeaYFN-UANSTpQnuTS7nChIsiFnT2O4urDcathnY";

async function getImages() {
  searchName = searchInput.value;

  const API_URL = `https://api.unsplash.com/search/photos?page=${page}&query=${searchName}&client_id=${API_KEY}`;

  const response = await fetch(API_URL);
  const usable_data = await response.json();

  if (page == 1) {
    searchResult.innerHTML = "";
  }

  const results = usable_data.results;
  results.map((result) => {
    // Create a new card element
    const card = document.createElement("div");
    card.classList.add("main-store-images");

    // Create an image element and set its source
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = "main store images";
    image.classList.add("gallery-img");
    // Append the image to the card
    card.appendChild(image);

    // Add title
    const title = document.createElement("p");
    title.classList.add("gallery-img-title");
    title.textContent = result.tags[0].title;
    card.appendChild(title);

    // Create and append the list of attributes
    const attributesList = document.createElement("ul");
    attributesList.classList.add("gallery-img-attributes");

    const attributeItem1 = document.createElement("li");
    attributeItem1.classList.add("attributes");

    const strongElement1 = document.createElement("strong");
    strongElement1.classList.add("attributes-name");
    strongElement1.textContent = "Likes:-" + result.likes;

    const attributeItem2 = document.createElement("li");
    attributeItem2.classList.add("attributes");

    const strongElement2 = document.createElement("strong");
    strongElement2.classList.add("attributes-name");
    strongElement2.textContent = "Author:-" + result.user.name;

    attributeItem1.appendChild(strongElement1);

    attributeItem2.appendChild(strongElement2);

    attributesList.appendChild(attributeItem1);
    attributesList.appendChild(attributeItem2);

    card.appendChild(attributesList);

    // Create and append the download button as a link
    const downloadButtonContainer = document.createElement("div");
    downloadButtonContainer.classList.add("button");

    const downloadLink = document.createElement("a");
    downloadLink.download = result.links.download;
    downloadLink.href = result.links.download;

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("download-button");
    buttonElement.textContent = "Download";

    downloadLink.appendChild(buttonElement);
    downloadButtonContainer.appendChild(downloadLink);
    card.appendChild(downloadButtonContainer);

    // Append the card to the container
    searchResult.appendChild(card);
  });

  showMore.style.display = "block";
}

searchBox.addEventListener("submit", (e) => {
  body.style.height = "100%";
  e.preventDefault();
  page = 1;
  getImages();
});

showMore.addEventListener("click", () => {
  page++;
  getImages();
});
