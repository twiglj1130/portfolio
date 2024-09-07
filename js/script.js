// DOM読み込み完了後に実行
$(function() {
  const $header = $('.header');
  const $pageTop = $('#js-page-top');
  const navHeight = $header.outerHeight();

  // ページ内スクロール
  $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const href = $(this).attr('href');
      const $target = $(href === '#' || href === '' ? 'html' : href);
      const position = $target.offset().top - navHeight;

      $('html, body').animate({ scrollTop: position }, 300, 'swing');
  });

  // ページトップへのスクロール
  $pageTop.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 300);
  });

  // ページ読み込み時にファビコンを設定
  setFavicon('./img/favicon.ico');
});

// ファビコンを設定する関数
function setFavicon(faviconUrl) {
  let link = document.querySelector("link[rel~='icon']");
  
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
  }
  
  link.href = faviconUrl;
}