self_.BlogUserInfos = function(){};
self_.BlogUserInfos.get = function(userId,blogId,options){
 var path = buildUrl_("users/"+userId+"/blogs/"+blogId,options);
  var callOptions = {method:"GET"};
  var blogUsersResource = CALL_(path,callOptions);
  return blogUsersResource;
}
