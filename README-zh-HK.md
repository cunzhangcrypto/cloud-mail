<p align="center">
    <img src="doc/demo/logo.png" width="80px" />
    <h1 align="center">Cloud Mail</h1>
    <p align="center">基於 Cloudflare 的簡約響應式電郵服務，支援郵件發送、附件收發 🎉</p> 
    <p align="center">
        <a href="/README.md">简体中文</a> | 繁體中文（香港） | <a href="/README-en.md">English</a>
    </p>
    <p align="center">
        <a href="https://github.com/maillab/cloud-mail/tree/main?tab=MIT-1-ov-file" target="_blank" >
            <img src="https://img.shields.io/badge/license-MIT-green" />
        </a>    
        <a href="https://github.com/maillab/cloud-mail/releases" target="_blank" >
            <img src="https://img.shields.io/github/v/release/maillab/cloud-mail" alt="releases" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/issues" >
            <img src="https://img.shields.io/github/issues/maillab/cloud-mail" alt="issues" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/stargazers" target="_blank">
            <img src="https://img.shields.io/github/stars/maillab/cloud-mail" alt="stargazers" />
        </a>  
        <a href="https://github.com/maillab/cloud-mail/forks" target="_blank" >
            <img src="https://img.shields.io/github/forks/maillab/cloud-mail" alt="forks" />
        </a>
    </p>
    <p align="center">
        <a href="https://trendshift.io/repositories/14418" target="_blank" >
            <img src="https://trendshift.io/api/badge/repositories/14418" alt="trendshift" >
        </a>
    </p>
</p>


## 項目簡介

只需要一個域名，就可以建立多個不同的電郵地址，類似各大電郵平台。本項目支援部署到 Cloudflare Workers，降低伺服器成本，搭建屬於自己的電郵服務。

## 項目展示

- [線上示範](https://skymail.ink)<br>
- [部署文件](https://doc.skymail.ink)<br>

| ![](/doc/demo/demo1.png) | ![](/doc/demo/demo2.png) |
|-----------------------|-----------------------|
| ![](/doc/demo/demo3.png) | ![](/doc/demo/demo4.png) |




## 功能介紹

- **💰 低成本使用**：可部署到 Cloudflare Workers，降低伺服器成本

- **💻 響應式設計**：響應式佈局自動適配 PC 及大部分手機瀏覽器

- **📧 郵件發送**：整合 Resend 發送郵件，支援群發、內嵌圖片及附件發送，並可查看發送狀態

- **🛡️ 管理員功能**：可對用戶、郵件進行管理，透過 RBAC 權限控制功能及資源使用限制

- **📦 附件收發**：支援收發附件，使用 R2 物件儲存保存及下載檔案

- **🔔 郵件推送**：接收郵件後可轉發至 Telegram 機械人或其他服務商電郵

- **📡 開放 API**：支援使用 API 批量生成用戶、多條件查詢郵件

- **📈 數據可視化**：使用 ECharts 對系統數據詳情、用戶郵件增長進行可視化顯示

- **🎨 個性化設定**：可自訂網站標題、登入背景、透明度

- **🤖 人機驗證**：整合 Turnstile 人機驗證，防止批量註冊

- **📜 更多功能**：正在開發中...



## 技術棧

- **平台**：[Cloudflare Workers](https://developers.cloudflare.com/workers/)

- **Web 框架**：[Hono](https://hono.dev/)

- **ORM：**[Drizzle](https://orm.drizzle.team/)

- **前端框架**：[Vue3](https://vuejs.org/) 

- **UI 框架**：[Element Plus](https://element-plus.org/) 

- **郵件推送：** [Resend](https://resend.com/)

- **快取**：[Cloudflare KV](https://developers.cloudflare.com/kv/)

- **資料庫**：[Cloudflare D1](https://developers.cloudflare.com/d1/)

- **檔案儲存**：[Cloudflare R2](https://developers.cloudflare.com/r2/)

## 目錄結構

```
cloud-mail
├── mail-worker				    # worker 後端項目
│   ├── src                  
│   │   ├── api	 			    # api 接口層			
│   │   ├── const  			    # 項目常數
│   │   ├── dao                 # 數據訪問層
│   │   ├── email			    # 郵件處理接收
│   │   ├── entity			    # 資料庫實體
│   │   ├── error			    # 自訂異常
│   │   ├── hono			    # web 框架配置、攔截器、全局異常等
│   │   ├── i18n			    # 語言國際化
│   │   ├── init			    # 資料庫快取初始化
│   │   ├── model			    # 響應體數據封裝
│   │   ├── security			# 身份權限認證
│   │   ├── service			    # 業務服務層
│   │   ├── template			# 消息模板
│   │   ├── utils			    # 工具類
│   │   └── index.js			# 入口文件
│   ├── package.json			# 項目依賴
│   └── wrangler.toml			# 項目配置
│
├── mail-vue				    # vue 前端項目
│   ├── src
│   │   ├── axios 			    # axios 配置
│   │   ├── components			# 自訂組件
│   │   ├── echarts			    # echarts 組件導入
│   │   ├── i18n			    # 語言國際化
│   │   ├── init			    # 啟動初始化
│   │   ├── layout			    # 主體佈局組件
│   │   ├── perm			    # 權限認證
│   │   ├── request			    # api 接口
│   │   ├── router			    # 路由配置
│   │   ├── store			    # 全局狀態管理
│   │   ├── utils			    # 工具類
│   │   ├── views			    # 頁面組件
│   │   ├── app.vue			    # 入口組件
│   │   ├── main.js			    # 入口 js
│   │   └── style.css			# 全局 css
│   ├── package.json			# 項目依賴
└── └── env.release				# 項目配置
```

## 贊助

<a href="https://doc.skymail.ink/support.html" >
<img width="170px" src="./doc/images/support.png" alt="">
</a>

## 許可證

本項目採用 [MIT](LICENSE) 許可證	


## 交流

[Telegram](https://t.me/cloud_mail_tg)

