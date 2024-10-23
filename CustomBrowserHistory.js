class BrowserHistory {
  array1;
  array2;
  constructor() {
    this.array1 = [];
    this.array2 = [];
  }

  visitWebsite(website) {
    this.array1.push(website);
  }

  moveToPreviousWebsite() {
    if (this.array1.length == 1) return;
    this.array2.push(this.array1.pop());
  }

  moveToNextWebsite() {
    if (this.array2.length == 0) return;
    this.array1.push(this.array2.pop());
  }
}
