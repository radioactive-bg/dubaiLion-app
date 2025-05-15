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
        story: `<p><strong>Battle of Heroes</strong> is a live-streaming PvP game inspired by the Three Kingdoms era, where viewers actively join the fight. With just a comment or like, fans choose sides, summon warriors, legendary generals and shape the outcome live.</p>`
      },
      de: {
        title: 'Kampf der Helden: Streamen, Wettkämpfen, Erobern',
        description: 'Ein intensives PvP-Spiel für Gamer, die für den Wettkampf leben',
        story: `<p><strong>Kampf der Helden</strong> ist ein Live-Streaming-PvP-Spiel, inspiriert von der Zeit der Drei Königreiche, bei dem Zuschauer aktiv am Kampf teilnehmen.</p>`
      },
      fr: {
        title: 'Bataille des Héros: Stream, Compétition, Conquête',
        description: 'Un jeu PvP haute intensité conçu pour les joueurs qui vivent pour la compétition',
        story: `<p><strong>Bataille des Héros</strong> est un jeu PvP en streaming en direct inspiré de l'ère des Trois Royaumes, où les spectateurs participent activement au combat.</p>`
      },
      ru: {
        title: 'Битва Героев: Стрим, Соревнование, Завоевание',
        description: 'Высокоинтенсивная PvP игра для геймеров, живущих соревнованиями',
        story: `<p><strong>Битва Героев</strong> - это PvP игра с прямой трансляцией, вдохновленная эпохой Трёх Королевств, где зрители активно участвуют в сражении.</p>`
      },
      zh: {
        title: '英雄之战：直播、竞技、征服',
        description: '为热爱竞技的玩家打造的高强度PvP游戏',
        story: `<p><strong>英雄之战</strong>是一款受三国时代启发的直播PvP游戏，观众可以积极参与战斗。</p>`
      },
      ar: {
        title: 'معركة الأبطال: بث مباشر، منافسة، فتح',
        description: 'لعبة قتال عالية الحدة مصممة للاعبين الذين يعيشون للمنافسة',
        story: `<p><strong>معركة الأبطال</strong> هي لعبة قتال مباشرة مستوحاة من عصر الممالك الثلاثة، حيث ينضم المشاهدون بنشاط إلى المعركة.</p>`
      },
      vi: {
        title: 'Trận Chiến Anh Hùng: Stream, Thi Đấu, Chinh Phục',
        description: 'Trò chơi PvP cường độ cao dành cho game thủ đam mê thi đấu',
        story: `<p><strong>Trận Chiến Anh Hùng</strong> là trò chơi PvP trực tiếp lấy cảm hứng từ thời Tam Quốc, nơi người xem tích cực tham gia vào trận chiến.</p>`
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
        story: `<p>In Block Rush, players engage in a strategic defense game where they summon and upgrade units using in-game gifts. The objective is to outlast opponents by strategically placing defensive and offensive units.</p>`
      },
      de: {
        title: 'Block Rush: Geschenkgetriebenes Strategieduell',
        description: 'Ein strategisches Verteidigungsspiel, in dem Spieler Einheiten durch In-Game-Geschenke beschwören und verbessern',
        story: `<p>In Block Rush nehmen die Spieler an einem strategischen Verteidigungsspiel teil, bei dem sie Einheiten durch In-Game-Geschenke beschwören und verbessern. Das Ziel ist es, Gegner durch strategische Platzierung von Verteidigungs- und Angriffseinheiten zu überdauern.</p>`
      },
      fr: {
        title: 'Block Rush: Confrontation Stratégique Alimentée par les Cadeaux',
        description: 'Un jeu de défense stratégique où les joueurs invoquent et améliorent des unités grâce aux cadeaux en jeu',
        story: `<p>Dans Block Rush, les joueurs participent à un jeu de défense stratégique où ils invoquent et améliorent des unités en utilisant des cadeaux en jeu. L'objectif est de survivre aux adversaires en plaçant stratégiquement des unités défensives et offensives.</p>`
      },
      ru: {
        title: 'Block Rush: Стратегическая Битва с Подарками',
        description: 'Стратегическая игра в жанре защиты, где игроки призывают и улучшают юнитов с помощью внутриигровых подарков',
        story: `<p>В Block Rush игроки участвуют в стратегической оборонительной игре, где они призывают и улучшают юнитов с помощью внутриигровых подарков. Цель - пережить противников, стратегически размещая оборонительные и наступательные юниты.</p>`
      },
      zh: {
        title: '方块冲锋：礼物驱动的策略对决',
        description: '一款策略防御游戏，玩家通过游戏内礼物召唤和升级单位',
        story: `<p>在方块冲锋中，玩家参与策略防御游戏，通过游戏内礼物召唤和升级单位。目标是通过战略性地放置防御和进攻单位来战胜对手。</p>`
      },
      ar: {
        title: 'بلوك راش: معركة استراتيجية مدعومة بالهدايا',
        description: 'لعبة دفاع استراتيجية حيث يستدعي اللاعبون ويطورون الوحدات من خلال الهدايا داخل اللعبة',
        story: `<p>في بلوك راش، يشارك اللاعبون في لعبة دفاع استراتيجية حيث يستدعون ويطورون الوحدات باستخدام الهدايا داخل اللعبة. الهدف هو البقاء أطول من الخصوم من خلال وضع وحدات دفاعية وهجومية بشكل استراتيجي.</p>`
      },
      vi: {
        title: 'Block Rush: Đối Đầu Chiến Lược Bằng Quà Tặng',
        description: 'Trò chơi phòng thủ chiến lược nơi người chơi triệu hồi và nâng cấp đơn vị thông qua quà tặng trong game',
        story: `<p>Trong Block Rush, người chơi tham gia vào trò chơi phòng thủ chiến lược nơi họ triệu hồi và nâng cấp đơn vị bằng quà tặng trong game. Mục tiêu là tồn tại lâu hơn đối thủ bằng cách đặt các đơn vị phòng thủ và tấn công một cách chiến lược.</p>`
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
        story: `<p>Brawl of the Westward Journey is a fast-paced mobile game where players join either the Monkey King or the Heavenly Court faction in a tug-of-war battle to control the legendary Golden Staff.</p>`
      },
      de: {
        title: 'Kampf der Westlichen Reise: Duell um den Goldenen Stab!',
        description: 'Ein strategisches Tauziehen um die Vorherrschaft zwischen dem Affenkönig und den Himmlischen Hof-Fraktionen',
        story: `<p>Kampf der Westlichen Reise ist ein schnelles Mobilspiel, bei dem sich Spieler entweder der Fraktion des Affenkönigs oder des Himmlischen Hofs anschließen, um in einem Tauziehen-Kampf den legendären Goldenen Stab zu kontrollieren.</p>`
      },
      fr: {
        title: 'Bataille du Voyage vers l\'Ouest : Combat pour le Bâton d\'Or !',
        description: 'Un bras de fer stratégique pour la domination, mettant en scène le Roi Singe et les factions de la Cour Céleste',
        story: `<p>Bataille du Voyage vers l'Ouest est un jeu mobile rapide où les joueurs rejoignent soit la faction du Roi Singe, soit celle de la Cour Céleste dans une bataille de tir à la corde pour contrôler le légendaire Bâton d'Or.</p>`
      },
      ru: {
        title: 'Битва Западного Путешествия: Сражение за Золотой Посох!',
        description: 'Стратегическое противостояние за господство между фракциями Короля Обезьян и Небесного Двора',
        story: `<p>Битва Западного Путешествия - это динамичная мобильная игра, где игроки присоединяются к фракции Короля Обезьян или Небесного Двора в борьбе за контроль над легендарным Золотым Посохом.</p>`
      },
      zh: {
        title: '西游争霸：争夺金箍棒之战！',
        description: '以孙悟空和天庭阵营为主的战略拔河对决',
        story: `<p>西游争霸是一款快节奏的手机游戏，玩家可以加入孙悟空或天庭阵营，在拔河战斗中争夺传说中的金箍棒。</p>`
      },
      ar: {
        title: 'معركة الرحلة الغربية: صراع على العصا الذهبية!',
        description: 'لعبة شد الحبل الاستراتيجية للسيطرة، تضم فصائل الملك القرد والمحكمة السماوية',
        story: `<p>معركة الرحلة الغربية هي لعبة جوال سريعة الإيقاع حيث ينضم اللاعبون إما إلى فصيل الملك القرد أو المحكمة السماوية في معركة شد الحبل للسيطرة على العصا الذهبية الأسطورية.</p>`
      },
      vi: {
        title: 'Đại Chiến Tây Du: Tranh Đoạt Gậy Như Ý!',
        description: 'Trò chơi kéo co chiến lược giữa phe Tôn Ngộ Không và Thiên Đình',
        story: `<p>Đại Chiến Tây Du là một trò chơi di động nhịp độ nhanh, nơi người chơi tham gia vào phe Tôn Ngộ Không hoặc Thiên Đình trong trận chiến kéo co để giành quyền kiểm soát Gậy Như Ý huyền thoại.</p>`
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
        story: `<p>In Call Me Champion, it's not just about watching, it's about participating. This game throws you into a multi-camp battle where broadcasters and viewers join forces to push their camp to victory.</p>`
      },
      de: {
        title: 'Nenn Mich Champion: Gestalte den Fraktionskrieg mit Jedem Zug',
        description: 'Wähle deine Seite, Kämpfe für Ruhm und Sichere dir deinen Platz an der Spitze!',
        story: `<p>In Nenn Mich Champion geht es nicht nur ums Zusehen, sondern ums Mitmachen. Dieses Spiel wirft dich in eine Multi-Camp-Schlacht, wo Broadcaster und Zuschauer sich zusammentun, um ihr Lager zum Sieg zu führen.</p>`
      },
      fr: {
        title: 'Appelez-Moi Champion : Façonnez la Guerre des Factions à Chaque Mouvement',
        description: 'Choisissez Votre Camp, Battez-vous pour la Gloire et Gagnez Votre Place au Sommet !',
        story: `<p>Dans Appelez-Moi Champion, il ne s'agit pas seulement de regarder, mais de participer. Ce jeu vous plonge dans une bataille multi-camps où diffuseurs et spectateurs unissent leurs forces pour mener leur camp à la victoire.</p>`
      },
      ru: {
        title: 'Зови Меня Чемпион: Определи Исход Войны Фракций Каждым Ходом',
        description: 'Выбери Свою Сторону, Сражайся за Славу и Заработай Место на Вершине!',
        story: `<p>В игре Зови Меня Чемпион важно не просто смотреть, а участвовать. Эта игра погружает вас в многолагерную битву, где стримеры и зрители объединяются, чтобы привести свой лагерь к победе.</p>`
      },
      zh: {
        title: '称霸之战：每一步都决定派系战争的走向',
        description: '选择阵营，为荣耀而战，赢得巅峰地位！',
        story: `<p>在称霸之战中，不仅仅是观看，更重要的是参与。这款游戏将你投入多阵营战斗，主播和观众联手推动自己的阵营走向胜利。</p>`
      },
      ar: {
        title: 'نادني بطل: شكل حرب الفصائل مع كل خطوة',
        description: 'اختر جانبك، قاتل من أجل المجد، واكسب مكانك في القمة!',
        story: `<p>في نادني بطل، الأمر لا يتعلق بالمشاهدة فقط، بل بالمشاركة. تضعك هذه اللعبة في معركة متعددة المعسكرات حيث يتحد البث المباشر والمشاهدون لدفع معسكرهم نحو النصر.</p>`
      },
      vi: {
        title: 'Gọi Tôi Là Nhà Vô Địch: Định Hình Cuộc Chiến Phe Phái Qua Từng Bước Đi',
        description: 'Chọn Phe Của Bạn, Chiến Đấu Vì Vinh Quang và Giành Vị Trí Cao Nhất!',
        story: `<p>Trong Gọi Tôi Là Nhà Vô Địch, không chỉ là xem mà còn là tham gia. Trò chơi này đưa bạn vào trận chiến đa trại, nơi người phát sóng và người xem hợp lực để đưa trại của họ đến chiến thắng.</p>`
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
        story: `<p>In Call Me Da Sheng, your choice is your fate. Help or hinder the Monkey King's escape from Wuzhi Mountain in this intense tug-of-war PVP showdown.</p>`
      },
      de: {
        title: 'Nenn Mich Da Sheng: Bestimme das Schicksal des Affenkönigs',
        description: 'Wirst du dem Affenkönig bei der Flucht helfen oder ihn aufhalten?',
        story: `<p>In Nenn Mich Da Sheng ist deine Wahl dein Schicksal. Hilf dem Affenkönig bei seiner Flucht vom Wuzhi-Berg oder verhindere sie in diesem intensiven Tauziehen-PVP-Showdown.</p>`
      },
      fr: {
        title: 'Appelez-Moi Da Sheng : Façonnez le Destin du Roi Singe',
        description: 'Aiderez-vous le Roi Singe à s\'échapper, ou l\'arrêterez-vous dans sa course ?',
        story: `<p>Dans Appelez-Moi Da Sheng, votre choix est votre destin. Aidez ou empêchez l'évasion du Roi Singe de la montagne Wuzhi dans cet intense face-à-face PVP.</p>`
      },
      ru: {
        title: 'Зови Меня Да Шэн: Определи Судьбу Короля Обезьян',
        description: 'Поможешь Королю Обезьян сбежать или остановишь его?',
        story: `<p>В игре Зови Меня Да Шэн твой выбор определяет твою судьбу. Помоги или помешай побегу Короля Обезьян с горы Уджи в этом напряженном PVP-противостоянии.</p>`
      },
      zh: {
        title: '齐天大圣：决定美猴王的命运',
        description: '你会帮助美猴王逃脱，还是阻止他的脚步？',
        story: `<p>在齐天大圣中，你的选择就是你的命运。在这场激烈的PVP拔河对决中，帮助或阻止美猴王从五指山逃脱。</p>`
      },
      ar: {
        title: 'نادني دا شنغ: شكل مصير ملك القرود',
        description: 'هل ستساعد ملك القرود على الهروب، أم ستوقفه في مساره؟',
        story: `<p>في نادني دا شنغ، اختيارك هو مصيرك. ساعد أو أعق هروب ملك القرود من جبل ووتشي في هذه المواجهة المكثفة للعبة شد الحبل PVP.</p>`
      },
      vi: {
        title: 'Gọi Tôi Là Đại Thánh: Định Đoạt Số Phận Của Tề Thiên Đại Thánh',
        description: 'Bạn sẽ giúp Tề Thiên Đại Thánh thoát thân, hay ngăn chặn ông ấy?',
        story: `<p>Trong Gọi Tôi Là Đại Thánh, sự lựa chọn của bạn là số phận của bạn. Giúp đỡ hoặc cản trở Tề Thiên Đại Thánh thoát khỏi núi Ngũ Chỉ trong trận đối đầu kéo co PVP gay cấn này.</p>`
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
        story: `<p>Step into the delightful chaos of Cheese Battle, a fast-paced PvP game that brings the classic cat-and-mouse chase to life with a modern twist.</p>`
      },
      de: {
        title: 'Käse-Schlacht: Das ultimative Katze-gegen-Maus-Duell',
        description: 'Schließe dich niedlichen Katzen in einem entzückenden Angelwettbewerb an, wo Geschick auf Strategie trifft',
        story: `<p>Tauche ein in das entzückende Chaos von Käse-Schlacht, ein schnelles PvP-Spiel, das die klassische Katz-und-Maus-Jagd mit einer modernen Wendung zum Leben erweckt.</p>`
      },
      fr: {
        title: 'Bataille de Fromage : L\'Ultime Affrontement Chat contre Souris',
        description: "Rejoignez des chats mignons dans une adorable compétition de pêche où l'habileté rencontre la stratégie",
        story: `<p>Plongez dans le chaos délicieux de Bataille de Fromage, un jeu PvP rapide qui donne vie à la classique course-poursuite du chat et de la souris avec une touche moderne.</p>`
      },
      ru: {
        title: 'Сырная Битва: Решающее Противостояние Кошек и Мышей',
        description: 'Присоединяйтесь к причудливому миру Сырной Битвы, где очаровательные мыши защищают свой сырный пир от хитрых кошек',
        story: `<p>Окунитесь в восхитительный хаос Сырной Битвы, динамичной PvP-игры, которая оживляет классическую погоню кошки за мышкой с современным поворотом.</p>`
      },
      zh: {
        title: '奶酪大战：猫鼠终极对决',
        description: '在这个技巧与策略并重的可爱钓鱼比赛中与萌猫一起参与',
        story: `<p>步入奶酪大战的欢乐混乱，这是一款快节奏的PvP游戏，以现代方式重现经典的猫鼠追逐。</p>`
      },
      ar: {
        title: 'معركة الجبن: المواجهة النهائية بين القط والفأر',
        description: 'انضم إلى القطط اللطيفة في منافسة صيد السمك الجذابة حيث تلتقي المهارة بالاستراتيجية',
        story: `<p>ادخل إلى الفوضى الممتعة في معركة الجبن، لعبة PvP سريعة تحيي مطاردة القط والفأر الكلاسيكية بلمسة عصرية.</p>`
      },
      vi: {
        title: 'Đại Chiến Phô Mai: Cuộc Đối Đầu Tối Thượng Giữa Mèo và Chuột',
        description: 'Tham gia cùng những chú mèo dễ thương trong cuộc thi câu cá đáng yêu nơi kỹ năng gặp chiến thuật',
        story: `<p>Bước vào sự hỗn loạn thú vị của Đại Chiến Phô Mai, một trò chơi PvP nhịp độ nhanh mang lại cuộc rượt đuổi mèo-chuột cổ điển với một twist hiện đại.</p>`
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
        story: `<p>Step into the action-packed world of Chibi: Three Kingdoms, where you control the fate of the kingdom!</p>`
      },
      de: {
        title: 'Chibi: Drei Königreiche — Die ultimative Schlacht um Ruhm!',
        description: 'Deine Armee, Deine Strategie, Dein Ruhm!',
        story: `<p>Tritt ein in die actiongeladene Welt von Chibi: Drei Königreiche, wo du das Schicksal des Königreichs kontrollierst!</p>`
      },
      fr: {
        title: 'Chibi : Les Trois Royaumes — La Bataille Ultime pour la Gloire !',
        description: 'Votre Armée, Votre Stratégie, Votre Gloire !',
        story: `<p>Entrez dans le monde plein d'action de Chibi : Les Trois Royaumes, où vous contrôlez le destin du royaume !</p>`
      },
      ru: {
        title: 'Чиби: Три Королевства — Решающая Битва за Славу!',
        description: 'Твоя Армия, Твоя Стратегия, Твоя Слава!',
        story: `<p>Войдите в насыщенный действием мир Чиби: Три Королевства, где вы контролируете судьбу королевства!</p>`
      },
      zh: {
        title: '赤壁：三国志 — 终极荣耀之战！',
        description: '你的军队，你的策略，你的荣耀！',
        story: `<p>步入充满动作的赤壁：三国志世界，在这里你掌控着王国的命运！</p>`
      },
      ar: {
        title: 'تشيبي: الممالك الثلاثة — المعركة النهائية من أجل المجد!',
        description: 'جيشك، استراتيجيتك، مجدك!',
        story: `<p>ادخل إلى عالم تشيبي المليء بالحركة: الممالك الثلاثة، حيث تتحكم في مصير المملكة!</p>`
      },
      vi: {
        title: 'Chibi: Tam Quốc — Trận Chiến Tối Thượng Vì Vinh Quang!',
        description: 'Quân Đội Của Bạn, Chiến Lược Của Bạn, Vinh Quang Của Bạn!',
        story: `<p>Bước vào thế giới đầy hành động của Chibi: Tam Quốc, nơi bạn kiểm soát vận mệnh của vương quốc!</p>`
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
    imageUrl: "/assets/King’s Duel_ Fantasy Clash in Real Time.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "King's Duel: Fantasy Clash in Real Time",
        description: "Command your fantasy army in epic real-time battles where strategy meets magic",
        story: `<p>Enter a realm where magic and military might collide in real-time strategic warfare. Lead your fantasy armies to victory through tactical brilliance and magical supremacy.</p>`
      },
      de: {
        title: "Duell der Könige: Fantasy-Kampf in Echtzeit",
        description: "Befehlige deine Fantasy-Armee in epischen Echtzeit-Schlachten, wo Strategie auf Magie trifft",
        story: `<p>Betritt eine Welt, in der Magie und militärische Macht in strategischer Kriegsführung in Echtzeit aufeinandertreffen. Führe deine Fantasy-Armeen durch taktische Brillanz und magische Überlegenheit zum Sieg.</p>`
      },
      fr: {
        title: "Duel des Rois : Affrontement Fantastique en Temps Réel",
        description: "Commandez votre armée fantastique dans des batailles épiques en temps réel où la stratégie rencontre la magie",
        story: `<p>Entrez dans un royaume où la magie et la puissance militaire s'affrontent dans une guerre stratégique en temps réel. Menez vos armées fantastiques à la victoire grâce à la brillance tactique et la suprématie magique.</p>`
      },
      ru: {
        title: "Королевская Дуэль: Фэнтезийные Сражения в Реальном Времени",
        description: "Командуйте фэнтезийной армией в эпических сражениях в реальном времени, где стратегия встречается с магией",
        story: `<p>Войдите в мир, где магия и военная мощь сталкиваются в стратегической войне в реальном времени. Ведите свои фэнтезийные армии к победе через тактическое мастерство и магическое превосходство.</p>`
      },
      zh: {
        title: "王者对决：实时奇幻冲突",
        description: "在战略与魔法交织的史诗级实时战斗中指挥你的奇幻军队",
        story: `<p>进入一个魔法与军事力量在实时战略战争中碰撞的领域。通过战术才智和魔法优势带领你的奇幻军队走向胜利。</p>`
      },
      ar: {
        title: "مبارزة الملوك: صراع الخيال في الوقت الحقيقي",
        description: "قُد جيشك الخيالي في معارك ملحمية في الوقت الحقيقي حيث تلتقي الاستراتيجية بالسحر",
        story: `<p>ادخل عالماً حيث يتصادم السحر والقوة العسكرية في حرب استراتيجية في الوقت الحقيقي. قُد جيوشك الخيالية إلى النصر من خلال البراعة التكتيكية والتفوق السحري.</p>`
      },
      vi: {
        title: "Quyết Đấu Vương Giả: Đụng Độ Kỳ Ảo Thời Gian Thực",
        description: "Chỉ huy đội quân kỳ ảo của bạn trong những trận chiến sử thi thời gian thực nơi chiến lược gặp phép thuật",
        story: `<p>Bước vào một vương quốc nơi phép thuật và sức mạnh quân sự va chạm trong chiến tranh chiến lược thời gian thực. Dẫn dắt đội quân kỳ ảo của bạn đến chiến thắng thông qua tài năng chiến thuật và ưu thế phép thuật.</p>`
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
    id: 9,
    imageUrl: "/assets/League of Monsters_ Command. Conquer. Survive.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "League of Monsters: Command. Conquer. Survive",
        description: "Lead your monster army to victory in this tactical battle arena game",
        story: `<p>In League of Monsters, command fearsome creatures in intense tactical battles. Each monster brings unique abilities and strategies to the battlefield.</p>`
      },
      de: {
        title: "Liga der Monster: Befehligen. Erobern. Überleben",
        description: "Führe deine Monster-Armee in diesem taktischen Arena-Kampfspiel zum Sieg",
        story: `<p>In Liga der Monster befehligst du furchterregende Kreaturen in intensiven taktischen Schlachten. Jedes Monster bringt einzigartige Fähigkeiten und Strategien auf das Schlachtfeld.</p>`
      },
      fr: {
        title: "Ligue des Monstres : Commander. Conquérir. Survivre",
        description: "Menez votre armée de monstres à la victoire dans ce jeu d'arène tactique",
        story: `<p>Dans Ligue des Monstres, commandez des créatures redoutables dans des batailles tactiques intenses. Chaque monstre apporte des capacités et des stratégies uniques sur le champ de bataille.</p>`
      },
      ru: {
        title: "Лига Монстров: Командуй. Завоёвывай. Выживай",
        description: "Веди свою армию монстров к победе в этой тактической боевой арене",
        story: `<p>В Лиге Монстров командуй грозными существами в интенсивных тактических сражениях. Каждый монстр привносит уникальные способности и стратегии на поле боя.</p>`
      },
      zh: {
        title: "怪物联盟：指挥·征服·生存",
        description: "在这款战术竞技场游戏中带领你的怪物军团走向胜利",
        story: `<p>在怪物联盟中，指挥可怕的生物进行激烈的战术战斗。每个怪物都为战场带来独特的能力和策略。</p>`
      },
      ar: {
        title: "دوري الوحوش: قيادة. غزو. بقاء",
        description: "قُد جيش الوحوش إلى النصر في هذه اللعبة التكتيكية في ساحة المعركة",
        story: `<p>في دوري الوحوش، قُد المخلوقات المخيفة في معارك تكتيكية مكثفة. كل وحش يجلب قدرات واستراتيجيات فريدة إلى ساحة المعركة.</p>`
      },
      vi: {
        title: "Liên Minh Quái Vật: Chỉ Huy. Chinh Phục. Sinh Tồn",
        description: "Dẫn dắt đội quân quái vật của bạn đến chiến thắng trong trò chơi đấu trường chiến thuật này",
        story: `<p>Trong Liên Minh Quái Vật, chỉ huy những sinh vật đáng sợ trong các trận chiến chiến thuật gay cấn. Mỗi quái vật mang đến những khả năng và chiến thuật độc đáo trên chiến trường.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core i3-6100 or AMD FX-6300",
        memory: "6 GB RAM"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 10,
    imageUrl: "/assets/Little Cat Fishing_ Pull, Compete, and Conquer!.jpg",
    platform: "Mobile",
    translations: {
      en: {
        title: "Little Cat Fishing: Pull, Compete, and Conquer!",
        description: "Join cute cats in an adorable fishing competition where skill meets strategy",
        story: `<p>Dive into the charming world of Little Cat Fishing, where adorable feline friends compete in strategic fishing challenges. Master different fishing techniques and collect rare catches!</p>`
      },
      de: {
        title: "Kleine Katzen Angeln: Ziehen, Wetteifern und Erobern!",
        description: "Schließe dich niedlichen Katzen in einem entzückenden Angelwettbewerb an, wo Geschick auf Strategie trifft",
        story: `<p>Tauche ein in die bezaubernde Welt von Kleine Katzen Angeln, wo entzückende Katzenfreunde in strategischen Angelherausforderungen wetteifern. Beherrsche verschiedene Angeltechniken und sammle seltene Fänge!</p>`
      },
      fr: {
        title: "Petits Chats Pêcheurs : Tirer, Rivaliser et Conquérir !",
        description: "Rejoignez des chats mignons dans une adorable compétition de pêche où l'habileté rencontre la stratégie",
        story: `<p>Plongez dans le monde charmant des Petits Chats Pêcheurs, où d'adorables amis félins s'affrontent dans des défis de pêche stratégiques. Maîtrisez différentes techniques de pêche et collectez des prises rares !</p>`
      },
      ru: {
        title: "Котята на Рыбалке: Тяни, Соревнуйся и Побеждай!",
        description: "Присоединяйтесь к милым котятам в очаровательном рыболовном соревновании, где мастерство встречается со стратегией",
        story: `<p>Погрузитесь в очаровательный мир Котят на Рыбалке, где милые пушистые друзья соревнуются в стратегических рыболовных испытаниях. Освойте различные техники рыбалки и соберите редкие уловы!</p>`
      },
      zh: {
        title: "小猫钓鱼：拉竿、竞技、制胜！",
        description: "在这个技巧与策略并重的可爱钓鱼比赛中与萌猫一起参与",
        story: `<p>潜入小猫钓鱼的迷人世界，可爱的猫咪朋友们在战略性钓鱼挑战中展开竞争。掌握不同的钓鱼技巧，收集稀有渔获！</p>`
      },
      ar: {
        title: "صيد القطط الصغيرة: اسحب، نافس، وانتصر!",
        description: "انضم إلى القطط اللطيفة في منافسة صيد السمك الجذابة حيث تلتقي المهارة بالاستراتيجية",
        story: `<p>اغمر نفسك في عالم صيد القطط الصغيرة الساحر، حيث يتنافس الأصدقاء القطط اللطفاء في تحديات الصيد الاستراتيجية. أتقن تقنيات الصيد المختلفة واجمع الصيد النادر!</p>`
      },
      vi: {
        title: "Mèo Con Câu Cá: Kéo, Thi Đấu và Chinh Phục!",
        description: "Tham gia cùng những chú mèo dễ thương trong cuộc thi câu cá đáng yêu nơi kỹ năng gặp chiến thuật",
        story: `<p>Đắm mình trong thế giới quyến rũ của Mèo Con Câu Cá, nơi những người bạn mèo đáng yêu cạnh tranh trong các thử thách câu cá chiến lược. Làm chủ các kỹ thuật câu cá khác nhau và thu thập những mẻ câu hiếm!</p>`
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
    id: 11,
    imageUrl: "/assets/Mars Colliding with Earth 2_ Stream. Battle. Conquer Worlds.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Mars Colliding with Earth 2: Stream. Battle. Conquer Worlds",
        description: "Lead your faction in an interplanetary war where Earth and Mars collide",
        story: `<p>In this epic sequel, command your forces in a war that spans two planets. Use advanced technology and strategic warfare to determine the fate of both worlds.</p>`
      },
      de: {
        title: "Mars kollidiert mit der Erde 2: Streamen. Kämpfen. Welten erobern",
        description: "Führe deine Fraktion in einem interplanetaren Krieg, in dem Erde und Mars aufeinanderprallen",
        story: `<p>In dieser epischen Fortsetzung befehligst du deine Streitkräfte in einem Krieg, der sich über zwei Planeten erstreckt. Nutze fortschrittliche Technologie und strategische Kriegsführung, um das Schicksal beider Welten zu bestimmen.</p>`
      },
      fr: {
        title: "Mars entre en collision avec la Terre 2 : Stream. Combat. Conquête des Mondes",
        description: "Dirigez votre faction dans une guerre interplanétaire où la Terre et Mars s'affrontent",
        story: `<p>Dans cette suite épique, commandez vos forces dans une guerre qui s'étend sur deux planètes. Utilisez la technologie avancée et la guerre stratégique pour déterminer le destin des deux mondes.</p>`
      },
      ru: {
        title: "Столкновение Марса с Землей 2: Стрим. Битва. Завоевание Миров",
        description: "Возглавьте свою фракцию в межпланетной войне, где сталкиваются Земля и Марс",
        story: `<p>В этом эпическом продолжении командуйте своими силами в войне, охватывающей две планеты. Используйте передовые технологии и стратегическую войну, чтобы определить судьбу обоих миров.</p>`
      },
      zh: {
        title: "火星撞地球2：直播·战斗·征服世界",
        description: "在地球与火星碰撞的星际战争中领导你的阵营",
        story: `<p>在这部史诗续作中，指挥你的部队参与跨越两个星球的战争。运用先进技术和战略战争来决定两个世界的命运。</p>`
      },
      ar: {
        title: "اصطدام المريخ بالأرض 2: بث. معركة. غزو العوالم",
        description: "قُد فصيلتك في حرب بين الكواكب حيث تصطدم الأرض والمريخ",
        story: `<p>في هذا الجزء الملحمي، قُد قواتك في حرب تمتد عبر كوكبين. استخدم التكنولوجيا المتقدمة والحرب الاستراتيجية لتحديد مصير العالمين.</p>`
      },
      vi: {
        title: "Sao Hỏa Va Chạm Trái Đất 2: Stream. Chiến Đấu. Chinh Phục Thế Giới",
        description: "Lãnh đạo phe phái của bạn trong cuộc chiến liên hành tinh nơi Trái Đất và Sao Hỏa va chạm",
        story: `<p>Trong phần tiếp theo hoành tráng này, chỉ huy lực lượng của bạn trong cuộc chiến trải dài hai hành tinh. Sử dụng công nghệ tiên tiến và chiến tranh chiến lược để quyết định số phận của cả hai thế giới.</p>`
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
    id: 12,
    imageUrl: "/assets/Martial Duel II_ The King_s Invasion.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Martial Duel II: The King's Invasion",
        description: "Master ancient martial arts in this intense fighting game sequel",
        story: `<p>Return to the world of martial arts mastery in this epic sequel. Face new challenges as you defend your realm against the invading King's forces using traditional combat techniques.</p>`
      },
      de: {
        title: "Kampfkunst-Duell II: Die Invasion des Königs",
        description: "Meistere alte Kampfkünste in dieser intensiven Kampfspiel-Fortsetzung",
        story: `<p>Kehre zurück in die Welt der Kampfkunst-Meisterschaft in dieser epischen Fortsetzung. Stelle dich neuen Herausforderungen, während du dein Reich mit traditionellen Kampftechniken gegen die eindringenden Streitkräfte des Königs verteidigst.</p>`
      },
      fr: {
        title: "Duel Martial II : L'Invasion du Roi",
        description: "Maîtrisez les arts martiaux anciens dans cette suite intense de jeu de combat",
        story: `<p>Retournez dans le monde de la maîtrise des arts martiaux dans cette suite épique. Affrontez de nouveaux défis en défendant votre royaume contre les forces envahissantes du Roi en utilisant des techniques de combat traditionnelles.</p>`
      },
      ru: {
        title: "Боевая Дуэль II: Вторжение Короля",
        description: "Овладейте древними боевыми искусствами в этом напряженном продолжении файтинга",
        story: `<p>Вернитесь в мир мастерства боевых искусств в этом эпическом продолжении. Встречайте новые вызовы, защищая свое царство от вторгающихся сил Короля, используя традиционные техники боя.</p>`
      },
      zh: {
        title: "武术对决II：王者入侵",
        description: "在这款激烈的格斗游戏续作中掌握古代武术",
        story: `<p>在这部史诗续作中重返武术大师的世界。使用传统战斗技巧面对新的挑战，抵御入侵的王者军队。</p>`
      },
      ar: {
        title: "المبارزة القتالية 2: غزو الملك",
        description: "أتقن فنون القتال القديمة في هذه النسخة المكثفة من لعبة القتال",
        story: `<p>عُد إلى عالم إتقان فنون القتال في هذا الجزء الملحمي. واجه تحديات جديدة أثناء دفاعك عن مملكتك ضد قوات الملك الغازية باستخدام تقنيات القتال التقليدية.</p>`
      },
      vi: {
        title: "Quyết Đấu Võ Thuật II: Cuộc Xâm Lược của Nhà Vua",
        description: "Làm chủ võ thuật cổ xưa trong phần tiếp theo của trò chơi đối kháng gay cấn này",
        story: `<p>Trở lại thế giới của bậc thầy võ thuật trong phần tiếp theo hoành tráng này. Đối mặt với những thách thức mới khi bạn bảo vệ vương quốc của mình chống lại lực lượng xâm lược của Nhà Vua bằng các kỹ thuật chiến đấu truyền thống.</p>`
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
    id: 13,
    imageUrl: "/assets/Minecraft Arena_ Survive the Chaos, Rule the Arena.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Minecraft Arena: Survive the Chaos, Rule the Arena",
        description: "Battle for supremacy in this action-packed Minecraft-style arena combat game",
        story: `<p>Enter a blocky battlefield where strategy and survival skills determine your fate. Build, fight, and conquer in intense arena matches.</p>`
      },
      de: {
        title: "Minecraft Arena: Überlebe das Chaos, Beherrsche die Arena",
        description: "Kämpfe um die Vorherrschaft in diesem actiongeladenen Minecraft-artigen Arena-Kampfspiel",
        story: `<p>Betritt ein blockiges Schlachtfeld, wo Strategie und Überlebensfähigkeiten dein Schicksal bestimmen. Baue, kämpfe und erobere in intensiven Arena-Matches.</p>`
      },
      fr: {
        title: "Arène Minecraft : Survivez au Chaos, Dominez l'Arène",
        description: "Battez-vous pour la suprématie dans ce jeu de combat d'arène style Minecraft plein d'action",
        story: `<p>Entrez dans un champ de bataille cubique où la stratégie et les compétences de survie déterminent votre destin. Construisez, combattez et conquérez dans des matchs d'arène intenses.</p>`
      },
      ru: {
        title: "Minecraft Арена: Выживи в Хаосе, Правь Ареной",
        description: "Сражайся за превосходство в этой насыщенной действием боевой арене в стиле Minecraft",
        story: `<p>Войдите на блочное поле битвы, где стратегия и навыки выживания определяют вашу судьбу. Стройте, сражайтесь и побеждайте в интенсивных аренных матчах.</p>`
      },
      zh: {
        title: "我的世界竞技场：在混沌中生存，统治竞技场",
        description: "在这款充满动作的我的世界风格竞技场战斗游戏中争夺霸权",
        story: `<p>进入一个由策略和生存技能决定命运的方块战场。在激烈的竞技场比赛中建造、战斗和征服。</p>`
      },
      ar: {
        title: "ساحة ماينكرافت: انجُ من الفوضى، احكم الساحة",
        description: "قاتل من أجل السيادة في هذه اللعبة القتالية المليئة بالحركة على طراز ماينكرافت",
        story: `<p>ادخل ساحة معركة مكعبة حيث تحدد الاستراتيجية ومهارات البقاء مصيرك. ابنِ وقاتل واغزُ في مباريات ساحة مكثفة.</p>`
      },
      vi: {
        title: "Đấu Trường Minecraft: Sống Sót Trong Hỗn Loạn, Thống Trị Đấu Trường",
        description: "Chiến đấu giành quyền thống trị trong trò chơi đấu trường phong cách Minecraft đầy hành động này",
        story: `<p>Bước vào chiến trường khối vuông nơi chiến lược và kỹ năng sinh tồn quyết định số phận của bạn. Xây dựng, chiến đấu và chinh phục trong các trận đấu đấu trường gay cấn.</p>`
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
    id: 14,
    imageUrl: "/assets/Mole World Battle Adventure.jpg",
    platform: "Mobile",
    translations: {
      en: {
        title: "Mole World Battle Adventure",
        description: "Embark on an underground adventure in this cute but competitive mole-themed battle game",
        story: `<p>Dig, battle, and explore in the charming world of competitive mole warriors. Use your digging skills and special abilities to outmaneuver opponents in underground arenas.</p>`
      },
      de: {
        title: "Maulwurf-Welt Kampfabenteuer",
        description: "Begib dich auf ein unterirdisches Abenteuer in diesem niedlichen aber wettbewerbsorientierten Maulwurf-Kampfspiel",
        story: `<p>Grabe, kämpfe und erkunde in der charmanten Welt der wetteifernden Maulwurf-Krieger. Nutze deine Grabfähigkeiten und Spezialfähigkeiten, um Gegner in unterirdischen Arenen auszumanövrieren.</p>`
      },
      fr: {
        title: "Aventure de Combat du Monde des Taupes",
        description: "Embarquez pour une aventure souterraine dans ce jeu de combat mignon mais compétitif sur le thème des taupes",
        story: `<p>Creusez, combattez et explorez dans le monde charmant des guerriers taupes compétitifs. Utilisez vos compétences de creusement et vos capacités spéciales pour surpasser vos adversaires dans des arènes souterraines.</p>`
      },
      ru: {
        title: "Боевые Приключения в Мире Кротов",
        description: "Отправьтесь в подземное приключение в этой милой, но соревновательной боевой игре про кротов",
        story: `<p>Копайте, сражайтесь и исследуйте в очаровательном мире соревнующихся кротов-воинов. Используйте свои навыки копания и особые способности, чтобы перехитрить противников в подземных аренах.</p>`
      },
      zh: {
        title: "鼹鼠世界战斗冒险",
        description: "在这款可爱但富有竞争性的鼹鼠主题战斗游戏中展开地下冒险",
        story: `<p>在充满魅力的竞技鼹鼠战士世界中挖掘、战斗和探索。使用你的挖掘技能和特殊能力在地下竞技场中战胜对手。</p>`
      },
      ar: {
        title: "مغامرة معركة عالم الخلد",
        description: "انطلق في مغامرة تحت الأرض في هذه اللعبة القتالية اللطيفة ولكن التنافسية بموضوع الخلد",
        story: `<p>احفر وقاتل واستكشف في عالم محاربي الخلد التنافسي الساحر. استخدم مهارات الحفر وقدراتك الخاصة للتفوق على الخصوم في الساحات تحت الأرض.</p>`
      },
      vi: {
        title: "Phiêu Lưu Chiến Đấu Thế Giới Chuột Chũi",
        description: "Bắt đầu cuộc phiêu lưu dưới lòng đất trong trò chơi chiến đấu dễ thương nhưng đầy tính cạnh tranh với chủ đề chuột chũi",
        story: `<p>Đào, chiến đấu và khám phá trong thế giới quyến rũ của các chiến binh chuột chũi đầy tính cạnh tranh. Sử dụng kỹ năng đào và khả năng đặc biệt để vượt qua đối thủ trong các đấu trường dưới lòng đất.</p>`
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
    id: 15,
    imageUrl: "/assets/Props Avalanche_ Climb Fast, Dodge Chaos, Win Live!.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Props Avalanche: Climb Fast, Dodge Chaos, Win Live!",
        description: "Race against time and opponents in this frantic prop-climbing challenge",
        story: `<p>Scale an ever-changing mountain of props while dodging obstacles and competing against other players in real-time. Every decision counts in this fast-paced vertical challenge!</p>`
      },
      de: {
        title: "Requisiten-Lawine: Schnell Klettern, Chaos Ausweichen, Live Gewinnen!",
        description: "Wettkampf gegen Zeit und Gegner in dieser hektischen Requisiten-Kletter-Herausforderung",
        story: `<p>Erklimme einen sich ständig verändernden Berg von Requisiten, während du Hindernissen ausweichst und in Echtzeit gegen andere Spieler antrittst. Jede Entscheidung zählt in dieser schnellen vertikalen Herausforderung!</p>`
      },
      fr: {
        title: "Avalanche d'Accessoires : Grimpez Vite, Évitez le Chaos, Gagnez en Direct !",
        description: "Faites la course contre le temps et les adversaires dans ce défi frénétique d'escalade d'accessoires",
        story: `<p>Escaladez une montagne d'accessoires en constante évolution tout en évitant les obstacles et en affrontant d'autres joueurs en temps réel. Chaque décision compte dans ce défi vertical rapide !</p>`
      },
      ru: {
        title: "Лавина Предметов: Быстро Карабкайся, Уворачивайся от Хаоса, Побеждай в Прямом Эфире!",
        description: "Соревнуйтесь со временем и противниками в этом безумном испытании по карабканью по предметам",
        story: `<p>Взбирайтесь по постоянно меняющейся горе предметов, уворачиваясь от препятствий и соревнуясь с другими игроками в реальном времени. Каждое решение имеет значение в этом быстром вертикальном испытании!</p>`
      },
      zh: {
        title: "道具雪崩：快速攀爬，躲避混乱，实时制胜！",
        description: "在这个疯狂的道具攀爬挑战中与时间和对手赛跑",
        story: `<p>在不断变化的道具之山上攀爬，同时躲避障碍物并与其他玩家实时竞争。在这个快节奏的垂直挑战中，每个决定都至关重要！</p>`
      },
      ar: {
        title: "انهيار الدعائم: تسلق سريع، تجنب الفوضى، فوز مباشر!",
        description: "سباق ضد الوقت والخصوم في هذا التحدي المحموم لتسلق الدعائم",
        story: `<p>تسلق جبلاً متغيراً باستمرار من الدعائم مع تجنب العقبات والتنافس مع لاعبين آخرين في الوقت الفعلي. كل قرار مهم في هذا التحدي العمودي السريع!</p>`
      },
      vi: {
        title: "Thác Đổ Đạo Cụ: Leo Nhanh, Né Tránh Hỗn Loạn, Chiến Thắng Trực Tiếp!",
        description: "Đua với thời gian và đối thủ trong thử thách leo trèo đạo cụ điên cuồng này",
        story: `<p>Leo lên ngọn núi đạo cụ luôn thay đổi trong khi né tránh chướng ngại vật và cạnh tranh với người chơi khác trong thời gian thực. Mỗi quyết định đều quan trọng trong thử thách theo chiều dọc nhanh này!</p>`
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
    id: 16,
    imageUrl: "/assets/Props Cleaner_ Tidy Up Fast, Before Chaos Hits!.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Props Cleaner: Tidy Up Fast, Before Chaos Hits!",
        description: "Clean up the chaos in this fast-paced tidying challenge",
        story: `<p>Race against time to organize and clean various environments before chaos takes over. Use special cleaning powers and compete with other players in real-time!</p>`
      },
      de: {
        title: "Requisiten-Putzer: Schnell Aufräumen, Bevor das Chaos Zuschlägt!",
        description: "Räume das Chaos in dieser schnellen Aufräum-Herausforderung auf",
        story: `<p>Wetteifere gegen die Zeit, um verschiedene Umgebungen zu organisieren und zu reinigen, bevor das Chaos überhand nimmt. Nutze spezielle Reinigungskräfte und tritt in Echtzeit gegen andere Spieler an!</p>`
      },
      fr: {
        title: "Nettoyeur d'Accessoires : Rangez Vite, Avant le Chaos !",
        description: "Nettoyez le chaos dans ce défi de rangement rapide",
        story: `<p>Faites la course contre le temps pour organiser et nettoyer différents environnements avant que le chaos ne prenne le dessus. Utilisez des pouvoirs de nettoyage spéciaux et affrontez d'autres joueurs en temps réel !</p>`
      },
      ru: {
        title: "Уборщик Реквизита: Убирайся Быстро, Пока Не Настал Хаос!",
        description: "Уберите хаос в этом быстром испытании по уборке",
        story: `<p>Соревнуйтесь со временем, чтобы организовать и очистить различные среды, прежде чем воцарится хаос. Используйте особые силы очистки и соревнуйтесь с другими игроками в реальном времени!</p>`
      },
      zh: {
        title: "道具清洁工：快速整理，混乱来临前！",
        description: "在这个快节奏的整理挑战中清理混乱",
        story: `<p>与时间赛跑，在混乱接管之前组织和清理各种环境。使用特殊清洁能力并与其他玩家实时竞争！</p>`
      },
      ar: {
        title: "منظف الدعائم: نظف بسرعة، قبل أن تضرب الفوضى!",
        description: "نظف الفوضى في هذا التحدي السريع للترتيب",
        story: `<p>سباق ضد الوقت لتنظيم وتنظيف البيئات المختلفة قبل أن تسيطر الفوضى. استخدم قوى التنظيف الخاصة وتنافس مع لاعبين آخرين في الوقت الفعلي!</p>`
      },
      vi: {
        title: "Người Dọn Dẹp Đạo Cụ: Dọn Dẹp Nhanh, Trước Khi Hỗn Loạn Ập Đến!",
        description: "Dọn dẹp hỗn loạn trong thử thách sắp xếp nhanh này",
        story: `<p>Đua với thời gian để tổ chức và làm sạch các môi trường khác nhau trước khi hỗn loạn chiếm ưu thế. Sử dụng sức mạnh làm sạch đặc biệt và cạnh tranh với người chơi khác trong thời gian thực!</p>`
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
    id: 17,
    imageUrl: "/assets/Protect the Princess_ The Crown Will Choose.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Protect the Princess: The Crown Will Choose",
        description: "Guard the princess through challenging battles and strategic decisions",
        story: `<p>Take on the role of a royal guardian in this strategic defense game. Make crucial decisions that will affect the kingdom's fate while protecting the princess from various threats.</p>`
      },
      de: {
        title: "Beschütze die Prinzessin: Die Krone wird Wählen",
        description: "Beschütze die Prinzessin durch herausfordernde Kämpfe und strategische Entscheidungen",
        story: `<p>Übernimm die Rolle eines königlichen Wächters in diesem strategischen Verteidigungsspiel. Triff wichtige Entscheidungen, die das Schicksal des Königreichs beeinflussen, während du die Prinzessin vor verschiedenen Bedrohungen schützt.</p>`
      },
      fr: {
        title: "Protégez la Princesse : La Couronne Choisira",
        description: "Gardez la princesse à travers des batailles difficiles et des décisions stratégiques",
        story: `<p>Prenez le rôle d'un gardien royal dans ce jeu de défense stratégique. Prenez des décisions cruciales qui affecteront le destin du royaume tout en protégeant la princesse de diverses menaces.</p>`
      },
      ru: {
        title: "Защити Принцессу: Корона Сделает Выбор",
        description: "Охраняйте принцессу через сложные битвы и стратегические решения",
        story: `<p>Возьмите на себя роль королевского стража в этой стратегической игре защиты. Принимайте важные решения, которые повлияют на судьбу королевства, защищая принцессу от различных угроз.</p>`
      },
      zh: {
        title: "保护公主：王冠将选择",
        description: "通过具有挑战性的战斗和战略决策保护公主",
        story: `<p>在这个战略防御游戏中担任皇家守卫的角色。在保护公主免受各种威胁的同时，做出影响王国命运的关键决定。</p>`
      },
      ar: {
        title: "حماية الأميرة: التاج سيختار",
        description: "احمِ الأميرة من خلال المعارك الصعبة والقرارات الاستراتيجية",
        story: `<p>تولى دور الحارس الملكي في هذه اللعبة الدفاعية الاستراتيجية. اتخذ قرارات حاسمة ستؤثر على مصير المملكة أثناء حماية الأميرة من التهديدات المختلفة.</p>`
      },
      vi: {
        title: "Bảo Vệ Công Chúa: Vương Miện Sẽ Chọn",
        description: "Bảo vệ công chúa qua những trận chiến đầy thử thách và quyết định chiến lược",
        story: `<p>Đảm nhận vai trò người bảo vệ hoàng gia trong trò chơi phòng thủ chiến lược này. Đưa ra những quyết định quan trọng sẽ ảnh hưởng đến số phận của vương quốc trong khi bảo vệ công chúa khỏi các mối đe dọa khác nhau.</p>`
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
    id: 18,
    imageUrl: "/assets/Ragnarok_ Fight for the Final Victory!.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Ragnarok: Fight for the Final Victory!",
        description: "Battle through Norse mythology in this epic action-adventure",
        story: `<p>Embark on an epic journey through the nine realms of Norse mythology. Fight alongside gods and heroes as you prepare for the final battle of Ragnarök.</p>`
      },
      de: {
        title: "Ragnarök: Kämpfe für den Finalen Sieg!",
        description: "Kämpfe durch die nordische Mythologie in diesem epischen Action-Adventure",
        story: `<p>Begib dich auf eine epische Reise durch die neun Welten der nordischen Mythologie. Kämpfe an der Seite von Göttern und Helden, während du dich auf die finale Schlacht von Ragnarök vorbereitest.</p>`
      },
      fr: {
        title: "Ragnarök : Combattez pour la Victoire Finale !",
        description: "Battez-vous à travers la mythologie nordique dans cette aventure d'action épique",
        story: `<p>Embarquez pour un voyage épique à travers les neuf royaumes de la mythologie nordique. Combattez aux côtés des dieux et des héros alors que vous vous préparez pour la bataille finale du Ragnarök.</p>`
      },
      ru: {
        title: "Рагнарёк: Битва за Финальную Победу!",
        description: "Сражайтесь через скандинавскую мифологию в этом эпическом экшн-приключении",
        story: `<p>Отправьтесь в эпическое путешествие через девять миров скандинавской мифологии. Сражайтесь бок о бок с богами и героями, готовясь к финальной битве Рагнарёка.</p>`
      },
      zh: {
        title: "诸神黄昏：为最终胜利而战！",
        description: "在这场史诗级动作冒险中穿越北欧神话",
        story: `<p>踏上穿越北欧神话九界的史诗之旅。与众神和英雄并肩作战，为诸神黄昏的最终之战做准备。</p>`
      },
      ar: {
        title: "راغناروك: القتال من أجل النصر النهائي!",
        description: "قاتل عبر الأساطير الشمالية في هذه المغامرة الملحمية",
        story: `<p>انطلق في رحلة ملحمية عبر العوالم التسعة للأساطير الشمالية. قاتل إلى جانب الآلهة والأبطال بينما تستعد للمعركة النهائية لراغناروك.</p>`
      },
      vi: {
        title: "Ragnarok: Chiến Đấu Cho Chiến Thắng Cuối Cùng!",
        description: "Chiến đấu qua thần thoại Bắc Âu trong cuộc phiêu lưu hành động hoành tráng này",
        story: `<p>Bắt đầu hành trình hoành tráng qua chín cõi của thần thoại Bắc Âu. Chiến đấu bên cạnh các vị thần và anh hùng khi bạn chuẩn bị cho trận chiến cuối cùng của Ragnarök.</p>`
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
    id: 19,
    imageUrl: "/assets/Speed Racing.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Speed Racing",
        description: "Experience high-octane racing action with stunning graphics and realistic physics",
        story: `<p>Push your limits in the most advanced racing simulation. Compete against skilled drivers, customize your vehicles, and master challenging tracks in your quest for racing glory.</p>`
      },
      de: {
        title: "Speed Racing",
        description: "Erlebe actiongeladenes Racing mit atemberaubender Grafik und realistischer Physik",
        story: `<p>Gehe in der fortschrittlichsten Rennsimulation an deine Grenzen. Tritt gegen geschickte Fahrer an, individualisiere deine Fahrzeuge und meistere anspruchsvolle Strecken in deinem Streben nach Rennruhm.</p>`
      },
      fr: {
        title: "Speed Racing",
        description: "Vivez l'action de course à haute octane avec des graphismes époustouflants et une physique réaliste",
        story: `<p>Repoussez vos limites dans la simulation de course la plus avancée. Affrontez des pilotes chevronnés, personnalisez vos véhicules et maîtrisez des circuits difficiles dans votre quête de gloire en course.</p>`
      },
      ru: {
        title: "Speed Racing",
        description: "Испытайте захватывающие гонки с потрясающей графикой и реалистичной физикой",
        story: `<p>Испытайте свои пределы в самой продвинутой гоночной симуляции. Соревнуйтесь с опытными гонщиками, настраивайте свои автомобили и осваивайте сложные трассы в погоне за гоночной славой.</p>`
      },
      zh: {
        title: "极速赛车",
        description: "体验具有惊人图形和真实物理效果的高能赛车动作",
        story: `<p>在最先进的赛车模拟中突破极限。在追求赛车荣耀的过程中与技术精湛的车手竞争，定制你的车辆，掌握具有挑战性的赛道。</p>`
      },
      ar: {
        title: "سباق السرعة",
        description: "اختبر إثارة السباقات عالية الأوكتان مع رسومات مذهلة وفيزياء واقعية",
        story: `<p>ادفع حدودك في أكثر محاكاة سباق تقدماً. تنافس ضد السائقين المهرة، خصص مركباتك، وأتقن المسارات الصعبة في سعيك نحو مجد السباقات.</p>`
      },
      vi: {
        title: "Đua Xe Tốc Độ",
        description: "Trải nghiệm hành động đua xe mạnh mẽ với đồ họa tuyệt đẹp và vật lý thực tế",
        story: `<p>Vượt qua giới hạn của bạn trong mô phỏng đua xe tiên tiến nhất. Cạnh tranh với các tay đua lành nghề, tùy chỉnh phương tiện của bạn và làm chủ các đường đua đầy thử thách trong hành trình tìm kiếm vinh quang đua xe.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4590 or AMD FX-8350",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 7 2700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 20,
    imageUrl: "/assets/Three Kingdoms Brawl_ Real-Time Faction War.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Three Kingdoms Brawl: Real-Time Faction War",
        description: "Command legendary heroes in epic real-time battles set in ancient China",
        story: `<p>Lead your chosen faction to victory in this intense real-time strategy game based on the Three Kingdoms period. Deploy legendary warriors, execute tactical maneuvers, and shape the future of ancient China.</p>`
      },
      de: {
        title: "Drei-Reiche-Kampf: Echtzeit-Fraktionskrieg",
        description: "Befehlige legendäre Helden in epischen Echtzeit-Schlachten im alten China",
        story: `<p>Führe deine gewählte Fraktion in diesem intensiven Echtzeit-Strategiespiel aus der Zeit der Drei Reiche zum Sieg. Setze legendäre Krieger ein, führe taktische Manöver aus und gestalte die Zukunft des alten China.</p>`
      },
      fr: {
        title: "Bataille des Trois Royaumes : Guerre de Faction en Temps Réel",
        description: "Commandez des héros légendaires dans des batailles épiques en temps réel dans la Chine ancienne",
        story: `<p>Menez votre faction choisie à la victoire dans ce jeu de stratégie intense en temps réel basé sur la période des Trois Royaumes. Déployez des guerriers légendaires, exécutez des manœuvres tactiques et façonnez l'avenir de la Chine ancienne.</p>`
      },
      ru: {
        title: "Битва Трёх Королевств: Война Фракций в Реальном Времени",
        description: "Командуйте легендарными героями в эпических сражениях в реальном времени в древнем Китае",
        story: `<p>Приведите свою избранную фракцию к победе в этой напряженной стратегической игре в реальном времени, основанной на периоде Трёх Королевств. Развертывайте легендарных воинов, выполняйте тактические маневры и формируйте будущее древнего Китая.</p>`
      },
      zh: {
        title: "三国乱斗：实时派系战争",
        description: "在古代中国的史诗级实时战斗中指挥传奇英雄",
        story: `<p>在这款基于三国时期的激烈实时战略游戏中带领你选择的阵营走向胜利。部署传奇战士，执行战术机动，塑造古代中国的未来。</p>`
      },
      ar: {
        title: "عراك الممالك الثلاث: حرب الفصائل في الوقت الحقيقي",
        description: "قُد الأبطال الأسطوريين في معارك ملحمية في الوقت الحقيقي في الصين القديمة",
        story: `<p>قُد فصيلتك المختارة إلى النصر في هذه اللعبة الاستراتيجية المكثفة في الوقت الحقيقي المستندة إلى فترة الممالك الثلاث. انشر المحاربين الأسطوريين، نفذ المناورات التكتيكية، وشكل مستقبل الصين القديمة.</p>`
      },
      vi: {
        title: "Loạn Chiến Tam Quốc: Chiến Tranh Phe Phái Thời Gian Thực",
        description: "Chỉ huy các anh hùng huyền thoại trong các trận chiến sử thi thời gian thực ở Trung Quốc cổ đại",
        story: `<p>Dẫn dắt phe phái bạn chọn đến chiến thắng trong trò chơi chiến thuật thời gian thực gay cấn này dựa trên thời kỳ Tam Quốc. Triển khai các chiến binh huyền thoại, thực hiện các thao tác chiến thuật và định hình tương lai của Trung Quốc cổ đại.</p>`
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
    id: 21,
    imageUrl: "/assets/Unified Kingdom.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Unified Kingdom",
        description: "Unite the divided lands through diplomacy and warfare in this grand strategy game",
        story: `<p>Lead your faction to unite the fractured kingdoms through a combination of diplomatic alliances and strategic warfare. Every decision shapes the future of the realm.</p>`
      },
      de: {
        title: "Vereinigtes Königreich",
        description: "Vereine die geteilten Länder durch Diplomatie und Kriegsführung in diesem großen Strategiespiel",
        story: `<p>Führe deine Fraktion zur Vereinigung der zersplitterten Königreiche durch eine Kombination aus diplomatischen Bündnissen und strategischer Kriegsführung. Jede Entscheidung formt die Zukunft des Reiches.</p>`
      },
      fr: {
        title: "Royaume Unifié",
        description: "Unissez les terres divisées par la diplomatie et la guerre dans ce grand jeu de stratégie",
        story: `<p>Menez votre faction pour unir les royaumes fracturés grâce à une combinaison d'alliances diplomatiques et de guerre stratégique. Chaque décision façonne l'avenir du royaume.</p>`
      },
      ru: {
        title: "Объединённое Королевство",
        description: "Объедините разделенные земли через дипломатию и войну в этой масштабной стратегической игре",
        story: `<p>Ведите свою фракцию к объединению раздробленных королевств через сочетание дипломатических союзов и стратегической войны. Каждое решение формирует будущее царства.</p>`
      },
      zh: {
        title: "统一王国",
        description: "在这款宏大的战略游戏中通过外交和战争统一分裂的土地",
        story: `<p>通过外交联盟和战略战争的结合，带领你的派系统一分裂的王国。每个决定都塑造着王国的未来。</p>`
      },
      ar: {
        title: "المملكة الموحدة",
        description: "وحد الأراضي المنقسمة من خلال الدبلوماسية والحرب في هذه اللعبة الاستراتيجية الكبرى",
        story: `<p>قد فصيلتك لتوحيد الممالك المنقسمة من خلال مزيج من التحالفات الدبلوماسية والحرب الاستراتيجية. كل قرار يشكل مستقبل المملكة.</p>`
      },
      vi: {
        title: "Vương Quốc Thống Nhất",
        description: "Thống nhất các vùng đất chia rẽ thông qua ngoại giao và chiến tranh trong trò chơi chiến lược quy mô lớn này",
        story: `<p>Lãnh đạo phe phái của bạn để thống nhất các vương quốc bị chia rẽ thông qua kết hợp các liên minh ngoại giao và chiến tranh chiến lược. Mỗi quyết định đều định hình tương lai của vương quốc.</p>`
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
    id: 22,
    imageUrl: "/assets/Legion Clash.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash",
        description: "Command vast armies in epic tactical battles across ancient battlefields",
        story: `<p>Take command of massive legions in this tactical warfare game. Deploy units strategically, utilize terrain advantages, and outmaneuver your opponents to achieve victory.</p>`
      },
      de: {
        title: "Legionen-Zusammenstoß",
        description: "Befehlige riesige Armeen in epischen taktischen Schlachten auf antiken Schlachtfeldern",
        story: `<p>Übernimm das Kommando über massive Legionen in diesem taktischen Kriegsspiel. Setze Einheiten strategisch ein, nutze Geländevorteile und überlistet deine Gegner, um den Sieg zu erringen.</p>`
      },
      fr: {
        title: "Choc des Légions",
        description: "Commandez de vastes armées dans des batailles tactiques épiques à travers des champs de bataille antiques",
        story: `<p>Prenez le commandement de légions massives dans ce jeu de guerre tactique. Déployez des unités stratégiquement, utilisez les avantages du terrain et surpassez vos adversaires pour obtenir la victoire.</p>`
      },
      ru: {
        title: "Столкновение Легионов",
        description: "Командуйте огромными армиями в эпических тактических сражениях на древних полях битв",
        story: `<p>Возьмите под командование массивные легионы в этой тактической военной игре. Стратегически размещайте подразделения, используйте преимущества местности и перехитрите противников для достижения победы.</p>`
      },
      zh: {
        title: "军团冲突",
        description: "在古代战场上指挥庞大军队进行史诗级战术战斗",
        story: `<p>在这款战术战争游戏中指挥庞大的军团。战略性地部署部队，利用地形优势，智胜对手以获得胜利。</p>`
      },
      ar: {
        title: "صدام الفيالق",
        description: "قُد جيوشاً ضخمة في معارك تكتيكية ملحمية عبر ساحات المعارك القديمة",
        story: `<p>تولَّ قيادة الفيالق الضخمة في هذه اللعبة الحربية التكتيكية. انشر الوحدات بشكل استراتيجي، استفد من مزايا التضاريس، وتفوق على خصومك لتحقيق النصر.</p>`
      },
      vi: {
        title: "Đại Chiến Quân Đoàn",
        description: "Chỉ huy các đội quân khổng lồ trong các trận chiến chiến thuật hoành tráng trên các chiến trường cổ đại",
        story: `<p>Nắm quyền chỉ huy các quân đoàn khổng lồ trong trò chơi chiến tranh chiến thuật này. Triển khai đơn vị một cách chiến lược, tận dụng lợi thế địa hình và vượt mặt đối thủ để giành chiến thắng.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-7400 or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-9700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 23,
    imageUrl: "/assets/Legion Clash 2.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash 2",
        description: "Return to the battlefield with enhanced tactics and epic new campaigns",
        story: `<p>The legendary tactical warfare continues with improved mechanics, new unit types, and challenging campaigns. Lead your enhanced legions to glory in even more epic battles.</p>`
      },
      de: {
        title: "Legionen-Zusammenstoß 2",
        description: "Kehre mit verbesserten Taktiken und epischen neuen Kampagnen auf das Schlachtfeld zurück",
        story: `<p>Die legendäre taktische Kriegsführung geht weiter mit verbesserten Mechaniken, neuen Einheitentypen und herausfordernden Kampagnen. Führe deine verbesserten Legionen in noch epischeren Schlachten zum Ruhm.</p>`
      },
      fr: {
        title: "Choc des Légions 2",
        description: "Retournez sur le champ de bataille avec des tactiques améliorées et de nouvelles campagnes épiques",
        story: `<p>La guerre tactique légendaire continue avec des mécaniques améliorées, de nouveaux types d'unités et des campagnes stimulantes. Menez vos légions améliorées à la gloire dans des batailles encore plus épiques.</p>`
      },
      ru: {
        title: "Столкновение Легионов 2",
        description: "Вернитесь на поле боя с улучшенной тактикой и эпическими новыми кампаниями",
        story: `<p>Легендарная тактическая война продолжается с улучшенной механикой, новыми типами подразделений и сложными кампаниями. Ведите свои усовершенствованные легионы к славе в еще более эпических сражениях.</p>`
      },
      zh: {
        title: "军团冲突 2",
        description: "带着强化的战术和史诗级新战役重返战场",
        story: `<p>传奇的战术战争继续，带来改进的机制、新的单位类型和具有挑战性的战役。在更加史诗级的战斗中带领你强化的军团走向荣耀。</p>`
      },
      ar: {
        title: "صدام الفيالق 2",
        description: "عُد إلى ساحة المعركة مع تكتيكات محسنة وحملات ملحمية جديدة",
        story: `<p>تستمر الحرب التكتيكية الأسطورية مع آليات محسنة، وأنواع جديدة من الوحدات، وحملات مليئة بالتحديات. قُد فيالقك المحسنة إلى المجد في معارك أكثر ملحمية.</p>`
      },
      vi: {
        title: "Đại Chiến Quân Đoàn 2",
        description: "Trở lại chiến trường với chiến thuật được cải tiến và các chiến dịch mới hoành tráng",
        story: `<p>Cuộc chiến chiến thuật huyền thoại tiếp tục với cơ chế được cải tiến, các loại đơn vị mới và các chiến dịch đầy thử thách. Dẫn dắt quân đoàn được nâng cấp của bạn đến vinh quang trong những trận chiến hoành tráng hơn.</p>`
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
        processor: "Intel Core i7-10700K or AMD Ryzen 7 5800X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 24,
    imageUrl: "/assets/King of Soldiers.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "King of Soldiers",
        description: "Rise through the ranks from soldier to king in this military strategy RPG",
        story: `<p>Begin your journey as a common soldier and climb the military hierarchy through strategic battles and political maneuvering. Your decisions will shape your path to becoming the ultimate ruler.</p>`
      },
      de: {
        title: "König der Soldaten",
        description: "Steige vom Soldaten zum König auf in diesem militärischen Strategie-RPG",
        story: `<p>Beginne deine Reise als einfacher Soldat und erklimme die militärische Hierarchie durch strategische Schlachten und politisches Manövrieren. Deine Entscheidungen werden deinen Weg zum ultimativen Herrscher bestimmen.</p>`
      },
      fr: {
        title: "Roi des Soldats",
        description: "Gravissez les échelons de soldat à roi dans ce RPG de stratégie militaire",
        story: `<p>Commencez votre voyage en tant que simple soldat et gravissez la hiérarchie militaire à travers des batailles stratégiques et des manœuvres politiques. Vos décisions façonneront votre chemin vers le statut de souverain ultime.</p>`
      },
      ru: {
        title: "Король Солдат",
        description: "Поднимитесь по званиям от солдата до короля в этой военной стратегической RPG",
        story: `<p>Начните свой путь как простой солдат и поднимайтесь по военной иерархии через стратегические сражения и политические маневры. Ваши решения определят ваш путь к становлению верховным правителем.</p>`
      },
      zh: {
        title: "士兵之王",
        description: "在这款军事战略角色扮演游戏中从士兵晋升为国王",
        story: `<p>从普通士兵开始你的旅程，通过战略战斗和政治运作攀登军事等级。你的决定将塑造你成为终极统治者的道路。</p>`
      },
      ar: {
        title: "ملك الجنود",
        description: "ارتقِ في الرتب من جندي إلى ملك في لعبة تقمص الأدوار الاستراتيجية العسكرية هذه",
        story: `<p>ابدأ رحلتك كجندي عادي واصعد التسلسل العسكري من خلال المعارك الاستراتيجية والمناورات السياسية. قراراتك ستشكل طريقك لتصبح الحاكم الأعلى.</p>`
      },
      vi: {
        title: "Vua Của Binh Lính",
        description: "Thăng tiến từ người lính đến vua trong trò chơi nhập vai chiến lược quân sự này",
        story: `<p>Bắt đầu hành trình của bạn như một người lính bình thường và leo lên hệ thống cấp bậc quân sự thông qua các trận chiến chiến lược và vận động chính trị. Quyết định của bạn sẽ định hình con đường trở thành người cai trị tối cao.</p>`
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
    id: 25,
    imageUrl: "/assets/Color War.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Color War",
        description: "Paint the battlefield in vibrant colors to claim territory in this unique multiplayer game",
        story: `<p>Engage in colorful warfare where your weapons are paint and your objective is to cover the arena in your team's colors. Use strategy and teamwork to dominate the battlefield in this innovative multiplayer experience.</p>`
      },
      de: {
        title: "Farbenkrieg",
        description: "Bemale das Schlachtfeld in leuchtenden Farben, um Territorium in diesem einzigartigen Multiplayer-Spiel zu beanspruchen",
        story: `<p>Nimm an einem farbenfrohen Krieg teil, wo deine Waffen Farbe sind und dein Ziel ist es, die Arena in den Farben deines Teams zu bedecken. Nutze Strategie und Teamwork, um das Schlachtfeld in dieser innovativen Multiplayer-Erfahrung zu dominieren.</p>`
      },
      fr: {
        title: "Guerre des Couleurs",
        description: "Peignez le champ de bataille de couleurs vives pour revendiquer le territoire dans ce jeu multijoueur unique",
        story: `<p>Participez à une guerre colorée où vos armes sont la peinture et votre objectif est de couvrir l'arène des couleurs de votre équipe. Utilisez la stratégie et le travail d'équipe pour dominer le champ de bataille dans cette expérience multijoueur innovante.</p>`
      },
      ru: {
        title: "Война Красок",
        description: "Раскрасьте поле боя яркими цветами, чтобы захватить территорию в этой уникальной многопользовательской игре",
        story: `<p>Участвуйте в красочной войне, где ваше оружие - краска, а цель - покрыть арену цветами вашей команды. Используйте стратегию и командную работу, чтобы доминировать на поле боя в этом инновационном многопользовательском опыте.</p>`
      },
      zh: {
        title: "色彩战争",
        description: "在这款独特的多人游戏中用鲜艳的颜色涂抹战场以占领领地",
        story: `<p>参与一场色彩缤纷的战争，你的武器是颜料，你的目标是用你队伍的颜色覆盖竞技场。在这种创新的多人体验中运用策略和团队合作来主导战场。</p>`
      },
      ar: {
        title: "حرب الألوان",
        description: "اطلِ ساحة المعركة بألوان نابضة بالحياة للمطالبة بالأراضي في هذه اللعبة الجماعية الفريدة",
        story: `<p>شارك في حرب ملونة حيث أسلحتك هي الطلاء وهدفك هو تغطية الساحة بألوان فريقك. استخدم الاستراتيجية والعمل الجماعي للسيطرة على ساحة المعركة في هذه التجربة الجماعية المبتكرة.</p>`
      },
      vi: {
        title: "Chiến Tranh Màu Sắc",
        description: "Tô màu chiến trường bằng những màu sắc rực rỡ để giành lãnh thổ trong trò chơi nhiều người chơi độc đáo này",
        story: `<p>Tham gia vào cuộc chiến đầy màu sắc nơi vũ khí của bạn là sơn và mục tiêu của bạn là phủ đấu trường bằng màu sắc của đội bạn. Sử dụng chiến lược và làm việc nhóm để thống trị chiến trường trong trải nghiệm nhiều người chơi sáng tạo này.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 or AMD Ryzen 3 1200",
        memory: "6 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 26,
    imageUrl: "/assets/Color War.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Color War",
        description: "Paint your way to victory in this vibrant multiplayer battle arena",
        story: `<p>Enter a world where color is your weapon. Splash, paint, and strategize your way through dynamic arenas while competing against other players in real-time color-based combat.</p>`
      },
      de: {
        title: "Farbenkrieg",
        description: "Male deinen Weg zum Sieg in dieser lebendigen Mehrspieler-Kampfarena",
        story: `<p>Betritt eine Welt, in der Farbe deine Waffe ist. Spritz, male und entwickle Strategien in dynamischen Arenen, während du gegen andere Spieler in Echtzeit-Farbkämpfen antrittst.</p>`
      },
      fr: {
        title: "Guerre des Couleurs",
        description: "Peignez votre chemin vers la victoire dans cette arène de combat multijoueur vibrante",
        story: `<p>Entrez dans un monde où la couleur est votre arme. Éclaboussez, peignez et élaborez des stratégies dans des arènes dynamiques tout en affrontant d'autres joueurs dans des combats en temps réel basés sur les couleurs.</p>`
      },
      ru: {
        title: "Война Красок",
        description: "Проложите путь к победе красками в этой яркой многопользовательской боевой арене",
        story: `<p>Войдите в мир, где цвет - ваше оружие. Разбрызгивайте, красьте и разрабатывайте стратегию на динамичных аренах, соревнуясь с другими игроками в цветных боях в реальном времени.</p>`
      },
      zh: {
        title: "色彩战争",
        description: "在这个充满活力的多人战斗竞技场中用绘画赢得胜利",
        story: `<p>进入一个色彩即武器的世界。在动态竞技场中泼洒、绘画和策划，与其他玩家进行实时的基于色彩的战斗。</p>`
      },
      ar: {
        title: "حرب الألوان",
        description: "ارسم طريقك نحو النصر في ساحة معركة متعددة اللاعبين نابضة بالحياة",
        story: `<p>ادخل عالماً حيث اللون هو سلاحك. اسكب ولوّن وخطط طريقك عبر ساحات ديناميكية أثناء المنافسة ضد لاعبين آخرين في قتال قائم على الألوان في الوقت الفعلي.</p>`
      },
      vi: {
        title: "Chiến Tranh Sắc Màu",
        description: "Vẽ con đường đến chiến thắng trong đấu trường nhiều người chơi sống động này",
        story: `<p>Bước vào thế giới nơi màu sắc là vũ khí của bạn. Tung tóe, vẽ và lập chiến lược trong các đấu trường năng động trong khi thi đấu với người chơi khác trong trận chiến thời gian thực dựa trên màu sắc.</p>`
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
    id: 27,
    imageUrl: "/assets/Legion Clash.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash",
        description: "Command vast armies in epic real-time strategy battles",
        story: `<p>Lead massive armies into battle in this grand-scale strategy game. Control multiple legions, execute complex tactical maneuvers, and dominate the battlefield through superior strategy.</p>`
      },
      de: {
        title: "Legionen-Zusammenstoß",
        description: "Befehlige riesige Armeen in epischen Echtzeit-Strategieschlachten",
        story: `<p>Führe massive Armeen in diesem großangelegten Strategiespiel in die Schlacht. Kontrolliere mehrere Legionen, führe komplexe taktische Manöver aus und dominiere das Schlachtfeld durch überlegene Strategie.</p>`
      },
      fr: {
        title: "Choc des Légions",
        description: "Commandez de vastes armées dans des batailles de stratégie épiques en temps réel",
        story: `<p>Menez des armées massives au combat dans ce jeu de stratégie à grande échelle. Contrôlez plusieurs légions, exécutez des manœuvres tactiques complexes et dominez le champ de bataille grâce à une stratégie supérieure.</p>`
      },
      ru: {
        title: "Столкновение Легионов",
        description: "Командуйте огромными армиями в эпических стратегических сражениях в реальном времени",

        story: `<p>Ведите массивные армии в бой в этой масштабной стратегической игре. Управляйте несколькими легионами, выполняйте сложные тактические маневры и доминируйте на поле боя благодаря превосходной стратегии.</p>`
      },
      zh: {
        title: "军团冲突",
        description: "在史诗级实时战略战斗中指挥庞大军队",
        story: `<p>在这款大规模战略游戏中率领庞大军队投入战斗。控制多个军团，执行复杂的战术机动，通过卓越的战略主宰战场。</p>`
      },
      ar: {
        title: "صدام الفيالق",
        description: "قُد جيوشاً ضخمة في معارك استراتيجية ملحمية في الوقت الحقيقي",
        story: `<p>قُد جيوشاً ضخمة إلى المعركة في هذه اللعبة الاستراتيجية واسعة النطاق. تحكم في فيالق متعددة، نفذ مناورات تكتيكية معقدة، وسيطر على ساحة المعركة من خلال استراتيجية متفوقة.</p>`
      },
      vi: {
        title: "Đụng Độ Quân Đoàn",
        description: "Chỉ huy các đội quân khổng lồ trong các trận chiến chiến lược thời gian thực hoành tráng",
        story: `<p>Dẫn dắt các đội quân khổng lồ vào trận chiến trong trò chơi chiến lược quy mô lớn này. Kiểm soát nhiều quân đoàn, thực hiện các thao tác chiến thuật phức tạp và thống trị chiến trường thông qua chiến lược vượt trội.</p>`
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
    id: 28,
    imageUrl: "/assets/Legion Clash 2.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash 2",
        description: "The epic sequel to the legendary strategy battle game",
        story: `<p>Return to the battlefield with enhanced graphics, new tactical options, and even larger armies. Command multiple specialized legions and engage in epic-scale warfare with improved strategic depth.</p>`
      },
      de: {
        title: "Legionen-Zusammenstoß 2",
        description: "Die epische Fortsetzung des legendären Strategiespiel-Klassikers",
        story: `<p>Kehre mit verbesserter Grafik, neuen taktischen Optionen und noch größeren Armeen auf das Schlachtfeld zurück. Befehlige mehrere spezialisierte Legionen und führe epische Kriegshandlungen mit verbesserter strategischer Tiefe.</p>`
      },
      fr: {
        title: "Choc des Légions 2",
        description: "La suite épique du légendaire jeu de bataille stratégique",
        story: `<p>Retournez sur le champ de bataille avec des graphismes améliorés, de nouvelles options tactiques et des armées encore plus importantes. Commandez plusieurs légions spécialisées et engagez-vous dans une guerre à grande échelle avec une profondeur stratégique améliorée.</p>`
      },
      ru: {
        title: "Столкновение Легионов 2",
        description: "Эпическое продолжение легендарной стратегической боевой игры",
        story: `<p>Вернитесь на поле боя с улучшенной графикой, новыми тактическими возможностями и еще более крупными армиями. Командуйте несколькими специализированными легионами и участвуйте в масштабных военных действиях с улучшенной стратегической глубиной.</p>`
      },
      zh: {
        title: "军团冲突2",
        description: "传奇战略战斗游戏的史诗续作",
        story: `<p>带着增强的图形、新的战术选项和更大的军队重返战场。指挥多个专业军团，进行具有改进战略深度的史诗级战争。</p>`
      },
      ar: {
        title: "صدام الفيالق 2",
        description: "التكملة الملحمية للعبة المعارك الاستراتيجية الأسطورية",
        story: `<p>عُد إلى ساحة المعركة مع رسومات محسنة وخيارات تكتيكية جديدة وجيوش أكبر. قُد فيالق متخصصة متعددة وشارك في حرب على نطاق ملحمي مع عمق استراتيجي محسن.</p>`
      },
      vi: {
        title: "Đụng Độ Quân Đoàn 2",
        description: "Phần tiếp theo hoành tráng của trò chơi chiến đấu chiến lược huyền thoại",
        story: `<p>Trở lại chiến trường với đồ họa nâng cao, các tùy chọn chiến thuật mới và quân đội còn lớn hơn. Chỉ huy nhiều quân đoàn chuyên biệt và tham gia chiến tranh quy mô sử thi với chiều sâu chiến lược được cải thiện.</p>`
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
    id: 29,
    imageUrl: "/assets/Unified Kingdom.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Unified Kingdom",
        description: "Build and manage your medieval kingdom in this grand strategy simulation",
        story: `<p>Take control of a fledgling medieval kingdom and guide it to greatness. Balance resources, forge alliances, and defend your realm while expanding your influence across the continent.</p>`
      },
      de: {
        title: "Vereinigtes Königreich",
        description: "Baue und verwalte dein mittelalterliches Königreich in dieser großen Strategiesimulation",
        story: `<p>Übernimm die Kontrolle über ein aufstrebendes mittelalterliches Königreich und führe es zur Größe. Balanciere Ressourcen, schmiede Bündnisse und verteidige dein Reich, während du deinen Einfluss über den Kontinent ausdehnst.</p>`
      },
      fr: {
        title: "Royaume Unifié",
        description: "Construisez et gérez votre royaume médiéval dans cette simulation de grande stratégie",
        story: `<p>Prenez le contrôle d'un royaume médiéval naissant et guidez-le vers la grandeur. Équilibrez les ressources, forgez des alliances et défendez votre royaume tout en étendant votre influence à travers le continent.</p>`
      },
      ru: {
        title: "Объединённое Королевство",
        description: "Постройте и управляйте своим средневековым королевством в этой масштабной стратегической симуляции",
        story: `<p>Возьмите под контроль зарождающееся средневековое королевство и приведите его к величию. Балансируйте ресурсы, создавайте союзы и защищайте свое королевство, расширяя свое влияние по всему континенту.</p>`
      },
      zh: {
        title: "统一王国",
        description: "在这款宏大的战略模拟游戏中建设和管理你的中世纪王国",
        story: `<p>掌控一个新兴的中世纪王国，引导它走向辉煌。平衡资源、建立联盟，在扩大你在大陆上的影响力的同时保卫你的领地。</p>`
      },
      ar: {
        title: "المملكة الموحدة",
        description: "ابنِ وأدر مملكتك في العصور الوسطى في هذه المحاكاة الاستراتيجية الكبرى",
        story: `<p>تولَّ السيطرة على مملكة ناشئة في العصور الوسطى وقدها نحو العظمة. وازن الموارد، أقم التحالفات، ودافع عن مملكتك أثناء توسيع نفوذك عبر القارة.</p>`
      },
      vi: {
        title: "Vương Quốc Thống Nhất",
        description: "Thống nhất các vùng đất chia rẽ thông qua ngoại giao và chiến tranh trong trò chơi chiến lược quy mô lớn này",
        story: `<p>Lãnh đạo phe phái của bạn để thống nhất các vương quốc bị chia rẽ thông qua kết hợp các liên minh ngoại giao và chiến tranh chiến lược. Mỗi quyết định đều định hình tương lai của vương quốc.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i5-4460 or AMD FX-6300",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i7-7700 or AMD Ryzen 5 1600",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 30,
    imageUrl: "/assets/King of Soldiers.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "King of Soldiers",
        description: "Lead your elite squad through intense tactical combat missions",
        story: `<p>Command a specialized military unit in modern warfare scenarios. Make split-second decisions, utilize advanced weaponry, and execute precise tactical maneuvers to achieve mission objectives.</p>`
      },
      de: {
        title: "König der Soldaten",
        description: "Führe deine Eliteeinheit durch intensive taktische Kampfmissionen",
        story: `<p>Befehlige eine spezialisierte Militäreinheit in modernen Kriegsszenarien. Triff blitzschnelle Entscheidungen, nutze fortschrittliche Waffen und führe präzise taktische Manöver aus, um Missionsziele zu erreichen.</p>`
      },
      fr: {
        title: "Roi des Soldats",
        description: "Dirigez votre escouade d'élite à travers des missions de combat tactique intenses",
        story: `<p>Commandez une unité militaire spécialisée dans des scénarios de guerre moderne. Prenez des décisions en une fraction de seconde, utilisez des armes avancées et exécutez des manœuvres tactiques précises pour atteindre les objectifs de mission.</p>`
      },
      ru: {
        title: "Король Солдат",
        description: "Ведите свой элитный отряд через интенсивные тактические боевые миссии",
        story: `<p>Командуйте специализированным военным подразделением в сценариях современной войны. Принимайте мгновенные решения, используйте передовое вооружение и выполняйте точные тактические маневры для достижения целей миссии.</p>`
      },
      zh: {
        title: "士兵之王",
        description: "带领你的精英小队完成激烈的战术战斗任务",
        story: `<p>在现代战争场景中指挥专业军事单位。做出瞬间决策，使用先进武器，执行精确的战术机动以实现任务目标。</p>`
      },
      ar: {
        title: "ملك الجنود",
        description: "قُد فرقتك النخبة عبر مهام قتالية تكتيكية مكثفة",
        story: `<p>قُد وحدة عسكرية متخصصة في سيناريوهات الحرب الحديثة. اتخذ قرارات سريعة، استخدم الأسلحة المتقدمة، ونفذ مناورات تكتيكية دقيقة لتحقيق أهداف المهمة.</p>`
      },
      vi: {
        title: "Vua Của Binh Sĩ",
        description: "Lãnh đạo đội đặc nhiệm của bạn qua các nhiệm vụ chiến đấu chiến thuật gay cấn",
        story: `<p>Chỉ huy một đơn vị quân sự chuyên biệt trong các tình huống chiến tranh hiện đại. Đưa ra quyết định trong tích tắc, sử dụng vũ khí tiên tiến và thực hiện các thao tác chiến thuật chính xác để đạt được mục tiêu nhiệm vụ.</p>`
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
    },
  },
  {
    id: 31,
    imageUrl: "/assets/Color War.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Color War",
        description: "Paint your way to victory in this vibrant multiplayer battle arena",
        story: `<p>Enter a world where color is your weapon. Paint the arena, claim territory, and outmaneuver your opponents in this fast-paced multiplayer showdown.</p>`
      },
      de: {
        title: "Farbenkrieg",
        description: "Male deinen Weg zum Sieg in dieser lebendigen Mehrspieler-Kampfarena",
        story: `<p>Betritt eine Welt, in der Farbe deine Waffe ist. Male die Arena, beanspruche Territorium und überlistet deine Gegner in diesem schnellen Mehrspieler-Showdown.</p>`
      },
      fr: {
        title: "Guerre des Couleurs",
        description: "Peignez votre chemin vers la victoire dans cette arène de bataille multijoueur vibrante",
        story: `<p>Entrez dans un monde où la couleur est votre arme. Peignez l'arène, revendiquez du territoire et surpassez vos adversaires dans cet affrontement multijoueur rapide.</p>`
      },
      ru: {
        title: "Война Красок",
        description: "Прокладывайте путь к победе красками в этой яркой многопользовательской боевой арене",
        story: `<p>Войдите в мир, где цвет - ваше оружие. Раскрасьте арену, захватите территорию и перехитрите противников в этой динамичной многопользовательской схватке.</p>`
      },
      zh: {
        title: "色彩战争",
        description: "在这个充满活力的多人战斗竞技场中用绘画赢得胜利",
        story: `<p>进入一个颜色就是武器的世界。在这场快节奏的多人对决中绘制竞技场，占领领地，智胜对手。</p>`
      },
      ar: {
        title: "حرب الألوان",
        description: "ارسم طريقك نحو النصر في ساحة معركة متعددة اللاعبين نابضة بالحياة",
        story: `<p>ادخل عالماً حيث اللون هو سلاحك. ارسم الساحة، اطالب بالأراضي، وتفوق على خصومك في هذه المواجهة السريعة متعددة اللاعبين.</p>`
      },
      vi: {
        title: "Chiến Tranh Sắc Màu",
        description: "Vẽ con đường đến chiến thắng trong đấu trường nhiều người chơi sống động này",
        story: `<p>Bước vào thế giới nơi màu sắc là vũ khí của bạn. Vẽ đấu trường, giành lãnh thổ và vượt qua đối thủ trong cuộc đối đầu nhiều người chơi nhịp độ nhanh này.</p>`
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
    id: 32,
    imageUrl: "/assets/Legion Clash.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash",
        description: "Command vast armies in epic real-time strategy battles",
        story: `<p>Lead your legion to glory in massive-scale battles. Deploy units strategically, manage resources, and outmaneuver your opponents in this intense RTS experience.</p>`
      },
      de: {
        title: "Legion Zusammenstoß",
        description: "Befehlige riesige Armeen in epischen Echtzeit-Strategieschlachten",
        story: `<p>Führe deine Legion in gewaltigen Schlachten zum Ruhm. Setze Einheiten strategisch ein, verwalte Ressourcen und überlistet deine Gegner in diesem intensiven RTS-Erlebnis.</p>`
      },
      fr: {
        title: "Choc des Légions",
        description: "Commandez de vastes armées dans des batailles de stratégie épiques en temps réel",
        story: `<p>Menez votre légion à la gloire dans des batailles à grande échelle. Déployez des unités stratégiquement, gérez les ressources et surpassez vos adversaires dans cette expérience STR intense.</p>`
      },
      ru: {
        title: "Столкновение Легионов",
        description: "Командуйте огромными армиями в эпических стратегических сражениях в реальном времени",
        story: `<p>Ведите свой легион к славе в масштабных сражениях. Стратегически размещайте отряды, управляйте ресурсами и перехитрите противников в этой напряженной RTS-игре.</p>`
      },
      zh: {
        title: "军团冲突",
        description: "在史诗级即时战略战斗中指挥庞大军队",
        story: `<p>在大规模战斗中带领你的军团走向荣耀。在这个紧张的即时战略体验中战略性地部署单位，管理资源，智胜对手。</p>`
      },
      ar: {
        title: "صدام الفيالق",
        description: "قُد جيوشاً ضخمة في معارك استراتيجية ملحمية في الوقت الحقيقي",
        story: `<p>قُد فيلقك إلى المجد في معارك واسعة النطاق. انشر الوحدات بشكل استراتيجي، أدر الموارد، وتفوق على خصومك في هذه التجربة الاستراتيجية المكثفة في الوقت الحقيقي.</p>`
      },
      vi: {
        title: "Đụng Độ Quân Đoàn",
        description: "Chỉ huy các đội quân khổng lồ trong các trận chiến chiến lược thời gian thực hoành tráng",
        story: `<p>Dẫn dắt quân đoàn của bạn đến vinh quang trong các trận chiến quy mô lớn. Triển khai đơn vị một cách chiến lược, quản lý tài nguyên và vượt qua đối thủ trong trải nghiệm RTS gay cấn này.</p>`
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
    imageUrl: "/assets/Legion Clash 2.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash 2",
        description: "The epic sequel to the legendary strategy battle game",
        story: `<p>Return to the battlefield with enhanced graphics, new units, and deeper strategic gameplay. Lead your enhanced legion through challenging campaigns and intense multiplayer battles.</p>`
      },
      de: {
        title: "Legion Zusammenstoß 2",
        description: "Die epische Fortsetzung des legendären Strategiespiels",
        story: `<p>Kehre mit verbesserter Grafik, neuen Einheiten und tiefergehendem strategischen Gameplay auf das Schlachtfeld zurück. Führe deine verbesserte Legion durch herausfordernde Kampagnen und intensive Mehrspielerschlachten.</p>`
      },
      fr: {
        title: "Choc des Légions 2",
        description: "La suite épique du légendaire jeu de bataille stratégique",
        story: `<p>Retournez sur le champ de bataille avec des graphismes améliorés, de nouvelles unités et un gameplay stratégique plus profond. Dirigez votre légion améliorée à travers des campagnes stimulantes et des batailles multijoueurs intenses.</p>`
      },
      ru: {
        title: "Столкновение Легионов 2",
        description: "Эпическое продолжение легендарной стратегической боевой игры",
        story: `<p>Вернитесь на поле боя с улучшенной графикой, новыми отрядами и более глубоким стратегическим геймплеем. Ведите свой усовершенствованный легион через сложные кампании и напряженные многопользовательские сражения.</p>`
      },
      zh: {
        title: "军团冲突2",
        description: "传奇战略战斗游戏的史诗续作",
        story: `<p>以增强的图形、新单位和更深层的战略游戏玩法重返战场。带领你的增强军团完成具有挑战性的战役和激烈的多人战斗。</p>`
      },
      ar: {
        title: "صدام الفيالق 2",
        description: "التكملة الملحمية للعبة المعارك الاستراتيجية الأسطورية",
        story: `<p>عُد إلى ساحة المعركة مع رسومات محسنة، وحدات جديدة، وأسلوب لعب استراتيجي أعمق. قُد فيلقك المحسن عبر حملات صعبة ومعارك متعددة اللاعبين مكثفة.</p>`
      },
      vi: {
        title: "Đụng Độ Quân Đoàn 2",
        description: "Phần tiếp theo hoành tráng của trò chơi chiến đấu chiến lược huyền thoại",
        story: `<p>Trở lại chiến trường với đồ họa nâng cao, các đơn vị mới và lối chơi chiến lược sâu sắc hơn. Dẫn dắt quân đoàn được nâng cấp của bạn qua các chiến dịch đầy thử thách và các trận chiến nhiều người chơi gay cấn.</p>`
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
    id: 34,
    imageUrl: "/assets/Unified Kingdom.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Unified Kingdom",
        description: "Build and manage your medieval kingdom in this grand strategy game",
        story: `<p>Create and expand your medieval empire through diplomacy, warfare, and economic management. Make crucial decisions that will shape the destiny of your kingdom.</p>`
      },
      de: {
        title: "Vereinigtes Königreich",
        description: "Baue und verwalte dein mittelalterliches Königreich in diesem großen Strategiespiel",
        story: `<p>Erschaffe und erweitere dein mittelalterliches Reich durch Diplomatie, Kriegsführung und Wirtschaftsmanagement. Triff wichtige Entscheidungen, die das Schicksal deines Königreichs bestimmen werden.</p>`
      },
      fr: {
        title: "Royaume Unifié",
        description: "Construisez et gérez votre royaume médiéval dans ce grand jeu de stratégie",
        story: `<p>Créez et étendez votre empire médiéval par la diplomatie, la guerre et la gestion économique. Prenez des décisions cruciales qui façonneront le destin de votre royaume.</p>`
      },
      ru: {
        title: "Объединённое Королевство",
        description: "Постройте и управляйте своим средневековым королевством в этой масштабной стратегической игре",
        story: `<p>Создайте и расширьте свою средневековую империю через дипломатию, войну и экономическое управление. Принимайте важные решения, которые определят судьбу вашего королевства.</p>`
      },
      zh: {
        title: "统一王国",
        description: "在这款宏大的战略游戏中建设和管理你的中世纪王国",
        story: `<p>通过外交、战争和经济管理创建并扩展你的中世纪帝国。做出将塑造你王国命运的关键决定。</p>`
      },
      ar: {
        title: "المملكة الموحدة",
        description: "ابنِ وأدر مملكتك في العصور الوسطى في هذه اللعبة الاستراتيجية الكبرى",
        story: `<p>أنشئ ووسع إمبراطوريتك في العصور الوسطى من خلال الدبلوماسية والحرب والإدارة الاقتصادية. اتخذ قرارات حاسمة ستشكل مصير مملكتك.</p>`
      },
      vi: {
        title: "Vương Quốc Thống Nhất",
        description: "Xây dựng và quản lý vương quốc trung cổ của bạn trong trò chơi chiến lược quy mô lớn này",
        story: `<p>Tạo dựng và mở rộng đế chế trung cổ của bạn thông qua ngoại giao, chiến tranh và quản lý kinh tế. Đưa ra những quyết định quan trọng sẽ định hình số phận của vương quốc của bạn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i5-4460 or AMD FX-6300",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i7-7700 or AMD Ryzen 5 1600",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 35,
    imageUrl: "/assets/King of Soldiers.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "King of Soldiers",
        description: "Lead your army to victory in this tactical combat game",
        story: `<p>Take command of elite military units in modern warfare scenarios. Use advanced tactics and strategic planning to overcome challenging missions and emerge victorious.</p>`
      },
      de: {
        title: "König der Soldaten",
        description: "Führe deine Armee in diesem taktischen Kampfspiel zum Sieg",
        story: `<p>Übernimm das Kommando über Elite-Militäreinheiten in modernen Kriegsszenarien. Nutze fortgeschrittene Taktiken und strategische Planung, um herausfordernde Missionen zu meistern und siegreich hervorzugehen.</p>`
      },
      fr: {
        title: "Roi des Soldats",
        description: "Menez votre armée à la victoire dans ce jeu de combat tactique",
        story: `<p>Prenez le commandement d'unités militaires d'élite dans des scénarios de guerre moderne. Utilisez des tactiques avancées et une planification stratégique pour surmonter des missions difficiles et sortir victorieux.</p>`
      },
      ru: {
        title: "Король Солдат",
        description: "Ведите свою армию к победе в этой тактической боевой игре",
        story: `<p>Возьмите под командование элитные военные подразделения в сценариях современной войны. Используйте продвинутую тактику и стратегическое планирование, чтобы преодолеть сложные миссии и выйти победителем.</p>`
      },
      zh: {
        title: "士兵之王",
        description: "在这款战术战斗游戏中带领你的军队走向胜利",
        story: `<p>在现代战争场景中指挥精英军事单位。使用先进的战术和战略规划来克服具有挑战性的任务并取得胜利。</p>`
      },
      ar: {
        title: "ملك الجنود",
        description: "قُد جيشك إلى النصر في هذه اللعبة القتالية التكتيكية",
        story: `<p>تولَّ قيادة وحدات عسكرية نخبوية في سيناريوهات الحرب الحديثة. استخدم التكتيكات المتقدمة والتخطيط الاستراتيجي للتغلب على المهام الصعبة والخروج منتصراً.</p>`
      },
      vi: {
        title: "Vua Của Binh Lính",
        description: "Dẫn dắt quân đội của bạn đến chiến thắng trong trò chơi chiến đấu chiến thuật này",
        story: `<p>Nắm quyền chỉ huy các đơn vị quân đội tinh nhuệ trong các kịch bản chiến tranh hiện đại. Sử dụng chiến thuật tiên tiến và lập kế hoạch chiến lược để vượt qua các nhiệm vụ đầy thử thách và giành chiến thắng.</p>`
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
    id: 36,
    imageUrl: "/assets/Wulin Showdown – The Ultimate Interactive Martial Arts Livestream Battle Game.jpg",
    platform: "PC",
    translations: {
      en: {
        title: "Wulin Showdown",
        description: "Experience the ultimate martial arts combat in this interactive battle game",
        story: `<p>Enter the world of ancient martial arts where skill, strategy, and timing determine victory. Master various fighting styles and compete against other players in intense duels.</p>`
      },
      de: {
        title: "Wulin Showdown",
        description: "Erlebe den ultimativen Kampfkunst-Kampf in diesem interaktiven Kampfspiel",
        story: `<p>Tritt ein in die Welt der alten Kampfkünste, wo Geschick, Strategie und Timing den Sieg bestimmen. Meistere verschiedene Kampfstile und tritt in intensiven Duellen gegen andere Spieler an.</p>`
      },
      fr: {
        title: "Confrontation Wulin",
        description: "Vivez le combat d'arts martiaux ultime dans ce jeu de bataille interactif",
        story: `<p>Entrez dans le monde des arts martiaux anciens où l'habileté, la stratégie et le timing déterminent la victoire. Maîtrisez différents styles de combat et affrontez d'autres joueurs dans des duels intenses.</p>`
      },
      ru: {
        title: "Противостояние Улинь",
        description: "Испытайте непревзойденный боевой опыт боевых искусств в этой интерактивной боевой игре",
        story: `<p>Войдите в мир древних боевых искусств, где мастерство, стратегия и время определяют победу. Освойте различные стили боя и соревнуйтесь с другими игроками в напряженных поединках.</p>`
      },
      zh: {
        title: "武林决战",
        description: "在这款互动战斗游戏中体验终极武术格斗",
        story: `<p>进入古代武术的世界，在这里技巧、策略和时机决定胜负。掌握各种战斗风格，在激烈的决斗中与其他玩家竞争。</p>`
      },
      ar: {
        title: "مواجهة وولين",
        description: "اختبر القتال النهائي للفنون القتالية في هذه اللعبة القتالية التفاعلية",
        story: `<p>ادخل عالم الفنون القتالية القديمة حيث تحدد المهارة والاستراتيجية والتوقيت النصر. أتقن أساليب قتال مختلفة وتنافس مع لاعبين آخرين في مبارزات مكثفة.</p>`
      },
      vi: {
        title: "Quyết Đấu Võ Lâm",
        description: "Trải nghiệm võ thuật tối thượng trong trò chơi chiến đấu tương tác này",
        story: `<p>Bước vào thế giới võ thuật cổ xưa nơi kỹ năng, chiến lược và thời điểm quyết định chiến thắng. Làm chủ các phong cách chiến đấu khác nhau và thi đấu với người chơi khác trong các trận đấu gay cấn.</p>`
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
