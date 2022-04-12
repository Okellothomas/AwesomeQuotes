export class Quotes {
    [x: string]: any;
    showQuotes: boolean;
    constructor(public id:number, public name: string, public author: string, public quote: string, public published: Date){
        this.showQuotes = false;
    }


    voteUp(): void {
        this["votes"] += 1;
      }
    
      voteDown(): void {
        this["votes"] -= 1;
      }
}
