const projects = [
  {
    title: "Praktik Kali Linux",
    image: "praktik-kali-linux.jpg",
    desc: "Dalam proyek ini, saya melakukan praktik langsung menggunakan Kali Linux, sistem operasi berbasis Debian yang dirancang khusus untuk pengujian keamanan dan ethical hacking. Kegiatan praktik meliputi eksplorasi berbagai tools seperti Nmap, Wireshark, dan Metasploit, serta melakukan simulasi serangan jaringan secara lokal. Proyek ini membantu saya memahami dasar keamanan siber, teknik reconnaissance, dan analisis kerentanan sistem secara lebih mendalam.\nnamun pada project ini saya masih banyak kendalanya.",
    docs: ["praktik-kali-linux1.jpg", "praktik-kali-linux2.jpg"]
  },
  {
    title: "Website Pribadi",
    image: "website-pribadi.jpg",
    desc: "Saya merancang dan membangun website pribadi sebagai media untuk memperkenalkan diri, menampilkan portofolio, serta menulis blog seputar teknologi. Website ini dibangun menggunakan HTML, CSS, JavaScript, PHP, dan MySQL, dengan desain responsif yang ramah pengguna. Selain itu, saya juga mengembangkan game sederhana seperti tebak gambar yang terintegrasi dalam website ini sebagai bentuk interaktifitas dan latihan logika pemrograman. Proyek ini tidak hanya menunjukkan keterampilan teknis saya, tetapi juga menjadi platform resmi untuk menampilkan karya-karya saya secara profesional.",
    docs: ["website-pribadi1.jpg", "website-pribadi2.jpg"]
  },
  {
    title: "Desain UI/UX Aplikasi PPDB",
    image: "desain-uiux-ppdb.jpg",
    desc: "Dalam proyek ini, saya dan teman kelompok saya mendesain antarmuka dan pengalaman pengguna (UI/UX) untuk aplikasi Penerimaan Peserta Didik Baru (PPDB) tingkat kabupaten. Proyek ini berfokus pada kemudahan navigasi bagi calon siswa dan admin sekolah, serta dilengkapi dengan wireframe dan prototipe interaktif. Desain dilakukan dengan mempertimbangkan prinsip usability dan estetika modern, menggunakan Figma sebagai alat utama.",
    docs: ["desain-uiux-ppdb1.jpg", "desain-uiux-ppdb2.jpg"]
  },
  {
    title: "Script Python Enkripsi",
    image: "script-python-enkripsi.jpg",
    desc: "Berawal dari belajar dari internet, Saya mengembangkan script Python yang dapat melakukan enkripsi dan dekripsi sederhana menggunakan metode Caesar Cipher dan bitwise operations. Proyek ini bertujuan untuk memahami konsep dasar kriptografi dan bagaimana algoritma enkripsi dapat diimplementasikan secara langsung menggunakan bahasa Python. Script ini dilengkapi dengan antarmuka CLI dan dokumentasi singkat.",
    docs: ["script-python-enkripsi1.jpg", "script-python-enkripsi2.jpg"]
  },
  {
    title: "Membuat Database Sederhana",
    image: "database-sederhana.jpg",
    desc: "Proyek ini merupakan pembuatan dan perancangan database sederhana menggunakan MySQL, yang berisi struktur tabel, relasi antar tabel, serta implementasi CRUD (Create, Read, Update, Delete). Saya menggunakan MySQL workbench, phpMyAdmin dan MySQL CLI untuk membangun dan mengelola database ini, yang disesuaikan untuk skenario aplikasi survey sederhana sebagai studi kasus.",
    docs: ["database-sederhana1.jpg", "database-sederhana2.jpg"]
  },
  {
    title: "Simulasi Struktur Jaringan Sederhana",
    image: "struktur-jaringan.jpg",
    desc: "Saya membuat simulasi jaringan komputer menggunakan Cisco Packet Tracer dengan topologi jaringan sederhana yang mencakup koneksi antara router, switch, dan beberapa client. Tujuan dari proyek ini adalah untuk memahami dasar konfigurasi IP address, routing statis, serta bagaimana data berpindah antar node dalam sebuah jaringan. Proyek ini sangat membantu untuk memperkuat konsep jaringan komputer dasar.\n\n untuk dokumentasi lengkapnya silahkan lihat video youtube pada dokumentasi project",
    docs: ["struktur-jaringan1.jpg", "struktur-jaringan2.jpg"]
  },
  {
    title: "Remastering Linux",
    image: "remastering-linux.jpg",
    desc: "Dalam proyek ini, saya melakukan remastering sistem operasi Linux dengan cara memodifikasi distro tertentu menggunakan cubic creator agar sesuai dengan kebutuhan pengguna lokal. Saya menambahkan beberapa paket penting, mengubah tampilan antarmuka, serta menyesuaikan konfigurasi default sistem.",
    docs: ["remastering-linux1.jpg", "remastering-linux2.jpg"]
  },
  {
    title: "Video Transformasi Polbeng",
    image: "transformasi-polbeng.jpg",
    desc: "Konten video kreatif dalam rangka promosi kampus Politeknik Negeri Bengkalis bertema 'Transformasi Polbeng'. Video ini menampilkan perubahan dan kemajuan kampus dari berbagai sisi, dikemas dengan visual yang menarik dan narasi inspiratif. Proyek ini dikerjakan untuk lomba video promosi resmi dari kampus.",
    docs: ["transformasi-polbeng1.jpg"]
  },
  {
    title: "Video Dakwah 'Makmurkan Masjid'",
    image: "makmurkan-masjid.jpg",
    desc: "Video dakwah inspiratif yang menceritakan anak-anak yang awalnya bermain, lalu membantu membersihkan masjid, dan akhirnya beribadah. Tujuannya adalah membangun kesadaran untuk meramaikan masjid sejak dini. Proyek ini dibuat untuk lomba konten dakwah video",
    docs: ["makmurkan-masjid2.jpg"], // hanya 1 foto dokumentasi
    instagram: "https://www.instagram.com/reel/DA82zumRBBj/?igsh=bm92b2M1bGdqeTdm"
  }
];

