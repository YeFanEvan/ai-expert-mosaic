/**
 * AI专家数据配置
 * 包含11位顶尖AI专家的详细信息，包括个人资料、专业领域、社交媒体链接等
 */
const aiExperts = [
    {
        name: "Kevin Weil", // 专家姓名
        nameCn: "凯文·韦尔", // 中文姓名
        title: "Former Twitter VP & AI Entrepreneur", // 职位标题
        titleCn: "前Twitter副总裁与AI企业家", // 中文职位
        bio: "Former VP of Product at Twitter and Instagram, now focused on AI and machine learning ventures. Expert in scaling social platforms and data-driven product development.", // 英文简介
        bioCn: "前Twitter和Instagram产品副总裁，现专注于AI和机器学习创业。在扩展社交平台和数据驱动产品开发方面的专家。", // 中文简介
        avatar: "KW", // 头像字母缩写
        image: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/p/h/PHOTO_KEVIN_WEIL.jpg?crop=0%2C0%2C3993%2C3993&wid=150&hei=150&scl=26.62", // 头像图片URL
        category: "entrepreneur", // 分类标签
        keywords: ["social platforms", "product development", "data science", "AI ventures", "社交平台", "产品开发", "数据科学", "AI创业"], // 关键词（支持中英文）
        social: { // 社交媒体链接
            twitter: "https://twitter.com/kevinweil",
            youtube: "https://www.youtube.com/results?search_query=Kevin+Weil+OpenAI+CPO"
        }
    },

    {
        name: "Josh Woodward",
        nameCn: "乔什·伍德沃德",
        title: "Ex-NotebookLM Lead",
        titleCn: "前NotebookLM负责人",
        bio: "Former lead of Google's NotebookLM, pioneering AI-powered research and note-taking tools. Expert in knowledge management and AI-assisted learning.",
        bioCn: "Google NotebookLM前负责人，开创性地开发AI驱动的研究和笔记工具。知识管理和AI辅助学习专家。",
        avatar: "JW",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
        category: "google",
        keywords: ["NotebookLM", "knowledge management", "AI-assisted learning", "research tools", "知识管理", "AI辅助学习", "研究工具"],
        social: {
            twitter: "https://twitter.com/joshwoodward",
            youtube: "https://www.youtube.com/results?search_query=Josh+Woodward+Google+Labs+NotebookLM"
        }
    },
    {
        name: "Sundar Pichai",
        nameCn: "桑达尔·皮查伊",
        title: "Google CEO & AI Visionary",
        titleCn: "Google CEO与AI愿景家",
        bio: "CEO of Google and Alphabet, leading the company's AI-first transformation. Overseeing the development of Google's AI initiatives including Gemini, Bard, and AI integration across all Google products.",
        bioCn: "Google和Alphabet的CEO，领导公司的AI优先转型。监督Google的AI计划发展，包括Gemini、Bard以及所有Google产品的AI集成。",
        avatar: "SP",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/250px-Sundar_Pichai_-_2023_%28cropped%29.jpg",
        category: "google",
        keywords: ["Google", "Gemini", "Bard", "multimodal AI", "advanced reasoning", "Google DeepMind", "AI转型", "多模态AI", "高级推理"],
        social: {
            twitter: "https://twitter.com/sundarpichai",
            youtube: "https://www.youtube.com/results?search_query=Sundar+Pichai+Google+CEO+AI"
        }
    },
    {
        name: "Amanda Askell",
        nameCn: "阿曼达·阿斯克尔",
        title: "Anthropic Research Scientist",
        titleCn: "Anthropic研究科学家",
        bio: "Research scientist at Anthropic focusing on AI safety and alignment. Leading work on constitutional AI and responsible AI development practices.",
        bioCn: "Anthropic研究科学家，专注于AI安全和对齐。领导宪法AI和负责任AI发展实践的工作。",
        avatar: "AA",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
        category: "anthropic",
        keywords: ["AI safety", "AI alignment", "constitutional AI", "Anthropic", "AI安全", "AI对齐", "宪法AI"],
        social: {
            twitter: "https://twitter.com/amandaaskell",
            youtube: "https://www.youtube.com/results?search_query=Amanda+Askell+Anthropic+Claude"
        }
    },
    {
        name: "Andrej Karpathy",
        nameCn: "安德烈·卡帕西",
        title: "AI Researcher & Educator",
        titleCn: "AI研究员与教育家",
        bio: "Former Tesla AI Director and OpenAI researcher. Renowned for his contributions to computer vision, neural networks, and AI education through clear explanations.",
        bioCn: "前特斯拉AI总监和OpenAI研究员。以其在计算机视觉、神经网络和AI教育方面的贡献而闻名，擅长清晰的解释。",
        avatar: "AK",
        image: "https://karpathy.ai/assets/me_new.jpg",
        category: "entrepreneur",
        keywords: ["computer vision", "neural networks", "AI education", "Tesla", "OpenAI", "计算机视觉", "神经网络", "AI教育", "特斯拉"],
        social: {
            twitter: "https://twitter.com/karpathy",
            youtube: "https://youtube.com/@AndrejKarpathy"
        }
    },
    {
        name: "Elon Musk",
        nameCn: "埃隆·马斯克",
        title: "xAI Founder & CEO",
        titleCn: "xAI创始人兼CEO",
        bio: "Entrepreneur and innovator behind xAI, Tesla's Autopilot, and Neuralink. Driving the development of AGI and brain-computer interfaces.",
        bioCn: "xAI、特斯拉自动驾驶和Neuralink背后的企业家和创新者。推动AGI和脑机接口的发展。",
        avatar: "EM",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg/250px-USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg",
        category: "entrepreneur",
        keywords: ["xAI", "Tesla Autopilot", "Neuralink", "AGI", "brain-computer interfaces", "特斯拉自动驾驶", "脑机接口", "通用人工智能"],
        social: {
            twitter: "https://twitter.com/elonmusk",
            youtube: "https://www.youtube.com/results?search_query=Elon+Musk+xAI+Tesla+AI"
        }
    },
    {
        name: "Sam Altman",
        nameCn: "萨姆·奥特曼",
        title: "OpenAI CEO",
        titleCn: "OpenAI首席执行官",
        bio: "CEO of OpenAI, leading the development of GPT models and advancing the mission of ensuring AGI benefits all of humanity. Visionary in AI governance and policy.",
        bioCn: "OpenAI首席执行官，领导GPT模型的开发，推进确保AGI造福全人类的使命。AI治理和政策方面的远见者。",
        avatar: "SA",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg/250px-Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg",
        category: "openai",
        keywords: ["GPT models", "AGI", "AI governance", "OpenAI", "AI policy", "GPT模型", "通用人工智能", "AI治理", "AI政策"],
        social: {
            twitter: "https://twitter.com/sama",
            youtube: "https://www.youtube.com/results?search_query=Sam+Altman+OpenAI+CEO"
        }
    },
    {
        name: "Demis Hassabis",
        nameCn: "德米斯·哈萨比斯",
        title: "Google DeepMind CEO",
        titleCn: "Google DeepMind首席执行官",
        bio: "CEO and co-founder of DeepMind, now part of Google. Pioneer in artificial general intelligence research, leading breakthroughs in AlphaGo, AlphaFold, and protein folding.",
        bioCn: "DeepMind的CEO和联合创始人，现为Google的一部分。人工通用智能研究的先驱，在AlphaGo、AlphaFold和蛋白质折叠方面取得突破性进展。",
        avatar: "DH",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Demis_Hassabis_in_2025_by_Christopher_Michel_A.jpg/250px-Demis_Hassabis_in_2025_by_Christopher_Michel_A.jpg",
        category: "google",
        keywords: ["DeepMind", "AlphaGo", "AlphaFold", "protein folding", "AGI research", "蛋白质折叠", "AGI研究", "人工通用智能"],
        social: {
            twitter: "https://twitter.com/demishassabis",
            youtube: "https://www.youtube.com/results?search_query=Demis+Hassabis+DeepMind+Google"
        }
    },
    {
        name: "Geoffrey Hinton",
        nameCn: "杰弗里·辛顿",
        title: "2024 Nobel Prize Winner & AI Godfather",
        titleCn: "2024年诺贝尔奖得主，AI教父",
        bio: "2024 Nobel Prize in Physics winner, widely regarded as the 'Godfather of AI'. Pioneer of deep learning and neural networks, former Google researcher who left to warn about AI risks.",
        bioCn: "2024年诺贝尔物理学奖得主，被誉为'AI教父'。深度学习和神经网络的先驱，前Google研究员，离职后致力于警告AI风险。",
        avatar: "GH",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Geoffrey_Hinton_at_UofT_%28cropped%29.jpg/250px-Geoffrey_Hinton_at_UofT_%28cropped%29.jpg",
        category: "researcher",
        keywords: ["Nobel Prize", "deep learning", "neural networks", "AI safety", "Google", "诺贝尔奖", "深度学习", "神经网络", "AI安全"],
        social: {
            twitter: "https://twitter.com/geoffreyhinton",
            youtube: "https://www.youtube.com/results?search_query=Geoffrey+Hinton+Nobel+Prize+AI"
        }
    },
    {
        name: "Fei-Fei Li",
        nameCn: "李飞飞",
        title: "World Labs CEO & Stanford Professor",
        titleCn: "World Labs CEO，斯坦福教授",
        bio: "Co-founder and CEO of World Labs, focusing on spatial intelligence AI. Former Director of Stanford AI Lab and Chief Scientist at Google Cloud. Pioneer in computer vision and ImageNet.",
        bioCn: "World Labs联合创始人兼CEO，专注于空间智能AI。前斯坦福AI实验室主任和Google Cloud首席科学家。计算机视觉和ImageNet的先驱。",
        avatar: "FL",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Fei-Fei_Li_at_AI_for_Good_2017.jpg/250px-Fei-Fei_Li_at_AI_for_Good_2017.jpg",
        category: "entrepreneur",
        keywords: ["World Labs", "computer vision", "ImageNet", "Stanford", "spatial intelligence", "计算机视觉", "斯坦福", "空间智能"],
        social: {
            twitter: "https://twitter.com/drfeifei",
            youtube: "https://www.youtube.com/results?search_query=Fei-Fei+Li+Stanford+AI"
        }
    },
    {
        name: "Andrew Ng",
        nameCn: "吴恩达",
        title: "AI Fund Partner & DeepLearning.AI Founder",
        titleCn: "AI Fund合伙人，DeepLearning.AI创始人",
        bio: "Managing General Partner at AI Fund, Founder of DeepLearning.AI and Coursera. Former Chief Scientist at Baidu and Director of Stanford AI Lab. Amazon Board Director since 2024.",
        bioCn: "AI Fund管理合伙人，DeepLearning.AI和Coursera创始人。前百度首席科学家和斯坦福AI实验室主任。2024年起担任亚马逊董事。",
        avatar: "AN",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Andrew_Ng_2017.jpg/250px-Andrew_Ng_2017.jpg",
        category: "entrepreneur",
        keywords: ["DeepLearning.AI", "Coursera", "AI Fund", "machine learning", "Amazon", "深度学习", "机器学习", "在线教育"],
        social: {
            twitter: "https://twitter.com/AndrewYNg",
            youtube: "https://www.youtube.com/results?search_query=Andrew+Ng+machine+learning"
        }
    }
];

