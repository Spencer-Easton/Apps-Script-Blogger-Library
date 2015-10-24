self_.Users = function(){};
self_.Users.get = function(userId,optiuons){
  var path = buildUrl_("users/"+userId,options);
  var callOptions = {method:"GET"};
  var usersResource = CALL_(path,callOptions);
  return usersResource;
};
