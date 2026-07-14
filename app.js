/**
   Bahçesaray Miras - Kırım Tatar Kültürel Mirası Dijital Portalı
   Uygulama Mantığı (JavaScript - Vanilla JS)
 */

// Global State
let allPoems = [];
let allAuthors = [];
let activeTab = "kesfet";
let currentQuoteIndex = 0;
let quoteInterval;

// pre-compiled Rich Articles from repository Markdown files
const articles = {
  "kirim-hanligi": {
    title: "⏳ Kırım Hanlığı (1441 - 1783)",
    content: `
      <p>Kırım Hanlığı (Kırım Yurtu), Altın Orda Devleti'nin parçalanmasının ardından Kırım yarımadası ve Deşt-i Kıpçak bozkırlarında Cengiz Han soyundan gelen Giray Hanedanı tarafından kurulan tarihi Türk-Tatar devletidir. Başkenti Bahçesaray'dır.</p>
      
      <h4>🏛️ Kuruluşu ve Altın Çağı</h4>
      <p>Hanlık, <strong>1441</strong> yılında Cengiz Han'ın torunlarından Toktamış Han'ın soyundan gelen <strong>I. Hacı Giray Han</strong> tarafından kurulmuştur. Hacı Giray, Cenevizliler ve Altın Orda'ya karşı verdiği mücadelelerle Kırım'ın bağımsızlığını ilan etmiştir.</p>
      <p>Mengli Giray döneminde hanlık gücünü pekiştirmiş ve <strong>1475</strong> yılında Osmanlı İmparatorluğu'nun (Fatih Sultan Mehmet dönemi) Kırım sahillerini fethetmesiyle Osmanlı himayesini kabul etmiştir. Bu himaye ilişkisi sıradan bir vassal devlet olmanın ötesinde, Girayların Osmanlı hanedanından sonra en itibarlı soy kabul edildiği özel bir ittifaktır. Giray Hanları, Osmanlı sadrazamlarıyla protokolde eşit haklara sahipti.</p>
      <p>Kırım Hanlığı askeri gücüyle Osmanlı ordularının Avrupa ve Kafkasya seferlerinde en önemli süvari gücünü oluşturmuştur. Kültürel olarak da Bahçesaray, Akmescit ve Gözleve gibi şehirlerde medreseler, saraylar ve kütüphaneler kurulmuş, Türk-İslam medeniyetinin kuzeydeki kalesi haline gelmiştir.</p>
      
      <h4>📉 Çöküşü ve Yıkılışı</h4>
      <p>17. yüzyılın sonlarından itibaren Rus Çarlığı'nın güneye inme politikası ve Osmanlı İmparatorluğu'nun zayıflaması Kırım'ı hedef haline getirmiştir.</p>
      <ul>
        <li><strong>1774 Küçük Kaynarca Antlaşması:</strong> Kırım Hanlığı, Osmanlı himayesinden koparılarak "bağımsız" hale getirilmiştir. Bu antlaşma, Rusya'nın Kırım'ı ilhak etmesi için zemin hazırlamıştır.</li>
        <li><strong>1783 İlhakı:</strong> Rus Çariçesi II. Katerina, Kırım Hanlığı'nın iç karışıklıklarından faydalanarak Kırım'ı Rus İmparatorluğu'na kattığını ilan etmiştir. Son han Şahin Giray tahtından çekilmek zorunda kalmıştır.</li>
      </ul>
      <p>İlhakın ardından yüz binlerce Kırım Tatarı Osmanlı topraklarına (özellikle Dobruca ve Anadolu'ya) göç etmek zorunda kalmış, Kırım'ın nüfus yapısı değiştirilmiştir.</p>
      
      <blockquote>"Vatanlarında ölmeyenler, vatanlarının toprağına gömülmeyenler, hiçbir zaman gerçekten ölmüş sayılmazlar."<br>— Cengiz Dağcı, <em>Yurdunu Kaybeden Adam</em></blockquote>
      
      <h4>Referanslar</h4>
      <ol>
        <li>İnalcık, Halil, <em>Kırım Hanlığı Tarihi Araştırmaları</em>, İş Bankası Kültür Yayınları, İstanbul.</li>
        <li>Fisher, Alan W., <em>The Crimean Tatars</em>, Hoover Institution Press, Stanford, 1978.</li>
      </ol>
    `
  },
  "surgun-1944": {
    title: "🥀 18 Mayıs 1944: Kırım Tatar Sürgünü (Sürgünlik)",
    content: `
      <p>18 Mayıs 1944 Kırım Tatar Sürgünü (Kırım Tatarca: <em>Sürgünlik</em>), Kırım Tatar halkının Sovyet rejimi tarafından ana vatanları Kırım'dan Özbekistan, Kazakistan ve Sibirya gibi Sovyetler Birliği'nin uzak bölgelerine toplu olarak sürgün edildiği büyük bir etnik temizlik ve insanlık trajedisidir.</p>
      
      <h4>📅 Sürgünün Gerçekleşmesi ve Karar</h4>
      <p>İkinci Dünya Savaşı sırasında Kırım'ın Nazi Almanyası işgalinden kurtarılmasının ardından, Sovyet lideri <strong>Joseph Stalin</strong>'in emriyle Kırım Tatarları "Almanlarla işbirliği yapmak" iddiasıyla kolektif olarak suçlanmıştır.</p>
      <ul>
        <li><strong>11 Mayıs 1944:</strong> Stalin, Devlet Savunma Komitesi'nin Kırım Tatarlarının sürgün edilmesini öngören gizli kararnameyi imzalamıştır.</li>
        <li><strong>18 Mayıs 1944 (Gece Yarısı):</strong> Sovyet gizli servisi (NKVD) askerleri Kırım Tatar evlerine baskın düzenlemiş, halka hazırlanmaları için sadece 15-20 dakika süre verilmiştir. Kadınlar, çocuklar, yaşlılar ve hatta Kızıl Ordu'da Almanlara karşı savaşan Kırım Tatar askerlerinin aileleri hayvan vagonlarına doldurulmuştur.</li>
        <li><strong>20 Mayıs 1944:</strong> Birkaç gün içinde yaklaşık <strong>191.000</strong> ile <strong>228.000</strong> arasında Kırım Tatarı yarımadadan tamamen temizlenmiş, Kırım "Tatarsız" hale getirilmiştir.</li>
      </ul>
      
      <h4>📈 İnsani Kayıplar ve Yaşam Koşulları</h4>
      <p>Hayvan vagonlarında haftalarca süren yolculuk boyunca açlık, susuzluk, havasızlık ve salgın hastalıklar nedeniyle on binlerce Kırım Tatarı vagonlarda hayatını kaybetmiştir. Ölenlerin naaşlarının istasyonlarda gömülmesine dahi izin verilmemiş, yol kenarlarına atılmıştır.</p>
      <p>Sürgün yerlerindeki zorunlu çalışma kamplarında ve özel yerleşim bölgelerinde (Özbekistan bozkırları vb.) iklim şartlarına uyum sağlayamama, yetersiz beslenme ve sıtma gibi hastalıklar nedeniyle ilk birkaç yıl içinde Kırım Tatar nüfusunun <strong>yaklaşık %46'sı</strong> (Kırım Tatar milli hareketinin verilerine göre) yaşamını yitirmiştir.</p>
      
      <h4>✊ Vatan Mücadelesi ve Dönüş</h4>
      <p>Sürgünün ardından Kırım'daki Tatarca yer isimleri değiştirilmiş, mezarlıklar, camiler ve tarihi binalar tahrip edilmiştir. Kırım Tatarlarının varlığı uzun yıllar Sovyet kayıtlarında inkar edilmiş, Kırım'a dönmeleri kesinlikle yasaklanmıştır.</p>
      <p>1950'lerden itibaren Kırım Tatarları, Sovyetler Birliği tarihinin en uzun soluklu ve en disiplinli sivil itaatsizlik ve insan hakları mücadelesini (Kırım Tatar Milli Hareketi) başlatmışlardır. Mustafa Abdülcemil Kırımoğlu gibi liderlerin öncülüğünde yürütülen bu barışçıl mücadele sonucunda, Sovyetler Birliği'nin dağılma sürecine girmesiyle <strong>1989</strong> yılından itibaren Kırım Tatarları kitlesel olarak vatanları Kırım'ye geri dönmeye başlamışlardır.</p>
      
      <h4>Referanslar</h4>
      <ol>
        <li>Kırımoğlu, Mustafa Abdülcemil, <em>Kırım Tatarlarının Hak Mücadelesi</em>, Ankara, 1993.</li>
        <li><em>Sürgünlik Hatıraları: Sözlü Tarih Çalışmaları</em>, Kırım Türkleri Kültür ve Yardımlaşma Derneği Yayınları.</li>
      </ol>
    `
  },
  "milli-hareket": {
    title: "✊ Mustafa Abdülcemil Kırımoğlu ve Milli Hareket",
    content: `
      <p>Mustafa Abdülcemil Kırımoğlu (Cemilev), Kırım Tatar halkının efsanevi milli lideri, Ukrayna milletvekili, insan hakları savunucusu ve Sovyet döneminin en ünlü muhaliflerinden (dissident) biridir. Sürgün edilen halkının vatanı Kırım'a barışçıl yollarla dönebilmesi için ömrünü adadığı mücadelesiyle tanınır.</p>
      
      <h4>📅 Gençliği ve Sürgün</h4>
      <p>Kırımoğlu, <strong>13 Kasım 1943</strong> tarihinde Kırım'ın Yalta bölgesindeki Ay-Serez köyünde doğmuştur. Henüz altı aylık bir bebekken, 18 Mayıs 1944 gecesi ailesiyle birlikte Kırım'dan Özbekistan'a sürgün edilmiştir. Sürgün kamplarında büyüyen Kırımoğlu, genç yaşlardan itibaren halkının vatana dönüş hakkını savunmaya başlamıştır.</p>
      
      <h4>⛓️ Sovyet Hapishaneleri ve Açlık Grevleri</h4>
      <p>Kırımoğlu, Sovyetler Birliği'nde Kırım Tatarlarının haklarını savunduğu ve insan hakları ihlallerini protesto ettiği için hayatının yaklaşık <strong>15 yılını</strong> Sovyet hapishanelerinde, çalışma kamplarında ve sürgünlerde geçirmiştir.</p>
      <ul>
        <li><strong>Kırım Tatar Gençler Birliği (1961):</strong> Taşkent'te arkadaşlarıyla kurduğu bu birlik, milli uyanışın ilk kıvılcımlarındandır.</li>
        <li><strong>Açlık Grevi (1975-1976):</strong> Omsk hapishanesinde tutulduğu sırada adaletsiz yargılamayı protesto etmek amacıyla başlattığı açlık grevi <strong>303 gün</strong> sürmüştür. Zorla beslenerek hayatta tutulan Kırımoğlu'nun bu direnişi, dünya kamuoyunda büyük yankı uyandırmış ve Kırım Tatar davasını uluslararası arenaya taşımıştır. Andrei Saharov, Petro Grigorenko gibi ünlü Sovyet aydınları Kırımoğlu'na destek vermiştir.</li>
      </ul>
      
      <h4>🏛️ Kurultay ve Vatana Dönüş</h4>
      <p>Sovyetler Birliği'nin dağılma sürecine girmesiyle birlikte, Kırım Tatarlarının vatana dönüşü hız kazanmıştır.</p>
      <ul>
        <li><strong>Milli Meclis Başkanlığı (1991):</strong> 1991 yılında Kırım'ın Akmescit kentinde toplanan II. Kırım Tatar Milli Kurultayı'nda halkın meşru temsil organı olan <strong>Kırım Tatar Milli Meclisi (KTMM)</strong> kurulmuş ve Kırımoğlu meclisin ilk başkanı seçilmiştir. Bu görevi 2013 yılına kadar kesintisiz sürdürmüştür.</li>
        <li><strong>Barışçıl Mücadele:</strong> Kırımoğlu önderliğindeki Kırım Tatar Milli Hareketi, tüm hak arama mücadelelerini şiddete başvurmadan, uluslararası hukuk ve insan hakları zemininde yürütmesiyle dünyaya örnek olmuştur. Kırımoğlu bu yönüyle defalarca Nobel Barış Ödülü'ne aday gösterilmiştir.</li>
      </ul>
      
      <h4>Referanslar</h4>
      <ol>
        <li>Kırımoğlu, Mustafa Abdülcemil, <em>Kırım Tatarlarının Dünü, Bugünü, Yarını</em>, Ankara, 2015.</li>
        <li>Grigorenko, Petro, <em>Memoirs</em>, Norton & Company, New York, 1982.</li>
      </ol>
    `
  },
  "cora-batir": {
    title: "🐉 Çora Batır Destanı",
    content: `
      <p>Kırım Tatar halkının en köklü ve kahramanlık temalı destanlarından biridir. Nogay ve Kırım Tatar sözlü geleneklerinde geniş yer tutar. Kazan Hanlığı'nın Ruslara karşı savunulmasında kahramanca mücadele eden Çora Batır'ın hayatını ve savaşlarını anlatır.</p>
      
      <h4>Destanın Konusu ve Önemi</h4>
      <p>Destanda Çora Batır'ın doğumu, olağanüstü güçleri, sadık atı ve halkını korumak için girdiği mücadeleler anlatılır. Tarihsel olarak Kazan'ın düşüşü (1552) döneminde Rus Çarı Korkunç İvan'ın ordularına karşı Kazan Hanlığı'na yardıma giden Kırım-Nogay batırlarının mücadelesini simgeler. Kırım Tatar folklorunda vatanseverlik, cesaret ve birlik duygularını aşılayan çok önemli bir sözlü eserdir.</p>
      
      <h4>Destandan Bir Kesit (Kırım Tatarca)</h4>
      <blockquote>
        ...<br>
        Çora derler bir batır,<br>
        Kazan yolunda yatar,<br>
        Halkı için canını satar.<br>
        Kılıcını çekende düşman qaçarlı,<br>
        Qalqanını tutanda cihan şaşarlı.<br>
        ...
      </blockquote>
      
      <h4>Referanslar</h4>
      <ol>
        <li><em>Kırım Tatar Halk Destanları</em>, Akmescit, 1980.</li>
        <li>Bekirov, Cevdet, <em>Kırım Tatar Folkloru</em>, Taşkent, 1975.</li>
      </ol>
    `
  },
  "altin-besik": {
    title: "👑 Altın Beşik Efsanesi",
    content: `
      <p>Kırım Tatar mitolojisi ve folklorunda çok önemli bir yere sahip olan ulusal simgesel bir efsanedir. Kırım'ın dağlarında gizlendiğine inanılan kutsal "Altın Beşik" ve onun etrafında şekillenen inanışları konu alır.</p>
      
      <h4>Efsanenin Özeti ve Simgesel Anlamı</h4>
      <p>Efsaneye göre, Kırım'ın eski hükümdarları, ülkeyi istila eden düşmanlardan korumak amacıyla, halkın birliğini, egemenliğini ve geleceğini simgeleyen kutsal Altın Beşik'i Mangup Kale veya Kırım'ın yüksek dağlarındaki mağaralardan birine saklamışlardır. Bu beşik, Kırım Tatar halkının hürriyetinin ve vatandaki bekasının sembolüdür.</p>
      <p>Efsaneye göre bu beşik ancak ve ancak Kırım'ın gerçek sahipleri birlik ve dirlik içinde olduğunda ortaya çıkacaktır. Altın Beşik efsanesi, Kırım Tatarlarının sürgün yıllarında vatana dönüş inancını ve ümidini canlı tutan en önemli manevi dayanaklardan biri olmuştur.</p>
      
      <h4>Referanslar</h4>
      <ol>
        <li><em>Kırım Tatar Efsaneleri</em>, Derleyen: Riza Fazıl, Akmescit, 2001.</li>
        <li>Özen, Adnan, <em>Kırım Türklerinin Halk Edebiyatı</em>, Kültür Bakanlığı Yayınları, Ankara.</li>
      </ol>
    `
  },
  "tarak-tamga": {
    title: "🔱 Tarak-Tamga: Kırım Tatar Milli Sembolü",
    content: `
      <p>Tarak-Tamga (Tarak Damgası), Kırım Tatarlarının tarihi ve milli sembolü, günümüzde ise Kırım Tatar milli bayrağının sol üst köşesinde yer alan ulusal armasıdır. Kökeni Kırım Hanlığı'nı yöneten Giray Hanedanı'na dayanır.</p>
      
      <h4>🏛️ Tarihçesi ve Kökeni</h4>
      <p>Tamgalar (damgalar), Avrasya bozkırlarındaki Türk ve Moğol boyları tarafından mülkiyeti, soyu ve egemenliği belirtmek amacıyla kullanılan piktografik sembollerdir. Kırım Hanlığı'nı kurucusu <strong>I. Hacı Giray Han</strong>, hanedanın sembolü olarak üç dişli "Tarak-Damga"yı benimsemiştir.</p>
      <p>Kırım Hanlığı döneminde Tarak-Tamga resmi belgelerde, hanlık paralarında (akçe), cami kitabelerinde ve askeri sancaklarda egemenlik nişanesi olarak kullanılmıştır. Bahçesaray Han Sarayı'nın meşhur Demir Kapı'sı (Portal) ve diğer tarihi binaların üzerinde bu tamgayı görmek mümkündür.</p>
      
      <h4>🎨 Sembolik Anlamı ve Geometrisi</h4>
      <p>Tarak-Tamga'nın şekli ve temsil ettiği değerler üzerine çeşitli tarihsel ve kültürel yorumlar mevcuttur:</p>
      <ol>
        <li><strong>Terazi ve Adalet:</strong> Üç dişli yapının bir teraziyi andırdığı, bunun da hanlığın en temel ilkesi olan "adalet ve dengeyi" simgelediği kabul edilir. Orta diş devlet otoritesini, yan dişler ise dengeli güç dağılımını temsil eder.</li>
        <li><strong>Tarak (Tarakçılık):</strong> Şeklin bir tarağa benzemesi sebebiyle bu adı almıştır. Kültürel olarak saç taramanın temizliği ve düzeni simgelemesi gibi, tamganın da toplumdaki düzeni ve birliği temsil ettiği yorumu yapılır.</li>
        <li><strong>Üç Ok / Boy Birliği:</strong> Türk mitolojisindeki üç ok veya farklı boyların (Kırım, Nogay, Tatlar) hanın otoritesi altında birleşmesini simgeler.</li>
      </ol>
      
      <h4>🇺🇦 Milli Bayrakta Kullanımı</h4>
      <p>Kırım Tatar milli bayrağı, gök mavisi zemin üzerine sol üst köşede altın sarısı renginde konumlandırılmış bir Tarak-Tamga'dan oluşur. Gök mavisi renk Türklüğü ve barışı, altın sarısı Tarak-Tamga ise köklü hanedan mirasını ve bağımsızlığı temsil eder. Bayrak ilk kez 1917 yılında toplanan I. Kırım Tatar Kurultayı'nda kabul edilmiştir.</p>
    `
  },
  "telkari": {
    title: "💍 Telkari ve Kuyumculuk Sanatı",
    content: `
      <p>Kırım Tatar kuyumculuk sanatı, özellikle gümüş filigran (Kırım Tatarca: <em>Telkari</em>) işçiliği, Kırım el sanatlarının en zarif ve gelişmiş dallarından biridir. Yüzyıllar boyunca Bahçesaray, Gözleve ve Karasubazar gibi zanaat merkezlerinde usta-çırak ilişkisiyle yaşatılmıştır.</p>
      
      <h4>🛠️ Teknik ve İşçilik: Telkari nedir?</h4>
      <p>Telkari (veya filigran), gümüş ya da altın külçelerin eritilip ince teller haline getirilmesi ve bu tellerin bükülerek dantel gibi örülmesi sanatıdır. Kırım Tatar ustaları bu sanatı iki ana teknikle icra ederlerdi:</p>
      <ul>
        <li><strong>Açık Filigran:</strong> Metal bir zemin kullanılmadan, yalnızca tellerin birbirine lehimlenmesiyle oluşturulan şeffaf, dantel görünümlü eserlerdir.</li>
        <li><strong>Kapalı (Zeminli) Filigran:</strong> Düz bir gümüş plakanın üzerine telkari motiflerin yapıştırılması ve kaynak yapılması tekniğidir.</li>
      </ul>
      
      <h4>👗 Öne Çıkan Eserler: Quşaq ve Sülâle Takıları</h4>
      <p>Kırım Tatar kuyumculuğunun en nadide parçaları kadın giyiminin tamamlayıcı unsurları olan kemerler ve takılardır:</p>
      <ol>
        <li><strong>Kırım Tatar Kuşağı (Quşaq):</strong> Geleneksel Kırım Tatar kadın giysilerinin (anter) üzerine takılan, telkari tekniğiyle yapılmış gümüş kemerdir. Ön kısmında çiçek veya hayat ağacı motifli görkemli gümüş toka (baş) yer alır.</li>
        <li><strong>Göğüs Süsü (Kökslük):</strong> Gelinliklerin göğüs kısmına takılan, zincirler ve filigran plakalardan oluşan gösterişli takılardır.</li>
        <li><strong>Tepelik (Fes Süsü):</strong> Kadınların başlarına taktıkları kadife feslerin üzerine dikilen veya iğnelenen gümüş süslemelerdir.</li>
      </ol>
    `
  },
  "han-sarayi": {
    title: "🕌 Bahçesaray Han Sarayı",
    content: `
      <p>Bahçesaray Han Sarayı (Hansaray), Kırım Tatar mimarisinin dünyadaki en önemli anıtsal eseri ve Kırım Hanlığı'nın tarihi yönetim merkezidir. Kırım'ın Bahçesaray şehrinde, Çürük Su nehrinin kıyısında yer alan bu saray, Doğu ve Batı mimari tarzlarının harmanlandığı, geniş bahçeleri ve kubbeleriyle ünlü bir külliyedir.</p>
      
      <h4>🏛️ Tarihçesi ve İnşası</h4>
      <p>Sarayın inşasına 16. yüzyılın başlarında, I. Mengli Giray Han döneminde başlanmış, I. Sahib Giray Han döneminde ise saray genişletilerek hanlığın başkenti buraya taşınmıştır. Saray kompleksi hanların ikametgahı, divan salonu, camiler, türbeler, kütüphane, hamamlar ve muhafız kuleleri gibi pek çok bölümden oluşur.</p>
      
      <h4> Fountain of Tears / Gözyaşı Çeşmesi (Selsebil)</h4>
      <p>Sarayın en popüler simgesidir. Kırım Giray Han tarafından, genç yaşta vefat eden eşi Dilara Bikeç anısına 1763 yılında mimar Ömer Usta'ya yaptırılmıştır. Mermerden yontulmuş bu çeşme, taştan akan damlalarla ağlayan bir gözü sembolize eder. Alexander Pushkin, sarayı ziyareti sonrası bu çeşmeden esinlenerek ünlü "Bahçesaray Çeşmesi" poemini kaleme almıştır.</p>
      
      <h4>🏛️ Divan Salonu ve Demir Kapı</h4>
      <p>Divan salonu altın tavan süslemeleri ve renkli pencereleri ile meclis merkezidir. Demir Kapı (Portal) ise 1503 yılında Mengli Giray Han tarafından Alevisio Novi'ye yaptırılan sarayın en eski ve sanatsal Rönesans tarzı kapısıdır.</p>
    `
  },
  "adetler": {
    title: "🏺 Bayramlar, Gelenekler ve Görenekler",
    content: `
      <p>Kırım Tatar halk kültürü, yüzyıllar boyunca yerleşik tarım ve bağcılık kültürü ile bozkır Nogay geleneklerinin kaynaşmasıyla şekillenmiştir. Bu kültürün en belirgin yansımaları bayramlarda, aile içi törenlerde ve toplumsal adetlerde görülür.</p>
      
      <h4>🌾 Milli Bayramlar ve Şenlikler</h4>
      <p>Kırım Tatarlarının bayramları doğanın döngüsü, tarım takvimi ve inanç sistemiyle doğrudan ilişkilidir:</p>
      <ul>
        <li><strong>Hıdırellez (Hıdır-Ellez):</strong> Baharın gelişini müjdeleyen bayramdır. Kalakay Tıgırlatmak (yuvarlak ekmek yuvarlama) geleneğiyle ünlüdür. Ekmeğin düz durması bereketin, ters durması kuraklığın işareti kabul edilir.</li>
        <li><strong>Tepreş:</strong> Bahar sonu ekimler bitince düzenlenen açık hava şenlikleridir. Çiğbörek pişirilmesi, güreşlerin yapılması, yır ve çıñların söylenmesi gelenekseldir.</li>
      </ul>
      
      <h4> Düğün ve Misafirperverlik Adetleri</h4>
      <p>Kına Gecesi (Qına Keçesi) gelinin baba evinden ayrılmadan önce arkadaşlarıyla yaptığı hüzünlü yırlı merasimdir. Eve gelen misafirlere cezvede pişmiş Kırım Tatar Kahvesi küçük kulpsuz fincanlarda (zarf) nöbet şekeri (navat) ve kurabiye (kete) eşliğinde ikram edilir.</p>
    `
  }
};

