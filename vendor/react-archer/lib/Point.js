"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Point(x, y) {
  this.x = x;
  this.y = y;
  return this;
}

Point.prototype.add = function (point) {
  return new Point(this.x + point.x, this.y + point.y);
};

Point.prototype.substract = function (point) {
  return new Point(this.x - point.x, this.y - point.y);
};

exports.default = Point;