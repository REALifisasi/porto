export type Language = 'id' | 'en'

export interface Content {
  site: { title: string; description: string; cvUrl: string }
  nav: {
    skipToContent: string
    mainLabel: string
    mobileLabel: string
    openMenu: string
    closeMenu: string
    downloadCV: string
    links: { label: string; href: string }[]
  }
  hero: {
    title: string
    subtitle: string
    stickers: string[]
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    focusLabel: string
  }
  about: {
    kicker: string
    name: string
    role: string
    bio: string
    photo: string
    photoAlt: string
    photoCaption: string
    photoHint: string
    facts: string[]
  }
  latestAchievement: {
    id: string
    kicker: string
    title: string
    subtitle: string
    role: string
    images: { src: string; alt: string; caption: string; ratio?: 'portrait' | 'landscape' | 'square' | 'ig'; videoId?: string }[]
    paragraph: string
    chips: string[]
    links: { label: string; href: string }[]
  }
  otherAchievement: {
    kicker: string
    title: string
    items: { title: string; role: string; text: string }[]
  }
  personalProject: {
    id: string
    kicker: string
    title: string
    subtitle: string
    hero: { src: string; alt: string }
    gallery: { src: string; alt: string; caption: string; ratio?: 'portrait' | 'landscape' | 'square' | 'ig'; videoId?: string }[]
    imagePlaceholder: string
    documentationTitle: string
    paragraph: string
    readMore: string
    showLess: string
    highlights: { title: string; text: string }[]
    chips: string[]
    links: { label: string; href: string }[]
  }
  otherPersonalProject: {
    id: string
    kicker: string
    title: string
    items: { src: string; alt: string; text: string; title?: string; links?: { label: string; href: string }[] }[]
  }
  honorableMoments: {
    id: string
    kicker: string
    title: string
    items: { src: string; alt: string; caption: string; year: string }[]
  }
  skills: {
    id: string
    kicker: string
    title: string
    blocks: { title: string; text: string }[]
  }
  tools: {
    id: string
    kicker: string
    title: string
    blocks: { title: string; items: string[] }[]
  }
  diagrams: {
    coreLoopTitle: string
    coreLoopAria: string
    coreLoopLayers: { label: string; desc: string }[]
    statTriadTitle: string
    statTriadAria: string
    statTriadFootnote: string
    stats: { label: string; desc: string }[]
  }
  contact: {
    kickerLabel: string
    kicker: string
    subtitle: string
    emailCta: string
    downloadCV: string
    whatsappLabel: string
    location: string
  }
  footer: {
    copyright: string
    tagline: string
  }
}

