const lessons = [
  {
    day: 1,
    title: "问候与破冰",
    level: "A0",
    focus: "能自然开始第一句对话",
    task: "原速听 2 遍，慢速跟读 3 遍，录音 1 遍。把最后一句换成自己的名字。",
    reflection: "今天哪一个词最难说？明天先练它 3 遍。",
    phrases: [
      ["你好，很高兴认识你。", "Hi, nice to meet you.", "nice to 连读，像 nice-tə。"],
      ["你今天好吗？", "How are you today?", "How are 可以连起来，不要逐词停顿。"],
      ["我很好，谢谢。", "I'm good, thank you.", "I'm 要短，thank you 的 th 轻咬舌尖。"],
    ],
    dialogue: [
      ["Tutor", "Hi, nice to meet you.", "你好，很高兴认识你。"],
      ["You", "Hi, nice to meet you too.", "你好，我也很高兴认识你。"],
      ["Tutor", "How are you today?", "你今天好吗？"],
      ["You", "I'm good, thank you.", "我很好，谢谢。"],
    ],
    chunks: ["nice to meet you", "How are you", "I'm good", "thank you"],
  },
  {
    day: 2,
    title: "自我介绍",
    level: "A0",
    focus: "说出名字、国家和学习目标",
    task: "录音时把 Lin 换成自己的英文名或中文名拼音。",
    reflection: "你能不用看中文，完整说出三句吗？",
    phrases: [
      ["我叫小林。", "My name is Lin.", "My name is 连起来像 my nay-miz。"],
      ["我来自中国。", "I'm from China.", "from 不要拖长，China 重音在 Chi。"],
      ["我正在学习英语。", "I'm learning English.", "learning 的重音在 learn。"],
    ],
    dialogue: [
      ["Tutor", "What's your name?", "你叫什么名字？"],
      ["You", "My name is Lin.", "我叫小林。"],
      ["Tutor", "Where are you from?", "你来自哪里？"],
      ["You", "I'm from China.", "我来自中国。"],
    ],
    chunks: ["My name is", "I'm from", "learning English", "What's your name"],
  },
  {
    day: 3,
    title: "说谢谢与抱歉",
    level: "A0",
    focus: "把礼貌句说顺",
    task: "每句先低声读，再正常声音读，训练嘴部肌肉。",
    reflection: "今天你最可能在真实生活中用哪一句？",
    phrases: [
      ["非常感谢。", "Thank you very much.", "very much 语速可以稍快。"],
      ["不用客气。", "You're welcome.", "You're 听起来像 yer。"],
      ["对不起，我迟到了。", "Sorry, I'm late.", "Sorry 的 o 不要读成中文“奥”太重。"],
    ],
    dialogue: [
      ["You", "Sorry, I'm late.", "对不起，我迟到了。"],
      ["Tutor", "That's OK.", "没关系。"],
      ["You", "Thank you very much.", "非常感谢。"],
      ["Tutor", "You're welcome.", "不用客气。"],
    ],
    chunks: ["Thank you", "You're welcome", "I'm late", "That's OK"],
  },
  {
    day: 4,
    title: "听不懂时怎么办",
    level: "A0",
    focus: "请求对方重复或说慢一点",
    task: "录音时把声音放慢，不追求快，先追求清楚。",
    reflection: "写下你最需要的一句“救命句”。",
    phrases: [
      ["我听不懂。", "I don't understand.", "don't 的 t 可以轻，但要有收尾。"],
      ["请你再说一遍。", "Please say that again.", "that again 中间不要断太久。"],
      ["请你说慢一点。", "Please speak slowly.", "slowly 拉长一点会更自然。"],
    ],
    dialogue: [
      ["Tutor", "Can you answer this question?", "你能回答这个问题吗？"],
      ["You", "I don't understand.", "我听不懂。"],
      ["Tutor", "No problem.", "没问题。"],
      ["You", "Please speak slowly.", "请你说慢一点。"],
    ],
    chunks: ["I don't understand", "say that again", "speak slowly", "No problem"],
  },
  {
    day: 5,
    title: "简单回答",
    level: "A0",
    focus: "用短句回应，不沉默",
    task: "每句后面加一个微笑停顿，练对话节奏。",
    reflection: "你最容易脱口而出的是 yes 还是 no？",
    phrases: [
      ["是的，我可以。", "Yes, I can.", "Yes 后面轻停顿。"],
      ["不，我不会。", "No, I can't.", "can't 末尾 t 轻轻收住。"],
      ["也许可以。", "Maybe.", "Maybe 是拖延和思考的好词。"],
    ],
    dialogue: [
      ["Tutor", "Can you speak English?", "你会说英语吗？"],
      ["You", "Yes, I can.", "是的，我可以。"],
      ["Tutor", "Can you speak fast?", "你能说很快吗？"],
      ["You", "No, I can't. Maybe slowly.", "不，我不会。也许可以慢慢说。"],
    ],
    chunks: ["Yes, I can", "No, I can't", "Maybe", "speak slowly"],
  },
  {
    day: 6,
    title: "数字与时间",
    level: "A0",
    focus: "说出常用时间",
    task: "把 8:30 换成你明天起床或出门的时间。",
    reflection: "哪些数字发音会混？写下来。",
    phrases: [
      ["现在几点？", "What time is it?", "time is 可以连读。"],
      ["现在八点半。", "It's eight thirty.", "thirty 的 th 轻咬舌尖。"],
      ["我九点有空。", "I'm free at nine.", "free 和 at 中间自然停一下。"],
    ],
    dialogue: [
      ["You", "What time is it?", "现在几点？"],
      ["Tutor", "It's eight thirty.", "现在八点半。"],
      ["You", "Are you free at nine?", "你九点有空吗？"],
      ["Tutor", "Yes, I'm free at nine.", "有，我九点有空。"],
    ],
    chunks: ["What time", "It's eight thirty", "I'm free", "at nine"],
  },
  {
    day: 7,
    title: "第一周复习",
    level: "A0",
    focus: "把 6 天句子串成小对话",
    task: "播放对话后，关掉中文提示，自己复述 4 句。",
    reflection: "第一周你最想保留的 3 个句子是什么？",
    phrases: [
      ["你好，我叫小林。", "Hi, my name is Lin.", "Hi 后面自然接 my name。"],
      ["我正在学习英语。", "I'm learning English.", "不要把 English 读成硬 g。"],
      ["请你说慢一点。", "Please speak slowly.", "这是本周最重要的求助句。"],
    ],
    dialogue: [
      ["You", "Hi, my name is Lin.", "你好，我叫小林。"],
      ["Tutor", "Nice to meet you.", "很高兴认识你。"],
      ["You", "I'm learning English.", "我正在学习英语。"],
      ["Tutor", "Great. Please speak slowly and clearly.", "很好。请慢慢、清楚地说。"],
    ],
    chunks: ["my name is", "learning English", "speak slowly", "clearly"],
  },
  {
    day: 8,
    title: "点咖啡",
    level: "A1",
    focus: "用 I'd like 礼貌点单",
    task: "把 coffee 换成 tea, water, juice 各说一遍。",
    reflection: "今天你能说出几种饮品？",
    phrases: [
      ["我想要一杯咖啡。", "I'd like a coffee.", "I'd like 是礼貌点单万能开头。"],
      ["可以少糖吗？", "Can I have less sugar?", "Can I have 是请求句核心。"],
      ["多少钱？", "How much is it?", "much is 连读，不要分太开。"],
    ],
    dialogue: [
      ["Staff", "What would you like?", "您想要什么？"],
      ["You", "I'd like a coffee.", "我想要一杯咖啡。"],
      ["Staff", "Anything else?", "还需要别的吗？"],
      ["You", "Can I have less sugar?", "可以少糖吗？"],
    ],
    chunks: ["I'd like", "Can I have", "less sugar", "How much"],
  },
  {
    day: 9,
    title: "餐厅用语",
    level: "A1",
    focus: "点餐和表达偏好",
    task: "把 noodles 换成你喜欢的食物。",
    reflection: "你想学的 5 个食物英文是什么？",
    phrases: [
      ["我想要面条。", "I'd like noodles.", "noodles 末尾 s 轻读。"],
      ["不要辣。", "Not spicy, please.", "please 放后面很自然。"],
      ["味道很好。", "It tastes good.", "tastes good 中间可以连起来。"],
    ],
    dialogue: [
      ["Staff", "What would you like?", "您想要什么？"],
      ["You", "I'd like noodles.", "我想要面条。"],
      ["Staff", "Spicy?", "要辣吗？"],
      ["You", "Not spicy, please.", "不要辣。"],
    ],
    chunks: ["I'd like noodles", "Not spicy", "tastes good", "please"],
  },
  {
    day: 10,
    title: "购物付款",
    level: "A1",
    focus: "询价、付款、要袋子",
    task: "模拟收银台，说完一句停一秒等对方回应。",
    reflection: "现金和刷卡你更常用哪个？",
    phrases: [
      ["这个多少钱？", "How much is this?", "this 的 th 轻咬舌尖。"],
      ["我可以刷卡吗？", "Can I pay by card?", "pay by card 是完整词块。"],
      ["我需要一个袋子。", "I need a bag.", "need a 连读像 nee-də。"],
    ],
    dialogue: [
      ["You", "How much is this?", "这个多少钱？"],
      ["Staff", "It's ten dollars.", "十美元。"],
      ["You", "Can I pay by card?", "我可以刷卡吗？"],
      ["Staff", "Sure.", "当然。"],
    ],
    chunks: ["How much", "pay by card", "I need", "a bag"],
  },
  {
    day: 11,
    title: "问路",
    level: "A1",
    focus: "问地点和方向",
    task: "把 station 换成 hotel, restroom, cafe。",
    reflection: "你旅行时最需要问哪里？",
    phrases: [
      ["车站在哪里？", "Where is the station?", "Where is 可连读成 where-riz。"],
      ["直走。", "Go straight.", "straight 的 str 先慢慢练。"],
      ["在你的左边。", "It's on your left.", "on your 连读像 on-yer。"],
    ],
    dialogue: [
      ["You", "Excuse me, where is the station?", "不好意思，车站在哪里？"],
      ["Local", "Go straight.", "直走。"],
      ["You", "Is it on my left?", "在我左边吗？"],
      ["Local", "Yes, it's on your left.", "是的，在你左边。"],
    ],
    chunks: ["Where is", "the station", "Go straight", "on your left"],
  },
  {
    day: 12,
    title: "打车与交通",
    level: "A1",
    focus: "说明目的地和确认费用",
    task: "把 airport 换成你常去的地方。",
    reflection: "今天录音里 airport 读清楚了吗？",
    phrases: [
      ["请带我去机场。", "Please take me to the airport.", "take me to 连起来读。"],
      ["需要多久？", "How long will it take?", "long will 连读，will 轻一点。"],
      ["请在这里停。", "Please stop here.", "stop here 中间不停太久。"],
    ],
    dialogue: [
      ["You", "Please take me to the airport.", "请带我去机场。"],
      ["Driver", "Sure.", "好的。"],
      ["You", "How long will it take?", "需要多久？"],
      ["Driver", "About twenty minutes.", "大约二十分钟。"],
    ],
    chunks: ["take me to", "the airport", "How long", "stop here"],
  },
  {
    day: 13,
    title: "酒店简单入住",
    level: "A1",
    focus: "用最短句完成入住",
    task: "先练 My name is...，再练 room 和 Wi-Fi 两个关键词。",
    reflection: "你能不用长句，说出自己的名字和需求吗？",
    phrases: [
      ["你好，我叫小林。", "Hi, my name is Lin.", "先用最熟的自我介绍开头。"],
      ["我有一个房间。", "I have a room.", "room 的 r 要轻轻后收。"],
      ["有无线网络吗？", "Do you have Wi-Fi?", "Wi-Fi 读 wai-fai。"],
    ],
    dialogue: [
      ["Staff", "Hello. Your name, please?", "你好。请问你的名字？"],
      ["You", "My name is Lin.", "我叫小林。"],
      ["Staff", "OK. Here is your room.", "好的。这是你的房间。"],
      ["You", "Do you have Wi-Fi?", "有无线网络吗？"],
    ],
    chunks: ["my name is", "I have", "a room", "Wi-Fi"],
  },
  {
    day: 14,
    title: "第二周复习",
    level: "A1",
    focus: "旅行生活高频场景串联",
    task: "从咖啡、餐厅、问路、酒店中任选一个，自己演两个人。",
    reflection: "哪一个场景最有用？为什么？",
    phrases: [
      ["不好意思，我需要帮助。", "Excuse me, I need help.", "Excuse me 先降低打扰感。"],
      ["我想要这个。", "I'd like this one.", "this one 是购物实用词块。"],
      ["你能说慢一点吗？", "Can you speak slowly?", "Can you 开头不要太重。"],
    ],
    dialogue: [
      ["You", "Excuse me, I need help.", "不好意思，我需要帮助。"],
      ["Staff", "Sure. What do you need?", "当然。你需要什么？"],
      ["You", "I'd like this one.", "我想要这个。"],
      ["Staff", "No problem.", "没问题。"],
    ],
    chunks: ["I need help", "I'd like this one", "speak slowly", "No problem"],
  },
  {
    day: 15,
    title: "谈日常",
    level: "A1",
    focus: "介绍一天的安排",
    task: "把三句改成你的真实作息。",
    reflection: "你今天几点起床？用英文写一句。",
    phrases: [
      ["我早上七点起床。", "I get up at seven.", "get up 连读，t 轻。"],
      ["我上午工作。", "I work in the morning.", "work 的 r 不要卷太久。"],
      ["我晚上学习英语。", "I study English at night.", "at night 是固定词块。"],
    ],
    dialogue: [
      ["Tutor", "What do you do in the morning?", "你上午做什么？"],
      ["You", "I work in the morning.", "我上午工作。"],
      ["Tutor", "What do you do at night?", "你晚上做什么？"],
      ["You", "I study English at night.", "我晚上学习英语。"],
    ],
    chunks: ["get up", "in the morning", "study English", "at night"],
  },
  {
    day: 16,
    title: "谈喜好",
    level: "A1",
    focus: "表达喜欢、不喜欢和原因",
    task: "把 music 换成你的爱好。",
    reflection: "今天用英文写一个 I like... 的句子。",
    phrases: [
      ["我喜欢音乐。", "I like music.", "like 后面直接接名词。"],
      ["我不喜欢太吵。", "I don't like loud places.", "don't like 是一个整体。"],
      ["因为它让我放松。", "Because it helps me relax.", "because 可以放慢一点。"],
    ],
    dialogue: [
      ["Tutor", "What do you like?", "你喜欢什么？"],
      ["You", "I like music.", "我喜欢音乐。"],
      ["Tutor", "Why?", "为什么？"],
      ["You", "Because it helps me relax.", "因为它让我放松。"],
    ],
    chunks: ["I like", "I don't like", "Because", "relax"],
  },
  {
    day: 17,
    title: "谈工作",
    level: "A1",
    focus: "用简单句说自己做什么",
    task: "如果职业还不会说，就先练 I work. 和 I study.",
    reflection: "你工作中最常做的一件事是什么？",
    phrases: [
      ["我工作。", "I work.", "最短、最稳的表达。"],
      ["我在办公室工作。", "I work in an office.", "work in 连起来读。"],
      ["我有点忙。", "I'm a little busy.", "a little 是柔和表达。"],
    ],
    dialogue: [
      ["Tutor", "Do you work?", "你工作吗？"],
      ["You", "Yes, I work.", "是的，我工作。"],
      ["Tutor", "Are you busy?", "你忙吗？"],
      ["You", "Yes, I'm a little busy.", "是的，我有点忙。"],
    ],
    chunks: ["I work", "in an office", "a little busy", "Are you busy"],
  },
  {
    day: 18,
    title: "谈家庭",
    level: "A1",
    focus: "简单介绍家庭成员",
    task: "用自己的家庭信息替换句子。",
    reflection: "你能用英文说出 3 个家庭成员吗？",
    phrases: [
      ["我家有三个人。", "There are three people in my family.", "There are 可连读成 there-rar。"],
      ["我有一个姐姐。", "I have an older sister.", "older 的 o 拉开。"],
      ["我们住在东京。", "We live in Tokyo.", "live in 连读。"],
    ],
    dialogue: [
      ["Tutor", "Tell me about your family.", "说说你的家庭。"],
      ["You", "There are three people in my family.", "我家有三个人。"],
      ["Tutor", "Do you have brothers or sisters?", "你有兄弟姐妹吗？"],
      ["You", "I have an older sister.", "我有一个姐姐。"],
    ],
    chunks: ["There are", "in my family", "older sister", "We live in"],
  },
  {
    day: 19,
    title: "谈天气",
    level: "A1",
    focus: "用天气开始闲聊",
    task: "看窗外，用英文说今天的天气。",
    reflection: "你喜欢什么天气？写一句 I like... weather.",
    phrases: [
      ["今天天气很好。", "The weather is nice today.", "weather 的 th 轻咬舌尖。"],
      ["今天有点冷。", "It's a little cold today.", "a little cold 很常用。"],
      ["我喜欢晴天。", "I like sunny days.", "sunny days 末尾 s 轻读。"],
    ],
    dialogue: [
      ["You", "The weather is nice today.", "今天天气很好。"],
      ["Friend", "Yes, it's sunny.", "是的，晴天。"],
      ["You", "I like sunny days.", "我喜欢晴天。"],
      ["Friend", "Me too.", "我也是。"],
    ],
    chunks: ["weather", "a little cold", "sunny days", "Me too"],
  },
  {
    day: 20,
    title: "谈身体感受",
    level: "A1",
    focus: "表达累、饿、不舒服",
    task: "录音时把 I'm tired 说得自然，不要用力过猛。",
    reflection: "今天你的真实感受是什么？用英文写一句。",
    phrases: [
      ["我有点累。", "I'm a little tired.", "tired 的 d 轻轻收。"],
      ["我饿了。", "I'm hungry.", "hungry 的 h 要送气。"],
      ["我感觉不太舒服。", "I don't feel well.", "feel well 中间不要停太久。"],
    ],
    dialogue: [
      ["Friend", "Are you OK?", "你还好吗？"],
      ["You", "I'm a little tired.", "我有点累。"],
      ["Friend", "Do you need a break?", "你需要休息吗？"],
      ["You", "Yes, I don't feel well.", "是的，我感觉不太舒服。"],
    ],
    chunks: ["a little tired", "I'm hungry", "feel well", "need a break"],
  },
  {
    day: 21,
    title: "第三周复习",
    level: "A1",
    focus: "用 5 个短句说自己的生活",
    task: "不要追求长句，只把每句说清楚。",
    reflection: "今天哪一个短句你说得最稳？",
    phrases: [
      ["我每天学习一点英语。", "I study a little English every day.", "a little English 是轻松表达。"],
      ["我喜欢慢慢练习。", "I like practicing slowly.", "practicing 的重音在 prac。"],
      ["我会继续练习。", "I will keep practicing.", "keep practicing 是长期学习关键词。"],
    ],
    dialogue: [
      ["Tutor", "How is your English practice?", "你的英语练习怎么样？"],
      ["You", "I study a little English every day.", "我每天学习一点英语。"],
      ["Tutor", "What's your goal?", "你的目标是什么？"],
      ["You", "I will keep practicing.", "我会继续练习。"],
    ],
    chunks: ["every day", "practicing slowly", "keep practicing", "my goal"],
  },
  {
    day: 22,
    title: "提出请求",
    level: "A1",
    focus: "用 Can you / Can I 说最短请求",
    task: "每句前先说 Excuse me，声音放慢。",
    reflection: "你最常需要请求别人做什么？",
    phrases: [
      ["你能帮我吗？", "Can you help me?", "Can you 连读像 can-yu。"],
      ["我可以坐这里吗？", "Can I sit here?", "sit here 连读。"],
      ["我可以看看吗？", "Can I see it?", "see it 连读。"],
    ],
    dialogue: [
      ["You", "Excuse me, can you help me?", "不好意思，你能帮我吗？"],
      ["Local", "Sure.", "当然。"],
      ["You", "Can I see it?", "我可以看看吗？"],
      ["Local", "Of course.", "当然可以。"],
    ],
    chunks: ["Can you", "Can I", "sit here", "see it"],
  },
  {
    day: 23,
    title: "表达选择",
    level: "A1",
    focus: "用 this / that 选择东西",
    task: "拿两个物品，边指边说 this 和 that。",
    reflection: "今天你可以用 this one 说哪个东西？",
    phrases: [
      ["我想要这个。", "I want this one.", "this one 是一个词块。"],
      ["我想要那个。", "I want that one.", "that 的 th 轻咬舌尖。"],
      ["这个很好。", "This is good.", "this is 连起来读。"],
    ],
    dialogue: [
      ["Staff", "Which one do you want?", "你想要哪一个？"],
      ["You", "I want this one.", "我想要这个。"],
      ["Staff", "This one or that one?", "这个还是那个？"],
      ["You", "This one is good.", "这个很好。"],
    ],
    chunks: ["this one", "that one", "I want", "This is good"],
  },
  {
    day: 24,
    title: "表达计划",
    level: "A1",
    focus: "用 today / tomorrow 说简单计划",
    task: "只练 today 和 tomorrow，不加复杂时间。",
    reflection: "你明天想做什么？用 I will... 写一句。",
    phrases: [
      ["我明天会练习。", "I will practice tomorrow.", "will 轻读，不要太重。"],
      ["我今天学习英语。", "I study English today.", "today 重音在 day。"],
      ["我会再试一次。", "I'll try again.", "I'll 很短，try again 连起来。"],
    ],
    dialogue: [
      ["Tutor", "Will you practice tomorrow?", "你明天会练习吗？"],
      ["You", "Yes, I will practice tomorrow.", "会，我明天会练习。"],
      ["Tutor", "Do you study today?", "你今天学习吗？"],
      ["You", "Yes, I study English today.", "是的，我今天学习英语。"],
    ],
    chunks: ["I will", "tomorrow", "study English", "try again"],
  },
  {
    day: 25,
    title: "表达需要",
    level: "A1",
    focus: "用 I need 说需求",
    task: "把 water 换成 tea, help, a bag。",
    reflection: "你今天最需要什么？用 I need... 写一句。",
    phrases: [
      ["我需要水。", "I need water.", "need water 中间自然连接。"],
      ["我需要帮助。", "I need help.", "help 的 h 要送气。"],
      ["我需要休息。", "I need a break.", "need a 连读像 nee-də。"],
    ],
    dialogue: [
      ["Friend", "Are you OK?", "你还好吗？"],
      ["You", "I need water.", "我需要水。"],
      ["Friend", "Do you need help?", "你需要帮助吗？"],
      ["You", "Yes, I need help.", "是的，我需要帮助。"],
    ],
    chunks: ["I need", "water", "help", "a break"],
  },
  {
    day: 26,
    title: "表达感觉",
    level: "A1",
    focus: "用 I feel 说身体和心情",
    task: "每句只说 3-5 个词，重点是说清楚。",
    reflection: "你现在感觉怎样？用 I feel... 写一句。",
    phrases: [
      ["我感觉很好。", "I feel good.", "feel good 连起来读。"],
      ["我有点累。", "I feel tired.", "tired 的 d 轻轻收。"],
      ["我感觉好多了。", "I feel better.", "better 的 t 美式里像轻 d。"],
    ],
    dialogue: [
      ["Friend", "How do you feel?", "你感觉怎么样？"],
      ["You", "I feel tired.", "我有点累。"],
      ["Friend", "Do you need a break?", "你需要休息吗？"],
      ["You", "Yes, I need a break.", "是的，我需要休息。"],
    ],
    chunks: ["I feel", "good", "tired", "better"],
  },
  {
    day: 27,
    title: "电话最短句",
    level: "A1",
    focus: "电话里先确认能不能听见",
    task: "只练 hear me / hear you，不练长句。",
    reflection: "电话里最先要确认什么？",
    phrases: [
      ["你好，我是小林。", "Hi, this is Lin.", "this is 是电话自我介绍。"],
      ["你能听到我吗？", "Can you hear me?", "hear me 连读。"],
      ["我能听到你。", "I can hear you.", "can 轻读。"],
    ],
    dialogue: [
      ["You", "Hi, this is Lin.", "你好，我是小林。"],
      ["Friend", "Hi Lin, can you hear me?", "你好小林，你能听到我吗？"],
      ["You", "Yes, I can hear you.", "可以，我能听到你。"],
      ["Friend", "Great.", "很好。"],
    ],
    chunks: ["this is", "hear me", "hear you", "Great"],
  },
  {
    day: 28,
    title: "第四周复习",
    level: "A1",
    focus: "请求、选择、需要、感觉综合练习",
    task: "任选 4 个词块，每个说 3 遍。",
    reflection: "你现在最敢说的 4 个英文词块是什么？",
    phrases: [
      ["你能帮我吗？", "Can you help me?", "can you 连读。"],
      ["我想要这个。", "I want this one.", "this one 连起来读。"],
      ["我需要休息。", "I need a break.", "need a 连读。"],
    ],
    dialogue: [
      ["You", "Can you help me?", "你能帮我吗？"],
      ["Friend", "Sure.", "当然。"],
      ["You", "I want this one.", "我想要这个。"],
      ["Friend", "OK.", "好的。"],
    ],
    chunks: ["Can you help me", "this one", "I need", "OK"],
  },
  {
    day: 29,
    title: "30 秒自我介绍",
    level: "A1",
    focus: "把姓名、来源、喜好连起来",
    task: "录 30 秒即可，中途停顿也继续说。",
    reflection: "你的 30 秒录音里，哪一句最清楚？",
    phrases: [
      ["你好，我叫小林，来自中国。", "Hi, my name is Lin, and I'm from China.", "and I'm 连读。"],
      ["我喜欢音乐。", "I like music.", "like 后面直接接名词。"],
      ["我正在学习英语。", "I'm learning English.", "learning 的重音在 learn。"],
    ],
    dialogue: [
      ["You", "Hi, my name is Lin, and I'm from China.", "你好，我叫小林，来自中国。"],
      ["You", "I like music.", "我喜欢音乐。"],
      ["You", "I'm learning English.", "我正在学习英语。"],
      ["Tutor", "Great job.", "做得很好。"],
    ],
    chunks: ["my name is", "I'm from", "I like", "learning English"],
  },
  {
    day: 30,
    title: "月底复习",
    level: "A1",
    focus: "把最常用句子说稳",
    task: "选 5 句最常用的句子，每句录音 1 遍。",
    reflection: "给下个月的自己写一句：I can keep going.",
    phrases: [
      ["我会继续练习。", "I will keep practicing.", "keep practicing 是长期学习关键词。"],
      ["我可以慢慢说。", "I can speak slowly.", "speak slowly 是重要能力。"],
      ["我可以再试一次。", "I can try again.", "try again 连起来读。"],
    ],
    dialogue: [
      ["Tutor", "How do you feel now?", "你现在感觉怎么样？"],
      ["You", "I can speak slowly.", "我可以慢慢说。"],
      ["Tutor", "Will you keep practicing?", "你会继续练习吗？"],
      ["You", "Yes, I will keep practicing.", "是的，我会继续练习。"],
    ],
    chunks: ["keep practicing", "speak slowly", "try again", "I can"],
  },
];

