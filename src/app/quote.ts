export class Quote {
  showDescription: boolean;
  constructor(public id: number, public words: string, public author: string, public votes: number, public name: string) {
    this.showDescription = false;
  }
}
