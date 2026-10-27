const en = {
	nav: {
		home: "Home",
		about: "About",
		experiences: "Experiences",
		projects: "Projects",
		certificates: "Certificates",
		label: "Main navigation",
	},
	controls: {
		changeLanguage: "Switch to Bahasa Indonesia",
		loading: "Loading portfolio…",
		unmute: "Unmute audio",
		mute: "Mute audio",
		scrollToTop: "Scroll to top",
		close: "Close",
	},
	hero: {
		words: ["Web Developer", "IT Support", "IT Infrastructure", "Fresh Graduate"],
		available: "Exploring New Opportunity",
		intro: "Hi, I’m ",
		description:
			", an IT graduate from Universitas Brawijaya. I’ve built company websites and supported IT operations during internships. I’m interested in web development, AI, cloud computing, and networking. I’m looking for an opportunity where I can contribute and keep learning.",
		downloadCv: "Download My CV",
		downloadCvLabel: "Download my CV",
		connect: "Let’s Connect",
		scrollToAbout: "Scroll to About",
		imageAlt: "Person peeking from behind laptop",
	},
	about: {
		eyebrow: "About Me",
		title: "A Glimpse Into My World",
		description: "Get to know me a bit better",
		profile: "Profile",
		techStack: "Tech Stack",
		myself: "About Myself",
		mapAlt: "Map",
		memojiAlt: "Smiling memoji",
		biography: [
			{
				text: "Hi, I’m Rakan Fadhil Prayata — an ",
				strong: false,
			},
			{
				text: "Informatics Engineering (GPA 3.56)",
				strong: true,
			},
			{
				text: " graduate from Universitas Brawijaya. I ",
				strong: false,
			},
			{
				text: "built a company website",
				strong: true,
			},
			{
				text: " with content management and SEO optimization, ",
				strong: false,
			},
			{
				text: "supported IT operations",
				strong: true,
			},
			{
				text: ", and produced a safety induction video. I also worked on a capstone project through Bangkit Academy and helped students learn web programming as a ",
				strong: false,
			},
			{
				text: "teaching assistant",
				strong: true,
			},
			{
				text: " at my faculty. My thesis focused on analyzing public sentiment using ",
				strong: false,
			},
			{
				text: "NLP and machine learning",
				strong: true,
			},
			{
				text: ". Currently, I’m interested in ",
				strong: false,
			},
			{
				text: "self-hosting and running a home server",
				strong: true,
			},
			{
				text: ".",
				strong: false,
			},
		],
	},
	experiences: {
		eyebrow: "Career Journey",
		title: "Professional Experiences",
		description: "My journey through various roles and projects",
		viewDetails: "View Details",
		descriptionLabel: "Description",
		responsibilities: "Key Responsibilities",
		skills: "Skills",
		items: {
			"5": {
				title: "Web Developer",
				company: "Tri-Wall Natura Surabaya",
				period: "Jan 2026 - Apr 2026",
				description:
					"Remote web developer building a bilingual company website to support product visibility and lead generation.",
				responsibilities: [
					"Built and optimized a bilingual company website for product visibility and lead generation",
					"Implemented on-page SEO for multiple product articles targeting packaging-related keywords",
				],
			},
			"4": {
				title: "IT Staff",
				company: "Tri-Wall Indonesia",
				period: "Oct 2025 - Apr 2026",
				description:
					"On-site IT Staff in Nagasari, Bekasi, responsible for the company's multilingual website and internal media.",
				responsibilities: [
					"Developed and maintained a multilingual company website (4 languages, 76+ pages), covering product pages, SEO optimization, and responsive design",
					"Managed site performance, security, and multilingual content to ensure a consistent user experience across devices",
					"Produced a Safety Induction video for internal company use",
				],
			},
			"3": {
				title: "Bangkit 2024 Batch 1 - Cloud Computing Learning Path",
				company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
				period: "Feb 2024 - Jun 2024",
				description:
					"Remote cloud computing learning path in Bangkit Academy, ending with a capstone project building a mobile application together with a cross-path team.",
				responsibilities: [
					"Collaborated with 5 other cohorts to complete a capstone project to create a mobile application",
					"Learned directly from mentors about creating backend APIs and deploying AI models to the cloud for mobile applications",
				],
			},
			"2": {
				title: "Laboratory Teaching Assistant of Web Programming",
				company: "Faculty of Computer Science (FILKOM), Universitas Brawijaya",
				period: "Feb 2024 - May 2024",
				description:
					"Part-time teaching assistant for the Web Programming laboratory, guiding students through web development fundamentals.",
				responsibilities: [
					"Guided 25 students through the foundational concepts of web development",
					"Provided explanations on HTML, CSS, JavaScript, PHP, and the Laravel framework",
				],
			},
			"1": {
				title: "Design and Multimedia Documentation Staff of ROMANTICS 2022",
				company: "Informatics Student Executive Board (EMIF) - Universitas Brawijaya",
				period: "Sep 2022 - Nov 2022",
				description:
					"ROMANTICS 2022 is a program organized by EMIF's HR Development Department to support extracurricular talents and gaming interests among Informatics students at the Faculty of Computer Science, Universitas Brawijaya.",
				responsibilities: [
					"Created 32 graphic designs such as feeds, stories and reels for content publication",
					"Documented 7 competition matches, including live streaming for participants",
				],
			},
		},
	},
	projects: {
		eyebrow: "Real-World Results",
		title: "Featured Projects",
		description: "Explore my projects across various domains.",
		categories: {
			"App/Website": "App/Website",
			"Data Science/AI": "Data Science/AI",
			Network: "Network",
			"Digital Content": "Digital Content",
		},
		empty: "No projects in this category yet.",
		skills: "Skills",
		techStack: "Tech Stack",
		view: "View",
		viewImage: "View image:",
		imageLabel: "Project",
		items: {
			portfolio: {
				company: "Personal Project",
				title: "Portfoliov1",
				results: [
					"Responsive portfolio with English and Indonesian content and saved language preference",
					"Category-based project filtering, experience dialogs, and keyboard image navigation",
					"Draggable certificate carousel, animated tech stack, and audio controls",
				],
			},
			twi: {
				company: "Tri-Wall Indonesia",
				title: "Landing Page — tri-wallindonesia.co.id",
				results: [
					"Multilingual company website supporting four languages",
					"Company and product information with responsive layouts",
					"SEO optimization and multilingual content management",
				],
			},
			twns: {
				company: "Tri-Wall Natura Surabaya",
				title: "Landing Page — twns.co.id",
				results: [
					"Bilingual company website for product visibility and lead generation",
					"Landing page introducing the company and its packaging products",
					"On-page SEO for packaging-related product articles",
				],
			},
			sentiment: {
				company: "Thesis",
				title: "IKN Sentiment Analysis",
				results: [
					"Classify IKN opinions as positive, neutral, or negative with IndoBERT",
					"Discover topics within each sentiment using Top2Vec",
					"Search and filter opinions, export CSV, and compare model evaluation reports",
				],
			},
			agrisense: {
				company: "Bangkit Capstone",
				title: "AgriSense",
				results: [
					"Classify rice panicle images as ripe or unripe using MobileNetV2 and TensorFlow Lite",
					"Review class probabilities and keep prediction history in the browser",
					"Inspect dataset splits, evaluation metrics, and the model confusion matrix",
				],
			},
			osteoporosis: {
				company: "Digital Image Processing",
				title: "Classify Osteoporosis",
				results: [
					"Experimental knee X-ray classification into normal and osteoporosis with YOLOv8",
					"Compare training metrics and confusion matrices across five YOLOv8 variants",
					"Browse the dataset and save prediction history in SQLite with CSV export",
				],
			},
			server: {
				company: "Personal Project",
				title: "Self-Hosted Home Server with Hyper-V & Cloudflare Tunnel",
				results: [
					"Home server lab using Hyper-V virtual machines",
					"Publish self-hosted services through Cloudflare Tunnel",
					"Explore virtual networking and remote service access",
				],
			},
			induction: {
				company: "Tri-Wall Indonesia",
				title: "Safety Induction Video",
				results: [
					"Safety induction video for internal company use",
					"Produced as part of my IT Staff internship",
				],
			},
		},
	},
	certificates: {
		eyebrow: "Achievements",
		title: "My Certificates",
		description: "See my professional badges and achievements",
		viewImage: "View certificate:",
		imageLabel: "Certificate",
		items: {
			"21": {
				title: "IT Staff — Tri-Wall Indonesia",
				description: "Maganghub internship completion at PT. Tri Wall Indonesia",
			},
			"25": {
				title: "IT Staff Internship — Tri-Wall Indonesia",
				description: "Certificate of appreciation from PT. Tri-Wall Indonesia",
			},
			"22": {
				title: "Bangkit Academy — Cloud Computing",
				description: "Certificate of completion for the 2024 Cloud Computing learning path",
			},
			"23": {
				title: "Web Programming Teaching Assistant",
				description: "Practicum assistant certificate from FILKOM, Universitas Brawijaya",
			},
			"26": {
				title: "MSIB Batch 6 — Certified Independent Study",
				description:
					"Participation and completion certificate from Kampus Merdeka at Dicoding Indonesia",
			},
			"2": {
				title: "Google Cloud Architecture",
				description: "Google Cloud architecture course from Dicoding",
			},
			"8": {
				title: "Web Programming",
				description: "Web programming fundamentals course from Dicoding",
			},
			"9": {
				title: "JavaScript",
				description: "JavaScript programming fundamentals course from Dicoding",
			},
			"10": {
				title: "Git & GitHub",
				description: "Git and GitHub fundamentals course from Dicoding",
			},
			"11": {
				title: "Data Science",
				description: "Data science fundamentals course from Dicoding",
			},
			"12": {
				title: "Python",
				description: "Python programming course from Dicoding",
			},
			"13": {
				title: "SQL",
				description: "Structured Query Language fundamentals course from Dicoding",
			},
			"17": {
				title: "Back-End with Google Cloud",
				description: "Beginner back-end application development course from Dicoding",
			},
			"18": {
				title: "Front-End Web Development",
				description: "Beginner front-end web development course from Dicoding",
			},
			"19": {
				title: "Java",
				description: "Java programming course from Dicoding",
			},
			"20": {
				title: "Machine Learning with Google Cloud",
				description: "Applied machine learning with Google Cloud course from Dicoding",
			},
			"1": {
				title: "Google IT Support",
				description: "Professional Certificate from Google through Coursera",
			},
			"3": {
				title: "Google Cybersecurity",
				description: "Professional Certificate from Google through Coursera",
			},
			"4": {
				title: "CCNA: Introduction to Networks",
				description: "Networking fundamentals course from Cisco Networking Academy",
			},
			"5": {
				title: "Alibaba Cloud Certified Developer",
				description: "Certificate for developing applications with Alibaba Cloud",
			},
			"6": {
				title: "MongoDB",
				description: "MongoDB database course from CODEPOLITAN",
			},
			"7": {
				title: "ReactJS",
				description: "ReactJS development course from CODEPOLITAN",
			},
			"16": {
				title: "Express.js",
				description: "Express.js fundamentals course from CODEPOLITAN",
			},
			"14": {
				title: "Microsoft Office",
				description: "Desktop application training from TRUST Training Partners",
			},
			"15": {
				title: "TOEFL ITP",
				description: "English proficiency certificate with a total score of 523",
			},
			"27": {
				title: "2nd Place — PKM-RSH",
				description:
					"PKM MABA competition, PK2MABA & Startup Academy 2021, FILKOM Universitas Brawijaya",
			},
			"24": {
				title: "Universitas Brawijaya Accreditation",
				description: "BAN-PT institutional accreditation with an Unggul rating",
			},
		},
	},
	viewer: {
		title: "Image viewer",
		close: "Close image viewer",
		previous: "Previous image",
		next: "Next image",
	},
	footer: {
		rights: "All rights reserved.",
		socialLinks: "Social Links",
	},
};

