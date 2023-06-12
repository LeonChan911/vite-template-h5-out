import { CommonConstant } from '@/constant';
import { CommonEnum } from '@/enum';
import qs from 'qs';
import { parse } from '@xmly/xmly-ua-parser';
import { name as projectName } from '../../package.json';

const isSupportWebp =
  !![].map &&
  document
    .createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;

const ua = navigator.userAgent.toLowerCase();

const getFullParamValue = () => {
  const queryObj = qs.parse(window.location.search, {
    ignoreQueryPrefix: true
  });

  const fullWithTransparentBarQuery =
    queryObj[CommonConstant.SEARCH_KEYS.FullWithTransparentBar];

  return Array.isArray(fullWithTransparentBarQuery)
    ? fullWithTransparentBarQuery[0]
    : fullWithTransparentBarQuery;
};

const parserXmlyUa = () => {
  return parse(navigator.userAgent);
};

const { VITE_BUILD_ENV, VITE_PACKAGEE_NAME } = import.meta.env;
export default {
  VITE_BUILD_ENV,
  projectName,
  isMock: VITE_BUILD_ENV === 'mock',
  isDev: VITE_BUILD_ENV === 'development',
  isTest: VITE_BUILD_ENV === 'test',
  isUat: VITE_BUILD_ENV === 'uat',
  isProd: VITE_BUILD_ENV === 'production',
  isAndroid: /linux|android/.test(ua),
  isSafari: /safari/.test(ua) && !/chrome/.test(ua),
  isIos: !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
  isWeiXin: /micromessenger/.test(ua),
  isNative: /iting/i.test(ua),
  isMobile: /mobile/.test(ua),
  isWeiXinDebug: /wxdebug/.test(window.location.href),
  isDebug: !!/__debug/.test(window.location.href),
  isSupportWebp,
  /* 不再支持暗黑主题使用 */
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  isXmlyDomain: /ximalaya.com/i.test(window.location.host),
  isFull: getFullParamValue() === CommonEnum.FullEnum.YES,
  parserXmlyUa
};