const sounds = [
  {
    category: "元音",
    symbol: "/i/",
    name: "紧衣音",
    label: "sheep",
    cue: "常见拼写：ee, ea, e, ie",
    mouth: "像清楚稳定的“衣”。嘴角微微向两边，舌位高。英式材料常写 /iː/。",
    soundText: "see",
    examples: ["sheep", "see", "green", "team"],
    steps: ["读 see，保持声音稳定。", "对比 sheep / ship。", "看到 ee/ea 常先想到这个音，但要以词典和发音为准。"],
  },
  {
    category: "元音",
    symbol: "/ɪ/",
    name: "松衣音",
    label: "ship",
    cue: "常见拼写：i, y",
    mouth: "比 /i/ 更短、更松，嘴角不要太用力。",
    soundText: "ship",
    examples: ["ship", "sit", "big", "gym"],
    steps: ["读 sit，声音短。", "不要读成长长的 see。", "对比 sit / seat。"],
  },
  {
    category: "元音",
    symbol: "/ɛ/",
    name: "短诶音",
    label: "bed",
    cue: "常见拼写：e, ea",
    mouth: "像短促的“诶”。嘴半开，不拖长。英式材料有时写 /e/。",
    soundText: "bed",
    examples: ["bed", "red", "yes", "head"],
    steps: ["读 bed，嘴半开。", "对比 bed / bad。", "不要滑成 /eɪ/。"],
  },
  {
    category: "元音",
    symbol: "/æ/",
    name: "梅花音",
    label: "cat",
    cue: "常见拼写：a",
    mouth: "嘴巴张开，舌头低，像“啊”和“诶”之间。",
    soundText: "cat",
    examples: ["cat", "bad", "map", "apple"],
    steps: ["下巴放低。", "读 cat，不要读成 ket。", "对比 bad / bed。"],
  },
  {
    category: "元音",
    symbol: "/ɑ/",
    name: "低后啊音",
    label: "father",
    cue: "常见拼写：a, o, al",
    mouth: "嘴巴打开，声音靠后。美式 father, hot 常用这个音。",
    soundText: "father",
    examples: ["father", "hot", "not", "calm"],
    steps: ["嘴巴打开。", "声音放到口腔后部。", "读 father，再读 hot。"],
  },
  {
    category: "元音",
    symbol: "/ɔ/",
    name: "圆口奥音",
    label: "law",
    cue: "常见拼写：aw, au, al, o",
    mouth: "嘴唇略圆，像较低的“奥”。很多美式口音会和 /ɑ/ 接近或合并。",
    soundText: "law",
    examples: ["law", "saw", "talk", "coffee"],
    steps: ["嘴唇略圆。", "读 law，不要滑成 /oʊ/。", "知道有些美式地区 law 和 father 很接近即可。"],
  },
  {
    category: "元音",
    symbol: "/ʌ/",
    name: "短啊音",
    label: "cup",
    cue: "常见拼写：u, o, ou",
    mouth: "嘴巴自然打开，声音短，像轻轻的“啊”。",
    soundText: "cup",
    examples: ["cup", "bus", "love", "young"],
    steps: ["嘴唇放松。", "读 cup，不要圆唇。", "love 里的 o 常读这个音。"],
  },
  {
    category: "元音",
    symbol: "/ə/",
    name: "弱读音",
    label: "about",
    cue: "常见拼写：非重读 a/e/i/o/u",
    mouth: "最常见的弱音，嘴巴完全放松，像很轻的“呃”。",
    soundText: "about",
    examples: ["about", "banana", "sofa", "today"],
    steps: ["不要用力发音。", "读 about，第一个 a 很轻。", "很多非重读元音都会弱化成 /ə/。"],
  },
  {
    category: "元音",
    symbol: "/ʊ/",
    name: "松乌音",
    label: "book",
    cue: "常见拼写：oo, u, ou",
    mouth: "短而松的“乌”，比 /u/ 更放松。",
    soundText: "book",
    examples: ["book", "good", "look", "put"],
    steps: ["嘴唇略圆，不要收太紧。", "读 good，短一点。", "对比 food / good。"],
  },
  {
    category: "元音",
    symbol: "/u/",
    name: "紧乌音",
    label: "blue",
    cue: "常见拼写：oo, ue, u_e, ew",
    mouth: "对应你说的 oo 音。嘴唇收圆，舌位高，声音稳定。英式材料常写 /uː/。",
    soundText: "blue",
    examples: ["blue", "food", "too", "rule"],
    steps: ["嘴唇圆起来。", "读 food，声音稳定。", "记住 oo 不总是 /u/，book 是 /ʊ/。"],
  },
  {
    category: "双元音",
    symbol: "/eɪ/",
    name: "诶滑衣",
    label: "day",
    cue: "常见拼写：a_e, ai, ay, eigh",
    mouth: "从“诶”滑向“衣”，中间有滑动。",
    soundText: "day",
    examples: ["day", "name", "say", "eight"],
    steps: ["先发 /ɛ/ 的位置。", "滑向 /ɪ/。", "读 name，不要只发短 /ɛ/。"],
  },
  {
    category: "双元音",
    symbol: "/oʊ/",
    name: "欧滑乌",
    label: "go",
    cue: "常见拼写：o, o_e, oa, ow",
    mouth: "从“欧”滑向较圆的尾音。美式 go, no, home 常用。",
    soundText: "go",
    examples: ["go", "home", "boat", "slow"],
    steps: ["先发 o 的开头。", "尾部嘴唇收圆。", "不要读成单纯中文“欧”。"],
  },
  {
    category: "双元音",
    symbol: "/aɪ/",
    name: "啊滑衣",
    label: "my",
    cue: "常见拼写：i_e, y, igh, ie",
    mouth: "从“啊”滑向“衣”，像 my, hi。",
    soundText: "my",
    examples: ["my", "hi", "like", "night"],
    steps: ["嘴巴先打开。", "滑向短 /ɪ/。", "对比 like / lick。"],
  },
  {
    category: "双元音",
    symbol: "/aʊ/",
    name: "啊滑乌",
    label: "now",
    cue: "常见拼写：ow, ou",
    mouth: "从“啊”滑向“乌”，嘴型逐渐收圆。",
    soundText: "now",
    examples: ["now", "out", "house", "down"],
    steps: ["先张口。", "慢慢收圆。", "读 out，不要读成 oat。"],
  },
  {
    category: "双元音",
    symbol: "/ɔɪ/",
    name: "奥滑衣",
    label: "boy",
    cue: "常见拼写：oy, oi",
    mouth: "从圆口“奥”滑向“衣”。",
    soundText: "boy",
    examples: ["boy", "toy", "coin", "choice"],
    steps: ["先圆唇。", "滑向 /ɪ/。", "读 choice，ch 和 oi 都要清楚。"],
  },
  {
    category: "r 化元音",
    symbol: "/ɚ/",
    name: "弱 r 音",
    label: "teacher",
    cue: "常见拼写：非重读 er, or, ar",
    mouth: "美式里词尾 er 常是 /ɚ/，不是单纯 /ə/。",
    soundText: "teacher",
    examples: ["teacher", "water", "doctor", "color"],
    steps: ["先读 teacher。", "尾音带轻轻的 r。", "不要把 teacher 的 er 当成纯 /ə/。"],
  },
  {
    category: "r 化元音",
    symbol: "/ɝ/",
    name: "重读 r 音",
    label: "bird",
    cue: "常见拼写：er, ir, ur, ear, or",
    mouth: "重读的 r 化元音，舌头后收，声音更有力。",
    soundText: "bird",
    examples: ["bird", "word", "learn", "turn"],
    steps: ["舌头后收。", "读 bird，不要分成 bi-rd。", "对比 teacher 的轻 /ɚ/。"],
  },
  {
    category: "辅音",
    symbol: "/p/",
    name: "清 p",
    label: "pen",
    cue: "常见拼写：p, pp",
    mouth: "双唇闭合后送气爆破，声带不振动。",
    soundText: "pen",
    examples: ["pen", "paper", "happy"],
    steps: ["双唇闭合。", "送气弹开。", "对比 pen / ben。"],
  },
  {
    category: "辅音",
    symbol: "/b/",
    name: "浊 b",
    label: "bed",
    cue: "常见拼写：b, bb",
    mouth: "双唇闭合后发声，声带振动。",
    soundText: "bed",
    examples: ["bed", "baby", "job"],
    steps: ["双唇闭合。", "发声弹开。", "对比 bed / pet。"],
  },
  {
    category: "辅音",
    symbol: "/t/",
    name: "清 t",
    label: "tea",
    cue: "常见拼写：t, tt, ed",
    mouth: "舌尖轻触上齿龈后弹开。美式中间 t 有时会像轻 d。",
    soundText: "tea",
    examples: ["tea", "top", "water", "wanted"],
    steps: ["舌尖碰上牙后方。", "送气弹开。", "water 美式里 t 常变轻。"],
  },
  {
    category: "辅音",
    symbol: "/d/",
    name: "浊 d",
    label: "day",
    cue: "常见拼写：d, dd, ed",
    mouth: "舌尖位置像 /t/，但声带振动。",
    soundText: "day",
    examples: ["day", "dog", "red"],
    steps: ["舌尖碰上齿龈。", "发声弹开。", "对比 day / tea。"],
  },
  {
    category: "辅音",
    symbol: "/k/",
    name: "清 k",
    label: "cat",
    cue: "常见拼写：c, k, ck, ch",
    mouth: "舌后部抬起后送气爆破。",
    soundText: "cat",
    examples: ["cat", "key", "back", "school"],
    steps: ["舌后部抬起。", "送气弹开。", "school 里的 c 也常是 /k/。"],
  },
  {
    category: "辅音",
    symbol: "/g/",
    name: "浊 g",
    label: "go",
    cue: "常见拼写：g, gg",
    mouth: "舌后部位置像 /k/，但声带振动。",
    soundText: "go",
    examples: ["go", "green", "big"],
    steps: ["舌后部抬起。", "发声弹开。", "对比 go / key。"],
  },
  {
    category: "辅音",
    symbol: "/f/",
    name: "清 f",
    label: "fish",
    cue: "常见拼写：f, ff, ph, gh",
    mouth: "上齿轻触下唇，送气。",
    soundText: "fish",
    examples: ["fish", "phone", "laugh"],
    steps: ["上齿轻碰下唇。", "吹气。", "phone 的 ph 也常是 /f/。"],
  },
  {
    category: "辅音",
    symbol: "/v/",
    name: "浊 v",
    label: "very",
    cue: "常见拼写：v, ve",
    mouth: "位置像 /f/，但声带振动。",
    soundText: "very",
    examples: ["very", "voice", "love"],
    steps: ["上齿轻碰下唇。", "发声。", "对比 fan / van。"],
  },
  {
    category: "辅音",
    symbol: "/θ/",
    name: "清 th",
    label: "think",
    cue: "常见拼写：th",
    mouth: "舌尖轻轻放在上下牙之间，送气，不振动声带。",
    soundText: "think",
    examples: ["think", "three", "thank"],
    steps: ["舌尖露一点点。", "轻轻吹气。", "thank you 的 th 不要变成 s。"],
  },
  {
    category: "辅音",
    symbol: "/ð/",
    name: "浊 th",
    label: "this",
    cue: "常见拼写：th",
    mouth: "舌尖位置和 /θ/ 类似，但声带振动。",
    soundText: "this",
    examples: ["this", "that", "there"],
    steps: ["舌尖轻触牙齿。", "发声而不是只吹气。", "读 this one。"],
  },
  {
    category: "辅音",
    symbol: "/s/",
    name: "清 s",
    label: "see",
    cue: "常见拼写：s, ss, c",
    mouth: "舌头靠近齿龈，气流从中间通过。",
    soundText: "see",
    examples: ["see", "sun", "city"],
    steps: ["牙齿接近但不咬紧。", "持续送气。", "city 的 c 常是 /s/。"],
  },
  {
    category: "辅音",
    symbol: "/z/",
    name: "浊 z",
    label: "zoo",
    cue: "常见拼写：z, s",
    mouth: "位置像 /s/，但声带振动。",
    soundText: "zoo",
    examples: ["zoo", "busy", "is"],
    steps: ["保持 /s/ 的位置。", "加上声带振动。", "is 的 s 常读 /z/。"],
  },
  {
    category: "辅音",
    symbol: "/ʃ/",
    name: "sh 音",
    label: "she",
    cue: "常见拼写：sh, ti, ci, ch",
    mouth: "嘴唇略圆，舌头后一点，像“嘘”。",
    soundText: "she",
    examples: ["she", "ship", "nation", "chef"],
    steps: ["嘴唇略圆。", "持续送气。", "nation 的 ti 常是 /ʃ/。"],
  },
  {
    category: "辅音",
    symbol: "/ʒ/",
    name: "浊 zh 音",
    label: "vision",
    cue: "常见拼写：s, si, ge",
    mouth: "像 /ʃ/，但声带振动。",
    soundText: "vision",
    examples: ["vision", "measure", "genre"],
    steps: ["先做 /ʃ/ 的嘴型。", "加声带振动。", "这个音词不多，先会听辨。"],
  },
  {
    category: "辅音",
    symbol: "/h/",
    name: "h 音",
    label: "hi",
    cue: "常见拼写：h",
    mouth: "轻轻送气，不要用嗓子硬挤。",
    soundText: "hi",
    examples: ["hi", "hello", "house"],
    steps: ["轻轻呼气。", "接上元音。", "读 hello，h 不要漏掉。"],
  },
  {
    category: "辅音",
    symbol: "/tʃ/",
    name: "ch 音",
    label: "chair",
    cue: "常见拼写：ch, tch, tu",
    mouth: "像 /t/ 加 /ʃ/，短促爆破。",
    soundText: "chair",
    examples: ["chair", "cheap", "watch", "future"],
    steps: ["先做 t 的阻塞。", "立刻接 sh 的气流。", "对比 cheap / sheep。"],
  },
  {
    category: "辅音",
    symbol: "/dʒ/",
    name: "j 音",
    label: "job",
    cue: "常见拼写：j, g, dg",
    mouth: "像 /d/ 加 /ʒ/，声带振动。",
    soundText: "job",
    examples: ["job", "judge", "giant"],
    steps: ["先做 d 的位置。", "接浊的摩擦音。", "judge 两头都有这个音。"],
  },
  {
    category: "辅音",
    symbol: "/m/",
    name: "m 音",
    label: "me",
    cue: "常见拼写：m, mm",
    mouth: "双唇闭合，声音从鼻腔出来。",
    soundText: "me",
    examples: ["me", "moon", "time"],
    steps: ["闭嘴发声。", "感受鼻腔振动。", "读 my name，m 要清楚。"],
  },
  {
    category: "辅音",
    symbol: "/n/",
    name: "n 音",
    label: "no",
    cue: "常见拼写：n, nn",
    mouth: "舌尖抵上齿龈，声音从鼻腔出来。",
    soundText: "no",
    examples: ["no", "name", "ten"],
    steps: ["舌尖顶上去。", "鼻腔发声。", "读 name，不要漏 n。"],
  },
  {
    category: "辅音",
    symbol: "/ŋ/",
    name: "ng 音",
    label: "sing",
    cue: "常见拼写：ng, n before k/g",
    mouth: "舌后部抬起，声音从鼻腔出来。词尾 sing 不要加 g 爆破。",
    soundText: "sing",
    examples: ["sing", "English", "bank"],
    steps: ["舌后部抬起。", "鼻腔发声。", "sing 结尾不要读成 sing-guh。"],
  },
  {
    category: "辅音",
    symbol: "/l/",
    name: "l 音",
    label: "light",
    cue: "常见拼写：l, ll",
    mouth: "舌尖轻触上齿龈，声音从舌头两侧出来。",
    soundText: "light",
    examples: ["light", "like", "hello"],
    steps: ["舌尖碰到上牙后面。", "发 l 后接元音。", "对比 light / right。"],
  },
  {
    category: "辅音",
    symbol: "/ɹ/",
    name: "美式 r 音",
    label: "red",
    cue: "常见拼写：r, rr, wr",
    mouth: "美式英语 r 更准确写作 /ɹ/。舌尖不要碰上颚，嘴唇可微微收圆。",
    soundText: "red",
    examples: ["red", "right", "green", "write"],
    steps: ["舌头往后收一点。", "不要发成中文拼音 r。", "对比 right / light。"],
  },
  {
    category: "辅音",
    symbol: "/j/",
    name: "y 音",
    label: "yes",
    cue: "常见拼写：y, i",
    mouth: "像很短的“衣”滑到后面的元音。",
    soundText: "yes",
    examples: ["yes", "you", "yellow"],
    steps: ["先做 /i/ 的舌位。", "快速滑到后面元音。", "读 yes，不要读成 j-es。"],
  },
  {
    category: "辅音",
    symbol: "/w/",
    name: "w 音",
    label: "we",
    cue: "常见拼写：w, wh, u",
    mouth: "嘴唇先收圆，再快速打开。",
    soundText: "we",
    examples: ["we", "water", "quick"],
    steps: ["嘴唇先圆。", "快速打开接元音。", "quick 的 u 常是 /w/。"],
  },
  {
    category: "语流",
    symbol: "ˈ",
    name: "主重音",
    label: "EN-glish",
    cue: "符号位置：重读音节前",
    mouth: "重音更响、更长、更清楚。音标里的 ˈ 放在重读音节前。",
    soundText: "English",
    examples: ["English", "coffee", "tomorrow"],
    steps: ["读 EN-glish，第一拍更强。", "读 COF-fee，第一拍更强。", "读 to-MOR-row，中间更强。"],
  },
  {
    category: "语流",
    symbol: "连读",
    name: "词块连读",
    label: "nice to",
    cue: "常见组合：辅音+元音、t/d 弱化、弱读",
    mouth: "真实口语不是一个词一个词断开，而是词块连起来。",
    soundText: "nice to meet you",
    examples: ["nice to", "can I", "want to"],
    steps: ["先慢速读每个词。", "把 nice to 连成一个词块。", "再读完整句 nice to meet you。"],
  },
];

