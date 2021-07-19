## **API SmartDronev1**

**USER API**

- **URL**

**_USER_**

> Endpoint `https://our-chess-310913.et.r.appspot.com/api/auth`

`GET` /api/auth/get (Menampilkan list semua user)

`GET` /api/auth/get/[id] (Menampilkan data user berdasarkan id)

`GET` /api/auth/load/ (Menampilkan user yang sedang login)

`POST` /api/auth/register (register user baru)

`POST` /api/auth/login (Login untuk generate token JWT)

`PATCH` /update-user/[id] (Edit parsial user)

`DELETE` /delete-user/[id]

**_PROJECT_**

> Endpoint `https://our-chess-310913.et.r.appspot.com/api/project`

`GET` /api/project/get-all (Menampilkan list semua project)

`GET` /api/project/get/[id] (Menampilkan data project berdasarkan id)

`GET` /api/project/[projectId]/preview (Get Preview By Id Project)

`GET` /api/project/[projectId]/image (Get Image By Id Project)

`POST` /api/project/add (create project baru)

`PATCH` api/project/update/[id] (Edit parsial project)

`PATCH` api/project/[projectId]/pin/add (add pin to project)
`PATCH` api/project/update/[id]/pin/[id] (Edit parsial project pin)
`PATCH` api/project/deploy[projectId] (deploy project)

`DELETE` api/project/delete/[id]

**EXAMPLE USER**

---

**Contoh Input `GET` /api/auth/get (Menampilkan list semua user)**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

contoh Output

```
// GET
{
   "status": "success",
   "message": "data fetch successfully",
   "count": 1,
   "data": [
       {
           "createdAt": "2021-05-02T11:24:15.235Z",
           "updatedAt": "2021-05-02T14:06:09.885Z",
           "_id": "608e2c7fc3435e000bc27d4c",
           "email": "drone@gmail.com",
           "name": "donkey",
           "address": "jalan kutilang no 12 Semarang",
           "phone": 867657676754
       }
   ]
}
```

**Contoh Input
`GET` /api/auth/get/608e2c7fc3435e000bc27d4c (Menampilkan User By ID)**

---

```
headers : {
Authorization : `Bearer: ${token}`
}
```

Contoh Output

```
// GET BY ID

{
   "status": "success",
   "message": "data fetch successfully",
   "data": {
       "createdAt": "2021-05-02T11:24:15.235Z",
       "updatedAt": "2021-05-02T14:06:09.885Z",
       "_id": "608e2c7fc3435e000bc27d4c",
       "email": "drone@gmail.com",
       "name": "donkey",
       "address": "jalan kutilang no 12 Semarang",
       "phone": 867657676754
   }
}
```

**Contoh Input
`GET` /api/auth/load (Load user yang login)**

---

```
headers : {
Authorization : `Bearer: ${token}`
}
```

> Output

```
{
    "status": "success",
    "message": "data fetch successfully",
    "data": {
        "createdAt": "2021-07-13T09:20:42.666Z",
        "_id": "60ecf937dda759000a8747e0",
        "email": "nhawehsan@gmail.com",
        "name": "Ehshan",
        "address": "STO Telkom , Jalan Imam Bonjol no 1 Palangkaraya",
        "phone": 81345266434
    }
}
```

**Contoh Input
`POST` /api/auth/register**

---

```
{
    "email": "harahap@gmail.com",
    "password":"xxxx",
    "name": "harahap",
    "gender":"man",
    "address": "address tester",
    "phone": "0945345345345354345",
    "status" : "Connected",
    "battery" : "30%",
    "remote" : "10%",
    "signal" : "3"
}
```

Contoh Output

```
{
    "status": "success",
    "message": "User was created",
    "token": "xxxxxxxxxxxxxxxxxx"
}
```

**Contoh Input
`POST` /api/auth/login**

---

```
{
    "email": "harahap@gmail.com",
    "password": "harahap"
}
```

Contoh Output

```
{
    "status": "success",
    "message": "login successfully",
    "token": "xxxxxxxxxxxx"
}
```

