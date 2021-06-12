# WEBPACK5 FULL PROJECT SETUP - HTML + SASS + Bootstrap 4 + Vanilla JS

Bu proje yapısında HTML, SASS(SCSS), Bootstrap4 ve Vanilla JS ile front-end uygulama geliştirebilirsiniz. Ayrıca bootstrap JQuery bağımlılığı olduğu için JQuery de proje içerisinde kullanılabilir. Ancak slim formatı yüklü olduğu için HTTP ve Asenkron işlemler için sunulan özellikleri kullanamazsınız.

## Yapılandırma Kapsamı
1. HTML (HtmlWebpackPlugin)
2. Vanilla JS (Babel)
3. SASS (7-1 Pattern)
4. Bootstrap4 (+Normalize.css)
5. PostCSS (Autoprefixer)
6. HMR (Hot Module Replacement)
7. Source Maps
8. Browserslist
9. Images
10. DIST Folder->Automated Cleaning

## Çalıştırma ve Derleme
- Sisteminizde öncelikle `NodeJS` ve `NPM` kurulu olmalıdır. Ben bu projeyi hazırlarken `NodeJS v14.15.3` ve `NPM 6.14.9` sürümünü kullandım.
- Öncelikle `npm install` komutu ile gerekli paketleri yükleyin.
- Projeyi çalıştırmak için `npm start` komutunu kullanın. Varsayılan tarayıcınızda otomatik olarak örnek yapı çalıştırılacaktır.
> NOT: uygulama başlangıç dosyası `index.js` dosyasıdır. Webpack ayar dosyalarını incelemenizi tavsiye ediyorum.
- Proje içerisinde `src` klasörü altında bulunan kaynak dosyalar `npm run build-dev` komutu ile sıkıştırılmadan `source maps` dosyaları ile birlikte `dist` klasörü altına otomatik olarak çıkartılacaktır.
- Yapmış olduğunuz uygulama yayınlamaya hazır olduğu zaman `npm run build-prod` komutunu kullanabilirsiniz. Bu komutla birlikte `dist` altına tüm dosyalar sıkıştırılarak aktarılacaktır. Ayrıca `source maps` dosyaları oluşturulmayacaktır.

## Notlar
> `SCSS` klasörü altındaki yapı `7-1 SASS` klasör yapısı göz önüne alınarak hazırlandı. Klasör içerisindeki dosyaları kullanmak zorunda değilsiniz. Örnek bir yapı nasıl olmalı bu ifade etmek için ekledim. 

> SCSS ile CSS arasında kod olarak herhangi bir fark yok. Sadece CSS tarafında kullanamadığımız bazı önemli özellikler getirmektedir. CSS tarafında kullanılan `background-color` özelliği yine SCSS tarafında da `background-color` olarak kullanılmaktadır. Programlama dillerindeki önemli özellikleri SCSS ile dahil edebilmekteyiz. Bunun için `SASS-SCSS` repoma bakabilirsiniz.

> [SASS-SCSS](https://github.com/mrtozn1923/SASS-SCSS)

> Bootstrap ile alakalı tüm bilgileri uygulamayı çalıştırdığınız zaman açılan anasayfadan alabilirsiniz. Kısaca bootstrap kullanımını scss dosyaları ile gerçekleştiriyoruz. Bu sayede istediğimiz bileşeni ekleyip çıkartabiliriz. Ayrıca özelleştirmeler de yapmamız mümkün.

> CSS(SCSS) kodlarınız `POSTCSS` ile `.browserlistrc` dosyasındaki hedeflenen tarayıcı listesine göre kodlarınıza otomatik olarak `prefix` eklemektedir. Bu sayede yüksek tarayıcı uyumluluğu elde etmiş oluyorsunuz.

> CSS tarafında POSTCSS'in yapmış olduğu işi Javascript tarafında `Babel` gerçekleştirmektedir. Saf Javascript(Vanilla JS) kodunuzda ES6+ özellikler kullanmış olsanız bile ES5(ES2009) versiyonuna çevirmektedir.

> `.gitignore` dosyası projenin bir parçası değil eğer `git` sistemini kullanırsanız git sistemi tarafından takip edilmesini istemediğiniz dosyaları veya klasörleri bildirebilirsiniz.

> `README.md` dosyasıda github gibi ortamlarda proje hakkında bilgi vermek için kullandığımız bir dosyadır. Bu dosya içerisinde `markdown` ile yazı yazabilirsiniz.

> `package.json` altındaki npm scriptleri her çalıştırıldığında `dist` klasörü temizlenmektedir. Bu işlem için `clean-webpack-plugin` eklentisini kullandım.

> HTML dosyalarını `src` altında çıkartabilmek için `html-webpack-plugin` eklentisini kullandım. Bu eklenti dahili olarak `lodash` paketinide sunmaktadır. Lodash üzerinde kullandığınız bazı özellikler yine HTML sayfaları içerisinde de kullanılabilmektedir. Örneğin; `<%= require('../images/contact.png') %>` kodunu kullanmış olduğumuz resimleri HTML sayfası ile birlikte dist altına çıkartmak için kullandım. Buradaki `<% .. %>` lodash tarafından sağlanmaktadır.

> CSS dosyalarınız javascript dosyalarına dahil edip yorumlatabilmek için `mini-css-extract-plugin` eklentisini kullandım.

> Yapılandırmalar ile alakalı daha fazla detay alabilmek için daima `package.json` dosyasına bakın ve bağımlılıkların isimlerini alarak araştırın.

> `package.json` dosyasında tüm bağımlılıklar `devDependencies` olarak eklenmiştir. Bunun sebebi bu paketler sadece geliştirme yaparken kullanılacak olan paketlerdir. Yani `production` dediğimiz yayına alma zamanında bu paketlere ihtiyacımız olmayacaktır. Örneğin `react` kullanacak olsaydık bunu `dependencies` altına eklememiz gerekecekti. `devDependencies` olarak yükleme yapmak için `npm install --save-dev paket-adi` şeklinde yükleme yapmalıyız. Normal yükleme için yani projemizin yayınlandığı zamanda ihtiyaç duyacağı paketleri yüklemek için `npm install paket-adi` komutunu kullanmamız yeterli olacaktır.