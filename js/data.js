// 自治体データ
// hasData: true の自治体のみ詳細データが表示されます。
// 新しい自治体のデータを追加する際は、hasData を true に変更し、
// 各フィールドを東村山市のフォーマットに従って入力してください。

const MUNICIPALITY_DATA = {
  // ===== 特別区 =====
  "13114": {
    name: "中野区",
    hasData: false
  },
  "13115": {
    name: "杉並区",
    hasData: false
  },

  // ===== 市（26） =====
  "13201": {
    name: "八王子市",
    hasData: false
  },
  "13202": {
    name: "立川市",
    hasData: false
  },
  "13203": {
    name: "武蔵野市",
    hasData: false
  },
  "13204": {
    name: "三鷹市",
    hasData: false
  },
  "13205": {
    name: "青梅市",
    hasData: false
  },
  "13206": {
    name: "府中市",
    hasData: false
  },
  "13207": {
    name: "昭島市",
    hasData: false
  },
  "13208": {
    name: "調布市",
    hasData: false
  },
  "13209": {
    name: "町田市",
    hasData: false
  },
  "13210": {
    name: "小金井市",
    hasData: false
  },
  "13211": {
    name: "小平市",
    hasData: false
  },
  "13212": {
    name: "日野市",
    hasData: false
  },
  "13213": {
    name: "東村山市",
    hasData: true,
    number: 9,
    churches: {
      kyoudan: ["東村山"],
      otherDenominations: [
        "東村山キリスト",
        "キリストの栄光",
        "東京聖書学院",
        "東村山福音自由",
        "聖書キリスト久米川",
        "イエス福音教団東村山",
        "萩山神の教会",
        "恩多キリスト教会"
      ],
      otherCount: 6,
      notes: ""
    },
    basicData: {
      population: 151751,
      populationDate: "2024.1.1",
      area: 17.14,
      density: 8853
    },
    schools: {
      elementary: {
        count: 15,
        publicStudents: 6828,
        publicStudentsYear: "R6",
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 11,
        privateCount: 3,
        publicStudents: 3536,
        publicStudentsYear: "R6",
        privateSchools: [
          { name: "明治学院中学校", denomination: "プロテスタント" },
          { name: "明法", denomination: null },
          { name: "日体桜華", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 5,
        privateCount: 3,
        publicStudents: 3040,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明治学院東村山", denomination: "プロテスタント" },
          { name: "明法", denomination: null },
          { name: "日体桜華", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: null,
        students: null,
        schools: [],
        notes: ""
      }
    },
    populationComposition: {
      data: [
        { range: "0～9歳",  count: 10891 },
        { range: "10代",    count: 13206 },
        { range: "20代",    count: 15241 },
        { range: "30代",    count: 16394 },
        { range: "40代",    count: 20784 },
        { range: "50代",    count: 24481 },
        { range: "60代",    count: 17870 },
        { range: "70代",    count: 17698 },
        { range: "80代",    count: 12095 },
        { range: "90代～",  count: 3091 }
      ],
      notes: "ほぼ横ばい。平成23年7月をピークに減少傾向にあり。少子高齢化が進みつつある。"
    },
    populationTrend: null,
    industryStructure: null
  },
  "13214": {
    name: "国分寺市",
    hasData: false
  },
  "13215": {
    name: "国立市",
    hasData: false
  },
  "13218": {
    name: "福生市",
    hasData: false
  },
  "13219": {
    name: "狛江市",
    hasData: false
  },
  "13220": {
    name: "東大和市",
    hasData: false
  },
  "13221": {
    name: "清瀬市",
    hasData: false
  },
  "13222": {
    name: "東久留米市",
    hasData: false
  },
  "13223": {
    name: "武蔵村山市",
    hasData: false
  },
  "13224": {
    name: "多摩市",
    hasData: false
  },
  "13225": {
    name: "稲城市",
    hasData: false
  },
  "13227": {
    name: "羽村市",
    hasData: false
  },
  "13228": {
    name: "あきる野市",
    hasData: false
  },
  "13229": {
    name: "西東京市",
    hasData: false
  },

  // ===== 町（3） =====
  "13303": {
    name: "瑞穂町",
    hasData: false
  },
  "13305": {
    name: "日の出町",
    hasData: false
  },
  "13308": {
    name: "奥多摩町",
    hasData: false
  },

  // ===== 村（1） =====
  "13307": {
    name: "檜原村",
    hasData: false
  }
};
