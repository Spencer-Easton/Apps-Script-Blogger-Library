self_.Pages = function(){};


self_.Pages.Delete = function(blogId,pageId){  
  var path =  "blogs/"+blogId+"/pages/"+pageId;
  var callOptions = {method:"DELETE"}
  var error = CALL_(path,callOptions);
  return error;
};


self_.Pages.get = function(blogId,pageId,options){  
  var path =  buildUrl_("blogs/"+blogId+"/posts/"+pageId,options);
  var callOptions = {method:"GET"}
  var pagesResource = CALL_(path,callOptions);
  return pagesResource;
};

self_.Pages.insert = function(blogId,pageResource,options){  //notable option isDraft
 
  var path =  buildUrl_("blogs/"+blogId+"/pages",options);
  var payload = JSON.stringify(pageResource)
  var callOptions = {method:"POST",payload:payload}
  var pagesResource = CALL_(path,callOptions);
  return pagesResource;
};

self_.Pages.list = function(blogId,options){  
  var path =  buildUrl_("blogs/"+blogId+"/posts/",options);
  var callOptions = {method:"GET"}
  var pagesResource = CALL_(path,callOptions);
  return pagesResource;
};


self_.Pages.patch = function(blogId,pageId, pageResource,options){  
  var path =  buildUrl_("blogs/"+blogId+"/pages/"+pageId,options);
  var payload = JSON.stringify(pageResource)
  var callOptions = {method:"PATCH",payload:payload}
  var pagesResource = CALL_(path,callOptions);
  return pagesResource;
};


self_.Pages.publish = function(blogId,pageId,options){  
   var path =  buildUrl_("blogs/"+blogId+"/pages/"+pageId+"/publish",options);
  var payload = JSON.stringify(pageResource)
  var callOptions = {method:"POST",payload:payload}
  var pagesResource = CALL_(path,callOptions);
  return pagesResource;
};



self_.Pages.revert = function(blogId,pageId,options){  
  var path =  buildUrl_("blogs/"+blogId+"/pages/"+pageId+"/revert",options);
  var payload = JSON.stringify(pageResource)
  var callOptions = {method:"POST",payload:payload}
  var pagesResource = CALL_(path,callOptions);
  return pagesResource;
};


self_.Pages.update =function(blogId,pageId, pageResource,options){  
  var path =  buildUrl_("blogs/"+blogId+"/pages/"+pageId,options);
  var payload = JSON.stringify(pageResource)
  var callOptions = {method:"PUT",payload:payload}
  var pagesResource = CALL_(path,callOptions);
  return pagesResource;
};

