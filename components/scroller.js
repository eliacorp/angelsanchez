//
// Copyright (c) 2015 by Dmitriy Panfilov (http://codepen.io/panfilov/pen/xprCB)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//



angular.module('myApp')
.directive('smoothDirective', function($location, $rootScope, $timeout){
  return{
    restrict: 'A',
    link: function(scope, element, attr){

scope.smoothActive = true;
scope.whereTo = 0;

setTimeout(function(){

//..............................................................................home click


    scope.homeSectionsZero = angular.element('#home-sections-0');
    scope.homeSectionsOne = angular.element('#home-sections-1');
    scope.homeSectionsTwo = angular.element('#home-sections-2');




        angular.element('#anchor-div-0').on('click',function(event){

           scope.smoothActive = false;
          scope.whereTo = scope.homeSectionsZero.offset().top;

          jQuery('html body').animate({
              scrollTop: scope.homeSectionsZero.offset().top
          }, 1000, function(){
             scope.smoothActive =true;
              //  scope.animationScrollState = false;




          });



        });

        angular.element('#anchor-div-1').on('click',function(event){

           scope.smoothActive = false;
          scope.whereTo = scope.homeSectionsOne.offset().top

          jQuery('html body').animate({
              scrollTop: scope.homeSectionsOne.offset().top
          }, 1000, function(){
               scope.smoothActive =true;


          });



        });

        angular.element('#anchor-div-2').on('click',function(event){

           scope.smoothActive = false;
          scope.whereTo = scope.homeSectionsTwo.offset().top


          jQuery('html body').animate({
              scrollTop: scope.homeSectionsTwo.offset().top
          }, 1000, function(){
               scope.smoothActive = true;
          });
        });






//..............................................................................view collection click


        scope.viewEveningClick = function(event){

                         scope.smoothActive = false;

          angular.element('html body').animate({
              scrollTop: angular.element('#evening-images').offset().top
          }, 1000, function(){
               scope.smoothActive = true;
          });



        };

        scope.viewBridalClick = function(event){
                         scope.smoothActive = false;
            angular.element('html body').animate({

                scrollTop: angular.element('#bridal-images').offset().top
            }, 1000, function(){
                 scope.smoothActive = true;
            });

        };















  }, 1000);



      // var mainElement = angular.element('body');


      // var scrollEnd, t, el, html;

      $rootScope.smoothScrollFunction = function (el) {
        t = this, html = document.documentElement;
        el = el || window;
        t.rAF = false;
        t.target = 0;
        t.scroll = 0;


        // setTimeout(function(){
        //   jQuery('.navEntry').delegate().on('click',function(){
        //     setTimeout(function(){
        //       cancelAnimationFrame(t.rAF);
        //       t.rAF = false;
        //       // window.scrollTo(0,0);
        //     },1000);
        //   });
        // },500);

        // scope.animationScrollState ={};
  //
        $rootScope.$on('$routeChangeStart', function() {


          return scope.animationScrollState = true;



        });

        $rootScope.$on('$routeChangeSuccess', function() {


            t.target = 0;

            t.scroll = 0;

            // scrollEnd= 0;

            window.scroll(0,0);

              return scope.animationScrollState = false;

        });

scope.$watchCollection('[smoothActive, whereTo]', function(newValues, oldValues) {

        t.animate = function() {



          t.scroll += (t.target - t.scroll) * .07;

          if ((Math.abs(t.scroll.toFixed() - t.target) <= 0)||(newValues[0]===false)) {
            cancelAnimationFrame(t.rAF);
            t.rAF = false;


            // cancelAnimationFrame(t.rAF);
            // t.rAF = false;
            // window.scroll(0,0);
            // t.target = newValues[1];
            // scrollEnd =newValues[1];
            // t.scroll = newValues[1];
            // scrollTo(0,  newValues[1])
          }



            //update the DOM with newValue

           if ((t.rAF)&&(newValues[0]==true)){
            scrollTo(0, t.scroll);
            t.rAF = requestAnimationFrame(t.animate);

          }
          // else if (smoothActive){
          //    el.scrollTop = t.scroll



        };
        el.onmousewheel = function(e) {
          e.preventDefault();
          e.stopPropagation();
          scrollEnd = (el == window) ? html.scrollHeight - html.clientHeight : el.scrollHeight - el.clientHeight;
          t.target += -(e.wheelDelta);
          if (t.target < 0){
            t.target = 0
            };
          if ((t.target > scrollEnd)&&(newValues[0]==true)) {
            t.target = scrollEnd;
          } else if ((t.target > scrollEnd)&&(newValues[0]==false)){
            // t.target = newValues[1];
            return false;
          }
          if ((!t.rAF)&&(newValues[0]==true)){
             t.rAF = requestAnimationFrame(t.animate)
             }
          else if ((t.target > scrollEnd)&&(newValues[0]==false)){
            // t.target = newValues[1];
            return false;
          }
        };
        el.onscroll = function(e) {
          e.preventDefault();
          e.stopPropagation();
          if (t.rAF) return;
          t.target = (el == window) ? pageYOffset || html.scrollTop : el.scrollTop;
          t.scroll = t.target;

        //
        //
        //     e.preventDefault();
        //     e.stopPropagation();
        //     var scrollEnd = (el == window) ? html.scrollHeight - html.clientHeight : el.scrollHeight - el.clientHeight;
        //     t.target += -(e.wheelDelta);
        //     if (t.target < 0) t.target = 0;
        //     if (t.target > scrollEnd) t.target = scrollEnd;
        //     if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);
        };

            });
      }



 // if(!$rootScope.isMobile){
      $rootScope.smoothScrollFunction();
// }
// else if($rootScope.isMobile){
//   return false;
// }





    }

  }

})






