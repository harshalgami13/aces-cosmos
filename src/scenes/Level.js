
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.select = 0
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// game_bg
		const game_bg = this.add.image(960, 540, "game-bg");
		game_bg.scaleX = 1.8;
		game_bg.scaleY = 1.8;

		// CardDashboardGroup
		const cardDashboardGroup = this.add.container(0, 0);

		// main_panel
		const main_panel = this.add.image(768, 416, "main-panel");
		main_panel.scaleX = 0.8;
		main_panel.scaleY = 0.8;
		cardDashboardGroup.add(main_panel);

		// logo
		const logo = this.add.image(769, 123, "logo");
		logo.scaleX = 0.9;
		logo.scaleY = 0.9;
		cardDashboardGroup.add(logo);

		// CardGroup
		const cardGroup = this.add.container(0, 0);
		cardDashboardGroup.add(cardGroup);

		// glow_card_0
		const glow_card_0 = this.add.image(401, 447, "glow-card");
		glow_card_0.scaleX = 0.83;
		glow_card_0.scaleY = 0.83;
		glow_card_0.visible = false;
		cardGroup.add(glow_card_0);

		// glow_card_1
		const glow_card_1 = this.add.image(644, 447, "glow-card");
		glow_card_1.scaleX = 0.83;
		glow_card_1.scaleY = 0.83;
		glow_card_1.visible = false;
		cardGroup.add(glow_card_1);

		// glow_card_2
		const glow_card_2 = this.add.image(887, 447, "glow-card");
		glow_card_2.scaleX = 0.83;
		glow_card_2.scaleY = 0.83;
		glow_card_2.visible = false;
		cardGroup.add(glow_card_2);

		// glow_card_3
		const glow_card_3 = this.add.image(1130, 447, "glow-card");
		glow_card_3.scaleX = 0.83;
		glow_card_3.scaleY = 0.83;
		glow_card_3.visible = false;
		cardGroup.add(glow_card_3);

		// card_0
		const card_0 = this.add.image(401, 447, "card");
		card_0.scaleX = 0.8;
		card_0.scaleY = 0.8;
		cardGroup.add(card_0);

		// card_1
		const card_1 = this.add.image(644, 447, "card");
		card_1.scaleX = 0.8;
		card_1.scaleY = 0.8;
		cardGroup.add(card_1);

		// card_2
		const card_2 = this.add.image(887, 447, "card");
		card_2.scaleX = 0.8;
		card_2.scaleY = 0.8;
		cardGroup.add(card_2);

		// card_3
		const card_3 = this.add.image(1130, 447, "card");
		card_3.scaleX = 0.8;
		card_3.scaleY = 0.8;
		cardGroup.add(card_3);

		// HistoryDashboardGroup
		const historyDashboardGroup = this.add.container(0, 0);

		// history_bet_box
		const history_bet_box = this.add.image(1628, 565, "history-bet-box");
		historyDashboardGroup.add(history_bet_box);

		// GameName
		const gameName = this.add.text(1516, 290, "", {});
		gameName.setOrigin(0.5, 0.5);
		gameName.text = "GAME";
		gameName.setStyle({ "backgroundColor": "", "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "21px", "fontStyle": "bold" });
		historyDashboardGroup.add(gameName);

		// Bet
		const bet = this.add.text(1608.5, 290, "", {});
		bet.setOrigin(0.5, 0.5);
		bet.text = "BET";
		bet.setStyle({ "backgroundColor": "", "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "21px", "fontStyle": "bold" });
		historyDashboardGroup.add(bet);

		// Profit
		const profit = this.add.text(1708, 290, "", {});
		profit.setOrigin(0.5, 0.5);
		profit.text = "PROFIT";
		profit.setStyle({ "backgroundColor": "", "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "21px", "fontStyle": "bold" });
		historyDashboardGroup.add(profit);

		// ControllerDashboardGroup
		const controllerDashboardGroup = this.add.container(0, 0);

		// General
		const general = this.add.container(0, 0);
		controllerDashboardGroup.add(general);

		// total_bet_box
		const total_bet_box = this.add.image(777, 870.5, "total-bet-box");
		total_bet_box.scaleX = 0.78;
		general.add(total_bet_box);

		// bet_value_bg
		const bet_value_bg = this.add.image(753, 869, "bet-value-bg");
		bet_value_bg.scaleX = 0.8;
		bet_value_bg.scaleY = 0.8;
		general.add(bet_value_bg);

		// TotalBetText
		const totalBetText = this.add.image(777, 782, "total-bet-text");
		general.add(totalBetText);

		// MinMaxAmount
		const minMaxAmount = this.add.text(768, 958, "", {});
		minMaxAmount.setOrigin(0.5, 0.5);
		minMaxAmount.text = "Min 0.01 - Max 1000";
		minMaxAmount.setStyle({ "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "25px", "fontStyle": "bold" });
		general.add(minMaxAmount);

		// Buttons
		const buttons = this.add.container(0, 0);
		controllerDashboardGroup.add(buttons);

		// min_max_box_1
		const min_max_box_1 = this.add.image(470, 869, "min-max-box");
		min_max_box_1.scaleX = 0.7;
		min_max_box_1.scaleY = 0.7;
		buttons.add(min_max_box_1);

		// min_max_box_2
		const min_max_box_2 = this.add.image(1036, 869, "min-max-box");
		min_max_box_2.scaleX = 0.7;
		min_max_box_2.scaleY = 0.7;
		buttons.add(min_max_box_2);

		// half_double_bet_2
		const half_double_bet_2 = this.add.image(936, 869, "half-double-bet");
		half_double_bet_2.scaleX = 0.7;
		half_double_bet_2.scaleY = 0.7;
		buttons.add(half_double_bet_2);

		// half_double_bet_1
		const half_double_bet_1 = this.add.image(571, 869, "half-double-bet");
		half_double_bet_1.scaleX = 0.7;
		half_double_bet_1.scaleY = 0.7;
		buttons.add(half_double_bet_1);

		// sound_off
		const sound_off = this.add.image(361, 867, "sound-off");
		buttons.add(sound_off);

		// sound_on
		const sound_on = this.add.image(361, 869, "sound-on");
		buttons.add(sound_on);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(571, 870, 128, 128);
		ellipse_1.scaleX = 0.48;
		ellipse_1.scaleY = 0.48;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 11549970;
		buttons.add(ellipse_1);

		// ellipse_2
		const ellipse_2 = this.add.ellipse(936, 870, 128, 128);
		ellipse_2.scaleX = 0.48;
		ellipse_2.scaleY = 0.48;
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 11549970;
		buttons.add(ellipse_2);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(471, 869, 128, 128);
		rectangle_1.scaleX = 0.5;
		rectangle_1.scaleY = 0.5;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 11549970;
		buttons.add(rectangle_1);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(1037, 869, 128, 128);
		rectangle_2.scaleX = 0.5;
		rectangle_2.scaleY = 0.5;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 11549970;
		buttons.add(rectangle_2);

		// Texts
		const texts = this.add.container(0, 0);
		controllerDashboardGroup.add(texts);

		// min
		const min = this.add.text(470, 869, "", {});
		min.setOrigin(0.5, 0.5);
		min.text = "MIN";
		min.setStyle({ "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "25px", "fontStyle": "bold" });
		texts.add(min);

		// score
		const score = this.add.text(753, 869, "", {});
		score.setOrigin(0.5, 0.5);
		score.text = "0.02";
		score.setStyle({ "backgroundColor": "", "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "40px", "fontStyle": "bold" });
		texts.add(score);

		// max
		const max = this.add.text(1038, 869, "", {});
		max.setOrigin(0.5, 0.5);
		max.text = "MAX";
		max.setStyle({ "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "25px", "fontStyle": "bold" });
		texts.add(max);

		// x2
		const x2 = this.add.text(936.5, 869, "", {});
		x2.setOrigin(0.5, 0.5);
		x2.text = "X2";
		x2.setStyle({ "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "35px", "fontStyle": "bold" });
		texts.add(x2);

		// /2
		const _2 = this.add.text(571, 869, "", {});
		_2.setOrigin(0.5, 0.5);
		_2.text = "/2";
		_2.setStyle({ "color": "#6e1f03", "fontFamily": "Sans-serif", "fontSize": "35px", "fontStyle": "bold" });
		texts.add(_2);

		// TotalCash
		const totalCash = this.add.text(437, 729, "", {});
		totalCash.setOrigin(0.5, 0.5);
		totalCash.text = "Total Cash : 1,000,000";
		totalCash.setStyle({ "fontFamily": "Sans-serif", "fontSize": "26px", "fontStyle": "bold" });
		texts.add(totalCash);

		// CardSelect
		const cardSelect = this.add.container(0, 0);
		controllerDashboardGroup.add(cardSelect);

		// card_icon_box
		const card_icon_box = this.add.image(1216, 871, "card-icon-box");
		card_icon_box.scaleX = 0.9;
		card_icon_box.scaleY = 0.9;
		cardSelect.add(card_icon_box);

		// left_t
		const left_t = this.add.image(1178, 835, "left-t");
		left_t.scaleX = 0.9;
		left_t.scaleY = 0.9;
		left_t.visible = false;
		cardSelect.add(left_t);

		// right_t
		const right_t = this.add.image(1254, 835, "right-t");
		right_t.scaleX = 0.9;
		right_t.scaleY = 0.9;
		right_t.visible = false;
		cardSelect.add(right_t);

		// left_b
		const left_b = this.add.image(1178, 907, "left-b");
		left_b.scaleX = 0.9;
		left_b.scaleY = 0.9;
		left_b.visible = false;
		cardSelect.add(left_b);

		// right_b
		const right_b = this.add.image(1254, 907, "right-b");
		right_b.scaleX = 0.9;
		right_b.scaleY = 0.9;
		right_b.visible = false;
		cardSelect.add(right_b);

		// clubs
		const clubs = this.add.image(1185, 842, "clubs");
		clubs.scaleX = 0.8;
		clubs.scaleY = 0.8;
		cardSelect.add(clubs);

		// diamond
		const diamond = this.add.image(1245, 843, "diamond");
		diamond.scaleX = 0.8;
		diamond.scaleY = 0.8;
		cardSelect.add(diamond);

		// heart
		const heart = this.add.image(1185, 899, "heart");
		heart.scaleX = 0.8;
		heart.scaleY = 0.8;
		cardSelect.add(heart);

		// spades
		const spades = this.add.image(1245, 899, "spades");
		spades.scaleX = 0.8;
		spades.scaleY = 0.8;
		cardSelect.add(spades);

		this.glow_card_0 = glow_card_0;
		this.glow_card_1 = glow_card_1;
		this.glow_card_2 = glow_card_2;
		this.glow_card_3 = glow_card_3;
		this.card_0 = card_0;
		this.card_1 = card_1;
		this.card_2 = card_2;
		this.card_3 = card_3;
		this.min_max_box_1 = min_max_box_1;
		this.min_max_box_2 = min_max_box_2;
		this.half_double_bet_2 = half_double_bet_2;
		this.half_double_bet_1 = half_double_bet_1;
		this.ellipse_1 = ellipse_1;
		this.ellipse_2 = ellipse_2;
		this.rectangle_1 = rectangle_1;
		this.rectangle_2 = rectangle_2;
		this.score = score;
		this.left_t = left_t;
		this.right_t = right_t;
		this.left_b = left_b;
		this.right_b = right_b;
		this.clubs = clubs;
		this.diamond = diamond;
		this.heart = heart;
		this.spades = spades;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	glow_card_0;
	/** @type {Phaser.GameObjects.Image} */
	glow_card_1;
	/** @type {Phaser.GameObjects.Image} */
	glow_card_2;
	/** @type {Phaser.GameObjects.Image} */
	glow_card_3;
	/** @type {Phaser.GameObjects.Image} */
	card_0;
	/** @type {Phaser.GameObjects.Image} */
	card_1;
	/** @type {Phaser.GameObjects.Image} */
	card_2;
	/** @type {Phaser.GameObjects.Image} */
	card_3;
	/** @type {Phaser.GameObjects.Image} */
	min_max_box_1;
	/** @type {Phaser.GameObjects.Image} */
	min_max_box_2;
	/** @type {Phaser.GameObjects.Image} */
	half_double_bet_2;
	/** @type {Phaser.GameObjects.Image} */
	half_double_bet_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_2;
	/** @type {Phaser.GameObjects.Text} */
	score;
	/** @type {Phaser.GameObjects.Image} */
	left_t;
	/** @type {Phaser.GameObjects.Image} */
	right_t;
	/** @type {Phaser.GameObjects.Image} */
	left_b;
	/** @type {Phaser.GameObjects.Image} */
	right_b;
	/** @type {Phaser.GameObjects.Image} */
	clubs;
	/** @type {Phaser.GameObjects.Image} */
	diamond;
	/** @type {Phaser.GameObjects.Image} */
	heart;
	/** @type {Phaser.GameObjects.Image} */
	spades;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.total = this.score.text
		this.half_double_bet_2.setInteractive()
		this.half_double_bet_1.setInteractive()
		this.min_max_box_1.setInteractive()
		this.min_max_box_2.setInteractive()

		this.card_0.setInteractive()
		this.card_1.setInteractive()
		this.card_2.setInteractive()
		this.card_3.setInteractive()

		this.heart.setInteractive()
		this.spades.setInteractive()
		this.clubs.setInteractive()
		this.diamond.setInteractive()

		this.half_double_bet_1.on('pointerup', () => {
			if (this.total >= 0.01) {
				this.total /= 2
				if(this.total < 0.01){
					this.total = 0.01
				}
				this.score.text = this.total
			}
		})
		this.half_double_bet_2.on('pointerup', () => {
			if (this.total <= 1000) {
				this.total *= 2
				if(this.total >1000){
					this.total = 1000
				}
				this.score.text = this.total
			}
		})
		this.min_max_box_1.on('pointerup', () => {
			this.total = 0.01
			this.score.text = this.total
		})
		this.min_max_box_2.on('pointerup', () => {
			this.total = 1000
			this.score.text = this.total
		})

		// card hover effect
		this.card_0.on('pointerover', () => {
			this.glow_card_0.visible = true
		})
		this.card_0.on('pointerout', () => {
			this.glow_card_0.visible = false
		})

		this.card_1.on('pointerover', () => {
			this.glow_card_1.visible = true
		})
		this.card_1.on('pointerout', () => {
			this.glow_card_1.visible = false
		})

		this.card_2.on('pointerover', () => {
			this.glow_card_2.visible = true
		})
		this.card_2.on('pointerout', () => {
			this.glow_card_2.visible = false
		})

		this.card_3.on('pointerover', () => {
			this.glow_card_3.visible = true
		})
		this.card_3.on('pointerout', () => {
			this.glow_card_3.visible = false
		})

		// card select
		this.heart.on('pointerup', () => {
			if (this.left_b.visible == false) {
				if (this.select < 3) {
					console.log("hi heart")
					this.left_b.visible = true
					this.select++
				}
			}
			else {
				this.left_b.visible = false
				this.select--
			}
		})
		this.diamond.on('pointerup', () => {
			if (this.right_t.visible == false) {
				if (this.select < 3) {
					console.log("hi diamond")
					this.right_t.visible = true
					this.select++
				}
			}
			else {
				this.right_t.visible = false
				this.select--
			}
		})
		this.spades.on('pointerup', () => {
			if (this.right_b.visible == false) {
				if (this.select < 3) {
					console.log("hi spades")
					this.right_b.visible = true
					this.select++
				}
			}
			else {
				this.right_b.visible = false
				this.select--
			}
		})
		this.clubs.on('pointerup', () => {
			if (this.left_t.visible == false) {
				if (this.select < 3) {
					console.log("hi clubs")
					this.left_t.visible = true
					this.select++
				}
			}
			else {
				this.left_t.visible = false
				this.select--
			}
		})

	}
	update() {
		if (this.score.text <= 0.01) {
			this.ellipse_1.visible = true
			this.rectangle_1.visible = true
			this.ellipse_2.visible = false
			this.rectangle_2.visible = false
		}
		else if (this.score.text >= 1000) {
			this.ellipse_2.visible = true
			this.rectangle_2.visible = true
			this.ellipse_1.visible = false
			this.rectangle_1.visible = false
		}
		else if (this.score.text > 0.01 && this.score.text < 1000) {
			this.ellipse_1.visible = this.ellipse_2.visible = false
			this.rectangle_1.visible = this.rectangle_2.visible = false
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
