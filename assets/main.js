/* Filo — piccoli comportamenti del sito: luce, menu, checklist, modulo. */
(function () {
  var doc = document.documentElement;

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  /* La lampadina: accende e spegne la luce, e se lo ricorda. */
  var lamps = document.querySelectorAll('[data-lamp]');
  function paintLamp() {
    var dark = doc.classList.contains('is-dark');
    lamps.forEach(function (b) { b.setAttribute('aria-label', dark ? 'Accendi la luce' : 'Spegni la luce'); });
  }
  lamps.forEach(function (b) {
    b.addEventListener('click', function () {
      var dark = doc.classList.toggle('is-dark');
      store('filo-theme', dark ? 'dark' : 'light');
      paintLamp();
    });
  });
  paintLamp();

  /* Il menu sul telefono. */
  document.querySelectorAll('[data-menu]').forEach(function (b) {
    var nav = b.closest('.nav');
    b.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      b.textContent = open ? 'Chiudi' : 'Menu';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* Il test «Ti trovano?». */
  var boxes = document.querySelectorAll('[data-check]');
  if (boxes.length) {
    var progress = document.querySelector('[data-progress]');
    var saved = {};
    try { saved = JSON.parse(store('filo-test') || '{}'); } catch (e) { saved = {}; }
    function update() {
      var done = 0;
      boxes.forEach(function (b) { if (b.checked) done++; });
      var total = boxes.length;
      progress.textContent = done === total ? 'La tua insegna è accesa.' : (done === 0 ? 'Da cominciare' : 'Accese ' + done + ' su ' + total);
    }
    boxes.forEach(function (b) {
      b.checked = !!saved[b.dataset.check];
      b.addEventListener('change', function () {
        saved[b.dataset.check] = b.checked;
        store('filo-test', JSON.stringify(saved));
        update();
      });
    });
    var reset = document.querySelector('[data-reset]');
    if (reset) reset.addEventListener('click', function () {
      saved = {};
      store('filo-test', '{}');
      boxes.forEach(function (b) { b.checked = false; });
      update();
    });
    update();
  }

  /* Il modulo dei contatti (anteprima: non spedisce ancora nulla). */
  var chips = document.querySelectorAll('[data-topic]');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var on = c.getAttribute('aria-pressed') !== 'true';
      chips.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); o.classList.remove('on'); });
      if (on) { c.setAttribute('aria-pressed', 'true'); c.classList.add('on'); }
    });
  });
  var form = document.querySelector('[data-form]');
  var thanks = document.querySelector('[data-thanks]');
  var send = document.querySelector('[data-send]');
  var again = document.querySelector('[data-again]');
  if (send && form && thanks) send.addEventListener('click', function () { form.hidden = true; thanks.hidden = false; });
  if (again && form && thanks) again.addEventListener('click', function () { thanks.hidden = true; form.hidden = false; });
})();