export type Translations = typeof en;
export type Language = "en" | "id";

const id: Translations = {
	nav: {
		home: "Beranda",
		about: "Tentang",
		experiences: "Pengalaman",
		projects: "Proyek",
		certificates: "Sertifikat",
		label: "Navigasi utama",
	},
	controls: {
		changeLanguage: "Ganti ke bahasa Inggris",
		loading: "Memuat portofolio…",
		unmute: "Nyalakan audio",
		mute: "Bisukan audio",
		scrollToTop: "Kembali ke atas",
		close: "Tutup",
	},
	hero: {
		words: ["Pengembang Web", "Dukungan TI", "Infrastruktur TI", "Lulusan Baru"],
		available: "Terbuka untuk Peluang Baru",
		intro: "Halo, saya ",
		description:
			", lulusan Informatika dari Universitas Brawijaya. Saya pernah membangun situs perusahaan dan mendukung operasional TI selama magang. Saya tertarik pada pengembangan web, AI, cloud computing, dan jaringan. Saya mencari kesempatan untuk berkontribusi sambil terus belajar.",
		downloadCv: "Unduh CV Saya",
		downloadCvLabel: "Unduh CV saya",
		connect: "Mari Terhubung",
		scrollToAbout: "Gulir ke Tentang Saya",
		imageAlt: "Seseorang mengintip dari balik laptop",
	},
	about: {
		eyebrow: "Tentang Saya",
		title: "Sekilas Tentang Dunia Saya",
		description: "Kenali saya lebih dekat",
		profile: "Profil",
		techStack: "Teknologi",
		myself: "Tentang Diri Saya",
		mapAlt: "Peta",
		memojiAlt: "Memoji tersenyum",
		biography: [
			{
				text: "Halo, saya Rakan Fadhil Prayata — lulusan ",
				strong: false,
			},
			{
				text: "Teknik Informatika (IPK 3,56)",
				strong: true,
			},
			{
				text: " dari Universitas Brawijaya. Saya pernah ",
				strong: false,
			},
			{
				text: "membangun situs perusahaan",
				strong: true,
			},
			{
				text: " beserta pengelolaan konten dan optimasi SEO, ",
				strong: false,
			},
			{
				text: "mendukung operasional TI",
				strong: true,
			},
			{
				text: ", serta memproduksi video induksi keselamatan. Saya juga mengerjakan proyek akhir di Bangkit Academy dan membantu mahasiswa mempelajari pemrograman web sebagai ",
				strong: false,
			},
			{
				text: "asisten praktikum",
				strong: true,
			},
			{
				text: " di fakultas saya. Skripsi saya berfokus pada analisis sentimen publik menggunakan ",
				strong: false,
			},
			{
				text: "NLP dan machine learning",
				strong: true,
			},
			{
				text: ". Saat ini, saya tertarik pada ",
				strong: false,
			},
			{
				text: "self-hosting dan pengelolaan server rumahan",
				strong: true,
			},
			{
				text: ".",
				strong: false,
			},
		],
	},
	experiences: {
		eyebrow: "Perjalanan Karier",
		title: "Pengalaman Profesional",
		description: "Perjalanan saya dalam berbagai peran dan proyek",
		viewDetails: "Lihat Detail",
		descriptionLabel: "Deskripsi",
		responsibilities: "Tanggung Jawab Utama",
		skills: "Keahlian",
		items: {
			"5": {
				title: "Pengembang Web",
				company: "Tri-Wall Natura Surabaya",
				period: "Jan 2026 - Apr 2026",
				description:
					"Mengembangkan situs perusahaan dalam dua bahasa secara jarak jauh untuk memperluas jangkauan produk dan menarik calon pelanggan.",
				responsibilities: [
					"Membangun dan mengoptimalkan situs perusahaan dalam dua bahasa untuk memperluas jangkauan produk dan menarik calon pelanggan",
					"Menerapkan SEO on-page pada berbagai artikel produk dengan kata kunci terkait kemasan",
				],
			},
			"4": {
				title: "Staf TI",
				company: "Tri-Wall Indonesia",
				period: "Okt 2025 - Apr 2026",
				description:
					"Bekerja sebagai staf TI di Nagasari, Bekasi, dengan tanggung jawab mengelola situs multibahasa dan media internal perusahaan.",
				responsibilities: [
					"Mengembangkan dan memelihara situs perusahaan dalam 4 bahasa dengan lebih dari 76 halaman, meliputi halaman produk, optimasi SEO, dan desain responsif",
					"Mengelola performa, keamanan, dan konten multibahasa agar pengalaman pengguna tetap konsisten di berbagai perangkat",
					"Memproduksi video induksi keselamatan untuk kebutuhan internal perusahaan",
				],
			},
			"3": {
				title: "Bangkit 2024 Angkatan 1 - Jalur Cloud Computing",
				company: "Bangkit Academy oleh Google, Tokopedia, Gojek & Traveloka",
				period: "Feb 2024 - Jun 2024",
				description:
					"Mengikuti jalur pembelajaran cloud computing di Bangkit Academy secara jarak jauh, yang diakhiri dengan proyek akhir pembuatan aplikasi seluler bersama tim lintas jalur.",
				responsibilities: [
					"Berkolaborasi dengan 5 peserta lainnya untuk menyelesaikan proyek akhir berupa aplikasi seluler",
					"Belajar langsung dari mentor tentang pembuatan API backend dan penerapan model AI di cloud untuk aplikasi seluler",
				],
			},
			"2": {
				title: "Asisten Praktikum Pemrograman Web",
				company: "Fakultas Ilmu Komputer (FILKOM), Universitas Brawijaya",
				period: "Feb 2024 - Mei 2024",
				description:
					"Menjadi asisten praktikum Pemrograman Web secara paruh waktu untuk membimbing mahasiswa memahami dasar-dasar pengembangan web.",
				responsibilities: [
					"Membimbing 25 mahasiswa dalam memahami konsep dasar pengembangan web",
					"Memberikan penjelasan tentang HTML, CSS, JavaScript, PHP, dan framework Laravel",
				],
			},
			"1": {
				title: "Staf Desain dan Dokumentasi Multimedia ROMANTICS 2022",
				company: "Eksekutif Mahasiswa Informatika (EMIF) - Universitas Brawijaya",
				period: "Sep 2022 - Nov 2022",
				description:
					"ROMANTICS 2022 merupakan program Departemen Pengembangan Sumber Daya Mahasiswa EMIF untuk mewadahi bakat nonakademik dan minat gim mahasiswa Informatika, Fakultas Ilmu Komputer, Universitas Brawijaya.",
				responsibilities: [
					"Membuat 32 desain grafis berupa feed, story, dan reels untuk publikasi konten",
					"Mendokumentasikan 7 pertandingan, termasuk siaran langsung untuk para peserta",
				],
			},
		},
	},
	projects: {
		eyebrow: "Hasil Nyata",
		title: "Proyek Unggulan",
		description:
			"Jelajahi proyek saya dalam pengembangan web, data science, AI, jaringan, dan konten digital.",
		categories: {
			"App/Website": "Aplikasi/Website",
			"Data Science/AI": "Data Science/AI",
			Network: "Jaringan",
			"Digital Content": "Konten Digital",
		},
		empty: "Belum ada proyek dalam kategori ini.",
		skills: "Keahlian",
		techStack: "Teknologi",
		view: "Lihat",
		viewImage: "Lihat gambar:",
		imageLabel: "Proyek",
		items: {
			portfolio: {
				company: "Proyek Pribadi",
				title: "Portfoliov1",
				results: [
					"Portofolio responsif dengan konten Indonesia dan Inggris serta preferensi bahasa tersimpan",
					"Filter kategori proyek, dialog pengalaman, dan navigasi gambar melalui keyboard",
					"Carousel sertifikat yang dapat digeser, animasi tech stack, dan kontrol audio",
				],
			},
			twi: {
				company: "Tri-Wall Indonesia",
				title: "Halaman Utama — tri-wallindonesia.co.id",
				results: [
					"Situs perusahaan multibahasa dengan dukungan empat bahasa",
					"Informasi perusahaan dan produk dengan tata letak responsif",
					"Optimasi SEO dan pengelolaan konten multibahasa",
				],
			},
			twns: {
				company: "Tri-Wall Natura Surabaya",
				title: "Halaman Utama — twns.co.id",
				results: [
					"Situs perusahaan dalam dua bahasa untuk memperluas jangkauan produk dan menarik calon pelanggan",
					"Halaman utama yang memperkenalkan perusahaan dan produk kemasannya",
					"SEO on-page untuk artikel produk terkait kemasan",
				],
			},
			sentiment: {
				company: "Skripsi",
				title: "IKN Sentiment Analysis",
				results: [
					"Klasifikasi opini tentang IKN menjadi positif, netral, atau negatif menggunakan IndoBERT",
					"Pemodelan topik dalam setiap sentimen menggunakan Top2Vec",
					"Pencarian dan filter opini, ekspor CSV, serta perbandingan laporan evaluasi model",
				],
			},
			agrisense: {
				company: "Bangkit Capstone",
				title: "AgriSense",
				results: [
					"Klasifikasi citra malai padi menjadi matang atau belum matang dengan MobileNetV2 dan TensorFlow Lite",
					"Probabilitas tiap kelas dan riwayat prediksi yang tersimpan di browser",
					"Rincian pembagian dataset, metrik evaluasi, dan confusion matrix model",
				],
			},
			osteoporosis: {
				company: "Pengolahan Citra Digital",
				title: "Classify Osteoporosis",
				results: [
					"Eksperimen klasifikasi citra rontgen lutut menjadi normal atau osteoporosis dengan YOLOv8",
					"Perbandingan metrik pelatihan dan confusion matrix pada lima varian YOLOv8",
					"Eksplorasi dataset dan penyimpanan riwayat prediksi di SQLite dengan ekspor CSV",
				],
			},
			server: {
				company: "Proyek Pribadi",
				title: "Server Rumahan Mandiri dengan Hyper-V & Cloudflare Tunnel",
				results: [
					"Laboratorium server rumahan menggunakan mesin virtual Hyper-V",
					"Mempublikasikan layanan yang dikelola sendiri melalui Cloudflare Tunnel",
					"Mengeksplorasi jaringan virtual dan akses layanan jarak jauh",
				],
			},
			induction: {
				company: "Tri-Wall Indonesia",
				title: "Video Induksi Keselamatan",
				results: [
					"Video induksi keselamatan untuk kebutuhan internal perusahaan",
					"Diproduksi sebagai bagian dari magang staf TI",
				],
			},
		},
	},
	certificates: {
		eyebrow: "Pencapaian",
		title: "Sertifikat Saya",
		description: "Lihat sertifikat profesional dan pencapaian saya",
		viewImage: "Lihat sertifikat:",
		imageLabel: "Sertifikat",
		items: {
			"21": {
				title: "Staf TI — Tri-Wall Indonesia",
				description: "Penyelesaian magang Maganghub di PT. Tri Wall Indonesia",
			},
			"25": {
				title: "Magang Staf TI — Tri-Wall Indonesia",
				description: "Sertifikat apresiasi dari PT. Tri-Wall Indonesia",
			},
			"22": {
				title: "Bangkit Academy — Cloud Computing",
				description: "Sertifikat kelulusan jalur pembelajaran Cloud Computing 2024",
			},
			"23": {
				title: "Asisten Praktikum Pemrograman Web",
				description: "Sertifikat asisten praktikum dari FILKOM, Universitas Brawijaya",
			},
			"26": {
				title: "MSIB Angkatan 6 — Studi Independen Bersertifikat",
				description: "Sertifikat partisipasi dan kelulusan Kampus Merdeka di Dicoding Indonesia",
			},
			"2": {
				title: "Arsitektur Google Cloud",
				description: "Kursus arsitektur Google Cloud dari Dicoding",
			},
			"8": {
				title: "Pemrograman Web",
				description: "Kursus dasar pemrograman web dari Dicoding",
			},
			"9": {
				title: "JavaScript",
				description: "Kursus dasar pemrograman JavaScript dari Dicoding",
			},
			"10": {
				title: "Git & GitHub",
				description: "Kursus dasar Git dan GitHub dari Dicoding",
			},
			"11": {
				title: "Data Science",
				description: "Kursus dasar data science dari Dicoding",
			},
			"12": {
				title: "Python",
				description: "Kursus pemrograman Python dari Dicoding",
			},
			"13": {
				title: "SQL",
				description: "Kursus dasar Structured Query Language dari Dicoding",
			},
			"17": {
				title: "Back-End dengan Google Cloud",
				description: "Kursus pengembangan aplikasi back-end untuk pemula dari Dicoding",
			},
			"18": {
				title: "Pengembangan Web Front-End",
				description: "Kursus pengembangan web front-end untuk pemula dari Dicoding",
			},
			"19": {
				title: "Java",
				description: "Kursus pemrograman Java dari Dicoding",
			},
			"20": {
				title: "Machine Learning dengan Google Cloud",
				description: "Kursus penerapan machine learning dengan Google Cloud dari Dicoding",
			},
			"1": {
				title: "Google IT Support",
				description: "Sertifikat Profesional dari Google melalui Coursera",
			},
			"3": {
				title: "Google Cybersecurity",
				description: "Sertifikat Profesional dari Google melalui Coursera",
			},
			"4": {
				title: "CCNA: Introduction to Networks",
				description: "Kursus dasar jaringan dari Cisco Networking Academy",
			},
			"5": {
				title: "Alibaba Cloud Certified Developer",
				description: "Sertifikat pengembangan aplikasi dengan Alibaba Cloud",
			},
			"6": {
				title: "MongoDB",
				description: "Kursus basis data MongoDB dari CODEPOLITAN",
			},
			"7": {
				title: "ReactJS",
				description: "Kursus pengembangan ReactJS dari CODEPOLITAN",
			},
			"16": {
				title: "Express.js",
				description: "Kursus dasar Express.js dari CODEPOLITAN",
			},
			"14": {
				title: "Microsoft Office",
				description: "Pelatihan aplikasi desktop dari TRUST Training Partners",
			},
			"15": {
				title: "TOEFL ITP",
				description: "Sertifikat kemampuan bahasa Inggris dengan skor total 523",
			},
			"27": {
				title: "Juara 2 — PKM-RSH",
				description:
					"Kompetisi PKM MABA, PK2MABA & Startup Academy 2021, FILKOM Universitas Brawijaya",
			},
			"24": {
				title: "Akreditasi Universitas Brawijaya",
				description: "Akreditasi institusi BAN-PT dengan peringkat Unggul",
			},
		},
	},
	viewer: {
		title: "Penampil gambar",
		close: "Tutup penampil gambar",
		previous: "Gambar sebelumnya",
		next: "Gambar berikutnya",
	},
	footer: {
		rights: "Hak cipta dilindungi.",
		socialLinks: "Tautan media sosial",
	},
};

export const translations = { en, id };