const articulationGuides = {
  "/i/": ["嘴角展开，不圆唇", "舌头高、靠前", "下巴较高，口腔开口小", "元音都要声带振动，气流不受阻"],
  "/ɪ/": ["嘴唇放松，不圆唇", "舌头高、靠前，但比 /i/ 更松", "下巴略低于 /i/", "声带振动，声音短"],
  "/ɛ/": ["嘴唇自然展开", "舌头中高、靠前", "下巴半开", "声带振动，声音短"],
  "/æ/": ["嘴唇自然展开", "舌头低、靠前", "下巴明显打开", "声带振动，声音短"],
  "/ɑ/": ["嘴唇放松，不圆唇", "舌头低、靠后", "下巴打开，口腔空间大", "声带振动，声音较长"],
  "/ɔ/": ["嘴唇略圆", "舌头中低、靠后", "下巴打开但少于 /ɑ/", "声带振动；部分美式口音会接近 /ɑ/"],
  "/ʌ/": ["嘴唇放松，不圆唇", "舌头中间位置", "下巴自然打开", "声带振动，短促"],
  "/ə/": ["嘴唇、脸部都放松", "舌头在中央，几乎不出力", "下巴自然小开", "声带振动；弱读，轻而短"],
  "/ʊ/": ["嘴唇略圆但放松", "舌头高、靠后", "下巴开口小", "声带振动，短促"],
  "/u/": ["嘴唇收圆", "舌头高、靠后", "下巴较高，开口小", "声带振动，声音稳定"],
  "/eɪ/": ["嘴唇从展开到轻微收", "舌头从中前滑向高前", "下巴从半开到较高", "双元音：一个音内有滑动"],
  "/oʊ/": ["嘴唇逐渐收圆", "舌头从中后滑向高后", "下巴从半开到较高", "双元音：尾部有轻微 /ʊ/ 感"],
  "/aɪ/": ["嘴唇从自然张开到展开", "舌头从低位滑向高前", "下巴从打开到抬高", "双元音：从 ah 滑到 ih"],
  "/aʊ/": ["嘴唇从自然张开到收圆", "舌头从低位滑向高后", "下巴从打开到抬高", "双元音：从 ah 滑到 oo"],
  "/ɔɪ/": ["嘴唇先圆，后展开", "舌头从后部滑向高前", "下巴从半开到抬高", "双元音：从 aw 滑到 ih"],
  "/ɚ/": ["嘴唇可轻微收圆", "舌头后收，形成 r 色彩", "下巴放松，音节弱", "声带振动；词尾 er 常见"],
  "/ɝ/": ["嘴唇可轻微收圆", "舌头后收更明显", "下巴放松，声音更强", "声带振动；重读 r 化元音"],
  "/p/": ["双唇闭合后弹开", "舌头不参与主要阻塞", "牙齿自然，不咬唇", "清辅音：送气，声带不振动"],
  "/b/": ["双唇闭合后弹开", "舌头不参与主要阻塞", "牙齿自然", "浊辅音：声带振动"],
  "/t/": ["嘴唇自然", "舌尖轻触上齿龈后弹开", "牙齿微开", "清辅音；词首常送气"],
  "/d/": ["嘴唇自然", "舌尖轻触上齿龈后弹开", "牙齿微开", "浊辅音：声带振动"],
  "/k/": ["嘴唇按后面元音准备", "舌后部抬起接触软腭后弹开", "下巴自然", "清辅音：送气，声带不振动"],
  "/g/": ["嘴唇按后面元音准备", "舌后部抬起接触软腭后弹开", "下巴自然", "浊辅音：声带振动"],
  "/f/": ["上齿轻触下唇", "舌头放松", "牙齿和下唇形成窄缝", "清辅音：持续送气"],
  "/v/": ["上齿轻触下唇", "舌头放松", "牙齿和下唇形成窄缝", "浊辅音：声带振动"],
  "/θ/": ["嘴唇自然", "舌尖轻放上下牙之间", "牙齿轻轻夹住舌尖边缘", "清辅音：只吹气不发声"],
  "/ð/": ["嘴唇自然", "舌尖轻放上下牙之间", "牙齿轻轻夹住舌尖边缘", "浊辅音：发声振动"],
  "/s/": ["嘴唇自然或微笑", "舌尖靠近上齿龈，不碰住", "牙齿接近，气流从中间过", "清辅音：持续送气"],
  "/z/": ["嘴唇自然或微笑", "舌尖靠近上齿龈，不碰住", "牙齿接近", "浊辅音：像 /s/ 加声带振动"],
  "/ʃ/": ["嘴唇略圆", "舌头略后抬，形成宽气流通道", "牙齿接近", "清辅音：像轻轻说“嘘”"],
  "/ʒ/": ["嘴唇略圆", "舌头位置像 /ʃ/", "牙齿接近", "浊辅音：/ʃ/ 的发声版本"],
  "/h/": ["嘴唇按后面元音准备", "舌头不阻塞气流", "口腔自然打开", "清辅音：轻轻呼气"],
  "/tʃ/": ["嘴唇略圆", "舌尖先做 /t/，马上接 /ʃ/", "牙齿接近", "清塞擦音：短促爆破加摩擦"],
  "/dʒ/": ["嘴唇略圆", "舌尖先做 /d/，马上接 /ʒ/", "牙齿接近", "浊塞擦音：声带振动"],
  "/m/": ["双唇闭合", "舌头放松", "口腔被双唇关闭", "鼻音：声带振动，气流从鼻腔出"],
  "/n/": ["嘴唇自然", "舌尖抵住上齿龈", "口腔前部关闭", "鼻音：声带振动，气流从鼻腔出"],
  "/ŋ/": ["嘴唇自然", "舌后部抵住软腭", "口腔后部关闭", "鼻音：声带振动；sing 末尾不加 /g/"],
  "/l/": ["嘴唇自然", "舌尖触上齿龈，气流从舌侧过", "牙齿微开", "浊辅音：声带振动"],
  "/ɹ/": ["嘴唇可轻微收圆", "舌尖后卷或舌身后收，不碰上颚", "下巴放松", "浊辅音：声带振动"],
  "/j/": ["嘴唇按后面元音准备", "舌头高、靠前，快速滑动", "下巴较高", "浊滑音：像极短的 /i/"],
  "/w/": ["嘴唇先收圆再打开", "舌头高、靠后", "下巴较高", "浊滑音：像极短的 /u/"],
  "ˈ": ["嘴型取决于单词本身", "重读音节舌头动作更清楚", "重读音节更响、更长", "不是单独发音，是节奏标记"],
  "连读": ["嘴型从前一个词过渡到下一个词", "舌头提前准备下一个音", "不要每个词都停顿", "语流规则：弱读、连读、轻重变化"],
};

