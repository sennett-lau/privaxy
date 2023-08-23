# PrivaXy - Keep Your Conversations Private

## Description
PrivaXy, a Chrome extension designed to enhance your privacy when using Telegram on your browser. Privaxy auto-blurs your message app's icons and text, revealing them only when you hover over the specified area. Now, you can use Telegram without worrying about onlookers peeping into your conversations.

## Table of Contents

## File Structure
```
.
├── icons
│   └── 128.png
├── scripts
│   └── telegram.js
├── style
│   └── telegram.css
├── LICENSE.txt
├── README.md
└── manifest.json
```

## Installation
1. Clone the repository: `git clone https://github.com/yourusername/privaxy.git`
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" and click "Load unpacked."
4. Select the PrivaXy directory and click "Open."

## Implementation

### Features
- **Auto-Blur:** PrivaXy automatically blurs out your message content and contact's icon, ensuring privacy at all times.
- **Hover to Reveal:** Just hover your mouse over the message area, and everything becomes visible again.
- **Exclusively for Telegram:** Currently, Privaxy only supports [Telegram(`/k`)](https://web.telegram.org/k/). We're looking to expand support to other platforms soon.

### Usage
After installing PrivaXy, navigate to the Telegram Web client. Your messages and icons will be automatically blurred until you hover over them.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### General Steps

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License
This library is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file