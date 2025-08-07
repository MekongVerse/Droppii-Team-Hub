document.addEventListener('DOMContentLoaded', function () {

    // ==================================================================
    // THƯ VIỆN NỘI DUNG TRUNG TÂM
    // ==================================================================
    const pageContent = {
        "idea-brand-business-plan": `<h1>Idea - "Brand" Business Plan</h1><p>Awaiting Content...</p>`,
        "customer-profile": `<h1>Customer Profile</h1><p>Awaiting Content...</p>`,
        
        // === NỘI DUNG MỚI CHO TARGET AUDIENCE ĐÃ ĐƯỢC CHIẾT XUẤT ===
        "target-audience": `
            <section id="personas">
                <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-4">Chân Dung Hai Đối Tượng Vàng</h2>
                <p class="max-w-3xl mx-auto text-gray-600 text-center mb-12">Hiểu rõ nhu cầu và tâm lý của Mentor và Thành viên là chìa khóa để xây dựng một nền tảng thực sự giá trị.</p>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="card p-8">
                        <h3 class="text-2xl font-bold mb-4">Mentor (Nhà Đầu Tư)</h3>
                        <p class="text-gray-600 mb-6">Nhà lãnh đạo, nhà xây dựng hệ thống, tập trung vào tăng trưởng bền vững và hiệu quả quản lý.</p>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-center"><span class="text-xl mr-3">🎯</span> Tư duy chiến lược, hướng đến ROI.</li>
                            <li class="flex items-center"><span class="text-xl mr-3">📊</span> Mong muốn quản lý dựa trên dữ liệu.</li>
                            <li class="flex items-center"><span class="text-xl mr-3">🛠️</span> Sẵn sàng đầu tư vào công cụ tạo đòn bẩy.</li>
                            <li class="flex items-center"><span class="text-xl mr-3">🏆</span> Giá trị cốt lõi: Hiệu quả & Sự thành công của đội nhóm.</li>
                        </ul>
                    </div>
                    <div class="card p-8">
                        <h3 class="text-2xl font-bold mb-4">Thành Viên (Người Dùng)</h3>
                        <p class="text-gray-600 mb-6">Những cá nhân có mục tiêu nhưng đôi khi thiếu phương hướng, cần một lộ trình rõ ràng và sự công nhận.</p>
                        <ul class="space-y-3 text-gray-700">
                            <li class="flex items-center"><span class="text-xl mr-3">🧭</span> Cần một quy trình có cấu trúc, dễ đi theo.</li>
                            <li class="flex items-center"><span class="text-xl mr-3">💡</span> Được thúc đẩy bởi mục tiêu rõ ràng và sự công nhận.</li>
                            <li class="flex items-center"><span class="text-xl mr-3">🤝</span> Tìm kiếm sự hỗ trợ từ cộng đồng.</li>
                            <li class="flex items-center"><span class="text-xl mr-3">💸</span> Giá trị cốt lõi: Tăng thu nhập & Cảm giác thành tựu.</li>
                        </ul>
                    </div>
                </div>
            </section>
        `,
        // ==========================================================

        "psychographic-segmentation": `<h1>Psychographic Segmentation</h1><p>Awaiting Content...</p>`,
        "latent-pain-points": `<h1>Latent Pain Points</h1><p>Awaiting Content...</p>`,
        "dream-state": `<h1>Dream State</h1><p>Awaiting Content...</p>`,
    };


    // Dữ liệu cho menu (giữ nguyên)
    const businessPlanOutline = [
        {
            category: "Product / Service / Business Idea",
            items: [
                "Idea- \"Brand\" Business Plan", "Customer Profile", "Target Audience",
                "Psychographic Segmentation", "Latent Pain Points", "Dream State",
                "Steven Reiss's 16 Human Desires", "Freud's Psychoanalytic Theory",
                "Carl Rogers' Humanistic Theory", "Summary of Target Audience",
                "Summary of Psychological Insights", "Persona 1", "Persona 2", "Persona 3",
                "Buyer Personas"
            ]
        },
        // ... các category khác giữ nguyên
    ];

    const sidebar = document.getElementById('sidebar');
    const contentArea = document.getElementById('content-area');
    let activeMenuItem = null;

    function createPageId(text) {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    }

    function generateMenu() {
        businessPlanOutline.forEach(section => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('menu-category');

            const title = document.createElement('div');
            title.textContent = section.category;
            title.classList.add('menu-category-title');
            categoryDiv.appendChild(title);

            const submenu = document.createElement('ul');
            submenu.classList.add('submenu', 'collapsed');
            section.items.forEach(itemText => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = itemText;
                link.classList.add('menu-item');
                link.setAttribute('href', '#');
                const pageId = createPageId(itemText);
                link.setAttribute('data-id', pageId); 
                listItem.appendChild(link);
                submenu.appendChild(listItem);
            });

            categoryDiv.appendChild(submenu);
            sidebar.appendChild(categoryDiv);
        });
    }

    function updateContent(pageId) {
        const content = pageContent[pageId];
        if (content) {
            contentArea.innerHTML = content;
        } else {
            const title = pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            contentArea.innerHTML = `
                <h1 class="text-3xl font-bold mb-4">${title}</h1>
                <p class="text-gray-600">Awaiting Content. Details for this section will be added here.</p>
            `;
        }
    }
    
    sidebar.addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('menu-category-title')) {
            target.classList.toggle('open');
            const submenu = target.nextElementSibling;
            submenu.classList.toggle('collapsed');
        }

        if (target.classList.contains('menu-item')) {
            if (activeMenuItem) {
                activeMenuItem.classList.remove('active');
            }
            target.classList.add('active');
            activeMenuItem = target;
            const pageIdToLoad = target.getAttribute('data-id');
            updateContent(pageIdToLoad);
        }
    });

    generateMenu();
    const firstMenuItem = document.querySelector('.menu-item');
    if (firstMenuItem) {
        firstMenuItem.click();
    }
});