const id: Content = {
  site: {
    title: 'Rafi Nur Fattah — Game Designer Portfolio',
    description:
      'Portfolio Rafi Nur Fattah, Game Designer asal Pontianak. Juara 3 KMIPN 2026, pembuat prototipe playable dengan Ren’Py.',
    cvUrl: 'https://drive.google.com/drive/folders/1so2V2Q4t0ee_xVmGJFikXnC4nMkuPOGT?usp=sharing',
  },
  nav: {
    skipToContent: 'Lewati ke konten',
    mainLabel: 'Navigasi utama',
    mobileLabel: 'Navigasi seluler',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    downloadCV: 'Unduh CV',
    links: [
      { label: 'Tentang', href: '#about' },
      { label: 'Pencapaian', href: '#achievement' },
      { label: 'Proyek', href: '#project' },
      { label: 'Visual', href: '#moments' },
      { label: 'Keahlian', href: '#skills' },
      { label: 'Peralatan', href: '#tools' },
    ],
  },
  hero: {
    title: 'PORTOFOLIO',
    subtitle: 'Game Designer',
    stickers: ['GDD', 'Core Loop', 'Ren’Py', 'Decision Matrix'],
    primaryCta: { label: 'Lihat Proyek', href: '#project' },
    secondaryCta: { label: 'Unduh CV', href: 'https://drive.google.com/drive/folders/1so2V2Q4t0ee_xVmGJFikXnC4nMkuPOGT?usp=sharing' },
    focusLabel: 'Fokus desain',
  },
  about: {
    kicker: 'Tentang',
    name: 'Rafi Nur Fattah',
    role: 'Game Designer · Mencari magang',
    bio: 'Sebagai mahasiswa tingkat akhir D3 Teknik Informatika di Politeknik Negeri Pontianak (IPK 3.75), saya memiliki fokus yang kuat dalam menciptakan pengalaman bermain yang imersif melalui Game Design. Ketertarikan saya terletak pada penyusunan Game Design Document (GDD) yang terstruktur, perancangan mekanik permainan, serta pengembangan sistem keputusan pemain yang kompleks. Saya terbiasa menerjemahkan konsep ide menjadi purwarupa playable menggunakan engine seperti Ren’Py, Godot, dan Twine. Baru-baru ini, saya memimpin tim sebagai Game Designer untuk proyek Pip Code, sebuah game puzzle 2D yang berhasil meraih Juara 3 Nasional di ajang KMIPN 2026 kategori Pengembangan Aplikasi Permainan. Saat ini, saya sedang mencari kesempatan magang sebagai Game Designer untuk berkontribusi dalam tim profesional, mengasah insting desain, dan turut serta melahirkan IP game yang berkualitas.',
    photo: '/images/rafi.jpg',
    photoAlt: 'Foto portrait Rafi Nur Fattah',
    photoCaption: 'Rafi Nur Fattah',
    photoHint: 'Rasio 3:4 · ganti via content.ts → about.photo',
    facts: ['Pontianak', 'D3 Teknik Informatika · Polnep', 'IPK 3.75', 'Lulus 2027'],
  },
  latestAchievement: {
    id: 'achievement',
    kicker: 'Pencapaian Terbaru',
    title: 'Juara 3 — KMIPN',
    subtitle: 'Bidang Pengembangan Aplikasi Permainan 2026',
    role: 'Ketua Tim & Game Designer · Kategori Inovasi Bisnis & Monetisasi Game',
    images: [
      { src: '/images/kmipn-sertifikat.png', alt: 'Sertifikat Juara 3 KMIPN', caption: 'Sertifikat', ratio: 'ig' },
      { src: '/images/kmipn-team.jpg', alt: 'Foto tim KMIPN', caption: 'Foto tim KMIPN', ratio: 'ig' },
      { src: '', videoId: 'g2p4GbpMbKI', alt: 'Video demo prototipe game KMIPN', caption: 'Video demo game', ratio: 'ig' },
    ],
    paragraph:
      'Memimpin tim dari ideasi sampai purwarupa game. Aku menyusun GDD yang mencakup mekanik permainan, alur cerita, serta strategi monetisasi dan inovasi bisnis, dan merancang serta memproduksi aset ilustrasi untuk kebutuhan visual game.',
    chips: ['Team Lead', 'GDD', 'Ilustrasi'],
    links: [{ label: 'Lihat Kode di GitHub', href: 'https://github.com/kim-sana/pip-code-kmipnviii' }],
  },
  otherAchievement: {
    kicker: 'Pencapaian Lainnya',
    title: 'Pencapaian Lainnya',
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
  },
  personalProject: {
    id: 'project',
    kicker: 'Proyek Personal',
    title: 'Aku Nak Jadi Fakboy',
    subtitle: 'Dating Sim & Time Management · Prototipe Playable (Ren’Py)',
    hero: { src: '/images/fakboy-hero-whadup.png', alt: 'Screenshot gameplay Whadup — chat dengan Si Bawel di game Aku Nak Jadi Fakboy' },
    gallery: [
      { src: '/images/fakboy-multi-chat.png', alt: 'Screenshot prototype gameplay multi-chat Whadup dengan Si Bawel', caption: 'Screenshot prototype gameplay multi-chat Whadup dengan Si Bawel', ratio: 'ig' },
      { src: '/images/fakboy-whos-playing.png', alt: 'Screenshot layar pilih profil Who’s playing', caption: 'Screenshot layar pilih profil Who’s playing', ratio: 'ig' },
      { src: '/images/fakboy-gdd-browser.png', alt: 'Cuplikan GDD Aku Nak Jadi Fakboy — Browser In-Game, Core Loop, dan sistem Whadup', caption: 'Cuplikan GDD Aku Nak Jadi Fakboy — Browser In-Game, Core Loop, dan sistem Whadup', ratio: 'ig' },
    ],
    imagePlaceholder: '[ISI: screenshot UI chat / key art / GIF gameplay]',
    documentationTitle: 'Dokumentasi',
    readMore: 'Selengkapnya',
    showLess: 'Tutup',
    paragraph:
      'Aku Nak Jadi Fakboy adalah permainan simulasi satir yang menempatkan pemain sebagai karakter utama yang menjalani Hubungan Tanpa Status (HTS) dengan 5–7 wanita sekaligus secara bersamaan. Yang membuat game ini unik adalah seluruh pengalaman bermain terjadi di dalam antarmuka layar komputer desktop tiruan, menuntut pemain untuk melakukan multitasking di bawah tekanan waktu. Secara garis besar, siklus permainannya (Core Loop) terbagi menjadi tiga fase waktu. Pada tingkat harian (dari pukul 15:00 hingga 21:00 in-game), pemain akan menerima pesan obrolan dari para wanita dan harus membalasnya sebelum batas waktu (timer) masing-masing obrolan habis. Sering kali, pemain diharuskan berpindah tab untuk memeriksa informasi guna membalas pesan dengan tepat, dan setiap pilihan jawaban akan langsung mengubah perasaan karakter wanita tersebut. Pada tingkat mingguan (setiap 7 hari), pemain akan menerima laporan rangkuman kejadian selama seminggu dan mendapatkan kesempatan untuk mengatur jadwal kencan di minggu berikutnya. Kemudian pada tingkat makro (setelah 4 minggu), game akan mengevaluasi semua tindakan pemain untuk menentukan ending permainan yang didapat. Mekanik utama game ini sangat bergantung pada manajemen tab browser: whadup (aplikasi obrolan inti), nosyon (buku catatan identitas wanita), dan calender (jadwal kencan). Tingkat kesulitannya berasal dari Timer Real-Time di setiap obrolan yang akan terus berjalan terlepas dari tab apa yang sedang dibuka pemain — jika timer habis, wanita tersebut akan marah dan melakukan spam pesan. Segala keputusan terikat pada Sistem Stat, di mana pemain harus menyeimbangkan tiga metrik per karakter: Sayang, Curiga, dan Mood. Membalas dengan baik meningkatkan Sayang, sedangkan kesalahan meningkatkan Curiga; jika Curiga mencapai 100 atau Sayang habis menjadi 0, pemain akan diblokir secara mendadak. Selain itu, game ini mengimplementasikan mekanik "Jebakan Identitas": fakta-fakta wanita tercatat di nosyon jika pemain mendengarkan mereka, dan wanita tersebut sering menguji ingatan pemain lewat obrolan — salah jawab karena tidak mengecek catatan nosyon akan menaikkan Curiga dengan sangat drastis.',
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
        text: 'Mekanik multi-tasking chat di bawah timer, dibuat di Ren’Py.',
      },
    ],
    chips: ['Ren’Py', 'GDD', 'Core Loop', 'Branching Ending'],
    links: [],
  },
  otherPersonalProject: {
    id: 'other-project',
    kicker: 'Proyek Personal Lainnya',
    title: 'Other Personal Project',
    items: [
      {
        src: '/images/other-project-admin-dashboard.jpg',
        alt: 'Screenshot aplikasi REALifisasi — perencana menu masakan berdasarkan anggaran',
        text: 'Aplikasi mobile yang saya desain dan kembangkan secara End-to-End (UI/UX hingga Backend) untuk membantu pengguna merencanakan menu masakan harian berdasarkan batasan anggaran finansial yang ketat. Saya merancang algoritma filtering yang mengalkulasi total biaya resep berdasarkan berat gramasi bahan baku yang ditarik dari database Supabase secara real-time. Proyek ini tidak hanya melibatkan pembuatan aplikasi untuk pengguna (User App), tetapi juga mencakup pembuatan sistem Dashboard Admin terpisah untuk manajemen data masakan (CRUD) agar kalkulasi harga selalu relevan dengan harga pasar.',
        links: [
          {
            label: 'Lihat Kode di GitHub',
            href: 'https://github.com/Bowos-Classroom/final-project-REALifisasi',
          },
        ],
      },
      {
        src: '/images/other-project-budget-food.png',
        alt: 'Screenshot aplikasi Budget Food — slider budget untuk filter menu masakan',
        text: 'Saya sering melihat teman-teman (dan saya sendiri) kesulitan mengatur uang jatah makan bulanan. Sering kali bingung, ‘Uang tinggal segini, bisa masak apa ya?’ Dari masalah sehari-hari itu, saya memutuskan untuk membangun Budget Food sebagai proyek personal saya. Ini bukan sekadar aplikasi resep biasa, melainkan asisten finansial dapur. Pengguna cukup menggeser slider budget (mulai dari Rp 5.000), dan aplikasi akan memfilter menu yang harganya masuk dalam rentang tersebut.',
      },
    ],
  },
  honorableMoments: {
    id: 'moments',
    kicker: 'Brand & Visual Work',
    title: 'Brand & Visual Work',
    items: [
      { src: '/images/brand-kedcomp-2025.png', alt: 'Poster KEDCOMP 2025', caption: 'Branding KEDCOMP 2025', year: '2025' },
      { src: '/images/brand-bertemoe-feeds.png', alt: 'Feeds Instagram Grand Opening Bertemoe', caption: 'Identitas visual coffee shop Bertemoe', year: '2025' },
      { src: '/images/brand-elektro-tshirt.png', alt: 'Desain kaos Elektro', caption: 'Logo komunitas Elektro — sablon kaos', year: '2026' },
      { src: '/images/brand-pkm-cocopeat-polnep.png', alt: 'Logo PKM Cocopeat Polnep', caption: 'Logo PKM Cocopeat Polnep', year: '2024' },
    ],
  },
  skills: {
    id: 'skills',
    kicker: 'Keahlian',
    title: 'Keahlian',
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
  },
  tools: {
    id: 'tools',
    kicker: 'Peralatan',
    title: 'Peralatan',
    blocks: [
      { title: 'Engine', items: ['Ren’Py', 'Godot Engine'] },
      {
        title: 'Desain & Ilustrasi',
        items: ['Figma', 'Adobe Illustrator', 'Inkscape', 'Ibis Paint', 'Canva'],
      },
      { title: 'Video', items: ['CapCut'] },
    ],
  },
  diagrams: {
    coreLoopTitle: 'Core Loop — 3 Lapis',
    coreLoopAria: 'Diagram core loop tiga lapis: harian, mingguan, 4 minggu',
    coreLoopLayers: [
      { label: 'Harian', desc: 'Chat · Timer · Notebook' },
      { label: 'Mingguan', desc: 'Kalender kencan · Laporan' },
      { label: '4 Minggu', desc: 'Ending bercabang' },
    ],
    statTriadTitle: 'Decision Matrix — 3 Stat',
    statTriadAria: 'Diagram tiga stat dinamis: Sayang, Curiga, Mood',
    statTriadFootnote: 'Setiap pilihan dialog memberi trade-off langsung.',
    stats: [
      { label: 'Sayang', desc: 'Progres cerita' },
      { label: 'Curiga', desc: 'Risiko ketahuan' },
      { label: 'Mood', desc: 'Respons dialog' },
    ],
  },
  contact: {
    kickerLabel: 'Kontak',
    kicker: 'Ayo Ngobrol',
    subtitle: 'Lagi cari anak magang Game Designer?',
    emailCta: 'Kirim Email',
    downloadCV: 'Unduh CV',
    whatsappLabel: 'WhatsApp',
    location: 'Pontianak, Kalimantan Barat',
  },
  footer: {
    copyright: '© 2026 Rafi Nur Fattah',
    tagline: 'Game Designer · Pontianak',
  },
}

