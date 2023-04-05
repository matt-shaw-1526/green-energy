// Load your images on page-load. NOTE: Images were optimized in Photoshop prior to uploading in img folder.
function preloader() {
  const imagesList = ["./img/hydro.jpg", "./img/wind.jpg", "./img/solar.jpg"];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }

  // Images ready to be used:
  console.log(
    `Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`
  );
}
window.addEventListener("load", preloader);

//creating content storage (resource object)
let content = {
  "page-1": {
    heading: "Hydro Power",
    imageUrl: "./img/hydro.jpg",
    imageAlt: "A hydroelectric dam.",
    bodyText:
      "This type of green energy works by harnessing the energy produced by bodies of water. This includes rivers, streams, ocean tides, or dams. Hydroelectricity is reliable because its prices do not depend on unpredictable changes in fuel costs. The easiest way for an individual to access this form of green energy on an average budget is to relocate to an area that is next to a large body of water. Hundreds of years ago, settlers would use water wheels that would act as turbines to mechanically power various devices. Today, it makes the most sense to move to an area where electricity grid is powered by a localized body of water. This way you avoid upfront costs (i.e. setting up a dam or a turbine), while helping the environment!",
  },
  "page-2": {
    heading: "Wind Power",
    imageUrl: "./img/wind.jpg",
    imageAlt: "A wind turbine.",
    bodyText:
      "As the name suggests, wind power works by harnessing the power of the wind. This is often accomplished using wind turbines. If an individual wishes to take advantage of wind power they would need to either relocate to an area next to a wind turbine field, or invest in a residential wind turbine. The upfront costs of a residential wind turbine can be expensive, however this long term investment can save home owners money as long as their geolocation is optimized for relatively consistent and strong wind patterns.",
  },
  "page-3": {
    heading: "Solar Power",
    imageUrl: "./img/solar.jpg",
    imageAlt: "Solar pannels on a house.",
    bodyText:
      "Solar power is becoming an increasingly popular green energy option across the globe, with thousands of people installing solar pannels on their homes every year. Solar power takes full advantage of the energy produced by the sun, which is often captured using special pannels that harness this energy and turn it into electricity. While the initial cost of pannel installations can be expensive, investors often see long term savings. Geolocation is an important factor, as your area will need sufficient sunlight for a fair number of months throughout the year to make the investment worthwhile.",
  },
};

//event-target-objects (referencing html container)
let controls = document.getElementById("controls").children;

let dc = document.querySelector("#information");

//This function is event handler
let activeButton = function (ev) {
  //currently clicked item
  let currentButton = ev.currentTarget;
  let currentPage = currentButton.dataset.pageId;

  //create loop to remove active-id
  for (let i = 0; i < controls.length; i++) {
    // check if current list-item has attribute id:
    if (controls[i].hasAttribute("id")) {
      // if so, remove it:
      controls[i].removeAttribute("id");
    }
  }

  //creating html. setting currentPage rather than an index so there is less hard coding.
  dc.innerHTML = `<h1>${content[currentPage].heading}</h1>
  <div id = "info-content">
  <img src = ${content[currentPage].imageUrl} alt= ${content[currentPage].imageAlt}">
  <p> ${content[currentPage].bodyText}</p>
  <div>`;

  //set active button to currently clicked button
  currentButton.setAttribute("id", "active");

  //accessing corresponding content
  console.log(content[currentPage]);

  //defining currentContent
  let currentContent = content[currentPage];
};

// Registered list items for click event
for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", activeButton);
}
