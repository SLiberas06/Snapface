import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import {HeaderComponent} from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  header!: HeaderComponent;
faceSnaps!: FaceSnap[];

 ngOnInit(){
  this.faceSnaps =[
    {
      title:'Archibald',
      description: 'Mon meilleur ami ',
      imageUrl:  'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Lyon'
    },
    {
    title: 'Kermite',
    description: 'Mon Muppet préféré',
    imageUrl:  'https://pixabay.com/get/geb099900c360f9c7b8e3f38fb6ef0eaa9b56b13d2ede856da9706d04ad517dfca1869c7e2051e076b9ebd158be3d8ed171e6dff9470311703785cbb5a6197e4c_1920.jpg',
    createdDate: new Date(),
    snaps: 0,
    location: 'Fréjus'
    },

  ];

}

}
