# **Mapping Ivan Allen's Atlanta**
Atlanta is one of the fastest growing cities in the United States, but the rapid development has come at the cost of many of Atlanta's most storied civil rights landmarks. Our project intends to create an easy-to-navigate digital archive of civil rights era Atlanta. Users can view historic landmarks via our curated tour, or simply explore the archive on their own.
# Release Notes

## Version 0.3.0

### New Features
 * Users can now bookmark sites for quick access later
 * Users can now swipe open a navigation drawer to access their bookmarked sites / change view modes
 
### Bug Fixes
 * Fixed TouchableOpacity Components not functioning properly when placed inside nested navigator
 * Fixed improper resizing on older iPhones, causing buttons to be cut off the screen
 
### Known Issues
 * Async-Storage not being utilized correctly, causing site screens to forget they were bookmarked when returning to them in the stack
 * Navigation transitions stemming from button press became less smooth, seemingly out of nowhere. Nested Navigators probably have something to do with this

## Version 0.2.0

### New Features
 * Added & formatted Screens to view detailed site information
 * Added static images to site detail screen
 * Added scrolling text box to site detail screen
 * Reformatted code to place different screens in their own files, this will help with debugging in the future

### Bug Fixes
* Fixed issue where images would sometimes fail to load

### Known Issues
* When transitioning to site detail page from map screen, the image will sometimes stretch beyond the frame
   of the site screen, causing the animation to appear slightly choppy
* Bookmarking is a bit tricky, but we believe it can implemented in sprint 3 through the use of 
  async-storage and the React-Native Navigation-Drawer

## Version 0.1.0

### New Features
* Implemented React-Native Callouts into map markers
* Added Images into marker popups to preview site
* Prepared to implement navigation from marker popup to information screen

### Bug Fixes
* Fixed issue where Marker components could sometimes be inappropriately sized

### Known Issues
* **None as of now** ![Happy](https://ih1.redbubble.net/image.1759229733.7812/flat,128x,075,f-pad,128x128,f8f8f8.jpg)
>_but expecting this to change soon_
![Sadge](https://ih1.redbubble.net/image.1249935413.9251/flat,128x128,075,t-pad,128x128,f8f8f8.jpg)