const quotes = [
  { text: "Ant etkenmen, söz bergenmen millet içün ölmege, / Bilip, körip milletimniñ köz yaşını silmege...", author: "Numan Çelebicihan, Ant Etkenmen" },
  { text: "Milletlerin kalbi edebiyattır, edebiyatsız millet dilsiz insana benzer.", author: "İsmail Bey Gaspıralı, Edebi Yazılar" },
  { text: "Seniñ içün, tuvğan tilim, neler yapmam, neler etmem! / Seniñ içün, tuvğan tilim, kerek olsa, canım berem!", author: "Bekir Sıtkı Çoban-zade, Tuvğan Til" },
  { text: "Vatan sevgisi imandandır derler, Kırım'a hizmet etmek her Kırım Tatarı için bir şereftir.", author: "Şakir Selim, Yıldız Dergisi Başyazısı" },
  { text: "Dilde, fikirde, işte birlik!", author: "İsmail Bey Gaspıralı, Tercüman Gazetesi Şiarı" },
  { text: "Kırım – bizim yeşil beşik, / Altın saray, nurlu eşik.", author: "Amdi Giraybay, Kırımım" },
  { text: "Vatan, insanın çocukluğudur; ilk gördüğü gökyüzü, ilk bastığı topraktır.", author: "Cengiz Dağcı, Korkunç Yıllar" },
  { text: "Bir kün kelir bu divarlar yıkılır, / Milletimniñ zincirleri kırılır.", author: "Eşref Şemi-zade, Közyaş Divarı" }
];

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  loadData();
  setupQuoteSlider();
  setupModals();
  setupSearch();
  setupMobileMenu();
  setupCrimeaMap();
  setupMusicPlayer();
  setupMorphologyAndVocab();
  setupQuiz();
});

