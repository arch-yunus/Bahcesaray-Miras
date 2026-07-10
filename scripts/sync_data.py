import os
import json
import csv

def sync_yazarlar():
    json_path = os.path.join("Veri_Setleri", "JSON", "yazarlar.json")
    csv_path = os.path.join("Veri_Setleri", "CSV", "yazarlar.csv")
    
    print(f"Senkronize ediliyor: {json_path} -> {csv_path}")
    
    if not os.path.exists(json_path):
        print(f"Hata: {json_path} bulunamadı!")
        return
        
    with open(json_path, "r", encoding="utf-8") as f:
        yazarlar = json.load(f)
        
    # Klasör yoksa oluştur
    os.makedirs(os.path.dirname(csv_path), exist_ok=True)
    
    headers = ["ad", "dogum_yili", "olum_yili", "dogum_yeri", "unvan", "ana_eserler", "hakkinda"]
    
    with open(csv_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        
        for y in yazarlar:
            # Ana eserler dizisini noktalı virgül ile birleştiriyoruz
            ana_eserler_str = "; ".join(y.get("ana_eserler", []))
            writer.writerow([
                y.get("ad", ""),
                y.get("dogum_yili", ""),
                y.get("olum_yili", ""),
                y.get("dogum_yeri", ""),
                y.get("unvan", ""),
                ana_eserler_str,
                y.get("hakkinda", "")
            ])
            
    print("Yazarlar senkronizasyonu tamamlandı.")

def sync_siirler():
    json_path = os.path.join("Veri_Setleri", "JSON", "siirler.json")
    csv_path = os.path.join("Veri_Setleri", "CSV", "siirler.csv")
    
    print(f"Senkronize ediliyor: {json_path} -> {csv_path}")
    
    if not os.path.exists(json_path):
        print(f"Hata: {json_path} bulunamadı!")
        return
        
    with open(json_path, "r", encoding="utf-8") as f:
        siirler = json.load(f)
        
    # Klasör yoksa oluştur
    os.makedirs(os.path.dirname(csv_path), exist_ok=True)
    
    headers = ["id", "baslik", "turkce_baslik", "yazar", "yil", "tur", "orijinal_metin", "turkce_tercume"]
    
    with open(csv_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        
        for s in siirler:
            # Şiir satırlarını satır sonu (\n) ile birleştirerek CSV içinde alt alta görünmesini sağlıyoruz
            orijinal_str = "\n".join(s.get("orijinal_metin", []))
            tercume_str = "\n".join(s.get("turkce_tercume", []))
            writer.writerow([
                s.get("id", ""),
                s.get("baslik", ""),
                s.get("turkce_baslik", ""),
                s.get("yazar", ""),
                s.get("yil", ""),
                s.get("tur", ""),
                orijinal_str,
                tercume_str
            ])
            
    print("Şiirler senkronizasyonu tamamlandı.")

if __name__ == "__main__":
    sync_yazarlar()
    sync_siirler()
    print("Tüm veri setleri başarıyla senkronize edildi!")
