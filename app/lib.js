const cases={
    '客戶流失率預測':{
      "text": "客戶流失率預測",
      "actions": [
        {
          "type": "postback",
          "label": "進一步了解",
          "data": "info:客戶流失率預測",
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
          "text":'進一步了解'
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
            "text":'進一步了解'
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
            "text":'進一步了解'
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
            "text":'進一步了解'
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

export {cases, industry, title};