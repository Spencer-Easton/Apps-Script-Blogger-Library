function doGet(){
 return showAuthWindow();
}


function getBloggerService() { 
  return OAuth2.createService('drive')
      .setAuthorizationBaseUrl('https://accounts.google.com/o/oauth2/auth')
      .setTokenUrl('https://accounts.google.com/o/oauth2/token')
      .setClientId(PropertiesService.getScriptProperties().getProperty("clientId"))
      .setClientSecret(PropertiesService.getScriptProperties().getProperty("clientSecret"))
      .setCallbackFunction('authCallback')
      .setPropertyStore(PropertiesService.getUserProperties())
      .setScope('https://www.googleapis.com/auth/blogger')
      .setParam('login_hint', Session.getActiveUser().getEmail())
      .setParam('access_type', 'offline')
      .setParam('approval_prompt', 'force');
}

function showAuthWindow() {
  var bloggerService = getBloggerService();
  if (!bloggerService.hasAccess()) {
    var authorizationUrl = bloggerService.getAuthorizationUrl();
    var template = HtmlService.createTemplate(
        '<a href="<?= authorizationUrl ?>" target="_blank">Authorize access to Blogger</a>.');
    template.authorizationUrl = authorizationUrl;
    var page = template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
    return page
  } else {
    return HtmlService.createHtmlOutput("You have already granted access to your Blogger Sites").setSandboxMode(HtmlService.SandboxMode.IFRAME)
  }
}


function authCallback(request) {
  var bloggerService = getBloggerService();
  var isAuthorized = bloggerService.handleCallback(request);
  if (isAuthorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab');
  }
}
