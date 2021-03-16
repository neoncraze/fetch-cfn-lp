# Fetch CFN LP
## Description
Parses CFN and gets the LP of the desired input profile. Creates a secondary window, which you can then use with a window capture source to display your LP live on your stream overlay.

Some understanding of Javascript/CSS necessary for further configuring of the look of the overlay.

## Set up
Several variables need to be set before this could be used. 
- `profileURL` should be the URL of the desired CFN profle. For example, `https://game.capcom.com/cfn/sfv/profile/randomPlayerName`
- `pollingInterval` is the number of seconds between trying to pull data from CFN.

### Styling
If you'd like to change the styling of the text, you can modify the CSS 

## Usage
**Make sure you are logged in and able to browse CFN.**
1. From any `http://game.capcom.com/cfn/sfv` webpage, open your browser developer console. (e.g. `ctrl+shift+i` on Chrome in Windows)
2. Copy paste the contents of `fetch-lp.js` into the console and make sure you change the variables following the **Set up** section.
3. A window should pop up. Use that as your window source in OBS. Crop accordingly!

## To-dos:
- Script that logs the LP that you're starting from, and displays the delta(+/-) of the current session.