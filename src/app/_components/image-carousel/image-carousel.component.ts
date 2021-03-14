import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/_models/image.model';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  @Input()
  public imagesBaseUrl: string = '';
  
  @Input()
  public images: Array<Image> = [];

  constructor() { }

  ngOnInit() {
  }

}