// 1. Navigation & Tabs
function setupTabs() {
  const navLinks = document.querySelectorAll(".nav-link, .footer-nav-link");
  const tabPanes = document.querySelectorAll(".tab-pane");

  function switchTab(tabId) {
    if (!tabId) return;
    
    // Deactivate current active nav links
    document.querySelectorAll(".nav-link.active").forEach(l => l.classList.remove("active"));
    
    // Activate target nav links (in header/footer)
    document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(l => l.classList.add("active"));
    
    // Hide active tab pane
    tabPanes.forEach(pane => {
      pane.classList.remove("active");
    });
    
    // Show target tab pane
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
      targetPane.classList.add("active");
      activeTab = tabId;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    // Hide mobile menu if open
    document.getElementById("nav-menu-list").classList.remove("active");
    document.getElementById("menu-toggle-btn").innerHTML = '<i class="fa-solid fa-bars"></i>';
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const tabId = link.getAttribute("data-tab") || link.getAttribute("href").replace("#", "");
      switchTab(tabId);
      // Update hash in URL quietly
      history.pushState(null, null, `#${tabId}`);
    });
  });

  // Handle direct links with hash
  if (window.location.hash) {
    const hash = window.location.hash.replace("#", "");
    switchTab(hash);
  }

  // Handle stat cards clicks
  document.querySelectorAll(".stat-card").forEach(card => {
    card.addEventListener("click", () => {
      const target = card.getAttribute("data-target");
      switchTab(target);
      history.pushState(null, null, `#${target}`);
    });
  });
}

// 2. Fetch Data from JSON Datasets
function loadData() {
  Promise.all([
    fetch("Veri_Setleri/JSON/siirler.json").then(res => res.json()),
    fetch("Veri_Setleri/JSON/yazarlar.json").then(res => res.json())
  ])
  .then(([poems, authors]) => {
    allPoems = poems;
    allAuthors = authors;
    
    // Update stats counters
    document.getElementById("stat-poems-count").textContent = allPoems.length;
    document.getElementById("stat-authors-count").textContent = allAuthors.length;
    
    // Populate Edebiyat sidebar and grid
    renderPoemSelector();
    renderAuthorsGrid();
    
    // Run Word Frequency Analysis
    runNLPAnalysis();
  })
  .catch(err => {
    console.error("Veri kümeleri yüklenirken hata oluştu:", err);
  });
}

// 3. Quote Slider Logic
function setupQuoteSlider() {
  const container = document.getElementById("quote-slider-container");
  const prevBtn = document.getElementById("prev-quote");
  const nextBtn = document.getElementById("next-quote");

  function renderQuote(index) {
    const quote = quotes[index];
    container.innerHTML = `
      <div class="quote-slide active">
        <blockquote class="quote-text">"${quote.text}"</blockquote>
        <cite class="quote-author">— ${quote.author}</cite>
      </div>
    `;
  }

  function showNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    renderQuote(currentQuoteIndex);
  }

  function showPrevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    renderQuote(currentQuoteIndex);
  }

  nextBtn.addEventListener("click", () => {
    clearInterval(quoteInterval);
    showNextQuote();
    startQuoteTimer();
  });

  prevBtn.addEventListener("click", () => {
    clearInterval(quoteInterval);
    showPrevQuote();
    startQuoteTimer();
  });

  function startQuoteTimer() {
    quoteInterval = setInterval(showNextQuote, 6000);
  }

  renderQuote(currentQuoteIndex);
  startQuoteTimer();
}

// 4. Poetry Sidebar & Side-by-side Interactive Reader
function renderPoemSelector() {
  const list = document.getElementById("poem-selector-list");
  list.innerHTML = "";
  
  allPoems.forEach((poem, index) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = `poem-item-btn ${index === 0 ? "active" : ""}`;
    btn.innerHTML = `
      <span>${poem.baslik}</span>
      <span class="author-badge">${poem.yazar.split(" ")[0]}</span>
    `;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".poem-item-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadPoemIntoReader(poem);
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
  
  // Load the first poem by default
  if (allPoems.length > 0) {
    loadPoemIntoReader(allPoems[0]);
  }
}

function loadPoemIntoReader(poem) {
  document.getElementById("reader-poem-title").textContent = poem.baslik;
  document.getElementById("reader-poem-title-tr").textContent = poem.turkce_baslik;
  document.getElementById("reader-poem-author").textContent = poem.yazar;
  document.getElementById("reader-poem-year").textContent = poem.yil;
  document.getElementById("reader-poem-genre").textContent = poem.tur;
  
  const originalContainer = document.getElementById("reader-original-lines");
  const translatedContainer = document.getElementById("reader-translated-lines");
  
  originalContainer.innerHTML = "";
  translatedContainer.innerHTML = "";
  
  // Render Kırım Tatarca original lines
  poem.orijinal_metin.forEach((line, idx) => {
    const div = document.createElement("div");
    div.className = "poem-line";
    div.setAttribute("data-line-index", idx);
    div.textContent = line;
    originalContainer.appendChild(div);
  });
  
  // Render Turkish translation lines
  poem.turkce_tercume.forEach((line, idx) => {
    const div = document.createElement("div");
    div.className = "poem-line";
    div.setAttribute("data-line-index", idx);
    div.textContent = line;
    translatedContainer.appendChild(div);
  });
  
  // Setup Synchronized Highlighting on Hover
  const allLines = document.querySelectorAll(".lines-container .poem-line");
  allLines.forEach(lineEl => {
    lineEl.addEventListener("mouseover", () => {
      const idx = lineEl.getAttribute("data-line-index");
      document.querySelectorAll(`[data-line-index="${idx}"]`).forEach(el => {
        el.classList.add("hovered");
      });
    });
    
    lineEl.addEventListener("mouseout", () => {
      const idx = lineEl.getAttribute("data-line-index");
      document.querySelectorAll(`[data-line-index="${idx}"]`).forEach(el => {
        el.classList.remove("hovered");
      });
    });
  });
}

// 5. Authors Grid & Popup Details
function renderAuthorsGrid() {
  const container = document.getElementById("authors-grid-container");
  container.innerHTML = "";
  
  allAuthors.forEach(author => {
    const card = document.createElement("div");
    card.className = "glass-card author-card";
    
    card.innerHTML = `
      <div class="author-avatar"><i class="fa-solid fa-feather-pointed"></i></div>
      <div class="author-card-header">
        <h3>${author.ad}</h3>
        <p class="author-unvan">${author.unvan}</p>
        <span class="author-years">${author.dogum_yili} - ${author.olum_yili}</span>
      </div>
      <p>${author.hakkinda}</p>
      <div class="author-card-footer">Biyografiyi Oku <i class="fa-solid fa-arrow-right"></i></div>
    `;
    
    card.addEventListener("click", () => {
      openAuthorModal(author);
    });
    
    container.appendChild(card);
  });
}

function openAuthorModal(author) {
  document.getElementById("author-modal-title").textContent = author.ad;
  document.getElementById("author-modal-unvan").textContent = author.unvan;
  document.getElementById("author-modal-years").textContent = `${author.dogum_yili} - ${author.olum_yili}`;
  document.getElementById("author-modal-birthplace").textContent = author.dogum_yeri;
  document.getElementById("author-modal-bio").textContent = author.hakkinda;
  
  const worksList = document.getElementById("author-modal-works");
  worksList.innerHTML = "";
  author.ana_eserler.forEach(work => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fa-solid fa-check accent-gold"></i> <strong>${work}</strong>`;
    worksList.appendChild(li);
  });
  
  document.getElementById("author-modal").classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scroll behind
}