**Contoh Input
`PATCH` /api/auth/update-user/608e2c7fc3435e000bc27d4c**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

```
{
    "name":"donkey",
    "phone": "0932834943",
    "address": "jalan kutilang edit"
}
```

Contoh Output

```
{
    "status": "success",
    "message": "data update successfully",
    "data": {
        "createdAt": "2021-05-02T11:24:15.235Z",
        "updatedAt": "2021-05-03T10:59:34.680Z",
        "_id": "608e2c7fc3435e000bc27d4c",
        "email": "drone@gmail.com",
        "name": "donkey",
        "address": "jalan kutilang edit",
        "phone": 932834943
    }
}
```

**Contoh Input
`DELETE` /api/auth/delete-user/608f76223daf47153969376c**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

Contoh Output

```
{
    "status": "success",
    "message": "data delete successfully",
    "id": "608f76223daf47153969376c"
}
```

**EXAMPLE PROJECT**

---

**Contoh Input
`GET` /api/project/get-all (Menampilkan list semua project)**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

contoh Output

```
// GET
{
   "status": "success",
   "message": "data fetch successfully",
   "count": 1,
   "data": [
       {
           "_id": "608f7c003daf47153969376d",
           "namaProject": "Padang Sidimpuan",
           "namaSurveyor": "hasibuan",
           "alamatProject": "Medan sunggal Jl. SM Raja",
           "tglPlanning": "2021-05-03T10:59:34.458Z",
           "updatedAt": "2021-05-03T10:59:34.458Z",
           "lokasi": {
               "latitude": null,
               "longitude": null
           },
           "tglDeploy": null,
           "tglTarget": "2021-08-30T01:42:39.000Z",
           "pin": [
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf47153969376e",
                   "name": "pin 1",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": false,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf47153969376f",
                   "name": "pin 2",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf471539693770",
                   "name": "pin 3",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf471539693771",
                   "name": "pin 5",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf471539693772",
                   "name": "pin 4",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               }
           ],
           "user": {
               "_id": "608f76223daf47153969376c"
           }
       }
   ]
}
```

**Contoh Input
`GET` /api/project/get-one/[id] (Menampilkan project By Id)**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

contoh Output

```
// GET
{
   "status": "success",
   "message": "data fetch successfully",
   "data": {
       "id": "608f7c003daf47153969376d",
       "namaProject": "Padang Sidimpuan",
       "namaSurveyor": "hasibuan",
       "alamatProject": "Medan sunggal Jl. SM Raja",
       "tglPlanning": "2021-05-03T10:59:34.458Z",
       "lokasi": {
           "latitude": null,
           "longitude": null
       },
       "tglDeploy": null,
       "tglTarget": "2021-08-30T01:42:39.000Z",
       "pin": [
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                   "act01": 1,
                   "act02": 2,
                   "act03": 3,
                   "act04": 4,
                   "act05": 5,
                   "act06": 1,
                   "act08": 2,
                   "act09": 3
               },
               "_id": "608f7c003daf47153969376e",
               "name": "pin 1",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           },
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": false,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                   "act01": 1,
                   "act02": 2,
                   "act03": 3,
                   "act04": 4,
                   "act05": 5,
                   "act06": 1,
                   "act08": 2,
                   "act09": 3
               },
               "_id": "608f7c003daf47153969376f",
               "name": "pin 2",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           },
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                   "act01": 1,
                   "act02": 2,
                   "act03": 3,
                   "act04": 4,
                   "act05": 5,
                   "act06": 1,
                   "act08": 2,
                   "act09": 3
               },
               "_id": "608f7c003daf471539693770",
               "name": "pin 3",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           },
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                   "act01": 1,
                   "act02": 2,
                   "act03": 3,
                   "act04": 4,
                   "act05": 5,
                   "act06": 1,
                   "act08": 2,
                   "act09": 3
               },
               "_id": "608f7c003daf471539693771",
               "name": "pin 5",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           },
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                   "act01": 1,
                   "act02": 2,
                   "act03": 3,
                   "act04": 4,
                   "act05": 5,
                   "act06": 1,
                   "act08": 2,
                   "act09": 3
               },
               "_id": "608f7c003daf471539693772",
               "name": "pin 4",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           }
       ]
   }
}
```

