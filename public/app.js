(() => {
  const app = {
    shareButton: document.querySelector('.btn'),
  };

  app.share = () => {
    if (window.FB) {
      FB.ui({
        method: 'share',
        href: 'https://fb-jssdk.naokie.net/',
        hashtag: '#firebase'
      }, (res) => {});
    }
  };

  app.shareButton.addEventListener('click', app.share);
})();