// 6. Article Modals & History/Culture Panels
function setupModals() {
  const docModal = document.getElementById("document-modal");
  const authorModal = document.getElementById("author-modal");
  
  // Close buttons hooks
  const closeDocBtn = document.getElementById("modal-close-btn");
  const closeDocBottom = document.getElementById("modal-close-bottom");
  const docOverlay = document.getElementById("modal-overlay-bg");
  
  const closeAuthorBtn = document.getElementById("author-modal-close-btn");
  const closeAuthorBottom = document.getElementById("author-modal-close-bottom");
  const authorOverlay = document.getElementById("author-modal-overlay");
  
  function closeAllModals() {
    docModal.classList.remove("active");
    authorModal.classList.remove("active");
    document.body.style.overflow = ""; // Restore scroll
  }
  
  [closeDocBtn, closeDocBottom, docOverlay, closeAuthorBtn, closeAuthorBottom, authorOverlay].forEach(el => {
    if (el) el.addEventListener("click", closeAllModals);
  });
  
  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  // Setup click listeners on all "Read More" buttons across the application
  document.body.addEventListener("click", (e) => {
    const targetBtn = e.target.closest(".read-more-btn");
    if (targetBtn) {
      const articleKey = targetBtn.getAttribute("data-article");
      const article = articles[articleKey];
      if (article) {
        document.getElementById("modal-title").innerHTML = article.title;
        document.getElementById("modal-body-content").innerHTML = article.content;
        docModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    }
  });
  
  // Kultur Sub-tabs Navigation
  const kulturBtns = document.querySelectorAll(".kultur-tab-btn");
  const kulturPanes = document.querySelectorAll(".kultur-pane");
  
  kulturBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      kulturBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const paneId = `kultur-${btn.getAttribute("data-kultur")}`;
      kulturPanes.forEach(pane => {
        pane.classList.remove("active");
      });
      document.getElementById(paneId).classList.add("active");
    });
  });
}

// 7. NLP Word Frequency Analyzer
function runNLPAnalysis() {
  if (allPoems.length === 0) return;
  
  // Concatenate all original lines
  let fullText = "";
  allPoems.forEach(poem => {
    fullText += poem.orijinal_metin.join(" ") + " ";
  });
  
  // Clean punctuation and find all words using regex
  // Characters included: standard Latin alphabet, Crimean Tatar specific letters ñ, q, ı, ö, ü, ş, ç, ğ, and apostrophes
  const words = fullText.match(/[a-zA-ZñÑqQıİöÖüÜşŞçÇğĞâÂ’']+/g) || [];
  
  // Common stop words to exclude from word count
  const stopWords = new Set([
    "ve", "de", "da", "bu", "o", "men", "siz", "sen", "dep", "içün", "eger", "heç", 
    "bir", "neler", "nege", "kimge", "nice", "gibi", "ben", "yoktur", "seniñ", "kendi", 
    "böyle", "şimdi", "kadar", "olan", "tüm", "hep", "sadece", "altı", "gece", "seher", 
    "vakti", "onlar", "derler", "kim", "ki", "en", "içinde", "sonra", "daha", "her", 
    "olmasa", "olurman"
  ]);
  
  // Count word frequencies
  const freqMap = {};
  words.forEach(w => {
    const lowerWord = w.toLowerCase().replace(/['’]/g, ""); // Normalize quotes
    if (lowerWord.length >= 3 && !stopWords.has(lowerWord)) {
      freqMap[lowerWord] = (freqMap[lowerWord] || 0) + 1;
    }
  });
  
  // Sort frequencies
  const sortedWords = Object.entries(freqMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12); // Take top 12
    
  // Render Chart List
  const chartList = document.getElementById("freq-words-list");
  chartList.innerHTML = "";
  
  const maxCount = sortedWords.length > 0 ? sortedWords[0][1] : 1;
  
  sortedWords.forEach(([word, count]) => {
    const percentage = (count / maxCount) * 100;
    
    const row = document.createElement("div");
    row.className = "freq-row";
    row.setAttribute("data-word", word);
    row.innerHTML = `
      <span class="freq-word">${word}</span>
      <div class="freq-bar-wrapper">
        <div class="freq-bar" style="width: 0%"></div>
      </div>
      <span class="freq-count">${count} kez</span>
    `;
    
    row.addEventListener("click", () => {
      document.querySelectorAll(".freq-row").forEach(r => r.classList.remove("active"));
      row.classList.add("active");
      showWordOccurrences(word);
    });
    
    chartList.appendChild(row);
    
    // Animate bar width on render
    setTimeout(() => {
      row.querySelector(".freq-bar").style.width = `${percentage}%`;
    }, 150);
  });
  
  // Select first word by default
  if (sortedWords.length > 0) {
    const firstRow = chartList.querySelector(".freq-row");
    firstRow.classList.add("active");
    showWordOccurrences(sortedWords[0][0]);
  }
}

function showWordOccurrences(word) {
  const infoText = document.getElementById("corpus-word-info");
  const resultsContainer = document.getElementById("corpus-results-lines");
  
  infoText.innerHTML = `Miras arşivinde <strong>"${word}"</strong> kelimesinin geçtiği mısralar:`;
  resultsContainer.innerHTML = "";
  
  let matchesFound = 0;
  
  allPoems.forEach(poem => {
    poem.orijinal_metin.forEach((line, lineIdx) => {
      // Simple word boundary checking using regex or indexOf
      const cleanLine = line.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?’']/g,"");
      const tokens = cleanLine.split(/\s+/);
      
      // Normalize tokens
      const normalizedTokens = tokens.map(t => t.replace(/['’]/g, ""));
      
      if (normalizedTokens.includes(word)) {
        matchesFound++;
        
        // Wrap matching word in mark tag for highlighting (case insensitive)
        const regex = new RegExp(`(${word})`, 'gi');
        const highlightedLine = line.replace(regex, "<mark>$1</mark>");
        
        const card = document.createElement("div");
        card.className = "corpus-result-card";
        card.innerHTML = `
          <div class="corpus-source">${poem.baslik} - ${poem.yazar} (Mısra ${lineIdx + 1})</div>
          <div class="corpus-line">"${highlightedLine}"</div>
        `;
        resultsContainer.appendChild(card);
      }
    });
  });
  
  if (matchesFound === 0) {
    resultsContainer.innerHTML = `<p class="corpus-info-text" style="padding: 20px 0;">Herhangi bir sonuç bulunamadı.</p>`;
  }
}

// 8. Global Search Engine (Instant Filtering)
function setupSearch() {
  const searchInput = document.getElementById("global-search-input");
  const dropdown = document.getElementById("search-results-dropdown");
  const clearBtn = document.getElementById("clear-search-btn");
  
  function triggerSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === "") {
      dropdown.style.display = "none";
      clearBtn.style.display = "none";
      return;
    }
    
    clearBtn.style.display = "block";
    dropdown.innerHTML = "";
    
    const results = [];
    
    // A. Search in Poems
    allPoems.forEach(poem => {
      if (poem.baslik.toLowerCase().includes(query) || poem.turkce_baslik.toLowerCase().includes(query)) {
        results.push({
          type: "ŞİİR / ESER",
          title: `${poem.baslik} (${poem.turkce_baslik})`,
          subtitle: `Yazar: ${poem.yazar} | Tür: ${poem.tur}`,
          action: () => navigateToPoem(poem.id)
        });
      } else {
        // Search lines
        const matchingLines = poem.orijinal_metin.filter(l => l.toLowerCase().includes(query));
        const matchingTr = poem.turkce_tercume.filter(l => l.toLowerCase().includes(query));
        
        if (matchingLines.length > 0 || matchingTr.length > 0) {
          const sampleLine = matchingLines[0] || matchingTr[0];
          results.push({
            type: "Mısra Eşleşmesi",
            title: poem.baslik,
            subtitle: `"... ${sampleLine.trim()} ..."`,
            action: () => navigateToPoem(poem.id)
          });
        }
      }
    });
    
    // B. Search in Authors
    allAuthors.forEach(author => {
      if (author.ad.toLowerCase().includes(query) || author.unvan.toLowerCase().includes(query) || author.hakkinda.toLowerCase().includes(query)) {
        results.push({
          type: "YAZAR / FİKİR ÖNCÜSÜ",
          title: author.ad,
          subtitle: `${author.unvan} (${author.dogum_yili} - ${author.olum_yili})`,
          action: () => openAuthorModal(author)
        });
      }
    });
    
    // C. Search in Articles
    Object.entries(articles).forEach(([key, art]) => {
      if (art.title.toLowerCase().includes(query) || art.content.toLowerCase().includes(query)) {
        results.push({
          type: "TARİH & KÜLTÜR YAZISI",
          title: art.title.replace(/[⏳🥀✊🔱🕌🏺💍🌾🌾]/g, '').trim(),
          subtitle: "Detaylı tarihi araştırma belgesi.",
          action: () => {
            document.getElementById("modal-title").innerHTML = art.title;
            document.getElementById("modal-body-content").innerHTML = art.content;
            document.getElementById("document-modal").classList.add("active");
            document.body.style.overflow = "hidden";
          }
        });
      }
    });
    
    // Render Results
    if (results.length === 0) {
      dropdown.innerHTML = `<div style="padding: 15px 20px; color: var(--text-muted);">"${searchInput.value}" için hiçbir sonuç bulunamadı.</div>`;
    } else {
      results.slice(0, 6).forEach(res => {
        const item = document.createElement("div");
        item.className = "search-result-item";
        item.innerHTML = `
          <div class="result-type">${res.type}</div>
          <div class="result-title">${res.title}</div>
          <div class="result-subtitle">${res.subtitle}</div>
        `;
        item.addEventListener("click", () => {
          res.action();
          dropdown.style.display = "none";
          searchInput.value = "";
          clearBtn.style.display = "none";
        });
        dropdown.appendChild(item);
      });
    }
    
    dropdown.style.display = "block";
  }
  
  searchInput.addEventListener("input", triggerSearch);
  
  // Close dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      dropdown.style.display = "none";
    }
  });
  
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    dropdown.style.display = "none";
    clearBtn.style.display = "none";
    searchInput.focus();
  });
}

