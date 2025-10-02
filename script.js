document.addEventListener("DOMContentLoaded", function() { // The all mighty holy grail

  // Favicon + Title Swap because funny
  const favicon = document.getElementById("favicon");
  const activeFavicon = "assets/favicon-active.png";
  const awayFavicon = "assets/favicon-away.png";

  const originalTitle = document.title;
  const awayTitle = "Get back here!";

  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      favicon.href = awayFavicon + "?v=" + new Date().getTime(); // cache-busting
      document.title = awayTitle;
    } else {
      favicon.href = activeFavicon + "?v=" + new Date().getTime(); // cache-busting
      document.title = originalTitle;
    }
  });

  // Mobile Menu Toggle so that I can finally view my site on my phone
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // Pretty Fricking cool Particle Background that somehow works
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let mouse = { x: undefined, y: undefined, radius: 120 };

  // Resize canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // Track mouse position
  window.addEventListener("mousemove", function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Particle constructor
  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;

    this.update = function() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

      if (mouse.x !== undefined && mouse.y !== undefined) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          this.x += dx / dist * 2;
          this.y += dy / dist * 2;
        }
      }
    }

    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "#00ffcc";
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    let numParticles = Math.floor(canvas.width * canvas.height / 15000);
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p, i) {
      p.update();
      p.draw();

      for (let j = i; j < particles.length; j++) {
        let dx = p.x - particles[j].x;
        let dy = p.y - particles[j].y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(0,255,204,0.1)";
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

});
