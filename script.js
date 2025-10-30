// small interactivity: copy email, show simple toast
(function () {
  function toast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.bottom = '20px';
    t.style.left = '50%';
    t.style.transform = 'translateX(-50%)';
    t.style.background = 'rgba(17,17,17,0.9)';
    t.style.color = '#fff';
    t.style.padding = '10px 16px';
    t.style.borderRadius = '999px';
    t.style.zIndex = 9999;
    t.style.fontSize = '14px';
    document.body.appendChild(t);
    setTimeout(()=> t.remove(), 2200);
  }

  const copyBtn = document.getElementById('copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('sahalmuhammedcn@gmail.com');
        toast('Email copied to clipboard');
      } catch (e) {
        toast('Unable to copy — please copy manually');
      }
    });
  }
})();