const projectWrapper = document.getElementById("projectCardWrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const seeBtn = document.getElementById("seeProjectBtn");

let currentIndex = 0;

function renderProjects() {
  projectWrapper.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    if (index === currentIndex) card.classList.add("active");

    card.innerHTML = `
      <img src="project/${project.image}" alt="${project.title}" />
      <h3>${project.title}</h3>
    `;
    projectWrapper.appendChild(card);

    card.addEventListener("click", () => {
      currentIndex = index;
      renderProjects();
    });
  });

  const activeCard = projectWrapper.children[currentIndex];
  const wrapper = projectWrapper.parentElement;

  if (activeCard && wrapper) {
    const wrapperRect = wrapper.getBoundingClientRect();
    const cardRect = activeCard.getBoundingClientRect();
    const offset = (cardRect.left + cardRect.width / 2) - (wrapperRect.left + wrapperRect.width / 2);
    wrapper.scrollTo({
      left: wrapper.scrollLeft + offset,
      behavior: 'smooth'
    });
  }
}

function updateIndex(direction) {
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % projects.length;
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }
  renderProjects();
}

prevBtn.addEventListener("click", () => updateIndex("prev"));
nextBtn.addEventListener("click", () => updateIndex("next"));

renderProjects();

// Overlay
const overlay = document.getElementById("projectOverlay");
const descElem = document.getElementById("projectDesc");
const titleElem = document.getElementById("projectTitle");
const imgElem = document.getElementById("mainPreviewImg");
const gallery = document.getElementById("docGallery");
const closeBtn = document.getElementById("closeOverlay");

seeBtn.addEventListener("click", () => {
  const project = projects[currentIndex];
  overlay.classList.remove("hidden");
  descElem.innerText = project.desc;
  titleElem.innerText = project.title;
  imgElem.src = `project/${project.image}`;

  gallery.innerHTML = "";

  // Tambahkan link Instagram jika ada
  if (project.instagram) {
    const igLink = document.createElement("a");
    igLink.href = project.instagram;
    igLink.target = "_blank";
    igLink.innerText = "📷 Lihat di Instagram";
    igLink.style.display = "block";
    igLink.style.margin = "10px 0";
    igLink.style.color = "#007bff";
    gallery.appendChild(igLink);
  }

  project.docs.forEach((doc, index) => {
    if (project.title === "Simulasi Struktur Jaringan Sederhana" && index === 1) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/ZJ4Te9W3da0";
      iframe.width = "100%";
      iframe.height = "215";
      iframe.frameBorder = "0";
      iframe.allowFullscreen = true;
      iframe.style.borderRadius = "8px";
      gallery.appendChild(iframe);
    } else {
      const img = document.createElement("img");
      img.src = `project/${doc}`;
      img.alt = doc;
      gallery.appendChild(img);
    }
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".overlay-content")) {
      overlay.classList.add("hidden");
    }
  });
});
