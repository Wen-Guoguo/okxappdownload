// Shared i18n config - loaded by all pages via i18next CDN
(function(){
  var resources = {
    en: { translation: {
      badge:"2026 Latest v6.179.0",
      title:"Download OKX APK",
      desc:"Official Original Android App<br>Android 7.0+ | Safe | Free Download",
      btn:"DOWNLOAD NOW",
      info_original:"Official Original",
      nh:"Home", ni:"Install Guide", nf:"FAQ", nu:"Changelog",
      li_install:"Install Guide", li_faq:"FAQ", li_update:"Changelog"
    }},
    pt: { translation: {
      badge:"2026 v6.179.0",
      title:"Baixar OKX APK",
      desc:"Aplicativo Android Oficial Original<br>Android 7.0+ | Seguro | Download Grátis",
      btn:"BAIXAR AGORA",
      info_original:"Original Oficial",
      nh:"Início", ni:"Instalar", nf:"FAQ", nu:"Versões",
      li_install:"Guia", li_faq:"Perguntas", li_update:"Histórico"
    }},
    tr: { translation: {
      badge:"2026 En Yeni v6.179.0",
      title:"OKX APK İndir",
      desc:"Resmi Orijinal Android Uygulaması<br>Android 7.0+ | Güvenli | Ücretsiz",
      btn:"HEMEN İNDİR",
      info_original:"Resmi Orijinal",
      nh:"Ana Sayfa", ni:"Kurulum", nf:"SSS", nu:"Güncelleme",
      li_install:"Kurulum", li_faq:"SSS", li_update:"Güncelleme"
    }},
    id: { translation: {
      badge:"2026 Terbaru v6.179.0",
      title:"Unduh OKX APK",
      desc:"Aplikasi Android Resmi Original<br>Android 7.0+ | Aman | Gratis",
      btn:"UNDUH SEKARANG",
      info_original:"Resmi Original",
      nh:"Beranda", ni:"Instal", nf:"FAQ", nu:"Riwayat",
      li_install:"Panduan", li_faq:"Tanya Jawab", li_update:"Riwayat"
    }},
    zh: { translation: {
      badge:"2026 最新版 v6.179.0",
      title:"OKX 欧易 APK 下载",
      desc:"官方原版安卓客户端<br>Android 7.0+ | 安全无毒 | 免费下载",
      btn:"立即下载",
      info_original:"官方原版",
      nh:"首页", ni:"安装教程", nf:"常见问题", nu:"更新日志",
      li_install:"安装教程", li_faq:"常见问题", li_update:"更新日志"
    }}
  };

  var pageTitles = {
    en:"OKX APK Download - Official Android App 2026",
    pt:"Baixar OKX APK - App Android Oficial 2026",
    tr:"OKX APK İndir - Resmi Android Uygulaması 2026",
    id:"Unduh OKX APK - Aplikasi Android Resmi 2026",
    zh:"OKX APK 下载 - 欧易安卓客户端 2026"
  };

  i18next.use(i18nextBrowserLanguageDetector).init({
    resources: resources,
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'okx_lang',
      caches: ['localStorage']
    }
  }, function(err, t) {
    if (err) return console.error(err);
    var l = i18next.language || 'en';
    document.documentElement.lang = l;
    document.title = pageTitles[l] || pageTitles.en;

    // Translate all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
    });

    // Dropdown
    var sel = document.getElementById('langSwitcher');
    if (sel) {
      sel.value = l;
      sel.addEventListener('change', function(){
        var nl = this.value;
        localStorage.setItem('okx_lang', nl);
        var u = new URL(location.href);
        u.searchParams.set('lang', nl);
        location.href = u.toString();
      });
    }

    // Nav highlight
    var path = location.pathname || '/';
    if (path !== '/') {
      var e = document.getElementById('nh');
      if (e) e.classList.remove('on');
      var m = {'/install.html':'ni','/faq.html':'nf','/update.html':'nu'};
      var id = m[path];
      if (id) {
        var a = document.getElementById(id);
        if (a) a.classList.add('on');
      }
    }
  });
})();
