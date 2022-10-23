import { Component, OnInit } from '@angular/core';
import { Image } from '../_models/image.model';
import { Video } from '../_models/video.model';
import { Comment } from '../_models/comment.model';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent implements OnInit {

  public imagesBaseUrl: string = '../../assets/images/residential/';
  public images: Array<Image> = [];

  public videosBaseUrl: string = '../../assets/videos/residential/';
  public videos: Array<Video> = [];

  public comments: Array<Comment> = [];

  constructor() { }

  ngOnInit() {

    this.images = [
      {
        name : '2021_driveway_3b.jpg',
        title : 'Asphalt',
        description : 'New Driveway'
      },
      {
        name : '2021_driveway_3a.jpg',
        title : 'Asphalt',
        description : 'New Driveway'
      },
      {
        name : '2021_driveway_2b.jpg',
        title : 'Asphalt',
        description : 'New Driveway'
      },
      {
        name : '2021_driveway_2c.jpg',
        title : 'Asphalt',
        description : 'New Driveway'
      },
      {
        name : '2021_driveway_1b.jpg',
        title : 'Asphalt',
        description : 'New Driveway & Widening'
      },
      {
        name : '2021_driveway_4b.jpg',
        title : 'Asphalt',
        description : 'New Driveway'
      },
      {
        name : '2021_driveway_5d.jpg',
        title : 'Asphalt',
        description : 'New Driveway'
      },
      {
        name : '2021_driveway_5e.jpg',
        title : 'Asphalt',
        description : 'New Driveway'
      },
      {
        name : '2021_driveway_6b.jpg',
        title : 'Asphalt',
        description : 'New Driveway & Widening'
      },
      {
        name : '2021_driveway_6c.jpg',
        title : 'Asphalt',
        description : 'New Driveway & Widening'
      },
      {
        name : '2021_driveway_7a.jpg',
        title : 'Asphalt',
        description : 'New Circle Driveway & Widening'
      },
      {
        name : '2021_driveway_7c.jpg',
        title : 'Asphalt',
        description : 'New Circle Driveway & Widening'
      },
      {
        name : '2021_driveway_8a.jpg',
        title : 'Asphalt',
        description : 'New Driveway & Parking Area'
      },
      {
        name : '2021_driveway_8b.jpg',
        title : 'Asphalt',
        description : 'New Driveway & Parking Area'
      },
      {
        name : '2021_driveway_9a.jpg',
        title : 'Asphalt',
        description : 'New Driveway & Parking Area'
      },
      {
        name : '2021_driveway_9b.jpg',
        title : 'Asphalt',
        description : 'New Driveway & Parking Area'
      },
      {
        name : '2021_driveway_10a.jpg',
        title : 'Sealcoating',
        description : 'Driveway'
      },
      {
        name : '2021_driveway_10b.jpg',
        title : 'Sealcoating',
        description : 'Driveway'
      },
    ];

    this.videos = [
      {
        file1 : 'video_parking_area_2022.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_driveway_1_2021.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_driveway_2_2021.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_lowRes_long_driveway1.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_lowRes_long_driveway2.mp4',
        file2 : null,
        title : null
      }
    ];

    const comments1: Comment[] = [
      {
        class1 : null,
        class2 : `col-md-6`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `Thurmont Paving did an excellent job with our long (100-yard) driveway and parking area.
        In the second year following their work, a few small cracks appeared and Thurmont sent out
        a crew to make the repairs, no questions asked. Thurmont's quality work, professional approach
        and post-project support make it easy to recommend them.`,
        author : `Andrew Krepinevich`,
        comments : null
      },
      {
        class1 : null,
        class2 : `col-md-6`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `Thurmont Paving was great!  They called back within an hour of my early Friday morning call,
        and made time adjusting to my availability to come out to our house to provide a free estimate later that day.
        They understood what we wanted for the driveway and were easy to talk with.
        They had a reasonable contract proposal e-mailed to me the next morning.
        I had some prep work to do first, but a few weeks later when I was ready,
        I called them back to schedule the driveway paving.  Even with the abnormally wet summer,
        they still completed the driveway right on-schedule!  It looks great!`,
        author : `Countrydave H`,
        comments : null
      }

    ];

    const comments2: Comment[] = [
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `I would like to thank Thurmont Paving for the amazing job they
        did with my driveway.  I could not have asked for anything better and the
        crew was awesome.`,
        author : `Charles Green`,
        comments : null
      },
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `Thurmont Paving did a great job on my long and very steep driveway.
        A truly family company, Father, Son, and Grandson all worked on my driveway.
        My old driveway had several problems. A detailed evaluation was done and the
        paving took all the problems into consideration, so the completed work exceeded all my expectations.`,
        author : `Ken Schultz`,
        comments : null
      },
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `I've used Thurmont Paving 5 times paving segments of our rather long drive.
        I've found them to fair, friendly and reliable.`,
        author : `Matthew Schroebel`,
        comments : null
      }
    ];

    const comments3: Comment[] = [
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `Thank you Thurmont Paving for a wonderful paving job on my driveway!`,
        author : `Tiffany Cooper`,
        comments : null
      }
    ];

    this.comments = [
      {
        class1 : `row`,
        class2 : null,
        class3 : null,
        content : null,
        author : null,
        comments : comments1
      },
      {
        class1 : `row`,
        class2 : null,
        class3 : null,
        content : null,
        author : null,
        comments : comments2
      },
      {
        class1 : `row`,
        class2 : null,
        class3 : null,
        content : null,
        author : null,
        comments : comments3
      }
    ];

  }

}
