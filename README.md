
# 🕌 Bahcesaray-Miras

> *"Ant etkenmen, söz bergenmen millet içün ölmege, / Bilip, körip milletimniñ köz yaşını silmege..."*
> — **Numan Çelebicihan** (Kırım Tatar Milli Marşı / Ant Etkenmen)

Bahcesaray-Miras, Kırım Tatar halkının zengin kültürel mirasını, edebi eserlerini, sanatını ve tarihi dokusunu dijital dünyada ölümsüzleştirmeyi hedefleyen açık kaynaklı bir araştırma ve hafıza deposudur.

Bir milletin varoluş mücadelesini sadece statik belgelerle değil, modern veri standartlarıyla derleyerek, bu mirası yarına taşımak için yapılandırılmış bir sistem mimarisi sunuyoruz.

## 📖 Vizyon ve Amaç

> *"Milletlerin kalbi edebiyattır, edebiyatsız millet dilsiz insana benzer."*
> — **İsmail Gaspıralı**

İsmail Gaspıralı'nın *"Dilde, fikirde, işte birlik"* şiarından aldığımız ilhamla, dünyanın dört bir yanına dağılmış edebi metinleri, sanatsal formları ve mitolojik unsurları tek bir çatı altında topluyoruz.

* **Araştırmacılar için:** Doğrulanmış, akademik referanslara dayanan tarihi ve kültürel metinlere kolay erişim.
* **Geliştiriciler için:** Kırım Tatar dili ve kültürü üzerine yapılacak doğal dil işleme (NLP) projeleri için yapılandırılmış (JSON/CSV) veri setleri.
* **Kültür Elçileri için:** Geleneksel sanatların, destanların ve yırların dijital ekosistemde yaşatılması.

## 🗂️ Sistem Mimarisi ve Klasör Yapısı

> *"Seniñ içün, tuvğan tilim, neler yapmam, neler etmem! / Seniñ içün, tuvğan tilim, kerek olsa, canım berem!"*
> — **Bekir Çoban-zade** (Tuvğan Til)

Dilin ve kültürün kaybolmaması adına, depomuz araştırmayı ve otomasyonu kolaylaştıran modüler bir mimariyle tasarlanmıştır:

* **`/Edebiyat`**: Şiirler, destanlar, Tercüman gazetesi arşivi, yazar biyografileri ve [Edebi Alıntılar](file:///g:/Di%C4%9Fer%20bilgisayarlar/Diz%C3%BCst%C3%BC%20Bilgisayar%C4%B1m/github%20repolar%C4%B1m/Bahcesaray-Miras/Edebiyat/Edebi_Alintilar.md).
* **`/Sanat_ve_Zanaat`**: Ahşap/taş oymacılığı, mimari detaylar ve Tarak-Tamga'nın köken analizleri.
* **`/Mitoloji_ve_Folklor`**: Çora Batır, Altın Beşik gibi destanların varyasyonları, halk inançları.
* **`/Tarih_ve_Surgun`**: Hanlık dönemi siyasi belgeleri, tarihi makaleler ve 1944 Sürgünü'ne (Sürgünlik) dair sözlü tarih çalışmaları.
* **`/Multimedya`**: Görsel arşivler, geleneksel müzik notaları ve derlenmiş yır/çıñ ses kayıtları.
* **`/Veri_Setleri`**: Geliştiriciler için hazırlanmış makine okumasına uygun formatlanmış kültürel metin verileri.

## ⚙️ Teknik Altyapı ve Veri Standartları

> *"İş bilmek, iş görmek, iş başarmak gerek. Boş laf karın doyurmaz."*
> — **İsmail Gaspıralı** (Toplumsal Kalkınma Yazıları)

Bu arşivdeki verilerin uzun ömürlü olması için:

* Metinler **Markdown (`.md`)** formatında hazırlanır.
* Araştırmaların sonuna mutlak surette referans/kaynakça eklenir.
* Görsel dizinleri, kendi içlerindeki mini `README.md` dosyalarıyla açıklanır.

## 🚀 Yol Haritası (Roadmap)

> *"Vatanlarında ölmeyenler, vatanlarının toprağına gömülmeyenler, hiçbir zaman gerçekten ölmüş sayılmazlar."*
> — **Cengiz Dağcı** (Yurdunu Kaybeden Adam)

* [x] **Faz 1:** Depo mimarisinin kurgulanması ve açık kaynak vizyonunun duyurulması.
* [ ] **Faz 2:** Temel edebi eserlerin, destanların ve tarihi şahsiyetlerin depoya eklenmesi.
* [ ] **Faz 3:** Topluluk katkılarıyla arşivin genişletilmesi (PR'ların kabulü).
* [ ] **Faz 4:** Dijitalleştirilmiş metinlerin açık bir "Kültür API'si" altyapısına dönüştürülmesi.

## 🤝 Katkı Rehberi (Contributing)

> *"Dilde, fikirde, işte birlik!"*
> — **İsmail Gaspıralı** (Tercüman Gazetesi şiarı)

Bu arşiv kolektif bir hafızadır. Yeni belgeler eklemek, tarihi metinleri transkript etmek veya var olan araştırmaları zenginleştirmek için herkesin katkısına açıktır:

1. Depoyu "Fork"layın.
2. Üzerinde çalışacağınız konuya uygun yeni bir dal (branch) oluşturun: `git checkout -b kultur/CoraBatirDestani`
3. Değişikliklerinizi "Commit"leyin: `git commit -m 'Eklenti: Çora Batır destanının Kırım Tatarca orijinal metni eklendi'`
4. Dalınıza "Push"layın: `git push origin kultur/CoraBatirDestani`
5. Bir "Pull Request (PR)" başlatın.

**Not:** Eklenen içeriklerin kaynaklarının belirtilmesi araştırma etiği açısından zorunludur.

## 📜 Lisans

Bu proje [MIT Lisansı](https://www.google.com/search?q=LICENSE) altında lisanslanmıştır. Bilginin ve kültürün özgürce paylaşılmasını, bilimsel araştırmalarda kullanılmasını ve korunmasını destekliyoruz.