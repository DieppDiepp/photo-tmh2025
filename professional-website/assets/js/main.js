// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });
});

// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Image modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.querySelector('.modal-caption');
const closeModal = document.querySelector('.close');

// Add click event to all images
document.querySelectorAll('.media-item img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalCaption.textContent = this.alt;
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Gallery filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('gallery');

// Gallery data
const galleryData = [
    {
        type: 'photos',
        category: 'team',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/00_airport/SelfieVoiSanBayBMT.jpg',
        alt: 'Selfie tại sân bay BMT',
        title: 'Khởi đầu hành trình'
    },
    {
        type: 'photos',
        category: 'travel',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/00_airport/NhinTuCuaSoMayBay.jpg',
        alt: 'Nhìn từ cửa sổ máy bay',
        title: 'Trên chuyến bay'
    },
    {
        type: 'photos',
        category: 'food',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/00_airport/MotToPhoSanBayNoiBai.jpg',
        alt: 'Tô phở sân bay Nội Bài',
        title: 'Phở đầu tiên tại Hà Nội'
    },
    {
        type: 'photos',
        category: 'food',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/02_Food/PhoGaHaNoi.jpg',
        alt: 'Phở gà Hà Nội',
        title: 'Phở gà trứ danh'
    },
    {
        type: 'photos',
        category: 'food',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/02_Food/DiAnCungVoiMentor.jpg',
        alt: 'Đi ăn cùng Mentor',
        title: 'Bữa ăn cùng mentor'
    },
    {
        type: 'photos',
        category: 'team',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/03_DH_KTQD/DangHackathon.jpg',
        alt: 'Đang hackathon',
        title: 'Giờ phút hackathon'
    },
    {
        type: 'photos',
        category: 'team',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/03_DH_KTQD/LongChupCungVoiPoster.jpg',
        alt: 'Long chụp cùng poster',
        title: 'Long và poster'
    },
    {
        type: 'photos',
        category: 'team',
        src: 'https://raw.githubusercontent.com/DieppDiepp/photo-tmh2025/main/04_ChucMungSinhNhatTeammate/AnhchupSinhNhat.jpg',
        alt: 'Ảnh chụp sinh nhật',
        title: 'Sinh nhật bất ngờ'
    },
    {
        type: 'videos',
        category: 'team',
        src: 'https://www.youtube.com/embed/rMo0r0Ffi6c',
        alt: 'Khung cảnh KTX',
        title: 'Khung cảnh ký túc xá'
    },
    {
        type: 'videos',
        category: 'food',
        src: 'https://www.youtube.com/embed/I7Tu_jWK5bs',
        alt: 'Đi ăn phở bò',
        title: 'Thưởng thức phở bò'
    }
];

// Populate gallery
function populateGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.type === filter || item.category === filter);
    
    filteredData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        if (item.type === 'videos') {
            galleryItem.innerHTML = `
                <div class="video-thumbnail">
                    <iframe src="${item.src}" title="${item.title}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="gallery-info">
                    <h4>${item.title}</h4>
                    <p>${item.alt}</p>
                </div>
            `;
        } else {
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-info">
                        <h4>${item.title}</h4>
                        <p>${item.alt}</p>
                    </div>
                    <div class="gallery-actions">
                        <button class="gallery-btn" onclick="openImageModal('${item.src}', '${item.alt}')">
                            <i class="fas fa-expand"></i>
                        </button>
                    </div>
                </div>
            `;
        }
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        populateGallery(filter);
    });
});

// Open image modal
function openImageModal(src, alt) {
    modal.style.display = 'block';
    modalImg.src = src;
    modalCaption.textContent = alt;
    document.body.style.overflow = 'hidden';
}

// Initialize gallery
populateGallery();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for gallery items
const galleryCSS = `
.gallery-item {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    background: var(--bg-primary);
    box-shadow: var(--shadow-md);
    transition: var(--transition);
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
}

.gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
}

.gallery-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: var(--transition);
}

.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8));
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    opacity: 0;
    transition: var(--transition);
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.gallery-info h4 {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.gallery-info p {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.gallery-actions {
    display: flex;
    gap: 10px;
}

.gallery-btn {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.2);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    transition: var(--transition);
    backdrop-filter: blur(10px);
}

.gallery-btn:hover {
    background: var(--primary-color);
    transform: scale(1.1);
}

.video-thumbnail iframe {
    width: 100%;
    height: 250px;
    border: none;
    border-radius: var(--border-radius);
}

.gallery-item .gallery-info {
    padding: 15px;
    background: var(--bg-primary);
}

.gallery-item .gallery-info h4 {
    color: var(--text-primary);
    margin-bottom: 5px;
}

.gallery-item .gallery-info p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = galleryCSS;
document.head.appendChild(style);