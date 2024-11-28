var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "entry",
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
        "yaw": -1.813523782373995,
        "pitch": 0.009381179489597713,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.4061145834217523,
          "pitch": 0.20166412669791534,
          "rotation": 0.7853981633974483,
          "target": "1-bike-exercise"
        },
        {
          "yaw": -1.5846965852137238,
          "pitch": 0.19654614039198037,
          "rotation": 0.7853981633974483,
          "target": "2-grass"
        },
        {
          "yaw": -1.2871811564119113,
          "pitch": 0.28308427284640914,
          "rotation": 0.7853981633974483,
          "target": "3-toilet"
        },
        {
          "yaw": -1.8548615779488866,
          "pitch": 0.3117790791843955,
          "rotation": 5.497787143782138,
          "target": "4-music-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bike-exercise",
      "name": "bike exercise",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6366914107987611,
        "pitch": 0.10431470132209597,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.5065662524386259,
          "pitch": 0.5644204491648335,
          "rotation": 3.9269908169872414,
          "target": "0-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3360622976790584,
          "pitch": -0.10001364010897618,
          "title": "腳踏車",
          "text": "鍛鍊身體的好地方"
        }
      ]
    },
    {
      "id": "2-grass",
      "name": "grass",
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
        "yaw": -1.850405164533882,
        "pitch": 0.23911685003616512,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.850405164533882,
          "pitch": 0.23911685003616512,
          "rotation": 3.9269908169872414,
          "target": "0-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7951961934469978,
          "pitch": 0.06693950628142176,
          "title": "椰子樹",
          "text": "樹下很涼"
        }
      ]
    },
    {
      "id": "3-toilet",
      "name": "toilet",
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
        "yaw": 1.1558336353056973,
        "pitch": -0.022898349070700874,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.0821226653464464,
          "pitch": 0.2841428652512974,
          "rotation": 0.7853981633974483,
          "target": "0-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3277941905364887,
          "pitch": 0.01804749710801623,
          "title": "公廁",
          "text": "很多人會去"
        }
      ]
    },
    {
      "id": "4-music-stage",
      "name": "music stage",
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
      "faceSize": 1408,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03292404299633134,
          "pitch": 0.3318930490054264,
          "rotation": 8.63937979737193,
          "target": "0-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3379860192429849,
          "pitch": -0.05608190435994409,
          "title": "舞台",
          "text": "很多名人都來過"
        }
      ]
    }
  ],
  "name": "大安森林公園全景",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
