// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBa0nE6NxMXyBDwzG-a4VFK3AVRnl-ueHU",
    authDomain: "votounimet.firebaseapp.com",
    databaseURL: "https://votounimet.firebaseio.com",
    projectId: "votounimet",
    storageBucket: "votounimet.appspot.com",
    messagingSenderId: "601104183423"
  }
};