/**
 * 创建骨架屏卡片
 * 在数据加载时显示占位符卡片，提供更好的用户体验
 * @param {number} count - 要创建的骨架屏卡片数量，默认为11
 */
function createSkeletonCards(count = 11) {
    const expertsGrid = document.querySelector('.experts-grid'); // 获取专家网格容器
    expertsGrid.innerHTML = ''; // 清空现有内容

    // 循环创建指定数量的骨架屏卡片
    for (let i = 0; i < count; i++) {
        const skeletonCard = document.createElement('div');
        skeletonCard.className = 'skeleton-card';
        skeletonCard.innerHTML = `
            <div class="skeleton-avatar skeleton"></div>
            <div class="skeleton-text title skeleton"></div>
            <div class="skeleton-text subtitle skeleton"></div>
            <div class="skeleton-text bio skeleton"></div>
            <div class="skeleton-text bio skeleton"></div>
            <div class="skeleton-text bio skeleton"></div>
            <div class="skeleton-social">
                <div class="skeleton-social-item skeleton"></div>
                <div class="skeleton-social-item skeleton"></div>
                <div class="skeleton-social-item skeleton"></div>
            </div>
        `;
        expertsGrid.appendChild(skeletonCard); // 添加到网格容器中
    }
}

/**
 * 生成专家卡片
 * 根据提供的专家数据生成卡片，支持加载动画和交互功能
 * @param {Array} expertsToShow - 要显示的专家数据数组，默认为所有专家
 */
