import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   storage: any=[];
  ngOnInit(): void {}


  // to dispaly the data on lis component from json_db through "api" which connected through "Services"
  
  constructor(private ram :RestaurantServiceService ) {
    this.ram.disp_list().subscribe(data=>{   this.storage=data; console.log(data);})
}


// this function we useing for---> click on trash symbol and list will be deleted
deleteRestaurant_List(abc: number){
  //console.log(this.storage)
  this.storage.splice(abc-1,1)
  this.storage.delete_List(abc).subscribe((data: any)=>{
    // console.log(data)
    
  })
   
 }
  
  
}
