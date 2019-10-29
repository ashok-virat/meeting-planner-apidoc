define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/users/allUsers/:authToken",
    "title": "Get All Users",
    "version": "0.0.1",
    "group": "get",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a URl parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Users Are listed\",\n \"status\":200,\n \"data\": [\n            {\n           userId:\"string\",\n           resetId:\"string\",\n           firstName:\"string\",\n           lastName:\"string\",\n           userId:\"string\",\n           countrycode:\"number\",\n           accounttype:\"number\",\n           mobileNumber:\"number\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "get",
    "name": "GetApiV1UsersAllusersAuthtoken"
  },
  {
    "type": "post",
    "url": "/api/v1/users/createevent",
    "title": "create event",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purpose",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startMinute",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endminute",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Event Is Created Successfully\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              eventId:\"string\"\n              title:\"string\",\n              locatio :\"string\",\n              purpose:\"string\",\n              color:\"string\",\n              startDate:\"number\",\n              endDate:\"number\",\n              startMinute:\"number\",\n              endMinute:\"number\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersCreateevent"
  },
  {
    "type": "post",
    "url": "/api/v1/users/deleteevent",
    "title": "delete event",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Event Is Deleted Successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersDeleteevent"
  },
  {
    "type": "post",
    "url": "/api/v1/users/editevent",
    "title": "edit event",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Event Is Edited Successfully\",\n \"status\":200,\n \"data\": []  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersEditevent"
  },
  {
    "type": "post",
    "url": "/api/v1/users/getallevents",
    "title": "get all event",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Users Are Listed\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              eventId:\"string\"\n              title:\"string\",\n              locatio :\"string\",\n              purpose:\"string\",\n              color:\"string\",\n              startDate:\"number\",\n              endDate:\"number\",\n              startMinute:\"number\",\n              endMinute:\"number\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersGetallevents"
  },
  {
    "type": "post",
    "url": "/api/v1/users/getsingleevent",
    "title": "get single event",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Event Is Getting Successfully\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              eventId:\"string\"\n              title:\"string\",\n              locatio :\"string\",\n              purpose:\"string\",\n              color:\"string\",\n              startDate:\"number\",\n              endDate:\"number\",\n              startMinute:\"number\",\n              endMinute:\"number\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersGetsingleevent"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetcode",
    "title": "Password Reset",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Reset Code send successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersResetcode"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetpassword",
    "title": "Password Reset",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resetId",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Newpassword",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"Your Password Is Reset Successfully\",\n \"status\":200,\n \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signin",
    "title": "Signin",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"signin successfully\",\n \"status\":200,\n \"data\": [\n            {\n              userId:\"string\",\n              firstName:\"string\",\n              lastName:\"string\",\n              email:\"string\",\n              userId:\"string\",\n              accounttype:\"string\",\n              mobileNumbernumber:\"number\",\n              countrycode:\"number\"\n            }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":400/500/403,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSignin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup",
    "version": "0.0.1",
    "group": "post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countrycode",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AccountType",
            "description": "<p>of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\":false,\n \"message\":\"signup successfully\",\n \"status\":200,\n \"data\": [\n           {\n           userId:\"string\",\n           resetId:\"string\",\n           firstName:\"string\",\n           lastName:\"string\",\n           userId:\"string\",\n           countrycode:\"number\",\n           accounttype:\"number\",\n           mobileNumber:\"number\"\n           }\n         ]  \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\":true,\n  \"message\":\"Error Occured\",\n  \"status\":500/403/400,\n  \"data\":null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/route/route.js",
    "groupTitle": "post",
    "name": "PostApiV1UsersSignup"
  }
] });
