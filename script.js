"use strict";
const body = document.querySelector("body");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function () {
  if (this.selector[0] == ".") {
    const newElement = document.createElement("div");
    newElement.classList.add(this.selector);
    newElement.style.cssText = `height: ${this.height}; width: ${this.width};background:${this.bg}; font-size:${this.fontSize}`;
    newElement.textContent = "Создан новый div";
    body.append(newElement);
  }
  if (this.selector[0] == "#") {
    const newElement = document.createElement("p");
    newElement.setAttribute("id", this.selector);
    newElement.style.cssText = `height: ${this.height}; width: ${this.width};background:${this.bg}; font-size:${this.fontSize}`;
    newElement.textContent = "Тут должен быть параграф";
    body.append(newElement);
  }
};

const block = new DomElement(".block", "150px", "250px", "yellow", "24px");
block.createElement();

const best = new DomElement("#best", "200px", "550px", "green", "42px");
best.createElement();

console.log(block);
console.log(best);
