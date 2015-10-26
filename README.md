# Apps-Script-Blogger-Library
A Google Apps Script library for the Blogger API  
  


### Library Setup  
##### 1) Add the library.  
You can add the library by its ID: `M2CuWgtxF1cPLI9mdRG5_9sh00DPSBbB3` or add it from the source directory. If you add it from source you will need wrap the library code in its own object as this is what is done when you add a library.  
 
##### 2) Set up your OAuth2 service.  
 This library is agnostic to the source of the OAuth2 token. There are many methods of generating valid OAuth2 tokens in Apps Script such as [OAuth2](https://github.com/googlesamples/apps-script-oauth2),[GSApp](https://github.com/Spencer-Easton/Apps-Script-GSApp-Library), and [EzyOAuth2](http://ramblings.mcpher.com/Home/excelquirks/oauthtoo/ezyoauth2).  You will need to add the scope `https://www.googleapis.com/auth/blogger`.  
 
##### 3) Pass a token service to the library.  
Use the method `setTokenService()` to add your token service.  The function you pass is responsible for checking the freshness off the token and when called will return a valid OAuth2 token as a string. You can use the method `testTokenService()` to check if your token service is returning valid OAuth2 tokens.
Example with the OAuth2 library:  
  
      Blogger.setTokenService( function(){ return getBloggerService().getAccessToken(); });
   
   
### Making API Calls  

This library follows the API scheme for the Blogger API found at:  https://developers.google.com/blogger/docs/3.0/reference/index.  

Blogs.get(id,options)  
Blogs.getByUrl(url,options)  
Blogs.listByUser(userId,options)  
  
Comments.approve(blogId,postId,commentId,options)  
Comments.Delete(blogId,postId,commentId,options)  
Comments.get(blogId,postId,commentId,options)  
Comments.list(blogId,postId,options)  
Comments.listByBlog(blogId, options)  
Comments.markAsSpam(blogId,postId,commentId,options)  
Comments.removeContent(blogId,postId,commentId,options)  
  
PageViews.get(blogId,options)  
  
Pages.Delete(blogId,pageId)  
Pages.get(blogId,pageId,options)  
Pages.insert(blogId,pageResource,options)  
Pages.list(blogId,options)  
Pages.patch(blogId,pageId, pageResource,options)  
Pages.publish(blogId,pageId,options)  
Pages.revert(blogId,pageId,options)  
Pages.update(blogId,pageId, pageResource,options)  
  
PostUserInfos.get(userId,blogId,postId,options)  
PostUserInfos.list(userId,blogId,options)  
  
Posts.Delete(blogId,postId,options)  
Posts.get(blogId,postId,options)  
Posts.getByPath(blogId,options)  
Posts.insert(blogId,postResource)  
Posts.list(blogId,options)  
Posts.patch(blogId,postId,postResource)  
Posts.publish(blogId,postId,options)  
Posts.revert(blogId,postId,options)  
Posts.search(blogId,query,options)  
Posts.update(blogId,postId,postResource, options)  
  
Users.get(userId,options)  
  
BlogUserInfos.get(userId,blogId,options)  
  
##### All calls have a final optional parameter for options.  
Optional paramters are passed as an object.  For example:  
`Blogger.Comments.list(blogId,postId,{maxResults:10,fetchBodies:false});`  
You can find the optional parameters for each API method in the Blogger API reference documentation.  
  
#### Examples  
The examples below assume you setup the library with the Blogger namespace.  

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
       var blogs = Blogger.Blogs.get("3522258539685557047");
       Logger.log(blogs)
    }
  
  
    function getPosts(){
      Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
      var posts = Blogger.Posts.list("3522858539625557047");
      Logger.log(posts); 
    }

    function getComments(){
       Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
       var comments = Blogger.Comments.list("3522258539628557047","3589827940831102827");
       Logger.log(comments)
    }

    function getPostUserInfos(){
      Blogger.setTokenService(function(){ return getBloggerService().getAccessToken()});
      var info = Blogger.PostUserInfos.list("g115384627259502138986","3522258589625557047");
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