const en: Content = {
  site: {
    title: 'Rafi Nur Fattah — Game Designer Portfolio',
    description:
      "Rafi Nur Fattah's portfolio — Game Designer from Pontianak. 3rd place at KMIPN 2026, builds playable prototypes in Ren’Py.",
    cvUrl: 'https://drive.google.com/drive/folders/1so2V2Q4t0ee_xVmGJFikXnC4nMkuPOGT?usp=sharing',
  },
  nav: {
    skipToContent: 'Skip to content',
    mainLabel: 'Main navigation',
    mobileLabel: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    downloadCV: 'Grab My CV',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Achievements', href: '#achievement' },
      { label: 'Projects', href: '#project' },
      { label: 'Visual Work', href: '#moments' },
      { label: 'Skills', href: '#skills' },
      { label: 'Tools', href: '#tools' },
    ],
  },
  hero: {
    title: 'PORTFOLIO',
    subtitle: 'Game Designer',
    stickers: ['GDD', 'Core Loop', 'Ren’Py', 'Decision Matrix'],
    primaryCta: { label: 'See My Work', href: '#project' },
    secondaryCta: { label: 'Grab My CV', href: 'https://drive.google.com/drive/folders/1so2V2Q4t0ee_xVmGJFikXnC4nMkuPOGT?usp=sharing' },
    focusLabel: 'Design focus',
  },
  about: {
    kicker: 'About',
    name: 'Rafi Nur Fattah',
    role: 'Game Designer · Open to internships',
    bio: "As a final-year D3 Informatics Engineering student at Pontianak State Polytechnic (GPA 3.75), I focus on creating immersive gameplay experiences through Game Design. My interests lie in writing structured Game Design Documents (GDD), designing game mechanics, and developing complex player decision systems. I regularly turn concepts into playable prototypes using engines such as Ren’Py, Godot, and Twine. Most recently, I led the team as Game Designer on Pip Code, a 2D puzzle game that won 3rd Place nationally at KMIPN 2026 in the Game App Development category. I am currently seeking a Game Designer internship to contribute to a professional team, sharpen my design instincts, and help ship quality game IPs.",
    photo: '/images/rafi.jpg',
    photoAlt: 'Portrait photo of Rafi Nur Fattah',
    photoCaption: 'Rafi Nur Fattah',
    photoHint: '3:4 ratio · replace via content.ts → about.photo',
    facts: ['Based in Pontianak', 'D3 Informatics Engineering · Polnep', 'GPA 3.75', 'Class of 2027'],
  },
  latestAchievement: {
    id: 'achievement',
    kicker: 'Latest Win',
    title: '3rd Place — KMIPN',
    subtitle: 'Game App Development, 2026',
    role: 'Team Lead & Game Designer · Business Innovation & Game Monetization track',
    images: [
      { src: '/images/kmipn-sertifikat.png', alt: 'KMIPN 3rd Place certificate', caption: 'Certificate', ratio: 'ig' },
      { src: '/images/kmipn-team.jpg', alt: 'KMIPN team photo', caption: 'KMIPN team photo', ratio: 'ig' },
      { src: '', videoId: 'g2p4GbpMbKI', alt: 'KMIPN game prototype demo video', caption: 'Game demo video', ratio: 'ig' },
    ],
    paragraph:
      'Took the team all the way from brainstorming to a working prototype. I put together the GDD — mechanics, story, the whole monetization and business-innovation angle — plus drew the illustration assets for the game’s visuals.',
    chips: ['Team Lead', 'GDD', 'Illustration'],
    links: [{ label: 'See the Code', href: 'https://github.com/kim-sana/pip-code-kmipnviii' }],
  },
  otherAchievement: {
    kicker: 'More Wins',
    title: 'More Wins',
    items: [
      {
        title: 'Participant — Pontianak Hackathon x National Movement of 1000 Digital Startups 2024',
        role: 'UI/UX Designer & Conceptor',
        text: 'Whipped up app wireframes and prototypes in Figma with the team on a crazy-tight deadline.',
      },
      {
        title: 'Finalist — Astra Honda Best Student (AHMBS) 2022',
        role: 'Team Lead & Conceptor',
        text: 'Dreamed up an app concept to promote Pontianak tourism and mapped out the whole app logic with the team.',
      },
    ],
  },
  personalProject: {
    id: 'project',
    kicker: 'Side Project',
    title: 'Aku Nak Jadi Fakboy',
    subtitle: 'Dating Sim & Time Management · Playable Prototype (Ren’Py)',
    hero: { src: '/images/fakboy-hero-whadup.png', alt: 'Whadup gameplay screenshot — chatting with Si Bawel in Aku Nak Jadi Fakboy' },
    gallery: [
      { src: '/images/fakboy-multi-chat.png', alt: 'Prototype gameplay screenshot — multi-chat Whadup with Si Bawel', caption: 'Prototype gameplay screenshot — multi-chat Whadup with Si Bawel', ratio: 'ig' },
      { src: '/images/fakboy-whos-playing.png', alt: 'Profile select screen — Who’s playing', caption: 'Profile select screen — Who’s playing', ratio: 'ig' },
      { src: '/images/fakboy-gdd-browser.png', alt: 'GDD excerpt Aku Nak Jadi Fakboy — Browser In-Game, Core Loop, and Whadup system', caption: 'GDD excerpt Aku Nak Jadi Fakboy — Browser In-Game, Core Loop, and Whadup system', ratio: 'ig' },
    ],
    imagePlaceholder: '[TODO: chat UI screenshot / key art / gameplay GIF]',
    documentationTitle: 'Documentation',
    readMore: 'Read more',
    showLess: 'Show less',
    paragraph:
      'Aku Nak Jadi Fakboy is a satirical simulation game that casts the player as the main character juggling No-Label Relationships (HTS) with 5–7 women all at the same time. What makes it unique is that the entire experience happens inside a mock desktop computer screen, forcing players to multitask under time pressure. Broadly, its Core Loop spans three time phases. At the daily level (15:00 to 21:00 in-game), players receive chat messages from the women and must reply before each chat’s timer runs out. Players often have to switch tabs to look up information to reply correctly, and every dialogue choice directly shifts how each woman feels. At the weekly level (every 7 days), players get a summary report of the week and a chance to schedule dates for the following week. Then at the macro level (after 4 weeks), the game evaluates everything the player did to determine which ending they earn. The core mechanics revolve around browser tab management: whadup (the core chat app), nosyon (the women’s identity notebook), and calender (the date schedule). The difficulty comes from Real-Time Timers on every chat that keep ticking no matter which tab is open — let one expire and that woman gets angry and spams messages. Every decision is bound to the Stat System, where players balance three metrics per character: Sayang (affection), Curiga (suspicion), and Mood. Replying well raises Sayang, mistakes raise Curiga; if Curiga hits 100 or Sayang drops to 0, the player gets suddenly blocked. The game also implements an "Identity Trap" mechanic: facts about each woman are recorded in nosyon when players listen to them, and the women often test the player’s memory through chat — answering wrongly without checking the nosyon notes spikes Curiga drastically.',
    highlights: [
      {
        title: 'Structured GDD',
        text: 'Satirical concept, 3-layer core loop, date calendar, weekly recaps, branching endings.',
      },
      {
        title: 'Multi-chat + timer',
        text: '5–7 chats blowing up at once, each with its own reply timer — plus a memory notebook to keep track.',
      },
      {
        title: 'Decision matrix',
        text: 'Every dialogue pick shakes up the story. No free choices here.',
      },
      {
        title: 'Playable prototype',
        text: 'The whole chaotic multi-chat juggling act, fully playable in Ren’Py.',
      },
    ],
    chips: ['Ren’Py', 'GDD', 'Core Loop', 'Branching Ending'],
    links: [],
  },
  otherPersonalProject: {
    id: 'other-project',
    kicker: 'More Side Projects',
    title: 'Other Personal Project',
    items: [
      {
        src: '/images/other-project-admin-dashboard.jpg',
        alt: 'REALifisasi app screenshot — budget-based meal planner',
        text: 'A mobile app I designed and developed end-to-end (UI/UX to backend) to help users plan daily meal menus under tight budget constraints. I built a filtering algorithm that calculates total recipe cost from ingredient gram weights pulled from Supabase in real time. The project covers both the user-facing app and a separate Admin Dashboard for recipe data management (CRUD), so price calculations stay aligned with market prices.',
        links: [
          {
            label: 'See the Code',
            href: 'https://github.com/Bowos-Classroom/final-project-REALifisasi',
          },
        ],
      },
      {
        src: '/images/other-project-budget-food.png',
        alt: 'Budget Food app screenshot — budget slider for filtering meal menus',
        text: 'I kept seeing friends (and myself) struggle to stretch the monthly food allowance — that familiar “this is all I have left, what can I cook?” moment. From that everyday problem I decided to build Budget Food as my personal project. It’s not just another recipe app, but a kitchen finance assistant. Users simply drag a budget slider (starting from Rp 5,000) and the app filters menus that fit within that range.',
      },
    ],
  },
  honorableMoments: {
    id: 'moments',
    kicker: 'Brand & Visual Work',
    title: 'Brand & Visual Work',
    items: [
      { src: '/images/brand-kedcomp-2025.png', alt: 'KEDCOMP 2025 poster', caption: 'KEDCOMP 2025 branding', year: '2025' },
      { src: '/images/brand-bertemoe-feeds.png', alt: 'Bertemoe Grand Opening Instagram feeds', caption: 'Bertemoe coffee shop visual identity', year: '2025' },
      { src: '/images/brand-elektro-tshirt.png', alt: 'Elektro t-shirt design', caption: 'Elektro community logo — t-shirt print', year: '2026' },
      { src: '/images/brand-pkm-cocopeat-polnep.png', alt: 'PKM Cocopeat Polnep logo', caption: 'PKM Cocopeat Polnep logo', year: '2024' },
    ],
  },
  skills: {
    id: 'skills',
    kicker: 'Skills',
    title: 'Skills',
    blocks: [
      {
        title: 'Game Design',
        text: 'GDDs, core loops, mechanics and systems, decision matrices, storyboards, rapid prototyping.',
      },
      {
        title: 'UI/UX & Graphics',
        text: 'App wireframes and prototypes in Figma, visual identities (logos and the works), game asset illustration. Been freelancing as a graphic designer since 2024 — coffee shop branding, local community logos, PKM branding for Informatics Engineering at Polnep.',
      },
      {
        title: 'Leadership & Collaboration',
        text: 'Running teams (KMIPN, AHMBS), thriving on tight deadlines, pitching and cutting promo videos.',
      },
    ],
  },
  tools: {
    id: 'tools',
    kicker: 'Tools',
    title: 'Tools',
    blocks: [
      { title: 'Engine', items: ['Ren’Py', 'Godot Engine'] },
      {
        title: 'Design & Illustration',
        items: ['Figma', 'Adobe Illustrator', 'Inkscape', 'Ibis Paint', 'Canva'],
      },
      { title: 'Video', items: ['CapCut'] },
    ],
  },
  diagrams: {
    coreLoopTitle: 'Core Loop — 3 Layers',
    coreLoopAria: 'Three-layer core loop diagram: daily, weekly, 4 weeks',
    coreLoopLayers: [
      { label: 'Daily', desc: 'Chat · Timer · Notebook' },
      { label: 'Weekly', desc: 'Date calendar · Reports' },
      { label: '4 Weeks', desc: 'Branching endings' },
    ],
    statTriadTitle: 'Decision Matrix — 3 Stats',
    statTriadAria: 'Three dynamic stats diagram: Affection, Suspicion, Mood',
    statTriadFootnote: 'Every dialogue pick comes with a trade-off.',
    stats: [
      { label: 'Affection', desc: 'Story progress' },
      { label: 'Suspicion', desc: 'Exposure risk' },
      { label: 'Mood', desc: 'Chat responses' },
    ],
  },
  contact: {
    kickerLabel: 'Contact',
    kicker: "Let's Chat",
    subtitle: 'Need a Game Designer intern?',
    emailCta: 'Shoot Me an Email',
    downloadCV: 'Grab My CV',
    whatsappLabel: 'WhatsApp',
    location: 'Pontianak, West Kalimantan',
  },
  footer: {
    copyright: '© 2026 Rafi Nur Fattah',
    tagline: 'Game Designer · Pontianak',
  },
}

export const translations: Record<Language, Content> = { id, en }
export const languages: { code: Language; label: string; shortLabel: string }[] = [
  { code: 'id', label: 'Bahasa Indonesia', shortLabel: 'ID' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
]
