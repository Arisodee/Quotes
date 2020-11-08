import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Ariso Okanga','We cannot be sure of having something to live for unless we are willing to die for it. ','Che Guevara', new Date (2020,11,8)),
    new Quote('Barbara Charlotte', 'There are basically two types of people. People who accomplish things, and people who claim to have accomplished things. The first group is less crowded.','Mark Twain', new Date(2020,11,5)),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
