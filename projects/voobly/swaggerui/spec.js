var spec = {
  "openapi": "3.1.0",
  "info": {
    "title": "Voobly API",
    "description": "Voobly is a platform that lets you play PC games with friends or a competitive community. It supports peer-to-peer connections for a multiplayer experience. You can play casual games with friends, or competitively on ranked ladders. \n\nThese APIs let you pull data out of Voobly. You can get information about individual users or games, or statistics for ranked ladders. For example, you may want to display the top 10 rated players for a game, or get statistics about a player.\n\nYou must get an access key from Voobly to use these APIs. Add the key as a parameter in your calls. Contact Voobly support to receive an access key.",
    "version": "1.0.0"
  },
  "externalDocs": {
    "description": "Find out more about Voobly",
    "url": "https://www.voobly.com/"
  },
  "servers": [
    {
      "url": "http://www.voobly.com/api"
    }
  ],
  "tags": [
    {
      "name": "Validation",
      "description": "Check whether your access key is valid"
    },
    {
      "name": "Users",
      "description": "Find player statistics for Voobly user accounts"
    },
    {
      "name": "Ladder",
      "description": "Retrieve lists of ranked users for a game"
    }
  ],
  "paths": {
    "/validate": {
      "get": {
        "tags": [
          "Validation"
        ],
        "summary": "Checks whether your access key is valid",
        "description": "Developer access keys expire after a certain number of days. You may need to verify that your key is still valid, or if you need to renew it. Contact Voobly Support to renew your key.",
        "operationId": "validate",
        "responses": {
          "200": {
            "description": "valid-key"
          },
          "400": {
            "description": "Invalid ID supplied"
		  }
        }
      }
    },
    "/finduser/$displayname": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get user ID by user nickname",
        "description": "Find a user's ID by their display name. This lets you retrieve additional information about their account by using their user ID (uid) in other requests. An example URI would be https://www.voobly.com/api/user/Michael_Jordan?key=xxxxxxxxxx if the top of the NBA2k ladder was the user `Michael_Jordan`.",
        "operationId": "findUser",
        "responses": {
          "200": {
            "description": "success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Name"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid status value"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    },
    "/findusers/$displayname,$displayname2": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get multiple user IDs by user nicknames",
        "description": "Find multiple users' IDs by their display names. This lets you retrieve additional information about their account by using their user ID (uid) in other requests. An example URI would be https://www.voobly.com/api/user/Michael_Jordan,Dennis_Rodman,Scottie_Pippen?key=xxxxxxxxxx if the top of the NBA2k ladder was the user `Michael_Jordan`.",
        "operationId": "findUsers",
        "responses": {
          "200": {
            "description": "success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Names"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid status value"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    },
    "/user/$userid": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Get account information for a Voobly user",
        "description": "Input a user ID to retrieve information about the Voobly user account. For example, you can find user ID, last login date, or selected country. This API does not provide player statistics for games. Example URI = http://www.voobly.com/api/user/23?key=xxxxxxxxxx.",
        "operationId": "userSummary",
        "responses": {
          "200": {
            "description": "success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid status value"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    },
    "/lobbies/$gameid": {
      "get": {
        "tags": [
          "Ladder"
        ],
        "summary": "Get a list of lobbies for a game",
        "description": "Retrieves a list of lobbies for a game, with basic information about the lobby. Games on Voobly have a list of different lobbies that categorize the different game modes or game formats available to play. For example, for the game of basketball, Voobly could have lobbies for the NBA, WNBA, international leagues outside the USA, or college leagues.  Within each lobby there can be multiple ladders. For example, the NBA lobby could have ladders for 1v1, 3 on 3, dunk contests, and so forth. Example URI = http://www.voobly.com/api/lobbies/13?key=xxxxxxxxxx",
        "operationId": "gameLobby",
        "responses": {
          "200": {
            "description": "success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Lobby"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/ladder/$ladderid": {
      "get": {
        "tags": [
          "Ladder"
        ],
        "summary": "Get information for a specific ranked ladder",
        "description": "Retrieve player data from a ladder, like their display_name, wins/losses, and so forth.",
        "operationId": "ladderStats",
        "responses": {
          "200": {
            "description": "success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Ladder"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Name": {
        "type": "object",
        "properties": {
          "uid": {
            "type": "integer",
            "description": "The identifying number for the Voobly user account.",
            "format": "int64",
            "example": 8675309
          },
          "display_name": {
            "type": "string",
            "description": "The username or nickname for the Voobly user account.",
            "example": "Michael_Jordan"
          }
        }
      },
      "Names": {
        "type": "object",
        "properties": {
          "uid": {
            "type": "integer",
            "description": "The identifying number for the Voobly user account.",
            "format": "int64",
            "example": 8675309
          },
          "display_name": {
            "type": "string",
            "description": "The username or nickname for the Voobly user account.",
            "example": "Michael_Jordan"
          }
        }
      },
      "User": {
        "type": "object",
        "properties": {
          "uid": {
            "type": "integer",
            "description": "The identifying number for the Voobly user account.",
            "format": "int64",
            "example": 8675309
          },
          "display_name": {
            "type": "string",
            "description": "The username or nickname for the Voobly user account. If the user has joined an official team created on Voobly, Users can change their display name to any name that is not already taken. If the user is part of a team, do not include the team tag in your request.",
            "example": null
          },
          "name": {
            "type": "string",
            "description": "The original name that the user signed up with.",
            "example": "Michael_Jordan"
          },
          "account_created": {
            "type": "integer",
            "description": "The date that the user account was created.",
            "format": "int64",
            "example": 1182149865
          },
          "last_login": {
            "type": "integer",
            "description": "The date that the user last logged into their account.",
            "format": "int64",
            "example": 1255417337
          },
          "sex": {
            "type": "integer",
            "description": "The selected sex of the user, either 0 or 1.",
            "format": "int32",
            "example": 0
          },
          "nationid": {
            "type": "string",
            "description": "The country code that correlates with the IP address used to create the account.",
            "format": "string",
            "example": "us"
          },
          "bday": {
            "type": "integer",
            "description": "The day selected in the user's birthday.",
            "format": "int32",
            "example": 3
          },
          "bmonth": {
            "type": "integer",
            "description": "The month selected in the user's birthday.",
            "format": "int32",
            "example": 12
          },
          "byear": {
            "type": "integer",
            "description": "The year selected in the user's birthday.",
            "format": "int32",
            "example": 1999
          },
          "level": {
            "type": "integer",
            "description": "Indicates if the user has Voobly staff permissions, or if they have a paid account.",
            "format": "int32",
            "example": 29
          },
          "nation": {
            "type": "string",
            "description": "The country that the user selected to appear on their profile. This flag displays in their profile details on voobly.com and in the Voobly client.",
            "format": "string",
            "example": "us"
          },
          "imagelarge": {
            "type": "string",
            "description": "The filepath on the Voobly server of the profile image uploaded by the user. This image displays in the user's profile on voobly.com.",
            "format": "string",
            "example": "/files/view/7068/3zy8h2kp3qq5ed3is2c37nw00uw3noyo"
          },
          "imagesmall": {
            "type": "string",
            "description": "The filepath on the Voobly server of the smaller profile image. This image displays in the user's profile on the Voobly client.",
            "format": "string",
            "example": "/files/view/65009/w57tdcefdmhsz7uvc4brqxyz8dpe0tgo"
          }
        }
      },
      "Lobby": {
        "type": "object",
        "properties": {
          "lobbyid": {
            "type": "integer",
            "format": "int32",
            "description": "A system-defined identifier for the game lobby.",
            "example": 69
          },
          "name": {
            "type": "string",
            "description": "The display name of the lobby.",
            "example": "NBA"
          },
          "players_online": {
            "type": "integer",
            "format": "int32",
            "description": "The number of players that have currently joined the lobby.",
            "example": 2346
          },
          "max_players": {
            "type": "integer",
            "format": "int32",
            "description": "The limit of players that can join the lobby.",
            "example": 5000
          },
          "ladders": {
            "type": "array",
            "description": "An array of system identifiers for the ranked ladders of the game lobby. A single lobby can have multiple ladders for types of games. For example, the NBA lobby could have ladders for 1v1 matches, a dunk contest, 3 on 3, and so forth.",
            "example": "14|23|88"
          }
        }
      },
      "Ladder": {
        "type": "object",
        "properties": {
          "rank": {
            "type": "integer",
            "format": "int32",
            "description": "The player's position on the ladder",
            "example": 1
          },
          "uid": {
            "type": "integer",
            "format": "int32",
            "description": "The player's user ID of their Voobly account.",
            "example": 23
          },
          "display_name": {
            "type": null,
            "format": null,
            "description": "The username or nickname for the Voobly user account. If the user has joined an official team created on Voobly, Users can change their display name to any name that is not already taken. If the user is part of a team, do not include the team tag in your request.",
            "example": null
          },
          "rating": {
            "type": "integer",
            "format": "int64",
            "description": "The player's rate; the amount of points that they've won by winning/losing games.",
            "example": 2337
          },
          "wins": {
            "type": "integer",
            "format": "int32",
            "description": "The total number of wins the player has on this ladder.",
            "example": 1337
          },
          "losses": {
            "type": "integer",
            "format": "int32",
            "description": "The total number of losses the player has on this ladder.",
            "example": 669
          },
          "streak": {
            "type": "integer",
            "format": "int32",
            "description": "The number of consecutive wins or losses. If the player has most recently lost multiple games in a row, this number will display the number of consecutive losses in red. It shows consecutive wins in green.",
            "example": 9
          }
        }
      }
    },
    "requestBodies": {
      "Pet": {
        "description": "Pet object that needs to be added to the store",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Pet"
            }
          },
          "application/xml": {
            "schema": {
              "$ref": "#/components/schemas/Pet"
            }
          }
        }
      },
      "UserArray": {
        "description": "List of user object",
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/User"
              }
            }
          }
        }
      }
    }
  }
}
	