const articulationLabels = ["嘴唇", "舌头", "下巴/牙齿", "声带/气流"];

const videoResources = [
  {
    tag: "美式发音",
    title: "Rachel's English",
    note: "适合跟着看口型、IPA、连读和美式发音细节。建议先看 Sounds / IPA 类视频。",
    url: "https://www.youtube.com/@rachelsenglish",
  },
  {
    tag: "音标可视化",
    title: "Sounds American",
    note: "每个美式英语音都有讲解，通常包含口型、例词和小测验，适合配合本 App 的音标卡片。",
    url: "https://www.youtube.com/@SoundsAmerican",
  },
  {
    tag: "英式资源",
    title: "BBC Learning English Pronunciation",
    note: "BBC 的发音系列系统、清楚，但偏英式。想学英式时再看。",
    url: "https://www.youtube.com/@bbclearningenglish",
  },
  {
    tag: "日常口语",
    title: "English with Lucy",
    note: "适合看基础口语、词汇和英式发音。完全零基础时建议只挑短视频跟读。",
    url: "https://www.youtube.com/@EnglishwithLucy",
  },
];

const visualProfiles = {
  "/i/": { type: "vowel", lip: "spread", open: 26, tongueX: 178, tongueY: 118, tongueW: 132, tongueH: 34, label: "嘴角展开" },
  "/ɪ/": { type: "vowel", lip: "relaxed", open: 34, tongueX: 170, tongueY: 126, tongueW: 130, tongueH: 38, label: "短、放松" },
  "/ɛ/": { type: "vowel", lip: "spread", open: 48, tongueX: 166, tongueY: 142, tongueW: 136, tongueH: 44, label: "半开口" },
  "/æ/": { type: "vowel", lip: "wide", open: 68, tongueX: 158, tongueY: 158, tongueW: 144, tongueH: 48, label: "嘴巴张开" },
  "/ɑ/": { type: "vowel", lip: "open", open: 76, tongueX: 214, tongueY: 164, tongueW: 148, tongueH: 48, label: "舌头靠后" },
  "/ɔ/": { type: "vowel", lip: "round", open: 58, tongueX: 220, tongueY: 150, tongueW: 136, tongueH: 44, label: "圆唇" },
  "/ʌ/": { type: "vowel", lip: "relaxed", open: 52, tongueX: 192, tongueY: 150, tongueW: 132, tongueH: 44, label: "中央短音" },
  "/ə/": { type: "vowel", lip: "relaxed", open: 38, tongueX: 194, tongueY: 140, tongueW: 122, tongueH: 38, label: "完全放松" },
  "/ʊ/": { type: "vowel", lip: "round", open: 34, tongueX: 220, tongueY: 128, tongueW: 126, tongueH: 38, label: "短 oo" },
  "/u/": { type: "vowel", lip: "round", open: 24, tongueX: 226, tongueY: 118, tongueW: 130, tongueH: 34, label: "oo 圆唇" },
  "/eɪ/": { type: "diphthong", from: "/ɛ/", to: "/i/", label: "诶 → 衣" },
  "/oʊ/": { type: "diphthong", from: "/ɔ/", to: "/u/", label: "欧 → oo" },
  "/aɪ/": { type: "diphthong", from: "/ɑ/", to: "/ɪ/", label: "啊 → 衣" },
  "/aʊ/": { type: "diphthong", from: "/ɑ/", to: "/u/", label: "啊 → oo" },
  "/ɔɪ/": { type: "diphthong", from: "/ɔ/", to: "/ɪ/", label: "奥 → 衣" },
  "/ɚ/": { type: "vowel", lip: "round", open: 36, tongueX: 218, tongueY: 135, tongueW: 112, tongueH: 42, curl: true, label: "轻 r 色彩" },
  "/ɝ/": { type: "vowel", lip: "round", open: 42, tongueX: 216, tongueY: 132, tongueW: 120, tongueH: 46, curl: true, label: "重 r 色彩" },
  "/p/": { type: "consonant", contact: "lips", voiced: false, air: "burst", label: "双唇闭合" },
  "/b/": { type: "consonant", contact: "lips", voiced: true, air: "burst", label: "双唇发声" },
  "/t/": { type: "consonant", contact: "alveolar", voiced: false, air: "burst", label: "舌尖上顶" },
  "/d/": { type: "consonant", contact: "alveolar", voiced: true, air: "burst", label: "舌尖发声" },
  "/k/": { type: "consonant", contact: "back", voiced: false, air: "burst", label: "舌后部抬起" },
  "/g/": { type: "consonant", contact: "back", voiced: true, air: "burst", label: "舌后部发声" },
  "/f/": { type: "consonant", contact: "lipTeeth", voiced: false, air: "stream", label: "上牙碰下唇" },
  "/v/": { type: "consonant", contact: "lipTeeth", voiced: true, air: "stream", label: "上牙碰下唇" },
  "/θ/": { type: "consonant", contact: "th", voiced: false, air: "stream", label: "舌尖伸出" },
  "/ð/": { type: "consonant", contact: "th", voiced: true, air: "stream", label: "舌尖伸出发声" },
  "/s/": { type: "consonant", contact: "nearAlveolar", voiced: false, air: "stream", label: "细气流" },
  "/z/": { type: "consonant", contact: "nearAlveolar", voiced: true, air: "stream", label: "细气流发声" },
  "/ʃ/": { type: "consonant", contact: "sh", voiced: false, air: "stream", label: "嘘嘴型" },
  "/ʒ/": { type: "consonant", contact: "sh", voiced: true, air: "stream", label: "嘘嘴型发声" },
  "/h/": { type: "consonant", contact: "open", voiced: false, air: "stream", label: "轻轻呼气" },
  "/tʃ/": { type: "consonant", contact: "ch", voiced: false, air: "burst", label: "t + sh" },
  "/dʒ/": { type: "consonant", contact: "ch", voiced: true, air: "burst", label: "d + zh" },
  "/m/": { type: "consonant", contact: "lips", voiced: true, air: "nose", label: "闭嘴鼻音" },
  "/n/": { type: "consonant", contact: "alveolar", voiced: true, air: "nose", label: "舌尖鼻音" },
  "/ŋ/": { type: "consonant", contact: "back", voiced: true, air: "nose", label: "舌后鼻音" },
  "/l/": { type: "consonant", contact: "alveolar", voiced: true, air: "side", label: "舌侧出气" },
  "/ɹ/": { type: "consonant", contact: "r", voiced: true, air: "voice", label: "舌头后收" },
  "/j/": { type: "vowel", lip: "spread", open: 24, tongueX: 176, tongueY: 112, tongueW: 124, tongueH: 32, label: "像极短 /i/" },
  "/w/": { type: "vowel", lip: "round", open: 22, tongueX: 226, tongueY: 116, tongueW: 128, tongueH: 34, label: "像极短 /u/" },
  "ˈ": { type: "stress", label: "重音更响、更长" },
  "连读": { type: "linking", label: "嘴巴不断开" },
};

