  const stones = [
    { name: "Ngọc Bích", color: "radial-gradient(circle at 32% 28%, #9FB6A9, #4B6358 70%)", meaning: "Tượng trưng cho sự cân bằng và bình an — được ưa chuộng trong trang sức phong thủy lâu đời.", tags: ["Xanh lục","Độ cứng 6–7","Bình an"] },
    { name: "Thạch Anh Hồng", color: "radial-gradient(circle at 32% 28%, #E7C9C9, #B98686 70%)", meaning: "Gắn liền với tình yêu thương và sự dịu dàng, thường dùng làm quà tặng ý nghĩa.", tags: ["Hồng nhạt","Độ cứng 7","Yêu thương"] },
    { name: "Mắt Hổ", color: "radial-gradient(circle at 32% 28%, #E7DCC9, #C9B48A 70%)", meaning: "Vân đá đặc trưng ánh vàng nâu, được tin là mang lại sự tự tin và quyết đoán.", tags: ["Vàng nâu","Độ cứng 7","Tự tin"] },
    { name: "Lapis Lazuli", color: "radial-gradient(circle at 32% 28%, #C9D3E7, #7B8FB0 70%)", meaning: "Sắc xanh lam đậm điểm ánh vàng, gắn với trí tuệ và sự minh mẫn.", tags: ["Xanh lam","Độ cứng 5–6","Trí tuệ"] },
    { name: "Thạch Anh Vàng", color: "radial-gradient(circle at 32% 28%, #DCD7C8, #A6997A 70%)", meaning: "Được xem là viên đá của sự thịnh vượng, mang năng lượng ấm áp, tích cực.", tags: ["Vàng nhạt","Độ cứng 7","Thịnh vượng"] },
    { name: "Thạch Anh Tím", color: "radial-gradient(circle at 32% 28%, #E7D3E3, #B08AA6 70%)", meaning: "Sắc tím thanh nhã, gắn liền với sự tĩnh tâm và trực giác.", tags: ["Tím nhạt","Độ cứng 7","Tĩnh tâm"] },
    { name: "Aquamarine", color: "radial-gradient(circle at 32% 28%, #C9E4E7, #6FA3AA 70%)", meaning: "Màu xanh biển trong trẻo, tượng trưng cho sự bình tĩnh và can đảm.", tags: ["Xanh biển","Độ cứng 7.5–8","Bình tĩnh"] },
    { name: "Garnet Đỏ", color: "radial-gradient(circle at 32% 28%, #E7C9CE, #8A4A54 70%)", meaning: "Sắc đỏ sẫm cổ điển, gắn với năng lượng và sức sống mạnh mẽ.", tags: ["Đỏ sẫm","Độ cứng 6.5–7.5","Sức sống"] }
  ];

  const swatchList = document.getElementById('swatchList');
  const previewStone = document.getElementById('previewStone');
  const previewName = document.getElementById('previewName');
  const previewMeaning = document.getElementById('previewMeaning');
  const previewTags = document.getElementById('previewTags');
  const stoneSelect = document.getElementById('stone');

  function renderPreview(stone){
    previewStone.style.background = stone.color;
    previewName.textContent = stone.name;
    previewMeaning.textContent = stone.meaning;
    previewTags.innerHTML = stone.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }

  stones.forEach((stone, i) => {
    const el = document.createElement('div');
    el.className = 'swatch' + (i === 0 ? ' active' : '');
    el.style.background = stone.color;
    el.setAttribute('role','button');
    el.setAttribute('tabindex','0');
    el.setAttribute('aria-label', 'Chọn đá ' + stone.name);
    el.addEventListener('click', () => selectStone(i, el));
    el.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectStone(i, el); } });
    swatchList.appendChild(el);
  });

  function selectStone(i, el){
    document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    renderPreview(stones[i]);
    if (stoneSelect.options[i]) stoneSelect.selectedIndex = i < stoneSelect.options.length ? i : stoneSelect.options.length - 1;
  }

  renderPreview(stones[0]);

  document.getElementById('orderForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formSuccess').classList.add('show');
    this.reset();
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
