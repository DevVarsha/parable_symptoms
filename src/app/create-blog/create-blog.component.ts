import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  constructor() { }
  openNav() {

    $("#mySidebar").width('350');
    $("#mySidebar").height('100%');
    $("#plus").object.style.transform="rotate(7deg)";
  }

  closeNav() {
    $("#mySidebar").width('')
  }
  ngOnInit(): void {
    
    // function openNav() {
    //   document.getElementById("mySidebar").style.width = "250px";
    //   document.getElementById("main").style.marginLeft = "250px";
    // }
    
    // function closeNav() {
    //   document.getElementById("mySidebar").style.width = "0";
    //   document.getElementById("main").style.marginLeft= "0";
    // }
  }

}
