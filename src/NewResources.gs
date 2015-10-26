self_.newPagesResource = function(){
  
  var newResource = {
    "kind": "blogger#page",
    "id": "",
    "status": "",
    "blog": {
      "id": ""
    },
    "published": "",
    "updated": "",
    "url": "",
    "selfLink": "",
    "title": "",
    "content": "",
    "author": {
      "id": "",
      "displayName": "",
      "url": "",
      "image": {
        "url": ""
      }
    }
  }
  return newResource;
};




self_.newPostsResource = function(){
  var newResource = {
    "kind": "blogger#post",
    "id": "",
    "blog": {
      "id": ""
    },
    "published": "",
    "updated": "",
    "url": "",
    "selfLink": "",
    "title": "",
    "titleLink": "",
    "content": "",
    "images": [
      {
        "url": ""
      }
    ],
    "customMetaData": "",
    "author": {
      "id": "",
      "displayName": "",
      "url": "",
      "image": {
        "url": ""
      }
    },
    "replies": {
      "totalItems": "",
      "selfLink": "",
      "items": []
    },
    "labels": [],
    "location": {
      "name": "",
      "lat": "",
      "lng": "",
      "span": ""
    },
    "status": ""
  }
  
  return newResource
};
