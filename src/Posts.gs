self_.Posts = function(){};

self_.Posts.Delete = function(blogId,postId,options){
  var path = buildUrl_("blogs/"+blogId+"/posts/"+postId,options);
  var callOptions = {method:"DELETE"};
  var error = CALL_(path,callOptions);
  return error;
};

self_.Posts.get = function(blogId,postId,options){
  var path = buildUrl_("blogs/"+blogId+"/posts/"+postId,options);
  var callOptions = {method:"GET"};
  var postsResource = CALL_(path,callOptions);
  return postsResource;
};


self_.Posts.getByPath = function(blogId,options){
  var path = buildUrl_("blogs/"+blogId+"/posts/bypath",options);
  var callOptions = {method:"GET"};
  var postsResource = CALL_(path,callOptions);
  return postsResource;
};


self_.Posts.insert = function(blogId,postResource){
  var path = buildUrl_("blogs/"+blogId+"/posts",options);
  var payload = JSON.stringify(postResource);
  var callOptions = {method:"POST",payload:payload};
  var postsResource = CALL_(path,callOptions);
  return postsResource;
};

self_.Posts.list = function(blogId,options){
  var path = buildUrl_("blogs/"+blogId+"/posts",options);
  var payload = JSON.stringify(postResource);
  var callOptions = {method:"GET",payload:payload};
  var postsResources = CALLPAGE_(path,callOptions,"items");
  return postsResources;
};

self_.Posts.patch = function(blogId,postId,postResource){
  var path = buildUrl_("blogs/"+blogId+"/posts/"+postId ,options);
  var payload = JSON.stringify(postResource);
  var callOptions = {method:"PATCH",payload:payload};
  var postsResource = CALL_(path,callOptions);
  return postsResource;

};

self_.Posts.publish = function(blogId,postId,options){
  var path = buildUrl_("blogs/"+blogId+"/posts/"+postId+"/publish" ,options);
  var payload = JSON.stringify(postResource);
  var callOptions = {method:"POST",payload:payload};
  var postsResource = CALL_(path,callOptions);
  return postsResource;
};

self_.Posts.revert = function(blogId,postId,options){
  var path = buildUrl_("blogs/"+blogId+"/posts/"+postId+"/revert" ,options);
  var payload = JSON.stringify(postResource);
  var callOptions = {method:"POST",payload:payload};
  var postsResource = CALL_(path,callOptions);
  return postsResource;
};

self_.Posts.search = function(blogId,query,options){
  var options = options || {};
  options.q = query;
  var path = buildUrl_("blogs/"+blogId+"/posts/search",options);
  var callOptions = {method:"GET"};
  var postsResource = CALL_(path,callOptions);
  return postsResource;
};

self_.Posts.update = function(blogId,postId,postResource, options){
  var path = buildUrl_("blogs/"+blogId+"/posts/"+postId ,options);
  var payload = JSON.stringify(postResource);
  var callOptions = {method:"PUT",payload:payload};
  var postsResource = CALL_(path,callOptions);
  return postsResource;
};
