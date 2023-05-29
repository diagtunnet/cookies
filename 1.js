// Inject cookies into the current page
const cookies = [
{
    "domain": ".fiat.com",
    "expirationDate": 1719911002.081699,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_ga",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.2.1681393283.1685328293",
    "id": 1
},
{
    "domain": ".fiat.com",
    "expirationDate": 1719910970.692194,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_ga_NQRXPBM53J",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GS1.1.1685349616.2.1.1685350970.0.0.0",
    "id": 2
},
{
    "domain": ".fiat.com",
    "expirationDate": 1685437402,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_gid",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.2.1484002868.1685328293",
    "id": 3
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "AKA_A2",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "A",
    "id": 4
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "dtCookie",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "v_4_srv_8_sn_3B1D645230E67A23A365B4FCCAB2DAD8_perc_100000_ol_0_mul_1_app-3Afb1ed5d64d68f755_0",
    "id": 5
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": true,
    "name": "fcasession",
    "path": "/",
    "sameSite": "unspecified",
    "secure": true,
    "session": true,
    "storeId": "0",
    "value": "!XzWZmljPTjsBkHpkvqPtXneSZGZfTKC0JkyM61HO8a/pOL0y/Qd5SJE7QarSqqYNzBcmXVyRToSQ9xQ=",
    "id": 6
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "ga",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "GA1.2.2144282351.1683540669",
    "id": 7
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "gat",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "1",
    "id": 8
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "gid",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "GA1.2.1922317898.1683540669",
    "id": 9
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "initDate",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "Mon May 08 2023 13:11:07 GMT+0300 (GMT+03:00)",
    "id": 10
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "PHPSESSID",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "b081b1b4-baba97f6-b081b1ac-baba97f6-00066c65-8slpot1t9oq2ee6dpoe4mguust",
    "id": 11
},
{
    "domain": "linkentry-euro.fiat.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "SS_MARKET_APPLICATION_TR-0013219-D006",
    "path": "/",
    "sameSite": "unspecified",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "a:2:{s:16:\"LINK_NSC_SERVICE\"",
    "id": 12
}
];

cookies.forEach(cookie => {
  document.cookie = `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}; expires=${new Date(cookie.expirationDate * 1000).toUTCString()}; secure=${cookie.secure};`;
});

console.log("Cookies injected successfully!");
