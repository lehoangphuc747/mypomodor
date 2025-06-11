# 🍅 Pomodoro Timer App

A modern, offline-first Pomodoro timer application built with React 18 and Material-UI v5.

## ✨ Features

- **🎯 Focus Sessions**: 25-minute work sessions with customizable durations
- **☕ Break Management**: Short (5min) and long (20min) breaks  
- **🔄 Round Tracking**: Complete cycles with automatic progression
- **🏷️ Session Labels**: Organize your work with custom labels
- **📊 Statistics**: Track your productivity over time
- **🌙 Dark Mode**: Beautiful dark and light themes
- **🔔 Notifications**: Get notified when sessions complete
- **💾 Local Storage**: All data saved locally, no account required
- **📱 Responsive**: Works on desktop, tablet, and mobile
- **⚡ Offline Ready**: Progressive Web App that works offline

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mypomodor.git
cd mypomodor
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## 🛠️ Recent Updates

This project has been modernized with the following updates:

### Dependencies Updated
- ⬆️ **React 16 → 18**: Latest React with improved performance
- ⬆️ **Material-UI v4 → MUI v5**: Modern design system
- ⬆️ **React Scripts 3 → 5**: Latest build tools
- ⬆️ **Chart.js 2 → 4**: Updated charting library
- ⬆️ **Redux Toolkit**: Modern Redux patterns
- ⬆️ **React Router v6**: Latest routing

### Architecture Changes
- 🔥 **Removed Firebase**: No more external dependencies
- 💾 **Local Storage**: All data stored locally
- 🎯 **Simplified Auth**: No authentication required
- ⚡ **Better Performance**: Faster loading and response
- 🧹 **Code Cleanup**: Removed deprecated patterns

### Developer Experience
- ✅ **Modern Testing**: Updated to React Testing Library
- 🎨 **Better Linting**: Updated ESLint and Prettier
- 📦 **Simplified Build**: Cleaner build process
- 🔧 **TypeScript Ready**: Type definitions included

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── scenes/             # Main application screens
│   ├── Timer/          # Pomodoro timer interface
│   ├── Settings/       # App configuration
│   └── Stats/          # Statistics and charts
├── data/               # Redux state management
│   ├── auth/           # User authentication
│   ├── settings/       # App settings
│   ├── labels/         # Session labels
│   └── sessions/       # Session history
├── storage/            # Local storage utilities
└── layout/             # Layout components
```

## 🎨 Customization

### Timer Settings
- Work duration (default: 25 minutes)
- Short break (default: 5 minutes)  
- Long break (default: 20 minutes)
- Rounds per cycle (default: 4)

### Display Options
- Dark/light theme toggle
- Timer in browser title
- Desktop notifications
- Auto-start next session

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Based on the Pomodoro Technique by Francesco Cirillo
- Material Design components by Google
- React community for amazing tools and libraries

---

**Happy focusing! 🎯**
