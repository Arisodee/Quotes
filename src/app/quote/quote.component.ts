import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
}) 
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Ariso Okanga','"We cannot be sure of having something to live for unless we are willing to die for it". ','Che Guevara', new Date (2020,11,8)),
    new Quote('Barbara Charlotte', '"There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded."','Mark Twain', new Date(2020,11,5)),
  ];

  addNewQuote(quote){
    quote.name= quote.name;
    quote.quote= quote.quote;
    quote.author= quote.author;
    this.quotes.push(quote)
  }
  upVote (index){
    this.quotes[index].upVote++;
  }

  downVote (index){
    this.quotes[index].downVote++;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  bestquote: number;
  worstquote: number;
  quote:string;
  author:string;
  bestQuote(){
    this.bestquote=0;
    for(let i = 0; i < this.quotes.length; i++){
      if (this.quotes[i].upVote>this.bestquote){
        this.bestquote = this.quotes[i].upVote;
        this.worstquote = this.quotes[i].downVote;
        this.quote = this.quotes[i].quote;
        this.author = this.quotes[i].author;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
