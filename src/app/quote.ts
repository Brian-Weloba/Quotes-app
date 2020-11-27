export class Quote {
  showDescription: boolean;
  constructor(public id: number, public words:string, public author:string, public votes:number ){
    this.showDescription=false;
  }
}
