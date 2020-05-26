# cityMaps 

1- https://deno.land/#installation

2- clone: 
```sh 
git clone https://github.com/ibrahimbidi/cityMaps.git 
```

3- make file .env , set KEY_GOOGLE_MAPS=XXXXXXXX 

4- terminal: 
```sh
deno run --allow-net --allow-env --allow-read .\app.ts
```
## api
 - get google name city by address & language http://localhost:2020/maps/address/en/الرياض
 - get google name city by location http://localhost:2020/maps/latlng/24.7135517,46.6752957
 - post list city & get ...list + google name city + location + different name
 ```sh
       {...list,
        "title_ar": "الجلة وتبراك",
        "google_place_id": "الجله",
        "latitude": 24.3431561,
        "longitude": 45.8093516,
        "different": true, //is !(title_ar === google_place_id) true = different name btw title_ar & google_place_id
        }
 ```
 
   POST http://localhost:2020/maps/lists
   
  # Params :
   ```sh 
    [
     {
    "name": "RIYADH - الرياض",
    "title_ar": "الرياض",
    "title_en": "RIYADH",
    "citc_region_id": "NV25GlPuOnQ=",
    "name_region": "منطقة الرياض",
    "citc_citie_id": "NV25GlPuOnQ=",
    "latitude": 0,
    "longitude": 0,
    "country_id": 1,
    "lang_file": "en"
   },
    {
    "name": "SHAKRAA - شقراء",
    "title_ar": "شقراء",
    "title_en": "SHAKRAA",
    "citc_region_id": "NV25GlPuOnQ=",
    "name_region": "منطقة الرياض",
    "citc_citie_id": "dDYGE17HCcg=",
    "latitude": 0,
    "longitude": 0,
    "country_id": 1,
    "lang_file": "en"
    },
   {
    "name": "AL-DWADMY - الدوادمي",
    "title_ar": "الدوادمي",
    "title_en": "AL-DWADMY",
    "citc_region_id": "NV25GlPuOnQ=",
    "name_region": "منطقة الرياض",
    "citc_citie_id": "ZGUL0hN7D9M=",
    "latitude": 0,
    "longitude": 0,
    "country_id": 1,
    "lang_file": "en"
    },
    {
    "name": "AL-KWAYEYA - القويعيه",
    "title_ar": "القويعيه",
    "title_en": "AL-KWAYEYA",
    "citc_region_id": "NV25GlPuOnQ=",
    "name_region": "منطقة الرياض",
    "citc_citie_id": "LPLQ5MSAofw=",
    "latitude": 0,
    "longitude": 0,
    "country_id": 1,
    "lang_file": "en"
    },
    {
    "name": "AFIF - عفيف",
    "title_ar": "عفيف",
    "title_en": "AFIF",
    "citc_region_id": "NV25GlPuOnQ=",
    "name_region": "منطقة الرياض",
    "citc_citie_id": "UNIkOZHdccs=",
    "latitude": 0,
    "longitude": 0,
    "country_id": 1,
    "lang_file": "en"
   },
   {
    "name": "الجلة وتبراك",
    "title_ar": "الجلة وتبراك",
    "title_en": "",
    "citc_region_id": "NV25GlPuOnQ=",
    "name_region": "منطقة الرياض",
    "citc_citie_id": "DlQYndrYliA=",
    "latitude": 0,
    "longitude": 0,
    "country_id": 1,
    "lang_file": "en"
    }]
   ```
 # Respense : 
      ```sh
     [
      {
        "name": "RIYADH - الرياض",
        "title_ar": "الرياض",
        "title_en": "RIYADH",
        "citc_region_id": "NV25GlPuOnQ=",
        "name_region": "منطقة الرياض",
        "citc_citie_id": "NV25GlPuOnQ=",
        "latitude": 24.7135517,
        "longitude": 46.6752957,
        "country_id": 1,
        "lang_file": "en",
        "google_place_id": "الرياض",
        "different": false
     },
     {
        "name": "SHAKRAA - شقراء",
        "title_ar": "شقراء",
        "title_en": "SHAKRAA",
        "citc_region_id": "NV25GlPuOnQ=",
        "name_region": "منطقة الرياض",
        "citc_citie_id": "dDYGE17HCcg=",
        "latitude": 25.2476471,
        "longitude": 45.2524792,
        "country_id": 1,
        "lang_file": "en",
        "google_place_id": "شقراء",
        "different": false
    },
    {
        "name": "AL-DWADMY - الدوادمي",
        "title_ar": "الدوادمي",
        "title_en": "AL-DWADMY",
        "citc_region_id": "NV25GlPuOnQ=",
        "name_region": "منطقة الرياض",
        "citc_citie_id": "ZGUL0hN7D9M=",
        "latitude": 24.5167005,
        "longitude": 44.4181786,
        "country_id": 1,
        "lang_file": "en",
        "google_place_id": "الدوادمي",
        "different": false
     },
     {
        "name": "AL-KWAYEYA - القويعيه",
        "title_ar": "القويعيه",
        "title_en": "AL-KWAYEYA",
        "citc_region_id": "NV25GlPuOnQ=",
        "name_region": "منطقة الرياض",
        "citc_citie_id": "LPLQ5MSAofw=",
        "latitude": 24.067056,
        "longitude": 45.2806177,
        "country_id": 1,
        "lang_file": "en",
        "google_place_id": "القويعية",
        "different": true
     },
     {
        "name": "AFIF - عفيف",
        "title_ar": "عفيف",
        "title_en": "AFIF",
        "citc_region_id": "NV25GlPuOnQ=",
        "name_region": "منطقة الرياض",
        "citc_citie_id": "UNIkOZHdccs=",
        "latitude": 23.9052203,
        "longitude": 42.9124955,
        "country_id": 1,
        "lang_file": "en",
        "google_place_id": "عفيف",
        "different": false
     },
     {
        "name": "الجلة وتبراك",
        "title_ar": "الجلة وتبراك",
        "title_en": "",
        "citc_region_id": "NV25GlPuOnQ=",
        "name_region": "منطقة الرياض",
        "citc_citie_id": "DlQYndrYliA=",
        "latitude": 24.3431561,
        "longitude": 45.8093516,
        "country_id": 1,
        "lang_file": "en",
        "google_place_id": "الجله",
        "different": true
     }
    ]
```
 *) list all cities https://github.com/ibrahimbidi/cityMaps/blob/master/db/cities.ts
