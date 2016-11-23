# dash to ifttt

Script to listen for dash button clicks and fire an IFTTT event to the Maker recipe.

## Usage

Copy `config.json.default` to `config.json` and put in your ARP details.

Get the ARP address of dash button(s) using the `node-dash-button` tool called `findbutton` in `node_modules/node-dash-button/bin`. Give them an eventid to use on IFTTT.

Configure IFTTT with the Maker recipe to do something fun when the eventid is received by the webhook.

Run as root so it can listen to ARPs, e.g.:

    sudo node dash.js

Leave running on a raspberry pi or something connected to your local wifi.


## Dash button setup

Google for more info, but basically deactivate the button and then re-setup the button so that it has Wifi but don't select a product to buy. You can turn off dash notifications in the app to stop the "complete setup" push notification that the app likes to send.



