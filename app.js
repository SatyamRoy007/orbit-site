const cursor = document.querySelector('.cursor');
document.addEventListener('pointermove', (event) => { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; });
document.querySelectorAll('a, button').forEach((element) => {
  element.addEventListener('mouseenter', () => { cursor.style.width = '38px'; cursor.style.height = '38px'; });
  element.addEventListener('mouseleave', () => { cursor.style.width = '14px'; cursor.style.height = '14px'; });
});

const formatUtc = () => { document.querySelector('#clock').textContent = `${new Date().toUTCString().slice(17, 25)} UTC`; };
formatUtc(); setInterval(formatUtc, 1000);

const drift = () => {
  document.querySelector('#uptime').textContent = (99.96 + Math.random() * .03).toFixed(2);
  document.querySelector('#velocity').textContent = (7.64 + Math.random() * .08).toFixed(2);
  document.querySelector('#mission-count').textContent = String(44 + Math.floor(Math.random() * 5)).padStart(3, '0');
};
drift(); setInterval(drift, 3500);

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('in-view');
}), { threshold: .15 });
document.querySelectorAll('.capability, .project, .intro-statement, .film-type').forEach((element) => observer.observe(element));

const videoObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  const video = entry.target;
  if (video.dataset.failed) return;
  if (entry.isIntersecting) video.play().catch(() => {});
  else video.pause();
}), { rootMargin: '180px 0px' });

document.querySelectorAll('.motion-video').forEach((video) => {
  video.poster = 'assets/security-core.png';
  video.addEventListener('error', () => {
    video.dataset.failed = 'true';
    video.closest('.atlas-item')?.classList.add('media-fallback');
  });
  videoObserver.observe(video);
});

const securityImage = document.querySelector('.security-figure img');
const showSecurityFallback = () => securityImage?.closest('.security-figure')?.classList.add('media-fallback');
securityImage?.addEventListener('error', showSecurityFallback);
if (securityImage?.complete && !securityImage.naturalWidth) showSecurityFallback();
