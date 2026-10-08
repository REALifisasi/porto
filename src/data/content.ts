export const site = {
  title: 'Rafi Nur Fattah — Game Designer Portfolio',
  description:
    'Portfolio Rafi Nur Fattah, Game Designer asal Pontianak. Juara 3 KMIPN 2026, pembuat prototipe playable dengan Ren\u2019Py.',
  cvUrl: 'https://drive.google.com/drive/folders/1so2V2Q4t0ee_xVmGJFikXnC4nMkuPOGT?usp=sharing',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Achievement', href: '#achievement' },
  { label: 'Project', href: '#project' },
  { label: 'Moments', href: '#moments' },
  { label: 'Skills', href: '#skills' },
  { label: 'Tools', href: '#tools' },
]

export const hero = {
  title: 'PORTOFOLIO',
  subtitle: 'Game Designer · Pontianak',
  stickers: ['GDD', 'Core Loop', 'Ren\u2019Py', 'Decision Matrix'],
  primaryCta: { label: 'Lihat Proyek', href: '#project' },
  secondaryCta: { label: 'Unduh CV', href: site.cvUrl },
}

export const about = {
  name: 'Rafi Nur Fattah',
  role: 'Game Designer · Mencari magang',
  bio: 'Halo, aku Rafi. Mahasiswa D3 Teknik Informatika di Politeknik Negeri Pontianak (IPK 3.75, perkiraan lulus 2027) yang fokus ke game design. Aku suka menyusun Game Design Document, merancang mekanik dan sistem keputusan pemain, lalu membuktikannya lewat purwarupa playable di Ren\u2019Py. Aku juga Juara 3 KMIPN bidang Pengembangan Aplikasi Permainan 2026 sebagai Ketua Tim dan Game Designer. Sekarang aku mencari kesempatan magang sebagai Game Designer.',
  photo: '/images/rafi-portrait.jpg',
  photoAlt: 'Foto portrait Rafi Nur Fattah',
  facts: ['Pontianak', 'D3 Teknik Informatika · Polnep', 'IPK 3.75', 'Lulus 2027'],
}

export const latestAchievement = {
  id: 'achievement',
  kicker: 'Latest Achievement',
  title: 'Juara 3 — KMIPN',
  subtitle: 'Bidang Pengembangan Aplikasi Permainan 2026',
  role: 'Ketua Tim & Game Designer · Kategori Inovasi Bisnis & Monetisasi Game',
  images: [
    { src: '', alt: 'Momen podium penerimaan Juara 3 KMIPN', caption: '[ISI: foto podium KMIPN]' },
    { src: '', alt: 'Foto tim saat presentasi KMIPN', caption: '[ISI: foto tim / presentasi]' },
    { src: '', alt: 'Screenshot purwarupa game atau halaman GDD KMIPN', caption: '[ISI: screenshot game / GDD]' },
  ],
  paragraph:
    'Memimpin tim dari ideasi sampai purwarupa game. Aku menyusun GDD yang mencakup mekanik permainan, alur cerita, serta strategi monetisasi dan inovasi bisnis, dan merancang serta memproduksi aset ilustrasi untuk kebutuhan visual game.',
  chips: ['Team Lead', 'GDD', 'Ilustrasi'],
}

export const otherAchievement = {
  kicker: 'Other Achievement',
  items: [
    {
      title: 'Peserta — Pontianak Hackathon x Gerakan Nasional 1000 Startup Digital 2024',
      role: 'UI/UX Designer & Konseptor',
      text: 'Menyusun wireframe dan purwarupa antarmuka aplikasi di Figma bersama tim dalam tenggat ketat.',
    },
    {
      title: 'Finalis — Astra Honda Best Student (AHMBS) 2022',
      role: 'Ketua Tim & Konseptor',
      text: 'Merumuskan konsep aplikasi promosi dan pelestarian pariwisata Pontianak, serta menyusun alur logika aplikasi bersama tim.',
    },
  ],
}

