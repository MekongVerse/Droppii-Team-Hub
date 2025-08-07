document.addEventListener('DOMContentLoaded', function () {

    // Dữ liệu cho menu, được chuyển từ dàn ý bạn cung cấp
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
        {
            category: "Business Plan",
            items: [
                "Mission Statement", "Vision Statement", "Value Proposition",
                "Value Proposition (Short)", "Business Description",
                "What is Success for This Business", "Explaination of Business Model",
                "Metrics that Matter (KPIs)", "Core Problems This Business Solves", "Business Goals"
            ]
        },
        {
            category: "Market Research",
            items: [
                "Needs Analysis", "Market Size Analysis", "Market Trend Analysis",
                "Competitive Analysis", "Market Research Summary", "Customer Journey", "Brand Position"
            ]
        },
        {
            category: "Brand Identity",
            items: [
                "Brand Name", "Tag Line", "Unique Selling Proposition", "Logo", "Colors",
                "Imagery", "Voice and Tone", "Brand Guidelines"
            ]
        },
        {
            category: "Marketing Message",
            items: [
                "Unique Selling Proposition", "Features", "Benefits", "Story Telling",
                "Clear Call to Action", "Irresistible Offer"
            ]
        },
        {
            category: "Marketing Plan",
            items: [
                "Situational Analysis", "Marketing Objectives", "Marketing Strategies",
                "Tactics and Action Plans", "Performance Metrics and KPI's", "Influencer Strategy- Marketing Content",
                "Adventorial", "Website Copy", "Landing Page Copy", "Introduction Video Script",
                "Social Media Bio [Instagram]", "Social Media Bio [Linkedin]", "Facebook Bio [TikTok]",
                "Facebook Ads Concepts", "Content Pillars", "Content Pillar 1 (10 Ideas)",
                "Content Pillar 2 (10 Ideas)", "Content Pillar 3 (10 Ideas)", "Content Pillar 4 (10 Ideas)",
                "Content Pillar 5 (10 Ideas)", "Sales Channels", "Go to Market Strategy", "PR Strategy",
                "Strategic Partner Strategy", "PR Boiler Plate", "Fastest Way to First 100 Customers",
                "Bullseye Framework", "Lean Analytics Stages", "AARRR (Pirate Metrics) Framework"
            ]
        },
        {
            category: "Raising Capital",
            items: [
                "Why a VC Would Decline to Invest", "Business Model Risks",
                "Why a VC Would Want to Invest", "Investor Presentation Slides to Raisie $5M USD"
            ]
        },
        {
            category: "Just for Fun",
            items: [
                "Advice from Steve Jobs", "Advice from Elon Musk", "Advice from Jeff Bezos",
                "Advice from Peter Thiel", "Advice from Mark Zuckerberg", "Advice from Paul Graham",
                "Advice from Ried Hoffman", "Advice from Niel Patel"
            ]
        }
    ];

    const sidebar = document.getElementById('sidebar');
    const contentArea = document.getElementById('content-area');
    let activeMenuItem = null;

    // Hàm tạo menu từ dữ liệu
    function generateMenu() {
        businessPlanOutline.forEach(section => {
            // Tạo container cho mỗi danh mục
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('menu-category');

            // Tạo tiêu đề danh mục (có thể nhấp để mở/đóng)
            const title = document.createElement('div');
            title.textContent = section.category;
            title.classList.add('menu-category-title');
            categoryDiv.appendChild(title);

            // Tạo danh sách con (submenu)
            const submenu = document.createElement('ul');
            submenu.classList.add('submenu', 'collapsed'); // Mặc định đóng
            section.items.forEach(itemText => {
                const listItem = document.createElement('li');
                const link = document.createElement('a'); // Dùng <a> để có ngữ nghĩa tốt hơn
                link.textContent = itemText;
                link.classList.add('menu-item');
                link.setAttribute('href', '#'); // Tránh trang nhảy lên đầu
                listItem.appendChild(link);
                submenu.appendChild(listItem);
            });

            categoryDiv.appendChild(submenu);
            sidebar.appendChild(categoryDiv);
        });
    }

    // Hàm cập nhật nội dung
    function updateContent(title) {
        contentArea.innerHTML = `
            <h1>${title}</h1>
            <p>Awaiting Content. Details for this section will be added here.</p>
        `;
    }
    
    // Gắn trình xử lý sự kiện vào sidebar (sử dụng event delegation)
    sidebar.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
        const target = event.target;

        // Xử lý khi nhấp vào tiêu đề danh mục
        if (target.classList.contains('menu-category-title')) {
            target.classList.toggle('open');
            const submenu = target.nextElementSibling;
            submenu.classList.toggle('collapsed');
        }

        // Xử lý khi nhấp vào một mục con
        if (target.classList.contains('menu-item')) {
            // Bỏ active ở mục cũ (nếu có)
            if (activeMenuItem) {
                activeMenuItem.classList.remove('active');
            }
            // Đặt active cho mục mới
            target.classList.add('active');
            activeMenuItem = target;

            updateContent(target.textContent);
        }
    });

    // Bắt đầu!
    generateMenu();
});
