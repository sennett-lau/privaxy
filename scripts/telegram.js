const blurOverlay = document.createElement("div")
blurOverlay.classList.add("blur-overlay")

const commonBlurOverlay = blurOverlay.cloneNode(true)
commonBlurOverlay.classList.add("common-blur-overlay")

const messageBlurOverlay = blurOverlay.cloneNode(true)
messageBlurOverlay.classList.add("message-blur-overlay")

const mediaAttachmentBlurOverlay = blurOverlay.cloneNode(true)
mediaAttachmentBlurOverlay.classList.add("media-attachment-blur-overlay")

const addChatBoxBlurOverlay = () => {
  const blurOverlayClass = '.common-blur-overlay'

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
        targets[j].appendChild(commonBlurOverlay.cloneNode(true))
      }
    }
  }
}

const inChatBlurOverlay = () => {
  const chatSection = document.querySelector(".chat.tabs-tab.active")

  if (chatSection) {
    const replies = chatSection.querySelectorAll(".reply")

    for (var i = 0; i < replies.length; i++) {
      const hasBlurOverlay = replies[i].querySelector(".common-blur-overlay")

      if (!hasBlurOverlay) {
        replies[i].appendChild(commonBlurOverlay.cloneNode(true));
      }
    }
    
    const chatTitle = chatSection.querySelectorAll(".bubble-content .peer-title")

    if (chatTitle) {
      for (let i = 0; i < chatTitle.length; i++) {
        const hasBlurOverlay = chatTitle[i].querySelector(".common-blur-overlay")

        if (!hasBlurOverlay) {
          chatTitle[i].appendChild(commonBlurOverlay.cloneNode(true));
          chatTitle[i].style.position = "relative"
        }
      }
    }

    const message = chatSection.querySelectorAll(".message")

    for (let i = 0; i < message.length; i++) {
      const hasBlurOverlay = message[i].querySelector(".message-blur-overlay")

      if (!hasBlurOverlay) {
        message[i].appendChild(messageBlurOverlay.cloneNode(true))
      }
    }

    const mediaAttachments = chatSection.querySelectorAll(".attachment.media-sticker-wrapper")

    for (let i = 0; i < mediaAttachments.length; i++) {
      const hasBlurOverlay = mediaAttachments[i].querySelector(".media-attachment-blur-overlay")

      if (!hasBlurOverlay) {
        mediaAttachments[i].appendChild(mediaAttachmentBlurOverlay.cloneNode(true))
      }
    }
  }
}

const chatInfoBlurOverlay = () => {
  const targets = [
    document.querySelector(".pinned-container-wrapper"),
    document.querySelector(".person .user-title .peer-title")
  ]

  for (let i = 0; i < targets.length; i++) {
    if (targets[i] === null || targets[i] === undefined) continue

    const hasBlurOverlay = targets[i].querySelector(".common-blur-overlay")

    if (!hasBlurOverlay) {
      targets[i].appendChild(commonBlurOverlay.cloneNode(true))
      targets[i].style.position = "relative"
    }
  }
}

setInterval(() => {
  addChatBoxBlurOverlay()
  inChatBlurOverlay()
  chatInfoBlurOverlay()
}, 200)