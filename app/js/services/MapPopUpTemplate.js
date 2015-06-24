'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function MapPopUpTemplateService($filter) {

  var service = {};

  service.genStaticTwitterStatus = function(status) {
  	var result = "";
  	var text = $filter('tweetHashtag')($filter('tweetMention')($filter('tweetTextLink')(status.text)));
  	var created_at = $filter('date')(status.created_at, 'dd MMM yyyy');
  	var result='<div class="single-tweet tweet map-tweet">'
  		+			 '<div class="top-metadata">'
  		+				'<img class="avatar"' 
  		+					 'onError="this.onerror=null;this.src=\'/images/anon_200x200.png\';"'
  		+					 'src="' + status.user.profile_image_url_https + '" alt="user-images">'
  		+			   '<div class="user-data-wrapper">'
  		+			    	'<a class="name" href="' + 'https://twitter.com/' + status.user.screen_name + '">' + status.user.name + '</a>'			
  		+			   	'<span class="screen-name">' + '@' + status.user.screen_name + '</span>'	
  		+			    '</div>'
  		+			'</div>'
  		+ 			'<p class="tweet-content-text">' + text +  '</p>'
  		+				'<div class="detail-metadata">'
  		+			    	'<span class="metadata">' + created_at + '</span> · '
  		+				'</div>'        
  		+			'</div>'
  		+		'</div>'


  	return result;


  };




  return service;

}

servicesModule.service('MapPopUpTemplateService', ['$filter', MapPopUpTemplateService]);