const state = {
  lessonIndex: Number(localStorage.getItem("speaking-lesson-index") || 0),
  phraseIndex: 0,
  soundIndex: Number(localStorage.getItem("speaking-sound-index") || 0),
  count: Number(localStorage.getItem("speaking-count") || 0),
  recognition: null,
};

const els = {
  lessonList: document.querySelector("#lessonList"),
  videoList: document.querySelector("#videoList"),
  todayCount: document.querySelector("#todayCount"),
  progressBar: document.querySelector("#progressBar"),
  lessonKicker: document.querySelector("#lessonKicker"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonLevel: document.querySelector("#lessonLevel"),
  lessonFocus: document.querySelector("#lessonFocus"),
  lessonTask: document.querySelector("#lessonTask"),
  phraseCn: document.querySelector("#phraseCn"),
  phraseEn: document.querySelector("#phraseEn"),
  phraseTip: document.querySelector("#phraseTip"),
  listenBtn: document.querySelector("#listenBtn"),
  slowBtn: document.querySelector("#slowBtn"),
  recordBtn: document.querySelector("#recordBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  startLessonBtn: document.querySelector("#startLessonBtn"),
  randomPhraseBtn: document.querySelector("#randomPhraseBtn"),
  playDialogueBtn: document.querySelector("#playDialogueBtn"),
  resetProgressBtn: document.querySelector("#resetProgressBtn"),
  soundList: document.querySelector("#soundList"),
  soundSymbol: document.querySelector("#soundSymbol"),
  soundName: document.querySelector("#soundName"),
  soundCue: document.querySelector("#soundCue"),
  soundMouth: document.querySelector("#soundMouth"),
  mouthPicture: document.querySelector("#mouthPicture"),
  soundExamples: document.querySelector("#soundExamples"),
  soundSteps: document.querySelector("#soundSteps"),
  articulationGrid: document.querySelector("#articulationGrid"),
  playSoundBtn: document.querySelector("#playSoundBtn"),
  playExamplesBtn: document.querySelector("#playExamplesBtn"),
  scoreRing: document.querySelector("#scoreRing"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackText: document.querySelector("#feedbackText"),
  dialogue: document.querySelector("#dialogue"),
  chips: document.querySelector("#chips"),
  reflectionPrompt: document.querySelector("#reflectionPrompt"),
  reflectionNote: document.querySelector("#reflectionNote"),
};

function getLesson() {
  return lessons[state.lessonIndex] || lessons[0];
}

function getPhrase() {
  return getLesson().phrases[state.phraseIndex] || getLesson().phrases[0];
}

function getSound() {
  return sounds[state.soundIndex] || sounds[0];
}

function renderLessons() {
  els.lessonList.innerHTML = lessons
    .map(
      (lesson, index) => `
        <button class="lesson-item ${index === state.lessonIndex ? "is-active" : ""}" data-lesson="${index}" type="button">
          <span class="lesson-icon">D${lesson.day}</span>
          <strong>${lesson.title}<span>${lesson.focus}</span></strong>
        </button>
      `
    )
    .join("");
}

function renderVideos() {
  if (!els.videoList) return;
  els.videoList.innerHTML = videoResources
    .map(
      (video) => `
        <a class="video-card" href="${video.url}" target="_blank" rel="noopener noreferrer">
          <span>${video.tag}</span>
          <strong>${video.title}</strong>
          <p>${video.note}</p>
        </a>
      `
    )
    .join("");
}

function renderPractice() {
  const lesson = getLesson();
  const [cn, en, tip] = getPhrase();
  els.lessonKicker.textContent = `Day ${lesson.day}`;
  els.lessonTitle.textContent = lesson.title;
  els.lessonLevel.textContent = lesson.level;
  els.lessonFocus.textContent = lesson.focus;
  els.lessonTask.textContent = lesson.task;
  els.phraseCn.textContent = cn;
  els.phraseEn.textContent = en;
  els.phraseTip.textContent = tip;
  els.dialogue.innerHTML = lesson.dialogue
    .map(
      ([speaker, line, cnLine]) => `
        <div class="bubble ${speaker === "You" ? "user" : ""}">
          <strong>${speaker}</strong>
          <span>${line}</span>
          <small>${cnLine}</small>
        </div>
      `
    )
    .join("");
  els.chips.innerHTML = lesson.chunks.map((chunk) => `<span class="chip">${chunk}</span>`).join("");
  els.reflectionPrompt.textContent = lesson.reflection;
  els.reflectionNote.value = localStorage.getItem(`reflection-day-${lesson.day}`) || "";
  renderProgress();
}

function renderSounds() {
  let currentCategory = "";
  els.soundList.innerHTML = sounds
    .map((sound, index) => {
      const heading =
        sound.category !== currentCategory
          ? `<div class="sound-category">${sound.category}</div>`
          : "";
      currentCategory = sound.category;
      return `
        ${heading}
        <button class="sound-tab ${index === state.soundIndex ? "is-active" : ""}" data-sound="${index}" type="button">
          <strong>${sound.symbol}</strong>
          <span>${sound.label}</span>
        </button>
      `;
    })
    .join("");

  const sound = getSound();
  els.soundSymbol.textContent = sound.symbol;
  els.soundName.textContent = sound.name;
  els.soundCue.textContent = sound.cue;
  els.soundMouth.textContent = sound.mouth;
  els.mouthPicture.innerHTML = renderMouthPicture(sound.symbol);
  els.soundExamples.innerHTML = sound.examples.map((word) => `<span class="example-word">${word}</span>`).join("");
  const articulation = articulationGuides[sound.symbol] || ["看例词嘴型", "跟随例词调整舌位", "保持自然开口", "听声音并模仿气流"];
  els.articulationGrid.innerHTML = articulation
    .map(
      (item, index) => `
        <div class="articulation-item">
          <strong>${articulationLabels[index]}</strong>
          <span>${item}</span>
        </div>
      `
    )
    .join("");
  els.soundSteps.innerHTML = sound.steps.map((step) => `<li>${step}</li>`).join("");
}

function mouthPath(open, lip) {
  const top = 110 - open / 2;
  const bottom = 110 + open / 2;
  const width = lip === "round" ? 112 : lip === "wide" ? 190 : lip === "spread" ? 176 : 146;
  const left = 240 - width / 2;
  const right = 240 + width / 2;
  return `M ${left} ${top} C ${left + 42} ${top - 20}, ${right - 42} ${top - 20}, ${right} ${top}
          C ${right - 28} ${bottom + 26}, ${left + 28} ${bottom + 26}, ${left} ${top}`;
}

function renderBaseMouth(profile, extra = "") {
  const open = profile.open || 44;
  const lip = profile.lip || "relaxed";
  const top = 110 - open / 2;
  const bottom = 110 + open / 2;
  const teethOpacity = open > 34 ? 1 : 0.45;
  const tongueX = profile.tongueX || 190;
  const tongueY = profile.tongueY || 145;
  const tongueW = profile.tongueW || 130;
  const tongueH = profile.tongueH || 42;
  const curl = profile.curl
    ? `<path d="M ${tongueX + 70} ${tongueY + 8} q 26 -22 46 6" fill="none" stroke="#c95477" stroke-width="8" stroke-linecap="round"/>`
    : "";
  return `
    <svg viewBox="0 0 480 220" role="img" aria-label="发音口型示意图">
      <rect width="480" height="220" fill="#f8fffd"/>
      <circle cx="82" cy="64" r="26" fill="#ffe6b8"/>
      <text x="82" y="70" text-anchor="middle" font-size="24">听</text>
      <path d="${mouthPath(open, lip)}" fill="#9b1f3d" stroke="#75203a" stroke-width="4"/>
      <path d="M165 ${top + 10} Q240 ${top - 2} 315 ${top + 10}" fill="none" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity="${teethOpacity}"/>
      <ellipse cx="${tongueX}" cy="${tongueY}" rx="${tongueW / 2}" ry="${tongueH / 2}" fill="#ff8fb0" stroke="#dc5f87" stroke-width="3"/>
      ${curl}
      ${extra}
      <text x="240" y="204" text-anchor="middle" font-size="18" font-weight="800" fill="#203650">${profile.label || "看嘴型跟读"}</text>
    </svg>
  `;
}

function renderDiphthongPicture(profile) {
  const from = visualProfiles[profile.from];
  const to = visualProfiles[profile.to];
  return `
    <svg viewBox="0 0 480 220" role="img" aria-label="双元音口型示意图">
      <rect width="480" height="220" fill="#f8fffd"/>
      <g transform="translate(-60,0) scale(.75)">${renderBaseMouth(from).replace(/<\/?svg[^>]*>/g, "")}</g>
      <path d="M210 108 C245 76, 275 76, 310 108" fill="none" stroke="#1f8a83" stroke-width="7" stroke-linecap="round"/>
      <path d="M310 108 l-16 -12 m16 12 l-16 12" fill="none" stroke="#1f8a83" stroke-width="7" stroke-linecap="round"/>
      <g transform="translate(150,0) scale(.75)">${renderBaseMouth(to).replace(/<\/?svg[^>]*>/g, "")}</g>
      <text x="240" y="204" text-anchor="middle" font-size="18" font-weight="800" fill="#203650">${profile.label}</text>
    </svg>
  `;
}

function renderConsonantPicture(profile) {
  const tongueMap = {
    lips: { x: 238, y: 145, w: 120, h: 30 },
    lipTeeth: { x: 238, y: 152, w: 116, h: 34 },
    th: { x: 238, y: 132, w: 150, h: 30 },
    alveolar: { x: 208, y: 104, w: 112, h: 30 },
    nearAlveolar: { x: 205, y: 122, w: 112, h: 30 },
    sh: { x: 218, y: 128, w: 122, h: 34 },
    ch: { x: 210, y: 116, w: 126, h: 34 },
    back: { x: 270, y: 112, w: 128, h: 32 },
    r: { x: 232, y: 130, w: 110, h: 36 },
    open: { x: 205, y: 152, w: 115, h: 34 },
  };
  const t = tongueMap[profile.contact] || tongueMap.open;
  const lipOpen = profile.contact === "lips" ? 10 : profile.contact === "lipTeeth" ? 28 : 48;
  const air =
    profile.air === "nose"
      ? `<path d="M240 92 C230 54, 178 45, 140 58" fill="none" stroke="#1f8a83" stroke-width="7" stroke-linecap="round"/><text x="106" y="62" font-size="15" fill="#1f8a83" font-weight="800">鼻音</text>`
      : profile.air === "side"
      ? `<path d="M185 138 C130 125, 105 118, 78 118 M295 138 C350 125, 375 118, 402 118" fill="none" stroke="#1f8a83" stroke-width="6" stroke-linecap="round"/>`
      : `<path d="M312 118 C355 108, 385 104, 420 104" fill="none" stroke="#1f8a83" stroke-width="7" stroke-linecap="round"/><path d="M420 104 l-15 -11 m15 11 l-15 12" fill="none" stroke="#1f8a83" stroke-width="7" stroke-linecap="round"/>`;
  const voice = profile.voiced
    ? `<g><circle cx="80" cy="160" r="20" fill="#ffe6b8" stroke="#f2b84b" stroke-width="3"/><path d="M69 160 q11 -15 22 0 q-11 15 -22 0" fill="none" stroke="#e8664f" stroke-width="4"/><text x="80" y="194" text-anchor="middle" font-size="14" fill="#203650" font-weight="800">声带振动</text></g>`
    : `<text x="80" y="168" text-anchor="middle" font-size="15" fill="#65717a" font-weight="800">不振动</text>`;
  const extra = `
    <ellipse cx="${t.x}" cy="${t.y}" rx="${t.w / 2}" ry="${t.h / 2}" fill="#ff8fb0" stroke="#dc5f87" stroke-width="3"/>
    ${air}
    ${voice}
  `;
  return renderBaseMouth({ open: lipOpen, lip: profile.contact === "sh" || profile.contact === "ch" ? "round" : "relaxed", tongueX: t.x, tongueY: t.y, tongueW: t.w, tongueH: t.h, label: profile.label }, extra);
}

function renderConceptPicture(profile, symbol) {
  const isStress = symbol === "ˈ";
  return `
    <svg viewBox="0 0 480 220" role="img" aria-label="语流示意图">
      <rect width="480" height="220" fill="#f8fffd"/>
      <g transform="translate(70,76)">
        <rect x="0" y="0" width="84" height="54" rx="8" fill="${isStress ? "#e8664f" : "#e8f5f3"}"/>
        <rect x="112" y="0" width="84" height="54" rx="8" fill="#e8f5f3"/>
        <rect x="224" y="0" width="84" height="54" rx="8" fill="#e8f5f3"/>
        <text x="42" y="34" text-anchor="middle" font-size="18" font-weight="900" fill="${isStress ? "#fff" : "#12625d"}">${isStress ? "重" : "nice"}</text>
        <text x="154" y="34" text-anchor="middle" font-size="18" font-weight="900" fill="#12625d">${isStress ? "轻" : "to"}</text>
        <text x="266" y="34" text-anchor="middle" font-size="18" font-weight="900" fill="#12625d">${isStress ? "轻" : "meet"}</text>
        <path d="M84 27 C98 14, 102 14, 112 27 M196 27 C210 14, 214 14, 224 27" fill="none" stroke="#1f8a83" stroke-width="5" stroke-linecap="round"/>
      </g>
      <text x="240" y="184" text-anchor="middle" font-size="20" font-weight="900" fill="#203650">${profile.label}</text>
    </svg>
  `;
}

function renderMouthPicture(symbol) {
  const profile = visualProfiles[symbol] || visualProfiles["/ə/"];
  if (profile.type === "diphthong") return renderDiphthongPicture(profile);
  if (profile.type === "consonant") return renderConsonantPicture(profile);
  if (profile.type === "stress" || profile.type === "linking") return renderConceptPicture(profile, symbol);
  return renderBaseMouth(profile);
}

function renderProgress() {
  els.todayCount.textContent = String(state.count);
  const percent = Math.min(100, Math.round((state.count / 300) * 100));
  els.progressBar.style.width = `${percent}%`;
}

function speak(text, rate = 0.92) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreSpeech(target, spoken) {
  const targetWords = normalize(target).split(" ").filter(Boolean);
  const spokenWords = normalize(spoken).split(" ").filter(Boolean);
  if (!spokenWords.length) return 0;
  const matches = targetWords.filter((word) => spokenWords.includes(word)).length;
  const orderBonus = normalize(spoken).includes(normalize(target).slice(0, 10)) ? 12 : 0;
  return Math.min(100, Math.round((matches / targetWords.length) * 88 + orderBonus));
}

function setFeedback(score, title, text) {
  els.scoreRing.textContent = score === null ? "--" : `${score}`;
  const degrees = score === null ? 0 : Math.round((score / 100) * 360);
  els.scoreRing.style.background = `conic-gradient(var(--amber) ${degrees}deg, #eadfca ${degrees}deg)`;
  els.feedbackTitle.textContent = title;
  els.feedbackText.textContent = text;
}

function addPracticeCount() {
  state.count += 1;
  localStorage.setItem("speaking-count", String(state.count));
  renderProgress();
}

function nextPhrase() {
  const lesson = getLesson();
  state.phraseIndex = (state.phraseIndex + 1) % lesson.phrases.length;
  renderPractice();
  setFeedback(null, "先听，再跟读。", "建议流程：原速听 2 遍，慢速跟读 3 遍，然后录音对比。");
}

function randomPhrase() {
  state.lessonIndex = Math.floor(Math.random() * lessons.length);
  state.phraseIndex = Math.floor(Math.random() * getLesson().phrases.length);
  localStorage.setItem("speaking-lesson-index", String(state.lessonIndex));
  renderLessons();
  renderPractice();
  speak(getPhrase()[1], 0.9);
}

function setupRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  return recognition;
}

function startRecording() {
  if (!state.recognition) {
    setFeedback(null, "当前浏览器不支持录音识别。", "建议用 Chrome 或 Edge 打开，并允许麦克风权限。你仍然可以用原速/慢速播放练跟读。");
    return;
  }

  const target = getPhrase()[1];
  els.recordBtn.textContent = "正在听";
  setFeedback(null, "请开口说英文。", target);

  state.recognition.onresult = (event) => {
    const spoken = event.results[0][0].transcript;
    const score = scoreSpeech(target, spoken);
    addPracticeCount();
    if (score >= 82) {
      setFeedback(score, "很顺，继续保持。", `识别到：${spoken}`);
    } else if (score >= 55) {
      setFeedback(score, "已经能听出轮廓了。", `识别到：${spoken}。再慢一点，把关键词说清楚。`);
    } else {
      setFeedback(score, "先拆成两段练。", `识别到：${spoken}。先跟读前半句，再接后半句。`);
    }
  };

  state.recognition.onerror = () => {
    setFeedback(null, "录音没有成功。", "请确认浏览器允许麦克风权限，然后再试一次。");
  };

  state.recognition.onend = () => {
    els.recordBtn.textContent = "录音跟读";
  };

  state.recognition.start();
}

function playDialogue() {
  const lines = getLesson().dialogue.map((line) => line[1]);
  window.speechSynthesis.cancel();
  lines.forEach((line, index) => {
    setTimeout(() => speak(line, 0.9), index * 1700);
  });
}

function playExamples() {
  const sound = getSound();
  window.speechSynthesis.cancel();
  sound.examples.forEach((word, index) => {
    setTimeout(() => speak(word, 0.72), index * 950);
  });
}

els.lessonList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button) return;
  state.lessonIndex = Number(button.dataset.lesson);
  state.phraseIndex = 0;
  localStorage.setItem("speaking-lesson-index", String(state.lessonIndex));
  renderLessons();
  renderPractice();
  setFeedback(null, "已切换到新的一天。", "先把今日 3 句练熟，再做情景对话。");
});

