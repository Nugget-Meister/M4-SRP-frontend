import { redirect } from "react-router";

const redirect_uri = import.meta.env.VITE_GOOGLE_REDIRECT || import.meta.env.VITE_GOOGLE_REDIRECT_LOCAL
const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID

const oauthSignIn = () => {

    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);
  
    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {'client_id': client_id,
                  'redirect_uri': redirect_uri,
                  'response_type': 'token',
                  'scope': 'email',
                  'include_granted_scopes': 'true',
                  'state': 'pass-through value'};
  
    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }
  
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();

}





const onSignIn = (user) => {
    const profile = user.getBasicProfile();
    console.log(profile.getID())
    console.log(profile.getName())
    console.log(profile.getImageUrl())
    console.log(profile.getEmail())
}

export { oauthSignIn, onSignIn }