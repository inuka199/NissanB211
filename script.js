var t1 = gsap.timeline();

t1.from(".logo h2,.nav-links ul,.navbuttons", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.5,
});

t1.from(".image img", {
  x: -50,
  duration: 0.4,
  opacity: 0,
  blur: 1,
  scale: 0.8,
});

t1.from(".content h2,.content h3", {
  y: 50,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

t1.from("bottom-content", {
  x: 100,
  duration: 0.8,
  opacity: 0,
  stagger: 0.5,
});

t1.from(".specification span", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.3,
});

// Add hover effects for buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

// Add hover effects for other elements
document
  .querySelectorAll(".header, .content, .mustang, .specification")
  .forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.opacity = "0.8";
    });
    element.addEventListener("mouseout", () => {
      element.style.opacity = "1";
    });
  });
