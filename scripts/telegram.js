const blurOverlay = document.createElement("div")
blurOverlay.classList.add("blur-overlay")

const chatBoxBlurOverlay = blurOverlay.cloneNode(true)
chatBoxBlurOverlay.classList.add("chat-box-blur-overlay")

const addChatBoxBlurOverlay = () => {
  const blurOverlayClass = '.chat-box-blur-overlay'

  const chatElements = document.querySelectorAll(".chatlist-chat")

  console.log(chatElements.length)

  for (let i = 0; i < chatElements.length; i++) {
    const targets = [
      chatElements[i].querySelector(".dialog-title .peer-title"),
      chatElements[i].querySelector(".dialog-subtitle .row-subtitle"),
      chatElements[i].querySelector(".dialog-title-details .peer-detail"),
    ]

    for(let j = 0; j < targets.length; j++) {
      if (targets[j] === null || targets[j] === undefined) continue

      const hasBlurOverlay = targets[j].querySelector(blurOverlayClass)

      if (!hasBlurOverlay) {
        targets[j].appendChild(chatBoxBlurOverlay.cloneNode(true))
      }
    }
  }
}

setInterval(() => {
  addChatBoxBlurOverlay()
}, 200)