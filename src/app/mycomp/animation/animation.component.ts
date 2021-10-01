import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
declare var $: any;  
// import third-party module



@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  currentState = 'initial';
 // state = 'shown';
  constructor() { }

  ngOnInit(): void {
  var $animation_elements = $('.card');
  var $window = $(window);
    const check_if_in_view = () => {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
    var element_height = $animation_elements.outerHeight();
    var element_top_position = $animation_elements.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
       
      $animation_elements.addClass('cardanim');
   } //else {
    //   $animation_elements.removeClass('cardanim');
    // }
 // });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
  }
 
 // ngAfterViewInit() {
 //   setTimeout( () => {
  //    this.state = 'hidden';
    //}, 200);
  //}
}