function navigateToPoem(poemId) {
  // Switch to edebiyat tab
  document.querySelectorAll(".nav-link").forEach(l => {
    if (l.getAttribute("data-tab") === "edebiyat") {
      l.click();
    }
  });
  
  // Select the specific poem in sidebar
  setTimeout(() => {
    const listBtns = document.querySelectorAll("#poem-selector-list .poem-item-btn");
    const targetPoem = allPoems.find(p => p.id === poemId);
    
    listBtns.forEach(btn => {
      if (btn.querySelector("span").textContent === targetPoem.baslik) {
        btn.click();
      }
    });
    
    // Scroll reader card into view
    const readerEl = document.querySelector(".poetry-reader-container");
    if (readerEl) {
      readerEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 100);
}

// 9. Mobile Menu Toggle
function setupMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle-btn");
  const menuList = document.getElementById("nav-menu-list");
  
  toggleBtn.addEventListener("click", () => {
    menuList.classList.toggle("active");
    if (menuList.classList.contains("active")) {
      toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
}

// 10. Crimea Interactive Map Logic
const cityData = {
  "bahcesaray": {
    name: "Bahçesaray",
    title: "🕌 Kırım Hanlığı'nın Başkenti: Bahçesaray",
    desc: "Bahçesaray (Bahçesaray / Bağçasaray), dağlık Kırım bölgesinde nehir vadisinde yer alan, Kırım Hanlığı'nın tarihi başkentidir. 16. yüzyıldan itibaren Giray Hanedanı'nın saraylarını barındırmış ve Kırım Tatar idaresinin ve entelektüel hayatının kalbi olmuştur.",
    facts: [
      "Mengli Giray Han tarafından başkent olarak kurulmuş ve adını nehir boyundaki zengin bahçelerden almıştır.",
      "İçinde dünyaca ünlü Gözyaşı Çeşmesi'ni (Selsebil) barındıran muazzam Bahçesaray Han Sarayı bu şehirdedir.",
      "Kırım Tatar eğitim sisteminin temel taşı kabul edilen, Kırım'ın en eski İslam okullarından olan <strong>Zincirli Medrese</strong> buradadır.",
      "İsmail Gaspıralı'nın tüm Türk dünyasını aydınlatan efsanevi <strong>Tercüman Gazetesi</strong> matbaası burada kurulmuştur."
    ],
    monuments: [
      "Bahçesaray Han Sarayı (Hansaray)",
      "Zincirli Medrese ve Hacı Giray Türbesi",
      "Gözyaşı Çeşmesi (Selsebil)",
      "Tercüman Gazetesi Tarihi Matbaa Müzesi",
      "Çufut Kale (Tarihi Mağara Şehri)"
    ],
    figures: "I. Mengli Giray Han, İsmail Bey Gaspıralı, Numan Çelebicihan"
  },
  "akmescit": {
    name: "Akmescit",
    title: "🏢 Modern Başkent ve Tarihi Kültür Odağı: Akmescit",
    desc: "Akmescit (Simferopol), Kırım'ın tam merkezinde konumlanan modern başkentidir. Hanlık döneminde kalenin çevresinde kurulan şehir, daha sonra idari ve kültürel bir merkez haline dönüşmüştür.",
    facts: [
      "Hanlık döneminde Kırım kalgası (veliahdı) için önemli bir garnizon ve saray yerleşkesi olarak işlev görmüştür.",
      "Kırım Tatar edebiyat tarihinin kurucusu <strong>Bekir Sıtkı Çoban-zade</strong>, buradaki öğretmen okullarında ve pedagoji enstitülerinde profesörlük yapmıştır.",
      "1508 yılında Mengli Giray Han tarafından inşa ettirilen Kırım'ın en eski camilerinden <strong>Kebir Cami</strong> Akmescit'tedir."
    ],
    monuments: [
      "Kebir Cami (Büyük Beyaz Cami)",
      "Kırım Tatar Devlet Müzesi",
      "Akmescit Tarihi Cami ve Kültür Merkezi"
    ],
    figures: "Bekir Sıtkı Çoban-zade, Mustafa Abdülcemil Kırımoğlu"
  },
  "gozleve": {
    name: "Gözleve",
    title: "⚓ Tarihi Liman ve Zanaat Kenti: Gözleve",
    desc: "Gözleve (Yevpatoriya), Kırım'ın batı kıyısında yer alan tarihi bir liman, zanaatkarlık ve şifa şehridir. Çok kültürlü dokusu, dar sokakları ve telkari (filigran) gümüş zanaatıyla Kırım Tatar folklorunda çok büyük yer kaplar.",
    facts: [
      "Ünlü Osmanlı baş mimarı <strong>Mimar Sinan</strong> tarafından 1552'de inşa edilen muazzam Gözleve Cuma Cami (Han Cami) bu şehirdedir.",
      "Geleneksel Kırım Tatar aşık edebiyatının en büyük temsilcisi <strong>Aşık Ümer</strong> buralıdır ve meşhur 'Gözleve Koşması'nı bu kente adamıştır.",
      "Kırım'da günümüze ulaşan tek Orta Çağ Sufi yerleşkesi olan <strong>Dervişler Tekkesi</strong> burada yer alır."
    ],
    monuments: [
      "Gözleve Han Cami (Cuma Cami - Mimar Sinan)",
      "Tarihi Gözleve Odun Pazarı Kapısı",
      "Kırım Dervişler Tekkesi",
      "Geleneksel Telkari Gümüş Atölyeleri"
    ],
    figures: "Aşık Ümer, Eşref Şemi-zade"
  },
  "karasubazar": {
    name: "Karasubazar",
    title: "🐫 İpek Yolu'nun Ticaret Merkezi: Karasubazar",
    desc: "Karasubazar (Belogorsk), Kırım'ın iç kesimlerinde yer alan, Karasu nehri kıyısındaki tarihi ticaret ve kervan şehridir. İpek Yolu rotasında yer alması nedeniyle hanlık döneminde Kırım'ın en zengin ve hareketli pazar kenti olmuştur.",
    facts: [
      "Kırım'ın en görkemli kervansaraylarından olan ve 16. yüzyılda inşa edilen <strong>Taş Han</strong> buradadır.",
      "Kırım Tatar edebiyatının ulu şairi ve Türkolog <strong>Bekir Sıtkı Çoban-zade</strong>, Karasubazar'da doğup büyümüştür.",
      "Büyük kaya kütlesi <strong>Ak Kaya</strong> (White Rock) şehrin yakınında yer alır; burada tarihi hanlık kurultayları toplanmıştır."
    ],
    monuments: [
      "Taş Han Kervansarayı",
      "Ak Kaya Tarihi Alanı (Giray Hanedanı Tahta Çıkma Yeri)",
      "Yıldırım Cami Kalıntıları"
    ],
    figures: "Bekir Sıtkı Çoban-zade"
  },
  "yalta": {
    name: "Yalta",
    title: "🏖️ Edebi İlhamların Coğrafyası: Yalta",
    desc: "Yalta, Kırım'ın güney sahilinde, dağlar ile Karadeniz arasında sıkışmış dünyaca ünlü bir liman ve sayfiye şehridir. Zengin doğası, dağ köyleri ve bağcılığıyla Kırım Tatar halk edebiyatında pek çok türküye konu olmuştur.",
    facts: [
      "Kırım Tatar edebiyatının büyük romancısı <strong>Cengiz Dağcı</strong>, Yalta yakınındaki Kızıltaş köyünde doğmuştur ve çocukluğu buranın yaylalarında geçmiştir.",
      "Kızıltaş ve Ay-Serez köyleri Kırım Tatar milli bilincinin uyanışında çok sayıda fikir ve siyaset adamı yetiştirmiştir.",
      "Ünlü milli lider <strong>Mustafa Abdülcemil Kırımoğlu</strong> Yalta doğumludur."
    ],
    monuments: [
      "Cengiz Dağcı Müzesi / Doğduğu Ev (Kızıltaş)",
      "Livadia Sarayı ve Bahçeleri",
      "Tarihi Kırım Tatar Bağ Evi Kalıntıları"
    ],
    figures: "Cengiz Dağcı, Mustafa Abdülcemil Kırımoğlu"
  },
  "kefe": {
    name: "Kefe",
    title: "🏰 Karadeniz'in Büyük Kalesi: Kefe",
    desc: "Kefe (Feodosiya), Kırım'ın doğusunda, büyük bir koyda yer alan tarihi liman ve savunma kentidir. Cenevizliler döneminde deniz ticaretinin merkezi iken, hanlık ve Osmanlı döneminde askeri, idari ve ticari büyüklüğüyle 'Küçük İstanbul' olarak anılmıştır.",
    facts: [
      "Cenevizlilerden kalan tarihi kale surları ve kuleleri günümüzde hala Kırım sahillerinde ayakta durmaktadır.",
      "Kırım Hanlığı'nın en hareketli para basımhaneleri (darphane) burada kurulmuştur.",
      "Kanuni Sultan Süleyman Han, şehzadelik döneminde Kefe Sancakbeyliği yapmış ve burada yaşamıştır."
    ],
    monuments: [
      "Ceneviz Surları ve Kalesi",
      "Tarihi Kefe Gümrük Binası",
      "Muftı-Cami (Osmanlı Dönemi)"
    ],
    figures: "Kanuni Sultan Süleyman, I. Sahib Giray Han"
  },
  "sudak": {
    name: "Sudak",
    title: "🍇 Bağcılık ve İpek Yolu İskelesi: Sudak",
    desc: "Sudak, Kırım'ın güneydoğu sahilinde yer alan, devasa kalesi ve üzüm bağlarıyla meşhur antik liman kentidir. Selçukluların Karadeniz seferlerinde ilk fethettikleri stratejik limandır.",
    facts: [
      "Cenevizliler tarafından inşa edilen ve dağın yamacını tamamen kaplayan meşhur <strong>Sudak Kalesi</strong> (Genoese Fortress) tüm heybetiyle korunmaktadır.",
      "Bölge, Kırım'ın en kaliteli üzüm bağlarına ve geleneksel Kırım Tatar şarapçılık ve bağcılık zanaatına ev sahipliği yapar.",
      "Selçuklu kumandanı Hüsameddin Çoban, 1224 yılında Sudak'ı fethederek Kırım'da ilk Türk hakimiyetini kurmuştur."
    ],
    monuments: [
      "Sudak Kalesi ve Kuleleri",
      "Selçuklu Cami ve Kitabeleri",
      "Novıy Svet Doğal Koruma Alanı"
    ],
    figures: "Hüsameddin Çoban, Gazi Giray Han"
  },
  "akyar": {
    name: "Akyar",
    title: "⚔️ Askeri Tarihin Odak Noktası: Akyar",
    desc: "Akyar (Sevastopol), Kırım'ın güneybatısında yer alan derin koyları, askeri limanları ve Inkerman mağara yapılarıyla ünlü antik liman yerleşimidir. Kırım Tatarları tarafından Akyar olarak adlandırılan köyün yerine daha sonra büyük deniz üsleri kurulmuştur.",
    facts: [
      "Bölgedeki <strong>Inkerman Mağaraları</strong> ve tarihi manastırlar, Hristiyanlık öncesi ve hanlık dönemi medeniyet izlerini taşır.",
      "Kırım Savaşı (1853-1856) sırasında dünya tarihinin en kanlı savunma muharebelerine sahne olmuştur.",
      "Tarihi Kırım Tatar balıkçılık adetleri ve denizcilik terminolojisi bu kıyılarda şekillenmiştir."
    ],
    monuments: [
      "Inkerman Mağara Manastırı ve Kalesi",
      "Chersonesos Antik Şehri Harabeleri",
      "Kırım Savaşı Müzesi"
    ],
    figures: "Gazi Giray Han, Mustafa Abdülcemil Kırımoğlu"
  }
};

function setupCrimeaMap() {
  const pins = document.querySelectorAll(".map-pin");
  const detailPanel = document.getElementById("map-detail-panel");

  pins.forEach(pin => {
    pin.addEventListener("click", () => {
      // Remove active states
      pins.forEach(p => p.classList.remove("active"));
      pin.classList.add("active");

      const cityKey = pin.id.replace("pin-", "");
      const city = cityData[cityKey];
      if (city) {
        // Render detailed card
        let monumentList = city.monuments.map(m => `<li><i class="fa-solid fa-landmark"></i> ${m}</li>`).join("");
        let factList = city.facts.map(f => `<li><i class="fa-solid fa-chevron-right"></i> ${f}</li>`).join("");
        
        detailPanel.innerHTML = `
          <div class="map-detail-card animate-fade-in">
            <h3>${city.title}</h3>
            <p>${city.desc}</p>
            
            <h4>💡 Kültürel Önem ve Bilgiler</h4>
            <ul>${factList}</ul>
            
            <h4>🏛️ Önemli Tarihi Yapılar</h4>
            <ul>${monumentList}</ul>
            
            <p style="margin-top: 15px; font-size: 0.9rem; color: var(--text-muted);">
              <strong>Bağlantılı Kültür Öncüleri:</strong> ${city.figures}
            </p>
          </div>
        `;
      }
    });
  });
}

// 11. Traditional Music Player & Synthesizer Logic
const noteFreqs = {
  "C4": 261.63, "C#4": 277.18, "D4": 293.66, "D#4": 311.13, "E4": 329.63, "F4": 349.23, "F#4": 369.99, "G4": 392.00, "G#4": 415.30, "A4": 440.00, "A#4": 466.16, "B4": 493.88,
  "C5": 523.25, "C#5": 554.37, "D5": 587.33, "D#5": 622.25, "E5": 659.25, "F5": 698.46, "F#5": 739.99, "G5": 783.99, "G#5": 830.61, "A5": 880.00, "A#5": 932.33, "B5": 987.77,
  "Rest": 0
};

// Melodies sheet music representation
const songsDatabase = [
  {
    id: "ant_etkenmen_audio",
    title: "Ant Etkenmen (Milli Marş)",
    artist: "Numan Çelebicihan",
    durationText: "0:45",
    durationSec: 45,
    lyrics: `[0:00] Ant etkenmen, söz bergenmen millet içün ölmege,
[0:08] Bilip, körip milletimniñ köz yaşını silmege.
[0:15] Bilmiy, körmiy ölsem eger, köz yaşları tökülse,
[0:22] Cıyın-tıayın, qabrimniñ üstünde yırla yırlasın!
[0:30] Ant etkenmen, söz bergenmen millet içün ölmege,
[0:37] Bilip, körip milletimniñ köz yaşını silmege.`,
    melody: [
      { note: "E4", dur: 0.5 }, { note: "E4", dur: 0.5 }, { note: "F#4", dur: 0.5 }, { note: "G4", dur: 0.5 },
      { note: "G4", dur: 0.5 }, { note: "A4", dur: 0.5 }, { note: "B4", dur: 1.0 }, { note: "Rest", dur: 0.2 },
      { note: "A4", dur: 0.5 }, { note: "G4", dur: 0.5 }, { note: "F#4", dur: 0.5 }, { note: "E4", dur: 1.0 },
      { note: "Rest", dur: 0.5 },
      { note: "E4", dur: 0.5 }, { note: "E4", dur: 0.5 }, { note: "F#4", dur: 0.5 }, { note: "G4", dur: 0.5 },
      { note: "G4", dur: 0.5 }, { note: "A4", dur: 0.5 }, { note: "B4", dur: 1.0 }, { note: "Rest", dur: 0.2 },
      { note: "D5", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "B4", dur: 0.5 }, { note: "A4", dur: 1.0 },
      { note: "Rest", dur: 0.5 },
      { note: "B4", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "D5", dur: 0.5 }, { note: "E5", dur: 1.0 },
      { note: "D5", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "B4", dur: 1.0 }, { note: "Rest", dur: 0.2 },
      { note: "A4", dur: 0.5 }, { note: "G4", dur: 0.5 }, { note: "F#4", dur: 0.5 }, { note: "E4", dur: 1.0 }
    ]
  },
  {
    id: "ey_guzel_kirim",
    title: "Ey Güzel Kırım (Sürgün Ağıtı)",
    artist: "Anonim / Geleneksel Türkü",
    durationText: "0:50",
    durationSec: 50,
    lyrics: `[0:00] Alıştım vatanımdan, gençliğime doymadım,
[0:08] Kırım'dan sürgün oldum, közyaşımı silmedim.
[0:16] Ey güzel Kırım, yeşil beşiğim,
[0:24] Kalmadı şanım, söndü ışığım.
[0:32] Vatanımdan ayırdı zalim Stalin gecesi,
[0:40] Ağlar Tatar gençleri, hepsi hicran perdesi.`,
    melody: [
      { note: "A4", dur: 0.5 }, { note: "B4", dur: 0.5 }, { note: "C5", dur: 1.0 }, { note: "B4", dur: 0.5 },
      { note: "A4", dur: 0.5 }, { note: "G#4", dur: 1.0 }, { note: "Rest", dur: 0.2 },
      { note: "B4", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "D5", dur: 1.0 }, { note: "C5", dur: 0.5 },
      { note: "B4", dur: 0.5 }, { note: "A4", dur: 1.5 }, { note: "Rest", dur: 0.5 },
      { note: "E5", dur: 0.5 }, { note: "E5", dur: 0.5 }, { note: "D5", dur: 1.0 }, { note: "C5", dur: 0.5 },
      { note: "B4", dur: 0.5 }, { note: "C5", dur: 1.0 }, { note: "D5", dur: 0.5 }, { note: "E5", dur: 1.0 },
      { note: "Rest", dur: 0.2 },
      { note: "D5", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "B4", dur: 1.0 }, { note: "A4", dur: 0.5 },
      { note: "G#4", dur: 0.5 }, { note: "A4", dur: 2.0 }
    ]
  },
  {
    id: "bostan_yiri",
    title: "Bostan (Geleneksel Halk Türküsü)",
    artist: "Anonim / Hareketli Ezgi",
    durationText: "0:35",
    durationSec: 35,
    lyrics: `[0:00] Bostanlarda kavun karpuz dizilir,
[0:07] Kırım kızı nakış işler bezetir.
[0:14] Tepreş gelsin güleşelim oynıyak,
[0:21] Çiğbörekle kazanları kaynatak.
[0:28] Yırlar aytıp dertlerimizi unutak!`,
    melody: [
      { note: "C5", dur: 0.25 }, { note: "D5", dur: 0.25 }, { note: "E5", dur: 0.5 }, { note: "E5", dur: 0.5 },
      { note: "D5", dur: 0.25 }, { note: "C5", dur: 0.25 }, { note: "D5", dur: 0.5 }, { note: "Rest", dur: 0.1 },
      { note: "D5", dur: 0.25 }, { note: "E5", dur: 0.25 }, { note: "F5", dur: 0.5 }, { note: "F5", dur: 0.5 },
      { note: "E5", dur: 0.25 }, { note: "D5", dur: 0.25 }, { note: "E5", dur: 0.5 }, { note: "Rest", dur: 0.2 },
      { note: "E5", dur: 0.25 }, { note: "F5", dur: 0.25 }, { note: "G5", dur: 0.5 }, { note: "F5", dur: 0.25 },
      { note: "E5", dur: 0.25 }, { note: "D5", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "B4", dur: 0.5 },
      { note: "A4", dur: 1.0 }
    ]
  },
  {
    id: "yarim_samdan",
    title: "Yarım Şamdan (Folklorik Aşk Ezgisi)",
    artist: "Klasik Kırım Türküsü",
    durationText: "0:40",
    durationSec: 40,
    lyrics: `[0:00] Yarım şamdan yanar gider odama,
[0:08] Aşk ateşi düştü garip canıma.
[0:16] Gözleve'nin yollarında beklerim,
[0:24] Gümüş kemer quşağıma eklerim.
[0:32] Yardan haber gelmeyince inlerim.`,
    melody: [
      { note: "D4", dur: 0.5 }, { note: "F4", dur: 0.5 }, { note: "A4", dur: 1.0 }, { note: "G4", dur: 0.5 },
      { note: "F4", dur: 0.5 }, { note: "E4", dur: 1.0 }, { note: "Rest", dur: 0.2 },
      { note: "G4", dur: 0.5 }, { note: "A4", dur: 0.5 }, { note: "Bb4", dur: 1.0 }, { note: "A4", dur: 0.5 },
      { note: "G4", dur: 0.5 }, { note: "F4", dur: 1.0 }, { note: "Rest", dur: 0.5 },
      { note: "A4", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "D5", dur: 1.0 }, { note: "C5", dur: 0.5 },
      { note: "Bb4", dur: 0.5 }, { note: "A4", dur: 1.5 }
    ]
  }
];

let currentTrackIdx = 0;
let isPlaying = false;
let audioContext = null;
let currentOscillators = [];
let audioProgressInterval = null;
let currentTime = 0;
let playbackTimeout = null;
let noteIndex = 0;

function setupMusicPlayer() {
  const playlistUl = document.getElementById("playlist-ul");
  const playPauseBtn = document.getElementById("btn-play-pause");
  const nextTrackBtn = document.getElementById("btn-next-track");
  const prevTrackBtn = document.getElementById("btn-prev-track");
  const volumeSlider = document.getElementById("volume-slider");
  const volumeIcon = document.getElementById("volume-icon");
  const progressBar = document.getElementById("audio-progress-bar");
  
  // Render playlist
  playlistUl.innerHTML = "";
  songsDatabase.forEach((song, idx) => {
    const li = document.createElement("li");
    li.className = `playlist-item ${idx === 0 ? "active" : ""}`;
    li.innerHTML = `
      <div>
        <div class="playlist-title">${song.title}</div>
        <div class="playlist-artist">${song.artist}</div>
      </div>
      <div class="playlist-duration">${song.durationText}</div>
    `;
    li.addEventListener("click", () => {
      selectTrack(idx);
    });
    playlistUl.appendChild(li);
  });

  // Load first track by default
  loadTrack(currentTrackIdx);

  // Play Pause controls
  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  });

  nextTrackBtn.addEventListener("click", () => {
    let nextIdx = (currentTrackIdx + 1) % songsDatabase.length;
    selectTrack(nextIdx);
  });

  prevTrackBtn.addEventListener("click", () => {
    let prevIdx = (currentTrackIdx - 1 + songsDatabase.length) % songsDatabase.length;
    selectTrack(prevIdx);
  });

  // Volume slider interaction
  volumeSlider.addEventListener("input", (e) => {
    let vol = e.target.value;
    if (vol == 0) {
      volumeIcon.className = "fa-solid fa-volume-mute";
    } else if (vol < 0.5) {
      volumeIcon.className = "fa-solid fa-volume-low";
    } else {
      volumeIcon.className = "fa-solid fa-volume-high";
    }
  });

  // Seek bar interaction
  progressBar.addEventListener("click", (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const fraction = clickX / width;
    
    const track = songsDatabase[currentTrackIdx];
    currentTime = fraction * track.durationSec;
    updateProgressUI();
    
    if (isPlaying) {
      // Restart synthesized notes from approximate position
      stopSynthesis();
      // Calculate start note index based on time fraction
      const totalNotes = track.melody.length;
      noteIndex = Math.floor(fraction * totalNotes);
      playMelodyLoop();
    }
  });

  // Sub tabs switching (Playlist vs Lyrics)
  const subTabs = document.querySelectorAll(".music-sub-tab");
  subTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      subTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const tabType = tab.getAttribute("data-tab-type");
      document.getElementById("music-tab-playlist").style.display = tabType === "playlist" ? "block" : "none";
      document.getElementById("music-tab-lyrics").style.display = tabType === "lyrics" ? "block" : "none";
    });
  });
}

