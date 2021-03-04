import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation: ['[[', ']]']
})

export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Input() index!: number;
  cardDate: Date = new Date();
  title = 'My card title';
  text = 'My sample text';
  disabled = false;
  textColor!: string;
  imgUrl = 'https://picsum.photos/300/300?grayscale';
  number = 77;
  array = [1, 1, 2, 3, 5, 8, 13];
  obj = {
    name: 'Vika',
    info: {
      age: 27,
      eyes: 'blue'
    }
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://picsum.photos/300/300';
      this.disabled = true;
    }, 3000);
  }

  changeTitle(): void {
    this.card.title = 'Title has been changed';
  }

  getInfo(): string {
    return 'This is my info';
  }

  inputHandler(value: any): void{
    // const value = event.target.value;
    this.card.title = value;
  }

  changeHandler(): void {
    console.log(this.card.title);
  }
}
