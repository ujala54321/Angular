import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, model, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Admin } from "../admin/admin";
import { Alert } from "../../reusableComponent/alert/alert/alert";
import { Tabs } from '../../reusableComponent/tabs/tabs/tabs';
import { PhotoModel } from '../../models/models/model';

@Component({
  selector: 'app-photos',
  imports: [FormsModule,JsonPipe, Admin, Alert,Tabs],
  templateUrl: './photos.html',
  styleUrl: './photos.css'
})
export class Photos implements OnInit {

  photosList: PhotoModel[] = [];
  http = inject(HttpClient);
  isFormSubmited: boolean = false;
  myTabList: string[]= ['Basic','Project','Family','Contact','Skill']

  constructor(private userSr : UserService) {
    const sum = this.userSr.getAddtionOfTwoNo(44,77);
    debugger;
  }

  newPhoto: any = {
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }

  // constructor(private http: HttpClient){

  // }

  ngOnInit(): void {
    debugger;
    this.getAllPhotos();
  }

  getAllPhotos() {
    debugger;
    // this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((result: any) => {
    //   debugger;
    //   this.photosList = result;
    // })
    
    this.userSr.getAllPhotos().subscribe({
      next:(res:any)=>{
         debugger;
         this.photosList = res;
      }
    })
  }

  onSavePhoto(form: NgForm) {
    debugger;
    this.isFormSubmited = true;
    if (form.valid) {
      this.http.post("https://jsonplaceholder.typicode.com/photos", this.newPhoto).subscribe((response: any) => {
        alert("API call Success")
        debugger;
        this.getAllPhotos();
        form.reset();
         this.isFormSubmited = false;
      })
    }

  }

  onUpdatePhoto() {
    this.http.put("https://jsonplaceholder.typicode.com/photos/" + this.newPhoto.id, this.newPhoto).subscribe((response: any) => {
      alert("API call Success")
      debugger;
      this.getAllPhotos();
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you Sure want to Delete");
    if (isDelete == true) {
      this.http.delete("https://jsonplaceholder.typicode.com/photos/" + id).subscribe((response: any) => {
        alert("API call Success")
        debugger;
        this.getAllPhotos();
      })
    }

  }

  onEdit(data: any) {
    this.newPhoto = data;
  }
}
