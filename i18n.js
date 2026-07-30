(function(){
  var R = {
    en: { translation: {
      badge:"2026 Latest v6.179.0", title:"Download OKX APK",
      desc:"Official Original Android App<br>Android 7.0+ | Safe | Free Download",
      btn:"DOWNLOAD NOW", info_original:"Official Original",
      nh:"Home", ni:"Install Guide", nf:"FAQ", nu:"Changelog",
      li_install:"Install Guide", li_faq:"FAQ", li_update:"Changelog",
      h1_install:"Installation Guide", h1_faq:"Frequently Asked Questions", h1_update:"Version History",
      back_btn:"Back to Download", back_btn_latest:"Back to Download Latest"
    }},
    pt: { translation: {
      badge:"2026 v6.179.0", title:"Baixar OKX APK",
      desc:"Aplicativo Android Oficial Original<br>Android 7.0+ | Seguro | Download Grátis",
      btn:"BAIXAR AGORA", info_original:"Original Oficial",
      nh:"Início", ni:"Instalar", nf:"FAQ", nu:"Versões",
      li_install:"Guia", li_faq:"Perguntas", li_update:"Histórico",
      h1_install:"Guia de Instalação", h1_faq:"Perguntas Frequentes", h1_update:"Histórico de Versões",
      back_btn:"Voltar para Download", back_btn_latest:"Voltar para Última Versão"
    }},
    tr: { translation: {
      badge:"2026 En Yeni v6.179.0", title:"OKX APK İndir",
      desc:"Resmi Orijinal Android Uygulaması<br>Android 7.0+ | Güvenli | Ücretsiz",
      btn:"HEMEN İNDİR", info_original:"Resmi Orijinal",
      nh:"Ana Sayfa", ni:"Kurulum", nf:"SSS", nu:"Güncelleme",
      li_install:"Kurulum", li_faq:"SSS", li_update:"Güncelleme",
      h1_install:"Kurulum Rehberi", h1_faq:"Sıkça Sorulan Sorular", h1_update:"Sürüm Geçmişi",
      back_btn:"İndirmeye Dön", back_btn_latest:"En Son Sürüme Dön"
    }},
    id: { translation: {
      badge:"2026 Terbaru v6.179.0", title:"Unduh OKX APK",
      desc:"Aplikasi Android Resmi Original<br>Android 7.0+ | Aman | Gratis",
      btn:"UNDUH SEKARANG", info_original:"Resmi Original",
      nh:"Beranda", ni:"Instal", nf:"FAQ", nu:"Riwayat",
      li_install:"Panduan", li_faq:"Tanya Jawab", li_update:"Riwayat",
      h1_install:"Panduan Instalasi", h1_faq:"Pertanyaan Umum", h1_update:"Riwayat Versi",
      back_btn:"Kembali ke Download", back_btn_latest:"Kembali ke Versi Terbaru"
    }},
    zh: { translation: {
      badge:"2026 最新版 v6.179.0", title:"OKX 欧易 APK 下载",
      desc:"官方原版安卓客户端<br>Android 7.0+ | 安全无毒 | 免费下载",
      btn:"立即下载", info_original:"官方原版",
      nh:"首页", ni:"安装教程", nf:"常见问题", nu:"更新日志",
      li_install:"安装教程", li_faq:"常见问题", li_update:"更新日志",
      h1_install:"安装教程", h1_faq:"常见问题", h1_update:"更新日志",
      back_btn:"返回下载", back_btn_latest:"返回最新版下载"
    }}
  };
  var T = {en:"OKX APK Download",pt:"Baixar OKX APK",tr:"OKX APK İndir",id:"Unduh OKX APK",zh:"OKX APK 下载"};

  // Detect language BEFORE i18next loads
  var p=new URLSearchParams(location.search);
  var ql=p.get('lang');
  var sl=localStorage.getItem('okx_lang');
  var bl=(navigator.language||'').toLowerCase();
  var pre='en';
  if(bl.startsWith('pt'))pre='pt';else if(bl.startsWith('tr'))pre='tr';else if(bl.startsWith('id'))pre='id';else if(bl.startsWith('zh'))pre='zh';
  else{var tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';if(/Asia\/(Shanghai|Urumqi|Taipei|Hong_Kong|Macau)/.test(tz))pre='zh'}

  // If no lang param, redirect to add it (ensures all URLs have ?lang=xx)
  if(!ql){
    var rl=sl||pre;
    localStorage.setItem('okx_lang',rl);
    var u=new URL(location.href);
    u.searchParams.set('lang',rl);
    location.replace(u.toString());
    return; // stop - page will reload with lang param
  }

  i18next.use(i18nextBrowserLanguageDetector).init({
    resources: R, fallbackLng: 'en', lng: ql,
    detection: { order:['querystring'], lookupQuerystring:'lang', caches:['localStorage'] }
  }, function(err){
    if(err)return;
    var l=i18next.language||ql;
    localStorage.setItem('okx_lang',l);
    // Translate
    document.querySelectorAll('[data-i18n]').forEach(function(el){el.innerHTML=i18next.t(el.getAttribute('data-i18n'))});
    document.title=T[l]||T.en;
    document.documentElement.lang=l;
    // ALL internal links get ?lang= param
    document.querySelectorAll('a').forEach(function(a){
      var h=a.getAttribute('href');if(!h)return;
      if(h.startsWith('http')||h.startsWith('#')||h.startsWith('mailto')||h.startsWith('javascript'))return;
      if(h.includes('lang='))return;
      a.href=h+(h.includes('?')?'&':'?')+'lang='+l;
    });
    // Dropdown
    var s=document.getElementById('langSwitcher');
    if(s){s.value=l;s.addEventListener('change',function(){var nl=this.value;localStorage.setItem('okx_lang',nl);location.href=location.pathname+'?lang='+nl})}
    // Nav highlight
    var p=location.pathname||'/';
    if(p!=='/'){var e=document.getElementById('nh');if(e)e.classList.remove('on');var m={'/install.html':'ni','/faq.html':'nf','/update.html':'nu'};var id=m[p];if(id){var a=document.getElementById(id);if(a)a.classList.add('on')}}
  });
})();
