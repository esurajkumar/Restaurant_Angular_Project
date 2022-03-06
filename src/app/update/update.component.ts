import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { RestaurantServiceService } from '../restaurant-service.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // code for taking the data from "update component" form and sending it to service so that service can send this for update inside the json db.
shyam= new FormGroup({
  Name: new FormControl(''),
  Email: new FormControl(''),
  Contact: new FormControl(''),
  Address: new FormControl(''),
})

constructor(private cat:ActivatedRoute, private rat:RestaurantServiceService) { }

// it geting the requested data from service and pre filled in updade component form
ngOnInit(): void {
  //console.log(this.cat.snapshot.params['id'])
   this.rat.disp_In_update(this.cat.snapshot.params['id']).subscribe((data: any)=>{
      //console.log(data)
    this.shyam= new FormGroup({
      Name: new FormControl(data ['Name']),
      Email: new FormControl(data ['Email']),
      Contact: new FormControl(data ['Contact']),
      Address: new FormControl(data ['Address'])
   })  })  }
   
  // show alert message when only new data submit.here initially "mars" will be false so alert message wont be display all time.
   mars:boolean= false




  // once we submit the data on form it will run this funtion and store the all data into "shyam" avliable and this data we transfer from here as a argument to "service" inside "edit_requested_data_In_update" function.
   ram(){
     console.log("item",this.shyam.value)
     this.rat.edit_requested_data_In_update(this.cat.snapshot.params['id'] ,this.shyam.value).subscribe((data: any)=>{
       console.log("result",data)

             //once data will submit it come and run this funtion and "mars" value will be "true" and poput alert will display.
       this.mars=true
     })
     
    // after submit the data and display the popup alert message and then it reset the form details
    this.shyam.reset({})
   }


   // when we click on cross sign for remove the pop alert then this function call and mars value will be once false and pop alert vanish from their.
     CloseAlert(){
       this.mars=false   }

      
}