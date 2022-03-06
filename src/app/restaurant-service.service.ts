import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class RestaurantServiceService {

  constructor(private suraj :HttpClient) { }

    // VVI--> this is api of json_db throuth this we are abled to connect json_db and can access its data
   singh = "http://localhost:3000/posts";
   

  //  using this function to get the data from json_db through singh_api
disp_list(){
 return this.suraj.get(this.singh);
}


// using this function to post/add the data to json_db through singh_api
disp_add(data: any){
  console.log(data)
return this.suraj.post(this.singh,data)
}


// using this function to delete the data inside json_db through singh_api by clicking on "trash-symbol"
delete_List(id: any){
  return this.suraj.delete(`${this.singh}/${id}`)
}
// it display the requested data on select "id" on update comp 
disp_In_update(id: any){
  return this.suraj.get(`${this.singh}/${id}`)
}

// it update the requested id data in update comp
edit_requested_data_In_update(id: any,data: any){
  return this.suraj.put(`${this.singh}/${id}`,data)
}
}
