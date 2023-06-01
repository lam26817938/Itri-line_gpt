const URLPREFIX='https://fast-ai-dot-aiotrob-stable.de.r.appspot.com/images/'
const FORMURL='https://docs.google.com/forms/d/e/1FAIpQLSeKjb1EeLkiR6NUQjRv5V82GqDGCgfcVf_hhjQriNNW5hQoaA/viewform'
const TODO='苡瑄救我'
const cases={
  '智慧交通':{
    "text": "智慧交通",
    "thumbnailImageUrl": URLPREFIX+"menu/My%20project-1.jpg",
    "actions": [
      {
        "type": "postback", 
        "label": "進一步了解",
        "data": "info:智慧交通",
        "text":'智慧交通'
      }
    ]
  },
    '備料預測':{
      "text": "備料預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-15.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:備料預測",
          "text":'備料預測'
        }
      ]
    },
    '銷量預測':{
      "text": "銷量預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-18.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:銷量預測",
          "text":'銷量預測'
        }
      ]
    },
    '交貨量預測':{
      "text": "交貨量預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-16.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:交貨量預測",
          "text":'交貨量預測'
        }
      ]
    },
    '推薦系統':{
      "text": "推薦系統",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-19.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:推薦系統",
          "text":'推薦系統'
        }
      ]
    },
    '售價訂定':{
      "text": "售價訂定",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-20.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:售價訂定",
          "text":'售價訂定'
        }
      ]
    },
    '員工離職預測':{
      "text": "員工離職預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-13.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:員工離職預測",
          "text":'員工離職預測'
        }
      ]
    },
    '載客熱點預測':{
      "text": "載客熱點預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-3.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:載客熱點預測",
          "text":'載客熱點預測'
        }
      ]
    },
    '景點人數預測':{
      "text": "景點人數預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-2.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:景點人數預測",
          "text":'景點人數預測'
        }
      ]
    },
    '馬拉松運動博覽會參訪動線類別預測':{
      "text": "馬拉松運動博覽會參訪動線類別預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-5.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:馬拉松運動博覽會參訪動線類別預測",
          "text":'馬拉松運動博覽會參訪動線類別預測'
        }
      ]
    },
    '疾病風險預測':{
      "text": "疾病風險預測",
      "thumbnailImageUrl": URLPREFIX+"menu/My%20project-6.jpg",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:疾病風險預測",
          "text":'疾病風險預測'
        }
      ]
    },
      '員工表現評估':{
        "text": "員工表現評估",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-14.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:員工表現評估",
            "text":'員工表現評估'
          }
        ]
      },
      '房價預測':{
        "text": "房價預測",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-4.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:房價預測",
            "text":'房價預測'
          }
        ]
      },
      'AOI瑕疵分類':{
        "text": "AOI瑕疵分類",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-17.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:AOI瑕疵分類",
            "text":'AOI瑕疵分類'
          }
        ]
      },
      '智慧建築':{
        "text": "智慧建築",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-10.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:智慧建築",
            "text":'智慧建築'
          }
        ]
      },
      '視網膜病變影像判讀':{
        "text": "視網膜病變影像判讀",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-7.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:視網膜病變影像判讀",
            "text":'視網膜病變影像判讀'
          }
        ]
      },
      '腦腫瘤分割':{
        "text": "腦腫瘤分割",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-8.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:腦腫瘤分割",
            "text":'腦腫瘤分割'
          }
        ]
      },
      '農產品瑕疵檢測':{
        "text": "農產品瑕疵檢測",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-11.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:農產品瑕疵檢測",
            "text":'農產品瑕疵檢測'
          }
        ]
      },
      '牧場乳量預測':{
        "text": "牧場乳量預測",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-12.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:牧場乳量預測",
            "text":'牧場乳量預測'
          }
        ]
      },
      '循環材料辨識':{
        "text": "循環材料辨識",
        "thumbnailImageUrl": URLPREFIX+"menu/My%20project-9.jpg",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:循環材料辨識",
            "text":'循環材料辨識'
          }
        ]
      }
    }

   const industry=[
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '軟體科技業',
            data: 'industry:軟體科技業',
            text:'軟體科技業'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '製造或營造業',
            data: 'industry:製造或營造業',
            text:'製造或營造業'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '技術服務業',
            data: 'industry:技術服務業',
            text:'技術服務業'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '醫療生技業',
            data: 'industry:醫療生技業',
            text:'醫療生技業'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '教育服務業',
            data: 'industry:教育服務業',
            text:'教育服務業'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '藝術`娛樂休閒業',
            data: 'industry:藝術`娛樂休閒業',
            text:'藝術`娛樂休閒業'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '運輸物流業',
            data: 'industry:運輸物流業',
            text:'運輸物流業'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '金融保險業',
            data: 'industry:金融保險業',
            text:'金融保險業'
          }
        },{
          type: 'action',
          action: {
            type: 'postback',
            label: '零售批發業',
            data: 'industry:零售批發業',
            text:'零售批發業'
          }
        }
      ]

      const title=[
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '客戶服務',
            data: 'title:客戶服務',
            text:'客戶服務'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '業務/行銷人員',
            data: 'title:業務/行銷人員',
            text:'業務/行銷人員'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '財會/行政人員',
            data: 'title:財會/行政人員',
            text:'財會/行政人員'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '研發工程師',
            data: 'title:研發工程師',
            text:'研發工程師'
          }
        },
        {
          type: 'action',
          action: {
            type: 'postback',
            label: '產線/物流工程師',
            data: 'title:產線/物流工程師',
            text:'產線/物流工程師'
          }
        }
      ]

   const casetest={
    "備料預測": "將多種物料的使用量資料，透過時序預測模組建立AI模型與成效評估，結合內部ERP資料，預測下個月物料備料需求。",
    "交貨量預測": "根據倉庫每種物料的需求量，透過時序預測模組建立AI模型與成效評估，預測下個月物料叫貨量，降低成本。",
    "AOI瑕疵分類": "將AOI影像資料，透過影像標註與圖片辨識模組建立AI模型，分類AOI影像瑕疵，提高生產品質，取代傳統檢測方法。",
    "銷量預測": "將商品歷史日銷售資料，透過時序預測模組建立AI模型與成效評估，提供隔週的銷售量作為訂貨決策的參考。",
    "推薦系統": "利用自然語言處理和深度學習技術，分析顧客購買歷史，推薦相關產品，提高銷售轉換率和顧客忠誠度。",
    "售價訂定": "利用FAST AI分析消費者對不同價格點的反應，從而制定最適合的訂價策略，提高銷售額和利潤。",
    "員工離職預測": "將歷史員工離職資料，透過時序預測模組建立AI模型與成效評估，分析員工離職風險，提供預警和評估。",
    "員工表現評估": "利用機器學習模型，對員工的表現數據進行分析，快速評估員工的工作表現並提供即時反饋。",
    "景點人數預測": "結合電信人群資料和外部資料如COVID-19、Google Trend等資料，套用時序預測模組，預測景點人數。",
    "載客熱點預測": "結合計程車GPS紀錄、歷史乘車資料、地點資料和外部資訊如結合日曆、天氣等資訊，套用時序預測模組，預測乘車需求。",
    "馬拉松運動博覽會參訪動線類別預測": "利用參與者的手機移動路徑資料，透過時序預測模組，預測參訪者喜好和佇留情況，提升活動效率。",
    "智慧交通": "透過圖像識別和機器學習技術，進行交通監控和智慧交通管理。例如預測交通瓶頸，提供路線建議。",
    "房價預測": "利用不動產交易歷史資料，透過時序預測模組建立AI模型，預測未來房價走勢，提供市場趨勢預測及購買建議。",
    "循環材料辨識": "將卡車車斗內可辨識循環材料的影像資料，透過影像辨識模組建立AI模型，辨識卡車車斗內的循環材料。",
    "智慧建築": "利用建築物的歷史能耗數據和其他數據，透過時序預測和影像辨識模組建立AI模型，預測能耗趨勢，提供節能建議。",
    "疾病風險預測": "利用眼底影像和患者資料，透過時序預測和影像辨識模組建立模型，預測心血管疾病的風險。",
    "視網膜病變影像判讀": "利用眼底影像和標註資料，透過影像辨識模組建立AI模型，進行糖尿病視網膜病變偵測。",
    "腦腫瘤分割": "使用醫大腦 MRI 影像資料，透過影像辨識模組建立AI模型，快速偵測腫瘤位置，提升醫療工作效率。",
    "農產品瑕疵檢測": "利用已標記檸檬品質好與不好的影像資料，透過影像辨識模組建立AI模型，快速辨識檸檬品質，提升農產品檢測效率。",
    "牧場乳量預測": "利用乳牛群性能改良資料，透過時序預測模組建立AI模型，預測不同地區牧場的乳量。"
    }

    const GPTFOOD=['FAST AI特色：擴大垂直領域解決方案：FAST AI應用於不同領域的問題解決及優化，包括在軟體服務業、技術服務業、教育服務業、藝術娛樂休閒業、運輸物流業、金融保險業、零售批發業、醫療生技業及製造營造業的預測分析應用、影像分析應用、最佳化分析應用。少量標註資料/自動化AI技術：在聯合學習方面，發展個性化技術，保障個人隱私、跨企業資料合作，降低訓練準確率誤差；在自動化機器學習方面，因應產品型態自動建立最佳化AI模型，較國際軟體使用更少運算資源；在少量資料學習方面，發展少量標記資料學習技術，與領域別之非監督式領域調適技術，減少資料標註的人力與收集時間。',

    '整合共通需求建構一站式系統：簡化AI專案開發流程管理，提升跨領域人才應用AI能力；提升企業營運管理與產品競爭力，協助減少生產耗能，降低碳排；推動聯合學習生態系合作、跨業資料共享創新應用。下為FAST AI模型訓練流程：1.資料收集 2.資料標註：透過視覺化呈現，降低資料清理時間、提供完整標註管理工具。可做批次標註、派圖給標註者、提供審閱機制，嚴格控管標註品質，提供統計儀表板握標註使用者進度狀況與完成率。3.模型選擇+資料擴增+模型訓練+成效評估：透過AutoML找出最佳模型，點選即可完成模型訓練流程。4.模型部署：將訓練好的模型應用到實際問題，進行新資料的預測或分類。',

    'FAST AI以DataRefine進行資料的準備，DataRefine是指對數據進行清理、處理和轉換的過程。1.檢視過濾：類別觀察：文字型，分佈、摘要：數值型，格式查驗：空白、空字串2.資料清理：型態轉換：日期、數值、文字，編輯/增刪：名稱、位置、移除、大小寫、取代、標記3.進階功能：欄位語意辨識 (類別型)，異常值偵測 (數值型) 過濾、一鍵排除異常值。',

    'FAST AI時序預測的應用場景:1.商務應用客流量預測:以歷史客流量資料結合外部資料，透過時序預測模組，預測某個時段內、某個地點的來客人數2.商務應用銷量預測:將商品歷史日銷售資料，透過時序預測模組，自動化建立AI模型與成效評估，提供參考的銷售量作為訂貨決策3.傳統產業備料預測;將多種物料的實際使用量資料，透過時序預測模組，結合內部ERP資料，自動化建立AI模型與成效評估，提供每種品項參考的備料數量。',

    '請回覆我"請問是以下業種中，是否有包含您的職業呢？若無，請直接輸入您的產業別。"如果我回答的內容不是行業別，請回覆我"請輸入正確行業別"，如果是行業別，請給我需求應用案例建議，像是根據不動產業回覆"您好！ FAST AI可以應用在不動產業務中的各種項目評估與預測。以下是一些可能的應用案例： 房價預測 房屋售出機率預測 地區開發潛力評估 租金趨勢預測 客戶需求分析"。如果我遇到和FAST AI無關的資訊或問題時，我會回答"我是FAST AI官方對話機器人，只回答FAST AI相關訊息，請問您還有什麼相關問題想詢問嗎？"']


      const QQQQ={'常見問答':{
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          text: '您好！\n關於FAST AI常見問答如下，請點擊您想諮詢的分類，謝謝！',
          actions: [
            {
              type: 'postback',
              label: '系統相關問題',
              text: '系統相關問題',
              data:'QQQQ:系統相關問題'
            },
            {
              type: 'postback',
              label: '應用案例',
              text: '應用案例',
              data:'QQQQ:應用案例'
            },
          ]
        }
      },
        '系統相關問題':{
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          text: '您好！\n以下是系統問題清單，請點選您想要詢問的項目，謝謝。',
          actions: [
            {
              type: 'postback',
              label: '硬體需求',
              text: '硬體需求',
              data:'QQQQ:硬體需求'
            },
            {
              type: 'postback',
              label: '資料準備需求',
              text: '資料準備需求',
              data:'QQQQ:資料準備需求'
            },
          ]
        }
      },'硬體需求':
      {
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          text: '您好！ 以下是硬體環境最低需求，謝謝。\n主節點：16core  64GB  2TB * 1\n'+TODO,
          actions: [
            {
              type: 'uri',
              label: '申請試用',
              uri: FORMURL
            }
          ]
        }
      },'資料準備需求':{
        type: 'template',
        altText: 'Message with button',
        template: {
          type: 'buttons',
          text: '以下是資料準備需求的內容，謝謝。\n時序預測資料類別(category)數：100類以內資料頻率：日、月、年都可\n'+TODO,
          actions: [
            {
              type: 'uri',
              label: '申請試用',
              uri: FORMURL
            }
          ]
        }
      }
    }

    const VIDEOIMG={'資料標註':{
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'buttons',
        thumbnailImageUrl: URLPREFIX+"function/annotation.jpg",
        text: '您好！​關於FAST AI 資料標註功能說明如影片，謝謝！',
        actions: [
          {
            type: 'postback',
            label: '推薦方案',
            text: '推薦方案',
            data:'VVV:資料標註'
          },
          {
            type: 'uri',
            label: '申請試用',
            uri: FORMURL
          }
        ]
      }
    },'Data Refine':{
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'buttons',
        thumbnailImageUrl: URLPREFIX+"function/dataRefine.jpg",
        text: '您好！​關於FAST AI Data Refine功能說明如影片，謝謝！',
        actions: [
          {
            type: 'postback',
            label: '推薦方案',
            text: '推薦方案',
            data:'VVV:Data Refine'
          },
          {
            type: 'uri',
            label: '申請試用',
            uri: FORMURL
          }
        ]
      }
    },'時序預測':{
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'buttons',
        thumbnailImageUrl: URLPREFIX+"function/timeSeries.jpg",
        text: '您好！​關於FAST AI 時序預測功能說明如影片，謝謝！',
        actions: [
          {
            type: 'postback',
            label: '推薦方案',
            text: '推薦方案',
            data:'VVV:時序預測'
          },
          {
            type: 'uri',
            label: '申請試用',
            uri: FORMURL
          }
        ]
      }
    },'影像分類':{
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'buttons',
        thumbnailImageUrl: URLPREFIX+"function/imageClassfication.jpg",
        text: '您好！​關於FAST AI 影像分類功能說明如影片，謝謝！',
        actions: [
          {
            type: 'postback',
            label: '推薦方案',
            text: '推薦方案',
            data:'VVV:影像分類'
          },
          {
            type: 'uri',
            label: '申請試用',
            uri: FORMURL
          }
        ]
      }
    },
      
    }
    const OTHERTITLE={
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'buttons',
        text: '可以查看案例說明',
        actions: [
          {
            type: 'postback',
            label: '應用案例',
            text: '應用案例',
            data:'QQQQ:應用案例'
          },
          {
            type: 'uri',
            label: '申請試用',
            uri: FORMURL
          }
        ]
      }
    };

    const allbigfunc={
      type: 'template',
      altText: 'Message with button',
      template: {
        type: 'carousel',
        "columns": [
          {
            "thumbnailImageUrl": URLPREFIX+"function/imageClassfication.jpg",
            "title": "影像分類",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": '影像分類',
                "text": '影像分類',
                "data":'VVV:影像分類'
              }
            ]
          },
          {
            "thumbnailImageUrl": URLPREFIX+"function/timeSeries.jpg",
            "title": "時序預測",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": '時序預測',
                "text": '時序預測',
                "data":'VVV:時序預測'
              }
            ]
          },
          {
            "thumbnailImageUrl": URLPREFIX+"function/annotation.jpg",
            "title": "資料標註",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": '資料標註',
                "text": '資料標註',
                "data":'VVV:資料標註'
              }
            ]
          },
          {
            "thumbnailImageUrl": URLPREFIX+"function/dataRefine.jpg",
            "title": "Data Refine",
            "text": TODO,
            "actions": [
              {
                "type": 'postback',
                "label": 'Data Refine',
                "text": 'Data Refine',
                "data":'VVV:Data Refine'
              }
            ]
          },
        ]
      }
    }

export {cases, industry, title, casetest, URLPREFIX, GPTFOOD, QQQQ, VIDEOIMG, FORMURL, OTHERTITLE, allbigfunc, TODO};