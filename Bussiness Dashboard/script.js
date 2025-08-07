document.addEventListener('DOMContentLoaded', function () {

    // ==================================================================
    // THƯ VIỆN NỘI DUNG TRUNG TÂM
    // ==================================================================
    const pageContent = {
        "idea-brand-business-plan": `<h1>Idea - "Brand" Business Plan</h1><p>Awaiting Content...</p>`,
        "customer-profile": `<h1>Customer Profile</h1><p>Awaiting Content...</p>`,
        
        // === NỘI DUNG CHO 'target-audience' ĐÃ ĐƯỢC CẬP NHẬT ===
        "target-audience": `
            <main class="container mx-auto px-6 py-12">
                <!-- Section 1: Overview -->
                <section id="overview" class="text-center mb-24">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Cỗ Máy Tăng Trưởng Hiệu Suất Nội Bộ</h2>
                    <p class="max-w-3xl mx-auto text-gray-600 text-lg mb-12">
                        Droppii Team Hub không phải là một sản phẩm, mà là một khoản đầu tư chiến lược của Mentor. Nền tảng này giải quyết các "nỗi đau" cốt lõi: tỷ lệ rời bỏ cao, tốc độ đạt hiệu suất chậm và thiếu công cụ tạo động lực, nhằm tối ưu hóa ROI cho Mentor và thúc đẩy thu nhập cho thành viên.
                    </p>
                    <div class="card p-8 max-w-4xl mx-auto">
                        <h3 class="font-bold text-xl mb-6">Vòng Lặp Giá Trị</h3>
                        <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
                            <div class="text-center">
                                <div class="bg-orange-100 text-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold">💰</div>
                                <p class="mt-2 font-semibold">Mentor Đầu Tư</p>
                            </div>
                            <div class="text-gray-400 text-4xl font-light transform rotate-90 md:rotate-0">→</div>
                            <div class="text-center">
                                <div class="bg-blue-100 text-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold">🚀</div>
                                <p class="mt-2 font-semibold">Hub Thúc Đẩy</p>
                            </div>
                            <div class="text-gray-400 text-4xl font-light transform rotate-90 md:rotate-0">→</div>
                            <div class="text-center">
                                <div class="bg-green-100 text-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold">📈</div>
                                <p class="mt-2 font-semibold">Hiệu Suất Tăng</p>
                            </div>
                            <div class="text-gray-400 text-4xl font-light transform rotate-90 md:rotate-0">→</div>
                            <div class="text-center">
                                <div class="bg-purple-100 text-purple-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-3xl font-bold">🏆</div>
                                <p class="mt-2 font-semibold">Tối Ưu ROI</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section 2: Personas -->
                <section id="personas" class="mb-24">
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

                <!-- Section 3: Gamification -->
                <section id="gamification" class="mb-24">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-4">Giải Mã "Game Hóa"</h2>
                    <p class="max-w-3xl mx-auto text-gray-600 text-center mb-12">Chúng tôi xây dựng một Hệ Thống Cạnh Tranh Đa Tầng để thúc đẩy cạnh tranh lành mạnh, tạo động lực cho tất cả mọi người thay vì gây nản lòng.</p>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="card p-8 text-center">
                            <div class="text-5xl mb-4">🥇</div>
                            <h3 class="text-xl font-bold mb-2">Tầng 1: Vượt Ngưỡng Bản Thân</h3>
                            <p class="text-gray-600">Cạnh tranh với chính mình của ngày hôm qua. Xây dựng sự tự tin từ bên trong và nuôi dưỡng thói quen chiến thắng.</p>
                        </div>
                        <div class="card p-8 text-center">
                            <div class="text-5xl mb-4">🧑‍🤝‍🧑</div>
                            <h3 class="text-xl font-bold mb-2">Tầng 2: Đua Top Nhóm Nhỏ</h3>
                            <p class="text-gray-600">Tạo các "giải đấu" nhỏ hàng tuần cho các nhóm có hiệu suất tương đương. Tạo cảm giác "mình có cơ hội".</p>
                        </div>
                        <div class="card p-8 text-center">
                            <div class="text-5xl mb-4">👑</div>
                            <h3 class="text-xl font-bold mb-2">Tầng 3: Đấu Trường Danh Vọng</h3>
                            <p class="text-gray-600">Vinh danh các "chiến thần" xuất sắc nhất. Tạo ra khát khao và hình mẫu lý tưởng để mọi người noi theo.</p>
                        </div>
                    </div>
                </section>
            </main>
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
