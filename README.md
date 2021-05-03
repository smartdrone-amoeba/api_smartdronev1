**API SmartDronev1**
----
**USER API**

* **URL**


> Endpoint `http://localhost:3001/api/auth`
 
 `GET`  /api/auth/get (Menampilkan list semua user)
 
 `GET`  /api/auth/get/[id] (Menampilkan data user berdasarkan id)

 `POST` /api/auth/register (register user baru)
 
 `POST`  /api/auth/login (Login untuk generate token JWT)
 
 `PATCH` /update-user/[id] (Edit parsial user)
 
 `DELETE` /delete-user/[id]
 
 
 
 **EXAMPLE**
 
 `GET`  /api/auth/get (Menampilkan list semua user)
 
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
  
  `GET`  /api/auth/get/608e2c7fc3435e000bc27d4c (Menampilkan User By ID)
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
