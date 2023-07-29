import header from "./header";
import home from "./home";
import startSlideshow from "./slideShow";

// render the header
document.getElementById("content").appendChild(header());
document.getElementById("content").appendChild(home());

// start the slideshow
startSlideshow();
