import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation: ['[[', ']]']
})

export class CardComponent implements OnInit {
  title = 'My card title';
  text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet aperiam culpa distinctio
    dolor dolorum eaque, earum est fugiat impedit incidunt libero maxime odit officia repudiandae similique ut vero!`;
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  number = 77;
  array = [1, 1, 2, 3, 5, 8, 13];
  obj = {
    name: 'Vika',
    info: {
      age: 27,
      eyes: 'blue'
    }
  };

  ngOnInit(): any {
    setTimeout(() => {
      this.imgUrl = 'https://image.flaticon.com/icons/png/128/1260/1260667.png';
    }, 3000);
  }

  getInfo(): string {
    return 'This is my info';
  }
}
