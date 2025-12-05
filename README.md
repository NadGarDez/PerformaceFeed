# 🚀 High Performance Feed App

Hi everyone, my name is Iranad. This is a demonstration project implementing a high-performance social media feed built with the Expo framework.

The primary goal of this interpretation is to achieve a performant user experience by implementing rigorous memory and CPU optimization, especially when handling embedded video content.

The application is fully supported on Android and iOS operating systems, provided the proper development environment is established.

## ✨ Features

- **Optimized Rendering**: Utilizes FlashList for efficient handling of large, dynamically rendered lists.
- **Intelligent Video Management**: Implements a sophisticated state machine to control video loading and playback, minimizing resource consumption.
- **Cross-Platform Support**: Seamless compatibility with both Android and iOS devices.

## 🎨 Design and User Interface

The design closely follows modern social media platforms, featuring expected elements such as avatars, stories, descriptions, and posts.

The overall aesthetic aims for warmth and simplicity, employing a layout and color palette reminiscent of classic Instagram versions from the early 2010s.

> **Implementation Note**: This project focuses purely on demonstrating frontend performance. Therefore, it uses static, mock data and all button callbacks are void functions.

## 🧠 The Performance Approach

Superior performance is achieved through two core engineering principles: leveraging FlashList and implementing a complex state machine for media resource management.

### 1. Dynamic Rendering with FlashList

Every feed item is rendered dynamically using FlashList, a high-performance alternative to React Native's FlatList, which is crucial for handling infinite feeds rich in multimedia content.

Each post renders user information, a description, and a video carousel.

### 2. Video and Post State Machine

The loading and playback of videos are governed by a strict set of rules to minimize memory usage and buffer outside the user's view.

#### A. Video Statuses

Every video within a post can exist in one of three states:

| Status    | Description                                                                 | Resource Consumption                                 |
|-----------|-----------------------------------------------------------------------------|------------------------------------------------------|
| Active    | Currently playing.                                                          | High (Playback and network bandwidth).               |
| Prepared  | Paused, but buffering or ready for instant playback has begun.             | Moderate (Preloading for smooth transition).         |
| Unmount   | Completely paused and un-buffered.                                          | Minimum (Resource released).                         |

#### B. Post States (Proximity Tags)

To coordinate video statuses, each post is tagged with a state (0, 1, 2) based on its proximity to the center of the screen:

| Tag | State Name      | Description                                          |
|-----|-----------------|------------------------------------------------------|
| 0   | Focused Post    | The post currently visible and centered in the viewport. |
| 1   | Adjacent Post   | The posts immediately before or after the focused post. |
| 2   | The Rest        | All other posts far from the immediate focus.        |

### 🔑 The Core Optimization Logic

The availability of video statuses is strictly constrained by the state of its parent post. This constraint is the secret to high performance:

| Post State | Allowed Video Statuses        | Performance Implication                                      |
|------------|-------------------------------|-------------------------------------------------------------|
| 0 (Focused) | `['active', 'prepared', 'unmount']` | Playback enabled. The visible video can become active.      |
| 1 (Adjacent) | `['prepared', 'unmount']`     | Preloading enabled. The first video in adjacent posts can be prepared for zero-latency scrolling. |
| 2 (The Rest) | `['unmount']`                 | Resources released. All far-off videos are kept inactive.   |

**Resulting Playback Rules:**
- Only the video within the focused post (State 0) can be **Active** (playing).
- Adjacent videos (State 1) are allowed to be **Prepared** (pre-buffered).
- All other videos default to **Unmount**.

## 🛠️ Installation and Setup

Follow these steps to get the project running on your local machine.

### Prerequisites

Ensure you have the following installed:
- Node.js (v18 or higher recommended)
- Expo CLI
- iOS Development: Xcode (macOS only) for iOS builds
- Android Development: Android Studio and Android SDK for Android builds
- An Android/iOS emulator/simulator or a physical device.

### ⚠️ Important Development Note

**This project uses custom fonts and/or libraries that require native compilation. Therefore, it cannot run in the Expo Go app.** You must build the app using the Expo Development Build or EAS Build.

### Setup Options

#### Option 1: Development Build (Recommended for Local Development)
Run the following commands based on your target platform:

**For iOS:**
npx expo run:ios


**For iOS:**
npx expo run:android

### Option 2: EAS Build (For Testing on Physical Devices)

https://docs.expo.dev/build/introduction/