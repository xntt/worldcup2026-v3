// ===== 核心数据文件 =====
// 你只需要修改这里的内容，网页会自动更新！
// 格式：严格按照JSON格式，最后一项不能有逗号

const siteData = {
  // 网站信息
  site: {
    name: "⚽ 2026 狂热站",
    description: "北美狂欢，一触即发",
    title: "2026美加墨世界杯 - 球迷终极预测与福利中心"
  },

  // 赛程数据（首页和竞猜页用）
  matches: [
    {
      id: 1,
      teamA: "美国 🇺🇸",
      teamB: "墨西哥 🇲🇽",
      time: "明天 20:00",
      stadium: "洛杉矶 SoFi 体育场",
      status: "即将开赛",
      score: "- : -"
    },
    {
      id: 2,
      teamA: "阿根廷 🇦🇷",
      teamB: "加拿大 🇨🇦",
      time: "6月15日 18:00",
      stadium: "多伦多 BMO 球场",
      status: "未开始",
      score: "- : -"
    },
    {
      id: 3,
      teamA: "巴西 🇧🇷",
      teamB: "哥伦比亚 🇨🇴",
      time: "6月12日 20:00",
      stadium: "帕萨迪纳玫瑰碗",
      status: "未开始",
      score: "- : -"
    },
    {
      id: 4,
      teamA: "德国 🇩🇪",
      teamB: "西班牙 🇪🇸",
      time: "6月13日 18:00",
      stadium: "达拉斯 AT&T 体育场",
      status: "未开始",
      score: "- : -"
    },
    {
      id: 5,
      teamA: "法国 🇫🇷",
      teamB: "英格兰 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      time: "6月13日 21:00",
      stadium: "旧金山 Levi'S 体育场",
      status: "未开始",
      score: "- : -"
    }
  ],

  // 博彩平台分销链接（博彩红利页用）
  // 【重要】把 link 改成你的真实分销链接
  bookmakers: [
    {
      name: "Stake",
      logo: "🎰",
      rating: "⭐⭐⭐⭐⭐",
      bonus: "$500 新户奖金",
      link: "https://Stake.com?ref=yourcode",
      description: "Crypto博彩首选"
    },
    {
      name: "BC.Game",
      logo: "🎲",
      rating: "⭐⭐⭐⭐⭐",
      bonus: "$1000 首次存款奖励",
      link: "https://BC.Game?ref=yourcode",
      description: "最佳赔率"
    },
    {
      name: "Roobet",
      logo: "🦊",
      rating: "⭐⭐⭐⭐",
      bonus: "$75 免费旋转",
      link: "https://Roobet.com?ref=yourcode",
      description: "快速提款"
    },
    {
      name: "NordVPN",
      logo: "🔐",
      rating: "⭐⭐⭐⭐⭐",
      bonus: "68% 折扣",
      link: "https://NordVPN.com?ref=yourcode",
      description: "安全浏览"
    },
    {
      name: "Surfshark",
      logo: "🦈",
      rating: "⭐⭐⭐⭐",
      bonus: "82% 折扣",
      link: "https://Surfshark.com?ref=yourcode",
      description: "无限设备"
    },
    {
      name: "ExpressVPN",
      logo: "🚀",
      rating: "⭐⭐⭐⭐⭐",
      bonus: "49% 折扣",
      link: "https://ExpressVPN.com?ref=yourcode",
      description: "极速VPN"
    }
  ],

  // 周边商品（商城页用）
  products: [
    {
      id: 1,
      name: "2026世界杯官方T恤",
      price: "$29.99",
      image: "👕",
      description: "限量版官方球衣"
    },
    {
      id: 2,
      name: "球迷围巾",
      price: "$19.99",
      image: "🧣",
      description: "支持你喜欢的球队"
    },
    {
      id: 3,
      name: "世界杯帽子",
      price: "$24.99",
      image: "🧢",
      description: "经典赛事纪念款"
    },
    {
      id: 4,
      name: "纪念徽章套装",
      price: "$14.99",
      image: "🏆",
      description: "收藏佳品"
    }
  ]
};