import { NextResponse } from "next/server";

import { getServerSideConfig } from "../../config/server";

const serverConfig = getServerSideConfig();

// Danger! Do not hard code any secret value here!
// 警告！不要在这里写入任何敏感信息！
const DANGER_CONFIG = {
  needCode: serverConfig.needCode,
  hideUserApiKey: serverConfig.hideUserApiKey,
  disableGPT4: serverConfig.disableGPT4,
  hideBalanceQuery: serverConfig.hideBalanceQuery,
  disableFastLink: serverConfig.disableFastLink,
  customModels: serverConfig.customModels,
  defaultModel: serverConfig.defaultModel,
  visionModels: serverConfig.visionModels,
  // 添加各提供商是否可用的标志
  hasServerOpenAI: !!serverConfig.apiKey,
  hasServerAzure: serverConfig.isAzure,
  hasServerGoogle: serverConfig.isGoogle,
  hasServerAnthropic: serverConfig.isAnthropic,
  hasServerBaidu: serverConfig.isBaidu,
  hasServerBytedance: serverConfig.isBytedance,
  hasServerAlibaba: serverConfig.isAlibaba,
  hasServerTencent: serverConfig.isTencent,
  hasServerMoonshot: serverConfig.isMoonshot,
  hasServerIflytek: serverConfig.isIflytek,
  hasServerDeepSeek: serverConfig.isDeepSeek,
  hasServerXAI: serverConfig.isXAI,
  hasServerChatGLM: serverConfig.isChatGLM,
  hasServerSiliconFlow: serverConfig.isSiliconFlow,
  hasServerStability: serverConfig.isStability,
};

console.log("[Config] Danger config:", DANGER_CONFIG);

declare global {
  type DangerConfig = typeof DANGER_CONFIG;
}

async function handle() {
  return NextResponse.json(DANGER_CONFIG);
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