**Contoh Input
`GET` /api/project/search?[query] (Menampilkan project By Id)**

---

> note: query => \* namaProject = padang

                 * alamatProject
                 * namaSurveyor
                 * date between tglPlanning
                 * date between tglDeploy
                 * date between tglTarget

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

contoh Output

```
{
   "status": "success",
   "message": "data fetch successfully",
   "count": 1,
   "data": [
       {
           "_id": "608f7c003daf47153969376d",
           "namaProject": "Padang Sidimpuan",
           "namaSurveyor": "hasibuan",
           "alamatProject": "Medan sunggal Jl. SM Raja",
           "tglPlanning": "2021-05-03T10:59:34.458Z",
           "lokasi": {
               "latitude": null,
               "longitude": null
           },
           "tglDeploy": null,
           "tglTarget": "2021-08-30T01:42:39.000Z",
           "pin": [
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf47153969376e",
                   "name": "pin 1",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": false,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf47153969376f",
                   "name": "pin 2",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf471539693770",
                   "name": "pin 3",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf471539693771",
                   "name": "pin 5",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               },
               {
                   "koordinat": {
                       "latitude": 1,
                       "longitude": 3
                   },
                   "poi": {
                       "poiStatus": true,
                       "poiMode": 5,
                       "poiLatitude": 1,
                       "poiLongtude": 2,
                       "poiAltiutde": 6
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 11
                   },
                   "intervalmode": {
                       "meters": 52
                   },
                   "actions": {
                       "act01": 1,
                       "act02": 2,
                       "act03": 3,
                       "act04": 4,
                       "act05": 5,
                       "act06": 1,
                       "act08": 2,
                       "act09": 3
                   },
                   "_id": "608f7c003daf471539693772",
                   "name": "pin 4",
                   "speed": 12,
                   "altitude": 10,
                   "heading": 30,
                   "curvesize": 1,
                   "rotationdir": 10
               }
           ]
       }
   ]
}
```

**Contoh Input
`GET` /api/project/[projectId]/preview (Menampilkan Preview Project By Id)**

---

```
headers : {
Authorization : `Bearer: ${token}`
}
```

\*Contoh Output

```
   {
   "status": "success",
   "message": "preview was fetching successfully",
   "data": {
       "path": [

       ]
   }
}
```

**Contoh Input
`GET` /api/project/[projectId]/image (Menampilkan Image2d dan Image3d Project By Id)**

---

```
headers : {
Authorization : `Bearer: ${token}`
}
```

\*Contoh Output

```
   {
   "status": "success",
   "message": "preview was fetching successfully",
   "data": {
       "path": {
           image2d: {
               path: [ ]
           },
           image3d: {
               path: []
           }
       }
   }
}
```

**Contoh Input
`POST` /api/project/add (Add Project)**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

