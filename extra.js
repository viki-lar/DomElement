"use strict";
const body = document.querySelector("body");

const DomElement = function (height, width, bg, position) {
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.position = position;

  this.createElement = function () {
    const newElement = document.createElement("div");
    newElement.style.cssText = `height: ${this.height}; width: ${this.width};background:${this.bg}; position:${this.position}`;
    body.append(newElement);
  };
};

document.addEventListener("DOMContentLoaded", function () {
  const square = new DomElement("100px", "100px", "blue", "absolute");
  square.createElement();

  const elem = document.querySelector("div");

  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowDown") {
      elem.style.transform += "translate(0, 10px)";
    }
    if (event.code == "ArrowUp") {
      elem.style.transform += "translate(0, -10px)";
    }
    if (event.code == "ArrowRight") {
      elem.style.transform += "translate(10px, 0)";
    }
    if (event.code == "ArrowLeft") {
      elem.style.transform += "translate(-10px, 0)";
    }
  });
});
