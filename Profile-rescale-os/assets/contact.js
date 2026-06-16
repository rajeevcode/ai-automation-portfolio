(function applySiteContact() {
  const site = window.SITE;
  if (!site) return;

  document.querySelectorAll("[data-contact='email']").forEach((el) => {
    el.href = "mailto:" + site.email;
    if (el.dataset.label !== "false") el.textContent = site.email;
  });

  document.querySelectorAll("[data-contact='email-label']").forEach((el) => {
    el.textContent = site.email;
  });

  document.querySelectorAll("[data-contact='linkedin']").forEach((el) => {
    if (site.linkedin) {
      el.href = site.linkedin;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  document.querySelectorAll("[data-contact='github']").forEach((el) => {
    if (site.github) {
      el.href = site.github;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  document.querySelectorAll("[data-contact='portfolio']").forEach((el) => {
    if (site.portfolio) {
      el.href = site.portfolio;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  document.querySelectorAll("[data-contact='roles']").forEach((el) => {
    if (!site.roles?.length) return;
    el.innerHTML = site.roles
      .map((role) => '<span class="role-tag">' + role + "</span>")
      .join("");
  });
})();
