# GULP + SASS + BABEL + WEBPACK INTEGRATION

Bu repo `gulp` ile Front-End uygulama geliştirmek isteyenler için sektördeki standart yapıları ve paketleri içeren başlangıç projesi sunmaktadır.

Proje dizinindeki package.json dosyasında kullanılan tüm paketleri görebilirsiniz. Tek tek paketlerin açıklamasını yapmayacağım. Paket isimlerini ve sürümlerini `NPM` üzerinde kontrol ederek ilgili dokümantasyona erişebilirsiniz.

```js
"devDependencies": {
    "@babel/core": "^7.17.12",
    "@babel/preset-env": "^7.16.11",
    "autoprefixer": "^9.8.8",
    "babel-loader": "^8.2.5",
    "browser-sync": "^2.27.10",
    "gulp": "^4.0.2",
    "gulp-imagemin": "^7.1.0",
    "gulp-postcss": "^9.0.1",
    "gulp-sass": "^5.1.0",
    "gulp-sourcemaps": "^3.0.0",
    "sass": "^1.50.1",
    "webpack": "^5.72.1",
    "webpack-stream": "^7.0.0"
  }
```

Bu başlangıç projesini kullandığınız zaman ne gibi avantajlar elde edeceksiniz ve kapsamı nedir bunu açıklayalım.

1. Bir CSS preprocessor olan SASS'ı kullanabileceksiniz. Dönüşüm işlemlerine `autoprefixer` dahil edilmiştir. Yani `.browserlistrc` dosyasında yapmış olduğunuz tanıma göre tarayıcı uyumluluğunu sağlamış olacaksınız. Sourcemap dosyası da dahil edildiği için hangi kodun hangi `scss` dosyasından geldiğini de anlayabileceksiniz.
2. `src/images` altındaki görseller otomatik olarak `optimize` edilerek `dist` klasörü altında `images` klasörüne aktarılacaktır.
3. `src` klasöründe oluşturduğunuz HTML dosyası otomatik olarak `dist` klasörüne aktarılacaktır.
4. `Webpack` entegrasyonu sayesinde `src` altındaki `js` klasöründe modül yapısını kullanarak javascript kodu yazabileceksiniz. 
5. `Babel` entegrasyonu ile `ES6` ve sonrası için kullanılabilir olan kodlarınız `ES5` standartlarına otomatik olarak dönüştürülecektir. Bu sayede yüksek tarayıcı desteği sağlamış olacaksınız. 
6. Hem CSS hem JS tarafında otomatik olarak `minify` işlemi yapılmaktadır.
7. `BrowserSync` sayesinde HTML, CSS, JS dosyalarınızda yapmış olduğunuz değişiklikler otomatik olarak tarayıcınıza uygulanır. 


## Projeyi Çalıştırma
1. `npm i` komutu ile projenin ihtiyaç duyduğu tüm paketleri indirin.
2. `npm i gulp-cli@4.0 -g` paketini global olarak kurun.
3. `npm i gulp@4.0 -g` paketini global olarak kurun.
3. Projenin ana dizinindeyken `npm start` komutunu çalıştırın. Bu komut `default` tanımlamayı yürütür.

