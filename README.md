**API SmartDronev1**
----
**USER API**

* **URL**

***USER***

> Endpoint `https://our-chess-310913.et.r.appspot.com/api/auth`
 
 `GET`  /api/auth/get (Menampilkan list semua user)
 
 `GET`  /api/auth/get/[id] (Menampilkan data user berdasarkan id)

 `POST` /api/auth/register (register user baru)
 
 `POST`  /api/auth/login (Login untuk generate token JWT)
 
 `PATCH` /update-user/[id] (Edit parsial user)
 
 `DELETE` /delete-user/[id]
 
 ***PROJECT***
 
 > Endpoint `https://our-chess-310913.et.r.appspot.com/api/project`
 
 `GET`  /api/project/get-all (Menampilkan list semua project)
 
 `GET`  /api/project/get/[id] (Menampilkan data project berdasarkan id)

 `POST` /api/project/add (create project baru)
 
 `PATCH` api/project/update/[id] (Edit parsial project)
 
 `PATCH` api/project/update/[id]/pin/[id] (Edit parsial project pin)
 `PATCH` api/project/deploy[projectId] (deploy project)
 
 `DELETE` api/project/delete/[id]
 
 
 
 **EXAMPLE USER**
  ----
 
 **Contoh Input  `GET`  /api/auth/get (Menampilkan list semua user)**
 ----
 
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
  `GET`  /api/auth/get/608e2c7fc3435e000bc27d4c (Menampilkan User By ID)**
  ----
  
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
`POST` /api/auth/register**
----

```
{
    "email": "harahap@gmail.com",
    "password":"xxxx",
    "name": "harahap",
    "gender":"man",
    "address": "address tester",
    "phone": "0945345345345354345"
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
----

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
----

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
----

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
 ----

**Contoh Input
 `GET`  /api/project/get-all (Menampilkan list semua project)**
 ----
 
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
 `GET`  /api/project/get-one/[id] (Menampilkan project By Id)**
 ----
 
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
 `GET`  /api/project/search?[query] (Menampilkan project By Id)**
 ----
 
 >note: query => * namaProject = padang
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
 `POST`  /api/project/add (Add Project)**
 ----
 
 ```
 headers : {
  Authorization : `Bearer: ${token}`
 }
 ```
 [![Contoh Input Project](https://i.postimg.cc/BQ4nj9hc/Deepin-Screenshot-select-area-20210504091955.png)](https://postimg.cc/xqp2Z7Vc)
 [![Contoh Input Project](https://i.postimg.cc/3wM6w713/Deepin-Screenshot-select-area-20210504092011.png)](https://postimg.cc/w1VFWCnr)
 [![Contoh Input Project](https://i.postimg.cc/t450yMhG/Deepin-Screenshot-select-area-20210604095317.png)](https://postimg.cc/xXcp3gx6)
 
 contoh Output
 ```
 {
    "status": "success",
    "message": "data create successfully",
    "data": {
        "lokasi": {
            "latitude": null,
            "longitude": null
        },
        "tglPlanning": "2021-05-03T10:59:34.458Z",
        "updatedAt": "2021-05-03T10:59:34.458Z",
        "_id": "608f7c003daf47153969376d",
        "namaProject": "Padang Sidimpuan",
        "namaSurveyor": "hasibuan",
        "alamatProject": "Medan sunggal Jl. SM Raja",
        "tglTarget": "2021-08-30T01:42:39.000Z",
        "tglDeploy": null,
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
                "_id": "608f7c003daf471539693772",
                "name": "pin 4",
                "speed": 12,
                "altitude": 10,
                "heading": 30,
                "curvesize": 1,
                "rotationdir": 10
            }
        ],
        "user": "608f76223daf47153969376c",
        "__v": 0
    }
}
  ```
  
**Contoh Input
 `PATCH`  /api/project/update/[id] (Update project (Spesifikasi field allowed))**
 ----
 
 ```
 headers : {
  Authorization : `Bearer: ${token}`
 }
 ```
 
 ```
 {
    "namaProject": "padang sidempuan edit",
    "alamatProject": "Medan sunggal Jl. SM Raja edit",
    "namaSurveyor": "hasibuan edit"
}
 ```
 
 contoh Output
 
 //PATCH
 
 ```
 {
    "status": "success",
    "message": "data update successfully",
    "data": {
        "lokasi": {
            "latitude": null,
            "longitude": null
        },
        "tglPlanning": "2021-05-03T10:59:34.458Z",
        "updatedAt": "2021-05-03T11:38:41.528Z",
        "_id": "608f7c003daf47153969376d",
        "namaProject": "padang sidempuan edit",
        "namaSurveyor": "hasibuan edit",
        "alamatProject": "Medan sunggal Jl. SM Raja edit",
        "tglTarget": "2021-08-30T01:42:39.000Z",
        "tglDeploy": null,
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
                "_id": "608f7c003daf471539693772",
                "name": "pin 4",
                "speed": 12,
                "altitude": 10,
                "heading": 30,
                "curvesize": 1,
                "rotationdir": 10
            }
        ],
        "user": "608f76223daf47153969376c",
        "__v": 0
    }
}
 ```
 
 **Contoh Input
 `PATCH`  /api/project/[projectId]/pin/[pinId] (Update project (Spesifikasi field allowed allowed input form-data))**
 ----
 
 ```
 headers : {
  Authorization : `Bearer: ${token}`
 }
 ```
 
this request allowed input form-data. upload image to preview pin project
 
 contoh Output
 
 ```
 {
    "status": "success",
    "message": "data update successfully",
    "data": "pin id: [pinId]"
}
 ``` 
 **Contoh Input
 `PATCH`  /api/project/deploy/[projectId](Deploy Project)**

```
 headers : {
  Authorization : `Bearer: ${token}`
 }
 ```

 ** Contoh Output

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
 `DELETE`  /api/project/deploy/[projectId] (Deploy project)**
 ----
 
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
 `DELETE`  /api/project/delete/[projectId] (Delete project)**
 ----
 
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
 `DELETE`  /api/project/delete/[projectId]/pin/[pinId] (Delete Pin project)**
 ----
 
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
  


