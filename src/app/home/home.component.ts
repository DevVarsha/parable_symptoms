import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { GoogleChartInterface } from 'ng2-google-charts';
declare var google: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showMap: boolean = false;
  constructor(private router: Router) { }
  showDetails:boolean=false;
  showDetails1:boolean=false;
  textValue= ''; 
  onBoxOver() {
    this.showDetails=true;
  }
  onBoxOut(): void {
    this.showDetails=false;
  

  }


  imgSrc: string = "./../../assets/activity/bloguser5.jpg";
  onMouseOver(): void {
    this.imgSrc = "./../../assets/activity/bloguser1.jpg";
    this.textValue = 'web development';
    // this.textValue1 = 'We develop custom web applications for different businesses, that includes Real- Estate, Banking & Finance, Education, E-commerce and others.';

  }

  // onMouseOut(): void {
  //   this.imgSrc = "./../../assets/activity/bloguser5.jpg";
  //   this.textValue='';
  //   // this.textValue1='';
  // }
  openNav() {

    $("#mySidenav").width('350');
    $("#mySidenav").height('100%');
  }

  closeNav() {
    $("#mySidenav").width('')
  }

  ngOnInit(): void {

    // google.charts.load('current', {
    //   'packages': ['geochart'],
    //   // Note: you will need to get a mapsApiKey for your project.
    //   // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    //   'mapsApiKey': ''
    // });
    // google.charts.setOnLoadCallback(drawRegionsMap);
    // function drawRegionsMap() {
    //   var data = google.visualization.arrayToDataTable([
    //     ['Country', 'Popularity'],
    //     ['Germany', 200],
    //     ['United States', 300],
    //     ['Brazil', 400],
    //     ['Canada', 550],
    //     ['France', 600],
    //     ['RU', 500],
    //     [{v: 'India', f: 'India'}, 2400],
    //     ['Pakistan', 100],
    //     ['China', 200],
    //   ]);
    //   var chart: any = new google.visualization.GeoChart(document.getElementById('regions_div'));
    //   // chart.getAction('alertAction');
    //   chart.draw(data);
    // }
  }

  //   myClickHandler(){
  //     var selection = chart.getSelection();
  //     var message = '';
  //     for (var i = 0; i < selection.length; i++) {
  //         var item = selection[i];
  //         if (item.row != null && item.column != null) {
  //             message += '{row:' + item.row + ',column:' + item.column + '}';
  //         } else if (item.row != null) {
  //             message += '{row:' + item.row + '}';
  //         } else if (item.column != null) {
  //             message += '{column:' + item.column + '}';
  //         }
  //     }
  //     if (message == '') {
  //         message = 'nothing';
  //     }
  //     alert('You selected ' + message);
  // }

  changeStatus($element: any) {
    this.showMap = false;
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  clickData($element: any) {
    this.showMap = true;

    google.charts.load('current', {
      'packages': ['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': ''
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        // ['Germany', 0],
        // ['United States', 0],
        ['Brazil', 400],
        // ['Canada', 0],
        // ['France', 0],
        // ['RU', 0],
        // [{v: 'India', f: 'India'}, 0],
        // ['Pakistan', 0],
        // ['China', 0],
      ]);
      var options = {
        backgroundColor: {
          fill: '#000000',
          fillOpacity: 0.8
        },
        
      };
      var options1 = {
        Country: '400', // Africa
        colorAxis: {colors: [ 'red']},
        backgroundColor: '#000000',
      };
      
      var chart: any = new google.visualization.GeoChart(document.getElementById('regions_div'));
      
      chart.draw(data, options);
      chart.draw(data, options1);
    
    }




    console.log(this.showMap);
    this.scrollToElement($element);
  }
  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  itemSelected(value: any) {
    this.router.navigate(['/country'])
  }

}
