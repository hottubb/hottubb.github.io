(function(){function r(){if(classie.has(t,"open")){$("#youtube_overlay").empty();$("#header_text").show();$("#video_"+bubblLanding.current_bubbl_landing_page).get(0).play();classie.remove(t,"open");classie.add(t,"close");var e=function(n){if(support.transitions){if(n.propertyName!=="visibility")return;this.removeEventListener(transEndEventName,e)}classie.remove(t,"close")};support.transitions?t.addEventListener(transEndEventName,e):e()}else if(!classie.has(t,"close")){classie.add(t,"open");$("#header_text").hide();$("#video_"+bubblLanding.current_bubbl_landing_page).get(0).pause();var n=$("#video_"+bubblLanding.current_bubbl_landing_page).data("videourl")+"?autoplay=1";$("#youtube_overlay").append('<iframe src="'+n+'" frameborder="0" allowfullscreen></iframe>');var r={device:"desktop"};Parse.Analytics.track("fullContentOpen",r)}}var e=document.getElementById("trigger-overlay"),t=document.querySelector("div.overlay"),n=t.querySelector("button.overlay-close");transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions};e.addEventListener("click",r);n.addEventListener("click",r)})();