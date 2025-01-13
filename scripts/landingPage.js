export const test = () => {
  console.log('hej');
};

function init() {
  menuOverlay = document.querySelector('.menu-overlay');

  gsap.to(menuOverlay, { x: width, opacity: 0 });

  /* Create eventlisteners */
  window.addEventListener('resize', updateScreenSize);
  window.addEventListener('scroll', changeNavColor);
  window.addEventListener('resize', removeClass);

  /* Calling functions */
  createEventListeners();
  removeClass();
  checkScreenSize();
  navAnimation();
}