```
{
 "namaProject":"Padang Sihopal",
 "alamatProject":"Desa Sialagundi, Kec. Huristak, Kab. Padang Lawas, Prov. Sumatera Utara",
 "detailProject": "project pertama yang akan di terbangkan di padang sihopal",
 "tglTarget":"2021-06-02",
 "namaSurveyor":"Amanudin Harahap",
 "lokasi":{
   "latitude":-6.12201468,
   "longitude":106.88686669
 },
 "pin":[
   {
     "name":"Marker 1",
     "rotationdir":0,
     "speed":36,
     "altitude":57,
     "curvesize":0,
     "poi":{
         "poiStatus":true,
         "poiMode": 20,
         "poiLatitude":10,
         "poiLongtude":20,
         "poiAltiutde":10
     },
     "gimbalmode":{
       "disable":false,
       "focuspoi":true,
       "interpolate":46
     },
     "intervalmode": {
         "disable":false,
         "seconds":1000,
         "meters":40
     },
     "heading":61,
     "koordinat":{
       "latitude":-6.1220520656822055,
       "longitude":106.88597358763218
     },
     "actions": {
           "act01": {
               "rotate": "oke"
           },
           "act02": {
               "take_photos": 4
           },
           "act03": {
               "record_video": 2
           },
           "act04": {
               "rotate": true
           },
           "act05": {
               "home": false
           },
           "act06": {
               "stay_for": 20
           },
           "act07": {
               "stay_for": 10
           },
           "act08": {
               "record_video": 2
           },
           "act09": {
               "rotate": true
           },
           "act10": {
               "home": false
           },
           "act11": {
               "stay_for": 20
           },
           "act12": {
               "stay_for": 10
           },
           "act13": {
               "home": false
           },
           "act14": {
               "stay_for": 20
           },
           "act15": {
               "stay_for": 10
           }
       }
   },
   {
     "altitude":56,
     "curvesize":0,
     "gimbalmode":{
       "focuspoi":true,
       "interpolate":58
     },
     "heading":75,
     "koordinat":{
       "latitude":-6.122249750519877,
       "longitude":106.88740320503712
     },
     "name":"Marker 2",
     "rotationdir":0,
     "speed":64
   }
 ]
}
```

contoh Output

```
{
   "status": "success",
   "message": "data create successfully",
   "data": {
       "lokasi": {
           "latitude": -6.12201468,
           "longitude": 106.88686669
       },
       "tglPlanning": "2021-06-05T00:38:44.899Z",
       "updatedAt": "2021-06-05T00:38:44.899Z",
       "_id": "60ba6530c1a2392281e098fc",
       "namaProject": "Padang Sihopal",
       "namaSurveyor": "Amanudin Harahap",
       "alamatProject": "Desa Sialagundi, Kec. Huristak, Kab. Padang Lawas, Prov. Sumatera Utara",
       "detailProject": "project pertama yang akan di terbangkan di padang sihopal",
       "tglTarget": "2021-06-01T17:00:00.000Z",
       "pin": [
           {
               "koordinat": {
                   "latitude": -6.1220520656822055,
                   "longitude": 106.88597358763218
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 20,
                   "poiLatitude": 10,
                   "poiLongtude": 20,
                   "poiAltiutde": 10
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 46
               },
               "intervalmode": {
                   "seconds": 1000,
                   "meters": 40
               },
               "actions": {
                   "act01": {
                       "rotate": "oke"
                   },
                   "act02": {
                       "take_photos": "4"
                   },
                   "act03": {
                       "record_video": "2"
                   },
                   "act04": {
                       "rotate": "true"
                   },
                   "act05": {
                       "home": "false"
                   },
                   "act06": {
                       "stay_for": "20"
                   },
                   "act07": {
                       "stay_for": "10"
                   },
                   "act08": {
                       "record_video": "2"
                   },
                   "act09": {
                       "rotate": "true"
                   },
                   "act10": {
                       "home": "false"
                   },
                   "act11": {
                       "stay_for": "20"
                   },
                   "act12": {
                       "stay_for": "10"
                   },
                   "act13": {
                       "home": "false"
                   },
                   "act14": {
                       "stay_for": "20"
                   },
                   "act15": {
                       "stay_for": "10"
                   }
               },
               "preview": {
                   "path": []
               },
               "_id": "60ba6530c1a2392281e098fd",
               "name": "Marker 1",
               "rotationdir": 0,
               "speed": 36,
               "altitude": 57,
               "curvesize": 0,
               "heading": 61
           },
           {
               "koordinat": {
                   "latitude": -6.122249750519877,
                   "longitude": 106.88740320503712
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 58
               },
               "preview": {
                   "path": []
               },
               "_id": "60ba6530c1a2392281e098fe",
               "altitude": 56,
               "curvesize": 0,
               "heading": 75,
               "name": "Marker 2",
               "rotationdir": 0,
               "speed": 64
           }
       ],
       "user": "60aa143c976c05000aedcb22",
       "deploy": [],
       "__v": 0
   }
}
```

