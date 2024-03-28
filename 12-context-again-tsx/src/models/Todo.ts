export class Todo {
  id: number;
  isDone: boolean;

  constructor(public text: string) {
    this.id = Date.now();
    this.isDone = false;
  }
}
