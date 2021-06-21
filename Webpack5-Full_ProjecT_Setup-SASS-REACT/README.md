# WEBPACK5 FULL PROJECT SETUP - SASS + REACT(JSX)

Bu repo sass ve react üzerine geliştirme yapanlar için başlangıç projesidir.

> `NOT:` React uygulamaları `SPA(Single Page Application)` olarak ifade edilmektedir. Yani tek bir `HTML` dosyası üzerinde tüm işler yürütülmektedir. `HTML` dosyaları ile uğraşmadan tüm süreci javascript tarafında hallediyorsunuz. Tabi biçimlendirme işlemleri için ister `CSS` kullanının isterseniz `SASS(SCSS)` kullanın. Yönlendirme işlemleri için ayrıca `React Router` konusunu incelemelisiniz.

## Yapılandırma Kapsamı
1. Babel
2. Source Maps
3. CSS, SASS, PostCSS, HMR
4. Browserslist
5. React(JSX)
6. Images
7. Automated Cleaning and HTML Template

## Örnek Uygulamayı Çalıştırma
1. Bilgisayarınızda `NodeJS` ve `NPM` kurulu olmalıdır. Benim bu örnek proje yapısını hazırlarken kullandığım `NodeJS` sürümü `14.15.3`, `NPM` sürümü `6.14.9`.
2. `npm install` komutunu kullanarak `package.json` dosyasındaki tüm bağımlılıkları tek bir hamle ile yüklemiş olacaksınız.
3. `npm start` komutu `dist` klasörü altına dosya çıkartma işlemi yapmadan varsayılan tarayıcınızda uygulamayı açmaktadır.
4. `npm run build-dev` komutu sıkıştırma yapmadan `dist` klasörü altına dosyaların birleştirip `css` ve `js` dosyalarını verecektir. Ayrıca `.map` dosyalarını da çıkartacaktır.
5. `npm run build-prod` komutu sıkıştırma yaparak `dist` klasörü altına dosyları çıkartacaktır. Artık production ortamına hazırlandığı için `.map` dosyaları eklenmeyecektir.

## NOTLAR
1. Uygulama `index.js` üzerinden ayağa kaldırılmaktadır.
2. `index.html` dosyası üzerinde bulunan `root` divine react bileşenleri yerleştirilmektedir.
3. React bileşenlerini `components` klasörü altında oluşturabilirsiniz. Önemli olan hazırladığınız bileşenlerin ana uygulama dosyasına bağlı olmasıdır. Bu dosya `App.jsx` dosyasıdır.
4. Normalde react uygulamalarında `JSX` söz dizimi kullanılır ancak dosya uzantısı `JSX` olmaz. Genelde `JS` olarak görürsünüz. Burada `jsx` dosyalarının takibi için `webpack.common.js` dosyasında `resolve` bölümünde çözümlenecek dosya uzantısınıda bildirdik. Ayrıca regular expression kısmında da yine bu uzantıyı bildirdik.
5. `SASS(SCSS)` tarafında biçimlendirme yaparken `7-1 SASS Architecture` kullanılabilir. Burada fazla dosya karmaşası olmasın diye basit tuttum. Önemli olan yine ana dosyada hepsini birleştirmekten geçiyor. Buradaki ana dosya `index.scss` dosyasıdır.