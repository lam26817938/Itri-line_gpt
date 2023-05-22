const cases={
    '客戶流失率預測':{
      "text": "客戶流失率預測",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:客戶流失率預測",
          "text":'客戶流失率預測'
        }
      ]
    },
    '備料預測':{
      "text": "備料預測",
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
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:交貨量預測",
          "text":'交貨量預測'
        }
      ]
    },
    '商品喜好度推薦系統':{
      "text": "商品喜好度推薦系統",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:商品喜好度推薦系統",
          "text":'商品喜好度推薦系統'
        }
      ]
    },
    '訂定售價':{
      "text": "訂定售價",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:訂定售價",
          "text":'訂定售價'
        }
      ]
    },
    '離職率預測':{
      "text": "離職率預測",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:離職率預測",
          "text":'離職率預測'
        }
      ]
    },
    '交通熱區預測':{
      "text": "交通熱區預測",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:交通熱區預測",
          "text":'交通熱區預測'
        }
      ]
    },
    '人潮預測':{
      "text": "人潮預測",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:人潮預測",
          "text":'人潮預測'
        }
      ]
    },
    '建築物料耗損預測':{
      "text": "建築物料耗損預測",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:建築物料耗損預測",
          "text":'建築物料耗損預測'
        }
      ]
    },
    '疾病風險預測':{
      "text": "疾病風險預測",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:疾病風險預測",
          "text":'疾病風險預測'
        }
      ]
    },
      '病變影像判讀':{
        "text": "病變影像判讀",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:病變影像判讀",
            "text":'病變影像判讀'
          }
        ]
      },
      '材料辨識':{
        "text": "材料辨識",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:材料辨識",
            "text":'材料辨識'
          }
        ]
      },
      '瑕疵分類':{
        "text": "瑕疵分類",
        "actions": [
          {
            "type": "postback",
            "label": "進一步了解",
            "data": "info:瑕疵分類",
            "text":'瑕疵分類'
          }
        ]
      },
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
      "備料預測": "國營事業備料預測：將多種物料的使用量資料，透過時序預測模組建立AI模型與成效評估，結合內部ERP資料，預測下個月物料備料需求。",
      "交貨量預測": "國營事業物料需求量預測：根據倉庫每種物料的需求量，透過時序預測模組建立AI模型與成效評估，預測下個月物料叫貨量，降低成本。",
      "AOI瑕疵分類": "製造業AOI瑕疵分類：將AOI影像資料，透過影像標註與圖片辨識模組建立AI模型，分類AOI影像瑕疵，提高生產品質，取代傳統檢測方法。",
      "銷量預測": "零售業銷量預測：將商品歷史日銷售資料，透過時序預測模組建立AI模型與成效評估，提供隔週的銷售量作為訂貨決策的參考。",
      "推薦系統": "顧客喜好推薦：利用自然語言處理和深度學習技術，分析顧客購買歷史，推薦相關產品，提高銷售轉換率和顧客忠誠度。",
      "售價訂定": "定價策略智慧化：利用FAST AI分析消費者對不同價格點的反應，從而制定最適合的訂價策略，提高銷售額和利潤。",
      "員工離職預測": "分析員工未來的離職風險：將歷史員工離職資料，透過時序預測模組建立AI模型與成效評估，分析員工離職風險，提供預警和評估。",
      "員工表現評估": "員工工作表現考核：利用機器學習模型，對員工的表現數據進行分析，快速評估員工的工作表現並提供即時反饋。",
      "景點人數預測": "景點人數預測：結合電信人群資料和外部資料如COVID-19、Google Trend等資料，套用時序預測模組，預測景點人數。",
      "載客熱點預測": "載客熱點預測：結合計程車GPS紀錄、歷史乘車資料、地點資料和外部資訊如結合日曆、天氣等資訊，套用時序預測模組，預測乘車需求。",
      "馬拉松運動博覽會參訪動線類別預測": "分析活動人潮路線預測群眾喜好：利用參與者的手機移動路徑資料，透過時序預測模組，預測參訪者喜好和佇留情況，提升活動效率。",
      "智慧交通": "分析交通熱區與交通管理：透過圖像識別和機器學習技術，進行交通監控和智慧交通管理。例如預測交通瓶頸，提供路線建議。",
      "房價預測": "控制房價漲幅：利用不動產交易歷史資料，透過時序預測模組建立AI模型，預測未來房價走勢，提供市場趨勢預測及購買建議。",
      "循環材料辨識": "循環材料辨識：將卡車車斗內可辨識循環材料的影像資料，透過影像辨識模組建立AI模型，辨識卡車車斗內的循環材料。",
      "智慧建築": "建築物能耗預測：利用建築物的歷史能耗數據和其他數據，透過時序預測和影像辨識模組建立AI模型，預測能耗趨勢，提供節能建議。",
      "疾病風險預測": "糖尿病患者心血管疾病1年內的風險預測：利用眼底影像和患者資料，透過時序預測和影像辨識模組建立模型，預測心血管疾病的風險。",
      "糖尿病視網膜病變影像判讀": "糖尿病視網膜病變病徵/組織結構位置偵測：利用眼底影像和標註資料，透過影像辨識模組建立AI模型，進行糖尿病視網膜病變偵測。",
      "腦腫瘤分割": "腦腫瘤位置偵測與腫瘤分割：使用醫大腦 MRI 影像資料，透過影像辨識模組建立AI模型，快速偵測腫瘤位置，提升醫療工作效率。",
      "農產品瑕疵檢測": "農產品品質分類：利用已標記檸檬品質好與不好的影像資料，透過影像辨識模組建立AI模型，快速辨識檸檬品質，提升農產品檢測效率。",
      "台灣牧場乳量預測": "預測台灣不同地區牧場生產的乳量：利用乳業協會的乳牛群性能改良資料，透過時序預測模組建立AI模型，預測不同地區牧場的乳量，提供智慧牧場管理參考。"
      }

export {cases, industry, title, casetest};