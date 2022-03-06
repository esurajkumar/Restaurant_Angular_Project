import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestaurantServiceService } from '../restaurant-service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})



export class AddComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private moon: RestaurantServiceService) { }

  // show alert message when only new data submit.here initially "mars" will be false so alert message wont be display all time.
  mars:boolean=false
  
// when we click on cross sign for remove the pop alert then this function call and mars value will be once false and pop alert vanish from their.
  CloseAlert(){
    this.mars=false
    //  this.shyam.reset({})          
    // we can keep this line here also but it reset the form when we click on cross sign only.
  }


// code for taking the data from "add" form and sending it to service so that service can send this by post method inside the json db.
  shyam= new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Contact: new FormControl(''),
    Address: new FormControl(''),
  })
 

  // once we submit the data on form it will run this funtion and store the all data into "shyam" valiable and this data we transfer from here as a argument to "service" inside "disp_add" function.
  ram(){
    console.log(this.shyam.value)
    this.moon.disp_add(this.shyam.value ).subscribe((data)=>{ console.log(data);      
      
      //once data will submit it come and run this funtion and "mars" value will be "true" and poput alert will display.
      this.mars=true  
     })
    
    // after submit the data and display the popup alert message and then it reset the form details
    this.shyam.reset({})

  }


}
