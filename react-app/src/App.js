import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';

const unplashImages = [
  {
      "id": "m-RMV1ahbe4",
      "created_at": "2020-08-02T00:57:40-04:00",
      "updated_at": "2020-08-02T18:36:51-04:00",
      "promoted_at": "2020-08-02T11:42:01-04:00",
      "width": 4016,
      "height": 6016,
      "color": "#A8A1C6",
      "description": "A water lily covered in rain drops, surrounded by mottled lily pads. Many stems can be seen under the water.",
      "alt_description": "purple and white flower on water",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1596343938322-aac5f2c601f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1596343938322-aac5f2c601f5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1596343938322-aac5f2c601f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1596343938322-aac5f2c601f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1596343938322-aac5f2c601f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/m-RMV1ahbe4",
          "html": "https://unsplash.com/photos/m-RMV1ahbe4",
          "download": "https://unsplash.com/photos/m-RMV1ahbe4/download",
          "download_location": "https://api.unsplash.com/photos/m-RMV1ahbe4/download"
      },
      "categories": [],
      "likes": 48,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "K-qhbE16NWs",
      "created_at": "2020-08-01T21:42:07-04:00",
      "updated_at": "2020-08-02T18:46:38-04:00",
      "promoted_at": null,
      "width": 5194,
      "height": 3453,
      "color": "#E8CEF2",
      "description": "Allium, or onion flowers, are good for attracting bees and other pollinators to your garden. ",
      "alt_description": "purple flower in tilt shift lens",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1596332154234-770abc6bf454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1596332154234-770abc6bf454?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1596332154234-770abc6bf454?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1596332154234-770abc6bf454?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1596332154234-770abc6bf454?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/K-qhbE16NWs",
          "html": "https://unsplash.com/photos/K-qhbE16NWs",
          "download": "https://unsplash.com/photos/K-qhbE16NWs/download",
          "download_location": "https://api.unsplash.com/photos/K-qhbE16NWs/download"
      },
      "categories": [],
      "likes": 0,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "H1mrh4lhmHA",
      "created_at": "2020-08-01T21:31:21-04:00",
      "updated_at": "2020-08-02T18:46:38-04:00",
      "promoted_at": null,
      "width": 3870,
      "height": 5798,
      "color": "#CBCCD0",
      "description": "This butterfly has many names: white tree nymph, large tree nymph, rice paper butterfly, paper kite butterfly. The species name is Idea leuconoe. They have a wide wingspan of 12 to 14 mm and originate from Southeast Asia. ",
      "alt_description": "black and white butterfly perched on green leaf in close up photography during daytime",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1596331351681-82d32e24e784?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1596331351681-82d32e24e784?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1596331351681-82d32e24e784?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1596331351681-82d32e24e784?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1596331351681-82d32e24e784?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/H1mrh4lhmHA",
          "html": "https://unsplash.com/photos/H1mrh4lhmHA",
          "download": "https://unsplash.com/photos/H1mrh4lhmHA/download",
          "download_location": "https://api.unsplash.com/photos/H1mrh4lhmHA/download"
      },
      "categories": [],
      "likes": 1,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "N1D07ql88eo",
      "created_at": "2020-07-30T02:41:43-04:00",
      "updated_at": "2020-07-30T05:17:18-04:00",
      "promoted_at": null,
      "width": 5490,
      "height": 3664,
      "color": "#E0DBE0",
      "description": "This is a male Blue Dasher dragonfly sitting atop a tropical water lily. The dragonfly's wings are translucent, like a stained glass window, which is why the gold bits of the his wing can be seen in his shadow.",
      "alt_description": "purple flower with green leaves",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1596090444598-d50b4675ac5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1596090444598-d50b4675ac5c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1596090444598-d50b4675ac5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1596090444598-d50b4675ac5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1596090444598-d50b4675ac5c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/N1D07ql88eo",
          "html": "https://unsplash.com/photos/N1D07ql88eo",
          "download": "https://unsplash.com/photos/N1D07ql88eo/download",
          "download_location": "https://api.unsplash.com/photos/N1D07ql88eo/download"
      },
      "categories": [],
      "likes": 3,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "lxJRMcokQ1g",
      "created_at": "2020-07-26T03:02:30-04:00",
      "updated_at": "2020-07-27T20:48:29-04:00",
      "promoted_at": null,
      "width": 6016,
      "height": 4016,
      "color": "#BBBFC0",
      "description": "The Acanthus, or Bear's Breeches, was the inspiration for the Corinthian column. Stylized depictions of Acanthus flowers and leaves are common in classical architecture and furniture. This is Syrian Bear's Breeches, a more purple variety native to Syria and Turkey.",
      "alt_description": "purple and white flowers in tilt shift lens",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1595745512932-6c69fc3069e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1595745512932-6c69fc3069e3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1595745512932-6c69fc3069e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1595745512932-6c69fc3069e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1595745512932-6c69fc3069e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/lxJRMcokQ1g",
          "html": "https://unsplash.com/photos/lxJRMcokQ1g",
          "download": "https://unsplash.com/photos/lxJRMcokQ1g/download",
          "download_location": "https://api.unsplash.com/photos/lxJRMcokQ1g/download"
      },
      "categories": [],
      "likes": 3,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "Hpd6sWZ6D6c",
      "created_at": "2020-07-26T02:01:44-04:00",
      "updated_at": "2020-07-27T20:42:43-04:00",
      "promoted_at": null,
      "width": 3741,
      "height": 5604,
      "color": "#BDC4F2",
      "description": "This is a tall bearded iris called \"Leaps and Bounds\".",
      "alt_description": "white flower in tilt shift lens",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1595743221667-ec60c2c0c332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1595743221667-ec60c2c0c332?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1595743221667-ec60c2c0c332?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1595743221667-ec60c2c0c332?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1595743221667-ec60c2c0c332?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/Hpd6sWZ6D6c",
          "html": "https://unsplash.com/photos/Hpd6sWZ6D6c",
          "download": "https://unsplash.com/photos/Hpd6sWZ6D6c/download",
          "download_location": "https://api.unsplash.com/photos/Hpd6sWZ6D6c/download"
      },
      "categories": [],
      "likes": 5,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "DrNCgf5RSpw",
      "created_at": "2020-07-25T02:50:16-04:00",
      "updated_at": "2020-07-27T20:23:46-04:00",
      "promoted_at": null,
      "width": 6016,
      "height": 4016,
      "color": "#99C5F2",
      "description": "The Geisel Library may be the most recognized example of Brutalist architecture. The building is named for local author Theodor Seuss Geisel, better known as Dr. Seuss. The concrete piers of the building represent hands and the glassed-in floors represent books. Built in 1970, the Geisel Library is part of University of San Diego. The architect, William Pereira, created other famous California buildings including the Transamerica Pyramid in San Francisco. Brutalist architecture was popular in the 1950's to mid '70s, known for heavy concrete structures in harsh, abstract styles.",
      "alt_description": "white concrete building under blue sky during daytime",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1595658511703-2cad160de181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1595658511703-2cad160de181?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1595658511703-2cad160de181?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1595658511703-2cad160de181?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1595658511703-2cad160de181?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/DrNCgf5RSpw",
          "html": "https://unsplash.com/photos/DrNCgf5RSpw",
          "download": "https://unsplash.com/photos/DrNCgf5RSpw/download",
          "download_location": "https://api.unsplash.com/photos/DrNCgf5RSpw/download"
      },
      "categories": [],
      "likes": 4,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "euyM4m1cCQE",
      "created_at": "2020-07-25T01:57:35-04:00",
      "updated_at": "2020-07-27T20:23:46-04:00",
      "promoted_at": null,
      "width": 6016,
      "height": 4016,
      "color": "#140F0C",
      "description": "Cherry blossom branches against a cloudy blue sky.",
      "alt_description": "pink cherry blossom tree during daytime",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1595656539426-2a3c91a7683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1595656539426-2a3c91a7683d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1595656539426-2a3c91a7683d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1595656539426-2a3c91a7683d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1595656539426-2a3c91a7683d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/euyM4m1cCQE",
          "html": "https://unsplash.com/photos/euyM4m1cCQE",
          "download": "https://unsplash.com/photos/euyM4m1cCQE/download",
          "download_location": "https://api.unsplash.com/photos/euyM4m1cCQE/download"
      },
      "categories": [],
      "likes": 1,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "bDVJ7j5sTPs",
      "created_at": "2020-07-25T00:40:21-04:00",
      "updated_at": "2020-07-28T01:32:16-04:00",
      "promoted_at": null,
      "width": 5684,
      "height": 3852,
      "color": "#14100F",
      "description": "Seagulls flying over the waves in front of the last remaining bridge at National Bridges State Beach. In 1970, there were 2 bridges. In 1905, there were 3. Back then, this formation resembled a long rock wall with 3 holes. The innermost bridge collapsed during a storm in 1980. The park rangers held a wake. There's a great article at http://www.mobileranger.com/santacruz/arch/",
      "alt_description": "birds flying over the sea during daytime",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1595651510069-66b055b9c38f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1595651510069-66b055b9c38f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1595651510069-66b055b9c38f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1595651510069-66b055b9c38f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1595651510069-66b055b9c38f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/bDVJ7j5sTPs",
          "html": "https://unsplash.com/photos/bDVJ7j5sTPs",
          "download": "https://unsplash.com/photos/bDVJ7j5sTPs/download",
          "download_location": "https://api.unsplash.com/photos/bDVJ7j5sTPs/download"
      },
      "categories": [],
      "likes": 3,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  },
  {
      "id": "QDHP405kFY0",
      "created_at": "2020-07-24T21:44:15-04:00",
      "updated_at": "2020-07-28T01:02:37-04:00",
      "promoted_at": "2020-07-25T08:09:02-04:00",
      "width": 5345,
      "height": 3568,
      "color": "#C9980E",
      "description": "This is a tropical day-blooming water lily called \"Bob Trickett\". There is a golden dragonfly near the top of the petals and a small bee-like creature among the yellow stamens. ",
      "alt_description": "white and purple water lily in bloom",
      "urls": {
          "raw": "https://images.unsplash.com/photo-1595641029619-12ab07cde61f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "full": "https://images.unsplash.com/photo-1595641029619-12ab07cde61f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "regular": "https://images.unsplash.com/photo-1595641029619-12ab07cde61f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "small": "https://images.unsplash.com/photo-1595641029619-12ab07cde61f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0",
          "thumb": "https://images.unsplash.com/photo-1595641029619-12ab07cde61f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE1NDA5Nn0"
      },
      "links": {
          "self": "https://api.unsplash.com/photos/QDHP405kFY0",
          "html": "https://unsplash.com/photos/QDHP405kFY0",
          "download": "https://unsplash.com/photos/QDHP405kFY0/download",
          "download_location": "https://api.unsplash.com/photos/QDHP405kFY0/download"
      },
      "categories": [],
      "likes": 55,
      "liked_by_user": false,
      "current_user_collections": [],
      "sponsorship": null,
      "user": {
          "id": "ffBZvkyYveA",
          "updated_at": "2020-08-03T09:03:48-04:00",
          "username": "viazavier",
          "name": "Laura Ockel",
          "first_name": "Laura",
          "last_name": "Ockel",
          "twitter_username": "ViaZavier",
          "portfolio_url": "http://lauraockel.com",
          "bio": "Co-founder and game designer for Tesseract Mobile, an Android app design firm specializing in games.  When I'm not working, I'm taking pictures, usually macros, flowers, or urbex photography.",
          "location": "Saint Louis, Missouri",
          "links": {
              "self": "https://api.unsplash.com/users/viazavier",
              "html": "https://unsplash.com/@viazavier",
              "photos": "https://api.unsplash.com/users/viazavier/photos",
              "likes": "https://api.unsplash.com/users/viazavier/likes",
              "portfolio": "https://api.unsplash.com/users/viazavier/portfolio",
              "following": "https://api.unsplash.com/users/viazavier/following",
              "followers": "https://api.unsplash.com/users/viazavier/followers"
          },
          "profile_image": {
              "small": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1458967317512-489d3d0549b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
          },
          "instagram_username": "lauraockel",
          "total_collections": 29,
          "total_likes": 1616,
          "total_photos": 139,
          "accepted_tos": true
      }
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gallery unplashImages={unplashImages}/>
      </div>
    );
  }
}

export default App;
