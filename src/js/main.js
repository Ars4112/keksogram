import "./data.js";
import "./form.js";
import "./effects.js";
import { createUserPhotos } from "./photo.js";
// import "../nouislider/nouislider.js";
import "../pristine/pristine.min.js";

document.addEventListener("DOMContentLoaded", async () => {
	const noUiSlider = await import("/nouislider/nouislider.js");
    createUserPhotos();
});


