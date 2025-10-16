var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03107812294532586,
          "pitch": 0.22685497499595542,
          "rotation": 0,
          "target": "1-saln"
        },
        {
          "yaw": 1.7348788738686487,
          "pitch": 0.3715669422018131,
          "rotation": 0.7853981633974483,
          "target": "2-despacho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-saln",
      "name": "SALÓN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8658714681672013,
          "pitch": 0.2478148902308437,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.60160445543017,
          "pitch": 0.2305631652683111,
          "rotation": 0,
          "target": "4-bao-principal_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-despacho",
      "name": "DESPACHO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9839860819199657,
          "pitch": 0.29400856460244995,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormitorio-principal",
      "name": "DORMITORIO PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6666740292400073,
          "pitch": 0.18361235344652194,
          "rotation": 1.5707963267948966,
          "target": "4-bao-principal_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao-principal_1",
      "name": "BAÑO PRINCIPAL_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1245491617312382,
        "pitch": 0.2784015167380183,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.0137153581156646,
          "pitch": 0.2551601049239025,
          "rotation": 5.497787143782138,
          "target": "3-dormitorio-principal"
        },
        {
          "yaw": 2.5486545485952252,
          "pitch": 0.20569928530055037,
          "rotation": 0.7853981633974483,
          "target": "1-saln"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "IQevo-LOFT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
