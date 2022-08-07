// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
import "../modules/popper.min.js";

import "../modules/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";
import "../modules/dropdown.js";
import "../modules/collapse.js";
// import "../../node_modules/bootstrap/js/dist/tooltip.js";
// import "../../node_modules/bootstrap/js/dist/popover.js";

import "./navToggle.js";
import "./quickSearch.js";
import "./rolesCarousel.js";
import "./refer.js";