function selectTrack(idx) {
  stopSynthesis();
  currentTrackIdx = idx;
  
  // Update playlist active item
  document.querySelectorAll(".playlist-item").forEach((item, i) => {
    if (i === idx) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  
  loadTrack(idx);
  
  if (isPlaying) {
    playTrack();
  }
}

function loadTrack(idx) {
  const track = songsDatabase[idx];
  document.getElementById("player-track-title").textContent = track.title;
  document.getElementById("player-track-artist").textContent = track.artist;
  document.getElementById("player-time-total").textContent = track.durationText;
  document.getElementById("player-time-current").textContent = "0:00";
  document.getElementById("audio-progress-filled").style.width = "0%";
  currentTime = 0;
  noteIndex = 0;
  
  // Render lyrics
  const lyricsPanel = document.getElementById("lyrics-lines-div");
  lyricsPanel.innerHTML = track.lyrics.replace(/\n/g, "<br>");
}

function playTrack() {
  isPlaying = true;
  document.getElementById("btn-play-pause").innerHTML = '<i class="fa-solid fa-pause"></i>';
  document.querySelector(".music-player-card").classList.add("player-playing");
  
  // Audio context initialization (user gesture bypasses auto-play block)
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  // Progress timeline timer
  clearInterval(audioProgressInterval);
  audioProgressInterval = setInterval(() => {
    currentTime += 1;
    const track = songsDatabase[currentTrackIdx];
    if (currentTime >= track.durationSec) {
      // Loop or go next
      let nextIdx = (currentTrackIdx + 1) % songsDatabase.length;
      selectTrack(nextIdx);
    } else {
      updateProgressUI();
    }
  }, 1000);

  // Animated visualizer
  startVisualizerAnimation();

  // Play synthesized tones in loop
  playMelodyLoop();
}

function pauseTrack() {
  isPlaying = false;
  document.getElementById("btn-play-pause").innerHTML = '<i class="fa-solid fa-play"></i>';
  document.querySelector(".music-player-card").classList.remove("player-playing");
  
  clearInterval(audioProgressInterval);
  stopSynthesis();
  stopVisualizerAnimation();
}

function updateProgressUI() {
  const track = songsDatabase[currentTrackIdx];
  const percent = (currentTime / track.durationSec) * 100;
  document.getElementById("audio-progress-filled").style.width = `${percent}%`;
  
  // Format current time MM:SS
  const mins = Math.floor(currentTime / 60);
  const secs = Math.floor(currentTime % 60);
  document.getElementById("player-time-current").textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function playMelodyLoop() {
  const track = songsDatabase[currentTrackIdx];
  if (noteIndex >= track.melody.length) {
    noteIndex = 0; // loop melody
  }
  
  const step = track.melody[noteIndex];
  const freq = noteFreqs[step.note];
  const duration = step.dur;
  
  if (isPlaying) {
    if (freq > 0) {
      playTone(freq, duration);
    }
    
    noteIndex++;
    playbackTimeout = setTimeout(playMelodyLoop, duration * 1000);
  }
}

function playTone(frequency, duration) {
  try {
    if (!audioContext) return;
    
    const volumeVal = parseFloat(document.getElementById("volume-slider").value);
    if (volumeVal === 0) return;
    
    // Create oscillator & gain nodes
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    // Smooth triangle waveform sounds like traditional flute/instruments
    osc.type = "triangle";
    osc.frequency.value = frequency;
    
    // Smooth envelope attack & decay to prevent clipping
    gain.gain.setValueAtTime(0.01, audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(0.18 * volumeVal, audioContext.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration - 0.05);
    
    osc.start();
    osc.stop(audioContext.currentTime + duration);
    
    currentOscillators.push(osc);
    
    // Cleanup reference after finished
    setTimeout(() => {
      const idx = currentOscillators.indexOf(osc);
      if (idx > -1) currentOscillators.splice(idx, 1);
    }, duration * 1000);
    
  } catch (e) {
    console.warn("Synth tone generation error:", e);
  }
}

function stopSynthesis() {
  clearTimeout(playbackTimeout);
  currentOscillators.forEach(osc => {
    try { osc.stop(); } catch (e) {}
  });
  currentOscillators = [];
}

// Waveform visualizer simulation rendering loop
let visAnimFrame = null;
function startVisualizerAnimation() {
  const bars = document.querySelectorAll(".vis-bar");
  
  function updateBars() {
    bars.forEach(bar => {
      // Generate active random height fluctuations
      const val = isPlaying ? Math.floor(Math.random() * 85) + 15 : 10;
      bar.style.height = `${val}%`;
    });
    
    if (isPlaying) {
      visAnimFrame = requestAnimationFrame(updateBars);
    }
  }
  
  updateBars();
}

function stopVisualizerAnimation() {
  cancelAnimationFrame(visAnimFrame);
  const bars = document.querySelectorAll(".vis-bar");
  bars.forEach(bar => {
    bar.style.height = "10%";
  });
}


// 12. Morphology Analyzer & Vocabulary Cards Logic
const morphologyDB = {
  "milletimizniñ": {
    word: "milletimizniñ",
    meaning: "milletimizin",
    breakdown: [
      { text: "millet", type: "Kök (Noun)", desc: "Millet, halk, topluluk" },
      { text: "-imiz", type: "İyelik Eki", desc: "1. Çoğul İyelik (Bizim milletimiz)" },
      { text: "-niñ", type: "Tamlayan Eki", desc: "Genitive / İlgi Hali (Milletimizin...)" }
    ]
  },
  "vatanıñdan": {
    word: "vatanıñdan",
    meaning: "vatanından",
    breakdown: [
      { text: "vatan", type: "Kök (Noun)", desc: "Vatan, anayurt" },
      { text: "-iñ", type: "İyelik Eki", desc: "2. Tekil İyelik (Senin vatanın)" },
      { text: "-dan", type: "Ayrılma Hali", desc: "Ablative / -den eki (Vatanından)" }
    ]
  },
  "tuvğanlığımız": {
    word: "tuvğanlığımız",
    meaning: "doğmuşluğumuz / kardeşliğimiz",
    breakdown: [
      { text: "tuv", type: "Kök (Verb)", desc: "Doğmak fiili" },
      { text: "-ğan", type: "Fiilimsi Eki", desc: "Sıfat-fiil yapan ek (Doğan / doğmuş)" },
      { text: "-lığ", type: "İsim Yapım Eki", desc: "Soyut isim yapar (Doğmuşluk, kardeşlik)" },
      { text: "-imiz", type: "İyelik Eki", desc: "1. Çoğul İyelik Eki (Bizim doğmuşluğumuz)" }
    ]
  },
  "yollarında": {
    word: "yollarında",
    meaning: "yollarında",
    breakdown: [
      { text: "yol", type: "Kök (Noun)", desc: "Yol, patika, mecra" },
      { text: "-lar", type: "Çoğul Eki", desc: "Çoğul eki (Yollar)" },
      { text: "-ı", type: "İyelik Eki", desc: "3. Şahıs İyelik (Onun yolları)" },
      { text: "-nda", type: "Bulunma Hali", desc: "Locative / -de hali (Yollarında)" }
    ]
  },
  "közyaşlarıñız": {
    word: "közyaşlarıñız",
    meaning: "gözyaşlarınız",
    breakdown: [
      { text: "köz", type: "Kök (Noun)", desc: "Göz organı" },
      { text: "yaş", type: "Kök (Noun)", desc: "Nem, gözden akan damla (Birleşik sözcük)" },
      { text: "-lar", type: "Çoğul Eki", desc: "Çoğul eki (Gözyaşları)" },
      { text: "-ıñız", type: "İyelik Eki", desc: "2. Çoğul İyelik (Sizin gözyaşlarınız)" }
    ]
  }
};

const vocabCardsDB = [
  {
    word: "Vatan",
    pronunciation: "/va-tan/",
    meaning: "Vatan / Anayurt",
    description: "Kırım Tatarları için vatan kelimesi, hem coğrafi sınırları hem de kültürel aidiyeti belirten en kutsal kavramdır.",
    sample: "Bizim vatan Kırım'dır, onun toprağı altındır...",
    author: "Amdi Giraybay, Yiğitlerge"
  },
  {
    word: "Til",
    pronunciation: "/til/",
    meaning: "Dil / Anadil",
    description: "Kırım Tatar dilini, sürgün sürgünde dahi korumak milletin hayatta kalmasının yegane teminatı kabul edilmiştir.",
    sample: "Seniñ tilin olmasa eger, meniñ canım nege kerek?",
    author: "Bekir Sıtkı Çoban-zade, Tuvğan Til"
  },
  {
    word: "Yır",
    pronunciation: "/yır/",
    meaning: "Halk Şarkısı / Türkü",
    description: "Kırım Tatar sözlü folklorunda hüzünlü ve melodik halk şarkılarına yır denilmektedir.",
    sample: "Cıyın-tıayın, qabrimniñ üstünde yırla yırlasın!",
    author: "Numan Çelebicihan, Ant Etkenmen"
  },
  {
    word: "Çıñ",
    pronunciation: "/çıñ/",
    meaning: "Mani / Doğaçlama Şiir",
    description: "Genellikle atışma şeklinde irticali olarak söylenen ikişer mısralık kafiyeli halk manileridir.",
    sample: "Gözleve bayramlarında çıñlar aytıp yarışırlar...",
    author: "Aşık Ümer, Tarihi Makale"
  },
  {
    word: "Tamga",
    pronunciation: "/tam-ga/",
    meaning: "Mühür / Egemenlik Damgası",
    description: "Giray Hanedanı'ndan bu yana Kırım egemenliğini temsil eden üç dişli Tarak-Tamga sembolüdür.",
    sample: "Altın sarısı Tarak-Tamga gök bayrakta parıldar...",
    author: "Milli Semboller Kılavuzu"
  }
];

let currentVocabIdx = 0;

function setupMorphologyAndVocab() {
  const selectWord = document.getElementById("morphology-word-select");
  const customInput = document.getElementById("morphology-custom-input");
  const analyzeBtn = document.getElementById("btn-morphology-analyze");
  const resultPanel = document.getElementById("morphology-result-panel");
  
  // 1. Morphology click handlers
  analyzeBtn.addEventListener("click", () => {
    const customVal = customInput.value.trim().toLowerCase();
    const selectVal = selectWord.value;
    
    let activeWord = selectVal;
    if (customVal !== "") {
      activeWord = customVal;
    }
    
    if (activeWord === "") {
      resultPanel.innerHTML = `
        <div class="morphology-empty-state" style="color: var(--accent-gold);">
          <p>Lütfen bir kelime seçin veya kutuya yazıp tekrar deneyin!</p>
        </div>
      `;
      return;
    }
    
    // Check if predefined in DB
    const cleanWord = activeWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
    const matched = morphologyDB[cleanWord];
    
    if (matched) {
      renderMorphologyResult(matched);
    } else {
      // Dynamic fallback parser simulation
      const fallbackData = simulateMorphology(cleanWord);
      renderMorphologyResult(fallbackData);
    }
  });

  // Reset input when selecting dropdown
  selectWord.addEventListener("change", () => {
    if (selectWord.value !== "") {
      customInput.value = "";
    }
  });

  // 2. Vocabulary Flashcards setup
  const flashcard = document.getElementById("vocab-flashcard");
  const btnPrevVocab = document.getElementById("btn-prev-vocab");
  const btnNextVocab = document.getElementById("btn-next-vocab");
  const vocabCounter = document.getElementById("vocab-card-counter");
  
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });
  
  btnNextVocab.addEventListener("click", (e) => {
    e.stopPropagation();
    flashcard.classList.remove("flipped");
    setTimeout(() => {
      currentVocabIdx = (currentVocabIdx + 1) % vocabCardsDB.length;
      loadVocabCard(currentVocabIdx);
    }, 150);
  });
  
  btnPrevVocab.addEventListener("click", (e) => {
    e.stopPropagation();
    flashcard.classList.remove("flipped");
    setTimeout(() => {
      currentVocabIdx = (currentVocabIdx - 1 + vocabCardsDB.length) % vocabCardsDB.length;
      loadVocabCard(currentVocabIdx);
    }, 150);
  });

  // Initial load
  loadVocabCard(0);
}

function renderMorphologyResult(data) {
  const resultPanel = document.getElementById("morphology-result-panel");
  
  let nodeHtml = data.breakdown.map((node, i) => `
    <div class="morph-node ${i === 0 ? 'root-node' : ''}">
      <span class="morph-node-text">${node.text}</span>
      <span class="morph-node-type">${node.type}</span>
      <span class="morph-node-desc">${node.desc}</span>
    </div>
  `).join("");
  
  resultPanel.innerHTML = `
    <div class="morph-word-display animate-fade-in">
      <h4>${data.word}</h4>
      <p>Türkiye Türkçesi Karşılığı: <strong>"${data.meaning}"</strong></p>
    </div>
    <div class="morph-nodes-container">
      ${nodeHtml}
    </div>
  `;
}

function simulateMorphology(word) {
  // Simple suffix extraction rules for visual simulation of agglutinative structures
  let stem = word;
  const breakdown = [];
  const suffixMatches = [];
  
  // Extract genitive
  if (stem.endsWith("niñ") || stem.endsWith("nıñ") || stem.endsWith("ñ")) {
    let suffix = stem.endsWith("niñ") ? "-niñ" : (stem.endsWith("nıñ") ? "-nıñ" : "-ñ");
    stem = stem.substring(0, stem.length - suffix.length);
    suffixMatches.unshift({ text: suffix, type: "Tamlama / Hali", desc: "Genitive ilgi eki (-in/-ın)" });
  }
  
  // Extract ablative
  if (stem.endsWith("dan") || stem.endsWith("den") || stem.endsWith("tan") || stem.endsWith("ten")) {
    let suffix = stem.substring(stem.length - 3);
    stem = stem.substring(0, stem.length - 3);
    suffixMatches.unshift({ text: `-${suffix}`, type: "Hal Eki", desc: "Ayrılma Hali (-den/-dan)" });
  }
  
  // Extract locative
  if (stem.endsWith("da") || stem.endsWith("de") || stem.endsWith("ta") || stem.endsWith("te")) {
    let suffix = stem.substring(stem.length - 2);
    stem = stem.substring(0, stem.length - 2);
    suffixMatches.unshift({ text: `-${suffix}`, type: "Hal Eki", desc: "Bulunma Hali (-de/-da)" });
  }
  
  // Extract plural
  if (stem.endsWith("lar") || stem.endsWith("ler")) {
    let suffix = stem.endsWith("lar") ? "-lar" : "-ler";
    stem = stem.substring(0, stem.length - 3);
    suffixMatches.unshift({ text: suffix, type: "Çoğul Eki", desc: "Çoğul eki (-ler/-lar)" });
  }
  
  // Add remaining stem
  breakdown.push({ text: stem, type: "Kök (Görece)", desc: "Tespit edilen kelime kökü" });
  
  // Concatenate suffixes
  suffixMatches.forEach(item => breakdown.push(item));
  
  return {
    word: word,
    meaning: word + " (Kelime tahlili yapıldı)",
    breakdown: breakdown
  };
}

function loadVocabCard(idx) {
  const cardData = vocabCardsDB[idx];
  document.getElementById("vocab-word-tatar").textContent = cardData.word;
  document.querySelector(".vocab-word-pronunciation").textContent = cardData.pronunciation;
  
  const backPanel = document.querySelector(".vocab-card-back");
  backPanel.querySelector("h3").textContent = cardData.meaning;
  backPanel.querySelector(".vocab-word-meaning").textContent = cardData.description;
  document.getElementById("vocab-word-sample-text").textContent = `"${cardData.sample}"`;
  document.getElementById("vocab-word-sample-author").textContent = `— ${cardData.author}`;
  
  document.getElementById("vocab-card-counter").textContent = `${idx + 1} / ${vocabCardsDB.length}`;
}


// 13. Interactive Culture Quiz Logic
const quizQuestions = [
  {
    question: "Kırım Tatar uyanışının şiarı kabul edilen 'Dilde, fikirde, işte birlik!' sözü hangi öndere aittir?",
    options: [
      "Numan Çelebicihan",
      "İsmail Bey Gaspıralı",
      "Bekir Sıtkı Çoban-zade",
      "Mustafa Abdülcemil Kırımoğlu"
    ],
    answerIdx: 1,
    explanation: "İsmail Bey Gaspıralı, modern Kırım Tatar basını ve eğitim sisteminin mimarı olup, çıkardığı efsanevi Tercüman Gazetesi'nde bu şiarı bayrak edinmiştir."
  },
  {
    question: "Kırım Tatar milli bayrağı üzerinde yer alan üç dişli altın sarısı sembolün adı nedir?",
    options: [
      "Üç Dişli Sancak",
      "Tarak-Tamga",
      "Mengli Nişanı",
      "Giray Kalkanı"
    ],
    answerIdx: 1,
    explanation: "Tarak-Tamga, Mengli Giray Han döneminden bu yana Kırım Tatar hanedan egemenliğinin ve milli kimliğinin sembolüdür."
  },
  {
    question: "Dilara Bikeç'in vefatı üzerine yaptırılan ve Alexander Pushkin'in ünlü şiirine esin veren saray anıtı hangisidir?",
    options: [
      "Bahçesaray Gözyaşı Çeşmesi (Selsebil)",
      "Demir Kapı Portali",
      "Hansaray Altın Odası",
      "Gözleve Çifte Minareleri"
    ],
    answerIdx: 0,
    explanation: "Kırım Giray Han tarafından eşi Dilara Bikeç anısına yaptırılan mermer Selsebil (Gözyaşı Çeşmesi), Pushkin'in 'Bahçesaray Çeşmesi' eserine ilham kaynağı olmuştur."
  },
  {
    question: "Kırım Tatarlarının bir gecede vatanlarından Orta Asya ve Sibirya'ya sürgün edildiği (Sürgünlik) kara günün tarihi nedir?",
    options: [
      "18 Mayıs 1944",
      "20 Mayıs 1944",
      "17 Nisan 1783",
      "18 Mayıs 1918"
    ],
    answerIdx: 0,
    explanation: "Stalin rejimi tarafından gerçekleştirilen etnik temizlik ve sürgün felaketi 18 Mayıs 1944 gecesi başlamış ve tüm halk vatanlarından sürülmüştür."
  },
  {
    question: "Kırım Tatar sözlü halk edebiyatında doğaçlama olarak atışma şeklinde söylenen kafiyeli manilere ne denir?",
    options: [
      "Yır",
      "Çıñ",
      "Koşma",
      "Destan"
    ],
    answerIdx: 1,
    explanation: "İrticali (doğaçlama) söylenen ikişer satırlık kafiyeli manilere 'çıñ' denirken, melodik halk şarkılarına 'yır' denmektedir."
  }
];

let quizCurrentIdx = 0;
let quizScore = 0;
let quizUserName = "Miras Dostu";

function setupQuiz() {
  const startBtn = document.getElementById("btn-start-quiz");
  
  startBtn.addEventListener("click", () => {
    quizCurrentIdx = 0;
    quizScore = 0;
    document.getElementById("quiz-status-bar").style.display = "block";
    loadQuizQuestion(0);
  });
}

function loadQuizQuestion(idx) {
  const container = document.getElementById("quiz-main-container");
  const q = quizQuestions[idx];
  
  document.getElementById("quiz-current-question-num").textContent = idx + 1;
  document.getElementById("quiz-total-questions-num").textContent = quizQuestions.length;
  
  const progressPercent = ((idx + 1) / quizQuestions.length) * 100;
  
  // Render quiz playstate
  container.innerHTML = `
    <div class="quiz-play-state">
      <div class="quiz-progress-bar-container">
        <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%"></div>
      </div>
      
      <div class="quiz-question-box">
        <h3><strong>Soru ${idx + 1}:</strong> ${q.question}</h3>
      </div>
      
      <div class="quiz-options-list">
        ${q.options.map((opt, i) => `
          <button class="quiz-option-btn" data-opt-idx="${i}">${opt}</button>
        `).join("")}
      </div>
      
      <div id="quiz-feedback-area" style="display:none;"></div>
      
      <div class="quiz-next-container" style="display:none;" id="quiz-next-btn-box">
        <button class="btn-primary" id="btn-quiz-next">
          ${idx === quizQuestions.length - 1 ? "Sonuçları Gör" : "Sonraki Soru"} <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `;
  
  // Option click handler
  const optionBtns = container.querySelectorAll(".quiz-option-btn");
  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedIdx = parseInt(btn.getAttribute("data-opt-idx"));
      
      // Disable options
      optionBtns.forEach(b => b.disabled = true);
      
      const feedbackArea = document.getElementById("quiz-feedback-area");
      const nextBtnBox = document.getElementById("quiz-next-btn-box");
      
      if (selectedIdx === q.answerIdx) {
        btn.classList.add("correct");
        quizScore++;
        feedbackArea.innerHTML = `
          <div class="quiz-feedback-box feedback-correct">
            <strong><i class="fa-solid fa-circle-check"></i> Doğru Cevap!</strong>
            <p>${q.explanation}</p>
          </div>
        `;
      } else {
        btn.classList.add("incorrect");
        // Highlight correct option
        optionBtns[q.answerIdx].classList.add("correct");
        
        feedbackArea.innerHTML = `
          <div class="quiz-feedback-box feedback-incorrect">
            <strong><i class="fa-solid fa-circle-xmark"></i> Yanlış Cevap!</strong>
            <p>${q.explanation}</p>
          </div>
        `;
      }
      
      feedbackArea.style.display = "block";
      nextBtnBox.style.display = "flex";
      
      // Hook next button click
      document.getElementById("btn-quiz-next").addEventListener("click", () => {
        if (quizCurrentIdx === quizQuestions.length - 1) {
          showQuizResults();
        } else {
          quizCurrentIdx++;
          loadQuizQuestion(quizCurrentIdx);
        }
      });
    });
  });
}

