# Aliasify - A Local URL Shortener

A browser extension to create and manage personal go/ shortcuts for frequently used URLs.

## Core Functionality

This extension helps you replace long, hard-to-remember web addresses with simple, custom keywords. Instead of searching through bookmarks or browser history for a specific document or dashboard, you can create a shortcut like `go/q3-report` that directs you to the correct page.

The primary goal is to make navigating to your common web destinations faster and more efficient by using memorable shortcuts directly in the browser's address bar.

## Target Audience

This tool is for anyone who frequently accesses the same set of web pages and wants a more efficient way to navigate to them, such as developers, project managers, students, or anyone who works with multiple web applications daily.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 20+) and [Yarn](https://yarnpkg.com/) installed on your machine.

### Setup

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd aliasify
   ```

2. Install the dependencies:

   ```sh
   yarn install
   ```

## 🏗️ Development

To start the development build with file watching:

```sh
yarn dev
```

This will build the extension in development mode and watch for changes.

## 📦 Build

To create a production build:

```sh
yarn build
```

This will generate the build files in the `dist` directory.

## 📂 Load Extension in Chrome

1. Build the extension using `yarn build`
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle switch in the top right corner
4. Click "Load unpacked" and select the `dist` directory

Your Aliasify extension should now be loaded and ready to use!

## 🚀 Usage

TBD

## 🗂️ Project Structure

- `public/`: Contains static files, icons, and the `manifest.json`
- `src/`: Contains the React app source code for the popup interface
- `dist/`: Generated build files (created after running `yarn build`)
- `vite.config.ts`: Vite configuration optimized for Chrome extension development
- `tsconfig.json`: TypeScript configuration files
- `package.json`: Project dependencies and scripts

## Technology Stack

- **React 19** - Modern UI library for building the popup interface
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool optimized for modern web development
- **Chrome Extension Manifest V3** - Latest extension platform for security and performance
- **Local Storage API** - Browser storage for maintaining shortcuts locally

## Contributing

This project is built with modern web technologies and follows Chrome extension best practices. Contributions are welcome!

## License

Apache License 2.0