**Contoh Input
`PATCH` /api/project/update/[id] (Update project (Spesifikasi field allowed))**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```
[![Deepin-Screenshot-select-area-20210715103810.png](https://i.postimg.cc/dVgCKtw3/Deepin-Screenshot-select-area-20210715103810.png)](https://postimg.cc/sM9xYzBC)

contoh Output



**Contoh Input
`PATCH` /api/project/[projectId]/pin/add (Add pin To Project)**

---

```
 headers : {
  Authorization : `Bearer: ${token}`
 }
```

```
{
    "name":"pin baru",
    "koordinat": {
        "latitude":-6.12201468,
        "longitude": 106.88686669
    },
    "speed": 56,
    "altitude": 34,
    "heading": 70,
    "curvesize": 3,
    "rotationdir":30,
    "poi":{
        "poiStatus":false,
        "poiMode" :3000,
        "poiLatitude":200,
        "poiLongtude":1002,
        "poiAltiutde":2103
    },
    "gimbalmode":{
        "disabled":false,
        "focuspoi":true,
        "interpolate":3002
    },
    "intervalmode":{
        "disabled":false,
        "seconds":4000,
        "meters":30
    },
    "actions": {
        "act01": {
            "rotate": "true"
        },
        "act02": {
            "take_photos": "4"
        },
        "act03": {
            "record_video": "2"
        },
        "act04": {
            "rotate": "true"
        },
        "act05": {
            "home": "false"
        },
        "act06": {
            "stay_for": "20"
        },
        "act07": {
            "stay_for": "10"
        },
        "act08": {
            "record_video": "2"
        },
        "act09": {
            "rotate": "true"
        },
        "act10": {
            "home": "false"
        },
        "act11": {
            "stay_for": "20"
        },
        "act12": {
            "stay_for": "10"
        },
        "act13": {
            "home": "false"
        },
        "act14": {
            "stay_for": "20"
        },
        "act15": {
            "stay_for": "10"
        }
    }
}
```

Contoh Output:

```
{
   "status": "success",
   "message": "add data pin successfully",
   "data": [
       {
           "lokasi": {
               "latitude": -6.12201468,
               "longitude": 106.88686669
           },
           "tglPlanning": "2021-06-04T14:13:00.139Z",
           "updatedAt": "2021-06-15T12:28:07.283Z",
           "_id": "60b9d35aaffde7ce4d25f4b7",
           "namaProject": "grya permai edit",
           "namaSurveyor": "harahap edit",
           "alamatProject": "Medan Jl. Imam bonjol edit",
           "tglTarget": "2021-06-01T17:00:00.000Z",
           "pin": [
               {
                   "koordinat": {
                       "latitude": -6.1220520656822055,
                       "longitude": 106.88597358763218
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 46
                   },
                   "actions": {
                       "act01": {
                           "rotate": "true"
                       },
                       "act02": {
                           "take_photos": "4"
                       },
                       "act03": {
                           "record_video": "2"
                       },
                       "act04": {
                           "rotate": "true"
                       },
                       "act05": {
                           "home": "true"
                       },
                       "act08": {
                           "stay_for": "20"
                       },
                       "act09": {
                           "stay_for": "10"
                       }
                   },
                   "preview": {
                       "path": [
                           "https://storage.googleapis.com/contoh-cloud/1623676281526-WIN_20210329_23_20_27_Pro.jpg",
                           "https://storage.googleapis.com/contoh-cloud/1623676281534-WIN_20210329_23_20_28_Pro.jpg"
                       ]
                   },
                   "_id": "60b9d35aaffde7ce4d25f4b8",
                   "altitude": 57,
                   "curvesize": 0,
                   "heading": 61,
                   "name": "marker 1A",
                   "rotationdir": 0,
                   "speed": 46
               },
               {
                   "koordinat": {
                       "latitude": -6.122249750519877,
                       "longitude": 106.88740320503712
                   },
                   "gimbalmode": {
                       "focuspoi": true,
                       "interpolate": 58
                   },
                   "preview": {
                       "path": []
                   },
                   "_id": "60b9d35aaffde7ce4d25f4b9",
                   "altitude": 56,
                   "curvesize": 0,
                   "heading": 75,
                   "name": "Marker 2",
                   "rotationdir": 0,
                   "speed": 64
               },
               {
                   "koordinat": {
                       "latitude": -6.12201468,
                       "longitude": 106.88686669
                   },
                   "poi": {
                       "poiStatus": false,
                       "poiMode": 3000,
                       "poiLatitude": 200,
                       "poiLongtude": 1002,
                       "poiAltiutde": 2103
                   },
                   "gimbalmode": {
                       "disabled": false,
                       "focuspoi": true,
                       "interpolate": 3002
                   },
                   "intervalmode": {
                       "disabled": false,
                       "seconds": 4000,
                       "meters": 30
                   },
                   "actions": {
                       "act01": {
                           "rotate": "true"
                       },
                       "act02": {
                           "take_photos": "4"
                       },
                       "act03": {
                           "record_video": "2"
                       },
                       "act04": {
                           "rotate": "true"
                       },
                       "act05": {
                           "home": "false"
                       },
                       "act06": {
                           "stay_for": "20"
                       },
                       "act07": {
                           "stay_for": "10"
                       },
                       "act08": {
                           "record_video": "2"
                       },
                       "act09": {
                           "rotate": "true"
                       },
                       "act10": {
                           "home": "false"
                       },
                       "act11": {
                           "stay_for": "20"
                       },
                       "act12": {
                           "stay_for": "10"
                       },
                       "act13": {
                           "home": "false"
                       },
                       "act14": {
                           "stay_for": "20"
                       },
                       "act15": {
                           "stay_for": "10"
                       }
                   },
                   "preview": {
                       "path": []
                   },
                   "_id": "60c81d22c078ca43f93af7eb",
                   "name": "pin baru",
                   "speed": 56,
                   "altitude": 34,
                   "heading": 70,
                   "curvesize": 3,
                   "rotationdir": 30
               }
           ],
           "user": "60aa143c976c05000aedcb22",
           "deploy": [
               {
                   "_id": "60b9dc1ffd3da7000a7beb44",
                   "tglDeploy": "2021-06-04T14:54:07.897Z"
               },
               {
                   "_id": "60c77720d4f8d1000af424fb",
                   "tglDeploy": "2021-06-14T22:34:56.853Z"
               }
           ],
           "__v": 0
       }
   ]
}
```

`PATCH` /api/project/[projectId]/pin/[pinId] (Update project (Spesifikasi field allowed allowed input form-data, user bisa upload file menggunakan endpoint ini))\*\*

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

[![Contoh Input Update Pin & upload preview](https://i.postimg.cc/pTF8HPSs/Deepin-Screenshot-select-area-20210610090340.png)](https://postimg.cc/r0qzG2M4)

contoh Output

```
{
   "status": "success",
   "message": "data update successfully",
   "data": {
       "koordinat": {
           "latitude": -6.1220520656822055,
           "longitude": 106.88597358763218
       },
       "gimbalmode": {
           "focuspoi": true,
           "interpolate": 46
       },
       "actions": {
           "act01": {
               "rotate": "true"
           },
           "act02": {
               "take_photos": "4"
           },
           "act03": {
               "record_video": "2"
           },
           "act04": {
               "rotate": "true"
           },
           "act05": {
               "home": "true"
           },
           "act08": {
               "stay_for": "20"
           },
           "act09": {
               "stay_for": "10"
           }
       },
       "preview": {
           "path": [
               "https://storage.googleapis.com/contoh-cloud/1623290578437-banana.png",
               "https://storage.googleapis.com/contoh-cloud/1623290578504-melon.png",
               "https://storage.googleapis.com/contoh-cloud/1623290578506-profil.jpg",
               "https://storage.googleapis.com/contoh-cloud/1623290578507-watermelon.png"
           ]
       },
       "_id": "60b9d35aaffde7ce4d25f4b8",
       "altitude": 57,
       "curvesize": 0,
       "heading": 61,
       "name": "Marker 1 A",
       "rotationdir": 0,
       "speed": 46
   }
}
```

**Contoh Input
`PATCH` /api/project/deploy/[projectId](Deploy Project)**

```
 headers : {
  Authorization : `Bearer: ${token}`
 }
