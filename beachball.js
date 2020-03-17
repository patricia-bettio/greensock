"use strict";
import { gsap } from "gsap";

//gsap.to(".ball", {duration: 3, rotation: 180, scale: 0.5});

gsap.to(".ball", {duration: 2, x: 400});
gsap.to(".ball", {duration: 2, rotation: 200});
gsap.to(".ball", {delay: 2, scale: 0.5, y: 20});