function showQuizResults() {
  const container = document.getElementById("quiz-main-container");
  document.getElementById("quiz-status-bar").style.display = "none";
  
  let AmbassadorTitle = "Kültür Elçisi";
  let badgeIcon = "fa-medal";
  if (quizScore === 5) {
    AmbassadorTitle = "Miras Muhafızı (Baş Muhafız)";
    badgeIcon = "fa-crown";
  } else if (quizScore >= 3) {
    AmbassadorTitle = "Kültür Elçisi (Kılavuz)";
    badgeIcon = "fa-scroll";
  } else {
    AmbassadorTitle = "Miras Araştırmacısı / Öğrenci";
    badgeIcon = "fa-book-open";
  }

  container.innerHTML = `
    <div class="quiz-result-state animate-fade-in">
      <div class="certificate-card" id="certificate-print-area">
        <div class="certificate-badge"><i class="fa-solid ${badgeIcon}"></i></div>
        <h3>KÜLTÜREL MİRAS BAŞARI SERTİFİKASI</h3>
        <p class="certificate-title">${AmbassadorTitle}</p>
        
        <p class="certificate-desc" style="margin-bottom: 5px;">Bu belge, Kırım Tatar tarih, edebiyat ve gelenekleri hakkındaki kültürel testi başarıyla tamamlayan miras dostuna takdim edilmiştir:</p>
        
        <div class="certificate-recipient" id="cert-recipient-name">Miras Dostu</div>
        
        <p class="certificate-desc">"Dilde, fikirde, işte birlik" şiarıyla kültürel mirasımızın korunmasına ve yarınlara aktarılmasına katkı sağladığınız için teşekkür ederiz.</p>
        
        <div class="certificate-score">
          Yarışma Skoru: <span class="certificate-score-val">${quizScore} / ${quizQuestions.length} Doğru</span>
        </div>
        <div class="certificate-footer-text">Bahçesaray Miras Dijital Arşiv Portalı</div>
      </div>
      
      <div class="quiz-action-group">
        <input type="text" id="cert-name-input" placeholder="Sertifika İsmi Girin..." style="padding: 10px; border-radius: 8px; border: 1px solid var(--border-light); background: rgba(0,0,0,0.4); color: var(--text-main); font-family: var(--font-sans);">
        <button class="btn-primary" id="btn-update-cert-name">İsmi Güncelle</button>
        <button class="btn-secondary" id="btn-restart-quiz-end">Yeniden Çöz</button>
      </div>
    </div>
  `;
  
  // Handle name update
  const nameInput = document.getElementById("cert-name-input");
  const updateBtn = document.getElementById("btn-update-cert-name");
  const certRecipient = document.getElementById("cert-recipient-name");
  
  updateBtn.addEventListener("click", () => {
    const val = nameInput.value.trim();
    if (val !== "") {
      certRecipient.textContent = val;
      nameInput.value = "";
    }
  });

  // Handle restart
  document.getElementById("btn-restart-quiz-end").addEventListener("click", () => {
    quizCurrentIdx = 0;
    quizScore = 0;
    document.getElementById("quiz-status-bar").style.display = "block";
    loadQuizQuestion(0);
  });
}

