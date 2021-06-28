import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var angular: any;
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  value: any;
  constructor() {
    // this.value='section-1'
  }

  ngOnInit(): void {

    // angular.module('myApp', ['duScroll'])
    // //.value('duScrollGreedy', true)
    // .value('duScrollBottomSpy', true)
    // .controller('MyCtrl', function($scope: { toTheTop: () => void; toSection3: () => void; }, $document: { scrollTopAnimated: (arg0: number, arg1: number) => Promise<any>; scrollToElementAnimated: (arg0: any) => void; on: (arg0: string, arg1: () => void) => void; }){
    //   $scope.toTheTop = function() {
    //     $document.scrollTopAnimated(0, 5000).then(function() {
    //       console && console.log('You just scrolled to the top!');
    //     });
    //   }
    //   var section3 = angular.element(document.getElementById('section-3'));
    //   $scope.toSection3 = function() {
    //     $document.scrollToElementAnimated(section3);
    //   }
    //   $document.on('scroll', function() {
    //     var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    //     var body = document.body, html = document.documentElement;
    //     var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    //     const windowBottom = windowHeight + window.pageYOffset;
    //     if (windowBottom >= docHeight) {
    //         //alert('bottom reached');
    //     }
    //   });
    // }
    // ).value('duScrollOffset', 30);
  }
  Navigate(elem: HTMLElement) {
    console.log('hello')
    elem.scrollIntoView({ behavior: 'smooth' });
  }
  

  onClick(event: any) {
    console.log(event);

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.value = idAttr.nodeValue;
    console.log(this.value);

  }


}
