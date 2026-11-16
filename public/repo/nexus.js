import { connect as _cfConnect } from 'cloudflare:sockets';
const __miliTd = new TextDecoder(),
  __miliCache = Object.create(null);
function _d64(_s) {
  const _h = __miliCache[_s];
  if (_h !== void 0) return _h;
  const _b = atob(_s),
    _l = _b.length,
    _u = new Uint8Array(_l);
  for (let _i = 0; _i < _l; _i++) _u[_i] = _b.charCodeAt(_i);
  let _r = __miliTd.decode(_u);
  const _cc = _r.charCodeAt(0);
  if (_cc > 0 && _cc < 32) _r = _r.slice(1);
  return __miliCache[_s] = _r;
}
let _v1 = _cfConnect;
const _v2 = new TextDecoder();
const _v3 = Object.create(null);
function _v4(_v5) {
  const _v6 = _v3[_v5];
  if (_v6 !== undefined) return _v6;
  const _v7 = atob(_v5);
  const _v8 = new Uint8Array(_v7.length);
  for (let _v9 = 0; _v9 < _v7.length; _v9++) _v8[_v9] = _v7.charCodeAt(_v9);
  const _v10 = _v2.decode(_v8);
  _v3[_v5] = _v10;
  return _v10;
}
let _v11 = '';
let _v12 = '';
let _v13 = '';
let _v14 = [];
let _v15 = [];
let _v16 = false;
let _v17 = false;
let _v18 = false;
let _v19 = true;
let _v20 = '';
let _v21 = '';
let _v22 = '';
let _v23 = '';
let _v24 = true;
let _v25 = true;
let _v26 = false;
let _v27 = '';
let _v28 = false;
let _v29 = 'https://223.5.5.5/dns-query';
let _v30 = 'cloudflare-ech.com';
let _v31 = '';
let _v32 = _v4('aHR0cHM6Ly91cmwudjEubWsvc3Vi');
const _v33 = _v4('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2J5Sm9leS90ZXN0L3JlZnMvaGVhZHMvbWFpbi90aXN0LmluaQ==');
let _v34 = true;
let _v35 = true;
let _v36 = true;
let _v37 = false;
let _v38 = null;
let _v39 = {};
let _v40 = 0;
const _v41 = 30 * 1000;
let _v42 = '';
const _v43 = 'v3.0.0';
const _v44 = {
  wk: '',
  ev: 'yes',
  et: 'yes',
  ex: 'no',
  ech: 'no',
  tp: '',
  customDNS: 'https://223.5.5.5/dns-query',
  customECHDomain: 'cloudflare-ech.com',
  alpn: '',
  d: '',
  p: '',
  yx: '',
  yxURL: '',
  s: '',
  homepage: '',
  scu: _v4('aHR0cHM6Ly91cmwudjEubWsvc3Vi'),
  ena: 'no',
  epd: 'yes',
  epi: 'yes',
  egi: 'yes',
  ae: '',
  rm: '',
  qj: '',
  dkby: 'no',
  yxby: '',
  ipv4: 'yes',
  ipv6: 'yes',
  ispMobile: 'yes',
  ispUnicom: 'yes',
  ispTelecom: 'yes',
  updVerUrl: '',
  updSrcUrl: '',
  cfToken: '',
  cfAccountId: '',
  cfScriptName: ''
};
function _v45(_v46, _v47 = false) {
  if (_v46 === undefined || _v46 === null || _v46 === '') return _v47;
  if (_v46 === true || _v46 === false) return _v46;
  const _v5 = String(_v46).trim().toLowerCase();
  if (_v5 === 'yes' || _v5 === 'true' || _v5 === '1' || _v5 === 'on') return true;
  if (_v5 === 'no' || _v5 === 'false' || _v5 === '0' || _v5 === 'off') return false;
  return _v47;
}
function _v48(_v46, _v47 = false) {
  return _v45(_v46, _v47) ? 'yes' : 'no';
}
function _v49(_v50, _v47 = false, _v51 = undefined) {
  const _v52 = _v51 !== undefined ? _v51 : _v47 ? 'yes' : 'no';
  return _v45(_v53(_v50, _v52), _v47);
}
function _v54(_v50, _v52 = '', _v51 = undefined) {
  const _v46 = _v53(_v50, _v51 !== undefined ? _v51 : _v52);
  return _v46 === undefined || _v46 === null ? _v52 : String(_v46);
}
function _v55(_v56) {
  const _v57 = {
    ..._v44,
    ..._v56
  };
  ['ev', 'et', 'ex', 'ech', 'ena', 'epd', 'epi', 'egi', 'ipv4', 'ipv6', 'ispMobile', 'ispUnicom', 'ispTelecom'].forEach(_v50 => {
    _v57[_v50] = _v48(_v57[_v50], _v45(_v44[_v50]));
  });
  if (_v57.ev === 'no' && _v57.et === 'no' && _v57.ex === 'no') {
    _v57.ev = 'yes';
  }
  if (_v57.ech === 'yes') {
    _v57.dkby = 'yes';
  }
  return _v57;
}
function _v58(_v59, ..._v60) {
  if (!_v59) return undefined;
  for (const _v61 of _v60) {
    if (_v59[_v61] !== undefined && _v59[_v61] !== null && _v59[_v61] !== '') {
      return _v59[_v61];
    }
  }
  return undefined;
}
function _v62(_v59 = {}) {
  const _v63 = {
    wk: ['wk', 'WK'],
    ev: ['ev', 'EV'],
    et: ['et', 'ET'],
    ex: ['ex', 'EX'],
    ech: ['ech', 'ECH'],
    tp: ['tp', 'TP'],
    customDNS: ['customDNS', 'CUSTOMDNS', 'CUSTOM_DNS'],
    customECHDomain: ['customECHDomain', 'CUSTOMECHDOMAIN', 'CUSTOM_ECH_DOMAIN'],
    alpn: ['alpn', 'ALPN'],
    d: ['d', 'D'],
    p: ['p', 'P'],
    yx: ['yx', 'YX'],
    yxURL: ['yxURL', 'YXURL', 'YX_URL'],
    s: ['s', 'S'],
    homepage: ['homepage', 'HOMEPAGE'],
    scu: ['scu', 'SCU'],
    ena: ['ena', 'ENA'],
    epd: ['epd', 'EPD'],
    epi: ['epi', 'EPI'],
    egi: ['egi', 'EGI'],
    ae: ['ae', 'AE'],
    rm: ['rm', 'RM'],
    qj: ['qj', 'QJ'],
    dkby: ['dkby', 'DKBY'],
    yxby: ['yxby', 'YXBY'],
    ipv4: ['ipv4', 'IPV4'],
    ipv6: ['ipv6', 'IPV6'],
    ispMobile: ['ispMobile', 'ISPMOBILE', 'ISP_MOBILE'],
    ispUnicom: ['ispUnicom', 'ISPUNICOM', 'ISP_UNICOM'],
    ispTelecom: ['ispTelecom', 'ISPTELECOM', 'ISP_TELECOM']
  };
  const _v57 = {};
  for (const [_v50, _v60] of Object.entries(_v63)) {
    const _v46 = _v58(_v59, ..._v60);
    if (_v46 !== undefined) _v57[_v50] = _v46;
  }
  return _v57;
}
function _v64(_v59 = {}) {
  return _v55({
    ..._v62(_v59),
    ..._v39
  });
}
const _v65 = {
  'HK': [_d64("AfCfh63wn4ewIOmmmea4rw=="), 'HK', 'Hong Kong'],
  'US': [_d64("AfCfh7rwn4e4IOe+juWbvQ=="), 'US', 'United States'],
  'SG': [_d64("AfCfh7jwn4esIOaWsOWKoOWdoQ=="), 'SG', 'Singapore'],
  'JP': [_d64("AfCfh6/wn4e1IOaXpeacrA=="), 'JP', 'Japan'],
  'KR': [_d64("AfCfh7Dwn4e3IOmfqeWbvQ=="), 'KR', 'South Korea'],
  'DE': [_d64("AfCfh6nwn4eqIOW+t+WbvQ=="), 'DE', 'Germany'],
  'SE': [_d64("AfCfh7jwn4eqIOeRnuWFuA=="), 'SE', 'Sweden'],
  'NL': [_d64("AfCfh7Pwn4exIOiNt+WFsA=="), 'NL', 'Netherlands'],
  'FI': [_d64("AfCfh6vwn4euIOiKrOWFsA=="), 'FI', 'Finland'],
  'GB': [_d64("AfCfh6zwn4enIOiLseWbvQ=="), 'GB', 'United Kingdom'],
  'Oracle': [_d64("AeeUsumqqOaWhw=="), 'Oracle'],
  'DigitalOcean': [_d64("AeaVsOeggea1tw=="), 'DigitalOcean'],
  'Vultr': ['Vultr', 'Vultr'],
  'Multacom': ['Multacom', 'Multacom']
};
let _v66 = [{
  domain: _v4('UHJveHlJUC5ISy5DTUxpdXNzc3MubmV0'),
  region: 'HK',
  regionCode: 'HK',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5VUy5DTUxpdXNzc3MubmV0'),
  region: 'US',
  regionCode: 'US',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5TRy5DTUxpdXNzc3MubmV0'),
  region: 'SG',
  regionCode: 'SG',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5KUC5DTUxpdXNzc3MubmV0'),
  region: 'JP',
  regionCode: 'JP',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5LUi5DTUxpdXNzc3MubmV0'),
  region: 'KR',
  regionCode: 'KR',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5ERS5DTUxpdXNzc3MubmV0'),
  region: 'DE',
  regionCode: 'DE',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5TRS5DTUxpdXNzc3MubmV0'),
  region: 'SE',
  regionCode: 'SE',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5OTC5DTUxpdXNzc3MubmV0'),
  region: 'NL',
  regionCode: 'NL',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5GSS5DTUxpdXNzc3MubmV0'),
  region: 'FI',
  regionCode: 'FI',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5HQi5DTUxpdXNzc3MubmV0'),
  region: 'GB',
  regionCode: 'GB',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5PcmFjbGUuY21saXVzc3NzLm5ldA=='),
  region: 'Oracle',
  regionCode: 'Oracle',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5EaWdpdGFsT2NlYW4uQ01MaXVzc3NzLm5ldA=='),
  region: 'DigitalOcean',
  regionCode: 'DigitalOcean',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5WdWx0ci5DTUxpdXNzc3MubmV0'),
  region: 'Vultr',
  regionCode: 'Vultr',
  port: 443
}, {
  domain: _v4('UHJveHlJUC5NdWx0YWNvbS5DTUxpdXNzc3MubmV0'),
  region: 'Multacom',
  regionCode: 'Multacom',
  port: 443
}];
const _v67 = [{
  name: "cloudflare.182682.xyz",
  domain: "cloudflare.182682.xyz"
}, {
  name: "speed.marisalnc.com",
  domain: "speed.marisalnc.com"
}, {
  domain: "freeyx.cloudflare88.eu.org"
}, {
  domain: "bestcf.top"
}, {
  domain: "cdn.2020111.xyz"
}, {
  domain: "cfip.cfcdn.vip"
}, {
  domain: "cf.0sm.com"
}, {
  domain: _v4('Y2YuMDkwMjI3Lnh5eg==')
}, {
  domain: "cf.zhetengsha.eu.org"
}, {
  domain: "cloudflare.9jy.cc"
}, {
  domain: "cf.zerone-cdn.pp.ua"
}, {
  domain: "cfip.1323123.xyz"
}, {
  domain: "cnamefuckxxs.yuchen.icu"
}, {
  domain: "cloudflare-ip.mofashi.ltd"
}, {
  domain: "115155.xyz"
}, {
  domain: "cname.xirancdn.us"
}, {
  domain: "f3058171cad.002404.xyz"
}, {
  domain: "8.889288.xyz"
}, {
  domain: "cdn.tzpro.xyz"
}, {
  domain: "cf.877771.xyz"
}, {
  domain: "xn--b6gac.eu.org"
}];
const _v68 = 'E_DATA';
const _v69 = 'E_AUTH';
const _v70 = 'E_CMD';
const _v71 = 'E_DNS_ONLY';
const _v72 = 'E_ATYPE';
const _v73 = 'E_ADDR';
const _v74 = 'E_STATE';
const _v75 = 'E_ID';
const _v76 = 'E_S_ADDR';
const _v77 = 'E_S_METH';
const _v78 = 'E_S_AREQ';
const _v79 = 'E_S_AUTH';
const _v80 = 'E_S_CONN';
let _v81 = {};
let _v82 = false;
const _v83 = 1;
const _v84 = 2;
const _v85 = 3;
const _v86 = 64 * 1024;
const _v87 = 32 * 1024;
const _v88 = 512;
const _v89 = 0;
const _v90 = 16 * 1024;
const _v91 = 4 * 1024 * 1024;
const _v92 = 2;
const _v93 = 3500;
const _v94 = new TextDecoder();
const _v95 = new Map();
function _v96(_v97) {
  const _v98 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return _v98.test(_v97);
}
function _v99(_v100) {
  const _v101 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (_v101.test(_v100)) return true;
  const _v102 = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (_v102.test(_v100)) return true;
  const _v103 = /^::1$|^::$|^(?:[0-9a-fA-F]{1,4}:)*::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}$/;
  if (_v103.test(_v100)) return true;
  return false;
}
function _v104(_v105 = false) {
  const _v106 = typeof _v22 !== 'undefined' && _v22 && _v22.trim();
  let _v107 = _v106 || _v105;
  const _v108 = {};
  function _v109(_v110) {
    if (!_v106) {
      _v107 = _v110;
    }
  }
  function _v111(_v112, _v113 = null) {
    if (_v107 || _v112 && _v112.includes('.')) {
      return _v113 || _v112;
    }
    if (!_v108[_v112]) _v108[_v112] = 0;
    _v108[_v112]++;
    const _v114 = String(_v108[_v112]).padStart(2, '0');
    return `${_v113 || _v112}-${_v114}`;
  }
  return {
    namer: _v111,
    setSkipNumbering: _v109
  };
}
function _v115(_v116) {
  return String(_v116 || '').trim().replace(/^\[([^\]]+)\]$/, '$1');
}
function _v117(_v118, _v119 = 'Node') {
  let _v120 = String(_v118 || '').trim();
  if (!_v120 || new RegExp(_d64("AV7oh6rlrprkuYnkvJjpgIkt"), "i").test(_v120)) _v120 = _v119;
  _v120 = _v120.replace(/^\[([^\]]+)\]$/, '$1').replace(/^https?:\/\//i, '').replace(/[/?#].*$/, '').replace(/\s+/g, '_');
  return _v120 || _v119;
}
function _v121(_v122) {
  const _v123 = _v115(_v122?.ip || _v122?.domain || '');
  if (_v123 && _v123.includes(':') && /^[0-9a-fA-F:.]+$/.test(_v123)) return _d64("AUlQdjbkvJjpgIk=");
  if (_v123 && !_v99(_v123)) return _d64("AeS8mOmAieWfn+WQjQ==");
  const _v124 = _v117(_v122?.isp || _v122?.name || '', _d64("AUlQdjTkvJjpgIk="));
  const _v125 = _v117(_v122?.colo || '', '');
  return _v125 ? `${_v124}-${_v125}` : _v124;
}
function _v126(_v127 = false) {
  const _v128 = {};
  return _v129 => {
    const _v130 = _v121(_v129);
    if (_v127) return _v130;
    _v128[_v130] = (_v128[_v130] || 0) + 1;
    return `${_v130}-${String(_v128[_v130]).padStart(2, '0')}`;
  };
}
function _v131(_v132) {
  const _v133 = ['', 'h3', 'h2', 'http/1.1', 'h3,h2', 'h2,http/1.1', 'h3,h2,http/1.1'];
  const _v134 = String(_v132 || '').trim();
  return _v133.includes(_v134) ? _v134 : '';
}
function _v135(_v136) {
  const _v137 = _v131(_v31);
  if (_v137) _v136.set('alpn', _v137);
}
async function _v138(_v139) {
  if (_v139.C) {
    try {
      _v38 = _v139.C;
      await _v140();
    } catch (_v141) {
      _v38 = null;
    }
  } else {}
}
async function _v140(_v142 = false) {
  if (!_v38) {
    return;
  }
  if (!_v142 && _v40 > 0 && Date.now() - _v40 < _v41) {
    return;
  }
  try {
    let _v143 = '';
    try {
      _v143 = (await _v38.get('c_ver')) || '';
    } catch (_v144) {}
    if (!_v142 && _v143 && _v143 === _v42 && _v39 && Object.keys(_v39).length > 0) {
      _v40 = Date.now();
      return;
    }
    const _v145 = await _v38.get('c');
    if (_v145) {
      _v39 = JSON.parse(_v145);
    }
    _v42 = _v143;
    _v40 = Date.now();
  } catch (_v146) {
    if (!_v39) _v39 = {};
  }
}
async function _v147() {
  if (!_v38) {
    return;
  }
  try {
    const _v148 = JSON.stringify(_v39);
    await _v38.put('c', _v148);
    const _v149 = String(Date.now());
    _v42 = _v149;
    try {
      await _v38.put('c_ver', _v149);
    } catch (_v150) {}
    _v40 = Date.now();
  } catch (_v151) {
    throw _v151;
  }
}
function _v53(_v152, _v52 = '') {
  if (_v39[_v152] !== undefined) {
    return _v39[_v152];
  }
  return _v52;
}
async function _v153(_v154, _v155) {
  _v39[_v154] = _v155;
  await _v147();
}
async function _v156(_v157) {
  try {
    const _v158 = _v157.cf?.country;
    if (_v158) {
      const _v159 = {
        'US': 'US',
        'SG': 'SG',
        'JP': 'JP',
        'KR': 'KR',
        'DE': 'DE',
        'SE': 'SE',
        'NL': 'NL',
        'FI': 'FI',
        'GB': 'GB',
        'CN': 'SG',
        'TW': 'JP',
        'AU': 'SG',
        'CA': 'US',
        'FR': 'DE',
        'IT': 'DE',
        'ES': 'DE',
        'CH': 'DE',
        'AT': 'DE',
        'BE': 'NL',
        'DK': 'SE',
        'NO': 'SE',
        'IE': 'GB'
      };
      if (_v159[_v158]) {
        return _v159[_v158];
      }
    }
    return 'SG';
  } catch (_v160) {
    return 'SG';
  }
}
async function _v161(_v162, _v163 = 443, _v164 = 2000) {
  try {
    const _v165 = new AbortController();
    const _v166 = setTimeout(() => _v165.abort(), _v164);
    const _v167 = await fetch(`https://${_v162}`, {
      method: 'HEAD',
      signal: _v165.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; CF-IP-Checker/1.0)'
      }
    });
    clearTimeout(_v166);
    return _v167.status < 500;
  } catch (_v168) {
    return true;
  }
}
async function _v169(_v170 = '', _v171 = _v19) {
  if (_v66.length === 0) {
    return null;
  }
  const _v172 = _v66.map(_v173 => ({
    ..._v173,
    available: true
  }));
  if (_v171 && _v170) {
    const _v174 = _v175(_v170, _v172, _v171);
    if (_v174.length > 0) {
      const _v176 = _v174[0];
      return _v176;
    }
  }
  const _v177 = _v172[0];
  return _v177;
}
function _v178(_v179) {
  const _v180 = {
    'US': ['SG', 'JP', 'KR'],
    'SG': ['JP', 'KR', 'US'],
    'JP': ['SG', 'KR', 'US'],
    'KR': ['JP', 'SG', 'US'],
    'DE': ['NL', 'GB', 'SE', 'FI'],
    'SE': ['DE', 'NL', 'FI', 'GB'],
    'NL': ['DE', 'GB', 'SE', 'FI'],
    'FI': ['SE', 'DE', 'NL', 'GB'],
    'GB': ['DE', 'NL', 'SE', 'FI']
  };
  return _v180[_v179] || [];
}
function _v181(_v182) {
  const _v183 = _v178(_v182);
  const _v184 = ['US', 'SG', 'JP', 'KR', 'DE', 'SE', 'NL', 'FI', 'GB'];
  return [_v182, ..._v183, ..._v184.filter(_v185 => _v185 !== _v182 && !_v183.includes(_v185))];
}
function _v175(_v186, _v187, _v188 = _v19) {
  if (!_v188 || !_v186) {
    return _v187;
  }
  const _v189 = _v181(_v186);
  const _v190 = [];
  for (const _v191 of _v189) {
    const _v192 = _v187.filter(_v193 => _v193.regionCode === _v191);
    _v190.push(..._v192);
  }
  return _v190;
}
function _v194(_v195) {
  if (_v195.includes('[') && _v195.includes(']')) {
    const _v196 = _v195.match(/^\[([^\]]+)\](?::(\d+))?$/);
    if (_v196) {
      return {
        address: _v196[1],
        port: _v196[2] ? parseInt(_v196[2], 10) : null
      };
    }
  }
  const _v197 = _v195.lastIndexOf(':');
  if (_v197 > 0) {
    const _v198 = _v195.substring(0, _v197);
    const _v199 = _v195.substring(_v197 + 1);
    const _v200 = parseInt(_v199, 10);
    if (!_v198.includes(':') && !isNaN(_v200) && _v200 > 0 && _v200 <= 65535) {
      return {
        address: _v198,
        port: _v200
      };
    }
  }
  return {
    address: _v195,
    port: null
  };
}
export default {
  async fetch(_v201, _v202, _v203) {
    try {
      const _v204 = _v201.headers.get('Upgrade') === _v4('d2Vic29ja2V0');
      const _v205 = _v201.method === 'POST';
      const _v206 = new URL(_v201.url);
      const _v207 = _v206.pathname.split('/').filter(_v208 => _v208);
      if (!_v204 && !_v205 && _v206.pathname !== '/') {
        const _v209 = (_v202.u || _v202.U || '').toLowerCase();
        const _v210 = (_v202.d || _v202.D || '').toLowerCase();
        const _v211 = _v207[0] || '';
        const _v212 = _v210.startsWith('/') ? _v210.substring(1) : _v210;
        if (_v211 !== _v209 && (_v212 ? _v211 !== _v212 : false)) {
          return new Response('Not Found', {
            status: 404
          });
        }
      }
      await _v138(_v202);
      _v11 = (_v202.u || _v202.U || _v11).toLowerCase();
      const _v213 = (_v202.d || _v202.D || _v11).toLowerCase();
      const _v214 = _v53('p', _v202.p || _v202.P);
      let _v215 = false;
      const _v216 = _v53('wk', _v202.wk || _v202.WK);
      if (_v216 && _v216.trim()) {
        _v21 = _v216.trim().toUpperCase();
        _v20 = _v21;
      } else if (_v214 && _v214.trim()) {
        _v215 = true;
        _v20 = 'CUSTOM';
      } else {
        _v20 = await _v156(_v201);
      }
      const _v217 = _v54('rm', _v44.rm, _v202.rm || _v202.RM);
      _v19 = !(_v217 && _v217.toLowerCase() === 'no');
      const _v218 = _v54('p', _v44.p, _v202.p || _v202.P);
      _v12 = _v218 ? _v218.trim() : '';
      _v13 = _v54('s', _v44.s, _v202.s || _v202.S);
      if (_v13) {
        try {
          _v81 = _v219(_v13);
          _v82 = true;
        } catch (_v220) {
          _v82 = false;
        }
      } else {
        _v81 = {};
        _v82 = false;
      }
      const _v221 = _v53('yx', _v202.yx || _v202.YX);
      if (_v221) {
        try {
          const _v222 = _v221.split(',').map(_v223 => _v223.trim()).filter(_v224 => _v224);
          _v14 = [];
          _v15 = [];
          _v222.forEach(_v225 => {
            let _v226 = '';
            let _v227 = _v225;
            if (_v225.includes('#')) {
              const _v228 = _v225.split('#');
              _v227 = _v228[0].trim();
              _v226 = _v228[1].trim();
            }
            const {
              address: _v229,
              port: _v230
            } = _v194(_v227);
            if (!_v226) {
              _v226 = _d64("AeiHquWumuS5ieS8mOmAiS0=") + _v229 + (_v230 ? ':' + _v230 : '');
            }
            if (_v99(_v229)) {
              _v14.push({
                ip: _v229,
                port: _v230,
                isp: _v226
              });
            } else {
              _v15.push({
                domain: _v229,
                port: _v230,
                name: _v226
              });
            }
          });
        } catch (_v231) {
          _v14 = [];
          _v15 = [];
        }
      }
      const _v232 = _v54('qj', _v44.qj, _v202.qj || _v202.QJ);
      _v16 = !!(_v232 && _v232.toLowerCase() === 'no');
      const _v233 = _v54('dkby', _v44.dkby, _v202.dkby || _v202.DKBY);
      _v17 = !!(_v233 && _v233.toLowerCase() === 'yes');
      const _v234 = _v54('yxby', _v44.yxby, _v202.yxby || _v202.YXBY);
      _v18 = !!(_v234 && _v234.toLowerCase() === 'yes');
      _v24 = _v49('ev', true, _v202.ev);
      _v25 = _v49('et', true, _v202.et);
      _v27 = _v54('tp', _v44.tp, _v202.tp);
      _v26 = _v49('ex', false, _v202.ex);
      _v32 = _v54('scu', _v44.scu, _v202.scu);
      _v34 = _v49('epd', true, _v202.epd || _v202.EPD);
      _v35 = _v49('epi', true, _v202.epi || _v202.EPI);
      _v36 = _v49('egi', true, _v202.egi || _v202.EGI);
      _v37 = _v49('ena', false, _v202.ena || _v202.ENA);
      _v28 = _v49('ech', false, _v202.ech || _v202.ECH);
      _v29 = _v54('customDNS', _v44.customDNS).trim() || _v44.customDNS;
      _v30 = _v54('customECHDomain', _v44.customECHDomain).trim() || _v44.customECHDomain;
      _v31 = _v131(_v54('alpn', _v44.alpn, _v202.alpn || _v202.ALPN));
      if (_v28) {
        _v17 = true;
        const _v235 = _v53('dkby', '');
        if (_v235 !== 'yes') {
          await _v153('dkby', 'yes');
        }
      }
      if (!_v24 && !_v25 && !_v26) {
        _v24 = true;
      }
      _v22 = _v54('yxURL', _v44.yxURL, _v202.yxURL || _v202.YXURL);
      _v23 = _v54('d', _v44.d, _v202.d || _v202.D);
      const _v236 = new URL(_v201.url);
      if (_v236.pathname.includes('/api/config')) {
        const _v237 = _v236.pathname.split('/').filter(_v238 => _v238);
        const _v239 = _v237.indexOf('api');
        if (_v239 > 0) {
          const _v240 = _v237.slice(0, _v239);
          const _v241 = _v240.join('/');
          let _v242 = false;
          if (_v23 && _v23.trim()) {
            const _v243 = _v23.trim().startsWith('/') ? _v23.trim().substring(1) : _v23.trim();
            _v242 = _v241 === _v243;
          } else {
            _v242 = _v96(_v241) && _v241 === _v11;
          }
          if (_v242) {
            return await _v244(_v201, _v202);
          } else {
            return new Response(JSON.stringify({
              error: _d64("Aei3r+W+hOmqjOivgeWksei0pQ==")
            }), {
              status: 403,
              headers: {
                'Content-Type': 'application/json'
              }
            });
          }
        }
        return new Response(JSON.stringify({
          error: _d64("AeaXoOaViOeahEFQSei3r+W+hA==")
        }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      if (_v236.pathname.includes('/api/preferred-ips')) {
        const _v245 = _v236.pathname.split('/').filter(_v246 => _v246);
        const _v247 = _v245.indexOf('api');
        if (_v247 > 0) {
          const _v248 = _v245.slice(0, _v247);
          const _v249 = _v248.join('/');
          let _v250 = false;
          if (_v23 && _v23.trim()) {
            const _v251 = _v23.trim().startsWith('/') ? _v23.trim().substring(1) : _v23.trim();
            _v250 = _v249 === _v251;
          } else {
            _v250 = _v96(_v249) && _v249 === _v11;
          }
          if (_v250) {
            return await _v252(_v201);
          } else {
            return new Response(JSON.stringify({
              error: _d64("Aei3r+W+hOmqjOivgeWksei0pQ==")
            }), {
              status: 403,
              headers: {
                'Content-Type': 'application/json'
              }
            });
          }
        }
        return new Response(JSON.stringify({
          error: _d64("AeaXoOaViOeahEFQSei3r+W+hA==")
        }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      if (_v236.pathname.includes('/api/update')) {
        const _v253 = _v236.pathname.split('/').filter(_v254 => _v254);
        const _v255 = _v253.indexOf('api');
        if (_v255 > 0) {
          const _v256 = _v253.slice(0, _v255);
          const _v257 = _v256.join('/');
          let _v258 = false;
          if (_v23 && _v23.trim()) {
            const _v259 = _v23.trim().startsWith('/') ? _v23.trim().substring(1) : _v23.trim();
            _v258 = _v257 === _v259;
          } else {
            _v258 = _v96(_v257) && _v257 === _v11;
          }
          if (!_v258) {
            return new Response(JSON.stringify({
              error: _d64("Aei3r+W+hOmqjOivgeWksei0pQ==")
            }), {
              status: 403,
              headers: {
                'Content-Type': 'application/json'
              }
            });
          }
          return _v201.method === 'POST' ? await _v260(_v201, _v202) : await _v261(_v201, _v202);
          if (_v236.pathname.includes('/api/user-config')) {
            const uid = _v236.searchParams.get('uid') || '';
            const ukey = uid ? 'u_' + uid : 'u_default';
            if (_v201.method === 'GET') {
              try {
                const raw = _v38 ? await _v38.get(ukey) : null;
                const ucfg = raw ? JSON.parse(raw) : {};
                return new Response(JSON.stringify({
                  ok: true,
                  ucfg
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } catch (e) {
                return new Response(JSON.stringify({
                  ok: true,
                  ucfg: {}
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            }
            if (_v201.method === 'POST') {
              try {
                const body = await _v201.json();
                if (_v38) await _v38.put(ukey, JSON.stringify(body));
                return new Response(JSON.stringify({
                  ok: true,
                  ucfg: body
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } catch (e) {
                return new Response(JSON.stringify({
                  ok: false,
                  error: e.message
                }), {
                  status: 500,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            }
            return new Response(JSON.stringify({
              error: 'Method not allowed'
            }), {
              status: 405,
              headers: {
                'Content-Type': 'application/json'
              }
            });
          }
        }
        return new Response(JSON.stringify({
          error: _d64("AeaXoOaViOeahEFQSei3r+W+hA==")
        }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      if (_v201.method === 'POST' && _v26) {
        const _v262 = await _v263(_v201);
        if (_v262) {
          _v203.waitUntil(_v262.closed);
          return new Response(_v262.readable, {
            headers: {
              'X-Accel-Buffering': 'no',
              'Cache-Control': 'no-store',
              Connection: 'keep-alive',
              'User-Agent': 'Go-http-client/2.0',
              'Content-Type': 'application/grpc'
            }
          });
        }
        return new Response('Internal Server Error', {
          status: 500
        });
      }
      if (_v201.headers.get('Upgrade') === _v4('d2Vic29ja2V0')) {
        return await _v264(_v201);
      }
      if (_v201.method === 'GET') {
        if (_v236.pathname.endsWith('/region')) {
          const _v265 = _v236.pathname.split('/').filter(_v266 => _v266);
          if (_v265.length === 2 && _v265[1] === 'region') {
            const _v267 = _v265[0];
            let _v268 = false;
            if (_v23 && _v23.trim()) {
              const _v269 = _v23.trim().startsWith('/') ? _v23.trim().substring(1) : _v23.trim();
              _v268 = _v267 === _v269;
            } else {
              _v268 = _v96(_v267) && _v267 === _v11;
            }
            if (_v268) {
              const _v270 = _v53('p', _v202.p || _v202.P);
              const _v271 = _v53('wk', _v202.wk || _v202.WK);
              if (_v271 && _v271.trim()) {
                return new Response(JSON.stringify({
                  region: _v271.trim().toUpperCase(),
                  detectionMethod: _d64("AeaJi+WKqOaMh+WumuWcsOWMug=="),
                  manualRegion: _v271.trim().toUpperCase(),
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } else if (_v270 && _v270.trim()) {
                return new Response(JSON.stringify({
                  region: 'CUSTOM',
                  detectionMethod: _v4('6Ieq5a6a5LmJUHJveHlJUOaooeW8jw=='),
                  ci: _v270,
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } else {
                const _v272 = await _v156(_v201);
                return new Response(JSON.stringify({
                  region: _v272,
                  detectionMethod: _d64("AUFQSeajgOa1iw=="),
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            } else {
              return new Response(JSON.stringify({
                error: _d64("Aeiuv+mXruiiq+aLkue7nQ=="),
                message: _d64("Aei3r+W+hOmqjOivgeWksei0pQ==")
              }), {
                status: 403,
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            }
          }
        }
        if (_v236.pathname.endsWith('/test-api')) {
          const _v273 = _v236.pathname.split('/').filter(_v274 => _v274);
          if (_v273.length === 2 && _v273[1] === 'test-api') {
            const _v275 = _v273[0];
            let _v276 = false;
            if (_v23 && _v23.trim()) {
              const _v259 = _v23.trim().startsWith('/') ? _v23.trim().substring(1) : _v23.trim();
              _v276 = _v275 === _v259;
            } else {
              _v276 = _v96(_v275) && _v275 === _v11;
            }
            if (_v276) {
              try {
                const _v277 = await _v156(_v201);
                return new Response(JSON.stringify({
                  detectedRegion: _v277,
                  message: _d64("AUFQSea1i+ivleWujOaIkA=="),
                  timestamp: new Date().toISOString()
                }), {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              } catch (_v278) {
                return new Response(JSON.stringify({
                  error: _v278.message,
                  message: _d64("AUFQSea1i+ivleWksei0pQ==")
                }), {
                  status: 500,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            } else {
              return new Response(JSON.stringify({
                error: _d64("Aeiuv+mXruiiq+aLkue7nQ=="),
                message: _d64("Aei3r+W+hOmqjOivgeWksei0pQ==")
              }), {
                status: 403,
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            }
          }
        }
        if (_v236.pathname === '/') {
          const _v279 = _v53('homepage', _v202.homepage || _v202.HOMEPAGE);
          if (_v279 && _v279.trim()) {
            try {
              const _v280 = await fetch(_v279.trim(), {
                method: 'GET',
                headers: {
                  'User-Agent': _v201.headers.get('User-Agent') || 'Mozilla/5.0',
                  'Accept': _v201.headers.get('Accept') || '*/*',
                  'Accept-Language': _v201.headers.get('Accept-Language') || 'en-US,en;q=0.9'
                },
                redirect: 'follow'
              });
              if (_v280.ok) {
                const _v281 = _v280.headers.get('Content-Type') || 'text/html; charset=utf-8';
                const _v282 = await _v280.text();
                return new Response(_v282, {
                  status: _v280.status,
                  headers: {
                    'Content-Type': _v281,
                    'Cache-Control': 'no-cache, no-store, must-revalidate'
                  }
                });
              }
            } catch (_v283) {
              console.error(_d64("AeiOt+WPluiHquWumuS5iemmlumhteWksei0pTo="), _v283);
            }
          }
          return new Response("<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<meta name=\"color-scheme\" content=\"dark\">\n<title>StudioDocs — Static Asset &amp; Web Vitals Monitor</title>\n<style>\n  :root{--bg:#080b10;--panel:#0f1620;--line:#1d2a38;--ink:#e7eef7;--muted:#8aa0b6;--ok:#5ee0a0;--warn:#f4c95d;--accent:#7cc4ff}\n  *{box-sizing:border-box}\n  html,body{margin:0;min-height:100%}\n  body{background:radial-gradient(1100px 600px at 12% -10%,#122334 0,transparent 60%),radial-gradient(900px 500px at 100% 0,#101c2a 0,transparent 55%),var(--bg);color:var(--ink);font:16px/1.6 ui-sans-serif,system-ui,-apple-system,\"Segoe UI\",sans-serif}\n  .wrap{max-width:1080px;margin:0 auto;padding:40px 24px 72px}\n  header{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}\n  .brand{display:flex;align-items:center;gap:12px;font-weight:700;letter-spacing:-.02em;font-size:20px}\n  .mark{width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#7cc4ff,#5ee0a0);display:grid;place-items:center;color:#06121c;font-weight:900;font-size:15px}\n  .badge{border:1px solid var(--line);border-radius:999px;padding:6px 12px;color:var(--muted);font-size:13px;background:#0b1118}\n  .badge b{color:var(--ok)}\n  .hero{margin:64px 0 40px;max-width:760px}\n  .eyebrow{margin:0 0 16px;color:var(--accent);font-size:12px;letter-spacing:.18em;text-transform:uppercase}\n  h1{margin:0 0 18px;font-size:clamp(34px,6vw,64px);line-height:1.02;letter-spacing:-.045em}\n  .lede{margin:0;color:var(--muted);font-size:18px;max-width:620px}\n  .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin:32px 0}\n  .card{background:linear-gradient(180deg,#101925,#0c131c);border:1px solid var(--line);border-radius:16px;padding:20px}\n  .card .k{color:var(--muted);font-size:12px;letter-spacing:.12em;text-transform:uppercase}\n  .card .v{margin-top:10px;font-size:30px;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums}\n  .card .d{margin-top:4px;color:var(--muted);font-size:13px}\n  .ok{color:var(--ok)} .warn{color:var(--warn)}\n  .panel{margin-top:28px;background:var(--panel);border:1px solid var(--line);border-radius:18px;padding:24px}\n  .panel h2{margin:0 0 6px;font-size:18px;letter-spacing:-.02em}\n  .panel p{margin:0 0 18px;color:var(--muted);font-size:14px}\n  ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}\n  li{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 14px;border:1px solid var(--line);border-radius:12px;background:#0b121a;font-size:14px}\n  .dot{width:8px;height:8px;border-radius:50%;background:var(--ok);box-shadow:0 0 0 4px rgba(94,224,160,.12);flex:none}\n  .path{color:var(--muted);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px}\n  footer{margin-top:44px;color:var(--muted);font-size:12px;text-align:center}\n  @media(max-width:820px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n  @media(max-width:480px){.grid{grid-template-columns:1fr}.hero{margin-top:44px}}\n</style>\n</head>\n<body>\n<div class=\"wrap\">\n  <header>\n    <div class=\"brand\"><span class=\"mark\">SD</span>StudioDocs</div>\n    <div class=\"badge\">edge status <b>● operational</b></div>\n  </header>\n  <section class=\"hero\">\n    <p class=\"eyebrow\">Static Asset &amp; Web Vitals Monitor</p>\n    <h1>Fast assets, measured at the edge.</h1>\n    <p class=\"lede\">StudioDocs keeps a live pulse on static delivery and the Core Web Vitals your visitors feel: load speed, layout stability and interaction latency.</p>\n  </section>\n  <section class=\"grid\">\n    <div class=\"card\"><div class=\"k\">LCP</div><div class=\"v ok\">1.2s</div><div class=\"d\">largest contentful paint</div></div>\n    <div class=\"card\"><div class=\"k\">CLS</div><div class=\"v ok\">0.01</div><div class=\"d\">layout shift</div></div>\n    <div class=\"card\"><div class=\"k\">INP</div><div class=\"v ok\">84ms</div><div class=\"d\">interaction latency</div></div>\n    <div class=\"card\"><div class=\"k\">TTFB</div><div class=\"v ok\">120ms</div><div class=\"d\">edge response</div></div>\n  </section>\n  <section class=\"panel\">\n    <h2>Asset checks</h2>\n    <p>The monitor samples the documents, styles and scripts that the edge serves.</p>\n    <ul>\n      <li><span class=\"dot\"></span><span>document shell</span><span class=\"path\">/</span></li>\n      <li><span class=\"dot\"></span><span>stylesheet</span><span class=\"path\">assets/style.css</span></li>\n      <li><span class=\"dot\"></span><span>application bundle</span><span class=\"path\">assets/app.js</span></li>\n      <li><span class=\"dot warn\"></span><span>vitals beacon</span><span class=\"path\">automatic</span></li>\n    </ul>\n  </section>\n  <footer>StudioDocs · static delivery &amp; performance monitoring</footer>\n</div>\n</body>\n</html>", {
            status: 200,
            headers: {
              "Content-Type": "text/html; charset=utf-8",
              "Cache-Control": "no-store"
            }
          });
        }
        if (_v23 && _v23.trim()) {
          const _v284 = _v23.trim().startsWith('/') ? _v23.trim() : '/' + _v23.trim();
          const _v285 = _v284.endsWith('/') && _v284.length > 1 ? _v284.slice(0, -1) : _v284;
          const _v286 = _v236.pathname.endsWith('/') && _v236.pathname.length > 1 ? _v236.pathname.slice(0, -1) : _v236.pathname;
          if (_v286 === _v285) {
            return await _v287(_v201, _v11);
          }
          if (_v286 === _v285 + '/sub') {
            return await _v288(_v201, _v11, _v236);
          }
          if (_v236.pathname.length > 1 && _v236.pathname !== '/') {
            const _v289 = _v236.pathname.replace(/\/$/, '').replace('/sub', '').substring(1);
            if (_v96(_v289)) {
              return new Response(JSON.stringify({
                error: _d64("Aeiuv+mXruiiq+aLkue7nQ=="),
                message: _d64("AeW9k+WJjSBXb3JrZXIg5bey5ZCv55So6Ieq5a6a5LmJ6Lev5b6E5qih5byP77yMVVVJRCDorr/pl67lt7LnpoHnlKg=")
              }), {
                status: 403,
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            }
          }
        } else {
          if (_v236.pathname.length > 1 && _v236.pathname !== '/' && !_v236.pathname.includes('/sub')) {
            const _v290 = _v236.pathname.replace(/\/$/, '').substring(1);
            if (_v96(_v290)) {
              if (_v290 === _v11) {
                return await _v287(_v201, _v290);
              } else {
                return new Response(JSON.stringify({
                  error: _d64("AVVVSUTplJnor68g6K+35rOo5oSP5Y+Y6YeP5ZCN56ew5pivdeS4jeaYr3V1aWQ=")
                }), {
                  status: 403,
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
              }
            }
          }
          if (_v236.pathname.includes('/sub')) {
            const _v291 = _v236.pathname.split('/');
            if (_v291.length === 2 && _v291[1] === 'sub') {
              const _v292 = _v291[0].substring(1);
              if (_v96(_v292)) {
                if (_v292 === _v11) {
                  return await _v288(_v201, _v292, _v236);
                } else {
                  return new Response(JSON.stringify({
                    error: _d64("AVVVSUTplJnor68=")
                  }), {
                    status: 403,
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  });
                }
              }
            }
          }
        }
        if (_v213 && _v236.pathname.toLowerCase().includes(`/${_v213}`)) {
          return await _v288(_v201, _v11);
        }
      }
      return new Response(JSON.stringify({
        error: 'Not Found'
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (_v293) {
      return new Response(_v293.toString(), {
        status: 500
      });
    }
  }
};
function _v294(_v295) {
  return btoa(_v295.join('\n'));
}
function _v296(_v297) {
  try {
    if (_v297.startsWith(_v4('dmxlc3M6Ly8='))) {
      const _v298 = new URL(_v297);
      const _v299 = decodeURIComponent(_v298.hash.substring(1));
      const _v300 = _v298.username;
      const _v301 = _v298.hostname;
      const _v302 = parseInt(_v298.port) || 443;
      const _v303 = new URLSearchParams(_v298.search);
      const _v304 = _v303.get('security') === 'tls' || _v303.get('tls') === 'true';
      const _v305 = _v303.get('type') || 'ws';
      const _v306 = _v303.get('path') || '/?ed=2048';
      const _v307 = _v303.get('host') || _v301;
      const _v308 = _v303.get('sni') || _v307;
      const _v309 = _v303.get('alpn') || '';
      const _v310 = _v303.get('fp') || _v303.get('client-fingerprint') || 'chrome';
      const _v311 = _v303.get('ech');
      const _v312 = {
        name: _v299,
        type: _v4('dmxlc3M='),
        server: _v301,
        port: _v302,
        uuid: _v300,
        tls: _v304,
        network: _v305,
        'client-fingerprint': _v310
      };
      if (_v304) {
        _v312.servername = _v308;
        if (_v309) _v312.alpn = _v309.split(',').map(_v313 => _v313.trim()).filter(Boolean);
        _v312['skip-cert-verify'] = false;
      }
      if (_v305 === 'ws') {
        _v312['ws-opts'] = {
          path: _v306,
          headers: {
            Host: _v307
          }
        };
      }
      if (_v311) {
        const _v314 = _v30 || 'cloudflare-ech.com';
        _v312['ech-opts'] = {
          enable: true,
          'query-server-name': _v314
        };
      }
      return _v312;
    }
    if (_v297.startsWith(_v4('dHJvamFuOi8v'))) {
      const _v315 = new URL(_v297);
      const _v316 = decodeURIComponent(_v315.hash.substring(1));
      const _v317 = _v315.username;
      const _v318 = _v315.hostname;
      const _v319 = parseInt(_v315.port) || 443;
      const _v320 = new URLSearchParams(_v315.search);
      const _v321 = _v320.get('type') || 'ws';
      const _v322 = _v320.get('path') || '/?ed=2048';
      const _v323 = _v320.get('host') || _v318;
      const _v324 = _v320.get('sni') || _v323;
      const _v325 = _v320.get('alpn') || '';
      const _v326 = _v320.get('ech');
      const _v327 = {
        name: _v316,
        type: _v4('dHJvamFu'),
        server: _v318,
        port: _v319,
        password: _v317,
        network: _v321,
        sni: _v324,
        'skip-cert-verify': false
      };
      if (_v325) _v327.alpn = _v325.split(',').map(_v328 => _v328.trim()).filter(Boolean);
      if (_v321 === 'ws') {
        _v327['ws-opts'] = {
          path: _v322,
          headers: {
            Host: _v323
          }
        };
      }
      if (_v326) {
        const _v329 = _v30 || 'cloudflare-ech.com';
        _v327['ech-opts'] = {
          enable: true,
          'query-server-name': _v329
        };
      }
      return _v327;
    }
  } catch (_v330) {
    return null;
  }
  return null;
}
function _v331(_v332) {
  if (_v332 == null) return '""';
  const _v333 = String(_v332);
  return '"' + _v333.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}
function _v334(_v335) {
  if (!_v335) return _v335;
  const _v336 = String(_v335);
  if (_v336.startsWith('[') && _v336.endsWith(']')) return _v336.slice(1, -1);
  return _v336;
}
function _v337(_v338, _v339 = {}) {
  const {
    directFirst: _v340 = false,
    extraGroups: _v341 = []
  } = _v339;
  const _v342 = _v338.length ? _v338.map(_v343 => `      - ${_v331(_v343)}`).join('\n') : '      - DIRECT';
  const _v344 = [];
  if (_v340) {
    _v344.push(_d64("ASAgICAgIC0gIvCfjq8g5YWo55CD55u06L+eIg=="), _d64("ASAgICAgIC0gIvCfmoAg6IqC54K56YCJ5oupIg=="));
  } else {
    _v344.push(_d64("ASAgICAgIC0gIvCfmoAg6IqC54K56YCJ5oupIg=="), _d64("ASAgICAgIC0gIvCfjq8g5YWo55CD55u06L+eIg=="));
  }
  for (const _v345 of _v341) _v344.push(`      - ${_v331(_v345)}`);
  _v344.push(_v342);
  return _v344.join('\n');
}
function _v346(_v347, _v348 = {}) {
  const {
    directFirst: _v349 = false,
    extraGroups: _v350 = [],
    compact: _v351 = false
  } = _v348;
  const _v352 = _v351 ? ',' : ', ';
  const _v353 = _v347.length ? _v347.join(_v352) : 'DIRECT';
  const _v354 = [];
  if (_v349) _v354.push(_d64("AfCfjq8g5YWo55CD55u06L+e"), _d64("AfCfmoAg6IqC54K56YCJ5oup"));else _v354.push(_d64("AfCfmoAg6IqC54K56YCJ5oup"), _d64("AfCfjq8g5YWo55CD55u06L+e"));
  _v354.push(..._v350);
  if (_v347.length) _v354.push(_v353);
  return _v354.join(_v352);
}
function _v355(_v356) {
  try {
    if (_v356.startsWith(_v4('dmxlc3M6Ly8='))) {
      const _v357 = new URL(_v356);
      const _v358 = new URLSearchParams(_v357.search);
      return {
        proto: _v4('dmxlc3M='),
        name: decodeURIComponent(_v357.hash.substring(1)) || _v357.hostname + ':' + _v357.port,
        uuid: _v357.username,
        server: _v334(_v357.hostname),
        port: parseInt(_v357.port) || 443,
        tls: _v358.get('security') === 'tls' || _v358.get('security') === 'reality',
        network: _v358.get('type') || 'ws',
        path: _v358.get('path') || '/?ed=2048',
        host: _v334(_v358.get('host') || _v357.hostname),
        sni: _v334(_v358.get('sni') || _v358.get('host') || _v357.hostname),
        alpn: (_v358.get('alpn') || '').split(',').map(_v359 => _v359.trim()).filter(Boolean),
        fp: _v358.get('fp') || 'chrome',
        flow: _v358.get('flow') || '',
        encryption: _v358.get('encryption') || 'none',
        mode: _v358.get('mode') || '',
        ech: _v358.get('ech') || ''
      };
    }
    if (_v356.startsWith(_v4('dHJvamFuOi8v'))) {
      const _v360 = new URL(_v356);
      const _v361 = new URLSearchParams(_v360.search);
      return {
        proto: _v4('dHJvamFu'),
        name: decodeURIComponent(_v360.hash.substring(1)) || _v360.hostname + ':' + _v360.port,
        password: decodeURIComponent(_v360.username),
        server: _v334(_v360.hostname),
        port: parseInt(_v360.port) || 443,
        tls: true,
        network: _v361.get('type') || 'ws',
        path: _v361.get('path') || '/?ed=2048',
        host: _v334(_v361.get('host') || _v360.hostname),
        sni: _v334(_v361.get('sni') || _v361.get('host') || _v360.hostname),
        alpn: (_v361.get('alpn') || '').split(',').map(_v362 => _v362.trim()).filter(Boolean),
        fp: _v361.get('fp') || 'chrome',
        ech: _v361.get('ech') || ''
      };
    }
  } catch (_v363) {}
  return null;
}
function _v364(_v365) {
  const _v366 = [];
  const _v367 = _v334(_v365.server);
  const _v368 = _v334(_v365.host) || _v367;
  const _v369 = _v334(_v365.sni) || _v368;
  _v366.push(`  - name: ${_v331(_v365.name)}`);
  _v366.push(`    type: ${_v365.proto}`);
  _v366.push(`    server: ${_v331(_v367)}`);
  _v366.push(`    port: ${_v365.port}`);
  if (_v365.proto === _v4('dmxlc3M=')) {
    _v366.push(`    uuid: ${_v365.uuid}`);
    _v366.push(`    udp: true`);
    _v366.push(`    tls: ${_v365.tls ? 'true' : 'false'}`);
    if (_v365.flow) _v366.push(`    flow: ${_v331(_v365.flow)}`);
    _v366.push(`    client-fingerprint: ${_v331(_v365.fp || 'chrome')}`);
  } else if (_v365.proto === _v4('dHJvamFu')) {
    _v366.push(`    password: ${_v331(_v365.password)}`);
    _v366.push(`    udp: true`);
    _v366.push(`    client-fingerprint: ${_v331(_v365.fp || 'chrome')}`);
  }
  if (_v365.tls) {
    _v366.push(`    servername: ${_v331(_v369)}`);
    if (_v365.alpn && _v365.alpn.length) {
      _v366.push(`    alpn: [${_v365.alpn.map(_v370 => _v331(_v370)).join(', ')}]`);
    }
    _v366.push(`    skip-cert-verify: false`);
  }
  if (_v365.network === 'ws' || _v365.network === 'xhttp') {
    _v366.push(`    network: ws`);
    _v366.push(`    ws-opts:`);
    _v366.push(`      path: ${_v331(_v365.path)}`);
    _v366.push(`      headers:`);
    _v366.push(`        Host: ${_v331(_v368)}`);
  } else if (_v365.network === 'grpc') {
    _v366.push(`    network: grpc`);
    _v366.push(`    grpc-opts:`);
    _v366.push(`      grpc-service-name: ${_v331(_v365.path)}`);
  }
  if (_v365.ech) {
    const _v371 = _v30 || 'cloudflare-ech.com';
    _v366.push(`    ech-opts:`);
    _v366.push(`      enable: true`);
    _v366.push(`      query-server-name: ${_v331(_v371)}`);
  }
  return _v366.join('\n');
}
function _v372(_v373, _v374 = {}) {
  const _v375 = _v373.map(_v355).filter(_v376 => _v376 && (_v376.proto === _v4('dmxlc3M=') || _v376.proto === _v4('dHJvamFu')));
  const _v377 = _v375.map(_v378 => _v378.name);
  const _v379 = _v29 || 'https://223.5.5.5/dns-query';
  const _v380 = ['mixed-port: 7890', 'allow-lan: true', 'mode: rule', 'log-level: info', 'ipv6: true', 'external-controller: 127.0.0.1:9090', 'unified-delay: true', 'tcp-concurrent: true', 'geodata-mode: true', 'geo-auto-update: true', 'geo-update-interval: 24', 'geox-url:', '  geoip: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat"', '  geosite: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat"', '  mmdb: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb"', '  asn: "https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/GeoLite2-ASN.mmdb"', 'sniffer:', '  enable: true', '  force-dns-mapping: true', '  parse-pure-ip: true', '  sniff:', '    HTTP:', '      ports: [80, 8080-8880]', '      override-destination: true', '    TLS:', '      ports: [443, 8443]', '    QUIC:', '      ports: [443, 8443]', 'dns:', '  enable: true', '  listen: 0.0.0.0:1053', '  ipv6: true', '  enhanced-mode: fake-ip', '  fake-ip-range: 198.18.0.1/16', '  fake-ip-filter:', '    - "*.lan"', '    - "+.local"', '    - "+.market.xiaomi.com"', '    - "+.msftconnecttest.com"', '    - "+.msftncsi.com"', '    - "localhost.ptlogin2.qq.com"', '    - "+.srv.nintendo.net"', '    - "+.stun.playstation.net"', '    - "+.xboxlive.com"', '  default-nameserver:', '    - 223.5.5.5', '    - 119.29.29.29', '  nameserver:', `    - ${_v379}`, '    - https://119.29.29.29/dns-query', '  fallback:', '    - https://1.1.1.1/dns-query', '    - https://8.8.8.8/dns-query', '  fallback-filter:', '    geoip: true', '    geoip-code: CN', '    ipcidr:', '      - 240.0.0.0/4', ''];
  const _v381 = ['proxies:'];
  for (const _v382 of _v375) _v381.push(_v364(_v382));
  const _v383 = _v377.length ? _v377.map(_v384 => `      - ${_v331(_v384)}`).join('\n') : '      - DIRECT';
  const _v385 = [_v4('cHJveHktZ3JvdXBzOg=='), _d64("ASAgLSBuYW1lOiAi8J+agCDoioLngrnpgInmi6ki"), '    type: select', '    proxies:', _d64("ASAgICAgIC0gIvCfjq8g5YWo55CD55u06L+eIg=="), _v383, _d64("ASAgLSBuYW1lOiAi8J+MjSDlm73lpJblqpLkvZMi"), '    type: select', '    proxies:', _v337(_v377), _d64("ASAgLSBuYW1lOiAi8J+TuiDlk5Tlk6nlk5Tlk6ki"), '    type: select', '    proxies:', _v337(_v377, {
    directFirst: true
  }), _d64("ASAgLSBuYW1lOiAi8J+TuSDmsrnnrqHop4bpopEi"), '    type: select', '    proxies:', _v337(_v377, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")]
  }), _d64("ASAgLSBuYW1lOiAi8J+OrCDlpYjpo57op4bpopEi"), '    type: select', '    proxies:', _v337(_v377, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")]
  }), _d64("ASAgLSBuYW1lOiAi8J+TsiDnlLXmiqXkv6Hmga8i"), '    type: select', '    proxies:', _v337(_v377), _d64("ASAgLSBuYW1lOiAi8J+MkCDosLfmrYzmnI3liqEi"), '    type: select', '    proxies:', _v337(_v377), '  - name: "🤖 OpenAI"', '    type: select', '    proxies:', _v337(_v377), _d64("ASAgLSBuYW1lOiAi4pOC77iPIOW+rui9r+acjeWKoSI="), '    type: select', '    proxies:', _v337(_v377, {
    directFirst: true
  }), _d64("ASAgLSBuYW1lOiAi8J+NjiDoi7nmnpzmnI3liqEi"), '    type: select', '    proxies:', _v337(_v377, {
    directFirst: true
  }), _d64("ASAgLSBuYW1lOiAi8J+OryDlhajnkIPnm7Tov54i"), '    type: select', '    proxies:', '      - DIRECT', _d64("ASAgLSBuYW1lOiAi8J+bkSDlhajnkIPmi6bmiKoi"), '    type: select', '    proxies:', '      - REJECT', '      - DIRECT', _d64("ASAgLSBuYW1lOiAi8J+NgyDlupTnlKjlh4DljJYi"), '    type: select', '    proxies:', '      - REJECT', '      - DIRECT', _d64("ASAgLSBuYW1lOiAi8J+QnyDmvI/nvZHkuYvpsbwi"), '    type: select', '    proxies:', _v337(_v377), ''];
  const _v386 = _v4('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0xveWFsc29sZGllci9jbGFzaC1ydWxlc0ByZWxlYXNl');
  const _v387 = (_v388, _v389) => [`  ${_v388}:`, `    type: http`, `    behavior: ${_v389}`, `    url: "${_v386}/${_v388}.txt"`, `    path: ./rulesets/loyalsoldier/${_v388}.txt`, `    interval: 86400`].join('\n');
  const _v390 = ['rule-providers:', _v387('reject', 'domain'), _v387('icloud', 'domain'), _v387('apple', 'domain'), _v387('google', 'domain'), _v387(_v4('cHJveHk='), 'domain'), _v387('direct', 'domain'), _v387('private', 'domain'), _v387('gfw', 'domain'), _v387('greatfire', 'domain'), _v387('tld-not-cn', 'domain'), _v387('telegramcidr', 'ipcidr'), _v387('cncidr', 'ipcidr'), _v387('lancidr', 'ipcidr'), _v387('applications', 'classical'), ''];
  const _v391 = ['rules:', _d64("ASAgLSBET01BSU4tU1VGRklYLGFjbDQuc3NyLPCfjq8g5YWo55CD55u06L+e"), _d64("ASAgLSBET01BSU4tU1VGRklYLGxvY2FsLPCfjq8g5YWo55CD55u06L+e"), _v4('ICAtIERPTUFJTixjbGFzaC5yYXpvcmQudG9wLPCfjq8g5YWo55CD55u06L+e'), _d64("ASAgLSBET01BSU4seWFjZC5oYWlzaGFuLm1lLPCfjq8g5YWo55CD55u06L+e"), _d64("ASAgLSBET01BSU4seWFjZC5tZXRhY3ViZXgub25lLPCfjq8g5YWo55CD55u06L+e"), _d64("ASAgLSBET01BSU4sZC5tZXRhY3ViZXgub25lLPCfjq8g5YWo55CD55u06L+e"), _d64("ASAgLSBET01BSU4tU1VGRklYLGdvb2dsZWFwaXMuY24s8J+MkCDosLfmrYzmnI3liqE="), _d64("ASAgLSBET01BSU4tU1VGRklYLGdzdGF0aWMuY29tLPCfjJAg6LC35q2M5pyN5Yqh"), _d64("ASAgLSBET01BSU4tU1VGRklYLHhuLS1uZ3N0ci1scmE4ai5jb20s8J+MkCDosLfmrYzmnI3liqE="), _d64("ASAgLSBET01BSU4tU1VGRklYLGdvb2dsZXZpZGVvLmNvbSzwn5O5IOayueeuoeinhumikQ=="), _d64("ASAgLSBET01BSU4tU1VGRklYLGdvb2dsZXVzZXJjb250ZW50LmNvbSzwn4yQIOiwt+atjOacjeWKoQ=="), _d64("ASAgLSBET01BSU4tS0VZV09SRCx5b3V0dWJlLPCfk7kg5rK5566h6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLHlvdXR1YmUuY29tLPCfk7kg5rK5566h6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLHlvdXR1LmJlLPCfk7kg5rK5566h6KeG6aKR"), _d64("ASAgLSBET01BSU4tS0VZV09SRCxuZXRmbGl4LPCfjqwg5aWI6aOe6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLG5mbHhleHQuY29tLPCfjqwg5aWI6aOe6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLG5mbHhzby5uZXQs8J+OrCDlpYjpo57op4bpopE="), _d64("ASAgLSBET01BSU4tU1VGRklYLG5mbHh2aWRlby5uZXQs8J+OrCDlpYjpo57op4bpopE="), _d64("ASAgLSBET01BSU4tU1VGRklYLG5mbHhpbWcuY29tLPCfjqwg5aWI6aOe6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLG5mbHhpbWcubmV0LPCfjqwg5aWI6aOe6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLG5ldGZsaXguY29tLPCfjqwg5aWI6aOe6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLG5ldGZsaXgubmV0LPCfjqwg5aWI6aOe6KeG6aKR"), _d64("ASAgLSBET01BSU4tU1VGRklYLGJpbGliaWxpLmNvbSzwn5O6IOWTlOWTqeWTlOWTqQ=="), _d64("ASAgLSBET01BSU4tU1VGRklYLGJpbGl2aWRlby5jb20s8J+TuiDlk5Tlk6nlk5Tlk6k="), _d64("ASAgLSBET01BSU4tU1VGRklYLGhkc2xiLmNvbSzwn5O6IOWTlOWTqeWTlOWTqQ=="), '  - DOMAIN-KEYWORD,openai,🤖 OpenAI', '  - DOMAIN-KEYWORD,chatgpt,🤖 OpenAI', '  - DOMAIN-SUFFIX,openai.com,🤖 OpenAI', '  - DOMAIN-SUFFIX,chatgpt.com,🤖 OpenAI', '  - DOMAIN-SUFFIX,oaistatic.com,🤖 OpenAI', '  - DOMAIN-SUFFIX,oaiusercontent.com,🤖 OpenAI', '  - DOMAIN-SUFFIX,anthropic.com,🤖 OpenAI', '  - DOMAIN-SUFFIX,claude.ai,🤖 OpenAI', '  - DOMAIN-SUFFIX,perplexity.ai,🤖 OpenAI', '  - DOMAIN-SUFFIX,gemini.google.com,🤖 OpenAI', _d64("ASAgLSBSVUxFLVNFVCxhcHBsaWNhdGlvbnMs8J+OryDlhajnkIPnm7Tov54="), _d64("ASAgLSBSVUxFLVNFVCxwcml2YXRlLPCfjq8g5YWo55CD55u06L+e"), _d64("ASAgLSBSVUxFLVNFVCxyZWplY3Qs8J+bkSDlhajnkIPmi6bmiKo="), _d64("ASAgLSBSVUxFLVNFVCxpY2xvdWQs8J+NjiDoi7nmnpzmnI3liqE="), _d64("ASAgLSBSVUxFLVNFVCxhcHBsZSzwn42OIOiLueaenOacjeWKoQ=="), _d64("ASAgLSBSVUxFLVNFVCxnb29nbGUs8J+MkCDosLfmrYzmnI3liqE="), _v4('ICAtIFJVTEUtU0VULHByb3h5LPCfmoAg6IqC54K56YCJ5oup'), _d64("ASAgLSBSVUxFLVNFVCxnZncs8J+agCDoioLngrnpgInmi6k="), _d64("ASAgLSBSVUxFLVNFVCxncmVhdGZpcmUs8J+agCDoioLngrnpgInmi6k="), _d64("ASAgLSBSVUxFLVNFVCx0bGQtbm90LWNuLPCfmoAg6IqC54K56YCJ5oup"), _d64("ASAgLSBSVUxFLVNFVCxkaXJlY3Qs8J+OryDlhajnkIPnm7Tov54="), _d64("ASAgLSBSVUxFLVNFVCxsYW5jaWRyLPCfjq8g5YWo55CD55u06L+eLG5vLXJlc29sdmU="), _d64("ASAgLSBSVUxFLVNFVCxjbmNpZHIs8J+OryDlhajnkIPnm7Tov54sbm8tcmVzb2x2ZQ=="), _d64("ASAgLSBSVUxFLVNFVCx0ZWxlZ3JhbWNpZHIs8J+TsiDnlLXmiqXkv6Hmga8sbm8tcmVzb2x2ZQ=="), _d64("ASAgLSBHRU9JUCxMQU4s8J+OryDlhajnkIPnm7Tov54sbm8tcmVzb2x2ZQ=="), _d64("ASAgLSBHRU9JUCxDTizwn46vIOWFqOeQg+ebtOi/nixuby1yZXNvbHZl"), _d64("ASAgLSBNQVRDSCzwn5CfIOa8j+e9keS5i+mxvA==")];
  return [_v380.join('\n'), _v381.join('\n'), '', _v385.join('\n'), _v390.join('\n'), _v391.join('\n'), ''].join('\n');
}
function _v392(_v393) {
  const _v394 = _v393.map(_v355).filter(_v395 => _v395 && (_v395.proto === _v4('dmxlc3M=') || _v395.proto === _v4('dHJvamFu')));
  const _v396 = _v29 || 'https://223.5.5.5/dns-query';
  const _v397 = _v394.map(_v398 => _v398.name);
  function _v399(_v400) {
    const _v401 = {
      type: _v400.proto,
      tag: _v400.name,
      server: _v334(_v400.server),
      server_port: _v400.port
    };
    if (_v400.proto === _v4('dmxlc3M=')) {
      _v401.uuid = _v400.uuid;
      if (_v400.flow) _v401.flow = _v400.flow;
    } else {
      _v401.password = _v400.password;
    }
    if (_v400.tls) {
      _v401.tls = {
        enabled: true,
        server_name: _v400.sni,
        insecure: false,
        utls: {
          enabled: true,
          fingerprint: _v400.fp || 'chrome'
        }
      };
      if (_v400.alpn && _v400.alpn.length) _v401.tls.alpn = _v400.alpn;
      if (_v400.ech) {
        _v401.tls.ech = {
          enabled: true,
          pq_signature_schemes_enabled: false,
          dynamic_record_sizing_disabled: false
        };
      }
    }
    if (_v400.network === 'ws' || _v400.network === 'xhttp') {
      _v401.transport = {
        type: 'ws',
        path: _v400.path,
        headers: {
          Host: _v400.host
        },
        max_early_data: 2048,
        early_data_header_name: 'Sec-WebSocket-Protocol'
      };
    } else if (_v400.network === 'grpc') {
      _v401.transport = {
        type: 'grpc',
        service_name: _v400.path
      };
    }
    return _v401;
  }
  const _v402 = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite';
  const _v403 = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip';
  const _v404 = _v405 => ({
    tag: `geosite-${_v405}`,
    type: 'remote',
    format: 'binary',
    url: `${_v402}/${_v405}.srs`,
    download_detour: 'direct'
  });
  const _v406 = _v407 => ({
    tag: `geoip-${_v407}`,
    type: 'remote',
    format: 'binary',
    url: `${_v403}/${_v407}.srs`,
    download_detour: 'direct'
  });
  const _v56 = {
    log: {
      level: 'info',
      timestamp: true
    },
    dns: {
      servers: [{
        tag: 'remote',
        address: _v396,
        detour: 'select'
      }, {
        tag: 'local',
        address: '223.5.5.5',
        detour: 'direct'
      }, {
        tag: 'fakeip',
        address: 'fakeip'
      }, {
        tag: 'block',
        address: 'rcode://success'
      }],
      rules: [{
        outbound: 'any',
        server: 'local'
      }, {
        rule_set: 'geosite-category-ads-all',
        server: 'block'
      }, {
        rule_set: 'geosite-cn',
        server: 'local'
      }, {
        query_type: ['A', 'AAAA'],
        server: 'fakeip'
      }],
      fakeip: {
        enabled: true,
        inet4_range: '198.18.0.0/15',
        inet6_range: 'fc00::/18'
      },
      independent_cache: true,
      strategy: 'ipv4_only'
    },
    inbounds: [{
      type: 'mixed',
      tag: 'mixed-in',
      listen: '127.0.0.1',
      listen_port: 2080,
      sniff: true,
      sniff_override_destination: true
    }, {
      type: 'tun',
      tag: 'tun-in',
      interface_name: _v4('c2luZy1ib3g='),
      address: ['172.19.0.1/30', 'fdfe:dcba:9876::1/126'],
      mtu: 9000,
      auto_route: true,
      strict_route: true,
      stack: 'mixed',
      sniff: true,
      sniff_override_destination: true
    }],
    outbounds: [{
      type: 'selector',
      tag: 'select',
      outbounds: ['direct', ..._v397],
      default: _v397[0] || 'direct'
    }, {
      type: 'selector',
      tag: _d64("AfCfjI0g5Zu95aSW5aqS5L2T"),
      outbounds: ['select', 'direct', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AfCfk7Ig55S15oql5L+h5oGv"),
      outbounds: ['select', 'direct', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AfCfjJAg6LC35q2M5pyN5Yqh"),
      outbounds: ['select', 'direct', ..._v397]
    }, {
      type: 'selector',
      tag: '🤖 OpenAI',
      outbounds: ['select', 'direct', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AeKTgu+4jyDlvq7ova/mnI3liqE="),
      outbounds: ['direct', 'select', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AfCfjY4g6Iu55p6c5pyN5Yqh"),
      outbounds: ['direct', 'select', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AfCfk7og5ZOU5ZOp5ZOU5ZOp"),
      outbounds: ['direct', 'select', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AfCfk7kg5rK5566h6KeG6aKR"),
      outbounds: ['select', _d64("AfCfjI0g5Zu95aSW5aqS5L2T"), 'direct', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AfCfjqwg5aWI6aOe6KeG6aKR"),
      outbounds: ['select', _d64("AfCfjI0g5Zu95aSW5aqS5L2T"), 'direct', ..._v397]
    }, {
      type: 'selector',
      tag: _d64("AfCfjq8g5YWo55CD55u06L+e"),
      outbounds: ['direct']
    }, {
      type: 'selector',
      tag: _d64("AfCfkJ8g5ryP572R5LmL6bG8"),
      outbounds: ['select', 'direct', ..._v397]
    }, ..._v394.map(_v399), {
      type: 'direct',
      tag: 'direct'
    }, {
      type: 'block',
      tag: 'block'
    }, {
      type: 'dns',
      tag: 'dns-out'
    }],
    route: {
      rule_set: [_v404('cn'), _v404('private'), _v404('apple'), _v404('apple-cn'), _v404('microsoft'), _v404('microsoft@cn'), _v404('google'), _v404('telegram'), _v404('openai'), _v404('anthropic'), _v404('youtube'), _v404('netflix'), _v404('disney'), _v404('spotify'), _v404('tiktok'), _v404('twitter'), _v404('facebook'), _v404('github'), _v404('geolocation-!cn'), _v404('category-ads-all'), _v406('cn'), _v406('private'), _v406('telegram')],
      rules: [{
        protocol: 'dns',
        outbound: 'dns-out'
      }, {
        ip_is_private: true,
        outbound: 'direct'
      }, {
        rule_set: 'geosite-category-ads-all',
        outbound: 'block'
      }, {
        rule_set: 'geosite-private',
        outbound: 'direct'
      }, {
        rule_set: 'geosite-apple-cn',
        outbound: 'direct'
      }, {
        rule_set: 'geosite-microsoft@cn',
        outbound: 'direct'
      }, {
        rule_set: 'geosite-apple',
        outbound: _d64("AfCfjY4g6Iu55p6c5pyN5Yqh")
      }, {
        rule_set: 'geosite-microsoft',
        outbound: _d64("AeKTgu+4jyDlvq7ova/mnI3liqE=")
      }, {
        rule_set: 'geosite-openai',
        outbound: '🤖 OpenAI'
      }, {
        rule_set: 'geosite-anthropic',
        outbound: '🤖 OpenAI'
      }, {
        rule_set: 'geosite-telegram',
        outbound: _d64("AfCfk7Ig55S15oql5L+h5oGv")
      }, {
        rule_set: 'geoip-telegram',
        outbound: _d64("AfCfk7Ig55S15oql5L+h5oGv")
      }, {
        rule_set: 'geosite-google',
        outbound: _d64("AfCfjJAg6LC35q2M5pyN5Yqh")
      }, {
        rule_set: 'geosite-youtube',
        outbound: _d64("AfCfjI0g5Zu95aSW5aqS5L2T")
      }, {
        rule_set: 'geosite-netflix',
        outbound: _d64("AfCfjI0g5Zu95aSW5aqS5L2T")
      }, {
        rule_set: 'geosite-disney',
        outbound: _d64("AfCfjI0g5Zu95aSW5aqS5L2T")
      }, {
        rule_set: 'geosite-spotify',
        outbound: _d64("AfCfjI0g5Zu95aSW5aqS5L2T")
      }, {
        rule_set: 'geosite-tiktok',
        outbound: _d64("AfCfjI0g5Zu95aSW5aqS5L2T")
      }, {
        rule_set: 'geosite-twitter',
        outbound: _d64("AfCfjI0g5Zu95aSW5aqS5L2T")
      }, {
        rule_set: 'geosite-facebook',
        outbound: _d64("AfCfjI0g5Zu95aSW5aqS5L2T")
      }, {
        rule_set: 'geosite-github',
        outbound: 'select'
      }, {
        rule_set: 'geosite-geolocation-!cn',
        outbound: 'select'
      }, {
        rule_set: 'geosite-cn',
        outbound: 'direct'
      }, {
        rule_set: 'geoip-cn',
        outbound: 'direct'
      }, {
        ip_is_private: true,
        outbound: 'direct'
      }],
      final: _d64("AfCfkJ8g5ryP572R5LmL6bG8"),
      auto_detect_interface: true
    },
    experimental: {
      cache_file: {
        enabled: true,
        store_fakeip: true
      },
      [_v4('Y2xhc2hfYXBp')]: {
        external_controller: '127.0.0.1:9090'
      }
    }
  };
  return JSON.stringify(_v56, null, 2);
}
const _v408 = _v4('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0FDTDRTU1IvQUNMNFNTUkBtYXN0ZXIvQ2xhc2g=');
const _v409 = _v410 => `${_v408}/${_v410}.list`;
function _v411(_v412) {
  const _v413 = _v412.map(_v355).filter(_v414 => _v414 && _v414.proto === _v4('dHJvamFu'));
  const _v415 = _v29 || '223.5.5.5';
  const _v416 = _v413.map(_v417 => _v417.name);
  const _v418 = ['[General]', 'loglevel = notify', 'internet-test-url = http://www.apple.com/library/test/success.html', _v4('cHJveHktdGVzdC11cmwgPSBodHRwOi8vd3d3LmdzdGF0aWMuY29tL2dlbmVyYXRlXzIwNA=='), 'test-timeout = 3', `dns-server = ${_v415.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}, 119.29.29.29, system`, 'encrypted-dns-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query', 'ipv6 = true', 'allow-wifi-access = false', 'wifi-access-http-port = 6152', _v4('d2lmaS1hY2Nlc3Mtc29ja3M1LXBvcnQgPSA2MTUz'), _v4('c2tpcC1wcm94eSA9IDEyNy4wLjAuMSwgMTkyLjE2OC4wLjAvMTYsIDEwLjAuMC4wLzgsIDE3Mi4xNi4wLjAvMTIsIGxvY2FsaG9zdCwgKi5sb2NhbCwgY2FwdGl2ZS5hcHBsZS5jb20='), 'exclude-simple-hostnames = true', 'show-error-page-for-reject = true', '', _v4('W1Byb3h5XQ==')];
  for (const _v419 of _v413) {
    const _v420 = _v419.sni;
    _v418.push(`${_v419.name} = ${_v4('dHJvamFu')}, ${_v419.server}, ${_v419.port}, password=${_v419.password}, sni=${_v420}, ws=true, ws-path=${_v419.path}, ws-headers=Host:${_v419.host}, skip-cert-verify=false, tfo=true`);
  }
  if (!_v413.length) {
    _v418.push('Direct = direct');
  }
  _v418.push('');
  _v418.push(_v4('W1Byb3h5IEdyb3VwXQ=='));
  const _v421 = _v416.length ? _v416.join(', ') : 'DIRECT';
  _v418.push(_d64("AfCfmoAg6IqC54K56YCJ5oupID0gc2VsZWN0LCDwn46vIOWFqOeQg+ebtOi/niwg") + String(_v421));
  _v418.push(_d64("AfCfjI0g5Zu95aSW5aqS5L2TID0gc2VsZWN0LCA=") + String(_v346(_v416)));
  _v418.push(_d64("AfCfk7og5ZOU5ZOp5ZOU5ZOpID0gc2VsZWN0LCA=") + String(_v346(_v416, {
    directFirst: true
  })));
  _v418.push(_d64("AfCfk7kg5rK5566h6KeG6aKRID0gc2VsZWN0LCA=") + String(_v346(_v416, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")]
  })));
  _v418.push(_d64("AfCfjqwg5aWI6aOe6KeG6aKRID0gc2VsZWN0LCA=") + String(_v346(_v416, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")]
  })));
  _v418.push(_d64("AfCfk7Ig55S15oql5L+h5oGvID0gc2VsZWN0LCA=") + String(_v346(_v416)));
  _v418.push(_d64("AfCfjJAg6LC35q2M5pyN5YqhID0gc2VsZWN0LCA=") + String(_v346(_v416)));
  _v418.push(`🤖 OpenAI = select, ${_v346(_v416)}`);
  _v418.push(_d64("AeKTgu+4jyDlvq7ova/mnI3liqEgPSBzZWxlY3QsIA==") + String(_v346(_v416, {
    directFirst: true
  })));
  _v418.push(_d64("AfCfjY4g6Iu55p6c5pyN5YqhID0gc2VsZWN0LCA=") + String(_v346(_v416, {
    directFirst: true
  })));
  _v418.push(_d64("AfCfjq8g5YWo55CD55u06L+eID0gc2VsZWN0LCBESVJFQ1Q="));
  _v418.push(_d64("AfCfm5Eg5YWo55CD5oum5oiqID0gc2VsZWN0LCBSRUpFQ1QsIERJUkVDVA=="));
  _v418.push(_d64("AfCfkJ8g5ryP572R5LmL6bG8ID0gc2VsZWN0LCA=") + String(_v346(_v416)));
  _v418.push('');
  _v418.push('[Rule]');
  _v418.push("RULE-SET," + String(_v409('LocalAreaNetwork')) + _d64("ASzwn46vIOWFqOeQg+ebtOi/ng=="));
  _v418.push("RULE-SET," + String(_v409('UnBan')) + _d64("ASzwn46vIOWFqOeQg+ebtOi/ng=="));
  _v418.push("RULE-SET," + String(_v409('BanAD')) + _d64("ASzwn5uRIOWFqOeQg+aLpuaIqg=="));
  _v418.push("RULE-SET," + String(_v409('BanProgramAD')) + _d64("ASzwn5uRIOWFqOeQg+aLpuaIqg=="));
  _v418.push("RULE-SET," + String(_v409('GoogleFCM')) + _d64("ASzwn4yQIOiwt+atjOacjeWKoQ=="));
  _v418.push("RULE-SET," + String(_v409('GoogleCN')) + _d64("ASzwn46vIOWFqOeQg+ebtOi/ng=="));
  _v418.push("RULE-SET," + String(_v409('SteamCN')) + _d64("ASzwn46vIOWFqOeQg+ebtOi/ng=="));
  _v418.push("RULE-SET," + String(_v409('Microsoft')) + _d64("ASzik4LvuI8g5b6u6L2v5pyN5Yqh"));
  _v418.push("RULE-SET," + String(_v409('Apple')) + _d64("ASzwn42OIOiLueaenOacjeWKoQ=="));
  _v418.push("RULE-SET," + String(_v409('Telegram')) + _d64("ASzwn5OyIOeUteaKpeS/oeaBrw=="));
  _v418.push(`RULE-SET,${_v409('OpenAi')},🤖 OpenAI`);
  _v418.push(`RULE-SET,${_v409('Claude')},🤖 OpenAI`);
  _v418.push(`RULE-SET,${_v409('Copilot')},🤖 OpenAI`);
  _v418.push("RULE-SET," + String(_v409('Netflix')) + _d64("ASzwn4yNIOWbveWkluWqkuS9kw=="));
  _v418.push("RULE-SET," + String(_v409('YouTube')) + _d64("ASzwn4yNIOWbveWkluWqkuS9kw=="));
  _v418.push("RULE-SET," + String(_v409('Disney')) + _d64("ASzwn4yNIOWbveWkluWqkuS9kw=="));
  _v418.push("RULE-SET," + String(_v409('Spotify')) + _d64("ASzwn4yNIOWbveWkluWqkuS9kw=="));
  _v418.push("RULE-SET," + String(_v409('TikTok')) + _d64("ASzwn4yNIOWbveWkluWqkuS9kw=="));
  _v418.push("RULE-SET," + String(_v409('BiliBili')) + _d64("ASzwn5O6IOWTlOWTqeWTlOWTqQ=="));
  _v418.push("RULE-SET," + String(_v409(_v4('UHJveHlNZWRpYQ=='))) + _d64("ASzwn4yNIOWbveWkluWqkuS9kw=="));
  _v418.push("RULE-SET," + String(_v409(_v4('UHJveHlHRldsaXN0'))) + _d64("ASzwn5qAIOiKgueCuemAieaLqQ=="));
  _v418.push("RULE-SET," + String(_v409('ChinaDomain')) + _d64("ASzwn46vIOWFqOeQg+ebtOi/ng=="));
  _v418.push("RULE-SET," + String(_v409('ChinaCompanyIp')) + _d64("ASzwn46vIOWFqOeQg+ebtOi/ng=="));
  _v418.push("RULE-SET," + String(_v409('ChinaIp')) + _d64("ASzwn46vIOWFqOeQg+ebtOi/ng=="));
  _v418.push(_d64("AUdFT0lQLENOLPCfjq8g5YWo55CD55u06L+e"));
  _v418.push(_d64("AUZJTkFMLPCfkJ8g5ryP572R5LmL6bG8LGRucy1mYWlsZWQ="));
  return _v418.join('\n');
}
function _v422(_v423) {
  const _v424 = _v423.map(_v355).filter(_v425 => _v425 && (_v425.proto === _v4('dmxlc3M=') || _v425.proto === _v4('dHJvamFu')));
  const _v426 = _v424.map(_v427 => _v427.name);
  const _v428 = ['[General]', 'ip-mode = dual', `dns-server = ${(_v29 || '223.5.5.5').replace(/^https?:\/\//, '').replace(/\/.*$/, '')},119.29.29.29,system`, 'doh-server = https://223.5.5.5/dns-query, https://1.12.12.12/dns-query', _v4('YWxsb3ctdWRwLXByb3h5ID0gdHJ1ZQ=='), 'allow-wifi-access = false', 'sni-sniffing = true', _v4('c2tpcC1wcm94eSA9IDEyNy4wLjAuMSwxOTIuMTY4LjAuMC8xNiwxMC4wLjAuMC84LDE3Mi4xNi4wLjAvMTIsbG9jYWxob3N0LCoubG9jYWwsY2FwdGl2ZS5hcHBsZS5jb20='), 'bypass-tun = 10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,255.255.255.255/32', '', _v4('W1Byb3h5XQ==')];
  for (const _v429 of _v424) {
    if (_v429.proto === _v4('dmxlc3M=')) {
      const _v430 = [`${_v429.server}`, `${_v429.port}`, `udp=true`, `username=${_v429.uuid}`, `transport=ws`, `path=${_v429.path}`, `host=${_v429.host}`, `over-tls=${_v429.tls ? 'true' : 'false'}`];
      if (_v429.tls) {
        _v430.push(`tls-name=${_v429.sni}`);
        if (_v429.alpn && _v429.alpn.length) _v430.push(`alpn=${_v429.alpn.join(':')}`);
        _v430.push(`skip-cert-verify=false`);
      }
      _v428.push(`${_v429.name} = ${_v4('dmxlc3M=')},${_v430.join(',')}`);
    } else {
      const _v431 = [`${_v429.server}`, `${_v429.port}`, `password=${_v429.password}`, `transport=ws`, `path=${_v429.path}`, `host=${_v429.host}`, `over-tls=true`, `tls-name=${_v429.sni}`];
      if (_v429.alpn && _v429.alpn.length) _v431.push(`alpn=${_v429.alpn.join(':')}`);
      _v431.push(`skip-cert-verify=false`);
      _v428.push(`${_v429.name} = ${_v4('dHJvamFu')},${_v431.join(',')}`);
    }
  }
  _v428.push('');
  _v428.push(_v4('W1Byb3h5IEdyb3VwXQ=='));
  const _v432 = _v426.length ? _v426.join(',') : 'DIRECT';
  _v428.push(_d64("AfCfmoAg6IqC54K56YCJ5oupID0gc2VsZWN0LPCfjq8g5YWo55CD55u06L+eLA==") + String(_v432));
  _v428.push(_d64("AfCfjI0g5Zu95aSW5aqS5L2TID0gc2VsZWN0LA==") + String(_v346(_v426, {
    compact: true
  })));
  _v428.push(_d64("AfCfk7og5ZOU5ZOp5ZOU5ZOpID0gc2VsZWN0LA==") + String(_v346(_v426, {
    directFirst: true,
    compact: true
  })));
  _v428.push(_d64("AfCfk7kg5rK5566h6KeG6aKRID0gc2VsZWN0LA==") + String(_v346(_v426, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")],
    compact: true
  })));
  _v428.push(_d64("AfCfjqwg5aWI6aOe6KeG6aKRID0gc2VsZWN0LA==") + String(_v346(_v426, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")],
    compact: true
  })));
  _v428.push(_d64("AfCfk7Ig55S15oql5L+h5oGvID0gc2VsZWN0LA==") + String(_v346(_v426, {
    compact: true
  })));
  _v428.push(_d64("AfCfjJAg6LC35q2M5pyN5YqhID0gc2VsZWN0LA==") + String(_v346(_v426, {
    compact: true
  })));
  _v428.push(`🤖 OpenAI = select,${_v346(_v426, {
    compact: true
  })}`);
  _v428.push(_d64("AeKTgu+4jyDlvq7ova/mnI3liqEgPSBzZWxlY3Qs") + String(_v346(_v426, {
    directFirst: true,
    compact: true
  })));
  _v428.push(_d64("AfCfjY4g6Iu55p6c5pyN5YqhID0gc2VsZWN0LA==") + String(_v346(_v426, {
    directFirst: true,
    compact: true
  })));
  _v428.push(_d64("AfCfjq8g5YWo55CD55u06L+eID0gc2VsZWN0LERJUkVDVA=="));
  _v428.push(_d64("AfCfm5Eg5YWo55CD5oum5oiqID0gc2VsZWN0LFJFSkVDVCxESVJFQ1Q="));
  _v428.push(_d64("AfCfkJ8g5ryP572R5LmL6bG8ID0gc2VsZWN0LA==") + String(_v346(_v426, {
    compact: true
  })));
  _v428.push('');
  _v428.push('[Remote Rule]');
  _v428.push("" + String(_v409('LocalAreaNetwork')) + _d64("ASwgcG9saWN5PfCfjq8g5YWo55CD55u06L+eLCB0YWc95bGA5Z+f572RLCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409('BanAD')) + _d64("ASwgcG9saWN5PfCfm5Eg5YWo55CD5oum5oiqLCB0YWc95bm/5ZGK5oum5oiqLCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409('BanProgramAD')) + _d64("ASwgcG9saWN5PfCfm5Eg5YWo55CD5oum5oiqLCB0YWc95bqU55So5bm/5ZGKLCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409('GoogleCN')) + _d64("ASwgcG9saWN5PfCfjq8g5YWo55CD55u06L+eLCB0YWc9R29vZ2xlQ04sIGVuYWJsZWQ9dHJ1ZQ=="));
  _v428.push("" + String(_v409('SteamCN')) + _d64("ASwgcG9saWN5PfCfjq8g5YWo55CD55u06L+eLCB0YWc9U3RlYW1DTiwgZW5hYmxlZD10cnVl"));
  _v428.push("" + String(_v409('Microsoft')) + _d64("ASwgcG9saWN5PeKTgu+4jyDlvq7ova/mnI3liqEsIHRhZz3lvq7ova8sIGVuYWJsZWQ9dHJ1ZQ=="));
  _v428.push("" + String(_v409('Apple')) + _d64("ASwgcG9saWN5PfCfjY4g6Iu55p6c5pyN5YqhLCB0YWc96Iu55p6cLCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409('Telegram')) + _d64("ASwgcG9saWN5PfCfk7Ig55S15oql5L+h5oGvLCB0YWc955S15oqlLCBlbmFibGVkPXRydWU="));
  _v428.push(`${_v409('OpenAi')}, policy=🤖 OpenAI, tag=OpenAI, enabled=true`);
  _v428.push("" + String(_v409('Netflix')) + _d64("ASwgcG9saWN5PfCfjI0g5Zu95aSW5aqS5L2TLCB0YWc9TmV0ZmxpeCwgZW5hYmxlZD10cnVl"));
  _v428.push("" + String(_v409('YouTube')) + _d64("ASwgcG9saWN5PfCfjI0g5Zu95aSW5aqS5L2TLCB0YWc9WW91VHViZSwgZW5hYmxlZD10cnVl"));
  _v428.push("" + String(_v409('Disney')) + _d64("ASwgcG9saWN5PfCfjI0g5Zu95aSW5aqS5L2TLCB0YWc9RGlzbmV5LCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409('Spotify')) + _d64("ASwgcG9saWN5PfCfjI0g5Zu95aSW5aqS5L2TLCB0YWc9U3BvdGlmeSwgZW5hYmxlZD10cnVl"));
  _v428.push("" + String(_v409('TikTok')) + _d64("ASwgcG9saWN5PfCfjI0g5Zu95aSW5aqS5L2TLCB0YWc9VGlrVG9rLCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409('BiliBili')) + _d64("ASwgcG9saWN5PfCfk7og5ZOU5ZOp5ZOU5ZOpLCB0YWc95ZOU5ZOp5ZOU5ZOpLCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409(_v4('UHJveHlNZWRpYQ=='))) + _d64("ASwgcG9saWN5PfCfjI0g5Zu95aSW5aqS5L2TLCB0YWc9") + String(_v4('5Luj55CG5aqS5L2T')) + ", enabled=true");
  _v428.push("" + String(_v409(_v4('UHJveHlHRldsaXN0'))) + _d64("ASwgcG9saWN5PfCfmoAg6IqC54K56YCJ5oupLCB0YWc9") + String(_v4('5Luj55CG5YiX6KGo')) + ", enabled=true");
  _v428.push("" + String(_v409('ChinaDomain')) + _d64("ASwgcG9saWN5PfCfjq8g5YWo55CD55u06L+eLCB0YWc95Lit5Zu95Z+f5ZCNLCBlbmFibGVkPXRydWU="));
  _v428.push("" + String(_v409('ChinaIp')) + _d64("ASwgcG9saWN5PfCfjq8g5YWo55CD55u06L+eLCB0YWc95Lit5Zu9SVAsIGVuYWJsZWQ9dHJ1ZQ=="));
  _v428.push('');
  _v428.push('[Rule]');
  _v428.push(_d64("AUdFT0lQLENOLPCfjq8g5YWo55CD55u06L+e"));
  _v428.push(_d64("AUZJTkFMLPCfkJ8g5ryP572R5LmL6bG8"));
  return _v428.join('\n');
}
function _v433(_v434) {
  const _v435 = _v434.map(_v355).filter(_v436 => _v436 && (_v436.proto === _v4('dmxlc3M=') || _v436.proto === _v4('dHJvamFu')));
  const _v60 = _v435.map(_v437 => _v437.name);
  const _v438 = _v4('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL2JsYWNrbWF0cml4Ny9pb3NfcnVsZV9zY3JpcHRAbWFzdGVyL3J1bGUvUXVhbnR1bXVsdFg=');
  const _v439 = ['[general]', 'network_check_url=http://www.gstatic.com/generate_204', 'server_check_url=http://www.gstatic.com/generate_204', 'profile_img_url=https://img.icons8.com/fluency/96/nexus.png', 'dns_exclusion_list=*.cmpassport.com, *.jegotrip.com.cn, *.icloud.com, *.icloud.com.cn, *.apple.com, *.weibo.com, *.qq.com', 'running_mode_trigger=filter', '', '[dns]', `server=${(_v29 || '223.5.5.5').replace(/^https?:\/\//, '').replace(/\/.*$/, '')}`, 'server=119.29.29.29', 'server=https://223.5.5.5/dns-query', 'server=https://1.12.12.12/dns-query', '', '[server_local]'];
  for (const _v440 of _v435) {
    if (_v440.proto === _v4('dmxlc3M=')) {
      const _v441 = [`${_v440.server}:${_v440.port}`, `method=none`, `password=${_v440.uuid}`, `obfs=${_v440.tls ? 'wss' : 'ws'}`, `obfs-host=${_v440.host}`, `obfs-uri=${_v440.path}`];
      if (_v440.tls) _v441.push(`tls-verification=true`, `tls13=true`);
      _v441.push(`tag=${_v440.name}`);
      _v439.push(`${_v4('dmxlc3M=')}=${_v441.join(', ')}`);
    } else {
      const _v442 = [`${_v440.server}:${_v440.port}`, `password=${_v440.password}`, `over-tls=true`, `tls-host=${_v440.sni}`, `obfs=wss`, `obfs-host=${_v440.host}`, `obfs-uri=${_v440.path}`, `tls-verification=true`, `tag=${_v440.name}`];
      _v439.push(`${_v4('dHJvamFu')}=${_v442.join(', ')}`);
    }
  }
  _v439.push('');
  _v439.push('[policy]');
  const _v443 = _v60.length ? _v60.join(', ') : 'direct';
  _v439.push(_d64("AXN0YXRpYz3wn5qAIOiKgueCuemAieaLqSwg") + String(_v443) + ", direct, img-url=" + String(_v4('aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0tvb2xzb24vUXVyZUBtYXN0ZXIvSWNvblNldC9Db2xvci9Qcm94eS5wbmc=')));
  _v439.push(_d64("AXN0YXRpYz3wn4yNIOWbveWkluWqkuS9kywg") + String(_v346(_v60)) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ForeignMedia.png");
  _v439.push(_d64("AXN0YXRpYz3wn5O6IOWTlOWTqeWTlOWTqSwg") + String(_v346(_v60, {
    directFirst: true
  })) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/bilibili.png");
  _v439.push(_d64("AXN0YXRpYz3wn5O5IOayueeuoeinhumikSwg") + String(_v346(_v60, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")]
  })) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png");
  _v439.push(_d64("AXN0YXRpYz3wn46sIOWliOmjnuinhumikSwg") + String(_v346(_v60, {
    extraGroups: [_d64("AfCfjI0g5Zu95aSW5aqS5L2T")]
  })) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png");
  _v439.push(_d64("AXN0YXRpYz3wn5OyIOeUteaKpeS/oeaBrywg") + String(_v346(_v60)) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png");
  _v439.push(_d64("AXN0YXRpYz3wn4yQIOiwt+atjOacjeWKoSwg") + String(_v346(_v60)) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google.png");
  _v439.push(`static=🤖 OpenAI, ${_v346(_v60)}, img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png`);
  _v439.push(_d64("AXN0YXRpYz3ik4LvuI8g5b6u6L2v5pyN5YqhLCA=") + String(_v346(_v60, {
    directFirst: true
  })) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png");
  _v439.push(_d64("AXN0YXRpYz3wn42OIOiLueaenOacjeWKoSwg") + String(_v346(_v60, {
    directFirst: true
  })) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png");
  _v439.push(_d64("AXN0YXRpYz3wn46vIOWFqOeQg+ebtOi/niwgZGlyZWN0LCBpbWctdXJsPWh0dHBzOi8vZmFzdGx5LmpzZGVsaXZyLm5ldC9naC9Lb29sc29uL1F1cmVAbWFzdGVyL0ljb25TZXQvQ29sb3IvRGlyZWN0LnBuZw=="));
  _v439.push(_d64("AXN0YXRpYz3wn5uRIOWFqOeQg+aLpuaIqiwgcmVqZWN0LCBkaXJlY3QsIGltZy11cmw9aHR0cHM6Ly9mYXN0bHkuanNkZWxpdnIubmV0L2doL0tvb2xzb24vUXVyZUBtYXN0ZXIvSWNvblNldC9Db2xvci9BZHZlcnRpc2luZy5wbmc="));
  _v439.push(_d64("AXN0YXRpYz3wn5CfIOa8j+e9keS5i+mxvCwg") + String(_v346(_v60)) + ", img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png");
  _v439.push('');
  _v439.push('[filter_remote]');
  _v439.push("" + String(_v438) + _d64("AS9MYW4vTGFuLmxpc3QsIHRhZz3lsYDln5/nvZEsIGZvcmNlLXBvbGljeT3wn46vIOWFqOeQg+ebtOi/niwgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push("" + String(_v438) + _d64("AS9BZHZlcnRpc2luZy9BZHZlcnRpc2luZy5saXN0LCB0YWc95bm/5ZGK5oum5oiqLCBmb3JjZS1wb2xpY3k98J+bkSDlhajnkIPmi6bmiKosIHVwZGF0ZS1pbnRlcnZhbD04NjQwMCwgb3B0LXBhcnNlcj1mYWxzZSwgZW5hYmxlZD10cnVl"));
  _v439.push("" + String(_v438) + _d64("AS9NaWNyb3NvZnQvTWljcm9zb2Z0Lmxpc3QsIHRhZz3lvq7ova8sIGZvcmNlLXBvbGljeT3ik4LvuI8g5b6u6L2v5pyN5YqhLCB1cGRhdGUtaW50ZXJ2YWw9ODY0MDAsIG9wdC1wYXJzZXI9ZmFsc2UsIGVuYWJsZWQ9dHJ1ZQ=="));
  _v439.push("" + String(_v438) + _d64("AS9BcHBsZS9BcHBsZS5saXN0LCB0YWc96Iu55p6cLCBmb3JjZS1wb2xpY3k98J+NjiDoi7nmnpzmnI3liqEsIHVwZGF0ZS1pbnRlcnZhbD04NjQwMCwgb3B0LXBhcnNlcj1mYWxzZSwgZW5hYmxlZD10cnVl"));
  _v439.push("" + String(_v438) + _d64("AS9UZWxlZ3JhbS9UZWxlZ3JhbS5saXN0LCB0YWc955S15oqlLCBmb3JjZS1wb2xpY3k98J+TsiDnlLXmiqXkv6Hmga8sIHVwZGF0ZS1pbnRlcnZhbD04NjQwMCwgb3B0LXBhcnNlcj1mYWxzZSwgZW5hYmxlZD10cnVl"));
  _v439.push("" + String(_v438) + _d64("AS9Hb29nbGUvR29vZ2xlLmxpc3QsIHRhZz3osLfmrYwsIGZvcmNlLXBvbGljeT3wn4yQIOiwt+atjOacjeWKoSwgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push(`${_v438}/OpenAI/OpenAI.list, tag=OpenAI, force-policy=🤖 OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  _v439.push(`${_v438}/Claude/Claude.list, tag=Claude, force-policy=🤖 OpenAI, update-interval=86400, opt-parser=false, enabled=true`);
  _v439.push("" + String(_v438) + _d64("AS9Zb3VUdWJlL1lvdVR1YmUubGlzdCwgdGFnPVlvdVR1YmUsIGZvcmNlLXBvbGljeT3wn4yNIOWbveWkluWqkuS9kywgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push("" + String(_v438) + _d64("AS9OZXRmbGl4L05ldGZsaXgubGlzdCwgdGFnPU5ldGZsaXgsIGZvcmNlLXBvbGljeT3wn4yNIOWbveWkluWqkuS9kywgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push("" + String(_v438) + _d64("AS9EaXNuZXkvRGlzbmV5Lmxpc3QsIHRhZz1EaXNuZXksIGZvcmNlLXBvbGljeT3wn4yNIOWbveWkluWqkuS9kywgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push("" + String(_v438) + _d64("AS9TcG90aWZ5L1Nwb3RpZnkubGlzdCwgdGFnPVNwb3RpZnksIGZvcmNlLXBvbGljeT3wn4yNIOWbveWkluWqkuS9kywgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push("" + String(_v438) + _d64("AS9UaWtUb2svVGlrVG9rLmxpc3QsIHRhZz1UaWtUb2ssIGZvcmNlLXBvbGljeT3wn4yNIOWbveWkluWqkuS9kywgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push("" + String(_v438) + _d64("AS9CaWxpQmlsaS9CaWxpQmlsaS5saXN0LCB0YWc95ZOU5ZOp5ZOU5ZOpLCBmb3JjZS1wb2xpY3k98J+TuiDlk5Tlk6nlk5Tlk6ksIHVwZGF0ZS1pbnRlcnZhbD04NjQwMCwgb3B0LXBhcnNlcj1mYWxzZSwgZW5hYmxlZD10cnVl"));
  _v439.push("" + String(_v438) + _d64("AS9HbG9iYWwvR2xvYmFsLmxpc3QsIHRhZz3lhajnkIPliqDpgJ8sIGZvcmNlLXBvbGljeT3wn5qAIOiKgueCuemAieaLqSwgdXBkYXRlLWludGVydmFsPTg2NDAwLCBvcHQtcGFyc2VyPWZhbHNlLCBlbmFibGVkPXRydWU="));
  _v439.push("" + String(_v438) + _d64("AS9DaGluYU1heC9DaGluYU1heC5saXN0LCB0YWc95Lit5Zu955u06L+eLCBmb3JjZS1wb2xpY3k98J+OryDlhajnkIPnm7Tov54sIHVwZGF0ZS1pbnRlcnZhbD04NjQwMCwgb3B0LXBhcnNlcj1mYWxzZSwgZW5hYmxlZD10cnVl"));
  _v439.push('');
  _v439.push('[filter_local]');
  _v439.push(_d64("AWdlb2lwLCBjbiwg8J+OryDlhajnkIPnm7Tov54="));
  _v439.push(_d64("AWZpbmFsLCDwn5CfIOa8j+e9keS5i+mxvA=="));
  return _v439.join('\n');
}
async function _v444(_v445) {
  return _v372(_v445);
}
function _v446(_v447) {
  return _v411(_v447);
}
function _v448(_v449) {
  return _v422(_v449);
}
function _v450(_v451) {
  return _v433(_v451);
}
function _v452(_v453) {
  return _v392(_v453);
}
function _v454(_v455) {
  return btoa(_v455.join('\n'));
}
function _v456(_v457) {
  return btoa(_v457.join('\n'));
}
let _v458 = '';
async function _v459(_v460) {
  if (!_v28) {
    _v458 = _d64("AUVDSOWKn+iDveW3suemgeeUqA==");
    return null;
  }
  _v458 = '';
  const _v461 = [];
  try {
    _v461.push(_d64("AeWwneivleS9v+eUqCBHb29nbGUgRE5TIOafpeivoiBjbG91ZGZsYXJlLWVjaC5jb20uLi4="));
    const _v462 = `https://v.recipes/dns/dns.google/dns-query?name=cloudflare-ech.com&type=65`;
    const _v463 = await fetch(_v462, {
      headers: {
        'Accept': 'application/json'
      }
    });
    _v461.push(_d64("AUdvb2dsZSBETlMg5ZON5bqU54q25oCBOiA=") + String(_v463.status));
    if (_v463.ok) {
      const _v464 = await _v463.json();
      _v461.push(_d64("AUdvb2dsZSBETlMg6L+U5Zue5pWw5o2uOiA=") + String(JSON.stringify(_v464).substring(0, 200)) + "...");
      if (_v464.Answer && _v464.Answer.length > 0) {
        _v461.push(_d64("AeaJvuWIsCA=") + String(_v464.Answer.length) + _d64("ASDmnaHnrZTmoYjorrDlvZU="));
        for (const _v465 of _v464.Answer) {
          if (_v465.data) {
            _v461.push(_d64("Aeino+aekOetlOahiOaVsOaNrjog") + String(typeof _v465.data) + _d64("ASwg6ZW/5bqmOiA=") + String(String(_v465.data).length));
            const _v466 = typeof _v465.data === 'string' ? _v465.data : JSON.stringify(_v465.data);
            const _v467 = _v466.match(/ech=([^\s"']+)/);
            if (_v467 && _v467[1]) {
              _v458 = _v461.join('\\n') + _d64("AVxu4pyFIOaIkOWKn+S7jiBHb29nbGUgRE5TIOiOt+WPliBFQ0gg6YWN572u");
              return _v467[1];
            }
            if (_v465.data && !_v466.includes('ech=')) {
              try {
                const _v468 = atob(_v465.data);
                _v461.push(_d64("AeWwneivlSBiYXNlNjQg6Kej56CB77yM6Kej56CB5ZCO6ZW/5bqmOiA=") + String(_v468.length));
                const _v469 = _v468.match(/ech=([^\s"']+)/);
                if (_v469 && _v469[1]) {
                  _v458 = _v461.join('\\n') + _d64("AVxu4pyFIOaIkOWKn+S7jiBHb29nbGUgRE5TIChiYXNlNjTop6PnoIEpIOiOt+WPliBFQ0gg6YWN572u");
                  return _v469[1];
                }
              } catch (_v470) {
                _v461.push(_d64("AWJhc2U2NCDop6PnoIHlpLHotKU6IA==") + String(_v470.message));
              }
            }
          }
        }
      } else {
        _v461.push(_d64("AUdvb2dsZSBETlMg5pyq6L+U5Zue562U5qGI6K6w5b2V"));
      }
    } else {
      _v461.push(_d64("AUdvb2dsZSBETlMg6K+35rGC5aSx6LSlOiA=") + String(_v463.status));
    }
    _v461.push(_d64("AeWwneivleS9v+eUqCBHb29nbGUgRE5TIOafpeivouebruagh+Wfn+WQjSA=") + String(_v460) + "...");
    const _v471 = `https://v.recipes/dns/dns.google/dns-query?name=${encodeURIComponent(_v460)}&type=65`;
    const _v472 = await fetch(_v471, {
      headers: {
        'Accept': 'application/json'
      }
    });
    _v461.push(_d64("AUdvb2dsZSBETlMgKOebruagh+Wfn+WQjSkg5ZON5bqU54q25oCBOiA=") + String(_v472.status));
    if (_v472.ok) {
      const _v473 = await _v472.json();
      _v461.push(_d64("AUdvb2dsZSBETlMgKOebruagh+Wfn+WQjSkg6L+U5Zue5pWw5o2uOiA=") + String(JSON.stringify(_v473).substring(0, 200)) + "...");
      if (_v473.Answer && _v473.Answer.length > 0) {
        _v461.push(_d64("AeaJvuWIsCA=") + String(_v473.Answer.length) + _d64("ASDmnaHnrZTmoYjorrDlvZU="));
        for (const _v474 of _v473.Answer) {
          if (_v474.data) {
            const _v475 = typeof _v474.data === 'string' ? _v474.data : JSON.stringify(_v474.data);
            const _v476 = _v475.match(/ech=([^\s"']+)/);
            if (_v476 && _v476[1]) {
              _v458 = _v461.join('\\n') + _d64("AVxu4pyFIOaIkOWKn+S7jiBHb29nbGUgRE5TICjnm67moIfln5/lkI0pIOiOt+WPliBFQ0gg6YWN572u");
              return _v476[1];
            }
            try {
              const _v477 = atob(_v474.data);
              const _v478 = _v477.match(/ech=([^\s"']+)/);
              if (_v478 && _v478[1]) {
                _v458 = _v461.join('\\n') + _d64("AVxu4pyFIOaIkOWKn+S7jiBHb29nbGUgRE5TICjnm67moIfln5/lkI0sIGJhc2U2NOino+eggSkg6I635Y+WIEVDSCDphY3nva4=");
                return _v478[1];
              }
            } catch (_v479) {
              _v461.push(_d64("AWJhc2U2NCDop6PnoIHlpLHotKU6IA==") + String(_v479.message));
            }
          }
        }
      } else {
        _v461.push(_d64("AUdvb2dsZSBETlMgKOebruagh+Wfn+WQjSkg5pyq6L+U5Zue562U5qGI6K6w5b2V"));
      }
    } else {
      _v461.push(_d64("AUdvb2dsZSBETlMgKOebruagh+Wfn+WQjSkg6K+35rGC5aSx6LSlOiA=") + String(_v472.status));
    }
    _v461.push(_d64("AeWwneivleS9v+eUqCBDbG91ZGZsYXJlIEROUyDkvZzkuLrlpIfpgIkuLi4="));
    const _v480 = `https://cloudflare-dns.com/dns-query?name=cloudflare-ech.com&type=65`;
    const _v481 = await fetch(_v480, {
      headers: {
        'Accept': 'application/dns-json'
      }
    });
    _v461.push(_d64("AUNsb3VkZmxhcmUgRE5TIOWTjeW6lOeKtuaAgTog") + String(_v481.status));
    if (_v481.ok) {
      const _v482 = await _v481.json();
      _v461.push(_d64("AUNsb3VkZmxhcmUgRE5TIOi/lOWbnuaVsOaNrjog") + String(JSON.stringify(_v482).substring(0, 200)) + "...");
      if (_v482.Answer && _v482.Answer.length > 0) {
        _v461.push(_d64("AeaJvuWIsCA=") + String(_v482.Answer.length) + _d64("ASDmnaHnrZTmoYjorrDlvZU="));
        for (const _v483 of _v482.Answer) {
          if (_v483.data) {
            const _v484 = _v483.data.match(/ech=([^\s"']+)/);
            if (_v484 && _v484[1]) {
              _v458 = _v461.join('\\n') + _d64("AVxu4pyFIOaIkOWKn+S7jiBDbG91ZGZsYXJlIEROUyDojrflj5YgRUNIIOmFjee9rg==");
              return _v484[1];
            }
          }
        }
      } else {
        _v461.push(_d64("AUNsb3VkZmxhcmUgRE5TIOacqui/lOWbnuetlOahiOiusOW9lQ=="));
      }
    } else {
      _v461.push(_d64("AUNsb3VkZmxhcmUgRE5TIOivt+axguWksei0pTog") + String(_v481.status));
    }
    _v458 = _v461.join('\\n') + _d64("AVxu4p2MIOaJgOaciUROU+afpeivouWdh+Wksei0pe+8jOacquiOt+WPluWIsEVDSOmFjee9rg==");
    return null;
  } catch (_v485) {
    _v458 = _v461.join('\\n') + _d64("AVxu4p2MIOiOt+WPlkVDSOmFjee9ruaXtuWPkeeUn+mUmeivrzog") + _v485.message;
    return null;
  }
}
async function _v288(_v486, _v487, _v488 = null) {
  if (!_v488) _v488 = new URL(_v486.url);
  const _v489 = [];
  const _v490 = _v488.hostname;
  const _v491 = _v488.searchParams.get('target') || 'base64';
  const _v492 = _v126(false);
  let _v493 = null;
  if (_v28) {
    const _v494 = _v29 || 'https://223.5.5.5/dns-query';
    const _v495 = _v30 || 'cloudflare-ech.com';
    _v493 = `${_v495}+${_v494}`;
  }
  async function _v496(_v497) {
    if (_v24) {
      _v489.push(..._v498(_v497, _v487, _v490, _v493, false, _v492));
    }
    if (_v25) {
      _v489.push(...(await _v499(_v497, _v487, _v490, _v493, false, _v492)));
    }
    if (_v26) {
      _v489.push(..._v500(_v497, _v487, _v490, _v493, false, _v492));
    }
  }
  if (_v37) {
    if (_v20 === 'CUSTOM') {
      const _v501 = [{
        ip: _v490,
        isp: _d64("AeWOn+eUn+WcsOWdgA==")
      }];
      await _v496(_v501);
    } else {
      try {
        const _v502 = [{
          ip: _v490,
          isp: _d64("AeWOn+eUn+WcsOWdgA==")
        }];
        await _v496(_v502);
      } catch (_v503) {
        if (!_v20) {
          _v20 = await _v156(_v486);
        }
        const _v504 = await _v169(_v20);
        if (_v504) {
          _v12 = _v504.domain + ':' + _v504.port;
          const _v505 = [{
            ip: _v504.domain,
            isp: _v4('UHJveHlJUC0=') + _v20
          }];
          await _v496(_v505);
        } else {
          const _v506 = [{
            ip: _v490,
            isp: _d64("AeWOn+eUn+WcsOWdgA==")
          }];
          await _v496(_v506);
        }
      }
    }
  }
  const _v507 = _v14.length > 0 || _v15.length > 0;
  if (_v18) {} else if (_v507) {
    if (_v14.length > 0 && _v35) {
      await _v496(_v14);
    }
    if (_v15.length > 0 && _v34) {
      const _v508 = _v15.map(_v509 => ({
        ip: _v509.domain,
        isp: _v509.name || _v509.domain
      }));
      await _v496(_v508);
    }
  } else {
    if (_v34) {
      const _v510 = _v67.map(_v511 => ({
        ip: _v511.domain,
        isp: _v511.name || _v511.domain
      }));
      await _v496(_v510);
    }
    if (_v35) {
      if (!_v22) {
        try {
          const _v512 = await _v513();
          if (_v512.length > 0) {
            await _v496(_v512);
          }
        } catch (_v514) {
          if (!_v20) {
            _v20 = await _v156(_v486);
          }
          const _v515 = await _v169(_v20);
          if (_v515) {
            _v12 = _v515.domain + ':' + _v515.port;
            const _v516 = [{
              ip: _v515.domain,
              isp: _v4('UHJveHlJUC0=') + _v20
            }];
            await _v496(_v516);
          }
        }
      }
    }
    if (_v36) {
      try {
        const _v517 = await _v518();
        if (_v517.length > 0) {
          if (_v24) {
            _v489.push(..._v519(_v517, _v487, _v490, _v493, false, _v492));
          }
          if (_v25) {
            _v489.push(...(await _v520(_v517, _v487, _v490, _v493, false, _v492)));
          }
          if (_v26) {
            _v489.push(..._v500(_v517, _v487, _v490, _v493, false, _v492));
          }
        }
      } catch (_v521) {
        if (!_v20) {
          _v20 = await _v156(_v486);
        }
        const _v522 = await _v169(_v20);
        if (_v522) {
          _v12 = _v522.domain + ':' + _v522.port;
          const _v523 = [{
            ip: _v522.domain,
            isp: _v4('UHJveHlJUC0=') + _v20
          }];
          await _v496(_v523);
        }
      }
    }
  }
  if (_v489.length === 0) {
    const _v524 = _d64("AeaJgOacieiKgueCueiOt+WPluWksei0pQ==");
    const _v525 = _v4('dmxlc3M=');
    const _v526 = `${_v525}://00000000-0000-0000-0000-000000000000@127.0.0.1:80?encryption=none&security=none&type=ws&host=error.com&path=%2F#${encodeURIComponent(_v524)}`;
    _v489.push(_v526);
  }
  let _v527;
  let _v528 = 'text/plain; charset=utf-8';
  switch (_v491.toLowerCase()) {
    case _v4('Y2xhc2g='):
    case _v4('Y2xhc2hy'):
    case _v4('c3Rhc2g='):
    case 'meta':
    case _v4('Y2xhc2htZXRh'):
      _v527 = _v372(_v489);
      _v528 = 'text/yaml; charset=utf-8';
      break;
    case _v4('c3VyZ2U='):
    case _v4('c3VyZ2Uy'):
    case _v4('c3VyZ2Uz'):
    case _v4('c3VyZ2U0'):
      _v527 = _v411(_v489);
      _v528 = 'text/plain; charset=utf-8';
      break;
    case _v4('cXVhbnR1bXVsdA=='):
    case _v4('cXVhbng='):
    case _v4('cXVhbng='):
      _v527 = _v433(_v489);
      _v528 = 'text/plain; charset=utf-8';
      break;
    case _v4('c3M='):
    case _v4('c3Ny'):
      _v527 = btoa(_v489.join('\n'));
      break;
    case _v4('djJyYXk='):
      _v527 = btoa(_v489.join('\n'));
      break;
    case _v4('bG9vbg=='):
      _v527 = _v422(_v489);
      _v528 = 'text/plain; charset=utf-8';
      break;
    case _v4('c2luZ2JveA=='):
    case _v4('c2luZy1ib3g='):
    case _v4('c2luZ2JveA=='):
      _v527 = _v392(_v489);
      _v528 = 'application/json; charset=utf-8';
      break;
    default:
      _v527 = btoa(_v489.join('\n'));
  }
  const _v529 = {
    'Content-Type': _v528,
    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0'
  };
  if (_v28) {
    _v529['X-ECH-Status'] = 'ENABLED';
    if (_v493) {
      _v529['X-ECH-Config-Length'] = String(_v493.length);
    }
  }
  return new Response(_v527, {
    headers: _v529
  });
}
function _v498(_v530, _v531, _v532, _v533 = null, _v534 = false, _v535 = null) {
  const _v536 = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const _v537 = [443, 2053, 2083, 2087, 2096, 8443];
  const _v538 = [443];
  const _v539 = _v17 ? [] : [80];
  const _v540 = [];
  const _v541 = '/?ed=2048';
  const _v542 = _v4('dmxlc3M=');
  const _v543 = _v535 || _v126(_v534);
  for (const _v544 of _v530) {
    const _v545 = _v544.ip.includes(':') ? `[${_v544.ip}]` : _v544.ip;
    let _v546 = [];
    if (_v544.port) {
      const _v547 = _v544.port;
      if (_v537.includes(_v547)) {
        _v546.push({
          port: _v547,
          tls: true
        });
      } else if (_v536.includes(_v547)) {
        if (!_v17) {
          _v546.push({
            port: _v547,
            tls: false
          });
        }
      } else {
        _v546.push({
          port: _v547,
          tls: true
        });
      }
    } else {
      _v538.forEach(_v548 => {
        _v546.push({
          port: _v548,
          tls: true
        });
      });
      _v539.forEach(_v549 => {
        _v546.push({
          port: _v549,
          tls: false
        });
      });
    }
    for (const {
      port: _v550,
      tls: _v551
    } of _v546) {
      const _v552 = _v543(_v544);
      if (_v551) {
        const _v553 = new URLSearchParams({
          encryption: 'none',
          security: 'tls',
          sni: _v532,
          fp: _v28 ? 'chrome' : 'randomized',
          type: 'ws',
          host: _v532,
          path: _v541
        });
        _v135(_v553);
        if (_v28) {
          const _v554 = _v29 || 'https://223.5.5.5/dns-query';
          const _v555 = _v30 || 'cloudflare-ech.com';
          _v553.set('ech', `${_v555}+${_v554}`);
        }
        _v540.push(`${_v542}://${_v531}@${_v545}:${_v550}?${_v553.toString()}#${encodeURIComponent(_v552)}`);
      } else {
        const _v556 = new URLSearchParams({
          encryption: 'none',
          security: 'none',
          type: 'ws',
          host: _v532,
          path: _v541
        });
        _v540.push(`${_v542}://${_v531}@${_v545}:${_v550}?${_v556.toString()}#${encodeURIComponent(_v552)}`);
      }
    }
  }
  return _v540;
}
async function _v499(_v557, _v558, _v559, _v560 = null, _v561 = false, _v562 = null) {
  const _v563 = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const _v564 = [443, 2053, 2083, 2087, 2096, 8443];
  const _v565 = [443];
  const _v566 = _v17 ? [] : [80];
  const _v567 = [];
  const _v568 = '/?ed=2048';
  const _v569 = _v27 || _v558;
  const _v570 = _v562 || _v126(_v561);
  for (const _v571 of _v557) {
    const _v572 = _v571.ip.includes(':') ? `[${_v571.ip}]` : _v571.ip;
    let _v573 = [];
    if (_v571.port) {
      const _v574 = _v571.port;
      if (_v564.includes(_v574)) {
        _v573.push({
          port: _v574,
          tls: true
        });
      } else if (_v563.includes(_v574)) {
        if (!_v17) {
          _v573.push({
            port: _v574,
            tls: false
          });
        }
      } else {
        _v573.push({
          port: _v574,
          tls: true
        });
      }
    } else {
      _v565.forEach(_v575 => {
        _v573.push({
          port: _v575,
          tls: true
        });
      });
      _v566.forEach(_v576 => {
        _v573.push({
          port: _v576,
          tls: false
        });
      });
    }
    for (const {
      port: _v577,
      tls: _v578
    } of _v573) {
      const _v579 = _v570(_v571);
      if (_v578) {
        const _v580 = new URLSearchParams({
          security: 'tls',
          sni: _v559,
          fp: 'chrome',
          type: 'ws',
          host: _v559,
          path: _v568
        });
        _v135(_v580);
        if (_v28) {
          const _v581 = _v29 || 'https://223.5.5.5/dns-query';
          const _v582 = _v30 || 'cloudflare-ech.com';
          _v580.set('ech', `${_v582}+${_v581}`);
        }
        _v567.push(`${_v4('dHJvamFuOi8v')}${_v569}@${_v572}:${_v577}?${_v580.toString()}#${encodeURIComponent(_v579)}`);
      } else {
        const _v583 = new URLSearchParams({
          security: 'none',
          type: 'ws',
          host: _v559,
          path: _v568
        });
        _v567.push(`${_v4('dHJvamFuOi8v')}${_v569}@${_v572}:${_v577}?${_v583.toString()}#${encodeURIComponent(_v579)}`);
      }
    }
  }
  return _v567;
}
async function _v513() {
  const _v584 = "https://www.wetest.vip/page/cloudflare/address_v4.html";
  const _v585 = "https://www.wetest.vip/page/cloudflare/address_v6.html";
  let _v586 = [];
  const _v587 = _v53('ipv4', '') === '' || _v53('ipv4', 'yes') !== 'no';
  const _v588 = _v53('ipv6', '') === '' || _v53('ipv6', 'yes') !== 'no';
  const _v589 = _v53('ispMobile', '') === '' || _v53('ispMobile', 'yes') !== 'no';
  const _v590 = _v53('ispUnicom', '') === '' || _v53('ispUnicom', 'yes') !== 'no';
  const _v591 = _v53('ispTelecom', '') === '' || _v53('ispTelecom', 'yes') !== 'no';
  try {
    const _v592 = [];
    if (_v587) {
      _v592.push(_v593(_v584));
    } else {
      _v592.push(Promise.resolve([]));
    }
    if (_v588) {
      _v592.push(_v593(_v585));
    } else {
      _v592.push(Promise.resolve([]));
    }
    const [_v594, _v595] = await Promise.all(_v592);
    _v586 = [..._v594, ..._v595];
    if (_v586.length > 0) {
      _v586 = _v586.filter(_v596 => {
        const _v597 = _v596.isp || '';
        if (_v597.includes(_d64("Aeenu+WKqA==")) && !_v589) return false;
        if (_v597.includes(_d64("AeiBlOmAmg==")) && !_v590) return false;
        if (_v597.includes(_d64("AeeUteS/oQ==")) && !_v591) return false;
        return true;
      });
    }
    if (_v586.length > 0) {
      return _v586;
    }
  } catch (_v598) {}
  return [];
}
async function _v593(_v599) {
  try {
    const _v600 = await fetch(_v599, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    if (!_v600.ok) {
      return [];
    }
    const _v601 = await _v600.text();
    const _v602 = [];
    const _v603 = /<tr[\s\S]*?<\/tr>/g;
    const _v604 = new RegExp(_d64("ATx0ZCBkYXRhLWxhYmVsPSLnur/ot6/lkI3np7AiPiguKz8pPFwvdGQ+W1xzXFNdKj88dGQgZGF0YS1sYWJlbD0i5LyY6YCJ5Zyw5Z2AIj4oW1xkLjphLWZBLUZdKyk8XC90ZD5bXHNcU10qPzx0ZCBkYXRhLWxhYmVsPSLmlbDmja7kuK3lv4MiPiguKz8pPFwvdGQ+"), "");
    let _v605;
    while ((_v605 = _v603.exec(_v601)) !== null) {
      const _v606 = _v605[0];
      const _v607 = _v606.match(_v604);
      if (_v607 && _v607[1] && _v607[2]) {
        const _v608 = _v607[3] ? _v607[3].trim().replace(/<.*?>/g, '') : '';
        _v602.push({
          isp: _v607[1].trim().replace(/<.*?>/g, ''),
          ip: _v607[2].trim(),
          colo: _v608
        });
      }
    }
    if (_v602.length === 0) {}
    return _v602;
  } catch (_v609) {
    return [];
  }
}
async function _v264(_v610) {
  const _v611 = new URL(_v610.url);
  const _v612 = _v611.searchParams.get('p') || '';
  const _v613 = (_v611.searchParams.get('wk') || '').toUpperCase();
  const _v614 = _v611.searchParams.get('rm') || '';
  const _v615 = _v614 ? _v614.toLowerCase() !== 'no' : null;
  const _v616 = _v611.searchParams.get('s') || '';
  let _v617 = null;
  if (_v616) {
    try {
      _v617 = _v219(_v616);
    } catch (_v618) {}
  }
  let _v619 = _v20;
  if (!_v619 || _v619 === '') {
    if (_v613) {
      _v619 = _v613;
    } else if (_v21 && _v21.trim()) {
      _v619 = _v21.trim().toUpperCase();
    } else {
      _v619 = await _v156(_v610);
    }
  } else if (_v613) {
    _v619 = _v613;
  }
  const _v620 = new WebSocketPair();
  const [_v621, _v622] = Object.values(_v620);
  _v622.accept();
  _v622.binaryType = 'arraybuffer';
  let _v623 = {
    socket: null,
    writer: null,
    drainUpload: null
  };
  let _v624 = false;
  let _v625 = null;
  let _v626 = false;
  let _v627 = false;
  const _v628 = _v629(_v90, _v91, _v91 >> 8);
  const _v630 = _v610.fetcher;
  function _v631() {
    try {
      _v623.writer?.releaseLock();
    } catch (_v632) {}
    _v623.writer = null;
  }
  function _v633() {
    if (_v627) return;
    _v627 = true;
    _v628.clear();
    _v631();
    try {
      _v623.socket?.close();
    } catch (_v634) {}
    _v635(_v622);
  }
  function _v636(_v637) {
    const _v638 = _v639(_v637);
    if (!_v638.byteLength) return true;
    if (!_v628.sow(_v638)) {
      _v633();
      return false;
    }
    _v623.drainUpload();
    return true;
  }
  async function _v640() {
    if (_v626 || _v627 || !_v623.writer) return;
    _v626 = true;
    try {
      for (;;) {
        if (_v627 || !_v623.writer) break;
        const [_v641] = _v628.bundle();
        if (!_v641) break;
        await _v623.writer.write(_v641);
      }
    } catch (_v642) {
      _v633();
    } finally {
      _v626 = false;
      if (!_v628.empty && !_v627 && _v623.writer) queueMicrotask(_v640);
    }
  }
  _v623.drainUpload = () => {
    if (!_v626 && !_v628.empty && _v623.writer) queueMicrotask(_v640);
  };
  const _v643 = _v610.headers.get(_v4('c2VjLXdlYnNvY2tldC1wcm90b2NvbA==')) || '';
  const _v644 = _v645(_v622, _v643);
  _v644.pipeTo(new WritableStream({
    async write(_v646) {
      if (_v627) return;
      const _v647 = _v639(_v646);
      if (_v624) return await _v648(_v647, _v622, null, _v630);
      if (_v623.socket && _v623.writer) {
        if (!_v636(_v647)) return;
        return;
      }
      if (_v625) {
        if (!_v636(_v647)) return;
        return;
      }
      if (!_v625) {
        if (_v24 && _v647.byteLength >= 24) {
          const _v649 = _v650(_v647, _v11);
          if (!_v649.hasError) {
            _v625 = _v4('dmxlc3M=');
            const {
              addressType: _v651,
              port: _v652,
              hostname: _v653,
              rawIndex: _v654,
              version: _v655,
              isUDP: _v656
            } = _v649;
            if (_v656) {
              if (_v652 === 53) _v624 = true;else throw new Error(_v71);
            }
            const _v657 = new Uint8Array([_v655[0], 0]);
            const _v658 = _v647.subarray(_v654);
            if (_v624) return _v648(_v658, _v622, _v657, _v630);
            await _v659(_v651, _v653, _v652, _v658, _v622, _v657, _v623, _v612, _v619, _v615, _v617, _v630);
            return;
          }
        }
        if (_v25 && _v647.byteLength >= 56) {
          const _v660 = await _v661(_v647, _v11);
          if (!_v660.hasError) {
            _v625 = _v4('dHJvamFu');
            const {
              addressType: _v662,
              port: _v663,
              hostname: _v664,
              rawClientData: _v665
            } = _v660;
            await _v659(_v662, _v664, _v663, _v665, _v622, null, _v623, _v612, _v619, _v615, _v617, _v630);
            return;
          }
        }
        throw new Error('Invalid protocol or authentication failed');
      }
    }
  })).catch(_v666 => {
    _v633();
  });
  return new Response(null, {
    status: 101,
    webSocket: _v621
  });
}
async function _v659(_v667, _v668, _v669, _v670, _v671, _v672, _v673, _v674 = '', _v675 = '', _v676 = null, _v677 = null, _v678 = null) {
  const _v679 = _v674 || _v12;
  const _v680 = _v675 || _v20;
  const _v681 = _v676 !== null ? _v676 : _v19;
  const _v682 = _v677 || _v81;
  const _v683 = _v677 ? true : _v82;
  const _v684 = _v639(_v670);
  async function _v685(_v686, _v687, _v688 = false) {
    const _v689 = _v688 ? await _v690(_v667, _v686, _v687, _v682) : await _v691(_v686, _v687, _v678, _v92);
    const _v692 = _v689.writable.getWriter();
    if (_v684.byteLength) await _v692.write(_v684);
    return {
      remoteSock: _v689,
      writer: _v692
    };
  }
  function _v693(_v694, _v695) {
    if (_v673.socket !== _v694) return;
    try {
      _v695?.releaseLock();
    } catch (_v696) {}
    _v673.socket = null;
    _v673.writer = null;
  }
  function _v697(_v698, _v699, _v700) {
    try {
      if (_v673.writer && _v673.writer !== _v699) {
        _v673.writer.releaseLock();
      }
    } catch (_v701) {}
    _v673.socket = _v698;
    _v673.writer = _v699;
    _v673.drainUpload?.();
    _v698.closed.catch(() => {}).finally(() => {
      if (_v673.socket === _v698) _v635(_v671);
    });
    _v702(_v698, _v671, _v672, _v700).finally(() => {
      if (_v673.socket === _v698) {
        try {
          _v699.releaseLock();
        } catch (_v703) {}
        _v673.writer = null;
      }
    });
  }
  async function _v704() {
    if (_v16 && _v683) {
      try {
        const {
          remoteSock: _v705,
          writer: _v706
        } = await _v685(_v668, _v669, true);
        _v697(_v705, _v706, null);
        return;
      } catch (_v707) {
        let _v708, _v709;
        if (_v679 && _v679.trim()) {
          const _v710 = _v194(_v679);
          _v708 = _v710.address;
          _v709 = _v710.port || _v669;
        } else {
          const _v711 = await _v169(_v680, _v681);
          _v708 = _v711 ? _v711.domain : _v668;
          _v709 = _v711 ? _v711.port : _v669;
        }
        try {
          const {
            remoteSock: _v712,
            writer: _v713
          } = await _v685(_v708, _v709, false);
          _v697(_v712, _v713, null);
        } catch (_v714) {
          _v635(_v671);
        }
      }
    } else {
      let _v715, _v716;
      if (_v679 && _v679.trim()) {
        const _v717 = _v194(_v679);
        _v715 = _v717.address;
        _v716 = _v717.port || _v669;
      } else {
        const _v718 = await _v169(_v680, _v681);
        _v715 = _v718 ? _v718.domain : _v668;
        _v716 = _v718 ? _v718.port : _v669;
      }
      try {
        const {
          remoteSock: _v719,
          writer: _v720
        } = await _v685(_v715, _v716, _v683);
        _v697(_v719, _v720, null);
      } catch (_v721) {
        _v635(_v671);
      }
    }
  }
  try {
    const {
      remoteSock: _v722,
      writer: _v723
    } = await _v685(_v668, _v669, _v16 ? false : _v683);
    _v697(_v722, _v723, () => {
      _v693(_v722, _v723);
      _v704();
    });
  } catch (_v724) {
    await _v704();
  }
}
function _v639(_v725) {
  if (_v725 instanceof Uint8Array) return _v725;
  if (_v725 instanceof ArrayBuffer) return new Uint8Array(_v725);
  if (ArrayBuffer.isView(_v725)) return new Uint8Array(_v725.buffer, _v725.byteOffset, _v725.byteLength);
  return new Uint8Array(_v725);
}
function _v726(_v727, _v728) {
  const _v729 = _v639(_v727);
  const _v730 = _v639(_v728);
  const _v731 = new Uint8Array(_v729.byteLength + _v730.byteLength);
  _v731.set(_v729);
  _v731.set(_v730, _v729.byteLength);
  return _v731;
}
function _v629(_v732, _v733 = _v732, _v734 = Math.max(1, _v733 >> 8)) {
  let _v735 = [];
  let _v736 = 0;
  let _v737 = 0;
  let _v738 = null;
  function _v739() {
    if (_v736 > 32 && _v736 * 2 >= _v735.length) {
      _v735 = _v735.slice(_v736);
      _v736 = 0;
    }
  }
  function _v740() {
    if (_v736 >= _v735.length) return null;
    const _v741 = _v735[_v736];
    _v735[_v736++] = undefined;
    _v737 -= _v741.byteLength;
    _v739();
    return _v741;
  }
  return {
    get empty() {
      return _v736 >= _v735.length;
    },
    clear() {
      _v735 = [];
      _v736 = 0;
      _v737 = 0;
    },
    sow(_v742) {
      const _v743 = _v742?.byteLength || 0;
      if (!_v743) return true;
      if (_v737 + _v743 > _v733 || _v735.length - _v736 >= _v734) return false;
      _v735.push(_v742);
      _v737 += _v743;
      return true;
    },
    bundle(_v744 = null) {
      _v744 ||= _v740();
      if (!_v744 || _v736 >= _v735.length || _v744.byteLength >= _v732) return [_v744, false];
      let _v745 = _v744.byteLength;
      let _v746 = _v736;
      while (_v746 < _v735.length) {
        const _v747 = _v735[_v746];
        const _v748 = _v745 + _v747.byteLength;
        if (_v748 > _v732) break;
        _v745 = _v748;
        _v746++;
      }
      if (_v746 === _v736) return [_v744, false];
      const _v749 = _v738 ||= new Uint8Array(_v732);
      _v749.set(_v744);
      let _v750 = _v744.byteLength;
      while (_v736 < _v746) {
        const _v751 = _v735[_v736];
        _v735[_v736++] = undefined;
        _v737 -= _v751.byteLength;
        _v749.set(_v751, _v750);
        _v750 += _v751.byteLength;
      }
      _v739();
      return [_v749.subarray(0, _v745), true];
    }
  };
}
function _v752(_v753) {
  const _v754 = _v87;
  const _v755 = _v88;
  const _v756 = Math.max(4096, _v755 << 3);
  let _v757 = new Uint8Array(_v754);
  let _v758 = 0;
  let _v759 = 0;
  let _v760 = false;
  let _v761 = 0;
  let _v762 = 0;
  let _v763 = 0;
  function _v764() {
    if (_v759) clearTimeout(_v759);
    _v759 = 0;
    _v760 = false;
    if (!_v758) return;
    if (_v753.readyState === 1) _v753.send(_v757.subarray(0, _v758).slice());
    _v757 = new Uint8Array(_v754);
    _v758 = 0;
    _v763 = 0;
  }
  function _v765() {
    if (_v759 || _v760) return;
    _v760 = true;
    _v762 = _v761;
    queueMicrotask(() => {
      _v760 = false;
      if (!_v758 || _v759) return;
      if (_v754 - _v758 < _v755) return _v764();
      _v759 = setTimeout(() => {
        _v759 = 0;
        if (!_v758) return;
        if (_v754 - _v758 < _v755) return _v764();
        if (_v763 < 2 && (_v761 !== _v762 || _v758 < _v756)) {
          _v763++;
          _v762 = _v761;
          return _v765();
        }
        _v764();
      }, Math.max(_v89, 1));
    });
  }
  return {
    send(_v766) {
      const _v767 = _v639(_v766);
      let _v768 = 0;
      const _v769 = _v767.byteLength;
      if (!_v769) return;
      while (_v768 < _v769) {
        if (!_v758 && _v769 - _v768 >= _v754) {
          const _v770 = Math.min(_v754, _v769 - _v768);
          if (_v753.readyState === 1) _v753.send(_v768 || _v770 !== _v769 ? _v767.subarray(_v768, _v768 + _v770) : _v767);
          _v768 += _v770;
          continue;
        }
        const _v771 = Math.min(_v754 - _v758, _v769 - _v768);
        _v757.set(_v767.subarray(_v768, _v768 + _v771), _v758);
        _v758 += _v771;
        _v768 += _v771;
        _v761++;
        if (_v758 === _v754 || _v754 - _v758 < _v755) _v764();else _v765();
      }
    },
    flush: _v764
  };
}
function _v772(_v773, _v774, _v775 = null) {
  const _v776 = {
    hostname: _v773,
    port: _v774
  };
  if (_v775 && typeof _v775.connect === 'function') return _v775.connect(_v776);
  return _v1(_v776);
}
async function _v777(_v778, _v779, _v780 = null) {
  try {
    const _v781 = _v772(_v778, _v779, _v780);
    if (_v781?.opened) await _v781.opened;
    return _v781;
  } catch (_v782) {
    if (!_v780) throw _v782;
    const _v783 = _v1({
      hostname: _v778,
      port: _v779
    });
    if (_v783?.opened) await _v783.opened;
    return _v783;
  }
}
async function _v691(_v784, _v785, _v786 = null, _v787 = 1) {
  const _v788 = Math.max(1, _v787 | 0);
  if (_v788 <= 1) return _v777(_v784, _v785, _v786);
  const _v789 = Array.from({
    length: _v788
  }, () => _v777(_v784, _v785, _v786));
  const _v790 = await Promise.any(_v789);
  _v789.forEach(_v791 => {
    _v791.then(_v792 => {
      if (_v792 !== _v790) {
        try {
          _v792.close();
        } catch (_v793) {}
      }
    }, () => {});
  });
  return _v790;
}
function _v794(_v795) {
  if (_v95.has(_v795)) return _v95.get(_v795);
  const _v796 = String(_v795 || '').replace(/-/g, '');
  if (_v796.length !== 32) return null;
  const _v797 = new Uint8Array(16);
  for (let _v798 = 0; _v798 < 16; _v798++) {
    const _v799 = Number.parseInt(_v796.slice(_v798 * 2, _v798 * 2 + 2), 16);
    if (Number.isNaN(_v799)) return null;
    _v797[_v798] = _v799;
  }
  if (_v95.size > 16) _v95.clear();
  _v95.set(_v795, _v797);
  return _v797;
}
function _v800(_v801, _v802, _v803) {
  const _v804 = _v794(_v803);
  return !!_v804 && _v801[_v802] === _v804[0] && _v801[_v802 + 1] === _v804[1] && _v801[_v802 + 2] === _v804[2] && _v801[_v802 + 3] === _v804[3] && _v801[_v802 + 4] === _v804[4] && _v801[_v802 + 5] === _v804[5] && _v801[_v802 + 6] === _v804[6] && _v801[_v802 + 7] === _v804[7] && _v801[_v802 + 8] === _v804[8] && _v801[_v802 + 9] === _v804[9] && _v801[_v802 + 10] === _v804[10] && _v801[_v802 + 11] === _v804[11] && _v801[_v802 + 12] === _v804[12] && _v801[_v802 + 13] === _v804[13] && _v801[_v802 + 14] === _v804[14] && _v801[_v802 + 15] === _v804[15];
}
function _v650(_v805, _v806) {
  const _v807 = _v639(_v805);
  if (_v807.byteLength < 24) return {
    hasError: true,
    message: _v68
  };
  const _v808 = _v807.subarray(0, 1);
  if (!_v800(_v807, 1, _v806)) return {
    hasError: true,
    message: _v69
  };
  const _v809 = _v807[17];
  const _v810 = 18 + _v809;
  if (_v807.byteLength < _v810 + 5) return {
    hasError: true,
    message: _v68
  };
  const _v811 = _v807[_v810];
  let _v812 = false;
  if (_v811 === 1) {} else if (_v811 === 2) {
    _v812 = true;
  } else {
    return {
      hasError: true,
      message: _v70
    };
  }
  const _v813 = 19 + _v809;
  const _v814 = _v807[_v813] << 8 | _v807[_v813 + 1];
  let _v815 = _v813 + 2,
    _v816 = 0,
    _v817 = _v815 + 1,
    _v818 = '';
  const _v819 = _v807[_v815];
  switch (_v819) {
    case _v83:
      _v816 = 4;
      if (_v807.byteLength < _v817 + _v816) return {
        hasError: true,
        message: _v68
      };
      _v818 = `${_v807[_v817]}.${_v807[_v817 + 1]}.${_v807[_v817 + 2]}.${_v807[_v817 + 3]}`;
      break;
    case _v84:
      if (_v807.byteLength < _v817 + 1) return {
        hasError: true,
        message: _v68
      };
      _v816 = _v807[_v817++];
      if (_v807.byteLength < _v817 + _v816) return {
        hasError: true,
        message: _v68
      };
      _v818 = _v94.decode(_v807.subarray(_v817, _v817 + _v816));
      break;
    case _v85:
      _v816 = 16;
      if (_v807.byteLength < _v817 + _v816) return {
        hasError: true,
        message: _v68
      };
      const _v820 = [];
      const _v821 = new DataView(_v807.buffer, _v807.byteOffset + _v817, _v816);
      for (let _v822 = 0; _v822 < 8; _v822++) _v820.push(_v821.getUint16(_v822 * 2).toString(16));
      _v818 = _v820.join(':');
      break;
    default:
      return {
        hasError: true,
        message: `${_v72}: ${_v819}`
      };
  }
  if (!_v818) return {
    hasError: true,
    message: `${_v73}: ${_v819}`
  };
  return {
    hasError: false,
    addressType: _v819,
    port: _v814,
    hostname: _v818,
    isUDP: _v812,
    rawIndex: _v817 + _v816,
    version: _v808
  };
}
function _v645(_v823, _v824) {
  let _v825 = false;
  return new ReadableStream({
    start(_v826) {
      _v823.addEventListener('message', _v827 => {
        if (!_v825) _v826.enqueue(_v639(_v827.data));
      });
      _v823.addEventListener('close', () => {
        if (!_v825) {
          _v635(_v823);
          _v826.close();
        }
      });
      _v823.addEventListener('error', _v828 => _v826.error(_v828));
      const {
        earlyData: _v829,
        error: _v830
      } = _v831(_v824);
      if (_v830) _v826.error(_v830);else if (_v829) _v826.enqueue(_v639(_v829));
    },
    cancel() {
      _v825 = true;
      _v635(_v823);
    }
  });
}
async function _v702(_v832, _v833, _v834, _v835) {
  let _v836 = _v834,
    _v837 = false,
    _v838 = false;
  let _v839 = null;
  if (_v835) {
    _v839 = setTimeout(() => {
      if (!_v837 && !_v838) {
        _v838 = true;
        try {
          _v832.close && _v832.close();
        } catch (_v840) {}
        _v835();
      }
    }, _v93);
  }
  const _v841 = _v752(_v833);
  let _v842 = null;
  let _v843 = true;
  let _v844 = new ArrayBuffer(_v86);
  try {
    try {
      _v842 = _v832.readable.getReader({
        mode: 'byob'
      });
    } catch (_v845) {
      _v843 = false;
      _v842 = _v832.readable.getReader();
    }
    for (;;) {
      const _v846 = _v843 ? await _v842.read(new Uint8Array(_v844, 0, _v86)) : await _v842.read();
      if (_v846.done) break;
      const _v847 = _v846.value;
      let _v848 = _v639(_v847);
      const _v849 = _v843 && _v847?.buffer instanceof ArrayBuffer && _v847.buffer.byteLength >= _v86 ? _v847.buffer : new ArrayBuffer(_v86);
      if (!_v848.byteLength) continue;
      if (!_v837) {
        _v837 = true;
        if (_v839) {
          clearTimeout(_v839);
          _v839 = null;
        }
      }
      if (_v833.readyState !== 1) throw new Error(_v74);
      if (_v836) {
        _v848 = _v726(_v836, _v848);
        _v836 = null;
      }
      if (_v848.byteLength >= _v86 >> 1) {
        _v841.flush();
        _v833.send(_v848);
        if (_v843) _v844 = new ArrayBuffer(_v86);
      } else {
        _v841.send(_v848.slice());
        if (_v843) _v844 = _v849;
      }
    }
    _v841.flush();
  } catch (_v850) {
    if (!_v838) _v635(_v833);
  } finally {
    try {
      _v841.flush();
    } catch (_v851) {}
    try {
      _v842?.releaseLock();
    } catch (_v852) {}
  }
  if (_v839) {
    clearTimeout(_v839);
    _v839 = null;
  }
  if (!_v837 && !_v838 && _v835) _v835();
}
async function _v648(_v853, _v854, _v855, _v856 = null) {
  try {
    const _v857 = await _v691('8.8.4.4', 53, _v856, 1);
    let _v858 = _v855;
    const _v859 = _v857.writable.getWriter();
    await _v859.write(_v853);
    _v859.releaseLock();
    await _v702(_v857, _v854, _v858, null);
  } catch (_v860) {}
}
async function _v690(_v861, _v862, _v863, _v864 = _v81) {
  const {
    username: _v865,
    password: _v866,
    hostname: _v867,
    socksPort: _v868
  } = _v864;
  const _v869 = _v1({
    hostname: _v867,
    port: _v868
  });
  const _v870 = _v869.writable.getWriter();
  await _v870.write(new Uint8Array(_v865 ? [5, 2, 0, 2] : [5, 1, 0]));
  const _v871 = _v869.readable.getReader();
  let _v872 = (await _v871.read()).value;
  if (_v872[0] !== 5 || _v872[1] === 255) throw new Error(_v77);
  if (_v872[1] === 2) {
    if (!_v865 || !_v866) throw new Error(_v78);
    const _v873 = new TextEncoder();
    const _v874 = new Uint8Array([1, _v865.length, ..._v873.encode(_v865), _v866.length, ..._v873.encode(_v866)]);
    await _v870.write(_v874);
    _v872 = (await _v871.read()).value;
    if (_v872[0] !== 1 || _v872[1] !== 0) throw new Error(_v79);
  }
  const _v875 = new TextEncoder();
  let _v876;
  switch (_v861) {
    case _v83:
      _v876 = new Uint8Array([1, ..._v862.split('.').map(Number)]);
      break;
    case _v84:
      _v876 = new Uint8Array([3, _v862.length, ..._v875.encode(_v862)]);
      break;
    case _v85:
      _v876 = new Uint8Array([4, ..._v862.split(':').flatMap(_v877 => [parseInt(_v877.slice(0, 2), 16), parseInt(_v877.slice(2), 16)])]);
      break;
    default:
      throw new Error(_v72);
  }
  await _v870.write(new Uint8Array([5, 1, 0, ..._v876, _v863 >> 8, _v863 & 255]));
  _v872 = (await _v871.read()).value;
  if (_v872[1] !== 0) throw new Error(_v80);
  _v870.releaseLock();
  _v871.releaseLock();
  return _v869;
}
function _v219(_v878) {
  let [_v879, _v880] = _v878.split("@").reverse();
  let _v881, _v882, _v883, _v884;
  if (_v880) {
    const _v885 = _v880.split(":");
    if (_v885.length !== 2) throw new Error(_v76);
    [_v881, _v882] = _v885;
  }
  const _v886 = _v879.split(":");
  _v884 = Number(_v886.pop());
  if (isNaN(_v884)) throw new Error(_v76);
  _v883 = _v886.join(":");
  if (_v883.includes(":") && !/^\[.*\]$/.test(_v883)) throw new Error(_v76);
  return {
    username: _v881,
    password: _v882,
    hostname: _v883,
    socksPort: _v884
  };
}
async function _v287(_v887, _v888 = null) {
  if (!_v888) _v888 = _v11;
  const _v889 = new URL(_v887.url);
  const _v890 = _v887.headers.get('Cookie') || '';
  let _v891 = null;
  if (_v890) {
    const _v892 = _v890.split(';').map(_v893 => _v893.trim());
    for (const _v894 of _v892) {
      if (_v894.startsWith('preferredLanguage=')) {
        _v891 = _v894.split('=')[1];
        break;
      }
    }
  }
  let _v895 = false;
  if (_v891 === 'fa' || _v891 === 'fa-IR') {
    _v895 = true;
  } else if (_v891 === 'zh' || _v891 === 'zh-CN') {
    _v895 = false;
  } else {
    const _v896 = _v887.headers.get('Accept-Language') || '';
    const _v897 = _v896.split(',')[0].split('-')[0].toLowerCase();
    _v895 = _v897 === 'fa' || _v896.includes('fa-IR') || _v896.includes('fa');
  }
  const _v898 = _v895 ? 'fa-IR' : 'zh-CN';
  const _v899 = {
    zh: {
      title: 'NEXUS',
      subtitle: 'The Gateway to Tomorrow — Smart • Fast • Secure',
      selectClient: _d64("AVsg6YCJ5oup5a6i5oi356uvIF0="),
      systemStatus: _d64("AVsg57O757uf54q25oCBIF0="),
      configManagement: _d64("AVsg6YWN572u566h55CGIF0="),
      relatedLinks: _d64("AVsg55u45YWz6ZO+5o6lIF0="),
      checking: _d64("AeajgOa1i+S4rS4uLg=="),
      workerRegion: _d64("AVdvcmtlcuWcsOWMujog"),
      detectionMethod: _d64("AeajgOa1i+aWueW8jzog"),
      pipStatus: _v4('UHJveHlJUOeKtuaAgTog'),
      currentIP: _d64("AeW9k+WJjeS9v+eUqElQOiA="),
      regionMatch: _d64("AeWcsOWMuuWMuemFjTog"),
      selectionLogic: _d64("AemAieaLqemAu+i+kTog"),
      kvStatusChecking: _d64("AeajgOa1i0tW54q25oCB5LitLi4u"),
      kvEnabled: _d64("AeKchSBLVuWtmOWCqOW3suWQr+eUqO+8jOWPr+S7peS9v+eUqOmFjee9rueuoeeQhuWKn+iDvQ=="),
      kvDisabled: _d64("AeKaoO+4jyBLVuWtmOWCqOacquWQr+eUqOaIluacqumFjee9rg=="),
      specifyRegion: _d64("AeaMh+WumuWcsOWMuiAod2spOg=="),
      autoDetect: _d64("AeiHquWKqOajgOa1iw=="),
      saveRegion: _d64("AeS/neWtmOWcsOWMuumFjee9rg=="),
      protocolSelection: _v4('5Y2P6K6u6YCJ5oupOg=='),
      evLabel: _v4('5ZCv55SoIFZMRVNTIOWNj+iurg=='),
      etLabel: _v4('5ZCv55SoIFRyb2phbiDljY/orq4='),
      enableXhttp: _v4('5ZCv55SoIHhodHRwIOWNj+iurg=='),
      tpLabel: _v4('VHJvamFuIOWvhueggSAo5Y+v6YCJKTo='),
      customPath: _d64("AeiHquWumuS5iei3r+W+hCAoZCk6"),
      customIP: _v4('6Ieq5a6a5LmJUHJveHlJUCAocCk6'),
      preferredIPs: _d64("AeS8mOmAiUlQ5YiX6KGoICh5eCk6"),
      preferredIPsURL: _d64("AeS8mOmAiUlQ5p2l5rqQVVJMICh5eFVSTCk6"),
      latencyTest: _d64("AeW7tui/n+a1i+ivlQ=="),
      latencyTestIP: _d64("Aea1i+ivlUlQL+Wfn+WQjTo="),
      latencyTestIPPlaceholder: _d64("Aei+k+WFpUlQ5oiW5Z+f5ZCN77yM5aSa5Liq55So6YCX5Y+35YiG6ZqU"),
      latencyTestPort: _d64("Aeerr+WPozo="),
      startTest: _d64("AeW8gOWni+a1i+ivlQ=="),
      stopTest: _d64("AeWBnOatoua1i+ivlQ=="),
      testResult: _d64("Aea1i+ivlee7k+aenDo="),
      addToYx: _d64("Aea3u+WKoOWIsOS8mOmAieWIl+ihqA=="),
      addSelectedToYx: _d64("Aea3u+WKoOmAieS4remhueWIsOS8mOmAieWIl+ihqA=="),
      selectAll: _d64("AeWFqOmAiQ=="),
      deselectAll: _d64("AeWPlua2iOWFqOmAiQ=="),
      testingInProgress: _d64("Aea1i+ivleS4rS4uLg=="),
      testComplete: _d64("Aea1i+ivleWujOaIkA=="),
      latencyMs: _d64("AeW7tui/nw=="),
      timeout: _d64("Aei2heaXtg=="),
      ipSource: _d64("AUlQ5p2l5rqQOg=="),
      manualInput: _d64("AeaJi+WKqOi+k+WFpQ=="),
      cfRandomIP: _d64("AUNG6ZqP5py6SVA="),
      urlFetch: _d64("AVVSTOiOt+WPlg=="),
      randomCount: _d64("AeeUn+aIkOaVsOmHjzo="),
      fetchURL: _d64("AeiOt+WPllVSTDo="),
      fetchURLPlaceholder: _d64("Aei+k+WFpeS8mOmAiUlQ55qEVVJM5Zyw5Z2A"),
      generateIP: _d64("AeeUn+aIkElQ"),
      fetchIP: _d64("AeiOt+WPlklQ"),
      s5Label: _v4('U09DS1M16YWN572uIChzKTo='),
      customHomepage: _d64("AeiHquWumuS5iemmlumhtVVSTCAoaG9tZXBhZ2UpOg=="),
      customHomepagePlaceholder: _d64("AeS+i+WmgjogaHR0cHM6Ly9leGFtcGxlLmNvbQ=="),
      customHomepageHint: _d64("Aeiuvue9ruiHquWumuS5iVVSTOS9nOS4uummlumhteOAguiuv+mXruaguei3r+W+hCAvIOaXtuWwhuaYvuekuuivpVVSTOeahOWGheWuueOAgg=="),
      saveConfig: _d64("AeS/neWtmOmFjee9rg=="),
      advancedControl: _d64("AemrmOe6p+aOp+WItg=="),
      subscriptionConverter: _v4('6K6i6ZiF6L2s5o2i5Zyw5Z2AOg=='),
      builtinPreferred: _d64("AeWGhee9ruS8mOmAieexu+Weizo="),
      enablePreferredDomain: _d64("AeWQr+eUqOS8mOmAieWfn+WQjQ=="),
      enablePreferredIP: _d64("AeWQr+eUqOS8mOmAiSBJUA=="),
      enableNativeAddress: _d64("AeWQr+eUqOWOn+eUn+WcsOWdgA=="),
      enableGitHubPreferred: _d64("AeWQr+eUqOiHquWumuS5ieS8mOmAiQ=="),
      allowAPIManagement: _d64("AeWFgeiuuEFQSeeuoeeQhiAoYWUpOg=="),
      regionMatching: _d64("AeWcsOWMuuWMuemFjSAocm0pOg=="),
      downgradeControl: _d64("AemZjee6p+aOp+WItiAocWopOg=="),
      tlsControl: _d64("AVRMU+aOp+WItiAoZGtieSk6"),
      preferredControl: _d64("AeS8mOmAieaOp+WItiAoeXhieSk6"),
      saveAdvanced: _d64("AeS/neWtmOmrmOe6p+mFjee9rg=="),
      loading: _d64("AeWKoOi9veS4rS4uLg=="),
      currentConfig: _d64("AfCfk40g5b2T5YmN6Lev5b6E6YWN572u"),
      refreshConfig: _d64("AeWIt+aWsOmFjee9rg=="),
      resetConfig: _d64("AemHjee9rumFjee9rg=="),
      subscriptionCopied: _v4('6K6i6ZiF6ZO+5o6l5bey5aSN5Yi2'),
      autoSubscriptionCopied: _v4('6Ieq5Yqo6K+G5Yir6K6i6ZiF6ZO+5o6l5bey5aSN5Yi277yM5a6i5oi356uv6K6/6Zeu5pe25Lya5qC55o2uVXNlci1BZ2VudOiHquWKqOivhuWIq+W5tui/lOWbnuWvueW6lOagvOW8jw=='),
      tpPlaceholder: _d64("AeeVmeepuuWImeiHquWKqOS9v+eUqCBVVUlE"),
      tpHint: _v4('6K6+572u6Ieq5a6a5LmJIFRyb2phbiDlr4bnoIHjgILnlZnnqbrliJnkvb/nlKggVVVJROOAguWuouaIt+err+S8muiHquWKqOWvueWvhueggei/m+ihjCBTSEEyMjQg5ZOI5biM44CC'),
      protocolHint: _v4('5Y+v5Lul5ZCM5pe25ZCv55So5aSa5Liq5Y2P6K6u44CC6K6i6ZiF5bCG55Sf5oiQ6YCJ5Lit5Y2P6K6u55qE6IqC54K544CCPGJyPuKAoiBWTEVTUyBXUzog5Z+65LqOIFdlYlNvY2tldCDnmoTmoIflh4bljY/orq48YnI+4oCiIFRyb2phbjog5L2/55SoIFNIQTIyNCDlr4bnoIHorqTor4E8YnI+4oCiIHhodHRwOiDln7rkuo4gSFRUUCBQT1NUIOeahOS8quijheWNj+iuru+8iOmcgOimgee7keWumuiHquWumuS5ieWfn+WQjeW5tuW8gOWQryBnUlBD77yJ'),
      enableECH: _d64("AeWQr+eUqCBFQ0ggKEVuY3J5cHRlZCBDbGllbnQgSGVsbG8p"),
      enableECHHint: _v4('5ZCv55So5ZCO77yM5q+P5qyh5Yi35paw6K6i6ZiF5pe25Lya6Ieq5Yqo5LuOIERvSCDojrflj5bmnIDmlrDnmoQgRUNIIOmFjee9ruW5tua3u+WKoOWIsOmTvuaOpeS4rQ=='),
      customDNS: _d64("AeiHquWumuS5iSBETlMg5pyN5Yqh5Zmo"),
      customDNSPlaceholder: _d64("AeS+i+WmgjogaHR0cHM6Ly8yMjMuNS41LjUvZG5zLXF1ZXJ5"),
      customDNSHint: _d64("AeeUqOS6jkVDSOmFjee9ruafpeivoueahEROU+acjeWKoeWZqOWcsOWdgO+8iERvSOagvOW8j++8iQ=="),
      customECHDomain: _d64("AeiHquWumuS5iSBFQ0gg5Z+f5ZCN"),
      customECHDomainPlaceholder: _d64("AeS+i+WmgjogY2xvdWRmbGFyZS1lY2guY29t"),
      customECHDomainHint: _d64("AUVDSOmFjee9ruS4reS9v+eUqOeahOWfn+WQje+8jOeVmeepuuWImeS9v+eUqOm7mOiupOWAvA=="),
      alpn: 'TLS ALPN',
      alpnDefault: _d64("Aem7mOiupO+8iOeVmeepuu+8jOeUseWuouaIt+err+WNj+WVhu+8iQ=="),
      alpnHint: _d64("AeS7hea3u+WKoOWIsCBUTFMg6IqC54K56ZO+5o6l5Y+C5pWw77yb55WZ56m65YiZ5LiN5YaZIGFscG7jgII="),
      saveProtocol: _v4('5L+d5a2Y5Y2P6K6u6YWN572u'),
      subscriptionConverterPlaceholder: _d64("Aem7mOiupDogaHR0cHM6Ly91cmwudjEubWsvc3Vi"),
      subscriptionConverterHint: _v4('6K6i6ZiF6L2s5o2i5bey5YaF6YOo5a6e546w77yM5peg6ZyA5aSW6YOoIEFQSeOAguatpOmhueS7heS9nOWFvOWuueS/neeVme+8jOWPr+eVmeepuuOAgg=='),
      builtinPreferredHint: _v4('5o6n5Yi26K6i6ZiF5Lit5YyF5ZCr5ZOq5Lqb5YaF572u5LyY6YCJ6IqC54K544CC6buY6K6k5YWo6YOo5ZCv55So44CC'),
      apiEnabledDefault: _d64("Aem7mOiupO+8iOWFs+mXrUFQSe+8iQ=="),
      apiEnabledYes: _d64("AeW8gOWQr0FQSeeuoeeQhg=="),
      apiEnabledHint: _d64("AeKaoO+4jyDlronlhajmj5DphpLvvJrlvIDlkK/lkI7lhYHorrjpgJrov4dBUEnliqjmgIHmt7vliqDkvJjpgIlJUOOAguW7uuiuruS7heWcqOmcgOimgeaXtuW8gOWQr+OAgg=="),
      regionMatchingDefault: _d64("Aem7mOiupO+8iOWQr+eUqOWcsOWMuuWMuemFje+8iQ=="),
      regionMatchingNo: _d64("AeWFs+mXreWcsOWMuuWMuemFjQ=="),
      regionMatchingHint: _d64("Aeiuvue9ruS4uiLlhbPpl60i5pe25LiN6L+b6KGM5Zyw5Yy65pm66IO95Yy56YWN"),
      downgradeControlDefault: _d64("Aem7mOiupO+8iOS4jeWQr+eUqOmZjee6p++8iQ=="),
      downgradeControlNo: _d64("AeWQr+eUqOmZjee6p+aooeW8jw=="),
      downgradeControlHint: _v4('6K6+572u5Li6IuWQr+eUqCLml7bvvJpDRuebtOi/nuWksei0peKGklNPQ0tTNei/nuaOpeKGkmZhbGxiYWNr5Zyw5Z2A'),
      tlsControlDefault: _d64("Aem7mOiupO+8iOS/neeVmeaJgOacieiKgueCue+8iQ=="),
      tlsControlYes: _d64("AeS7hVRMU+iKgueCuQ=="),
      tlsControlHint: _d64("Aeiuvue9ruS4uiLku4VUTFPoioLngrki5pe25Y+q55Sf5oiQ5bimVExT55qE6IqC54K577yM5LiN55Sf5oiQ6Z2eVExT6IqC54K577yI5aaCODDnq6/lj6PvvIk="),
      preferredControlDefault: _d64("Aem7mOiupO+8iOWQr+eUqOS8mOmAie+8iQ=="),
      preferredControlYes: _d64("AeWFs+mXreS8mOmAiQ=="),
      preferredControlHint: _d64("Aeiuvue9ruS4uiLlhbPpl63kvJjpgIki5pe25Y+q5L2/55So5Y6f55Sf5Zyw5Z2A77yM5LiN55Sf5oiQ5LyY6YCJSVDlkozln5/lkI3oioLngrk="),
      regionNames: {
        HK: _d64("AfCfh63wn4ewIOmmmea4rw=="),
        US: _d64("AfCfh7rwn4e4IOe+juWbvQ=="),
        SG: _d64("AfCfh7jwn4esIOaWsOWKoOWdoQ=="),
        JP: _d64("AfCfh6/wn4e1IOaXpeacrA=="),
        KR: _d64("AfCfh7Dwn4e3IOmfqeWbvQ=="),
        DE: _d64("AfCfh6nwn4eqIOW+t+WbvQ=="),
        SE: _d64("AfCfh7jwn4eqIOeRnuWFuA=="),
        NL: _d64("AfCfh7Pwn4exIOiNt+WFsA=="),
        FI: _d64("AfCfh6vwn4euIOiKrOWFsA=="),
        GB: _d64("AfCfh6zwn4enIOiLseWbvQ==")
      },
      terminal: 'Edge Gateway',
      githubProject: _d64("AUdpdEh1YiDpobnnm64="),
      [_d64("AeS8mOmAieW3peWFtw==")]: _d64("AeS8mOmAieW3peWFtw=="),
      autoDetectClient: _d64("AeiHquWKqOivhuWIqw=="),
      selectionLogicText: _d64("AeWQjOWcsOWMuiDihpIg6YK76L+R5Zyw5Yy6IOKGkiDlhbbku5blnLDljLo="),
      customIPDisabledHint: _v4('5L2/55So6Ieq5a6a5LmJUHJveHlJUOaXtu+8jOWcsOWMuumAieaLqeW3suemgeeUqA=='),
      customIPMode: _v4('6Ieq5a6a5LmJUHJveHlJUOaooeW8jyAocOWPmOmHj+WQr+eUqCk='),
      customIPModeDesc: _d64("AeiHquWumuS5iUlQ5qih5byPICjlt7LnpoHnlKjlnLDljLrljLnphY0p"),
      customPipLabel: _v4('5L2/55So6Ieq5a6a5LmJUHJveHlJUDog'),
      customIPConfig: _d64("ASAocOWPmOmHj+mFjee9rik="),
      customIPModeDisabled: _d64("AeiHquWumuS5iUlQ5qih5byP77yM5Zyw5Yy66YCJ5oup5bey56aB55So"),
      manualRegion: _d64("AeaJi+WKqOaMh+WumuWcsOWMug=="),
      manualRegionDesc: _d64("ASAo5omL5Yqo5oyH5a6aKQ=="),
      pipAvailLabel: _v4('MTAvMTAg5Y+v55SoIChQcm94eUlQ5Z+f5ZCN6aKE6K6+5Y+v55SoKQ=='),
      smartSelection: _d64("AeaZuuiDveWwsei/kemAieaLqeS4rQ=="),
      sameRegionIP: _d64("AeWQjOWcsOWMuklQ5Y+v55SoICgx5LiqKQ=="),
      cloudflareDetection: _d64("AUNsb3VkZmxhcmXlhoXnva7mo4DmtYs="),
      detectionFailed: _d64("AeajgOa1i+Wksei0pQ=="),
      apiTestResult: _d64("AUFQSeajgOa1i+e7k+aenDog"),
      apiTestTime: _d64("AeajgOa1i+aXtumXtDog"),
      apiTestFailed: _d64("AUFQSeajgOa1i+Wksei0pTog"),
      unknownError: _d64("AeacquefpemUmeivrw=="),
      apiTestError: _d64("AUFQSea1i+ivleWksei0pTog"),
      kvNotConfigured: _d64("AUtW5a2Y5YKo5pyq6YWN572u77yM5peg5rOV5L2/55So6YWN572u566h55CG5Yqf6IO944CCXG5cbuivt+WcqENsb3VkZmxhcmUgV29ya2Vyc+S4rTpcbjEuIOWIm+W7uktW5ZG95ZCN56m66Ze0XG4yLiDnu5Hlrprnjq/looPlj5jph48gQ1xuMy4g6YeN5paw6YOo572y5Luj56CB"),
      kvNotEnabled: _d64("AUtW5a2Y5YKo5pyq6YWN572u"),
      kvCheckFailed: _d64("AUtW5a2Y5YKo5qOA5rWL5aSx6LSlOiDlk43lupTmoLzlvI/plJnor68="),
      kvCheckFailedStatus: _d64("AUtW5a2Y5YKo5qOA5rWL5aSx6LSlIC0g54q25oCB56CBOiA="),
      kvCheckFailedError: _d64("AUtW5a2Y5YKo5qOA5rWL5aSx6LSlIC0g6ZSZ6K+vOiA=")
    },
    fa: {
      title: 'NEXUS',
      subtitle: 'دروازه به فردا — هوشمند • سریع • امن',
      selectClient: '[ انتخاب کلاینت ]',
      systemStatus: '[ وضعیت سیستم ]',
      configManagement: '[ مدیریت تنظیمات ]',
      relatedLinks: '[ لینک‌های مرتبط ]',
      checking: 'در حال بررسی...',
      workerRegion: 'منطقه Worker: ',
      detectionMethod: 'روش تشخیص: ',
      pipStatus: _v4('2YjYtti524zYqiBQcm94eUlQOiA='),
      currentIP: 'IP فعلی: ',
      regionMatch: 'تطبیق منطقه: ',
      selectionLogic: 'منطق انتخاب: ',
      kvStatusChecking: 'در حال بررسی وضعیت KV...',
      kvEnabled: '✅ ذخیره‌سازی KV فعال است، می‌توانید از مدیریت تنظیمات استفاده کنید',
      kvDisabled: '⚠️ ذخیره‌سازی KV فعال نیست یا پیکربندی نشده است',
      specifyRegion: 'تعیین منطقه (wk):',
      autoDetect: 'تشخیص خودکار',
      saveRegion: 'ذخیره تنظیمات منطقه',
      protocolSelection: 'انتخاب پروتکل:',
      evLabel: _v4('2YHYudin2YTigIzYs9in2LLbjCDZvtix2YjYqtqp2YQgVkxFU1M='),
      etLabel: _v4('2YHYudin2YTigIzYs9in2LLbjCDZvtix2YjYqtqp2YQgVHJvamFu'),
      enableXhttp: 'فعال‌سازی پروتکل xhttp',
      enableECH: 'فعال‌سازی ECH (Encrypted Client Hello)',
      enableECHHint: 'پس از فعال‌سازی، در هر بار تازه‌سازی اشتراک، پیکربندی ECH به‌روز به‌طور خودکار از DoH دریافت شده و به لینک‌ها اضافه می‌شود',
      customDNS: 'سرور DNS سفارشی',
      customDNSPlaceholder: 'مثال: https://223.5.5.5/dns-query',
      customDNSHint: 'آدرس سرور DNS برای جستجوی پیکربندی ECH (فرمت DoH)',
      customECHDomain: 'دامنه ECH سفارشی',
      customECHDomainPlaceholder: 'مثال: cloudflare-ech.com',
      customECHDomainHint: 'دامنه استفاده شده در پیکربندی ECH، خالی بگذارید تا از مقدار پیش‌فرض استفاده شود',
      tpLabel: _v4('2LHZhdiyINi52KjZiNixIFRyb2phbiAo2KfYrtiq24zYp9ix24wpOg=='),
      customPath: 'مسیر سفارشی (d):',
      customIP: _v4('UHJveHlJUCDYs9mB2KfYsdi024wgKHApOg=='),
      preferredIPs: 'لیست IP ترجیحی (yx):',
      preferredIPsURL: 'URL منبع IP ترجیحی (yxURL):',
      latencyTest: 'تست تاخیر',
      latencyTestIP: 'IP/دامنه تست:',
      latencyTestIPPlaceholder: 'IP یا دامنه وارد کنید، چند مورد با کاما جدا شوند',
      latencyTestPort: 'پورت:',
      startTest: 'شروع تست',
      stopTest: 'توقف تست',
      testResult: 'نتیجه تست:',
      addToYx: 'افزودن به لیست ترجیحی',
      addSelectedToYx: 'افزودن موارد انتخاب شده',
      selectAll: 'انتخاب همه',
      deselectAll: 'لغو انتخاب',
      testingInProgress: 'در حال تست...',
      testComplete: 'تست کامل شد',
      latencyMs: 'تاخیر',
      timeout: 'زمان تمام شد',
      ipSource: 'منبع IP:',
      manualInput: 'ورودی دستی',
      cfRandomIP: 'IP تصادفی CF',
      urlFetch: 'دریافت از URL',
      randomCount: 'تعداد تولید:',
      fetchURL: 'URL دریافت:',
      fetchURLPlaceholder: 'آدرس URL لیست IP را وارد کنید',
      generateIP: 'تولید IP',
      fetchIP: 'دریافت IP',
      s5Label: _v4('2KrZhti424zZhdin2KogU09DS1M1IChzKTo='),
      customHomepage: 'URL صفحه اصلی سفارشی (homepage):',
      customHomepagePlaceholder: 'مثال: https://example.com',
      customHomepageHint: 'تنظیم URL سفارشی به عنوان استتار صفحه اصلی. هنگام دسترسی به مسیر اصلی / محتوای این URL نمایش داده می‌شود. اگر خالی بگذارید صفحه ترمینال پیش‌فرض نمایش داده می‌شود.',
      saveConfig: 'ذخیره تنظیمات',
      advancedControl: 'کنترل پیشرفته',
      subscriptionConverter: 'آدرس تبدیل اشتراک:',
      builtinPreferred: 'نوع ترجیحی داخلی:',
      enablePreferredDomain: 'فعال‌سازی دامنه ترجیحی',
      enablePreferredIP: 'فعال‌سازی IP ترجیحی',
      enableNativeAddress: 'فعال‌سازی آدرس اصلی',
      enableGitHubPreferred: 'فعال‌سازی ترجیح سفارشی',
      allowAPIManagement: 'اجازه مدیریت API (ae):',
      regionMatching: 'تطبیق منطقه (rm):',
      downgradeControl: 'کنترل کاهش سطح (qj):',
      tlsControl: 'کنترل TLS (dkby):',
      preferredControl: 'کنترل ترجیحی (yxby):',
      saveAdvanced: 'ذخیره تنظیمات پیشرفته',
      loading: 'در حال بارگذاری...',
      currentConfig: '📍 پیکربندی مسیر فعلی',
      refreshConfig: 'تازه‌سازی تنظیمات',
      resetConfig: 'بازنشانی تنظیمات',
      subscriptionCopied: 'لینک اشتراک کپی شد',
      autoSubscriptionCopied: 'لینک اشتراک تشخیص خودکار کپی شد، کلاینت هنگام دسترسی بر اساس User-Agent به طور خودکار تشخیص داده و قالب مربوطه را برمی‌گرداند',
      tpPlaceholder: 'خالی بگذارید تا از UUID استفاده شود',
      tpHint: _v4('2LHZhdiyINi52KjZiNixIFRyb2phbiDYs9mB2KfYsdi024wg2LHYpyDYqtmG2LjbjNmFINqp2YbbjNivLiDYp9qv2LEg2K7Yp9mE24wg2Kjar9iw2KfYsduM2K8g2KfYsiBVVUlEINin2LPYqtmB2KfYr9mHINmF24zigIzYtNmI2K8uINqp2YTYp9uM2YbYqiDYqNmHINi32YjYsSDYrtmI2K/aqdin2LEg2LHZhdiyINi52KjZiNixINix2Kcg2KjYpyBTSEEyMjQg2YfYtCDZhduM4oCM2qnZhtivLg=='),
      protocolHint: _v4('2YXbjOKAjNiq2YjYp9mG24zYryDahtmG2K/bjNmGINm+2LHZiNiq2qnZhCDYsdinINmH2YXYstmF2KfZhiDZgdi52KfZhCDaqdmG24zYry4g2KfYtNiq2LHYp9qpINqv2LHZh+KAjNmH2KfbjCDZvtix2YjYqtqp2YTigIzZh9in24wg2KfZhtiq2K7Yp9ioINi02K/ZhyDYsdinINiq2YjZhNuM2K8g2YXbjOKAjNqp2YbYry48YnI+4oCiIFZMRVNTIFdTOiDZvtix2YjYqtqp2YQg2KfYs9iq2KfZhtiv2KfYsdivINmF2KjYqtmG24wg2KjYsSBXZWJTb2NrZXQ8YnI+4oCiIFRyb2phbjog2KfYrdix2KfYsiDZh9mI24zYqiDYqNinINix2YXYsiDYudio2YjYsSBTSEEyMjQ8YnI+4oCiIHhodHRwOiDZvtix2YjYqtqp2YQg2KfYs9iq2KrYp9ixINmF2KjYqtmG24wg2KjYsSBIVFRQIFBPU1QgKNmG24zYp9iyINio2Ycg2KfYqti12KfZhCDYr9in2YXZhtmHINiz2YHYp9ix2LTbjCDZiCDZgdi52KfZhOKAjNiz2KfYstuMIGdSUEMg2K/Yp9ix2K8p'),
      alpn: 'TLS ALPN',
      alpnDefault: 'پیش‌فرض (خالی، مذاکره توسط کلاینت)',
      alpnHint: 'فقط به لینک‌های TLS اضافه می‌شود؛ اگر خالی باشد alpn نوشته نمی‌شود.',
      saveProtocol: 'ذخیره تنظیمات پروتکل',
      subscriptionConverterPlaceholder: 'پیش‌فرض: https://url.v1.mk/sub',
      subscriptionConverterHint: 'تبدیل اشتراک به صورت داخلی پیاده‌سازی شده است و نیازی به API خارجی ندارد. این فیلد فقط برای سازگاری حفظ شده و می‌توان آن را خالی گذاشت.',
      builtinPreferredHint: 'کنترل اینکه کدام گره‌های ترجیحی داخلی در اشتراک گنجانده شوند. به طور پیش‌فرض همه فعال هستند.',
      apiEnabledDefault: 'پیش‌فرض (بستن API)',
      apiEnabledYes: 'فعال‌سازی مدیریت API',
      apiEnabledHint: '⚠️ هشدار امنیتی: فعال‌سازی این گزینه اجازه می‌دهد IP های ترجیحی از طریق API به طور پویا اضافه شوند. توصیه می‌شود فقط در صورت نیاز فعال کنید.',
      regionMatchingDefault: 'پیش‌فرض (فعال‌سازی تطبیق منطقه)',
      regionMatchingNo: 'بستن تطبیق منطقه',
      regionMatchingHint: 'وقتی "بستن" تنظیم شود، تطبیق هوشمند منطقه انجام نمی‌شود',
      downgradeControlDefault: 'پیش‌فرض (عدم فعال‌سازی کاهش سطح)',
      downgradeControlNo: 'فعال‌سازی حالت کاهش سطح',
      downgradeControlHint: _v4('2YjZgtiq24wgItmB2LnYp9mEIiDYqtmG2LjbjNmFINi02YjYrzog2KfYqti12KfZhCDZhdiz2KrZgtuM2YUgQ0Yg2YbYp9mF2YjZgdmCIOKGkiDYp9iq2LXYp9mEIFNPQ0tTNSDihpIg2KLYr9ix2LMgZmFsbGJhY2s='),
      tlsControlDefault: 'پیش‌فرض (حفظ همه گره‌ها)',
      tlsControlYes: 'فقط گره‌های TLS',
      tlsControlHint: 'وقتی "فقط گره‌های TLS" تنظیم شود، فقط گره‌های با TLS تولید می‌شوند، گره‌های غیر TLS (مانند پورت 80) تولید نمی‌شوند',
      preferredControlDefault: 'پیش‌فرض (فعال‌سازی ترجیح)',
      preferredControlYes: 'بستن ترجیح',
      preferredControlHint: 'وقتی "بستن ترجیح" تنظیم شود، فقط از آدرس اصلی استفاده می‌شود، گره‌های IP و دامنه ترجیحی تولید نمی‌شوند',
      regionNames: {
        HK: '🇭🇰 هنگ کنگ',
        US: '🇺🇸 آمریکا',
        SG: '🇸🇬 سنگاپور',
        JP: '🇯🇵 ژاپن',
        KR: '🇰🇷 کره جنوبی',
        DE: '🇩🇪 آلمان',
        SE: '🇸🇪 سوئد',
        NL: '🇳🇱 هلند',
        FI: '🇫🇮 فنلاند',
        GB: '🇬🇧 بریتانیا'
      },
      terminal: 'ترمینال v2.9.8c',
      githubProject: 'پروژه GitHub',
      [_d64("AeS8mOmAieW3peWFtw==")]: 'ابزار ترجیح IP',
      autoDetectClient: 'تشخیص خودکار',
      selectionLogicText: 'هم‌منطقه → منطقه مجاور → سایر مناطق',
      customIPDisabledHint: _v4('2YfZhtqv2KfZhSDYp9iz2KrZgdin2K/ZhyDYp9iyIFByb3h5SVAg2LPZgdin2LHYtNuM2Iwg2KfZhtiq2K7Yp9ioINmF2YbYt9mC2Ycg2LrbjNix2YHYudin2YQg2KfYs9iq'),
      customIPMode: _v4('2K3Yp9mE2KogUHJveHlJUCDYs9mB2KfYsdi024wgKNmF2KrYutuM2LEgcCDZgdi52KfZhCDYp9iz2Kop'),
      customIPModeDesc: 'حالت IP سفارشی (تطبیق منطقه غیرفعال است)',
      customPipLabel: _v4('2KfYs9iq2YHYp9iv2Ycg2KfYsiBQcm94eUlQINiz2YHYp9ix2LTbjDog'),
      customIPConfig: ' (پیکربندی متغیر p)',
      customIPModeDisabled: 'حالت IP سفارشی، انتخاب منطقه غیرفعال است',
      manualRegion: 'تعیین منطقه دستی',
      manualRegionDesc: ' (تعیین دستی)',
      pipAvailLabel: _v4('MTAvMTAg2K/YsSDYr9iz2KrYsdizICjYr9in2YXZhtmHINm+24zYtOKAjNmB2LHYtiBQcm94eUlQINiv2LEg2K/Ys9iq2LHYsyDYp9iz2Kop'),
      smartSelection: 'انتخاب هوشمند نزدیک در حال انجام است',
      sameRegionIP: 'IP هم‌منطقه در دسترس است (1)',
      cloudflareDetection: 'تشخیص داخلی Cloudflare',
      detectionFailed: 'تشخیص ناموفق',
      apiTestResult: 'نتیجه تشخیص API: ',
      apiTestTime: 'زمان تشخیص: ',
      apiTestFailed: 'تشخیص API ناموفق: ',
      unknownError: 'خطای ناشناخته',
      apiTestError: 'تست API ناموفق: ',
      kvNotConfigured: 'ذخیره‌سازی KV پیکربندی نشده است، نمی‌توانید از عملکرد مدیریت تنظیمات استفاده کنید.\\n\\nلطفا در Cloudflare Workers:\\n1. فضای نام KV ایجاد کنید\\n2. متغیر محیطی C را پیوند دهید\\n3. کد را دوباره مستقر کنید',
      kvNotEnabled: 'ذخیره‌سازی KV پیکربندی نشده است',
      kvCheckFailed: 'بررسی ذخیره‌سازی KV ناموفق: خطای فرمت پاسخ',
      kvCheckFailedStatus: 'بررسی ذخیره‌سازی KV ناموفق - کد وضعیت: ',
      kvCheckFailedError: 'بررسی ذخیره‌سازی KV ناموفق - خطا: '
    }
  };
  const _v900 = _v899[_v895 ? 'fa' : 'zh'];
  const _v901 = "<!DOCTYPE html>\n    <html lang=\"" + String(_v898) + "\" dir=\"" + String(_v895 ? 'rtl' : 'ltr') + "\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>NEXUS · Gateway</title>\n        <style>\n            @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Vazirmatn:wght@400;500;600;700&display=swap');\n            :root {\n                --md-bg: #080a0e;\n                --md-bg-2: #0b0e14;\n                --md-surface: #10141c;\n                --md-surface-2: #141a24;\n                --md-surface-3: #1b2230;\n                --md-primary: #c8f135;\n                --md-primary-d: #a6cf1d;\n                --md-on-primary: #0a0f05;\n                --md-secondary: #5b8cff;\n                --md-secondary-d: #3f5fb0;\n                --md-tertiary: #ffb454;\n                --md-yellow: #ffb454;\n                --md-success: #3ddc84;\n                --md-error: #ff5d73;\n                --md-warning: #ffb454;\n                --md-text: #eef2f7;\n                --md-text-dim: #9aa6b8;\n                --md-outline: rgba(238,242,247,0.14);\n                --md-outline-strong: rgba(238,242,247,0.28);\n                --md-r-sm: 12px;\n                --md-r-md: 16px;\n                --md-r-lg: 24px;\n                --md-r-xl: 28px;\n                --md-elev-1: 0 1px 3px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.3);\n                --md-elev-2: 0 3px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3);\n                --md-elev-3: 0 8px 22px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.3);\n                --md-font: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n                --md-disp: 'Bricolage Grotesque', 'Vazirmatn', sans-serif;\n                --md-shadow: 0 26px 60px -26px rgba(0,0,0,.8);\n                --md-line: rgba(255,255,255,.075);\n                --md-line2: rgba(255,255,255,.15);\n                --cp-bg: var(--md-bg);\n                --cp-bg-2: var(--md-bg-2);\n                --cp-bg-3: var(--md-surface);\n                --cp-cyan: var(--md-primary);\n                --cp-cyan-d: var(--md-primary-d);\n                --cp-pink: var(--md-secondary);\n                --cp-pink-d: var(--md-secondary-d);\n                --cp-purple: var(--md-tertiary);\n                --cp-yellow: var(--md-yellow);\n                --cp-mint: var(--md-success);\n                --cp-amber: var(--md-warning);\n                --cp-red: var(--md-error);\n                --cp-text: var(--md-text);\n                --cp-text-dim: var(--md-text-dim);\n                --cp-border: var(--md-outline);\n                --cp-border-pink: var(--md-outline);\n                --cp-grid: transparent;\n            }\n            * { margin: 0; padding: 0; box-sizing: border-box; }\n            html, body { min-height: 100%; }\n\n            /* ===== Top bar — matches wizard ===== */\n            .cp-bar{position:sticky;top:0;z-index:80;display:flex;align-items:center;gap:14px;\n                padding:12px clamp(14px,3.5vw,30px);background:linear-gradient(180deg,var(--md-surface-2),var(--md-surface));\n                border-bottom:1px solid var(--md-line);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}\n            .cp-bar::after{content:\"\";position:absolute;left:0;right:0;bottom:-1px;height:1px;\n                background:linear-gradient(90deg,transparent,var(--md-primary),var(--md-secondary),transparent);\n                background-size:200% 100%;animation:cp-sheen 7s linear infinite;opacity:.5}\n            @keyframes cp-sheen{to{background-position:200% 0}}\n            .cp-brand{display:flex;align-items:center;gap:11px}\n            .cp-brand .cp-mk{width:30px;height:30px;flex:none;position:relative;border-radius:8px;\n                background:conic-gradient(from 200deg,var(--md-primary),var(--md-secondary),var(--md-primary));box-shadow:0 0 16px rgba(200,241,53,.13)}\n            .cp-brand .cp-mk::after{content:\"\";position:absolute;inset:5px;border-radius:5px;background:var(--md-surface)}\n            .cp-brand .cp-mk::before{content:\"\";position:absolute;inset:11px;border-radius:2px;background:var(--md-primary);box-shadow:0 0 9px var(--md-primary);z-index:1;transform:rotate(45deg)}\n            .cp-brand b{font-family:var(--md-disp);font-weight:800;font-size:15px;letter-spacing:.04em;color:var(--md-text)}\n            .cp-brand small{display:block;font-size:9.5px;color:var(--md-text-dim);letter-spacing:.22em;font-weight:700;text-transform:uppercase}\n            .cp-spacer{flex:1}\n            .cp-sig{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:99px;\n                font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;letter-spacing:.04em;\n                background:var(--md-surface);border:1px solid var(--md-line);color:var(--md-text-dim)}\n            .cp-sig .cp-sig-d{width:7px;height:7px;border-radius:50%;background:var(--md-success);box-shadow:0 0 9px var(--md-success)}\n            .cp-sel{position:relative}\n            .cp-sel select{appearance:none;-webkit-appearance:none;background:var(--md-surface);border:1px solid var(--md-line);\n                color:var(--md-text-dim);border-radius:9px;font-family:var(--md-font);font-size:12px;font-weight:600;cursor:pointer;\n                padding:8px 30px 8px 12px;outline:none;transition:.2s}\n            .cp-sel::after{content:\"▾\";position:absolute;inset-inline-end:10px;top:50%;transform:translateY(-50%);color:var(--md-text-dim);pointer-events:none;font-size:10px}\n            .cp-sel select option{background:var(--md-surface-2);color:var(--md-text)}\n            .cp-ib{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;\n                background:var(--md-surface);border:1px solid var(--md-line);color:var(--md-text-dim);border-radius:9px;\n                font-family:var(--md-font);font-weight:600;cursor:pointer;transition:.2s}\n            .cp-ib:hover{border-color:var(--md-line2);color:var(--md-text);transform:translateY(-1px)}\n            .cp-prog{height:2px;background:var(--md-line);position:relative}\n            .cp-prog i{position:absolute;inset-inline-start:0;top:0;bottom:0;width:100%;background:linear-gradient(90deg,var(--md-primary),var(--md-secondary));box-shadow:0 0 10px rgba(200,241,53,.13)}\n            body {\n                font-family: var(--md-font);\n                background:\n                    radial-gradient(circle at 12% 8%, rgba(200,241,53,0.14) 0%, transparent 38%),\n                    radial-gradient(circle at 88% 92%, rgba(91,140,255,0.12) 0%, transparent 40%),\n                    radial-gradient(circle at 90% 5%, rgba(255,180,84,0.10) 0%, transparent 35%),\n                    var(--md-bg);\n                color: var(--md-text);\n                min-height: 100vh;\n                overflow-x: hidden;\n                position: relative;\n            }\n            body::before { content: none; }\n            body::after { content:\"\";position:fixed;inset:0;z-index:-2;pointer-events:none;\n                background-image:radial-gradient(var(--md-line) 1px,transparent 1px);background-size:30px 30px;\n                -webkit-mask-image:radial-gradient(ellipse at 50% 0%,#000 8%,transparent 80%);mask-image:radial-gradient(ellipse at 50% 0%,#000 8%,transparent 80%);opacity:.6; }\n            .matrix-bg, .matrix-code-rain, .matrix-column, .matrix-rain { display: none !important; }\n\n            ::selection { background: var(--md-primary); color: var(--md-on-primary); }\n\n            .container {\n                max-width: 900px;\n                margin: 0 auto;\n                padding: 28px 20px 120px;\n                position: relative;\n                z-index: 1;\n            }\n            .header {\n                text-align: start;\n                margin-bottom: 24px;\n                padding: clamp(18px,3vw,28px);\n                position: relative;\n                border: 1px solid var(--md-line);\n                background: linear-gradient(135deg, var(--md-surface), var(--md-surface-2));\n                border-radius: var(--md-r-lg);\n                box-shadow: var(--md-shadow);\n                overflow: hidden;\n            }\n            .header::before { content:\"\";position:absolute;top:8px;inset-inline-start:8px;width:13px;height:13px;\n                border-top:1.5px solid var(--md-primary);border-inline-start:1.5px solid var(--md-primary);opacity:.7 }\n            .header::after { content:\"\";position:absolute;bottom:8px;inset-inline-end:8px;width:13px;height:13px;\n                border-bottom:1.5px solid var(--md-secondary);border-inline-end:1.5px solid var(--md-secondary);opacity:.7 }\n            .title {\n                font-family: var(--md-disp);\n                font-size: clamp(1.7rem, 4.2vw, 2.4rem);\n                font-weight: 800;\n                margin: 0 0 8px;\n                color: var(--md-text);\n                letter-spacing: -.01em;\n                text-transform: none;\n                position: relative;\n                animation: none;\n            }\n            .subtitle {\n                color: var(--md-text-dim);\n                margin-bottom: 0;\n                font-size: 13.5px;\n                max-width: 54ch;\n                letter-spacing: 0;\n                text-transform: none;\n                line-height: 1.55;\n            }\n            .subtitle::before { content: none; }\n\n            .card {\n                background: var(--md-surface);\n                border: 1px solid var(--md-line);\n                border-radius: var(--md-r-lg);\n                padding: clamp(18px,3vw,28px);\n                margin-bottom: 18px;\n                position: relative;\n                width: 100%;\n                box-shadow: var(--md-shadow);\n                overflow: hidden;\n            }\n            .card::before { content:\"\";position:absolute;top:8px;inset-inline-start:8px;width:13px;height:13px;\n                border-top:1.5px solid var(--md-primary);border-inline-start:1.5px solid var(--md-primary);opacity:.7;pointer-events:none }\n            .card::after { content:\"\";position:absolute;bottom:8px;inset-inline-end:8px;width:13px;height:13px;\n                border-bottom:1.5px solid var(--md-secondary);border-inline-end:1.5px solid var(--md-secondary);opacity:.7;pointer-events:none }\n            .card-title {\n                font-family: var(--md-disp);\n                font-size: clamp(1.1rem,2.5vw,1.35rem);\n                margin: 0 0 18px;\n                color: var(--md-text);\n                letter-spacing: -.01em;\n                text-transform: none;\n                display: flex; align-items: center; gap: 10px;\n                font-weight: 800;\n            }\n            .card-title::before {\n                content: \"\"; display: inline-block;\n                width: 16px; height: 2px; flex: none;\n                background: var(--md-primary);\n                box-shadow: 0 0 8px var(--md-primary);\n            }\n            .card-title::after { content: none; }\n            h3, h4 {\n                color: var(--md-text);\n                letter-spacing: 0;\n                text-transform: none;\n                font-weight: 700;\n            }\n\n            .client-grid {\n                display: grid;\n                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n                gap: 10px;\n                margin: 4px 0 16px;\n            }\n            .client-btn {\n                background: var(--md-surface-2);\n                border: 1px solid var(--md-outline);\n                border-radius: var(--md-r-md);\n                padding: 14px 16px;\n                color: var(--md-text);\n                font-family: inherit;\n                font-weight: 500;\n                font-size: 0.86rem;\n                letter-spacing: 0;\n                text-transform: none;\n                cursor: pointer;\n                transition: all 0.18s ease;\n                text-align: center;\n                position: relative;\n                overflow: hidden;\n            }\n            .client-btn::before { content: none; }\n            .client-btn:hover {\n                color: var(--md-on-primary);\n                border-color: var(--md-primary);\n                background: var(--md-primary);\n                box-shadow: var(--md-elev-1);\n                transform: translateY(-1px);\n            }\n\n            #clientSubscriptionUrl,\n            .subscription-url,\n            [class*='subscription-url'],\n            [class*='c3Vic2NyaXB0aW9u'] {\n                background: var(--md-surface-2) !important;\n                border: 1px solid var(--md-outline) !important;\n                border-radius: var(--md-r-md) !important;\n                padding: 14px 16px !important;\n                word-break: break-all;\n                font-family: 'JetBrains Mono', monospace;\n                color: var(--md-primary) !important;\n                margin-top: 14px;\n                box-shadow: none !important;\n                position: relative;\n                overflow-wrap: break-word;\n                overflow-x: auto;\n                max-width: 100%;\n                font-size: 0.85rem;\n                line-height: 1.6;\n            }\n            #clientSubscriptionUrl:empty { display: none !important; }\n\n            .cp-hud { display: none; }\n            .cp-lang-wrapper {\n                position: fixed; top: 18px; left: 18px; z-index: 1000;\n                display: flex; align-items: center; gap: 8px;\n            }\n            .cp-lang-tag { display: none; }\n            #languageSelector {\n                background: var(--md-surface-2);\n                border: 1px solid var(--md-outline);\n                border-radius: 20px;\n                color: var(--md-text);\n                padding: 8px 16px;\n                font-family: inherit;\n                font-size: 12.5px;\n                cursor: pointer;\n                box-shadow: var(--md-elev-1);\n            }\n            #languageSelector option { background: var(--md-surface-2); color: var(--md-text); }\n\n            /* FX toggle */\n            .cp-fx-toggle {\n                position: fixed; top: 18px; right: 18px; z-index: 1001;\n                background: var(--md-surface-2);\n                border: 1px solid var(--md-outline);\n                border-radius: 20px;\n                color: var(--md-text-dim);\n                padding: 8px 16px;\n                font-family: inherit;\n                font-size: 11.5px;\n                letter-spacing: 0;\n                text-transform: none;\n                cursor: pointer;\n                box-shadow: var(--md-elev-1);\n                transition: all 0.2s ease;\n                display: inline-flex; align-items: center; gap: 8px;\n            }\n            .cp-fx-toggle:hover { color: var(--md-primary); border-color: var(--md-primary); }\n            .cp-fx-toggle .cp-fx-dot { width: 8px; height: 8px; background: var(--md-success); border-radius: 50%; box-shadow: none; transition: all 0.2s; }\n            body.fx-off .cp-fx-toggle { color: var(--md-text-dim); border-color: var(--md-outline); box-shadow: none; }\n            body.fx-off .cp-fx-toggle .cp-fx-dot { background: transparent; border: 1px solid var(--md-text-dim); box-shadow: none; }\n            body.fx-off .matrix-bg,\n            body.fx-off .matrix-code-rain,\n            body.fx-off .matrix-column { display: none !important; }\n            body.fx-off::before, body.fx-off::after { display: none !important; content: none !important; }\n            body.fx-off { background: var(--md-bg) !important; }\n            body.fx-off * {\n                animation: none !important;\n                transition: color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s !important;\n            }\n            body.fx-off .cp-glitch::before,\n            body.fx-off .cp-glitch::after { display: none !important; }\n            body.fx-off .terminal-cursor::after,\n            body.fx-off .cp-fab-save .cp-fab-dot { animation: none !important; }\n            body.fx-off .cp-fab-save:hover { transform: none !important; }\n            body.fx-off .cp-action-bar.cp-dirty::before { animation: none !important; }\n            body.fx-off .header::before { display: none !important; }\n            body.fx-off .card { backdrop-filter: none !important; }\n            body.fx-off select, body.fx-off input, body.fx-off textarea { backdrop-filter: none !important; }\n\n            /* Status panel inside card */\n            #systemStatus {\n                background: var(--md-surface-2) !important;\n                border: 1px solid var(--md-outline) !important;\n                border-radius: var(--md-r-md) !important;\n                padding: 16px 18px !important;\n                margin: 12px 0 0 !important;\n                box-shadow: none !important;\n                position: relative;\n            }\n            #systemStatus > div {\n                color: var(--md-text) !important;\n                font-family: inherit !important;\n                margin: 6px 0 !important;\n                font-size: 0.85rem !important;\n                letter-spacing: 0;\n            }\n            #systemStatus > div:first-child {\n                color: var(--md-primary) !important;\n                font-weight: 700 !important;\n                letter-spacing: 0 !important;\n                margin-bottom: 12px !important;\n                text-transform: none;\n            }\n\n            /* Force inputs / selects — Material outlined fields */\n            input[type=\"text\"], input[type=\"number\"], input[type=\"password\"],\n            select, textarea {\n                background: var(--md-surface-2) !important;\n                border: 1.5px solid var(--md-outline) !important;\n                border-radius: var(--md-r-sm) !important;\n                color: var(--md-text) !important;\n                font-family: inherit !important;\n                font-size: 13.5px !important;\n                padding: 12px 14px !important;\n                outline: none;\n                transition: border-color 0.2s, box-shadow 0.2s;\n                box-shadow: none !important;\n                letter-spacing: 0;\n            }\n            input::placeholder { color: var(--md-text-dim) !important; opacity: 0.7; }\n            input:focus, select:focus, textarea:focus {\n                border-color: var(--md-primary) !important;\n                box-shadow: 0 0 0 3px rgba(200,241,53,0.18) !important;\n            }\n            select option { background: var(--md-surface-2); color: var(--md-text); }\n            input[type=\"checkbox\"], input[type=\"radio\"] {\n                accent-color: var(--md-primary);\n                width: 18px; height: 18px;\n            }\n\n            label {\n                color: var(--md-text) !important;\n                letter-spacing: 0;\n            }\n            label[style*=\"font-weight\"], label[style*=\"bold\"] {\n                font-weight: 700 !important;\n                color: var(--md-text) !important;\n                letter-spacing: 0 !important;\n                text-transform: none;\n                font-size: 0.85rem !important;\n            }\n            small {\n                color: var(--md-text-dim) !important;\n                font-size: 0.78rem !important;\n                letter-spacing: 0;\n                line-height: 1.5;\n            }\n\n            /* Buttons — Material filled/tonal pill buttons */\n            button, input[type=\"submit\"] {\n                background: var(--md-surface-3) !important;\n                border: 1px solid var(--md-outline) !important;\n                border-radius: 20px !important;\n                color: var(--md-text) !important;\n                font-family: inherit !important;\n                font-weight: 500 !important;\n                cursor: pointer;\n                padding: 10px 20px !important;\n                letter-spacing: 0 !important;\n                text-transform: none;\n                font-size: 0.82rem !important;\n                transition: all 0.2s ease;\n                box-shadow: none;\n            }\n            button:hover, input[type=\"submit\"]:hover {\n                color: var(--md-on-primary) !important;\n                border-color: var(--md-primary) !important;\n                background: var(--md-primary) !important;\n                box-shadow: var(--md-elev-1) !important;\n                transform: translateY(-1px);\n            }\n            button[id*=\"Reset\"], button[onclick*=\"reset\"], button[style*=\"ff0000\"] {\n                color: var(--md-error) !important;\n                border-color: var(--md-error) !important;\n                background: var(--md-surface-3) !important;\n            }\n            button[id*=\"Reset\"]:hover, button[onclick*=\"reset\"]:hover, button[style*=\"ff0000\"]:hover {\n                background: var(--md-error) !important;\n                color: var(--md-on-primary) !important;\n                box-shadow: var(--md-elev-1) !important;\n            }\n            button[id=\"stopLatencyTest\"] {\n                color: var(--md-error) !important;\n                border-color: var(--md-error) !important;\n            }\n\n            /* Form sub-cards */\n            .card form > div[style*=\"background: rgba(15, 3, 40\"],\n            .card form > div[style*=\"background: rgba(20, 5, 50\"],\n            div[style*=\"background: rgba(15, 3, 40\"],\n            div[style*=\"background: rgba(20, 5, 50\"] {\n                background: var(--md-bg-2) !important;\n                border: 1px solid var(--md-outline) !important;\n                box-shadow: none !important;\n                border-radius: var(--md-r-md) !important;\n            }\n\n            /* kvStatus / statusMessage / currentConfig / pathTypeInfo */\n            #kvStatus, #statusMessage, #currentConfig, #pathTypeInfo {\n                background: var(--md-surface-2) !important;\n                border: 1px solid var(--md-outline) !important;\n                border-radius: var(--md-r-md) !important;\n                color: var(--md-text) !important;\n                font-family: inherit !important;\n                box-shadow: none !important;\n                padding: 12px 16px !important;\n                font-size: 0.85rem !important;\n                letter-spacing: 0;\n            }\n            #pathTypeInfo div:first-child {\n                color: var(--md-primary) !important;\n                letter-spacing: 0 !important;\n            }\n\n            /* Latency Result list */\n            #latencyResultsList {\n                background: var(--md-surface-2) !important;\n                border: 1px solid var(--md-outline) !important;\n                border-radius: var(--md-r-md) !important;\n            }\n            #latencyResultsList > div {\n                border-bottom: 1px solid var(--md-outline) !important;\n            }\n            #cityFilterContainer {\n                background: var(--md-surface-2) !important;\n                border: 1px solid var(--md-outline) !important;\n                border-radius: var(--md-r-md) !important;\n            }\n\n            /* Related links area */\n            .card a {\n                color: var(--md-primary) !important;\n                text-decoration: none;\n                letter-spacing: 0;\n                text-transform: none;\n                font-size: 0.9rem;\n                padding: 4px 0;\n                border-bottom: 1px solid transparent;\n                transition: all 0.2s;\n            }\n            .card a:hover {\n                border-bottom-color: var(--md-primary);\n            }\n\n            /* Scrollbars */\n            ::-webkit-scrollbar { width: 8px; height: 8px; }\n            ::-webkit-scrollbar-track { background: transparent; }\n            ::-webkit-scrollbar-thumb {\n                background: var(--md-outline-strong);\n                border-radius: 4px;\n            }\n\n            .cp-glitch { position: relative; display: inline-block; }\n\n            /* Floating action dock - bottom-right anchored FAB cluster */\n            .cp-action-bar {\n                position: fixed;\n                right: 20px;\n                bottom: 20px;\n                z-index: 99999;\n                isolation: isolate;\n                display: flex;\n                flex-direction: row-reverse;\n                align-items: center;\n                gap: 10px;\n                padding: 0;\n                background: transparent;\n                border: 0;\n                box-shadow: none;\n                max-width: calc(100vw - 32px);\n                pointer-events: auto;\n            }\n            /* Primary SAVE FAB — Material extended FAB */\n            .cp-fab-save {\n                position: relative;\n                min-width: 170px;\n                padding: 16px 24px !important;\n                font-size: 0.88rem !important;\n                font-weight: 700 !important;\n                letter-spacing: 0 !important;\n                text-transform: none;\n                color: var(--md-on-primary) !important;\n                background: var(--md-primary) !important;\n                border: none !important;\n                border-radius: 28px !important;\n                box-shadow: var(--md-elev-3) !important;\n                cursor: pointer;\n                transition: transform 0.18s ease, box-shadow 0.25s ease;\n                display: inline-flex; align-items: center; gap: 10px;\n                white-space: nowrap;\n                font-family: inherit !important;\n                animation: none;\n            }\n            .cp-fab-save:hover {\n                transform: translateY(-2px);\n                box-shadow: var(--md-elev-3), 0 0 0 4px rgba(200,241,53,0.15) !important;\n                color: var(--md-on-primary) !important;\n            }\n            .cp-fab-save .cp-fab-icon {\n                font-size: 1.1em;\n                line-height: 1;\n                color: var(--md-on-primary);\n            }\n            .cp-fab-save .cp-fab-dot {\n                width: 8px; height: 8px; border-radius: 50%;\n                background: var(--md-on-primary);\n                transform: none;\n                margin-left: 2px;\n                opacity: 0.4;\n                transition: all 0.2s;\n            }\n            .cp-action-bar.cp-dirty .cp-fab-save {\n                animation: cp-fab-dirty-pulse 1.6s ease-in-out infinite;\n                color: var(--md-on-primary) !important;\n            }\n            .cp-action-bar.cp-dirty .cp-fab-save .cp-fab-dot { opacity: 1; }\n            @keyframes cp-fab-dirty-pulse {\n                0%, 100% { box-shadow: var(--md-elev-3); }\n                50%      { box-shadow: var(--md-elev-3), 0 0 0 6px rgba(200,241,53,0.22); }\n            }\n            /* Secondary mini buttons — Material tonal icon buttons */\n            .cp-action-btn {\n                background: var(--md-surface-3) !important;\n                border: 1px solid var(--md-outline) !important;\n                border-radius: 50% !important;\n                color: var(--md-text) !important;\n                font-family: inherit !important;\n                font-weight: 500 !important;\n                cursor: pointer;\n                width: 46px; height: 46px;\n                padding: 0 !important;\n                letter-spacing: 0 !important;\n                font-size: 1.05rem !important;\n                transition: all 0.2s ease;\n                box-shadow: var(--md-elev-1);\n                display: inline-flex; align-items: center; justify-content: center;\n                white-space: nowrap;\n                position: relative;\n            }\n            .cp-action-btn .cp-btn-label { display: none; }\n            .cp-action-btn::after {\n                content: attr(data-tip);\n                position: absolute;\n                bottom: 100%; right: 50%;\n                transform: translate(50%, -8px);\n                background: var(--md-surface-3);\n                color: var(--md-text);\n                font-size: 10.5px;\n                letter-spacing: 0;\n                text-transform: none;\n                padding: 5px 10px;\n                border: 1px solid var(--md-outline);\n                border-radius: 8px;\n                opacity: 0; pointer-events: none;\n                transition: opacity 0.2s;\n                white-space: nowrap;\n                box-shadow: var(--md-elev-1);\n            }\n            .cp-action-btn:hover::after { opacity: 1; }\n            .cp-action-btn:hover {\n                color: var(--md-on-primary) !important;\n                border-color: var(--md-primary) !important;\n                background: var(--md-primary) !important;\n                box-shadow: var(--md-elev-2) !important;\n                transform: translateY(-2px);\n            }\n            .cp-action-btn-danger {\n                color: var(--md-error) !important;\n                border-color: var(--md-error) !important;\n                box-shadow: var(--md-elev-1) !important;\n            }\n            .cp-action-btn-danger:hover {\n                background: var(--md-error) !important;\n                color: var(--md-on-primary) !important;\n                box-shadow: var(--md-elev-2) !important;\n            }\n            .cp-action-btn-saving,\n            .cp-fab-save.cp-action-btn-saving {\n                opacity: 0.7;\n                pointer-events: none;\n                animation: cp-pulse-soft 0.9s ease-in-out infinite !important;\n            }\n            @keyframes cp-pulse-soft {\n                0%, 100% { box-shadow: var(--md-elev-1); }\n                50%      { box-shadow: var(--md-elev-3); }\n            }\n            .container { padding-bottom: 120px; }\n            .cp-action-status {\n                position: fixed;\n                right: 20px;\n                bottom: 84px;\n                z-index: 99998;\n                padding: 10px 16px;\n                background: var(--md-surface-3);\n                border: 1px solid var(--md-outline);\n                border-radius: 20px;\n                color: var(--md-success);\n                font-size: 0.78rem;\n                letter-spacing: 0;\n                text-transform: none;\n                box-shadow: var(--md-elev-2);\n                opacity: 0;\n                transform: translateY(8px);\n                transition: opacity 0.25s, transform 0.25s;\n                pointer-events: none;\n                white-space: nowrap;\n                max-width: calc(100vw - 44px);\n                overflow: hidden; text-overflow: ellipsis;\n            }\n            .cp-action-status.cp-show { opacity: 1; transform: translateY(0); }\n            .cp-action-status.cp-err {\n                border-color: var(--md-error);\n                color: var(--md-error);\n                box-shadow: var(--md-elev-2);\n            }\n            /* Toast notification stack (top-right) — Material snackbars */\n            .cp-toast-stack {\n                position: fixed;\n                top: 84px;\n                right: 20px;\n                z-index: 100000;\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n                max-width: min(400px, calc(100vw - 32px));\n                pointer-events: none;\n            }\n            .cp-toast {\n                position: relative;\n                display: flex;\n                align-items: flex-start;\n                gap: 12px;\n                padding: 14px 16px;\n                background: var(--md-surface-3);\n                border: 1px solid var(--md-outline);\n                border-radius: var(--md-r-md);\n                color: var(--md-text);\n                font-size: 0.85rem;\n                line-height: 1.45;\n                letter-spacing: 0;\n                box-shadow: var(--md-elev-3);\n                transform: translateX(120%);\n                opacity: 0;\n                transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s;\n                pointer-events: auto;\n                overflow: hidden;\n                word-break: break-all;\n            }\n            .cp-toast.cp-show { transform: translateX(0); opacity: 1; }\n            .cp-toast.cp-hide { transform: translateX(120%); opacity: 0; }\n            .cp-toast::before {\n                content: \"\";\n                position: absolute;\n                left: 0; top: 0; bottom: 0;\n                width: 4px;\n                background: var(--md-text-dim);\n                border-radius: 4px 0 0 4px;\n            }\n            .cp-toast-icon {\n                font-size: 1.1rem;\n                line-height: 1;\n                margin-top: 1px;\n                flex-shrink: 0;\n                color: var(--md-text);\n            }\n            .cp-toast-body { flex: 1; min-width: 0; }\n            .cp-toast-title {\n                font-size: 0.7rem;\n                font-weight: 700;\n                letter-spacing: 0.04em;\n                text-transform: uppercase;\n                opacity: 0.7;\n                margin-bottom: 2px;\n            }\n            .cp-toast-msg { white-space: pre-wrap; }\n            .cp-toast-close {\n                position: absolute;\n                top: 8px; right: 10px;\n                background: transparent;\n                border: 0;\n                color: inherit;\n                font-size: 14px;\n                cursor: pointer;\n                opacity: 0.55;\n                padding: 2px 4px;\n                line-height: 1;\n                transition: opacity 0.2s;\n            }\n            .cp-toast-close:hover { opacity: 1; }\n            .cp-toast::after { content: none; }\n            .cp-toast.cp-toast-success { border-color: var(--md-success); color: var(--md-success); }\n            .cp-toast.cp-toast-success::before { background: var(--md-success); }\n            .cp-toast.cp-toast-success .cp-toast-icon { color: var(--md-success); }\n            .cp-toast.cp-toast-info { border-color: var(--md-primary); color: var(--md-primary); }\n            .cp-toast.cp-toast-info::before { background: var(--md-primary); }\n            .cp-toast.cp-toast-info .cp-toast-icon { color: var(--md-primary); }\n            .cp-toast.cp-toast-warn { border-color: var(--md-warning); color: var(--md-warning); }\n            .cp-toast.cp-toast-warn::before { background: var(--md-warning); }\n            .cp-toast.cp-toast-warn .cp-toast-icon { color: var(--md-warning); }\n            .cp-toast.cp-toast-error { border-color: var(--md-error); color: var(--md-error); }\n            .cp-toast.cp-toast-error::before { background: var(--md-error); }\n            .cp-toast.cp-toast-error .cp-toast-icon { color: var(--md-error); }\n\n            /* Tiny floating \"unsaved\" badge on the FAB */\n            .cp-action-bar.cp-dirty::before {\n                content: \"● UNSAVED\";\n                position: absolute;\n                top: -24px; right: 6px;\n                font-size: 9px;\n                letter-spacing: 0.15em;\n                color: var(--md-text-dim);\n                background: var(--md-surface-3);\n                padding: 3px 10px;\n                border-radius: 10px;\n                border: 1px solid var(--md-outline);\n                box-shadow: var(--md-elev-1);\n                animation: none;\n            }\n\n            @media (max-width: 720px) {\n                .container { padding: 20px 14px 140px; }\n                .card { padding: 20px 16px; border-radius: var(--md-r-md); }\n                .header { padding: 22px 18px; border-radius: var(--md-r-md); }\n                .title { font-size: 1.5rem; }\n                .cp-hud { font-size: 9px; }\n                .cp-action-bar {\n                    right: 50%;\n                    bottom: 14px;\n                    transform: translateX(50%);\n                    gap: 8px;\n                }\n                .cp-fab-save {\n                    min-width: 0;\n                    padding: 13px 18px !important;\n                    font-size: 0.8rem !important;\n                    letter-spacing: 0 !important;\n                }\n                .cp-action-btn { width: 42px; height: 42px; }\n                .cp-action-status { right: 50%; transform: translate(50%, 8px); }\n                .cp-action-status.cp-show { transform: translate(50%, 0); }\n            }\n        </style>\n    </head>\n    <body>\n        <div class=\"matrix-bg\"></div>\n        <div class=\"matrix-code-rain\" id=\"matrixCodeRain\"></div>\n            <header class=\"cp-bar\">\n                <div class=\"cp-brand\"><span class=\"cp-mk\"></span><span><b>NEXUS</b><small>" + String(_v900.terminal) + "</small></span></div>\n                <span class=\"cp-spacer\"></span>\n                <span class=\"cp-sig\"><span class=\"cp-sig-d\"></span><span>" + String(_v895 ? 'آنلاین' : 'ONLINE') + _d64("ATwvc3Bhbj48L3NwYW4+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjcC1zZWwiPjxzZWxlY3QgaWQ9Imxhbmd1YWdlU2VsZWN0b3IiIG9uY2hhbmdlPSLliIfmjaLor63oqIAodGhpcy52YWx1ZSkiPjxvcHRpb24gdmFsdWU9InpoIiA=") + String(!_v895 ? 'selected' : '') + _d64("AT7wn4eo8J+HsyDkuK3mloc8L29wdGlvbj48b3B0aW9uIHZhbHVlPSJmYSIg") + String(_v895 ? 'selected' : '') + _d64("AT7wn4eu8J+HtyDZgdin2LHYs9uMPC9vcHRpb24+PC9zZWxlY3Q+PC9kaXY+CiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgaWQ9ImNwRnhUb2dnbGUiIGNsYXNzPSJjcC1pYiIgb25jbGljaz0id2luZG93LuWIh+aNoumhtemdoueJueaViCgpIiB0aXRsZT0i") + String(_v895 ? 'افکت' : 'FX') + "\" aria-label=\"FX\"><span id=\"cpFxLabel\">FX</span></button>\n            </header>\n            <div class=\"cp-prog\"><i></i></div>\n        <div class=\"container\">\n            <div class=\"header\">\n                    <h1 class=\"title cp-glitch\" data-text=\"" + String(_v900.title) + "\">" + String(_v900.title) + "</h1>\n                    <p class=\"subtitle\">" + String(_v900.subtitle) + "</p>\n            </div>\n            <div class=\"card\">\n                    <h2 class=\"card-title\">" + String(_v900.selectClient) + _d64("ATwvaDI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjbGllbnQtZ3JpZCI+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iY2xpZW50LWJ0biIgb25jbGljaz0i55Sf5oiQ5a6i5oi356uv6ZO+5o6lKCc=") + String(_v4('Y2xhc2g=')) + "', '" + String(_v4('Q0xBU0g=')) + "')\">" + String(_v4('Q0xBU0g=')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('Y2xhc2g=')) + "', '" + String(_v4('U1RBU0g=')) + "')\">" + String(_v4('U1RBU0g=')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('c3VyZ2U=')) + "', '" + String(_v4('U1VSR0U=')) + "')\">" + String(_v4('U1VSR0U=')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('c2luZ2JveA==')) + "', '" + String(_v4('U0lORy1CT1g=')) + "')\">" + String(_v4('U0lORy1CT1g=')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('bG9vbg==')) + "', '" + String(_v4('TE9PTg==')) + "')\">" + String(_v4('TE9PTg==')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('cXVhbng=')) + "', '" + String(_v4('UVVBTlRVTVVMVCBY')) + "')\">" + String(_v4('UVVBTlRVTVVMVCBY')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('djJyYXk=')) + "', '" + String(_v4('VjJSQVk=')) + "')\">" + String(_v4('VjJSQVk=')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('djJyYXk=')) + "', '" + String(_v4('VjJSQVlORw==')) + "')\">" + String(_v4('VjJSQVlORw==')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('djJyYXk=')) + "', '" + String(_v4('TkVLT1JBWQ==')) + "')\">" + String(_v4('TkVLT1JBWQ==')) + _d64("ATwvYnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNsaWVudC1idG4iIG9uY2xpY2s9IueUn+aIkOWuouaIt+err+mTvuaOpSgn") + String(_v4('djJyYXk=')) + "', '" + String(_v4('U2hhZG93cm9ja2V0')) + "')\">" + String(_v4('U2hhZG93cm9ja2V0')) + "</button>\n                </div>\n                <div class=\"subscription-url\" id=\"clientSubscriptionUrl\"></div>\n            </div>\n            <div class=\"card\">\n                    <h2 class=\"card-title\">" + String(_v900.systemStatus) + "</h2>\n                <div id=\"systemStatus\" style=\"margin: 20px 0; padding: 15px; background: rgba(8,10,14,0.8); border: 2px solid #c8f135; box-shadow: 0 0 20px rgba(200,241,53,0.3), inset 0 0 15px rgba(200,241,53,0.1); position: relative; overflow: hidden;\">\n                        <div style=\"color: #c8f135; margin-bottom: 15px; font-weight: bold; \">[ " + String(_v900.checking) + " ]</div>\n                        <div id=\"regionStatus\" style=\"margin: 8px 0; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; \">" + String(_v900.workerRegion) + String(_v900.checking) + "</div>\n                        <div id=\"geoInfo\" style=\"margin: 8px 0; color: #9aa6b8; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 0.9rem; \">" + String(_v900.detectionMethod) + String(_v900.checking) + "</div>\n                        <div id=\"backupStatus\" style=\"margin: 8px 0; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; \">" + String(_v900.pipStatus) + String(_v900.checking) + "</div>\n                        <div id=\"currentIP\" style=\"margin: 8px 0; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; \">" + String(_v900.currentIP) + String(_v900.checking) + _d64("ATwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJlY2hTdGF0dXMiIHN0eWxlPSJtYXJnaW46IDhweCAwOyBjb2xvcjogI2M4ZjEzNTsgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgJ1ZhemlybWF0bicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgc2Fucy1zZXJpZjsgIGZvbnQtc2l6ZTogMC45cmVtOyI+RUNI54q25oCBOiA=") + String(_v900.checking) + "</div>\n                        <div id=\"regionMatch\" style=\"margin: 8px 0; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; \">" + String(_v900.regionMatch) + String(_v900.checking) + "</div>\n                        <div id=\"selectionLogic\" style=\"margin: 8px 0; color: #9aa6b8; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 0.9rem; \">" + String(_v900.selectionLogic) + String(_v900.selectionLogicText) + "</div>\n                </div>\n            </div>\n            <div class=\"card\" id=\"configCard\" style=\"display: none;\">\n                    <h2 class=\"card-title\">" + String(_v900.configManagement) + "</h2>\n                <div id=\"kvStatus\" style=\"margin-bottom: 20px; padding: 10px; background: rgba(8,10,14,0.8); border: 1px solid #c8f135; color: #c8f135;\">\n                    " + String(_v900.kvStatusChecking) + "\n                </div>\n                <div id=\"configContent\" style=\"display: none;\">\n                    <form id=\"regionForm\" style=\"margin-bottom: 20px;\">\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.specifyRegion) + "</label>\n                            <select id=\"wkRegion\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                    <option value=\"\">" + String(_v900.autoDetect) + "</option>\n                                    <option value=\"HK\">" + String(_v900.regionNames.HK) + "</option>\n                                    <option value=\"US\">" + String(_v900.regionNames.US) + "</option>\n                                    <option value=\"SG\">" + String(_v900.regionNames.SG) + "</option>\n                                    <option value=\"JP\">" + String(_v900.regionNames.JP) + "</option>\n                                    <option value=\"KR\">" + String(_v900.regionNames.KR) + "</option>\n                                    <option value=\"DE\">" + String(_v900.regionNames.DE) + "</option>\n                                    <option value=\"SE\">" + String(_v900.regionNames.SE) + "</option>\n                                    <option value=\"NL\">" + String(_v900.regionNames.NL) + "</option>\n                                    <option value=\"FI\">" + String(_v900.regionNames.FI) + "</option>\n                                    <option value=\"GB\">" + String(_v900.regionNames.GB) + "</option>\n                            </select>\n                                <small id=\"wkRegionHint\" style=\"color: #9aa6b8; font-size: 0.85rem; display: none;\">⚠️ " + String(_v900.customIPDisabledHint) + "</small>\n                        </div>\n                    </form>\n                    <form id=\"otherConfigForm\" style=\"margin-bottom: 20px;\">\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.protocolSelection) + "</label>\n                            <div style=\"padding: 15px; background: rgba(11,14,20,0.6); border: 1px solid #c8f135; border-radius: 5px;\">\n                                <div style=\"margin-bottom: 10px;\">\n                                    <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                        <input type=\"checkbox\" id=\"ev\" checked style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                            <span style=\"font-size: 1.1rem;\">" + String(_v900.evLabel) + "</span>\n                                    </label>\n                                </div>\n                                <div style=\"margin-bottom: 10px;\">\n                                    <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                        <input type=\"checkbox\" id=\"et\" style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                            <span style=\"font-size: 1.1rem;\">" + String(_v900.etLabel) + "</span>\n                                    </label>\n                                </div>\n                                <div style=\"margin-bottom: 10px;\">\n                                    <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                        <input type=\"checkbox\" id=\"ex\" style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                            <span style=\"font-size: 1.1rem;\">" + String(_v900.enableXhttp) + "</span>\n                                    </label>\n                                </div>\n                                <div style=\"margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(200,241,53,0.3);\">\n                                    <div style=\"margin-bottom: 10px;\">\n                                        <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                            <input type=\"checkbox\" id=\"ech\" style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                                <span style=\"font-size: 1.1rem;\">" + String(_v900.enableECH) + "</span>\n                                        </label>\n                                        <small style=\"color: #9aa6b8; font-size: 0.8rem; display: block; margin-top: 5px; margin-left: 26px;\">" + String(_v900.enableECHHint) + "</small>\n                                    </div>\n                                    <div style=\"margin-top: 15px; margin-bottom: 10px;\">\n                                        <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-size: 0.95rem;\">" + String(_v900.customDNS) + "</label>\n                                        <input type=\"text\" id=\"customDNS\" placeholder=\"" + String(_v900.customDNSPlaceholder) + "\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                        <small style=\"color: #9aa6b8; font-size: 0.8rem; display: block; margin-top: 5px;\">" + String(_v900.customDNSHint) + "</small>\n                                    </div>\n                                    <div style=\"margin-bottom: 10px;\">\n                                        <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-size: 0.95rem;\">" + String(_v900.customECHDomain) + "</label>\n                                        <input type=\"text\" id=\"customECHDomain\" placeholder=\"" + String(_v900.customECHDomainPlaceholder) + "\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                        <small style=\"color: #9aa6b8; font-size: 0.8rem; display: block; margin-top: 5px;\">" + String(_v900.customECHDomainHint) + "</small>\n                                    </div>\n                                    <div style=\"margin-bottom: 10px;\">\n                                        <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-size: 0.95rem;\">" + String(_v900.alpn) + "</label>\n                                        <select id=\"alpn\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                            <option value=\"\">" + String(_v900.alpnDefault) + "</option>\n                                            <option value=\"h3\">h3</option>\n                                            <option value=\"h2\">h2</option>\n                                            <option value=\"http/1.1\">http/1.1</option>\n                                            <option value=\"h3,h2\">h3,h2</option>\n                                            <option value=\"h2,http/1.1\">h2,http/1.1</option>\n                                            <option value=\"h3,h2,http/1.1\">h3,h2,http/1.1</option>\n                                        </select>\n                                        <small style=\"color: #9aa6b8; font-size: 0.8rem; display: block; margin-top: 5px;\">" + String(_v900.alpnHint) + "</small>\n                                    </div>\n                                </div>\n                                <div style=\"margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(200,241,53,0.3);\">\n                                        <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-size: 0.95rem;\">" + String(_v900.tpLabel) + "</label>\n                                        <input type=\"text\" id=\"tp\" placeholder=\"" + String(_v900.tpPlaceholder) + "\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                        <small style=\"color: #9aa6b8; font-size: 0.8rem; display: block; margin-top: 5px;\">" + String(_v900.tpHint) + "</small>\n                                </div>\n                                    <small style=\"color: #9aa6b8; font-size: 0.85rem; display: block; margin-top: 10px;\">" + String(_v900.protocolHint) + "</small>\n                            </div>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.customHomepage) + "</label>\n                                <input type=\"text\" id=\"customHomepage\" placeholder=\"" + String(_v900.customHomepagePlaceholder) + "\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v900.customHomepageHint) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.customPath) + "</label>\n                                <input type=\"text\" id=\"customPath\" placeholder=\"" + String(_v895 ? 'مثال: /mypath یا خالی بگذارید تا از UUID استفاده شود' : _d64("AeS+i+WmgjogL215cGF0aCDmiJbnlZnnqbrkvb/nlKggVVVJRA==")) + "\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v895 ? _v4('2YXYs9uM2LEg2KfYtNiq2LHYp9qpINiz2YHYp9ix2LTbjC4g2Kfar9ixINiu2KfZhNuMINio2q/YsNin2LHbjNivINin2LIgVVVJRCDYqNmHINi52YbZiNin2YYg2YXYs9uM2LEg2KfYs9iq2YHYp9iv2Ycg2YXbjOKAjNi02YjYry4=') : _v4('6Ieq5a6a5LmJ6K6i6ZiF6Lev5b6E44CC55WZ56m65YiZ5L2/55SoIFVVSUQg5L2c5Li66Lev5b6E44CC')) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.customIP) + "</label>\n                                <input type=\"text\" id=\"customIP\" placeholder=\"" + String(_v895 ? 'مثال: 1.2.3.4:443' : _d64("AeS+i+WmgjogMS4yLjMuNDo0NDM=")) + "\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v895 ? _v4('2KLYr9ix2LMg2Ygg2b7ZiNix2KogUHJveHlJUCDYs9mB2KfYsdi024w=') : _v4('6Ieq5a6a5LmJUHJveHlJUOWcsOWdgOWSjOerr+WPow==')) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.preferredIPs) + "</label>\n                                <input type=\"text\" id=\"yx\" placeholder=\"" + String(_v895 ? 'مثال: 1.2.3.4:443#گره هنگ‌کنگ,5.6.7.8:80#گره آمریکا,example.com:8443#گره سنگاپور' : _d64("AeS+i+WmgjogMS4yLjMuNDo0NDMj5pel5pys6IqC54K5LDUuNi43Ljg6ODAj576O5Zu96IqC54K5LGV4YW1wbGUuY29tOjg0NDMj5paw5Yqg5Z2h6IqC54K5")) + "\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v895 ? 'فرمت: IP:پورت#نام گره یا IP:پورت (بدون # از نام پیش‌فرض استفاده می‌شود). پشتیبانی از چندین مورد، با کاما جدا می‌شوند. <span style="color: #ffb454;">IP های اضافه شده از طریق API به طور خودکار در اینجا نمایش داده می‌شوند.</span>' : _d64("AeagvOW8jzogSVA656uv5Y+jI+iKgueCueWQjeensCDmiJYgSVA656uv5Y+jICjml6Aj5YiZ5L2/55So6buY6K6k5ZCN56ewKeOAguaUr+aMgeWkmuS4qu+8jOeUqOmAl+WPt+WIhumalOOAgjxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmYjQ1NDsiPkFQSea3u+WKoOeahElQ5Lya6Ieq5Yqo5pi+56S65Zyo6L+Z6YeM44CCPC9zcGFuPg==")) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.preferredIPsURL) + "</label>\n                                <input type=\"text\" id=\"yxURL\" placeholder=\"" + String(_v895 ? 'URL منبع لیست IP ترجیحی را وارد کنید' : _d64("Aei+k+WFpeS8mOmAiUlQ5YiX6KGo5p2l5rqQVVJM")) + "\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v895 ? 'URL منبع لیست IP ترجیحی سفارشی، اگر خالی بگذارید از آدرس پیش‌فرض استفاده می‌شود' : _d64("AeiHquWumuS5ieS8mOmAiUlQ5YiX6KGo5p2l5rqQVVJM77yM55WZ56m65YiZ5L2/55So6buY6K6k5Zyw5Z2A")) + "</small>\n                        </div>\n                        \n                        <div style=\"margin-bottom: 20px; padding: 15px; background: rgba(11,14,20,0.6); border: 2px solid #9aa6b8; border-radius: 8px;\">\n                            <h4 style=\"color: #c8f135; margin: 0 0 15px 0; font-size: 1.1rem; \">⚡ " + String(_v900.latencyTest) + "</h4>\n                            <div style=\"display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; align-items: center;\">\n                                <div style=\"min-width: 120px;\">\n                                    <label style=\"display: block; margin-bottom: 5px; color: #c8f135; font-size: 0.9rem;\">" + String(_v900.ipSource) + "</label>\n                                    <select id=\"ipSourceSelect\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px; cursor: pointer;\">\n                                        <option value=\"manual\">" + String(_v900.manualInput) + "</option>\n                                        <option value=\"cfRandom\">" + String(_v900.cfRandomIP) + "</option>\n                                        <option value=\"urlFetch\">" + String(_v900.urlFetch) + "</option>\n                                    </select>\n                                </div>\n                                <div style=\"width: 100px;\">\n                                    <label style=\"display: block; margin-bottom: 5px; color: #c8f135; font-size: 0.9rem;\">" + String(_v900.latencyTestPort) + "</label>\n                                    <input type=\"number\" id=\"latencyTestPort\" value=\"443\" min=\"1\" max=\"65535\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                </div>\n                                <div id=\"randomCountDiv\" style=\"width: 100px; display: none;\">\n                                    <label style=\"display: block; margin-bottom: 5px; color: #c8f135; font-size: 0.9rem;\">" + String(_v900.randomCount) + "</label>\n                                    <input type=\"number\" id=\"randomIPCount\" value=\"20\" min=\"1\" max=\"100\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                </div>\n                                <div style=\"width: 80px;\">\n                                    <label style=\"display: block; margin-bottom: 5px; color: #c8f135; font-size: 0.9rem;\">" + String(_v895 ? 'رشته‌ها' : _d64("Aee6v+eoiw==")) + "</label>\n                                    <input type=\"number\" id=\"testThreads\" value=\"5\" min=\"1\" max=\"50\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                </div>\n                            </div>\n                            <div id=\"manualInputDiv\" style=\"margin-bottom: 10px;\">\n                                <label style=\"display: block; margin-bottom: 5px; color: #c8f135; font-size: 0.9rem;\">" + String(_v900.latencyTestIP) + "</label>\n                                <input type=\"text\" id=\"latencyTestInput\" placeholder=\"" + String(_v900.latencyTestIPPlaceholder) + "\" style=\"width: 100%; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                            </div>\n                            <div id=\"urlFetchDiv\" style=\"margin-bottom: 10px; display: none;\">\n                                <label style=\"display: block; margin-bottom: 5px; color: #c8f135; font-size: 0.9rem;\">" + String(_v900.fetchURL) + "</label>\n                                <div style=\"display: flex; gap: 8px;\">\n                                    <input type=\"text\" id=\"fetchURLInput\" placeholder=\"" + String(_v900.fetchURLPlaceholder) + "\" style=\"flex: 1; padding: 10px; background: rgba(0, 0, 0, 0.8); border: 1px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 13px;\">\n                                    <button type=\"button\" id=\"fetchIPBtn\" style=\"background: rgba(200,241,53,0.2); border: 1px solid #5b8cff; padding: 8px 16px; color: #5b8cff; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; white-space: nowrap;\">⬇ " + String(_v900.fetchIP) + "</button>\n                                </div>\n                            </div>\n                            <div id=\"cfRandomDiv\" style=\"margin-bottom: 10px; display: none;\">\n                                <button type=\"button\" id=\"generateCFIPBtn\" style=\"background: rgba(200,241,53,0.15); border: 1px solid #c8f135; padding: 10px 20px; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; width: 100%; transition: all 0.3s;\">🎲 " + String(_v900.generateIP) + "</button>\n                            </div>\n                            <div style=\"display: flex; gap: 10px; margin-bottom: 15px;\">\n                                <button type=\"button\" id=\"startLatencyTest\" style=\"background: rgba(200,241,53,0.2); border: 1px solid #c8f135; padding: 8px 16px; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; transition: all 0.3s;\">▶ " + String(_v900.startTest) + "</button>\n                                <button type=\"button\" id=\"stopLatencyTest\" style=\"background: rgba(255,93,115,0.2); border: 1px solid #ff5d73; padding: 8px 16px; color: #ff5d73; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; cursor: pointer; display: none; transition: all 0.3s;\">⏹ " + String(_v900.stopTest) + "</button>\n                            </div>\n                            <div id=\"latencyTestStatus\" style=\"color: #9aa6b8; font-size: 0.9rem; margin-bottom: 10px; display: none;\"></div>\n                            <div id=\"latencyTestResults\" style=\"max-height: 250px; overflow-y: auto; display: none;\">\n                                <div style=\"display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;\">\n                                    <span style=\"color: #c8f135; font-weight: bold;\">" + String(_v900.testResult) + "</span>\n                                    <div style=\"display: flex; gap: 8px;\">\n                                        <button type=\"button\" id=\"selectAllResults\" style=\"background: transparent; border: 1px solid #9aa6b8; padding: 4px 10px; color: #9aa6b8; font-size: 0.8rem; cursor: pointer;\">" + String(_v900.selectAll) + "</button>\n                                        <button type=\"button\" id=\"deselectAllResults\" style=\"background: transparent; border: 1px solid #9aa6b8; padding: 4px 10px; color: #9aa6b8; font-size: 0.8rem; cursor: pointer;\">" + String(_v900.deselectAll) + "</button>\n                                    </div>\n                                </div>\n                                <div id=\"cityFilterContainer\" style=\"margin-bottom: 10px; padding: 10px; background: rgba(11,14,20,0.6); border: 1px solid #9aa6b8; border-radius: 4px; display: none;\">\n                                    <div style=\"margin-bottom: 8px;\">\n                                        <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135; font-size: 0.9rem;\">\n                                            <input type=\"radio\" name=\"cityFilterMode\" value=\"all\" checked style=\"margin-right: 6px; width: 16px; height: 16px; cursor: pointer;\">\n                                            <span>" + String(_v895 ? _d64("AeWFqOmDqOWfjuW4gg==") : _d64("AeWFqOmDqOWfjuW4gg==")) + "</span>\n                                        </label>\n                                        <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135; font-size: 0.9rem; margin-left: 15px;\">\n                                            <input type=\"radio\" name=\"cityFilterMode\" value=\"fastest10\" style=\"margin-right: 6px; width: 16px; height: 16px; cursor: pointer;\">\n                                            <span>" + String(_v895 ? _d64("AeWPqumAieaLqeacgOW/q+eahDEw5Liq") : _d64("AeWPqumAieaLqeacgOW/q+eahDEw5Liq")) + "</span>\n                                        </label>\n                                    </div>\n                                    <div id=\"cityCheckboxesContainer\" style=\"display: flex; flex-wrap: wrap; gap: 8px; max-height: 80px; overflow-y: auto; padding: 5px;\"></div>\n                                </div>\n                                <div id=\"latencyResultsList\" style=\"background: rgba(0, 0, 0, 0.5); border: 1px solid #0b1a08; border-radius: 4px; padding: 10px;\"></div>\n                                <div style=\"margin-top: 10px; display: flex; gap: 10px;\">\n                                    <button type=\"button\" id=\"overwriteSelectedToYx\" style=\"flex: 1; background: rgba(61,220,132,0.3); border: 1px solid #c8f135; padding: 10px 20px; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-weight: bold; cursor: pointer; transition: all 0.3s;\">" + String(_v895 ? _d64("Aeimhueblua3u+WKoA==") : _d64("Aeimhueblua3u+WKoA==")) + "</button>\n                                    <button type=\"button\" id=\"appendSelectedToYx\" style=\"flex: 1; background: rgba(61,220,132,0.18); border: 1px solid #9aa6b8; padding: 10px 20px; color: #9aa6b8; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-weight: bold; cursor: pointer; transition: all 0.3s;\">" + String(_v895 ? _d64("Aei/veWKoOa3u+WKoA==") : _d64("Aei/veWKoOa3u+WKoA==")) + "</button>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.s5Label) + "</label>\n                                <input type=\"text\" id=\"socksConfig\" placeholder=\"" + String(_v895 ? 'مثال: user:pass@host:port یا host:port' : _d64("AeS+i+WmgjogdXNlcjpwYXNzQGhvc3Q6cG9ydCDmiJYgaG9zdDpwb3J0")) + "\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v895 ? _v4('2KLYr9ix2LMg2b7YsdmI2qnYs9uMIFNPQ0tTNdiMINio2LHYp9uMINin2YbYqtmC2KfZhCDYqtmF2KfZhSDYqtix2KfZgduM2qkg2K7YsdmI2KzbjCDYp9iz2KrZgdin2K/ZhyDZhduM4oCM2LTZiNiv') : _v4('U09DS1M15Luj55CG5Zyw5Z2A77yM55So5LqO6L2s5Y+R5omA5pyJ5Ye656uZ5rWB6YeP')) + "</small>\n                        </div>\n                    </form>\n\n                    <h3 style=\"color: #c8f135; margin: 20px 0 15px 0; font-size: 1.2rem;\">" + String(_v900.advancedControl) + "</h3>\n                    <form id=\"advancedConfigForm\" style=\"margin-bottom: 20px;\">\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.subscriptionConverter) + "</label>\n                                <input type=\"text\" id=\"scu\" placeholder=\"" + String(_v900.subscriptionConverterPlaceholder) + "\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v900.subscriptionConverterHint) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.builtinPreferred) + "</label>\n                            <div style=\"padding: 15px; background: rgba(11,14,20,0.6); border: 1px solid #c8f135; border-radius: 5px;\">\n                                <div style=\"margin-bottom: 10px;\">\n                                    <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                        <input type=\"checkbox\" id=\"ena\" style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                            <span style=\"font-size: 1.1rem;\">" + String(_v900.enableNativeAddress) + "</span>\n                                    </label>\n                                </div>\n                                <div style=\"margin-bottom: 10px;\">\n                                    <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                        <input type=\"checkbox\" id=\"epd\" checked style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                            <span style=\"font-size: 1.1rem;\">" + String(_v900.enablePreferredDomain) + "</span>\n                                    </label>\n                                </div>\n                                <div style=\"margin-bottom: 10px;\">\n                                    <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                        <input type=\"checkbox\" id=\"epi\" checked style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                            <span style=\"font-size: 1.1rem;\">" + String(_v900.enablePreferredIP) + "</span>\n                                    </label>\n                                </div>\n                                <div style=\"margin-bottom: 10px;\">\n                                    <label style=\"display: inline-flex; align-items: center; cursor: pointer; color: #c8f135;\">\n                                        <input type=\"checkbox\" id=\"egi\" checked style=\"margin-right: 8px; width: 18px; height: 18px; cursor: pointer;\">\n                                            <span style=\"font-size: 1.1rem;\">" + String(_v900.enableGitHubPreferred) + "</span>\n                                    </label>\n                                </div>\n                                    <small style=\"color: #9aa6b8; font-size: 0.85rem; display: block; margin-top: 10px;\">" + String(_v900.builtinPreferredHint) + _d64("ATwvc21hbGw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9Im1hcmdpbi1ib3R0b206IDE1cHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA4cHg7IGNvbG9yOiAjYzhmMTM1OyBmb250LXdlaWdodDogYm9sZDsgIj7kvJjpgIlJUOetm+mAieiuvue9rjwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJwYWRkaW5nOiAxNXB4OyBiYWNrZ3JvdW5kOiByZ2JhKDExLDE0LDIwLDAuNik7IGJvcmRlcjogMXB4IHNvbGlkICNjOGYxMzU7IGJvcmRlci1yYWRpdXM6IDVweDsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9Im1hcmdpbi1ib3R0b206IDE1cHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPSJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogOHB4OyBjb2xvcjogI2M4ZjEzNTsgZm9udC13ZWlnaHQ6IGJvbGQ7ICI+SVDniYjmnKzpgInmi6k8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBnYXA6IDIwcHg7IGZsZXgtd3JhcDogd3JhcDsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogI2M4ZjEzNTsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImlwdjRFbmFibGVkIiBjaGVja2VkIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDhweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY3Vyc29yOiBwb2ludGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTogMXJlbTsiPklQdjQ8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogI2M4ZjEzNTsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImlwdjZFbmFibGVkIiBjaGVja2VkIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDhweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY3Vyc29yOiBwb2ludGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTogMXJlbTsiPklQdjY8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tYm90dG9tOiAxMHB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT0iZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDhweDsgY29sb3I6ICNjOGYxMzU7IGZvbnQtd2VpZ2h0OiBib2xkOyAiPui/kOiQpeWVhumAieaLqTwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGdhcDogMjBweDsgZmxleC13cmFwOiB3cmFwOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjYzhmMTM1OyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iaXNwTW9iaWxlIiBjaGVja2VkIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDhweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY3Vyc29yOiBwb2ludGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTogMXJlbTsiPuenu+WKqDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjYzhmMTM1OyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iaXNwVW5pY29tIiBjaGVja2VkIHN0eWxlPSJtYXJnaW4tcmlnaHQ6IDhweDsgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY3Vyc29yOiBwb2ludGVyOyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZTogMXJlbTsiPuiBlOmAmjwvc3Bhbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjYzhmMTM1OyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iaXNwVGVsZWNvbSIgY2hlY2tlZCBzdHlsZT0ibWFyZ2luLXJpZ2h0OiA4cHg7IHdpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IGN1cnNvcjogcG9pbnRlcjsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPSJmb250LXNpemU6IDFyZW07Ij7nlLXkv6E8L3NwYW4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPSJjb2xvcjogIzlhYTZiODsgZm9udC1zaXplOiAwLjg1cmVtOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogMTBweDsiPumAieaLqeimgeS9v+eUqOeahElQ54mI5pys5ZKM6L+Q6JCl5ZWG77yM5pyq6YCJ5Lit55qE5bCG6KKr6L+H5rukPC9zbWFsbD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMTVweDsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT0iZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDhweDsgY29sb3I6ICNjOGYxMzU7IGZvbnQtd2VpZ2h0OiBib2xkOyAiPg==") + String(_v900.allowAPIManagement) + "</label>\n                            <select id=\"apiEnabled\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                    <option value=\"\">" + String(_v900.apiEnabledDefault) + "</option>\n                                    <option value=\"yes\">" + String(_v900.apiEnabledYes) + "</option>\n                            </select>\n                                <small style=\"color: #ffb454; font-size: 0.85rem;\">" + String(_v900.apiEnabledHint) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.regionMatching) + "</label>\n                            <select id=\"regionMatching\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                    <option value=\"\">" + String(_v900.regionMatchingDefault) + "</option>\n                                    <option value=\"no\">" + String(_v900.regionMatchingNo) + "</option>\n                            </select>\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v900.regionMatchingHint) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.downgradeControl) + "</label>\n                            <select id=\"downgradeControl\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                    <option value=\"\">" + String(_v900.downgradeControlDefault) + "</option>\n                                    <option value=\"no\">" + String(_v900.downgradeControlNo) + "</option>\n                            </select>\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v900.downgradeControlHint) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.tlsControl) + "</label>\n                            <select id=\"portControl\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                    <option value=\"\">" + String(_v900.tlsControlDefault) + "</option>\n                                    <option value=\"yes\">" + String(_v900.tlsControlYes) + "</option>\n                            </select>\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v900.tlsControlHint) + "</small>\n                        </div>\n                        <div style=\"margin-bottom: 15px;\">\n                                <label style=\"display: block; margin-bottom: 8px; color: #c8f135; font-weight: bold; \">" + String(_v900.preferredControl) + "</label>\n                            <select id=\"preferredControl\" style=\"width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.8); border: 2px solid #c8f135; color: #c8f135; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-size: 14px;\">\n                                    <option value=\"\">" + String(_v900.preferredControlDefault) + "</option>\n                                    <option value=\"yes\">" + String(_v900.preferredControlYes) + "</option>\n                            </select>\n                                <small style=\"color: #9aa6b8; font-size: 0.85rem;\">" + String(_v900.preferredControlHint) + "</small>\n                        </div>\n                    </form>\n                    <div id=\"currentConfig\" style=\"background: rgba(0, 0, 0, 0.9); border: 1px solid #c8f135; padding: 15px; margin: 10px 0; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #c8f135;\">\n                            " + String(_v900.loading) + "\n                    </div>\n                    <div id=\"pathTypeInfo\" style=\"background: rgba(11,14,20,0.7); border: 1px solid #c8f135; padding: 15px; margin: 10px 0; font-family: 'Manrope', 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #c8f135;\">\n                            <div style=\"font-weight: bold; margin-bottom: 8px; color: #3ddc84; \">" + String(_v900.currentConfig) + "</div>\n                            <div id=\"pathTypeStatus\">" + String(_v900.checking) + "</div>\n                    </div>\n                </div>\n                <div id=\"statusMessage\" style=\"display: none; padding: 10px; margin: 10px 0; border: 1px solid #c8f135; background: rgba(8,10,14,0.8); color: #c8f135; \"></div>\n            </div>\n\n            <div class=\"card\">\n                <h2 class=\"card-title\">" + String(_v895 ? 'به‌روزرسانی پنل' : _d64("Aemdouadv+abtOaWsA==")) + "</h2>\n                <div style=\"margin-bottom:14px;color:#9aa6b8;font-size:0.85rem;\">\n                    " + String(_v895 ? 'نسخه فعلی: ' : _d64("AeW9k+WJjeeJiOacrDog")) + "<b style=\"color:#c8f135;\">" + String(_v43) + "</b>\n                    &nbsp;·&nbsp;<span id=\"updLatestLabel\">" + String(_v895 ? 'نسخه‌ی جدید هنوز بررسی نشده' : _d64("AeWwmuacquajgOafpeacgOaWsOeJiOacrA==")) + "</span>\n                </div>\n                <div style=\"display:grid;grid-template-columns:1fr;gap:10px;margin-bottom:14px;\">\n                    <input type=\"text\" id=\"updVerUrl\" placeholder=\"" + String(_v895 ? 'آدرس فایل VERSION (raw) برای بررسی نسخه جدید' : _d64("AVZFUlNJT04g5paH5Lu255qEIHJhdyDlnLDlnYA=")) + "\" style=\"width:100%;padding:10px;background:rgba(0,0,0,0.8);border:1px solid #c8f135;color:#c8f135;font-family:'JetBrains Mono',monospace;font-size:13px;\">\n                    <input type=\"text\" id=\"updSrcUrl\" placeholder=\"" + String(_v895 ? 'آدرس worker-source.js جدید (raw)' : _d64("AeacgOaWsCB3b3JrZXItc291cmNlLmpzIOeahCByYXcg5Zyw5Z2A")) + "\" style=\"width:100%;padding:10px;background:rgba(0,0,0,0.8);border:1px solid #c8f135;color:#c8f135;font-family:'JetBrains Mono',monospace;font-size:13px;\">\n                    <input type=\"password\" id=\"cfToken\" placeholder=\"" + String(_v895 ? 'توکن API کلادفلر (فقط Workers Scripts:Edit)' : _d64("AUNsb3VkZmxhcmUgQVBJIFRva2Vu77yI5LuF6ZyAIFdvcmtlcnMgU2NyaXB0czpFZGl077yJ")) + "\" style=\"width:100%;padding:10px;background:rgba(0,0,0,0.8);border:1px solid #c8f135;color:#c8f135;font-family:'JetBrains Mono',monospace;font-size:13px;\">\n                    <input type=\"text\" id=\"cfAccountId\" placeholder=\"" + String(_v895 ? 'شناسه اکانت کلادفلر (Account ID)' : 'Cloudflare Account ID') + "\" style=\"width:100%;padding:10px;background:rgba(0,0,0,0.8);border:1px solid #c8f135;color:#c8f135;font-family:'JetBrains Mono',monospace;font-size:13px;\">\n                    <input type=\"text\" id=\"cfScriptName\" placeholder=\"" + String(_v895 ? 'نام اسکریپت ورکر روی کلادفلر' : _d64("AVdvcmtlciDohJrmnKzlkI3np7A=")) + "\" style=\"width:100%;padding:10px;background:rgba(0,0,0,0.8);border:1px solid #c8f135;color:#c8f135;font-family:'JetBrains Mono',monospace;font-size:13px;\">\n                </div>\n                <div style=\"display:flex;gap:10px;flex-wrap:wrap;\">\n                    <button type=\"button\" id=\"updSaveBtn\" style=\"background:rgba(200,241,53,0.15);border:1px solid #c8f135;padding:10px 18px;color:#c8f135;font-family:'Manrope',sans-serif;cursor:pointer;\">" + String(_v895 ? 'ذخیره تنظیمات' : _d64("AeS/neWtmOiuvue9rg==")) + "</button>\n                    <button type=\"button\" id=\"updCheckBtn\" style=\"background:rgba(91,140,255,0.15);border:1px solid #5b8cff;padding:10px 18px;color:#5b8cff;font-family:'Manrope',sans-serif;cursor:pointer;\">" + String(_v895 ? 'بررسی به‌روزرسانی' : _d64("AeajgOafpeabtOaWsA==")) + "</button>\n                    <button type=\"button\" id=\"updApplyBtn\" style=\"background:rgba(61,220,132,0.15);border:1px solid #3ddc84;padding:10px 18px;color:#3ddc84;font-family:'Manrope',sans-serif;cursor:pointer;display:none;\">" + String(_v895 ? 'دریافت و اعمال به‌روزرسانی' : _d64("AeiOt+WPluW5tuW6lOeUqOabtOaWsA==")) + "</button>\n                </div>\n                <div id=\"updStatus\" style=\"display:none;margin-top:12px;padding:10px;border:1px solid #c8f135;background:rgba(8,10,14,0.8);color:#c8f135;font-size:0.85rem;\"></div>\n                <div style=\"margin-top:10px;color:#9aa6b8;font-size:0.75rem;\">\n                    " + String(_v895 ? 'توکن فقط با اجازه‌ی «Workers Scripts:Edit» بساز، نه دسترسی کامل اکانت. این توکن در KV همین ورکر ذخیره می‌شود و هرگز جای دیگری فرستاده نمی‌شود.' : _d64("Aeivt+S7heS9v+eUqOWFt+aciSAiV29ya2VycyBTY3JpcHRzOkVkaXQiIOadg+mZkOeahCBUb2tlbu+8jOS4jeimgeS9v+eUqOWujOaVtOi0puaIt+adg+mZkOOAguivpSBUb2tlbiDku4Xkv53lrZjlnKjmnKwgV29ya2VyIOeahCBLViDkuK3vvIzkuI3kvJrlj5HpgIHliLDku7vkvZXlhbbku5blnLDmlrnjgII=")) + "\n                </div>\n            </div>\n\n            <div class=\"card\">\n                    <h2 class=\"card-title\">" + String(_v900.relatedLinks) + "</h2>\n                <div style=\"text-align: center; margin: 20px 0;\">\n                        <a href=\"https://github.com/miladjahani/miliconfigpro-v1\" target=\"_blank\" style=\"color: #c8f135; text-decoration: none; margin: 0 20px; font-size: 1.2rem; \">" + String(_v900.githubProject) + "</a>\n                        <a href=\"" + String(_v4('aHR0cHM6Ly9naXRodWIuY29tL2J5Sm9leS95eC10b29scy9yZWxlYXNlcy8=')) + "\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #c8f135; text-decoration: none; margin: 0 20px; font-size: 1.2rem; \">" + String(_v900[_d64("AeS8mOmAieW3peWFtw==")]) + "</a>\n                    <a href=\"https://www.youtube.com/@joeyblog\" target=\"_blank\" style=\"color: #c8f135; text-decoration: none; margin: 0 20px; font-size: 1.2rem; \">YouTube @joeyblog</a>\n                </div>\n            </div>\n        </div>\n        <div id=\"cpToastStack\" class=\"cp-toast-stack\" aria-live=\"polite\" aria-atomic=\"false\"></div>\n        <div id=\"cpActionStatus\" class=\"cp-action-status\" role=\"status\" aria-live=\"polite\"></div>\n        <div id=\"cpActionBar\" class=\"cp-action-bar\" role=\"toolbar\" aria-label=\"" + String(_v900.configManagement) + "\">\n            <button type=\"button\" id=\"cpBtnSaveAll\" class=\"cp-fab-save\" title=\"" + String(_v895 ? 'ذخیره همه تنظیمات' : _d64("AeS/neWtmOaJgOaciemFjee9riAoQ3RybCtTKQ==")) + "\">\n                <span class=\"cp-fab-icon\">▣</span>\n                <span>" + String(_v895 ? 'ذخیره همه' : _d64("AeS/nSDlrZgg5YWoIOmDqA==")) + "</span>\n                <span class=\"cp-fab-dot\" aria-hidden=\"true\"></span>\n            </button>\n            <button type=\"button\" id=\"cpBtnRefresh\" class=\"cp-action-btn\" data-tip=\"" + String(_v900.refreshConfig) + "\" aria-label=\"" + String(_v900.refreshConfig) + "\">\n                <span aria-hidden=\"true\">↻</span>\n                <span class=\"cp-btn-label\">" + String(_v900.refreshConfig) + "</span>\n            </button>\n            <button type=\"button\" id=\"cpBtnReset\" class=\"cp-action-btn cp-action-btn-danger\" data-tip=\"" + String(_v900.resetConfig) + "\" aria-label=\"" + String(_v900.resetConfig) + "\">\n                <span aria-hidden=\"true\">⌫</span>\n                <span class=\"cp-btn-label\">" + String(_v900.resetConfig) + _d64("ATwvc3Bhbj4KICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPHNjcmlwdD4KLy8g5Zyw5Z2A5LuO5pyN5Yqh5Zmo6YWN572u5rOo5YWlCnZhciDorqLpmIXovazmjaLnvZHlnYAgPSAi") + String(_v32) + _d64("ASI7Ci8vIOi/nOeoi+mFjee9rlVSTO+8iOehrOe8luegge+8iQp2YXIg6L+c56iL6YWN572u572R5Z2AID0gIg==") + String(_v33) + _d64("ASI7CgovLyDnv7vor5Hlr7nosaEKY29uc3Qg5pys5Zyw5YC8MjAyMTUgPSB7CiAgemg6IHsKICAgIHN1YnNjcmlwdGlvbkNvcGllZDogJw==") + String(_v4('6K6i6ZiF6ZO+5o6l5bey5aSN5Yi2')) + "',\n    autoSubscriptionCopied: '" + String(_v4('6Ieq5Yqo6K+G5Yir6K6i6ZiF6ZO+5o6l5bey5aSN5Yi277yM5a6i5oi356uv6K6/6Zeu5pe25Lya5qC55o2uVXNlci1BZ2VudOiHquWKqOivhuWIq+W5tui/lOWbnuWvueW6lOagvOW8jw==')) + _d64("AScKICB9LAogIGZhOiB7CiAgICBzdWJzY3JpcHRpb25Db3BpZWQ6ICfZhNuM2YbaqSDYp9i02KrYsdin2qkg2qnZvtuMINi02K8nLAogICAgYXV0b1N1YnNjcmlwdGlvbkNvcGllZDogJ9mE24zZhtqpINin2LTYqtix2KfaqSDYqti02K7bjNi1INiu2YjYr9qp2KfYsSDaqdm+24wg2LTYr9iMINqp2YTYp9uM2YbYqiDZh9mG2q/Yp9mFINiv2LPYqtix2LPbjCDYqNixINin2LPYp9izIFVzZXItQWdlbnQg2KjZhyDYt9mI2LEg2K7ZiNiv2qnYp9ixINiq2LTYrtuM2LUg2K/Yp9iv2Ycg2Ygg2YLYp9mE2Kgg2YXYsdio2YjYt9mHINix2Kcg2KjYsdmF24zigIzar9ix2K/Yp9mG2K8nCiAgfQp9OwpmdW5jdGlvbiDojrflj5blh63mja4yMDIxNCjlkI3np7AyMDIxMykgewogIGNvbnN0IOWAvDIwMjEyID0gJzsgJyArIGRvY3VtZW50LmNvb2tpZTsKICBjb25zdCDpg6jliIbliJfooagyMDIxMSA9IOWAvDIwMjEyLnNwbGl0KCc7ICcgKyDlkI3np7AyMDIxMyArICc9Jyk7CiAgaWYgKOmDqOWIhuWIl+ihqDIwMjExLmxlbmd0aCA9PT0gMikgcmV0dXJuIOmDqOWIhuWIl+ihqDIwMjExLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTsKICByZXR1cm4gbnVsbDsKfQpjb25zdCDmtY/op4jlmajor63oqIAyMDIxMCA9IG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8ICcnOwpjb25zdCDlt7Lkv53lrZjor63oqIAyMDIwOSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmZXJyZWRMYW5ndWFnZScpIHx8IOiOt+WPluWHreaNrjIwMjE0KCdwcmVmZXJyZWRMYW5ndWFnZScpOwpsZXQg5piv5ZCm5YC8MjAyMDggPSBmYWxzZTsKaWYgKOW3suS/neWtmOivreiogDIwMjA5ID09PSAnZmEnIHx8IOW3suS/neWtmOivreiogDIwMjA5ID09PSAnZmEtSVInKSB7CiAg5piv5ZCm5YC8MjAyMDggPSB0cnVlOwp9IGVsc2UgaWYgKOW3suS/neWtmOivreiogDIwMjA5ID09PSAnemgnIHx8IOW3suS/neWtmOivreiogDIwMjA5ID09PSAnemgtQ04nKSB7CiAg5piv5ZCm5YC8MjAyMDggPSBmYWxzZTsKfSBlbHNlIHsKICDmmK/lkKblgLwyMDIwOCA9IOa1j+iniOWZqOivreiogDIwMjEwLmluY2x1ZGVzKCdmYScpIHx8IOa1j+iniOWZqOivreiogDIwMjEwLmluY2x1ZGVzKCdmYS1JUicpOwp9CmNvbnN0IOe/u+ivkeWAvDIwMjA3ID0g5pys5Zyw5YC8MjAyMTVb5piv5ZCm5YC8MjAyMDggPyAnZmEnIDogJ3poJ107CmZ1bmN0aW9uIOWIh+aNouivreiogCjor63oqIApIHsKICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZmVycmVkTGFuZ3VhZ2UnLCDor63oqIApOwogIC8vIOiuvue9rkNvb2tpZe+8iOacieaViOacnzHlubTvvIkKICBjb25zdCDov4fmnJ/ml6XmnJ8yMDIwNiA9IG5ldyBEYXRlKCk7CiAg6L+H5pyf5pel5pyfMjAyMDYuc2V0RnVsbFllYXIo6L+H5pyf5pel5pyfMjAyMDYuZ2V0RnVsbFllYXIoKSArIDEpOwogIGRvY3VtZW50LmNvb2tpZSA9ICdwcmVmZXJyZWRMYW5ndWFnZT0nICsg6K+t6KiAICsgJzsgcGF0aD0vOyBleHBpcmVzPScgKyDov4fmnJ/ml6XmnJ8yMDIwNi50b1VUQ1N0cmluZygpICsgJzsgU2FtZVNpdGU9TGF4JzsKICAvLyDliLfmlrDpobXpnaLvvIzkuI3kvb/nlKhVUkzlj4LmlbAKICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7Cn0KCi8vIOmhtemdouWKoOi9veaXtuajgOafpSBsb2NhbFN0b3JhZ2Ug5ZKMIENvb2tpZe+8jOW5tua4heeQhlVSTOWPguaVsAp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHsKICBjb25zdCDlt7Lkv53lrZjor63oqIAyMDIwNSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmZXJyZWRMYW5ndWFnZScpIHx8IOiOt+WPluWHreaNrjIwMjE0KCdwcmVmZXJyZWRMYW5ndWFnZScpOwogIGNvbnN0IOe9keWdgOWPguaVsCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7CiAgY29uc3Qg572R5Z2A6K+t6KiAID0g572R5Z2A5Y+C5pWwLmdldCgnbGFuZycpOwoKICAvLyDlpoLmnpxVUkzkuK3mnInor63oqIDlj4LmlbDvvIznp7vpmaTlroPlubborr7nva5Db29raWUKICBpZiAo572R5Z2A6K+t6KiAKSB7CiAgICBjb25zdCDlvZPliY3nvZHlnYAyMDIwNCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpOwogICAg5b2T5YmN572R5Z2AMjAyMDQuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnbGFuZycpOwogICAgY29uc3Qg5paw572R5Z2AID0g5b2T5YmN572R5Z2AMjAyMDQudG9TdHJpbmcoKTsKCiAgICAvLyDorr7nva5Db29raWUKICAgIGNvbnN0IOi/h+acn+aXpeacnzIwMjAzID0gbmV3IERhdGUoKTsKICAgIOi/h+acn+aXpeacnzIwMjAzLnNldEZ1bGxZZWFyKOi/h+acn+aXpeacnzIwMjAzLmdldEZ1bGxZZWFyKCkgKyAxKTsKICAgIGRvY3VtZW50LmNvb2tpZSA9ICdwcmVmZXJyZWRMYW5ndWFnZT0nICsg572R5Z2A6K+t6KiAICsgJzsgcGF0aD0vOyBleHBpcmVzPScgKyDov4fmnJ/ml6XmnJ8yMDIwMy50b1VUQ1N0cmluZygpICsgJzsgU2FtZVNpdGU9TGF4JzsKICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVmZXJyZWRMYW5ndWFnZScsIOe9keWdgOivreiogCk7CgogICAgLy8g5L2/55SoaGlzdG9yeSBBUEnnp7vpmaRVUkzlj4LmlbDvvIzkuI3liLfmlrDpobXpnaIKICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIOaWsOe9keWdgCk7CiAgfSBlbHNlIGlmICjlt7Lkv53lrZjor63oqIAyMDIwNSkgewogICAgLy8g5aaC5p6cbG9jYWxTdG9yYWdl5Lit5pyJ5L2GQ29va2ll5Lit5rKh5pyJ77yM5ZCM5q2l5YiwQ29va2llCiAgICBjb25zdCDov4fmnJ/ml6XmnJ8gPSBuZXcgRGF0ZSgpOwogICAg6L+H5pyf5pel5pyfLnNldEZ1bGxZZWFyKOi/h+acn+aXpeacny5nZXRGdWxsWWVhcigpICsgMSk7CiAgICBkb2N1bWVudC5jb29raWUgPSAncHJlZmVycmVkTGFuZ3VhZ2U9JyArIOW3suS/neWtmOivreiogDIwMjA1ICsgJzsgcGF0aD0vOyBleHBpcmVzPScgKyDov4fmnJ/ml6XmnJ8udG9VVENTdHJpbmcoKSArICc7IFNhbWVTaXRlPUxheCc7CiAgfQp9KTsKCi8vIOi1m+WNmuaci+WFi+mjjiB0b2FzdCDpgJrnn6UgKOabv+S7oyBhbGVydCkKd2luZG93LuaYvuekuuaPkOekuiA9IGZ1bmN0aW9uICjmtojmga8yMDIwMiwg57G75Z6LMjAyMDEsIOacrOWcsOWAvDIwMjAwKSB7CiAg5pys5Zyw5YC8MjAyMDAgPSDmnKzlnLDlgLwyMDIwMCB8fCB7fTsKICB2YXIg5aCG5qCIID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NwVG9hc3RTdGFjaycpOwogIGlmICgh5aCG5qCIKSByZXR1cm47CiAgdmFyIOexu+Wei+aYoOWwhCA9IHsKICAgIHN1Y2Nlc3M6ICfinJMnLAogICAgaW5mbzogJ+KMrCcsCiAgICB3YXJuOiAn4pqgJywKICAgIGVycm9yOiAn4pyVJwogIH07CiAgdmFyIOagh+mimOaYoOWwhCA9IHsKICAgIHN1Y2Nlc3M6ICdTVUNDRVNTJywKICAgIGluZm86ICdJTkZPJywKICAgIHdhcm46ICdXQVJOJywKICAgIGVycm9yOiAnRVJST1InCiAgfTsKICDnsbvlnosyMDIwMSA9IOexu+Wei+aYoOWwhFvnsbvlnosyMDIwMV0gPyDnsbvlnosyMDIwMSA6ICdzdWNjZXNzJzsKICB2YXIg5oyB57ut5pe26Ze0ID0g5pys5Zyw5YC8MjAyMDAuZHVyYXRpb24gfHwgMzIwMDsKICB2YXIg5o+Q56S6ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAg5o+Q56S6LmNsYXNzTmFtZSA9ICdjcC10b2FzdCBjcC10b2FzdC0nICsg57G75Z6LMjAyMDE7CiAg5o+Q56S6LnN0eWxlLnNldFByb3BlcnR5KCctLWNwLXRvYXN0LWR1cicsIOaMgee7reaXtumXtCArICdtcycpOwogIHZhciDlm77moIcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7CiAg5Zu+5qCHLmNsYXNzTmFtZSA9ICdjcC10b2FzdC1pY29uJzsKICDlm77moIcudGV4dENvbnRlbnQgPSDnsbvlnovmmKDlsIRb57G75Z6LMjAyMDFdOwogIHZhciDkuLvkvZMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICDkuLvkvZMuY2xhc3NOYW1lID0gJ2NwLXRvYXN0LWJvZHknOwogIHZhciDmoIfpopggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICDmoIfpopguY2xhc3NOYW1lID0gJ2NwLXRvYXN0LXRpdGxlJzsKICDmoIfpopgudGV4dENvbnRlbnQgPSDmnKzlnLDlgLwyMDIwMC50aXRsZSB8fCDmoIfpopjmmKDlsIRb57G75Z6LMjAyMDFdOwogIHZhciDmtojmga8yMDE5OSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogIOa2iOaBrzIwMTk5LmNsYXNzTmFtZSA9ICdjcC10b2FzdC1tc2cnOwogIOa2iOaBrzIwMTk5LnRleHRDb250ZW50ID0gU3RyaW5nKOa2iOaBrzIwMjAyID09IG51bGwgPyAnJyA6IOa2iOaBrzIwMjAyKTsKICDkuLvkvZMuYXBwZW5kQ2hpbGQo5qCH6aKYKTsKICDkuLvkvZMuYXBwZW5kQ2hpbGQo5raI5oGvMjAxOTkpOwogIHZhciDlhbPpl60gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICDlhbPpl60udHlwZSA9ICdidXR0b24nOwogIOWFs+mXrS5jbGFzc05hbWUgPSAnY3AtdG9hc3QtY2xvc2UnOwogIOWFs+mXrS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnY2xvc2UnKTsKICDlhbPpl60udGV4dENvbnRlbnQgPSAn4pyVJzsKICDmj5DnpLouYXBwZW5kQ2hpbGQo5Zu+5qCHKTsKICDmj5DnpLouYXBwZW5kQ2hpbGQo5Li75L2TKTsKICDmj5DnpLouYXBwZW5kQ2hpbGQo5YWz6ZetKTsKICDloIbmoIguYXBwZW5kQ2hpbGQo5o+Q56S6KTsKICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgewogICAg5o+Q56S6LmNsYXNzTGlzdC5hZGQoJ2NwLXNob3cnKTsKICB9KTsKICB2YXIg5pys5Zyw5YC8MjAxOTggPSBmYWxzZTsKICBmdW5jdGlvbiDlhbPpl63mj5DnpLooKSB7CiAgICBpZiAo5pys5Zyw5YC8MjAxOTgpIHJldHVybjsKICAgIOacrOWcsOWAvDIwMTk4ID0gdHJ1ZTsKICAgIOaPkOekui5jbGFzc0xpc3QucmVtb3ZlKCdjcC1zaG93Jyk7CiAgICDmj5DnpLouY2xhc3NMaXN0LmFkZCgnY3AtaGlkZScpOwogICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICAgIGlmICjmj5DnpLoucGFyZW50Tm9kZSkg5o+Q56S6LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQo5o+Q56S6KTsKICAgIH0sIDQwMCk7CiAgfQogIOWFs+mXrS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIOWFs+mXreaPkOekuik7CiAgdmFyIOiuoeaXtuWZqCA9IHNldFRpbWVvdXQo5YWz6Zet5o+Q56S6LCDmjIHnu63ml7bpl7QpOwogIOaPkOekui5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkgewogICAgY2xlYXJUaW1lb3V0KOiuoeaXtuWZqCk7CiAgfSk7CiAg5o+Q56S6LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7CiAgICDorqHml7blmaggPSBzZXRUaW1lb3V0KOWFs+mXreaPkOekuiwgMTIwMCk7CiAgfSk7CiAgcmV0dXJuIHsKICAgIGRpc21pc3M6IOWFs+mXreaPkOekuiwKICAgIGVsZW1lbnQ6IOaPkOekugogIH07Cn07CmZ1bmN0aW9uIOWwneivleaJk+W8gOW6lOeUqCjmlrnmoYjnvZHlnYAyMDE5Nywg5Zue6YCA5Zue6LCDLCDotoXml7YyMDE5NikgewogIOi2heaXtjIwMTk2ID0g6LaF5pe2MjAxOTYgfHwgMjUwMDsKICB2YXIg5bqU55So5bey5omT5byAID0gZmFsc2U7CiAgdmFyIOWbnuiwg+W3suaJp+ihjCA9IGZhbHNlOwogIHZhciDlvIDlp4vlgLwgPSBEYXRlLm5vdygpOwogIHZhciDlgLzlgLwyMDE5NSA9IGZ1bmN0aW9uICgpIHsKICAgIHZhciDogJfml7YyMDE5NCA9IERhdGUubm93KCkgLSDlvIDlp4vlgLw7CiAgICBpZiAo6ICX5pe2MjAxOTQgPCAzMDAwICYmICHlm57osIPlt7LmiafooYwpIHsKICAgICAg5bqU55So5bey5omT5byAID0gdHJ1ZTsKICAgIH0KICB9OwogIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywg5YC85YC8MjAxOTUpOwogIHZhciDlgLzlgLwyMDE5MyA9IGZ1bmN0aW9uICgpIHsKICAgIHZhciDogJfml7YgPSBEYXRlLm5vdygpIC0g5byA5aeL5YC8OwogICAgaWYgKOiAl+aXtiA8IDMwMDAgJiYgIeWbnuiwg+W3suaJp+ihjCkgewogICAgICDlupTnlKjlt7LmiZPlvIAgPSB0cnVlOwogICAgfQogIH07CiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIOWAvOWAvDIwMTkzKTsKICB2YXIg5YaF5bWM5qGG5p62ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7CiAg5YaF5bWM5qGG5p62LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAg5YaF5bWM5qGG5p62LnN0eWxlLndpZHRoID0gJzFweCc7CiAg5YaF5bWM5qGG5p62LnN0eWxlLmhlaWdodCA9ICcxcHgnOwogIOWGheW1jOahhuaeti5zcmMgPSDmlrnmoYjnvZHlnYAyMDE5NzsKICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKOWGheW1jOahhuaetik7CiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICDlhoXltYzmoYbmnrYucGFyZW50Tm9kZSAmJiDlhoXltYzmoYbmnrYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCjlhoXltYzmoYbmnrYpOwogICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCDlgLzlgLwyMDE5NSk7CiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywg5YC85YC8MjAxOTMpOwogICAgaWYgKCHlm57osIPlt7LmiafooYwpIHsKICAgICAg5Zue6LCD5bey5omn6KGMID0gdHJ1ZTsKICAgICAgaWYgKCHlupTnlKjlt7LmiZPlvIAgJiYg5Zue6YCA5Zue6LCDKSB7CiAgICAgICAg5Zue6YCA5Zue6LCDKCk7CiAgICAgIH0KICAgIH0KICB9LCDotoXml7YyMDE5Nik7Cn0KZnVuY3Rpb24g55Sf5oiQ5a6i5oi356uv6ZO+5o6lKOWuouaIt+err+exu+Weiywg5a6i5oi356uv5ZCN56ewKSB7CiAgdmFyIOW9k+WJjee9keWdgDIwMTkyID0gd2luZG93LmxvY2F0aW9uLmhyZWY7CiAgdmFyIOiuoumYhee9keWdgDIwMTkxID0g5b2T5YmN572R5Z2AMjAxOTIgKyAiL3N1YiI7CiAgdmFyIOaWueahiOe9keWdgCA9ICcnOwogIHZhciDmmL7npLrlkI3np7AgPSDlrqLmiLfnq6/lkI3np7AgfHwgJyc7CiAgdmFyIOacgOe7iOe9keWdgCA9IOiuoumYhee9keWdgDIwMTkxOwogIGlmICjlrqLmiLfnq6/nsbvlnosgPT09ICc=") + String(_v4('djJyYXk=')) + _d64("AScpIHsKICAgIOacgOe7iOe9keWdgCA9IOiuoumYhee9keWdgDIwMTkxOwogICAgdmFyIOe9keWdgOWAvDIwMTkwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImNsaWVudFN1YnNjcmlwdGlvblVybCIpOwogICAg572R5Z2A5YC8MjAxOTAudGV4dENvbnRlbnQgPSDmnIDnu4jnvZHlnYA7CiAgICDnvZHlnYDlgLwyMDE5MC5zdHlsZS5kaXNwbGF5ID0gImJsb2NrIjsKICAgIOe9keWdgOWAvDIwMTkwLnN0eWxlLm92ZXJmbG93V3JhcCA9ICJicmVhay13b3JkIjsKICAgIOe9keWdgOWAvDIwMTkwLnN0eWxlLndvcmRCcmVhayA9ICJicmVhay1hbGwiOwogICAg572R5Z2A5YC8MjAxOTAuc3R5bGUub3ZlcmZsb3dYID0gImF1dG8iOwogICAg572R5Z2A5YC8MjAxOTAuc3R5bGUubWF4V2lkdGggPSAiMTAwJSI7CiAgICDnvZHlnYDlgLwyMDE5MC5zdHlsZS5ib3hTaXppbmcgPSAiYm9yZGVyLWJveCI7CiAgICBpZiAo5a6i5oi356uv5ZCN56ewID09PSAn") + String(_v4('VjJSQVk=')) + _d64("AScpIHsKICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQo5pyA57uI572R5Z2AKS50aGVuKGZ1bmN0aW9uICgpIHsKICAgICAgICDmmL7npLrmj5DnpLoo5pi+56S65ZCN56ewICsgIiAiICsg57+76K+R5YC8MjAyMDcuc3Vic2NyaXB0aW9uQ29waWVkLCAnc3VjY2VzcycpOwogICAgICB9KTsKICAgIH0gZWxzZSBpZiAo5a6i5oi356uv5ZCN56ewID09PSAn") + String(_v4('U2hhZG93cm9ja2V0')) + _d64("AScpIHsKICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('c2hhZG93cm9ja2V0Oi8vYWRkLw==')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAg5bCd6K+V5omT5byA5bqU55SoKOaWueahiOe9keWdgCwgZnVuY3Rpb24gKCkgewogICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KOacgOe7iOe9keWdgCkudGhlbihmdW5jdGlvbiAoKSB7CiAgICAgICAgICDmmL7npLrmj5DnpLoo5pi+56S65ZCN56ewICsgIiAiICsg57+76K+R5YC8MjAyMDcuc3Vic2NyaXB0aW9uQ29waWVkLCAnc3VjY2VzcycpOwogICAgICAgIH0pOwogICAgICB9KTsKICAgIH0gZWxzZSBpZiAo5a6i5oi356uv5ZCN56ewID09PSAn") + String(_v4('VjJSQVlORw==')) + _d64("AScpIHsKICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('djJyYXluZzovL2luc3RhbGw/dXJsPQ==')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAg5bCd6K+V5omT5byA5bqU55SoKOaWueahiOe9keWdgCwgZnVuY3Rpb24gKCkgewogICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KOacgOe7iOe9keWdgCkudGhlbihmdW5jdGlvbiAoKSB7CiAgICAgICAgICDmmL7npLrmj5DnpLoo5pi+56S65ZCN56ewICsgIiAiICsg57+76K+R5YC8MjAyMDcuc3Vic2NyaXB0aW9uQ29waWVkLCAnc3VjY2VzcycpOwogICAgICAgIH0pOwogICAgICB9KTsKICAgIH0gZWxzZSBpZiAo5a6i5oi356uv5ZCN56ewID09PSAn") + String(_v4('TkVLT1JBWQ==')) + _d64("AScpIHsKICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('bmVrb3JheTovL2luc3RhbGwtY29uZmlnP3VybD0=')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAg5bCd6K+V5omT5byA5bqU55SoKOaWueahiOe9keWdgCwgZnVuY3Rpb24gKCkgewogICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KOacgOe7iOe9keWdgCkudGhlbihmdW5jdGlvbiAoKSB7CiAgICAgICAgICDmmL7npLrmj5DnpLoo5pi+56S65ZCN56ewICsgIiAiICsg57+76K+R5YC8MjAyMDcuc3Vic2NyaXB0aW9uQ29waWVkLCAnc3VjY2VzcycpOwogICAgICAgIH0pOwogICAgICB9KTsKICAgIH0KICB9IGVsc2UgewogICAgLy8g57uf5LiA6LWw5YaF6YOo5qC85byP6L2s5o2iCiAgICDmnIDnu4jnvZHlnYAgPSDorqLpmIXnvZHlnYAyMDE5MSArICjorqLpmIXnvZHlnYAyMDE5MS5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nKSArICJ0YXJnZXQ9IiArIOWuouaIt+err+exu+WeizsKICAgIHZhciDnvZHlnYDlgLwyMDE5MCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjbGllbnRTdWJzY3JpcHRpb25VcmwiKTsKICAgIOe9keWdgOWAvDIwMTkwLnRleHRDb250ZW50ID0g5pyA57uI572R5Z2AOwogICAg572R5Z2A5YC8MjAxOTAuc3R5bGUuZGlzcGxheSA9ICJibG9jayI7CiAgICDnvZHlnYDlgLwyMDE5MC5zdHlsZS5vdmVyZmxvd1dyYXAgPSAiYnJlYWstd29yZCI7CiAgICDnvZHlnYDlgLwyMDE5MC5zdHlsZS53b3JkQnJlYWsgPSAiYnJlYWstYWxsIjsKICAgIOe9keWdgOWAvDIwMTkwLnN0eWxlLm92ZXJmbG93WCA9ICJhdXRvIjsKICAgIOe9keWdgOWAvDIwMTkwLnN0eWxlLm1heFdpZHRoID0gIjEwMCUiOwogICAg572R5Z2A5YC8MjAxOTAuc3R5bGUuYm94U2l6aW5nID0gImJvcmRlci1ib3giOwogICAgaWYgKOWuouaIt+err+exu+WeiyA9PT0gJw==") + String(_v4('Y2xhc2g=')) + _d64("AScpIHsKICAgICAgaWYgKOWuouaIt+err+WQjeensCA9PT0gJw==") + String(_v4('U1RBU0g=')) + _d64("AScpIHsKICAgICAgICDmlrnmoYjnvZHlnYAgPSAn") + String(_v4('c3Rhc2g6Ly9pbnN0YWxsP3VybD0=')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAgICDmmL7npLrlkI3np7AgPSAn") + String(_v4('U1RBU0g=')) + _d64("ASc7CiAgICAgIH0gZWxzZSB7CiAgICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('Y2xhc2g6Ly9pbnN0YWxsLWNvbmZpZz91cmw9')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAgICDmmL7npLrlkI3np7AgPSAn") + String(_v4('Q0xBU0g=')) + _d64("ASc7CiAgICAgIH0KICAgIH0gZWxzZSBpZiAo5a6i5oi356uv57G75Z6LID09PSAn") + String(_v4('c3VyZ2U=')) + _d64("AScpIHsKICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('c3VyZ2U6Ly8vaW5zdGFsbC1jb25maWc/dXJsPQ==')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAg5pi+56S65ZCN56ewID0gJw==") + String(_v4('U1VSR0U=')) + _d64("ASc7CiAgICB9IGVsc2UgaWYgKOWuouaIt+err+exu+WeiyA9PT0gJw==") + String(_v4('c2luZ2JveA==')) + _d64("AScpIHsKICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('c2luZy1ib3g6Ly9pbnN0YWxsLWNvbmZpZz91cmw9')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAg5pi+56S65ZCN56ewID0gJw==") + String(_v4('U0lORy1CT1g=')) + _d64("ASc7CiAgICB9IGVsc2UgaWYgKOWuouaIt+err+exu+WeiyA9PT0gJw==") + String(_v4('bG9vbg==')) + _d64("AScpIHsKICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('bG9vbjovL2luc3RhbGw/dXJsPQ==')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAg5pi+56S65ZCN56ewID0gJw==") + String(_v4('TE9PTg==')) + _d64("ASc7CiAgICB9IGVsc2UgaWYgKOWuouaIt+err+exu+WeiyA9PT0gJw==") + String(_v4('cXVhbng=')) + _d64("AScpIHsKICAgICAg5pa55qGI572R5Z2AID0gJw==") + String(_v4('cXVhbnR1bXVsdC14Oi8vaW5zdGFsbC1jb25maWc/dXJsPQ==')) + _d64("AScgKyBlbmNvZGVVUklDb21wb25lbnQo5pyA57uI572R5Z2AKTsKICAgICAg5pi+56S65ZCN56ewID0gJw==") + String(_v4('UVVBTlRVTVVMVCBY')) + _d64("ASc7CiAgICB9CiAgICBpZiAo5pa55qGI572R5Z2AKSB7CiAgICAgIOWwneivleaJk+W8gOW6lOeUqCjmlrnmoYjnvZHlnYAsIGZ1bmN0aW9uICgpIHsKICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCjmnIDnu4jnvZHlnYApLnRoZW4oZnVuY3Rpb24gKCkgewogICAgICAgICAg5pi+56S65o+Q56S6KOaYvuekuuWQjeensCArICIgIiArIOe/u+ivkeWAvDIwMjA3LnN1YnNjcmlwdGlvbkNvcGllZCwgJ3N1Y2Nlc3MnKTsKICAgICAgICB9KTsKICAgICAgfSk7CiAgICB9IGVsc2UgewogICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCjmnIDnu4jnvZHlnYApLnRoZW4oZnVuY3Rpb24gKCkgewogICAgICAgIOaYvuekuuaPkOekuijmmL7npLrlkI3np7AgKyAiICIgKyDnv7vor5HlgLwyMDIwNy5zdWJzY3JpcHRpb25Db3BpZWQsICdzdWNjZXNzJyk7CiAgICAgIH0pOwogICAgfQogIH0KfQoKLy8g6aG16Z2i54m55pWI5Zu+5b2i5YyW5byA5YWzIChsb2NhbFN0b3JhZ2Ug5oyB5LmF5YyWKQp3aW5kb3cu5bqU55So6aG16Z2i54m55pWIID0gZnVuY3Rpb24gKCkgewogIHZhciDmnKzlnLDlgLwyMDE4OSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcC1meC1vZmYnKSA9PT0gJzEnOwogIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZngtb2ZmJywg5pys5Zyw5YC8MjAxODkpOwogIHZhciDmnKzlnLDlgLwyMDE4OCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcEZ4TGFiZWwnKTsKICBpZiAo5pys5Zyw5YC8MjAxODgpIOacrOWcsOWAvDIwMTg4LnRleHRDb250ZW50ID0g5pys5Zyw5YC8MjAxODkgPyAnRlg6IE9GRicgOiAnRlg6IE9OJzsKICBpZiAo5pys5Zyw5YC8MjAxODkpIHsKICAgIHZhciDmnKzlnLDlgLwyMDE4NyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRyaXhDb2RlUmFpbicpOwogICAgaWYgKOacrOWcsOWAvDIwMTg3KSDmnKzlnLDlgLwyMDE4Ny5pbm5lckhUTUwgPSAnJzsKICB9IGVsc2UgaWYgKHR5cGVvZiDliJvlu7rnn6npmLXpm6ggPT09ICdmdW5jdGlvbicpIHsKICAgIHZhciDnu5PmnpzlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0cml4Q29kZVJhaW4nKTsKICAgIGlmICjnu5PmnpzlgLwgJiYgIee7k+aenOWAvC5maXJzdENoaWxkKSDliJvlu7rnn6npmLXpm6goKTsKICB9Cn07CndpbmRvdy7liIfmjaLpobXpnaLnibnmlYggPSBmdW5jdGlvbiAoKSB7CiAgdmFyIOacrOWcsOWAvDIwMTg2ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NwLWZ4LW9mZicpID09PSAnMSc7CiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NwLWZ4LW9mZicsIOacrOWcsOWAvDIwMTg2ID8gJzAnIDogJzEnKTsKICB3aW5kb3cu5bqU55So6aG16Z2i54m55pWIKCk7Cn07CihmdW5jdGlvbiAoKSB7CiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcC1meC1vZmYnKSA9PT0gJzEnKSB7CiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkgewogICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2Z4LW9mZicpOwogICAgICB2YXIg5pys5Zyw5YC8MjAxODUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3BGeExhYmVsJyk7CiAgICAgIGlmICjmnKzlnLDlgLwyMDE4NSkg5pys5Zyw5YC8MjAxODUudGV4dENvbnRlbnQgPSAnRlg6IE9GRic7CiAgICB9KTsKICB9Cn0pKCk7CmZ1bmN0aW9uIOWIm+W7uuefqemYtembqCgpIHsKICBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZngtb2ZmJykpIHJldHVybjsKICBjb25zdCDnn6npmLXlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0cml4Q29kZVJhaW4nKTsKICBpZiAoIeefqemYteWAvCkgcmV0dXJuOwogIGNvbnN0IOi1m+WNmuWtl+espuWIl+ihqCA9ICcwMeOCouOCpOOCpuOCqOOCquOCq+OCreOCr+OCseOCs+OCteOCt+OCueOCu+OCveOCv+ODgeODhOODhuODiOODiuODi+ODjOODjeODjiQlI0AhPzw+Kz1BQkNERUYnOwogIGNvbnN0IOiwg+iJsuadvyA9IFsnI2M4ZjEzNScsICcjNWI4Y2ZmJywgJyNmZmI0NTQnLCAnIzNkZGM4NCddOwogIGNvbnN0IOWIl+aVsCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLyAyMCk7CiAgZm9yIChsZXQg57Si5byV5YC8MjAxODQgPSAwOyDntKLlvJXlgLwyMDE4NCA8IOWIl+aVsDsg57Si5byV5YC8MjAxODQrKykgewogICAgY29uc3Qg5YiXMjAxODMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgIOWIlzIwMTgzLmNsYXNzTmFtZSA9ICdtYXRyaXgtY29sdW1uJzsKICAgIOWIlzIwMTgzLnN0eWxlLmxlZnQgPSDntKLlvJXlgLwyMDE4NCAqIDIwICsgJ3B4JzsKICAgIOWIlzIwMTgzLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gLU1hdGgucmFuZG9tKCkgKiAxNSArICdzJzsKICAgIOWIlzIwMTgzLnN0eWxlLmFuaW1hdGlvbkR1cmF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDE0ICsgOCArICdzJzsKICAgIOWIlzIwMTgzLnN0eWxlLmZvbnRTaXplID0gTWF0aC5yYW5kb20oKSAqIDQgKyAxMiArICdweCc7CiAgICDliJcyMDE4My5zdHlsZS5vcGFjaXR5ID0gKE1hdGgucmFuZG9tKCkgKiAwLjcgKyAwLjMpLnRvRml4ZWQoMik7CiAgICBsZXQg5paH5pysMjAxODIgPSAnJzsKICAgIGNvbnN0IOWtl+espuaVsOmHjyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwICsgMTgpOwogICAgZm9yIChsZXQg5qyh57Si5byV5YC8ID0gMDsg5qyh57Si5byV5YC8IDwg5a2X56ym5pWw6YePOyDmrKHntKLlvJXlgLwrKykgewogICAgICBjb25zdCDlrZfnrKYgPSDotZvljZrlrZfnrKbliJfooahbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICog6LWb5Y2a5a2X56ym5YiX6KGoLmxlbmd0aCldOwogICAgICBjb25zdCDlgLzlvLrosIMgPSBNYXRoLnJhbmRvbSgpID4gMC44NTsKICAgICAgY29uc3Qg6aKc6ImyID0g5YC85by66LCDID8g6LCD6Imy5p2/W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIOiwg+iJsuadvy5sZW5ndGgpXSA6ICcnOwogICAgICDmlofmnKwyMDE4MiArPSDpopzoibIgPyAnPHNwYW4gc3R5bGU9ImNvbG9yOicgKyDpopzoibIgKyAnOyI+JyArIOWtl+espiArICc8L3NwYW4+PGJyPicgOiAnPHNwYW4+JyArIOWtl+espiArICc8L3NwYW4+PGJyPic7CiAgICB9CiAgICDliJcyMDE4My5pbm5lckhUTUwgPSDmlofmnKwyMDE4MjsKICAgIOefqemYteWAvC5hcHBlbmRDaGlsZCjliJcyMDE4Myk7CiAgfQogIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsKICAgIGNvbnN0IOWIl+WIl+ihqCA9IOefqemYteWAvC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0cml4LWNvbHVtbicpOwogICAg5YiX5YiX6KGoLmZvckVhY2goZnVuY3Rpb24gKOWIlykgewogICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTQpIHsKICAgICAgICBjb25zdCDlrZfnrKbliJfooaggPSDliJcucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpOwogICAgICAgIGlmICjlrZfnrKbliJfooagubGVuZ3RoID4gMCkgewogICAgICAgICAgY29uc3Qg55uu5qCHMjAxODEgPSDlrZfnrKbliJfooahbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICog5a2X56ym5YiX6KGoLmxlbmd0aCldOwogICAgICAgICAgY29uc3Qg5pys5Zyw5YC8MjAxODAgPSDnm67moIcyMDE4MS5zdHlsZS5jb2xvcjsKICAgICAgICAgIOebruaghzIwMTgxLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnOwogICAgICAgICAg55uu5qCHMjAxODEuc3R5bGUudGV4dFNoYWRvdyA9ICcwIDAgMTBweCAjZmZmZmZmLCAwIDAgMThweCAjYzhmMTM1JzsKICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgICAgICAgICDnm67moIcyMDE4MS5zdHlsZS5jb2xvciA9IOacrOWcsOWAvDIwMTgwOwogICAgICAgICAgICDnm67moIcyMDE4MS5zdHlsZS50ZXh0U2hhZG93ID0gJyc7CiAgICAgICAgICB9LCAyMDApOwogICAgICAgIH0KICAgICAgfQogICAgfSk7CiAgfSwgMTEwKTsKfQphc3luYyBmdW5jdGlvbiDmo4Dmn6Xns7vnu5/nirbmgIEoKSB7CiAgdHJ5IHsKICAgIGNvbnN0IOS6keWimeeKtuaAgSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZlN0YXR1cycpOwogICAgY29uc3Qg5Zyw5Yy654q25oCBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lvblN0YXR1cycpOwogICAgY29uc3Qg5YC85YC8MjAxNzkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VvSW5mbycpOwogICAgY29uc3Qg5aSH55So54q25oCBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2t1cFN0YXR1cycpOwogICAgY29uc3Qg5b2T5YmN5Zyw5Z2AID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRJUCcpOwogICAgY29uc3Qg5Zyw5Yy65YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lvbk1hdGNoJyk7CgogICAgLy8g6I635Y+W5b2T5YmN6K+t6KiA6K6+572u77yI5LyY5YWI5LuOQ29va2llL2xvY2FsU3RvcmFnZeivu+WPlu+8iQogICAgZnVuY3Rpb24g6I635Y+W5Yet5o2uMjAxNzgo5ZCN56ewMjAxNzcpIHsKICAgICAgY29uc3Qg5YC8MjAxNzYgPSAnOyAnICsgZG9jdW1lbnQuY29va2llOwogICAgICBjb25zdCDpg6jliIbliJfooagyMDE3NSA9IOWAvDIwMTc2LnNwbGl0KCc7ICcgKyDlkI3np7AyMDE3NyArICc9Jyk7CiAgICAgIGlmICjpg6jliIbliJfooagyMDE3NS5sZW5ndGggPT09IDIpIHJldHVybiDpg6jliIbliJfooagyMDE3NS5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7CiAgICAgIHJldHVybiBudWxsOwogICAgfQogICAgY29uc3Qg5rWP6KeI5Zmo6K+t6KiAMjAxNzQgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCAnJzsKICAgIGNvbnN0IOW3suS/neWtmOivreiogDIwMTczID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWZlcnJlZExhbmd1YWdlJykgfHwg6I635Y+W5Yet5o2uMjAxNzgoJ3ByZWZlcnJlZExhbmd1YWdlJyk7CiAgICBsZXQg5piv5ZCm5YC8MjAxNzIgPSBmYWxzZTsKICAgIGlmICjlt7Lkv53lrZjor63oqIAyMDE3MyA9PT0gJ2ZhJyB8fCDlt7Lkv53lrZjor63oqIAyMDE3MyA9PT0gJ2ZhLUlSJykgewogICAgICDmmK/lkKblgLwyMDE3MiA9IHRydWU7CiAgICB9IGVsc2UgaWYgKOW3suS/neWtmOivreiogDIwMTczID09PSAnemgnIHx8IOW3suS/neWtmOivreiogDIwMTczID09PSAnemgtQ04nKSB7CiAgICAgIOaYr+WQpuWAvDIwMTcyID0gZmFsc2U7CiAgICB9IGVsc2UgewogICAgICDmmK/lkKblgLwyMDE3MiA9IOa1j+iniOWZqOivreiogDIwMTc0LmluY2x1ZGVzKCdmYScpIHx8IOa1j+iniOWZqOivreiogDIwMTc0LmluY2x1ZGVzKCdmYS1JUicpOwogICAgfQogICAgY29uc3Qg5pys5Zyw5YC8MjAxNzEgPSB7CiAgICAgIHpoOiB7CiAgICAgICAgd29ya2VyUmVnaW9uOiAnV29ya2Vy5Zyw5Yy6OiAnLAogICAgICAgIGRldGVjdGlvbk1ldGhvZDogJ+ajgOa1i+aWueW8jzogJywKICAgICAgICBwaXBTdGF0dXM6ICc=") + String(_v4('UHJveHlJUOeKtuaAgTog')) + _d64("AScsCiAgICAgICAgY3VycmVudElQOiAn5b2T5YmN5L2/55SoSVA6ICcsCiAgICAgICAgcmVnaW9uTWF0Y2g6ICflnLDljLrljLnphY06ICcsCiAgICAgICAgcmVnaW9uTmFtZXM6IHsKICAgICAgICAgICdISyc6ICfwn4et8J+HsCDpppnmuK8nLAogICAgICAgICAgJ1VTJzogJ/Cfh7rwn4e4IOe+juWbvScsCiAgICAgICAgICAnU0cnOiAn8J+HuPCfh6wg5paw5Yqg5Z2hJywKICAgICAgICAgICdKUCc6ICfwn4ev8J+HtSDml6XmnKwnLAogICAgICAgICAgJ0tSJzogJ/Cfh7Dwn4e3IOmfqeWbvScsCiAgICAgICAgICAnREUnOiAn8J+HqfCfh6og5b635Zu9JywKICAgICAgICAgICdTRSc6ICfwn4e48J+HqiDnkZ7lhbgnLAogICAgICAgICAgJ05MJzogJ/Cfh7Pwn4exIOiNt+WFsCcsCiAgICAgICAgICAnRkknOiAn8J+Hq/Cfh64g6Iqs5YWwJywKICAgICAgICAgICdHQic6ICfwn4es8J+HpyDoi7Hlm70nCiAgICAgICAgfSwKICAgICAgICBjdXN0b21JUE1vZGU6ICc=") + String(_v4('6Ieq5a6a5LmJUHJveHlJUOaooeW8jyAocOWPmOmHj+WQr+eUqCk=')) + _d64("AScsCiAgICAgICAgY3VzdG9tSVBNb2RlRGVzYzogJ+iHquWumuS5iUlQ5qih5byPICjlt7LnpoHnlKjlnLDljLrljLnphY0pJywKICAgICAgICBjdXN0b21QaXBMYWJlbDogJw==") + String(_v4('5L2/55So6Ieq5a6a5LmJUHJveHlJUDog')) + _d64("AScsCiAgICAgICAgY3VzdG9tSVBDb25maWc6ICcgKHDlj5jph4/phY3nva4pJywKICAgICAgICBjdXN0b21JUE1vZGVEaXNhYmxlZDogJ+iHquWumuS5iUlQ5qih5byP77yM5Zyw5Yy66YCJ5oup5bey56aB55SoJywKICAgICAgICBtYW51YWxSZWdpb246ICfmiYvliqjmjIflrprlnLDljLonLAogICAgICAgIG1hbnVhbFJlZ2lvbkRlc2M6ICcgKOaJi+WKqOaMh+WumiknLAogICAgICAgIHBpcEF2YWlsTGFiZWw6ICc=") + String(_v4('MTAvMTAg5Y+v55SoIChQcm94eUlQ5Z+f5ZCN6aKE6K6+5Y+v55SoKQ==')) + _d64("AScsCiAgICAgICAgc21hcnRTZWxlY3Rpb246ICfmmbrog73lsLHov5HpgInmi6nkuK0nLAogICAgICAgIHNhbWVSZWdpb25JUDogJ+WQjOWcsOWMuklQ5Y+v55SoICgx5LiqKScsCiAgICAgICAgY2xvdWRmbGFyZURldGVjdGlvbjogJ0Nsb3VkZmxhcmXlhoXnva7mo4DmtYsnLAogICAgICAgIGRldGVjdGlvbkZhaWxlZDogJ+ajgOa1i+Wksei0pScsCiAgICAgICAgdW5rbm93bjogJ+acquefpScKICAgICAgfSwKICAgICAgZmE6IHsKICAgICAgICB3b3JrZXJSZWdpb246ICfZhdmG2LfZgtmHIFdvcmtlcjogJywKICAgICAgICBkZXRlY3Rpb25NZXRob2Q6ICfYsdmI2LQg2KrYtNiu24zYtTogJywKICAgICAgICBwaXBTdGF0dXM6ICc=") + String(_v4('2YjYtti524zYqiBQcm94eUlQOiA=')) + "',\n        currentIP: 'IP فعلی: ',\n        regionMatch: 'تطبیق منطقه: ',\n        regionNames: {\n          'HK': '🇭🇰 هنگ کنگ',\n          'US': '🇺🇸 آمریکا',\n          'SG': '🇸🇬 سنگاپور',\n          'JP': '🇯🇵 ژاپن',\n          'KR': '🇰🇷 کره جنوبی',\n          'DE': '🇩🇪 آلمان',\n          'SE': '🇸🇪 سوئد',\n          'NL': '🇳🇱 هلند',\n          'FI': '🇫🇮 فنلاند',\n          'GB': '🇬🇧 بریتانیا'\n        },\n        customIPMode: '" + String(_v4('2K3Yp9mE2KogUHJveHlJUCDYs9mB2KfYsdi024wgKNmF2KrYutuM2LEgcCDZgdi52KfZhCDYp9iz2Kop')) + "',\n        customIPModeDesc: 'حالت IP سفارشی (تطبیق منطقه غیرفعال است)',\n        customPipLabel: '" + String(_v4('2KfYs9iq2YHYp9iv2Ycg2KfYsiBQcm94eUlQINiz2YHYp9ix2LTbjDog')) + "',\n        customIPConfig: ' (پیکربندی متغیر p)',\n        customIPModeDisabled: 'حالت IP سفارشی، انتخاب منطقه غیرفعال است',\n        manualRegion: 'تعیین منطقه دستی',\n        manualRegionDesc: ' (تعیین دستی)',\n        pipAvailLabel: '" + String(_v4('MTAvMTAg2K/YsSDYr9iz2KrYsdizICjYr9in2YXZhtmHINm+24zYtOKAjNmB2LHYtiBQcm94eUlQINiv2LEg2K/Ys9iq2LHYsyDYp9iz2Kop')) + _d64("AScsCiAgICAgICAgc21hcnRTZWxlY3Rpb246ICfYp9mG2KrYrtin2Kgg2YfZiNi02YXZhtivINmG2LLYr9uM2qkg2K/YsSDYrdin2YQg2KfZhtis2KfZhSDYp9iz2KonLAogICAgICAgIHNhbWVSZWdpb25JUDogJ0lQINmH2YXigIzZhdmG2LfZgtmHINiv2LEg2K/Ys9iq2LHYsyDYp9iz2KogKDEpJywKICAgICAgICBjbG91ZGZsYXJlRGV0ZWN0aW9uOiAn2KrYtNiu24zYtSDYr9in2K7ZhNuMIENsb3VkZmxhcmUnLAogICAgICAgIGRldGVjdGlvbkZhaWxlZDogJ9iq2LTYrtuM2LUg2YbYp9mF2YjZgdmCJywKICAgICAgICB1bmtub3duOiAn2YbYp9i02YbYp9iu2KrZhycKICAgICAgfQogICAgfTsKICAgIGNvbnN0IOe/u+ivkeWAvDIwMTcwID0g5pys5Zyw5YC8MjAxNzFb5piv5ZCm5YC8MjAxNzIgPyAnZmEnIDogJ3poJ107CiAgICBsZXQg5YC85Zyw5Yy6MjAxNjkgPSAnVVMnOyAvLyDpu5jorqTlgLwKICAgIGxldCDmmK/lkKboh6rlrprkuYnlnLDlnYDlgLwgPSBmYWxzZTsKICAgIGxldCDmmK/lkKbmiYvliqjlnLDljLrlgLwgPSBmYWxzZTsKICAgIHRyeSB7CiAgICAgIGNvbnN0IOWTjeW6lDIwMTY4ID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJy9yZWdpb24nKTsKICAgICAgY29uc3Qg5pWw5o2uMjAxNjcgPSBhd2FpdCDlk43lupQyMDE2OC5qc29uKCk7CiAgICAgIGlmICjmlbDmja4yMDE2Ny5yZWdpb24gPT09ICdDVVNUT00nKSB7CiAgICAgICAg5piv5ZCm6Ieq5a6a5LmJ5Zyw5Z2A5YC8ID0gdHJ1ZTsKICAgICAgICDlgLzlnLDljLoyMDE2OSA9ICdDVVNUT00nOwoKICAgICAgICAvLyDojrflj5boh6rlrprkuYlJUOeahOivpue7huS/oeaBrwogICAgICAgIGNvbnN0IOiHquWumuS5ieWcsOWdgOWAvCA9IOaVsOaNrjIwMTY3LmNpIHx8IOe/u+ivkeWAvDIwMTcwLnVua25vd247CiAgICAgICAg5YC85YC8MjAxNzkuaW5uZXJIVE1MID0g57+76K+R5YC8MjAxNzAuZGV0ZWN0aW9uTWV0aG9kICsgJzxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmYjQ1NDsiPuKame+4jyAnICsg57+76K+R5YC8MjAxNzAuY3VzdG9tSVBNb2RlICsgJzwvc3Bhbj4nOwogICAgICAgIOWcsOWMuueKtuaAgS5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE3MC53b3JrZXJSZWdpb24gKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjZmZiNDU0OyI+8J+UpyAnICsg57+76K+R5YC8MjAxNzAuY3VzdG9tSVBNb2RlRGVzYyArICc8L3NwYW4+JzsKCiAgICAgICAgLy8g5pi+56S66Ieq5a6a5LmJSVDphY3nva7nirbmgIHvvIzljIXlkKvlhbfkvZNJUAogICAgICAgIGlmICjlpIfnlKjnirbmgIEpIOWkh+eUqOeKtuaAgS5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE3MC5waXBTdGF0dXMgKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjZmZiNDU0OyI+8J+UpyAnICsg57+76K+R5YC8MjAxNzAuY3VzdG9tUGlwTGFiZWwgKyDoh6rlrprkuYnlnLDlnYDlgLwgKyAnPC9zcGFuPic7CiAgICAgICAgaWYgKOW9k+WJjeWcsOWdgCkg5b2T5YmN5Zyw5Z2ALmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTcwLmN1cnJlbnRJUCArICc8c3BhbiBzdHlsZT0iY29sb3I6ICNmZmI0NTQ7Ij7inIUgJyArIOiHquWumuS5ieWcsOWdgOWAvCArIOe/u+ivkeWAvDIwMTcwLmN1c3RvbUlQQ29uZmlnICsgJzwvc3Bhbj4nOwogICAgICAgIGlmICjlnLDljLrlgLwpIOWcsOWMuuWAvC5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE3MC5yZWdpb25NYXRjaCArICc8c3BhbiBzdHlsZT0iY29sb3I6ICNmZmI0NTQ7Ij7imqDvuI8gJyArIOe/u+ivkeWAvDIwMTcwLmN1c3RvbUlQTW9kZURpc2FibGVkICsgJzwvc3Bhbj4nOwogICAgICAgIHJldHVybjsgLy8g5o+Q5YmN6L+U5Zue77yM5LiN5omn6KGM5ZCO57ut55qE5Zyw5Yy65Yy56YWN6YC76L6RCiAgICAgIH0gZWxzZSBpZiAo5pWw5o2uMjAxNjcuZGV0ZWN0aW9uTWV0aG9kID09PSAn5omL5Yqo5oyH5a6a5Zyw5Yy6JyB8fCDmlbDmja4yMDE2Ny5kZXRlY3Rpb25NZXRob2QgPT09ICfYqti524zbjNmGINmF2YbYt9mC2Ycg2K/Ys9iq24wnKSB7CiAgICAgICAg5piv5ZCm5omL5Yqo5Zyw5Yy65YC8ID0gdHJ1ZTsKICAgICAgICDlgLzlnLDljLoyMDE2OSA9IOaVsOaNrjIwMTY3LnJlZ2lvbjsKICAgICAgICDlgLzlgLwyMDE3OS5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE3MC5kZXRlY3Rpb25NZXRob2QgKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjM2RkYzg0OyI+JyArIOe/u+ivkeWAvDIwMTcwLm1hbnVhbFJlZ2lvbiArICc8L3NwYW4+JzsKICAgICAgICDlnLDljLrnirbmgIEuaW5uZXJIVE1MID0g57+76K+R5YC8MjAxNzAud29ya2VyUmVnaW9uICsgJzxzcGFuIHN0eWxlPSJjb2xvcjogIzNkZGM4NDsiPvCfjq8gJyArIOe/u+ivkeWAvDIwMTcwLnJlZ2lvbk5hbWVzW+WAvOWcsOWMujIwMTY5XSArIOe/u+ivkeWAvDIwMTcwLm1hbnVhbFJlZ2lvbkRlc2MgKyAnPC9zcGFuPic7CgogICAgICAgIC8vIOaYvuekuumFjee9rueKtuaAgeiAjOS4jeaYr+ajgOa1i+eKtuaAgQogICAgICAgIGlmICjlpIfnlKjnirbmgIEpIOWkh+eUqOeKtuaAgS5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE3MC5waXBTdGF0dXMgKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjM2RkYzg0OyI+4pyFICcgKyDnv7vor5HlgLwyMDE3MC5waXBBdmFpbExhYmVsICsgJzwvc3Bhbj4nOwogICAgICAgIGlmICjlvZPliY3lnLDlnYApIOW9k+WJjeWcsOWdgC5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE3MC5jdXJyZW50SVAgKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjM2RkYzg0OyI+4pyFICcgKyDnv7vor5HlgLwyMDE3MC5zbWFydFNlbGVjdGlvbiArICc8L3NwYW4+JzsKICAgICAgICBpZiAo5Zyw5Yy65YC8KSDlnLDljLrlgLwuaW5uZXJIVE1MID0g57+76K+R5YC8MjAxNzAucmVnaW9uTWF0Y2ggKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjM2RkYzg0OyI+4pyFICcgKyDnv7vor5HlgLwyMDE3MC5zYW1lUmVnaW9uSVAgKyAnPC9zcGFuPic7CiAgICAgICAgcmV0dXJuOyAvLyDmj5DliY3ov5Tlm57vvIzkuI3miafooYzlkI7nu63nmoTlnLDljLrljLnphY3pgLvovpEKICAgICAgfSBlbHNlIGlmICjmlbDmja4yMDE2Ny5yZWdpb24gJiYg57+76K+R5YC8MjAxNzAucmVnaW9uTmFtZXNb5pWw5o2uMjAxNjcucmVnaW9uXSkgewogICAgICAgIOWAvOWcsOWMujIwMTY5ID0g5pWw5o2uMjAxNjcucmVnaW9uOwogICAgICB9CiAgICAgIOWAvOWAvDIwMTc5LmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTcwLmRldGVjdGlvbk1ldGhvZCArICc8c3BhbiBzdHlsZT0iY29sb3I6ICMzZGRjODQ7Ij4nICsg57+76K+R5YC8MjAxNzAuY2xvdWRmbGFyZURldGVjdGlvbiArICc8L3NwYW4+JzsKICAgIH0gY2F0Y2ggKOS6i+S7tuWAvDIwMTY2KSB7CiAgICAgIOWAvOWAvDIwMTc5LmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTcwLmRldGVjdGlvbk1ldGhvZCArICc8c3BhbiBzdHlsZT0iY29sb3I6ICNmZjVkNzM7Ij4nICsg57+76K+R5YC8MjAxNzAuZGV0ZWN0aW9uRmFpbGVkICsgJzwvc3Bhbj4nOwogICAgfQogICAg5Zyw5Yy654q25oCBLmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTcwLndvcmtlclJlZ2lvbiArICc8c3BhbiBzdHlsZT0iY29sb3I6ICMzZGRjODQ7Ij7inIUgJyArIOe/u+ivkeWAvDIwMTcwLnJlZ2lvbk5hbWVzW+WAvOWcsOWMujIwMTY5XSArICc8L3NwYW4+JzsKCiAgICAvLyDnm7TmjqXmmL7npLrphY3nva7nirbmgIHvvIzkuI3lho3ov5vooYzmo4DmtYsKICAgIGlmICjlpIfnlKjnirbmgIEpIHsKICAgICAg5aSH55So54q25oCBLmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTcwLnBpcFN0YXR1cyArICc8c3BhbiBzdHlsZT0iY29sb3I6ICMzZGRjODQ7Ij7inIUgJyArIOe/u+ivkeWAvDIwMTcwLnBpcEF2YWlsTGFiZWwgKyAnPC9zcGFuPic7CiAgICB9CiAgICBpZiAo5b2T5YmN5Zyw5Z2AKSB7CiAgICAgIOW9k+WJjeWcsOWdgC5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE3MC5jdXJyZW50SVAgKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjM2RkYzg0OyI+4pyFICcgKyDnv7vor5HlgLwyMDE3MC5zbWFydFNlbGVjdGlvbiArICc8L3NwYW4+JzsKICAgIH0KICAgIGlmICjlnLDljLrlgLwpIHsKICAgICAg5Zyw5Yy65YC8LmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTcwLnJlZ2lvbk1hdGNoICsgJzxzcGFuIHN0eWxlPSJjb2xvcjogIzNkZGM4NDsiPuKchSAnICsg57+76K+R5YC8MjAxNzAuc2FtZVJlZ2lvbklQICsgJzwvc3Bhbj4nOwogICAgfQogIH0gY2F0Y2ggKOmUmeivrzIwMTY1KSB7CiAgICBmdW5jdGlvbiDojrflj5blh63mja4yMDE2NCjlkI3np7AyMDE2MykgewogICAgICBjb25zdCDlgLwyMDE2MiA9ICc7ICcgKyBkb2N1bWVudC5jb29raWU7CiAgICAgIGNvbnN0IOmDqOWIhuWIl+ihqDIwMTYxID0g5YC8MjAxNjIuc3BsaXQoJzsgJyArIOWQjeensDIwMTYzICsgJz0nKTsKICAgICAgaWYgKOmDqOWIhuWIl+ihqDIwMTYxLmxlbmd0aCA9PT0gMikgcmV0dXJuIOmDqOWIhuWIl+ihqDIwMTYxLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTsKICAgICAgcmV0dXJuIG51bGw7CiAgICB9CiAgICBjb25zdCDmtY/op4jlmajor63oqIAyMDE2MCA9IG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8ICcnOwogICAgY29uc3Qg5bey5L+d5a2Y6K+t6KiAMjAxNTkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZmVycmVkTGFuZ3VhZ2UnKSB8fCDojrflj5blh63mja4yMDE2NCgncHJlZmVycmVkTGFuZ3VhZ2UnKTsKICAgIGxldCDmmK/lkKblgLwyMDE1OCA9IGZhbHNlOwogICAgaWYgKOW3suS/neWtmOivreiogDIwMTU5ID09PSAnZmEnIHx8IOW3suS/neWtmOivreiogDIwMTU5ID09PSAnZmEtSVInKSB7CiAgICAgIOaYr+WQpuWAvDIwMTU4ID0gdHJ1ZTsKICAgIH0gZWxzZSB7CiAgICAgIOaYr+WQpuWAvDIwMTU4ID0g5rWP6KeI5Zmo6K+t6KiAMjAxNjAuaW5jbHVkZXMoJ2ZhJykgfHwg5rWP6KeI5Zmo6K+t6KiAMjAxNjAuaW5jbHVkZXMoJ2ZhLUlSJyk7CiAgICB9CiAgICBjb25zdCDmnKzlnLDlgLwyMDE1NyA9IHsKICAgICAgemg6IHsKICAgICAgICB3b3JrZXJSZWdpb246ICdXb3JrZXLlnLDljLo6ICcsCiAgICAgICAgZGV0ZWN0aW9uTWV0aG9kOiAn5qOA5rWL5pa55byPOiAnLAogICAgICAgIHBpcFN0YXR1czogJw==") + String(_v4('UHJveHlJUOeKtuaAgTog')) + _d64("AScsCiAgICAgICAgY3VycmVudElQOiAn5b2T5YmN5L2/55SoSVA6ICcsCiAgICAgICAgcmVnaW9uTWF0Y2g6ICflnLDljLrljLnphY06ICcsCiAgICAgICAgZGV0ZWN0aW9uRmFpbGVkOiAn5qOA5rWL5aSx6LSlJwogICAgICB9LAogICAgICBmYTogewogICAgICAgIHdvcmtlclJlZ2lvbjogJ9mF2YbYt9mC2YcgV29ya2VyOiAnLAogICAgICAgIGRldGVjdGlvbk1ldGhvZDogJ9ix2YjYtCDYqti02K7bjNi1OiAnLAogICAgICAgIHBpcFN0YXR1czogJw==") + String(_v4('2YjYtti524zYqiBQcm94eUlQOiA=')) + _d64("AScsCiAgICAgICAgY3VycmVudElQOiAnSVAg2YHYudmE24w6ICcsCiAgICAgICAgcmVnaW9uTWF0Y2g6ICfYqti32KjbjNmCINmF2YbYt9mC2Yc6ICcsCiAgICAgICAgZGV0ZWN0aW9uRmFpbGVkOiAn2KrYtNiu24zYtSDZhtin2YXZiNmB2YInCiAgICAgIH0KICAgIH07CiAgICBjb25zdCDnv7vor5HlgLwyMDE1NiA9IOacrOWcsOWAvDIwMTU3W+aYr+WQpuWAvDIwMTU4ID8gJ2ZhJyA6ICd6aCddOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lvblN0YXR1cycpLmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTU2LndvcmtlclJlZ2lvbiArICc8c3BhbiBzdHlsZT0iY29sb3I6ICNmZjVkNzM7Ij7inYwgJyArIOe/u+ivkeWAvDIwMTU2LmRldGVjdGlvbkZhaWxlZCArICc8L3NwYW4+JzsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW9JbmZvJykuaW5uZXJIVE1MID0g57+76K+R5YC8MjAxNTYuZGV0ZWN0aW9uTWV0aG9kICsgJzxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmNWQ3MzsiPuKdjCAnICsg57+76K+R5YC8MjAxNTYuZGV0ZWN0aW9uRmFpbGVkICsgJzwvc3Bhbj4nOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2t1cFN0YXR1cycpLmlubmVySFRNTCA9IOe/u+ivkeWAvDIwMTU2LnBpcFN0YXR1cyArICc8c3BhbiBzdHlsZT0iY29sb3I6ICNmZjVkNzM7Ij7inYwgJyArIOe/u+ivkeWAvDIwMTU2LmRldGVjdGlvbkZhaWxlZCArICc8L3NwYW4+JzsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50SVAnKS5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE1Ni5jdXJyZW50SVAgKyAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjZmY1ZDczOyI+4p2MICcgKyDnv7vor5HlgLwyMDE1Ni5kZXRlY3Rpb25GYWlsZWQgKyAnPC9zcGFuPic7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaW9uTWF0Y2gnKS5pbm5lckhUTUwgPSDnv7vor5HlgLwyMDE1Ni5yZWdpb25NYXRjaCArICc8c3BhbiBzdHlsZT0iY29sb3I6ICNmZjVkNzM7Ij7inYwgJyArIOe/u+ivkeWAvDIwMTU2LmRldGVjdGlvbkZhaWxlZCArICc8L3NwYW4+JzsKICB9Cn0KYXN5bmMgZnVuY3Rpb24g5rWL6K+V5o6l5Y+jKCkgewogIHRyeSB7CiAgICBmdW5jdGlvbiDojrflj5blh63mja4yMDE1NSjlkI3np7AyMDE1NCkgewogICAgICBjb25zdCDlgLwyMDE1MyA9ICc7ICcgKyBkb2N1bWVudC5jb29raWU7CiAgICAgIGNvbnN0IOmDqOWIhuWIl+ihqDIwMTUyID0g5YC8MjAxNTMuc3BsaXQoJzsgJyArIOWQjeensDIwMTU0ICsgJz0nKTsKICAgICAgaWYgKOmDqOWIhuWIl+ihqDIwMTUyLmxlbmd0aCA9PT0gMikgcmV0dXJuIOmDqOWIhuWIl+ihqDIwMTUyLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTsKICAgICAgcmV0dXJuIG51bGw7CiAgICB9CiAgICBjb25zdCDmtY/op4jlmajor63oqIAyMDE1MSA9IG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8ICcnOwogICAgY29uc3Qg5bey5L+d5a2Y6K+t6KiAMjAxNTAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZmVycmVkTGFuZ3VhZ2UnKSB8fCDojrflj5blh63mja4yMDE1NSgncHJlZmVycmVkTGFuZ3VhZ2UnKTsKICAgIGxldCDmmK/lkKblgLwyMDE0OSA9IGZhbHNlOwogICAgaWYgKOW3suS/neWtmOivreiogDIwMTUwID09PSAnZmEnIHx8IOW3suS/neWtmOivreiogDIwMTUwID09PSAnZmEtSVInKSB7CiAgICAgIOaYr+WQpuWAvDIwMTQ5ID0gdHJ1ZTsKICAgIH0gZWxzZSB7CiAgICAgIOaYr+WQpuWAvDIwMTQ5ID0g5rWP6KeI5Zmo6K+t6KiAMjAxNTEuaW5jbHVkZXMoJ2ZhJykgfHwg5rWP6KeI5Zmo6K+t6KiAMjAxNTEuaW5jbHVkZXMoJ2ZhLUlSJyk7CiAgICB9CiAgICBjb25zdCDmnKzlnLDlgLwyMDE0OCA9IHsKICAgICAgemg6IHsKICAgICAgICBhcGlUZXN0UmVzdWx0OiAnQVBJ5qOA5rWL57uT5p6cOiAnLAogICAgICAgIGFwaVRlc3RUaW1lOiAn5qOA5rWL5pe26Ze0OiAnLAogICAgICAgIGFwaVRlc3RGYWlsZWQ6ICdBUEnmo4DmtYvlpLHotKU6ICcsCiAgICAgICAgdW5rbm93bkVycm9yOiAn5pyq55+l6ZSZ6K+vJywKICAgICAgICBhcGlUZXN0RXJyb3I6ICdBUEnmtYvor5XlpLHotKU6ICcKICAgICAgfSwKICAgICAgZmE6IHsKICAgICAgICBhcGlUZXN0UmVzdWx0OiAn2YbYqtuM2KzZhyDYqti02K7bjNi1IEFQSTogJywKICAgICAgICBhcGlUZXN0VGltZTogJ9iy2YXYp9mGINiq2LTYrtuM2LU6ICcsCiAgICAgICAgYXBpVGVzdEZhaWxlZDogJ9iq2LTYrtuM2LUgQVBJINmG2KfZhdmI2YHZgjogJywKICAgICAgICB1bmtub3duRXJyb3I6ICfYrti32KfbjCDZhtin2LTZhtin2K7YqtmHJywKICAgICAgICBhcGlUZXN0RXJyb3I6ICfYqtiz2KogQVBJINmG2KfZhdmI2YHZgjogJwogICAgICB9CiAgICB9OwogICAgY29uc3Qg57+76K+R5YC8MjAxNDcgPSDmnKzlnLDlgLwyMDE0OFvmmK/lkKblgLwyMDE0OSA/ICdmYScgOiAnemgnXTsKICAgIGNvbnN0IOWTjeW6lDIwMTQ2ID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJy90ZXN0LWFwaScpOwogICAgY29uc3Qg5pWw5o2uMjAxNDUgPSBhd2FpdCDlk43lupQyMDE0Ni5qc29uKCk7CiAgICBpZiAo5pWw5o2uMjAxNDUuZGV0ZWN0ZWRSZWdpb24pIHsKICAgICAg5pi+56S65o+Q56S6KOe/u+ivkeWAvDIwMTQ3LmFwaVRlc3RSZXN1bHQgKyDmlbDmja4yMDE0NS5kZXRlY3RlZFJlZ2lvbiArICdcbicgKyDnv7vor5HlgLwyMDE0Ny5hcGlUZXN0VGltZSArIOaVsOaNrjIwMTQ1LnRpbWVzdGFtcCwgJ2luZm8nLCB7CiAgICAgICAgZHVyYXRpb246IDUwMDAKICAgICAgfSk7CiAgICB9IGVsc2UgewogICAgICDmmL7npLrmj5DnpLoo57+76K+R5YC8MjAxNDcuYXBpVGVzdEZhaWxlZCArICjmlbDmja4yMDE0NS5lcnJvciB8fCDnv7vor5HlgLwyMDE0Ny51bmtub3duRXJyb3IpLCAnZXJyb3InLCB7CiAgICAgICAgZHVyYXRpb246IDQ1MDAKICAgICAgfSk7CiAgICB9CiAgfSBjYXRjaCAo6ZSZ6K+vMjAxNDQpIHsKICAgIGZ1bmN0aW9uIOiOt+WPluWHreaNrjIwMTQzKOWQjeensDIwMTQyKSB7CiAgICAgIGNvbnN0IOWAvDIwMTQxID0gJzsgJyArIGRvY3VtZW50LmNvb2tpZTsKICAgICAgY29uc3Qg6YOo5YiG5YiX6KGoMjAxNDAgPSDlgLwyMDE0MS5zcGxpdCgnOyAnICsg5ZCN56ewMjAxNDIgKyAnPScpOwogICAgICBpZiAo6YOo5YiG5YiX6KGoMjAxNDAubGVuZ3RoID09PSAyKSByZXR1cm4g6YOo5YiG5YiX6KGoMjAxNDAucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0KICAgIGNvbnN0IOa1j+iniOWZqOivreiogDIwMTM5ID0gbmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgJyc7CiAgICBjb25zdCDlt7Lkv53lrZjor63oqIAyMDEzOCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmZXJyZWRMYW5ndWFnZScpIHx8IOiOt+WPluWHreaNrjIwMTQzKCdwcmVmZXJyZWRMYW5ndWFnZScpOwogICAgbGV0IOaYr+WQpuWAvDIwMTM3ID0gZmFsc2U7CiAgICBpZiAo5bey5L+d5a2Y6K+t6KiAMjAxMzggPT09ICdmYScgfHwg5bey5L+d5a2Y6K+t6KiAMjAxMzggPT09ICdmYS1JUicpIHsKICAgICAg5piv5ZCm5YC8MjAxMzcgPSB0cnVlOwogICAgfSBlbHNlIHsKICAgICAg5piv5ZCm5YC8MjAxMzcgPSDmtY/op4jlmajor63oqIAyMDEzOS5pbmNsdWRlcygnZmEnKSB8fCDmtY/op4jlmajor63oqIAyMDEzOS5pbmNsdWRlcygnZmEtSVInKTsKICAgIH0KICAgIGNvbnN0IOacrOWcsOWAvDIwMTM2ID0gewogICAgICB6aDogewogICAgICAgIGFwaVRlc3RFcnJvcjogJ0FQSea1i+ivleWksei0pTogJwogICAgICB9LAogICAgICBmYTogewogICAgICAgIGFwaVRlc3RFcnJvcjogJ9iq2LPYqiBBUEkg2YbYp9mF2YjZgdmCOiAnCiAgICAgIH0KICAgIH07CiAgICBjb25zdCDnv7vor5HlgLwyMDEzNSA9IOacrOWcsOWAvDIwMTM2W+aYr+WQpuWAvDIwMTM3ID8gJ2ZhJyA6ICd6aCddOwogICAg5pi+56S65o+Q56S6KOe/u+ivkeWAvDIwMTM1LmFwaVRlc3RFcnJvciArIOmUmeivrzIwMTQ0Lm1lc3NhZ2UsICdlcnJvcicsIHsKICAgICAgZHVyYXRpb246IDQ1MDAKICAgIH0pOwogIH0KfQoKLy8g6YWN572u566h55CG55u45YWz5Ye95pWwCmFzeW5jIGZ1bmN0aW9uIOajgOafpemUruWAvOeKtuaAgSgpIHsKICBjb25zdCDmjqXlj6PnvZHlnYAyMDEzNCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcvYXBpL2NvbmZpZyc7CiAgdHJ5IHsKICAgIGNvbnN0IOWTjeW6lDIwMTMzID0gYXdhaXQgZmV0Y2go5o6l5Y+j572R5Z2AMjAxMzQpOwogICAgZnVuY3Rpb24g6I635Y+W5Yet5o2uMjAxMzIo5ZCN56ewMjAxMzEpIHsKICAgICAgY29uc3Qg5YC8MjAxMzAgPSAnOyAnICsgZG9jdW1lbnQuY29va2llOwogICAgICBjb25zdCDpg6jliIbliJfooagyMDEyOSA9IOWAvDIwMTMwLnNwbGl0KCc7ICcgKyDlkI3np7AyMDEzMSArICc9Jyk7CiAgICAgIGlmICjpg6jliIbliJfooagyMDEyOS5sZW5ndGggPT09IDIpIHJldHVybiDpg6jliIbliJfooagyMDEyOS5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7CiAgICAgIHJldHVybiBudWxsOwogICAgfQogICAgY29uc3Qg5rWP6KeI5Zmo6K+t6KiAMjAxMjggPSBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCAnJzsKICAgIGNvbnN0IOW3suS/neWtmOivreiogDIwMTI3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWZlcnJlZExhbmd1YWdlJykgfHwg6I635Y+W5Yet5o2uMjAxMzIoJ3ByZWZlcnJlZExhbmd1YWdlJyk7CiAgICBsZXQg5piv5ZCm5YC8MjAxMjYgPSBmYWxzZTsKICAgIGlmICjlt7Lkv53lrZjor63oqIAyMDEyNyA9PT0gJ2ZhJyB8fCDlt7Lkv53lrZjor63oqIAyMDEyNyA9PT0gJ2ZhLUlSJykgewogICAgICDmmK/lkKblgLwyMDEyNiA9IHRydWU7CiAgICB9IGVsc2UgewogICAgICDmmK/lkKblgLwyMDEyNiA9IOa1j+iniOWZqOivreiogDIwMTI4LmluY2x1ZGVzKCdmYScpIHx8IOa1j+iniOWZqOivreiogDIwMTI4LmluY2x1ZGVzKCdmYS1JUicpOwogICAgfQogICAgY29uc3Qg5pys5Zyw5YC8MjAxMjUgPSB7CiAgICAgIHpoOiB7CiAgICAgICAga3ZEaXNhYmxlZDogJ+KaoO+4jyBLVuWtmOWCqOacquWQr+eUqOaIluacqumFjee9ricsCiAgICAgICAga3ZOb3RDb25maWd1cmVkOiAnS1blrZjlgqjmnKrphY3nva7vvIzml6Dms5Xkvb/nlKjphY3nva7nrqHnkIblip/og73jgIJcblxu6K+35ZyoQ2xvdWRmbGFyZSBXb3JrZXJz5LitOlxuMS4g5Yib5bu6S1blkb3lkI3nqbrpl7RcbjIuIOe7keWumueOr+Wig+WPmOmHjyBDXG4zLiDph43mlrDpg6jnvbLku6PnoIEnLAogICAgICAgIGt2Tm90RW5hYmxlZDogJ0tW5a2Y5YKo5pyq6YWN572uJywKICAgICAgICBrdkVuYWJsZWQ6ICfinIUgS1blrZjlgqjlt7LlkK/nlKjvvIzlj6/ku6Xkvb/nlKjphY3nva7nrqHnkIblip/og70nLAogICAgICAgIGt2Q2hlY2tGYWlsZWQ6ICfimqDvuI8gS1blrZjlgqjmo4DmtYvlpLHotKUnLAogICAgICAgIGt2Q2hlY2tGYWlsZWRGb3JtYXQ6ICdLVuWtmOWCqOajgOa1i+Wksei0pTog5ZON5bqU5qC85byP6ZSZ6K+vJywKICAgICAgICBrdkNoZWNrRmFpbGVkU3RhdHVzOiAnS1blrZjlgqjmo4DmtYvlpLHotKUgLSDnirbmgIHnoIE6ICcsCiAgICAgICAga3ZDaGVja0ZhaWxlZEVycm9yOiAnS1blrZjlgqjmo4DmtYvlpLHotKUgLSDplJnor686ICcKICAgICAgfSwKICAgICAgZmE6IHsKICAgICAgICBrdkRpc2FibGVkOiAn4pqg77iPINiw2K7bjNix2YfigIzYs9in2LLbjCBLViDZgdi52KfZhCDZhtuM2LPYqiDbjNinINm+24zaqdix2KjZhtiv24wg2YbYtNiv2Ycg2KfYs9iqJywKICAgICAgICBrdk5vdENvbmZpZ3VyZWQ6ICfYsNiu24zYsdmH4oCM2LPYp9iy24wgS1Yg2b7bjNqp2LHYqNmG2K/bjCDZhti02K/ZhyDYp9iz2KrYjCDZhtmF24zigIzYqtmI2KfZhtuM2K8g2KfYsiDYudmF2YTaqdix2K8g2YXYr9uM2LHbjNiqINiq2YbYuNuM2YXYp9iqINin2LPYqtmB2KfYr9mHINqp2YbbjNivLlxuXG7ZhNi32YHYpyDYr9ixIENsb3VkZmxhcmUgV29ya2VyczpcbjEuINmB2LbYp9uMINmG2KfZhSBLViDYp9uM2KzYp9ivINqp2YbbjNivXG4yLiDZhdiq2LrbjNixINmF2K3bjNi324wgQyDYsdinINm+24zZiNmG2K8g2K/Zh9uM2K9cbjMuINqp2K8g2LHYpyDYr9mI2KjYp9ix2Ycg2YXYs9iq2YLYsSDaqdmG24zYrycsCiAgICAgICAga3ZOb3RFbmFibGVkOiAn2LDYrtuM2LHZh+KAjNiz2KfYstuMIEtWINm+24zaqdix2KjZhtiv24wg2YbYtNiv2Ycg2KfYs9iqJywKICAgICAgICBrdkVuYWJsZWQ6ICfinIUg2LDYrtuM2LHZh+KAjNiz2KfYstuMIEtWINmB2LnYp9mEINin2LPYqtiMINmF24zigIzYqtmI2KfZhtuM2K8g2KfYsiDZhdiv24zYsduM2Kog2KrZhti424zZhdin2Kog2KfYs9iq2YHYp9iv2Ycg2qnZhtuM2K8nLAogICAgICAgIGt2Q2hlY2tGYWlsZWQ6ICfimqDvuI8g2KjYsdix2LPbjCDYsNiu24zYsdmH4oCM2LPYp9iy24wgS1Yg2YbYp9mF2YjZgdmCJywKICAgICAgICBrdkNoZWNrRmFpbGVkRm9ybWF0OiAn2KjYsdix2LPbjCDYsNiu24zYsdmH4oCM2LPYp9iy24wgS1Yg2YbYp9mF2YjZgdmCOiDYrti32KfbjCDZgdix2YXYqiDZvtin2LPYricsCiAgICAgICAga3ZDaGVja0ZhaWxlZFN0YXR1czogJ9io2LHYsdiz24wg2LDYrtuM2LHZh+KAjNiz2KfYstuMIEtWINmG2KfZhdmI2YHZgiAtINqp2K8g2YjYtti524zYqjogJywKICAgICAgICBrdkNoZWNrRmFpbGVkRXJyb3I6ICfYqNix2LHYs9uMINiw2K7bjNix2YfigIzYs9in2LLbjCBLViDZhtin2YXZiNmB2YIgLSDYrti32Kc6ICcKICAgICAgfQogICAgfTsKICAgIGNvbnN0IOe/u+ivkeWAvDIwMTI0ID0g5pys5Zyw5YC8MjAxMjVb5piv5ZCm5YC8MjAxMjYgPyAnZmEnIDogJ3poJ107CiAgICBpZiAo5ZON5bqUMjAxMzMuc3RhdHVzID09PSA1MDMpIHsKICAgICAgLy8gS1bmnKrphY3nva4KICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t2U3RhdHVzJykuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmYjQ1NDsiPicgKyDnv7vor5HlgLwyMDEyNC5rdkRpc2FibGVkICsgJzwvc3Bhbj4nOwogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnQ2FyZCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOwogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmZpZycpLnRleHRDb250ZW50ID0g57+76K+R5YC8MjAxMjQua3ZOb3RDb25maWd1cmVkOwogICAgfSBlbHNlIGlmICjlk43lupQyMDEzMy5vaykgewogICAgICB0cnkgewogICAgICAgIGNvbnN0IOaVsOaNrjIwMTIzID0gYXdhaXQg5ZON5bqUMjAxMzMuanNvbigpOwoKICAgICAgICAvLyDmo4Dmn6Xlk43lupTmmK/lkKbljIXlkKtLVumFjee9ruS/oeaBrwogICAgICAgIGlmICjmlbDmja4yMDEyMyAmJiDmlbDmja4yMDEyMy5rdkVuYWJsZWQgPT09IHRydWUpIHsKICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdlN0YXR1cycpLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT0iY29sb3I6ICMzZGRjODQ7Ij4nICsg57+76K+R5YC8MjAxMjQua3ZFbmFibGVkICsgJzwvc3Bhbj4nOwogICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0NvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsKICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdDYXJkJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7CiAgICAgICAgICBhd2FpdCDliqDovb3lvZPliY3phY3nva4oKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t2U3RhdHVzJykuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmYjQ1NDsiPicgKyDnv7vor5HlgLwyMDEyNC5rdkRpc2FibGVkICsgJzwvc3Bhbj4nOwogICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0NhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsKICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Q29uZmlnJykudGV4dENvbnRlbnQgPSDnv7vor5HlgLwyMDEyNC5rdk5vdEVuYWJsZWQ7CiAgICAgICAgfQogICAgICB9IGNhdGNoICjmlbDmja7lr7nosaHplJnor68pIHsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3ZTdGF0dXMnKS5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9ImNvbG9yOiAjZmZiNDU0OyI+JyArIOe/u+ivkeWAvDIwMTI0Lmt2Q2hlY2tGYWlsZWQgKyAnPC9zcGFuPic7CiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ0NhcmQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmZpZycpLnRleHRDb250ZW50ID0g57+76K+R5YC8MjAxMjQua3ZDaGVja0ZhaWxlZEZvcm1hdDsKICAgICAgfQogICAgfSBlbHNlIHsKICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t2U3RhdHVzJykuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmYjQ1NDsiPicgKyDnv7vor5HlgLwyMDEyNC5rdkRpc2FibGVkICsgJzwvc3Bhbj4nOwogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnQ2FyZCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOwogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmZpZycpLnRleHRDb250ZW50ID0g57+76K+R5YC8MjAxMjQua3ZDaGVja0ZhaWxlZFN0YXR1cyArIOWTjeW6lDIwMTMzLnN0YXR1czsKICAgIH0KICB9IGNhdGNoICjplJnor68yMDEyMikgewogICAgZnVuY3Rpb24g6I635Y+W5Yet5o2uKOWQjeensCkgewogICAgICBjb25zdCDlgLwyMDEyMSA9ICc7ICcgKyBkb2N1bWVudC5jb29raWU7CiAgICAgIGNvbnN0IOmDqOWIhuWIl+ihqDIwMTIwID0g5YC8MjAxMjEuc3BsaXQoJzsgJyArIOWQjeensCArICc9Jyk7CiAgICAgIGlmICjpg6jliIbliJfooagyMDEyMC5sZW5ndGggPT09IDIpIHJldHVybiDpg6jliIbliJfooagyMDEyMC5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7CiAgICAgIHJldHVybiBudWxsOwogICAgfQogICAgY29uc3Qg5rWP6KeI5Zmo6K+t6KiAID0gbmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgJyc7CiAgICBjb25zdCDlt7Lkv53lrZjor63oqIAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZmVycmVkTGFuZ3VhZ2UnKSB8fCDojrflj5blh63mja4oJ3ByZWZlcnJlZExhbmd1YWdlJyk7CiAgICBsZXQg5piv5ZCm5YC8ID0gZmFsc2U7CiAgICBpZiAo5bey5L+d5a2Y6K+t6KiAID09PSAnZmEnIHx8IOW3suS/neWtmOivreiogCA9PT0gJ2ZhLUlSJykgewogICAgICDmmK/lkKblgLwgPSB0cnVlOwogICAgfSBlbHNlIHsKICAgICAg5piv5ZCm5YC8ID0g5rWP6KeI5Zmo6K+t6KiALmluY2x1ZGVzKCdmYScpIHx8IOa1j+iniOWZqOivreiogC5pbmNsdWRlcygnZmEtSVInKTsKICAgIH0KICAgIGNvbnN0IOacrOWcsOWAvDIwMTE5ID0gewogICAgICB6aDogewogICAgICAgIGt2RGlzYWJsZWQ6ICfimqDvuI8gS1blrZjlgqjmnKrlkK/nlKjmiJbmnKrphY3nva4nLAogICAgICAgIGt2Q2hlY2tGYWlsZWRFcnJvcjogJ0tW5a2Y5YKo5qOA5rWL5aSx6LSlIC0g6ZSZ6K+vOiAnCiAgICAgIH0sCiAgICAgIGZhOiB7CiAgICAgICAga3ZEaXNhYmxlZDogJ+KaoO+4jyDYsNiu24zYsdmH4oCM2LPYp9iy24wgS1Yg2YHYudin2YQg2YbbjNiz2Kog24zYpyDZvtuM2qnYsdio2YbYr9uMINmG2LTYr9mHINin2LPYqicsCiAgICAgICAga3ZDaGVja0ZhaWxlZEVycm9yOiAn2KjYsdix2LPbjCDYsNiu24zYsdmH4oCM2LPYp9iy24wgS1Yg2YbYp9mF2YjZgdmCIC0g2K7Yt9inOiAnCiAgICAgIH0KICAgIH07CiAgICBjb25zdCDnv7vor5HlgLwyMDExOCA9IOacrOWcsOWAvDIwMTE5W+aYr+WQpuWAvCA/ICdmYScgOiAnemgnXTsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdlN0YXR1cycpLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT0iY29sb3I6ICNmZmI0NTQ7Ij4nICsg57+76K+R5YC8MjAxMTgua3ZEaXNhYmxlZCArICc8L3NwYW4+JzsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdDYXJkJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmZpZycpLnRleHRDb250ZW50ID0g57+76K+R5YC8MjAxMTgua3ZDaGVja0ZhaWxlZEVycm9yICsg6ZSZ6K+vMjAxMjIubWVzc2FnZTsKICB9Cn0KZnVuY3Rpb24g6K+75Y+W5a2X5q615YC8KOagh+ivhikgewogIGNvbnN0IOWFg+e0oCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKOagh+ivhik7CiAgcmV0dXJuIOWFg+e0oCA/IOWFg+e0oC52YWx1ZSA6ICcnOwp9CgpmdW5jdGlvbiDlhpnlhaXlrZfmrrXlgLwo5qCH6K+GLCDlgLwgPSAnJykgewogIGNvbnN0IOWFg+e0oCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKOagh+ivhik7CiAgaWYgKOWFg+e0oCkg5YWD57SgLnZhbHVlID0g5YC8IHx8ICcnOwp9CgpmdW5jdGlvbiDmmK/lkKblvIDlhbPlkK/nlKgo5YC8LCDpu5jorqTlkK/nlKggPSBmYWxzZSkgewogIGlmICjlgLwgPT09IHVuZGVmaW5lZCB8fCDlgLwgPT09IG51bGwgfHwg5YC8ID09PSAnJykgcmV0dXJuIOm7mOiupOWQr+eUqDsKICBpZiAo5YC8ID09PSB0cnVlIHx8IOWAvCA9PT0gZmFsc2UpIHJldHVybiDlgLw7CiAgY29uc3Qg5paH5pysID0gU3RyaW5nKOWAvCkudHJpbSgpLnRvTG93ZXJDYXNlKCk7CiAgaWYgKOaWh+acrCA9PT0gJ3llcycgfHwg5paH5pysID09PSAndHJ1ZScgfHwg5paH5pysID09PSAnMScgfHwg5paH5pysID09PSAnb24nKSByZXR1cm4gdHJ1ZTsKICBpZiAo5paH5pysID09PSAnbm8nIHx8IOaWh+acrCA9PT0gJ2ZhbHNlJyB8fCDmlofmnKwgPT09ICcwJyB8fCDmlofmnKwgPT09ICdvZmYnKSByZXR1cm4gZmFsc2U7CiAgcmV0dXJuIOm7mOiupOWQr+eUqDsKfQoKZnVuY3Rpb24g5YaZ5YWl5byA5YWz5YC8KOagh+ivhiwg5YC8LCDpu5jorqTlkK/nlKggPSBmYWxzZSkgewogIGNvbnN0IOWFg+e0oCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKOagh+ivhik7CiAgaWYgKOWFg+e0oCkg5YWD57SgLmNoZWNrZWQgPSDmmK/lkKblvIDlhbPlkK/nlKgo5YC8LCDpu5jorqTlkK/nlKgpOwp9CgpmdW5jdGlvbiDor7vlj5blvIDlhbPlgLwo5qCH6K+GLCDpu5jorqTlkK/nlKggPSBmYWxzZSkgewogIGNvbnN0IOWFg+e0oCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKOagh+ivhik7CiAgaWYgKCHlhYPntKApIHJldHVybiDpu5jorqTlkK/nlKggPyAneWVzJyA6ICdubyc7CiAgcmV0dXJuIOWFg+e0oC5jaGVja2VkID8gJ3llcycgOiAnbm8nOwp9CgpmdW5jdGlvbiDlkIzmraXljY/orq7nlYzpnaLnirbmgIEoKSB7CiAgY29uc3Qg5piO5paH5byA5YWzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2Jyk7CiAgY29uc3Qg5pyo6ams5byA5YWzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V0Jyk7CiAgY29uc3Qg5omp5bGV5byA5YWzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4Jyk7CiAgaWYgKOaYjuaWh+W8gOWFsyAmJiDmnKjpqazlvIDlhbMgJiYg5omp5bGV5byA5YWzICYmICHmmI7mloflvIDlhbMuY2hlY2tlZCAmJiAh5pyo6ams5byA5YWzLmNoZWNrZWQgJiYgIeaJqeWxleW8gOWFsy5jaGVja2VkKSB7CiAgICDmmI7mloflvIDlhbMuY2hlY2tlZCA9IHRydWU7CiAgfQp9CgpmdW5jdGlvbiDlkIzmraXogZTliqjnlYzpnaLnirbmgIEoKSB7CiAg5ZCM5q2l5Y2P6K6u55WM6Z2i54q25oCBKCk7CiAgY29uc3Qg5Yqg5a+G5a6i5oi356uv6Zeu5YCZ5aSN6YCJ5qGGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VjaCcpOwogIGNvbnN0IOerr+WPo+aOp+WItiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Q29udHJvbCcpOwogIGlmICjliqDlr4blrqLmiLfnq6/pl67lgJnlpI3pgInmoYYgJiYg56uv5Y+j5o6n5Yi2ICYmIOWKoOWvhuWuouaIt+err+mXruWAmeWkjemAieahhi5jaGVja2VkKSB7CiAgICDnq6/lj6PmjqfliLYudmFsdWUgPSAneWVzJzsKICB9CiAg5pu05paw6Lev5b6E57G75Z6L54q25oCBKOivu+WPluWtl+auteWAvCgnY3VzdG9tUGF0aCcpKTsKICDmm7TmlrDlt6XkvZzlmajlnLDljLrnirbmgIEoKTsKfQoKZnVuY3Rpb24g5bqU55So6YWN572u5Yiw55WM6Z2iKOmFjee9rikgewogIOWGmeWFpeWtl+auteWAvCgnd2tSZWdpb24nLCDphY3nva4ud2spOwogIOWGmeWFpeW8gOWFs+WAvCgnZXYnLCDphY3nva4uZXYsIHRydWUpOwogIOWGmeWFpeW8gOWFs+WAvCgnZXQnLCDphY3nva4uZXQsIGZhbHNlKTsKICDlhpnlhaXlvIDlhbPlgLwoJ2V4Jywg6YWN572uLmV4LCBmYWxzZSk7CiAg5YaZ5YWl5byA5YWz5YC8KCdlY2gnLCDphY3nva4uZWNoLCBmYWxzZSk7CiAg5YaZ5YWl5a2X5q615YC8KCd0cCcsIOmFjee9ri50cCk7CiAg5YaZ5YWl5a2X5q615YC8KCdjdXN0b21ETlMnLCDphY3nva4uY3VzdG9tRE5TKTsKICDlhpnlhaXlrZfmrrXlgLwoJ2N1c3RvbUVDSERvbWFpbicsIOmFjee9ri5jdXN0b21FQ0hEb21haW4pOwogIOWGmeWFpeWtl+auteWAvCgnYWxwbicsIOmFjee9ri5hbHBuKTsKICDlhpnlhaXlrZfmrrXlgLwoJ3NjdScsIOmFjee9ri5zY3UpOwogIOWGmeWFpeW8gOWFs+WAvCgnZW5hJywg6YWN572uLmVuYSwgZmFsc2UpOwogIOWGmeWFpeW8gOWFs+WAvCgnZXBkJywg6YWN572uLmVwZCwgdHJ1ZSk7CiAg5YaZ5YWl5byA5YWz5YC8KCdlcGknLCDphY3nva4uZXBpLCB0cnVlKTsKICDlhpnlhaXlvIDlhbPlgLwoJ2VnaScsIOmFjee9ri5lZ2ksIHRydWUpOwogIOWGmeWFpeW8gOWFs+WAvCgnaXB2NEVuYWJsZWQnLCDphY3nva4uaXB2NCwgdHJ1ZSk7CiAg5YaZ5YWl5byA5YWz5YC8KCdpcHY2RW5hYmxlZCcsIOmFjee9ri5pcHY2LCB0cnVlKTsKICDlhpnlhaXlvIDlhbPlgLwoJ2lzcE1vYmlsZScsIOmFjee9ri5pc3BNb2JpbGUsIHRydWUpOwogIOWGmeWFpeW8gOWFs+WAvCgnaXNwVW5pY29tJywg6YWN572uLmlzcFVuaWNvbSwgdHJ1ZSk7CiAg5YaZ5YWl5byA5YWz5YC8KCdpc3BUZWxlY29tJywg6YWN572uLmlzcFRlbGVjb20sIHRydWUpOwogIOWGmeWFpeWtl+auteWAvCgnY3VzdG9tUGF0aCcsIOmFjee9ri5kKTsKICDlhpnlhaXlrZfmrrXlgLwoJ2N1c3RvbUlQJywg6YWN572uLnApOwogIOWGmeWFpeWtl+auteWAvCgneXgnLCDphY3nva4ueXgpOwogIOWGmeWFpeWtl+auteWAvCgneXhVUkwnLCDphY3nva4ueXhVUkwpOwogIOWGmeWFpeWtl+auteWAvCgnc29ja3NDb25maWcnLCDphY3nva4ucyk7CiAg5YaZ5YWl5a2X5q615YC8KCdjdXN0b21Ib21lcGFnZScsIOmFjee9ri5ob21lcGFnZSk7CiAg5YaZ5YWl5a2X5q615YC8KCdhcGlFbmFibGVkJywg6YWN572uLmFlKTsKICDlhpnlhaXlrZfmrrXlgLwoJ3JlZ2lvbk1hdGNoaW5nJywg6YWN572uLnJtKTsKICDlhpnlhaXlrZfmrrXlgLwoJ2Rvd25ncmFkZUNvbnRyb2wnLCDphY3nva4ucWopOwogIOWGmeWFpeWtl+auteWAvCgncG9ydENvbnRyb2wnLCDphY3nva4uZGtieSk7CiAg5YaZ5YWl5a2X5q615YC8KCdwcmVmZXJyZWRDb250cm9sJywg6YWN572uLnl4YnkpOwogIOWGmeWFpeWtl+auteWAvCgndXBkVmVyVXJsJywg6YWN572uLnVwZFZlclVybCk7CiAg5YaZ5YWl5a2X5q615YC8KCd1cGRTcmNVcmwnLCDphY3nva4udXBkU3JjVXJsKTsKICDlhpnlhaXlrZfmrrXlgLwoJ2NmVG9rZW4nLCDphY3nva4uY2ZUb2tlbik7CiAg5YaZ5YWl5a2X5q615YC8KCdjZkFjY291bnRJZCcsIOmFjee9ri5jZkFjY291bnRJZCk7CiAg5YaZ5YWl5a2X5q615YC8KCdjZlNjcmlwdE5hbWUnLCDphY3nva4uY2ZTY3JpcHROYW1lKTsKICDlkIzmraXogZTliqjnlYzpnaLnirbmgIEoKTsKfQoKZnVuY3Rpb24g5pS26ZuG55WM6Z2i6YWN572uKCkgewogIGNvbnN0IOmFjee9riA9IHsKICAgIHdrOiDor7vlj5blrZfmrrXlgLwoJ3drUmVnaW9uJyksCiAgICBldjog6K+75Y+W5byA5YWz5YC8KCdldicsIHRydWUpLAogICAgZXQ6IOivu+WPluW8gOWFs+WAvCgnZXQnLCBmYWxzZSksCiAgICBleDog6K+75Y+W5byA5YWz5YC8KCdleCcsIGZhbHNlKSwKICAgIGVjaDog6K+75Y+W5byA5YWz5YC8KCdlY2gnLCBmYWxzZSksCiAgICB0cDog6K+75Y+W5a2X5q615YC8KCd0cCcpLAogICAgY3VzdG9tRE5TOiDor7vlj5blrZfmrrXlgLwoJ2N1c3RvbUROUycpLAogICAgY3VzdG9tRUNIRG9tYWluOiDor7vlj5blrZfmrrXlgLwoJ2N1c3RvbUVDSERvbWFpbicpLAogICAgYWxwbjog6K+75Y+W5a2X5q615YC8KCdhbHBuJyksCiAgICBkOiDor7vlj5blrZfmrrXlgLwoJ2N1c3RvbVBhdGgnKSwKICAgIHA6IOivu+WPluWtl+auteWAvCgnY3VzdG9tSVAnKSwKICAgIHl4OiDor7vlj5blrZfmrrXlgLwoJ3l4JyksCiAgICB5eFVSTDog6K+75Y+W5a2X5q615YC8KCd5eFVSTCcpLAogICAgczog6K+75Y+W5a2X5q615YC8KCdzb2Nrc0NvbmZpZycpLAogICAgaG9tZXBhZ2U6IOivu+WPluWtl+auteWAvCgnY3VzdG9tSG9tZXBhZ2UnKSwKICAgIHNjdTog6K+75Y+W5a2X5q615YC8KCdzY3UnKSwKICAgIGVuYTog6K+75Y+W5byA5YWz5YC8KCdlbmEnLCBmYWxzZSksCiAgICBlcGQ6IOivu+WPluW8gOWFs+WAvCgnZXBkJywgdHJ1ZSksCiAgICBlcGk6IOivu+WPluW8gOWFs+WAvCgnZXBpJywgdHJ1ZSksCiAgICBlZ2k6IOivu+WPluW8gOWFs+WAvCgnZWdpJywgdHJ1ZSksCiAgICBhZTog6K+75Y+W5a2X5q615YC8KCdhcGlFbmFibGVkJyksCiAgICBybTog6K+75Y+W5a2X5q615YC8KCdyZWdpb25NYXRjaGluZycpLAogICAgcWo6IOivu+WPluWtl+auteWAvCgnZG93bmdyYWRlQ29udHJvbCcpLAogICAgZGtieTog6K+75Y+W5a2X5q615YC8KCdwb3J0Q29udHJvbCcpLAogICAgeXhieTog6K+75Y+W5a2X5q615YC8KCdwcmVmZXJyZWRDb250cm9sJyksCiAgICBpcHY0OiDor7vlj5blvIDlhbPlgLwoJ2lwdjRFbmFibGVkJywgdHJ1ZSksCiAgICBpcHY2OiDor7vlj5blvIDlhbPlgLwoJ2lwdjZFbmFibGVkJywgdHJ1ZSksCiAgICBpc3BNb2JpbGU6IOivu+WPluW8gOWFs+WAvCgnaXNwTW9iaWxlJywgdHJ1ZSksCiAgICBpc3BVbmljb206IOivu+WPluW8gOWFs+WAvCgnaXNwVW5pY29tJywgdHJ1ZSksCiAgICBpc3BUZWxlY29tOiDor7vlj5blvIDlhbPlgLwoJ2lzcFRlbGVjb20nLCB0cnVlKSwKICAgIHVwZFZlclVybDog6K+75Y+W5a2X5q615YC8KCd1cGRWZXJVcmwnKSwKICAgIHVwZFNyY1VybDog6K+75Y+W5a2X5q615YC8KCd1cGRTcmNVcmwnKSwKICAgIGNmVG9rZW46IOivu+WPluWtl+auteWAvCgnY2ZUb2tlbicpLAogICAgY2ZBY2NvdW50SWQ6IOivu+WPluWtl+auteWAvCgnY2ZBY2NvdW50SWQnKSwKICAgIGNmU2NyaXB0TmFtZTog6K+75Y+W5a2X5q615YC8KCdjZlNjcmlwdE5hbWUnKQogIH07CiAgaWYgKOmFjee9ri5ldiA9PT0gJ25vJyAmJiDphY3nva4uZXQgPT09ICdubycgJiYg6YWN572uLmV4ID09PSAnbm8nKSB7CiAgICDphY3nva4uZXYgPSAneWVzJzsKICAgIOWGmeWFpeW8gOWFs+WAvCgnZXYnLCAneWVzJywgdHJ1ZSk7CiAgfQogIGlmICjphY3nva4uZWNoID09PSAneWVzJykgewogICAg6YWN572uLmRrYnkgPSAneWVzJzsKICAgIOWGmeWFpeWtl+auteWAvCgncG9ydENvbnRyb2wnLCAneWVzJyk7CiAgfQogIHJldHVybiDphY3nva47Cn0KCmFzeW5jIGZ1bmN0aW9uIOWKoOi9veW9k+WJjemFjee9rigpIHsKICBjb25zdCDmjqXlj6PnvZHlnYAyMDExNyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcvYXBpL2NvbmZpZyc7CiAgdHJ5IHsKICAgIGNvbnN0IOWTjeW6lDIwMTE2ID0gYXdhaXQgZmV0Y2go5o6l5Y+j572R5Z2AMjAxMTcpOwogICAgaWYgKOWTjeW6lDIwMTE2LnN0YXR1cyA9PT0gNTAzKSB7CiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Q29uZmlnJykudGV4dENvbnRlbnQgPSAnS1blrZjlgqjmnKrphY3nva7vvIzml6Dms5XliqDovb3phY3nva4nOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoIeWTjeW6lDIwMTE2Lm9rKSB7CiAgICAgIGNvbnN0IOmUmeivr+aWh+acrDIwMTE1ID0gYXdhaXQg5ZON5bqUMjAxMTYudGV4dCgpOwogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmZpZycpLnRleHRDb250ZW50ID0gJ+WKoOi9vemFjee9ruWksei0pTogJyArIOmUmeivr+aWh+acrDIwMTE1OwogICAgICByZXR1cm47CiAgICB9CiAgICBjb25zdCDphY3nva4gPSBhd2FpdCDlk43lupQyMDExNi5qc29uKCk7CgogICAgLy8g6L+H5ruk5o6J5YaF6YOo5a2X5q61IGt2RW5hYmxlZAogICAgY29uc3Qg5pi+56S66YWN572uID0ge307CiAgICBmb3IgKGNvbnN0IFvplK4yMDExNCwg5YC8MjAxMTNdIG9mIE9iamVjdC5lbnRyaWVzKOmFjee9rikpIHsKICAgICAgaWYgKOmUrjIwMTE0ICE9PSAna3ZFbmFibGVkJykgewogICAgICAgIOaYvuekuumFjee9rlvplK4yMDExNF0gPSDlgLwyMDExMzsKICAgICAgfQogICAgfQogICAgbGV0IOmFjee9ruaWh+acrCA9ICflvZPliY3phY3nva46XG4nOwogICAgaWYgKE9iamVjdC5rZXlzKOaYvuekuumFjee9rikubGVuZ3RoID09PSAwKSB7CiAgICAgIOmFjee9ruaWh+acrCArPSAnKOaaguaXoOmFjee9riknOwogICAgfSBlbHNlIHsKICAgICAgZm9yIChjb25zdCBb6ZSuLCDlgLwyMDExMl0gb2YgT2JqZWN0LmVudHJpZXMo5pi+56S66YWN572uKSkgewogICAgICAgIOmFjee9ruaWh+acrCArPSDplK4gKyAnOiAnICsgKOWAvDIwMTEyIHx8ICco5pyq6K6+572uKScpICsgJ1xuJzsKICAgICAgfQogICAgfQogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25maWcnKS50ZXh0Q29udGVudCA9IOmFjee9ruaWh+acrDsKCiAgICDlupTnlKjphY3nva7liLDnlYzpnaIo6YWN572uKTsKICB9IGNhdGNoICjplJnor68yMDExMSkgewogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25maWcnKS50ZXh0Q29udGVudCA9ICfliqDovb3phY3nva7lpLHotKU6ICcgKyDplJnor68yMDExMS5tZXNzYWdlOwogIH0KfQoKLy8g5pu05paw6Lev5b6E57G75Z6L5pi+56S6CmZ1bmN0aW9uIOabtOaWsOi3r+W+hOexu+Wei+eKtuaAgSjoh6rlrprkuYnot6/lvoQpIHsKICBjb25zdCDot6/lvoTnsbvlnovnirbmgIEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF0aFR5cGVTdGF0dXMnKTsKICBjb25zdCDlvZPliY3nvZHlnYAyMDExMCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmOwogIGNvbnN0IOi3r+W+hOmDqOWIhuWIl+ihqCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLmZpbHRlcijlj4LmlbDlgLwyMDEwOSA9PiDlj4LmlbDlgLwyMDEwOSk7CiAgY29uc3Qg5b2T5YmN6Lev5b6EID0g6Lev5b6E6YOo5YiG5YiX6KGoLmxlbmd0aCA+IDAgPyDot6/lvoTpg6jliIbliJfooahbMF0gOiAnJzsKICBpZiAo6Ieq5a6a5LmJ6Lev5b6EICYmIOiHquWumuS5iei3r+W+hC50cmltKCkpIHsKICAgIC8vIOS9v+eUqOiHquWumuS5iei3r+W+hCAoZCkKICAgIOi3r+W+hOexu+Wei+eKtuaAgS5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT0iY29sb3I6ICMzZGRjODQ7Ij7kvb/nlKjnsbvlnos6IDxzdHJvbmc+6Ieq5a6a5LmJ6Lev5b6EIChkKTwvc3Ryb25nPjwvZGl2PicgKyAnPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDogNXB4OyBjb2xvcjogI2M4ZjEzNTsiPuW9k+WJjei3r+W+hDogPHNwYW4gc3R5bGU9ImNvbG9yOiAjZmZiNDU0OyI+JyArIOiHquWumuS5iei3r+W+hCArICc8L3NwYW4+PC9kaXY+JyArICc8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiA1cHg7IGZvbnQtc2l6ZTogMC45cmVtOyBjb2xvcjogIzlhYTZiODsiPuiuv+mXruWcsOWdgDogJyArICjlvZPliY3nvZHlnYAyMDExMC5zcGxpdCgnLycpWzBdICsgJy8vJyArIOW9k+WJjee9keWdgDIwMTEwLnNwbGl0KCcvJylbMl0pICsg6Ieq5a6a5LmJ6Lev5b6EICsgJy9zdWI8L2Rpdj4nOwogIH0gZWxzZSB7CiAgICAvLyDkvb/nlKggVVVJRCAodSkKICAgIOi3r+W+hOexu+Wei+eKtuaAgS5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT0iY29sb3I6ICMzZGRjODQ7Ij7kvb/nlKjnsbvlnos6IDxzdHJvbmc+VVVJRCDot6/lvoQgKHUpPC9zdHJvbmc+PC9kaXY+JyArICc8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiA1cHg7IGNvbG9yOiAjYzhmMTM1OyI+5b2T5YmN6Lev5b6EOiA8c3BhbiBzdHlsZT0iY29sb3I6ICNmZmI0NTQ7Ij4nICsgKOW9k+WJjei3r+W+hCB8fCAnKFVVSUQpJykgKyAnPC9zcGFuPjwvZGl2PicgKyAnPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDogNXB4OyBmb250LXNpemU6IDAuOXJlbTsgY29sb3I6ICM5YWE2Yjg7Ij7orr/pl67lnLDlnYA6ICcgKyDlvZPliY3nvZHlnYAyMDExMC5zcGxpdCgnL3N1YicpWzBdICsgJy9zdWI8L2Rpdj4nOwogIH0KfQoKLy8g5pu05pawd2vlnLDljLrpgInmi6nnmoTlkK/nlKgv56aB55So54q25oCBCmZ1bmN0aW9uIOabtOaWsOW3peS9nOWZqOWcsOWMuueKtuaAgSgpIHsKICBjb25zdCDoh6rlrprkuYnlnLDlnYDovpPlhaUyMDEwOCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21JUCcpOwogIGNvbnN0IOWAvOWcsOWMuiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3a1JlZ2lvbicpOwogIGNvbnN0IOWAvOWcsOWMuuWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3a1JlZ2lvbkhpbnQnKTsKICBpZiAo6Ieq5a6a5LmJ5Zyw5Z2A6L6T5YWlMjAxMDggJiYg5YC85Zyw5Yy6KSB7CiAgICBjb25zdCDmmK/lkKbmnInoh6rlrprkuYnlnLDlnYAgPSDoh6rlrprkuYnlnLDlnYDovpPlhaUyMDEwOC52YWx1ZS50cmltKCkgIT09ICcnOwogICAg5YC85Zyw5Yy6LmRpc2FibGVkID0g5piv5ZCm5pyJ6Ieq5a6a5LmJ5Zyw5Z2AOwoKICAgIC8vIOa3u+WKoOinhuinieWPjemmiAogICAgaWYgKOaYr+WQpuacieiHquWumuS5ieWcsOWdgCkgewogICAgICDlgLzlnLDljLouc3R5bGUub3BhY2l0eSA9ICcwLjUnOwogICAgICDlgLzlnLDljLouc3R5bGUuY3Vyc29yID0gJ25vdC1hbGxvd2VkJzsKICAgICAg5YC85Zyw5Yy6LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknOwogICAgICAvLyDmmL7npLrmj5DnpLrkv6Hmga8KICAgICAgaWYgKOWAvOWcsOWMuuWAvCkgewogICAgICAgIOWAvOWcsOWMuuWAvC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsKICAgICAgICDlgLzlnLDljLrlgLwuc3R5bGUuY29sb3IgPSAnI2ZmYjQ1NCc7CiAgICAgIH0KICAgIH0gZWxzZSB7CiAgICAgIOWAvOWcsOWMui5zdHlsZS5vcGFjaXR5ID0gJzEnOwogICAgICDlgLzlnLDljLouc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInOwogICAgICDlgLzlnLDljLouc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC44KSc7CiAgICAgIC8vIOmakOiXj+aPkOekuuS/oeaBrwogICAgICBpZiAo5YC85Zyw5Yy65YC8KSB7CiAgICAgICAg5YC85Zyw5Yy65YC8LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAgICAgIH0KICAgIH0KICB9Cn0KYXN5bmMgZnVuY3Rpb24g5L+d5a2Y6YWN572uKOmFjee9ruaVsOaNrjIwMTA3KSB7CiAgY29uc3Qg5o6l5Y+j572R5Z2AID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJy9hcGkvY29uZmlnJzsKICB0cnkgewogICAgY29uc3Qg5ZON5bqUMjAxMDYgPSBhd2FpdCBmZXRjaCjmjqXlj6PnvZHlnYAsIHsKICAgICAgbWV0aG9kOiAnUE9TVCcsCiAgICAgIGhlYWRlcnM6IHsKICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nCiAgICAgIH0sCiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KOmFjee9ruaVsOaNrjIwMTA3KQogICAgfSk7CiAgICBpZiAo5ZON5bqUMjAxMDYuc3RhdHVzID09PSA1MDMpIHsKICAgICAg5pi+56S654q25oCBKCdLVuWtmOWCqOacqumFjee9ru+8jOaXoOazleS/neWtmOmFjee9ruOAguivt+WFiOWcqENsb3VkZmxhcmUgV29ya2Vyc+S4remFjee9rktW5a2Y5YKo44CCJywgJ2Vycm9yJyk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGlmICgh5ZON5bqUMjAxMDYub2spIHsKICAgICAgY29uc3Qg6ZSZ6K+v5paH5pysMjAxMDUgPSBhd2FpdCDlk43lupQyMDEwNi50ZXh0KCk7CgogICAgICAvLyDlsJ3or5Xop6PmnpAgSlNPTiDplJnor6/kv6Hmga8KICAgICAgdHJ5IHsKICAgICAgICBjb25zdCDplJnor6/mlbDmja4yMDEwNCA9IEpTT04ucGFyc2Uo6ZSZ6K+v5paH5pysMjAxMDUpOwogICAgICAgIOaYvuekuueKtuaAgSjplJnor6/mlbDmja4yMDEwNC5tZXNzYWdlIHx8ICfkv53lrZjlpLHotKUnLCAnZXJyb3InKTsKICAgICAgfSBjYXRjaCAo6Kej5p6Q6ZSZ6K+vMjAxMDMpIHsKICAgICAgICAvLyDlpoLmnpzkuI3mmK8gSlNPTu+8jOebtOaOpeaYvuekuuaWh+acrAogICAgICAgIOaYvuekuueKtuaAgSgn5L+d5a2Y5aSx6LSlOiAnICsg6ZSZ6K+v5paH5pysMjAxMDUsICdlcnJvcicpOwogICAgICB9CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IOe7k+aenDIwMTAyID0gYXdhaXQg5ZON5bqUMjAxMDYuanNvbigpOwogICAg5pi+56S654q25oCBKOe7k+aenDIwMTAyLm1lc3NhZ2UsIOe7k+aenDIwMTAyLnN1Y2Nlc3MgPyAnc3VjY2VzcycgOiAnZXJyb3InKTsKICAgIGlmICjnu5PmnpwyMDEwMi5zdWNjZXNzKSB7CiAgICAgIGF3YWl0IOWKoOi9veW9k+WJjemFjee9rigpOwogICAgICAvLyDmm7TmlrB3a+WcsOWMuumAieaLqeeKtuaAgQogICAgICDmm7TmlrDlt6XkvZzlmajlnLDljLrnirbmgIEoKTsKICAgICAgLy8g5L+d5a2Y5oiQ5Yqf5ZCO5Yi35paw6aG16Z2i5Lul5pu05paw57O757uf54q25oCBCiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsKICAgICAgfSwgMTUwMCk7CiAgICB9IGVsc2Uge30KICB9IGNhdGNoICjplJnor68yMDEwMSkgewogICAg5pi+56S654q25oCBKCfkv53lrZjlpLHotKU6ICcgKyDplJnor68yMDEwMS5tZXNzYWdlLCAnZXJyb3InKTsKICB9Cn0KZnVuY3Rpb24g5pi+56S654q25oCBKOa2iOaBrzIwMTAwLCDnsbvlnosyMDA5OSkgewogIGNvbnN0IOeKtuaAgeWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNNZXNzYWdlJyk7CiAgaWYgKOeKtuaAgeWAvCkgewogICAg54q25oCB5YC8LnRleHRDb250ZW50ID0g5raI5oGvMjAxMDA7CiAgICDnirbmgIHlgLwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7CiAgICDnirbmgIHlgLwuc3R5bGUuY29sb3IgPSDnsbvlnosyMDA5OSA9PT0gJ3N1Y2Nlc3MnID8gJyNjOGYxMzUnIDogJyNmZjVkNzMnOwogICAg54q25oCB5YC8LnN0eWxlLmJvcmRlckNvbG9yID0g57G75Z6LMjAwOTkgPT09ICdzdWNjZXNzJyA/ICcjYzhmMTM1JyA6ICcjZmY1ZDczJzsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgICDnirbmgIHlgLwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsKICAgIH0sIDMwMDApOwogIH0KICAvLyDlkIzmraXlnKjlupXpg6jmk43kvZzmnaHkuIrmlrnlvLnlh7rpnJPombnlj43ppogKICBpZiAodHlwZW9mIHdpbmRvdy7mmL7npLrmk43kvZznirbmgIEgPT09ICdmdW5jdGlvbicpIHsKICAgIHdpbmRvdy7mmL7npLrmk43kvZznirbmgIEo5raI5oGvMjAxMDAsIOexu+WeizIwMDk5ID09PSAnc3VjY2VzcycgPyAnb2snIDogJ2VycicpOwogIH0KfQphc3luYyBmdW5jdGlvbiDph43nva7lhajpg6jphY3nva4oKSB7CiAgaWYgKGNvbmZpcm0oJ+ehruWumuimgemHjee9ruaJgOaciemFjee9ruWQl++8n+i/meWwhua4heepuuaJgOaciUtW6YWN572u77yM5oGi5aSN5Li6546v5aKD5Y+Y6YeP6K6+572u44CCJykpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IOWTjeW6lDIwMDk4ID0gYXdhaXQgZmV0Y2god2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJy9hcGkvY29uZmlnJywgewogICAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICAgIGhlYWRlcnM6IHsKICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicKICAgICAgICB9LAogICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsKICAgICAgICAgIHdrOiAnJywKICAgICAgICAgIGQ6ICcnLAogICAgICAgICAgcDogJycsCiAgICAgICAgICB5eDogJycsCiAgICAgICAgICB5eFVSTDogJycsCiAgICAgICAgICBzOiAnJywKICAgICAgICAgIGFlOiAnJywKICAgICAgICAgIHJtOiAnJywKICAgICAgICAgIHFqOiAnJywKICAgICAgICAgIGRrYnk6ICcnLAogICAgICAgICAgeXhieTogJycsCiAgICAgICAgICBldjogJycsCiAgICAgICAgICBldDogJycsCiAgICAgICAgICBleDogJycsCiAgICAgICAgICBlY2g6ICcnLAogICAgICAgICAgdHA6ICcnLAogICAgICAgICAgY3VzdG9tRE5TOiAnJywKICAgICAgICAgIGN1c3RvbUVDSERvbWFpbjogJycsCiAgICAgICAgICBzY3U6ICcnLAogICAgICAgICAgZXBkOiAnJywKICAgICAgICAgIGVwaTogJycsCiAgICAgICAgICBlZ2k6ICcnLAogICAgICAgICAgaXB2NDogJycsCiAgICAgICAgICBpcHY2OiAnJywKICAgICAgICAgIGlzcE1vYmlsZTogJycsCiAgICAgICAgICBpc3BVbmljb206ICcnLAogICAgICAgICAgaXNwVGVsZWNvbTogJycsCiAgICAgICAgICBob21lcGFnZTogJycsCiAgICAgICAgICBhbHBuOiAnJwogICAgICAgIH0pCiAgICAgIH0pOwogICAgICBpZiAo5ZON5bqUMjAwOTguc3RhdHVzID09PSA1MDMpIHsKICAgICAgICDmmL7npLrnirbmgIEoJ0tW5a2Y5YKo5pyq6YWN572u77yM5peg5rOV6YeN572u6YWN572u44CCJywgJ2Vycm9yJyk7CiAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICAgIGlmICgh5ZON5bqUMjAwOTgub2spIHsKICAgICAgICBjb25zdCDplJnor6/mlofmnKwgPSBhd2FpdCDlk43lupQyMDA5OC50ZXh0KCk7CgogICAgICAgIC8vIOWwneivleino+aekCBKU09OIOmUmeivr+S/oeaBrwogICAgICAgIHRyeSB7CiAgICAgICAgICBjb25zdCDplJnor6/mlbDmja4gPSBKU09OLnBhcnNlKOmUmeivr+aWh+acrCk7CiAgICAgICAgICDmmL7npLrnirbmgIEo6ZSZ6K+v5pWw5o2uLm1lc3NhZ2UgfHwgJ+mHjee9ruWksei0pScsICdlcnJvcicpOwogICAgICAgIH0gY2F0Y2ggKOino+aekOmUmeivrykgewogICAgICAgICAgLy8g5aaC5p6c5LiN5pivIEpTT07vvIznm7TmjqXmmL7npLrmlofmnKwKICAgICAgICAgIOaYvuekuueKtuaAgSgn6YeN572u5aSx6LSlOiAnICsg6ZSZ6K+v5paH5pysLCAnZXJyb3InKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICAgIGNvbnN0IOe7k+aenDIwMDk3ID0gYXdhaXQg5ZON5bqUMjAwOTguanNvbigpOwogICAgICDmmL7npLrnirbmgIEo57uT5p6cMjAwOTcubWVzc2FnZSB8fCAn6YWN572u5bey6YeN572uJywg57uT5p6cMjAwOTcuc3VjY2VzcyA/ICdzdWNjZXNzJyA6ICdlcnJvcicpOwogICAgICBpZiAo57uT5p6cMjAwOTcuc3VjY2VzcykgewogICAgICAgIGF3YWl0IOWKoOi9veW9k+WJjemFjee9rigpOwogICAgICAgIC8vIOabtOaWsHdr5Zyw5Yy66YCJ5oup54q25oCBCiAgICAgICAg5pu05paw5bel5L2c5Zmo5Zyw5Yy654q25oCBKCk7CiAgICAgICAgLy8g5Yi35paw6aG16Z2i5Lul5pu05paw57O757uf54q25oCBCiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7CiAgICAgICAgfSwgMTUwMCk7CiAgICAgIH0KICAgIH0gY2F0Y2ggKOmUmeivrzIwMDk2KSB7CiAgICAgIOaYvuekuueKtuaAgSgn6YeN572u5aSx6LSlOiAnICsg6ZSZ6K+vMjAwOTYubWVzc2FnZSwgJ2Vycm9yJyk7CiAgICB9CiAgfQp9CgovKiAtLS0tIHNlbGYtdXBkYXRlOiBzYXZlIHNldHRpbmdzIC8gY2hlY2sgZm9yIHVwZGF0ZSAvIHB1bGwgJiBhcHBseSB1cGRhdGUgLS0tLSAqLwpmdW5jdGlvbiDmmL7npLrmm7TmlrDnirbmgIEo5raI5oGvLCDnsbvlnospIHsKICBjb25zdCDlhYPntKAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkU3RhdHVzJyk7CiAgaWYgKCHlhYPntKApIHJldHVybjsKICDlhYPntKAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7CiAg5YWD57SgLnRleHRDb250ZW50ID0g5raI5oGvOwogIOWFg+e0oC5zdHlsZS5jb2xvciA9IOexu+WeiyA9PT0gJ2Vycm9yJyA/ICcjZmY1ZDczJyA6ICjnsbvlnosgPT09ICdvaycgPyAnIzNkZGM4NCcgOiAnI2M4ZjEzNScpOwogIOWFg+e0oC5zdHlsZS5ib3JkZXJDb2xvciA9IOWFg+e0oC5zdHlsZS5jb2xvcjsKfQoKYXN5bmMgZnVuY3Rpb24g5L+d5a2Y5pu05paw6K6+572uKCkgewogIHRyeSB7CiAgICBjb25zdCDlk43lupQgPSBhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL2FwaS9jb25maWcnLCB7CiAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwKICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoewogICAgICAgIHVwZFZlclVybDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZFZlclVybCcpLnZhbHVlLnRyaW0oKSwKICAgICAgICB1cGRTcmNVcmw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRTcmNVcmwnKS52YWx1ZS50cmltKCksCiAgICAgICAgY2ZUb2tlbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NmVG9rZW4nKS52YWx1ZS50cmltKCksCiAgICAgICAgY2ZBY2NvdW50SWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZkFjY291bnRJZCcpLnZhbHVlLnRyaW0oKSwKICAgICAgICBjZlNjcmlwdE5hbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZlNjcmlwdE5hbWUnKS52YWx1ZS50cmltKCkKICAgICAgfSkKICAgIH0pOwogICAgY29uc3Qg57uT5p6cID0gYXdhaXQg5ZON5bqULmpzb24oKS5jYXRjaCgoKSA9PiAoe30pKTsKICAgIOaYvuekuuabtOaWsOeKtuaAgSjnu5PmnpwubWVzc2FnZSB8fCAo5ZON5bqULm9rID8gJ9iq2YbYuNuM2YXYp9iqINiw2K7bjNix2Ycg2LTYrycgOiAn2LDYrtuM2LHZhyDZhtin2YXZiNmB2YIg2KjZiNivJyksIOWTjeW6lC5vayA/ICdvaycgOiAnZXJyb3InKTsKICB9IGNhdGNoICjYrti32KcpIHsKICAgIOaYvuekuuabtOaWsOeKtuaAgSgn2LDYrtuM2LHZhyDZhtin2YXZiNmB2YI6ICcgKyDYrti32KcubWVzc2FnZSwgJ2Vycm9yJyk7CiAgfQp9Cgphc3luYyBmdW5jdGlvbiDYqNix2LHYs9uMX9io2Ydf2LHZiNiy2LHYs9in2YbbjCgpIHsKICDmmL7npLrmm7TmlrDnirbmgIEoJ9iv2LEg2K3Yp9mEINio2LHYsdiz24wg2YbYs9iu2Ycg2KzYr9uM2K/igKYnLCAnaW5mbycpOwogIHRyeSB7CiAgICBjb25zdCDlk43lupQgPSBhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnL2FwaS91cGRhdGUnKTsKICAgIGNvbnN0INmG2KrbjNis2YcgPSBhd2FpdCDlk43lupQuanNvbigpOwogICAgY29uc3Qg2KjYsdqG2LPYqCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRMYXRlc3RMYWJlbCcpOwogICAgY29uc3Qg2K/aqdmF2YfYp9i52YXYp9mEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZEFwcGx5QnRuJyk7CiAgICBpZiAo2YbYqtuM2KzZhy5lcnJvcikgewogICAgICDmmL7npLrmm7TmlrDnirbmgIEo2YbYqtuM2KzZhy5lcnJvciwgJ2Vycm9yJyk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGlmICjYqNix2obYs9ioKSDYqNix2obYs9ioLnRleHRDb250ZW50ID0gJ9ii2K7YsduM2YYg2YbYs9iu2Yc6ICcgKyAo2YbYqtuM2KzZhy5sYXRlc3QgfHwgJ+KAlCcpOwogICAgaWYgKNmG2KrbjNis2YcuaGFzVXBkYXRlKSB7CiAgICAgIOaYvuekuuabtOaWsOeKtuaAgSgn2YbYs9iu2Ycg2KzYr9uM2K8g2YXZiNis2YjYryDYp9iz2Ko6ICcgKyDZhtiq24zYrNmHLmxhdGVzdCwgJ29rJyk7CiAgICAgIGlmICjYr9qp2YXZh9in2LnZhdin2YQpINiv2qnZhdmH2KfYudmF2KfZhC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7CiAgICB9IGVsc2UgewogICAgICDmmL7npLrmm7TmlrDnirbmgIEoJ9m+2YbZhCDYtNmF2Kcg2KjZh+KAjNix2YjYsiDYp9iz2KogKNmG2LPYrtmHICcgKyDZhtiq24zYrNmHLmN1cnJlbnQgKyAnKScsICdpbmZvJyk7CiAgICAgIGlmICjYr9qp2YXZh9in2LnZhdin2YQpINiv2qnZhdmH2KfYudmF2KfZhC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwogICAgfQogIH0gY2F0Y2ggKNiu2LfYpykgewogICAg5pi+56S65pu05paw54q25oCBKCfYqNix2LHYs9uMINmG2LPYrtmHINmG2KfZhdmI2YHZgjogJyArINiu2LfYpy5tZXNzYWdlLCAnZXJyb3InKTsKICB9Cn0KCmFzeW5jIGZ1bmN0aW9uINin2LnZhdin2YRf2KjZh1/YsdmI2LLYsdiz2KfZhtuMKCkgewogIGlmICghY29uZmlybSgn2KLbjNinINmF2LfZhdim2YbbjNifINqp2K8g2YHYudmE24wg2YjYsdqp2LEg2KjYpyDZhtiz2K7ZhyDYrNiv24zYryDYrNin24zar9iy24zZhiDZhduM4oCM2LTZiNivLicpKSByZXR1cm47CiAg5pi+56S65pu05paw54q25oCBKCfYr9ixINit2KfZhCDYr9ix24zYp9mB2Kog2Ygg2KfYudmF2KfZhCDYqNmH4oCM2LHZiNiy2LHYs9in2YbbjOKApiDahtmG2K8g2KvYp9mG24zZhyDYtdio2LEg2qnZhicsICdpbmZvJyk7CiAgdHJ5IHsKICAgIGNvbnN0IOWTjeW6lCA9IGF3YWl0IGZldGNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcvYXBpL3VwZGF0ZScsIHsgbWV0aG9kOiAnUE9TVCcgfSk7CiAgICBjb25zdCDnu5PmnpwgPSBhd2FpdCDlk43lupQuanNvbigpOwogICAg5pi+56S65pu05paw54q25oCBKOe7k+aenC5tZXNzYWdlLCDnu5Pmnpwuc3VjY2VzcyA/ICdvaycgOiAnZXJyb3InKTsKICAgIGlmICjnu5Pmnpwuc3VjY2VzcykgewogICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyB9LCAyMDAwKTsKICAgIH0KICB9IGNhdGNoICjYrti32KcpIHsKICAgIOaYvuekuuabtOaWsOeKtuaAgSgn2KjZh+KAjNix2YjYstix2LPYp9mG24wg2YbYp9mF2YjZgdmCOiAnICsg2K7Yt9inLm1lc3NhZ2UsICdlcnJvcicpOwogIH0KfQoKYXN5bmMgZnVuY3Rpb24g5qOA5p+l5Yqg5a+G6Zeu5YCZ54q25oCBKCkgewogIGNvbnN0IOWKoOWvhuWuouaIt+err+mXruWAmeeKtuaAgeWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlY2hTdGF0dXMnKTsKICBpZiAoIeWKoOWvhuWuouaIt+err+mXruWAmeeKtuaAgeWAvCkgcmV0dXJuOwogIHRyeSB7CiAgICBjb25zdCDlvZPliY3nvZHlnYAgPSB3aW5kb3cubG9jYXRpb24uaHJlZjsKICAgIGNvbnN0IOiuoumYhee9keWdgCA9IOW9k+WJjee9keWdgCArICcvc3ViJzsKICAgIOWKoOWvhuWuouaIt+err+mXruWAmeeKtuaAgeWAvC5pbm5lckhUTUwgPSAnRUNI54q25oCBOiA8c3BhbiBzdHlsZT0iY29sb3I6ICNmZmI0NTQ7Ij7mo4DmtYvkuK0uLi48L3NwYW4+JzsKICAgIGNvbnN0IOWTjeW6lDIwMDk1ID0gYXdhaXQgZmV0Y2go6K6i6ZiF572R5Z2ALCB7CiAgICAgIG1ldGhvZDogJ0dFVCcsCiAgICAgIGhlYWRlcnM6IHsKICAgICAgICAnQWNjZXB0JzogJ3RleHQvcGxhaW4nCiAgICAgIH0KICAgIH0pOwogICAgY29uc3Qg5Yqg5a+G5a6i5oi356uv6Zeu5YCZ54q25oCB5aS06YOoID0g5ZON5bqUMjAwOTUuaGVhZGVycy5nZXQoJ1gtRUNILVN0YXR1cycpOwogICAgY29uc3Qg5Yqg5a+G5a6i5oi356uv6Zeu5YCZ6YWN572u6ZW/5bqmID0g5ZON5bqUMjAwOTUuaGVhZGVycy5nZXQoJ1gtRUNILUNvbmZpZy1MZW5ndGgnKTsKICAgIGlmICjliqDlr4blrqLmiLfnq6/pl67lgJnnirbmgIHlpLTpg6ggPT09ICdFTkFCTEVEJykgewogICAgICDliqDlr4blrqLmiLfnq6/pl67lgJnnirbmgIHlgLwuaW5uZXJIVE1MID0gJ0VDSOeKtuaAgTogPHNwYW4gc3R5bGU9ImNvbG9yOiAjM2RkYzg0OyI+4pyFIOW3suWQr+eUqCcgKyAo5Yqg5a+G5a6i5oi356uv6Zeu5YCZ6YWN572u6ZW/5bqmID8gJyAo6YWN572u6ZW/5bqmOiAnICsg5Yqg5a+G5a6i5oi356uv6Zeu5YCZ6YWN572u6ZW/5bqmICsgJyknIDogJycpICsgJzwvc3Bhbj4nOwogICAgfSBlbHNlIHsKICAgICAg5Yqg5a+G5a6i5oi356uv6Zeu5YCZ54q25oCB5YC8LmlubmVySFRNTCA9ICdFQ0jnirbmgIE6IDxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmYjQ1NDsiPuKaoO+4jyDmnKrlkK/nlKg8L3NwYW4+JzsKICAgIH0KICB9IGNhdGNoICjplJnor68yMDA5NCkgewogICAg5Yqg5a+G5a6i5oi356uv6Zeu5YCZ54q25oCB5YC8LmlubmVySFRNTCA9ICdFQ0jnirbmgIE6IDxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmNWQ3MzsiPuKdjCDmo4DmtYvlpLHotKU6ICcgKyDplJnor68yMDA5NC5tZXNzYWdlICsgJzwvc3Bhbj4nOwogIH0KfQpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkgewogIOWIm+W7uuefqemYtembqCgpOwogIOajgOafpeezu+e7n+eKtuaAgSgpOwogIOajgOafpemUruWAvOeKtuaAgSgpOwogIOajgOafpeWKoOWvhumXruWAmeeKtuaAgSgpOwoKICAvLyBFQ0gg5byA5ZCv5pe26Ieq5Yqo6IGU5Yqo5byA5ZCv5LuFVExTCiAgY29uc3Qg5Yqg5a+G5a6i5oi356uv6Zeu5YCZ5aSN6YCJ5qGGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VjaCcpOwogIGNvbnN0IOerr+WPo+aOp+WItiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Q29udHJvbCcpOwogIGlmICjliqDlr4blrqLmiLfnq6/pl67lgJnlpI3pgInmoYYgJiYg56uv5Y+j5o6n5Yi2KSB7CiAgICDliqDlr4blrqLmiLfnq6/pl67lgJnlpI3pgInmoYYuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkgewogICAgICBpZiAodGhpcy5jaGVja2VkKSB7CiAgICAgICAgLy8gRUNIIOW8gOWQr+aXtu+8jOiHquWKqOiuvue9ruS7hVRMU+S4uiB5ZXMKICAgICAgICDnq6/lj6PmjqfliLYudmFsdWUgPSAneWVzJzsKICAgICAgfQogICAgICDlkIzmraXogZTliqjnlYzpnaLnirbmgIEoKTsKICAgIH0pOwoKICAgIC8vIOmhtemdouWKoOi9veaXtu+8jOWmguaenCBFQ0gg5bey5Yu+6YCJ77yM5Lmf6Ieq5Yqo6K6+572u5LuFVExTCiAgICBpZiAo5Yqg5a+G5a6i5oi356uv6Zeu5YCZ5aSN6YCJ5qGGLmNoZWNrZWQpIHsKICAgICAg56uv5Y+j5o6n5Yi2LnZhbHVlID0gJ3llcyc7CiAgICB9CiAgfQoKICAvLyDnm5HlkKxjdXN0b21JUOi+k+WFpeahhuWPmOWMlu+8jOWunuaXtuabtOaWsHdr5Zyw5Yy66YCJ5oup54q25oCBCiAgY29uc3Qg6Ieq5a6a5LmJ5Zyw5Z2A6L6T5YWlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbUlQJyk7CiAgaWYgKOiHquWumuS5ieWcsOWdgOi+k+WFpSkgewogICAg6Ieq5a6a5LmJ5Zyw5Z2A6L6T5YWlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkgewogICAgICDlkIzmraXogZTliqjnlYzpnaLnirbmgIEoKTsKICAgIH0pOwogIH0KCiAgY29uc3Qg6Ieq5a6a5LmJ6Lev5b6E6L6T5YWlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbVBhdGgnKTsKICBpZiAo6Ieq5a6a5LmJ6Lev5b6E6L6T5YWlKSB7CiAgICDoh6rlrprkuYnot6/lvoTovpPlhaUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7CiAgICAgIOWQjOatpeiBlOWKqOeVjOmdoueKtuaAgSgpOwogICAgfSk7CiAgfQoKICBbJ2V2JywgJ2V0JywgJ2V4J10uZm9yRWFjaChmdW5jdGlvbiAo5Y2P6K6u5qCH6K+GKSB7CiAgICBjb25zdCDljY/orq7lvIDlhbMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCjljY/orq7moIfor4YpOwogICAgaWYgKOWNj+iuruW8gOWFsykgewogICAgICDljY/orq7lvIDlhbMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkgewogICAgICAgIOWQjOatpeiBlOWKqOeVjOmdoueKtuaAgSgpOwogICAgICB9KTsKICAgIH0KICB9KTsKCiAgLy8g6Zi75q2i6KGo5Y2V6buY6K6k5o+Q5Lqk77yI5L+d5a2Y5oyJ6ZKu5bey57uf5LiA5Yiw5bqV6YOo5pON5L2c5p2h77yJCiAgWydyZWdpb25Gb3JtJywgJ290aGVyQ29uZmlnRm9ybScsICdhZHZhbmNlZENvbmZpZ0Zvcm0nXS5mb3JFYWNoKGZ1bmN0aW9uICjmnKzlnLDlgLwyMDA5MykgewogICAgY29uc3Qg6KGo5Y2V5YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQo5pys5Zyw5YC8MjAwOTMpOwogICAgaWYgKOihqOWNleWAvCkg6KGo5Y2V5YC8LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uICjkuovku7blgLwyMDA5MikgewogICAgICDkuovku7blgLwyMDA5Mi5wcmV2ZW50RGVmYXVsdCgpOwogICAgfSk7CiAgfSk7CgogIC8vIOWcqOS7u+aEj+i+k+WFpeahhuaMieS4i+Wbnui9pu+8jOinpuWPkee7n+S4gOS/neWtmAogIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb25maWdDb250ZW50IGlucHV0W3R5cGU9InRleHQiXSwgI2NvbmZpZ0NvbnRlbnQgaW5wdXRbdHlwZT0ibnVtYmVyIl0nKS5mb3JFYWNoKGZ1bmN0aW9uICjmnKzlnLDlgLwyMDA5MSkgewogICAg5pys5Zyw5YC8MjAwOTEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uICjkuovku7blgLwyMDA5MCkgewogICAgICBpZiAo5LqL5Lu25YC8MjAwOTAua2V5ID09PSAnRW50ZXInKSB7CiAgICAgICAg5LqL5Lu25YC8MjAwOTAucHJldmVudERlZmF1bHQoKTsKICAgICAgICDkv53lrZjlhajpg6jphY3nva4oKTsKICAgICAgfQogICAgfSk7CiAgfSk7CgogIC8vIOe7n+S4gOS/neWtmO+8muS4gOasoeaAp+aUtum9kOaJgOacieWtl+autQogIGZ1bmN0aW9uIOaUtumbhuWFqOmDqOmFjee9rigpIHsKICAgIHJldHVybiDmlLbpm4bnlYzpnaLphY3nva4oKTsKICB9CiAgYXN5bmMgZnVuY3Rpb24g5L+d5a2Y5YWo6YOo6YWN572uKCkgewogICAgLy8g6Iez5bCR5ZCv55So5LiA5Liq6YCa6YGTCiAgICBjb25zdCDlgLzlgLwyMDA4NSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldicpLAogICAgICDlgLzlgLwyMDA4NCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldCcpLAogICAgICDlgLzlgLwyMDA4MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleCcpOwogICAgaWYgKOWAvOWAvDIwMDg1ICYmIOWAvOWAvDIwMDg0ICYmIOWAvOWAvDIwMDgzICYmICHlgLzlgLwyMDA4NS5jaGVja2VkICYmICHlgLzlgLwyMDA4NC5jaGVja2VkICYmICHlgLzlgLwyMDA4My5jaGVja2VkKSB7CiAgICAgIOaYvuekuuaTjeS9nOeKtuaAgSgn") + String(_v895 ? _v4('2K3Yr9in2YLZhCDbjNqpINm+2LHZiNiq2qnZhCDYsdinINmB2LnYp9mEINqp2YbbjNivIQ==') : _v4('6Iez5bCR6ZyA6KaB5ZCv55So5LiA5Liq5Y2P6K6u77yB')) + _d64("AScsICdlcnInKTsKICAgICAg5pi+56S65o+Q56S6KCc=") + String(_v895 ? _v4('2K3Yr9in2YLZhCDbjNqpINm+2LHZiNiq2qnZhCDYsdinINmB2LnYp9mEINqp2YbbjNivIQ==') : _v4('6Iez5bCR6ZyA6KaB5ZCv55So5LiA5Liq5Y2P6K6u77yB')) + _d64("AScsICd3YXJuJyk7CiAgICAgIHJldHVybjsKICAgIH0KICAgIGNvbnN0IOacrOWcsOWAvDIwMDgyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NwQnRuU2F2ZUFsbCcpOwogICAgaWYgKOacrOWcsOWAvDIwMDgyKSB7CiAgICAgIOacrOWcsOWAvDIwMDgyLmNsYXNzTGlzdC5hZGQoJ2NwLWFjdGlvbi1idG4tc2F2aW5nJyk7CiAgICAgIOacrOWcsOWAvDIwMDgyLmRpc2FibGVkID0gdHJ1ZTsKICAgIH0KICAgIHRyeSB7CiAgICAgIGF3YWl0IOS/neWtmOmFjee9rijmlLbpm4blhajpg6jphY3nva4oKSk7CiAgICB9IGZpbmFsbHkgewogICAgICBpZiAo5pys5Zyw5YC8MjAwODIpIHsKICAgICAgICDmnKzlnLDlgLwyMDA4Mi5jbGFzc0xpc3QucmVtb3ZlKCdjcC1hY3Rpb24tYnRuLXNhdmluZycpOwogICAgICAgIOacrOWcsOWAvDIwMDgyLmRpc2FibGVkID0gZmFsc2U7CiAgICAgIH0KICAgIH0KICB9CiAgd2luZG93LuS/neWtmOWFqOmDqOmFjee9riA9IOS/neWtmOWFqOmDqOmFjee9rjsKICBmdW5jdGlvbiDmmL7npLrmk43kvZznirbmgIEo5raI5oGvLCDnsbvlnospIHsKICAgIGNvbnN0IOacrOWcsOWAvDIwMDgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NwQWN0aW9uU3RhdHVzJyk7CiAgICBpZiAoIeacrOWcsOWAvDIwMDgxKSByZXR1cm47CiAgICDmnKzlnLDlgLwyMDA4MS50ZXh0Q29udGVudCA9IOa2iOaBrzsKICAgIOacrOWcsOWAvDIwMDgxLmNsYXNzTGlzdC50b2dnbGUoJ2NwLWVycicsIOexu+WeiyA9PT0gJ2VycicpOwogICAg5pys5Zyw5YC8MjAwODEuY2xhc3NMaXN0LmFkZCgnY3Atc2hvdycpOwogICAgY2xlYXJUaW1lb3V0KOaYvuekuuaTjeS9nOeKtuaAgS5fdCk7CiAgICDmmL7npLrmk43kvZznirbmgIEuX3QgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsKICAgICAg5pys5Zyw5YC8MjAwODEuY2xhc3NMaXN0LnJlbW92ZSgnY3Atc2hvdycpOwogICAgfSwgMjQwMCk7CiAgfQogIHdpbmRvdy7mmL7npLrmk43kvZznirbmgIEgPSDmmL7npLrmk43kvZznirbmgIE7CgogIC8vIOe7keWumuW6lemDqOe7n+S4gOaTjeS9nOadoQogIGNvbnN0IOWAvOaTjeS9nOWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcEFjdGlvbkJhcicpOwogIGNvbnN0IOWAvOWAvOS/neWtmOWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcEJ0blNhdmVBbGwnKTsKICBpZiAo5YC85YC85L+d5a2Y5YC8KSDlgLzlgLzkv53lrZjlgLwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7CiAgICDlgLzlgLzkv53lrZjlgLwuY2xhc3NMaXN0LmFkZCgnY3AtYWN0aW9uLWJ0bi1zYXZpbmcnKTsKICAgIHRyeSB7CiAgICAgIGF3YWl0IOS/neWtmOWFqOmDqOmFjee9rigpOwogICAgICBpZiAo5YC85pON5L2c5YC8KSDlgLzmk43kvZzlgLwuY2xhc3NMaXN0LnJlbW92ZSgnY3AtZGlydHknKTsKICAgIH0gZmluYWxseSB7CiAgICAgIOWAvOWAvOS/neWtmOWAvC5jbGFzc0xpc3QucmVtb3ZlKCdjcC1hY3Rpb24tYnRuLXNhdmluZycpOwogICAgfQogIH0pOwogIGNvbnN0IOWAvOWAvOWAvDIwMDgwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NwQnRuUmVmcmVzaCcpOwogIGlmICjlgLzlgLzlgLwyMDA4MCkg5YC85YC85YC8MjAwODAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7CiAgICDlgLzlgLzlgLwyMDA4MC5jbGFzc0xpc3QuYWRkKCdjcC1hY3Rpb24tYnRuLXNhdmluZycpOwogICAgdHJ5IHsKICAgICAgYXdhaXQg5Yqg6L295b2T5YmN6YWN572uKCk7CiAgICAgIGlmICjlgLzmk43kvZzlgLwpIOWAvOaTjeS9nOWAvC5jbGFzc0xpc3QucmVtb3ZlKCdjcC1kaXJ0eScpOwogICAgICDmmL7npLrmk43kvZznirbmgIEoJw==") + String(_v895 ? 'تنظیمات تازه‌سازی شد' : _d64("AemFjee9ruW3suWIt+aWsA==")) + _d64("AScpOwogICAgfSBmaW5hbGx5IHsKICAgICAg5YC85YC85YC8MjAwODAuY2xhc3NMaXN0LnJlbW92ZSgnY3AtYWN0aW9uLWJ0bi1zYXZpbmcnKTsKICAgIH0KICB9KTsKICBjb25zdCDlgLzlgLzph43nva4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3BCdG5SZXNldCcpOwogIGlmICjlgLzlgLzph43nva4pIOWAvOWAvOmHjee9ri5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIOmHjee9ruWFqOmDqOmFjee9rik7CiAgY29uc3Qg5YC85YC85pu05paw5L+d5a2YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZFNhdmVCdG4nKTsgaWYgKOWAvOWAvOabtOaWsOS/neWtmCkg5YC85YC85pu05paw5L+d5a2YLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywg5L+d5a2Y5pu05paw6K6+572uKTsKICBjb25zdCDlgLzlgLzmm7TmlrDmo4Dmn6UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkQ2hlY2tCdG4nKTsgaWYgKOWAvOWAvOabtOaWsOajgOafpSkg5YC85YC85pu05paw5qOA5p+lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywg2KjYsdix2LPbjF/YqNmHX9ix2YjYstix2LPYp9mG24wpOwogIGNvbnN0IOWAvOWAvOabtOaWsOW6lOeUqCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRBcHBseUJ0bicpOyBpZiAo5YC85YC85pu05paw5bqU55SoKSDlgLzlgLzmm7TmlrDlupTnlKguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCDYp9i52YXYp9mEX9io2Ydf2LHZiNiy2LHYs9in2YbbjCk7CgogIC8vIOS/ruaUueWtl+auteaXtuaKiiBGQUIg5qCH6K6w5Li6ICLmnKrkv53lrZgiCiAgZnVuY3Rpb24g5qCH6K6w5bey5L+u5pS5KCkgewogICAgaWYgKOWAvOaTjeS9nOWAvCkg5YC85pON5L2c5YC8LmNsYXNzTGlzdC5hZGQoJ2NwLWRpcnR5Jyk7CiAgfQogIGNvbnN0IOW3suS/ruaUueiMg+WbtCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maWdDb250ZW50JykgfHwgZG9jdW1lbnQ7CiAgWydpbnB1dCcsICdjaGFuZ2UnXS5mb3JFYWNoKGZ1bmN0aW9uICjmnKzlnLDlgLwyMDA3OSkgewogICAg5bey5L+u5pS56IyD5Zu0LmFkZEV2ZW50TGlzdGVuZXIo5pys5Zyw5YC8MjAwNzksIGZ1bmN0aW9uICjkuovku7blgLwyMDA3OCkgewogICAgICBjb25zdCDmnKzlnLDlgLwyMDA3NyA9IOS6i+S7tuWAvDIwMDc4LnRhcmdldDsKICAgICAgaWYgKCHmnKzlnLDlgLwyMDA3NyB8fCAh5pys5Zyw5YC8MjAwNzcudGFnTmFtZSkgcmV0dXJuOwogICAgICBjb25zdCDmnKzlnLDlgLwyMDA3NiA9IOacrOWcsOWAvDIwMDc3LnRhZ05hbWUudG9Mb3dlckNhc2UoKTsKICAgICAgaWYgKOacrOWcsOWAvDIwMDc2ID09PSAnaW5wdXQnIHx8IOacrOWcsOWAvDIwMDc2ID09PSAnc2VsZWN0JyB8fCDmnKzlnLDlgLwyMDA3NiA9PT0gJ3RleHRhcmVhJykgewogICAgICAgIC8vIOi3s+i/h+W7tui/n+a1i+ivleebuOWFs+i+k+WFpe+8jOmBv+WFjeivr+inpgogICAgICAgIGlmICjmnKzlnLDlgLwyMDA3Ny5pZCAmJiAvXihsYXRlbmN5VGVzdElucHV0fGZldGNoVVJMSW5wdXR8bGF0ZW5jeVRlc3RQb3J0fHJhbmRvbUlQQ291bnR8dGVzdFRocmVhZHN8aXBTb3VyY2VTZWxlY3QpJC8udGVzdCjmnKzlnLDlgLwyMDA3Ny5pZCkpIHJldHVybjsKICAgICAgICDmoIforrDlt7Lkv67mlLkoKTsKICAgICAgfQogICAgfSk7CiAgfSk7CgogIC8vIEN0cmwrUyAvIENtZCtTIOinpuWPkeS/neWtmAogIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKOS6i+S7tuWAvDIwMDc1KSB7CiAgICBpZiAoKOS6i+S7tuWAvDIwMDc1LmN0cmxLZXkgfHwg5LqL5Lu25YC8MjAwNzUubWV0YUtleSkgJiYgKOS6i+S7tuWAvDIwMDc1LmtleSA9PT0gJ3MnIHx8IOS6i+S7tuWAvDIwMDc1LmtleSA9PT0gJ1MnKSkgewogICAgICDkuovku7blgLwyMDA3NS5wcmV2ZW50RGVmYXVsdCgpOwogICAgICBpZiAo5YC85YC85L+d5a2Y5YC8ICYmICHlgLzlgLzkv53lrZjlgLwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcC1hY3Rpb24tYnRuLXNhdmluZycpKSB7CiAgICAgICAg5YC85YC85L+d5a2Y5YC8LmNsaWNrKCk7CiAgICAgIH0KICAgIH0KICB9KTsKICBsZXQg5rWL6K+V5YC85o6n5Yi25ZmoID0gbnVsbDsKICBsZXQg5rWL6K+V57uT5p6c5YiX6KGoID0gW107CiAgY29uc3Qg5byA5aeL5rWL6K+V5YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0TGF0ZW5jeVRlc3QnKTsKICBjb25zdCDlgLzmtYvor5XlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcExhdGVuY3lUZXN0Jyk7CiAgY29uc3Qg5rWL6K+V54q25oCBID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVuY3lUZXN0U3RhdHVzJyk7CiAgY29uc3Qg5rWL6K+V57uT5p6c5YiX6KGo5YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVuY3lUZXN0UmVzdWx0cycpOwogIGNvbnN0IOe7k+aenOWIl+ihqOWIl+ihqCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRlbmN5UmVzdWx0c0xpc3QnKTsKICBjb25zdCDopobnm5blt7LpgInlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcndyaXRlU2VsZWN0ZWRUb1l4Jyk7CiAgY29uc3Qg6L+95Yqg5bey6YCJ5YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGVuZFNlbGVjdGVkVG9ZeCcpOwogIGNvbnN0IOmAieaLqeWAvOWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RBbGxSZXN1bHRzJyk7CiAgY29uc3Qg5YC85YC85YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2VsZWN0QWxsUmVzdWx0cycpOwogIGNvbnN0IOWcsOWdgOa6kOmAieaLqSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpcFNvdXJjZVNlbGVjdCcpOwogIGNvbnN0IOaJi+WKqOi+k+WFpeWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW51YWxJbnB1dERpdicpOwogIGNvbnN0IOe9keWdgOiOt+WPluWAvCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmxGZXRjaERpdicpOwogIGNvbnN0IOW7tui/n+a1i+ivlei+k+WFpSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRlbmN5VGVzdElucHV0Jyk7CiAgY29uc3Qg6I635Y+W572R5Z2A6L6T5YWlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZldGNoVVJMSW5wdXQnKTsKICBjb25zdCDlu7bov5/mtYvor5Xnq6/lj6MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0ZW5jeVRlc3RQb3J0Jyk7CiAgY29uc3Qg6ZqP5py65Zyw5Z2A5pWw6YePID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbUlQQ291bnQnKTsKICBjb25zdCDkupHlopnpmo/mnLrlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2ZSYW5kb21EaXYnKTsKICBjb25zdCDpmo/mnLrmlbDph4/lgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tQ291bnREaXYnKTsKICBjb25zdCDnlJ/miJDkupHlopnlnLDlnYDlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGVDRklQQnRuJyk7CiAgY29uc3Qg6I635Y+W5Zyw5Z2A5YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZldGNoSVBCdG4nKTsKICBpZiAo5bu26L+f5rWL6K+V6L6T5YWlKSB7CiAgICBjb25zdCDlt7Lkv53lrZjmtYvor5XovpPlhaUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGF0ZW5jeVRlc3RJbnB1dCcpOwogICAgaWYgKOW3suS/neWtmOa1i+ivlei+k+WFpSkg5bu26L+f5rWL6K+V6L6T5YWlLnZhbHVlID0g5bey5L+d5a2Y5rWL6K+V6L6T5YWlOwogICAg5bu26L+f5rWL6K+V6L6T5YWlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkgewogICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF0ZW5jeVRlc3RJbnB1dCcsIHRoaXMudmFsdWUpOwogICAgfSk7CiAgfQogIGlmICjojrflj5bnvZHlnYDovpPlhaUpIHsKICAgIGNvbnN0IOW3suS/neWtmOiOt+WPlue9keWdgCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmZXRjaFVSTElucHV0Jyk7CiAgICBpZiAo5bey5L+d5a2Y6I635Y+W572R5Z2AKSDojrflj5bnvZHlnYDovpPlhaUudmFsdWUgPSDlt7Lkv53lrZjojrflj5bnvZHlnYA7CiAgICDojrflj5bnvZHlnYDovpPlhaUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7CiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmZXRjaFVSTElucHV0JywgdGhpcy52YWx1ZSk7CiAgICB9KTsKICB9CiAgaWYgKOW7tui/n+a1i+ivleerr+WPoykgewogICAgY29uc3Qg5bey5L+d5a2Y56uv5Y+jID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhdGVuY3lUZXN0UG9ydCcpOwogICAgaWYgKOW3suS/neWtmOerr+WPoykg5bu26L+f5rWL6K+V56uv5Y+jLnZhbHVlID0g5bey5L+d5a2Y56uv5Y+jOwogICAg5bu26L+f5rWL6K+V56uv5Y+jLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkgewogICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF0ZW5jeVRlc3RQb3J0JywgdGhpcy52YWx1ZSk7CiAgICB9KTsKICB9CiAgaWYgKOmaj+acuuWcsOWdgOaVsOmHjykgewogICAgY29uc3Qg5bey5L+d5a2Y5pWw6YePID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JhbmRvbUlQQ291bnQnKTsKICAgIGlmICjlt7Lkv53lrZjmlbDph48pIOmaj+acuuWcsOWdgOaVsOmHjy52YWx1ZSA9IOW3suS/neWtmOaVsOmHjzsKICAgIOmaj+acuuWcsOWdgOaVsOmHjy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHsKICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JhbmRvbUlQQ291bnQnLCB0aGlzLnZhbHVlKTsKICAgIH0pOwogICAgLy8g5Yid5aeL5YyW5pe277yM5aaC5p6c6buY6K6k5piv6ZqQ6JeP55qE77yM5YiZ56aB55So6L6T5YWl5qGGCiAgICBpZiAo6ZqP5py65pWw6YeP5YC8ICYmIOmaj+acuuaVsOmHj+WAvC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHsKICAgICAg6ZqP5py65Zyw5Z2A5pWw6YePLmRpc2FibGVkID0gdHJ1ZTsKICAgIH0KICB9CiAgY29uc3Qg5rWL6K+V57q/56iL5pWw6L6T5YWlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RUaHJlYWRzJyk7CiAgaWYgKOa1i+ivlee6v+eoi+aVsOi+k+WFpSkgewogICAgY29uc3Qg5bey5L+d5a2Y57q/56iL5pWwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RUaHJlYWRzJyk7CiAgICBpZiAo5bey5L+d5a2Y57q/56iL5pWwKSDmtYvor5Xnur/nqIvmlbDovpPlhaUudmFsdWUgPSDlt7Lkv53lrZjnur/nqIvmlbA7CiAgICDmtYvor5Xnur/nqIvmlbDovpPlhaUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7CiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0VGhyZWFkcycsIHRoaXMudmFsdWUpOwogICAgfSk7CiAgfQogIGlmICjlnLDlnYDmupDpgInmi6kpIHsKICAgIGNvbnN0IOW3suS/neWtmOa6kCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpcFNvdXJjZVNlbGVjdCcpOwogICAgY29uc3Qg5b2T5YmN5rqQID0g5bey5L+d5a2Y5rqQIHx8IOWcsOWdgOa6kOmAieaLqS52YWx1ZSB8fCAnbWFudWFsJzsKICAgIGlmICjlt7Lkv53lrZjmupApIHsKICAgICAg5Zyw5Z2A5rqQ6YCJ5oupLnZhbHVlID0g5bey5L+d5a2Y5rqQOwogICAgfQogICAg5omL5Yqo6L6T5YWl5YC8LnN0eWxlLmRpc3BsYXkgPSDlvZPliY3mupAgPT09ICdtYW51YWwnID8gJ2Jsb2NrJyA6ICdub25lJzsKICAgIOe9keWdgOiOt+WPluWAvC5zdHlsZS5kaXNwbGF5ID0g5b2T5YmN5rqQID09PSAndXJsRmV0Y2gnID8gJ2Jsb2NrJyA6ICdub25lJzsKICAgIOS6keWimemaj+acuuWAvC5zdHlsZS5kaXNwbGF5ID0g5b2T5YmN5rqQID09PSAnY2ZSYW5kb20nID8gJ2Jsb2NrJyA6ICdub25lJzsKICAgIOmaj+acuuaVsOmHj+WAvC5zdHlsZS5kaXNwbGF5ID0g5b2T5YmN5rqQID09PSAnY2ZSYW5kb20nID8gJ2Jsb2NrJyA6ICdub25lJzsKICAgIC8vIOW9k+makOiXj+aXtuemgeeUqOi+k+WFpeahhu+8jOmBv+WFjeihqOWNlemqjOivgemUmeivrwogICAgaWYgKOmaj+acuuWcsOWdgOaVsOmHjykgewogICAgICDpmo/mnLrlnLDlnYDmlbDph48uZGlzYWJsZWQgPSDlvZPliY3mupAgIT09ICdjZlJhbmRvbSc7CiAgICB9CiAgfQogIGNvbnN0IOS6keWimee9keauteWIl+ihqCA9IFsnMTczLjI0NS40OC4wLzIwJywgJzEwMy4yMS4yNDQuMC8yMicsICcxMDMuMjIuMjAwLjAvMjInLCAnMTAzLjMxLjQuMC8yMicsICcxNDEuMTAxLjY0LjAvMTgnLCAnMTA4LjE2Mi4xOTIuMC8xOCcsICcxOTAuOTMuMjQwLjAvMjAnLCAnMTg4LjExNC45Ni4wLzIwJywgJzE5Ny4yMzQuMjQwLjAvMjInLCAnMTk4LjQxLjEyOC4wLzE3JywgJzE2Mi4xNTguMC4wLzE1JywgJzEwNC4xNi4wLjAvMTMnLCAnMTA0LjI0LjAuMC8xNCcsICcxNzIuNjQuMC4wLzEzJywgJzEzMS4wLjcyLjAvMjInXTsKICBmdW5jdGlvbiDku47nvZHmrrXnlJ/miJDpmo/mnLrlnLDlnYAo572R5q61MjAwNzQpIHsKICAgIGNvbnN0IFvln7rnoYDlnLDlnYAsIOWJjee8gOmVv+W6pl0gPSDnvZHmrrUyMDA3NC5zcGxpdCgnLycpOwogICAgY29uc3Qg5YmN57yAID0gcGFyc2VJbnQo5YmN57yA6ZW/5bqmKTsKICAgIGNvbnN0IOS4u+acuuWAvCA9IDMyIC0g5YmN57yAOwogICAgY29uc3Qg5Zyw5Z2A6YOo5YiG5YiX6KGoID0g5Z+656GA5Zyw5Z2ALnNwbGl0KCcuJykubWFwKOWPguaVsOWAvDIwMDczID0+IHBhcnNlSW50KOWPguaVsOWAvDIwMDczKSk7CiAgICBjb25zdCDlnLDlnYDlgLwgPSDlnLDlnYDpg6jliIbliJfooahbMF0gPDwgMjQgfCDlnLDlnYDpg6jliIbliJfooahbMV0gPDwgMTYgfCDlnLDlnYDpg6jliIbliJfooahbMl0gPDwgOCB8IOWcsOWdgOmDqOWIhuWIl+ihqFszXTsKICAgIGNvbnN0IOmaj+acuuWBj+enuyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgucG93KDIsIOS4u+acuuWAvCkpOwogICAgY29uc3Qg5o6p56CBID0gMHhGRkZGRkZGRiA8PCDkuLvmnLrlgLwgPj4+IDA7CiAgICBjb25zdCDpmo/mnLrlnLDlnYAgPSAoKOWcsOWdgOWAvCAmIOaOqeeggSkgPj4+IDApICsg6ZqP5py65YGP56e7ID4+PiAwOwogICAgcmV0dXJuIFvpmo/mnLrlnLDlnYAgPj4+IDI0ICYgMHhGRiwg6ZqP5py65Zyw5Z2AID4+PiAxNiAmIDB4RkYsIOmaj+acuuWcsOWdgCA+Pj4gOCAmIDB4RkYsIOmaj+acuuWcsOWdgCAmIDB4RkZdLmpvaW4oJy4nKTsKICB9CiAgZnVuY3Rpb24g55Sf5oiQ5LqR5aKZ6ZqP5py65Zyw5Z2AKOaVsOmHjzIwMDcyLCDnq6/lj6MyMDA3MSkgewogICAgY29uc3Qg5Zyw5Z2A5YiX6KGoMjAwNzAgPSBbXTsKICAgIGZvciAobGV0IOe0ouW8leWAvDIwMDY5ID0gMDsg57Si5byV5YC8MjAwNjkgPCDmlbDph48yMDA3Mjsg57Si5byV5YC8MjAwNjkrKykgewogICAgICBjb25zdCDnvZHmrrUgPSDkupHlopnnvZHmrrXliJfooahbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICog5LqR5aKZ572R5q615YiX6KGoLmxlbmd0aCldOwogICAgICBjb25zdCDlnLDlnYAyMDA2OCA9IOS7jue9keauteeUn+aIkOmaj+acuuWcsOWdgCjnvZHmrrUpOwogICAgICDlnLDlnYDliJfooagyMDA3MC5wdXNoKOWcsOWdgDIwMDY4ICsgJzonICsg56uv5Y+jMjAwNzEpOwogICAgfQogICAgcmV0dXJuIOWcsOWdgOWIl+ihqDIwMDcwOwogIH0KICBpZiAo5Zyw5Z2A5rqQ6YCJ5oupKSB7CiAgICDlnLDlnYDmupDpgInmi6kuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkgewogICAgICBjb25zdCDlgLwgPSB0aGlzLnZhbHVlOwogICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXBTb3VyY2VTZWxlY3QnLCDlgLwpOwogICAgICDmiYvliqjovpPlhaXlgLwuc3R5bGUuZGlzcGxheSA9IOWAvCA9PT0gJ21hbnVhbCcgPyAnYmxvY2snIDogJ25vbmUnOwogICAgICDnvZHlnYDojrflj5blgLwuc3R5bGUuZGlzcGxheSA9IOWAvCA9PT0gJ3VybEZldGNoJyA/ICdibG9jaycgOiAnbm9uZSc7CiAgICAgIOS6keWimemaj+acuuWAvC5zdHlsZS5kaXNwbGF5ID0g5YC8ID09PSAnY2ZSYW5kb20nID8gJ2Jsb2NrJyA6ICdub25lJzsKICAgICAg6ZqP5py65pWw6YeP5YC8LnN0eWxlLmRpc3BsYXkgPSDlgLwgPT09ICdjZlJhbmRvbScgPyAnYmxvY2snIDogJ25vbmUnOwogICAgICAvLyDlvZPpmpDol4/ml7bnpoHnlKjovpPlhaXmoYbvvIzpgb/lhY3ooajljZXpqozor4HplJnor68KICAgICAgaWYgKOmaj+acuuWcsOWdgOaVsOmHjykgewogICAgICAgIOmaj+acuuWcsOWdgOaVsOmHjy5kaXNhYmxlZCA9IOWAvCAhPT0gJ2NmUmFuZG9tJzsKICAgICAgfQogICAgfSk7CiAgfQogIGlmICjnlJ/miJDkupHlopnlnLDlnYDlgLwpIHsKICAgIOeUn+aIkOS6keWimeWcsOWdgOWAvC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsKICAgICAgY29uc3Qg5pWw6YePID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbUlQQ291bnQnKS52YWx1ZSkgfHwgMjA7CiAgICAgIGNvbnN0IOerr+WPozIwMDY3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVuY3lUZXN0UG9ydCcpLnZhbHVlIHx8ICc0NDMnOwogICAgICBjb25zdCDlnLDlnYDliJfooaggPSDnlJ/miJDkupHlopnpmo/mnLrlnLDlnYAo5pWw6YePLCDnq6/lj6MyMDA2Nyk7CiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRlbmN5VGVzdElucHV0JykudmFsdWUgPSDlnLDlnYDliJfooaguam9pbignLCcpOwogICAgICDmiYvliqjovpPlhaXlgLwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7CiAgICAgIOaYvuekuueKtuaAgSgn") + String(_v895 ? 'تولید شد' : _d64("AeW3sueUn+aIkA==")) + _d64("ASAnICsg5pWw6YePICsgJyA=") + String(_v895 ? 'IP تصادفی CF' : _d64("AeS4qkNG6ZqP5py6SVA=")) + _d64("AScsICdzdWNjZXNzJyk7CiAgICB9KTsKICB9CiAgaWYgKOiOt+WPluWcsOWdgOWAvCkgewogICAg6I635Y+W5Zyw5Z2A5YC8LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkgewogICAgICBjb25zdCDnvZHlnYDovpPlhaUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmV0Y2hVUkxJbnB1dCcpOwogICAgICBjb25zdCDojrflj5bnvZHlnYAgPSDnvZHlnYDovpPlhaUudmFsdWUudHJpbSgpOwogICAgICBpZiAoIeiOt+WPlue9keWdgCkgewogICAgICAgIOaYvuekuuaPkOekuign") + String(_v895 ? 'لطفا URL را وارد کنید' : _d64("Aeivt+i+k+WFpVVSTA==")) + _d64("AScsICd3YXJuJyk7CiAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICAgIOiOt+WPluWcsOWdgOWAvC5kaXNhYmxlZCA9IHRydWU7CiAgICAgIOiOt+WPluWcsOWdgOWAvC50ZXh0Q29udGVudCA9ICc=") + String(_v895 ? 'در حال دریافت...' : _d64("AeiOt+WPluS4rS4uLg==")) + _d64("ASc7CiAgICAgIHRyeSB7CiAgICAgICAgLy8g5pSv5oyB5aSa5LiqIFVSTO+8iOmAl+WPt+WIhumalO+8ieS7peWPiui/lOWbnuWGheWuueS4remAl+WPt+WIhumalOeahOWkmuS4qiBJUC/oioLngrkKICAgICAgICBjb25zdCDnvZHlnYDliJfooaggPSBBcnJheS5mcm9tKG5ldyBTZXQo6I635Y+W572R5Z2ALnNwbGl0KCcsJykubWFwKOe9keWdgOWAvDIwMDY2ID0+IOe9keWdgOWAvDIwMDY2LnRyaW0oKSkuZmlsdGVyKOe9keWdgOWAvDIwMDY1ID0+IOe9keWdgOWAvDIwMDY1KSkpOwogICAgICAgIGNvbnN0IOWAvOmhueebruWIl+ihqCA9IFtdOwogICAgICAgIGZvciAoY29uc3Qg572R5Z2A5YC8IG9mIOe9keWdgOWIl+ihqCkgewogICAgICAgICAgY29uc3Qg5ZON5bqUID0gYXdhaXQgZmV0Y2go572R5Z2A5YC8KTsKICAgICAgICAgIGlmICgh5ZON5bqULm9rKSB7CiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSFRUUCAnICsg5ZON5bqULnN0YXR1cyArICcgQCAnICsg572R5Z2A5YC8KTsKICAgICAgICAgIH0KICAgICAgICAgIGNvbnN0IOaWh+acrDIwMDY0ID0gYXdhaXQg5ZON5bqULnRleHQoKTsKCiAgICAgICAgICAvLyDlhYjmjInooYzliIblibLvvIzlho3lnKjmr4/ooYzlhoXmjInpgJflj7fliIblibLvvIzlhbzlrrnigJzlpJrooYwgKyDpgJflj7fliIbpmpTigJ3kuKTnp43moLzlvI8KICAgICAgICAgIGNvbnN0IOWAvOe9keWdgOmhueebruWIl+ihqCA9IOaWh+acrDIwMDY0LnNwbGl0KC9ccj9cbi8pLm1hcCjooYzlgLwyMDA2MyA9PiDooYzlgLwyMDA2My50cmltKCkpLmZpbHRlcijooYzlgLwyMDA2MiA9PiDooYzlgLwyMDA2MiAmJiAh6KGM5YC8MjAwNjIuc3RhcnRzV2l0aCgnIycpKS5mbGF0TWFwKOihjOWAvCA9PiDooYzlgLwuc3BsaXQoJywnKS5tYXAo5Y+C5pWw5YC8MjAwNjEgPT4g5Y+C5pWw5YC8MjAwNjEudHJpbSgpKS5maWx0ZXIo5Y+C5pWw5YC8ID0+IOWPguaVsOWAvCkpOwogICAgICAgICAg5YC86aG555uu5YiX6KGoLnB1c2goLi4u5YC8572R5Z2A6aG555uu5YiX6KGoKTsKICAgICAgICB9CiAgICAgICAgaWYgKOWAvOmhueebruWIl+ihqC5sZW5ndGggPiAwKSB7CiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0ZW5jeVRlc3RJbnB1dCcpLnZhbHVlID0g5YC86aG555uu5YiX6KGoLmpvaW4oJywnKTsKICAgICAgICAgIOaJi+WKqOi+k+WFpeWAvC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsKICAgICAgICAgIOaYvuekuueKtuaAgSgn") + String(_v895 ? 'دریافت شد' : _d64("AeW3suiOt+WPlg==")) + _d64("ASAnICsg5YC86aG555uu5YiX6KGoLmxlbmd0aCArICcg") + String(_v895 ? 'IP' : _d64("AeS4qklQ")) + _d64("AScsICdzdWNjZXNzJyk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgIOaYvuekuueKtuaAgSgn") + String(_v895 ? 'داده‌ای یافت نشد' : _d64("AeacquiOt+WPluWIsOaVsOaNrg==")) + _d64("AScsICdlcnJvcicpOwogICAgICAgIH0KICAgICAgfSBjYXRjaCAo6ZSZ6K+vMjAwNjApIHsKICAgICAgICDmmL7npLrnirbmgIEoJw==") + String(_v895 ? 'خطا در دریافت' : _d64("AeiOt+WPluWksei0pQ==")) + _d64("ATogJyArIOmUmeivrzIwMDYwLm1lc3NhZ2UsICdlcnJvcicpOwogICAgICB9IGZpbmFsbHkgewogICAgICAgIOiOt+WPluWcsOWdgOWAvC5kaXNhYmxlZCA9IGZhbHNlOwogICAgICAgIOiOt+WPluWcsOWdgOWAvC50ZXh0Q29udGVudCA9ICfirIcg") + String(_v895 ? 'دریافت IP' : _d64("AeiOt+WPlklQ")) + _d64("ASc7CiAgICAgIH0KICAgIH0pOwogIH0KICBpZiAo5byA5aeL5rWL6K+V5YC8KSB7CiAgICDlvIDlp4vmtYvor5XlgLwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7CiAgICAgIGNvbnN0IOi+k+WFpeWAvDIwMDU5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVuY3lUZXN0SW5wdXQnKTsKICAgICAgY29uc3Qg56uv5Y+j5YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVuY3lUZXN0UG9ydCcpOwogICAgICBjb25zdCDnur/nqIvmlbDlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdFRocmVhZHMnKTsKICAgICAgY29uc3Qg6L6T5YWl5YC8ID0g6L6T5YWl5YC8MjAwNTkudmFsdWUudHJpbSgpOwogICAgICBjb25zdCDpu5jorqTnq6/lj6MgPSDnq6/lj6PlgLwudmFsdWUgfHwgJzQ0Myc7CiAgICAgIGNvbnN0IOe6v+eoi+aVsCA9IHBhcnNlSW50KOe6v+eoi+aVsOWAvC52YWx1ZSkgfHwgNTsKICAgICAgaWYgKCHovpPlhaXlgLwpIHsKICAgICAgICDmmL7npLrnirbmgIEoJw==") + String(_v895 ? 'لطفا IP یا دامنه وارد کنید' : _d64("Aeivt+i+k+WFpUlQ5oiW5Z+f5ZCN")) + _d64("AScsICdlcnJvcicpOwogICAgICAgIHJldHVybjsKICAgICAgfQogICAgICBjb25zdCDmnKzlnLDlgLwyMDA1OCA9IOi+k+WFpeWAvC5zcGxpdCgnLCcpLm1hcCjnv7vor5HlgLwyMDA1NyA9PiDnv7vor5HlgLwyMDA1Ny50cmltKCkpLmZpbHRlcijnv7vor5HlgLwyMDA1NiA9PiDnv7vor5HlgLwyMDA1Nik7CiAgICAgIGlmICjmnKzlnLDlgLwyMDA1OC5sZW5ndGggPT09IDApIHJldHVybjsKICAgICAg5byA5aeL5rWL6K+V5YC8LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAgICAgIOWAvOa1i+ivleWAvC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7CiAgICAgIOa1i+ivleeKtuaAgS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsKICAgICAg5rWL6K+V57uT5p6c5YiX6KGo5YC8LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOwogICAgICDnu5PmnpzliJfooajliJfooaguaW5uZXJIVE1MID0gJyc7CiAgICAgIOa1i+ivlee7k+aenOWIl+ihqCA9IFtdOwogICAgICBpZiAo5Z+O5biC562b6YCJ5YC8KSB7CiAgICAgICAg5Z+O5biC562b6YCJ5YC8LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAgICAgIH0KICAgICAg5rWL6K+V5YC85o6n5Yi25ZmoID0gbmV3IEFib3J0Q29udHJvbGxlcigpOwogICAgICBsZXQg5pys5Zyw5YC8MjAwNTUgPSAwOwogICAgICBjb25zdCDmnKzlnLDlgLwyMDA1NCA9IOacrOWcsOWAvDIwMDU4Lmxlbmd0aDsKICAgICAgZnVuY3Rpb24g6Kej5p6Q55uu5qCHKOebruaghzIwMDUzKSB7CiAgICAgICAgbGV0IOS4u+acujIwMDUyID0g55uu5qCHMjAwNTM7CiAgICAgICAgbGV0IOerr+WPozIwMDUxID0g6buY6K6k56uv5Y+jOwogICAgICAgIGxldCDoioLngrnlkI3np7AyMDA1MCA9ICcnOwogICAgICAgIGlmICjnm67moIcyMDA1My5pbmNsdWRlcygnIycpKSB7CiAgICAgICAgICBjb25zdCDpg6jliIbliJfooagyMDA0OSA9IOebruaghzIwMDUzLnNwbGl0KCcjJyk7CiAgICAgICAgICDoioLngrnlkI3np7AyMDA1MCA9IOmDqOWIhuWIl+ihqDIwMDQ5WzFdIHx8ICcnOwogICAgICAgICAg5Li75py6MjAwNTIgPSDpg6jliIbliJfooagyMDA0OVswXTsKICAgICAgICB9CiAgICAgICAgaWYgKOS4u+acujIwMDUyLmluY2x1ZGVzKCc6JykgJiYgIeS4u+acujIwMDUyLnN0YXJ0c1dpdGgoJ1snKSkgewogICAgICAgICAgY29uc3Qg5YC85YC8MjAwNDggPSDkuLvmnLoyMDA1Mi5sYXN0SW5kZXhPZignOicpOwogICAgICAgICAgY29uc3Qg5YC856uv5Y+jID0g5Li75py6MjAwNTIuc3Vic3RyaW5nKOWAvOWAvDIwMDQ4ICsgMSk7CiAgICAgICAgICBpZiAoL15bMC05XSskLy50ZXN0KOWAvOerr+WPoykpIHsKICAgICAgICAgICAg56uv5Y+jMjAwNTEgPSDlgLznq6/lj6M7CiAgICAgICAgICAgIOS4u+acujIwMDUyID0g5Li75py6MjAwNTIuc3Vic3RyaW5nKDAsIOWAvOWAvDIwMDQ4KTsKICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgaWYgKOS4u+acujIwMDUyLmluY2x1ZGVzKCddOicpKSB7CiAgICAgICAgICBjb25zdCDpg6jliIbliJfooagyMDA0NyA9IOS4u+acujIwMDUyLnNwbGl0KCddOicpOwogICAgICAgICAg5Li75py6MjAwNTIgPSDpg6jliIbliJfooagyMDA0N1swXSArICddJzsKICAgICAgICAgIOerr+WPozIwMDUxID0g6YOo5YiG5YiX6KGoMjAwNDdbMV07CiAgICAgICAgfQogICAgICAgIHJldHVybiB7CiAgICAgICAgICBob3N0OiDkuLvmnLoyMDA1MiwKICAgICAgICAgIHBvcnQ6IOerr+WPozIwMDUxLAogICAgICAgICAgbm9kZU5hbWU6IOiKgueCueWQjeensDIwMDUwCiAgICAgICAgfTsKICAgICAgfQogICAgICBmdW5jdGlvbiDmuLLmn5Pnu5Pmnpwo57uT5p6cMjAwNDYsIOe0ouW8lTIwMDQ1LCDlgLzlgLwyMDA0NCA9IHRydWUpIHsKICAgICAgICAvLyDlj6rlsZXnpLrlnKjnur/kvJjpgInmiJDlip/nmoTnu5PmnpzvvIzlpLHotKUv6LaF5pe255qE5LiN5YaN5pi+56S6CiAgICAgICAgaWYgKCHnu5PmnpwyMDA0Ni5zdWNjZXNzKSB7CiAgICAgICAgICByZXR1cm4gbnVsbDsKICAgICAgICB9CiAgICAgICAgY29uc3Qg57uT5p6c6aG555uuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICAgICAg57uT5p6c6aG555uuLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogOHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA4MTMwYTsgZ2FwOiAxMHB4Oyc7CiAgICAgICAg57uT5p6c6aG555uuLmRhdGFzZXQuaW5kZXggPSDntKLlvJUyMDA0NTsKICAgICAgICDnu5Pmnpzpobnnm64uZGF0YXNldC5jb2xvID0g57uT5p6cMjAwNDYuY29sbyB8fCAnJzsKICAgICAgICBpZiAoIeWAvOWAvDIwMDQ0KSB7CiAgICAgICAgICDnu5Pmnpzpobnnm64uc3R5bGUuZGlzcGxheSA9ICdub25lJzsKICAgICAgICB9CiAgICAgICAgY29uc3Qg5aSN6YCJ5qGGMjAwNDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOwogICAgICAgIOWkjemAieahhjIwMDQzLnR5cGUgPSAnY2hlY2tib3gnOwogICAgICAgIOWkjemAieahhjIwMDQzLmNoZWNrZWQgPSB0cnVlOwogICAgICAgIOWkjemAieahhjIwMDQzLmRpc2FibGVkID0gZmFsc2U7CiAgICAgICAg5aSN6YCJ5qGGMjAwNDMuZGF0YXNldC5pbmRleCA9IOe0ouW8lTIwMDQ1OwogICAgICAgIOWkjemAieahhjIwMDQzLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDsgY3Vyc29yOiBwb2ludGVyOyc7CiAgICAgICAgY29uc3Qg5pys5Zyw5YC8MjAwNDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsKICAgICAgICDmnKzlnLDlgLwyMDA0Mi5zdHlsZS5jc3NUZXh0ID0gJ2ZsZXg6IDE7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTNweDsnOwogICAgICAgIGNvbnN0IOacuuaIv+WQjeensDIwMDQxID0g57uT5p6cMjAwNDYuY29sbyA/IOiOt+WPluacuuaIv+WQjeensCjnu5PmnpwyMDA0Ni5jb2xvKSA6ICcnOwogICAgICAgIGNvbnN0IOacuuaIv+aYvuekuiA9IOacuuaIv+WQjeensDIwMDQxID8gJyA8c3BhbiBzdHlsZT0iY29sb3I6ICM1YjhjZmY7Ij5bJyArIOacuuaIv+WQjeensDIwMDQxICsgJ108L3NwYW4+JyA6ICcnOwogICAgICAgIOacrOWcsOWAvDIwMDQyLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT0iY29sb3I6ICNjOGYxMzU7Ij4nICsg57uT5p6cMjAwNDYuaG9zdCArICc6JyArIOe7k+aenDIwMDQ2LnBvcnQgKyAnPC9zcGFuPicgKyDmnLrmiL/mmL7npLogKyAnIDxzcGFuIHN0eWxlPSJjb2xvcjogI2ZmYjQ1NDsiPicgKyDnu5PmnpwyMDA0Ni5sYXRlbmN5ICsgJ21zPC9zcGFuPic7CiAgICAgICAg57uT5p6c6aG555uuLmFwcGVuZENoaWxkKOWkjemAieahhjIwMDQzKTsKICAgICAgICDnu5Pmnpzpobnnm64uYXBwZW5kQ2hpbGQo5pys5Zyw5YC8MjAwNDIpOwogICAgICAgIOe7k+aenOWIl+ihqOWIl+ihqC5hcHBlbmRDaGlsZCjnu5Pmnpzpobnnm64pOwogICAgICAgIHJldHVybiDnu5Pmnpzpobnnm647CiAgICAgIH0KICAgICAgYXN5bmMgZnVuY3Rpb24g5rWL6K+V5Y2V6aG5KOebruaghykgewogICAgICAgIGlmICjmtYvor5XlgLzmjqfliLblmaguc2lnbmFsLmFib3J0ZWQpIHJldHVybiBudWxsOwogICAgICAgIGNvbnN0IHsKICAgICAgICAgIGhvc3Q6IOS4u+acujIwMDQwLAogICAgICAgICAgcG9ydDog56uv5Y+jMjAwMzksCiAgICAgICAgICBub2RlTmFtZTog6IqC54K55ZCN56ewCiAgICAgICAgfSA9IOino+aekOebruaghyjnm67moIcpOwogICAgICAgIGNvbnN0IOe7k+aenDIwMDM4ID0gYXdhaXQg5rWL6K+V5bu26L+fKOS4u+acujIwMDQwLCDnq6/lj6MyMDAzOSwg5rWL6K+V5YC85o6n5Yi25ZmoLnNpZ25hbCk7CiAgICAgICAg57uT5p6cMjAwMzguaG9zdCA9IOS4u+acujIwMDQwOwogICAgICAgIOe7k+aenDIwMDM4LnBvcnQgPSDnq6/lj6MyMDAzOTsKICAgICAgICDnu5PmnpwyMDAzOC5ub2RlTmFtZSA9IOe7k+aenDIwMDM4LnN1Y2Nlc3MgJiYg57uT5p6cMjAwMzguY29sbyA/IOiKgueCueWQjeensCB8fCAnQ0YtJyArIOe7k+aenDIwMDM4LmNvbG8gOiDoioLngrnlkI3np7AgfHwg5Li75py6MjAwNDA7CiAgICAgICAgcmV0dXJuIOe7k+aenDIwMDM4OwogICAgICB9CiAgICAgIGZvciAobGV0IOe0ouW8leWAvDIwMDM3ID0gMDsg57Si5byV5YC8MjAwMzcgPCDmnKzlnLDlgLwyMDA1NDsg57Si5byV5YC8MjAwMzcgKz0g57q/56iL5pWwKSB7CiAgICAgICAgaWYgKOa1i+ivleWAvOaOp+WItuWZqC5zaWduYWwuYWJvcnRlZCkgYnJlYWs7CiAgICAgICAgY29uc3Qg5pys5Zyw5YC8MjAwMzYgPSDmnKzlnLDlgLwyMDA1OC5zbGljZSjntKLlvJXlgLwyMDAzNywgTWF0aC5taW4o57Si5byV5YC8MjAwMzcgKyDnur/nqIvmlbAsIOacrOWcsOWAvDIwMDU0KSk7CiAgICAgICAg5rWL6K+V54q25oCBLnRleHRDb250ZW50ID0gJw==") + String(_v895 ? 'در حال تست' : _d64("Aea1i+ivleS4rQ==")) + _d64("ATogJyArICjntKLlvJXlgLwyMDAzNyArIDEpICsgJy0nICsgTWF0aC5taW4o57Si5byV5YC8MjAwMzcgKyDnur/nqIvmlbAsIOacrOWcsOWAvDIwMDU0KSArICcvJyArIOacrOWcsOWAvDIwMDU0ICsgJyAo") + String(_v895 ? 'رشته‌ها' : _d64("Aee6v+eoiw==")) + _d64("ATogJyArIOe6v+eoi+aVsCArICcpJzsKICAgICAgICBjb25zdCDnu5PmnpzliJfooaggPSBhd2FpdCBQcm9taXNlLmFsbCjmnKzlnLDlgLwyMDAzNi5tYXAo57+76K+R5YC8ID0+IOa1i+ivleWNlemhuSjnv7vor5HlgLwpKSk7CiAgICAgICAgZm9yIChjb25zdCDnu5PmnpwyMDAzNSBvZiDnu5PmnpzliJfooagpIHsKICAgICAgICAgIGlmICjnu5PmnpwyMDAzNSkgewogICAgICAgICAgICBjb25zdCDntKLlvJUyMDAzNCA9IOa1i+ivlee7k+aenOWIl+ihqC5sZW5ndGg7CiAgICAgICAgICAgIOa1i+ivlee7k+aenOWIl+ihqC5wdXNoKOe7k+aenDIwMDM1KTsKICAgICAgICAgICAg5riy5p+T57uT5p6cKOe7k+aenDIwMDM1LCDntKLlvJUyMDAzNCk7CiAgICAgICAgICAgIOacrOWcsOWAvDIwMDU1Kys7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICB9CiAgICAgIOa1i+ivleeKtuaAgS50ZXh0Q29udGVudCA9ICc=") + String(_v895 ? 'تست کامل شد' : _d64("Aea1i+ivleWujOaIkA==")) + _d64("ATogJyArIOacrOWcsOWAvDIwMDU1ICsgJy8nICsg5pys5Zyw5YC8MjAwNTQ7CiAgICAgIOW8gOWni+a1i+ivleWAvC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7CiAgICAgIOWAvOa1i+ivleWAvC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwoKICAgICAgLy8g5pu05paw5Z+O5biC6YCJ5oup5ZmoCiAgICAgIOabtOaWsOWfjuW4guetm+mAiSgpOwogICAgfSk7CiAgfQogIGlmICjlgLzmtYvor5XlgLwpIHsKICAgIOWAvOa1i+ivleWAvC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsKICAgICAgaWYgKOa1i+ivleWAvOaOp+WItuWZqCkgewogICAgICAgIOa1i+ivleWAvOaOp+WItuWZqC5hYm9ydCgpOwogICAgICB9CiAgICAgIOW8gOWni+a1i+ivleWAvC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7CiAgICAgIOWAvOa1i+ivleWAvC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwogICAgICDmtYvor5XnirbmgIEudGV4dENvbnRlbnQgPSAn") + String(_v895 ? 'تست متوقف شد' : _d64("Aea1i+ivleW3suWBnOatog==")) + _d64("ASc7CiAgICB9KTsKICB9CiAgaWYgKOmAieaLqeWAvOWAvCkgewogICAg6YCJ5oup5YC85YC8LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgewogICAgICBjb25zdCDmnKzlnLDlgLwyMDAzMyA9IOe7k+aenOWIl+ihqOWIl+ihqC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPSJjaGVja2JveCJdOm5vdCg6ZGlzYWJsZWQpJyk7CiAgICAgIOacrOWcsOWAvDIwMDMzLmZvckVhY2go5pys5Zyw5YC8MjAwMzIgPT4g5pys5Zyw5YC8MjAwMzIuY2hlY2tlZCA9IHRydWUpOwogICAgfSk7CiAgfQogIGlmICjlgLzlgLzlgLwpIHsKICAgIOWAvOWAvOWAvC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsKICAgICAgY29uc3Qg5pys5Zyw5YC8MjAwMzEgPSDnu5PmnpzliJfooajliJfooagucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT0iY2hlY2tib3giXScpOwogICAgICDmnKzlnLDlgLwyMDAzMS5mb3JFYWNoKOacrOWcsOWAvDIwMDMwID0+IOacrOWcsOWAvDIwMDMwLmNoZWNrZWQgPSBmYWxzZSk7CiAgICB9KTsKICB9CgogIC8vIOiOt+WPlumAieS4remhueeahOmAmueUqOWHveaVsAogIGZ1bmN0aW9uIOiOt+WPluW3sumAiemhueebrigpIHsKICAgIGNvbnN0IOacrOWcsOWAvDIwMDI5ID0g57uT5p6c5YiX6KGo5YiX6KGoLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9ImNoZWNrYm94Il06Y2hlY2tlZCcpOwogICAgaWYgKOacrOWcsOWAvDIwMDI5Lmxlbmd0aCA9PT0gMCkgewogICAgICDmmL7npLrnirbmgIEoJw==") + String(_v895 ? 'لطفا حداقل یک مورد انتخاب کنید' : _d64("Aeivt+iHs+WwkemAieaLqeS4gOmhuQ==")) + _d64("AScsICdlcnJvcicpOwogICAgICByZXR1cm4gbnVsbDsKICAgIH0KICAgIGNvbnN0IOW3sumAiemhueebruWIl+ihqDIwMDI4ID0gW107CiAgICDmnKzlnLDlgLwyMDAyOS5mb3JFYWNoKOacrOWcsOWAvDIwMDI3ID0+IHsKICAgICAgY29uc3Qg57Si5byVMjAwMjYgPSBwYXJzZUludCjmnKzlnLDlgLwyMDAyNy5kYXRhc2V0LmluZGV4KTsKICAgICAgY29uc3Qg57uT5p6cMjAwMjUgPSDmtYvor5Xnu5PmnpzliJfooahb57Si5byVMjAwMjZdOwogICAgICBpZiAo57uT5p6cMjAwMjUgJiYg57uT5p6cMjAwMjUuc3VjY2VzcykgewogICAgICAgIGNvbnN0IOacuuaIv+WQjeensCA9IOe7k+aenDIwMDI1LmNvbG8gPyDojrflj5bmnLrmiL/lkI3np7Ao57uT5p6cMjAwMjUuY29sbykgOiDnu5PmnpwyMDAyNS5ub2RlTmFtZTsKICAgICAgICBjb25zdCDpobnnm67lrZfnrKbkuLIgPSDnu5PmnpwyMDAyNS5ob3N0ICsgJzonICsg57uT5p6cMjAwMjUucG9ydCArICcjJyArIOacuuaIv+WQjeensDsKICAgICAgICDlt7LpgInpobnnm67liJfooagyMDAyOC5wdXNoKOmhueebruWtl+espuS4sik7CiAgICAgIH0KICAgIH0pOwogICAgcmV0dXJuIOW3sumAiemhueebruWIl+ihqDIwMDI4OwogIH0KCiAgLy8g6KaG55uW5re75YqgCiAgaWYgKOimhuebluW3sumAieWAvCkgewogICAg6KaG55uW5bey6YCJ5YC8LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkgewogICAgICBjb25zdCDlt7LpgInpobnnm67liJfooagyMDAyNCA9IOiOt+WPluW3sumAiemhueebrigpOwogICAgICBpZiAoIeW3sumAiemhueebruWIl+ihqDIwMDI0IHx8IOW3sumAiemhueebruWIl+ihqDIwMDI0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuOwogICAgICBjb25zdCDlgLzovpPlhaUyMDAyMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5eCcpOwogICAgICBjb25zdCDmlrDlgLwyMDAyMiA9IOW3sumAiemhueebruWIl+ihqDIwMDI0LmpvaW4oJywnKTsKICAgICAg5YC86L6T5YWlMjAwMjMudmFsdWUgPSDmlrDlgLwyMDAyMjsKICAgICAg6KaG55uW5bey6YCJ5YC8LmRpc2FibGVkID0gdHJ1ZTsKICAgICAg6L+95Yqg5bey6YCJ5YC8LmRpc2FibGVkID0gdHJ1ZTsKICAgICAg6KaG55uW5bey6YCJ5YC8LnRleHRDb250ZW50ID0gJw==") + String(_v895 ? 'در حال ذخیره...' : _d64("AeS/neWtmOS4rS4uLg==")) + _d64("ASc7CiAgICAgIHRyeSB7CiAgICAgICAgY29uc3Qg6YWN572u5pWw5o2uMjAwMjEgPSB7CiAgICAgICAgICBjdXN0b21JUDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbUlQJykudmFsdWUsCiAgICAgICAgICB5eDog5paw5YC8MjAwMjIsCiAgICAgICAgICB5eFVSTDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3l4VVJMJykudmFsdWUsCiAgICAgICAgICBzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ja3NDb25maWcnKS52YWx1ZQogICAgICAgIH07CiAgICAgICAgYXdhaXQg5L+d5a2Y6YWN572uKOmFjee9ruaVsOaNrjIwMDIxKTsKICAgICAgICDmmL7npLrnirbmgIEoJw==") + String(_v895 ? 'موفقیت‌آمیز بود' : _d64("AeW3suimhueblg==")) + _d64("ASAnICsg5bey6YCJ6aG555uu5YiX6KGoMjAwMjQubGVuZ3RoICsgJyA=") + String(_v895 ? 'مورد و ذخیره شد' : _d64("AemhueW5tuW3suS/neWtmA==")) + _d64("AScsICdzdWNjZXNzJyk7CiAgICAgIH0gY2F0Y2ggKOmUmeivrzIwMDIwKSB7CiAgICAgICAg5pi+56S654q25oCBKCc=") + String(_v895 ? 'خطا در ذخیره' : _d64("AeS/neWtmOWksei0pQ==")) + _d64("ATogJyArIOmUmeivrzIwMDIwLm1lc3NhZ2UsICdlcnJvcicpOwogICAgICB9IGZpbmFsbHkgewogICAgICAgIOimhuebluW3sumAieWAvC5kaXNhYmxlZCA9IGZhbHNlOwogICAgICAgIOi/veWKoOW3sumAieWAvC5kaXNhYmxlZCA9IGZhbHNlOwogICAgICAgIOimhuebluW3sumAieWAvC50ZXh0Q29udGVudCA9ICc=") + String(_v895 ? _d64("Aeimhueblua3u+WKoA==") : _d64("Aeimhueblua3u+WKoA==")) + _d64("ASc7CiAgICAgIH0KICAgIH0pOwogIH0KCiAgLy8g6L+95Yqg5re75YqgCiAgaWYgKOi/veWKoOW3sumAieWAvCkgewogICAg6L+95Yqg5bey6YCJ5YC8LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkgewogICAgICBjb25zdCDlt7LpgInpobnnm67liJfooaggPSDojrflj5blt7LpgInpobnnm64oKTsKICAgICAgaWYgKCHlt7LpgInpobnnm67liJfooaggfHwg5bey6YCJ6aG555uu5YiX6KGoLmxlbmd0aCA9PT0gMCkgcmV0dXJuOwogICAgICBjb25zdCDlgLzovpPlhaUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneXgnKTsKICAgICAgY29uc3Qg5b2T5YmN5YC8ID0g5YC86L6T5YWlLnZhbHVlLnRyaW0oKTsKICAgICAgY29uc3Qg5paw6aG555uu5YiX6KGoID0g5bey6YCJ6aG555uu5YiX6KGoLmpvaW4oJywnKTsKICAgICAgY29uc3Qg5paw5YC8ID0g5b2T5YmN5YC8ID8g5b2T5YmN5YC8ICsgJywnICsg5paw6aG555uu5YiX6KGoIDog5paw6aG555uu5YiX6KGoOwogICAgICDlgLzovpPlhaUudmFsdWUgPSDmlrDlgLw7CiAgICAgIOimhuebluW3sumAieWAvC5kaXNhYmxlZCA9IHRydWU7CiAgICAgIOi/veWKoOW3sumAieWAvC5kaXNhYmxlZCA9IHRydWU7CiAgICAgIOi/veWKoOW3sumAieWAvC50ZXh0Q29udGVudCA9ICc=") + String(_v895 ? 'در حال ذخیره...' : _d64("AeS/neWtmOS4rS4uLg==")) + _d64("ASc7CiAgICAgIHRyeSB7CiAgICAgICAgY29uc3Qg6YWN572u5pWw5o2uID0gewogICAgICAgICAgY3VzdG9tSVA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21JUCcpLnZhbHVlLAogICAgICAgICAgeXg6IOaWsOWAvCwKICAgICAgICAgIHl4VVJMOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneXhVUkwnKS52YWx1ZSwKICAgICAgICAgIHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2Nrc0NvbmZpZycpLnZhbHVlCiAgICAgICAgfTsKICAgICAgICBhd2FpdCDkv53lrZjphY3nva4o6YWN572u5pWw5o2uKTsKICAgICAgICDmmL7npLrnirbmgIEoJw==") + String(_v895 ? 'موفقیت‌آمیز بود' : _d64("AeW3sui/veWKoA==")) + _d64("ASAnICsg5bey6YCJ6aG555uu5YiX6KGoLmxlbmd0aCArICcg") + String(_v895 ? 'مورد و ذخیره شد' : _d64("AemhueW5tuW3suS/neWtmA==")) + _d64("AScsICdzdWNjZXNzJyk7CiAgICAgIH0gY2F0Y2ggKOmUmeivrzIwMDE5KSB7CiAgICAgICAg5pi+56S654q25oCBKCc=") + String(_v895 ? 'خطا در ذخیره' : _d64("AeS/neWtmOWksei0pQ==")) + _d64("ATogJyArIOmUmeivrzIwMDE5Lm1lc3NhZ2UsICdlcnJvcicpOwogICAgICB9IGZpbmFsbHkgewogICAgICAgIOimhuebluW3sumAieWAvC5kaXNhYmxlZCA9IGZhbHNlOwogICAgICAgIOi/veWKoOW3sumAieWAvC5kaXNhYmxlZCA9IGZhbHNlOwogICAgICAgIOi/veWKoOW3sumAieWAvC50ZXh0Q29udGVudCA9ICc=") + String(_v895 ? _d64("Aei/veWKoOa3u+WKoA==") : _d64("Aei/veWKoOa3u+WKoA==")) + _d64("ASc7CiAgICAgIH0KICAgIH0pOwogIH0KICBmdW5jdGlvbiDlnLDlnYDovazljYHlha3ov5vliLYo5Zyw5Z2AKSB7CiAgICBjb25zdCDpg6jliIbliJfooaggPSDlnLDlnYAuc3BsaXQoJy4nKTsKICAgIGlmICjpg6jliIbliJfooagubGVuZ3RoICE9PSA0KSByZXR1cm4gbnVsbDsKICAgIGxldCDljYHlha3ov5vliLYgPSAnJzsKICAgIGZvciAobGV0IOe0ouW8leWAvCA9IDA7IOe0ouW8leWAvCA8IDQ7IOe0ouW8leWAvCsrKSB7CiAgICAgIGNvbnN0IOaVsOWtlyA9IHBhcnNlSW50KOmDqOWIhuWIl+ihqFvntKLlvJXlgLxdKTsKICAgICAgaWYgKGlzTmFOKOaVsOWtlykgfHwg5pWw5a2XIDwgMCB8fCDmlbDlrZcgPiAyNTUpIHJldHVybiBudWxsOwogICAgICDljYHlha3ov5vliLYgKz0g5pWw5a2XLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpOwogICAgfQogICAgcmV0dXJuIOWNgeWFrei/m+WItjsKICB9CiAgY29uc3Qg5py65oi/5pig5bCEID0gewogICAgJ1NKQyc6ICfwn4e68J+HuCDlnKPkvZXloZ4nLAogICAgJ0xBWCc6ICfwn4e68J+HuCDmtJvmnYnnn7YnLAogICAgJ1NFQSc6ICfwn4e68J+HuCDopb/pm4Xlm74nLAogICAgJ1NGTyc6ICfwn4e68J+HuCDml6fph5HlsbEnLAogICAgJ0RGVyc6ICfwn4e68J+HuCDovr7mi4nmlq8nLAogICAgJ09SRCc6ICfwn4e68J+HuCDoip3liqDlk6UnLAogICAgJ0lBRCc6ICfwn4e68J+HuCDljY7nm5vpob8nLAogICAgJ0FUTCc6ICfwn4e68J+HuCDkuprnibnlhbDlpKcnLAogICAgJ01JQSc6ICfwn4e68J+HuCDov4jpmL/lr4YnLAogICAgJ0RFTic6ICfwn4e68J+HuCDkuLnkvZsnLAogICAgJ1BIWCc6ICfwn4e68J+HuCDlh6Tlh7Dln44nLAogICAgJ0JPUyc6ICfwn4e68J+HuCDms6Llo6vpob8nLAogICAgJ0VXUic6ICfwn4e68J+HuCDnur3nk6blhYsnLAogICAgJ0pGSyc6ICfwn4e68J+HuCDnur3nuqYnLAogICAgJ0xBUyc6ICfwn4e68J+HuCDmi4nmlq/nu7TliqDmlq8nLAogICAgJ01TUCc6ICfwn4e68J+HuCDmmI7lsLzpmL/ms6LliKnmlq8nLAogICAgJ0RUVyc6ICfwn4e68J+HuCDlupXnibnlvosnLAogICAgJ1BITCc6ICfwn4e68J+HuCDotLnln44nLAogICAgJ0NMVCc6ICfwn4e68J+HuCDlpI/mtJvnibknLAogICAgJ1NMQyc6ICfwn4e68J+HuCDnm5DmuZbln44nLAogICAgJ1BEWCc6ICfwn4e68J+HuCDms6LnibnlhbAnLAogICAgJ1NBTic6ICfwn4e68J+HuCDlnKPlnLDkuprlk6UnLAogICAgJ1RQQSc6ICfwn4e68J+HuCDlnabluJUnLAogICAgJ0lBSCc6ICfwn4e68J+HuCDkvJHmlq/pob8nLAogICAgJ01DTyc6ICfwn4e68J+HuCDlpaXlhbDlpJonLAogICAgJ0FVUyc6ICfwn4e68J+HuCDlpaXmlq/msYAnLAogICAgJ0JOQSc6ICfwn4e68J+HuCDnurPku4Dnu7TlsJQnLAogICAgJ1JEVSc6ICfwn4e68J+HuCDnvZfliKknLAogICAgJ0lORCc6ICfwn4e68J+HuCDljbDnrKzlronnurPms6LliKnmlq8nLAogICAgJ0NNSCc6ICfwn4e68J+HuCDlk6XkvKbluIMnLAogICAgJ01DSSc6ICfwn4e68J+HuCDloKrokKjmlq/ln44nLAogICAgJ09NQSc6ICfwn4e68J+HuCDlpaXpqazlk4gnLAogICAgJ0FCUSc6ICfwn4e68J+HuCDpmL/lsJTkvK/lhYvln7onLAogICAgJ09LQyc6ICfwn4e68J+HuCDkv4TlhYvmi4nojbfpqazln44nLAogICAgJ01FTSc6ICfwn4e68J+HuCDlrZ/oj7Lmlq8nLAogICAgJ0pBWCc6ICfwn4e68J+HuCDmnbDlhYvpgIrnu7TlsJQnLAogICAgJ1JJQyc6ICfwn4e68J+HuCDph4zlo6vmu6EnLAogICAgJ0JVRic6ICfwn4e68J+HuCDluIPms5XnvZcnLAogICAgJ1BJVCc6ICfwn4e68J+HuCDljLnlhbnloKEnLAogICAgJ0NMRSc6ICfwn4e68J+HuCDlhYvliKnlpKvlhbAnLAogICAgJ0NWRyc6ICfwn4e68J+HuCDovpvovpvpgqPmj5AnLAogICAgJ01LRSc6ICfwn4e68J+HuCDlr4blsJTmsoPln7onLAogICAgJ1NUTCc6ICfwn4e68J+HuCDlnKPot6/mmJPmlq8nLAogICAgJ1NBVCc6ICfwn4e68J+HuCDlnKPlronkuJzlsLzlpaUnLAogICAgJ0hOTCc6ICfwn4e68J+HuCDmqoDpppnlsbEnLAogICAgJ0FOQyc6ICfwn4e68J+HuCDlronlhYvpm7flpYcnLAogICAgJ1NNRic6ICfwn4e68J+HuCDokKjlhYvmi4npl6jmiZgnLAogICAgJ09OVCc6ICfwn4e68J+HuCDlronlpKfnlaUnLAogICAgJ09BSyc6ICfwn4e68J+HuCDlpaXlhYvlhbAnLAogICAgJ0hLRyc6ICfwn4et8J+HsCDpppnmuK8nLAogICAgJ1RQRSc6ICfwn4e58J+HvCDlj7DljJcnLAogICAgJ1RTQSc6ICfwn4e58J+HvCDlj7DljJfmnb7lsbEnLAogICAgJ0tISCc6ICfwn4e58J+HvCDpq5jpm4QnLAogICAgJ05SVCc6ICfwn4ev8J+HtSDkuJzkuqzmiJDnlLAnLAogICAgJ0hORCc6ICfwn4ev8J+HtSDkuJzkuqznvr3nlLAnLAogICAgJ0tJWCc6ICfwn4ev8J+HtSDlpKfpmKrlhbPopb8nLAogICAgJ0lUTSc6ICfwn4ev8J+HtSDlpKfpmKrkvIrkuLknLAogICAgJ05HTyc6ICfwn4ev8J+HtSDlkI3lj6TlsYsnLAogICAgJ0ZVSyc6ICfwn4ev8J+HtSDnpo/lhognLAogICAgJ0NUUyc6ICfwn4ev8J+HtSDmnK3luYwnLAogICAgJ09LQSc6ICfwn4ev8J+HtSDlhrLnu7MnLAogICAgJ0lDTic6ICfwn4ew8J+HtyDpppblsJTku4Hlt50nLAogICAgJ0dNUCc6ICfwn4ew8J+HtyDpppblsJTph5HmtaYnLAogICAgJ1BVUyc6ICfwn4ew8J+HtyDph5zlsbEnLAogICAgJ1NJTic6ICfwn4e48J+HrCDmlrDliqDlnaEnLAogICAgJ0JLSyc6ICfwn4e58J+HrSDmm7zosLcnLAogICAgJ0RNSyc6ICfwn4e58J+HrSDmm7zosLflu4rmm7wnLAogICAgJ0tVTCc6ICfwn4ey8J+HviDlkInpmoblnaEnLAogICAgJ0NHSyc6ICfwn4eu8J+HqSDpm4XliqDovr4nLAogICAgJ01OTCc6ICfwn4e18J+HrSDpqazlsLzmi4knLAogICAgJ0NFQic6ICfwn4e18J+HrSDlrr/liqEnLAogICAgJ0hBTic6ICfwn4e78J+HsyDmsrPlhoUnLAogICAgJ1NHTic6ICfwn4e78J+HsyDog6Hlv5fmmI4nLAogICAgJ0RBRCc6ICfwn4e78J+HsyDlspjmuK8nLAogICAgJ1JHTic6ICfwn4ey8J+HsiDku7DlhYknLAogICAgJ1BOSCc6ICfwn4ew8J+HrSDph5HovrknLAogICAgJ1JFUCc6ICfwn4ew8J+HrSDmmrnnspInLAogICAgJ1ZURSc6ICfwn4ex8J+HpiDkuIfosaEnLAogICAgJ0JPTSc6ICfwn4eu8J+HsyDlrZ/kubAnLAogICAgJ0RFTCc6ICfwn4eu8J+HsyDmlrDlvrfph4wnLAogICAgJ01BQSc6ICfwn4eu8J+HsyDph5HlpYgnLAogICAgJ0JMUic6ICfwn4eu8J+HsyDnj63liqDnvZflsJQnLAogICAgJ0NDVSc6ICfwn4eu8J+HsyDliqDlsJTlkITnrZQnLAogICAgJ0hZRCc6ICfwn4eu8J+HsyDmtbflvpfmi4nlt7QnLAogICAgJ0FNRCc6ICfwn4eu8J+HsyDoib7lk4jov4jovr7lt7TlvrcnLAogICAgJ0NPSyc6ICfwn4eu8J+HsyDnp5HpkqYnLAogICAgJ1BOUSc6ICfwn4eu8J+HsyDmtabpgqMnLAogICAgJ0dPSSc6ICfwn4eu8J+HsyDmnpzpmL8nLAogICAgJ0NNQic6ICfwn4ex8J+HsCDnp5HkvKblnaEnLAogICAgJ0RBQyc6ICfwn4en8J+HqSDovr7ljaEnLAogICAgJ0tUTSc6ICfwn4ez8J+HtSDliqDlvrfmu6Hpg70nLAogICAgJ0lTQic6ICfwn4e18J+HsCDkvIrmlq/lhbDloKEnLAogICAgJ0tISSc6ICfwn4e18J+HsCDljaHmi4nlpYcnLAogICAgJ0xIRSc6ICfwn4e18J+HsCDmi4nlkIjlsJQnLAogICAgJ0xIUic6ICfwn4es8J+HpyDkvKbmlabluIzmgJ3nvZcnLAogICAgJ0xHVyc6ICfwn4es8J+HpyDkvKbmlabnm5bnibnlqIHlhYsnLAogICAgJ1NUTic6ICfwn4es8J+HpyDkvKbmlabmlq/lnabmlq/nibnlvrcnLAogICAgJ0xUTic6ICfwn4es8J+HpyDkvKbmlabljaLpob8nLAogICAgJ01BTic6ICfwn4es8J+HpyDmm7zlvbvmlq/nibknLAogICAgJ0VESSc6ICfwn4es8J+HpyDniLHkuIHloKEnLAogICAgJ0JIWCc6ICfwn4es8J+HpyDkvK/mmI7nv7AnLAogICAgJ0NERyc6ICfwn4er8J+HtyDlt7Tpu47miLTpq5jkuZAnLAogICAgJ09SWSc6ICfwn4er8J+HtyDlt7Tpu47lpaXliKknLAogICAgJ01SUyc6ICfwn4er8J+HtyDpqazotZsnLAogICAgJ0xZUyc6ICfwn4er8J+HtyDph4zmmIInLAogICAgJ05DRSc6ICfwn4er8J+HtyDlsLzmlq8nLAogICAgJ0ZSQSc6ICfwn4ep8J+HqiDms5XlhbDlhYvnpo8nLAogICAgJ01VQyc6ICfwn4ep8J+HqiDmhZXlsLzpu5EnLAogICAgJ1RYTCc6ICfwn4ep8J+HqiDmn4/mnpcnLAogICAgJ0JFUic6ICfwn4ep8J+HqiDmn4/mnpfli4PlhbDnmbvloKEnLAogICAgJ0hBTSc6ICfwn4ep8J+HqiDmsYnloKEnLAogICAgJ0RVUyc6ICfwn4ep8J+HqiDmnZzloZ7lsJTlpJrlpKsnLAogICAgJ0NHTic6ICfwn4ep8J+HqiDnp5HpmoYnLAogICAgJ1NUUic6ICfwn4ep8J+HqiDmlq/lm77liqDnibknLAogICAgJ0FNUyc6ICfwn4ez8J+HsSDpmL/lp4bmlq/nibnkuLknLAogICAgJ0JSVSc6ICfwn4en8J+HqiDluIPpsoHloZ7lsJQnLAogICAgJ0xVWCc6ICfwn4ex8J+HuiDljaLmo67loKEnLAogICAgJ1pSSCc6ICfwn4eo8J+HrSDoi4/pu47kuJYnLAogICAgJ0dWQSc6ICfwn4eo8J+HrSDml6XlhoXnk6YnLAogICAgJ0JTTCc6ICfwn4eo8J+HrSDlt7TloZ7lsJQnLAogICAgJ1ZJRSc6ICfwn4em8J+HuSDnu7TkuZ/nurMnLAogICAgJ1BSRyc6ICfwn4eo8J+HvyDluIPmi4nmoLwnLAogICAgJ0JVRCc6ICfwn4et8J+HuiDluIPovr7kvanmlq8nLAogICAgJ1dBVyc6ICfwn4e18J+HsSDljY7mspknLAogICAgJ0tSSyc6ICfwn4e18J+HsSDlhYvmi4nnp5HlpKsnLAogICAgJ01YUCc6ICfwn4eu8J+HuSDnsbPlhbDpqazlsJTlva3okKgnLAogICAgJ0xJTic6ICfwn4eu8J+HuSDnsbPlhbDliKnnurPnibknLAogICAgJ0ZDTyc6ICfwn4eu8J+HuSDnvZfpqawnLAogICAgJ1ZDRSc6ICfwn4eu8J+HuSDlqIHlsLzmlq8nLAogICAgJ05BUCc6ICfwn4eu8J+HuSDpgqPkuI3li5Lmlq8nLAogICAgJ0ZMUic6ICfwn4eu8J+HuSDkvZvnvZfkvKbokKgnLAogICAgJ0JHWSc6ICfwn4eu8J+HuSDotJ3liqDojqsnLAogICAgJ01BRCc6ICfwn4eq8J+HuCDpqazlvrfph4wnLAogICAgJ0JDTic6ICfwn4eq8J+HuCDlt7TloZ7nvZfpgqMnLAogICAgJ1BNSSc6ICfwn4eq8J+HuCDluJXlsJTpqawnLAogICAgJ0FHUCc6ICfwn4eq8J+HuCDpqazmi4nliqAnLAogICAgJ1ZMQyc6ICfwn4eq8J+HuCDnk6bkvKbopb/kuponLAogICAgJ1NWUSc6ICfwn4eq8J+HuCDloZ7nu7TliKnkuponLAogICAgJ0JJTyc6ICfwn4eq8J+HuCDmr5XlsJTlt7TphIInLAogICAgJ0xJUyc6ICfwn4e18J+HuSDph4zmlq/mnKwnLAogICAgJ09QTyc6ICfwn4e18J+HuSDms6LlsJTlm74nLAogICAgJ0ZBTyc6ICfwn4e18J+HuSDms5XpsoEnLAogICAgJ0RVQic6ICfwn4eu8J+HqiDpg73mn4/mnpcnLAogICAgJ0NQSCc6ICfwn4ep8J+HsCDlk6XmnKzlk4jmoLknLAogICAgJ0FSTic6ICfwn4e48J+HqiDmlq/lvrflk6XlsJTmkaknLAogICAgJ0dPVCc6ICfwn4e48J+HqiDlk6XlvrfloKEnLAogICAgJ09TTCc6ICfwn4ez8J+HtCDlpaXmlq/pmYYnLAogICAgJ0JHTyc6ICfwn4ez8J+HtCDljZHlsJTmoLknLAogICAgJ0hFTCc6ICfwn4er8J+HriDotavlsJTovpvln7onLAogICAgJ1JJWCc6ICfwn4ex8J+HuyDph4zliqAnLAogICAgJ1RMTCc6ICfwn4eq8J+HqiDloZTmnpcnLAogICAgJ1ZOTyc6ICfwn4ex8J+HuSDnu7TlsJTnur3mlq8nLAogICAgJ0FUSCc6ICfwn4es8J+HtyDpm4XlhbgnLAogICAgJ1NLRyc6ICfwn4es8J+HtyDloZ7okKjmtJvlsLzln7onLAogICAgJ1NPRic6ICfwn4en8J+HrCDntKLpnZ7kuponLAogICAgJ09UUCc6ICfwn4e38J+HtCDluIPliqDli5Lmlq/nibknLAogICAgJ0JFRyc6ICfwn4e38J+HuCDotJ3lsJTmoLzojrHlvrcnLAogICAgJ1pBRyc6ICfwn4et8J+HtyDokKjmoLzli5LluIMnLAogICAgJ0xKVSc6ICfwn4e48J+HriDljaLluIPlsJTpm4XpgqMnLAogICAgJ0tCUCc6ICfwn4e68J+HpiDln7rovoUnLAogICAgJ0lFVic6ICfwn4e68J+HpiDln7rovoXojLnoia/lsLwnLAogICAgJ09EUyc6ICfwn4e68J+HpiDmlZblvrfokKgnLAogICAgJ1NWTyc6ICfwn4e38J+HuiDojqvmlq/np5HosKLliJfmooXmjbfmsoMnLAogICAgJ0RNRSc6ICfwn4e38J+HuiDojqvmlq/np5HlpJrojqvmnbDlpJrmsoMnLAogICAgJ1ZLTyc6ICfwn4e38J+HuiDojqvmlq/np5HkvI/liqrnp5HmsoMnLAogICAgJ0xFRCc6ICfwn4e38J+HuiDlnKPlvbzlvpfloKEnLAogICAgJ0lTVCc6ICfwn4e58J+HtyDkvIrmlq/lnabluIPlsJQnLAogICAgJ1NBVyc6ICfwn4e58J+HtyDkvIrmlq/lnabluIPlsJTokKjmr5Tlk4gnLAogICAgJ0VTQic6ICfwn4e58J+HtyDlronljaHmi4knLAogICAgJ0FZVCc6ICfwn4e58J+HtyDlronloZTliKnkuponLAogICAgJ0FEQic6ICfwn4e58J+HtyDkvIrlhbnlr4blsJQnLAogICAgJ1RMVic6ICfwn4eu8J+HsSDnibnmi4nnu7TlpKsnLAogICAgJ0FNTSc6ICfwn4ev8J+HtCDlronmm7wnLAogICAgJ0JFWSc6ICfwn4ex8J+HpyDotJ3psoHnibknLAogICAgJ0JBSCc6ICfwn4en8J+HrSDlt7TmnpcnLAogICAgJ0tXSSc6ICfwn4ew8J+HvCDnp5HlqIHnibknLAogICAgJ0RYQic6ICfwn4em8J+HqiDov6rmi5wnLAogICAgJ0FVSCc6ICfwn4em8J+HqiDpmL/luIPmiY7mr5QnLAogICAgJ1NISic6ICfwn4em8J+HqiDmspnov6YnLAogICAgJ0RPSCc6ICfwn4e28J+HpiDlpJrlk4gnLAogICAgJ01DVCc6ICfwn4e08J+HsiDpqazmlq/lloDnibknLAogICAgJ1JVSCc6ICfwn4e48J+HpiDliKnpm4XlvpcnLAogICAgJ0pFRCc6ICfwn4e48J+HpiDlkInovr4nLAogICAgJ0RNTSc6ICfwn4e48J+HpiDovr7mm7wnLAogICAgJ0NBSSc6ICfwn4eq8J+HrCDlvIDnvZcnLAogICAgJ0hCRSc6ICfwn4eq8J+HrCDkuprljoblsbHlpKcnLAogICAgJ1NTSCc6ICfwn4eq8J+HrCDmspnlp4bmspnkvIrotasnLAogICAgJ0NNTic6ICfwn4ey8J+HpiDljaHokKjluIPlhbDljaEnLAogICAgJ1JBSyc6ICfwn4ey8J+HpiDpqazmi4nlloDku4AnLAogICAgJ1RVTic6ICfwn4e58J+HsyDnqoHlsLzmlq8nLAogICAgJ0FMRyc6ICfwn4ep8J+HvyDpmL/lsJTlj4rlsJQnLAogICAgJ0xPUyc6ICfwn4ez8J+HrCDmi4nlkITmlq8nLAogICAgJ0FCVic6ICfwn4ez8J+HrCDpmL/luIPotL4nLAogICAgJ0FDQyc6ICfwn4es8J+HrSDpmL/lhYvmi4knLAogICAgJ05CTyc6ICfwn4ew8J+HqiDlhoXnvZfmr5UnLAogICAgJ01CQSc6ICfwn4ew8J+HqiDokpnlt7TokKgnLAogICAgJ0FERCc6ICfwn4eq8J+HuSDkuprnmoTmlq/kuprotJ3lt7QnLAogICAgJ0RBUic6ICfwn4e58J+HvyDovr7ntK/mlq/okKjmi4nlp4YnLAogICAgJ0pOQic6ICfwn4e/8J+HpiDnuqbnv7DlhoXmlq/loKEnLAogICAgJ0NQVCc6ICfwn4e/8J+HpiDlvIDmma7mlaYnLAogICAgJ0RVUic6ICfwn4e/8J+HpiDlvrfnj60nLAogICAgJ0hSRSc6ICfwn4e/8J+HvCDlk4jmi4npm7cnLAogICAgJ0xVTic6ICfwn4e/8J+HsiDljaLokKjljaEnLAogICAgJ01SVSc6ICfwn4ey8J+HuiDmr5vph4zmsYLmlq8nLAogICAgJ1NFWic6ICfwn4e48J+HqCDloZ7oiIzlsJQnLAogICAgJ1NZRCc6ICfwn4em8J+HuiDmgonlsLwnLAogICAgJ01FTCc6ICfwn4em8J+HuiDloqjlsJTmnKwnLAogICAgJ0JORSc6ICfwn4em8J+HuiDluIPph4zmlq/nj60nLAogICAgJ1BFUic6ICfwn4em8J+HuiDnj4Dmlq8nLAogICAgJ0FETCc6ICfwn4em8J+HuiDpmL/lvrfojrHlvrcnLAogICAgJ0NCUic6ICfwn4em8J+HuiDloKrln7nmi4knLAogICAgJ09PTCc6ICfwn4em8J+HuiDpu4Tph5HmtbflsrgnLAogICAgJ0NOUyc6ICfwn4em8J+HuiDlh6/mganmlq8nLAogICAgJ0FLTCc6ICfwn4ez8J+HvyDlpaXlhYvlhbAnLAogICAgJ1dMRyc6ICfwn4ez8J+HvyDmg6DngbXpob8nLAogICAgJ0NIQyc6ICfwn4ez8J+HvyDln7rnnaPln44nLAogICAgJ1pRTic6ICfwn4ez8J+HvyDnmoflkI7plYcnLAogICAgJ05BTic6ICfwn4er8J+HryDmpaDov6onLAogICAgJ1BQVCc6ICfwn4e18J+HqyDluJXnmq7mj5AnLAogICAgJ0dVTSc6ICfwn4es8J+HuiDlhbPlspsnLAogICAgJ0dSVSc6ICfwn4en8J+HtyDlnKPkv53nvZfnk5zpsoHmn7Pmlq8nLAogICAgJ0NHSCc6ICfwn4en8J+HtyDlnKPkv53nvZflrZTmiIjlsLzkuprmlq8nLAogICAgJ0dJRyc6ICfwn4en8J+HtyDph4znuqbng63lhoXljaInLAogICAgJ0JTQic6ICfwn4en8J+HtyDlt7Topb/liKnkuponLAogICAgJ0NORic6ICfwn4en8J+HtyDotJ3mtJvlpaXph4zol4/nibknLAogICAgJ1BPQSc6ICfwn4en8J+HtyDpmL/pm7fmoLzph4zmuK8nLAogICAgJ0NXQic6ICfwn4en8J+HtyDlupPph4zokoLlt7QnLAogICAgJ0ZPUic6ICfwn4en8J+HtyDnpo/loZTojrHokKgnLAogICAgJ1JFQyc6ICfwn4en8J+HtyDntK/opb/ohZMnLAogICAgJ1NTQSc6ICfwn4en8J+HtyDokKjlsJTnk6blpJonLAogICAgJ0VaRSc6ICfwn4em8J+HtyDluIPlrpzor7rmlq/oib7liKnmlq8nLAogICAgJ0FFUCc6ICfwn4em8J+HtyDluIPlrpzor7rmlq/oib7liKnmlq/ln44nLAogICAgJ0NPUic6ICfwn4em8J+HtyDnp5HlsJTlpJrnk6YnLAogICAgJ01EWic6ICfwn4em8J+HtyDpl6jlpJrokKgnLAogICAgJ1NDTCc6ICfwn4eo8J+HsSDlnKPlnLDkuprlk6UnLAogICAgJ0xJTSc6ICfwn4e18J+HqiDliKnpqawnLAogICAgJ0JPRyc6ICfwn4eo8J+HtCDms6Llk6XlpKcnLAogICAgJ01ERSc6ICfwn4eo8J+HtCDpuqblvrfmnpcnLAogICAgJ0NMTyc6ICfwn4eo8J+HtCDljaHliKknLAogICAgJ1VJTyc6ICfwn4eq8J+HqCDln7rlpJonLAogICAgJ0dZRSc6ICfwn4eq8J+HqCDnk5zkuprln7rlsJQnLAogICAgJ0NDUyc6ICfwn4e78J+HqiDliqDmi4nliqDmlq8nLAogICAgJ01WRCc6ICfwn4e68J+HviDokpnlvpfnu7TnmoTkuponLAogICAgJ0FTVSc6ICfwn4e18J+HviDkuprmnb7mo64nLAogICAgJ1BUWSc6ICfwn4e18J+HpiDlt7Tmi7/pqazln44nLAogICAgJ1NKTyc6ICfwn4eo8J+HtyDlnKPkvZXloZ4nLAogICAgJ0dVQSc6ICfwn4es8J+HuSDljbHlnLDpqazmi4nln44nLAogICAgJ1NBTCc6ICfwn4e48J+HuyDlnKPokKjlsJTnk6blpJonLAogICAgJ1RHVSc6ICfwn4et8J+HsyDnibnlj6Topb/liqDlsJTlt7QnLAogICAgJ01HQSc6ICfwn4ez8J+HriDpqazpgqPnk5wnLAogICAgJ0JaRSc6ICfwn4en8J+HvyDkvK/liKnlhbnln44nLAogICAgJ01FWCc6ICfwn4ey8J+HvSDloqjopb/lk6Xln44nLAogICAgJ0dETCc6ICfwn4ey8J+HvSDnk5zovr7mi4nlk4jmi4knLAogICAgJ01UWSc6ICfwn4ey8J+HvSDokpnnibnpm7cnLAogICAgJ0NVTic6ICfwn4ey8J+HvSDlnY7mmIYnLAogICAgJ1RJSic6ICfwn4ey8J+HvSDokoLljY7nurMnLAogICAgJ1NKRCc6ICfwn4ey8J+HvSDlnKPkvZXloZ7lvrflsJTljaHmsoMnLAogICAgJ1lZWic6ICfwn4eo8J+HpiDlpJrkvKblpJonLAogICAgJ1lWUic6ICfwn4eo8J+HpiDmuKnlk6XljY4nLAogICAgJ1lVTCc6ICfwn4eo8J+HpiDokpnnibnliKnlsJQnLAogICAgJ1lZQyc6ICfwn4eo8J+HpiDljaHlsJTliqDph4wnLAogICAgJ1lFRyc6ICfwn4eo8J+HpiDln4Plvrfokpnpob8nLAogICAgJ1lPVyc6ICfwn4eo8J+HpiDmuKXlpKrljY4nLAogICAgJ1lXRyc6ICfwn4eo8J+HpiDmuKnlsLzkvK8nLAogICAgJ1lIWic6ICfwn4eo8J+HpiDlk4jliKnms5XlhYvmlq8nLAogICAgJ0hBVic6ICfwn4eo8J+HuiDlk4jnk6bpgqMnLAogICAgJ1NKVSc6ICfwn4e18J+HtyDlnKPog6HlroknLAogICAgJ1NEUSc6ICfwn4ep8J+HtCDlnKPlpJrmmI7lkIQnLAogICAgJ1BBUCc6ICfwn4et8J+HuSDlpKrlrZDmuK8nLAogICAgJ0tJTic6ICfwn4ev8J+HsiDph5Hmlq/pob8nLAogICAgJ05BUyc6ICfwn4en8J+HuCDmi7/pqponLAogICAgJ01CSic6ICfwn4ev8J+HsiDokpnnibnlk6XotJ0nCiAgfTsKICBmdW5jdGlvbiDojrflj5bmnLrmiL/lkI3np7Ao5py65oi/MjAwMTgpIHsKICAgIHJldHVybiDmnLrmiL/mmKDlsIRb5py65oi/MjAwMThdIHx8IOacuuaIvzIwMDE4OwogIH0KCiAgLy8g5Z+O5biC562b6YCJ55u45YWz5Ye95pWwCiAgY29uc3Qg5Z+O5biC562b6YCJ5YC8ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHlGaWx0ZXJDb250YWluZXInKTsKICBjb25zdCDln47luILlgLzlgLwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eUNoZWNrYm94ZXNDb250YWluZXInKTsKICBmdW5jdGlvbiDmm7TmlrDln47luILnrZvpgIkoKSB7CiAgICBpZiAoIeWfjuW4guetm+mAieWAvCB8fCAh5Z+O5biC5YC85YC8KSByZXR1cm47CgogICAgLy8g5LuO5rWL6K+V57uT5p6c5Lit5o+Q5Y+W5omA5pyJ5Y+v55So55qE5Z+O5biCCiAgICBjb25zdCDln47luILmmKDlsIQgPSBuZXcgTWFwKCk7CiAgICDmtYvor5Xnu5PmnpzliJfooaguZm9yRWFjaCgo57uT5p6cMjAwMTcsIOe0ouW8lTIwMDE2KSA9PiB7CiAgICAgIGlmICjnu5PmnpwyMDAxNy5zdWNjZXNzICYmIOe7k+aenDIwMDE3LmNvbG8pIHsKICAgICAgICBjb25zdCDmnLrmiL8yMDAxNSA9IOe7k+aenDIwMDE3LmNvbG87CiAgICAgICAgaWYgKCHln47luILmmKDlsIQuaGFzKOacuuaIvzIwMDE1KSkgewogICAgICAgICAg5Z+O5biC5pig5bCELnNldCjmnLrmiL8yMDAxNSwgewogICAgICAgICAgICBjb2xvOiDmnLrmiL8yMDAxNSwKICAgICAgICAgICAgbmFtZTog6I635Y+W5py65oi/5ZCN56ewKOacuuaIvzIwMDE1KSwKICAgICAgICAgICAgY291bnQ6IDAKICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgICDln47luILmmKDlsIQuZ2V0KOacuuaIvzIwMDE1KS5jb3VudCsrOwogICAgICB9CiAgICB9KTsKICAgIGlmICjln47luILmmKDlsIQuc2l6ZSA9PT0gMCkgewogICAgICDln47luILnrZvpgInlgLwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsKICAgICAgcmV0dXJuOwogICAgfQogICAg5Z+O5biC562b6YCJ5YC8LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOwogICAg5Z+O5biC5YC85YC8LmlubmVySFRNTCA9ICcnOwoKICAgIC8vIOaMieWfjuW4guWQjeensOaOkuW6jwogICAgY29uc3Qg5Z+O5biC5YiX6KGoID0gQXJyYXkuZnJvbSjln47luILmmKDlsIQudmFsdWVzKCkpLnNvcnQoKOeUsuWAvDIwMDE0LCDkuZnlgLwyMDAxMykgPT4g55Sy5YC8MjAwMTQubmFtZS5sb2NhbGVDb21wYXJlKOS5meWAvDIwMDEzLm5hbWUpKTsKICAgIOWfjuW4guWIl+ihqC5mb3JFYWNoKOWfjuW4giA9PiB7CiAgICAgIGNvbnN0IOagh+etviA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7CiAgICAgIOagh+etvi5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjYzhmMTM1OyBmb250LXNpemU6IDAuODVyZW07IHBhZGRpbmc6IDRweCA4cHg7IGJhY2tncm91bmQ6IHJnYmEoMTEsMTQsMjAsMC40KTsgYm9yZGVyOiAxcHggc29saWQgIzlhYTZiODsgYm9yZGVyLXJhZGl1czogNHB4Oyc7CiAgICAgIGNvbnN0IOWkjemAieahhjIwMDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsKICAgICAg5aSN6YCJ5qGGMjAwMTIudHlwZSA9ICdjaGVja2JveCc7CiAgICAgIOWkjemAieahhjIwMDEyLnZhbHVlID0g5Z+O5biCLmNvbG87CiAgICAgIOWkjemAieahhjIwMDEyLmNoZWNrZWQgPSB0cnVlOwogICAgICDlpI3pgInmoYYyMDAxMi5kYXRhc2V0LmNvbG8gPSDln47luIIuY29sbzsKICAgICAg5aSN6YCJ5qGGMjAwMTIuc3R5bGUuY3NzVGV4dCA9ICdtYXJnaW4tcmlnaHQ6IDZweDsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgY3Vyc29yOiBwb2ludGVyOyc7CiAgICAgIGNvbnN0IOacrOWcsOWAvDIwMDExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpOwogICAgICDmnKzlnLDlgLwyMDAxMS50ZXh0Q29udGVudCA9IOWfjuW4gi5uYW1lICsgJyAoJyArIOWfjuW4gi5jb3VudCArICcpJzsKICAgICAg5qCH562+LmFwcGVuZENoaWxkKOWkjemAieahhjIwMDEyKTsKICAgICAg5qCH562+LmFwcGVuZENoaWxkKOacrOWcsOWAvDIwMDExKTsKICAgICAg5Z+O5biC5YC85YC8LmFwcGVuZENoaWxkKOagh+etvik7CiAgICAgIOWkjemAieahhjIwMDEyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIOaMieWfjuW4guetm+mAiee7k+aenCk7CiAgICB9KTsKCiAgICAvLyDnm5HlkKznrZvpgInmqKHlvI/lj5jljJYKICAgIGNvbnN0IOetm+mAieWAvOWAvCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9ImNpdHlGaWx0ZXJNb2RlIl0nKTsKICAgIOetm+mAieWAvOWAvC5mb3JFYWNoKOWNlemAieahhiA9PiB7CiAgICAgIOWNlemAieahhi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09ICdhbGwnKSB7CiAgICAgICAgICAvLyDliIfmjaLliLAi5YWo6YOo5Z+O5biCIuaooeW8j+aXtu+8jOiHquWKqOmAieS4reaJgOacieWfjuW4guWkjemAieahhgogICAgICAgICAgY29uc3Qg5Z+O5biC5YC8MjAwMTAgPSDln47luILlgLzlgLwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT0iY2hlY2tib3giXScpOwogICAgICAgICAg5Z+O5biC5YC8MjAwMTAuZm9yRWFjaCjmnKzlnLDlgLwyMDAwOSA9PiB7CiAgICAgICAgICAgIOacrOWcsOWAvDIwMDA5LmNoZWNrZWQgPSB0cnVlOwogICAgICAgICAgICDmnKzlnLDlgLwyMDAwOS5kaXNhYmxlZCA9IGZhbHNlOwogICAgICAgICAgfSk7CiAgICAgICAgfQogICAgICAgIOaMieWfjuW4guetm+mAiee7k+aenCgpOwogICAgICB9KTsKICAgIH0pOwogIH0KICBmdW5jdGlvbiDmjInln47luILnrZvpgInnu5PmnpwoKSB7CiAgICBpZiAoIee7k+aenOWIl+ihqOWIl+ihqCB8fCAh5Z+O5biC5YC85YC8KSByZXR1cm47CiAgICBjb25zdCDnrZvpgInlgLwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPSJjaXR5RmlsdGVyTW9kZSJdOmNoZWNrZWQnKT8udmFsdWUgfHwgJ2FsbCc7CiAgICBjb25zdCDnu5Pmnpzpobnnm67liJfooaggPSDnu5PmnpzliJfooajliJfooagucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaW5kZXhdJyk7CiAgICBjb25zdCDln47luILlgLwgPSDln47luILlgLzlgLwucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT0iY2hlY2tib3giXScpOwogICAgaWYgKOetm+mAieWAvCA9PT0gJ2Zhc3Rlc3QxMCcpIHsKICAgICAgLy8g5Y+q6YCJ5oup5pyA5b+r55qEMTDkuKoKICAgICAgY29uc3Qg5YC857uT5p6c5YiX6KGoID0g5rWL6K+V57uT5p6c5YiX6KGoLm1hcCgo57uT5p6cLCDntKLlvJUyMDAwOCkgPT4gKHsKICAgICAgICByZXN1bHQ6IOe7k+aenCwKICAgICAgICBpbmRleDog57Si5byVMjAwMDgKICAgICAgfSkpLmZpbHRlcijpobnnm64yMDAwNyA9PiDpobnnm64yMDAwNy5yZXN1bHQuc3VjY2Vzcykuc29ydCgo55Sy5YC8LCDkuZnlgLwpID0+IOeUsuWAvC5yZXN1bHQubGF0ZW5jeSAtIOS5meWAvC5yZXN1bHQubGF0ZW5jeSkuc2xpY2UoMCwgMTApOwogICAgICBjb25zdCDmnIDlv6vntKLlvJXpm4blkIggPSBuZXcgU2V0KOWAvOe7k+aenOWIl+ihqC5tYXAo6aG555uuMjAwMDYgPT4g6aG555uuMjAwMDYuaW5kZXgpKTsKICAgICAg57uT5p6c6aG555uu5YiX6KGoLmZvckVhY2go6aG555uuMjAwMDUgPT4gewogICAgICAgIGNvbnN0IOe0ouW8lSA9IHBhcnNlSW50KOmhueebrjIwMDA1LmRhdGFzZXQuaW5kZXgpOwogICAgICAgIGNvbnN0IOWkjemAieahhjIwMDA0ID0g6aG555uuMjAwMDUucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT0iY2hlY2tib3giXScpOwogICAgICAgIGlmICjmnIDlv6vntKLlvJXpm4blkIguaGFzKOe0ouW8lSkpIHsKICAgICAgICAgIOmhueebrjIwMDA1LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7CiAgICAgICAgICBpZiAo5aSN6YCJ5qGGMjAwMDQpIOWkjemAieahhjIwMDA0LmNoZWNrZWQgPSB0cnVlOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICDpobnnm64yMDAwNS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwogICAgICAgICAgaWYgKOWkjemAieahhjIwMDA0KSDlpI3pgInmoYYyMDAwNC5jaGVja2VkID0gZmFsc2U7CiAgICAgICAgfQogICAgICB9KTsKCiAgICAgIC8vIOemgeeUqOWfjuW4guWkjemAieahhgogICAgICDln47luILlgLwuZm9yRWFjaCjmnKzlnLDlgLwyMDAwMyA9PiDmnKzlnLDlgLwyMDAwMy5kaXNhYmxlZCA9IHRydWUpOwogICAgfSBlbHNlIHsKICAgICAgLy8g5qC55o2u6YCJ5Lit55qE5Z+O5biC562b6YCJCiAgICAgIGNvbnN0IOW3sumAieWfjuW4guWIl+ihqCA9IG5ldyBTZXQoKTsKICAgICAg5Z+O5biC5YC8LmZvckVhY2go5pys5Zyw5YC8MjAwMDIgPT4gewogICAgICAgIGlmICjmnKzlnLDlgLwyMDAwMi5jaGVja2VkKSB7CiAgICAgICAgICDlt7LpgInln47luILliJfooaguYWRkKOacrOWcsOWAvDIwMDAyLnZhbHVlKTsKICAgICAgICB9CiAgICAgIH0pOwoKICAgICAgLy8g5aaC5p6c5omA5pyJ5Z+O5biC6YO96KKr6YCJ5Lit77yI5oiW5rKh5pyJ6YCJ5Lit5Lu75L2V5Z+O5biC77yJ77yM5pi+56S65omA5pyJ57uT5p6cCiAgICAgIGNvbnN0IOWAvOWAvDIwMDAxID0g5Z+O5biC5YC8Lmxlbmd0aCA+IDAgJiYg5bey6YCJ5Z+O5biC5YiX6KGoLnNpemUgPT09IOWfjuW4guWAvC5sZW5ndGg7CiAgICAgIGNvbnN0IOWAvOWAvCA9IOW3sumAieWfjuW4guWIl+ihqC5zaXplID09PSAwOwogICAgICDnu5Pmnpzpobnnm67liJfooaguZm9yRWFjaCjpobnnm64gPT4gewogICAgICAgIGNvbnN0IOacuuaIvzIwMDAwID0g6aG555uuLmRhdGFzZXQuY29sbyB8fCAnJzsKICAgICAgICBjb25zdCDlpI3pgInmoYYgPSDpobnnm64ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT0iY2hlY2tib3giXScpOwogICAgICAgIGlmICjlgLzlgLwyMDAwMSB8fCDlgLzlgLwgfHwg5bey6YCJ5Z+O5biC5YiX6KGoLmhhcyjmnLrmiL8yMDAwMCkpIHsKICAgICAgICAgIOmhueebri5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOwogICAgICAgICAgLy8g5ZCM5q2l5pu05paw57uT5p6c6aG55aSN6YCJ5qGG55qE6YCJ5Lit54q25oCBCiAgICAgICAgICBpZiAo5aSN6YCJ5qGGKSB7CiAgICAgICAgICAgIGlmICjlgLzlgLwyMDAwMSkgewogICAgICAgICAgICAgIC8vIOaJgOacieWfjuW4gumDvemAieS4reaXtu+8jOaJgOaciee7k+aenOmhueWkjemAieahhumDvemAieS4rQogICAgICAgICAgICAgIOWkjemAieahhi5jaGVja2VkID0gdHJ1ZTsKICAgICAgICAgICAgfSBlbHNlIGlmICjlgLzlgLwpIHsKICAgICAgICAgICAgICAvLyDmsqHmnInpgInkuK3ku7vkvZXln47luILml7bvvIzmiYDmnInnu5PmnpzpobnlpI3pgInmoYbpg73lj5bmtojpgInkuK0KICAgICAgICAgICAgICDlpI3pgInmoYYuY2hlY2tlZCA9IGZhbHNlOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgIC8vIOagueaNruWfjuW4gumAieaLqeeKtuaAgeWQjOatpeWkjemAieahhgogICAgICAgICAgICAgIOWkjemAieahhi5jaGVja2VkID0g5bey6YCJ5Z+O5biC5YiX6KGoLmhhcyjmnLrmiL8yMDAwMCk7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgewogICAgICAgICAg6aG555uuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7CiAgICAgICAgICAvLyDlj5bmtojpgInkuK3pmpDol4/nmoTnu5PmnpzpobnlpI3pgInmoYYKICAgICAgICAgIGlmICjlpI3pgInmoYYpIHsKICAgICAgICAgICAg5aSN6YCJ5qGGLmNoZWNrZWQgPSBmYWxzZTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0pOwoKICAgICAgLy8g5ZCv55So5Z+O5biC5aSN6YCJ5qGGCiAgICAgIOWfjuW4guWAvC5mb3JFYWNoKOacrOWcsOWAvCA9PiDmnKzlnLDlgLwuZGlzYWJsZWQgPSBmYWxzZSk7CiAgICB9CiAgfQogIGFzeW5jIGZ1bmN0aW9uIOa1i+ivleW7tui/nyjkuLvmnLosIOerr+WPoywg5L+h5Y+3KSB7CiAgICBjb25zdCDotoXml7YgPSA4MDAwOwogICAgbGV0IOacuuaIvyA9ICcnOwogICAgbGV0IOa1i+ivlee9keWdgCA9ICcnOwogICAgdHJ5IHsKICAgICAgY29uc3Qg5o6n5Yi25ZmoID0gbmV3IEFib3J0Q29udHJvbGxlcigpOwogICAgICBjb25zdCDotoXml7bmoIfor4YgPSBzZXRUaW1lb3V0KCgpID0+IOaOp+WItuWZqC5hYm9ydCgpLCDotoXml7YpOwogICAgICBpZiAo5L+h5Y+3KSB7CiAgICAgICAg5L+h5Y+3LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4g5o6n5Yi25ZmoLmFib3J0KCkpOwogICAgICB9CiAgICAgIGNvbnN0IOa4heeQhuS4u+acuiA9IOS4u+acui5yZXBsYWNlKC9eXFt8XF0kL2csICcnKTsKICAgICAgY29uc3Qg5Y2B5YWt6L+b5Yi25Zyw5Z2AID0g5Zyw5Z2A6L2s5Y2B5YWt6L+b5Yi2KOa4heeQhuS4u+acuik7CiAgICAgIGNvbnN0IOa1i+ivleWfn+WQjSA9IOWNgeWFrei/m+WItuWcsOWdgCA/IOWNgeWFrei/m+WItuWcsOWdgCArICcubmlwLmxmcmVlLm9yZycgOiDmuIXnkIbkuLvmnLogKyAnLm5pcC5sZnJlZS5vcmcnOwogICAgICDmtYvor5XnvZHlnYAgPSAnaHR0cHM6Ly8nICsg5rWL6K+V5Z+f5ZCNICsgJzonICsg56uv5Y+jICsgJy8nOwogICAgICBjb25zb2xlLmxvZygnW0xhdGVuY3lUZXN0XSBUZXN0aW5nOicsIOa1i+ivlee9keWdgCwgJ09yaWdpbmFsOicsIOS4u+acuiArICc6JyArIOerr+WPoywgJ0hleElQOicsIOWNgeWFrei/m+WItuWcsOWdgCk7CiAgICAgIGNvbnN0IOmmluasoeW8gOWniyA9IERhdGUubm93KCk7CiAgICAgIGNvbnN0IOWTjeW6lDEgPSBhd2FpdCBmZXRjaCjmtYvor5XnvZHlnYAsIHsKICAgICAgICBzaWduYWw6IOaOp+WItuWZqC5zaWduYWwKICAgICAgfSk7CiAgICAgIGNvbnN0IOmmluasoeWAvCA9IERhdGUubm93KCkgLSDpppbmrKHlvIDlp4s7CiAgICAgIGlmICgh5ZON5bqUMS5vaykgewogICAgICAgIGNsZWFyVGltZW91dCjotoXml7bmoIfor4YpOwogICAgICAgIHJldHVybiB7CiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSwKICAgICAgICAgIGxhdGVuY3k6IOmmluasoeWAvCwKICAgICAgICAgIGVycm9yOiAnSFRUUCAnICsg5ZON5bqUMS5zdGF0dXMgKyAnICcgKyDlk43lupQxLnN0YXR1c1RleHQsCiAgICAgICAgICBjb2xvOiAnJywKICAgICAgICAgIHRlc3RVcmw6IOa1i+ivlee9keWdgAogICAgICAgIH07CiAgICAgIH0KICAgICAgdHJ5IHsKICAgICAgICBjb25zdCDmlofmnKwgPSBhd2FpdCDlk43lupQxLnRleHQoKTsKICAgICAgICBjb25zb2xlLmxvZygnW0xhdGVuY3lUZXN0XSBSZXNwb25zZSBib2R5OicsIOaWh+acrC5zdWJzdHJpbmcoMCwgMjAwKSk7CiAgICAgICAgY29uc3Qg5pWw5o2uID0gSlNPTi5wYXJzZSjmlofmnKwpOwogICAgICAgIGlmICjmlbDmja4uY29sbykgewogICAgICAgICAg5py65oi/ID0g5pWw5o2uLmNvbG87CiAgICAgICAgfQogICAgICB9IGNhdGNoICjkuovku7blgLwpIHsKICAgICAgICBjb25zb2xlLmxvZygnW0xhdGVuY3lUZXN0XSBQYXJzZSBlcnJvcjonLCDkuovku7blgLwubWVzc2FnZSk7CiAgICAgIH0KICAgICAgY29uc3Qg5YC85byA5aeLID0gRGF0ZS5ub3coKTsKICAgICAgY29uc3Qg5ZON5bqUMiA9IGF3YWl0IGZldGNoKOa1i+ivlee9keWdgCwgewogICAgICAgIHNpZ25hbDog5o6n5Yi25ZmoLnNpZ25hbAogICAgICB9KTsKICAgICAgYXdhaXQg5ZON5bqUMi50ZXh0KCk7CiAgICAgIGNvbnN0IOW7tui/nyA9IERhdGUubm93KCkgLSDlgLzlvIDlp4s7CiAgICAgIGNsZWFyVGltZW91dCjotoXml7bmoIfor4YpOwogICAgICBjb25zb2xlLmxvZygnW0xhdGVuY3lUZXN0XSBGaXJzdDonLCDpppbmrKHlgLwgKyAnbXMgKEROUytUTFMrUlRUKScsICdTZWNvbmQ6Jywg5bu26L+fICsgJ21zIChSVFQgb25seSknKTsKICAgICAgcmV0dXJuIHsKICAgICAgICBzdWNjZXNzOiB0cnVlLAogICAgICAgIGxhdGVuY3k6IOW7tui/nywKICAgICAgICBjb2xvOiDmnLrmiL8sCiAgICAgICAgdGVzdFVybDog5rWL6K+V572R5Z2ACiAgICAgIH07CiAgICB9IGNhdGNoICjplJnor68pIHsKICAgICAgY29uc3Qg6ZSZ6K+v5raI5oGvID0g6ZSZ6K+vLm5hbWUgPT09ICdBYm9ydEVycm9yJyA/ICc=") + String(_v895 ? 'زمان تمام شد' : _d64("Aei2heaXtg==")) + _d64("AScgOiDplJnor68ubWVzc2FnZTsKICAgICAgY29uc29sZS5sb2coJ1tMYXRlbmN5VGVzdF0gRXJyb3I6Jywg6ZSZ6K+v5raI5oGvLCAnVVJMOicsIOa1i+ivlee9keWdgCk7CiAgICAgIHJldHVybiB7CiAgICAgICAgc3VjY2VzczogZmFsc2UsCiAgICAgICAgbGF0ZW5jeTogLTEsCiAgICAgICAgZXJyb3I6IOmUmeivr+a2iOaBrywKICAgICAgICBjb2xvOiAnJywKICAgICAgICB0ZXN0VXJsOiDmtYvor5XnvZHlnYAKICAgICAgfTsKICAgIH0KICB9Cn0pOwo8L3NjcmlwdD4KICAgIDwvYm9keT4KICAgIDwvaHRtbD4=");
  return new Response(_v901, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}
async function _v661(_v902, _v903) {
  const _v8 = _v639(_v902);
  const _v904 = _v27 || _v903;
  const _v905 = await _v906(_v904);
  if (_v8.byteLength < 56) {
    return {
      hasError: true,
      message: "invalid " + _v4('dHJvamFu') + " data - too short"
    };
  }
  let _v907 = 56;
  if (_v8[56] !== 0x0d || _v8[57] !== 0x0a) {
    return {
      hasError: true,
      message: "invalid " + _v4('dHJvamFu') + " header format (missing CR LF)"
    };
  }
  const _v908 = _v94.decode(_v8.subarray(0, _v907));
  if (_v908 !== _v905) {
    return {
      hasError: true,
      message: "invalid " + _v4('dHJvamFu') + " password"
    };
  }
  const _v909 = _v8.subarray(_v907 + 2);
  if (_v909.byteLength < 6) {
    return {
      hasError: true,
      message: 'E_S_REQ'
    };
  }
  const _v910 = new DataView(_v909.buffer, _v909.byteOffset, _v909.byteLength);
  const _v911 = _v910.getUint8(0);
  if (_v911 !== 1) {
    return {
      hasError: true,
      message: "unsupported command, only TCP (CONNECT) is allowed"
    };
  }
  const _v912 = _v910.getUint8(1);
  let _v913 = 0;
  let _v914 = 2;
  let _v915 = "";
  switch (_v912) {
    case 1:
      _v913 = 4;
      _v915 = _v909.subarray(_v914, _v914 + _v913).join(".");
      break;
    case 3:
      _v913 = _v909[_v914];
      _v914 += 1;
      _v915 = _v94.decode(_v909.subarray(_v914, _v914 + _v913));
      break;
    case 4:
      _v913 = 16;
      const _v916 = new DataView(_v909.buffer, _v909.byteOffset + _v914, _v913);
      const _v917 = [];
      for (let _v918 = 0; _v918 < 8; _v918++) {
        _v917.push(_v916.getUint16(_v918 * 2).toString(16));
      }
      _v915 = _v917.join(":");
      break;
    default:
      return {
        hasError: true,
        message: `invalid addressType is ${_v912}`
      };
  }
  if (!_v915) {
    return {
      hasError: true,
      message: `address is empty, addressType is ${_v912}`
    };
  }
  const _v919 = _v914 + _v913;
  const _v920 = new DataView(_v909.buffer, _v909.byteOffset + _v919, 2).getUint16(0);
  return {
    hasError: false,
    addressRemote: _v915,
    addressType: _v912,
    port: _v920,
    hostname: _v915,
    rawClientData: _v909.subarray(_v919 + 4)
  };
}
async function _v906(_v921) {
  const _v922 = new TextEncoder();
  const _v923 = _v922.encode(_v921);
  const _v924 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
  let _v925 = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
  const _v926 = _v923.length;
  const _v927 = _v926 * 8;
  const _v928 = Math.ceil((_v926 + 9) / 64) * 64;
  const _v929 = new Uint8Array(_v928);
  _v929.set(_v923);
  _v929[_v926] = 0x80;
  const _v930 = new DataView(_v929.buffer);
  _v930.setUint32(_v928 - 4, _v927, false);
  for (let _v931 = 0; _v931 < _v928; _v931 += 64) {
    const _v932 = new Uint32Array(64);
    for (let _v933 = 0; _v933 < 16; _v933++) {
      _v932[_v933] = _v930.getUint32(_v931 + _v933 * 4, false);
    }
    for (let _v934 = 16; _v934 < 64; _v934++) {
      const _v935 = _v936(_v932[_v934 - 15], 7) ^ _v936(_v932[_v934 - 15], 18) ^ _v932[_v934 - 15] >>> 3;
      const _v937 = _v936(_v932[_v934 - 2], 17) ^ _v936(_v932[_v934 - 2], 19) ^ _v932[_v934 - 2] >>> 10;
      _v932[_v934] = _v932[_v934 - 16] + _v935 + _v932[_v934 - 7] + _v937 >>> 0;
    }
    let [_v938, _v939, _v940, _v941, _v942, _v943, _v944, _v945] = _v925;
    for (let _v946 = 0; _v946 < 64; _v946++) {
      const _v947 = _v936(_v942, 6) ^ _v936(_v942, 11) ^ _v936(_v942, 25);
      const _v948 = _v942 & _v943 ^ ~_v942 & _v944;
      const _v949 = _v945 + _v947 + _v948 + _v924[_v946] + _v932[_v946] >>> 0;
      const _v950 = _v936(_v938, 2) ^ _v936(_v938, 13) ^ _v936(_v938, 22);
      const _v951 = _v938 & _v939 ^ _v938 & _v940 ^ _v939 & _v940;
      const _v952 = _v950 + _v951 >>> 0;
      _v945 = _v944;
      _v944 = _v943;
      _v943 = _v942;
      _v942 = _v941 + _v949 >>> 0;
      _v941 = _v940;
      _v940 = _v939;
      _v939 = _v938;
      _v938 = _v949 + _v952 >>> 0;
    }
    _v925[0] = _v925[0] + _v938 >>> 0;
    _v925[1] = _v925[1] + _v939 >>> 0;
    _v925[2] = _v925[2] + _v940 >>> 0;
    _v925[3] = _v925[3] + _v941 >>> 0;
    _v925[4] = _v925[4] + _v942 >>> 0;
    _v925[5] = _v925[5] + _v943 >>> 0;
    _v925[6] = _v925[6] + _v944 >>> 0;
    _v925[7] = _v925[7] + _v945 >>> 0;
  }
  const _v953 = [];
  for (let _v954 = 0; _v954 < 7; _v954++) {
    _v953.push((_v925[_v954] >>> 24 & 0xff).toString(16).padStart(2, '0'), (_v925[_v954] >>> 16 & 0xff).toString(16).padStart(2, '0'), (_v925[_v954] >>> 8 & 0xff).toString(16).padStart(2, '0'), (_v925[_v954] & 0xff).toString(16).padStart(2, '0'));
  }
  return _v953.join('');
}
function _v936(_v955, _v956) {
  return _v955 >>> _v956 | _v955 << 32 - _v956;
}
let _v957 = 0;
const _v958 = 128 * 1024;
const _v959 = 5000;
const _v960 = 45000;
const _v961 = 2;
const _v962 = 32;
function _v963(_v964) {
  return new Promise(_v965 => setTimeout(_v965, _v964));
}
function _v966(_v967, _v968) {
  for (let _v969 = 0; _v969 < 16; _v969++) {
    if (_v967[_v969] !== _v968[_v969]) {
      return false;
    }
  }
  return true;
}
class _v970 {
  #total;
  constructor() {
    this.#total = 0;
  }
  get() {
    return this.#total;
  }
  add(_v971) {
    this.#total += _v971;
  }
}
function _v972(_v973, ..._v974) {
  let _v975 = _v973.length;
  for (let _v976 of _v974) {
    _v975 += _v976.length;
  }
  const _v977 = new _v973.constructor(_v975);
  _v977.set(_v973, 0);
  _v975 = _v973.length;
  for (let _v978 of _v974) {
    _v977.set(_v978, _v975);
    _v975 += _v978.length;
  }
  return _v977;
}
function _v979(_v980) {
  _v980 = _v980.replaceAll('-', '');
  const _v981 = [];
  for (let _v982 = 0; _v982 < 16; _v982++) {
    const _v983 = parseInt(_v980.substr(_v982 * 2, 2), 16);
    _v981.push(_v983);
  }
  return _v981;
}
function _v984(_v985) {
  return new Uint8Array(new ArrayBuffer(_v985 || _v958));
}
async function _v986(_v987, _v988) {
  const _v989 = _v987.getReader({
    mode: 'byob'
  });
  try {
    let _v990 = await _v989.readAtLeast(1 + 16 + 1, _v984());
    let _v991 = 0;
    let _v9 = 0;
    let _v992 = _v990.value;
    _v991 += _v990.value.length;
    const _v993 = _v992[0];
    const _v994 = _v992.slice(1, 1 + 16);
    const _v995 = _v979(_v988);
    if (!_v966(_v994, _v995)) {
      return `invalid UUID`;
    }
    const _v996 = _v992[1 + 16];
    const _v997 = 1 + 16 + 1 + _v996 + 1 + 2 + 1;
    if (_v997 + 1 > _v991) {
      if (_v990.done) {
        return `header too short`;
      }
      _v9 = _v997 + 1 - _v991;
      _v990 = await _v989.readAtLeast(_v9, _v984());
      _v991 += _v990.value.length;
      _v992 = _v972(_v992, _v990.value);
    }
    const _v998 = _v992[1 + 16 + 1 + _v996];
    if (_v998 !== 1) {
      return `unsupported command: ${_v998}`;
    }
    const _v999 = (_v992[_v997 - 1 - 2] << 8) + _v992[_v997 - 1 - 1];
    const _v1000 = _v992[_v997 - 1];
    let _v1001 = -1;
    if (_v1000 === _v83) {
      _v1001 = _v997 + 4;
    } else if (_v1000 === _v85) {
      _v1001 = _v997 + 16;
    } else if (_v1000 === _v84) {
      _v1001 = _v997 + 1 + _v992[_v997];
    }
    if (_v1001 < 0) {
      return 'read address type failed';
    }
    _v9 = _v1001 - _v991;
    if (_v9 > 0) {
      if (_v990.done) {
        return `read address failed`;
      }
      _v990 = await _v989.readAtLeast(_v9, _v984());
      _v991 += _v990.value.length;
      _v992 = _v972(_v992, _v990.value);
    }
    let _v1002 = '';
    _v9 = _v997;
    switch (_v1000) {
      case _v83:
        _v1002 = _v992.slice(_v9, _v9 + 4).join('.');
        break;
      case _v84:
        _v1002 = new TextDecoder().decode(_v992.slice(_v9 + 1, _v9 + 1 + _v992[_v9]));
        break;
      case _v85:
        _v1002 = _v992.slice(_v9, _v9 + 16).reduce((_v1003, _v1004, _v1005, _v1006) => _v1005 % 2 ? _v1003.concat(((_v1006[_v1005 - 1] << 8) + _v1004).toString(16)) : _v1003, []).join(':');
        break;
    }
    if (_v1002.length < 1) {
      return 'failed to parse hostname';
    }
    const _v1007 = _v992.slice(_v1001);
    return {
      hostname: _v1002,
      port: _v999,
      data: _v1007,
      resp: new Uint8Array([_v993, 0]),
      reader: _v989,
      done: _v990.done
    };
  } catch (_v1008) {
    try {
      _v989.releaseLock();
    } catch (_v1009) {}
    throw _v1008;
  }
}
async function _v1010(_v1011, _v1012, _v1013) {
  async function _v1014(_v1015) {
    if (!_v1015 || _v1015.length === 0) {
      return;
    }
    _v1011.add(_v1015.length);
    try {
      await _v1012.write(_v1015);
    } catch (_v1016) {
      throw _v1016;
    }
  }
  try {
    await _v1014(_v1013.data);
    let _v1017 = 0;
    while (!_v1013.done) {
      const _v1018 = await _v1013.reader.read(_v984());
      if (_v1018.done) break;
      await _v1014(_v1018.value);
      _v1013.done = _v1018.done;
      _v1017++;
      if (_v1017 % 10 === 0) {
        await _v963(0);
      }
      if (!_v1018.value || _v1018.value.length === 0) {
        await _v963(2);
      }
    }
  } catch (_v1019) {
    throw _v1019;
  }
}
function _v1020(_v1021, _v1022) {
  const _v1023 = new _v970();
  const _v1024 = _v1022.getWriter();
  const _v1025 = (async () => {
    try {
      await _v1010(_v1023, _v1024, _v1021);
    } catch (_v1026) {
      throw _v1026;
    } finally {
      try {
        await _v1024.close();
      } catch (_v1027) {}
    }
  })();
  return {
    counter: _v1023,
    done: _v1025,
    abort: () => {
      try {
        _v1024.abort();
      } catch (_v1028) {}
    }
  };
}
function _v1029(_v1030, _v1031) {
  const _v1032 = new _v970();
  let _v1033;
  const _v1034 = new Promise((_v1035, _v1036) => {
    _v1033 = new TransformStream({
      start(_v1037) {
        _v1032.add(_v1030.length);
        _v1037.enqueue(_v1030);
      },
      transform(_v1038, _v1039) {
        _v1032.add(_v1038.length);
        _v1039.enqueue(_v1038);
      },
      cancel(_v1040) {
        _v1036(`download cancelled: ${_v1040}`);
      }
    }, null, new ByteLengthQueuingStrategy({
      highWaterMark: _v958
    }));
    let _v1041 = Date.now();
    const _v1042 = setInterval(() => {
      if (Date.now() - _v1041 > _v960) {
        try {
          _v1033.writable.abort?.('idle timeout');
        } catch (_v1043) {}
        clearInterval(_v1042);
        _v1036('idle timeout');
      }
    }, 5000);
    const _v1044 = _v1031.getReader();
    const _v1045 = _v1033.writable.getWriter();
    ;
    (async () => {
      try {
        let _v1046 = 0;
        while (true) {
          const _v1047 = await _v1044.read();
          if (_v1047.done) {
            break;
          }
          _v1041 = Date.now();
          await _v1045.write(_v1047.value);
          _v1046++;
          if (_v1046 % 5 === 0) {
            await _v963(0);
          }
        }
        await _v1045.close();
        _v1035();
      } catch (_v1048) {
        _v1036(_v1048);
      } finally {
        try {
          _v1044.releaseLock();
        } catch (_v1049) {}
        try {
          _v1045.releaseLock();
        } catch (_v1050) {}
        clearInterval(_v1042);
      }
    })();
  });
  return {
    readable: _v1033.readable,
    counter: _v1032,
    done: _v1034,
    abort: () => {
      try {
        _v1033.readable.cancel();
      } catch (_v1051) {}
      try {
        _v1033.writable.abort();
      } catch (_v1052) {}
    }
  };
}
async function _v1053(_v1054, ..._v1055) {
  let _v1056 = 0;
  let _v1057;
  const _v1058 = [_v1054.hostname, ..._v1055.filter(_v1059 => _v1059 && _v1059 !== _v1054.hostname)];
  for (const _v1060 of _v1058) {
    if (!_v1060) continue;
    _v1056 = 0;
    while (_v1056 < _v961) {
      _v1056++;
      try {
        const _v1061 = _v1({
          hostname: _v1060,
          port: _v1054.port
        });
        const _v1062 = _v963(_v959).then(() => {
          throw new Error('E_TIMEOUT');
        });
        await Promise.race([_v1061.opened, _v1062]);
        const _v1063 = _v1020(_v1054, _v1061.writable);
        const _v1064 = _v1029(_v1054.resp, _v1061.readable);
        return {
          downloader: _v1064,
          uploader: _v1063,
          close: () => {
            try {
              _v1061.close();
            } catch (_v1065) {}
          }
        };
      } catch (_v1066) {
        _v1057 = _v1066;
        if (_v1056 < _v961) {
          await _v963(500 * _v1056);
        }
      }
    }
  }
  return null;
}
async function _v1067(_v1068, _v1069) {
  if (_v957 >= _v962) {
    return new Response('Too many connections', {
      status: 429
    });
  }
  _v957++;
  let _v1070 = false;
  const _v1071 = () => {
    if (!_v1070) {
      _v957 = Math.max(0, _v957 - 1);
      _v1070 = true;
    }
  };
  try {
    const _v1072 = await _v986(_v1068, _v1069);
    if (typeof _v1072 !== 'object' || !_v1072) {
      return null;
    }
    const _v1073 = await _v1053(_v1072, _v12, '13.230.34.30');
    if (_v1073 === null) {
      return null;
    }
    const _v1074 = Promise.race([(async () => {
      try {
        await _v1073.downloader.done;
      } catch (_v1075) {}
    })(), (async () => {
      try {
        await _v1073.uploader.done;
      } catch (_v1076) {}
    })(), _v963(_v960).then(() => {})]).finally(() => {
      try {
        _v1073.close();
      } catch (_v1077) {}
      try {
        _v1073.downloader.abort();
      } catch (_v1078) {}
      try {
        _v1073.uploader.abort();
      } catch (_v1079) {}
      _v1071();
    });
    return {
      readable: _v1073.downloader.readable,
      closed: _v1074
    };
  } catch (_v1080) {
    _v1071();
    return null;
  }
}
async function _v263(_v1081) {
  try {
    return await _v1067(_v1081.body, _v11);
  } catch (_v1082) {
    return null;
  }
}
function _v831(_v1083) {
  if (!_v1083) return {
    error: null
  };
  try {
    _v1083 = _v1083.replace(/-/g, '+').replace(/_/g, '/');
    return {
      earlyData: Uint8Array.from(atob(_v1083), _v1084 => _v1084.charCodeAt(0)).buffer,
      error: null
    };
  } catch (_v1085) {
    return {
      error: _v1085
    };
  }
}
function _v635(_v1086) {
  try {
    if (_v1086.readyState === 1 || _v1086.readyState === 2) _v1086.close();
  } catch (_v1087) {}
}
const _v1088 = Array.from({
  length: 256
}, (_v1089, _v1090) => (_v1090 + 256).toString(16).slice(1));
function _v1091(_v1092, _v1093 = 0) {
  const _v1094 = (_v1088[_v1092[_v1093]] + _v1088[_v1092[_v1093 + 1]] + _v1088[_v1092[_v1093 + 2]] + _v1088[_v1092[_v1093 + 3]] + "-" + _v1088[_v1092[_v1093 + 4]] + _v1088[_v1092[_v1093 + 5]] + "-" + _v1088[_v1092[_v1093 + 6]] + _v1088[_v1092[_v1093 + 7]] + "-" + _v1088[_v1092[_v1093 + 8]] + _v1088[_v1092[_v1093 + 9]] + "-" + _v1088[_v1092[_v1093 + 10]] + _v1088[_v1092[_v1093 + 11]] + _v1088[_v1092[_v1093 + 12]] + _v1088[_v1092[_v1093 + 13]] + _v1088[_v1092[_v1093 + 14]] + _v1088[_v1092[_v1093 + 15]]).toLowerCase();
  if (!_v96(_v1094)) throw new TypeError(_v75);
  return _v1094;
}
async function _v518() {
  const _v1095 = _v22;
  try {
    const _v1096 = _v1095.includes(',') ? _v1095.split(',').map(_v1097 => _v1097.trim()).filter(_v1098 => _v1098) : [_v1095];
    const _v1099 = await _v1100(_v1096, '443', 5000);
    if (_v1099.length > 0) {
      const _v1101 = [];
      const _v1102 = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
      for (const _v1103 of _v1099) {
        const _v1104 = _v1103.match(_v1102);
        if (_v1104) {
          _v1101.push({
            ip: _v1104[1],
            port: parseInt(_v1104[2] || '443', 10),
            name: _v1104[3]?.trim() || _v1104[1]
          });
        }
      }
      return _v1101;
    }
    const _v1105 = await fetch(_v1095);
    if (!_v1105.ok) return [];
    const _v1106 = await _v1105.text();
    const _v1107 = [];
    const _v1108 = _v1106.trim().replace(/\r/g, "").split('\n');
    const _v1109 = /^([^:]+):(\d+)#(.*)$/;
    for (const _v1110 of _v1108) {
      const _v1111 = _v1110.trim();
      if (!_v1111) continue;
      const _v1112 = _v1111.match(_v1109);
      if (_v1112) {
        _v1107.push({
          ip: _v1112[1],
          port: parseInt(_v1112[2], 10),
          name: _v1112[3].trim() || _v1112[1]
        });
      }
    }
    return _v1107;
  } catch (_v1113) {
    return [];
  }
}
function _v519(_v1114, _v1115, _v1116, _v1117 = null, _v1118 = false, _v1119 = null) {
  const _v1120 = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const _v1121 = [443, 2053, 2083, 2087, 2096, 8443];
  const _v1122 = [];
  const _v1123 = '/?ed=2048';
  const _v1124 = _v4('dmxlc3M=');
  const _v1125 = _v1119 || _v126(_v1118);
  for (const _v1126 of _v1114) {
    const _v1127 = _v1126.port;
    const _v1128 = _v1126.ip.includes(':') ? `[${_v1126.ip}]` : _v1126.ip;
    if (_v1121.includes(_v1127)) {
      const _v1129 = _v1125(_v1126);
      let _v1130 = `${_v1124}://${_v1115}@${_v1128}:${_v1127}?encryption=none&security=tls&sni=${_v1116}&fp=${_v28 ? 'chrome' : 'randomized'}&type=ws&host=${_v1116}&path=${_v1123}`;
      if (_v31) _v1130 += `&alpn=${encodeURIComponent(_v31)}`;
      if (_v28) {
        const _v1131 = _v29 || 'https://223.5.5.5/dns-query';
        const _v1132 = _v30 || 'cloudflare-ech.com';
        _v1130 += `&ech=${encodeURIComponent(`${_v1132}+${_v1131}`)}`;
      }
      _v1130 += `#${encodeURIComponent(_v1129)}`;
      _v1122.push(_v1130);
    } else if (_v1120.includes(_v1127)) {
      if (!_v17) {
        const _v1133 = _v1125(_v1126);
        const _v1134 = `${_v1124}://${_v1115}@${_v1128}:${_v1127}?encryption=none&security=none&type=ws&host=${_v1116}&path=${_v1123}#${encodeURIComponent(_v1133)}`;
        _v1122.push(_v1134);
      }
    } else {
      const _v1135 = _v1125(_v1126);
      let _v1136 = `${_v1124}://${_v1115}@${_v1128}:${_v1127}?encryption=none&security=tls&sni=${_v1116}&fp=${_v28 ? 'chrome' : 'randomized'}&type=ws&host=${_v1116}&path=${_v1123}`;
      if (_v31) _v1136 += `&alpn=${encodeURIComponent(_v31)}`;
      if (_v28) {
        const _v1137 = _v29 || 'https://223.5.5.5/dns-query';
        const _v1138 = _v30 || 'cloudflare-ech.com';
        _v1136 += `&ech=${encodeURIComponent(`${_v1138}+${_v1137}`)}`;
      }
      _v1136 += `#${encodeURIComponent(_v1135)}`;
      _v1122.push(_v1136);
    }
  }
  return _v1122;
}
function _v500(_v1139, _v1140, _v1141, _v1142 = null, _v1143 = false, _v1144 = null) {
  const _v1145 = [];
  const _v1146 = _v1140.substring(0, 8);
  const _v1147 = _v1144 || _v126(_v1143);
  for (const _v1148 of _v1139) {
    const _v1149 = _v1148.ip.includes(':') ? `[${_v1148.ip}]` : _v1148.ip;
    const _v1150 = _v1148.port || 443;
    const _v1151 = _v1147(_v1148);
    const _v1152 = new URLSearchParams({
      encryption: 'none',
      security: 'tls',
      sni: _v1141,
      fp: 'chrome',
      type: 'xhttp',
      host: _v1141,
      path: `/${_v1146}`,
      mode: 'stream-one'
    });
    _v135(_v1152);
    if (_v28) {
      const _v1153 = _v29 || 'https://223.5.5.5/dns-query';
      const _v1154 = _v30 || 'cloudflare-ech.com';
      _v1152.set('ech', `${_v1154}+${_v1153}`);
    }
    _v1145.push(`${_v4('dmxlc3M6Ly8=')}${_v1140}@${_v1149}:${_v1150}?${_v1152.toString()}#${encodeURIComponent(_v1151)}`);
  }
  return _v1145;
}
async function _v520(_v1155, _v1156, _v1157, _v1158 = null, _v1159 = false, _v1160 = null) {
  const _v1161 = [80, 8080, 8880, 2052, 2082, 2086, 2095];
  const _v1162 = [443, 2053, 2083, 2087, 2096, 8443];
  const _v1163 = [];
  const _v1164 = '/?ed=2048';
  const _v1165 = _v27 || _v1156;
  const _v1166 = _v1160 || _v126(_v1159);
  for (const _v1167 of _v1155) {
    const _v1168 = _v1167.port;
    const _v1169 = _v1167.ip.includes(':') ? `[${_v1167.ip}]` : _v1167.ip;
    if (_v1162.includes(_v1168)) {
      const _v1170 = _v1166(_v1167);
      let _v1171 = `${_v4('dHJvamFuOi8v')}${_v1165}@${_v1169}:${_v1168}?security=tls&sni=${_v1157}&fp=chrome&type=ws&host=${_v1157}&path=${_v1164}`;
      if (_v31) _v1171 += `&alpn=${encodeURIComponent(_v31)}`;
      if (_v28) {
        const _v1172 = _v29 || 'https://223.5.5.5/dns-query';
        const _v1173 = _v30 || 'cloudflare-ech.com';
        _v1171 += `&ech=${encodeURIComponent(`${_v1173}+${_v1172}`)}`;
      }
      _v1171 += `#${encodeURIComponent(_v1170)}`;
      _v1163.push(_v1171);
    } else if (_v1161.includes(_v1168)) {
      if (!_v17) {
        const _v1174 = _v1166(_v1167);
        const _v1175 = `${_v4('dHJvamFuOi8v')}${_v1165}@${_v1169}:${_v1168}?security=none&type=ws&host=${_v1157}&path=${_v1164}#${encodeURIComponent(_v1174)}`;
        _v1163.push(_v1175);
      }
    } else {
      const _v1176 = _v1166(_v1167);
      let _v1177 = `${_v4('dHJvamFuOi8v')}${_v1165}@${_v1169}:${_v1168}?security=tls&sni=${_v1157}&fp=chrome&type=ws&host=${_v1157}&path=${_v1164}`;
      if (_v31) _v1177 += `&alpn=${encodeURIComponent(_v31)}`;
      if (_v28) {
        const _v1178 = _v29 || 'https://223.5.5.5/dns-query';
        const _v1179 = _v30 || 'cloudflare-ech.com';
        _v1177 += `&ech=${encodeURIComponent(`${_v1179}+${_v1178}`)}`;
      }
      _v1177 += `#${encodeURIComponent(_v1176)}`;
      _v1163.push(_v1177);
    }
  }
  return _v1163;
}
async function _v244(_v1180, _v59 = {}) {
  if (_v1180.method === 'GET') {
    if (!_v38) {
      return new Response(JSON.stringify({
        error: _d64("AUtW5a2Y5YKo5pyq6YWN572u"),
        kvEnabled: false
      }), {
        status: 503,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    return new Response(JSON.stringify({
      ..._v64(_v59),
      kvEnabled: true
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else if (_v1180.method === 'POST') {
    if (!_v38) {
      return new Response(JSON.stringify({
        success: false,
        message: _d64("AUtW5a2Y5YKo5pyq6YWN572u77yM5peg5rOV5L+d5a2Y6YWN572u")
      }), {
        status: 503,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    try {
      const _v1181 = await _v1180.json();
      for (const [_v50, _v46] of Object.entries(_v1181)) {
        if (_v46 === '' || _v46 === null || _v46 === undefined) {
          delete _v39[_v50];
        } else {
          _v39[_v50] = _v46;
        }
      }
      await _v147();
      _v1182();
      if (_v1181.yx !== undefined) {
        _v1183();
      }
      return new Response(JSON.stringify({
        success: true,
        message: _d64("AemFjee9ruW3suS/neWtmA=="),
        config: _v64(_v59)
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (_v1184) {
      return new Response(JSON.stringify({
        success: false,
        message: _d64("AeS/neWtmOmFjee9ruWksei0pTog") + _v1184.message
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
  return new Response(JSON.stringify({
    error: 'Method not allowed'
  }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
async function _v261(_v1185, _v59 = {}) {
  if (_v1185.method !== 'GET') {
    return new Response(JSON.stringify({
      error: 'Method not allowed'
    }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  const _v1186 = _v54('updVerUrl', _v44.updVerUrl, _v59.updVerUrl);
  if (!_v1186) {
    return new Response(JSON.stringify({
      current: _v43,
      latest: null,
      hasUpdate: false,
      message: 'آدرس بررسی نسخه تنظیم نشده'
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  try {
    const _v1187 = await fetch(_v1186, {
      cf: {
        cacheTtl: 0
      }
    });
    if (!_v1187.ok) throw new Error('HTTP ' + _v1187.status);
    const _v1188 = (await _v1187.text()).trim();
    return new Response(JSON.stringify({
      current: _v43,
      latest: _v1188,
      hasUpdate: !!_v1188 && _v1188 !== _v43
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (_v1189) {
    return new Response(JSON.stringify({
      current: _v43,
      latest: null,
      hasUpdate: false,
      error: 'بررسی نسخه ناموفق: ' + _v1189.message
    }), {
      status: 502,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
async function _v260(_v1185, _v59 = {}) {
  if (_v1185.method !== 'POST') {
    return new Response(JSON.stringify({
      error: 'Method not allowed'
    }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  const _v1190 = _v54('updSrcUrl', _v44.updSrcUrl, _v59.updSrcUrl);
  const _v806 = _v54('cfToken', _v44.cfToken, _v59.cfToken);
  const _v1191 = _v54('cfAccountId', _v44.cfAccountId, _v59.cfAccountId);
  const _v1192 = _v54('cfScriptName', _v44.cfScriptName, _v59.cfScriptName);
  if (!_v1190 || !_v806 || !_v1191 || !_v1192) {
    return new Response(JSON.stringify({
      success: false,
      message: 'برای به‌روزرسانی خودکار باید در تنظیمات مقادیر updSrcUrl، cfToken، cfAccountId و cfScriptName را وارد کنی'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  try {
    const _v1193 = await fetch(_v1190, {
      cf: {
        cacheTtl: 0
      }
    });
    if (!_v1193.ok) throw new Error('دریافت کد جدید ناموفق: HTTP ' + _v1193.status);
    const _v1194 = await _v1193.text();
    if (!_v1194 || _v1194.length < 1000) throw new Error('محتوای دریافت‌شده معتبر به نظر نمی‌رسد');
    const _v1195 = {
      main_module: 'worker.js',
      compatibility_date: '2025-01-01',
      compatibility_flags: ['nodejs_compat'],
      keep_bindings: ['kv_namespace', 'plain_text', 'secret_text', 'd1']
    };
    const _v1196 = new FormData();
    _v1196.append('metadata', JSON.stringify(_v1195));
    _v1196.append('worker.js', new Blob([_v1194], {
      type: 'application/javascript+module'
    }), 'worker.js');
    const _v1197 = `https://api.cloudflare.com/client/v4/accounts/${_v1191}/workers/scripts/${_v1192}`;
    const _v1198 = await fetch(_v1197, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${_v806}`
      },
      body: _v1196
    });
    const _v1199 = await _v1198.json().catch(() => ({}));
    if (!_v1198.ok || _v1199.success === false) {
      const _v1200 = _v1199.errors && _v1199.errors[0] && _v1199.errors[0].message || 'HTTP ' + _v1198.status;
      throw new Error(_v1200);
    }
    return new Response(JSON.stringify({
      success: true,
      message: 'ورکر با موفقیت به‌روزرسانی شد. صفحه را رفرش کن.'
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (_v1189) {
    return new Response(JSON.stringify({
      success: false,
      message: 'به‌روزرسانی ناموفق: ' + _v1189.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
async function _v252(_v1185) {
  if (!_v38) {
    return new Response(JSON.stringify({
      success: false,
      error: _d64("AUtW5a2Y5YKo5pyq6YWN572u"),
      message: _d64("AemcgOimgemFjee9rktW5a2Y5YKo5omN6IO95L2/55So5q2k5Yqf6IO9")
    }), {
      status: 503,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  const _v1201 = _v53('ae', '') === 'yes';
  if (!_v1201) {
    return new Response(JSON.stringify({
      success: false,
      error: _d64("AUFQSeWKn+iDveacquWQr+eUqA=="),
      message: _d64("AeWHuuS6juWuieWFqOiAg+iZke+8jOS8mOmAiUlQIEFQSeWKn+iDvem7mOiupOWFs+mXreOAguivt+WcqOmFjee9rueuoeeQhumhtemdouW8gOWQryLlhYHorrhBUEnnrqHnkIYi6YCJ6aG55ZCO5L2/55So44CC")
    }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  try {
    if (_v1185.method === 'GET') {
      const _v1202 = _v53('yx', '');
      const _v1203 = _v1204(_v1202);
      return new Response(JSON.stringify({
        success: true,
        count: _v1203.length,
        data: _v1203
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else if (_v1185.method === 'POST') {
      const _v1205 = await _v1185.json();
      const _v1206 = Array.isArray(_v1205) ? _v1205 : [_v1205];
      if (_v1206.length === 0) {
        return new Response(JSON.stringify({
          success: false,
          error: _d64("Aeivt+axguaVsOaNruS4uuepug=="),
          message: _d64("Aeivt+aPkOS+m0lQ5pWw5o2u")
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      const _v1207 = _v53('yx', '');
      let _v1208 = _v1204(_v1207);
      const _v1209 = [];
      const _v1210 = [];
      const _v1211 = [];
      for (const _v1212 of _v1206) {
        if (!_v1212.ip) {
          _v1211.push({
            ip: _d64("AeacquefpQ=="),
            reason: _d64("AUlQ5Zyw5Z2A5piv5b+F6ZyA55qE")
          });
          continue;
        }
        const _v1213 = _v1212.port || 443;
        const _v61 = _v1212.name || _d64("AUFQSeS8mOmAiS0=") + String(_v1212.ip) + ":" + String(_v1213);
        if (!_v99(_v1212.ip) && !_v1214(_v1212.ip)) {
          _v1211.push({
            ip: _v1212.ip,
            reason: _d64("AeaXoOaViOeahElQ5oiW5Z+f5ZCN5qC85byP")
          });
          continue;
        }
        const _v1215 = _v1208.some(_v1216 => _v1216.ip === _v1212.ip && _v1216.port === _v1213);
        if (_v1215) {
          _v1210.push({
            ip: _v1212.ip,
            port: _v1213,
            reason: _d64("AeW3suWtmOWcqA==")
          });
          continue;
        }
        const _v1217 = {
          ip: _v1212.ip,
          port: _v1213,
          name: _v61,
          addedAt: new Date().toISOString()
        };
        _v1208.push(_v1217);
        _v1209.push(_v1217);
      }
      if (_v1209.length > 0) {
        const _v1218 = _v1219(_v1208);
        await _v153('yx', _v1218);
        _v1183();
      }
      return new Response(JSON.stringify({
        success: _v1209.length > 0,
        message: _d64("AeaIkOWKn+a3u+WKoCA=") + String(_v1209.length) + _d64("ASDkuKpJUA=="),
        added: _v1209.length,
        skipped: _v1210.length,
        errors: _v1211.length,
        data: {
          addedIPs: _v1209,
          skippedIPs: _v1210.length > 0 ? _v1210 : undefined,
          errors: _v1211.length > 0 ? _v1211 : undefined
        }
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else if (_v1185.method === 'DELETE') {
      const _v1220 = await _v1185.json();
      if (_v1220.all === true) {
        const _v1221 = _v53('yx', '');
        const _v1222 = _v1204(_v1221);
        const _v1223 = _v1222.length;
        await _v153('yx', '');
        _v1183();
        return new Response(JSON.stringify({
          success: true,
          message: _d64("AeW3sua4heepuuaJgOacieS8mOmAiUlQ77yM5YWx5Yig6ZmkIA==") + String(_v1223) + _d64("ASDkuKo="),
          deletedCount: _v1223
        }), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      if (!_v1220.ip) {
        return new Response(JSON.stringify({
          success: false,
          error: _d64("AUlQ5Zyw5Z2A5piv5b+F6ZyA55qE"),
          message: _d64("Aeivt+aPkOS+m+imgeWIoOmZpOeahGlw5a2X5q6177yM5oiW5L2/55SoIHsiYWxsIjogdHJ1ZX0g5riF56m65omA5pyJ")
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      const _v1224 = _v1220.port || 443;
      const _v1225 = _v53('yx', '');
      let _v1226 = _v1204(_v1225);
      const _v1227 = _v1226.length;
      const _v1228 = _v1226.filter(_v1229 => !(_v1229.ip === _v1220.ip && _v1229.port === _v1224));
      if (_v1228.length === _v1227) {
        return new Response(JSON.stringify({
          success: false,
          error: _d64("AeS8mOmAiUlQ5LiN5a2Y5Zyo"),
          message: "" + String(_v1220.ip) + ":" + String(_v1224) + _d64("ASDmnKrmib7liLA=")
        }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      const _v1230 = _v1219(_v1228);
      await _v153('yx', _v1230);
      _v1183();
      return new Response(JSON.stringify({
        success: true,
        message: _d64("AeS8mOmAiUlQ5bey5Yig6Zmk"),
        deleted: {
          ip: _v1220.ip,
          port: _v1224
        }
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        error: _d64("AeS4jeaUr+aMgeeahOivt+axguaWueazlQ=="),
        message: _d64("AeaUr+aMgeeahOaWueazlTogR0VULCBQT1NULCBERUxFVEU=")
      }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (_v1231) {
    return new Response(JSON.stringify({
      success: false,
      error: _d64("AeWkhOeQhuivt+axguWksei0pQ=="),
      message: _v1231.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
function _v1182() {
  const _v1232 = _v64();
  const _v1233 = _v1232.wk;
  if (_v1233 && _v1233.trim()) {
    _v21 = _v1233.trim().toUpperCase();
    _v20 = _v21;
  } else {
    const _v1234 = _v1232.p;
    if (_v1234 && _v1234.trim()) {
      _v20 = 'CUSTOM';
    } else {
      _v21 = '';
      _v20 = '';
    }
  }
  _v19 = !(_v1232.rm && _v1232.rm.toLowerCase() === 'no');
  _v24 = _v1232.ev === 'yes';
  _v25 = _v1232.et === 'yes';
  _v26 = _v1232.ex === 'yes';
  _v27 = _v1232.tp || '';
  _v32 = _v1232.scu || _v44.scu;
  _v34 = _v1232.epd === 'yes';
  _v35 = _v1232.epi === 'yes';
  _v36 = _v1232.egi === 'yes';
  _v37 = _v1232.ena === 'yes';
  _v28 = _v1232.ech === 'yes';
  _v29 = _v1232.customDNS || _v44.customDNS;
  _v30 = _v1232.customECHDomain || _v44.customECHDomain;
  _v31 = _v131(_v1232.alpn || '');
  _v17 = _v1232.dkby === 'yes' || _v28;
  _v16 = !!(_v1232.qj && _v1232.qj.toLowerCase() === 'no');
  _v23 = _v1232.d || '';
  _v22 = _v1232.yxURL || '';
  _v12 = _v1232.p ? _v1232.p.trim() : '';
  _v13 = _v1232.s || '';
  if (_v13) {
    try {
      _v81 = _v219(_v13);
      _v82 = true;
    } catch (_v1235) {
      _v82 = false;
    }
  } else {
    _v81 = {};
    _v82 = false;
  }
  _v18 = !!(_v1232.yxby && _v1232.yxby.toLowerCase() === 'yes');
}
function _v1183() {
  const _v1236 = _v53('yx', '');
  if (_v1236) {
    try {
      const _v1237 = _v1236.split(',').map(_v1238 => _v1238.trim()).filter(_v1239 => _v1239);
      _v14 = [];
      _v15 = [];
      _v1237.forEach(_v1240 => {
        let _v1241 = '';
        let _v1242 = _v1240;
        if (_v1240.includes('#')) {
          const _v1243 = _v1240.split('#');
          _v1242 = _v1243[0].trim();
          _v1241 = _v1243[1].trim();
        }
        const {
          address: _v1244,
          port: _v1245
        } = _v194(_v1242);
        if (!_v1241) {
          _v1241 = _d64("AeiHquWumuS5ieS8mOmAiS0=") + _v1244 + (_v1245 ? ':' + _v1245 : '');
        }
        if (_v99(_v1244)) {
          _v14.push({
            ip: _v1244,
            port: _v1245,
            isp: _v1241
          });
        } else {
          _v15.push({
            domain: _v1244,
            port: _v1245,
            name: _v1241
          });
        }
      });
    } catch (_v1189) {
      _v14 = [];
      _v15 = [];
    }
  } else {
    _v14 = [];
    _v15 = [];
  }
}
function _v1204(_v1246) {
  if (!_v1246 || !_v1246.trim()) return [];
  const _v1247 = _v1246.split(',').map(_v1248 => _v1248.trim()).filter(_v1249 => _v1249);
  const _v10 = [];
  for (const _v1250 of _v1247) {
    let _v1251 = '';
    let _v1252 = _v1250;
    if (_v1250.includes('#')) {
      const _v1253 = _v1250.split('#');
      _v1252 = _v1253[0].trim();
      _v1251 = _v1253[1].trim();
    }
    const {
      address: _v1254,
      port: _v1255
    } = _v194(_v1252);
    if (!_v1251) {
      _v1251 = _v1254 + (_v1255 ? ':' + _v1255 : '');
    }
    _v10.push({
      ip: _v1254,
      port: _v1255 || 443,
      name: _v1251,
      addedAt: new Date().toISOString()
    });
  }
  return _v10;
}
function _v1219(_v1256) {
  if (!_v1256 || _v1256.length === 0) return '';
  return _v1256.map(_v1257 => {
    const _v1258 = _v1257.port || 443;
    return `${_v1257.ip}:${_v1258}#${_v1257.name}`;
  }).join(',');
}
function _v1214(_v1259) {
  const _v1260 = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  return _v1260.test(_v1259);
}
async function _v1261(_v1262) {
  var _v1263 = _v1262.replace(/[	"'\r\n]+/g, ',').replace(/,+/g, ',');
  if (_v1263.charAt(0) == ',') _v1263 = _v1263.slice(1);
  if (_v1263.charAt(_v1263.length - 1) == ',') _v1263 = _v1263.slice(0, _v1263.length - 1);
  return _v1263.split(',');
}
const _v1264 = new Map();
async function _v1100(_v1265, _v1266 = '443', _v1267 = 2200) {
  if (!_v1265?.length) return [];
  const _v1268 = _v1265.slice(0, 4).join('|') + ':' + _v1266;
  const _v1269 = _v1264.get(_v1268);
  if (_v1269 && Date.now() - _v1269.t < 600000) return _v1269.v;
  const _v1270 = new Set();
  await Promise.allSettled(_v1265.map(async _v1271 => {
    try {
      const _v1272 = new AbortController();
      const _v1273 = setTimeout(() => _v1272.abort(), _v1267);
      const _v1187 = await fetch(_v1271, {
        signal: _v1272.signal
      });
      clearTimeout(_v1273);
      let _v5 = '';
      try {
        const _v1274 = await _v1187.arrayBuffer();
        const _v1275 = (_v1187.headers.get('content-type') || '').toLowerCase();
        const _v1276 = _v1275.match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase() || '';
        let _v1277 = ['utf-8', 'gb2312'];
        if (_v1276.includes('gb') || _v1276.includes('gbk') || _v1276.includes('gb2312')) {
          _v1277 = ['gb2312', 'utf-8'];
        }
        let _v1278 = false;
        for (const _v1279 of _v1277) {
          try {
            const _v1280 = new TextDecoder(_v1279).decode(_v1274);
            if (_v1280 && _v1280.length > 0 && !_v1280.includes('\ufffd')) {
              _v5 = _v1280;
              _v1278 = true;
              break;
            } else if (_v1280 && _v1280.length > 0) {
              continue;
            }
          } catch (_v1281) {
            continue;
          }
        }
        if (!_v1278) {
          _v5 = await _v1187.text();
        }
        if (!_v5 || _v5.trim().length === 0) {
          return;
        }
      } catch (_v1282) {
        return;
      }
      const _v1283 = _v5.trim().split('\n').map(_v1284 => _v1284.trim()).filter(_v1285 => _v1285);
      const _v1286 = _v1283.length > 1 && _v1283[0].includes(',');
      const _v1287 = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;
      if (!_v1286) {
        _v1283.forEach(_v1288 => {
          const _v1289 = _v1288.indexOf('#');
          const [_v1290, _v1291] = _v1289 > -1 ? [_v1288.substring(0, _v1289), _v1288.substring(_v1289)] : [_v1288, ''];
          let _v1292 = false;
          if (_v1290.startsWith('[')) {
            _v1292 = /\]:(\d+)$/.test(_v1290);
          } else {
            const _v1293 = _v1290.lastIndexOf(':');
            _v1292 = _v1293 > -1 && /^\d+$/.test(_v1290.substring(_v1293 + 1));
          }
          const _v1294 = new URL(_v1271).searchParams.get('port') || _v1266;
          _v1270.add(_v1292 ? _v1288 : `${_v1290}:${_v1294}${_v1291}`);
        });
      } else {
        const _v1295 = _v1283[0].split(',').map(_v1296 => _v1296.trim());
        const _v1297 = _v1283.slice(1);
        if (_v1295.includes(_d64("AUlQ5Zyw5Z2A")) && _v1295.includes(_d64("Aeerr+WPow==")) && _v1295.includes(_d64("AeaVsOaNruS4reW/gw=="))) {
          const _v1298 = _v1295.indexOf(_d64("AUlQ5Zyw5Z2A")),
            _v1299 = _v1295.indexOf(_d64("Aeerr+WPow=="));
          const _v1300 = _v1295.indexOf(_d64("AeWbveWutg==")) > -1 ? _v1295.indexOf(_d64("AeWbveWutg==")) : _v1295.indexOf(_d64("AeWfjuW4gg==")) > -1 ? _v1295.indexOf(_d64("AeWfjuW4gg==")) : _v1295.indexOf(_d64("AeaVsOaNruS4reW/gw=="));
          const _v1301 = _v1295.indexOf('TLS');
          _v1297.forEach(_v1302 => {
            const _v1303 = _v1302.split(',').map(_v1304 => _v1304.trim());
            if (_v1301 !== -1 && _v1303[_v1301]?.toLowerCase() !== 'true') return;
            const _v1305 = _v1287.test(_v1303[_v1298]) ? `[${_v1303[_v1298]}]` : _v1303[_v1298];
            _v1270.add(`${_v1305}:${_v1303[_v1299]}#${_v1303[_v1300]}`);
          });
        } else if (_v1295.some(_v1306 => _v1306.includes('IP')) && _v1295.some(_v1307 => _v1307.includes(_d64("AeW7tui/nw=="))) && _v1295.some(_v1308 => _v1308.includes(_d64("AeS4i+i9vemAn+W6pg==")))) {
          const _v1309 = _v1295.findIndex(_v1310 => _v1310.includes('IP'));
          const _v1311 = _v1295.findIndex(_v1312 => _v1312.includes(_d64("AeW7tui/nw==")));
          const _v1313 = _v1295.findIndex(_v1314 => _v1314.includes(_d64("AeS4i+i9vemAn+W6pg==")));
          const _v1315 = new URL(_v1271).searchParams.get('port') || _v1266;
          _v1297.forEach(_v1316 => {
            const _v1317 = _v1316.split(',').map(_v1318 => _v1318.trim());
            const _v1319 = _v1287.test(_v1317[_v1309]) ? `[${_v1317[_v1309]}]` : _v1317[_v1309];
            _v1270.add("" + String(_v1319) + ":" + String(_v1315) + _d64("ASNDRuS8mOmAiSA=") + String(_v1317[_v1311]) + "ms " + String(_v1317[_v1313]) + "MB/s");
          });
        }
      }
    } catch (_v1320) {}
  }));
  const _v1321 = Array.from(_v1270).slice(0, 120);
  _v1264.set(_v1268, {
    t: Date.now(),
    v: _v1321
  });
  return _v1321;
}