// .directive('sectionadjustmentDirective', function($window){
//   return{
//     restrict: 'A',
//     link: function(scope, element, attr){
//
//       var $win = angular.element($window);
//       var windowHeight = angular.element($window).height(); // Window Height
//       var windowHalf = windowHeight/2;
//
//       var windowSectionTwoHalf = windowHeight + windowHalf
//       var windowSectionThreeHalf = windowHeight*2 + windowHalf
//
//
//       // distance      = (elementOffset - scrollTop);
//
//       var scrollTime = 800;
//
//       window.onscroll = function(){
//         windowScrollTop = angular.element($window).scrollTop();
//
//         clearTimeout($.data(this, 'scrollTimer'));
//         $.data(this, 'scrollTimer', setTimeout(function() {
//           if(windowScrollTop < windowHeight) {
//             console.log('section-one');
//             if(windowScrollTop < windowHalf){
//               jQuery('html, body').animate({scrollTop:0},scrollTime);
//             }
//             else {
//               jQuery('html, body').animate({scrollTop:windowHeight},scrollTime);
//             }
//           }
//
//
//           else if((windowScrollTop < windowHeight*2) && (windowScrollTop > windowHeight)) {
//             console.log('section-two');
//             if(windowScrollTop < windowSectionTwoHalf){
//               jQuery('html, body').animate({scrollTop:windowHeight},scrollTime);
//             }
//             else {
//               jQuery('html, body').animate({scrollTop:windowHeight*2},scrollTime);
//             }
//           }
//
//
//           else if((windowScrollTop < windowHeight*3) && (windowScrollTop > windowHeight*2)) {
//             console.log('section-three');
//             if(windowScrollTop < windowSectionThreeHalf){
//               jQuery('html, body').animate({scrollTop:windowHeight*2},scrollTime);
//             }
//             else {
//               jQuery('html, body').animate({scrollTop:windowHeight*3},scrollTime);
//             }
//           }
//
//
//           // else if((windowScrollTop < windowHeight*4) && (windowScrollTop > windowHeight*3)) {
//           //   console.log('section-four');
//           //   if(windowScrollTop < windowSectionFourHalf){
//           //     jQuery('html, body').animate({scrollTop:windowHeight*3},1000);
//           //   }
//           //   else {
//           //     jQuery('html, body').animate({scrollTop:windowHeight*4},1000);
//           //   }
//           // }
//
//
//         }, 500));
//
//
//
//       };
//
//
//
//
//
//
//
//     }
//
//   }
//
// });
