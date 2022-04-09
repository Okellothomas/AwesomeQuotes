export class Quotes {
    showQuotes: boolean;
    constructor(public name: string, public author: string, public quote: string, public published: Data){
        this.showQuotes = false;
    }
}
