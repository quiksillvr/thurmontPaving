import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/_models/video.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @Input()
  public videosBaseUrl: string = '';

  @Input()
  public videos: Array<Video> = [];

  public ogg: string = 'video/ogg; codecs=dirac, speex';
  public mp4: string = 'video/mp4';

  constructor() { }

  ngOnInit() {
  }

}
