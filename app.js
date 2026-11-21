/* 1. TRILINGUAL DICTIONARY (EN, KM, ZH) */
        const I18N = {
            en: {
                storeTitle: 'Tech & Gadget Store',
                officialBadge: 'Official',
                storeSubtitle: 'Audio, Computers & Smart Gear • Fast Delivery',
                searchPlaceholder: 'Search headphones, laptops, smartwatches, chargers...',
                promoTag: 'Telegram Mini App Special',
                promoHtml: 'Use code <button type="button" class="promo-code-link" onclick="copyPromoCode(\'TG15\')">TG15</button> at checkout for 15% off your entire order',
                copyBtn: 'Copy',
                allProducts: 'All Products',
                itemOne: 'item',
                itemMany: 'items',
                addBtn: 'Add',
                addToCart: 'Add to Cart',
                selectOption: 'Select Variant',
                emptyTitle: 'No matching products found',
                emptySubtitle: 'Try clearing your search or switching categories.',
                resetFilters: 'Reset Filters',
                viewOrder: 'View Order',
                viewCart: 'View Cart',
                placeOrder: 'Place Order',
                yourOrder: 'Your Order',
                inCartCount: (n) => `${n} ${n === 1 ? 'item' : 'items'} in your cart`,
                clearBtn: 'Clear',
                deliveryOpt: '🚚 Express Delivery ($4.90)',
                pickupOpt: '🏪 Store Pickup (Free)',
                deliveryLabel: 'Express Delivery',
                pickupLabel: 'Store Pickup',
                freeText: 'Free',
                namePlaceholder: 'Your full name...',
                phonePlaceholder: 'Phone number for delivery updates...',
                addrDeliveryPlaceholder: 'Delivery street address, building, or note...',
                addrPickupPlaceholder: 'Preferred pickup time or note (optional)...',
                promoPlaceholder: 'Promo code (try TG15)',
                applyBtn: 'Apply',
                promoValid: (code) => `✓ Promo code ${code} applied (15% off)`,
                promoInvalid: 'Invalid code. Try TG15 for 15% off.',
                subtotal: 'Subtotal',
                discount: 'Discount',
                total: 'Total',
                orderPrefix: 'ORDER',
                confirmTitle: 'Order Confirmed!',
                confirmDesc: 'Thank you for your order! Your digital receipt has been prepared and our team is packing your items.',
                confirmMethodLabel: 'Fulfillment',
                confirmPaidLabel: 'Total Amount',
                doneBtn: 'Done',
                toastAdded: (qty, name) => `Added ${qty}× ${name}`,
                toastCopied: (code) => `Copied "${code}" — 15% discount ready!`,
                toastEmptyCart: 'Your cart is empty — add an item first!',
                categories: {
                    all: 'All',
                    audio: 'Audio & Speakers',
                    computers: 'Computers',
                    accessories: 'Accessories',
                    smart: 'Smart Gadgets'
                }
            },
            km: {
                storeTitle: 'ហាងបច្ចេកវិទ្យា Tech & Gadget',
                officialBadge: 'ផ្លូវការ',
                storeSubtitle: 'ឧបករណ៍សំឡេង កុំព្យូទ័រ និងឧបករណ៍ឆ្លាតវៃ • ដឹកជញ្ជូនរហ័ស',
                searchPlaceholder: 'ស្វែងរកកាស កុំព្យូទ័រ នាឡិកាឆ្លាតវៃ ឆ្នាំងសាក...',
                promoTag: 'ពិសេសសម្រាប់ Telegram Mini App',
                promoHtml: 'ប្រើកូដ <button type="button" class="promo-code-link" onclick="copyPromoCode(\'TG15\')">TG15</button> ពេលទូទាត់ប្រាក់ ដើម្បីទទួលបានការបញ្ចុះតម្លៃ 15%',
                copyBtn: 'ចម្លង',
                allProducts: 'ផលិតផលទាំងអស់',
                itemOne: 'មុខទំនិញ',
                itemMany: 'មុខទំនិញ',
                addBtn: 'បន្ថែម',
                addToCart: 'បន្ថែមទៅកន្ត្រក',
                selectOption: 'ជ្រើសរើសជម្រើស',
                emptyTitle: 'រកមិនឃើញផលិតផលដែលត្រូវគ្នាទេ',
                emptySubtitle: 'សូមសាកល្បងលុបពាក្យស្វែងរក ឬប្តូរប្រភេទទំនិញ។',
                resetFilters: 'កំណត់ឡើងវិញ',
                viewOrder: 'មើលការកម្ម៉ង់',
                viewCart: 'មើលកន្ត្រក',
                placeOrder: 'បញ្ជាទិញឥឡូវ',
                yourOrder: 'ការកម្ម៉ង់របស់អ្នក',
                inCartCount: (n) => `មាន ${n} មុខទំនិញក្នុងកន្ត្រករបស់អ្នក`,
                clearBtn: 'សម្អាត',
                deliveryOpt: '🚚 ដឹកជញ្ជូនរហ័ស ($4.90)',
                pickupOpt: '🏪 មកយកនៅហាងផ្ទាល់ (ឥតគិតថ្លៃ)',
                deliveryLabel: 'ដឹកជញ្ជូនរហ័ស',
                pickupLabel: 'មកយកនៅហាងផ្ទាល់',
                freeText: 'ឥតគិតថ្លៃ',
                namePlaceholder: 'ឈ្មោះពេញរបស់អ្នក...',
                phonePlaceholder: 'លេខទូរស័ព្ទសម្រាប់ទំនាក់ទំនងដឹកជញ្ជូន...',
                addrDeliveryPlaceholder: 'អាសយដ្ឋានដឹកជញ្ជូន លេខផ្ទះ ឬកំណត់ចំណាំ...',
                addrPickupPlaceholder: 'ម៉ោងមកទទួលទំនិញ ឬកំណត់ចំណាំ (ស្រេចចិត្ត)...',
                promoPlaceholder: 'កូដបញ្ចុះតម្លៃ (សាកល្បង TG15)',
                applyBtn: 'ប្រើកូដ',
                promoValid: (code) => `✓ បានប្រើកូដ ${code} ដោយជោគជ័យ (បញ្ចុះ 15%)`,
                promoInvalid: 'កូដមិនត្រឹមត្រូវទេ។ សាកល្បង TG15 ដើម្បីបញ្ចុះ 15%។',
                subtotal: 'សរុបរង',
                discount: 'បញ្ចុះតម្លៃ',
                total: 'ទឹកប្រាក់សរុប',
                orderPrefix: 'ការកម្ម៉ង់',
                confirmTitle: 'ការកម្ម៉ង់ត្រូវបានបញ្ជាក់!',
                confirmDesc: 'សូមអរគុណសម្រាប់ការបញ្ជាទិញ! វិក្កយបត្ររបស់អ្នកត្រូវបានរៀបចំរួចរាល់ ហើយក្រុមការងារកំពុងវេចខ្ចប់ទំនិញជូនអ្នក។',
                confirmMethodLabel: 'វិធីសាស្ត្រទទួលទំនិញ',
                confirmPaidLabel: 'ទឹកប្រាក់សរុប',
                doneBtn: 'រួចរាល់',
                toastAdded: (qty, name) => `បានបន្ថែម ${qty}× ${name}`,
                toastCopied: (code) => `បានចម្លង "${code}" — បញ្ចុះតម្លៃ 15% រួចរាល់!`,
                toastEmptyCart: 'កន្ត្រករបស់អ្នកទទេ — សូមបន្ថែមទំនិញជាមុនសិន!',
                categories: {
                    all: 'ទាំងអស់',
                    audio: 'ឧបករណ៍សំឡេង',
                    computers: 'កុំព្យូទ័រ',
                    accessories: 'គ្រឿងបន្ថែម',
                    smart: 'ឧបករណ៍ឆ្លាតវៃ'
                }
            },
            zh: {
                storeTitle: '数码科技旗舰店',
                officialBadge: '官方',
                storeSubtitle: '音频设备、电脑数码与智能好物 • 极速配送',
                searchPlaceholder: '搜索耳机、笔记本电脑、智能手表、充电器...',
                promoTag: 'Telegram 小程序专享优惠',
                promoHtml: '结账时使用优惠码 <button type="button" class="promo-code-link" onclick="copyPromoCode(\'TG15\')">TG15</button> 即可享受整单 85 折',
                copyBtn: '复制',
                allProducts: '全部商品',
                itemOne: '件商品',
                itemMany: '件商品',
                addBtn: '加入',
                addToCart: '加入购物车',
                selectOption: '选择规格',
                emptyTitle: '未找到匹配的商品',
                emptySubtitle: '请尝试清除搜索关键词或切换商品分类。',
                resetFilters: '重置筛选',
                viewOrder: '查看订单',
                viewCart: '查看购物车',
                placeOrder: '立即下单',
                yourOrder: '您的订单',
                inCartCount: (n) => `购物车中共有 ${n} 件商品`,
                clearBtn: '清空',
                deliveryOpt: '🚚 极速配送 ($4.90)',
                pickupOpt: '🏪 门店自提 (免费)',
                deliveryLabel: '极速配送',
                pickupLabel: '门店自提',
                freeText: '免费',
                namePlaceholder: '您的姓名...',
                phonePlaceholder: '用于接收配送通知的联系电话...',
                addrDeliveryPlaceholder: '详细收货地址、门牌号或备注...',
                addrPickupPlaceholder: '预计到店时间或备注（选填）...',
                promoPlaceholder: '输入优惠码（试试 TG15）',
                applyBtn: '使用',
                promoValid: (code) => `✓ 已成功应用优惠码 ${code}（立享 85 折）`,
                promoInvalid: '优惠码无效，请尝试输入 TG15 享 85 折。',
                subtotal: '商品小计',
                discount: '优惠减免',
                total: '应付总额',
                orderPrefix: '订单号',
                confirmTitle: '订单已确认！',
                confirmDesc: '感谢您的订购！您的电子收据已生成，我们的团队正在为您打包商品。',
                confirmMethodLabel: '配送方式',
                confirmPaidLabel: '实付总额',
                doneBtn: '完成',
                toastAdded: (qty, name) => `已添加 ${qty}× ${name}`,
                toastCopied: (code) => `已复制 "${code}" — 结账享 85 折优惠！`,
                toastEmptyCart: '购物车还是空的 — 请先添加商品！',
                categories: {
                    all: '全部',
                    audio: '音频设备',
                    computers: '电脑数码',
                    accessories: '精选配件',
                    smart: '智能穿戴'
                }
            }
        };

        /* 2. INLINE SVG ARTWORK HELPERS (GUARANTEED TO RENDER IN SANDBOXED PREVIEWS) */
        const SVG_ICONS = {
            headphones: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 36v-4a20 20 0 0 1 40 0v4"/><rect x="8" y="34" width="10" height="18" rx="5" fill="rgba(255,255,255,0.22)"/><rect x="46" y="34" width="10" height="18" rx="5" fill="rgba(255,255,255,0.22)"/></svg>`,
            speaker: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="8" width="32" height="48" rx="8" fill="rgba(255,255,255,0.16)"/><circle cx="32" cy="21" r="4"/><circle cx="32" cy="40" r="9"/></svg>`,
            laptop: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="14" width="40" height="28" rx="4" fill="rgba(255,255,255,0.18)"/><path d="M6 46h52l-4 5H10l-4-5Z" fill="rgba(255,255,255,0.25)"/></svg>`,
            keyboard: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="18" width="52" height="28" rx="6" fill="rgba(255,255,255,0.18)"/><path d="M14 26h4M22 26h4M30 26h4M38 26h4M46 26h4M14 33h4M22 33h4M30 33h4M38 33h4M46 33h4M20 40h24"/></svg>`,
            charger: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="18" width="28" height="34" rx="6" fill="rgba(255,255,255,0.18)"/><path d="M25 10v8M39 10v8M33 27l-5 8h8l-5 8"/></svg>`,
            ssd: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="10" width="32" height="44" rx="7" fill="rgba(255,255,255,0.18)"/><path d="M24 20h16M24 28h10"/><circle cx="32" cy="43" r="3" fill="#ffffff"/></svg>`,
            watch: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8h16l2 10H22L24 8ZM22 46h20l-2 10H24l-2-10Z" fill="rgba(255,255,255,0.18)"/><rect x="17" y="18" width="30" height="28" rx="8" fill="rgba(255,255,255,0.22)"/><path d="M32 26v7l5 3"/></svg>`,
            earbuds: `<svg viewBox="0 0 64 64" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="18" width="40" height="30" rx="12" fill="rgba(255,255,255,0.18)"/><path d="M12 31h40"/><circle cx="24" cy="25" r="3" fill="#ffffff"/><circle cx="40" cy="25" r="3" fill="#ffffff"/></svg>`
        };

        /* 3. DATABASE CATALOG */
        let PRODUCTS = [];

        const CATEGORY_ORDER = ['all', 'audio', 'computers', 'accessories', 'smart'];

        /* 4. APPLICATION STATE */
        const state = {
            lang: 'en',
            category: 'all',
            search: '',
            cart: [], // { key, productId, price, optionIdx, qty }
            fulfillment: 'delivery', // 'delivery' | 'pickup'
            promoCode: null,
            discountRate: 0,
            modalProduct: null,
            modalOptionIdx: 0,
            modalQty: 1,
            isProductModalOpen: false,
            isCartOpen: false,
            tg: null,
            isTgEnv: false
        };

        function dict() {
            return I18N[state.lang] || I18N.en;
        }

        function getProdText(prod) {
            return prod.i18n[state.lang] || prod.i18n.en;
        }

        /* 5. LANGUAGE AUTO-DETECTION & SWITCHING */
        function detectInitialLanguage() {
            try {
                const saved = localStorage.getItem('tg_miniapp_lang');
                if (saved && I18N[saved]) return saved;
            } catch (e) {}

            try {
                const tgLang = window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
                if (tgLang) {
                    const lc = tgLang.toLowerCase();
                    if (lc.startsWith('km')) return 'km';
                    if (lc.startsWith('zh')) return 'zh';
                }
            } catch (e) {}

            return 'en';
        }

        function setLanguage(lang, silent = false) {
            if (!I18N[lang]) lang = 'en';
            state.lang = lang;
            document.documentElement.lang = lang;

            try {
                localStorage.setItem('tg_miniapp_lang', lang);
            } catch (e) {}

            if (!silent) haptic('selection');

            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.lang === lang);
            });

            applyStaticTranslations();
            renderCategories();
            renderProducts();

            if (state.isProductModalOpen && state.modalProduct) {
                populateProductModalContent();
            }
            if (state.isCartOpen) {
                renderCartSheet();
            }
            syncBottomCheckoutBar();
        }

        function applyStaticTranslations() {
            const d = dict();
            document.getElementById('storeTitle').textContent = d.storeTitle;
            document.getElementById('officialBadge').textContent = d.officialBadge;
            document.getElementById('storeSubtitle').textContent = d.storeSubtitle;
            document.getElementById('searchInput').placeholder = d.searchPlaceholder;
            document.getElementById('promoTag').textContent = d.promoTag;
            document.getElementById('promoCopy').innerHTML = d.promoHtml;
            document.getElementById('promoCopyBtn').textContent = d.copyBtn;

            document.getElementById('emptyTitle').textContent = d.emptyTitle;
            document.getElementById('emptySubtitle').textContent = d.emptySubtitle;
            document.getElementById('emptyResetBtn').textContent = d.resetFilters;

            document.getElementById('modalOptLabel').textContent = d.selectOption;
            document.getElementById('modalAddLabel').textContent = d.addToCart;

            document.getElementById('cartTitle').textContent = d.yourOrder;
            document.getElementById('clearCartBtn').textContent = d.clearBtn;
            document.getElementById('deliveryBtn').textContent = d.deliveryOpt;
            document.getElementById('pickupBtn').textContent = d.pickupOpt;
            document.getElementById('custNameInput').placeholder = d.namePlaceholder;
            document.getElementById('custPhoneInput').placeholder = d.phonePlaceholder;
            document.getElementById('custAddrInput').placeholder =
                state.fulfillment === 'delivery' ? d.addrDeliveryPlaceholder : d.addrPickupPlaceholder;
            document.getElementById('promoCodeInput').placeholder = d.promoPlaceholder;
            document.getElementById('applyPromoBtn').textContent = d.applyBtn;

            document.getElementById('sumSubtotalLabel').textContent = d.subtotal;
            document.getElementById('sumDiscountLabel').textContent = d.discount;
            document.getElementById('sumTotalLabel').textContent = d.total;
            document.getElementById('placeOrderBtnText').textContent = d.placeOrder;

            document.getElementById('confirmTitle').textContent = d.confirmTitle;
            document.getElementById('confirmDesc').textContent = d.confirmDesc;
            document.getElementById('confirmMethodLabel').textContent = d.confirmMethodLabel;
            document.getElementById('confirmPaidLabel').textContent = d.confirmPaidLabel;
            document.getElementById('confirmDoneBtn').textContent = d.doneBtn;

            const promoMsg = document.getElementById('promoFeedbackMsg');
            if (!promoMsg.classList.contains('hidden')) {
                promoMsg.textContent = state.promoCode ? d.promoValid(state.promoCode) : d.promoInvalid;
            }
        }

        /* 6. TELEGRAM MINI APP SDK & THEME SYNC */
        function initTelegramSDK() {
            try {
                const tg = window.Telegram && window.Telegram.WebApp;
                if (!tg) return;

                state.tg = tg;
                if (tg.initData && tg.initData.length > 0) {
                    state.isTgEnv = true;
                }

                tg.ready();
                tg.expand();

                applyTelegramTheme(tg);
                tg.onEvent('themeChanged', () => applyTelegramTheme(tg));

                tg.MainButton.onClick(() => {
                    if (state.isCartOpen) {
                        placeOrder();
                    } else {
                        openCartDrawer();
                    }
                });

                tg.BackButton.onClick(() => {
                    if (state.isProductModalOpen) closeProductModal();
                    else if (state.isCartOpen) closeCartDrawer();
                });
            } catch (e) {
                // Safe fallback when running outside Telegram
            }
        }

        function applyTelegramTheme(tg) {
            try {
                const p = tg.themeParams || {};
                const root = document.documentElement.style;
                if (p.bg_color) root.setProperty('--tg-theme-bg-color', p.bg_color);
                if (p.secondary_bg_color) root.setProperty('--tg-theme-secondary-bg-color', p.secondary_bg_color);
                if (p.text_color) root.setProperty('--tg-theme-text-color', p.text_color);
                if (p.hint_color) root.setProperty('--tg-theme-hint-color', p.hint_color);
                if (p.link_color) root.setProperty('--tg-theme-link-color', p.link_color);
                if (p.button_color) root.setProperty('--tg-theme-button-color', p.button_color);
                if (p.button_text_color) root.setProperty('--tg-theme-button-text-color', p.button_text_color);
                if (p.header_bg_color) root.setProperty('--tg-theme-header-bg-color', p.header_bg_color);
                if (p.section_bg_color) root.setProperty('--tg-theme-section-bg-color', p.section_bg_color);

                if (tg.colorScheme === 'dark') {
                    document.body.classList.add('dark-theme');
                } else if (tg.colorScheme === 'light') {
                    document.body.classList.remove('dark-theme');
                }
                updateThemeToggleIcons();
            } catch (e) {}
        }

        function toggleTheme() {
            haptic('light');
            document.body.classList.toggle('dark-theme');
            updateThemeToggleIcons();
        }

        function updateThemeToggleIcons() {
            const isDark = document.body.classList.contains('dark-theme');
            document.getElementById('sunIcon').classList.toggle('hidden', !isDark);
            document.getElementById('moonIcon').classList.toggle('hidden', isDark);
        }

        function haptic(type) {
            try {
                const hf = state.tg && state.tg.HapticFeedback;
                if (!hf) return;
                if (type === 'selection') hf.selectionChanged();
                else if (type === 'success' || type === 'error' || type === 'warning') hf.notificationOccurred(type);
                else hf.impactOccurred(type || 'light');
            } catch (e) {}
        }

        /* 7. RENDER CATEGORIES & PRODUCT GRID */
        function renderCategories() {
            const d = dict();
            const strip = document.getElementById('categoryStrip');
            strip.innerHTML = CATEGORY_ORDER.map(cat => {
                const active = state.category === cat ? 'active' : '';
                return `<button type="button" class="cat-pill tap-active ${active}" onclick="selectCategory('${cat}')">${d.categories[cat]}</button>`;
            }).join('');
        }

        function selectCategory(cat) {
            haptic('selection');
            state.category = cat;
            renderCategories();
            renderProducts();
        }

        function getFilteredProducts() {
            const q = state.search.trim().toLowerCase();
            return PRODUCTS.filter(p => {
                const catOk = state.category === 'all' || p.category === state.category;
                if (!q) return catOk;
                const searchable = Object.values(p.i18n).flatMap(loc => [loc.title, loc.short, loc.badge]);
                const catNames = Object.values(I18N).map(tr => tr.categories[p.category]);
                const match = [...searchable, ...catNames].some(str => str.toLowerCase().includes(q));
                return catOk && match;
            });
        }

        function getProductCartQty(productId) {
            return state.cart
                .filter(item => item.productId === productId)
                .reduce((acc, item) => acc + item.qty, 0);
        }

        function renderProducts() {
            const d = dict();
            const grid = document.getElementById('productGrid');
            const empty = document.getElementById('emptyState');
            const items = getFilteredProducts();

            document.getElementById('sectionHeading').textContent =
                state.category === 'all' ? d.allProducts : d.categories[state.category];
            document.getElementById('sectionCount').textContent =
                `${items.length} ${items.length === 1 ? d.itemOne : d.itemMany}`;

            if (items.length === 0) {
                grid.innerHTML = '';
                empty.classList.remove('hidden');
                return;
            }

            empty.classList.add('hidden');
            grid.innerHTML = items.map(prod => {
                const loc = getProdText(prod);
                const qty = getProductCartQty(prod.id);
                const svgMarkup = SVG_ICONS[prod.icon] || SVG_ICONS.headphones;

                const actionHtml = qty === 0
                    ? `<button type="button" class="add-btn tap-active" onclick="event.stopPropagation(); quickAdd('${prod.id}')"><span>+</span><span>${d.addBtn}</span></button>`
                    : `<div class="qty-stepper" onclick="event.stopPropagation()">
                           <button type="button" class="stepper-btn tap-active" onclick="quickRemove('${prod.id}')">−</button>
                           <span class="stepper-val">${qty}</span>
                           <button type="button" class="stepper-btn tap-active" onclick="quickAdd('${prod.id}')">+</button>
                       </div>`;

                return `
                    <article class="product-card" onclick="openProductModal('${prod.id}')">
                        <div>
                            <div class="card-thumb" style="background: ${prod.bg};">
                                ${svgMarkup}
                                <span class="card-badge">${loc.badge}</span>
                                <span class="card-rating">★ ${prod.rating}</span>
                            </div>
                            <div class="card-body">
                                <h3 class="product-title">${loc.title}</h3>
                                <p class="product-desc">${loc.short}</p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <span class="product-price">$${prod.price.toFixed(2)}</span>
                            ${actionHtml}
                        </div>
                    </article>
                `;
            }).join('');
        }

        /* 8. CART LOGIC & CALCULATIONS */
        function addToCart(productId, optionIdx = 0, qty = 1) {
            const prod = PRODUCTS.find(p => p.id === productId);
            if (!prod) return;
            const key = `${productId}__${optionIdx}`;
            const existing = state.cart.find(c => c.key === key);
            if (existing) {
                existing.qty += qty;
            } else {
                state.cart.push({
                    key,
                    productId: prod.id,
                    price: prod.price,
                    optionIdx,
                    qty
                });
            }
            haptic('light');
            syncAllCartUI();
        }

        function quickAdd(productId) {
            addToCart(productId, 0, 1);
        }

        function quickRemove(productId) {
            for (let i = state.cart.length - 1; i >= 0; i--) {
                if (state.cart[i].productId === productId) {
                    state.cart[i].qty -= 1;
                    if (state.cart[i].qty <= 0) state.cart.splice(i, 1);
                    break;
                }
            }
            haptic('light');
            syncAllCartUI();
        }

        function updateCartRowQty(key, delta) {
            const idx = state.cart.findIndex(c => c.key === key);
            if (idx === -1) return;
            state.cart[idx].qty += delta;
            if (state.cart[idx].qty <= 0) {
                state.cart.splice(idx, 1);
            }
            haptic('light');
            syncAllCartUI();
            if (state.cart.length === 0 && state.isCartOpen) {
                closeCartDrawer();
            }
        }

        function clearCart() {
            haptic('warning');
            state.cart = [];
            syncAllCartUI();
            if (state.isCartOpen) closeCartDrawer();
        }

        function getTotals() {
            const count = state.cart.reduce((s, i) => s + i.qty, 0);
            const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
            const discount = subtotal * state.discountRate;
            const fee = (count > 0 && state.fulfillment === 'delivery') ? 4.90 : 0;
            const total = Math.max(0, subtotal - discount + fee);
            return { count, subtotal, discount, fee, total };
        }

        function syncAllCartUI() {
            renderProducts();
            if (state.isCartOpen) renderCartSheet();
            syncBottomCheckoutBar();
        }

        function syncBottomCheckoutBar() {
            const { count, total } = getTotals();
            const d = dict();

            document.getElementById('headerCartBadge').textContent = count;

            const stickyBar = document.getElementById('stickyCheckoutBar');
            const drawerFooter = document.getElementById('drawerPlaceOrderFooter');

            if (count === 0) {
                stickyBar.classList.add('hidden');
                if (state.isTgEnv && state.tg) {
                    try { state.tg.MainButton.hide(); } catch (e) {}
                }
                return;
            }

            const itemWord = count === 1 ? d.itemOne : d.itemMany;
            const tgBtnLabel = state.isCartOpen
                ? `${d.placeOrder} • $${total.toFixed(2)}`
                : `${d.viewCart} • ${count} ${itemWord} — $${total.toFixed(2)}`;

            if (state.isTgEnv && state.tg) {
                stickyBar.classList.add('hidden');
                drawerFooter.classList.add('hidden');
                try {
                    state.tg.MainButton.setText(tgBtnLabel);
                    if (!state.tg.MainButton.isVisible) state.tg.MainButton.show();
                } catch (e) {}
            } else {
                drawerFooter.classList.remove('hidden');
                if (state.isCartOpen || state.isProductModalOpen) {
                    stickyBar.classList.add('hidden');
                } else {
                    stickyBar.classList.remove('hidden');
                    document.getElementById('stickyBarCount').textContent = count;
                    document.getElementById('stickyBarLabel').textContent = d.viewOrder;
                    document.getElementById('stickyBarTotal').textContent = `$${total.toFixed(2)}`;
                }
            }
        }

        /* 9. MODAL & BOTTOM SHEET CONTROLS (CLEAN SCROLL LOCK) */
        function lockRootScroll() {
            document.documentElement.style.overflow = 'hidden';
        }

        function unlockRootScroll() {
            if (!state.isProductModalOpen && !state.isCartOpen) {
                document.documentElement.style.overflow = '';
            }
        }

        function openProductModal(productId) {
            const prod = PRODUCTS.find(p => p.id === productId);
            if (!prod) return;
            haptic('selection');

            state.modalProduct = prod;
            state.modalOptionIdx = 0;
            state.modalQty = 1;
            state.isProductModalOpen = true;

            populateProductModalContent();
            lockRootScroll();

            if (state.isTgEnv && state.tg) {
                try {
                    state.tg.BackButton.show();
                    state.tg.MainButton.hide();
                } catch (e) {}
            }

            document.getElementById('productModal').classList.remove('hidden');
            syncBottomCheckoutBar();
        }

        function populateProductModalContent() {
            const prod = state.modalProduct;
            if (!prod) return;
            const loc = getProdText(prod);
            const d = dict();

            document.getElementById('modalCatLabel').textContent = d.categories[prod.category];
            const hero = document.getElementById('modalHeroArt');
            hero.style.background = prod.bg;
            hero.innerHTML = SVG_ICONS[prod.icon] || SVG_ICONS.headphones;

            document.getElementById('modalBadgePill').textContent = loc.badge;
            document.getElementById('modalRatingText').textContent = `★ ${prod.rating}`;
            document.getElementById('modalTitle').textContent = loc.title;
            document.getElementById('modalPrice').textContent = `$${prod.price.toFixed(2)}`;
            document.getElementById('modalDesc').textContent = loc.desc;

            renderModalOptionPills();
            updateModalQtySum();
        }

        function renderModalOptionPills() {
            const loc = getProdText(state.modalProduct);
            const grid = document.getElementById('modalOptionGrid');
            grid.innerHTML = loc.options.map((opt, idx) => {
                const sel = idx === state.modalOptionIdx ? 'selected' : '';
                return `<button type="button" class="option-pill tap-active ${sel}" onclick="selectModalOption(${idx})">${opt}</button>`;
            }).join('');
        }

        function selectModalOption(idx) {
            haptic('selection');
            state.modalOptionIdx = idx;
            renderModalOptionPills();
        }

        function changeModalQty(delta) {
            const next = state.modalQty + delta;
            if (next < 1 || next > 20) return;
            haptic('light');
            state.modalQty = next;
            updateModalQtySum();
        }

        function updateModalQtySum() {
            document.getElementById('modalQtyVal').textContent = state.modalQty;
            const total = state.modalProduct.price * state.modalQty;
            document.getElementById('modalAddSum').textContent = `$${total.toFixed(2)}`;
        }

        function addModalProductToCart() {
            if (!state.modalProduct) return;
            const loc = getProdText(state.modalProduct);
            addToCart(state.modalProduct.id, state.modalOptionIdx, state.modalQty);
            showToast(dict().toastAdded(state.modalQty, loc.title));
            closeProductModal();
        }

        function closeProductModal() {
            state.isProductModalOpen = false;
            document.getElementById('productModal').classList.add('hidden');
            unlockRootScroll();

            if (state.isTgEnv && state.tg && !state.isCartOpen) {
                try { state.tg.BackButton.hide(); } catch (e) {}
            }
            syncBottomCheckoutBar();
        }

        /* 10. CART DRAWER & CHECKOUT */
        function openCartDrawer() {
            if (state.cart.length === 0) {
                haptic('warning');
                showToast(dict().toastEmptyCart);
                return;
            }
            haptic('selection');
            state.isCartOpen = true;
            renderCartSheet();
            lockRootScroll();

            if (state.isTgEnv && state.tg) {
                try { state.tg.BackButton.show(); } catch (e) {}
            }

            document.getElementById('cartDrawer').classList.remove('hidden');
            syncBottomCheckoutBar();
        }

        function closeCartDrawer() {
            state.isCartOpen = false;
            document.getElementById('cartDrawer').classList.add('hidden');
            unlockRootScroll();

            if (state.isTgEnv && state.tg) {
                try { state.tg.BackButton.hide(); } catch (e) {}
            }
            syncBottomCheckoutBar();
        }

        function renderCartSheet() {
            const d = dict();
            const { count, subtotal, discount, fee, total } = getTotals();

            document.getElementById('cartSubtitle').textContent = d.inCartCount(count);

            const list = document.getElementById('cartItemsList');
            list.innerHTML = state.cart.map(item => {
                const prod = PRODUCTS.find(p => p.id === item.productId);
                const loc = prod ? getProdText(prod) : { title: item.productId, options: ['Standard'] };
                const optName = loc.options[item.optionIdx] || loc.options[0] || '';
                const bg = prod ? prod.bg : '#334155';
                const icon = prod ? (SVG_ICONS[prod.icon] || SVG_ICONS.headphones) : SVG_ICONS.headphones;

                return `
                    <div class="cart-item-row">
                        <div class="cart-item-thumb" style="background: ${bg};">${icon}</div>
                        <div class="cart-item-info">
                            <h4 class="cart-item-title">${loc.title}</h4>
                            <p class="cart-item-opt">${optName}</p>
                            <p class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</p>
                        </div>
                        <div class="cart-row-stepper">
                            <button type="button" class="cart-row-btn tap-active" onclick="updateCartRowQty('${item.key}', -1)">−</button>
                            <span style="font-size: 12px; font-weight: 800; min-width: 16px; text-align: center;">${item.qty}</span>
                            <button type="button" class="cart-row-btn tap-active" onclick="updateCartRowQty('${item.key}', 1)">+</button>
                        </div>
                    </div>
                `;
            }).join('');

            document.getElementById('sumSubtotalVal').textContent = `$${subtotal.toFixed(2)}`;

            const discRow = document.getElementById('sumDiscountRow');
            if (discount > 0) {
                discRow.classList.remove('hidden');
                document.getElementById('sumDiscountCode').textContent = state.promoCode;
                document.getElementById('sumDiscountVal').textContent = `-$${discount.toFixed(2)}`;
            } else {
                discRow.classList.add('hidden');
            }

            document.getElementById('sumFeeLabel').textContent =
                state.fulfillment === 'delivery' ? d.deliveryLabel : d.pickupLabel;
            document.getElementById('sumFeeVal').textContent =
                fee > 0 ? `$${fee.toFixed(2)}` : d.freeText;
            document.getElementById('sumTotalVal').textContent = `$${total.toFixed(2)}`;
            document.getElementById('placeOrderBtnTotal').textContent = `$${total.toFixed(2)}`;
        }

        function setFulfillment(mode) {
            haptic('selection');
            state.fulfillment = mode;
            const d = dict();

            document.getElementById('deliveryBtn').classList.toggle('active', mode === 'delivery');
            document.getElementById('pickupBtn').classList.toggle('active', mode === 'pickup');
            document.getElementById('custAddrInput').placeholder =
                mode === 'delivery' ? d.addrDeliveryPlaceholder : d.addrPickupPlaceholder;

            renderCartSheet();
            syncBottomCheckoutBar();
        }

        function applyPromo() {
            const d = dict();
            const raw = document.getElementById('promoCodeInput').value.trim().toUpperCase();
            const msg = document.getElementById('promoFeedbackMsg');
            msg.classList.remove('hidden');

            if (raw === 'TG15') {
                state.promoCode = 'TG15';
                state.discountRate = 0.15;
                msg.textContent = d.promoValid('TG15');
                msg.style.color = 'var(--success-text)';
                haptic('success');
            } else {
                state.promoCode = null;
                state.discountRate = 0;
                msg.textContent = d.promoInvalid;
                msg.style.color = 'var(--tg-theme-destructive-text-color)';
                haptic('error');
            }

            renderCartSheet();
            syncBottomCheckoutBar();
        }

        async function placeOrder() {
            const { count, total } = getTotals();
            if (count === 0) return;

            haptic('success');
            const d = dict();
            const customerName = document.getElementById('custNameInput').value.trim();
            const phone = document.getElementById('custPhoneInput').value.trim();
            const address = document.getElementById('custAddrInput').value.trim();
            if (!customerName || !phone || (state.fulfillment === 'delivery' && !address)) {
                showToast(state.lang === 'km' ? 'សូមបំពេញព័ត៌មានអតិថិជន' : state.lang === 'zh' ? '请填写客户信息' : 'Please complete the customer information');
                haptic('error');
                return;
            }

            const payload = {
                customerName,
                phone,
                address,
                fulfillment: state.fulfillment,
                promoCode: state.promoCode,
                subtotal: getTotals().subtotal,
                discount: getTotals().discount,
                deliveryFee: getTotals().fee,
                total,
                items: state.cart.map(item => ({
                    productId: item.productId,
                    title: getProdText(PRODUCTS.find(p => p.id === item.productId)).title,
                    optionIndex: item.optionIdx,
                    quantity: item.qty,
                    unitPrice: item.price
                }))
            };

            let orderId = `TG-${Math.floor(1000 + Math.random() * 9000)}`;
            try {
                const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const result = await response.json();
                if (!response.ok) throw new Error(result.error || 'Could not place order');
                orderId = result.order_number || orderId;
            } catch (error) {
                showToast(error.message);
                haptic('error');
                return;
            }

            closeCartDrawer();
            if (state.isTgEnv && state.tg) {
                try { state.tg.MainButton.hide(); } catch (e) {}
            }

            document.getElementById('confirmOrderId').textContent = `${d.orderPrefix} #${orderId}`;
            document.getElementById('confirmMethodVal').textContent =
                state.fulfillment === 'delivery' ? d.deliveryLabel : d.pickupLabel;
            document.getElementById('confirmPaidVal').textContent = `$${total.toFixed(2)}`;
            document.getElementById('confirmModal').classList.remove('hidden');
            document.documentElement.style.overflow = 'hidden';
        }

        function closeConfirmModal() {
            haptic('light');
            document.getElementById('confirmModal').classList.add('hidden');
            document.documentElement.style.overflow = '';
            state.cart = [];
            state.promoCode = null;
            state.discountRate = 0;
            document.getElementById('promoCodeInput').value = '';
            document.getElementById('promoFeedbackMsg').classList.add('hidden');
            syncAllCartUI();
        }

        /* 11. SEARCH, CLIPBOARD & TOAST HELPERS */
        function clearSearch() {
            state.search = '';
            const input = document.getElementById('searchInput');
            input.value = '';
            document.getElementById('clearSearchBtn').classList.add('hidden');
            renderProducts();
        }

        function resetFilters() {
            haptic('light');
            state.category = 'all';
            clearSearch();
            renderCategories();
            renderProducts();
        }

        function copyPromoCode(code) {
            haptic('light');
            const temp = document.createElement('input');
            temp.value = code;
            document.body.appendChild(temp);
            temp.select();
            try { document.execCommand('copy'); } catch (e) {}
            document.body.removeChild(temp);

            document.getElementById('promoCodeInput').value = code;
            showToast(dict().toastCopied(code));
        }

        let toastTimer = null;
        function showToast(text) {
            const el = document.getElementById('toastBanner');
            el.textContent = text;
            el.classList.remove('hidden');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => el.classList.add('hidden'), 2400);
        }

        async function loadProducts() {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) throw new Error('Unable to load products');
                const products = await response.json();
                if (!Array.isArray(products) || products.length === 0) throw new Error('No products available');
                PRODUCTS = products;
            } catch (error) {
                showToast(error.message);
            }
        }

        /* 12. BOOTSTRAP IMMEDIATELY ON DOM READY */
        window.addEventListener('DOMContentLoaded', async () => {
            initTelegramSDK();
            const initialLang = detectInitialLanguage();
            setLanguage(initialLang, true);

            await loadProducts();
            renderCategories();
            renderProducts();

            const searchInput = document.getElementById('searchInput');
            const clearBtn = document.getElementById('clearSearchBtn');
            searchInput.addEventListener('input', (e) => {
                state.search = e.target.value;
                clearBtn.classList.toggle('hidden', state.search.length === 0);
                renderProducts();
            });
        });
