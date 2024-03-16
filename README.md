# `getUserMedia()`

Testing `getUserMedia` with `pushState`.

# Issue Reproduced in Safari iOS 17.4

**Description**:
When utilizing [MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) to display a webcam stream and [History.pushState()](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) for navigation, the connection to the webcam appears to be lost upon call to `history.pushState()`. When the stream is displayed as a `video` element via `srcObject`, at the point of `pushState()` call, video displays a black background only. Also noteworthy is that the browser indicator of the webcam connection changes despite `stream.active` remaining `true` and all other properties of `MediaStream` instance remaining unchanged.

**Noteworthy points**:

- The issue is not reproducible in Safari 17.4 on desktop (macOS).
- It's not clear what specific change could potentially cause this issue, based on the [release notes](https://developer.apple.com/documentation/safari-release-notes/safari-17_4-release-notes), and if the issue is instead intended.
- It's not clear if this issue is specific to Safari or from Webkit.

**Screen recording**:
