self_.PageViews = function(){};

self_.PageViews.get = function(id,options){
var path =  buildUrl_("blogs/"+id+"/pageviews",options)
    var callOptions = {method:"GET"}
    var pageViewsResource = CALL_(path,callOptions);
    return pageViewsResource;
};
