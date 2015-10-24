/**
 * Blogs Objects
 * @returns {string} The complete URL.
 */
self_.Blogs = function(){};

self_.Blogs.get = function(id,options){
    var path =  buildUrl_("blogs/"+id,options)
    var callOptions = {method:"GET"}
    var blogResource = CALL_(path,callOptions);
    return blogResource;
};

self_.Blogs.getByUrl = function(url,options){
    var options = options || {};
    options.url = url;
    var path =  buildUrl_("blogs/byurl",options)
    var callOptions = {method:"GET"}
    var blogResource = CALL_(path,callOptions);
    return blogResource;
};

self_.Blogs.listByUser = function(userId,options){
    var path =  buildUrl_("users/"+userId+"/blogs",options)
    var callOptions = {method:"GET"}
    var blogResource = CALL_(path,callOptions);
    return blogResource;
    
};
