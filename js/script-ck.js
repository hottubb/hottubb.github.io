//Define Bubbl Namespace
function addUser(e){var t={};$("ul.username-error-list").hide();$(".spinner").show();var n=Parse.Object.extend("PreRegUsers"),r=new n;r.save({email:e},{success:function(n){bubblLanding.email=e;t.status="user added";$("#reserve_username_form").hide();$(".spinner").hide();$("#header_text").hide();$("#header_text").replaceWith('<h1 id="header_text">STANDBY. GOOD BEER IS COMING.</h1>');$(".success").fadeIn();$("#social_share").fadeIn();$("#submit_video").fadeIn();$.ajax({type:"GET",url:"http://us7.api.mailchimp.com/1.3/?method=listSubscribe&apikey=3be7aebdb44ee8c4e132b85343f14ba6-us7&id=9b1bb9a074&email_address="+e,success:function(e){console.log("sending MC")}});return!1},error:function(e,t){$(".spinner").hide();$("ul.username-error-list").show()}});Parse.Analytics.track("signups",t)}var bubblLanding={};bubblLanding.current_bubbl_landing_page="one";