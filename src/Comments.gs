self_.Comments = function(){};

self_.Comments.approve = function(blogId,postId,commentId,options){
  var path =  buildUrl_("blogs/"+blogId+"/posts/"+postId+"/comments/"+commentId+"/approve",options);
  var callOptions = {method:"POST"}
  var commentsResource = CALL_(path,callOptions);
  return commentsResource;
};


self_.Comments.Delete = function(blogId,postId,commentId,options){
  var path =  buildUrl_("blogs/"+blogId+"/posts/"+postId+"/comments/"+commentId,options);
  var callOptions = {method:"DELETE"}
  var error = CALL_(path,callOptions);
  return error;
};

self_.Comments.get = function(blogId,postId,commentId,options){
  var path =  buildUrl_("blogs/"+blogId+"/posts/"+postId+"/comments/"+commentId,options);
  var callOptions = {method:"GET"}
  var commentsResource = CALL_(path,callOptions);
  return commentsResource;
};

self_.Comments.list = function(blogId,postId,options){   
  var path =  buildUrl_("blogs/"+blogId+"/posts/"+postId+"/comments",options);
  var callOptions = {method:"GET"}
  var commentItems = CALLPAGE_(path,callOptions,"items");
  return commentItems;
  
};


self_.Comments.listByBlog = function(blogId, options){  
  var path =  buildUrl_("blogs/"+blogId+"/comments",options);
  var callOptions = {method:"GET"}
  var commentItems = CALLPAGE_(path,callOptions,"items");
  return commentItems;  
};


self_.Comments.markAsSpam = function(blogId,postId,commentId,options){
  var path =  buildUrl_("blogs/"+blogId+"/posts/"+postId+"/comments/"+commentId+"/spam");
  var callOptions = {method:"POST"}
  var commentsResource = CALL_(path,callOptions);
  return commentsResource;
};


self_.Comments.removeContent = function(blogId,postId,commentId,options){
  var path =  buildUrl_("blogs/"+blogId+"/posts/"+postId+"/comments/"+commentId+"/removecontent",options);
  var callOptions = {method:"POST"}
  var commentsResource = CALL_(path,callOptions);
  return commentsResource;
};

