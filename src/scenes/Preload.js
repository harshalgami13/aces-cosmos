
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(960, 540, 128, 128);
		rectangle_1.scaleX = 15;
		rectangle_1.scaleY = 8.5;
		rectangle_1.isFilled = true;

		// progress
		const progress = this.add.text(960, 693, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "color": "#000", "fontSize": "100px" });

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
