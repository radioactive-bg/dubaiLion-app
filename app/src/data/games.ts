import { Game } from "../types";

export const games: Game[] = [
  {
    id: 1,
    imageUrl: '/assets/Battle of Heroes_ Stream, Compete, Conquer.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Battle of Heroes: Stream, Compete, Conquer',
        description: 'A high-intensity PvP game built for gamers who live to compete, customize, and conquer',
        story: `Battle of Heroes is a live-streaming PvP game inspired by the Three Kingdoms era, where viewers actively join the fight. With just a comment or like, fans choose sides, summon warriors, legendary generals and shape the outcome live.`
      },
      de: {
        title: 'Kampf der Helden: Streamen, Wettkämpfen, Erobern',
        description: 'Ein intensives PvP-Spiel für Gamer, die für den Wettkampf leben',
        story: `Kampf der Helden ist ein Live-Streaming-PvP-Spiel, inspiriert von der Zeit der Drei Königreiche, bei dem Zuschauer aktiv am Kampf teilnehmen.`
      },
      fr: {
        title: 'Bataille des Héros: Stream, Compétition, Conquête',
        description: 'Un jeu PvP haute intensité conçu pour les joueurs qui vivent pour la compétition',
        story: `Bataille des Héros est un jeu PvP en streaming en direct inspiré de l'ère des Trois Royaumes, où les spectateurs participent activement au combat.`
      },
      ru: {
        title: 'Битва Героев: Стрим, Соревнование, Завоевание',
        description: 'Высокоинтенсивная PvP игра для геймеров, живущих соревнованиями',
        story: `Битва Героев - это PvP игра с прямой трансляцией, вдохновленная эпохой Трёх Королевств, где зрители активно участвуют в сражении.`
      },
      zh: {
        title: '英雄之战：直播、竞技、征服',
        description: '为热爱竞技的玩家打造的高强度PvP游戏',
        story: `英雄之战是一款受三国时代启发的直播PvP游戏，观众可以积极参与战斗。`
      },
      ar: {
        title: 'معركة الأبطال: بث مباشر، منافسة، فتح',
        description: 'لعبة قتال عالية الحدة مصممة للاعبين الذين يعيشون للمنافسة',
        story: `معركة الأبطال هي لعبة قتال مباشرة مستوحاة من عصر الممالك الثلاثة، حيث ينضم المشاهدون بنشاط إلى المعركة.`
      },
      vi: {
        title: 'Trận Chiến Anh Hùng: Stream, Thi Đấu, Chinh Phục',
        description: 'Trò chơi PvP cường độ cao dành cho game thủ đam mê thi đấu',
        story: `Trận Chiến Anh Hùng là trò chơi PvP trực tiếp lấy cảm hứng từ thời Tam Quốc, nơi người xem tích cực tham gia vào trận chiến.`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit)',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i7-7700K or AMD Ryzen 5 1600',
        memory: '16 GB RAM'

      }
    }
  },
  {
    id: 2,
    imageUrl: '/assets/Block Rush_ Gift-Powered Strategy Showdown.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Block Rush: Gift-Powered Strategy Showdown',
        description: 'A strategic defense game where players summon and upgrade units through in-game gifts',
        story: `In Block Rush, players engage in a strategic defense game where they summon and upgrade units using in-game gifts. The objective is to outlast opponents by strategically placing defensive and offensive units.`
      },
      de: {
        title: 'Block Rush: Geschenkgetriebenes Strategieduell',
        description: 'Ein strategisches Verteidigungsspiel, in dem Spieler Einheiten durch In-Game-Geschenke beschwören und verbessern',
        story: `In Block Rush nehmen die Spieler an einem strategischen Verteidigungsspiel teil, bei dem sie Einheiten durch In-Game-Geschenke beschwören und verbessern. Das Ziel ist es, Gegner durch strategische Platzierung von Verteidigungs- und Angriffseinheiten zu überdauern.`
      },
      fr: {
        title: 'Block Rush: Confrontation Stratégique Alimentée par les Cadeaux',
        description: 'Un jeu de défense stratégique où les joueurs invoquent et améliorent des unités grâce aux cadeaux en jeu',
        story: `Dans Block Rush, les joueurs participent à un jeu de défense stratégique où ils invoquent et améliorent des unités en utilisant des cadeaux en jeu. L'objectif est de survivre aux adversaires en plaçant stratégiquement des unités défensives et offensives.`
      },
      ru: {
        title: 'Block Rush: Стратегическая Битва с Подарками',
        description: 'Стратегическая игра в жанре защиты, где игроки призывают и улучшают юнитов с помощью внутриигровых подарков',
        story: `В Block Rush игроки участвуют в стратегической оборонительной игре, где они призывают и улучшают юнитов с помощью внутриигровых подарков. Цель - пережить противников, стратегически размещая оборонительные и наступательные юниты.`
      },
      zh: {
        title: '方块冲锋：礼物驱动的策略对决',
        description: '一款策略防御游戏，玩家通过游戏内礼物召唤和升级单位',
        story: `在方块冲锋中，玩家参与策略防御游戏，通过游戏内礼物召唤和升级单位。目标是通过战略性地放置防御和进攻单位来战胜对手。`
      },
      ar: {
        title: 'بلوك راش: معركة استراتيجية مدعومة بالهدايا',
        description: 'لعبة دفاع استراتيجية حيث يستدعي اللاعبون ويطورون الوحدات من خلال الهدايا داخل اللعبة',
        story: `في بلوك راش، يشارك اللاعبون في لعبة دفاع استراتيجية حيث يستدعون ويطورون الوحدات باستخدام الهدايا داخل اللعبة. الهدف هو البقاء أطول من الخصوم من خلال وضع وحدات دفاعية وهجومية بشكل استراتيجي.`
      },
      vi: {
        title: 'Block Rush: Đối Đầu Chiến Lược Bằng Quà Tặng',
        description: 'Trò chơi phòng thủ chiến lược nơi người chơi triệu hồi và nâng cấp đơn vị thông qua quà tặng trong game',
        story: `Trong Block Rush, người chơi tham gia vào trò chơi phòng thủ chiến lược nơi họ triệu hồi và nâng cấp đơn vị bằng quà tặng trong game. Mục tiêu là tồn tại lâu hơn đối thủ bằng cách đặt các đơn vị phòng thủ và tấn công một cách chiến lược.`
      }
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-4400E or AMD FX-6300',
        memory: '16 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-610 or AMD Ryzen 5 3600X',
        memory: '32 GB RAM'
      }
    }
  },
  {
    id: 3,
    imageUrl: '/assets/Brawl of the Westward Journey_ Clash for the Golden Staff!.jpg',
    platform: 'Mobile',
    translations: {
      en: {
        title: 'Brawl of the Westward Journey: Clash for the Golden Staff!',
        description: 'A strategic tug-of-war for dominance, featuring the Monkey King and Heavenly Court factions',
        story: `Brawl of the Westward Journey is a fast-paced mobile game where players join either the Monkey King or the Heavenly Court faction in a tug-of-war battle to control the legendary Golden Staff.`
      },
      de: {
        title: 'Kampf der Westlichen Reise: Duell um den Goldenen Stab!',
        description: 'Ein strategisches Tauziehen um die Vorherrschaft zwischen dem Affenkönig und den Himmlischen Hof-Fraktionen',
        story: `Kampf der Westlichen Reise ist ein schnelles Mobilspiel, bei dem sich Spieler entweder der Fraktion des Affenkönigs oder des Himmlischen Hofs anschließen, um in einem Tauziehen-Kampf den legendären Goldenen Stab zu kontrollieren.`
      },
      fr: {
        title: 'Bataille du Voyage vers l\'Ouest : Combat pour le Bâton d\'Or !',
        description: 'Un bras de fer stratégique pour la domination, mettant en scène le Roi Singe et les factions de la Cour Céleste',
        story: `Bataille du Voyage vers l'Ouest est un jeu mobile rapide où les joueurs rejoignent soit la faction du Roi Singe, soit celle de la Cour Céleste dans une bataille de tir à la corde pour contrôler le légendaire Bâton d'Or.`
      },
      ru: {
        title: 'Битва Западного Путешествия: Сражение за Золотой Посох!',
        description: 'Стратегическое противостояние за господство между фракциями Короля Обезьян и Небесного Двора',
        story: `Битва Западного Путешествия - это динамичная мобильная игра, где игроки присоединяются к фракции Короля Обезьян или Небесного Двора в борьбе за контроль над легендарным Золотым Посохом.`
      },
      zh: {
        title: '西游争霸：争夺金箍棒之战！',
        description: '以孙悟空和天庭阵营为主的战略拔河对决',
        story: `西游争霸是一款快节奏的手机游戏，玩家可以加入孙悟空或天庭阵营，在拔河战斗中争夺传说中的金箍棒。`
      },
      ar: {
        title: 'معركة الرحلة الغربية: صراع على العصا الذهبية!',
        description: 'لعبة شد الحبل الاستراتيجية للسيطرة، تضم فصائل الملك القرد والمحكمة السماوية',
        story: `معركة الرحلة الغربية هي لعبة جوال سريعة الإيقاع حيث ينضم اللاعبون إما إلى فصيل الملك القرد أو المحكمة السماوية في معركة شد الحبل للسيطرة على العصا الذهبية الأسطورية.`
      },
      vi: {
        title: 'Đại Chiến Tây Du: Tranh Đoạt Gậy Như Ý!',
        description: 'Trò chơi kéo co chiến lược giữa phe Tôn Ngộ Không và Thiên Đình',
        story: `Đại Chiến Tây Du là một trò chơi di động nhịp độ nhanh, nơi người chơi tham gia vào phe Tôn Ngộ Không hoặc Thiên Đình trong trận chiến kéo co để giành quyền kiểm soát Gậy Như Ý huyền thoại.`
      }
    },

    systemRequirements: {
      minimum: {
        os: 'Android 5.0 or iOS 10.0',
        processor: 'Quad-core 1.5 GHz',
        memory: '2 GB RAM'
      },
      recommended: {
        os: 'Android 8.0 or iOS 12.0',
        processor: 'Octa-core 2.0 GHz',
        memory: '4 GB RAM'
      }
    }
  },
  {
    id: 4,
    imageUrl: '/assets/Call Me Champion_ Shape the Faction War with Every Move.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Call Me Champion: Shape the Faction War with Every Move',
        description: 'Choose Your Side, Fight for Glory, and Earn Your Spot at the Top!',
        story: `In Call Me Champion, it's not just about watching, it's about participating. This game throws you into a multi-camp battle where broadcasters and viewers join forces to push their camp to victory.`
      },
      de: {
        title: 'Nenn Mich Champion: Gestalte den Fraktionskrieg mit Jedem Zug',
        description: 'Wähle deine Seite, Kämpfe für Ruhm und Sichere dir deinen Platz an der Spitze!',
        story: `In Nenn Mich Champion geht es nicht nur ums Zusehen, sondern ums Mitmachen. Dieses Spiel wirft dich in eine Multi-Camp-Schlacht, wo Broadcaster und Zuschauer sich zusammentun, um ihr Lager zum Sieg zu führen.`
      },
      fr: {
        title: 'Appelez-Moi Champion : Façonnez la Guerre des Factions à Chaque Mouvement',
        description: 'Choisissez Votre Camp, Battez-vous pour la Gloire et Gagnez Votre Place au Sommet !',
        story: `Dans Appelez-Moi Champion, il ne s'agit pas seulement de regarder, mais de participer. Ce jeu vous plonge dans une bataille multi-camps où diffuseurs et spectateurs unissent leurs forces pour mener leur camp à la victoire.`
      },
      ru: {
        title: 'Зови Меня Чемпион: Определи Исход Войны Фракций Каждым Ходом',
        description: 'Выбери Свою Сторону, Сражайся за Славу и Заработай Место на Вершине!',
        story: `В игре Зови Меня Чемпион важно не просто смотреть, а участвовать. Эта игра погружает вас в многолагерную битву, где стримеры и зрители объединяются, чтобы привести свой лагерь к победе.`
      },
      zh: {
        title: '称霸之战：每一步都决定派系战争的走向',
        description: '选择阵营，为荣耀而战，赢得巅峰地位！',
        story: `在称霸之战中，不仅仅是观看，更重要的是参与。这款游戏将你投入多阵营战斗，主播和观众联手推动自己的阵营走向胜利。`
      },
      ar: {
        title: 'نادني بطل: شكل حرب الفصائل مع كل خطوة',
        description: 'اختر جانبك، قاتل من أجل المجد، واكسب مكانك في القمة!',
        story: `في نادني بطل، الأمر لا يتعلق بالمشاهدة فقط، بل بالمشاركة. تضعك هذه اللعبة في معركة متعددة المعسكرات حيث يتحد البث المباشر والمشاهدون لدفع معسكرهم نحو النصر.`
      },
      vi: {
        title: 'Gọi Tôi Là Nhà Vô Địch: Định Hình Cuộc Chiến Phe Phái Qua Từng Bước Đi',
        description: 'Chọn Phe Của Bạn, Chiến Đấu Vì Vinh Quang và Giành Vị Trí Cao Nhất!',
        story: `Trong Gọi Tôi Là Nhà Vô Địch, không chỉ là xem mà còn là tham gia. Trò chơi này đưa bạn vào trận chiến đa trại, nơi người phát sóng và người xem hợp lực để đưa trại của họ đến chiến thắng.`
      }
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-8700K or AMD Ryzen 5 3600X',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 5,
    imageUrl: '/assets/Call Me Da Sheng_ Shape the Fate of the Monkey King.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Call Me Da Sheng: Shape the Fate of the Monkey King',
        description: 'Will you help the Monkey King escape, or stop him in his tracks?',
        story: `In Call Me Da Sheng, your choice is your fate. Help or hinder the Monkey King's escape from Wuzhi Mountain in this intense tug-of-war PVP showdown.`
      },
      de: {
        title: 'Nenn Mich Da Sheng: Bestimme das Schicksal des Affenkönigs',
        description: 'Wirst du dem Affenkönig bei der Flucht helfen oder ihn aufhalten?',
        story: `In Nenn Mich Da Sheng ist deine Wahl dein Schicksal. Hilf dem Affenkönig bei seiner Flucht vom Wuzhi-Berg oder verhindere sie in diesem intensiven Tauziehen-PVP-Showdown.`
      },
      fr: {
        title: 'Appelez-Moi Da Sheng : Façonnez le Destin du Roi Singe',
        description: 'Aiderez-vous le Roi Singe à s\'échapper, ou l\'arrêterez-vous dans sa course ?',
        story: `Dans Appelez-Moi Da Sheng, votre choix est votre destin. Aidez ou empêchez l'évasion du Roi Singe de la montagne Wuzhi dans cet intense face-à-face PVP.`
      },
      ru: {
        title: 'Зови Меня Да Шэн: Определи Судьбу Короля Обезьян',
        description: 'Поможешь Королю Обезьян сбежать или остановишь его?',
        story: `В игре Зови Меня Да Шэн твой выбор определяет твою судьбу. Помоги или помешай побегу Короля Обезьян с горы Уджи в этом напряженном PVP-противостоянии.`
      },
      zh: {
        title: '齐天大圣：决定美猴王的命运',
        description: '你会帮助美猴王逃脱，还是阻止他的脚步？',
        story: `在齐天大圣中，你的选择就是你的命运。在这场激烈的PVP拔河对决中，帮助或阻止美猴王从五指山逃脱。`
      },
      ar: {
        title: 'نادني دا شنغ: شكل مصير ملك القرود',
        description: 'هل ستساعد ملك القرود على الهروب، أم ستوقفه في مساره؟',
        story: `في نادني دا شنغ، اختيارك هو مصيرك. ساعد أو أعق هروب ملك القرود من جبل ووتشي في هذه المواجهة المكثفة للعبة شد الحبل PVP.`
      },
      vi: {
        title: 'Gọi Tôi Là Đại Thánh: Định Đoạt Số Phận Của Tề Thiên Đại Thánh',
        description: 'Bạn sẽ giúp Tề Thiên Đại Thánh thoát thân, hay ngăn chặn ông ấy?',
        story: `Trong Gọi Tôi Là Đại Thánh, sự lựa chọn của bạn là số phận của bạn. Giúp đỡ hoặc cản trở Tề Thiên Đại Thánh thoát khỏi núi Ngũ Chỉ trong trận đối đầu kéo co PVP gay cấn này.`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5 (11th Generation) or AMD Ryzen 5',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7 or AMD Ryzen 7',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 6,
    imageUrl: '/assets/Cheese Battle_ The Ultimate Cat vs. Mouse Showdown.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Cheese Battle: The Ultimate Cat vs. Mouse Showdown',
        description: 'Join cute cats in an adorable fishing competition where skill meets strategy',
        story: `Step into the delightful chaos of Cheese Battle, a fast-paced PvP game that brings the classic cat-and-mouse chase to life with a modern twist.`
      },
      de: {
        title: 'Käse-Schlacht: Das ultimative Katze-gegen-Maus-Duell',
        description: 'Schließe dich niedlichen Katzen in einem entzückenden Angelwettbewerb an, wo Geschick auf Strategie trifft',
        story: `Tauche ein in das entzückende Chaos von Käse-Schlacht, ein schnelles PvP-Spiel, das die klassische Katz-und-Maus-Jagd mit einer modernen Wendung zum Leben erweckt.`
      },
      fr: {
        title: 'Bataille de Fromage : L\'Ultime Affrontement Chat contre Souris',
        description: "Rejoignez des chats mignons dans une adorable compétition de pêche où l'habileté rencontre la stratégie",
        story: `Plongez dans le chaos délicieux de Bataille de Fromage, un jeu PvP rapide qui donne vie à la classique course-poursuite du chat et de la souris avec une touche moderne.`
      },
      ru: {
        title: 'Сырная Битва: Решающее Противостояние Кошек и Мышей',
        description: 'Присоединяйтесь к причудливому миру Сырной Битвы, где очаровательные мыши защищают свой сырный пир от хитрых кошек',
        story: `Окунитесь в восхитительный хаос Сырной Битвы, динамичной PvP-игры, которая оживляет классическую погоню кошки за мышкой с современным поворотом.`
      },
      zh: {
        title: '奶酪大战：猫鼠终极对决',
        description: '在这个技巧与策略并重的可爱钓鱼比赛中与萌猫一起参与',
        story: `步入奶酪大战的欢乐混乱，这是一款快节奏的PvP游戏，以现代方式重现经典的猫鼠追逐。`
      },
      ar: {
        title: 'معركة الجبن: المواجهة النهائية بين القط والفأر',
        description: 'انضم إلى القطط اللطيفة في منافسة صيد السمك الجذابة حيث تلتقي المهارة بالاستراتيجية',
        story: `ادخل إلى الفوضى الممتعة في معركة الجبن، لعبة PvP سريعة تحيي مطاردة القط والفأر الكلاسيكية بلمسة عصرية.`
      },
      vi: {
        title: 'Đại Chiến Phô Mai: Cuộc Đối Đầu Tối Thượng Giữa Mèo và Chuột',
        description: 'Tham gia cùng những chú mèo dễ thương trong cuộc thi câu cá đáng yêu nơi kỹ năng gặp chiến thuật',
        story: `Bước vào sự hỗn loạn thú vị của Đại Chiến Phô Mai, một trò chơi PvP nhịp độ nhanh mang lại cuộc rượt đuổi mèo-chuột cổ điển với một twist hiện đại.`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10',
        processor: 'Intel Core i3-3220 or AMD FX-4350',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10',
        processor: 'Intel Core i5-6600 or AMD Ryzen 3 1300X',
        memory: '8 GB RAM'

      }
    }
  },
  {
    id: 7,
    imageUrl: '/assets/Chibi the three kingdoms.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Chibi: Three Kingdoms — The Ultimate Battle for Glory!',
        description: 'Your Army, Your Strategy, Your Glory!',
        story: `Step into the action-packed world of Chibi: Three Kingdoms, where you control the fate of the kingdom!`
      },
      de: {
        title: 'Chibi: Drei Königreiche — Die ultimative Schlacht um Ruhm!',
        description: 'Deine Armee, Deine Strategie, Dein Ruhm!',
        story: `Tritt ein in die actiongeladene Welt von Chibi: Drei Königreiche, wo du das Schicksal des Königreichs kontrollierst!`
      },
      fr: {
        title: 'Chibi : Les Trois Royaumes — La Bataille Ultime pour la Gloire !',
        description: 'Votre Armée, Votre Stratégie, Votre Gloire !',
        story: `Entrez dans le monde plein d'action de Chibi : Les Trois Royaumes, où vous contrôlez le destin du royaume !`
      },
      ru: {
        title: 'Чиби: Три Королевства — Решающая Битва за Славу!',
        description: 'Твоя Армия, Твоя Стратегия, Твоя Слава!',
        story: `Войдите в насыщенный действием мир Чиби: Три Королевства, где вы контролируете судьбу королевства!`
      },
      zh: {
        title: '赤壁：三国志 — 终极荣耀之战！',
        description: '你的军队，你的策略，你的荣耀！',
        story: `步入充满动作的赤壁：三国志世界，在这里你掌控着王国的命运！`
      },
      ar: {
        title: 'تشيبي: الممالك الثلاثة — المعركة النهائية من أجل المجد!',
        description: 'جيشك، استراتيجيتك، مجدك!',
        story: `ادخل إلى عالم تشيبي المليء بالحركة: الممالك الثلاثة، حيث تتحكم في مصير المملكة!`
      },
      vi: {
        title: 'Chibi: Tam Quốc — Trận Chiến Tối Thượng Vì Vinh Quang!',
        description: 'Quân Đội Của Bạn, Chiến Lược Của Bạn, Vinh Quang Của Bạn!',
        story: `Bước vào thế giới đầy hành động của Chibi: Tam Quốc, nơi bạn kiểm soát vận mệnh của vương quốc!`
      }
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 7 64-bit or higher',
        processor: 'Intel Core i3-6100 or AMD Ryzen 3 1200',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 8,
    imageUrl: '/assets/Civilization-and Empire_ Clash-of-the Factions_.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Civilization and Empire: Clash of the Factions',
        description: 'Join the battle, summon your troops, and claim victory!',
        story: `Civilization and Empire brings a fresh twist to faction-based warfare. It's Red Heihe Valley versus Blue Dites, and the power to change the tide of battle is in your hands.
  Join your chosen faction via interactive chat commands, summon powerful soldiers, and strategize with your team to break through the enemy’s defenses.
  Engage in massive battles that feature thousands of units on-screen at once, perfect for anyone looking for fast-paced action mixed with strategic depth.
  Each battle is live, driven by real-time interactions from viewers who can send gifts, drop roadblocks, and call in reinforcements.
  The goal? Bring down the enemy's walls and claim victory in this war of factions!
  As you play, you’ll gain points based on your performance and contributions, unlocking rewards, rankings, and new ways to dominate the battlefield.
  Will you be the hero of your faction? Choose your side, rally your troops, and wage war in Civilization and Empire. The battle for supremacy is about to begin!`
      },
      ar: {
        title: 'Civilization and Empire: صراع العروش',
        description: 'انضم إلى المعركة، استدعِ قواتك، وحقق النصر!',
        story: `تقدم لعبة "حضارة وإمبراطورية" لمسة جديدة على حروب الفصائل. إنها مواجهة بين وادي "Red Heihe" و "Blue Dites"، والقوة لتغيير مجرى المعركة بين يديك.
  انضم إلى فصيلك المختار عبر أوامر الدردشة التفاعلية، استدعِ جنودًا أقوياء، وخطط مع فريقك لاختراق دفاعات العدو.
  انخرط في معارك ضخمة تضم آلاف الوحدات على الشاشة في وقت واحد. مثالية لأي شخص يبحث عن حركة سريعة ممزوجة بعمق استراتيجي.
  كل معركة مباشرة، مدفوعة بتفاعلات المشاهدين في الوقت الفعلي الذين يمكنهم إرسال الهدايا وإسقاط الحواجز واستدعاء التعزيزات.
  الهدف؟ إسقاط جدران العدو وتحقيق النصر في حرب الفصائل هذه!
  أثناء اللعب، ستربح نقاطًا بناءً على أدائك ومساهماتك، مما يفتح لك المكافآت والتصنيفات وطرقًا جديدة للهيمنة على ساحة المعركة.
  هل ستكون بطل فصيلك؟ اختر جانبك، وحشد قواتك، وشن الحرب في "حضارة وإمبراطورية". معركة التفوق على وشك أن تبدأ!`
      },
      de: {
        title: 'Zivilisation und Imperium: Clash of the Factions',
        description: 'Ziehen Sie in die Schlacht, rufen Sie Ihre Truppen zusammen und erringen Sie den Sieg!',
        story: `Civilization and Empire bietet eine neue Variante der fraktionsbasierten Kriegsführung. Es ist das Rote Heihe-Tal gegen die Blauen Diten, und die Macht, den Lauf der Dinge zu ändern, liegt in Ihren Händen.
  Schließe dich über interaktive Chat-Befehle deiner gewählten Fraktion an, beschwöre mächtige Soldaten und entwickle mit deinem Team eine Strategie, um die Verteidigung des Feindes zu durchbrechen.
  Nehmen Sie an gewaltigen Schlachten teil, bei denen Tausende von Einheiten gleichzeitig auf dem Bildschirm zu sehen sind - perfekt für alle, die auf der Suche nach rasanter Action mit strategischer Tiefe sind.
  Jede Schlacht ist live und wird durch Echtzeit-Interaktionen von Zuschauern gesteuert, die Geschenke schicken, Straßensperren errichten und Verstärkung anfordern können.
  Das Ziel? Bringen Sie die Mauern des Gegners zum Einsturz und erringen Sie den Sieg in diesem Krieg der Fraktionen!
  Im Laufe des Spiels sammelst du Punkte für deine Leistung und deine Beiträge und schaltest Belohnungen, Ranglisten und neue Möglichkeiten zur Beherrschung des Schlachtfelds frei.
  Wirst du der Held deiner Fraktion sein? Wählen Sie Ihre Seite, versammeln Sie Ihre Truppen und ziehen Sie in Civilization and Empire in den Krieg - der Kampf um die Vorherrschaft kann beginnen!`
      },
      ru: {
        title: 'Civilization and Empire: Столкновение фракций',
        description: 'Присоединяйся к битве, призывай свои войска и завоевывай победу!',
        story: `Civilization and Empire привносит новый поворот в войны фракций. Это Красная долина Хэйхэ против Синих Дитес, и сила изменить ход битвы находится в твоих руках.
  Присоединись к выбранной фракции через интерактивные команды чата, призывай мощных солдат и разрабатывай стратегию с командой, чтобы прорвать оборону врага.
  Участвуй в масштабных сражениях, где на экране одновременно находятся тысячи юнитов — идеально для любителей динамичных боёв с глубокими стратегическими элементами.
  Каждое сражение проходит в реальном времени, управляемое взаимодействиями зрителей, которые могут отправлять подарки, ставить препятствия и вызывать подкрепления.
  Цель? Сломать стены врага и завоевать победу в этой войне фракций!
  Во время игры ты будешь получать очки в зависимости от твоего выступления и вклада, открывая награды, рейтинги и новые способы доминировать на поле боя.
  Станешь ли ты героем своей фракции? Выбирай свою сторону, собирай войска и веди войну в Civilization and Empire. Битва за господство начинается!`
      },
      fr: {
        title: 'Civilisation et Empire: le choc des factions',
        description: 'Rejoignez la bataille, invoquez vos troupes et revendiquez la victoire!',
        story: `Civilisation et Empire apporte une nouvelle tournure à la guerre entre factions. C'est Vallée rouge de Heihe contre Blue Dites, et le pouvoir de changer le cours de la bataille est entre vos mains.
  Rejoignez la faction de votre choix via des commandes de chat interactives, invoquez de puissants soldats et élaborez une stratégie avec votre équipe pour percer les défenses ennemies.
  Participez à des batailles massives mettant en vedette des milliers d'unités à l'écran à la fois, parfaites pour tous ceux qui recherchent une action rapide mélangée à une profondeur stratégique.
  Chaque bataille se déroule en direct, grâce aux interactions en temps réel des téléspectateurs qui peuvent envoyer des cadeaux, éliminer des barrages routiers et appeler des renforts.
  Le but ? Abattez les murs ennemis et revendiquez la victoire dans cette guerre de factions !
  En jouant, vous gagnerez des points en fonction de vos performances et de vos contributions, débloquant ainsi des récompenses, des classements et de nouvelles façons de dominer le champ de bataille.
  Serez-vous le héros de votre faction ? Choisissez votre camp, ralliez vos troupes et faites la guerre dans Civilisation et Empire. La bataille pour la suprématie est sur le point de commencer !`
      },
      zh: {
        title: '文明与帝国：派系冲突',
        description: '加入战斗，召唤你的军队，赢得胜利！',
        story: `文明与帝国为派系战争带来了全新玩法。红河谷与蓝迪特两派势力展开对决，扭转战局的关键掌握在你手中。
  通过互动聊天指令加入你选择的阵营，召唤强大士兵，与团队协作制定策略，突破敌军防线。
  参与大规模战斗，屏幕上同时出现数千个单位，适合追求快节奏动作与战略深度的玩家。
  每场战斗都是实时进行的，由观众的实时互动驱动，观众可发送礼物、设置路障并呼叫增援。
  目标？摧毁敌人的城墙，在这场派系战争中赢得胜利！
  随着游戏进展，你将根据表现和贡献获得积分，解锁奖励、排名以及更多主宰战场的全新方式。
  你将成为你派系的英雄吗？选择阵营，集结军队，在《文明与帝国》中展开战争。争夺霸权的战斗即将打响！`
      },
      vi: {
        title: 'Civilization and Empire: Cuộc Đụng Độ Giữa Các Phe Phái',
        description: 'Tham gia trận chiến, triệu hồi quân đội, và giành chiến thắng!',
        story: `Civilization and Empire mang đến một cách tiếp cận mới mẻ cho chiến tranh giữa các phe phái. Cuộc chiến giữa Thung lũng Heihe Đỏ và Dites Xanh đang nổ ra – và bạn chính là người có thể xoay chuyển tình thế.
  Chọn phe thông qua lệnh tương tác trong phần trò chuyện, triệu hồi binh sĩ mạnh mẽ và phối hợp chiến thuật cùng đồng đội để phá vỡ hàng phòng thủ của kẻ địch.
  Tham chiến trong những trận đánh quy mô lớn, nơi hàng ngàn đơn vị xuất hiện đồng thời – lý tưởng cho người chơi yêu thích tốc độ cao kết hợp chiều sâu chiến thuật.
  Mỗi trận đều diễn ra trực tiếp, được điều khiển bởi tương tác theo thời gian thực từ người xem: họ có thể gửi quà, thả vật cản, hoặc gọi tiếp viện.
  Mục tiêu: Phá vỡ tường thành đối phương và giành chiến thắng trong cuộc chiến phe phái!
  Khi chơi, bạn sẽ tích lũy điểm dựa trên thành tích và mức độ đóng góp, từ đó mở khóa phần thưởng, bảng xếp hạng và những cách mới để làm chủ chiến trường.
  Bạn có đủ khả năng trở thành người hùng của phe mình không? Hãy chọn phe, hiệu triệu quân đội và bắt đầu cuộc chiến trong Civilization and Empire. Trận chiến giành quyền kiểm soát sắp bắt đầu!`
      }
    },

    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-8700K or AMD Ryzen 5 3600X',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 9,
    imageUrl: '/assets/Color War.jpg',
    platform: 'PC',
    translations: {
      en: {
        title: 'Color Wars: Master the Cards, Rule the Battlefield!',
        description: 'Play smart. Fight hard. Only one color reigns supreme!',
        story: `Get ready to enter the explosive world of Color Wars. Pick your faction between Green, Blue, Yellow, or Red, and dive headfirst into the chaos. Your mission?
  This isn’t your average game; in Color Wars, you have the power to control the action with likes, comments, and gifts.
  Every time you engage with the game, whether it’s a simple like or sending a special gift, you’re helping your team build up its firepower.
  Whether it’s summoning mech squads, launching airstrikes, or setting up a defensive shield, your choices will decide the outcome.
  The last faction standing wins it all. So, gear up, send those gifts, and make your moves, because the battlefield waits for no one.
  Choose your faction now and take control of Color Wars!`
      },
      ar: {
        title: 'حرب الألوان: أتقن البطاقات، وسيطر على ساحة المعركة!',
        description: 'العب بذكاء. قاتل بضراوة. لون واحد فقط هو الذي يسود!',
        story: `استعد لدخول عالم Color Wars المليء بالتفجيرات. اختر فصيلك بين الأخضر، الأزرق، الأصفر، أو الأحمر، واندفع في قلب الفوضى. مهمتك؟
  هذه ليست مجرد لعبة عادية؛ في Color Wars، لديك القدرة على التحكم في سير المعركة من خلال الإعجابات، التعليقات، والهدايا.
  في كل مرة تتفاعل مع اللعبة، سواء كانت إعجابًا بسيطًا أو إرسال هدية خاصة، أنت تساعد فريقك في تعزيز قوته النارية.
  سواء كنت تستدعي فرق الميك، تطلق ضربات جوية، أو تُنشيء درعًا دفاعيًا، اختياراتك ستقرر النتيجة.
  الفصيل الأخير الذي يبقى في المعركة هو من يفوز بكل شيء. لذا، استعد، أرسل الهدايا، واتخذ خطواتك، لأن ساحة المعركة لا تنتظر أحدًا.
  اختر فصيلك الآن وكن المتحكم في Color Wars!`
      },
      de: {
        title: 'Color Wars: Beherrsche die Karten, regiere das Schlachtfeld!',
        description: 'Spiele clever. Kämpfe hart. Nur eine Farbe hat die Oberhand!',
        story: `Mach dich bereit, die explosive Welt von Color Wars zu betreten. Entscheide dich für eine der Fraktionen Grün, Blau, Gelb oder Rot und stürze dich kopfüber in das Chaos. Dein Auftrag?
  Dies ist kein gewöhnliches Spiel. In Color Wars hast du die Möglichkeit, das Geschehen mit Likes, Kommentaren und Geschenken zu steuern.
  Jedes Mal, wenn du dich am Spiel beteiligst, sei es durch ein einfaches „Gefällt mir“ oder durch das Versenden eines besonderen Geschenks, hilfst du deinem Team, seine Feuerkraft zu stärken.
  Ob du nun Mech-Truppen beschwörst, Luftangriffe startest oder einen Verteidigungsschild aufbaust, deine Entscheidungen entscheiden über den Ausgang des Spiels.
  Die letzte Fraktion, die noch steht, gewinnt alles. Also, rüstet euch, schickt eure Geschenke und macht eure Züge, denn das Schlachtfeld wartet auf niemanden.
  Wähle jetzt deine Fraktion und übernimm die Kontrolle über Color Wars!`
      },
      ru: {
        title: 'Color Wars: Овладей картами — Завладей полем боя!',
        description: 'Играй умно. Сражайся яростно. Только один цвет станет королём!',
        story: `Приготовься войти в взрывоопасный мир Color Wars. Выбери свою фракцию: Зелёные, Синие, Жёлтые или Красные — и прыгай в самую гущу хаоса. Твоя миссия?
  Это не просто игра — в Color Wars ты управляешь происходящим с помощью лайков, комментариев и подарков.
  Каждое твоё действие — будь то простой лайк или отправка особого подарка — усиливает твою команду и увеличивает её боевую мощь.
  Вызывай отряды мехов, запускай авиаудары или активируй защитные щиты — именно твои решения определяют исход сражения.
  Фракция, которая останется последней, забирает всё. Так что вооружайся, отправляй подарки и действуй — поле боя не ждёт.
  Выбирай свою фракцию и возьми управление Color Wars в свои руки!`
      },
      fr: {
        title: 'Color Wars: maîtrisez les cartes, dirigez le champ de bataille!',
        description: 'Jouez intelligemment. Combattez dur. Une seule couleur règne en maître!',
        story: `Préparez-vous à entrer dans le monde explosif de Guerres de couleurs. Choisissez votre faction entre Vert, Bleu, Jaune ou Rouge et plongez tête première dans le chaos. Votre mission? 
  Ce n'est pas un jeu ordinaire ; dans Guerres de couleurs, vous avez le pouvoir de contrôler l'action avec likes, commentaires et cadeaux. 
  Chaque fois que vous participez au jeu, qu'il s'agisse d'un simple like ou de l'envoi d'un cadeau spécial, vous aidez votre équipe à développer sa puissance de feu. 
  Qu'il s'agisse d'une invocation escouades mécaniques, lancement frappes aériennes, ou la mise en place d'un bouclier défensif, vos choix décideront du résultat.
  La dernière faction debout remporte tout. Alors préparez-vous, envoyez ces cadeaux et agissez, car le champ de bataille n'attend personne. 
  Choisissez votre faction maintenant et prenez le contrôle de Color Wars!`
      },
      zh: {
        title: '色彩战争：掌握卡牌，统治战场！',
        description: '聪明地玩，努力战斗。只有一种颜色才能称霸！',
        story: `准备进入色彩大战的爆炸性世界。在绿色、蓝色、黄色或红色阵营中选择一个，然后直接冲入混乱之中。你的任务？
  这不是一款普通的遊戲；在《色彩大战》中，你可以通过点赞、评论和赠送礼物来控制游戏进程。
  每次与游戏互动，无论是简单的点赞还是发送特别礼物，你都在帮助你的团队增强火力。
  无论是召唤机甲小队、发动空袭还是设置防御盾牌，你的选择将决定最终结果。
  最后存活的阵营将赢得一切。所以，准备好装备，发送礼物，采取行动吧，因为战场不会等你。
  立即选择阵营，掌控色彩战争！`
      },
      vi: {
        title: 'Color Wars: Làm Chủ Bộ Bài, Chiếm Lĩnh Chiến Trường!',
        description: 'Chơi khôn ngoan. Chiến đấu quyết liệt. Chỉ một màu sẽ giành quyền thống trị!',
        story: `Chuẩn bị bước vào thế giới sôi động của Color Wars. Chọn phe: Xanh Lá, Xanh Dương, Vàng hoặc Đỏ, và lao thẳng vào chiến trận. Nhiệm vụ của bạn là gì?
  Đây không phải trò chơi thông thường – trong Color Wars, bạn có thể kiểm soát diễn biến trận đấu bằng lượt thích, bình luận và quà tặng.
  Mỗi lần bạn tương tác – dù chỉ là một lượt thích hay gửi một món quà đặc biệt – đều giúp đội của bạn gia tăng sức mạnh.
  Từ việc triệu hồi đội cơ giới, thực hiện không kích đến thiết lập lá chắn phòng thủ – lựa chọn của bạn sẽ quyết định kết quả.
  Phe cuối cùng còn trụ lại sẽ giành lấy tất cả. Vì vậy, hãy sẵn sàng, gửi quà và đưa ra hành động kịp thời – chiến trường không chờ đợi ai cả.
  Chọn phe ngay và làm chủ Color Wars!`
      }
    },
    systemRequirements: {
      minimum: {
        os: " Windows 10 64-bit or macOS 10.12 (Sierra) or later",
        processor: "Intel Core i3-8100 / AMD Ryzen 3 1200",
        memory: "8GB RAM"
      },
      recommended: {
        os: "10 64-bit or macOS 10.14 (Mojave) or later",
        processor: " Intel Core i7-8700K / AMD Ryzen 5 3600",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 10,
    imageUrl: "/assets/Coloring Heroes_ Paint. Power Up. Protect the World.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Coloring Heroes",
        description: "Unleash your creativity. Color your heroes. Save the world.",
        story: `In a vibrant world where heroes are born from the power of imagination, it’s up to you to bring them to life. Use your artistic skills to color your heroes, each with unique abilities, and prepare them to fight against dark forces threatening the world.
  Customize their appearance, unlock new powers, and watch as your creations come to life to battle enemies and save the day.`
      },
      ar: {
        title: "Coloring Heroes: ارسم. عزز قوتك. احمِ العالم",
        description: "أطلق العنان لإبداعك. قم بتلوين أبطالك. أنقذ العالم.",
        story: `في عالم نابض بالحياة حيث يولد الأبطال من قوة الخيال، عليك أن تبعث الحياة فيهم. استخدم مهاراتك الفنية لتلوين أبطالك، كل منهم بقدرات فريدة، وأعدهم لمحاربة القوى المظلمة التي تهدد العالم.
  خصص مظهرهم، واكتشف قوى جديدة، وشاهد إبداعاتك وهي تأتي إلى الحياة لمحاربة الأعداء وإنقاذ الموقف.`
      },
      de: {
        title: "Helden ausmalen: Malen. Aufrüsten. Beschütze die Welt",
        description: "Entfessle deine Kreativität. Male deine Helden an. Rette die Welt.",
        story: `In einer lebendigen Welt, in der Helden durch die Kraft der Fantasie geboren werden, liegt es an dir, sie zum Leben zu erwecken. Nutze deine künstlerischen Fähigkeiten, um deine Helden mit einzigartigen Fähigkeiten auszustatten und sie auf den Kampf gegen dunkle Mächte vorzubereiten, die die Welt bedrohen.
  Passe ihr Aussehen an, schalte neue Kräfte frei und beobachte, wie deine Kreationen zum Leben erwachen, um Feinde zu bekämpfen und den Tag zu retten.`
      },
      ru: {
        title: "Coloring Heroes: Раскрась. Усиль. Защити мир",
        description: "Дай волю своему творчеству. Раскрась героев. Спаси мир.",
        story: `В ярком мире, где герои рождаются силой воображения, именно тебе предстоит вдохнуть в них жизнь. Используй свои художественные навыки, чтобы раскрасить героев, каждый из которых обладает уникальными способностями, и подготовь их к битве с тьмой, угрожающей миру.
  Настраивай внешний вид персонажей, открывай новые силы и наблюдай, как твои творения оживают, сражаясь с врагами и спасая человечество.`
      },
      fr: {
        title: "Héros à colorier: Peindre. Mise sous tension. Protéger le monde",
        description: "Libérez votre créativité. Colorez vos héros. Sauvez le monde.",
        story: `Dans un monde dynamique où les héros naissent du pouvoir de l’imagination, c’est à vous de leur donner vie. Utilisez vos talents artistiques pour colorer vos héros, chacun doté de capacités uniques, et préparez-les à lutter contre les forces obscures qui menacent le monde.
  Personnalisez leur apparence, débloquez de nouveaux pouvoirs et regardez vos créations prendre vie pour combattre les ennemis et sauver la situation.`
      },
      zh: {
        title: "涂色英雄：涂色。强化。保护世界",
        description: "释放你的创造力。为英雄上色。拯救世界。",
        story: `在一个充满活力的世界里，英雄们从想象力的力量中诞生。你将通过绘画赋予他们生命。运用你的艺术技巧，为每位英雄上色，赋予他们独特的技能，并准备好与威胁世界的黑暗势力战斗。
  自定义他们的外观，解锁新能力，见证你的创作化身英雄，与敌人战斗并拯救世界。`
      },
      vi: {
        title: "Coloring Heroes: Paint. Power Up. Protect the World",
        description: "Thể hiện sự sáng tạo của bạn. Tô màu cho các anh hùng. Cứu lấy thế giới.",
        story: `Trong một thế giới đầy màu sắc, nơi các anh hùng được sinh ra từ sức mạnh của trí tưởng tượng, bạn sẽ là người đưa họ vào cuộc sống. Sử dụng kỹ năng nghệ thuật của bạn để tô màu cho các anh hùng, mỗi người mang một khả năng độc đáo, và chuẩn bị họ chiến đấu chống lại các thế lực đen tối đang đe dọa thế giới.
  Tùy chỉnh diện mạo của họ, mở khóa sức mạnh mới, và chứng kiến những sáng tạo của bạn sống động lên để chiến đấu với kẻ thù và cứu thế giới.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "i5-6500 or higher",
        memory: "4 GB or more"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "i5-12400 or higher",
        memory: "8 GB or more"
      }
    }
  },
  {
    id: 11,
    imageUrl: "/assets/Dragon Ball Duel_ A New Era of Dragon Ball Combat Awaits.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits",
        description: "Your power decides the winner. Choose your side, fight for glory!",
        story: `In Dragon Ball Duel, two factions clash for control of the battlefield, and the stakes have never been higher. 
  Join one of two factions and fight for dominance in real-time combat powered by you.
  The rules are simple: choose your faction, send gifts, and engage in a battle of wits, timing, and power. Your contributions directly impact your faction’s strength, adding intensity to every second of gameplay. 
  The more you contribute, the more powerful your faction becomes. But remember, the other side is just as eager to claim victory.
  Use the power of digital cards to boost your faction's strength and keep the pressure on your enemies. 
  Collect powerful cards that will help your team push forward in critical moments. Be a part of the action, contribute to the battle, and earn your spot on the leaderboard!
  The time to fight is now. Will your faction rise to the top and claim victory, or will you fall short?`
      },
      ar: {
        title: "Dragon Ball Duel: عصر جديد من معارك Dragon Ball في انتظارك",
        description: "قوتك تحدد الفائز. اختر جانبك، وقاتل من أجل المجد!",
        story: `في Dragon Ball Duel، تتصارع فصيلتان للسيطرة على ساحة المعركة، والمخاطر لم تكن أبدًا أعلى من ذلك.
  انضم إلى إحدى الفصيلتين وقاتل من أجل السيطرة في معارك حقيقية مدعومة بقدراتك.
  القواعد بسيطة: اختر فصيلك، وأرسل الهدايا، وانخرط في معركة ذكاء وتوقيت وقوة. تؤثر مساهماتك بشكل مباشر على قوة فصيلك، مما يضيف إثارة إلى كل ثانية من اللعب.
  كلما زادت مساهماتك، زادت قوة فصيلك. لكن تذكر أن الطرف الآخر حريص بنفس القدر على تحقيق النصر.
  استخدم قوة البطاقات الرقمية لتعزيز قوة فصيلك ومواصلة الضغط على أعدائك.
  اجمع بطاقات قوية ستساعد فريقك على المضي قدمًا في اللحظات الحاسمة. كن جزءًا من الإثارة، وساهم في المعركة، واكسب مكانك في قائمة المتصدرين!
  حان وقت القتال. هل ستصعد فصيلك إلى القمة وتحقق النصر، أم ستخفق؟`
      },
      de: {
        title: "Dragon Ball Duel: Eine neue Ära des Dragon Ball-Kampfes erwartet dich",
        description: "Deine Kraft entscheidet über den Sieger. Wähle deine Seite, kämpfe für den Ruhm!",
        story: `In Dragon Ball Duel kämpfen zwei Fraktionen um die Kontrolle über das Schlachtfeld, und es stand noch nie so viel auf dem Spiel.
  Schließe dich einer der beiden Fraktionen an und kämpfe um die Vorherrschaft in einem Echtzeit-Kampf, der von dir gesteuert wird.
  Die Regeln sind einfach: Wähle deine Fraktion, schicke Geschenke und nimm an einem Kampf des Verstandes, des Timings und der Macht teil. Deine Beiträge wirken sich direkt auf die Stärke deiner Fraktion aus und machen jede Sekunde des Spiels intensiver.
  Je mehr du beiträgst, desto mächtiger wird deine Fraktion. Aber vergiss nicht, dass die andere Seite genauso erpicht auf den Sieg ist.
  Nutze die Macht der digitalen Karten, um die Stärke deiner Fraktion zu erhöhen und den Druck auf deine Feinde aufrechtzuerhalten.
  Sammle mächtige Karten, die deinem Team in kritischen Momenten helfen, voranzukommen. Sei Teil des Geschehens, trage zum Kampf bei und verdiene dir deinen Platz in der Rangliste!
  Die Zeit zum Kämpfen ist jetzt. Wird sich deine Fraktion an die Spitze setzen und den Sieg erringen, oder wirst du unterlegen sein?`
      },
      ru: {
        title: "Dragon Ball Duel: Новая эра сражений Dragon Ball начинается!",
        description: "Твоя сила решает исход. Выбирай сторону и сражайся за славу!",
        story: `В Dragon Ball Duel две фракции сталкиваются в битве за контроль над полем боя — и ставки ещё никогда не были так высоки.
  Присоединяйся к одной из сторон и участвуй в захватывающем сражении в реальном времени, где всё зависит от тебя.
  Правила просты: выбери фракцию, отправляй подарки и вступай в бой, где побеждают стратегия, скорость и мощь.
  Каждое твоё действие напрямую усиливает твою команду, добавляя накала в каждую секунду игры.
  Чем больше ты вкладываешь — тем сильнее становится твоя фракция. Но учти: враг тоже не отстаёт.
  Используй силу цифровых карт, чтобы усилить фракцию и держать противника под давлением.
  Собирай мощные карты, которые помогут прорываться в критические моменты.
  Будь частью сражения, помогай своей команде и зарабатывай место в таблице лидеров!
  Время сражаться пришло. Поднимется ли твоя фракция на вершину или уступит? Решать тебе!`
      },
      fr: {
        title: "Dragon Ball Duel: une nouvelle ère de combat Dragon Ball vous attend",
        description: "Votre pouvoir décide du vainqueur. Choisissez votre camp, combattez pour la gloire!",
        story: `Dans Dragon Ball Duel, deux factions s'affrontent pour le contrôle du champ de bataille, et les enjeux n'ont jamais été aussi élevés. 
  Rejoignez l'une des deux factions et combattez pour la domination dans des combats en temps réel optimisés par toi.
  Les règles sont simples: choisissez votre faction, envoyez des cadeaux et engagez-vous dans une bataille d'intelligence, de timing et de pouvoir. Vos contributions ont un impact direct sur la force de votre faction, ajoutant de l'intensité à chaque seconde de jeu. 
  Plus vous contribuez, plus votre faction devient puissante. Mais n’oubliez pas que l’autre camp est tout aussi désireux de remporter la victoire.
  Utilisez la puissance des cartes numériques pour augmenter la force de votre faction et maintenir la pression sur vos ennemis. 
  Collectez des cartes puissantes qui aideront votre équipe à avancer dans les moments critiques. Faites partie de l'action, contribuez à la bataille et gagnez votre place dans le classement!
  Le moment est venu de se battre. Votre faction atteindra-t-elle le sommet et revendiquera-t-elle la victoire, ou échouerez-vous?`
      },
      zh: {
        title: "龙珠对决：龙珠战斗新时代即将开启",
        description: "你的力量决定胜负。选择阵营，为荣耀而战！",
        story: `在《龙珠决斗》中，两大阵营为争夺战场控制权展开激战，局势前所未有的紧张。
  加入两大阵营之一，在由你操控的实时战斗中争夺霸权。
  规则简单：选择阵营，赠送礼物，展开智谋、时机与力量的较量。你的贡献将直接影响阵营实力，让每一秒游戏都充满紧张感。
  贡献越多，阵营越强大。但记住，敌对阵营同样渴望胜利。
  利用数字卡牌的力量提升阵营实力，持续向敌人施压。
  收集强大的卡牌，在关键时刻助你的团队突围。加入战斗，贡献力量，赢得排行榜上的一席之地！
  战斗的时刻已到。你的阵营能否崛起称霸，还是会功亏一篑？`
      },
      vi: {
        title: "Dragon Ball Duel: Kỷ Nguyên Mới Của Cuộc Chiến Dragon Ball Đang Chờ Đón",
        description: "Sức mạnh của bạn quyết định người chiến thắng. Chọn phe, chiến đấu vì vinh quang!",
        story: `Trong Dragon Ball Duel, hai phe đối đầu nhau để giành quyền kiểm soát chiến trường, và cược chiến thắng chưa bao giờ lớn đến thế.
  Tham gia vào một trong hai phe và chiến đấu để giành quyền thống trị trong trận chiến thời gian thực được điều khiển bởi chính bạn.
  Các quy tắc rất đơn giản: chọn phe của bạn, gửi quà, và tham gia vào một cuộc chiến trí tuệ, thời gian và sức mạnh. Những đóng góp của bạn sẽ tác động trực tiếp đến sức mạnh của phe bạn, tạo nên sự kịch tính trong từng giây phút của trò chơi.
  Càng đóng góp nhiều, phe của bạn càng mạnh mẽ. Nhưng hãy nhớ, phe đối thủ cũng khao khát chiến thắng không kém.
  Sử dụng sức mạnh của các thẻ bài kỹ thuật số để tăng cường sức mạnh cho phe của bạn và tạo áp lực lên kẻ thù.
  Thu thập các thẻ bài mạnh mẽ sẽ giúp đội của bạn tiến lên trong những thời điểm quyết định. Hãy tham gia vào hành động, đóng góp cho trận chiến và giành vị trí của bạn trên bảng xếp hạng!
  Thời gian chiến đấu chính là bây giờ. Phe của bạn sẽ vươn lên đứng đầu và giành chiến thắng, hay bạn sẽ thất bại?`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel i5 11th Gen or equivalent",
        memory: "8GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel i7 11th Gen or equivalent",
        memory: "16GB RAM"
      }
    }
  },
  {
    id: 12,
    imageUrl: "/assets/Elves Battle_ Command the Chaos of Your TikTok Live.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Elves Battle: Command the Battlefield, Control the Chaos",
        description: "Where your viewers become warriors—join the red or blue side and let the battle begin!",
        story: `Elves Battle is a revolutionary PC game that seamlessly integrates with your TikTok Live sessions, turning passive viewers into active participants.
  Key Features:
  - Interactive Gameplay: Viewers join the red or blue team by typing '1' or '2' in the chat. Their likes deploy basic fighters, while gifts unleash advanced units, directly influencing the battlefield.
  - Audience Engagement: Every interaction counts. Points are awarded for participation, and the top 100 players are celebrated with exclusive entrance effects, enhancing their presence in the game.
  - Streamer Benefits: Elevate your live streams by offering an immersive experience that encourages viewer interaction, potentially increasing your visibility and follower count.
  Explore the wonders of Elves Battle and elevate your TikTok Live experience! Get ready to engage your audience in a whole new way, turning your stream into an exciting, interactive battlefield.`
      },
      ar: {
        title: "معركة الجان: قُد ساحة المعركة، وتحكم في الفوضى",
        description: "حيث يصبح مشاهديك محاربين — انضم إلى الجانب الأحمر أو الأزرق وابدأ المعركة!",
        story: `Elves Battle هي لعبة ثورية للكمبيوتر الشخصي تتكامل بسلاسة مع جلسات TikTok Live، وتحول المشاهدين السلبيين إلى مشاركين نشطين.
  الميزات الرئيسية:
  - طريقة لعب تفاعلية: ينضم المشاهدون إلى الفريق الأحمر أو الأزرق عن طريق كتابة "1" أو "2" في الدردشة. تعمل الإعجابات على نشر مقاتلين أساسيين، بينما تطلق الهدايا وحدات متقدمة، مما يؤثر بشكل مباشر على ساحة المعركة.
  - تفاعل الجمهور: كل تفاعل مهم. يتم منح النقاط للمشاركة، ويتم الاحتفال بأفضل 100 لاعب بتأثيرات دخول حصرية، مما يعزز وجودهم في اللعبة.
  - مزايا البث المباشر: حسّن بثك المباشر من خلال تقديم تجربة غامرة تشجع تفاعل المشاهدين، مما قد يزيد من ظهورك وعدد متابعيك.
  اكتشف عجائب Elves Battle وحسّن تجربة TikTok Live! استعد لإشراك جمهورك بطريقة جديدة تمامًا، وتحويل بثك إلى ساحة معركة تفاعلية ومثيرة.`
      },
      de: {
        title: "Elfenschlacht: Kommandiere das Schlachtfeld, kontrolliere das Chaos",
        description: "Hier werden Ihre Zuschauer zu Kriegern - schließen Sie sich der roten oder blauen Seite an und lassen Sie die Schlacht beginnen!",
        story: `Elves Battle ist ein revolutionäres PC-Spiel, das sich nahtlos in deine TikTok Live-Sitzungen integriert und aus passiven Zuschauern aktive Teilnehmer macht.
  Hauptmerkmale:
  - Interaktives Gameplay: Zuschauer treten dem roten oder blauen Team bei, indem sie '1' oder '2' in den Chat tippen. Likes setzen einfache Kämpfer ein, Geschenke fortgeschrittene Einheiten – und beeinflussen so direkt das Schlachtfeld.
  - Engagement des Publikums: Jede Interaktion zählt. Für die Teilnahme werden Punkte vergeben, und die 100 besten Spieler werden mit exklusiven Eingangseffekten gefeiert.
  - Streamer-Vorteile: Werten Sie Ihre Live-Streams auf, indem Sie ein immersives Erlebnis bieten, das die Interaktion fördert und Ihre Sichtbarkeit steigern kann.
  Entdecke die Wunder von Elves Battle und verbessere dein TikTok Live-Erlebnis! Mach dein Publikum zum Teil eines spannenden, interaktiven Schlachtfeldes.`
      },
      ru: {
        title: "Elves Battle: Управляй полем боя, контролируй хаос",
        description: "Где зрители становятся воинами — выбери красную или синюю сторону и начни сражение!",
        story: `Elves Battle — это революционная игра для ПК, которая безупречно интегрируется с вашими прямыми эфирами в TikTok, превращая пассивных зрителей в активных участников.
  Основные особенности:
  - Интерактивный геймплей: Зрители присоединяются к красной или синей команде, написав «1» или «2» в чате. Лайки активируют базовых бойцов, а подарки — продвинутые юниты, напрямую влияя на ход битвы.
  - Вовлечённость аудитории: За каждое действие начисляются очки. 100 лучших игроков получают эксклюзивные эффекты при входе, усиливая своё присутствие.
  - Преимущества для стримера: Создайте захватывающий стрим с активным участием зрителей — увеличьте охват и количество подписчиков.
  Открой для себя мир Elves Battle и выведи свои TikTok трансляции на новый уровень! Преврати свой стрим в захватывающее интерактивное сражение.`
      },
      fr: {
        title: "Bataille des Elfes: commandez le champ de bataille, contrôlez le chaos",
        description: "Là où vos spectateurs deviennent des guerriers: rejoignez le côté rouge ou bleu et que la bataille commence!",
        story: `Elves Battle est un jeu PC révolutionnaire qui s'intègre parfaitement à vos sessions TikTok Live, transformant les spectateurs passifs en participants actifs.
  Principales caractéristiques:
  - Gameplay interactif: Les spectateurs rejoignent l'équipe rouge ou bleue en tapant "1" ou "2" dans le chat. Les likes déploient des combattants de base, tandis que les cadeaux libèrent des unités avancées, influençant directement le champ de bataille.
  - Engagement du public: Chaque interaction compte. Des points sont attribués pour la participation, et les 100 meilleurs joueurs sont célébrés avec des effets d'entrée exclusifs.
  - Avantages pour les streamers: Offrez une expérience immersive qui stimule l'interaction et améliore votre visibilité.
  Découvrez les merveilles de Elves Battle et transformez votre expérience TikTok Live! Préparez-vous à faire de votre stream un champ de bataille interactif.`
      },
      zh: {
        title: "精灵大战：指挥战场，掌控混乱",
        description: "让你的观众化身战士——加入红队或蓝队，让战斗开始！",
        story: `精灵之战是一款革命性的PC游戏，可无缝集成至TikTok直播，将被动观众转化为积极参与者。
  核心特色：
  - 互动式游戏玩法：观众通过在聊天栏输入“1”或“2”加入红队或蓝队。点赞可部署基础战士，礼物则释放高级单位，直接影响战场。
  - 观众互动：每一次互动都至关重要。参与即可获得积分，前100名玩家将获得专属入场特效。
  - 主播福利：通过沉浸式互动体验提升直播质量，吸引更多观众，增加曝光率和粉丝数量。
  探索精灵之战的奇妙世界，提升你的 TikTok 直播体验！让你的直播成为一个激动人心的互动战场。`
      },
      vi: {
        title: "Elves Battle: Chỉ Huy Chiến Trường, Kiểm Soát Hỗn Loạn",
        description: "Nơi người xem của bạn trở thành chiến binh—gia nhập phe đỏ hoặc phe xanh và để cuộc chiến bắt đầu!",
        story: `Elves Battle là một trò chơi PC cách mạng, tích hợp hoàn hảo với các buổi phát trực tiếp TikTok của bạn, biến những người xem thụ động thành những người tham gia chủ động.
  Tính năng nổi bật:
  - Lối chơi tương tác: Người xem gia nhập phe đỏ hoặc phe xanh bằng cách gõ "1" hoặc "2" trong phần chat. Mỗi lượt thích sẽ triệu hồi các chiến binh cơ bản, còn quà tặng sẽ kích hoạt các đơn vị nâng cao.
  - Tương tác với người xem: Mỗi hành động đều có ý nghĩa. Điểm sẽ được trao cho người tham gia, 100 người chơi hàng đầu sẽ nhận được hiệu ứng chào mừng độc quyền.
  - Lợi ích cho streamer: Tạo trải nghiệm phát trực tiếp sống động, khuyến khích tương tác và tăng khả năng hiển thị cũng như người theo dõi.
  Khám phá những điều kỳ diệu trong Elves Battle và nâng tầm TikTok Live của bạn! Biến buổi phát trực tiếp thành một chiến trường tương tác đầy phấn khích.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "ntel Core i3",
        memory: "4GB RAM"
      },
      recommended: {
        os: "Windows 10 or later",
        processor: " Intel Core i5 or higher",
        memory: "8GB RAM"
      }
    }
  },
  {
    id: 13,
    imageUrl: "/assets/Farm Field_ Grow Big. Harvest More. Build Your Legacy.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Farm Field: Grow Big. Harvest More. Build Your Legacy",
        description: "Cultivate your farm and grow your crops in a thriving agricultural world.",
        story: `Step into the shoes of a skilled farmer as you manage your very own farm. Plant crops, raise animals, and expand your land to build the most successful farm in the region.
  Balance resources and work hard to make your farm flourish, all while interacting with a lively community of fellow farmers. Will you rise to the challenge and grow your farm into a thriving business?`
      },
      ar: {
        title: "Farm Field: كبر المزرعة. احصد أكثر. ابنِ إرثك",
        description: "ازرع مزرعتك وزرع محاصيلك في عالم زراعي مزدهر.",
        story: `تقمص دور مزارع ماهر وأدِر مزرعتك الخاصة. ازرع المحاصيل، وربِّ الحيوانات، ووسِّع أراضيك لبناء المزرعة الأكثر نجاحًا في المنطقة.
  وازن بين الموارد واعمل بجد لجعل مزرعتك تزدهر، كل ذلك أثناء التفاعل مع مجتمع حيوي من زملائك المزارعين. هل سترتقي إلى مستوى التحدي وتطور مزرعتك لتصبح مشروعًا مزدهرًا؟`
      },
      de: {
        title: "Farm Field: Groß werden. Mehr ernten. Bauen Sie Ihr Erbe auf",
        description: "Bewirtschafte deine Farm und baue deine Ernten in einer blühenden landwirtschaftlichen Welt an.",
        story: `Schlüpfen Sie in die Rolle eines erfahrenen Landwirts und leiten Sie Ihre eigene Farm. Pflanzen Sie Nutzpflanzen an, züchten Sie Tiere und erweitern Sie Ihr Land, um den erfolgreichsten Bauernhof in der Region aufzubauen.
  Halten Sie die Ressourcen im Gleichgewicht und arbeiten Sie hart, um Ihre Farm zum Blühen zu bringen, während Sie gleichzeitig mit einer lebendigen Gemeinschaft von Mitbauern interagieren. Wirst du dich der Herausforderung stellen und deine Farm zu einem florierenden Unternehmen ausbauen?`
      },
      ru: {
        title: "Farm Field: Выращивай больше. Собирай урожай. Строй своё наследие",
        description: "Выращивай свою ферму и собирай урожай в процветающем аграрном мире.",
        story: `Встань на место опытного фермера и управляй собственной фермой. Сажай культуры, разводи животных и расширяй свои земли, чтобы построить самую успешную ферму в регионе.
  Балансируй ресурсы и усердно работай, чтобы твоя ферма процветала, при этом взаимодействуя с живым сообществом других фермеров. Сможешь ли ты принять вызов и превратить свою ферму в процветающий бизнес?`
      },
      fr: {
        title: "Champ agricole: grandissez. Récoltez davantage. Construisez votre héritage",
        description: "Cultivez votre ferme et faites pousser vos récoltes dans un monde agricole prospère.",
        story: `Mettez-vous dans la peau d'un agriculteur qualifié et gérez votre propre ferme. Plantez des cultures, élevez des animaux et agrandissez vos terres pour construire la ferme la plus prospère de la région.
  Équilibrez vos ressources et travaillez dur pour faire prospérer votre ferme, tout en interagissant avec une communauté animée de collègues agriculteurs. Relèverez-vous le défi et transformerez-vous votre ferme en une entreprise florissante ?`
      },
      zh: {
        title: "农场田野：种植更多，收获更多，打造你的传奇",
        description: "在繁荣的农业世界中经营你的农场，种植各种作物。",
        story: `扮演一位技艺精湛的农民，管理属于你的农场。种植作物、饲养动物、拓展土地，打造该地区最成功的农场。
  合理分配资源，努力工作，让你的农场繁荣发展，同时与活跃的农民社区互动。你能否迎接挑战，将农场打造成一个繁荣的商业帝国？`
      },
      vi: {
        title: "Farm Field: Trồng Nhiều. Thu Hoạch Lớn. Gây Dựng Di Sản",
        description: "Gieo trồng, thu hoạch và phát triển trang trại của bạn trong một thế giới nông nghiệp đầy sức sống.",
        story: `Hóa thân thành một người nông dân lành nghề và quản lý trang trại của riêng bạn. Gieo trồng cây trồng, chăm sóc vật nuôi và mở rộng diện tích để xây dựng trang trại thành công nhất trong khu vực.
  Phân bổ tài nguyên hợp lý và nỗ lực không ngừng để phát triển nông trại, đồng thời tương tác với cộng đồng nông dân sôi nổi. Liệu bạn có thể vượt qua thử thách và biến nông trại của mình thành một doanh nghiệp phồn thịnh?`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 or AMD Ryzen 3 1200",
        memory: "4 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-7500 or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 14,
    imageUrl: "/assets/Speed Racing.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Fast Speed: Race, Boost, Conquer the Tracks!",
        description: "Fuel your need for speed with every card, every move.",
        story: `Fast Speed is the ultimate race to the finish, where every player’s action fuels the action! Choose your car, race like a pro, and make your mark on the leaderboard as you zoom past the competition. 
  The race is on, and everyone watching plays a role. Hit "Like" to permanently increase your speed or send gifts to mess with the competition. 
  Want to dominate the leaderboards? Cards are your tools of domination. Collect and use them to boost your car, stop your enemies, and claim victory. 
  With live rankings, streaks, and fierce competition, Fast Speed is all about strategy, speed, and survival. 
  So, what are you waiting for? The tracks are calling, race, boost, and leave your mark!`
      },
      ar: {
        title: "السرعة الخارقة: تسابق، انطلق بأقصى سرعة، سيطر على المضمارات!",
        description: "أشعل شغفك للسرعة بكل بطاقة، وكل حركة.",
        story: `"السرعة الخارقة" هي السباق النهائي نحو خط النهاية، حيث يشعل فعل كل لاعب وتيرة الإثارة! اختر سيارتك، وتسابق كالمحترفين، واصنع بصمتك على لوحة المتصدرين بينما تنطلق بسرعة فائقة متجاوزًا المنافسين.
  السباق على أشده، وكل من يشاهد يلعب دورًا. اضغط "إعجاب" لزيادة سرعتك بشكل دائم أو أرسل هدايا لتعطيل المنافسة.
  هل تريد الهيمنة على لوحات المتصدرين؟ البطاقات هي أدوات سيطرتك. اجمعها واستخدمها لتعزيز سيارتك، وإيقاف أعدائك، وتحقيق النصر.
  مع التصنيفات الحية، وسلاسل الانتصارات، والمنافسة الشرسة، ترتكز "السرعة الخارقة" على الإستراتيجية، والسرعة، والبقاء.
  إذًا، ماذا تنتظر؟ المضمارات تناديك، تسابق، انطلق بأقصى سرعة، واترك بصمتك!`
      },
      de: {
        title: "Schnelle Geschwindigkeit: Rennen, Boost, Eroberung der Strecken!",
        description: "Steigern Sie Ihren Geschwindigkeitsdrang mit jeder Karte und jedem Zug.",
        story: `Fast Speed ist das ultimative Rennen zum Ziel, bei dem die Aktionen jedes Spielers die Action anheizen! Wählen Sie Ihr Auto, fahren Sie wie ein Profi und machen Sie sich einen Namen in der Bestenliste, während Sie an der Konkurrenz vorbeirasen.
  Das Rennen läuft, und jeder, der zuschaut, spielt eine Rolle. Drücke "Gefällt mir", um deine Geschwindigkeit dauerhaft zu erhöhen, oder schicke Geschenke, um die Konkurrenz zu ärgern.
  Willst du die Bestenliste dominieren? Karten sind dein Werkzeug, um zu dominieren. Sammle und verwende sie, um dein Auto zu verbessern, deine Gegner aufzuhalten und den Sieg zu erringen.
  Bei Fast Speed geht es um Strategie, Geschwindigkeit und Überleben - mit Live-Ranglisten, Streaks und hartem Wettbewerb.
  Also, worauf wartest du noch? Die Strecken rufen, rase, booste und hinterlasse dein Zeichen!`
      },
      ru: {
        title: "Fast Speed: Гоняй, Ускоряйся, Покори трассы!",
        description: "Заправь свою жажду скорости каждой картой, каждым движением.",
        story: `Fast Speed — это гонка на выживание, где каждое действие игрока ускоряет события! Выбери свой автомобиль, гоняй как профессионал и оставь свой след на лидерборде, обгоняя конкурентов.
  Гонка началась, и каждый зритель играет свою роль. Нажми "Нравится", чтобы постоянно увеличить свою скорость, или отправь подарки, чтобы помешать соперникам.
  Хочешь возглавить лидерборд? Карты — твои инструменты для доминирования. Собирай их и используй, чтобы прокачать свой автомобиль, остановить врагов и заявить о своей победе.
  С живыми рейтингами, сериями побед и ожесточённой конкуренцией Fast Speed — это игра о стратегии, скорости и выживании.
  Так чего ты ждёшь? Трассы зовут — гоняй, ускоряйся и оставь свой след!`
      },
      fr: {
        title: "Vitesse rapide : faites la course, boostez, conquérez les pistes !",
        description: "Alimentez votre besoin de vitesse avec chaque carte, chaque mouvement.",
        story: `Vitesse rapide est la course ultime jusqu'à l'arrivée, où l'action de chaque joueur alimente l'action! Choisissez votre voiture, courez comme un pro et faites votre marque dans le classement en dépassant la concurrence.
  La course est lancée et tous ceux qui regardent jouent un rôle. Appuyez sur "J'aime" pour augmenter définitivement votre vitesse ou envoyer des cadeaux pour déranger la concurrence.
  Vous voulez dominer les classements? Cartes sont vos outils de domination. Collectionnez-les et utilisez-les pour booster votre voiture, arrêter vos ennemis et remporter la victoire.
  Avec des classements en direct, des séquences et une compétition féroce, Fast Speed est tout au sujet stratégie, vitesse et survie.
  Alors, qu'est-ce que tu attends ? Les pistes appellent, faites la course, boostez-vous et laissez votre marque!`
      },
      zh: {
        title: "极速竞速：冲刺、加速、征服赛道！",
        description: "每张卡牌、每个动作都点燃你的速度激情。",
        story: `极速狂飙是终极竞速对决，每位玩家的操作都将推动比赛进程！选择你的座驾，像职业车手般驰骋，在超越对手的同时在排行榜上留下你的名字。
  比赛已经开始，每位观众都扮演着重要角色。点击“点赞”永久提升速度，或发送礼物干扰对手。
  想称霸排行榜？卡片是你的制胜工具。收集并使用它们来提升赛车性能、阻挡对手，最终赢得胜利。
  实时排名、连胜记录与激烈竞争，Fast Speed 就是关于策略、速度与生存的较量。
  还在等什么？赛道在召唤，竞速、加速，留下你的印记！`
      },
      vi: {
        title: "Fast Speed: Đua Xe, Tăng Tốc, Làm Chủ Đường Đua!",
        description: "Mỗi lá bài, mỗi hành động – đều tiếp thêm năng lượng cho tốc độ của bạn.",
        story: `Fast Speed là cuộc đua đỉnh cao đến vạch đích, nơi mọi hành động của người chơi đều đẩy nhịp độ lên cao!
  Chọn xe, đua như dân chuyên, và ghi dấu trên bảng xếp hạng khi bạn vượt mặt đối thủ với tốc độ vượt trội.
  Cuộc đua đang diễn ra – và mọi khán giả đều có vai trò. Nhấn "Thích" để tăng vĩnh viễn tốc độ của bạn hoặc gửi quà để gây nhiễu cho đối thủ.
  Muốn chiếm lĩnh bảng xếp hạng? Thẻ bài là công cụ để bạn làm được điều đó. Thu thập và sử dụng chúng để tăng sức mạnh cho xe, ngăn chặn đối phương và giành chiến thắng.
  Với bảng xếp hạng trực tiếp, chuỗi thắng và các pha tranh tài gay gắt, Fast Speed là sự kết hợp giữa chiến thuật, tốc độ và sự sống còn.
  Bạn còn chờ gì nữa? Đường đua đã sẵn sàng – hãy lao đi, tăng tốc và để lại dấu ấn!`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4460 or AMD Ryzen 3 1200",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 15,
    imageUrl: "/assets/Firepower Clash_ Real-Time Faction Battle Game.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Firepower Clash: Real-Time Faction Battle Game",
        description: "Join the ultimate real-time battle to destroy your opponent's blocks using firepower and strategy",
        story: `Firepower Clash is the ultimate TikTok live stream game that transforms viewer engagement into a fast-paced, strategic real-time battle.
  Designed for content creators who want to increase viewer retention, interaction, and gifting, this dynamic game pits two teams against each other in a visual tug-of-war.
  Viewers join factions by commenting or reacting, and every like, comment, and gift becomes ammunition. Destroy your opponent's blocks while defending your own, your faction’s fate is in the audience’s hands.
  It’s lightweight, high-impact, and optimized for streamers with any level of tech experience. Custom faction themes (like Gen Z vs Millennials) make streams instantly interactive and fun.
  Firepower Clash is your gateway to deeper audience connection and real-time monetization.`
      },
      ar: {
        title: "Firepower Clash: لعبة معارك الفصائل في الوقت الفعلي",
        description: "انضم إلى المعركة النهائية في الوقت الفعلي لتدمير كتل خصمك باستخدام القوة النارية والاستراتيجية.",
        story: `Firepower Clash هي لعبة البث المباشر المثالية على TikTok التي تحول تفاعل المشاهدين إلى معركة في الوقت الفعلي سريعة الوتيرة واستراتيجية.
  صُممت هذه اللعبة الديناميكية لمنشئي المحتوى الذين يرغبون في زيادة تفاعل المشاهدين وتفاعلهم وتقديم الهدايا، حيث تتنافس فيها فريقان في صراع بصري.
  ينضم المشاهدون إلى الفصائل من خلال التعليق أو التفاعل، ويصبح كل إعجاب وتعليق وهدية ذخيرة. دمر كتل خصمك بينما تدافع عن كتل فريقك، فمصير فريقك بين يدي المشاهدين.
  إنها لعبة خفيفة الوزن وذات تأثير كبير ومُحسّنة للمستخدمين من جميع مستويات الخبرة التقنية. موضوعات الفصائل المخصصة (مثل جيل Z مقابل جيل الألفية) تجعل البث التفاعلي وممتعًا على الفور.
  Firepower Clash هي بوابتك إلى تواصل أعمق مع الجمهور وتحقيق الدخل في الوقت الفعلي.`
      },
      de: {
        title: "Firepower Clash: Echtzeit-Faktionskampfspiels",
        description: "Nimm an der ultimativen Echtzeitschlacht teil und zerstöre die Blöcke deines Gegners mit Feuerkraft und Strategie",
        story: `Firepower Clash ist das ultimative TikTok-Livestream-Spiel, das das Engagement der Zuschauer in eine rasante, strategische Echtzeitschlacht verwandelt.
  Dieses dynamische Spiel wurde für Inhaltsersteller entwickelt, die die Zuschauerbindung, die Interaktion und das Verschenken von Inhalten erhöhen möchten. Zwei Teams treten in einem visuellen Tauziehen gegeneinander an.
  Die Zuschauer schließen sich einer Fraktion an, indem sie kommentieren oder reagieren, und jedes Like, jeder Kommentar und jedes Geschenk wird zu Munition. Zerstöre die Blöcke deines Gegners, während du deine eigenen verteidigst - das Schicksal deiner Fraktion liegt in den Händen des Publikums.
  Das Spiel ist leichtgewichtig, hocheffektiv und für Streamer mit jeder Art von technischer Erfahrung optimiert. Benutzerdefinierte Fraktionsthemen (wie Gen Z gegen Millennials) machen Streams sofort interaktiv und spaßig.
  Firepower Clash ist Ihr Tor zu einer tieferen Bindung des Publikums und zur Monetarisierung in Echtzeit.`
      },
      ru: {
        title: "Firepower Clash: Битва фракций в реальном времени",
        description: "Присоединяйся к решающему сражению — уничтожь блоки противника с помощью огневой мощи и стратегии!",
        story: `Firepower Clash — это идеальная TikTok-игра для прямых эфиров, превращающая зрительскую активность в стремительную стратегическую битву в реальном времени.
  Создана специально для контент-креаторов, которые хотят повысить удержание аудитории, вовлечённость и количество подарков, игра противопоставляет две команды в визуальном перетягивании каната.
  Зрители выбирают фракцию с помощью комментариев или реакций, а каждое действие — лайк, комментарий или подарок — становится боеприпасом.
  Уничтожайте блоки противника, защищая свои — судьба вашей команды зависит от активности аудитории.
  Лёгкая, эффектная и не требующая специальных технических знаний, игра идеально подходит для стримеров любого уровня.
  Настраиваемые темы фракций (например, Gen Z против Миллениалов) делают трансляцию интерактивной и весёлой с первых секунд.
  Firepower Clash — это путь к более тесному взаимодействию с аудиторией и мгновенной монетизации в прямом эфире.`
      },
      zh: {
        title: "火力对决：实时阵营对战游戏",
        description: "加入终极实时对战，运用火力与策略摧毁对手的防御工事",
        story: `火力对决是终极TikTok直播游戏，将观众互动转化为快节奏、策略性的实时对战。
  专为希望提升观众留存率、互动性和赠礼行为的内容创作者设计，这款动态游戏让两支队伍在视觉拉锯战中一决高下。
  观众通过评论或互动加入阵营，每一次点赞、评论和赠礼都将成为弹药。摧毁对手的方块同时防守自身阵地，你所在阵营的命运掌握在观众手中。
  游戏轻量级、高冲击力，并针对不同技术水平的直播主进行优化。自定义阵营主题（如Z世代对阵千禧一代）让直播瞬间互动有趣。
  火力对决是你通向更深层观众连接与实时变现的入口。`
      },
      fr: {
        title: "Firepower Clash: jeu de combat de factions en temps réel",
        description: "Rejoignez la bataille ultime en temps réel pour détruire les blocs de votre adversaire en utilisant la puissance de feu et la stratégie",
        story: `Firepower Clash est l'ultime jeu de diffusion en direct TikTok qui transforme l'engagement des téléspectateurs en une bataille stratégique rapide en temps réel.
  Conçu pour les créateurs de contenu qui souhaitent augmenter la fidélisation, l'interaction et les cadeaux des téléspectateurs, ce jeu dynamique oppose deux équipes dans un bras de fer visuel.
  Les téléspectateurs rejoignent les factions en commentant ou en réagissant, et chaque j'aime, commentaire et cadeau devient une munition. Détruisez les blocs de votre adversaire tout en défendant les vôtres, le sort de votre faction est entre les mains du public.
  Le jeu est léger, à fort impact et optimisé pour les streamers de tous niveaux techniques. Les thèmes personnalisés des factions (comme Gen Z contre Millennials) rendent les streams immédiatement interactifs et amusants.
  Firepower Clash est votre passerelle vers une connexion plus profonde avec votre audience et une monétisation en temps réel.`
      },
      vi: {
        title: "Firepower Clash: Trò Chơi Chiến Đấu Phe Cánh Thời Gian Thực",
        description: "Tham gia trận chiến thời gian thực tuyệt đỉnh để phá hủy các khối của đối thủ bằng hỏa lực và chiến lược.",
        story: `Firepower Clash là trò chơi trực tiếp trên TikTok tuyệt đỉnh, biến sự tương tác của người xem thành một trận chiến chiến lược, nhịp độ nhanh, thời gian thực.
  Dành cho các nhà sáng tạo nội dung muốn tăng cường sự giữ chân người xem, tương tác và quà tặng, trò chơi động này đưa hai đội đối đầu với nhau trong một cuộc chiến kéo co trực quan.
  Người xem tham gia phe cánh bằng cách bình luận hoặc phản ứng, và mỗi lượt thích, bình luận và quà tặng đều trở thành đạn dược. Hãy phá hủy các khối của đối thủ trong khi bảo vệ khối của bạn, số phận của phe bạn nằm trong tay người xem.
  Trò chơi nhẹ, tác động mạnh và tối ưu hóa cho các streamer ở bất kỳ mức độ kinh nghiệm công nghệ nào. Các chủ đề phe cánh tùy chỉnh (như Gen Z vs Millennials) làm cho các buổi phát sóng trở nên ngay lập tức tương tác và thú vị.
  Firepower Clash là cánh cửa giúp bạn kết nối sâu hơn với người xem và kiếm tiền thời gian thực.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5 (11th Gen)",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11",
        processor: "Intel Core i7 (12th Gen or newer)",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 16,
    imageUrl: "/assets/Honor of Kings_ Command Legends. Conquer the Arena.jpg",
    platform: "Mobile",
    translations: {
      en: {
        title: "Honor of Kings: Command Legends. Conquer the Arena",
        description: "Epic battles in ancient China, where strategy meets mythology.",
        story: `In Honor of Kings, players engage in fast-paced 5v5 battles across mythical landscapes inspired by Chinese history. As a commander of powerful heroes, you lead your team through strategic combat to destroy the enemy's core.
  Unlock new heroes, strengthen your cities, and rise through the ranks in this competitive battle arena where every decision can change the tide of war. Choose your faction, summon legendary generals, and dominate the battlefield to secure your place among the greatest warriors of all time.`
      },
      ar: {
        title: "Honor of Kings - Command Legends: اقهر الساحة بلا رحمة",
        description: "معارك ملحمية في الصين القديمة، حيث تلتقي الاستراتيجية بالأساطير.",
        story: `في Honor of Kings، يخوض اللاعبون معارك سريعة 5 ضد 5 عبر مناظر أسطورية مستوحاة من التاريخ الصيني. بصفتك قائدًا لأبطال أقوياء، تقود فريقك في معارك استراتيجية لتدمير قلب العدو.
  افتح أبطال جدد، وعزز مدنك، وترقى في الرتب في ساحة المعركة التنافسية هذه حيث كل قرار يمكن أن يغير مجرى الحرب. اختر فصيلك، واستدعِ جنرالات أسطوريين، وسيطر على ساحة المعركة لتضمن مكانك بين أعظم المحاربين في كل العصور.`
      },
      de: {
        title: "Ehre der Könige: Kommando Legenden. Erobere die Arena",
        description: "Epische Schlachten im alten China, wo Strategie auf Mythologie trifft.",
        story: `In Honor of Kings liefern sich die Spieler rasante 5-v5-Schlachten in mythischen Landschaften, die von der chinesischen Geschichte inspiriert sind. Als Kommandant mächtiger Helden führst du dein Team durch strategische Kämpfe, um den Kern des Feindes zu zerstören.
  Schalten Sie neue Helden frei, stärken Sie Ihre Städte und steigen Sie in dieser kompetitiven Kampfarena, in der jede Entscheidung das Kriegsgeschehen verändern kann, in den Rängen auf. Wählen Sie Ihre Fraktion, beschwören Sie legendäre Generäle und dominieren Sie das Schlachtfeld, um sich Ihren Platz unter den größten Kriegern aller Zeiten zu sichern.`
      },
      ru: {
        title: "Honor of Kings: Командуй легендами. Покори арену",
        description: "Эпичные битвы в древнем Китае, где стратегия встречается с мифологией.",
        story: `В Honor of Kings игроки принимают участие в динамичных боях 5 на 5 на мифических ландшафтах, вдохновленных китайской историей. Будучи командующим мощными героями, ты ведешь свою команду через стратегические сражения, чтобы разрушить ядро врага.
  Открывай новых героев, укрепляй свои города и поднимайся по рангам в этой конкурентной боевой арене, где каждое решение может изменить ход войны. Выбирай свою фракцию, призывай легендарных генералов и доминируй на поле боя, чтобы занять место среди величайших воинов всех времен.`
      },
      fr: {
        title: "Honneur des rois: Légendes de commandement. Conquérir l'arène",
        description: "Batailles épiques dans la Chine ancienne, où la stratégie rencontre la mythologie.",
        story: `Dans Honneur des rois, les joueurs s'engagent dans des batailles rapides en 5 contre 5 dans des paysages mythiques inspirés de l'histoire chinoise. En tant que commandant de héros puissants, vous menez votre équipe à travers des combats stratégiques pour détruire le noyau ennemi.
  Débloquez de nouveaux héros, renforcez vos villes et gravissez les échelons dans cette arène de combat compétitive où chaque décision peut changer le cours de la guerre. Choisissez votre faction, invoquez des généraux légendaires et dominez le champ de bataille pour vous assurer une place parmi les plus grands guerriers de tous les temps.`
      },
      zh: {
        title: "王者荣耀：指挥传奇。征服竞技场",
        description: "在古代中国展开史诗级战斗，策略与神话的完美结合。",
        story: `在《王者荣耀》中，玩家将在以中国历史为灵感的神话景观中展开激烈的5v5对战。作为强大英雄的指挥官，你将带领团队通过战略战斗摧毁敌方核心。
  解锁新英雄，强化城市，在这片竞争激烈的战场上通过每一次决策改变战争走向。选择阵营，召唤传奇将领，称霸战场，在历史长河中留下你的名字。`
      },
      vi: {
        title: "Honor of Kings: Chỉ Huy Huyền Thoại. Thống Trị Chiến Trường",
        description: "Những trận chiến hoành tráng tại Trung Hoa cổ đại, nơi chiến lược gặp gỡ thần thoại.",
        story: `Trong Honor of Kings, người chơi bước vào các trận chiến 5v5 kịch tính trên những bản đồ mang đậm dấu ấn thần thoại, lấy cảm hứng từ lịch sử Trung Hoa. Bạn sẽ là chỉ huy dẫn dắt đội hình các anh hùng hùng mạnh, thực hiện các chiến thuật để phá hủy căn cứ đối phương.
  Mở khóa tướng mới, củng cố thành trì, và vươn lên trong bảng xếp hạng trong đấu trường đối kháng nơi từng quyết định có thể xoay chuyển cục diện. Chọn phe, triệu hồi danh tướng, và làm chủ chiến trường để ghi tên mình vào hàng ngũ những chiến binh vĩ đại nhất.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Android 5.0 / iOS 10.0",
        processor: "Qualcomm Snapdragon 660 / Apple A11 Bionic",
        memory: "3GB RAM"
      },
      recommended: {
        os: "Android 9.0 / iOS 12.0",
        processor: "Qualcomm Snapdragon 855 / Apple A13 Bionic",
        memory: "6GB RAM"
      }
    }
  },
  {
    id: 17,
    imageUrl: "/assets/Island Rush_ Livestream Tower Defense Chaos.jpg",
    platform: "Browser",
    translations: {
      en: {
        title: "Island Rush: Livestream Tower Defense Chaos",
        description: "Faction-based tower defense with real-time viewer interaction and strategy.",
        story: `In Island Rush, viewers become active participants in a dynamic, faction-based tower defense war. Players join either the Human defenders or the Monster attackers by commenting in real-time on the livestream.
  Human players must protect the central tower, while Monsters attempt to destroy it before time runs out.
  The battlefield evolves with every viewer’s interaction. Comments like “666” boost spawn rates, while gifts unlock powerful in-game effects like meteor showers, repair boats, or Gatling cannons.
  Strategic view switching and real-time commands like "Jump" create an immersive and chaotic clash of factions.
  Level up through performance-based progression, and earn exclusive rewards as one of the top contributors in victorious battles.`
      },
      ar: {
        title: "Island Rush: تحدي الدفاع عن الأبراج",
        description: "لعبة دفاع عن البرج قائمة على الفصائل مع تفاعل واستراتيجية في الوقت الفعلي مع المشاهدين.",
        story: `في Island Rush، يصبح المشاهدون مشاركين نشطين في حرب دينامية للدفاع عن الأبراج قائمة على الفصائل. ينضم اللاعبون إما إلى المدافعين البشر أو المهاجمين الوحوش من خلال التعليق في الوقت الفعلي على البث المباشر.
  يجب على اللاعبين البشر حماية البرج المركزي، بينما تحاول الوحوش تدميره قبل نفاد الوقت.
  يتطور ساحة المعركة مع تفاعل كل مشاهد. تعمل التعليقات مثل "666" على زيادة معدلات الظهور، بينما تفتح الهدايا تأثيرات قوية داخل اللعبة مثل زخات النيازك أو إصلاح القوارب أو مدافع جاتلينج.
  يخلق التبديل الاستراتيجي للرؤية والأوامر في الوقت الفعلي مثل "القفز" صدامًا غامرًا وفوضويًا بين الفصائل.
  ارتقِ في المستويات من خلال التقدم القائم على الأداء، واكسب مكافآت حصرية كأحد أفضل المساهمين في المعارك المنتصرة.`
      },
      de: {
        title: "Island Rush: Livestream Tower Defense Chaos",
        description: "Fraktionsbasierte Turmverteidigung mit Echtzeit-Zuschauerinteraktion und Strategie.",
        story: `In Island Rush werden die Zuschauer zu aktiven Teilnehmern in einem dynamischen, fraktionsbasierten Tower-Defense-Krieg. Die Spieler schließen sich entweder den menschlichen Verteidigern oder den Monster-Angreifern an, indem sie den Livestream in Echtzeit kommentieren.
  Die menschlichen Spieler müssen den zentralen Turm schützen, während die Monster versuchen, ihn zu zerstören, bevor die Zeit abläuft.
  Das Schlachtfeld entwickelt sich mit jeder Interaktion des Zuschauers weiter. Kommentare wie „666“ erhöhen die Spawn-Raten, während Geschenke mächtige Spieleffekte wie Meteoritenschauer, Reparaturboote oder Gatling-Kanonen freischalten.
  Strategische Blickwechsel und Echtzeitbefehle wie „Springen“ sorgen für ein packendes und chaotisches Aufeinandertreffen der Fraktionen.
  Steigen Sie durch leistungsbasierte Progression auf und verdienen Sie sich exklusive Belohnungen, wenn Sie in siegreichen Schlachten zu den Besten gehören.`
      },
      ru: {
        title: "Island Rush: Хаос Защиты Башни в Прямом Эфире",
        description: "Башенная защита по фракциям с интерактивным участием зрителей и стратегией в реальном времени.",
        story: `В Island Rush зрители становятся активными участниками динамичной войны башенной защиты между фракциями. Игроки присоединяются либо к людям-защитникам, либо к монстрам-нападающим, оставляя комментарии в реальном времени во время стрима.
  Игроки за людей должны защищать центральную башню, а монстры — разрушить её до окончания времени.
  Поле битвы меняется с каждым действием зрителя. Комментарии вроде «666» увеличивают скорость появления врагов, а подарки активируют мощные игровые эффекты — метеоритные дожди, ремонтные лодки или гатлинг-пушки.
  Тактическое переключение видов и команды в реальном времени, такие как «Прыжок», создают захватывающее и хаотичное столкновение фракций.
  Повышайте уровень благодаря прогрессу по результатам и зарабатывайте эксклюзивные награды как один из лучших участников в победоносных битвах.`
      },
      fr: {
        title: "Island Rush: Chaos de défense de tour en direct",
        description: "Tower defense basé sur les factions avec interaction et stratégie des spectateurs en temps réel.",
        story: `Dans Island Rush, les téléspectateurs deviennent des participants actifs dans une guerre de tower defense dynamique basée sur les factions. Les joueurs rejoignent soit le Humain les défenseurs ou les Monstre attaquants en commentant en temps réel sur le livestream.
  Les joueurs humains doivent protéger la tour centrale, tandis que les monstres tentent de la détruire avant la fin du temps imparti.
  Le champ de bataille évolue avec l’interaction de chaque spectateur. Des commentaires comme « 666 » augmentent les taux d'apparition, tandis que les cadeaux débloquent de puissants effets dans le jeu comme des pluies de météores, des bateaux de réparation ou des canons Gatling.
  Le changement de vue stratégique et les commandes en temps réel comme « Jump » créent un affrontement de factions immersif et chaotique.
  Montez de niveau grâce à une progression basée sur les performances et gagnez des récompenses exclusives en tant que l'un des meilleurs contributeurs aux batailles victorieuses.`
      },
      zh: {
        title: "岛屿狂潮：直播塔防混乱",
        description: "基于阵营的塔防游戏，支持实时观众互动与策略制定。",
        story: `在《岛屿狂潮》中，观众将成为动态派系对战塔防战争的活跃参与者。玩家可通过在直播中实时评论，选择加入人类防御方或怪物进攻方。
  人类玩家需保护中央塔，而怪物则需在时间耗尽前摧毁中央塔。
  战场会随着每位观众的互动而不断演变。评论如“666”可提升单位生成率，而礼物则能解锁流星雨、维修船或加特林炮等强大游戏内效果。
  通过战略视角切换和实时指令如“跳跃”，营造出沉浸式且混乱的阵营对决。
  通过基于表现的进度系统升级，并在胜利的战斗中作为顶级贡献者获得独家奖励。`
      },
      vi: {
        title: "Island Rush: Chiến Thuật Tháp Trực Tuyến Hỗn Loạn",
        description: "Chiến thuật phòng thủ tháp theo phe với sự tương tác và chiến lược thời gian thực từ người xem.",
        story: `Trong Island Rush, người xem trở thành những người tham gia chủ động trong một trận chiến phòng thủ tháp theo phe đầy năng động. Người chơi sẽ gia nhập vào phe Nhân loại phòng thủ hoặc phe Quái vật tấn công bằng cách bình luận trực tiếp trên livestream.
  Người chơi phe Nhân loại phải bảo vệ tháp trung tâm, trong khi phe Quái vật cố gắng phá hủy tháp đó trước khi thời gian kết thúc.
  Chiến trường thay đổi với mỗi tương tác từ người xem. Những bình luận như “666” giúp tăng tỉ lệ xuất hiện kẻ thù, trong khi các món quà mở khóa hiệu ứng mạnh mẽ trong trò chơi như mưa sao băng, tàu sửa chữa, hoặc đại bác Gatling.
  Việc chuyển đổi góc nhìn chiến lược và các lệnh thời gian thực như "Nhảy" tạo ra một trận chiến hỗn loạn và hấp dẫn giữa các phe.
  Nâng cấp qua sự tiến bộ dựa trên hiệu suất và nhận các phần thưởng độc quyền như một trong những người đóng góp hàng đầu trong các trận chiến chiến thắng.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bi",
        processor: "Intel i5 8th Gen or equivalent",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel i7 10th Gen or better",
        memory: "16 GB+ RAM"
      }
    }
  },
  {
    id: 18,
    imageUrl: "/assets/Jianghu Duel_ The Battle for the Maiden and the Land.jpg",
    platform: "Browser",
    translations: {
      en: {
        title: "Jianghu Duel: The Battle for the Maiden and the Land",
        description: "Master the art of war, claim the beauty, conquer the Jianghu!",
        story: `In Jianghu Duel, the world of martial arts is at your feet. Two factions battle for dominance, but this isn't your typical combat game; it's a live, interactive experience where your actions shape the outcome.
  As a player, you'll choose your faction and join the fight to capture the beautiful Maiden or conquer enemy territory.
  Victory isn’t just about your own moves, though. Viewers can directly influence the battle by liking, commenting, and sending gifts to boost your faction’s strength.
  The more interaction you get, the stronger your team becomes. It’s a battle of wits, skill, and community power.
  The game offers two unique modes: Peach Blossom Valley and Summit of Light, each with its own rules and challenges.
  As you climb the ranks, you can earn exclusive skins and rewards, and if you're skilled enough, you'll become a legend, leaving your mark in the world of Jianghu Duel.
  Will you rise to the challenge, lead your faction to victory, and claim the rewards that await? Your journey starts now, take your destiny into your hands!`
      },
      ar: {
        title: "Jianghu Duel: صراع على القلب والمصير",
        description: "أتقن فن الحرب، واحصل على الجمال، واحتل Jianghu!",
        story: `في Jianghu Duel، عالم فنون القتال تحت قدميك. تتصارع فصيلتان على السيطرة، ولكن هذه ليست لعبة قتال عادية؛ إنها تجربة تفاعلية حية حيث تشكل أفعالك النتيجة.
  بصفتك لاعبًا، ستختار فصيلك وتنضم إلى القتال لأسر الفتاة الجميلة أو غزو أراضي العدو.
  لكن النصر لا يتوقف على حركاتك وحدها. يمكن للمشاهدين التأثير مباشرة على المعركة من خلال الإعجاب والتعليق وإرسال الهدايا لتعزيز قوة فصيلك.
  كلما زادت التفاعلات، زادت قوة فريقك. إنها معركة ذكاء ومهارة وقوة المجتمع.
  تقدم اللعبة وضعين فريدين: Peach Blossom Valley وSummit of Light، لكل منهما قواعده وتحدياته.
  كلما صعدت في الرتب، يمكنك كسب مظاهر ومكافآت حصرية، وإذا كنت ماهرًا بما يكفي، ستصبح أسطورة وتخلف بصمتك في عالم Jianghu Duel.
  هل سترتقي إلى مستوى التحدي وتقود فصيلك إلى النصر وتفوز بالمكافآت التي تنتظرك؟ رحلتك تبدأ الآن، خذ مصيرك بين يديك!`
      },
      de: {
        title: "Jianghu-Duell: Der Kampf um die Jungfrau und das Land",
        description: "Meistere die Kunst des Krieges, erobere die Schönheit, erobere das Jianghu!",
        story: `In Jianghu Duel liegt Ihnen die Welt der Kampfkünste zu Füßen. Zwei Fraktionen kämpfen um die Vorherrschaft, aber dies ist kein typisches Kampfspiel, sondern ein interaktives Live-Erlebnis, bei dem Ihre Aktionen das Ergebnis beeinflussen.
  Als Spieler wählst du deine Fraktion und nimmst am Kampf um die Eroberung der schönen Maid oder des feindlichen Territoriums teil.
  Der Sieg hängt jedoch nicht nur von deinen eigenen Zügen ab. Die Zuschauer können den Kampf direkt beeinflussen, indem sie ihn liken, kommentieren und Geschenke schicken, um die Stärke deiner Fraktion zu erhöhen.
  Je mehr Interaktion du bekommst, desto stärker wird dein Team. Es ist ein Kampf des Verstandes, der Fähigkeiten und der Macht der Gemeinschaft.
  Das Spiel bietet zwei einzigartige Modi: Peach Blossom Valley und Summit of Light, jeder mit seinen eigenen Regeln und Herausforderungen.
  Wenn du in den Rängen aufsteigst, kannst du dir exklusive Skins und Belohnungen verdienen, und wenn du geschickt genug bist, wirst du zu einer Legende und hinterlässt deine Spuren in der Welt von Jianghu Duel.
  Wirst du dich der Herausforderung stellen, deine Fraktion zum Sieg führen und die Belohnungen einfordern, die auf dich warten? Deine Reise beginnt jetzt, nimm dein Schicksal in deine Hände!`
      },
      ru: {
        title: "Jianghu Duel: Битва за Прекрасную Деву и Власть над Землями",
        description: "Овладей искусством войны, завоюй красавицу, покори мир Цзянху!",
        story: `В Jianghu Duel весь мир боевых искусств лежит у твоих ног. Две фракции сражаются за власть, но это не просто боевая игра — это живое, интерактивное сражение, где каждое твоё действие меняет исход событий.
  Выбери свою сторону и вступай в бой за прекрасную Деву или в стремлении захватить вражеские земли.
  Но победа зависит не только от твоего мастерства. Зрители тоже играют роль — лайки, комментарии и подарки напрямую усиливают твою фракцию.
  Чем активнее поддержка, тем сильнее становится твоя команда. Это битва разума, навыков и силы сообщества.
  Игра предлагает два уникальных режима: Долина Цветущих Персиков и Вершина Света, каждый со своими правилами и испытаниями.
  Продвигаясь в рейтинге, ты получишь эксклюзивные облики и награды. А если ты достаточно силён, тебя запомнят как легенду мира Jianghu Duel.
  Готов ли ты принять вызов, возглавить свою фракцию и получить заслуженные награды? Твоё путешествие начинается прямо сейчас — возьми судьбу в свои руки!`
      },
      fr: {
        title: "Jianghu Duel: La bataille pour la jeune fille et la terre",
        description: "Maîtrisez l'art de la guerre, revendiquez la beauté, conquérez le Jianghu!",
        story: `Dans Duel du Jianghu, le monde des arts martiaux est à vos pieds. Deux factions se battent pour la domination, mais ce n'est pas un jeu de combat typique ; c'est une expérience en direct et interactive où vos actions façonnent le résultat.
  En tant que joueur, vous choisirez votre faction et rejoindrez le combat pour capturer la belle jeune fille ou conquérir le territoire ennemi.
  Mais la victoire ne dépend pas seulement de vos propres mouvements. Les téléspectateurs peuvent influencer directement la bataille en aimant, en commentant et en envoyant des cadeaux pour renforcer la force de votre faction.
  Plus vous obtenez d’interactions, plus votre équipe devient forte. C’est une bataille d’intelligence, de compétences et de pouvoir communautaire.
  Le jeu propose deux modes uniques : Vallée des fleurs de pêcher et Sommet de Lumière, chacun avec ses propres règles et défis.
  Au fur et à mesure que vous gravissez les échelons, vous pouvez gagner des skins et des récompenses exclusifs, et si vous êtes suffisamment compétent, vous deviendrez une légende, laissant votre marque dans le monde de Duel du Jianghu.
  Relèverez-vous le défi, mènerez-vous votre faction à la victoire et réclamerez-vous les récompenses qui vous attendent? Votre voyage commence maintenant, prenez votre destin en main!`
      },
      zh: {
        title: "江湖对决：为佳人与土地而战",
        description: "掌握战争艺术，夺取美人，征服江湖！",
        story: `在《江湖对决》中，武林世界尽在脚下。两大势力为争夺霸权展开激战，但这并非传统战斗游戏；这是一场实时互动体验，你的每一步行动都将影响战局。
  作为玩家，你将选择阵营，加入战斗，争夺美丽少女或征服敌方领土。
  胜利不仅仅取决于你的个人操作。观众可以通过点赞、评论和赠送礼物来直接影响战局，提升你所属势力的实力。
  互动越多，你的团队就越强大。这是一场智慧、技巧与社区力量的较量。
  游戏提供两种独特模式：桃花谷和光明之巅，每种模式都有其独特的规则和挑战。
  随着你不断晋升，你可以获得专属皮肤和奖励，若足够出色，更将成为传奇，在《江湖对决》的世界中留下你的印记。
  你是否愿意接受挑战，带领你的阵营走向胜利，并领取等待你的奖励？你的旅程现在开始，掌握自己的命运！`
      },
      vi: {
        title: "Jianghu Duel: Cuộc Chiến Vì Người Con Gái Và Mảnh Đất",
        description: "Làm chủ nghệ thuật chiến tranh, chiếm lấy mỹ nhân, chinh phục Jianghu!",
        story: `Trong Jianghu Duel, thế giới võ thuật nằm trong tay bạn. Hai phe đối đầu để giành quyền thống trị, nhưng đây không phải là trò chơi chiến đấu thông thường; đó là một trải nghiệm trực tiếp, tương tác nơi mà hành động của bạn quyết định kết quả.
  Là người chơi, bạn sẽ chọn phe của mình và tham gia chiến đấu để chiếm lấy mỹ nhân xinh đẹp hoặc chinh phục lãnh thổ kẻ thù.
  Chiến thắng không chỉ phụ thuộc vào các bước đi của riêng bạn. Người xem có thể ảnh hưởng trực tiếp đến trận đấu bằng cách thích, bình luận và gửi quà để tăng cường sức mạnh cho phe của bạn.
  Càng nhận được nhiều sự tương tác, đội của bạn càng mạnh mẽ. Đây là một cuộc chiến trí tuệ, kỹ năng và sức mạnh cộng đồng.
  Trò chơi cung cấp hai chế độ độc đáo: Thung Lũng Hoa Đào và Đỉnh Sáng, mỗi chế độ có quy tắc và thử thách riêng.
  Khi leo lên các bậc xếp hạng, bạn có thể nhận được những skin và phần thưởng độc quyền, và nếu đủ tài năng, bạn sẽ trở thành huyền thoại, để lại dấu ấn của mình trong thế giới Jianghu Duel.
  Bạn sẽ đương đầu với thử thách, dẫn dắt phe của mình đến chiến thắng và giành lấy phần thưởng đang chờ đón? Hành trình của bạn bắt đầu ngay bây giờ, hãy nắm lấy vận mệnh trong tay!`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4460 or AMD FX-6300",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
        memory: "16 GB RAM"
      }
    },
  },
  {
    id: 19,
    imageUrl: "/assets/King of Soldiers.jpg",
    platform: "Browser",
    translations: {
      en: {
        title: "King of Soldiers: Who will rule the battlefield?",
        description: "Live combat influenced by viewers, where every reaction impacts the war.",
        story: `In King of Soldiers, your actions shape the battlefield in real time. Choose your side! Will you join the Yellow Order or the Green Syndicate?
  Throw your support into the fight by dropping comments, smashing likes, and sending in-game gifts that summon tanks, drones, or even nukes. Real players, real impact.
  Cards are your arsenal—use them wisely to climb the ranks. Every play adds to the pool, and top contributors walk away with exclusive titles and a share of the win.
  The bigger the battle, the louder your impact. Pick a side, play smart, and shift the tide live.
  Lead the charge. Seize the battlefield. Will you survive the chaos?`
      },
      ar: {
        title: "ملك الجنود: من سيحكم ساحة المعركة؟",
        description: "قتال حي يتأثر بردود فعل المشاهدين، حيث لكل تفاعل تأثير في الحرب.",
        story: `في لعبة King of Soldiers، أفعالك تُغيّر مجرى المعركة في الوقت الفعلي. اختر جانبك! هل ستنضم إلى نظام الأصفر أم إلى تحالف الأخضر؟
  ادعم المعركة بالتعليقات، الإعجابات، وإرسال الهدايا داخل اللعبة التي تستدعي الدبابات، الطائرات المُسيّرة، أو حتى الضربات النووية. اللاعبون الحقيقيون يصنعون الفارق الحقيقي.
  البطاقات هي سلاحك، فاستخدمها بذكاء لتتقدم في التصنيفات. كل خطوة تساهم في الرصيد العام، وأصحاب أعلى مساهمات يحصلون على ألقاب حصرية وجزء من المكافأة.
  كلما اشتدت المعركة، زاد تأثيرك. اختر جانبك، العب بذكاء، وغيّر مسار المعركة مباشرة.
  قد الهجوم. سيطر على أرض المعركة. هل ستتمكن من النجاة وسط الفوضى؟`
      },
      de: {
        title: "König der Soldaten: Wer wird das Schlachtfeld beherrschen?",
        description: "Live-Kampf mit Einfluss der Zuschauer – jede Reaktion verändert den Verlauf der Schlacht.",
        story: `In King of Soldiers bestimmen deine Aktionen das Schlachtfeld in Echtzeit. Wähle deine Seite! Schließt du dich dem Gelben Orden oder dem Grünen Syndikat an?
  Unterstütze den Kampf, indem du Kommentare abgibst, Likes verteilst und Geschenke im Spiel verschickst, die Panzer, Drohnen oder sogar Atombomben herbeirufen. Echte Spieler, echte Wirkung.
  Karten sind dein Arsenal – nutze sie klug und steige in den Rängen auf. Jede Aktion trägt zum Pool bei, und Top-Beiträger erhalten exklusive Titel und einen Anteil am Sieg.
  Je größer die Schlacht, desto größer dein Einfluss. Wähle eine Seite, spiele klug und wende das Blatt live.
  Führe den Angriff an. Erobere das Schlachtfeld. Wirst du das Chaos überleben?`
      },
      ru: {
        title: "King of Soldiers: Кто захватит поле боя?",
        description: "Живой бой, где каждое действие зрителей влияет на ход войны.",
        story: `В King of Soldiers твои действия меняют поле боя в реальном времени. Выбирай сторону! Ты присоединишься к Жёлтому Ордену или Зелёному Синдикату?
  Поддержи бой: пиши комментарии, ставь лайки и отправляй внутриигровые подарки — они вызывают танки, дроны или даже ядерные удары. Настоящие игроки, настоящий эффект.
  Карты — твоё оружие. Используй их с умом и поднимайся в рейтинге. Каждое действие пополняет общий пул, а лучшие участники получают эксклюзивные титулы и часть награды.
  Чем масштабнее битва, тем громче твое влияние. Выбери сторону, играй с умом и меняй ход битвы в прямом эфире.
  Веди атаку. Захвати поле боя. Сможешь ли ты выжить в этом хаосе?`
      },
      fr: {
        title: "Roi des Soldats : Qui dirigera le champ de bataille?",
        description: "Combat en direct influencé par les spectateurs, où chaque action façonne la guerre.",
        story: `Dans Roi des Soldats, vos actions façonnent le champ de bataille en temps réel. Choisissez votre camp ! Souhaitez-vous rejoindre l'Ordre Jaune ou le Syndicat Vert ?
  Apportez votre soutien au combat en laissant des commentaires, en aimant et en envoyant des cadeaux dans le jeu pour invoquer des chars, des drones ou même des armes nucléaires. De vrais joueurs, un véritable impact.
  Les cartes sont votre arsenal, utilisez-les intelligemment pour gravir les échelons. Chaque action ajoute au pool et les meilleurs contributeurs remportent des titres exclusifs et une part des gains.
  Plus la bataille est intense, plus votre impact est grand. Choisissez un camp, jouez intelligemment et changez le cours de la bataille en direct.
  Menez la charge. Saisissez le champ de bataille. Survivrez-vous au chaos ?`
      },
      zh: {
        title: "士兵之王：谁将统治战场？",
        description: "实时观众互动战斗游戏，每个动作都影响战争走势。",
        story: `在《士兵之王》中，你的每一步行动都将实时影响战场局势。选择你的阵营！你将加入黄衣军团还是绿衣阵线？
  通过评论、点赞和发送游戏内礼物来支持你的阵营，这些礼物可以召唤坦克、无人机，甚至是核弹。真实玩家，真实影响。
  卡片是你的武器库，聪明地使用它们以提升排名。每次操作都会贡献到战斗池中，顶级贡献者将获得专属称号和战斗奖励份额。
  战斗越激烈，你的影响越大。选择阵营，智慧出击，实时改变战局。
  率领冲锋，占领战场。你能在混乱中生存吗？`
      },
      vi: {
        title: "Vị Vua Của Những Người Lính: Ai sẽ cai trị chiến trường?",
        description: "Trận chiến trực tiếp do khán giả tác động, mỗi hành động đều ảnh hưởng đến cục diện.",
        story: `Trong Vị Vua Của Những Người Lính, hành động của bạn sẽ tạo ra sự thay đổi trên chiến trường ngay lập tức. Hãy chọn phe của bạn! Bạn sẽ gia nhập Đế Chế Vàng hay Liên Minh Xanh?
  Hãy thể hiện sự ủng hộ bằng cách để lại bình luận, nhấn like, và gửi quà trong game để triệu hồi xe tăng, máy bay không người lái, hoặc thậm chí là bom hạt nhân. Người chơi thực sự, tác động thực sự.
  Thẻ bài là kho vũ khí của bạn – sử dụng chúng thông minh để leo lên bảng xếp hạng. Mỗi lượt chơi đóng góp vào quỹ chung, và những người đóng góp hàng đầu sẽ nhận được danh hiệu độc quyền cùng phần thưởng chiến thắng.
  Trận chiến càng lớn, ảnh hưởng của bạn càng mạnh. Chọn phe, chơi thông minh và thay đổi cục diện trận đấu ngay lập tức.
  Dẫn đầu cuộc tấn công. Giành lấy chiến trường. Liệu bạn có thể sống sót trong cơn hỗn loạn này?`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4460 or AMD FX-6300",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
        memory: "16 GB RAM"
      }
    },

  },
  {
    id: 20,
    imageUrl: "/assets/King’s Duel_ Fantasy Clash in Real Time.jpg",
    platform: "Browser",
    translations: {
      en: {
        title: "King’s Duel: Fantasy Clash in Real Time",
        description: "Lead your army, summon magical units, and conquer the battlefield in this fast-paced real-time strategy game.",
        story: `Step into King’s Duel, a revolutionary TikTok-integrated real-time battle game that merges epic fantasy combat with livestream interactivity. Designed for creators and gamers alike, this danmu-based strategy game transforms your comment section into a battlefield.
  
  The goal? Push your camp's frontline to the enemy’s side in a tug-of-war-style showdown.
  
  Each match is a high-stakes battle where strategy, timing, and crowd coordination decide the winner. Crown points, contribution scores, and weekly leaderboards add layers of competition and prestige.
  
  With real-time engagement, collectible rewards, and streamer-specific perks, King’s Duel is optimized for TikTok gaming content, audience interaction, and viral growth.`
      },
      ar: {
        title: "King's Duel: مواجهة الأساطير في قلب المعركة",
        description: "قُد جيشك واستدعِ وحدات سحرية واحتل ساحة المعركة في هذه اللعبة الاستراتيجية السريعة في الوقت الحقيقي.",
        story: `ادخل إلى King's Duel، لعبة القتال الثورية المتكاملة مع TikTok والتي تجمع بين القتال الخيالي الملحمي والتفاعل المباشر. صُممت هذه اللعبة الاستراتيجية القائمة على الدانمو للمبدعين واللاعبين على حد سواء، وتحوّل قسم التعليقات إلى ساحة معركة.
  
  الهدف؟ ادفع خط جبهتك إلى جانب العدو في مواجهة على غرار لعبة شد الحبل.
  
  كل مباراة هي معركة عالية المخاطر حيث تحدد الاستراتيجية والتوقيت والتنسيق الجماهيري الفائز. تضيف نقاط التاج ونتائج المساهمة وقوائم المتصدرين الأسبوعية مزيدًا من التنافس والهيبة.
  
  بفضل المشاركة في الوقت الفعلي والمكافآت القابلة للتجميع والمزايا الخاصة بالبث المباشر، تم تحسين King's Duel لتناسب محتوى ألعاب TikTok وتفاعل الجمهور والنمو الفيروسي.`
      },
      de: {
        title: "King's Duel: Fantasy Clash in Real Time",
        description: "Führen Sie Ihre Armee, beschwören Sie magische Einheiten und erobern Sie das Schlachtfeld in diesem rasanten Echtzeit-Strategiespiel.",
        story: `Tritt ein in King's Duel, ein revolutionäres, in TikTok integriertes Echtzeit-Kampfspiel, das epische Fantasy-Kämpfe mit Livestream-Interaktivität verbindet. Dieses auf Danmu basierende Strategiespiel, das sich an Erfinder und Spieler gleichermaßen richtet, verwandelt deinen Kommentarbereich in ein Schlachtfeld.
  
  Das Ziel? Dränge die Front deines Lagers in einer Art Tauziehen auf die Seite des Feindes.
  
  Jedes Match ist eine Schlacht mit hohem Einsatz, bei der Strategie, Timing und die Koordination der Zuschauer über den Sieger entscheiden. Kronenpunkte, Beitragsergebnisse und wöchentliche Ranglisten sorgen für zusätzlichen Wettbewerb und Prestige.
  
  Mit Echtzeit-Engagement, sammelbaren Belohnungen und streamer-spezifischen Vergünstigungen ist King's Duel für TikTok-Gaming-Inhalte, Publikumsinteraktion und virales Wachstum optimiert.`
      },
      ru: {
        title: "King’s Duel: Фэнтезийная Битва в Реальном Времени",
        description: "Возглавьте армию, призовите магические отряды и захватите поле боя в этой стремительной стратегии в реальном времени!",
        story: `Окунитесь в мир King’s Duel — революционной игры с боями в реальном времени, интегрированной в TikTok и наполненной эпическими фэнтезийными сражениями. Созданная для стримеров и геймеров, эта стратегия на основе комментариев превращает ваш чат в настоящее поле битвы!
  
  Цель проста: протолкнуть линию фронта своей фракции на сторону противника в напряжённой битве формата "перетягивание каната".
  
  Каждый матч — это борьба на нервах, где побеждают стратегия, тайминг и слаженность с аудиторией. Система королевских очков, рейтингов вклада и еженедельных таблиц лидеров добавляет азарт, престиж и желание доминировать.
  
  Особенности игры:
  Интерактив в реальном времени: каждый комментарий или подарок может повлиять на ход битвы.
  Коллекционные награды: получайте ценные бонусы за активность.
  Перки для стримеров: особые преимущества для создания вирусного TikTok-контента и увеличения вовлечённости.`
      },
      fr: {
        title: "King's Duel: Fantasy Clash en temps réel",
        description: "Dirigez votre armée, invoquez des unités magiques et partez à la conquête du champ de bataille dans ce jeu de stratégie en temps réel au rythme effréné.",
        story: `Entrez dans Le duel du roi, un jeu de combat en temps réel révolutionnaire intégré à TikTok qui fusionne des combats fantastiques épiques avec une interactivité en direct. Conçu pour les créateurs et les joueurs, ce jeu de stratégie basé sur le danmu transforme votre section de commentaires en champ de bataille.
  
  Le but? Poussez la ligne de front de votre camp du côté de l'ennemi dans une confrontation de style tir à la corde.
  
  Chaque match est une bataille aux enjeux élevés où la stratégie, le timing et la coordination du public décident du vainqueur. Les points de couronne, les scores de contribution et les classements hebdomadaires ajoutent des niveaux de compétition et de prestige.
  
  Avec un engagement en temps réel, des récompenses à collectionner et des avantages spécifiques aux streamers, Le duel du roi est optimisé pour le contenu de jeu TikTok, l'interaction avec le public et la croissance virale.`
      },
      zh: {
        title: "国王之战：实时幻想对决",
        description: "率领你的军队，召唤魔法单位，征服战场，在这款快节奏的实时策略游戏中一决高下。",
        story: `踏入《国王的对决》，这款革命性的TikTok 集成实时战斗游戏将史诗级奇幻战斗与直播互动完美融合。专为创作者和玩家设计，这款基于弹幕的策略游戏将你的评论区变成战场。
  
  目标？将你阵营的前线推进到敌方阵地，展开一场拔河式对决。
  
  每场对决都是高风险的战略较量，策略、时机和人群协作将决定胜负。皇冠积分、贡献值及周排行榜为游戏增添竞争与荣誉感。
  
  凭借实时互动、可收集奖励及主播专属福利，《国王决斗》专为 TikTok 游戏内容、观众互动及病毒式传播优化。`
      },
      vi: {
        title: "King’s Duel: Cuộc Đụng Độ Huyền Bí Thực Tế",
        description: "Dẫn dắt đội quân của bạn, triệu hồi các đơn vị ma thuật, và chinh phục chiến trường trong trò chơi chiến thuật thời gian thực nhịp độ nhanh này.",
        story: `Bước vào King’s Duel, một trò chơi chiến đấu thời gian thực tích hợp TikTok mang tính cách mạng kết hợp giữa chiến đấu huyền bí hoành tráng và sự tương tác trực tiếp trong livestream. Dành cho cả người sáng tạo nội dung và game thủ, trò chơi chiến lược dựa trên danmu này biến phần bình luận của bạn thành một chiến trường.
  
  Mục tiêu? Đẩy đội của bạn về phía bên đối phương trong một cuộc đối đầu theo kiểu kéo co.
  
  Mỗi trận đấu là một cuộc chiến đầy cam go, nơi chiến thuật, thời gian và sự phối hợp của đám đông quyết định người chiến thắng. Điểm vương miện, điểm đóng góp và bảng xếp hạng hàng tuần thêm phần cạnh tranh và uy tín.
  
  Với sự tương tác thời gian thực, phần thưởng có thể thu thập và đặc quyền dành riêng cho người phát trực tiếp, King’s Duel được tối ưu hóa cho nội dung game trên TikTok, tương tác với khán giả và sự phát triển lan truyền.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        processor: "Intel i5-6500 or equivalent",
        memory: " 4 GB or more"
      },
      recommended: {
        os: " Windows 11 (64-bit)",
        processor: "Intel i5-12400 or higher",
        memory: "8 GB or more"
      }
    },
  },
  {
    id: 21,
    imageUrl: "/assets/League of Monsters_ Command. Conquer. Survive.jpg",
    platform: "Browser",
    translations: {
      en: {
        title: "League of Monsters: Command. Conquer. Survive",
        description: "Epic battles against monstrous foes in a thrilling multiplayer experience.",
        story: `Enter a world where powerful monsters clash in epic battles for supremacy. As a leader of a monster army, you must strategize, recruit fierce warriors, and defeat your rivals to claim victory.
  
  Fight alongside friends in multiplayer battles and prove your dominance in a game where only the strongest survive.`,
      },
      ar: {
        title: "League of Monsters: قُد قواتك، اغزُ عدوك، وابق على قيد الحياة",
        description: "معارك ملحمية ضد أعداء وحوش في تجربة متعددة اللاعبين مثيرة.",
        story: `ادخل إلى عالم تتصارع فيه الوحوش القوية في معارك ملحمية من أجل السيادة. بصفتك قائد جيش من الوحوش، عليك وضع الاستراتيجيات وتجنيد المحاربين الشجعان وهزيمة خصومك لتحقيق النصر.
  
  قاتل جنبًا إلى جنب مع أصدقائك في معارك متعددة اللاعبين وأثبت سيطرتك في لعبة لا ينجو فيها سوى الأقوى.`,
      },
      de: {
        title: "Liga der Ungeheuer: Command. Erobern. Überleben",
        description: "Epische Schlachten gegen monströse Feinde in einem spannenden Multiplayer-Erlebnis.",
        story: `Betreten Sie eine Welt, in der mächtige Monster in epischen Schlachten um die Vorherrschaft kämpfen. Als Anführer einer Monsterarmee müssen Sie strategisch vorgehen, wilde Krieger rekrutieren und Ihre Rivalen besiegen, um den Sieg zu erringen.
  
  Kämpfen Sie an der Seite von Freunden in Multiplayer-Schlachten und beweisen Sie Ihre Dominanz in einem Spiel, in dem nur die Stärksten überleben.`,
      },
      ru: {
        title: "League of Monsters: Командуй. Покоряй. Выживай",
        description: "Эпичные битвы с монструозными врагами в захватывающем многопользовательском режиме.",
        story: `Попади в мир, где мощные монстры сражаются в эпичных битвах за господство. Будучи лидером армии монстров, тебе предстоит стратегически планировать, вербовать яростных воинов и побеждать соперников, чтобы одержать победу.
  
  Сражайся вместе с друзьями в многопользовательских битвах и докажи своё превосходство в игре, где выживают только сильнейшие.`,
      },
      fr: {
        title: "Ligue des Monstres: Commandement. Conquérir. Survivre",
        description: "Des combats épiques contre des ennemis monstrueux dans une expérience multijoueur palpitante.",
        story: `Entrez dans un monde où de puissants monstres s'affrontent dans des batailles épiques pour la suprématie. En tant que chef d'une armée de monstres, vous devez élaborer une stratégie, recruter de féroces guerriers et vaincre vos rivaux pour remporter la victoire.
  
  Combattez aux côtés de vos amis dans des batailles multijoueurs et prouvez votre domination dans un jeu où seuls les plus forts survivent.`,
      },
      zh: {
        title: "怪物联盟：指挥。征服。生存",
        description: "在刺激的多人游戏体验中，与庞大的怪物展开史诗级战斗。",
        story: `进入一个强大怪物为争夺霸权而展开史诗级战斗的世界。作为怪物军队的领袖，你必须制定战略、招募凶猛战士并击败对手以赢得胜利。
  
  与好友并肩作战，在多人对战中证明你的统治地位，在这个只有最强者才能生存的游戏中脱颖而出。`,
      },
      vi: {
        title: "League of Monsters: Chỉ Huy. Chinh Phục. Sinh Tồn",
        description: "Những trận chiến kịch tính chống lại các quái vật khổng lồ trong trải nghiệm nhiều người chơi đầy hấp dẫn.",
        story: `Bước vào một thế giới nơi những quái vật hùng mạnh đối đầu trong các trận chiến dữ dội để tranh giành quyền lực tối cao. Là thủ lĩnh của đội quân quái vật, bạn cần lên chiến lược, chiêu mộ các chiến binh hung dữ và đánh bại đối thủ để giành chiến thắng.
  
  Chiến đấu cùng bạn bè trong các trận đấu nhiều người chơi và khẳng định sức mạnh của bạn trong một trò chơi nơi chỉ những kẻ mạnh nhất mới có thể tồn tại.`,
      },
    }, systemRequirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        processor: "Intel i5-6500 or equivalent",
        memory: " 4 GB or more"
      },
      recommended: {
        os: " Windows 11 (64-bit)",
        processor: "Intel i5-12400 or higher",
        memory: "8 GB or more"
      }
    },
  },
  {
    id: 22,
    imageUrl: "/assets/Legion Clash 2.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash 2: Command, Conquer, Dominate in Real Time!",
        description: "Real-time faction warfare where viewers influence the battlefield in a high-stakes LIVE strategy showdown.",
        story: `In Legion Clash 2, you become part of a dynamic live-streamed battlefield where the audience commands the tide of war. Choose between the Blue or Orange faction and unleash units, summon powerful heroes, and activate devastating skills through real-time gifting. 
  Build momentum, collect medals, and trigger army-wide assaults to crush enemy defenses. With scalable upgrades, strategic revivals, and fierce counterattack mechanics, victory depends on coordination, timing, and the strength of your legion’s support.`
      },
      ar: {
        title: "Legion Clash 2: قم بالقيادة والغزو والسيطرة في الوقت الفعلي!",
        description: "حرب بين الفصائل في الوقت الفعلي حيث يؤثر المشاهدون على ساحة المعركة في مواجهة استراتيجية مباشرة عالية المخاطر.",
        story: `في Legion Clash 2، تصبح جزءًا من ساحة معركة ديناميكية يتم بثها مباشرةً حيث يتحكم المشاهدون في مجرى الحرب. اختر بين الفصيل الأزرق أو البرتقالي وأطلق العنان للوحدات واستدعِ الأبطال الأقوياء وقم بتنشيط المهارات المدمرة من خلال الهدايا في الوقت الفعلي.
  اكتسب الزخم، واجمع الميداليات، وشن هجمات على نطاق الجيش لسحق دفاعات العدو. مع الترقيات القابلة للتطوير، والإنعاش الاستراتيجي، وآليات الهجوم المضاد الشرسة، يعتمد النصر على التنسيق والتوقيت وقوة دعم جيشك.`
      },
      de: {
        title: "Legion Clash 2: Kommandieren, erobern, dominieren in Echtzeit!",
        description: "Fraktionskriege in Echtzeit, bei denen die Zuschauer das Schlachtfeld in einem hochspannenden LIVE-Strategie-Showdown beeinflussen.",
        story: `In Legion Clash 2 werden Sie Teil eines dynamischen, per Live-Stream übertragenen Schlachtfelds, auf dem das Publikum das Kriegsgeschehen bestimmt. Entscheiden Sie sich für die blaue oder orangefarbene Fraktion und entfesseln Sie Einheiten, beschwören Sie mächtige Helden und aktivieren Sie verheerende Fähigkeiten durch Echtzeitgeschenke.
  Bauen Sie Schwung auf, sammeln Sie Medaillen und lösen Sie armeeweite Angriffe aus, um die gegnerische Verteidigung zu zerschlagen. Mit skalierbaren Upgrades, strategischen Wiederbelebungen und heftigen Gegenangriffsmechanismen hängt der Sieg von der Koordination, dem Timing und der Stärke der Unterstützung deiner Legion ab.`
      },
      ru: {
        title: "Legion Clash 2: Командуй, Завоёвывай, Доминируй в реальном времени!",
        description: "Битвы фракций в реальном времени, где зрители влияют на ход боя в напряжённой LIVE-стратегии.",
        story: `В Legion Clash 2 ты становишься частью динамичного, транслируемого в прямом эфире поля боя, где именно зрители определяют ход войны. Выбери фракцию — Синюю или Оранжевую — и выпускай юниты, призывай могущественных героев и активируй разрушительные навыки с помощью подарков в реальном времени.
  Наращивай темп, собирай медали и запускай масштабные атаки, чтобы сокрушить оборону противника. Благодаря масштабируемым улучшениям, тактическим воскрешениям и мощным механикам контратак, победа зависит от координации, тайминга и поддержки твоего легиона.`
      },
      fr: {
        title: "Legion Clash 2 : commandez, conquérez, dominez en temps réel !",
        description: "Guerre de factions en temps réel où les spectateurs influencent le champ de bataille dans une confrontation stratégique EN DIRECT à enjeux élevés.",
        story: `Dans Legion Clash 2, vous faites partie d'un champ de bataille dynamique diffusé en direct où le public contrôle le cours de la guerre. Choisissez entre la faction Bleue ou Orange et libérez des unités, invoquez des héros puissants et activez des compétences dévastatrices grâce à des cadeaux en temps réel. 
  Créez une dynamique, collectez des médailles et déclenchez des assauts à l’échelle de l’armée pour écraser les défenses ennemies. Avec des améliorations évolutives, des relances stratégiques et des mécanismes de contre-attaque féroces, la victoire dépend de la coordination, du timing et de la force du soutien de votre légion.`
      },
      zh: {
        title: "军团对决2：实时指挥，征服战场!",
        description: "实时派系战争，观众在高风险的直播策略对决中影响战场局势。",
        story: `在《军团对决2》中，你将置身于一个动态直播的战场，观众可指挥战争的走向。选择蓝军或橙军阵营，释放单位、召唤强大英雄，并通过实时赠礼激活毁灭性技能。
  积攒势头，收集奖章，触发全军突袭摧毁敌方防线。凭借可升级的装备、战略复活机制和激烈的反击系统，胜利取决于团队协作、时机把握以及军团支援的强度。`
      },
      vi: {
        title: "Legion Clash 2: Chỉ Huy, Chinh Phục, Thống Trị Trong Thời Gian Thực!",
        description: "Chiến tranh phe phái diễn ra trực tiếp theo thời gian thực, nơi người xem có thể tác động trực tiếp đến chiến trường trong một trận đấu chiến thuật kịch tính.",
        story: `Trong Legion Clash 2, bạn sẽ bước vào chiến trường trực tuyến đầy biến động, nơi khán giả trực tiếp điều khiển diễn biến cuộc chiến. Hãy lựa chọn giữa phe Xanh hoặc Cam và triển khai đơn vị, triệu hồi các anh hùng mạnh mẽ, cùng kích hoạt kỹ năng tàn phá thông qua cơ chế tặng quà theo thời gian thực.
  Tăng tốc lực lượng, thu thập huy chương và phát động các đợt tấn công toàn diện để phá vỡ phòng tuyến đối phương. Với hệ thống nâng cấp linh hoạt, cơ chế hồi sinh chiến lược và phản công quyết liệt, chiến thắng phụ thuộc vào sự phối hợp, thời điểm, và mức độ hỗ trợ từ liên minh của bạn.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 or above",
        processor: "Intel 10th Gen i5 or equivalent",
        memory: "16 GB RAM"
      },
      recommended: {
        os: "Windows 10 or above",
        processor: "Intel 12th Gen i5 or better",
        memory: "32 GB RAM"
      }
    }
  },
  {
    id: 23,
    imageUrl: "/assets/Legion Clash.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash: Summon, Strike, and Shatter the Frontline",
        description: "Pick a side, wreck the city, & rule the stream",
        story: `Step into Legion Clash, a livestream warzone where viewers drop troops, heroes, and high-tier units in real time. 
  Join the Orange or Blue camp and take over the fight with digital cards that summon cavalry, catapults, or mythical warriors. 
  Drop footmen with likes, summon heroes through gifts, and build barracks that keep your side pushing forward.
  Every gift turns the tide. Every card is a weapon. Want chaos? Stir it. Want victory? Earn it.
  The city won't fall on its own. Make sure you're the one who breaks it.
  Own the moment. Push the front. Claim the win.`,
      },
      ar: {
        title: "Legion Clash: استدع، خطط نحو الانتصار",
        description: "اختر جانبًا، ودمر المدينة.",
        story: `ادخل إلى Legion Clash، منطقة حرب مباشرة حيث يقوم المشاهدون بإسقاط القوات والأبطال والوحدات عالية المستوى في الوقت الفعلي.
  انضم إلى المعسكر البرتقالي أو الأزرق واستولِ على المعركة باستخدام بطاقات رقمية تستدعي الفرسان والمنجنيق أو المحاربين الأسطوريين.
  ألقِ الجنود باستخدام الإعجابات، واستدعِ الأبطال من خلال الهدايا، وقم ببناء ثكنات تحافظ على تقدم جانبك.
  كل هدية تقلب الموازين. كل بطاقة هي سلاح. تريد الفوضى؟ قم بإثارة الفوضى. تريد النصر؟ اكسبه.
  المدينة لن تسقط من تلقاء نفسها. تأكد من أنك أنت من سيقوم بتدميرها.
  امتلك اللحظة. ادفع الجبهة. احصل على النصر.`,
      },
      de: {
        title: "Legion Clash: Beschwöre, schlage zu und zerschlage die Frontlinie",
        description: "Wähle eine Seite, zerstöre die Stadt und beherrsche den Strom",
        story: `Betreten Sie Legion Clash, ein Livestream-Kriegsgebiet, in dem die Zuschauer Truppen, Helden und hochrangige Einheiten in Echtzeit abwerfen. 
  Schließen Sie sich dem orangen oder blauen Lager an und übernehmen Sie den Kampf mit digitalen Karten, die Kavallerie, Katapulte oder mythische Krieger beschwören. 
  Setzen Sie Lakaien mit Likes ab, beschwören Sie Helden mit Geschenken und bauen Sie Kasernen, um Ihre Seite voranzubringen.
  Jedes Geschenk wendet das Blatt. Jede Karte ist eine Waffe. Willst du Chaos? Rühr es an. Willst du den Sieg? Verdiene ihn.
  Die Stadt wird nicht von alleine fallen. Sorge dafür, dass du derjenige bist, der sie zerbricht.
  Mach dir den Moment zu eigen. Dränge an die Front. Beanspruche den Sieg.`,
      },
      ru: {
        title: "Legion Clash: Призывай, Ударяй и Разноси Передовую",
        description: "Выбери сторону, разрушь город и захвати эфир",
        story: `Добро пожаловать в Legion Clash — поле битвы в прямом эфире, где зрители в реальном времени сбрасывают войска, героев и элитные юниты.
  Присоединяйся к Оранжевому или Синему лагерю и бери бой под контроль с помощью цифровых карт, вызывающих кавалерию, катапульты или мифических воинов.
  Ставь лайки, чтобы сбрасывать пехоту, отправляй подарки, чтобы призывать героев, и строй казармы, которые будут продвигать твою армию вперёд.
  Каждый подарок меняет ход сражения. Каждая карта — это оружие. Хочешь хаоса? Создай его. Хочешь победы? Добудь её.
  Город сам не падёт. Убедись, что именно ты его разрушишь.
  Захвати момент. Проди фронт. Забери победу.`,
      },
      fr: {
        title: "Legion Clash : invoquez, frappez et brisez la ligne de front",
        description: "Choisissez un camp, détruisez la ville et dirigez le ruisseau",
        story: `Entrez dans Affrontement de Légion, une zone de guerre en direct où les téléspectateurs déposent des troupes, des héros et des unités de haut niveau en temps réel. 
  Rejoignez le camp Orange ou Bleu et reprenez le combat avec des cartes numériques qui invoquent de la cavalerie, des catapultes ou des guerriers mythiques. 
  Lâchez des fantassins avec des likes, invoquez des héros grâce à des cadeaux et construisez des casernes qui permettent à votre camp d'avancer.
  Chaque don inverse la tendance. Chaque carte est une arme. Vous voulez le chaos ? Remuez-le. Envie de victoire ? Gagnez-le.
  La ville ne tombera pas d'elle-même. Assurez-vous que c'est vous qui le cassez.
  Possédez le moment. Poussez l'avant. Réclamez la victoire.`,
      },
      zh: {
        title: "军团对决：召唤、打击、粉碎前线",
        description: "选择阵营，摧毁城市，统治直播间",
        story: `踏入《军团对决》，一个实时直播的战场，观众可以实时部署部队、英雄和高级单位。
  加入橙色或蓝色阵营，使用数字卡牌召唤骑兵、投石车或神话战士，掌控战局。
  用点赞投放步兵，通过礼物召唤英雄，建造兵营让你的阵营持续推进。
  每份礼物都能扭转战局。每张卡牌都是武器。想要混乱？搅动它。想要胜利？靠自己争取。
  城市不会自行崩溃。确保你是那个摧毁它的人。
  掌控时刻。推进前线。赢得胜利。`,
      },
      vi: {
        title: "Legion Clash: Triệu Hồi, Tấn Công, Phá Vỡ Tiền Tuyến",
        description: "Chọn phe, tàn phá thành phố và làm chủ luồng phát trực tiếp",
        story: `Bước vào Legion Clash – vùng chiến sự được phát trực tiếp, nơi khán giả có thể thả quân, triệu hồi anh hùng và triển khai các đơn vị cấp cao theo thời gian thực.
  Hãy gia nhập phe Cam hoặc Xanh và nắm quyền kiểm soát trận chiến bằng những lá bài kỹ thuật số có thể gọi kỵ binh, máy bắn đá hoặc chiến binh huyền thoại.
  Thả lính bộ bằng lượt thích, triệu hồi anh hùng bằng quà tặng, và xây dựng doanh trại để giữ thế tấn công liên tục cho phe của bạn.
  Mỗi món quà có thể xoay chuyển cục diện. Mỗi lá bài là một vũ khí. Muốn hỗn loạn? Tạo ra nó. Muốn chiến thắng? Hãy giành lấy.
  Thành phố không tự sụp đổ. Hãy là người khiến nó gục ngã.
  Làm chủ thời điểm. Dẫn đầu mặt trận. Giành chiến thắng.`,
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4160 or AMD FX-4300",
        memory: "4 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 24,
    imageUrl: "/assets/Little Cat Fishing_ Pull, Compete, and Conquer!.jpg",
    platform: "Mobile",
    translations: {
      en: {
        title: "Little Cat Fishing: Pull, Compete, and Conquer!",
        description: "Join cute cats in an adorable fishing competition where skill meets strategy",
        story: `Dive into the charming world of Little Cat Fishing, where adorable feline friends compete in strategic fishing challenges. Master different fishing techniques and collect rare catches!`
      },
      de: {
        title: "Kleine Katzen Angeln: Ziehen, Wetteifern und Erobern!",
        description: "Schließe dich niedlichen Katzen in einem entzückenden Angelwettbewerb an, wo Geschick auf Strategie trifft",
        story: `Tauche ein in die bezaubernde Welt von Kleine Katzen Angeln, wo entzückende Katzenfreunde in strategischen Angelherausforderungen wetteifern. Beherrsche verschiedene Angeltechniken und sammle seltene Fänge!`
      },
      fr: {
        title: "Petits Chats Pêcheurs : Tirer, Rivaliser et Conquérir !",
        description: "Rejoignez des chats mignons dans une adorable compétition de pêche où l'habileté rencontre la stratégie",
        story: `Plongez dans le monde charmant des Petits Chats Pêcheurs, où d'adorables amis félins s'affrontent dans des défis de pêche stratégiques. Maîtrisez différentes techniques de pêche et collectez des prises rares !`
      },
      ru: {
        title: "Котята на Рыбалке: Тяни, Соревнуйся и Побеждай!",
        description: "Присоединяйтесь к милым котятам в очаровательном рыболовном соревновании, где мастерство встречается со стратегией",
        story: `Погрузитесь в очаровательный мир Котят на Рыбалке, где милые пушистые друзья соревнуются в стратегических рыболовных испытаниях. Освойте различные техники рыбалки и соберите редкие уловы!`
      },
      zh: {
        title: "小猫钓鱼：拉竿、竞技、制胜！",
        description: "在这个技巧与策略并重的可爱钓鱼比赛中与萌猫一起参与",
        story: `潜入小猫钓鱼的迷人世界，可爱的猫咪朋友们在战略性钓鱼挑战中展开竞争。掌握不同的钓鱼技巧，收集稀有渔获！`
      },
      ar: {
        title: "صيد القطط الصغيرة: اسحب، نافس، وانتصر!",
        description: "انضم إلى القطط اللطيفة في منافسة صيد السمك الجذابة حيث تلتقي المهارة بالاستراتيجية",
        story: `اغمر نفسك في عالم صيد القطط الصغيرة الساحر، حيث يتنافس الأصدقاء القطط اللطفاء في تحديات الصيد الاستراتيجية. أتقن تقنيات الصيد المختلفة واجمع الصيد النادر!`
      },
      vi: {
        title: "Mèo Con Câu Cá: Kéo, Thi Đấu và Chinh Phục!",
        description: "Tham gia cùng những chú mèo dễ thương trong cuộc thi câu cá đáng yêu nơi kỹ năng gặp chiến thuật",
        story: `Đắm mình trong thế giới quyến rũ của Mèo Con Câu Cá, nơi những người bạn mèo đáng yêu cạnh tranh trong các thử thách câu cá chiến lược. Làm chủ các kỹ thuật câu cá khác nhau và thu thập những mẻ câu hiếm!`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Android 5.0 or iOS 11.0",
        processor: "1.5 GHz Quad-core",
        memory: "2 GB RAM"
      },
      recommended: {
        os: "Android 8.0 or iOS 13.0",
        processor: "2.0 GHz Octa-core",
        memory: "4 GB RAM"
      }
    }
  },
  {
    id: 25,
    imageUrl: "/assets/Mars Colliding with Earth 2_ Stream. Battle. Conquer Worlds.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Mars Colliding with Earth 2: Stream. Battle. Conquer Worlds",
        description: "Lead your faction in an interplanetary war where Earth and Mars collide",
        story: `In this epic sequel, command your forces in a war that spans two planets. Use advanced technology and strategic warfare to determine the fate of both worlds.`
      },
      de: {
        title: "Mars kollidiert mit der Erde 2: Streamen. Kämpfen. Welten erobern",
        description: "Führe deine Fraktion in einem interplanetaren Krieg, in dem Erde und Mars aufeinanderprallen",
        story: `In dieser epischen Fortsetzung befehligst du deine Streitkräfte in einem Krieg, der sich über zwei Planeten erstreckt. Nutze fortschrittliche Technologie und strategische Kriegsführung, um das Schicksal beider Welten zu bestimmen.`
      },
      fr: {
        title: "Mars entre en collision avec la Terre 2 : Stream. Combat. Conquête des Mondes",
        description: "Dirigez votre faction dans une guerre interplanétaire où la Terre et Mars s'affrontent",
        story: `Dans cette suite épique, commandez vos forces dans une guerre qui s'étend sur deux planètes. Utilisez la technologie avancée et la guerre stratégique pour déterminer le destin des deux mondes.`
      },
      ru: {
        title: "Столкновение Марса с Землей 2: Стрим. Битва. Завоевание Миров",
        description: "Возглавьте свою фракцию в межпланетной войне, где сталкиваются Земля и Марс",
        story: `В этом эпическом продолжении командуйте своими силами в войне, охватывающей две планеты. Используйте передовые технологии и стратегическую войну, чтобы определить судьбу обоих миров.`
      },
      zh: {
        title: "火星撞地球2：直播·战斗·征服世界",
        description: "在地球与火星碰撞的星际战争中领导你的阵营",
        story: `在这部史诗续作中，指挥你的部队参与跨越两个星球的战争。运用先进技术和战略战争来决定两个世界的命运。`
      },
      ar: {
        title: "اصطدام المريخ بالأرض 2: بث. معركة. غزو العوالم",
        description: "قُد فصيلتك في حرب بين الكواكب حيث تصطدم الأرض والمريخ",
        story: `في هذا الجزء الملحمي، قُد قواتك في حرب تمتد عبر كوكبين. استخدم التكنولوجيا المتقدمة والحرب الاستراتيجية لتحديد مصير العالمين.`
      },
      vi: {
        title: "Sao Hỏa Va Chạm Trái Đất 2: Stream. Chiến Đấu. Chinh Phục Thế Giới",
        description: "Lãnh đạo phe phái của bạn trong cuộc chiến liên hành tinh nơi Trái Đất và Sao Hỏa va chạm",
        story: `Trong phần tiếp theo hoành tráng này, chỉ huy lực lượng của bạn trong cuộc chiến trải dài hai hành tinh. Sử dụng công nghệ tiên tiến và chiến tranh chiến lược để quyết định số phận của cả hai thế giới.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        memory: "12 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-9700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 26,
    imageUrl: "/assets/Martial Duel II_ The King_s Invasion.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Martial Duel II: The King's Invasion",
        description: "Master ancient martial arts in this intense fighting game sequel",
        story: `Return to the world of martial arts mastery in this epic sequel. Face new challenges as you defend your realm against the invading King's forces using traditional combat techniques.`
      },
      de: {
        title: "Kampfkunst-Duell II: Die Invasion des Königs",
        description: "Meistere alte Kampfkünste in dieser intensiven Kampfspiel-Fortsetzung",
        story: `Kehre zurück in die Welt der Kampfkunst-Meisterschaft in dieser epischen Fortsetzung. Stelle dich neuen Herausforderungen, während du dein Reich mit traditionellen Kampftechniken gegen die eindringenden Streitkräfte des Königs verteidigst.`
      },
      fr: {
        title: "Duel Martial II : L'Invasion du Roi",
        description: "Maîtrisez les arts martiaux anciens dans cette suite intense de jeu de combat",
        story: `Retournez dans le monde de la maîtrise des arts martiaux dans cette suite épique. Affrontez de nouveaux défis en défendant votre royaume contre les forces envahissantes du Roi en utilisant des techniques de combat traditionnelles.`
      },
      ru: {
        title: "Боевая Дуэль II: Вторжение Короля",
        description: "Овладейте древними боевыми искусствами в этом напряженном продолжении файтинга",
        story: `Вернитесь в мир мастерства боевых искусств в этом эпическом продолжении. Встречайте новые вызовы, защищая свое царство от вторгающихся сил Короля, используя традиционные техники боя.`
      },
      zh: {
        title: "武术对决II：王者入侵",
        description: "在这款激烈的格斗游戏续作中掌握古代武术",
        story: `在这部史诗续作中重返武术大师的世界。使用传统战斗技巧面对新的挑战，抵御入侵的王者军队。`
      },
      ar: {
        title: "المبارزة القتالية 2: غزو الملك",
        description: "أتقن فنون القتال القديمة في هذه النسخة المكثفة من لعبة القتال",
        story: `عُد إلى عالم إتقان فنون القتال في هذا الجزء الملحمي. واجه تحديات جديدة أثناء دفاعك عن مملكتك ضد قوات الملك الغازية باستخدام تقنيات القتال التقليدية.`
      },
      vi: {
        title: "Quyết Đấu Võ Thuật II: Cuộc Xâm Lược của Nhà Vua",
        description: "Làm chủ võ thuật cổ xưa trong phần tiếp theo của trò chơi đối kháng gay cấn này",
        story: `Trở lại thế giới của bậc thầy võ thuật trong phần tiếp theo hoành tráng này. Đối mặt với những thách thức mới khi bạn bảo vệ vương quốc của mình chống lại lực lượng xâm lược của Nhà Vua bằng các kỹ thuật chiến đấu truyền thống.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core i5-4460 or AMD FX-6300",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-7700 or AMD Ryzen 5 1600",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 27,
    imageUrl: "/assets/Minecraft Arena_ Survive the Chaos, Rule the Arena.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Minecraft Arena: Survive the Chaos, Rule the Arena",
        description: "Battle for supremacy in this action-packed Minecraft-style arena combat game",
        story: `Enter a blocky battlefield where strategy and survival skills determine your fate. Build, fight, and conquer in intense arena matches.`
      },
      de: {
        title: "Minecraft Arena: Überlebe das Chaos, Beherrsche die Arena",
        description: "Kämpfe um die Vorherrschaft in diesem actiongeladenen Minecraft-artigen Arena-Kampfspiel",
        story: `Betritt ein blockiges Schlachtfeld, wo Strategie und Überlebensfähigkeiten dein Schicksal bestimmen. Baue, kämpfe und erobere in intensiven Arena-Matches.`
      },
      fr: {
        title: "Arène Minecraft : Survivez au Chaos, Dominez l'Arène",
        description: "Battez-vous pour la suprématie dans ce jeu de combat d'arène style Minecraft plein d'action",
        story: `Entrez dans un champ de bataille cubique où la stratégie et les compétences de survie déterminent votre destin. Construisez, combattez et conquérez dans des matchs d'arène intenses.`
      },
      ru: {
        title: "Minecraft Арена: Выживи в Хаосе, Правь Ареной",
        description: "Сражайся за превосходство в этой насыщенной действием боевой арене в стиле Minecraft",
        story: `Войдите на блочное поле битвы, где стратегия и навыки выживания определяют вашу судьбу. Стройте, сражайтесь и побеждайте в интенсивных аренных матчах.`
      },
      zh: {
        title: "我的世界竞技场：在混沌中生存，统治竞技场",
        description: "在这款充满动作的我的世界风格竞技场战斗游戏中争夺霸权",
        story: `进入一个由策略和生存技能决定命运的方块战场。在激烈的竞技场比赛中建造、战斗和征服。`
      },
      ar: {
        title: "ساحة ماينكرافت: انجُ من الفوضى، احكم الساحة",
        description: "قاتل من أجل السيادة في هذه اللعبة القتالية المليئة بالحركة على طراز ماينكرافت",
        story: `ادخل ساحة معركة مكعبة حيث تحدد الاستراتيجية ومهارات البقاء مصيرك. ابنِ وقاتل واغزُ في مباريات ساحة مكثفة.`
      },
      vi: {
        title: "Đấu Trường Minecraft: Sống Sót Trong Hỗn Loạn, Thống Trị Đấu Trường",
        description: "Chiến đấu giành quyền thống trị trong trò chơi đấu trường phong cách Minecraft đầy hành động này",
        story: `Bước vào chiến trường khối vuông nơi chiến lược và kỹ năng sinh tồn quyết định số phận của bạn. Xây dựng, chiến đấu và chinh phục trong các trận đấu đấu trường gay cấn.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i3-3210 or AMD A8-7600",
        memory: "4 GB RAM"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4690 or AMD A10-7800",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 28,
    imageUrl: "/assets/Mole World Battle Adventure.jpg",
    platform: "Mobile",
    translations: {
      en: {
        title: "Mole World Battle Adventure",
        description: "Embark on an underground adventure in this cute but competitive mole-themed battle game",
        story: `Dig, battle, and explore in the charming world of competitive mole warriors. Use your digging skills and special abilities to outmaneuver opponents in underground arenas.`
      },
      de: {
        title: "Maulwurf-Welt Kampfabenteuer",
        description: "Begib dich auf ein unterirdisches Abenteuer in diesem niedlichen aber wettbewerbsorientierten Maulwurf-Kampfspiel",
        story: `Grabe, kämpfe und erkunde in der charmanten Welt der wetteifernden Maulwurf-Krieger. Nutze deine Grabfähigkeiten und Spezialfähigkeiten, um Gegner in unterirdischen Arenen auszumanövrieren.`
      },
      fr: {
        title: "Aventure de Combat du Monde des Taupes",
        description: "Embarquez pour une aventure souterraine dans ce jeu de combat mignon mais compétitif sur le thème des taupes",
        story: `Creusez, combattez et explorez dans le monde charmant des guerriers taupes compétitifs. Utilisez vos compétences de creusement et vos capacités spéciales pour surpasser vos adversaires dans des arènes souterraines.`
      },
      ru: {
        title: "Боевые Приключения в Мире Кротов",
        description: "Отправьтесь в подземное приключение в этой милой, но соревновательной боевой игре про кротов",
        story: `Копайте, сражайтесь и исследуйте в очаровательном мире соревнующихся кротов-воинов. Используйте свои навыки копания и особые способности, чтобы перехитрить противников в подземных аренах.`
      },
      zh: {
        title: "鼹鼠世界战斗冒险",
        description: "在这款可爱但富有竞争性的鼹鼠主题战斗游戏中展开地下冒险",
        story: `在充满魅力的竞技鼹鼠战士世界中挖掘、战斗和探索。使用你的挖掘技能和特殊能力在地下竞技场中战胜对手。`
      },
      ar: {
        title: "مغامرة معركة عالم الخلد",
        description: "انطلق في مغامرة تحت الأرض في هذه اللعبة القتالية اللطيفة ولكن التنافسية بموضوع الخلد",
        story: `احفر وقاتل واستكشف في عالم محاربي الخلد التنافسي الساحر. استخدم مهارات الحفر وقدراتك الخاصة للتفوق على الخصوم في الساحات تحت الأرض.`
      },
      vi: {
        title: "Phiêu Lưu Chiến Đấu Thế Giới Chuột Chũi",
        description: "Bắt đầu cuộc phiêu lưu dưới lòng đất trong trò chơi chiến đấu dễ thương nhưng đầy tính cạnh tranh với chủ đề chuột chũi",
        story: `Đào, chiến đấu và khám phá trong thế giới quyến rũ của các chiến binh chuột chũi đầy tính cạnh tranh. Sử dụng kỹ năng đào và khả năng đặc biệt để vượt qua đối thủ trong các đấu trường dưới lòng đất.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Android 5.0 or iOS 11.0",
        processor: "1.5 GHz Quad-core",
        memory: "2 GB RAM"
      },
      recommended: {
        os: "Android 8.0 or iOS 13.0",
        processor: "2.0 GHz Octa-core",
        memory: "4 GB RAM"
      }
    }
  },
  {
    id: 29,
    imageUrl: "/assets/Props Avalanche_ Climb Fast, Dodge Chaos, Win Live!.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Props Avalanche: Climb Fast, Dodge Chaos, Win Live!",
        description: "Race against time and opponents in this frantic prop-climbing challenge",
        story: `Scale an ever-changing mountain of props while dodging obstacles and competing against other players in real-time. Every decision counts in this fast-paced vertical challenge!`
      },
      de: {
        title: "Requisiten-Lawine: Schnell Klettern, Chaos Ausweichen, Live Gewinnen!",
        description: "Wettkampf gegen Zeit und Gegner in dieser hektischen Requisiten-Kletter-Herausforderung",
        story: `Erklimme einen sich ständig verändernden Berg von Requisiten, während du Hindernissen ausweichst und in Echtzeit gegen andere Spieler antrittst. Jede Entscheidung zählt in dieser schnellen vertikalen Herausforderung!`
      },
      fr: {
        title: "Avalanche d'Accessoires : Grimpez Vite, Évitez le Chaos, Gagnez en Direct !",
        description: "Faites la course contre le temps et les adversaires dans ce défi frénétique d'escalade d'accessoires",
        story: `Escaladez une montagne d'accessoires en constante évolution tout en évitant les obstacles et en affrontant d'autres joueurs en temps réel. Chaque décision compte dans ce défi vertical rapide !`
      },
      ru: {
        title: "Лавина Предметов: Быстро Карабкайся, Уворачивайся от Хаоса, Побеждай в Прямом Эфире!",
        description: "Соревнуйтесь со временем и противниками в этом безумном испытании по карабканью по предметам",
        story: `Взбирайтесь по постоянно меняющейся горе предметов, уворачиваясь от препятствий и соревнуясь с другими игроками в реальном времени. Каждое решение имеет значение в этом быстром вертикальном испытании!`
      },
      zh: {
        title: "道具雪崩：快速攀爬，躲避混乱，实时制胜！",
        description: "在这个疯狂的道具攀爬挑战中与时间和对手赛跑",
        story: `在不断变化的道具之山上攀爬，同时躲避障碍物并与其他玩家实时竞争。在这个快节奏的垂直挑战中，每个决定都至关重要！`
      },
      ar: {
        title: "انهيار الدعائم: تسلق سريع، تجنب الفوضى، فوز مباشر!",
        description: "سباق ضد الوقت والخصوم في هذا التحدي المحموم لتسلق الدعائم",
        story: `تسلق جبلاً متغيراً باستمرار من الدعائم مع تجنب العقبات والتنافس مع لاعبين آخرين في الوقت الفعلي. كل قرار مهم في هذا التحدي العمودي السريع!`
      },
      vi: {
        title: "Thác Đổ Đạo Cụ: Leo Nhanh, Né Tránh Hỗn Loạn, Chiến Thắng Trực Tiếp!",
        description: "Đua với thời gian và đối thủ trong thử thách leo trèo đạo cụ điên cuồng này",
        story: `Leo lên ngọn núi đạo cụ luôn thay đổi trong khi né tránh chướng ngại vật và cạnh tranh với người chơi khác trong thời gian thực. Mỗi quyết định đều quan trọng trong thử thách theo chiều dọc nhanh này!`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i3-3220 or AMD FX-4350",
        memory: "4 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-6600 or AMD Ryzen 3 1300X",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 30,
    imageUrl: "/assets/Props Cleaner_ Tidy Up Fast, Before Chaos Hits!.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Props Cleaner: Tidy Up Fast, Before Chaos Hits!",
        description: "Clean up the chaos in this fast-paced tidying challenge",
        story: `Race against time to organize and clean various environments before chaos takes over. Use special cleaning powers and compete with other players in real-time!`
      },
      de: {
        title: "Requisiten-Putzer: Schnell Aufräumen, Bevor das Chaos Zuschlägt!",
        description: "Räume das Chaos in dieser schnellen Aufräum-Herausforderung auf",
        story: `Wetteifere gegen die Zeit, um verschiedene Umgebungen zu organisieren und zu reinigen, bevor das Chaos überhand nimmt. Nutze spezielle Reinigungskräfte und tritt in Echtzeit gegen andere Spieler an!`
      },
      fr: {
        title: "Nettoyeur d'Accessoires : Rangez Vite, Avant le Chaos !",
        description: "Nettoyez le chaos dans ce défi de rangement rapide",
        story: `Faites la course contre le temps pour organiser et nettoyer différents environnements avant que le chaos ne prenne le dessus. Utilisez des pouvoirs de nettoyage spéciaux et affrontez d'autres joueurs en temps réel !`
      },
      ru: {
        title: "Уборщик Реквизита: Убирайся Быстро, Пока Не Настал Хаос!",
        description: "Уберите хаос в этом быстром испытании по уборке",
        story: `Соревнуйтесь со временем, чтобы организовать и очистить различные среды, прежде чем воцарится хаос. Используйте особые силы очистки и соревнуйтесь с другими игроками в реальном времени!`
      },
      zh: {
        title: "道具清洁工：快速整理，混乱来临前！",
        description: "在这个快节奏的整理挑战中清理混乱",
        story: `与时间赛跑，在混乱接管之前组织和清理各种环境。使用特殊清洁能力并与其他玩家实时竞争！`
      },
      ar: {
        title: "منظف الدعائم: نظف بسرعة، قبل أن تضرب الفوضى!",
        description: "نظف الفوضى في هذا التحدي السريع للترتيب",
        story: `سباق ضد الوقت لتنظيم وتنظيف البيئات المختلفة قبل أن تسيطر الفوضى. استخدم قوى التنظيف الخاصة وتنافس مع لاعبين آخرين في الوقت الفعلي!`
      },
      vi: {
        title: "Người Dọn Dẹp Đạo Cụ: Dọn Dẹp Nhanh, Trước Khi Hỗn Loạn Ập Đến!",
        description: "Dọn dẹp hỗn loạn trong thử thách sắp xếp nhanh này",
        story: `Đua với thời gian để tổ chức và làm sạch các môi trường khác nhau trước khi hỗn loạn chiếm ưu thế. Sử dụng sức mạnh làm sạch đặc biệt và cạnh tranh với người chơi khác trong thời gian thực!`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i3-3220 or AMD FX-4350",
        memory: "4 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-6600 or AMD Ryzen 3 1300X",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 31,
    imageUrl: "/assets/Protect the Princess_ The Crown Will Choose.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Protect the Princess: The Crown Will Choose",
        description: "Guard the princess through challenging battles and strategic decisions",
        story: `Take on the role of a royal guardian in this strategic defense game. Make crucial decisions that will affect the kingdom's fate while protecting the princess from various threats.`
      },
      de: {
        title: "Beschütze die Prinzessin: Die Krone wird Wählen",
        description: "Beschütze die Prinzessin durch herausfordernde Kämpfe und strategische Entscheidungen",
        story: `Übernimm die Rolle eines königlichen Wächters in diesem strategischen Verteidigungsspiel. Triff wichtige Entscheidungen, die das Schicksal des Königreichs beeinflussen, während du die Prinzessin vor verschiedenen Bedrohungen schützt.`
      },
      fr: {
        title: "Protégez la Princesse : La Couronne Choisira",
        description: "Gardez la princesse à travers des batailles difficiles et des décisions stratégiques",
        story: `Prenez le rôle d'un gardien royal dans ce jeu de défense stratégique. Prenez des décisions cruciales qui affecteront le destin du royaume tout en protégeant la princesse de diverses menaces.`
      },
      ru: {
        title: "Защити Принцессу: Корона Сделает Выбор",
        description: "Охраняйте принцессу через сложные битвы и стратегические решения",
        story: `Возьмите на себя роль королевского стража в этой стратегической игре защиты. Принимайте важные решения, которые повлияют на судьбу королевства, защищая принцессу от различных угроз.`
      },
      zh: {
        title: "保护公主：王冠将选择",
        description: "通过具有挑战性的战斗和战略决策保护公主",
        story: `在这个战略防御游戏中担任皇家守卫的角色。在保护公主免受各种威胁的同时，做出影响王国命运的关键决定。`
      },
      ar: {
        title: "حماية الأميرة: التاج سيختار",
        description: "احمِ الأميرة من خلال المعارك الصعبة والقرارات الاستراتيجية",
        story: `تولى دور الحارس الملكي في هذه اللعبة الدفاعية الاستراتيجية. اتخذ قرارات حاسمة ستؤثر على مصير المملكة أثناء حماية الأميرة من التهديدات المختلفة.`
      },
      vi: {
        title: "Bảo Vệ Công Chúa: Vương Miện Sẽ Chọn",
        description: "Bảo vệ công chúa qua những trận chiến đầy thử thách và quyết định chiến lược",
        story: `Đảm nhận vai trò người bảo vệ hoàng gia trong trò chơi phòng thủ chiến lược này. Đưa ra những quyết định quan trọng sẽ ảnh hưởng đến số phận của vương quốc trong khi bảo vệ công chúa khỏi các mối đe dọa khác nhau.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i3-4160 or AMD FX-6300",
        memory: "6 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 32,
    imageUrl: "/assets/Ragnarok_ Fight for the Final Victory!.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Ragnarok: Fight for the Final Victory!",
        description: "Battle through Norse mythology in this epic action-adventure",
        story: `Embark on an epic journey through the nine realms of Norse mythology. Fight alongside gods and heroes as you prepare for the final battle of Ragnarök.`
      },
      de: {
        title: "Ragnarök: Kämpfe für den Finalen Sieg!",
        description: "Kämpfe durch die nordische Mythologie in diesem epischen Action-Adventure",
        story: `Begib dich auf eine epische Reise durch die neun Welten der nordischen Mythologie. Kämpfe an der Seite von Göttern und Helden, während du dich auf die finale Schlacht von Ragnarök vorbereitest.`
      },
      fr: {
        title: "Ragnarök : Combattez pour la Victoire Finale !",
        description: "Battez-vous à travers la mythologie nordique dans cette aventure d'action épique",
        story: `Embarquez pour un voyage épique à travers les neuf royaumes de la mythologie nordique. Combattez aux côtés des dieux et des héros alors que vous vous préparez pour la bataille finale du Ragnarök.`
      },
      ru: {
        title: "Рагнарёк: Битва за Финальную Победу!",
        description: "Сражайтесь через скандинавскую мифологию в этом эпическом экшн-приключении",
        story: `Отправьтесь в эпическое путешествие через девять миров скандинавской мифологии. Сражайтесь бок о бок с богами и героями, готовясь к финальной битве Рагнарёка.`
      },
      zh: {
        title: "诸神黄昏：为最终胜利而战！",
        description: "在这场史诗级动作冒险中穿越北欧神话",
        story: `踏上穿越北欧神话九界的史诗之旅。与众神和英雄并肩作战，为诸神黄昏的最终之战做准备。`
      },
      ar: {
        title: "راغناروك: القتال من أجل النصر النهائي!",
        description: "قاتل عبر الأساطير الشمالية في هذه المغامرة الملحمية",
        story: `انطلق في رحلة ملحمية عبر العوالم التسعة للأساطير الشمالية. قاتل إلى جانب الآلهة والأبطال بينما تستعد للمعركة النهائية لراغناروك.`
      },
      vi: {
        title: "Ragnarok: Chiến Đấu Cho Chiến Thắng Cuối Cùng!",
        description: "Chiến đấu qua thần thoại Bắc Âu trong cuộc phiêu lưu hành động hoành tráng này",
        story: `Bắt đầu hành trình hoành tráng qua chín cõi của thần thoại Bắc Âu. Chiến đấu bên cạnh các vị thần và anh hùng khi bạn chuẩn bị cho trận chiến cuối cùng của Ragnarök.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },

  {
    id: 33,
    imageUrl: "/assets/Three Kingdoms Brawl_ Real-Time Faction War.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Three Kingdoms Brawl: Real-Time Faction War",
        description: "Command legendary heroes in epic real-time battles set in ancient China",
        story: `Lead your chosen faction to victory in this intense real-time strategy game based on the Three Kingdoms period. Deploy legendary warriors, execute tactical maneuvers, and shape the future of ancient China.`
      },
      de: {
        title: "Drei-Reiche-Kampf: Echtzeit-Fraktionskrieg",
        description: "Befehlige legendäre Helden in epischen Echtzeit-Schlachten im alten China",
        story: `Führe deine gewählte Fraktion in diesem intensiven Echtzeit-Strategiespiel aus der Zeit der Drei Reiche zum Sieg. Setze legendäre Krieger ein, führe taktische Manöver aus und gestalte die Zukunft des alten China.`
      },
      fr: {
        title: "Bataille des Trois Royaumes : Guerre de Faction en Temps Réel",
        description: "Commandez des héros légendaires dans des batailles épiques en temps réel dans la Chine ancienne",
        story: `Menez votre faction choisie à la victoire dans ce jeu de stratégie intense en temps réel basé sur la période des Trois Royaumes. Déployez des guerriers légendaires, exécutez des manœuvres tactiques et façonnez l'avenir de la Chine ancienne.`
      },
      ru: {
        title: "Битва Трёх Королевств: Война Фракций в Реальном Времени",
        description: "Командуйте легендарными героями в эпических сражениях в реальном времени в древнем Китае",
        story: `Приведите свою избранную фракцию к победе в этой напряженной стратегической игре в реальном времени, основанной на периоде Трёх Королевств. Развертывайте легендарных воинов, выполняйте тактические маневры и формируйте будущее древнего Китая.`
      },
      zh: {
        title: "三国乱斗：实时派系战争",
        description: "在古代中国的史诗级实时战斗中指挥传奇英雄",
        story: `在这款基于三国时期的激烈实时战略游戏中带领你选择的阵营走向胜利。部署传奇战士，执行战术机动，塑造古代中国的未来。`
      },
      ar: {
        title: "عراك الممالك الثلاث: حرب الفصائل في الوقت الحقيقي",
        description: "قُد الأبطال الأسطوريين في معارك ملحمية في الوقت الحقيقي في الصين القديمة",
        story: `قُد فصيلتك المختارة إلى النصر في هذه اللعبة الاستراتيجية المكثفة في الوقت الحقيقي المستندة إلى فترة الممالك الثلاث. انشر المحاربين الأسطوريين، نفذ المناورات التكتيكية، وشكل مستقبل الصين القديمة.`
      },
      vi: {
        title: "Loạn Chiến Tam Quốc: Chiến Tranh Phe Phái Thời Gian Thực",
        description: "Chỉ huy các anh hùng huyền thoại trong các trận chiến sử thi thời gian thực ở Trung Quốc cổ đại",
        story: `Dẫn dắt phe phái bạn chọn đến chiến thắng trong trò chơi chiến thuật thời gian thực gay cấn này dựa trên thời kỳ Tam Quốc. Triển khai các chiến binh huyền thoại, thực hiện các thao tác chiến thuật và định hình tương lai của Trung Quốc cổ đại.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 34,
    imageUrl: "/assets/Unified Kingdom.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Unified Kingdom",
        description: "Unite the divided lands through diplomacy and warfare in this grand strategy game",
        story: `Lead your faction to unite the fractured kingdoms through a combination of diplomatic alliances and strategic warfare. Every decision shapes the future of the realm.`
      },
      de: {
        title: "Vereinigtes Königreich",
        description: "Vereine die geteilten Länder durch Diplomatie und Kriegsführung in diesem großen Strategiespiel",
        story: `Führe deine Fraktion zur Vereinigung der zersplitterten Königreiche durch eine Kombination aus diplomatischen Bündnissen und strategischer Kriegsführung. Jede Entscheidung formt die Zukunft des Reiches.`
      },
      fr: {
        title: "Royaume Unifié",
        description: "Unissez les terres divisées par la diplomatie et la guerre dans ce grand jeu de stratégie",
        story: `Menez votre faction pour unir les royaumes fracturés grâce à une combinaison d'alliances diplomatiques et de guerre stratégique. Chaque décision façonne l'avenir du royaume.`
      },
      ru: {
        title: "Объединённое Королевство",
        description: "Объедините разделенные земли через дипломатию и войну в этой масштабной стратегической игре",
        story: `Ведите свою фракцию к объединению раздробленных королевств через сочетание дипломатических союзов и стратегической войны. Каждое решение формирует будущее царства.`
      },
      zh: {
        title: "统一王国",
        description: "在这款宏大的战略游戏中通过外交和战争统一分裂的土地",
        story: `通过外交联盟和战略战争的结合，带领你的派系统一分裂的王国。每个决定都塑造着王国的未来。`
      },
      ar: {
        title: "المملكة الموحدة",
        description: "وحد الأراضي المنقسمة من خلال الدبلوماسية والحرب في هذه اللعبة الاستراتيجية الكبرى",
        story: `قد فصيلتك لتوحيد الممالك المنقسمة من خلال مزيج من التحالفات الدبلوماسية والحرب الاستراتيجية. كل قرار يشكل مستقبل المملكة.`
      },
      vi: {
        title: "Vương Quốc Thống Nhất",
        description: "Thống nhất các vùng đất chia rẽ thông qua ngoại giao và chiến tranh trong trò chơi chiến lược quy mô lớn này",
        story: `Lãnh đạo phe phái của bạn để thống nhất các vương quốc bị chia rẽ thông qua kết hợp các liên minh ngoại giao và chiến tranh chiến lược. Mỗi quyết định đều định hình tương lai của vương quốc.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 35,
    imageUrl: "/assets/Wulin Showdown – The Ultimate Interactive Martial Arts Livestream Battle Game.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Wulin Showdown",
        description: "Experience the ultimate martial arts combat in this interactive battle game",
        story: `Enter the world of ancient martial arts where skill, strategy, and timing determine victory. Master various fighting styles and compete against other players in intense duels.`
      },
      de: {
        title: "Wulin Showdown",
        description: "Erlebe den ultimativen Kampfkunst-Kampf in diesem interaktiven Kampfspiel",
        story: `Tritt ein in die Welt der alten Kampfkünste, wo Geschick, Strategie und Timing den Sieg bestimmen. Meistere verschiedene Kampfstile und tritt in intensiven Duellen gegen andere Spieler an.`
      },
      fr: {
        title: "Confrontation Wulin",
        description: "Vivez le combat d'arts martiaux ultime dans ce jeu de bataille interactif",
        story: `Entrez dans le monde des arts martiaux anciens où l'habileté, la stratégie et le timing déterminent la victoire. Maîtrisez différents styles de combat et affrontez d'autres joueurs dans des duels intenses.`
      },
      ru: {
        title: "Противостояние Улинь",
        description: "Испытайте непревзойденный боевой опыт боевых искусств в этой интерактивной боевой игре",
        story: `Войдите в мир древних боевых искусств, где мастерство, стратегия и время определяют победу. Освойте различные стили боя и соревнуйтесь с другими игроками в напряженных поединках.`
      },
      zh: {
        title: "武林决战",
        description: "在这款互动战斗游戏中体验终极武术格斗",
        story: `进入古代武术的世界，在这里技巧、策略和时机决定胜负。掌握各种战斗风格，在激烈的决斗中与其他玩家竞争。`
      },
      ar: {
        title: "مواجهة وولين",
        description: "اختبر القتال النهائي للفنون القتالية في هذه اللعبة القتالية التفاعلية",
        story: `ادخل عالم الفنون القتالية القديمة حيث تحدد المهارة والاستراتيجية والتوقيت النصر. أتقن أساليب قتال مختلفة وتنافس مع لاعبين آخرين في مبارزات مكثفة.`
      },
      vi: {
        title: "Quyết Đấu Võ Lâm",
        description: "Trải nghiệm võ thuật tối thượng trong trò chơi chiến đấu tương tác này",
        story: `Bước vào thế giới võ thuật cổ xưa nơi kỹ năng, chiến lược và thời điểm quyết định chiến thắng. Làm chủ các phong cách chiến đấu khác nhau và thi đấu với người chơi khác trong các trận đấu gay cấn.`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-7500 or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-9700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  }
];
