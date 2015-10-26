function getBlogResource() { 
  Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
  var blogResource = Blogger.Blogs.getByUrl("http://googleappsdeveloper.blogspot.com/");
  Logger.log(blogResource)
} 

function getUserBlogs(){
   Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
    var blogs = Blogger.Blogs.listByUser("self",{status:"LIVE"})
    Logger.log(blogs)
}

function getBlogById(){
   Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
    var blogs = Blogger.Blogs.get("3522258539625557047");
    Logger.log(blogs)
}

function getPosts(){
  Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
  var posts = Blogger.Posts.list("3522258539625557047");
  Logger.log(posts);
}

function getComments(){
   Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
   var comments = Blogger.Comments.list("3522258539625557047","3589827940531102827");
   Logger.log(comments)
  
}

function getPostUserInfos(){
  Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
  var info = Blogger.PostUserInfos.list("g115383627259502138986","3522258539625557047");
  Logger.log(info);
}



function insertPost(){
  Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
  var resource = {title:"TEST AT: " + new Date(),
                  content: "THIS IS THE SUPER AWESOME BODY OF THE POST!<br><b>BOLD</b><br><i>FANCY</i><br>",
                  labels:["TEST","GAS LIBRARY"]
                 }
  var results = Blogger.Posts.insert("3522258539625557047",resource);
  Logger.log(results);
}