export const personalProject = {
  id: 'project',
  kicker: 'Personal Project',
  title: 'Aku Nak Jadi Fakboy',
  subtitle: 'Dating Sim & Time Management · Prototipe Playable (Ren\u2019Py)',
  imageAlt: 'Screenshot atau key art game Aku Nak Jadi Fakboy',
  paragraph:
    'Game satir bergenre dating sim dan time management. Pemain harus membagi perhatian ke 5–7 karakter sekaligus lewat chat ala WhatsApp, di bawah tekanan timer.',
  highlights: [
    {
      title: 'GDD terstruktur',
      text: 'Konsep satir, core loop 3 lapis, kalender kencan, laporan mingguan, ending bercabang.',
    },
    {
      title: 'Multi-chat + timer',
      text: '5–7 karakter, tiap chat punya timer respon, plus notebook memori.',
    },
    {
      title: 'Decision matrix',
      text: 'Setiap pilihan dialog memberi trade-off langsung pada cerita.',
    },
    {
      title: 'Prototipe playable',
      text: 'Mekanik multi-tasking chat di bawah timer, dibuat di Ren\u2019Py.',
    },
  ],
  chips: ['Ren\u2019Py', 'GDD', 'Core Loop', 'Branching Ending'],
  links: [] as { label: string; href: string }[],
}

export const honorableMoments = {
  id: 'moments',
  kicker: 'Brand & Visual Work',
  items: [
    { src: '/images/brand-kedcomp-2025.png', alt: 'Poster KEDCOMP 2025', caption: 'Branding KEDCOMP 2025', year: '2025' },
    { src: '/images/brand-bertemoe-feeds.png', alt: 'Feeds Instagram Grand Opening Bertemoe', caption: 'Identitas visual coffee shop Bertemoe', year: '2025' },
    { src: '/images/brand-elektro-tshirt.png', alt: 'Desain kaos Elektro', caption: 'Logo komunitas Elektro — sablon kaos', year: '2026' },
    { src: '/images/brand-pkm-cocopeat-polnep.png', alt: 'Logo PKM Cocopeat Polnep', caption: 'Logo PKM Cocopeat Polnep', year: '2024' },
  ],
}

export const skills = {
  id: 'skills',
  kicker: 'Skills',
  blocks: [
    {
      title: 'Game Design',
      text: 'GDD, core loop, mekanik dan sistem permainan, matriks keputusan, storyboard, prototyping.',
    },
    {
      title: 'UI/UX & Grafis',
      text: 'Wireframe dan purwarupa UI di Figma, desain identitas visual (logo, aset pendukung), ilustrasi aset game. Freelance graphic designer sejak 2024: identitas visual coffee shop, logo komunitas lokal, branding PKM Jurusan Teknik Informatika Polnep.',
    },
    {
      title: 'Kepemimpinan & Kolaborasi',
      text: 'Memimpin tim (KMIPN, AHMBS), bekerja dalam tenggat ketat, presentasi dan materi promosi video.',
    },
  ],
}

export const tools = {
  id: 'tools',
  kicker: 'Tools',
  blocks: [
    { title: 'Engine', items: ['Ren\u2019Py', 'Godot Engine'] },
    {
      title: 'Desain & Ilustrasi',
      items: ['Figma', 'Adobe Illustrator', 'Inkscape', 'Ibis Paint', 'Canva'],
    },
    { title: 'Video', items: ['CapCut'] },
  ],
}

export const contact = {
  kicker: 'Ayo Ngobrol',
  subtitle: 'Lagi cari anak magang Game Designer?',
  email: 'rafinurfattah2005@gmail.com',
  whatsappDisplay: '0887-4358-68472',
  whatsappUrl: 'https://wa.me/62887435868472',
  location: 'Pontianak, Kalimantan Barat',
  footer: '© 2026 Rafi Nur Fattah',
}