els.soundList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sound]");
  if (!button) return;
  state.soundIndex = Number(button.dataset.sound);
  localStorage.setItem("speaking-sound-index", String(state.soundIndex));
  renderSounds();
  speak(getSound().soundText, 0.62);
});

els.listenBtn.addEventListener("click", () => speak(getPhrase()[1], 0.92));
els.slowBtn.addEventListener("click", () => speak(getPhrase()[1], 0.62));
els.recordBtn.addEventListener("click", startRecording);
els.nextBtn.addEventListener("click", nextPhrase);
els.startLessonBtn.addEventListener("click", () => speak(getPhrase()[1], 0.82));
els.randomPhraseBtn.addEventListener("click", randomPhrase);
els.playDialogueBtn.addEventListener("click", playDialogue);
els.playSoundBtn.addEventListener("click", () => speak(getSound().soundText, 0.58));
els.playExamplesBtn.addEventListener("click", playExamples);
els.resetProgressBtn.addEventListener("click", () => {
  state.count = 0;
  localStorage.setItem("speaking-count", "0");
  renderProgress();
  setFeedback(null, "累计开口已清零。", "重新开始也很好，关键是再次开口。");
});
els.reflectionNote.addEventListener("input", () => {
  localStorage.setItem(`reflection-day-${getLesson().day}`, els.reflectionNote.value);
});

state.recognition = setupRecognition();
renderVideos();
renderSounds();
renderLessons();
renderPractice();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
