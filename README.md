<h1  align='center'>
CourseCoach</h1> 
<p align='center'>
<img src='./images/logo.png' >
</p>
<h4 align='center'>
A mobile app built using React Native, which provides course contents to B.Tech students. 
</h4> 
<p align='center'><i align='center'>A way to conquere your course. </i></p>


## Get the app

Release versions of the app are available here:

* [CourseCoach for Android](https://play.google.com/store/apps/details?id=com.coursecoach.blog)
  on the Google Play Store

# Development

## Build and run the app

This guide describes how to build and run the app so you can develop it.

### Main steps

Before starting, install these dependencies if you don't have them:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/download/package-manager/), latest 8.x
  (LTS) version
* [Yarn](https://yarnpkg.com/en/docs/install), latest stable version

Then, run the commands below in your terminal:
```
git clone https://github.com/AdityHirapara/CourseCoach
cd CourseCoach
yarn install
```

To install the React Native tools, and either Xcode or the Android SDK
and Android Studio, follow the helpful instructions from React
Native upstream on
[Getting Started](https://facebook.github.io/react-native/docs/getting-started.html).
You want the tab "Building Projects with Native Code";
the "Quick Start" does not apply.

Continue those instructions until you can run the CourseCoach app
with either `react-native run-android` or `react-native run-ios`.
You'll want to be able to use both an emulator and a physical device; but
for starting out, just get either one working so you can play with the app.

### Android tips

* To set up the Android emulator, follow the heading "Using a virtual device"
  in those React Native
  [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
  instructions.
* After you set up the Android emulator, you no longer need Android
  Studio.  You can start the emulator [from the command
  line](https://developer.android.com/studio/run/emulator-commandline.html).
* When running on a physical device, if the device has CourseCoach installed
  from the Play Store, you may need to uninstall that version first.
* Commands once you've set up:
  * `react-native run-android` - build, then run on an active emulator
    or USB-connected device.  This won't start the emulator automatically.
