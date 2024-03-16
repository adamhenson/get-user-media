async function createStream(event) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    event.target.disabled = true;
    const video = document.querySelector('video');
    video.srcObject = stream;
  } catch (error) {
    console.error(error);
  }
}

document
  .querySelector('#get-user-media')
  .addEventListener('click', createStream);

function pushState(event) {
  event.target.disabled = true;
  history.pushState({}, '', '#foo');
}

document.querySelector('#push-state').addEventListener('click', pushState);
