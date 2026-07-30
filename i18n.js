(function(){
var T={
  en:{badge:"2026 Latest v6.179.0",title:"Download OKX APK",desc:"Official Original Android App<br>Android 7.0+ | Safe &amp; Virus-Free | Free Download",btn:"&#x2B07; Download Now",info_original:"Official Original",nav_home:"Home",nav_install:"Install Guide",nav_faq:"FAQ",nav_update:"Changelog",link_install:"Install Guide",link_faq:"FAQ",link_update:"Changelog"},
  pt:{badge:"2026 v6.179.0",title:"Baixar OKX APK",desc:"Aplicativo Android Original Oficial<br>Android 7.0+ | Seguro | Download Gr&aacute;tis",btn:"&#x2B07; Baixar Agora",info_original:"Original Oficial",nav_home:"In&iacute;cio",nav_install:"Instalar",nav_faq:"FAQ",nav_update:"Vers&otilde;es",link_install:"Guia",link_faq:"Perguntas",link_update:"Hist&oacute;rico"},
  tr:{badge:"2026 En Yeni v6.179.0",title:"OKX APK &Idot;ndir",desc:"Resmi Orijinal Android Uygulamas&imath;<br>Android 7.0+ | G&uuml;venli | &Uuml;cretsiz",btn:"&#x2B07; Hemen &Idot;ndir",info_original:"Resmi Orijinal",nav_home:"Ana Sayfa",nav_install:"Kurulum",nav_faq:"SSS",nav_update:"G&uuml;ncelleme",link_install:"Kurulum",link_faq:"SSS",link_update:"G&uuml;ncelleme"},
  id:{badge:"2026 Terbaru v6.179.0",title:"Unduh OKX APK",desc:"Aplikasi Android Resmi Original<br>Android 7.0+ | Aman | Gratis",btn:"&#x2B07; Unduh Sekarang",info_original:"Resmi Original",nav_home:"Beranda",nav_install:"Instal",nav_faq:"FAQ",nav_update:"Riwayat",link_install:"Panduan",link_faq:"Tanya Jawab",link_update:"Riwayat"},
  zh:{badge:"2026 最新版 v6.179.0",title:"OKX 欧易 APK 下载",desc:"官方原版安卓客户端<br>Android 7.0+ | 安全无毒 | 免费下载",btn:"&#x2B07; 立即下载",info_original:"官方原版",nav_home:"首页",nav_install:"安装教程",nav_faq:"常见问题",nav_update:"更新日志",link_install:"安装教程",link_faq:"常见问题",link_update:"更新日志"}
};
var titles={en:"OKX APK Download - Official Android App 2026",pt:"Baixar OKX APK - App Android Oficial 2026",tr:"OKX APK İndir - Resmi Android Uygulaması 2026",id:"Unduh OKX APK - Aplikasi Android Resmi 2026",zh:"OKX APK 下载 - 欧易安卓客户端 2026"};

var lang=localStorage.getItem('okx_lang');
if(!lang||!T[lang]){
  var bl=(navigator.language||'').toLowerCase();
  if(bl.startsWith('pt'))lang='pt';else if(bl.startsWith('tr'))lang='tr';else if(bl.startsWith('id'))lang='id';else if(bl.startsWith('zh'))lang='zh';
  else{var tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'';lang=/^Asia\/(Shanghai|Urumqi|Taipei|Hong_Kong|Macau)$/.test(tz)?'zh':'en'}
  localStorage.setItem('okx_lang',lang)
}

document.documentElement.lang=lang;
document.title=titles[lang]||titles.en;
document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(T[lang]&&T[lang][k])el.innerHTML=T[lang][k]});

var sel=document.getElementById('langSwitcher');
if(sel){sel.value=lang;sel.addEventListener('change',function(){localStorage.setItem('okx_lang',this.value);location.reload()})}

// Highlight active nav
var path=location.pathname||'/';
document.querySelectorAll('.nav-links a').forEach(function(a){if(a.getAttribute('href')===path||(path==='/'&&a.getAttribute('href')==='/'))a.classList.add('active')});
})();
