// 自治体データ
// hasData: true の自治体のみ詳細データが表示されます。
// 新しい自治体のデータを追加する際は、hasData を true に変更し、
// 各フィールドを東村山市のフォーマットに従って入力してください。

const MUNICIPALITY_DATA = {
  // ===== 特別区 =====
  "13114": {
    name: "中野区",
    hasData: true,
    number: 1,
    churches: {
      kyoudan: ["十貫坂", "新生", "東中野", "中野", "中野桃園", "天門", "聖書之友", "野方町", "更生", "白鷺", "千歳"],
      otherDenominations: [
        "日本福音ルーテルスオミ・キリスト",
        "中野キリストの",
        "上高田キリスト",
        "東京集会",
        "日本同盟キリスト教団中野",
        "東京ホサナ",
        "日本ホーリネス新井",
        "中野バプテスト",
        "桜山キリストの",
        "新中野キリスト",
        "日本ナザレン中野",
        "日本キリスト改革派江古田",
        "キリスト同信会",
        "シオンの群",
        "カトリックベタニア修道女会",
        "江古田",
        "中野ジョイフル",
        "野方ウエスレアン・メソヂスト",
        "新井キリスト"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 334243,
      populationDate: "2022.9.1",
      area: 15.59,
      density: 21439
    },
    schools: {
      elementary: {
        count: 23,
        privateCount: 2,
        publicStudents: 10432,
        publicStudentsYear: null,
        privateSchools: [
          { name: "新渡戸文化", denomination: null },
          { name: "宝仙学園", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 16,
        privateCount: 5,
        publicStudents: 3729,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明治大学附属中野", denomination: null },
          { name: "宝仙学園", denomination: null },
          { name: "大妻中野", denomination: null },
          { name: "実践学園", denomination: null },
          { name: "新渡戸文化", denomination: null },
          { name: "東京大学教育学部附属", denomination: null }
        ],
        notes: "国立・中等教育学校1校（生徒715人）を含む"
      },
      highSchool: {
        count: 19,
        privateCount: 7,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "大妻中野", denomination: null },
          { name: "実践学園", denomination: null },
          { name: "東亜学園", denomination: null },
          { name: "新渡戸文化", denomination: null },
          { name: "宝仙学園", denomination: null },
          { name: "堀越", denomination: null },
          { name: "明治大学付属中野", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: 6,
        students: null,
        schools: [
          "帝京平成", "明治", "新渡戸文化短期",
          "東京工芸(芸術学部)", "国際短期", "子供教育宝仙"
        ],
        notes: "キリスト教系3校"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13115": {
    name: "杉並区",
    hasData: true,
    number: 2,
    churches: {
      kyoudan: ["井草", "高円寺", "阿佐ヶ谷", "阿佐谷東", "佐内坂", "杉並", "成宗", "新泉", "荻窪", "東京台湾", "荻窪清水", "大宮前", "西荻", "西荻北", "本郷"],
      otherDenominations: [
        "カトリック東京大司教区高円寺",
        "カトリック荻窪",
        "カトリック井草",
        "聖マリア修道女会",
        "スピノラ修道女会",
        "カリタス修道会東京修学志願院",
        "日本聖公会阿佐ヶ谷聖ペテロ",
        "日本聖公会聖マーガレット教会",
        "山手ハリストス正教会",
        "日本イエス・キリスト教団荻窪栄光",
        "日本長老教会久我山キリスト",
        "日本長老教会杉並",
        "日本福音ルーテル武蔵野",
        "東京中華基督",
        "杉並聖真ルーテル",
        "救世軍",
        "和泉",
        "方南町キリスト",
        "久遠キリスト",
        "井荻福音キリスト",
        "聖書友之会中央",
        "杉並中通",
        "西荻チャペル",
        "東京恵約",
        "東京アナバプテストセンター",
        "富士見ヶ丘キリスト"
      ],
      otherCount: null,
      notes: "他にも教会あり"
    },
    basicData: {
      population: 571849,
      populationDate: "2022.9.1",
      area: 34.06,
      density: 16789
    },
    schools: {
      elementary: {
        count: 43,
        privateCount: 2,
        publicStudents: 20441,
        publicStudentsYear: null,
        privateSchools: [
          { name: "光塩女子学院初等科", denomination: "カトリック" },
          { name: "立教女学院小学校", denomination: "プロテスタント" }
        ],
        notes: ""
      },
      middleSchool: {
        count: 31,
        privateCount: 8,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "光塩女子学院", denomination: "カトリック" },
          { name: "佼成学園", denomination: null },
          { name: "国学院大学久我山", denomination: null },
          { name: "女子美術大学付属", denomination: null },
          { name: "東京立正", denomination: null },
          { name: "日本大学第二", denomination: null },
          { name: "文化学園大学杉並", denomination: null },
          { name: "立教女学院", denomination: "プロテスタント" }
        ],
        notes: ""
      },
      highSchool: {
        count: 19,
        privateCount: 12,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "光塩女子学院", denomination: "カトリック" },
          { name: "佼成学園", denomination: null },
          { name: "國學院大学久我山", denomination: null },
          { name: "女子美術大学付属", denomination: null },
          { name: "杉並学院", denomination: null },
          { name: "専修大学付属", denomination: null },
          { name: "中央大学杉並", denomination: null },
          { name: "東京立正", denomination: null },
          { name: "日本大学第二", denomination: null },
          { name: "日本大学鶴ヶ丘", denomination: null },
          { name: "文化学園大学杉並", denomination: null },
          { name: "立教女学院", denomination: "プロテスタント" }
        ],
        notes: ""
      },
      university: {
        count: 5,
        students: null,
        schools: [
          "女子美術大学短期大学部", "高千穂", "東京女子",
          "東京立正短期", "明治大学和泉キャンパス"
        ],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },

  // ===== 市（26） =====
  "13201": {
    name: "八王子市",
    hasData: true,
    number: 26,
    churches: {
      kyoudan: ["八王子", "八王子栄光", "ロゴス", "めじろ台", "片倉", "ベテル伝道所"],
      otherDenominations: [
        "めじろ台シオンチャペル",
        "アガペー八王子チャペル",
        "アッセンブリー・東浅川キリスト教会",
        "インマヌエル八王子キリスト教会",
        "SDA八王子キリスト教会",
        "片倉キリストの教会",
        "カトリック八王子教会",
        "カトリック師イエズス修道女会",
        "北野キリスト教会八王子チャペル",
        "キリスト聖協団八王子教会",
        "純福音八王子教会",
        "東京フリー・メソジスト八王子中野キリスト教会",
        "東京ユナイト、ペンテコステ教会",
        "八王子に在る教会",
        "八王子復活教会・日本聖公会",
        "八王子めじろ台バプテスト教会",
        "八王子聖書バプテスト教会",
        "東京フリー・メソジスト教団南大沢チャペル",
        "アッセンブリー八王子シャロン教会",
        "日本ホーリネス教団八王子キリスト教会",
        "八王子バプテスト教会",
        "八王子キリスト福音教会"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 560834,
      populationDate: "2024.4",
      area: 186.38,
      density: 3010
    },
    schools: {
      elementary: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: 11,
        students: null,
        schools: [
          "中央大学", "帝京大学", "首都大学東京", "創価大学",
          "工学院大学", "多摩美術大学", "拓殖大学", "東京工科大学",
          "東京純心大学", "東京薬科大学", "日本文化大学"
        ],
        notes: "杏林大学八王子キャンパス、山野美容芸術短期大学、創価女子短期大学等もあり"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13202": {
    name: "立川市",
    hasData: true,
    number: 14,
    churches: {
      kyoudan: ["立川", "立川からし種伝道所"],
      otherDenominations: [],
      otherCount: 13,
      notes: "カトリック1、聖公会1、他プロテスタント教団11"
    },
    basicData: {
      population: 185124,
      populationDate: "2022.9",
      area: 24.36,
      density: 7600
    },
    schools: {
      elementary: {
        count: 20,
        publicStudents: 8630,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 9,
        publicStudents: 3779,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 4,
        publicStudents: 3739,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: 2,
        students: null,
        schools: ["国立音楽大学", "東京医療保健大学"],
        notes: "近隣に東京女子体育大学、武蔵野美術大学、白梅学園大学"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13203": {
    name: "武蔵野市",
    hasData: true,
    number: 3,
    churches: {
      kyoudan: ["武蔵野扶桑", "吉祥寺", "東美", "武蔵野緑", "境南"],
      otherDenominations: [
        "カトリック吉祥寺教会",
        "武蔵野福音自由教会",
        "日本アッセンブリー・オブ・ゴッド教団武蔵野キリスト教会",
        "三鷹福音教会",
        "希望の教会HOPE CHURCH",
        "東京グレイスプレイズチャーチ",
        "三鷹栄光キリスト教会"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 148034,
      populationDate: "2025.1.1",
      area: 10.98,
      density: 13482
    },
    schools: {
      elementary: {
        count: 15,
        privateCount: 3,
        publicStudents: 6436,
        publicStudentsYear: null,
        privateSchools: [
          { name: "聖徳学園", denomination: null },
          { name: "成蹊", denomination: null },
          { name: "武蔵野東", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 10,
        privateCount: 4,
        publicStudents: 695,
        publicStudentsYear: null,
        privateSchools: [
          { name: "吉祥女子", denomination: null },
          { name: "聖徳学園", denomination: null },
          { name: "成蹊", denomination: null },
          { name: "藤村女子", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 6,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "成蹊", denomination: null },
          { name: "武蔵", denomination: null },
          { name: "聖徳学園", denomination: null },
          { name: "藤村女子", denomination: null },
          { name: "吉祥女子", denomination: null }
        ],
        notes: "武蔵野北（公立）"
      },
      university: {
        count: 5,
        students: null,
        schools: ["成蹊", "亜細亜", "日本医科", "日本獣医生命", "日本赤十字看護"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13204": {
    name: "三鷹市",
    hasData: true,
    number: 4,
    churches: {
      kyoudan: ["三鷹", "相愛", "南三鷹"],
      otherDenominations: [
        "三鷹バプテスト教会",
        "キリスト兄弟団三鷹教会",
        "日本ホーリネス教団池の上キリスト教会",
        "仙川キリスト教会",
        "日本福音ルーテル三鷹教会",
        "国際基督教大学教会",
        "ライフチャーチ三鷹",
        "日本同盟基督教団希望聖書教会",
        "三鷹栄光キリスト教会"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 190497,
      populationDate: "2025.1.1",
      area: 16.42,
      density: 11601
    },
    schools: {
      elementary: {
        count: 16,
        privateCount: 1,
        publicStudents: 9444,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明星学園", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 9,
        privateCount: 2,
        publicStudents: 13025,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明星学園", denomination: null },
          { name: "法政大学", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 3,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "大成", denomination: null },
          { name: "法政大学", denomination: null },
          { name: "明星学園", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: 4,
        students: null,
        schools: ["杏林", "国際基督教", "東京神学", "ルーテル学院"],
        notes: "国際基督教大学・東京神学大学・ルーテル学院はキリスト教系"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13205": {
    name: "青梅市",
    hasData: true,
    number: 18,
    churches: {
      kyoudan: ["青梅"],
      otherDenominations: [],
      otherCount: 8,
      notes: "カトリック1、他プロテスタント7"
    },
    basicData: {
      population: 130515,
      populationDate: "2022.9.1",
      area: 103.31,
      density: 1263
    },
    schools: {
      elementary: {
        count: 17,
        publicStudents: 5681,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 11,
        publicStudents: 3163,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 2,
        publicStudents: 1406,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: 1,
        students: null,
        schools: ["明星大学青梅校"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13206": {
    name: "府中市",
    hasData: true,
    number: 22,
    churches: {
      kyoudan: ["東京府中"],
      otherDenominations: [
        "多磨教会",
        "イエス・キリスト緑の牧場",
        "ホサナ福音キリスト",
        "カトリック府中",
        "府中キリスト集会所",
        "キリスト教たんぽぽ",
        "日本聖公会聖マルコ",
        "日本キリスト教会府中中河原"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 260237,
      populationDate: "2022.9.1",
      area: 29.43,
      density: 8843
    },
    schools: {
      elementary: {
        count: 24,
        privateCount: 2,
        publicStudents: 13639,
        publicStudentsYear: null,
        privateSchools: [
          { name: "武蔵野学園", denomination: null },
          { name: "明星", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 12,
        privateCount: 1,
        publicStudents: 5721,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明星", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 4,
        privateCount: 1,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明星", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: 5,
        students: null,
        schools: [
          "東京外国語", "東京農工", "比治山", "東京経済", "東京電機"
        ],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13207": {
    name: "昭島市",
    hasData: true,
    number: 16,
    churches: {
      kyoudan: ["昭島", "拝島伝道所"],
      otherDenominations: [],
      otherCount: 3,
      notes: "プロテスタント他教団3"
    },
    basicData: {
      population: 114204,
      populationDate: "2022.9",
      area: 17.34,
      density: 6586
    },
    schools: {
      elementary: {
        count: 14,
        publicStudents: 5861,
        publicStudentsYear: null,
        privateSchools: [
          { name: "啓明学園初等部", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 7,
        publicStudents: 2718,
        publicStudentsYear: null,
        privateSchools: [
          { name: "啓明学園中学", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 3,
        publicStudents: 2032,
        publicStudentsYear: null,
        privateSchools: [
          { name: "啓明学園高校", denomination: null }
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
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13208": {
    name: "調布市",
    hasData: true,
    number: 20,
    churches: {
      kyoudan: ["仙川", "調布"],
      otherDenominations: [
        "日本同盟キリスト教団中原キリスト",
        "つつじが丘使徒キリスト",
        "汚れなきマリア修道会調布修道院",
        "つつじが丘キリスト",
        "カトリック調布",
        "日本バプテスト連盟調布南キリスト",
        "日本ホーリネス教団調布キリスト",
        "保恵キリスト",
        "日本福音基督教団",
        "多摩川キリスト",
        "調布バプテスト",
        "西調布キリスト教会日本宣教会",
        "調布バプテストテンプル",
        "カトリック・コングレガシオン・ド・ノートルダム修道会",
        "シヤルトル聖パウロ修道会緑ヶ丘修道院",
        "調布南（長老派）",
        "サレジオ修道院"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 229061,
      populationDate: "2022.9.1",
      area: 21.53,
      density: 10190
    },
    schools: {
      elementary: {
        count: 22,
        privateCount: 2,
        publicStudents: 9373,
        publicStudentsYear: null,
        privateSchools: [
          { name: "昇華学園", denomination: null },
          { name: "桐朋", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 12,
        privateCount: 4,
        publicStudents: 4240,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明治大学付属明治", denomination: null },
          { name: "昇華学園", denomination: null },
          { name: "桐朋女子", denomination: null },
          { name: "ドルトン東京学園中等部", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 7,
        privateCount: 4,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明治大学付属明治", denomination: null },
          { name: "昇華学園", denomination: null },
          { name: "桐朋女子", denomination: null },
          { name: "ドルトン東京学園高等部", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: 7,
        students: null,
        schools: [
          "白百合女子", "桐朋学園", "桐朋学園芸術短期",
          "電気通信", "駒沢女子大学短期", "東京家政学院", "東京慈恵会医科"
        ],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13209": {
    name: "町田市",
    hasData: true,
    number: 25,
    churches: {
      kyoudan: ["成瀬が丘", "玉川", "町田ベテル", "原町田", "成瀬台", "鶴川"],
      otherDenominations: [
        "日本キリスト合同協会つるかわ台教会",
        "ユアチャーチ",
        "相原キリスト集会",
        "柿生キリスト教会",
        "カトリック町田教会",
        "鶴川福音教会",
        "東京ホライズンチャペル",
        "成瀬キリスト教会",
        "日本聖公会東京教区真光教会",
        "日本ルーテル告白教会",
        "町田キリストの教会",
        "町田クリスチャンセンター",
        "エヴァグリーン・チャペル"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 430170,
      populationDate: "2025.4.1",
      area: 71.80,
      density: 5991
    },
    schools: {
      elementary: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: 6,
        students: null,
        schools: [
          "法政大学", "桜美林大学", "玉川大学",
          "国士舘大学", "東京家政学院大学", "和光大学"
        ],
        notes: "フェリシアこども短期大学もあり"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13210": {
    name: "小金井市",
    hasData: true,
    number: 11,
    churches: {
      kyoudan: ["小金井", "小金井緑町", "小金井西ノ台"],
      otherDenominations: [
        "カトリック1",
        "聖公会1",
        "他プロテスタント13"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 124614,
      populationDate: "2025.1.1",
      area: 11.30,
      density: 11027
    },
    schools: {
      elementary: {
        count: 10,
        privateCount: 1,
        publicStudents: 6450,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 9,
        privateCount: 4,
        publicStudents: 3884,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 6,
        publicStudents: 4886,
        publicStudentsYear: null,
        privateSchools: [
          { name: "中央大学高校", denomination: null },
          { name: "東京電機大学高校", denomination: null },
          { name: "国際基督教大学高校", denomination: "プロテスタント" }
        ],
        notes: ""
      },
      university: {
        count: 3,
        students: null,
        schools: ["東京学芸大学", "東京農工大学", "法政大学"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13211": {
    name: "小平市",
    hasData: true,
    number: 8,
    churches: {
      kyoudan: ["花小金井", "小平", "小平学園"],
      otherDenominations: [
        "小平（日キ会）",
        "小平キリスト（ホーリネス）",
        "小平聖書キリスト",
        "武蔵小金井",
        "シオンの群小平キリスト",
        "カトリック小平",
        "シャロームキリスト恵泉教会小平チャペル",
        "小川イエス福音",
        "日本キリスト改革派花小金井",
        "兄弟団弥生台キリスト",
        "バプ連花小金井キリスト"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 196913,
      populationDate: "R6",
      area: 20.51,
      density: 9601
    },
    schools: {
      elementary: {
        count: 21,
        privateCount: 2,
        publicStudents: 10213,
        publicStudentsYear: "R6",
        privateSchools: [
          { name: "サレジオ小", denomination: "カトリック" },
          { name: "東京創価小", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 11,
        privateCount: 3,
        publicStudents: 4401,
        publicStudentsYear: null,
        privateSchools: [
          { name: "サレジオ", denomination: "カトリック" },
          { name: "白梅学園", denomination: null },
          { name: "創価", denomination: null }
        ],
        notes: "清修中もあり"
      },
      highSchool: {
        count: 8,
        privateCount: 4,
        publicStudents: 835,
        publicStudentsYear: null,
        privateSchools: [
          { name: "創価", denomination: null },
          { name: "白梅学園", denomination: null },
          { name: "錦城", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: 6,
        students: null,
        schools: ["嘉悦", "白梅学園", "津田塾", "一橋", "文化学園", "武蔵野美術"],
        notes: ""
      }
    },
    populationComposition: {
      data: [
        { range: "0～9歳",  count: 16176 },
        { range: "10代",    count: 17921 },
        { range: "20代",    count: 22492 },
        { range: "30代",    count: 23089 },
        { range: "40代",    count: 28259 },
        { range: "50代",    count: 30207 },
        { range: "60代",    count: 21858 },
        { range: "70代",    count: 19843 },
        { range: "80代",    count: 13384 },
        { range: "90代～",  count: 3683 }
      ],
      notes: "増加傾向、直近増加率6.2%"
    },
    populationTrend: null,
    industryStructure: null
  },
  "13212": {
    name: "日野市",
    hasData: true,
    number: 15,
    churches: {
      kyoudan: ["日野台", "高幡"],
      otherDenominations: [
        "豊田キリスト",
        "カトリック豊田",
        "カトリック高幡",
        "南平キリスト",
        "日本バプテスト連盟日野神明キリスト",
        "西東京ルーテル",
        "日野高幡キリスト",
        "旭ヶ丘ジョイフルチャペル",
        "日野に在る"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 187322,
      populationDate: "2022.9.1",
      area: 27.55,
      density: 6799
    },
    schools: {
      elementary: {
        count: 17,
        publicStudents: 9373,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 8,
        publicStudents: 4240,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 3,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: 2,
        students: null,
        schools: ["明星大学", "実践女子"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
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
    hasData: true,
    number: 12,
    churches: {
      kyoudan: ["国分寺", "国分寺南", "西国分寺"],
      otherDenominations: [
        "プロテスタント4"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 129538,
      populationDate: "2024.12.1",
      area: 11.46,
      density: 11303
    },
    schools: {
      elementary: {
        count: 11,
        privateCount: 1,
        publicStudents: 6802,
        publicStudentsYear: null,
        privateSchools: [
          { name: "早稲田実業学校初等科", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 6,
        privateCount: 1,
        publicStudents: 3021,
        publicStudentsYear: null,
        privateSchools: [
          { name: "早稲田実業学校中等科", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 3,
        privateCount: 2,
        publicStudents: 949,
        publicStudentsYear: null,
        privateSchools: [
          { name: "早稲田実業学校高等科", denomination: null },
          { name: "日本芸術学園高等学園", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: 2,
        students: null,
        schools: ["東京経済大学", "東京学芸大学"],
        notes: "国際文化理容美容専門学校国分寺校もあり"
      }
    },
    populationComposition: {
      data: [
        { range: "0～9歳",  count: 10778 },
        { range: "10代",    count: 11092 },
        { range: "20代",    count: 15753 },
        { range: "30代",    count: 16992 },
        { range: "40代",    count: 18265 },
        { range: "50代",    count: 19870 },
        { range: "60代",    count: 14476 },
        { range: "70代",    count: 11825 },
        { range: "80代",    count: 8097 },
        { range: "90代～",  count: 2398 }
      ],
      notes: "昭和30年代に大きく人口を伸ばし、現在も堅調に増加。昼夜間人口比率は85.3%。"
    },
    populationTrend: null,
    industryStructure: null
  },
  "13215": {
    name: "国立市",
    hasData: true,
    number: 13,
    churches: {
      kyoudan: ["国立"],
      otherDenominations: [],
      otherCount: 7,
      notes: "他教団7"
    },
    basicData: {
      population: 76379,
      populationDate: "2022.9",
      area: 8.15,
      density: 9372
    },
    schools: {
      elementary: {
        count: 11,
        publicStudents: 4510,
        publicStudentsYear: null,
        privateSchools: [
          { name: "国立音楽大学付属小学校", denomination: null }
        ],
        notes: ""
      },
      middleSchool: {
        count: 5,
        publicStudents: 2349,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 4,
        publicStudents: 3013,
        publicStudentsYear: null,
        privateSchools: [
          { name: "桐朋学園", denomination: null },
          { name: "国立音楽大学付属高校", denomination: null },
          { name: "NHK学園", denomination: null }
        ],
        notes: "国立高校、第五商業を含む"
      },
      university: {
        count: 2,
        students: null,
        schools: ["一橋大学", "東京女子体育大学"],
        notes: "いわゆる文教地区"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13218": {
    name: "福生市",
    hasData: true,
    number: 17,
    churches: {
      kyoudan: ["福生"],
      otherDenominations: [],
      otherCount: 11,
      notes: "他プロテスタント教会11"
    },
    basicData: {
      population: 56274,
      populationDate: "2022.1.1",
      area: 10.16,
      density: 5539
    },
    schools: {
      elementary: {
        count: 7,
        publicStudents: 2282,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 3,
        publicStudents: 1062,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 2,
        publicStudents: 1386,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: null,
        students: null,
        schools: [],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13219": {
    name: "狛江市",
    hasData: true,
    number: 21,
    churches: {
      kyoudan: ["狛江", "和泉多摩川"],
      otherDenominations: [
        "カトリック喜多見",
        "日本バプテスト連盟多摩川キリスト"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 84321,
      populationDate: "2022.9.1",
      area: 6.39,
      density: 13196
    },
    schools: {
      elementary: {
        count: 6,
        publicStudents: 3394,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 5,
        privateCount: 1,
        publicStudents: 1320,
        publicStudentsYear: null,
        privateSchools: [
          { name: "明星", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 3,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: 1,
        students: null,
        schools: ["東京家政学院"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13220": {
    name: "東大和市",
    hasData: true,
    number: 10,
    churches: {
      kyoudan: ["東大和"],
      otherDenominations: [
        "東大和刈穂キリスト（日本長老教会）",
        "めぐみ教会（カンバーランド長老キリスト教会）",
        "東大和シャローム（日本ホーリネス教団）",
        "東大和純福音聖書",
        "純福音東大和",
        "中央キリスト福音"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 85021,
      populationDate: "2024.12",
      area: 13.42,
      density: 6335
    },
    schools: {
      elementary: {
        count: 10,
        publicStudents: 4223,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 5,
        publicStudents: 2045,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 2,
        publicStudents: 1275,
        publicStudentsYear: null,
        privateSchools: [],
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
        { range: "0～9歳",  count: 6178 },
        { range: "10代",    count: 7751 },
        { range: "20代",    count: 8103 },
        { range: "30代",    count: 8695 },
        { range: "40代",    count: 11311 },
        { range: "50代",    count: 13893 },
        { range: "60代",    count: 9948 },
        { range: "70代",    count: 10222 },
        { range: "80代",    count: 7340 },
        { range: "90代～",  count: 1580 }
      ],
      notes: "平成27年頃までは緩やかな増加傾向にあったものの、年々少子高齢化が進みつつある。"
    },
    populationTrend: null,
    industryStructure: null
  },
  "13221": {
    name: "清瀬市",
    hasData: true,
    number: 7,
    churches: {
      kyoudan: ["清瀬みぎわ", "清瀬旭丘", "清瀬信愛"],
      otherDenominations: [
        "聖公会1",
        "プロテスタント6"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 76158,
      populationDate: "2024.12.1",
      area: 10.23,
      density: 7445
    },
    schools: {
      elementary: {
        count: 9,
        publicStudents: 3590,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 5,
        publicStudents: 1763,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 2,
        publicStudents: 900,
        publicStudentsYear: null,
        privateSchools: [
          { name: "清瀬高", denomination: null },
          { name: "東星高", denomination: null }
        ],
        notes: ""
      },
      university: {
        count: 2,
        students: null,
        schools: ["日本社会事業大学", "明治薬科大学"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13222": {
    name: "東久留米市",
    hasData: true,
    number: 6,
    churches: {
      kyoudan: ["東久留米", "東京新生"],
      otherDenominations: [
        "カトリック1",
        "プロテスタント7"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 114699,
      populationDate: "2024.12.1",
      area: 12.88,
      density: 9062
    },
    schools: {
      elementary: {
        count: 13,
        publicStudents: 5898,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 9,
        publicStudents: 2809,
        publicStudentsYear: null,
        privateSchools: [],
        notes: "クリスチャンアカデミーインターナショナルスクール（幼～高450人）"
      },
      highSchool: {
        count: 3,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "自由学園", denomination: null }
        ],
        notes: "久留米西、東久留米総合（公立）"
      },
      university: {
        count: 1,
        students: null,
        schools: ["東京学芸大学"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13223": {
    name: "武蔵村山市",
    hasData: false
  },
  "13224": {
    name: "多摩市",
    hasData: true,
    number: 24,
    churches: {
      kyoudan: ["永山", "聖蹟桜ヶ丘"],
      otherDenominations: [
        "日本ホーリネス教団多摩キリスト教会",
        "東京フリーメソジスト桜が丘キリスト教会",
        "東京福音センター多摩ニュータウンキリスト教会",
        "日本キリスト教会多摩ニュータウン永山教会",
        "日本バプテスト連盟多摩みぎわキリスト教会",
        "末日聖徒イエス・キリスト教会多摩ワード",
        "カトリック多摩教会",
        "多摩アガペーチャペルジーザスハウス",
        "めぐみバプテスト教会",
        "日本アッセンブリーズ・オブ・ゴッド教団多摩福音センター",
        "セブンスデー・アドベンチスト教会多摩永山",
        "ぶどうの木キリスト教会八王子チャペル",
        "日本新使徒教会多摩教会",
        "希望の光バプテスト教会",
        "日本バプテスト連盟多摩ニュータウン・憩の家集会"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 148084,
      populationDate: "2025.1.1",
      area: 21.01,
      density: 7048
    },
    schools: {
      elementary: {
        count: 17,
        publicStudents: 6268,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 9,
        publicStudents: 2900,
        publicStudentsYear: null,
        privateSchools: [
          { name: "多摩大学付属聖ヶ丘中学", denomination: null },
          { name: "大妻多摩中学", denomination: null }
        ],
        notes: ""
      },
      highSchool: {
        count: 3,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [
          { name: "多摩大学付属聖ヶ丘高等学校", denomination: null },
          { name: "大妻多摩高等学校", denomination: null }
        ],
        notes: "都立永山高等学校（公立）"
      },
      university: {
        count: 7,
        students: null,
        schools: [
          "多摩大学", "大妻女子大学", "恵泉女学園大学",
          "国士舘大学", "東京医療学院大学", "桜美林大学",
          "武蔵野音楽大学"
        ],
        notes: "恵泉女学園大学はキリスト教系"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13225": {
    name: "稲城市",
    hasData: true,
    number: 23,
    churches: {
      kyoudan: ["稲城"],
      otherDenominations: [
        "稲城聖書教会",
        "若葉台いずみ教会",
        "愛と赦し恵みキリスト教会"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 93940,
      populationDate: "2024.12.1",
      area: 17.97,
      density: 5228
    },
    schools: {
      elementary: {
        count: 12,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 6,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: 1,
        students: null,
        schools: ["駒沢女子大学"],
        notes: "駒沢女子短期大学もあり"
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: "人口が増加傾向にある大都市のベッドタウン。若年層も横ばいで老年人口は着実に増加。"
  },
  "13227": {
    name: "羽村市",
    hasData: true,
    number: 28,
    churches: {
      kyoudan: [],
      otherDenominations: [
        "プロテスタント8教会"
      ],
      otherCount: null,
      notes: "教団の教会はなし"
    },
    basicData: {
      population: 54162,
      populationDate: "2024.4.1",
      area: 9.90,
      density: 5471
    },
    schools: {
      elementary: {
        count: 5,
        publicStudents: 2464,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 3,
        publicStudents: 1352,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 1,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: null,
        students: null,
        schools: [],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13228": {
    name: "あきる野市",
    hasData: true,
    number: 19,
    churches: {
      kyoudan: ["五日市伝道所"],
      otherDenominations: [],
      otherCount: 8,
      notes: "カトリック1、祈祷院2、他プロテスタント5"
    },
    basicData: {
      population: 79907,
      populationDate: "2022.11.1",
      area: 73.47,
      density: 1088
    },
    schools: {
      elementary: {
        count: 11,
        publicStudents: 4170,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 7,
        publicStudents: 2386,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 3,
        publicStudents: 2259,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: null,
        students: null,
        schools: [],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  },
  "13229": {
    name: "西東京市",
    hasData: true,
    number: 5,
    churches: {
      kyoudan: ["ひばりが丘", "柳沢", "西東京"],
      otherDenominations: [
        "カトリック1",
        "プロテスタント14"
      ],
      otherCount: null,
      notes: ""
    },
    basicData: {
      population: 206073,
      populationDate: "2024.10.1",
      area: 15.50,
      density: 13073
    },
    schools: {
      elementary: {
        count: 19,
        publicStudents: 9927,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      middleSchool: {
        count: 9,
        publicStudents: 4648,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      highSchool: {
        count: 5,
        publicStudents: 3465,
        publicStudentsYear: null,
        privateSchools: [
          { name: "文華女子", denomination: null },
          { name: "武蔵野大学附属", denomination: null }
        ],
        notes: "田無工科、田無、保谷（公立）"
      },
      university: {
        count: 3,
        students: null,
        schools: ["武蔵野大学", "早稲田大学", "東京大学"],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
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
    hasData: true,
    number: 31,
    churches: {
      kyoudan: [],
      otherDenominations: [
        "プロテスタント他教団1",
        "祈りの家1"
      ],
      otherCount: null,
      notes: "教団の教会はなし"
    },
    basicData: {
      population: 1986,
      populationDate: "2024.4.1",
      area: 105.41,
      density: 19
    },
    schools: {
      elementary: {
        count: 1,
        publicStudents: 56,
        publicStudentsYear: null,
        privateSchools: [],
        notes: "檜原小学校"
      },
      middleSchool: {
        count: 1,
        publicStudents: 22,
        publicStudentsYear: null,
        privateSchools: [],
        notes: "檜原中学校"
      },
      highSchool: {
        count: null,
        publicStudents: null,
        publicStudentsYear: null,
        privateSchools: [],
        notes: ""
      },
      university: {
        count: null,
        students: null,
        schools: [],
        notes: ""
      }
    },
    populationComposition: null,
    populationTrend: null,
    industryStructure: null
  }
};
