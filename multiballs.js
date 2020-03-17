"use strict";

import { gsap } from "gsap";

//gsap.to(".ball", {duration: 2, y: -400, stagger: 0.2, ease:"bounce"});
gsap.to(".ball", {duration: 2, y: -400, stagger: 0.2,ease: "bounce.in"}, 0,2);
//gsap.to(".ball", {y:-10})
