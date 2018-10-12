var isWindowsTouch,
    isTouch,
    edown = 'mousedown',
    emove = 'mousemove',
    eup = 'mouseup';

    (function(elm,elm2){

      isWindowsTouch = (function(elm){ return elm.PointerEvent || elm.navigator.msPointerEnabled; })(elm);
      isTouch = (function(elm){ return 'createTouch' in elm.document && "ontouchstart" in elm; })(elm);

      if(isWindowsTouch){

        if(elm.PointerEvent) {

          edown = 'pointerdown';
          emove = 'pointermove';
          eup = 'pointerup';

        }else{

          edown = 'MSPointerDown';
          emove = 'MSPointerMove';
          eup = 'MSPointerUp';

          }

        }else if(isTouch){

          edown = 'touchstart';
          emove = 'touchmove';
          eup = 'touchend';

        }

    })(window,document);

var isMousedown = edown == 'mousedown';
