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
 
 `DELETE` api/project/delete/[id]
 
 
 
 **EXAMPLE USER**
 
 **Contoh Input  `GET`  /api/auth/get (Menampilkan list semua user)**
 
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

**Contoh Input
 `GET`  /api/project/get-all (Menampilkan list semua project)**
 
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
 
 ```
 headers : {
  Authorization : `Bearer: ${token}`
 }
 ```
 
 ```
 {
    "namaProject": "Padang Sidimpuan",
    "namaSurveyor": "hasibuan",
    "alamatProject": "Medan sunggal Jl. SM Raja",
    "tglTarget": "2021-08-30T01:42:39.000Z",
    "pin": [
        {
            "name": "pin 1",
            "koordinat"    : {
                "latitude" : 1, 
                "longitude" : 3
            },
            "speed":12,
            "altitude": 10,
            "heading": 30,
            "curvesize": 1,
            "rotationdir":10,
            "poi": {
                "poiStatus":true,
                "poiMode" :5,
                "poiLatitude":1,
                "poiLongtude":2,
                "poiAltiutde":6
            },
            "gimbalmode": {
                "disable": false,
                "focuspoi":true,
                "interpolate": 11
            },
            "intervalmode": {
                "disable": false,
                "seconda":2000,
                "meters":52
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
            }  
        },
        {
            "name": "pin 2",
            "koordinat"    : {
                "latitude" : 1, 
                "longitude" : 3
            },
            "speed":12,
            "altitude": 10,
            "heading": 30,
            "curvesize": 1,
            "rotationdir":10,
            "poi": {
                "poiStatus":false,
                "poiMode" :5,
                "poiLatitude":1,
                "poiLongtude":2,
                "poiAltiutde":6
            },
            "gimbalmode": {
                "disable": false,
                "focuspoi":true,
                "interpolate": 11
            },
            "intervalmode": {
                "disable": false,
                "seconda":2000,
                "meters":52
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
            }  
        },
        {
            "name": "pin 3",
            "koordinat"    : {
                "latitude" : 1, 
                "longitude" : 3
            },
            "speed":12,
            "altitude": 10,
            "heading": 30,
            "curvesize": 1,
            "rotationdir":10,
            "poi": {
                "poiStatus":true,
                "poiMode" :5,
                "poiLatitude":1,
                "poiLongtude":2,
                "poiAltiutde":6
            },
            "gimbalmode": {
                "disable": false,
                "focuspoi":true,
                "interpolate": 11
            },
            "intervalmode": {
                "disable": false,
                "seconda":2000,
                "meters":52
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
            }  
        },
        {
            "name": "pin 5",
            "koordinat"    : {
                "latitude" : 1, 
                "longitude" : 3
            },
            "speed":12,
            "altitude": 10,
            "heading": 30,
            "curvesize": 1,
            "rotationdir":10,
            "poi": {
                "poiStatus":true,
                "poiMode" :5,
                "poiLatitude":1,
                "poiLongtude":2,
                "poiAltiutde":6
            },
            "gimbalmode": {
                "disable": false,
                "focuspoi":true,
                "interpolate": 11
            },
            "intervalmode": {
                "disable": false,
                "seconda":2000,
                "meters":52
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
            }  
        },
        {
            "name": "pin 4",
            "koordinat"    : {
                "latitude" : 1, 
                "longitude" : 3
            },
            "speed":12,
            "altitude": 10,
            "heading": 30,
            "curvesize": 1,
            "rotationdir":10,
            "poi": {
                "poiStatus":true,
                "poiMode" :5,
                "poiLatitude":1,
                "poiLongtude":2,
                "poiAltiutde":6
            },
            "gimbalmode": {
                "disable": false,
                "focuspoi":true,
                "interpolate": 11
            },
            "intervalmode": {
                "disable": false,
                "seconda":2000,
                "meters":52
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
            }  
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
        "user": "608f76223daf47153969376c",
        "__v": 0
    }
}
  ```
  
**Contoh Input
 `PATCH`  /api/project/update/[id] (Update project (Spesifikasi field allowed))**
 
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
        "user": "608f76223daf47153969376c",
        "__v": 0
    }
}
 ```
 
 **Contoh Input
 `PATCH`  /api/project/[projectId]/pin/[pinId] (Update project (Spesifikasi field allowed))**
 
 ```
 headers : {
  Authorization : `Bearer: ${token}`
 }
 ```
 
 ```
 {
    "name": "pin 1 edit",
    "speed": 13,
    "poiStatus":"false",
    "latitude": -0.3,
    "poiMode":-10
}
 ```
 
 contoh Output
 
 ```
 {
    "status": "success",
    "message": "data update successfully",
    "data": "pin id: [pinId]"
}
 ```
 
 
 **Contoh Input
 `DELETE`  /api/project/delete/[projectId] (Update project (Spesifikasi field allowed))**
 
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
  


