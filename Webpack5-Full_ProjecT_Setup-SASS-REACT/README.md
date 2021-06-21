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

6. SCSS ile CSS arasında kod olarak herhangi bir fark yok. Sadece CSS tarafında kullanamadığımız bazı önemli özellikler getirmektedir. CSS tarafında kullanılan `background-color` özelliği yine SCSS tarafında da `background-color` olarak kullanılmaktadır. Programlama dillerindeki önemli özellikleri SCSS ile dahil edebilmekteyiz. Bunun için `SASS-SCSS` repoma bakabilirsiniz.

7. CSS(SCSS) kodlarınız `POSTCSS` ile `.browserlistrc` dosyasındaki hedeflenen tarayıcı listesine göre kodlarınıza otomatik olarak `prefix` eklemektedir. Bu sayede yüksek tarayıcı uyumluluğu elde etmiş oluyorsunuz.

8. CSS tarafında POSTCSS'in yapmış olduğu işi Javascript tarafında `Babel` gerçekleştirmektedir. Saf Javascript(Vanilla JS) kodunuzda ES6+ özellikler kullanmış olsanız bile ES5(ES2009) versiyonuna çevirmektedir.

9. `.gitignore` dosyası projenin bir parçası değil eğer `git` sistemini kullanırsanız git sistemi tarafından takip edilmesini istemediğiniz dosyaları veya klasörleri bildirebilirsiniz.

10. `README.md` dosyasıda github gibi ortamlarda proje hakkında bilgi vermek için kullandığımız bir dosyadır. Bu dosya içerisinde `markdown` ile yazı yazabilirsiniz.

11. `package.json` altındaki npm scriptleri her çalıştırıldığında `dist` klasörü temizlenmektedir. Bu işlem için `clean-webpack-plugin` eklentisini kullandım.

12. HTML dosyalarını `src` altında çıkartabilmek için `html-webpack-plugin` eklentisini kullandım. Bu eklenti dahili olarak `lodash` paketinide sunmaktadır. Lodash üzerinde kullandığınız bazı özellikler yine HTML sayfaları içerisinde de kullanılabilmektedir. Örneğin; `<%= require('../images/contact.png') %>` kodunu kullanmış olduğumuz resimleri HTML sayfası ile birlikte dist altına çıkartmak için kullandım. Buradaki `<% .. %>` lodash tarafından sağlanmaktadır.

13. CSS dosyalarınız javascript dosyalarına dahil edip yorumlatabilmek için `mini-css-extract-plugin` eklentisini kullandım.

14. Yapılandırmalar ile alakalı daha fazla detay alabilmek için daima `package.json` dosyasına bakın ve bağımlılıkların isimlerini alarak araştırın.

15. `package.json` dosyasında tüm bağımlılıklar `devDependencies` olarak eklenmiştir. Bunun sebebi bu paketler sadece geliştirme yaparken kullanılacak olan paketlerdir. Yani `production` dediğimiz yayına alma zamanında bu paketlere ihtiyacımız olmayacaktır. Örneğin `react` kullanacak olsaydık bunu `dependencies` altına eklememiz gerekecekti. `devDependencies` olarak yükleme yapmak için `npm install --save-dev paket-adi` şeklinde yükleme yapmalıyız. Normal yükleme için yani projemizin yayınlandığı zamanda ihtiyaç duyacağı paketleri yüklemek için `npm install paket-adi` komutunu kullanmamız yeterli olacaktır.