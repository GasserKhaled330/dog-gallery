/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed ---------------- */
    let breed = new URL(url).pathname.split("/")[2];

    /*------------ Create new dog card with the url above ------------- */
    const dogCard = document.createElement("li");
    dogCard.innerHTML = `
                <figure>
                    <img src=${url} alt="${breed}"/>
                    <figcaption>${breed}</figcaption>
                </figure>
            `;

    /* Add the new dog card as a child to the ul in the .gallery element */
    const dogGallery = document.querySelector(".gallery ul");
    dogGallery.appendChild(dogCard);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  const firstDogCard = document.querySelector(".gallery ul").firstElementChild;

  /*-------------------- Remove the first dog card --------------------- */
  firstDogCard.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  const lastDogCard = document.querySelector(".gallery ul").lastElementChild;

  /*-------------------- Remove the last dog card ----------------------- */
  lastDogCard.remove();
});
