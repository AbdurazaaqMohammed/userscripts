#  userscripts
Userscripts developed by me

# Installation
Click on any script then click "Raw" (the links below are already raw links) and your userscript manager should open. If you are using Cromite you may have to save the userscript and load it in Settings.

##  [A2ZAPK Quick Download](https://github.com/fxolan/userscripts/raw/main/A2ZAPK-quick-download.user.js)
Redirect to download page when you click an app on A2ZAPK and starts the download, even if the anti-adblock message is showing.
Skips some delays along the way, but the download still has to load.
It does not block ads but should work with any adblocker including via hosts.

##  [FreeRice Multiplication Script](https://github.com/fxolan/userscripts/raw/main/freerice-auto-script.user.js)
Automatically play FreeRice multiplication table

##  [YouTube Download via SaveFrom](https://github.com/fxolan/userscripts/raw/main/yt-download-via-savefrom.user.js)
Adds buttons in userscript manager on YouTube videos to go to SaveFrom and get video or audio, and automatically selects and downloads the highest quality video/audio on SaveFrom links

##  [Remove file name from Apkadmin URLs](https://github.com/fxolan/userscripts/raw/main/remove-apkadmin-file-name.user.js)
 Removes unnecessary file name from Apkadmin URLs. This should be applicable to other websites too.

## [Format Play Store app info for Mobilism](https://github.com/fxolan/userscripts/raw/main/format-playstore-info-for-mobilism.user.js)
Copy information of apps from Play Store and format it to post on Mobilism

## [Copy information of apps from F-Droid to post on Mobilism](https://github.com/fxolan/userscripts/raw/main/format-fdroid-app-info-for-mobilism.user.js)
Add a button to F-Droid app pages to copy information of apps from F-Droid and format it to post on Mobilism

## [GitHub - open closed issues if there are no open issues](https://github.com/fxolan/userscripts/raw/main/github-issues-fix.user.js)
Automatically opens closed issues if there are no open issues on GitHub issue pages.

## [Control GoComics with arrow key](https://github.com/fxolan/userscripts/raw/main/gocomics-key-controls.user.js)
Use arrow keys to go back and forth on comics on GoComics. You can add more keys or change them as you want. The documentation for key values can be found here: https://developer.mozilla.org/en-US/docs/web/api/ui_events/keyboard_event_key_values

# Playstore, F-Droid and Ezgif scripts
The following scripts are meant to be used together to convert images from the Play Store to PNGs and optionally upload them to Mobilism Images with one click.

##  [Link Images on F-Droid](https://github.com/fxolan/userscripts/raw/main/fdroid-open-img-on-click.user.js)
Open full page link of image in a new tab when clicked on F-Droid app pages

##  [Link Images on Playstore](https://github.com/fxolan/userscripts/raw/main/link-playstore-images.user.js)
Open full page link of image in a new tab when clicked on Google Play app pages

##  [Playstore Images to PNG](https://github.com/fxolan/userscripts/raw/main/playstore-images-to-png.user.js)
Redirect image links from Google Play to Ezgif WEBP to PNG converter. Meant to be used with the scripts below.

##  Ezgif [Auto Convert](https://github.com/fxolan/userscripts/raw/main/ezgif-auto-convert.user.js)
Automatically clicks the Convert button on Ezgif after you upload an image to convert.

##  [Upload image from Ezgif to Mobilism Images](https://github.com/fxolan/userscripts/raw/main/upload-img-to-mobilism.user.js)
Add a button to upload any direct image to Mobilism and copies the image link after converting it.

## [Ezgif open direct link after converting](https://github.com/fxolan/userscripts/raw/main/ezgif-open-direct-image-after-convert.user.js)
Open direct link to the image after converting on Ezgif

##  [Ezgif Quick Link Copy](https://github.com/fxolan/userscripts/raw/main/ezgif-quick-link-copy.user.js)
Adds a button to quickly copy the converted image link to ezgif

# Reddit scripts
Scripts designed to improve (Old) Reddit experience

## [Fix Old Reddit Image Links](https://github.com/fxolan/userscripts/raw/main/reddit/fix-old-reddit-images.user.js)
For some reason, Reddit decided to make i.redd.it and preview.redd.it images open a viewer in New Reddit when you click on them, despite them still being a direct image.
This uses a bunch of resources uselessly. Also, if you use a userscript to redirect all Reddit links to Old Reddit, it will break image links you click on because Reddit did not implement the image viewer in Old Reddit.

Solution: Since the image is still a direct image, we can just open the image link in any image viewer. So I just made a very simple website to display image from a link, put it on GitHub, and redirect redd.it images to it with this userscript.

## [Hide subreddit moderators box](https://github.com/fxolan/userscripts/raw/main/reddit/old-reddit-no-mods.user.js)

## [Hide online users](https://github.com/fxolan/userscripts/raw/main/reddit/old-reddit-no-online-users.user.js)
