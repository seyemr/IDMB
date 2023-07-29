# IMDb Film Sitesi

Bu proje, IMDb benzeri bir film sitesi uygulamasıdır. Kullanıcılar bu uygulama üzerinden popüler filmleri keşfedebilir, film arayabilir, filmler hakkında detaylı bilgiler alabilir ve filmleri favorilerine ekleyebilir.

# Proje Önizleme
<img src="/gif/gif.gif"/>

# Gereksinimler
- Node.js ve npm yüklü olmalıdır.

# Kurulum

- Proje dosyalarını bilgisayarınıza klonlayın veya ZIP dosyasını indirip çıkarın.
- bash
- Copy code
- cd imdb-film-sitesi
- Gerekli bağımlılıkları yükleyin.
- bash
- Copy code
- npm install
- The Movie Database (TMDb) API anahtarını edinin.

Bu uygulama, film verilerini almak için The Movie Database (TMDb) API'sini kullanmaktadır. Bu nedenle, TMDb web sitesi üzerinden bir hesap oluşturarak bir API anahtarı almanız gerekmektedir.


# Çalıştırma
- Uygulamayı geliştirme modunda çalıştırmak için aşağıdaki komutu kullanın:

- bash
- Copy code
- npm start
- Tarayıcınızda http://localhost:3000 adresine giderek film sitesini görüntüleyebilirsiniz.

# Kullanılan Kütüphaneler
Bu proje, aşağıdaki kütüphaneleri kullanmaktadır:

- react-router-dom: Uygulama için yönlendirme işlemlerini yönetmek için kullanılmaktadır.
- @splidejs/react-splide: Film afişleri için bir carousel/slider oluşturmak için kullanılmaktadır.
- axios: TMDb API'larına HTTP istekleri yapmak için kullanılmaktadır.
- redux: Uygulama durumunu yönetmek ve merkezi bir veri deposu sağlamak için kullanılmaktadır.
- react-redux: React uygulamaları ile Redux arasında bağlantı sağlamak için kullanılmaktadır.
- redux-thunk: Redux'ta asenkron işlemleri yönetmek için kullanılmaktadır.
- react-icons: Farklı ikonları React uygulamasına kolayca eklemek için kullanılmaktadır.

# Özellikler
- Popüler filmleri ana sayfada listeler.
- Kullanıcılar arama kutusunu kullanarak filmleri arayabilir.
- Film detay sayfasında film hakkında daha fazla bilgi bulunur.
- Kullanıcılar, filmleri favorilere ekleyebilir ve favori filmlerini yönetebilir.
- Kullanıcılar, film fragmanlarını izleyebilir ve film afişlerine göz atabilirler.

# Projeye Katkı
Katkılarınızı bekliyoruz! Hata düzeltmeleri, yeni özellikler, iyileştirmeler ve belgelendirme için pull istekleri oluşturabilirsiniz. Katkı sağlamak için lütfen projeyi çatallayın (fork) ve pull isteği gönderin.

Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasını inceleyebilirsiniz.


# Kütüphaneler

- react-router-dom
- @splidejs/react-splide
- axios
- redux
- react-redux
- redux-thunk
- react-icons

# Kaynaklar

- API: https://developer.themoviedb.org/reference/intro/getting-started

- Resim Base Url : https://image.tmdb.org/t/p/original

# Yapılacaklar

- Redux kurulumunu yap
- Popüler film verisini çek > store'a aktar
- Rastgele bir popüler filmi seç ve `Hero.jsx` de ekrana bas.
- Filmlerin kategori verisini çek > store'a aktar
- Herbir kategori için ekran o kategoriye ait filmleri listeleyecek bir bileşen ``ListMovies` bas.
- - bu bileşende listelenecek kategorinin ismini
- - ve o kategoriye ait filmleri listele
