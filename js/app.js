let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = [

    /* ================= BTS ================= */
    { id: "bts_001", group: "BTS", name: "PROOF 精選專輯", price: 1200 },
    { id: "bts_002", group: "BTS", name: "BTS 官方手燈 Ver.4", price: 1398 },
    { id: "bts_003", group: "BTS", name: "BT21 娃娃吊飾", price: 680 },
    { id: "bts_004", group: "BTS", name: "BTS 官方帽T", price: 1800 },
    { id: "bts_005", group: "BTS", name: "BTS 海報組", price: 500 },
    { id: "bts_006", group: "BTS", name: "BTS 周邊限定套組", price: 2500 },

    /* ================= TXT ================= */
    { id: "txt_001", group: "TXT", name: "The Name Chapter: FREEFALL 專輯", price: 1180 },
    { id: "txt_002", group: "TXT", name: "TXT 官方手燈 Ver.2", price: 1500 },
    { id: "txt_003", group: "TXT", name: "TXT DREAM CHAPTER 小卡收藏包", price: 470 },
    { id: "txt_004", group: "TXT", name: "TXT 官方帽T ACT: SWEET MIRAGE", price: 1750 },
    { id: "txt_005", group: "TXT", name: "TXT CONCEPT PHOTO 海報組", price: 580 },
    { id: "txt_006", group: "TXT", name: "TXT DELUXE DREAM BOX 套組", price: 2750 },

    /* ================= SEVENTEEN ================= */
    { id: "svt_001", group: "SEVENTEEN", name: "FML 專輯（CARAT VER.）", price: 1200 },
    { id: "svt_002", group: "SEVENTEEN", name: "SEVENTEEN 手燈 Ver.2", price: 1550 },
    { id: "svt_003", group: "SEVENTEEN", name: "CARAT 小卡收藏包", price: 480 },
    { id: "svt_004", group: "SEVENTEEN", name: "SEVENTEENTH HEAVEN 官方帽T", price: 1800 },
    { id: "svt_005", group: "SEVENTEEN", name: "CONCEPT PHOTO 海報組", price: 600 },
    { id: "svt_006", group: "SEVENTEEN", name: "DELUXE CARAT BOX 套組", price: 2800 },

    /* ================= LE SSERAFIM ================= */
    { id: "lsf_001", group: "LE SSERAFIM", name: "官方手燈", price: 1280 },
    { id: "lsf_002", group: "LE SSERAFIM", name: "CELEBRATION 專輯", price: 650 },
    { id: "lsf_003", group: "LE SSERAFIM", name: "成員寫真組", price: 420 },
    { id: "lsf_004", group: "LE SSERAFIM", name: "LE SSERAFIM T-Shirt", price: 890 },
    { id: "lsf_005", group: "LE SSERAFIM", name: "應援毛巾", price: 350 },
    { id: "lsf_006", group: "LE SSERAFIM", name: "壓克力立牌", price: 280 },

    /* ================= ILLIT ================= */
    { id: "illit_001", group: "ILLIT", name: "SUPER REAL ME 專輯（REAL VER.）", price: 1090 },
    { id: "illit_002", group: "ILLIT", name: "ILLIT DREAM LIGHT 官方手燈", price: 1380 },
    { id: "illit_003", group: "ILLIT", name: "ILLIT DREAMY 小卡包", price: 450 },
    { id: "illit_004", group: "ILLIT", name: "PINK MOOD 官方帽T", price: 1650 },
    { id: "illit_005", group: "ILLIT", name: "GLOW 海報組", price: 520 },
    { id: "illit_006", group: "ILLIT", name: "ILLIT COLLECTION 邀請卡組", price: 2550 },

    /* ================= fromis_9 ================= */
    { id: "fromis9_001", group: "fromis_9", name: "Unlock My World 專輯", price: 1100 },
    { id: "fromis9_002", group: "fromis_9", name: "fromis_9 官方手燈", price: 1350 },
    { id: "fromis9_003", group: "fromis_9", name: "fromis_9 小卡組", price: 450 },
    { id: "fromis9_004", group: "fromis_9", name: "fromis_9 官方帽T", price: 1700 },
    { id: "fromis9_005", group: "fromis_9", name: "fromis_9 年曆", price: 520 },
    { id: "fromis9_006", group: "fromis_9", name: "fromis_9 限定周邊套組", price: 2400 },

    /* ================= ENHYPEN ================= */
    { id: "enh_001", group: "ENHYPEN", name: "DARK BLOOD 專輯（ENGENE VER.）", price: 1180 },
    { id: "enh_002", group: "ENHYPEN", name: "ENHYPEN 官方手燈 Ver.2", price: 1500 },
    { id: "enh_003", group: "ENHYPEN", name: "ORANGE BLOOD 小卡收藏組", price: 500 },
    { id: "enh_004", group: "ENHYPEN", name: "DARK BLOOD 官方帽T", price: 1780 },
    { id: "enh_005", group: "ENHYPEN", name: "CONCEPT PHOTO 海報組", price: 580 },
    { id: "enh_006", group: "ENHYPEN", name: "DELUXE 限定收藏套組", price: 2700 },

    /* ================= &TEAM ================= */
    { id: "andteam_001", group: "&TEAM", name: "First Howling 專輯", price: 1100 },
    { id: "andteam_002", group: "&TEAM", name: "Second Howling 專輯", price: 1150 },
    { id: "andteam_003", group: "&TEAM", name: "官方周邊套組", price: 1300 },

    /* ================= BOYNEXTDOOR ================= */
    { id: "bnd_001", group: "BOYNEXTDOOR", name: "WHO! 專輯", price: 1150 },
    { id: "bnd_002", group: "BOYNEXTDOOR", name: "WHY.. 專輯", price: 1180 },
    { id: "bnd_003", group: "BOYNEXTDOOR", name: "HOW? 專輯", price: 1200 },
    { id: "bnd_004", group: "BOYNEXTDOOR", name: "官方手燈", price: 1450 },
    { id: "bnd_005", group: "BOYNEXTDOOR", name: "成員小卡套組", price: 480 },
    { id: "bnd_006", group: "BOYNEXTDOOR", name: "官方帽T", price: 1750 }

];

function buy(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    addToCart(
        product.id,
        product.group,
        product.name,
        product.price
    );

    window.location.href = "cart.html";
}

function addToCart(id, group, name, price) {
    let item = cart.find(i => i.id === id);

    if (item) {
        item.qty += 1;
    } else {
        cart.push({ id, group, name, price, qty: 1 });
    }

    saveCart();

    Swal.fire({
        icon: "success",
        title: "已加入購物車",
        text: name,
        timer: 1200,
        showConfirmButton: false
    });

    updateCartCount();
}



function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item => {
        count += item.qty;
    });

    let badge = document.getElementById("cart-count");

    if (badge) {
        badge.innerText = count;
    }
}