function generateExpertCards(expertsToShow = aiExperts) {
    const expertsGrid = document.querySelector('.experts-grid'); // 获取专家网格容器

    // 如果没有找到专家，显示无结果状态
    if (expertsToShow.length === 0) {
        expertsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>未找到专家</h3>
                <p>请尝试调整搜索或筛选条件</p>
            </div>
        `;
        return;
    }

    // 首先显示骨架屏卡片
    createSkeletonCards(expertsToShow.length);

    // 模拟加载延迟以展示加载效果
    setTimeout(() => {
        expertsGrid.innerHTML = ''; // 清除骨架屏卡片

        // 为每个专家创建卡片
        expertsToShow.forEach((expert, index) => {
            const card = document.createElement('div');
            card.className = 'expert-card';
            card.style.animationDelay = `${index * 0.1}s`; // 设置动画延迟

            // 设置数据属性用于搜索和过滤
            card.dataset.category = expert.category;
            card.dataset.keywords = expert.keywords.join(' ').toLowerCase(); // 包含中英文关键词
            card.dataset.name = (expert.name + ' ' + (expert.nameCn || '')).toLowerCase(); // 中英文姓名
            card.dataset.title = (expert.title + ' ' + (expert.titleCn || '')).toLowerCase(); // 中英文职位

            // 生成卡片HTML内容
            card.innerHTML = `
                <div class="expert-avatar">
                    <img src="${expert.image}" alt="${expert.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="avatar-fallback" style="display: none;">${expert.avatar}</div>
                </div>
                <h3 class="expert-name">${expert.name}</h3>
                <p class="expert-title">${expert.title}</p>
                <p class="expert-bio">${expert.bio}</p>
                <div class="expert-social">
                    <a href="${expert.social.twitter}" class="social-link twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="${expert.social.youtube}" class="social-link youtube" target="_blank" rel="noopener noreferrer" title="YouTube">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
                <button class="view-details-btn" data-expert-index="${aiExperts.indexOf(expert)}">
                    查看详情
                </button>
            `;

            // 为卡片添加点击事件以打开模态框
            card.addEventListener('click', (e) => {
                // 如果点击的是社交链接或详情按钮，不触发卡片点击事件
                if (!e.target.closest('.social-link') && !e.target.closest('.view-details-btn')) {
                    openExpertModal(expert);
                }
            });

            // 为查看详情按钮添加点击事件
            const viewDetailsBtn = card.querySelector('.view-details-btn');
            viewDetailsBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // 阻止事件冒泡
                openExpertModal(expert);
            });

            expertsGrid.appendChild(card);
        });

        // Re-initialize scroll animations for new cards
        setTimeout(() => initScrollAnimations(), 100);
    }, 800); // 800ms delay to show skeleton loading
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(251, 251, 253, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(251, 251, 253, 0.8)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe expert cards
    setTimeout(() => {
        const expertCards = document.querySelectorAll('.expert-card');
        expertCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }, 100);
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
}

/**
 * 搜索和过滤功能初始化
 * 支持中英文搜索，按分类过滤，实时更新结果
 */
function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput'); // 搜索输入框
    const clearSearch = document.getElementById('clearSearch'); // 清除搜索按钮
    const filterButtons = document.querySelectorAll('.filter-btn'); // 过滤按钮组

    let currentFilter = 'all'; // 当前过滤分类
    let currentSearch = ''; // 当前搜索关键词

    // 搜索功能
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase().trim(); // 获取并处理搜索关键词
        clearSearch.style.display = currentSearch ? 'block' : 'none'; // 显示/隐藏清除按钮
        filterExperts(); // 执行过滤
    });

    // 清除搜索
    clearSearch.addEventListener('click', () => {
        searchInput.value = ''; // 清空输入框
        currentSearch = '';
        clearSearch.style.display = 'none'; // 隐藏清除按钮
        filterExperts(); // 重新过滤
        searchInput.focus(); // 重新聚焦到搜索框
    });

    // 分类过滤功能
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新激活状态的过滤按钮
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.dataset.filter; // 获取过滤分类
            filterExperts(); // 执行过滤
        });
    });

    /**
     * 根据搜索和分类条件过滤专家
     */
    function filterExperts() {
        let filteredExperts = aiExperts; // 从所有专家开始

        // 应用分类过滤
        if (currentFilter !== 'all') {
            filteredExperts = filteredExperts.filter(expert =>
                expert.category === currentFilter
            );
        }

        // 应用搜索过滤（支持中英文）
        if (currentSearch) {
            filteredExperts = filteredExperts.filter(expert => {
                // 构建可搜索的文本，包含中英文信息
                const searchableText = [
                    expert.name, // 英文姓名
                    expert.nameCn || '', // 中文姓名
                    expert.title, // 英文职位
                    expert.titleCn || '', // 中文职位
                    expert.bio, // 英文简介
                    expert.bioCn || '', // 中文简介
                    ...expert.keywords // 中英文关键词
                ].join(' ').toLowerCase();

                // 检查是否包含搜索关键词
                return searchableText.includes(currentSearch);
            });
        }

        generateExpertCards(filteredExperts); // 生成过滤后的专家卡片
        updateResultsCount(filteredExperts.length); // 更新结果计数
    }

    /**
     * 更新结果计数显示
     * @param {number} count - 当前显示的专家数量
     */
    function updateResultsCount(count) {
        const subtitle = document.querySelector('.section-subtitle');
        const totalExperts = aiExperts.length;

        if (currentSearch || currentFilter !== 'all') {
            subtitle.textContent = `显示 ${count} / ${totalExperts} 位专家`;
        } else {
            subtitle.textContent = '遇见推动AI创新的远见者们';
        }
    }
}

/**
 * 专家详情模态框
 * 打开专家详情模态框，显示完整的专家信息
 * @param {Object} expert - 专家数据对象
 */
function openExpertModal(expert) {
    const modal = document.getElementById('expertModal'); // 模态框容器
    const modalImage = document.getElementById('modalImage'); // 专家头像
    const modalAvatarFallback = document.getElementById('modalAvatarFallback'); // 头像备用显示
    const modalName = document.getElementById('modalName'); // 专家姓名
    const modalTitle = document.getElementById('modalTitle'); // 专家职位
    const modalBio = document.getElementById('modalBio'); // 专家简介
    const modalKeywords = document.getElementById('modalKeywords'); // 专业领域关键词
    const modalSocial = document.getElementById('modalSocial'); // 社交媒体链接

    // 填充模态框内容
    modalImage.src = expert.image;
    modalImage.alt = expert.name;
    modalAvatarFallback.textContent = expert.avatar;

    // 显示中英文姓名和职位
    modalName.innerHTML = `
        ${expert.name}
        ${expert.nameCn ? `<br><small style="font-size: 0.8em; opacity: 0.8;">${expert.nameCn}</small>` : ''}
    `;
    modalTitle.innerHTML = `
        ${expert.title}
        ${expert.titleCn ? `<br><small style="font-size: 0.9em; opacity: 0.8;">${expert.titleCn}</small>` : ''}
    `;

    // 显示中英文简介
    modalBio.innerHTML = `
        <p>${expert.bio}</p>
        ${expert.bioCn ? `<p style="margin-top: 1rem; font-style: italic; opacity: 0.9;">${expert.bioCn}</p>` : ''}
    `;

    // 处理图片加载错误
    modalImage.onerror = function() {
        this.style.display = 'none';
        modalAvatarFallback.style.display = 'flex';
    };

    // 生成专业领域关键词标签
    modalKeywords.innerHTML = `
        <h4>专业领域</h4>
        ${expert.keywords.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
    `;

    // 生成社交媒体链接
    modalSocial.innerHTML = `
        <a href="${expert.social.twitter}" class="social-link twitter" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="${expert.social.youtube}" class="social-link youtube" target="_blank" rel="noopener noreferrer" title="YouTube">
            <i class="fab fa-youtube"></i>
        </a>
    `;

    // 显示模态框
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 禁止背景滚动
}

function closeExpertModal() {
    const modal = document.getElementById('expertModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initExpertModal() {
    const modal = document.getElementById('expertModal');
    const modalClose = document.getElementById('modalClose');

    // Close modal events
    modalClose.addEventListener('click', closeExpertModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeExpertModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeExpertModal();
        }
    });
}

// Dark Mode Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add a subtle animation to the toggle
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// Loading Animation
function showLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = 'flex';
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}

// Newsletter Subscription
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = form.querySelector('.subscribe-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();

        // 验证邮箱格式
        if (!isValidEmail(email)) {
            showMessage('请输入有效的邮箱地址', 'error');
            emailInput.classList.add('error');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnIcon.style.display = 'none';
        btnLoading.style.display = 'block';
        emailInput.classList.remove('error');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // 成功状态
            showMessage('感谢您的订阅！您将很快收到更新内容。', 'success');
            emailInput.classList.add('success');
            emailInput.value = '';

            // 延迟后重置表单
            setTimeout(() => {
                emailInput.classList.remove('success');
                hideMessage();
            }, 5000);

        } catch (error) {
            showMessage('出现了一些问题，请稍后再试。', 'error');
            emailInput.classList.add('error');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'block';
            btnIcon.style.display = 'block';
            btnLoading.style.display = 'none';
        }
    });

    // Remove error state on input
    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('error', 'success');
        hideMessage();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type} show`;
    }

    function hideMessage() {
        formMessage.classList.remove('show');
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 300);
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    // Show loading overlay
    showLoadingOverlay();

    // Initialize core functionality
    initSmoothScrolling();
    initHeaderScrollEffect();
    initParallaxEffect();
    initThemeToggle();
    initSearchAndFilter();
    initExpertModal();
    initNewsletter();

    // Generate expert cards with loading simulation
    generateExpertCards();

    // Hide loading overlay after content is ready
    setTimeout(() => {
        hideLoadingOverlay();

        // Initialize scroll animations after loading
        setTimeout(() => {
            initScrollAnimations();
        }, 200);

        // Add page fade-in animation
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.8s ease-out';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }, 1500); // Total loading time: 1.5 seconds
});

// Handle window resize
window.addEventListener('resize', () => {
    // Recalculate any position-dependent elements if needed
    const header = document.querySelector('.header');
    if (header) {
        header.style.transition = 'none';
        setTimeout(() => {
            header.style.transition = '';
        }, 100);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    // Any heavy scroll operations can go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);
