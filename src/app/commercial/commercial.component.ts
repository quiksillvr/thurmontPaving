import { Component, OnInit } from '@angular/core';
import { Comment } from '../_models/comment.model';
import { Image } from '../_models/image.model';
import { Video } from '../_models/video.model';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  public imagesBaseUrl: string = '../../assets/images/commercial/';
  public images: Array<Image> = [];

  public videosBaseUrl: string = '../../assets/videos/commercial/';
  public videos: Array<Video> = [];

  public comments: Array<Comment> = [];

  constructor() { }

  ngOnInit() {

    this.images = [
      {
        name : '2021_flyDog_pic1.jpg',
        title : 'Flying Dog Brewery - Frederick, MD',
        description : 'Parking Lot and Lines',
      },
      {
        name : '2021_flyDog_pic2.jpg',
        title : 'Flying Dog Brewery - Frederick, MD',
        description : 'Parking Lot and Lines',
      },
      {
        name : '2021_flyDog_pic3.jpg',
        title : 'Flying Dog Brewery - Frederick, MD',
        description : 'Parking Lot and Lines',
      },
      {
        name : '2021_gas_station_pic6.jpg',
        title : '7Eleven Truck Stop  - Thurmont, MD',
        description : 'Gas Pumps',
      },
      {
        name : '2021_gas_station_pic7.jpg',
        title : '7Eleven Truck Stop  - Thurmont, MD',
        description : 'Gas Pumps',
      },
      {
        name : '2021_gas_station_pic8.jpg',
        title : '7Eleven Truck Stop  - Thurmont, MD',
        description : 'Finished and being used',
      },
      {
        name : '2020_medImmune_pic1.jpg',
        title : 'MedImmune - Frederick, MD',
        description : 'New Parking Lot - Milling',
      },
      {
        name : '2020_medImmune_pic2.jpg',
        title : 'MedImmune - Frederick, MD',
        description : 'New Parking Lot - Pavement',
      },
      {
        name : '2018_ollies.jpg',
        title : 'Ollies - Frederick, MD',
        description : 'New Parking Lot Pavement and Lines',
      },
      {
        name : '2018_medical_center.jpg',
        title : 'Medical Center - Freckerick, MD',
        description : 'Parking Lot Resurfacing',
      },
      {
        name : '2018_frederick_airport_pic1.jpg',
        title : 'Airport - Frederick, MD',
        description : 'Renewed Parking Lot',
      },
      {
        name : '2017_dog_patch.png',
        title : 'Dog Patch Tavern',
        description : 'New Parking Lot Pavement',
      },
      {
        name : '2017_christ_reformed_church.png',
        title : 'Christ Reformed Church',
        description : 'New Parking Lot Pavement and Lines',
      },
      {
        name : '2016_christ_reformed_pic3.png',
        title : 'Christ Reformed Church',
        description : 'Parking and Lines',
      },
      {
        name : '2016_christ_reformed_pic4.png',
        title : 'Christ Reformed Church',
        description : 'Parking and Lines',
      },
      {
        name : '2016_yellow_springs_subdiv_pic1.png',
        title : 'Yellow Springs Sub-Division',
        description : 'Neighborhood Roadways',
      },
      {
        name : '2016_yellow_springs_subdiv_pic2.png',
        title : 'Yellow Springs Sub-Division',
        description : 'Neighborhood Roadways',
      },
      {
        name : '2016_yellow_springs_subdiv_pic3.png',
        title : 'Yellow Springs Sub-Division',
        description : 'Neighborhood Roadways',
      },
      {
        name : '2016_howard_chapel_pic4.png',
        title : 'Howard Chapel',
        description : 'Parking Area',
      },
      {
        name : '2016_howard_chapel_pic6.png',
        title : 'Howard Chapel',
        description : 'Parking Area',
      },
      {
        name : '2016_howard_chapel_pic7.png',
        title : 'Howard Chapel',
        description : 'Parking Area',
      },
      {
        name : '2016_grace_trinity_church.png',
        title : 'Grace Trinity Church - Frederick, MD',
        description : 'Parking and Entrance',
      },
      {
        name : '2015_roberts_car_wash.png',
        title : 'Roberts Car Wash - Blue Ridge Summit, PA',
        description : 'Resurfacing',
      },
      {
        name : '2014_frederick_ymca.jpg',
        title : 'YMCA - Frederick, MD',
        description : 'Parking Lot and Lines',
      },
      {
        name : '2012_bt_biz_job3_pic5.jpg',
        title : 'YMCA - Frederick, MD',
        description : 'Parking Lot and Lines',
      },
      {
        name : '2012_bt_biz_job1_pic2.jpg',
        title : "St. Anthony's Church - Emmitsburg, MD" ,
        description : 'Parking Area and Lines',
      },
      {
        name : '2012_bt_biz_job2_pic2.jpg',
        title : 'United Methoist Church - Thurmont, MD',
        description : 'Parking Lot and Lines',
      },
      {
        name : '2010_bt_biz_job1_pic2.jpg',
        title : 'NAPA',
        description : 'Loading Dock',
      }
    ];

    this.videos = [
      {
        file1 : 'video_ace_thurmont_2021.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_7_eleven_2021.5mb.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_medImmune_parkinglot_paving_1.5mb.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_medicalCenter2.80mb.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_ollies1.38mb.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_ftm_parkinglot_paving_1.8mb.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_ftm_parkinglot_milling_1.16mb.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_ftm_parkinglot_milling_2.10mb.mp4',
        file2 : null,
        title : null
      },
      {
        file1 : 'video_ftm_parkinglot_milling_3.7mb.mp4',
        file2 : null,
        title : null
      }
    ];

    const comments1: Comment[] = [
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `This was a great experience. The most important is the quality of the work. 
        Thurmont Paving did a great job. I received estimates for up to twice the cost. I ran 
        into a situation where I had to trust this company to do the job while I was out of town. 
        They did a great job and they are trustworthy. It just doesn’t any better than this.`,
        author : `Dennis McCullough`,
        comments : null
      },
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `I had a complete resurfacing of my driveway done by Thurmont Paving. 
        The estimate was quick and fair, and the work was done very professional 
        and finished on time. George and George Jr. take pride in their work.`,
        author : `Jay Macieowski`,
        comments : null
      },
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `Amazing same day service.`,
        author : `Josh Lawson`,
        comments : null
      }
    ];

    const comments2: Comment[] = [
      {
        class1 : null,
        class2 : `col-md-4`,
        class3 : `card bg-dark text-white p-1 mt-2`,
        content : `Thurmont Paving did an excellent job with sealcoating my father's car wash parking lot.  
        I'd recommend them to others.  Very professional crew.`,
        author : `Matt Roberts`,
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
      }
    ];

  }

}
