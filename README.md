## Members:

- Larry Langman: https://github.com/Larry-Langman
- Rahat Hossan: https://github.com/rahathossan
- Daniel Banifatemi: https://github.com/danikban
- Whitney Danksworth: https://github.com/dwdankworth
- Varun Bhardwaj: https://github.com/vb1262
- Karan Tibriwal: https://github.com/techsupport-2006

## How to run:

You will need to install expo using either **npm install expo** or **yarn add expo**, and to test iOS/android download the respective app: https://expo.io/tools

Navigate to the front-end directory, and type **expo start**

This will launch a web page with a QR code that is scannable by an iPhone/android camera to launch the demo in the expo app, and it can also be used to access the web version demo.

## About CopyPasta:

Currently, users are unable to transfer clipboard data across multiple OS’s and devices. The workaround many individuals currently use is either emailing or messaging themselves with the content they want to transfer between platforms. Our idea is a cross-platform shared clipboard across all devices and ecosystems, similar to handoff within iOS.

This software is designed for user’s who work with multiple OSs and are unable to transfer clipboard data. This includes iPhone users who have Windows OS running on their computer or Android users that have a Mac. Clearly, this is a mass consumer need for anyone using devices with an assortment of OSs. A stretch goal of Windows integration will also enable a seamless cross-platform experience for business users who often use iPhones and Windows devices in tandem.

Clipboards already exist within platforms/ecosystems across devices. For example, it is a built-in function within Windows devices and is available in IOS. Since our project would be an extension of the existing software we believe the connection of these clipboards should be manageable. Additionally, connecting IOS & Android (Windows/Chrome app if time allows) seems an achievable goal since it is straightforward enough to complete yet generalized enough that we have room to expand the project given more time. Additionally, a GUI will be created for each platform we expand to, hence the need for this incremental approach.

## How it came to be:

CopyPasta is the brainchild of our group trying to create a group chat. Initially, the six of us tried to create an iMessage group chat to communicate for this class, but quickly realized that not all of us were on the same platforms, rendering iMessage moot. That miscommunication spurred an hour long debate on the benefits of being integrated within the same operating system. One argument in favour of Apple’s OS was the use of Handoff, Apple’s build-in tool to continue tasks irrespective of the device you are currently using.

Realizing that Android and Windows users were inherently disadvantaged, CopyPasta began to form. CopyPasta serves as a cross-platform shared clipboard across all devices and ecosystems. This software is designed for user’s who work with multiple OSs and are unable to transfer clipboard data. The application is initially targeted to individuals using iPhones, but not MacOS; however, the plan is to expand to encompass all operating systems. Currently, almost half of the world population uses a smartphone and about one third have laptops, but not every runs the same OS. CopyPasta is designed to address this niche and allow people to exchange information without being restricted by the operating system they are running.

## Instructions:

A user has both an android device and an iOS device. The user copies a phone number from the android device, that text data is sent to Firebase Cloud Messaging and updates a queue of all previous copied text. That text can then be pasted on the iOS device. For future iterations, we want to allow for cross OS clipboard functionality within desktop apps for Mac and Windows as well.

## How to contribute:

- https://github.com/agile-dev-assignments/project-setup-pinheiro-encompassing/blob/master/CONTRIBUTING.md

## Links:

- https://stackoverflow.com/questions/54728263/react-native-listener-for-change-in-clipboard
- https://altcopy.net/#howto

## KT - Unit Testing:
For unit testing (sprint 2), I tested the googleAsync function, isUserEqual, storeData, onSignIn, and the mobile sign in process. The way I did this was automatically signing in a list of 5 google accounts, and seeing if the process logged. I also set up a small bit of code to test if the functions were pulling the appropriate information. For example, in the sign in function, was it pulling the profile name from google? Did it log it properly? I also ran manual tests by placing "HERE" statements (which are commented out). I manually tested all the functions and once I confirmed they were working as intended, I pushed the code. 

## Continuous Integration Attempt

Refer to the .travis.yml file in the main repository. I created this file, attempted to commit and create a pull request to trigger a Travis CI build. I even contacted the travis CI community forum team and they gave some hints that I need to format the .yml file specifically for our use of expo to run our application. Since I could not format the .yml properly, travis CI never triggered a build or even recognized a pull request. A lot of this testing was done here, a lot of it was done in a fork of this repo on my own account.
