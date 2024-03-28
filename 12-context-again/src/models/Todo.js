export class Todo {
  id;
  text;
  isDone;

  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.isDone = false;
  }
}
