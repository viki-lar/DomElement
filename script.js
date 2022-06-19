"use strict";
const body = document.querySelector("body");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let newElement = "";
    if (this.selector[0] == ".") {
      newElement = document.createElement("div");
      newElement.classList.add(this.selector);
      newElement.textContent = "Создан новый div";
    }
    if (this.selector[0] == "#") {
      newElement = document.createElement("p");
      newElement.setAttribute("id", this.selector);
      newElement.textContent = "Тут должен быть параграф";
    }
    newElement.style.cssText = `height: ${this.height}; width: ${this.width};background:${this.bg}; font-size:${this.fontSize}`;
    body.append(newElement);
  };
};
const block = new DomElement(".div", "150px", "250px", "yellow", "24px");
block.createElement();

const best = new DomElement("#best", "200px", "550px", "green", "42px");
best.createElement();
