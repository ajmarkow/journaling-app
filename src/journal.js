function Journal(title, body) {
  this.title = title;
  this.body = body;
  this.entry = [];
}

let exampleJournal = New Journal("title","body")

Journal.prototype.addEntry = function (title, body) {
  this.title = title;
  let newEntry = body.split(" ");
  return Journal.entry.push(newEntry);
};

Journal.prototype.getLength = function () {
  let arraylength = Journal.entry.length;
  return arraylength;
};

export default function (title, body, entry) {
  this.title = title;
  this.body = body;
  this.entry = [];
}
git 