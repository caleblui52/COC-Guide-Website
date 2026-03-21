function renderSiteNav(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = `
    <nav>
      <input type="checkbox" id="nav-toggle">
      <div class="logo"><strong>COC TRPG</strong></div>
      <ul class="links">
        <li><a href="../index.html">Home</a></li>
        <li class="dropdown">
          <div class="rules-parent">Rules</div>
          <ul class="submenu">
            <li><a href="Basic.html">Basic</a></li>
            <li><a href="Investigator.html">Investigator</a></li>
            <li><a href="Sanity.html">Sanity</a></li>
            <li><a href="Combat.html">Combat</a></li>
          </ul>
        </li>
        <li><a href="Monster.html">Monster</a></li>
        <li><a href="Useful.html">Useful Link</a></li>
        <li><a href="Contact.html">Contact us</a></li>
      </ul>
      <label for="nav-toggle" class="icon-burger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </nav>
  `;
}

function initSectionReveal(selector) {
  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  items.forEach(function (el) {
    observer.observe(el);
    el.style.visibility = "visible";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSiteNav("site-nav");
});

window.initSectionReveal = initSectionReveal;
