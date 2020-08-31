function Journal(title, body) {
  this.title = title;
  this.body = body;
  this.entry = [];
}

Journal.prototype.addEntry = function (body) {
  let newEntry = body.split(" ");
  return Journal.entry.push(newEntry);
};

Journal.prototype.getLength = function () {
  let arraylength = Journal.entry.length;
  return arraylength;
};
