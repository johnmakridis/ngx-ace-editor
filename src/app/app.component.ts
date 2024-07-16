import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgxAceEditorLibrary';

  editorOptions = {
    showPrintMargin: false,
    wrap: true
  };

  test = JSON.stringify({
    ip_address: '139.144.52.241',
    comments: 'executing random requests to find vulnerabilities',
    last_seen: '2023-12-05T15:38:36.000Z',
    blacklisted: true,
    meta: null,
    logs: [
      {
        id: 181036,
        level: 'warn',
        message: 'GET / 403 0ms',
        meta: {
          req: {
            'url': '/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'x-cloud-trace-context': '229ca603b7fa944c9c817cedd0c402ab/11742599309066334686',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '0600e8ce-5d96-4141-8996-278cd6cf36bd',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': 'fa8291236e47a2b39f0151984e80e7da',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'Other',
                  'version': '0'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:56:02.000Z'
      },
      {
        id: 181035,
        level: 'warn',
        message: 'GET / 403 1ms',
        meta: {
          req: {
            'url': '/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'x-cloud-trace-context': '75ed577f146b0e83ca0e76ce84b113a4/5520599630251392847',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': '333cae9c-810e-43cf-836c-80dced653900',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': 'fa8291236e47a2b39f0151984e80e7da',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'Other',
                  'version': '0'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:56:01.000Z'
      },
      {
        id: 181033,
        level: 'warn',
        message: 'GET /localstart.html 403 1ms',
        meta: {
          req: {
            'url': '/localstart.html',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '17b9a62fa6e4558a5714ad4f7ac470d7/12466009223254640318',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/localstart.html',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': '8f6cd3ec-c078-4331-9e32-9c1779071c7f',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:55.000Z'
      },
      {
        id: 181032,
        level: 'warn',
        message: 'GET /indice.shtml 403 0ms',
        meta: {
          req: {
            'url': '/indice.shtml',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'e9ec2ea8d8d149b1cd951a8e37ef5f8d/403696194548685376',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/indice.shtml',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '233bc2f9-59de-400c-ab5f-6dbd7962110c',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:55.000Z'
      },
      {
        id: 181031,
        level: 'warn',
        message: 'GET /admin.pl 403 1ms',
        meta: {
          req: {
            'url': '/admin.pl',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'f1d33d3d49d572a4441d282a3963d34e/17571381258250375199',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/admin.pl',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': '146f01eb-df07-4889-8f6d-5cae617c4141',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:55.000Z'
      },
      {
        id: 181034,
        level: 'warn',
        message: 'GET /menu.jsa 403 0ms',
        meta: {
          req: {
            'url': '/menu.jsa',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'dd59c6db9d09658f265c652be278cd0a/8939919818079336683',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/menu.jsa',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '9465a694-042b-442a-8d34-7e384186e9a4',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:55.000Z'
      },
      {
        id: 181027,
        level: 'warn',
        message: 'GET /home.cfm 403 0ms',
        meta: {
          req: {
            'url': '/home.cfm',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '7c4b6fbb5fe058deb8e9ef54bbb9cbfe/14292806983867471596',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/home.cfm',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'bf21fb98-d9e4-40f4-8981-c2f99f4ba15e',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:54.000Z'
      },
      {
        id: 181026,
        level: 'warn',
        message: 'GET /+CSCOE+/logon.html 403 0ms',
        meta: {
          req: {
            'url': '/+CSCOE+/logon.html',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'f8863d69ff557f63202e9dceecf7832a/10001428550350372477',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/+CSCOE+/logon.html',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'abcdc02c-c193-4716-89e5-c7c9ea4de059',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:54.000Z'
      },
      {
        id: 181028,
        level: 'warn',
        message: 'GET /CFIDE/componentutils/ 403 0ms',
        meta: {
          req: {
            'url': '/CFIDE/componentutils/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '80cdb5210c5f39da642125efaeecbb28/4010854399150292224',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/CFIDE/componentutils/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '64aac0d8-9993-44c8-8e9f-1f4cbcf3b895',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:54.000Z'
      },
      {
        id: 181025,
        level: 'warn',
        message: 'GET /admin.html 403 0ms',
        meta: {
          req: {
            'url': '/admin.html',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'f1b68be76960567d8989381dcebb2849/1411419008356145433',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/admin.html',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '175e5c45-734f-4bd7-b80e-38e82cdbf069',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:54.000Z'
      },
      {
        id: 181030,
        level: 'warn',
        message: 'GET /inicio.cgi 403 1ms',
        meta: {
          req: {
            'url': '/inicio.cgi',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'b397c39b14ab92fa22145c61dfd363cf/5016374206872491513',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/inicio.cgi',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': '38e35f92-de14-4216-becb-4201ba69de71',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:54.000Z'
      },
      {
        id: 181029,
        level: 'warn',
        message: 'GET /admin.cgi 403 0ms',
        meta: {
          req: {
            'url': '/admin.cgi',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '1f829f880675c571ff42256450dbf63f/6658928161693884001',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/admin.cgi',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '8a1b57da-2336-4e72-8a8b-eb679030f43a',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:54.000Z'
      },
      {
        id: 181024,
        level: 'warn',
        message: 'GET /dana-na/nc/nc_gina_ver.txt 403 0ms',
        meta: {
          req: {
            'url': '/dana-na/nc/nc_gina_ver.txt',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '64b269ba85cb51a022294b8353ecfdd9/1055133644767534279',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/dana-na/nc/nc_gina_ver.txt',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'fcc89ac3-daf5-47b7-9a50-778da20382f5',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:54.000Z'
      },
      {
        id: 181023,
        level: 'warn',
        message: 'GET /base.jhtml 403 0ms',
        meta: {
          req: {
            'url': '/base.jhtml',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'f84c552d23f46fb8b5e0d227e28fd03c/17831574342901093494',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/base.jhtml',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '9bf9d6fa-b227-4d65-8fca-7a6b441e6695',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181022,
        level: 'warn',
        message: 'GET /dana-cached/hc/HostCheckerInstaller.osx 403 0ms',
        meta: {
          req: {
            'url': '/dana-cached/hc/HostCheckerInstaller.osx',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '49a13fc5074cf290115c2812f4133302/4293410309987373422',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/dana-cached/hc/HostCheckerInstaller.osx',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '5e6c17d8-d6ab-4ddc-b4b2-822c403d7fbf',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181021,
        level: 'warn',
        message: 'GET /CFIDE/componentutils/ 403 0ms',
        meta: {
          req: {
            'url': '/CFIDE/componentutils/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '0a16574e3aedac57e39046e7dd40d399/4449392011931242488',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/CFIDE/componentutils/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '3a767576-68ef-4797-a69b-9f829cbb1a40',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181008,
        level: 'warn',
        message: 'GET /base.jhtml 403 0ms',
        meta: {
          req: {
            'url': '/base.jhtml',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '988707745958ce66954933d4a8f4666c/12047484936280654653',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/base.jhtml',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '865c8f43-d457-41d7-b452-1955debb46c1',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181007,
        level: 'warn',
        message: 'GET /user 403 0ms',
        meta: {
          req: {
            'url': '/user',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'c3425ef075e27a5d8114652fd5f5b987/4834374994408039755',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/user',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '1af319ee-d092-4671-a62e-4d2091b66265',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181013,
        level: 'warn',
        message: 'GET /human.aspx 403 0ms',
        meta: {
          req: {
            'url': '/human.aspx',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '8d842a59416b0103c3b196e0a1be0ef5/1357081211094502028',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/human.aspx',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'f7cab520-beca-4b79-8529-55854a317a94',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181018,
        level: 'warn',
        message: 'GET /human.aspx 403 1ms',
        meta: {
          req: {
            'url': '/human.aspx',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '67dc3f65aae52049eb17c0cc8efc828a/7701990138222923548',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/human.aspx',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': '2a3c9a34-2cc4-478d-bb98-ee700b04b264',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181019,
        level: 'warn',
        message: 'GET /admin.aspx 403 0ms',
        meta: {
          req: {
            'url': '/admin.aspx',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '070fbadd15421e02ebaf080c9218862f/13828574215920270647',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/admin.aspx',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '7ef9061e-cd58-4070-8b4c-8d9f34817d99',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181020,
        level: 'warn',
        message: 'GET /home.cfm 403 0ms',
        meta: {
          req: {
            'url': '/home.cfm',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'ddd51e6fe21b3233ae25ab920baef572/14631366403308698171',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/home.cfm',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '0a590d53-324b-4155-89d2-6fa85e6671e7',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181014,
        level: 'warn',
        message: 'GET /owa/ 403 0ms',
        meta: {
          req: {
            'url': '/owa/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'd067de7aa7a32860db4e10a06af2a2ec/14778471679261835249',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/owa/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '2525ee93-dd90-42fc-9b59-c7dfb6c06e6f',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181006,
        level: 'warn',
        message: 'GET /indice.cfm 403 0ms',
        meta: {
          req: {
            'url': '/indice.cfm',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'f43c9ac7ce77fe2f238bd3e988330af1/10602892978335347489',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/indice.cfm',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '36ca4f4b-071a-4bf6-853d-237a7bb70d6d',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181015,
        level: 'warn',
        message: 'GET /admin.html 403 0ms',
        meta: {
          req: {
            'url': '/admin.html',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '3ba0646bd488c02b7b585d1bd7de309b/17421678562543437492',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/admin.html',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '9acad865-ea80-4aec-b055-34be3f704b90',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181012,
        level: 'warn',
        message: 'GET /inicio.jsa 403 1ms',
        meta: {
          req: {
            'url': '/inicio.jsa',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'e45fc53f01372ed38adb7468ce68daf6/15679880997378678231',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/inicio.jsa',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': 'd05c8167-6b33-4490-b0cd-3b3db80c06d5',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181016,
        level: 'warn',
        message: 'GET /+CSCOE+/logon.html 403 1ms',
        meta: {
          req: {
            'url': '/+CSCOE+/logon.html',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '5ccfb02401b00346f105283dcddbcafd/1593141596734837288',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/+CSCOE+/logon.html',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': '6d4538b6-6b1a-455a-94ec-391dbd12c623',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181009,
        level: 'warn',
        message: 'GET / 403 0ms',
        meta: {
          req: {
            'url': '/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'ad28b76216c1177286cd5a8d8a0833f7/4588968681394502614',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'c290ac83-d3ea-477e-a51b-fdd92f768127',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181011,
        level: 'warn',
        message: 'GET / 403 0ms',
        meta: {
          req: {
            'url': '/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'd34ae6d6a92e7b2865e6da52d278ee44/7602075098546070165',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'd3c3ea25-c925-4cd2-be18-4277025ab1ef',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181010,
        level: 'warn',
        message: 'GET /dana-na/nc/nc_gina_ver.txt 403 0ms',
        meta: {
          req: {
            'url': '/dana-na/nc/nc_gina_ver.txt',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'd3d506073750e3ae5a35c6c6fc5b463d/18211565038181555762',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/dana-na/nc/nc_gina_ver.txt',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '28f2f316-c4a1-48e2-bafb-17348d532ef7',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 181017,
        level: 'warn',
        message: 'GET /owa/ 403 0ms',
        meta: {
          req: {
            'url': '/owa/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '2a881670caf7db314d31060c4f3e389d/11240044673189734452',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/owa/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '6ebb4c30-7d90-48b0-adf5-768939ff034b',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:53.000Z'
      },
      {
        id: 180976,
        level: 'warn',
        message: 'GET /HNAP1 403 1ms',
        meta: {
          req: {
            'url': '/HNAP1',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'e9ed588d7d8a788e7c52761498b52100/14659763520564438098',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/HNAP1',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 1,
          user_id: null,
          account_id: null,
          session: {
            'id': 'c19e2814-7f9f-4969-ae0a-1c79a5b55b8f',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180994,
        level: 'warn',
        message: 'GET /docs/cplugError.html/ 403 0ms',
        meta: {
          req: {
            'url': '/docs/cplugError.html/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'f4f00482be39529f2d3f30fc065905dd/12340265771468826000',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/docs/cplugError.html/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'dd609876-bd12-4e1d-ae0f-485c008b8f27',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 181001,
        level: 'warn',
        message: 'GET /admin.aspx 403 0ms',
        meta: {
          req: {
            'url': '/admin.aspx',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '7c4ba45a87e8a27987c2b3a4d707385e/16661421211835988749',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/admin.aspx',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'c911b378-ef5e-47c0-91e7-ebf8ef2fa263',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180999,
        level: 'warn',
        message: 'HEAD / 403 0ms',
        meta: {
          req: {
            'url': '/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '0b830305b1686fc5ce980dd073c4db53/14103499007936097137',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'HEAD',
            'httpVersion': '1.1',
            'originalUrl': '/',
            'query': {}
          },
          res: {
            'statusCode': 403
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'd528ffe9-1934-45dc-87b7-faeadece605c',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180980,
        level: 'warn',
        message: 'GET / 403 0ms',
        meta: {
          req: {
            'url': '/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'd10e9d940b69c55d21c6ae549a051d3f/14930385693792227800',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '0b021d46-1ef3-4d04-a17b-401f8ec93c95',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 181003,
        level: 'warn',
        message: 'GET /confluence/rest/applinks/1.0/manifest 403 0ms',
        meta: {
          req: {
            'url': '/confluence/rest/applinks/1.0/manifest',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'bb11dcd8604eb1131f474ea42f6c92ba/16556526678843965989',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/confluence/rest/applinks/1.0/manifest',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'b57ca193-2384-4777-94a1-4254a92796c7',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180992,
        level: 'warn',
        message: 'GET /webui 403 0ms',
        meta: {
          req: {
            'url': '/webui',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '75a1ca7ecdc293c95c6a2f0ad3262174/18356446902714454757',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/webui',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '3cd40c98-8024-4f1e-9bd7-5b1a660fef7f',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180977,
        level: 'warn',
        message: 'GET /confluence/rest/applinks/1.0/manifest 403 0ms',
        meta: {
          req: {
            'url': '/confluence/rest/applinks/1.0/manifest',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'fcec4c7dd8e2a5bd131cc54d4a339bee/5189631551507264511',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/confluence/rest/applinks/1.0/manifest',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '0ae7269b-633b-48c9-8418-f7194c03d222',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180978,
        level: 'warn',
        message: 'GET /srC4 403 0ms',
        meta: {
          req: {
            'url': '/srC4',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '82da9f0fb7a465ff29b7af6e75282a74/780359356417140224',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/srC4',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'c54fb0f9-0419-4fad-8d12-2dc51bc34df3',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180998,
        level: 'warn',
        message: 'GET /user 403 0ms',
        meta: {
          req: {
            'url': '/user',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '18a8474c5c86494141aec85e01c0469e/942759523785788851',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/user',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'c1a18034-ed13-4fc3-91ba-6eac5a9db7ae',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 181000,
        level: 'warn',
        message: 'GET /__Additional 403 0ms',
        meta: {
          req: {
            'url': '/__Additional',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '82bfc2b19bfa8cd1b64221c387621261/16971825587982265708',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/__Additional',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'd858dcc7-161e-4f7d-91fa-1d5de969e78e',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180995,
        level: 'warn',
        message: 'GET /human.aspx 403 0ms',
        meta: {
          req: {
            'url': '/human.aspx',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '1c595e681bfd9bb7b3164ee0cf4d383f/17337700398896248754',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/human.aspx',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '4565da20-fa4e-4907-a610-169702adb1a3',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 181005,
        level: 'warn',
        message: 'GET /pools 403 0ms',
        meta: {
          req: {
            'url': '/pools',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'd76560760cb488e074c8882553b4310a/15186486960693326209',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/pools',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'b6a3683b-0d6a-417a-90ce-459c8c681840',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180996,
        level: 'warn',
        message: 'GET / 403 0ms',
        meta: {
          req: {
            'url': '/',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'ee9f1a10309af48aa6442dbc8388244b/2680746325478482027',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'e0f2153f-6147-4465-927e-527a50d4aa20',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180979,
        level: 'warn',
        message: 'GET /?=PHPE9568F36-D428-11d2-A769-00AA001ACF42 403 0ms',
        meta: {
          req: {
            'url': '/?=PHPE9568F36-D428-11d2-A769-00AA001ACF42',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '58c1e95ab17d2a27f47262399f47cfa4/6648984834263960398',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/?=PHPE9568F36-D428-11d2-A769-00AA001ACF42',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '5151d77b-aa13-4de6-9f89-9abac8c87250',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180975,
        level: 'warn',
        message: 'GET /Portal0000.htm 403 0ms',
        meta: {
          req: {
            'url': '/Portal0000.htm',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': 'a1f9508c571f374a54b23cfd0a076d6e/17421115151508936228',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/Portal0000.htm',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '81b721ee-f305-4777-9d8a-335e47fa0bc2',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180997,
        level: 'warn',
        message: 'GET /favicon.ico 403 0ms',
        meta: {
          req: {
            'url': '/favicon.ico',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '11d76c24b4617e23aee9a3bd4317945c/6210664844919409369',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/favicon.ico',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': 'eb61fb58-8d4f-47d8-819b-744d6c16a285',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 180993,
        level: 'warn',
        message: 'GET /HNAP1 403 0ms',
        meta: {
          req: {
            'url': '/HNAP1',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '1171dc8bbe313f230c89338b24a06f3c/11200260853349279333',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'http',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/HNAP1',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '3ef6deb5-7f43-4271-99ad-5039f8aca138',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      },
      {
        id: 181004,
        level: 'warn',
        message: 'GET /dana-cached/hc/HostCheckerInstaller.osx 403 0ms',
        meta: {
          req: {
            'url': '/dana-cached/hc/HostCheckerInstaller.osx',
            'headers': {
              'host': '226.235.36.34.bc.googleusercontent.com',
              'user-agent': 'curl/7.54.0',
              'x-cloud-trace-context': '6c1946292ded181efd0cd17f27672748/16946605735713908046',
              'via': '1.1 google',
              'x-forwarded-for': '139.144.52.241, 34.36.235.226',
              'x-forwarded-proto': 'https',
              'connection': 'Keep-Alive'
            },
            'method': 'GET',
            'httpVersion': '1.1',
            'originalUrl': '/dana-cached/hc/HostCheckerInstaller.osx',
            'query': {}
          },
          res: {
            'statusCode': 403,
            'body': {
              'code': 403,
              'error': 'forbidden',
              'message': 'Access Denied: Your request has been blocked due to security reasons. Your IP address has been blacklisted for suspicious activity. Further attempts to access this server will result in legal action.'
            }
          },
          responseTime: 0,
          user_id: null,
          account_id: null,
          session: {
            'id': '5ed46679-ceee-4ab4-87f2-b73485bba188',
            'user': null,
            'created_at': null
          },
          device: {
            'hash': '403a81f2fbd03f3e6a91f1a7b955b37d',
            'components': {
              'useragent': {
                'browser': {
                  'family': 'curl',
                  'version': '7'
                },
                'device': {
                  'family': 'Other',
                  'version': '0'
                },
                'os': {
                  'family': 'Other',
                  'major': '0',
                  'minor': '0'
                }
              },
              'geoip': {
                'country': null
              }
            }
          },
          ip_address: '139.144.52.241'
        },
        user_id: null,
        account_id: null,
        ip_address: '139.144.52.241',
        http: 1,
        timestamp: '2024-07-08T08:55:52.000Z'
      }
    ],
    ip_location: {
      ip: '139.144.52.241',
      ip_number: '2341483761',
      ip_version: 4,
      country_name: 'United States of America',
      country_code2: 'US',
      isp: 'Akamai Technologies Inc.',
      response_code: '200',
      response_message: 'OK'
    }
  }, null, '\t');

}
