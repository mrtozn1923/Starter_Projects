# WEBPACK5 FULL PROJECT SETUP - Bootstrap 5 Customization

Bu proje yapısında `Bootstrap 5` için hazırlanan kaynak dosyaları kullanarak özelleştirme yapabilirsiniz. SCSS altındaki dosyalar Bootstrap için hazırlanan klasör yapısıdır. Aynı şekilde JS klasörü altındaki dosyalarda Bootstrap klasör yapısının kopyasıdır. Burada sadece `bootstrap.js` dosyasını ben ekledim. Buradaki dosyada tüm javascript dosyalarını topladım ve bu dosyayı da `index.js` üzerinde çağırdım. SCSS dosyaları ise `bootstrap.scss` dosyasında toplanmıştır. Yine `index.js` üzerinde bu dosya dahil edilmiştir. 

Özelleştirme işlemine örnek olması açısından `_variables.scss` dosyasında `$primary-color` karşılığı olan `$blue` değişkeni yerine `#turquoise` değişkeni tanımladım ve `#40e0d0` renk kodunu verdim. Artık `$primary-color` değişkeninin kullanıldığı heryerde `$blue` değişkeninin taşıdığı değer yerine `$turquoise` değişkeninin taşıdığı değer olacaktır.

## Yapılandırma Kapsamı
1. HTML (HtmlWebpackPlugin)
2. Vanilla JS (Babel)
3. Bootstrap (SCSS Structure)
4. PostCSS (Autoprefixer)
5. HMR (Hot Module Replacement)
6. Source Maps
7. Browserslist
8. DIST Folder->Automated Cleaning

## Çalıştırma ve Derleme
- Sisteminizde öncelikle `NodeJS` ve `NPM` kurulu olmalıdır. Ben bu projeyi hazırlarken `NodeJS v14.15.3` ve `NPM 6.14.9` sürümünü kullandım.
- Öncelikle `npm install` komutu ile gerekli paketleri yükleyin.
- Projeyi çalıştırmak için `npm start` komutunu kullanın. Varsayılan tarayıcınızda otomatik olarak örnek yapı çalıştırılacaktır.
> NOT: uygulama başlangıç dosyası `index.js` dosyasıdır. Webpack ayar dosyalarını incelemenizi tavsiye ediyorum.
- Proje içerisinde `src` klasörü altında bulunan kaynak dosyalar `npm run build-dev` komutu ile sıkıştırılmadan `source maps` dosyaları ile birlikte `dist` klasörü altına otomatik olarak çıkartılacaktır.
- Yapmış olduğunuz uygulama yayınlamaya hazır olduğu zaman `npm run build-prod` komutunu kullanabilirsiniz. Bu komutla birlikte `dist` altına tüm dosyalar sıkıştırılarak aktarılacaktır. Ayrıca `source maps` dosyaları oluşturulmayacaktır.
- Çalıştırdığınızda karşınıza çıkan sayfa `pages` altındaki `index.html` sayfasının derlenmiş hali olacaktır. Bu sayfada `Bootstrap 5` için oluşturulmuş bileşenlere ait örnekler bulunmaktadır. Daha fazla detay için https://getbootstrap.com/docs/5.0/getting-started/introduction/ adresini ziyaret edebilirsiniz.

## Notlar
> `SCSS` klasörü altındaki yapı `Bootstrap` geliştirici ekibinin hazırlamış olduğu yapıdır.

> Bootstrap `tooltip` ve `dropdown` bileşenlerinde `popper.js` kütüphanesini kullandığı için bu kütüphane bağımlılıklara eklenmiştir. Ayrıca `tooltip` bileşeni varsayılan olarak sayfada aktif değildir. Bunun için etkinleştirme işlemini `index.js` üzerinde gerçekleştirdim. Benzer şekilde bileşenler hakkında bilgi alabilmek için resmi internet sitesini takip edebilirsiniz. Burada adım adım bilgi verilmektedir.

> SCSS ile CSS arasında kod olarak herhangi bir fark yok. Sadece CSS tarafında kullanamadığımız bazı önemli özellikler getirmektedir. CSS tarafında kullanılan `background-color` özelliği yine SCSS tarafında da `background-color` olarak kullanılmaktadır. Programlama dillerindeki önemli özellikleri SCSS ile dahil edebilmekteyiz. Bunun için `SASS-SCSS` repoma bakabilirsiniz.

[SASS-SCSS](https://github.com/mrtozn1923/SASS-SCSS)

> CSS(SCSS) kodlarınız `POSTCSS` ile `.browserlistrc` dosyasındaki hedeflenen tarayıcı listesine göre kodlarınıza otomatik olarak `prefix` eklemektedir. Bu sayede yüksek tarayıcı uyumluluğu elde etmiş oluyorsunuz.

> `.browserlistrc` dosyası bootstrap geliştirici ekibinin kullandığı dosyadır.

> CSS tarafında POSTCSS'in yapmış olduğu işi Javascript tarafında `Babel` gerçekleştirmektedir. Saf Javascript(Vanilla JS) kodunuzda ES6+ özellikler kullanmış olsanız bile ES5(ES2009) versiyonuna çevirmektedir.

> `.gitignore` dosyası projenin bir parçası değil eğer `git` sistemini kullanırsanız git sistemi tarafından takip edilmesini istemediğiniz dosyaları veya klasörleri bildirebilirsiniz.

> `README.md` dosyasıda github gibi ortamlarda proje hakkında bilgi vermek için kullandığımız bir dosyadır. Bu dosya içerisinde `markdown` ile yazı yazabilirsiniz.

> `package.json` altındaki npm scriptleri her çalıştırıldığında `dist` klasörü temizlenmektedir. Bu işlem için `clean-webpack-plugin` eklentisini kullandım.

> HTML dosyalarını `src` altında çıkartabilmek için `html-webpack-plugin` eklentisini kullandım. Bu eklenti dahili olarak `lodash` paketinide sunmaktadır. Lodash üzerinde kullandığınız bazı özellikler yine HTML sayfaları içerisinde de kullanılabilmektedir. Örneğin; `<%= require('../images/contact.png') %>` kodunu kullanmış olduğumuz resimleri HTML sayfası ile birlikte dist altına çıkartmak için kullandım. Buradaki `<% .. %>` lodash tarafından sağlanmaktadır.

> CSS dosyalarınız javascript dosyalarına dahil edip yorumlatabilmek için `mini-css-extract-plugin` eklentisini kullandım.

> Yapılandırmalar ile alakalı daha fazla detay alabilmek için daima `package.json` dosyasına bakın ve bağımlılıkların isimlerini alarak araştırın.

> `package.json` dosyasında tüm bağımlılıklar `devDependencies` olarak eklenmiştir. Bunun sebebi bu paketler sadece geliştirme yaparken kullanılacak olan paketlerdir. Yani `production` dediğimiz yayına alma zamanında bu paketlere ihtiyacımız olmayacaktır. Örneğin `react` kullanacak olsaydık bunu `dependencies` altına eklememiz gerekecekti. `devDependencies` olarak yükleme yapmak için `npm install --save-dev paket-adi` şeklinde yükleme yapmalıyız. Normal yükleme için yani projemizin yayınlandığı zamanda ihtiyaç duyacağı paketleri yüklemek için `npm install paket-adi` komutunu kullanmamız yeterli olacaktır.