self_.PostUserInfos = function(){};
self_.PostUserInfos.get = function(userId,blogId,postId,options){
var path =  buildUrl_("users/"+userId+"/blogs/"+blogId+"/posts/"+postId,options)
    var callOptions = {method:"GET"}
    var postUserInfosResource = CALL_(path,callOptions);
    return postUserInfosResource;
};
self_.PostUserInfos.list = function(userId,blogId,options){
  var path =  buildUrl_("users/"+userId+"/blogs/"+blogId+"/posts",options);
  var callOptions = {method:"GET"}
  var postUserInfosResources = CALLPAGE_(path,callOptions,"items");
  return postUserInfosResources;
};
