interface Media {
  url: string;
  caption: string;
}

interface GameTranslation {
  name: string;
  description: string;
}

interface Game {
  id: string;
  name: string;
  description: string;
  media: Media[];
  price: number;
  genre: string[];
  platform: string[];
  releaseDate: string;
  publisher: string;
  rating: string;
  playerCount: string;
  translations?: {
    [key: string]: GameTranslation;
  };
}

export const games: Game[] = [
  {
    id: "1",
    name: "Lion Dubai Adventure",
    description: "Experience the thrill of Dubai's most exciting adventure game!\n\n• Explore stunning Dubai landmarks and iconic locations\n• Complete challenging missions across the city\n• Earn exclusive rewards and unique items\n• Compete with players worldwide in epic challenges\n• Discover hidden treasures in secret locations\n• Customize your character with traditional and modern outfits",
    media: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80",
        caption: "Dubai's stunning skyline awaits your adventure"
      },
      {
        url: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1920&q=80",
        caption: "Explore the desert landscapes"
      }
    ],
    price: 59.99,
    genre: ["Adventure", "Action", "Open World"],
    platform: ["PC", "PlayStation 5", "Xbox Series X|S"],
    releaseDate: "2025-03-01",
    publisher: "Lion Dubai Games",
    rating: "E10+",
    playerCount: "Single-player, Online Multiplayer (2-50)",
    translations: {
      ar: {
        name: "مغامرة ليون دبي",
        description: "اختبر إثارة أكثر ألعاب دبي إثارة!\n\n• استكشف معالم دبي المذهلة والمواقع الشهيرة\n• أكمل المهام المثيرة في جميع أنحاء المدينة\n• احصل على مكافآت حصرية وعناصر فريدة\n• نافس اللاعبين من جميع أنحاء العالم في تحديات ملحمية\n• اكتشف الكنوز المخفية في المواقع السرية\n• خصص شخصيتك بالأزياء التقليدية والعصرية"
      },
      de: {
        name: "Lion Dubai Abenteuer",
        description: "Erleben Sie den Nervenkitzel von Dubais aufregendstem Abenteuerspiel!\n\n• Erkunden Sie atemberaubende Dubai-Wahrzeichen und ikonische Orte\n• Absolvieren Sie anspruchsvolle Missionen in der ganzen Stadt\n• Verdienen Sie exklusive Belohnungen und einzigartige Gegenstände\n• Treten Sie in epischen Herausforderungen gegen Spieler aus aller Welt an\n• Entdecken Sie versteckte Schätze an geheimen Orten\n• Passen Sie Ihren Charakter mit traditionellen und modernen Outfits an"
      },
      ru: {
        name: "Приключения в Дубае",
        description: "Испытайте острые ощущения в самой захватывающей приключенческой игре Дубая!\n\n• Исследуйте потрясающие достопримечательности и знаковые места Дубая\n• Выполняйте сложные миссии по всему городу\n• Получайте эксклюзивные награды и уникальные предметы\n• Соревнуйтесь с игроками со всего мира в эпических испытаниях\n• Находите скрытые сокровища в секретных локациях\n• Настраивайте своего персонажа с помощью традиционных и современных нарядов"
      },
      fr: {
        name: "Aventure à Dubaï",
        description: "Vivez le frisson du jeu d'aventure le plus excitant de Dubaï !\n\n• Explorez les magnifiques monuments et lieux emblématiques de Dubaï\n• Accomplissez des missions stimulantes à travers la ville\n• Gagnez des récompenses exclusives et des objets uniques\n• Affrontez des joueurs du monde entier dans des défis épiques\n• Découvrez des trésors cachés dans des lieux secrets\n• Personnalisez votre personnage avec des tenues traditionnelles et modernes"
      },
      zh: {
        name: "迪拜冒险",
        description: "体验迪拜最刺激的冒险游戏！\n\n• 探索迪拜令人惊叹的地标和标志性地点\n• 完成城市各处的挑战任务\n• 获得独家奖励和独特物品\n• 在史诗般的挑战中与全球玩家竞争\n• 在秘密地点发现隐藏宝藏\n• 使用传统和现代服装定制您的角色"
      },
      vi: {
        name: "Cuộc Phiêu Lưu ở Dubai",
        description: "Trải nghiệm cảm giác phấn khích trong trò chơi phiêu lưu hấp dẫn nhất Dubai!\n\n• Khám phá các địa danh và địa điểm biểu tượng tuyệt đẹp của Dubai\n• Hoàn thành các nhiệm vụ thách thức khắp thành phố\n• Nhận phần thưởng độc quyền và vật phẩm đặc biệt\n• Cạnh tranh với người chơi toàn cầu trong các thử thách hoành tráng\n• Khám phá kho báu ẩn tại các địa điểm bí mật\n• Tùy chỉnh nhân vật của bạn với trang phục truyền thống và hiện đại"
      }
    }
  },
  {
    id: "2",
    name: "Desert Storm Racing",
    description: "Master the art of desert racing in this high-octane adventure!\n\n• Race through dynamic sand dunes and challenging terrain\n• Experience realistic weather effects and day-night cycles\n• Customize your vehicle with performance upgrades\n• Compete in thrilling multiplayer races\n• Complete story-driven championship modes\n• Unlock exclusive desert-themed vehicles",
    media: [
      {
        url: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=1920&q=80",
        caption: "Experience intense desert racing action"
      },
      {
        url: "https://images.unsplash.com/photo-1581337377024-cf43dd8fe28c?auto=format&fit=crop&w=1920&q=80",
        caption: "Customize your racing vehicle"
      }
    ],
    price: 49.99,
    genre: ["Racing", "Sports", "Action"],
    platform: ["PC", "PlayStation 5", "Xbox Series X|S"],
    releaseDate: "2025-05-15",
    publisher: "Lion Dubai Games",
    rating: "E",
    playerCount: "Single-player, Online Multiplayer (2-16)",
    translations: {
      ar: {
        name: "سباق العاصفة الصحراوية",
        description: "أتقن فن السباق الصحراوي في هذه المغامرة المثيرة!\n\n• سابق عبر الكثبان الرملية الديناميكية والتضاريس الصعبة\n• اختبر تأثيرات الطقس الواقعية ودورات الليل والنهار\n• خصص سيارتك بترقيات الأداء\n• نافس في سباقات متعددة اللاعبين مثيرة\n• أكمل أنماط البطولة المدفوعة بالقصة\n• افتح مركبات حصرية بطابع صحراوي"
      },
      de: {
        name: "Wüstensturm Rennen",
        description: "Meistern Sie die Kunst des Wüstenrennens in diesem actiongeladenen Abenteuer!\n\n• Rasen Sie durch dynamische Sanddünen und anspruchsvolles Gelände\n• Erleben Sie realistische Wettereffekte und Tag-Nacht-Zyklen\n• Passen Sie Ihr Fahrzeug mit Leistungs-Upgrades an\n• Treten Sie in spannenden Mehrspieler-Rennen an\n• Absolvieren Sie Story-getriebene Meisterschaftsmodi\n• Schalten Sie exklusive Wüsten-Fahrzeuge frei"
      },
      ru: {
        name: "Пустынная Буря: Гонки",
        description: "Овладейте искусством гонок по пустыне в этом захватывающем приключении!\n\n• Гоняйте по динамичным песчаным дюнам и сложной местности\n• Испытайте реалистичные погодные эффекты и смену дня и ночи\n• Настраивайте свой автомобиль с улучшениями производительности\n• Соревнуйтесь в захватывающих многопользовательских гонках\n• Пройдите сюжетные чемпионаты\n• Разблокируйте эксклюзивные автомобили в пустынном стиле"
      },
      fr: {
        name: "Course Tempête du Désert",
        description: "Maîtrisez l'art de la course dans le désert dans cette aventure palpitante !\n\n• Courez à travers des dunes de sable dynamiques et des terrains difficiles\n• Découvrez des effets météorologiques réalistes et des cycles jour-nuit\n• Personnalisez votre véhicule avec des améliorations de performance\n• Participez à des courses multijoueurs passionnantes\n• Complétez des modes championnat avec une histoire\n• Débloquez des véhicules exclusifs sur le thème du désert"
      },
      zh: {
        name: "沙漠风暴赛车",
        description: "在这个高能冒险中掌握沙漠赛车的艺术！\n\n• 在动态沙丘和具有挑战性的地形中竞速\n• 体验真实的天气效果和昼夜循环\n• 使用性能升级定制您的车辆\n• 参加刺激的多人竞速\n• 完成故事驱动的锦标赛模式\n• 解锁独特的沙漠主题车辆"
      },
      vi: {
        name: "Đua Xe Bão Táp Sa Mạc",
        description: "Làm chủ nghệ thuật đua xe sa mạc trong cuộc phiêu lưu đầy hấp dẫn này!\n\n• Đua qua các cồn cát động và địa hình thách thức\n• Trải nghiệm hiệu ứng thời tiết thực tế và chu kỳ ngày đêm\n• Tùy chỉnh xe của bạn với các nâng cấp hiệu suất\n• Tham gia các cuộc đua nhiều người chơi gay cấn\n• Hoàn thành các chế độ vô địch theo cốt truyện\n• Mở khóa các phương tiện độc quyền theo chủ đề sa mạc"
      }
    }
  },
  {
    id: "3",
    name: "Dubai Nights: Cyber Revolution",
    description: "Enter a cyberpunk vision of future Dubai!\n\n• Explore a neon-lit, futuristic cityscape\n• Engage in high-tech combat with augmented abilities\n• Make choices that shape the city's destiny\n• Trade and craft advanced cybernetic upgrades\n• Join different factions in their power struggles\n• Experience a rich, branching narrative",
    media: [
      {
        url: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1920&q=80",
        caption: "Future Dubai's neon skyline"
      },
      {
        url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1920&q=80",
        caption: "Cyberpunk aesthetics"
      }
    ],
    price: 69.99,
    genre: ["RPG", "Action", "Cyberpunk"],
    platform: ["PC", "PlayStation 5", "Xbox Series X|S"],
    releaseDate: "2025-08-20",
    publisher: "Lion Dubai Games",
    rating: "M",
    playerCount: "Single-player",
    translations: {
      ar: {
        name: "ليالي دبي: ثورة سايبر",
        description: "ادخل رؤية سايبربانك لدبي المستقبلية!\n\n• استكشف مدينة مستقبلية مضاءة بالنيون\n• شارك في قتال عالي التقنية مع قدرات معززة\n• اتخذ خيارات تشكل مصير المدينة\n• تاجر واصنع ترقيات سيبرانية متقدمة\n• انضم إلى فصائل مختلفة في صراعاتها على السلطة\n• اختبر سردًا غنيًا ومتفرعًا"
      },
      de: {
        name: "Dubai Nights: Cyber Revolution",
        description: "Betreten Sie eine Cyberpunk-Vision des zukünftigen Dubai!\n\n• Erkunden Sie eine neonbeleuchtete, futuristische Stadtlandschaft\n• Nehmen Sie an High-Tech-Kämpfen mit erweiterten Fähigkeiten teil\n• Treffen Sie Entscheidungen, die das Schicksal der Stadt bestimmen\n• Handeln und basteln Sie fortschrittliche kybernetische Upgrades\n• Schließen Sie sich verschiedenen Fraktionen in ihren Machtkämpfen an\n• Erleben Sie eine reichhaltige, verzweigte Erzählung"
      },
      ru: {
        name: "Ночи Дубая: Кибер Революция",
        description: "Войдите в киберпанк-видение будущего Дубая!\n\n• Исследуйте футуристический городской пейзаж, освещенный неоном\n• Участвуйте в высокотехнологичных боях с улучшенными способностями\n• Принимайте решения, определяющие судьбу города\n• Торгуйте и создавайте продвинутые кибернетические улучшения\n• Присоединяйтесь к разным фракциям в их борьбе за власть\n• Испытайте богатый, разветвленный сюжет"
      },
      fr: {
        name: "Nuits de Dubaï : Révolution Cyber",
        description: "Entrez dans une vision cyberpunk du futur Dubaï !\n\n• Explorez un paysage urbain futuriste éclairé au néon\n• Participez à des combats high-tech avec des capacités augmentées\n• Faites des choix qui façonnent le destin de la ville\n• Échangez et fabriquez des améliorations cybernétiques avancées\n• Rejoignez différentes factions dans leurs luttes de pouvoir\n• Vivez une narration riche et ramifiée"
      },
      zh: {
        name: "迪拜之夜：赛博革命",
        description: "进入未来迪拜的赛博朋克愿景！\n\n• 探索霓虹灯照明的未来主义城市景观\n• 使用增强能力进行高科技战斗\n• 做出塑造城市命运的选择\n• 交易和制作先进的机械升级\n• 加入不同派系的权力斗争\n• 体验丰富的分支叙事"
      },
      vi: {
        name: "Đêm Dubai: Cuộc Cách Mạng Không Gian Mạng",
        description: "Bước vào tầm nhìn không gian mạng của Dubai tương lai!\n\n• Khám phá cảnh quan thành phố tương lai với ánh đèn neon\n• Tham gia chiến đấu công nghệ cao với khả năng tăng cường\n• Đưa ra lựa chọn định hình số phận thành phố\n• Giao dịch và chế tạo nâng cấp điện tử tiên tiến\n• Tham gia các phe phái khác nhau trong cuộc tranh giành quyền lực\n• Trải nghiệm cốt truyện phong phú, nhiều nhánh"
      }
    }
  }
];