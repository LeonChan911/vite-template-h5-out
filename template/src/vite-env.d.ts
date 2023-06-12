/// <reference types="vite/client" />

/**
 * 编译环境
 */
declare type BuildEnv = 'development' | 'mock' | 'test' | 'uat' | 'production';

/**
 * 多编译环境变量约束
 */
declare type MultiEnv<T = string> = Record<BuildEnv, T>;

interface ImportMetaEnv {
  /** 编译环境 */
  readonly VITE_BUILD_ENV: BuildEnv;
  /** 静态资源 url */
  readonly VITE_PUBLIC_URL: string;
  /** 接口请求域名 */
  /** sourcemap上传地址 */
  readonly VITE_SOURCE_MAPPING_URL: string;
  readonly VITE_PACKAGEE_NAME: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare const ly: any;
declare const wx: any;