```

\*\* Contoh Output

```
{
   "status": "success",
   "message": "project deploy successfully",
   "data": {
       "lokasi": {
           "latitude": null,
           "longitude": null
       },
       "tglPlanning": "2021-05-06T15:59:20.263Z",
       "updatedAt": "2021-05-06T15:59:20.263Z",
       "_id": "6093afed5640e58e3ceaf9ed",
       "preview": [
           "https://storage.googleapis.com/contoh-cloud/IMG_20210206_211140.jpg"
       ],
       "namaProject": "test",
       "namaSurveyor": "testing 1",
       "alamatProject": "testing alamat 1",
       "tglTarget": null,
       "tglDeploy": null,
       "pin": [
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 2,
                   "poiLatitude": 3,
                   "poiLongtude": 2,
                   "poiAltiutde": 8
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 10
               },
               "intervalmode": {
                   "seconds": 1000,
                   "meters": 40
               },
               "actions": {
                       "act01": {
                           "rotate": true
                       },
                       "act02": {
                           "take_photos": 4
                       },
                       "act03": {
                           "record_video": 2
                       },
                       "act04": {
                           "rotate": true
                       },
                       "act05": {
                           "home": false
                       },
                       "act08": {
                           "stay_for": 20
                       },
                       "act09": {
                           "stay_for": 10
                       }
                   },
               "preview": {
                   "path": []
               },
               "_id": "6093afed5640e58e3ceaf9ee",
               "name": "pin 1",
               "speed": 12,
               "altitude": 10,
               "curvesize": 1,
               "rotationdir": 10
           }
       ],
       "user": "608f76223daf47153969376c",
       "__v": 0,
       "deploy": [
           {
               "_id": "60a5c7b32b9f94793bc5eb0e",
               "tglDeploy": "2021-05-20T23:16:15.406Z"
           },
           {
               "_id": "60a5c7d630e56d7a76123e53",
               "tglDeploy": "2021-05-20T09:22:09.624Z"
           },
           {
               "_id": "60a5c80630e56d7a76123e54",
               "tglDeploy": "2021-05-20T09:22:09.624Z"
           },
           {
               "_id": "60a5c95c27c39e7bf7b957da",
               "tglDeploy": "2021-05-20T09:28:44.368Z"
           },
           {
               "_id": "60a5c97527c39e7bf7b957db",
               "tglDeploy": "2021-05-20T09:29:09.262Z"
           }
       ]
   }
}
```

**Contoh Input
`DELETE` /api/project/deploy/[projectId] (Deploy project)**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

contoh Output

```
{
   "status": "success",
   "message": "project deploy successfully",
   "data": {
       "lokasi": {
           "latitude": -6.12201468,
           "longitude": 106.88686669
       },
       "tglPlanning": "2021-06-04T14:13:00.139Z",
       "updatedAt": "2021-06-04T14:13:00.139Z",
       "_id": "60b9d35aaffde7ce4d25f4b7",
       "namaProject": "dayat 5",
       "namaSurveyor": "dayat",
       "alamatProject": "Jl. Swasembada Barat XIII No.38, RT.9/RW.9, Kb. Bawang, Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14320, Indonesia",
       "tglTarget": "2021-06-01T17:00:00.000Z",
       "pin": [
           {
               "koordinat": {
                   "latitude": -6.1220520656822055,
                   "longitude": 106.88597358763218
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 46
               },
               "actions": {
                   "act01": {
                       "rotate": "true"
                   },
                   "act02": {
                       "take_photos": "4"
                   },
                   "act03": {
                       "record_video": "2"
                   },
                   "act04": {
                       "rotate": "true"
                   },
                   "act05": {
                       "home": "false"
                   },
                   "act08": {
                       "stay_for": "20"
                   },
                   "act09": {
                       "stay_for": "10"
                   }
               },
               "preview": {
                   "path": []
               },
               "_id": "60b9d35aaffde7ce4d25f4b8",
               "altitude": 57,
               "curvesize": 0,
               "heading": 61,
               "name": "Marker 1",
               "rotationdir": 0,
               "speed": 36
           },
           {
               "koordinat": {
                   "latitude": -6.122249750519877,
                   "longitude": 106.88740320503712
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 58
               },
               "preview": {
                   "path": []
               },
               "_id": "60b9d35aaffde7ce4d25f4b9",
               "altitude": 56,
               "curvesize": 0,
               "heading": 75,
               "name": "Marker 2",
               "rotationdir": 0,
               "speed": 64
           }
       ],
       "user": "60aa143c976c05000aedcb22",
       "deploy": [
           {
               "_id": "60b9dc1ffd3da7000a7beb44",
               "tglDeploy": "2021-06-04T14:54:07.897Z"
           }
       ],
       "__v": 0
   }
}
```

**Contoh Input
`DELETE` /api/project/delete/[projectId] (Delete project)**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

contoh Output

```
{
   "status": "success",
   "message": "data delete successfully",
   "id": "608f7c003daf47153969376d"
}
```

**Contoh Input
`DELETE` /api/project/delete/[projectId]/pin/[pinId] (Delete Pin project)**

---

```
headers : {
 Authorization : `Bearer: ${token}`
}
```

contoh Output

```
{
   "status": "success",
   "message": "data update successfully",
   "data": {
       "_id": "609248d6b23dfb000a34ecfc",
       "pin": [
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                       "act01": {
                           "rotate": true
                       },
                       "act02": {
                           "take_photos": 4
                       },
                       "act03": {
                           "record_video": 2
                       },
                       "act04": {
                           "rotate": true
                       },
                       "act05": {
                           "home": false
                       },
                       "act08": {
                           "stay_for": 20
                       },
                       "act09": {
                           "stay_for": 10
                       }
                   },
               "_id": "609248d6b23dfb000a34ecfd",
               "name": "pin 1",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           },
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": false,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                       "act01": {
                           "rotate": true
                       },
                       "act02": {
                           "take_photos": 4
                       },
                       "act03": {
                           "record_video": 2
                       },
                       "act04": {
                           "rotate": true
                       },
                       "act05": {
                           "home": false
                       },
                       "act08": {
                           "stay_for": 20
                       },
                       "act09": {
                           "stay_for": 10
                       }
                   },
               "_id": "609248d6b23dfb000a34ecfe",
               "name": "pin 2",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           },
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                       "act01": {
                           "rotate": true
                       },
                       "act02": {
                           "take_photos": 4
                       },
                       "act03": {
                           "record_video": 2
                       },
                       "act04": {
                           "rotate": true
                       },
                       "act05": {
                           "home": false
                       },
                       "act08": {
                           "stay_for": 20
                       },
                       "act09": {
                           "stay_for": 10
                       }
                   },
               "_id": "609248d6b23dfb000a34ecff",
               "name": "pin 3",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           },
           {
               "koordinat": {
                   "latitude": 1,
                   "longitude": 3
               },
               "poi": {
                   "poiStatus": true,
                   "poiMode": 5,
                   "poiLatitude": 1,
                   "poiLongtude": 2,
                   "poiAltiutde": 6
               },
               "gimbalmode": {
                   "focuspoi": true,
                   "interpolate": 11
               },
               "intervalmode": {
                   "meters": 52
               },
               "actions": {
                       "act01": {
                           "rotate": true
                       },
                       "act02": {
                           "take_photos": 4
                       },
                       "act03": {
                           "record_video": 2
                       },
                       "act04": {
                           "rotate": true
                       },
                       "act05": {
                           "home": false
                       },
                       "act08": {
                           "stay_for": 20
                       },
                       "act09": {
                           "stay_for": 10
                       }
                   },
               "_id": "609248d6b23dfb000a34ed00",
               "name": "pin 5",
               "speed": 12,
               "altitude": 10,
               "heading": 30,
               "curvesize": 1,
               "rotationdir": 10
           }
       ]
   }
}
```
