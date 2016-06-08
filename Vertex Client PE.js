/**
 * ###############################################################
 * @name Vertex Client PE
 * @version v1.0
 * @author peacestorm (@AgameR_Modder)
 * @credits Herqux_, MyNameIsTriXz, Godsoft029, ArceusMatt, LPMG
 *
 * Thanks to NoCopyrightSounds and their artists for the music!
 *
 * ###############################################################
 */

// #####################
// # ANDROID FUNCTIONS #
// #####################

var widget = android.widget;
var graphics = android.graphics;
var view = android.view;
var animation = view.animation;
var LinearLayout = widget.LinearLayout;
var ScrollView = widget.ScrollView;
var Button = widget.Button;
var EditText = widget.EditText;
var SeekBar = widget.SeekBar;
var Point = graphics.Point;
var KeyEvent = view.KeyEvent;
var AnimationUtils = animation.AnimationUtils;
var TranslateAnimation = animation.TranslateAnimation;
var AccelerateInterpolator = animation.AccelerateInterpolator;

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var display = new android.util.DisplayMetrics();
com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
var size = new Point();
ctx.getWindowManager().getDefaultDisplay().getRealSize(size);
var screenWidth = size.x;
var screenHeight = size.y;

var topBarHeight = screenHeight / 10;

var customHeight = topBarHeight / 2;

/*KeyEvent.Callback.onKeyUp = function(keyCode, event) {
    switch(keyCode) {
        case KeyEvent.KEYCODE_D:
            print("test");
            return true;
        case KeyEvent.KEYCODE_F:
            moveShip(MOVE_RIGHT);
            return true;
        case KeyEvent.KEYCODE_J:
            fireMachineGun();
            return true;
        case KeyEvent.KEYCODE_K:
            fireMissile();
            return true;
        default:
            return super.onKeyUp(keyCode, event);
    }
}*/

// ####################
// # CLIENT FUNCTIONS #
// ####################

//Don't copy anything without my permission!

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

var VertexClientPE = {
	name: "Vertex Client PE",
	getName: function() {
		return VertexClientPE.name;
	},
	isDev: true,
	isDevMode: function() {
		return VertexClientPE.isDev;
	},
	accounts: []
};

var _0x199a=["\x69\x73\x50\x72\x6F","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x50\x72\x6F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x73\x65\x74\x49\x73\x50\x72\x6F","\x54\x68\x69\x73\x49\x73\x53\x70\x61\x72\x74\x61"];VertexClientPE[_0x199a[0]]=function(){var _0xf36dx1=ctx[_0x199a[1]](ctx.MODE_PRIVATE);return _0xf36dx1[_0x199a[3]](_0x199a[2],null)};VertexClientPE[_0x199a[4]]=function(){var _0xf36dx2=_0x199a[5];return _0xf36dx2}

VertexClientPE.isRemote = false;
VertexClientPE.playerIsInGame = false;

VertexClientPE.currentVersion = "1.0";
VertexClientPE.targetVersion = "MCPE v0.14.x alpha";
VertexClientPE.latestVersion = "Unknown";
var latestPocketEditionVersion;
var news;

var movementMenuLayout;
var favMenuLayout;
var menuBtn;
var logoViewer2;
var chestUI;
var lsdMenu;
var lsdLayout;

var flightMsgShown = false;

var fancyChatState = false;
var delaySpammerState = false;
var autoSwordState = false;

var showingMenu = false;

var setupColor = "green";

var f = 0;

VertexClientPE.font = android.graphics.Typeface.create("sans-serif-thin", android.graphics.Typeface.NORMAL);

var tts = new android.speech.tts.TextToSpeech(ctx, new android.speech.tts.TextToSpeech.OnInitListener({
	onInit: function(status) {
		tts.setLanguage(java.util.Locale.US);
	}
}));

/**
 * ##########
 *  SETTINGS
 * ##########
 */
 
var hacksListModeSetting = "on";
var mainButtonPositionSetting = "top-right";
var healthTagsSetting = "off";
var themeSetting = "green";
var spamMessage = "Spam!!!!!";
var showNewsSetting = "on";
var menuAnimationsSetting = "on";
var nukerMode = "cube";
var playMusicSetting = "off";
var timerSpeed = 2;
var themeSetup = "off";
var nukerRange = 3;
var killAuraRange = 4;
var spamDelayTime = 3;
var sizeSetting = "normal";
var fancyChatMode = "default";
//---------------------------
var combatName = "Combat";
var buildingName = "Building";
var movementName = "Movement";
var chatName = "Chat";
var miscName = "Misc";
//End of settings

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var Launcher = {
	isBlockLauncher: function() {
		return (ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
	},
	isToolbox: function() {
		return ctx.getPackageName() == "io.mrarm.mctoolbox";
	}
};

var GUI;
var menu;
var exitUI;
var vertexclientpemiscmenu;
var settingsMenu;
var informationMenu;
var topBar;

/**
 * #########
 *  MODULES
 * #########
 */
 
VertexClientPE.featureCount = 0;

VertexClientPE.favourites = [];

VertexClientPE.category = {
	COMBAT: 0,
	BUILDING: 1,
	MOVEMENT: 2,
	CHAT: 3,
	MISC: 4
}

VertexClientPE.modules = [];

VertexClientPE.registerModule = function(obj) {
	VertexClientPE.modules.push(obj);
	VertexClientPE.featureCount++;
}

var panic = {
	name: "Panic",
	desc: "Disables all modules at once.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		VertexClientPE.modules.forEach(function (element, index, array) {
			if(element.isStateMod() && element.state) {
				element.onToggle();
			}
		});
		if(topBar != null && topBar.isShowing()) {
			topBar.dismiss();
			vertexclientpecombatmenu.dismiss(); //Close
			vertexclientpebuildingmenu.dismiss(); //Close
			vertexclientpemovementmenu.dismiss(); //Close
			vertexclientpechatmenu.dismiss(); //Close
			vertexclientpemiscmenu.dismiss(); //Close
			//vertexclientpefavmenu.dismiss(); //Close
			VertexClientPE.showCombatMenu();
			VertexClientPE.showBuildingMenu();
			VertexClientPE.showMovementMenu();
			VertexClientPE.showChatMenu();
			VertexClientPE.showMiscMenu();
			//VertexClientPE.showFavMenu();
			VertexClientPE.showTopBar();
		}
	}
}

var switchGamemode = {
	name: "Switch Gamemode",
	desc: "Switches your gamemode.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		if(Level.getGameMode() == 0) {
			Level.setGameMode(1);
		} else if(Level.getGameMode() == 1) {
			Level.setGameMode(0);
		}
	}
}

var killAura = {
	name: "Killaura",
	desc: "Automatically kills all the near entities.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	getSettingsLayout: function() {
		var killAuraSettingsLayout = new LinearLayout(ctx);
		killAuraSettingsLayout.setOrientation(1);
		var killAuraRangeTitle = clientTextView("Range: | " + killAuraRange);
		var killAuraRangeSlider = new SeekBar(ctx);
		killAuraRangeSlider.setProgress(killAuraRange);
		killAuraRangeSlider.setMax(10);
		killAuraRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				killAuraRange = killAuraRangeSlider.getProgress();
				killAuraRangeTitle.setText("Range: | " + killAuraRange);
			}
		});
		var space = clientTextView("\n");
		killAuraSettingsLayout.addView(killAuraRangeTitle);
		killAuraSettingsLayout.addView(killAuraRangeSlider);
		killAuraSettingsLayout.addView(space);
		return killAuraSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var mobs = Entity.getAll();
		for(var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - getPlayerX();
			var y = Entity.getY(mobs[i]) - getPlayerY();
			var z = Entity.getZ(mobs[i]) - getPlayerZ();
			if(x*x+y*y+z*z<=killAuraRange*killAuraRange && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION && Entity.getHealth(mobs[i]) != 0) {
				//setRot(getPlayerEnt(), (Math.atan2(z, x) - 90) * Math.pi / 180, getPitch());
				if(autoSwordState) {
					VertexClientPE.autoSword(getPlayerEnt(), mobs[i]);
				}
				switch(Entity.getEntityTypeId(mobs[i])) {
					case EntityType.COW:
						Level.playSoundEnt(mobs[i], "mob.cowhurt");
						break;
					case EntityType.CHICKEN:
						Level.playSoundEnt(mobs[i], "mob.chickenhurt");
						break;
					case EntityType.ZOMBIE:
						Level.playSoundEnt(mobs[i], "mob.zombiehurt");
						break;
					case EntityType.SKELETON:
						Level.playSoundEnt(mobs[i], "mob.skeletonhurt");
						break;
					case EntityType.PIG_ZOMBIE:
						Level.playSoundEnt(mobs[i], "mob.zombiepig.zpighurt");
						break;
					default:
						Level.playSoundEnt(mobs[i], "random.hurt");
						break;
				}
				Entity.setHealth(mobs[i], 0);
				break;
			}
		}
	}
}

var autoSword = {
	name: "AutoSword",
	desc: "Automatically chooses the best sword for you when attacking entities if available.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	state: false,
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		autoSwordState = this.state;
	},
	onAttack: function(a, v) {
		if(a == getPlayerEnt()) {
			for(var i = 0; i <= 36; i++) {
				var gCI = Player.getCarriedItem();
				var gCID = Player.getCarriedItemData();
				var gCIA = Player.getCarriedItemCount();
				if(Player.getInventorySlot(i) == 268) {
					Player.setInventorySlot(i, gCI, gCIA, gCID);
					Entity.setCarriedItem(getPlayerEnt(), 268, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
					break;
				}
			}
			for(var i = 0; i <= 36; i++) {
				var gCI = Player.getCarriedItem();
				var gCID = Player.getCarriedItemData();
				var gCIA = Player.getCarriedItemCount();
				if(Player.getInventorySlot(i) == 283) {
					Player.setInventorySlot(i, gCI, gCIA, gCID);
					Entity.setCarriedItem(getPlayerEnt(), 283, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
					break;
				}
			}
			for(var i = 0; i <= 36; i++) {
				var gCI = Player.getCarriedItem();
				var gCID = Player.getCarriedItemData();
				var gCIA = Player.getCarriedItemCount();
				if(Player.getInventorySlot(i) == 272) {
					Player.setInventorySlot(i, gCI, gCIA, gCID);
					Entity.setCarriedItem(getPlayerEnt(), 272, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
					break;
				}
			}
			for(var i = 0; i <= 36; i++) {
				var gCI = Player.getCarriedItem();
				var gCID = Player.getCarriedItemData();
				var gCIA = Player.getCarriedItemCount();
				if(Player.getInventorySlot(i) == 267) {
					Player.setInventorySlot(i, gCI, gCIA, gCID);
					Entity.setCarriedItem(getPlayerEnt(), 267, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
					break;
				}
			}
			for(var i = 0; i <= 36; i++) {
				var gCI = Player.getCarriedItem();
				var gCID = Player.getCarriedItemData();
				var gCIA = Player.getCarriedItemCount();
				if(Player.getInventorySlot(i) == 276) {
					Player.setInventorySlot(i, gCI, gCIA, gCID);
					Entity.setCarriedItem(getPlayerEnt(), 276, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
					break;
				}
			}
		}
	}
}

var homeCommand = {
	name: "/home",
	desc: "Runs the /home command if the server or world you're on has it.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	isStateMod: function() {
		return false;
	},
	onToggle: function() {
		Server.sendChat("/home");
	}
}

var timer = {
	name: "Timer",
	desc: "Makes the speed of the game faster.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	getSettingsLayout: function() {
		var timerSettingsLayout = new LinearLayout(ctx);
		timerSettingsLayout.setOrientation(1);
		var timerSpeedTitle = clientTextView("Speed: | " + timerSpeed + " * 20 ticks");
		var timerSpeedSlider = new SeekBar(ctx);
		timerSpeedSlider.setProgress(timerSpeed);
		timerSpeedSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				timerSpeed = timerSpeedSlider.getProgress();
				timerSpeedTitle.setText("Speed: | " + timerSpeed);
			}
		});
		var space = clientTextView("\n");
		timerSettingsLayout.addView(timerSpeedTitle);
		timerSettingsLayout.addView(timerSpeedSlider);
		timerSettingsLayout.addView(space);
		return timerSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		if(this.state) {
			ModPE.setGameSpeed(20 * timerSpeed);
		} else {
			ModPE.setGameSpeed(20);
		}
	}
}

var nuker = {
	name: "Nuker",
	desc: "Automatically destroys blocks around you.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	getSettingsLayout: function() {
		var nukerSettingsLayout = new LinearLayout(ctx);
		nukerSettingsLayout.setOrientation(1);
		var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
		var nukerRangeSlider = new SeekBar(ctx);
		nukerRangeSlider.setProgress(nukerRange);
		nukerRangeSlider.setMax(10);
		nukerRangeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				nukerRange = nukerRangeSlider.getProgress();
				nukerRangeTitle.setText("Range: | " + nukerRange);
			}
		});
		var nukerModeTitle = clientTextView("\nMode:");
		var nukerModeCubeButton = clientButton("Cube", "Normal mode which destroys blocks in the shape of a cube");
		nukerModeCubeButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		var nukerModeFlatButton = clientButton("Flat", "Flat mode which flats the ground");
		nukerModeFlatButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		var nukerModeSmashButton = clientButton("Smash", "Smash mode which only breaks blocks with a destroy time of 0");
		nukerModeSmashButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 6, display.heightPixels / 10));
		
		var nukerRangeTitle = clientTextView("Range: | " + nukerRange);
		var nukerModeLayout = new LinearLayout(ctx);
		nukerModeLayout.setOrientation(LinearLayout.HORIZONTAL);
		
		var nukerModeLayoutLeft = new LinearLayout(ctx);
		nukerModeLayoutLeft.setOrientation(1);
		nukerModeLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		nukerModeLayoutLeft.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutLeft);
		
		var nukerModeLayoutCenter = new LinearLayout(ctx);
		nukerModeLayoutCenter.setOrientation(1);
		nukerModeLayoutCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		nukerModeLayoutCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutCenter);
		
		var nukerModeLayoutRight = new LinearLayout(ctx);
		nukerModeLayoutRight.setOrientation(1);
		nukerModeLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
		nukerModeLayoutRight.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
		nukerModeLayout.addView(nukerModeLayoutRight);
		
		nukerModeLayoutLeft.addView(nukerModeCubeButton);
		nukerModeLayoutCenter.addView(nukerModeFlatButton);
		nukerModeLayoutRight.addView(nukerModeSmashButton);
		if(nukerMode == "cube") {
			nukerModeCubeButton.setTextColor(android.graphics.Color.GREEN);
		}if(nukerMode == "flat") {
			nukerModeFlatButton.setTextColor(android.graphics.Color.GREEN);
		}if(nukerMode == "smash") {
			nukerModeSmashButton.setTextColor(android.graphics.Color.GREEN);
		}
		nukerModeCubeButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				nukerMode = "cube";
				nukerModeCubeButton.setTextColor(android.graphics.Color.GREEN);
				nukerModeFlatButton.setTextColor(android.graphics.Color.WHITE);
				nukerModeSmashButton.setTextColor(android.graphics.Color.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		nukerModeFlatButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				nukerMode = "flat";
				nukerModeCubeButton.setTextColor(android.graphics.Color.WHITE);
				nukerModeFlatButton.setTextColor(android.graphics.Color.GREEN);
				nukerModeSmashButton.setTextColor(android.graphics.Color.WHITE);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		nukerModeSmashButton.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(view) {
				nukerMode = "smash";
				nukerModeCubeButton.setTextColor(android.graphics.Color.WHITE);
				nukerModeFlatButton.setTextColor(android.graphics.Color.WHITE);
				nukerModeSmashButton.setTextColor(android.graphics.Color.GREEN);
				VertexClientPE.saveMainSettings();
				VertexClientPE.loadMainSettings();
			}
		});
		var space = clientTextView("\n");
		nukerSettingsLayout.addView(nukerRangeTitle);
		nukerSettingsLayout.addView(nukerRangeSlider);
		nukerSettingsLayout.addView(nukerModeTitle);
		nukerSettingsLayout.addView(nukerModeLayout);
		nukerSettingsLayout.addView(space);
		return nukerSettingsLayout;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		var x = getPlayerX();
		var y = getPlayerY();
		var z = getPlayerZ();
		if(nukerMode == "cube") {
			for(var blockX = - nukerRange; blockX <= nukerRange; blockX++) {
				for(var blockY = - nukerRange; blockY <= nukerRange; blockY++) {
					for(var blockZ = - nukerRange; blockZ <= nukerRange; blockZ++) {
						setTile(x + blockX, y + blockY, z + blockZ, 0);
					}
				}
			}
		} if(nukerMode == "flat") {
			for(var blockX = - nukerRange; blockX <= nukerRange; blockX++) {
				for(var blockY = - 1; blockY <= nukerRange; blockY++) {
					for(var blockZ = - nukerRange; blockZ <= nukerRange; blockZ++) {
						setTile(x + blockX, y + blockY, z + blockZ, 0);
					}
				}
			}
		} if(nukerMode == "smash") {
			for(var blockX = - nukerRange; blockX <= nukerRange; blockX++) {
				for(var blockY = - nukerRange; blockY <= nukerRange; blockY++) {
					for(var blockZ = - nukerRange; blockZ <= nukerRange; blockZ++) {
						if(Block.getDestroyTime(getTile(x + blockX, y + blockY, z + blockZ)) == 0) {
							setTile(x + blockX, y + blockY, z + blockZ, 0);
						}
					}
				}
			}
		}
	}
}

var fancyChatMsg;
var fancyChatEndChar;

var fancyChat = {
	name: "FancyChat",
	desc: "Replaces characters in sent chat messages by fancy unicode characters. Can be used to bypass curse word filters on some servers.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	settings: {
		mode: "normal"
	},
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		fancyChatState = this.state;
	},
	onChat: function(msg) {
		preventDefault();
		if(Launcher.isBlockLauncher()) {
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().nativeSetTextboxText("");
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
		}
		VertexClientPE.fancyChat(msg);
	}
}

var noHurt = {
	name: "NoHurt",
	desc: "Prevents you from getting hurt.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onHurt: function(a, v) {
		if(v == getPlayerEnt()) {
			preventDefault();
		}
	}
}

var ride = {
	name: "Ride",
	desc: "Automatically makes you ride an entity on tap.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onAttack: function(a, v) {
		preventDefault();
		if(getPlayerEnt() == a) {
			VertexClientPE.ride(v);
		}
	}
}

var onlyDay = {
	name: "OnlyDay",
	desc: "Sets the time to day all the time.",
	category: VertexClientPE.category.MISC,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function(a, v) {
		Level.setTime(1000);
	}
}

var flight = {
	name: "Flight",
	desc: "Makes you able to fly, even when you're in survival.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		Player.setFlying(this.state?1:0);
		Player.setCanFly(this.state?1:Level.getGameMode());
	},
	onTick: function() {
		Player.setFlying(1);
	}
}

var autoTeleporter = {
	name: "AutoTeleporter",
	desc: "Teleports you to the block you're pointing at.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(getTile(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ()) != 0) {
			VertexClientPE.teleporter(Player.getPointedBlockX(), Player.getPointedBlockY() + 3, Player.getPointedBlockZ());
		}
	}
}

var tapTeleporter = {
	name: "TapTeleporter",
	desc: "Teleports you wherever you tap.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(getTile(x, y, z) != 0) {
			VertexClientPE.teleporter(x, y + 3, z);
		}
	}
}

var wallHack = {
	name: "Wallhack",
	desc: "Makes you able to walk through walls.",
	category: VertexClientPE.category.MOVEMENT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		Entity.setCollisionSize(Player.getEntity(), this.state?0:0.6, this.state?0:1.8);
	}
}

var fastBreak = {
	name: "FastBreak",
	desc: "Makes block destroy times as if you were in creative mode.",
	category: VertexClientPE.category.BUILDING,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
		this.state?Block.setDestroyTimeAll(0):Block.setDestroyTimeDefaultAll();
	}
}

var chatSpeak = {
	name: "ChatSpeak",
	desc: "Automatically says all the received chat messages out loud.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onChatReceive: function(msg, sender) {
		if(sender != Player.getName(getPlayerEnt())) {
			tts.speak(msg, android.speech.tts.TextToSpeech.QUEUE_FLUSH, null);
		}
	}
}

var chatRepeat = {
	name: "ChatRepeat",
	desc: "Automatically repeats all the received chat messages. Can be very annoying.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onChatReceive: function(msg, sender) {
		if(sender != Player.getName(getPlayerEnt())) {
			Server.sendChat(msg);
		}
	}
}

var autoSpammer = {
	name: "AutoSpammer",
	desc: "Automatically spams the chat.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	getSettingsLayout: function() {
		var autoSpammerMessageLayout = new LinearLayout(ctx);
		autoSpammerMessageLayout.setOrientation(1);
		var autoSpammerMessageTitle = clientTextView("Message:");
		var spamMessageInput = new EditText(ctx);
		var autoSpammerMessageEnter = clientTextView("\n");
		spamMessageInput.setText(spamMessage);
		spamMessageInput.setTextColor(android.graphics.Color.WHITE);
		spamMessageInput.setHint("Spam message");
		spamMessageInput.addTextChangedListener(new android.text.TextWatcher() {
			onTextChanged: function() {
				spamMessage = spamMessageInput.getText();
			}
		});
		autoSpammerMessageLayout.addView(autoSpammerMessageTitle);
		autoSpammerMessageLayout.addView(spamMessageInput);
		autoSpammerMessageLayout.addView(autoSpammerMessageEnter);
		return autoSpammerMessageLayout;
	},
	isStateMod: function() {
		return true;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onTick: function() {
		if(fancyChatState) {
			VertexClientPE.fancyChat(spamMessage);
		} else {
			Server.sendChat(spamMessage);
		}
		/*if(yesCheatPlusState) {
			Server.sendChat(" ");
		}*/
	}
}

var delaySpammer = {
	name: "DelaySpammer",
	desc: "Automatically spams the chat with a delay and randomly generated messages.",
	category: VertexClientPE.category.CHAT,
	type: "Mod",
	getSettingsLayout: function() {
		var delaySpammerDelayTimeLayout = new LinearLayout(ctx);
		delaySpammerDelayTimeLayout.setOrientation(1);
		var delaySpammerDelayTimeTitle = clientTextView("Delay time: | " + spamDelayTime + " seconds");
		var delaySpammerDelayTimeSlider = new widget.SeekBar(ctx);
		delaySpammerDelayTimeSlider.setProgress(spamDelayTime);
		delaySpammerDelayTimeSlider.setMax(60);
		delaySpammerDelayTimeLayout.addView(delaySpammerDelayTimeTitle);
		delaySpammerDelayTimeLayout.addView(delaySpammerDelayTimeSlider);
		delaySpammerDelayTimeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
			onProgressChanged: function() {
				spamDelayTime = delaySpammerDelayTimeSlider.getProgress();
				delaySpammerDelayTimeTitle.setText("Delay time: | " + spamDelayTime + " seconds");
			}
		});
		return delaySpammerDelayTimeLayout;
	},
	isStateMod: function() {
		return true;
	},
	onModDialogDismiss: function() {
		VertexClientPE.saveMainSettings();
	},
	onToggle: function() {
		this.state = !this.state;
		delaySpammerState = this.state;
	}
}

var tpAuraStage = 0;

var tpAura = {
	name: "TP-Aura",
	desc: "Automatically teleports you behind entities to prevent you from getting hurt by others.",
	category: VertexClientPE.category.COMBAT,
	type: "Mod",
	isStateMod: function() {
		return true;
	},
	onToggle: function() {
		this.state = !this.state;
	},
	onInterval: function() {
		if(tpAuraStage == 0) {
			tpAuraStage = 1;
			var mobs = Entity.getAll();
			for(var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION && Entity.getHealth(mobs[i]) != 0) {
					var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());
					var victimPos = new Array(Entity.getX(mobs[i]), Entity.getY(mobs[i]), Entity.getZ(mobs[i]));
					var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);
					playerPos[0] += diffPos[0] * 2;
					playerPos[2] += diffPos[2] * 2;
					
					if (getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
						Entity.setPosition(Player.getEntity(), playerPos[0], playerPos[1], playerPos[2]);
					}
					break;
				}
			}
			tpAuraStage = 0;
		}
	},
	onAttack: function(a, v) {
		if(a == getPlayerEnt()) {
			var playerPos = new Array(getPlayerX(), getPlayerY() + 0.5, getPlayerZ());
			var victimPos = new Array(Entity.getX(v), Entity.getY(v), Entity.getZ(v));
			var diffPos = new Array(victimPos[0] - playerPos[0], null, victimPos[2] - playerPos[2]);
			playerPos[0] += diffPos[0] * 2;
			playerPos[2] += diffPos[2] * 2;
			
			if(getTile(playerPos[0], playerPos[1], playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 1, playerPos[2]) == 0 && getTile(playerPos[0], playerPos[1] - 2, playerPos[2]) == 0) {
				Entity.setPosition(Player.getEntity(), playerPos[0], playerPos[1], playerPos[2]);
			}
		}
	}
}

//COMBAT
VertexClientPE.registerModule(killAura);
VertexClientPE.registerModule(tpAura);
VertexClientPE.registerModule(autoSword);
VertexClientPE.registerModule(noHurt);
//MOVEMENT
VertexClientPE.registerModule(timer);
VertexClientPE.registerModule(flight);
VertexClientPE.registerModule(autoTeleporter);
VertexClientPE.registerModule(tapTeleporter);
VertexClientPE.registerModule(wallHack);
//BUILDING
VertexClientPE.registerModule(nuker);
VertexClientPE.registerModule(fastBreak);
//CHAT
VertexClientPE.registerModule(homeCommand);
VertexClientPE.registerModule(autoSpammer);
VertexClientPE.registerModule(delaySpammer);
VertexClientPE.registerModule(fancyChat);
VertexClientPE.registerModule(chatSpeak);
VertexClientPE.registerModule(chatRepeat);
//MISC
VertexClientPE.registerModule(panic);
VertexClientPE.registerModule(switchGamemode);
VertexClientPE.registerModule(ride);
VertexClientPE.registerModule(onlyDay);

function modTick() {
	VertexClientPE.playerIsInGame = true;
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onTick) {
			element.onTick();
		}
	});
}

function attackHook(a, v) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onAttack) {
			element.onAttack(a, v);
		}
	});
}

function entityHurtHook(a, v) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onHurt) {
			element.onHurt(a, v);
		}
	});
}

function useItem(x, y, z, itemId, blockId, side, blockDamage) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onUseItem) {
			element.onUseItem(x, y, z, itemId, blockId, side, blockDamage);
		}
	});
}

function chatHook(text) {
	if(text.charAt(0) == ".") {
		preventDefault();
		if(Launcher.isBlockLauncher()) {
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().nativeSetTextboxText("");
			com.mojang.minecraftpe.MainActivity.currentMainActivity.get().updateTextboxText("");
		}
		VertexClientPE.commandManager(text.substring(1, text.length));
	} else {
		if(text.charAt(0) != "/") {
			VertexClientPE.modules.forEach(function(element, index, array) {
				if(element.isStateMod() && element.state && element.onChat) {
					element.onChat(text);
				}
			});
		}
	}
}

function chatReceiveHook(text, sender) {
	VertexClientPE.modules.forEach(function(element, index, array) {
		if(element.isStateMod() && element.state && element.onChatReceive) {
			element.onChatReceive(text, sender);
		}
	});
}

/**
 *  ##############
 *	# GUI & MORE #
 *	##############
 */

VertexClientPE.addView = function(layout, modButtonView) {
	try {
		for(var fav in VertexClientPE.favourites) {
			if(VertexClientPE.favourites[fav] == modButtonView.getName()) {
				favMenuLayout.addView(modButtonView.getLayout());
				var isFavourite = true;
				break;
			}
		}
		if(!isFavourite) {
			layout.addView(modButtonView.getLayout());
		}
	} catch(e) {
		clientMessage("Error: " + e);
		VertexClientPE.showBugReportDialog(e);
	}
}

VertexClientPE.showNotification = function(eventtext) {
	var mNM = ctx.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
	var notification = new android.app.Notification(android.R.drawable.ic_menu_edit, "Text", java.lang.System.currentTimeMillis());

    // The PendingIntent to launch our activity if the user selects this
    // notification
    var contentIntent = android.app.PendingIntent.getActivity(ctx, 0, new android.content.Intent(ctx), 0);

    // Set the info for the views that show in the notification panel.
    notification.setLatestEventInfo(ctx, "Title", eventtext, contentIntent);

    // Send the notification.
    mNM.notify("Title", 0, notification);
}

var nameColor = "§b";
var healthColor = "§c";

var defaultDestroyTimeAll = [
    null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

Block.setDestroyTimeAll = function(destroyTime) {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, destroyTime);
    }
}

Block.setDestroyTimeDefaultAll = function() {
    for(i = 0; i < 256; i++) {
        Block.setDestroyTime(i, defaultDestroyTimeAll[i]);
    }
}

var logoImage = " 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AAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSAWBdbwAAA/ZJREFUHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJtIeAAAAAAAAACbSHgAAAAAAAAAm0h4AAAAAAAAAJgFzpi/57V30igAAAABJRU5ErkJggg== ";
var iconIcon = " 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AAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAAAAAAUCKENQAAAAAAACVCWAMAAAAAAFAihDUAAAAAAAAlQlgDAAAAAABQIoQ1AAAAAAAAJUJYAwAA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NQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAEEWsAAAAAgog1AAAAAEHEGgAAAIAgYg0AAABAELEGAAAAIIhYAwAAABBErAEAAAAIItYAAAAABBFrAAAAAIKINQAAAABBxBoAAACAIGINAAAAQBCxBgAAACCIWAMAAAAQRKwBAAAACCLWAAAAAAQRawAAAACCiDUAAAAAQcQaAAAAgCBiDQAAAEAQsQYAAAAgiFgDAAAAEESsAQAAAAgi1gAAAAAE+f+JNVt31xex5vSlU91bdH+/f4uqe+tHsaapx/XjWNP9e9Zaa6211lprrbX2+R1uPtSVRw++dK9U3bf1bIg1/R9bvLixt1KulXdvHxZrjj4o23dX3r7zSjkoq3un+r/fP1bTx5qh18yaetrWo7Ya99Wmmi36kLXWWmuttdZaa619bvucMtSVaf8szdBuqrq/2WTeTncWKaf7MxuX1svV8v6tG1t3n4s1x++Vycdrb9/5TjkoK5dXJs3wd/q/ttPf8KzOUGrGzRBrnHPOOeecc84559yhV9ezSTOfNLP+sZpm/PiV/sma2aRtp8NDN8Od3lst156PNffL0v2lE58fn/zl3M1b+2W/rO6tVXUfaPr3GmJN923394cnbfqndxYfuHLOOeecc84555xzh952O92ejyftVjXbqppx1UzHs/6qatIMdWXc9rf60omyX969c+3LsebBsXL/+NK9k9sfbb19e7/cKKt7K1U9H9LM4mNQi1iz+KhV3b37M/+8c84555xzzjnnnHv6+jTTjvtSM9uqF7Gm7V+v+1jTvT6azEbdK2tXjpX98t7t17furj/zMail8vDY5qdn3vzwtfK9snzl+PB2o8c/Tni2+FRV98VwAAAAAHy9vqI0df8jZebTup0+KirtpOm+beruf33B2dhbLlfLT24982RNH2v62/x0480PX+ljzUtHJ32p2WrqUfeXFx+s6v+Bpz55Za211lprrbXWWmsP3eGGHzZcTefT7maLWNNUi1jTv17X/T2KNb/fPyzW9L+6e+OtD75TbpT1veNNPZ1XowvT8YVJvXjH7voONPwm8MUvirLWWmuttdZaa621z29d97/paRFrHv9m7e4/TbubTSfdi/0noYYna05fXh5+wPBhT9YcvVcmH228e+u1sl82Lp2cT+sL0/HFySLW9I3mya/uHn7GcP/PWmuttdZaa6211trndxFrun061kxm0+4WsWb4DNS4+/YrYs3n5diDcuKzMv/k7Du//ffuT2y8uNL/gqlp/3b9Z6jq7r1Gk/Zc1Z6p2s3hKZ1nH++x1lprrbXWWmuttU92+P3a8yHWTNtp/+Ii1lxs5/V40jRV09bTunrhpbU+1vz2mVjzRVm6X049KFt/WumfrHmjvHBlYzzq3rXprun+6qwZ3nhcz8/W7fn+7ZruP7XWWmuttdZaa6219rBtm/pCU+/0kaaZLALLUFeq7fNbuxcuzubNtJ6MJuP1SyvlWvnprYNDPgZ14mE595dTP7r9avluObl7qm53h/QzrycXqslut/W0nU2a/teBV1X3dtZaa6211lprrbX2K7aaVm3/I2rqUVVvV9Vk3Ey22lF33Wtt25wbn59dbKt2tnFltbxefvTrV78caz4bes0XZfrXzR9++Gp5syztHh+1O9NZWzc7Tb07qy51N59eujjZ3ZnuzOqmnlVNU1lrrbXWWmuttdbaw7apm526/7jSpJmNu1embTXamXQ3mzfb2+e3x1vt7nzz3Nn1F0+Vg/Kz29999smaYw+Pl7+Xzf9c/cGdV8r3y8lvLW/Otrba7dFsNB5S0OIRm3Y8b8dt/7u8q6oeHrGx1lprrbXWWmuttc9vn2eqpqpHdbVdV5PFwzXd9R+Jmkx32vnOzs503IxePlteKe/96ur2x2eejjXHy/2y9HDp/H9tvPHnfysHpftDay+fXH1pafXlI2tXTqxdXjm9t7qxt7r54vrmi90XK84555xzzjnnnHPua+703nqfUy6f2Lh87IW95Y295dUry2vdXTjxwsVT6xdPrl9c3vrG2aPfLOX18v5/vH7uk7WnYk33f/9Tjjw8svH5yW//cVx+UcqNvteUq6VcL2V/uO6Vbrtvn7zinHPOOeecc8455/4vt8gpB0NguTp8fe1xeOle+WX510+21v529Okna4ZvHpal/y7/cq/a//Oln9w5+Plv3vj572/89PZr79+5+t4HV29+cL2794a7+cGNd/5ww1prrbXWWmuttdZ+9R50N7SUq4uc8taH19/5w/V3b13/8e2Dm7+7fvPW/o/vfP+tP736rY/P7T5cPbH4mcKPYs0Xpdzvvz9yr6z+/ejZv54a3d0cf3R2/NGZ7Y83tu4ecuc+sdZaa6211lprrbVft49vffFF9+Li9ad6y5mzn66t/+3o8mdl6d5Qau4PoaYPNg/6j0H1Lw1fPPnaOeecc84555xzzv1j7siXnqwRa5xzzjnnnHPOOef+iXf/8fZP1nw+NJvum24XXzz52jnnnHPOOeecc879w+6LUj4r/ws9yk28Xoa9tAAAAABJRU5ErkJggg== ";
var iconIconClicked = " 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jxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q1gAAAAAAAPQIYQ0AAAAAAECPENYAAAAAAAD0CGENAAAAAABAjxDWAAAAAAAA9AhhDQAAAAAAQI8Q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AAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAAAMCAENYAAAAAAAAMCGENAAAAAADAgBDWAAAAAAAADAhhDQAAAAAAwIAQ1gAAAAAAAAwIYQ0AAAAA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 ";
var playPlayButton = " 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 ";
var playPlayButtonClicked = " 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 ";
var twitterTwitterButton = " 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 ";
var twitterTwitterButtonClicked = " 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 ";
var youTubeYouTubeButton = " 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 ";
var youTubeYouTubeButtonClicked = " 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 ";
var pathFont = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang";

Base64Decode(android.util.Base64.decode(iconIcon, 0), pathFont + "/clienticon.png");
Base64Decode(android.util.Base64.decode(iconIconClicked, 0), pathFont + "/clienticon_clicked.png");
Base64Decode(android.util.Base64.decode(playPlayButton, 0), pathFont + "/play_button.png");
Base64Decode(android.util.Base64.decode(playPlayButtonClicked, 0), pathFont + "/play_button_clicked.png");
Base64Decode(android.util.Base64.decode(twitterTwitterButton, 0), pathFont + "/twitter_button.png");
Base64Decode(android.util.Base64.decode(youTubeYouTubeButton, 0), pathFont + "/youtube_button.png");
Base64Decode(android.util.Base64.decode(twitterTwitterButtonClicked, 0), pathFont + "/twitter_button_clicked.png");
Base64Decode(android.util.Base64.decode(youTubeYouTubeButtonClicked, 0), pathFont + "/youtube_button_clicked.png");

var imgIcon = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/clienticon.png");
var imgIconClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/clienticon_clicked.png");
var imgPlayButton = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/play_button.png");
var imgPlayButtonClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/play_button_clicked.png");
var imgTwitterButton = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/twitter_button.png");
var imgYouTubeButton = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/youtube_button.png");
var imgTwitterButtonClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/twitter_button_clicked.png");
var imgYouTubeButtonClicked = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/youtube_button_clicked.png");
var iconClientGUI = new android.graphics.drawable.BitmapDrawable(imgIcon);
var iconClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgIconClicked)
var playButtonClientGUI = new android.graphics.drawable.BitmapDrawable(imgPlayButton);
var playButtonClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgPlayButtonClicked);
var splashTwitterButtonClientGUI = new android.graphics.drawable.BitmapDrawable(imgTwitterButton);
var splashYouTubeButtonClientGUI = new android.graphics.drawable.BitmapDrawable(imgYouTubeButton);
var splashTwitterButtonClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgTwitterButtonClicked);
var splashYouTubeButtonClickedClientGUI = new android.graphics.drawable.BitmapDrawable(imgYouTubeButtonClicked);

function Base64Decode(byteArray, Path) {
    try {
        var File = new java.io.File(Path);
        if (!File.exists()) {
            File.createNewFile();
            var Stream = new java.io.FileOutputStream(File);
            Stream.write(byteArray);
            Stream.close();
        }
        
    } catch (err) {
        print(err);
    }
}

var getContext = function() {
    return com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
};

ModPE.goToURL = function(url) {
	var uri = android.net.Uri.parse(url);
	var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
	ctx.startActivity(intent);
};

ModPE.getPlayerName = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, username;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "mp_username") {
            username = read.split(":")[1];
            break;
        }
    }
    br.close();
    return username;
};

ModPE.getClientId = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/clientid.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, username;
    while((read = br.readLine()) != null) {
        username = read;
        break;
    }
    br.close();
    return username;
};

function saveSetting(article, value) {
	var fileInputStream = new java.io.FileInputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
	var bufferedReader = new java.io.BufferedReader(inputStreamReader);
	var tempRead, tempReadString;
	var tempSaved = "";
	while ((tempRead = bufferedReader.readLine()) != null) {
	tempReadString = tempRead.toString();
	if (tempReadString.split(":")[0] == article) continue;
	tempSaved += tempReadString + "\n"
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	var fileOutputStream = new java.io.FileOutputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
	var outputStreamWriter = new java.io.OutputStreamWriter(fileOutputStream);
	outputStreamWriter.write(tempSaved + article + ":" + value);
	outputStreamWriter.close();
	fileOutputStream.close();
	net.zhuoweizhang.mcpelauncher.ScriptManager.requestGraphicsReset();
};

/*function saveVertexSetting(article, value, secValue) {
	var fileInputStream = new java.io.FileInputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/vertex_categories.txt"));
	var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
	var bufferedReader = new java.io.BufferedReader(inputStreamReader);
	var tempRead, tempReadString;
	var tempSaved = "";
	while ((tempRead = bufferedReader.readLine()) != null) {
	tempReadString = tempRead.toString();
	if (tempReadString.split(":")[0] == article) continue;
	tempSaved += tempReadString + "\n"
	}
	fileInputStream.close();
	inputStreamReader.close();
	bufferedReader.close();
	var fileOutputStream = new java.io.FileOutputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/vertex_categories.txt"));
	var outputStreamWriter = new java.io.OutputStreamWriter(fileOutputStream);
	outputStreamWriter.write(tempSaved + article + ":" + value);
	outputStreamWriter.close();
	fileOutputStream.close();
};*/

/*function loadVertexSetting(article) {
var fileInputStream = new java.io.FileInputStream(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/vertex_categories.txt"));
var inputStreamReader = new java.io.InputStreamReader(fileInputStream);
var bufferedReader = new java.io.BufferedReader(inputStreamReader);
var tempRead, tempReadString;
while ((tempRead = bufferedReader.readLine()) != null) {
tempReadString = tempRead.toString();
if (tempReadString.split(":")[0] == article) {
fileInputStream.close();
inputStreamReader.close();
bufferedReader.close();
return tempReadString.split(":")[1]
}
}
fileInputStream.close();
inputStreamReader.close();
bufferedReader.close();
return null
};
if (!_MOD_DIR.exists()) {
_MOD_DIR.mkdirs()
}
if (!_MOD_DATA.exists()) {
_MOD_DATA.createNewFile()
}

function alert(a) {
clientMessage("" + a)
}*/

//ctx.setSession(); session

/*ModPE.setProfileName = function(profileName) {
	//ctx.setLoginInformation(ctx.getAccessToken(), ModPE.getClientId(), ctx.getProfileId(), username);
	var edit = android.preference.PreferenceManager.getDefaultSharedPreferences(ctx).edit();
	edit.putString("profileName", profileName);
	edit.commit();
}*/

ModPE.getInfo = function(infoName) { //profileName, sessionId
	return android.preference.PreferenceManager.getDefaultSharedPreferences(ctx).getString(infoName, null);
}

ModPE.setSession = function(sessionId) {
	//ctx.setLoginInformation(ctx.getAccessToken(), ModPE.getClientId(), ctx.getProfileId(), username);
	var edit = android.preference.PreferenceManager.getDefaultSharedPreferences(ctx).edit();
	edit.putString("sessionId", sessionId);
	edit.commit();
}

ModPE.playerHasSplitControls = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, splitcontrols;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "ctrl_usetouchjoypad") {
            splitcontrols = read.split(":")[1];
            break;
        }
    }
    br.close();
    return splitcontrols;
};

ModPE.getCurrentUsedSkin = function() {
    var file = new java.io.File("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file)));
    var read, skin;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "game_skintypefull") {
            skin = read.split(":")[1];
            break;
        }
    }
    br.close();
    return skin;
};

var URL = "https://www.dominos.com/en/pages/order/";

function pizzaOrderDialog(){

ctx.runOnUiThread(new java.lang.Runnable({

run: function(){
try{
var wwv=new android.webkit.WebView(ctx);
var wS=wwv.getSettings();

wS.setJavaScriptEnabled(true);
wwv.setWebChromeClient(new android.webkit.WebChromeClient());
wwv.setWebViewClient(new android.webkit.WebViewClient());

wwv.loadUrl(URL);

var b=new android.app.AlertDialog.Builder(ctx);

b.setTitle(URL);
b.setView(wwv);
b.setNegativeButton("Close",new android.content.DialogInterface.OnClickListener(){

onClick:function(di, v1){
di.dismiss();
}
});

var a=b.create();
a.show();
}catch(err){
print("Cannot open window: "+err+".")
VertexClientPE.showBugReportDialog(err);
;
}
}}));
}

var line0, line1, line2, line3;

VertexClientPE.showSignEditorDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				dialogGUI = new widget.PopupWindow();
				var signEditorTitle = clientTextView("SignEditor", true);
				var btn = clientButton("Ok");
				var btn1 = clientButton("Cancel");
				var inputBar = new EditText(ctx);
				var inputBar1 = new EditText(ctx);
				var inputBar2 = new EditText(ctx);
				var inputBar3 = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(signEditorTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(inputBar1);
				dialogLayout.addView(inputBar2);
				dialogLayout.addView(inputBar3);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("SignEditor");
				inputBar.setHint("Line 1");
				inputBar.setText(Level.getSignText(signX, signY, signZ, 0));
				inputBar.setTextColor(android.graphics.Color.WHITE);
				inputBar1.setHint("Line 2");
				inputBar1.setText(Level.getSignText(signX, signY, signZ, 1));
				inputBar1.setTextColor(android.graphics.Color.WHITE);
				inputBar2.setHint("Line 3");
				inputBar2.setText(Level.getSignText(signX, signY, signZ, 2));
				inputBar2.setTextColor(android.graphics.Color.WHITE);
				inputBar3.setHint("Line 4");
				inputBar3.setText(Level.getSignText(signX, signY, signZ, 3));
				inputBar3.setTextColor(android.graphics.Color.WHITE);
				dialogGUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						line0 = inputBar.getText();
						line1 = inputBar1.getText();
						line2 = inputBar2.getText();
						line3 = inputBar3.getText();
						Level.setSignText(signX, signY, signZ, 0, line0);
						Level.setSignText(signX, signY, signZ, 1, line1);
						Level.setSignText(signX, signY, signZ, 2, line2);
						Level.setSignText(signX, signY, signZ, 3, line3);
						dialog.dismiss();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(err);
			}
		}
	});
}

var itemId, amount, data;

VertexClientPE.showItemGiverDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				dialogGUI = new widget.PopupWindow();
				var itemGiverTitle = clientTextView("ItemGiver", true);
				var btn = clientButton("Add");
				var btn1 = clientButton("Cancel");
				var inputBar = new EditText(ctx);
				var inputBar1 = new EditText(ctx);
				var inputBar2 = new EditText(ctx);
				inputBar.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				inputBar1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				inputBar2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				var dialogLayout = new LinearLayout(ctx);
				var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(itemGiverTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(inputBar1);
				dialogLayout.addView(inputBar2);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("ItemGiver");
				inputBar.setHint("ID");
				inputBar.setTextColor(android.graphics.Color.WHITE);
				inputBar1.setHint("Amount");
				inputBar1.setTextColor(android.graphics.Color.WHITE);
				inputBar2.setHint("Data");
				inputBar2.setTextColor(android.graphics.Color.WHITE);
				dialogGUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						itemId = inputBar.getText();
						amount = inputBar1.getText();
						data = inputBar2.getText();
						Player.addItemInventory(itemId, amount, data);
						dialog.dismiss();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(err);
			}
		}
	});
}

var reportName;

VertexClientPE.showBugReportDialog = function(exception) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				dialogGUI = new widget.PopupWindow();
				var bugReportTitle = clientTextView("An error occurred", true);
				var btn = clientButton("Report on GitHub");
				var btn1 = clientButton("Close");
				var inputBar = new EditText(ctx);
				var exceptionTextView = clientTextView(exception);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(bugReportTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(exceptionTextView);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("An error occurred");
				inputBar.setHint("Title of the issue");
				inputBar.setTextColor(android.graphics.Color.WHITE);
				dialogGUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						reportName = inputBar.getText();
						ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/issues/new?title=" + reportName + "&body=" + exception);
						dialog.dismiss();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
			}
		}
	});
}

VertexClientPE.showMoreDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				dialogGUI = new widget.PopupWindow();
				var moreTitle = clientTextView("More", true);
				var settingsButton = clientButton("Settings");
				var informationButton = clientButton("Information");
				var kitsButton = clientButton("Kits");
				var newLineText = new widget.TextView(ctx);
				newLineText.setText("\n");
				var cancelButton = clientButton("Cancel");
				var dialogLayout = new LinearLayout(ctx);
				var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(moreTitle);
				dialogLayout.addView(settingsButton);
				dialogLayout.addView(informationButton);
				//dialogLayout.addView(kitsButton);
				dialogLayout.addView(newLineText);
				dialogLayout.addView(cancelButton);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("More");
				dialogGUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				dialog.show();
				settingsButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						topBar.dismiss();
						showingMenu = false;
						vertexclientpecombatmenu.dismiss(); //Close
						vertexclientpebuildingmenu.dismiss(); //Close
						vertexclientpemovementmenu.dismiss(); //Close
						vertexclientpechatmenu.dismiss(); //Close
						vertexclientpemiscmenu.dismiss(); //Close
						//vertexclientpefavmenu.dismiss(); //Close
						settingsScreen();
						exitSettings();
					}
				});
				informationButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						topBar.dismiss();
						showingMenu = false;
						vertexclientpecombatmenu.dismiss(); //Close
						vertexclientpebuildingmenu.dismiss(); //Close
						vertexclientpemovementmenu.dismiss(); //Close
						vertexclientpechatmenu.dismiss(); //Close
						vertexclientpemiscmenu.dismiss(); //Close
						//vertexclientpefavmenu.dismiss(); //Close
						informationScreen();
						exitInformation();
					}
				});
				kitsButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						topBar.dismiss();
						showingMenu = false;
						vertexclientpecombatmenu.dismiss(); //Close
						vertexclientpebuildingmenu.dismiss(); //Close
						vertexclientpemovementmenu.dismiss(); //Close
						vertexclientpechatmenu.dismiss(); //Close
						vertexclientpemiscmenu.dismiss(); //Close
						//vertexclientpefavmenu.dismiss(); //Close
						VertexClientPE.showKitsScreen();
					}
				});
				cancelButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showModDialog = function(mod, btn) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var modTitle = clientTextView(mod.name, true);
				modTitle.setTextSize(20);
				var modTypeText = clientTextView("Type: " + mod.type + "\n");
				var modDescTitle = clientTextView("Description:");
				var modDescText = clientTextView(mod.desc + "\n");
				var closeButton = clientButton("Close");
				closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(modTitle);
				dialogLayout.addView(modTypeText);
				dialogLayout.addView(modDescTitle);
				dialogLayout.addView(modDescText);
				
				if(mod.getSettingsLayout) {
					dialogLayout.addView(mod.getSettingsLayout());
				}
				
				var dialogExtraLayout = new LinearLayout(ctx);
				dialogExtraLayout.setOrientation(LinearLayout.HORIZONTAL);
				dialogLayout.addView(dialogExtraLayout);
				if(mod.isStateMod()) {
					dialogExtraLayoutLeft = new LinearLayout(ctx);
					dialogExtraLayoutLeft.setOrientation(1);
					dialogExtraLayoutLeft.setGravity(android.view.Gravity.CENTER);
					dialogExtraLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayoutRight = new LinearLayout(ctx);
					dialogExtraLayoutRight.setOrientation(1);
					dialogExtraLayoutRight.setGravity(android.view.Gravity.CENTER);
					dialogExtraLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayout.addView(dialogExtraLayoutLeft);
					dialogExtraLayout.addView(dialogExtraLayoutRight);
					closeButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
					dialogExtraLayoutLeft.addView(closeButton);
					var toggleButton = clientButton("Toggle");
					toggleButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
					if(mod.state) {
						toggleButton.setText("Disable");
						toggleButton.setTextColor(android.graphics.Color.GREEN);
					} else {
						toggleButton.setText("Enable");
						toggleButton.setTextColor(android.graphics.Color.WHITE);
					}
					toggleButton.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(view) {
							mod.onToggle();
							if(mod.state) {
								toggleButton.setText("Disable");
								toggleButton.setTextColor(android.graphics.Color.GREEN);
								btn.setTextColor(android.graphics.Color.GREEN);
							} else {
								toggleButton.setText("Enable");
								toggleButton.setTextColor(android.graphics.Color.WHITE);
								btn.setTextColor(android.graphics.Color.WHITE);
							}
						}
					});
					dialogExtraLayoutRight.addView(toggleButton);
				} else {
					dialogExtraLayout.setGravity(android.view.Gravity.CENTER);
					closeButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
					dialogExtraLayout.addView(closeButton);
				}
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(mod.name);
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener() {
					onDismiss: function() {
						if(mod.onModDialogDismiss) {
							mod.onModDialogDismiss();
						}
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showAutoSpammerDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var autoSpammerTitle = clientTextView("AutoSpammer", true);
				autoSpammerTitle.setTextSize(20);
				var autoSpammerTypeText = clientTextView("Type: Mod\n");
				var autoSpammerDescTitle = clientTextView("Description:");
				var autoSpammerDescText = clientTextView("Automatically spams the chat.\n");
				var autoSpammerMessageTitle = clientTextView("Message:");
				var spamMessageInput = new EditText(ctx);
				spamMessageInput.setText(spamMessage);
				spamMessageInput.setTextColor(android.graphics.Color.WHITE);
				spamMessageInput.setHint("Spam message");
				var closeButton = clientButton("Close");
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(autoSpammerTitle);
				dialogLayout.addView(autoSpammerTypeText);
				dialogLayout.addView(autoSpammerDescTitle);
				dialogLayout.addView(autoSpammerDescText);
				dialogLayout.addView(autoSpammerMessageTitle);
				dialogLayout.addView(spamMessageInput);
				dialogLayout.addView(closeButton);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("AutoSpammer");
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener() {
					onDismiss: function() {
						spamMessage = spamMessageInput.getText();
						VertexClientPE.saveMainSettings();
						VertexClientPE.loadMainSettings();
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showDelaySpammerDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				var delaySpammerTitle = clientTextView("DelaySpammer", true);
				delaySpammerTitle.setTextSize(20);
				var delaySpammerTypeText = clientTextView("Type: Mod\n");
				var delaySpammerDescTitle = clientTextView("Description:");
				var delaySpammerDescText = clientTextView("Automatically spams the chat with a delay and randomly generated messages.\n");
				var delaySpammerDelayTimeTitle = clientTextView("Delay time: | " + spamDelayTime + " seconds");
				var delaySpammerDelayTimeSlider = new widget.SeekBar(ctx);
				delaySpammerDelayTimeSlider.setProgress(spamDelayTime);
				delaySpammerDelayTimeSlider.setMax(60);
				var closeButton = clientButton("Close");
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(delaySpammerTitle);
				dialogLayout.addView(delaySpammerTypeText);
				dialogLayout.addView(delaySpammerDescTitle);
				dialogLayout.addView(delaySpammerDescText);
				dialogLayout.addView(delaySpammerDelayTimeTitle);
				dialogLayout.addView(delaySpammerDelayTimeSlider);
				dialogLayout.addView(closeButton);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("DelaySpammer");
				delaySpammerDelayTimeSlider.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
					onProgressChanged: function() {
						spamDelayTime = delaySpammerDelayTimeSlider.getProgress();
						delaySpammerDelayTimeTitle.setText("Delay time: | " + spamDelayTime + " seconds");
					}
				});
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener() {
					onDismiss: function() {
						spamDelayTime = delaySpammerDelayTimeSlider.getProgress();
						VertexClientPE.saveMainSettings();
						VertexClientPE.loadMainSettings();
					}
				});
				dialog.show();
				var window = dialog.getWindow();
				window.setLayout(display.widthPixels, display.heightPixels);
				closeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showAddAccountDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				dialogGUI = new widget.PopupWindow();
				var accountTitle = clientTextView("Add account", true);
				var accountInput = new EditText(ctx);
				accountInput.setTextColor(android.graphics.Color.WHITE);
				accountInput.setHint("Enter an username");
				var okButton = clientButton("Ok");
				var cancelButton = clientButton("Cancel");
				var dialogLayout = new LinearLayout(ctx);
				var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(accountTitle);
				dialogLayout.addView(accountInput);
				dialogLayout.addView(okButton);
				dialogLayout.addView(cancelButton);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Change spam message");
				dialogGUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				dialog.show();
				okButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						var accountName = accountInput.getText();
						VertexClientPE.accounts.push({
							username: accountName.toString()
						})
						VertexClientPE.saveMainSettings();
						VertexClientPE.loadMainSettings();
						dialog.dismiss();
						accountManager.dismiss();
						VertexClientPE.showAccountManager();
					}
				});
				cancelButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showProDialog = function(featureName) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var dialogTitle = clientTextView("Pro");
				dialogTitle.setTextSize(25);
				var dialogDesc = clientTextView(featureName + " requires Vertex Client PE Pro!\n");
				var btn = clientButton("Get Pro for free!");
				var btn1 = clientButton("Close");
				var inputBar = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(dialogTitle);
				dialogLayout.addView(dialogDesc);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle(featureName + " requires Vertex Client PE Pro");
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
						VertexClientPE.downloadPro();
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

var consoleInput;

VertexClientPE.showJavascriptConsoleDialog = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				dialogGUI = new widget.PopupWindow();
				var javascriptConsoleTitle = clientTextView("Javascript Console", true);
				var btn = clientButton("Send");
				var btn1 = clientButton("Cancel");
				var inputBar = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				var spritesheet = android.graphics.Bitmap.createScaledBitmap(trimImage(GetSpritesheet(), 0, 0, 16, 16), 16 * GuiSize, 16 * GuiSize, false);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(javascriptConsoleTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				dialogLayout.addView(btn1);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Javascript Console");
				inputBar.setHint("Javascript input");
				inputBar.setTextColor(android.graphics.Color.WHITE);
				dialogGUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialogGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				dialog.show();
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
					consoleInput = "js " + inputBar.getText();
					  var jsLine,
						  funcResult,
						  jsRex = /(?:^js(?:\s+)(.*)$)|(?:^js$)/,
						  matches;

					  if(jsRex.test(consoleInput)) {

						matches = jsRex.exec(consoleInput);

						if(matches[1] === undefined || matches[1] === '') {
						  print('Usage: js <JavaScript code>');
						}
						else {
						  jsLine = matches[1];
						  // Evaluate the second part of the command as a JavaScript snippet and collect the result
						  try {
							funcResult = eval(jsLine);
						  }
						  catch(e) {
							clientMessage('JavaScript Error: ' + e.message);
						  }
						  
						  // If a value was returned, post it on the PE chat console
						  if(funcResult != null) {
							clientMessage(funcResult.toString());
						  }
						}
					  }
					}
				});
				btn1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.showKitsScreen = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					var kitsScreenLayout = new LinearLayout(ctx);
					kitsScreenLayout.setOrientation(0);
					kitsScreenLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var kitsScreenScrollView = new ScrollView(ctx);
					kitsScreenLayout.addView(kitsScreenScrollView);
					
					var kitsScreenLayout1 = new LinearLayout(ctx);
					kitsScreenLayout1.setOrientation(LinearLayout.HORIZONTAL);
					kitsScreenLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					kitsScreenScrollView.addView(kitsScreenLayout1);
					
					var kitsScreenLayoutLeft = new LinearLayout(ctx);
					kitsScreenLayoutLeft.setOrientation(1);
					kitsScreenLayoutLeft.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					kitsScreenLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
					kitsScreenLayout1.addView(kitsScreenLayoutLeft);
					
					var kitsScreenLayoutCenter = new LinearLayout(ctx);
					kitsScreenLayoutCenter.setOrientation(1);
					kitsScreenLayoutCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					kitsScreenLayoutCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
					kitsScreenLayout1.addView(kitsScreenLayoutCenter);
					
					var kitsScreenLayoutRight = new LinearLayout(ctx);
					kitsScreenLayoutRight.setOrientation(1);
					kitsScreenLayoutRight.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					kitsScreenLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
					kitsScreenLayout1.addView(kitsScreenLayoutRight);
					
					var combatKitButton = new Button(ctx);
					combatKitButton.setText("Combat");
					combatKitButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.widthPixels / 4));
					combatKitButton.setBackgroundDrawable(combatKitClientGUI);
					combatKitButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							//todo
						}
					}));
					kitsScreenLayoutLeft.addView(combatKitButton);
					
					var toolsKitButton = clientButton("Tools");
					toolsKitButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					toolsKitButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							//todo
						}
					}));
					//kitsScreenLayoutCenter.addView(toolsKitButton);
					
					var kitsButtonBlue = clientButton("Unknown");
					kitsButtonBlue.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					kitsButtonBlue.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							//todo
						}
					}));
					//kitsScreenLayoutRight.addView(kitsButtonBlue);
					
					kitsScreen = new widget.PopupWindow(kitsScreenLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
					kitsScreen.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#0080FF")));
					kitsScreen.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
				}
			}
		}));
}

VertexClientPE.showCategoryDialog = function(titleView, currentName, categoryId) {
	ctx.runOnUiThread(new java.lang.Runnable() {
		run: function() {
			try {
				var _0x25ea=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x52\x65\x6E\x61\x6D\x69\x6E\x67\x20\x63\x61\x74\x65\x67\x6F\x72\x69\x65\x73","\x73\x68\x6F\x77\x50\x72\x6F\x44\x69\x61\x6C\x6F\x67"];if(VertexClientPE[_0x25ea[0]]()!=_0x25ea[1]){VertexClientPE[_0x25ea[3]](_0x25ea[2]);return}
				dialogGUI = new widget.PopupWindow();
				var categoryDialogTitle = clientTextView("Rename category \'" + currentName + "\'", true);
				var btn = clientButton("Close");
				var inputBar = new EditText(ctx);
				var dialogLayout = new LinearLayout(ctx);
				dialogLayout.setBackgroundDrawable(backgroundGradient());
				dialogLayout.setOrientation(LinearLayout.VERTICAL);
				dialogLayout.addView(categoryDialogTitle);
				dialogLayout.addView(inputBar);
				dialogLayout.addView(btn);
				var dialog = new android.app.Dialog(ctx);
				dialog.requestWindowFeature(android.view.Window.FEATURE_NO_TITLE);
				dialog.getWindow().setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				dialog.setContentView(dialogLayout);
				dialog.setTitle("Rename category \'" + currentName + "\'");
				inputBar.setHint("Category name");
				inputBar.setText(currentName);
				inputBar.setTextColor(android.graphics.Color.WHITE);
				dialogGUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
				dialog.show();
				inputBar.addTextChangedListener(new android.text.TextWatcher() {
					onTextChanged: function() {
						currentName = inputBar.getText();
					}
				});
				btn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(view) {
						dialog.dismiss();
					}
				});
				dialog.setOnDismissListener(new android.content.DialogInterface.OnDismissListener() {
					onDismiss: function() {
						switch(categoryId) {
							case 0:
								combatName = currentName;
								break;
							case 1:
								buildingName = currentName;
								break;
							case 2:
								movementName = currentName;
								break;
							case 3:
								chatName = currentName;
								break;
							case 4:
								miscName = currentName;
								break;
							default:
								VertexClientPE.toast("An error occurred!");
								break;
						}
						VertexClientPE.saveMainSettings();
						VertexClientPE.loadMainSettings();
						titleView.getMiddleButton().setText(currentName);
					}
				});
			} catch(e) {
				print("Error: " + e);
				VertexClientPE.showBugReportDialog(e);
			}
		}
	});
}

VertexClientPE.toggleModule = function(module) {
	var sendMessage = true;
	switch(module) {
		case "yescheat+": {
			if(yesCheatPlusState == false) {
				yesCheatPlusState = true;
			} else if(yesCheatPlusState == true) {
				yesCheatPlusState = false;
			}
			break;
		} case "antilbah": {
			flightMsgShown = false;
			if(antiLBAHState == false) {
				antiLBAHState = true;
			} else if(antiLBAHState == true) {
				antiLBAHState = false;
			}
			break;
		} case "nuker": {
			if(nukerState == false) {
				nukerState = true;
			} else if(nukerState == true) {
				nukerState = false;
			}
			break;
		} case "derp": {
			if(derpState == false) {
				derpState = true;
			} else if(derpState == true) {
				derpState = false;
			}
			break;
		} case "xray": {
			if(xRayState == false) {
				xRayState = true;
				VertexClientPE.xRay(1);
			} else if(xRayState == true) {
				xRayState = false;
				VertexClientPE.xRay(0);
			}
			break;
		/*} case "freecam": {
			if(freecamState == false) {
				VertexClientPE.freecam(1);
				freecamState = true;
			} else if(freecamState == true) {
				freecamState = false;
				VertexClientPE.freecam(0);
			}
			VertexClientPE.clientMessage(ChatColor.GREEN + "Successfully toggled module \'" + module + "\'!");
			break;*/
		} case "autospammer": {
			if(autoSpammerState == false) {
				autoSpammerState = true;
			} else if(autoSpammerState == true) {
				autoSpammerState = false;
			}
			break;
		} case "delayspammer": {
			if(delaySpammerState == false) {
				delaySpammerState = true;
			} else if(delaySpammerState == true) {
				delaySpammerState = false;
			}
			break;
		} case "droneplus": {
			if(dronePlusState == false) {
				dronePlusState = true;
			} else if(dronePlusState == true) {
				dronePlusState = false;
			}
			break;
		} case "regen": {
			if(regenState == false) {
				regenState = true;
			} else if(regenState == true) {
				regenState = false;
			}
			break;
		} case "instakill": {
			if(instaKillState == false) {
				instaKillState = true;
			} else if(instaKillState == true) {
				instaKillState = false;
			}
			break;
		} case "fastbreak": {
			if(fastBreakState == false) {
				fastBreakState = true;
				Block.setDestroyTimeAll(0);
			} else if(fastBreakState == true) {
				fastBreakState = false;
				Block.setDestroyTimeDefaultAll();
			}
			break;
		} case "glide": {
			if(glideState == false) {
				glideState = true;
			} else if(glideState == true) {
				glideState = false;
			}
			break;
		} case "arrowgun": {
			if(arrowGunState == false) {
				arrowGunState = true;
			} else if(arrowGunState == true) {
				arrowGunState = false;
			}
			break;
		} case "automine": {
			if(autoMineState == false) {
				autoMineState = true;
			} else if(autoMineState == true) {
				autoMineState = false;
			}
			break;
		} case "killaura": {
			if(killAuraState == false) {
				killAuraState = true;
			} else if(killAuraState == true) {
				killAuraState = false;
			}
			break;
		} case "powerexplosions": {
			if(powerExplosionsState == false) {
				powerExplosionsState = true;
			} else if(powerExplosionsState == true) {
				powerExplosionsState = false;
			}
			break;
		} case "stackdrop": {
			if(stackDropState == false) {
				stackDropState = true;
			} else if(stackDropState == true) {
				stackDropState = false;
			}
			break;
		} case "tapremover": {
			if(tapRemoverState == false) {
				tapRemoverState = true;
			} else if(tapRemoverState == true) {
				tapRemoverState = false;
			}
			break;
		} case "timer": {
			if(timerState == false) {
				timerState = true;
			} else if(timerState == true) {
				timerState = false;
			}
			break;
		} case "walkonliquids": {
			if(liquidWalkState == false) {
				liquidWalkState = true;
			} else if(liquidWalkState == true) {
				liquidWalkState = false;
			}
			break;
		} case "wallhack": {
			if(walkHack == false) {
				walkHack = true;
			} else if(walkHack == true) {
				walkHack = false;
			}
			break;
		} case "zoom": {
			if(zoomState == false) {
				zoomState = true;
				ModPE.setFov(10);
			} else if(zoomState == true) {
				zoomState = false;
				ModPE.resetFov();
			}
			break;
		} case "signeditor": {
			if(signEditorState == false) {
				signEditorState = true;
			} else if(signEditorState == true) {
				signEditorState = false;
			}
			break;
		} case "tapnuker": {
			if(tapNukerState == false) {
				tapNukerState = true;
			} else if(tapNukerState == true) {
				tapNukerState = false;
			}
			break;
		} case "highjump": {
			if(highJumpState == false) {
				highJumpState = true;
			} else if(highJumpState == true) {
				highJumpState = false;
			}
			break;
		} case "autoswitch": {
			if(autoSwitchState == false) {
				autoSwitchState = true;
			} else if(autoSwitchState == true) {
				autoSwitchState = false;
			}
			break;
		} case "flight": {
			flightMsgShown = false;
			if(flightState == false) {
				flightState = true;
				VertexClientPE.flight(1);
			} else if(flightState == true) {
				flightState = false;
				VertexClientPE.flight(0);
			}
			break;
		} case "autowalk": {
			if(autoWalkState == false) {
				autoWalkState = true;
			} else if(autoWalkState == true) {
				autoWalkState = false;
			}
			break;
		} case "bowaimbot": {
			if(bowAimbotState == false) {
				bowAimbotState = true;
			} else if(bowAimbotState == true) {
				bowAimbotState = false;
			}
			break;
		} case "autoplace": {
			if(autoPlaceState == false) {
				autoPlaceState = true;
			} else if(autoPlaceState == true) {
				autoPlaceState = false;
			}
			break;
		} case "godmode": {
			if(godModeState == false) {
				godModeState = true;
			} else if(godModeState == true) {
				godModeState = false;
			}
			break;
		} case "autoleave": {
			if(autoLeaveState == false) {
				autoLeaveState = true;
			} else if(autoLeaveState == true) {
				autoLeaveState = false;
			}
			break;
		} case "nohurt": {
			if(noHurtState == false) {
				noHurtState = true;
			} else if(noHurtState == true) {
				noHurtState = false;
			}
			break;
		} case "enderprojectiles": {
			if(enderProjectilesState == false) {
				enderProjectilesState = true;
			} else if(enderProjectilesState == true) {
				enderProjectilesState = false;
			}
			break;
		} case "freezeaura": {
			if(freezeAuraState == false) {
				freezeAuraState = true;
			} else if(freezeAuraState == true) {
				freezeAuraState = false;
			}
			break;
		} case "fireaura": {
			if(fireAuraState == false) {
				fireAuraState = true;
			} else if(fireAuraState == true) {
				fireAuraState = false;
			}
			break;
		} case "coordsdisplay": {
			if(coordsDisplayState == false) {
				coordsDisplayState = true;
			} else if(coordsDisplayState == true) {
				coordsDisplayState = false;
			}
			break;
		} case "fastwalk": {
			if(fastWalkState == false) {
				fastWalkState = true;
				f = 1;
			} else if(fastWalkState == true) {
				fastWalkState = false;
				f = 0;
			}
			break;
		} case "follow": {
			var _0x8aae=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x46\x6F\x6C\x6C\x6F\x77","\x73\x68\x6F\x77\x50\x72\x6F\x44\x69\x61\x6C\x6F\x67"];if(VertexClientPE[_0x8aae[0]]()!=_0x8aae[1]){VertexClientPE[_0x8aae[3]](_0x8aae[2]);break}
			if(followState == false) {
				followState = true;
			} else if(followState == true) {
				followState = false;
			}
			break;
		} case "fancychat": {
			if(fancyChatState == false) {
				fancyChatState = true;
			} else if(fancyChatState == true) {
				fancyChatState = false;
			}
			break;
		} case "autosword": {
			if(autoSwordState == false) {
				autoSwordState = true;
			} else if(autoSwordState == true) {
				autoSwordState = false;
			}
			break;
		} case "tapexplosion": {
			if(tapExplosionState == false) {
				tapExplosionState = true;
			} else if(tapExplosionState == true) {
				tapExplosionState = false;
			}
			break;
		} case "criticals": {
			if(criticalsState == false) {
				criticalsState = true;
			} else if(criticalsState == true) {
				criticalsState = false;
			}
			break;
		} case "autoteleporter": {
			if(autoTeleporterState == false) {
				autoTeleporterState = true;
			} else if(autoTeleporterState == true) {
				autoTeleporterState = false;
			}
			break;
		} case "onlyday": {
			if(onlyDayState == false) {
				onlyDayState = true;
			} else if(onlyDayState == true) {
				onlyDayState = false;
			}
			break;
		} case "ride": {
			if(rideState == false) {
				rideState = true;
			} else if(rideState == true) {
				rideState = false;
			}
			break;
		} case "healthtags": {
			if(healthTagsState == false) {
				healthTagsState = true;
			} else if(healthTagsState == true) {
				healthTagsState = false;
			}
			break;
		/*} case "boatfly": {
			if(boatFlyState == false) {
				boatFlyState = true;
			} else if(boatFlyState == true) {
				boatFlyState = false;
			}
			break;*/
		} default: {
			VertexClientPE.clientMessage(ChatColor.RED + "Module \'" + module + "\' not found!");
			sendMessage = false;
			break;
		}
	}
	if(sendMessage == true) {
		VertexClientPE.clientMessage(ChatColor.GREEN + "Successfully toggled module \'" + module + "\'!");
		updateHacksList();
	}
}

VertexClientPE.switchGameMode = function() {
	if(Level.getGameMode() == 0) {
		Level.setGameMode(1);
	} else if(Level.getGameMode() == 1) {
		Level.setGameMode(0);
	}
}

VertexClientPE.spectate = function(playerName) {
	var players = Server.getAllPlayers();
	for (var i = 0; i < players.length; i++) {
		if(Player.getName(players[i]) == playerName) {
			ModPE.setCamera(players[i]);
		}
	}
}

VertexClientPE.clientMessage = function(message) {
	var clientName = VertexClientPE.getName();
	if(VertexClientPE.isPro() == "true") {
		clientName += " Pro";
	}
	clientMessage(ChatColor.RED + "[" + ChatColor.DARK_GREEN + clientName + ChatColor.RED + "] " + ChatColor.WHITE + message);
}

VertexClientPE.toast = function(message, vibrate) {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			if(vibrate || vibrate == null) {
				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
			}
			var layout = new LinearLayout(ctx);
			layout.setBackground(backgroundGradient());
			var title = VertexClientPE.getName();
			var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
			var text = clientTextView(new android.text.Html.fromHtml("<b>" + title + "</b> " + message), 0);
			layout.addView(text);
			toast = new widget.Toast(ctx);
			toast.setView(layout);
			toast.show();
		}
	}));
}

VertexClientPE.syntaxError = function(syntax) {
	VertexClientPE.clientMessage(ChatColor.DARK_RED + "Syntax error!");
	VertexClientPE.clientMessage(syntax);
}

VertexClientPE.getVersion = function(type) {
	switch(type) {
		case "current":
		case undefined:
		case null:
			return "Current version: v" + VertexClientPE.currentVersion;
		case "target":
			return "Target version: " + VertexClientPE.targetVersion;
		case "latest":
			if(VertexClientPE.latestVersion != undefined) {
				return "Latest version: v" + VertexClientPE.latestVersion;
			} else {
				return "Latest version: No internet connection.";
			}
	}
}

var p, y, xx, yy, zz;

var sayMsg;

VertexClientPE.commandManager = function(cmd) {
	commandSplit = cmd.split(" ");
	switch(commandSplit[0]) {
		case "help": //1
			if(commandSplit[1] == undefined || commandSplit[1] == null || commandSplit[1] == "1") {
				VertexClientPE.clientMessage("Showing help page 1/2");
				VertexClientPE.clientMessage(".help [<page>]");
				VertexClientPE.clientMessage(".gm");
				VertexClientPE.clientMessage(".spectate <player>");
				VertexClientPE.clientMessage(".toggle <module>");
				VertexClientPE.clientMessage(".t <module>");
				VertexClientPE.clientMessage(".drop [infinite]");
				VertexClientPE.clientMessage(".version <current|target|latest>");
				VertexClientPE.clientMessage(".panic");
			} else {
				if(commandSplit[1] == "2") {
					VertexClientPE.clientMessage("Showing help page 2/2");
					VertexClientPE.clientMessage(".p");
					VertexClientPE.clientMessage(".js");
					VertexClientPE.clientMessage(".say <message>");
					VertexClientPE.clientMessage(".give (<item_name|item_id>) [<amount>] [<data>]");
					VertexClientPE.clientMessage(".tp <x> <y> <z>");
				} else {
					VertexClientPE.clientMessage(ChatColor.RED + "Syntax error: " + ChatColor.WHITE + "Invalid page: " + commandSplit[1]);
				}
			}
			break;
		case "gm": //2
			VertexClientPE.switchGameMode();
			VertexClientPE.clientMessage("Your gamemode has been updated!");
			break;
		case "spectate": //3
			if(commandSplit[1] == null || commandSplit[1] == undefined) {
				VertexClientPE.syntaxError(".spectate <player>");
			} else {
				VertexClientPE.spectate(commandSplit[1]);
			}
			break;
		case "t": //4
		case "toggle": //4
			if (cmd.substring(2, cmd.length) != null && cmd.substring(2, cmd.length) != undefined && commandSplit[1] != null) {
				var shouldReturn = false;
				VertexClientPE.modules.forEach(function (element, index, array) {
					if (element.name.toLowerCase() == cmd.substring(2, cmd.length)
						.toLowerCase() && !shouldReturn) {
						if (element.isStateMod()) {
							VertexClientPE.modules[index].onToggle();
							if(hacksList != null && hacksList.isShowing()) {
								updateHacksList();
							}
							VertexClientPE.toast("Sucessfully toggled module " + element.name);
						} else {
							VertexClientPE.toast(element.name + " can't be toggled!");
						}
						shouldReturn = true;
					}
				});
				if(shouldReturn) {
					return;
				}
				VertexClientPE.toast("Module " + cmd.substring(2, cmd.length) + " can't be found/toggled!");
			} else {
				VertexClientPE.syntaxError(".toggle <module>");
			}
			break;
		case "drop": //5
			if(commandSplit[1] == null || commandSplit[1] == undefined || commandSplit[1] == "infinite") {
				for(var i = 0; i < 513; i++) {
					p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
					y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
					xx = Math.sin(p) * Math.cos(y);
					yy = Math.sin(p) * Math.sin(y);
					zz = Math.cos(p);
					Level.dropItem(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, 1, i, 1);
				}
			} else {
				VertexClientPE.syntaxError(".drop [infinite]");
			}
			break;
		case "version": //6
			if(typeof VertexClientPE.getVersion(commandSplit[1]) !== "undefined") {
				VertexClientPE.clientMessage(VertexClientPE.getVersion(commandSplit[1]));
			} else {
				VertexClientPE.syntaxError(".version <current|target|latest>");
			}
			break;
		case "p": //7
		case "panic":
			panic.onToggle();
			if(hacksList != null && hacksList.isShowing()) {
				updateHacksList();
			}
			break;
		case "js": //8
			VertexClientPE.showJavascriptConsoleDialog();
			break;
		case "say": //9
			sayMsg = cmd.substring(5, cmd.length);
			if(fancyChatState) {
				VertexClientPE.fancyChat(sayMsg);
			} else {
				Server.sendChat(sayMsg);
			}
			break;
		case "give": //10
			if(commandSplit[1] != null) {
				if(Item.internalNameToId(commandSplit[1]) != null) {
					var itemId = Item.internalNameToId(commandSplit[1]);
				} else {
					var itemId = commandSplit[1];
				}
			} else {
				VertexClientPE.syntaxError(".give (<item_name|item_id>) [<amount>] [<data>]");
				break;
			}
			if(commandSplit[2] != null) {
				var count = commandSplit[2];
			} else {
				var count = 1;
			}
			if(commandSplit[3] != null) {
				var data = commandSplit[3];
			} else {
				var data = 0;
			}
			if(Item.isValidItem(itemId)) {
				Player.addItemInventory(itemId, count, data);
			} else {
				VertexClientPE.syntaxError(".give (<item_name|item_id>) [<amount>] [<data>]");
			}
			break;
		case "tp": //11
			if(commandSplit[1] != null) {
				var x = commandSplit[1];
			} else {
				VertexClientPE.syntaxError(".tp <x> <y> <z>");
				break;
			}
			if(commandSplit[2] != null) {
				var y = commandSplit[2];
			} else {
				VertexClientPE.syntaxError(".tp <x> <y> <z>");
				break;
			}
			if(commandSplit[3] != null) {
				var z = commandSplit[3];
			} else {
				VertexClientPE.syntaxError(".tp <x> <y> <z>");
				break;
			}
			if(getTile(x, y, z) != null) {
				VertexClientPE.teleporter(x, y, z);
			}
			break;
		default:
			VertexClientPE.clientMessage(ChatColor.RED + "Error: command \"" + cmd + "\" not found!");
			break;
	}
}

var mp;

var music = [
	["Jim Yosef – Eclipse [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3"],
	["Ahrix – Nova [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3"],
	["SirensCeol – Coming Home [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3"],
	["Diviners feat. Contacreast – Tropic Love [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3"],
	["Distrion & Alex Skrindo – Entropy", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3"],
	["Disfigure – Blank [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3"],
	["DEAF KEV – Invincible [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3"],
	["Different Heaven & EH!DE – My Heart [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3"],
	["William Ekh – Adventure (feat. Alexa Lusader)", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3"],
	["Different Heaven – Nekozilla", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3"],
	["Tobu – Candyland [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3"],
	["Jim Yosef – Firefly [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3"]
];

VertexClientPE.resetMusic = function() {
	music = [
		["Jim Yosef – Eclipse [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3"],
		["Ahrix – Nova [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3"],
		["SirensCeol – Coming Home [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3"],
		["Diviners feat. Contacreast – Tropic Love [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3"],
		["Distrion & Alex Skrindo – Entropy", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3"],
		["Disfigure – Blank [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3"],
		["DEAF KEV – Invincible [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3"],
		["Different Heaven & EH!DE – My Heart [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3"],
		["William Ekh – Adventure (feat. Alexa Lusader)", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3"],
		["Different Heaven – Nekozilla", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3"],
		["Tobu – Candyland [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3"],
		["Jim Yosef – Firefly [NCS Release]", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3"]
	];
}

VertexClientPE.playMusic = function() {
	if(playMusicSetting != "off" && playMusicSetting != "on" && music.length != 0) {
		try {
			var randomMusic = music[Math.floor(Math.random() * music.length)];
			mp = new android.media.MediaPlayer();
			mp.setDataSource(randomMusic[1]);
			mp.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener() {
				onPrepared: function(mp) {
					musicText = randomMusic[0];
					if(hacksList != null) {
						updateHacksList();
					}
					mp.start();
				}
			});
			mp.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener() {
				onCompletion: function(arg0) {
					mp = null;
					music.slice(randomMusic);
					eval(VertexClientPE.playMusic());
				}
			});
			mp.prepareAsync();
		} catch(e) {
			print(e);
		}
	} else if(music.length == 0) {
		VertexClientPE.resetMusic();
		eval(VertexClientPE.playMusic());
	}
}

VertexClientPE.healthTags = function() {
    var mobs = Entity.getAll();

    for(var i = 0; i < mobs.length; i++) {


        /* now the variable "mobs" is now "mobs[i]",
        if you are asking why they are they now like this, it is because we split all gotten entities as their own, that means you can personalize them, (that is very useful when you are using Entity.get() scripts. So I can give all entities a personalized (as example) nametag which shows their own health. */


        var xq = Entity.getX(mobs[i]) - getPlayerX();

        var yq = Entity.getY(mobs[i]) - getPlayerY();

        var zq = Entity.getZ(mobs[i]) - getPlayerZ();



        if(xq * xq + yq * yq + zq * zq <= 14 * 14 && mobs[i] != getPlayerEnt()) {

            /* the 14 stands for, that the entities you want to give (as example) a nametag need to be in a radius of 14 blocks */

            /* You can disable it by removing the above script. */
            if(Entity.getEntityTypeId(mobs[i]) == 10) {
                Entity.setNameTag(mobs[i], nameColor + "Chicken " + healthColor + Entity.getHealth(mobs[i]) + "/4");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 11) {
                Entity.setNameTag(mobs[i], nameColor + "Cow " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 12) {
                Entity.setNameTag(mobs[i], nameColor + "Pig " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 13) {
                Entity.setNameTag(mobs[i], nameColor + "Sheep " + healthColor + Entity.getHealth(mobs[i]) + "/8");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 14) {
                Entity.setNameTag(mobs[i], nameColor + "Wolf " + healthColor + Entity.getHealth(mobs[i]) + "/8");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 15) {
                Entity.setNameTag(mobs[i], nameColor + "Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 16) {
                Entity.setNameTag(mobs[i], nameColor + "Mooshroom " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 17) {
                Entity.setNameTag(mobs[i], nameColor + "Squid " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 18) {
                Entity.setNameTag(mobs[i], nameColor + "Rabbit " + healthColor + Entity.getHealth(mobs[i]) + "/3");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 19) {
                Entity.setNameTag(mobs[i], nameColor + "Bat " + healthColor + Entity.getHealth(mobs[i]) + "/6");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 20) {
                Entity.setNameTag(mobs[i], nameColor + "Iron Golem " + healthColor + Entity.getHealth(mobs[i]) + "/100");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 21) {
                Entity.setNameTag(mobs[i], nameColor + "Snow Golem " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 22) {
                Entity.setNameTag(mobs[i], nameColor + "Ocelot " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 32) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 33) {
                Entity.setNameTag(mobs[i], nameColor + "Creeper " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 34) {
                Entity.setNameTag(mobs[i], nameColor + "Skeleton " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 35) {
                Entity.setNameTag(mobs[i], nameColor + "Spider " + healthColor + Entity.getHealth(mobs[i]) + "/16");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 36) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Pigman " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 37) {
                Entity.setNameTag(mobs[i], nameColor + "Slime " + healthColor + Entity.getHealth(mobs[i]) + "/16");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 38) {
                Entity.setNameTag(mobs[i], nameColor + "Enderman " + healthColor + Entity.getHealth(mobs[i]) + "/40");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 39) {
                Entity.setNameTag(mobs[i], nameColor + "Silverfish " + healthColor + Entity.getHealth(mobs[i]) + "/8");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 40) {
                Entity.setNameTag(mobs[i], nameColor + "Cave Spider " + healthColor + Entity.getHealth(mobs[i]) + "/12");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 41) {
                Entity.setNameTag(mobs[i], nameColor + "Ghast " + healthColor + Entity.getHealth(mobs[i]) + "/10");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 42) {
                Entity.setNameTag(mobs[i], nameColor + "Magma Cube " + healthColor + Entity.getHealth(mobs[i]) + "/16");
            }
            if(Entity.getEntityTypeId(mobs[i]) == 43) {
                Entity.setNameTag(mobs[i], nameColor + "Blaze " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 44) {
                Entity.setNameTag(mobs[i], nameColor + "Zombie Villager " + healthColor + Entity.getHealth(mobs[i]) + "/20");
            }
			if(Entity.getEntityTypeId(mobs[i]) == 45) {
                Entity.setNameTag(mobs[i], nameColor + "Witch " + healthColor + Entity.getHealth(mobs[i]) + "/26");
            }
        }
    }
}

VertexClientPE.xRay = function(onOrOff) {
    switch(onOrOff) {
	    case 0: {
	        OpaqLayer = 0;
	
	        Block.setLightLevel(54, 0);
	        Block.setLightLevel(86, 15);
	        Block.setLightLevel(89, 15);
	
	        Block.setRenderLayer(1, OpaqLayer);
	        Block.setRenderLayer(2, OpaqLayer);
	        Block.setRenderLayer(3, OpaqLayer);
	        Block.setRenderLayer(4, OpaqLayer);
	        Block.setRenderLayer(5, OpaqLayer);
	        Block.setRenderLayer(6, OpaqLayer);
	        Block.setRenderLayer(7, OpaqLayer);
	        Block.setRenderLayer(8, OpaqLayer);
	        Block.setRenderLayer(9, OpaqLayer);
	        Block.setRenderLayer(10, OpaqLayer);
	        Block.setRenderLayer(11, OpaqLayer);
	        Block.setRenderLayer(12, OpaqLayer);
	        Block.setRenderLayer(13, OpaqLayer);
	        Block.setRenderLayer(14, OpaqLayer);
	        Block.setRenderLayer(15, OpaqLayer);
	        Block.setRenderLayer(17, OpaqLayer);
	        Block.setRenderLayer(18, OpaqLayer);
	        Block.setRenderLayer(19, OpaqLayer);
	        Block.setRenderLayer(20, 1);
	        Block.setRenderLayer(21, OpaqLayer);
	        Block.setRenderLayer(22, OpaqLayer);
	        Block.setRenderLayer(23, OpaqLayer);
	        Block.setRenderLayer(24, OpaqLayer);
	        Block.setRenderLayer(25, OpaqLayer);
	        Block.setRenderLayer(26, OpaqLayer);
	        Block.setRenderLayer(27, OpaqLayer);
	        Block.setRenderLayer(28, OpaqLayer);
	        Block.setRenderLayer(29, OpaqLayer);
	        Block.setRenderLayer(30, OpaqLayer);
	        Block.setRenderLayer(31, 1);
	        Block.setRenderLayer(32, OpaqLayer);
	        Block.setRenderLayer(33, OpaqLayer);
	        Block.setRenderLayer(34, OpaqLayer);
	        Block.setRenderLayer(35, OpaqLayer);
	        Block.setRenderLayer(36, OpaqLayer);
	        Block.setRenderLayer(37, OpaqLayer);
	        Block.setRenderLayer(38, OpaqLayer);
	        Block.setRenderLayer(39, OpaqLayer);
	        Block.setRenderLayer(40, OpaqLayer);
	        Block.setRenderLayer(41, OpaqLayer);
	        Block.setRenderLayer(42, OpaqLayer);
	        Block.setRenderLayer(43, OpaqLayer);
	        Block.setRenderLayer(44, OpaqLayer);
	        Block.setRenderLayer(45, OpaqLayer);
	        Block.setRenderLayer(46, OpaqLayer);
	        Block.setRenderLayer(47, OpaqLayer);
	        Block.setRenderLayer(48, OpaqLayer);
	        Block.setRenderLayer(49, OpaqLayer);
	        Block.setRenderLayer(50, OpaqLayer);
	        Block.setRenderLayer(51, OpaqLayer);
	        Block.setRenderLayer(52, OpaqLayer);
	        Block.setRenderLayer(53, OpaqLayer);
	        Block.setRenderLayer(54, OpaqLayer);
	        Block.setRenderLayer(55, OpaqLayer);
	        Block.setRenderLayer(56, OpaqLayer);
	        Block.setRenderLayer(57, OpaqLayer);
	        Block.setRenderLayer(58, OpaqLayer);
	        Block.setRenderLayer(59, OpaqLayer);
	        Block.setRenderLayer(60, OpaqLayer);
	        Block.setRenderLayer(61, OpaqLayer);
	        Block.setRenderLayer(62, OpaqLayer);
	        Block.setRenderLayer(63, OpaqLayer);
	        Block.setRenderLayer(64, OpaqLayer);
	        Block.setRenderLayer(65, OpaqLayer);
	        Block.setRenderLayer(66, OpaqLayer);
	        Block.setRenderLayer(67, OpaqLayer);
	        Block.setRenderLayer(68, OpaqLayer);
	        Block.setRenderLayer(69, OpaqLayer);
	        Block.setRenderLayer(70, OpaqLayer);
	        Block.setRenderLayer(71, OpaqLayer);
	        Block.setRenderLayer(72, OpaqLayer);
	        Block.setRenderLayer(73, OpaqLayer);
	        Block.setRenderLayer(74, OpaqLayer);
	        Block.setRenderLayer(75, OpaqLayer);
	        Block.setRenderLayer(76, OpaqLayer);
	        Block.setRenderLayer(77, OpaqLayer);
	        Block.setRenderLayer(78, OpaqLayer);
	        Block.setRenderLayer(79, OpaqLayer);
	        Block.setRenderLayer(80, OpaqLayer);
	        Block.setRenderLayer(81, OpaqLayer);
	        Block.setRenderLayer(82, OpaqLayer);
	        Block.setRenderLayer(83, OpaqLayer);
	        Block.setRenderLayer(84, OpaqLayer);
	        Block.setRenderLayer(85, OpaqLayer);
	        Block.setRenderLayer(86, OpaqLayer);
	        Block.setRenderLayer(87, OpaqLayer);
	        Block.setRenderLayer(88, OpaqLayer);
	        Block.setRenderLayer(89, OpaqLayer);
	        Block.setRenderLayer(90, OpaqLayer);
	        Block.setRenderLayer(91, OpaqLayer);
	        Block.setRenderLayer(92, OpaqLayer);
	        Block.setRenderLayer(93, OpaqLayer);
	        Block.setRenderLayer(94, OpaqLayer);
	        Block.setRenderLayer(95, OpaqLayer);
	        Block.setRenderLayer(96, OpaqLayer);
	        Block.setRenderLayer(97, OpaqLayer);
	        Block.setRenderLayer(98, OpaqLayer);
	        Block.setRenderLayer(99, OpaqLayer);
	        Block.setRenderLayer(100, OpaqLayer);
	        Block.setRenderLayer(101, OpaqLayer);
	        Block.setRenderLayer(102, 1);
	        Block.setRenderLayer(103, OpaqLayer);
	        Block.setRenderLayer(104, OpaqLayer);
	        Block.setRenderLayer(105, OpaqLayer);
	        Block.setRenderLayer(106, 1);
	        Block.setRenderLayer(107, OpaqLayer);
	        Block.setRenderLayer(108, OpaqLayer);
	        Block.setRenderLayer(109, OpaqLayer);
	        Block.setRenderLayer(110, OpaqLayer);
	        Block.setRenderLayer(111, OpaqLayer);
	        Block.setRenderLayer(112, OpaqLayer);
	        Block.setRenderLayer(113, OpaqLayer);
	        Block.setRenderLayer(114, OpaqLayer);
	        Block.setRenderLayer(115, OpaqLayer);
	        Block.setRenderLayer(117, OpaqLayer);
	        Block.setRenderLayer(118, OpaqLayer);
	        Block.setRenderLayer(119, OpaqLayer);
	        Block.setRenderLayer(120, OpaqLayer);
	        Block.setRenderLayer(121, OpaqLayer);
	        Block.setRenderLayer(122, OpaqLayer);
	        Block.setRenderLayer(123, OpaqLayer);
	        Block.setRenderLayer(124, OpaqLayer);
	        Block.setRenderLayer(125, OpaqLayer);
	        Block.setRenderLayer(126, OpaqLayer);
	        Block.setRenderLayer(127, OpaqLayer);
	        Block.setRenderLayer(128, OpaqLayer);
	        Block.setRenderLayer(129, OpaqLayer);
	        Block.setRenderLayer(130, OpaqLayer);
	        Block.setRenderLayer(131, OpaqLayer);
	        Block.setRenderLayer(132, OpaqLayer);
	        Block.setRenderLayer(133, OpaqLayer);
	        Block.setRenderLayer(134, OpaqLayer);
	        Block.setRenderLayer(135, OpaqLayer);
	        Block.setRenderLayer(136, OpaqLayer);
	        Block.setRenderLayer(137, OpaqLayer);
	        Block.setRenderLayer(138, OpaqLayer);
	        Block.setRenderLayer(139, OpaqLayer);
	        Block.setRenderLayer(140, OpaqLayer);
	        Block.setRenderLayer(141, OpaqLayer);
	        Block.setRenderLayer(142, OpaqLayer);
	        Block.setRenderLayer(143, OpaqLayer);
	        Block.setRenderLayer(144, OpaqLayer);
	        Block.setRenderLayer(145, OpaqLayer);
	        Block.setRenderLayer(146, OpaqLayer);
	        Block.setRenderLayer(147, OpaqLayer);
	        Block.setRenderLayer(148, OpaqLayer);
	        Block.setRenderLayer(149, OpaqLayer);
	        Block.setRenderLayer(150, OpaqLayer);
	        Block.setRenderLayer(151, OpaqLayer);
	        Block.setRenderLayer(152, OpaqLayer);
	        Block.setRenderLayer(153, OpaqLayer);
	        Block.setRenderLayer(154, OpaqLayer);
	        Block.setRenderLayer(155, OpaqLayer);
	        Block.setRenderLayer(156, OpaqLayer);
	        Block.setRenderLayer(157, OpaqLayer);
	        Block.setRenderLayer(158, OpaqLayer);
	        Block.setRenderLayer(159, OpaqLayer);
	        Block.setRenderLayer(160, OpaqLayer);
	        Block.setRenderLayer(161, OpaqLayer);
	        Block.setRenderLayer(162, OpaqLayer);
	        Block.setRenderLayer(163, OpaqLayer);
	        Block.setRenderLayer(164, OpaqLayer);
	        Block.setRenderLayer(165, OpaqLayer);
	        Block.setRenderLayer(166, OpaqLayer);
	        Block.setRenderLayer(167, OpaqLayer);
	        Block.setRenderLayer(168, OpaqLayer);
	        Block.setRenderLayer(169, OpaqLayer);
	        Block.setRenderLayer(170, OpaqLayer);
	        Block.setRenderLayer(171, OpaqLayer);
	        Block.setRenderLayer(172, OpaqLayer);
	        Block.setRenderLayer(173, OpaqLayer);
	        Block.setRenderLayer(174, OpaqLayer);
	        Block.setRenderLayer(175, 1);
	        Block.setRenderLayer(176, OpaqLayer);
	        Block.setRenderLayer(177, OpaqLayer);
	        Block.setRenderLayer(178, OpaqLayer);
	        Block.setRenderLayer(179, OpaqLayer);
	        Block.setRenderLayer(180, OpaqLayer);
	        Block.setRenderLayer(181, OpaqLayer);
	        Block.setRenderLayer(182, OpaqLayer);
	        Block.setRenderLayer(183, OpaqLayer);
	        Block.setRenderLayer(184, OpaqLayer);
	        Block.setRenderLayer(185, OpaqLayer);
	        Block.setRenderLayer(186, OpaqLayer);
	        Block.setRenderLayer(187, OpaqLayer);
	        Block.setRenderLayer(188, OpaqLayer);
	        Block.setRenderLayer(189, OpaqLayer);
	        Block.setRenderLayer(190, OpaqLayer);
	        Block.setRenderLayer(191, OpaqLayer);
	        Block.setRenderLayer(192, OpaqLayer);
	        Block.setRenderLayer(193, OpaqLayer);
	        Block.setRenderLayer(194, OpaqLayer);
	        Block.setRenderLayer(195, OpaqLayer);
	        Block.setRenderLayer(196, OpaqLayer);
	        Block.setRenderLayer(197, OpaqLayer);
	        Block.setRenderLayer(198, OpaqLayer);
	        Block.setRenderLayer(199, OpaqLayer);
	        Block.setRenderLayer(200, OpaqLayer);
	        Block.setRenderLayer(201, OpaqLayer);
	        Block.setRenderLayer(202, OpaqLayer);
	        Block.setRenderLayer(203, OpaqLayer);
	        Block.setRenderLayer(204, OpaqLayer);
	        Block.setRenderLayer(205, OpaqLayer);
	        Block.setRenderLayer(206, OpaqLayer);
	        Block.setRenderLayer(207, OpaqLayer);
	        Block.setRenderLayer(208, OpaqLayer);
	        Block.setRenderLayer(209, OpaqLayer);
	        Block.setRenderLayer(210, OpaqLayer);
	        Block.setRenderLayer(211, OpaqLayer);
	        Block.setRenderLayer(212, OpaqLayer);
	        Block.setRenderLayer(213, OpaqLayer);
	        Block.setRenderLayer(214, OpaqLayer);
	        Block.setRenderLayer(215, OpaqLayer);
	        Block.setRenderLayer(217, OpaqLayer);
	        Block.setRenderLayer(218, OpaqLayer);
	        Block.setRenderLayer(219, OpaqLayer);
	        Block.setRenderLayer(220, OpaqLayer);
	        Block.setRenderLayer(221, OpaqLayer);
	        Block.setRenderLayer(222, OpaqLayer);
	        Block.setRenderLayer(223, OpaqLayer);
	        Block.setRenderLayer(224, OpaqLayer);
	        Block.setRenderLayer(225, OpaqLayer);
	        Block.setRenderLayer(226, OpaqLayer);
	        Block.setRenderLayer(227, OpaqLayer);
	        Block.setRenderLayer(228, OpaqLayer);
	        Block.setRenderLayer(229, OpaqLayer);
	        Block.setRenderLayer(230, OpaqLayer);
	        Block.setRenderLayer(231, OpaqLayer);
	        Block.setRenderLayer(232, OpaqLayer);
	        Block.setRenderLayer(233, OpaqLayer);
	        Block.setRenderLayer(234, OpaqLayer);
	        Block.setRenderLayer(235, OpaqLayer);
	        Block.setRenderLayer(236, OpaqLayer);
	        Block.setRenderLayer(237, OpaqLayer);
	        Block.setRenderLayer(238, OpaqLayer);
	        Block.setRenderLayer(239, OpaqLayer);
	        Block.setRenderLayer(240, OpaqLayer);
	        Block.setRenderLayer(241, OpaqLayer);
	        Block.setRenderLayer(242, OpaqLayer);
	        Block.setRenderLayer(243, OpaqLayer);
	        Block.setRenderLayer(244, OpaqLayer);
	        Block.setRenderLayer(245, OpaqLayer);
	        Block.setRenderLayer(248, OpaqLayer);
	        Block.setRenderLayer(249, OpaqLayer);
	        Block.setRenderLayer(250, OpaqLayer);
	        Block.setRenderLayer(251, OpaqLayer);
	        Block.setRenderLayer(252, OpaqLayer);
	        Block.setRenderLayer(253, OpaqLayer);
	        Block.setRenderLayer(254, OpaqLayer);
	        Block.setRenderLayer(255, OpaqLayer);
	        break;
		} case 1: {
	        var RenderLayer = 1;
	        ///////// CHESTS ARE NOW GLOWING OR HAVE THE SAME BRIGHTNESS AS TORCHES, ITS GOOD TO TROLL YOUR FRIENDS, GLOWSTONE AND ANSMALL BLOCK HAS NOW NO BRIGHTNESS, THE PLAYER CAN SEE NOW BETTER THROUGH BLOCKS
	        Block.setLightLevel(54, 15);
	        Block.setLightLevel(86, 0);
	        Block.setLightLevel(89, 0);
	
	        Block.setRenderLayer(1, RenderLayer);
	        Block.setRenderLayer(2, RenderLayer);
	        Block.setRenderLayer(3, RenderLayer);
	        Block.setRenderLayer(4, RenderLayer);
	        Block.setRenderLayer(5, RenderLayer);
	        Block.setRenderLayer(6, RenderLayer);
	        Block.setRenderLayer(7, RenderLayer);
	        Block.setRenderLayer(8, RenderLayer);
	        Block.setRenderLayer(9, RenderLayer);
	        Block.setRenderLayer(10, RenderLayer);
	        Block.setRenderLayer(11, RenderLayer);
	        Block.setRenderLayer(12, RenderLayer);
	        Block.setRenderLayer(13, RenderLayer);
	        Block.setRenderLayer(14, RenderLayer);
	        Block.setRenderLayer(15, RenderLayer);
	        Block.setRenderLayer(16, RenderLayer);
	        Block.setRenderLayer(17, RenderLayer);
	        Block.setRenderLayer(18, RenderLayer);
	        Block.setRenderLayer(19, RenderLayer);
	        Block.setRenderLayer(20, RenderLayer);
	        Block.setRenderLayer(21, RenderLayer);
	        Block.setRenderLayer(22, RenderLayer);
	        Block.setRenderLayer(23, RenderLayer);
	        Block.setRenderLayer(24, RenderLayer);
	        Block.setRenderLayer(25, RenderLayer);
	        Block.setRenderLayer(26, RenderLayer);
	        Block.setRenderLayer(27, RenderLayer);
	        Block.setRenderLayer(28, RenderLayer);
	        Block.setRenderLayer(29, RenderLayer);
	        Block.setRenderLayer(30, RenderLayer);
	        Block.setRenderLayer(31, RenderLayer);
	        Block.setRenderLayer(32, RenderLayer);
	        Block.setRenderLayer(33, RenderLayer);
	        Block.setRenderLayer(34, RenderLayer);
	        Block.setRenderLayer(35, RenderLayer);
	        Block.setRenderLayer(36, RenderLayer);
	        Block.setRenderLayer(37, RenderLayer);
	        Block.setRenderLayer(38, RenderLayer);
	        Block.setRenderLayer(39, RenderLayer);
	        Block.setRenderLayer(40, RenderLayer);
	        Block.setRenderLayer(41, RenderLayer);
	        Block.setRenderLayer(42, RenderLayer);
	        Block.setRenderLayer(43, RenderLayer);
	        Block.setRenderLayer(44, RenderLayer);
	        Block.setRenderLayer(45, RenderLayer);
	        Block.setRenderLayer(46, RenderLayer);
	        Block.setRenderLayer(47, RenderLayer);
	        Block.setRenderLayer(48, RenderLayer);
	        Block.setRenderLayer(49, RenderLayer);
	        Block.setRenderLayer(50, RenderLayer);
	        Block.setRenderLayer(51, RenderLayer);
	        Block.setRenderLayer(52, RenderLayer);
	        Block.setRenderLayer(53, RenderLayer);
	        Block.setRenderLayer(54, RenderLayer);
	        Block.setRenderLayer(55, RenderLayer);
	        Block.setRenderLayer(56, RenderLayer);
	        Block.setRenderLayer(57, RenderLayer);
	        Block.setRenderLayer(58, RenderLayer);
	        Block.setRenderLayer(59, RenderLayer);
	        Block.setRenderLayer(60, RenderLayer);
	        Block.setRenderLayer(61, RenderLayer);
	        Block.setRenderLayer(62, RenderLayer);
	        Block.setRenderLayer(63, RenderLayer);
	        Block.setRenderLayer(64, RenderLayer);
	        Block.setRenderLayer(65, RenderLayer);
	        Block.setRenderLayer(66, RenderLayer);
	        Block.setRenderLayer(67, RenderLayer);
	        Block.setRenderLayer(68, RenderLayer);
	        Block.setRenderLayer(69, RenderLayer);
	        Block.setRenderLayer(70, RenderLayer);
	        Block.setRenderLayer(71, RenderLayer);
	        Block.setRenderLayer(72, RenderLayer);
	        Block.setRenderLayer(73, RenderLayer);
	        Block.setRenderLayer(74, RenderLayer);
	        Block.setRenderLayer(75, RenderLayer);
	        Block.setRenderLayer(76, RenderLayer);
	        Block.setRenderLayer(77, RenderLayer);
	        Block.setRenderLayer(78, RenderLayer);
	        Block.setRenderLayer(79, RenderLayer);
	        Block.setRenderLayer(80, RenderLayer);
	        Block.setRenderLayer(81, RenderLayer);
	        Block.setRenderLayer(82, RenderLayer);
	        Block.setRenderLayer(83, RenderLayer);
	        Block.setRenderLayer(84, RenderLayer);
	        Block.setRenderLayer(85, RenderLayer);
	        Block.setRenderLayer(86, RenderLayer);
	        Block.setRenderLayer(87, RenderLayer);
	        Block.setRenderLayer(88, RenderLayer);
	        Block.setRenderLayer(89, RenderLayer);
	        Block.setRenderLayer(90, RenderLayer);
	        Block.setRenderLayer(91, RenderLayer);
	        Block.setRenderLayer(92, RenderLayer);
	        Block.setRenderLayer(93, RenderLayer);
	        Block.setRenderLayer(94, RenderLayer);
	        Block.setRenderLayer(95, RenderLayer);
	        Block.setRenderLayer(96, RenderLayer);
	        Block.setRenderLayer(97, RenderLayer);
	        Block.setRenderLayer(98, RenderLayer);
	        Block.setRenderLayer(99, RenderLayer);
	        Block.setRenderLayer(100, RenderLayer);
	        Block.setRenderLayer(101, RenderLayer);
	        Block.setRenderLayer(102, RenderLayer);
	        Block.setRenderLayer(103, RenderLayer);
	        Block.setRenderLayer(104, RenderLayer);
	        Block.setRenderLayer(105, RenderLayer);
	        Block.setRenderLayer(106, RenderLayer);
	        Block.setRenderLayer(107, RenderLayer);
	        Block.setRenderLayer(108, RenderLayer);
	        Block.setRenderLayer(109, RenderLayer);
	        Block.setRenderLayer(110, RenderLayer);
	        Block.setRenderLayer(111, RenderLayer);
	        Block.setRenderLayer(112, RenderLayer);
	        Block.setRenderLayer(113, RenderLayer);
	        Block.setRenderLayer(114, RenderLayer);
	        Block.setRenderLayer(115, RenderLayer);
	        Block.setRenderLayer(117, RenderLayer);
	        Block.setRenderLayer(118, RenderLayer);
	        Block.setRenderLayer(119, RenderLayer);
	        Block.setRenderLayer(120, RenderLayer);
	        Block.setRenderLayer(121, RenderLayer);
	        Block.setRenderLayer(122, RenderLayer);
	        Block.setRenderLayer(123, RenderLayer);
	        Block.setRenderLayer(124, RenderLayer);
	        Block.setRenderLayer(125, RenderLayer);
	        Block.setRenderLayer(126, RenderLayer);
	        Block.setRenderLayer(127, RenderLayer);
	        Block.setRenderLayer(128, RenderLayer);
	        Block.setRenderLayer(129, RenderLayer);
	        Block.setRenderLayer(130, RenderLayer);
	        Block.setRenderLayer(131, RenderLayer);
	        Block.setRenderLayer(132, RenderLayer);
	        Block.setRenderLayer(133, RenderLayer);
	        Block.setRenderLayer(134, RenderLayer);
	        Block.setRenderLayer(135, RenderLayer);
	        Block.setRenderLayer(136, RenderLayer);
	        Block.setRenderLayer(137, RenderLayer);
	        Block.setRenderLayer(138, RenderLayer);
	        Block.setRenderLayer(139, RenderLayer);
	        Block.setRenderLayer(140, RenderLayer);
	        Block.setRenderLayer(141, RenderLayer);
	        Block.setRenderLayer(142, RenderLayer);
	        Block.setRenderLayer(143, RenderLayer);
	        Block.setRenderLayer(144, RenderLayer);
	        Block.setRenderLayer(145, RenderLayer);
	        Block.setRenderLayer(146, RenderLayer);
	        Block.setRenderLayer(147, RenderLayer);
	        Block.setRenderLayer(148, RenderLayer);
	        Block.setRenderLayer(149, RenderLayer);
	        Block.setRenderLayer(150, RenderLayer);
	        Block.setRenderLayer(151, RenderLayer);
	        Block.setRenderLayer(152, RenderLayer);
	        Block.setRenderLayer(153, RenderLayer);
	        Block.setRenderLayer(154, RenderLayer);
	        Block.setRenderLayer(155, RenderLayer);
	        Block.setRenderLayer(156, RenderLayer);
	        Block.setRenderLayer(157, RenderLayer);
	        Block.setRenderLayer(158, RenderLayer);
	        Block.setRenderLayer(159, RenderLayer);
	        Block.setRenderLayer(160, RenderLayer);
	        Block.setRenderLayer(161, RenderLayer);
	        Block.setRenderLayer(162, RenderLayer);
	        Block.setRenderLayer(163, RenderLayer);
	        Block.setRenderLayer(164, RenderLayer);
	        Block.setRenderLayer(165, RenderLayer);
	        Block.setRenderLayer(166, RenderLayer);
	        Block.setRenderLayer(167, RenderLayer);
	        Block.setRenderLayer(168, RenderLayer);
	        Block.setRenderLayer(169, RenderLayer);
	        Block.setRenderLayer(170, RenderLayer);
	        Block.setRenderLayer(171, RenderLayer);
	        Block.setRenderLayer(172, RenderLayer);
	        Block.setRenderLayer(173, RenderLayer);
	        Block.setRenderLayer(174, RenderLayer);
	        Block.setRenderLayer(175, RenderLayer);
	        Block.setRenderLayer(176, RenderLayer);
	        Block.setRenderLayer(177, RenderLayer);
	        Block.setRenderLayer(178, RenderLayer);
	        Block.setRenderLayer(179, RenderLayer);
	        Block.setRenderLayer(180, RenderLayer);
	        Block.setRenderLayer(181, RenderLayer);
	        Block.setRenderLayer(182, RenderLayer);
	        Block.setRenderLayer(183, RenderLayer);
	        Block.setRenderLayer(184, RenderLayer);
	        Block.setRenderLayer(185, RenderLayer);
	        Block.setRenderLayer(186, RenderLayer);
	        Block.setRenderLayer(187, RenderLayer);
	        Block.setRenderLayer(188, RenderLayer);
	        Block.setRenderLayer(189, RenderLayer);
	        Block.setRenderLayer(190, RenderLayer);
	        Block.setRenderLayer(191, RenderLayer);
	        Block.setRenderLayer(192, RenderLayer);
	        Block.setRenderLayer(193, RenderLayer);
	        Block.setRenderLayer(194, RenderLayer);
	        Block.setRenderLayer(195, RenderLayer);
	        Block.setRenderLayer(196, RenderLayer);
	        Block.setRenderLayer(197, RenderLayer);
	        Block.setRenderLayer(198, RenderLayer);
	        Block.setRenderLayer(199, RenderLayer);
	        Block.setRenderLayer(200, RenderLayer);
	        Block.setRenderLayer(201, RenderLayer);
	        Block.setRenderLayer(202, RenderLayer);
	        Block.setRenderLayer(203, RenderLayer);
	        Block.setRenderLayer(204, RenderLayer);
	        Block.setRenderLayer(205, RenderLayer);
	        Block.setRenderLayer(206, RenderLayer);
	        Block.setRenderLayer(207, RenderLayer);
	        Block.setRenderLayer(208, RenderLayer);
	        Block.setRenderLayer(209, RenderLayer);
	        Block.setRenderLayer(210, RenderLayer);
	        Block.setRenderLayer(211, RenderLayer);
	        Block.setRenderLayer(212, RenderLayer);
	        Block.setRenderLayer(213, RenderLayer);
	        Block.setRenderLayer(214, RenderLayer);
	        Block.setRenderLayer(215, RenderLayer);
	        Block.setRenderLayer(217, RenderLayer);
	        Block.setRenderLayer(218, RenderLayer);
	        Block.setRenderLayer(219, RenderLayer);
	        Block.setRenderLayer(220, RenderLayer);
	        Block.setRenderLayer(221, RenderLayer);
	        Block.setRenderLayer(222, RenderLayer);
	        Block.setRenderLayer(223, RenderLayer);
	        Block.setRenderLayer(224, RenderLayer);
	        Block.setRenderLayer(225, RenderLayer);
	        Block.setRenderLayer(226, RenderLayer);
	        Block.setRenderLayer(227, RenderLayer);
	        Block.setRenderLayer(228, RenderLayer);
	        Block.setRenderLayer(229, RenderLayer);
	        Block.setRenderLayer(230, RenderLayer);
	        Block.setRenderLayer(231, RenderLayer);
	        Block.setRenderLayer(232, RenderLayer);
	        Block.setRenderLayer(233, RenderLayer);
	        Block.setRenderLayer(234, RenderLayer);
	        Block.setRenderLayer(235, RenderLayer);
	        Block.setRenderLayer(236, RenderLayer);
	        Block.setRenderLayer(237, RenderLayer);
	        Block.setRenderLayer(238, RenderLayer);
	        Block.setRenderLayer(239, RenderLayer);
	        Block.setRenderLayer(240, RenderLayer);
	        Block.setRenderLayer(241, RenderLayer);
	        Block.setRenderLayer(242, RenderLayer);
	        Block.setRenderLayer(243, RenderLayer);
	        Block.setRenderLayer(244, RenderLayer);
	        Block.setRenderLayer(245, RenderLayer);
	        Block.setRenderLayer(246, RenderLayer);
	        Block.setRenderLayer(247, RenderLayer);
	        Block.setRenderLayer(248, RenderLayer);
	        Block.setRenderLayer(249, RenderLayer);
	        Block.setRenderLayer(250, RenderLayer);
	        Block.setRenderLayer(251, RenderLayer);
	        Block.setRenderLayer(252, RenderLayer);
	        Block.setRenderLayer(253, RenderLayer);
	        Block.setRenderLayer(254, RenderLayer);
	        Block.setRenderLayer(255, RenderLayer);
			break;
        }
    }
    var originalTile = getTile(Player.getX(), Player.getY(), Player.getZ());
	var originalTileData = Level.getData(Player.getX(), Player.getY(), Player.getZ());
    setTile(Player.getX(), Player.getY(), Player.getZ(), 1, 0);
    setTile(Player.getX(), Player.getY(), Player.getZ(), 2, 0);
    setTile(Player.getX(), Player.getY(), Player.getZ(), originalTile, originalTileData);
}

VertexClientPE.nuker = function(x, y, z) {
	if(nukerMode == "cube") {
		for(var blockX = - nukerRange; blockX <= nukerRange; blockX++) {
			for(var blockY = - nukerRange; blockY <= nukerRange; blockY++) {
				for(var blockZ = - nukerRange; blockZ <= nukerRange; blockZ++) {
					setTile(x + blockX, y + blockY, z + blockZ, 0);
				}
			}
		}
	}if(nukerMode == "flat") {
		for(var blockX = - nukerRange; blockX <= nukerRange; blockX++) {
			for(var blockY = - 1; blockY <= nukerRange; blockY++) {
				for(var blockZ = - nukerRange; blockZ <= nukerRange; blockZ++) {
					setTile(x + blockX, y + blockY, z + blockZ, 0);
				}
			}
		}
	}if(nukerMode == "smash") {
		for(var blockX = - nukerRange; blockX <= nukerRange; blockX++) {
			for(var blockY = - nukerRange; blockY <= nukerRange; blockY++) {
				for(var blockZ = - nukerRange; blockZ <= nukerRange; blockZ++) {
					if(Block.getDestroyTime(getTile(x + blockX, y + blockY, z + blockZ)) == 0) {
						setTile(x + blockX, y + blockY, z + blockZ, 0);
					}
				}
			}
		}
	}
}

VertexClientPE.tapExplosion = function(x, y, z) {
	Level.explode(x, y, z, 4);
}

VertexClientPE.dronePlus = function() {
	var mobs = Entity.getAll();
	
	for(var i = 0; i < mobs.length; i++) {

		var x = Entity.getX(mobs[i]) - getPlayerX();

		var y = Entity.getY(mobs[i]) - getPlayerY();

		var z = Entity.getZ(mobs[i]) - getPlayerZ();

		mobYaw = getYaw(mobs[i])

		if(Entity.getEntityTypeId(mobs[i]) == 63) {
			zahl = 0;
		}

		if(Entity.getEntityTypeId(mobs[i]) != 63) {
			zahl = 2;
		}

		if(x * x + y * y + z * z <= 4.5 * 4.5 && mobs[i] != getPlayerEnt())

		{

			if(randomAki == 1) {
				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]) - 2.75, Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]));

				Entity.setRot(Player.getEntity(), 270, getPitch(Player.getEntity()));
			}


			if(randomAki == 2) {
				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]) + 2.75, Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]));

				Entity.setRot(Player.getEntity(), 90, getPitch(Player.getEntity()));

			}


			if(randomAki == 3) {
				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]), Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]) + 2.75);

				Entity.setRot(Player.getEntity(), 180, getPitch(Player.getEntity()));
			}

			if(randomAki == 4) {

				Entity.setPosition(Player.getEntity(), Entity.getX(mobs[i]), Entity.getY(mobs[i]) + zahl, Entity.getZ(mobs[i]) - 2.75);

				Entity.setRot(Player.getEntity(), 0, getPitch(Player.getEntity()));
			}
		}
	}
}

VertexClientPE.regen = function() {
	if(Entity.getHealth(getPlayerEnt()) < 20) {
		Player.setHealth(20);
	}
}

VertexClientPE.godMode = function() {
	Entity.setMaxHealth(getPlayerEnt(), 10000);
	Player.setHealth(10000);
}

VertexClientPE.autoPlace = function() {
	var x = Player.getPointedBlockX();
	var y = Player.getPointedBlockY();
	var z = Player.getPointedBlockZ();
	var side = Player.getPointedBlockSide();
	var blockId = Player.getCarriedItem();
	var blockData = Player.getCarriedItemData();
	if(blockId < 257) {
		setTile(x-(side==4?1:0)+(side==5?1:0)+0.5,y-(side==0?1:0)+(side==1?1:0)+0.5,z-(side==2?1:0)+(side==3?1:0)+0.5, blockId, blockData);
	}
}

var autoLeaveStage = 0;

VertexClientPE.autoLeave = function() {
	if(Entity.getHealth(getPlayerEnt()) <= 8 && autoLeaveStage == 0) {
		autoLeaveStage = 1;
		ModPE.leaveGame();
	}
}

VertexClientPE.flight = function(onOrOff) {
	switch(onOrOff) {
		case 0:
			Player.setFlying(0);
			if(Level.getGameMode() == 0) {
				Player.setCanFly(0);
			}
			break;
		case 1:
			Player.setCanFly(1);
			Player.setFlying(1);
			break;
	}
}

VertexClientPE.glide = function() {
	if(Entity.getVelY(getPlayerEnt()) <= 0 && Player.isFlying() == false) {
		setVelY(Player.getEntity(), - 0.07);
	}
}

VertexClientPE.autoMine = function() {
	Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ());
}

VertexClientPE.instaKill = function(a, v) {
	if(getPlayerEnt() == a) {
		Entity.setHealth(v, 1);
	}
}

var fancyChatMsg;
var fancyChatEndChar;

VertexClientPE.fancyChat = function(str) {
	fancyChatMsg = new java.lang.String(str);
	switch(fancyChatMode) {
		case "normal":
			fancyChatEndChar = 0xFEE0;
			break;
		default:
			fancyChatEndChar = null;
			break;
	}
	var newMsg = "";
	for(i in fancyChatMsg.toCharArray()) {
		var chr = fancyChatMsg.toCharArray()[i];
		if(chr >= 0x21 && chr <= 0x80) {
			newMsg += new java.lang.String(java.lang.Character.toChars(chr + fancyChatEndChar));
		} else {
			newMsg += chr;
		}
	}
	Server.sendChat(newMsg);
}

var killAuraStage = 0;

VertexClientPE.killAura = function() {
	var mobs = Entity.getAll();
	for(var i = 0; i < mobs.length; i++) {
		var x = Entity.getX(mobs[i]) - getPlayerX();
		var y = Entity.getY(mobs[i]) - getPlayerY();
		var z = Entity.getZ(mobs[i]) - getPlayerZ();
		if(x*x+y*y+z*z<=killAuraRange*killAuraRange && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION && Entity.getHealth(mobs[i]) != 0) {
			//setRot(getPlayerEnt(), (Math.atan2(z, x) - 90) * Math.pi / 180, getPitch());
			switch(Entity.getEntityTypeId(mobs[i])) {
				case EntityType.COW:
					Level.playSoundEnt(mobs[i], "mob.cowhurt");
					break;
				case EntityType.CHICKEN:
					Level.playSoundEnt(mobs[i], "mob.chickenhurt");
					break;
				case EntityType.ZOMBIE:
					Level.playSoundEnt(mobs[i], "mob.zombiehurt");
					break;
				case EntityType.SKELETON:
					Level.playSoundEnt(mobs[i], "mob.skeletonhurt");
					break;
				case EntityType.PIG_ZOMBIE:
					Level.playSoundEnt(mobs[i], "mob.zombiepig.zpighurt");
					break;
				default:
					Level.playSoundEnt(mobs[i], "random.hurt");
					break;
			}
			Entity.setHealth(mobs[i], 0);
			break;
		}
	}
	killAuraStage = 0;
}

VertexClientPE.freezeAura = function() {
	var mobs = Entity.getAll();
	for(var i = 0; i < mobs.length; i++) {
		var x = Entity.getX(mobs[i]) - getPlayerX();
		var y = Entity.getY(mobs[i]) - getPlayerY();
		var z = Entity.getZ(mobs[i]) - getPlayerZ();
		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
			//setRot(getPlayerEnt(), (Math.atan2(z, x) - 90) * Math.pi / 180, getPitch());
			Entity.setImmobile(mobs[i], true);
		}
	}
}

var followStage = 0;

VertexClientPE.follow = function() {
	var mobs = Entity.getAll();
	for(var i = 0; i < mobs.length; i++) {
		var x = Entity.getX(mobs[i]) - getPlayerX();
		var y = Entity.getY(mobs[i]) - getPlayerY();
		var z = Entity.getZ(mobs[i]) - getPlayerZ();
		if(x*x+y*y+z*z<=10*10 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
			if(Entity.getX(mobs[i]) > getPlayerX() && Entity.getZ(mobs[i]) > getPlayerZ()) {
				setRot(getPlayerEnt(), 90, getPitch());
			}
			if(x*x+y*y+z*z>=2*2) {
				setVelX(getPlayerEnt(), x);
				setVelZ(getPlayerEnt(), z);
				setVelY(getPlayerEnt(), y);
			}
			followStage = 0;
			break;
		}
	}
}

var tpAuraStage = 0;

VertexClientPE.tpAura = function() {
	
}

VertexClientPE.autoSword = function(a, v) {
	if(a == getPlayerEnt()) {
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 268) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 268, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 283) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 283, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 272) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 272, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 267) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 267, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
		for(var i = 0; i <= 36; i++) {
			var gCI = Player.getCarriedItem();
			var gCID = Player.getCarriedItemData();
			var gCIA = Player.getCarriedItemCount();
			if(Player.getInventorySlot(i) == 276) {
				Player.setInventorySlot(i, gCI, gCIA, gCID);
				Entity.setCarriedItem(getPlayerEnt(), 276, Player.getInventorySlotCount(i), Player.getInventorySlotData(i));
				break;
			}
		}
	}
}

VertexClientPE.criticals = function() {
	/*Entity.setVelY(Player.getEntity(), -0.54);
	Entity.setVelY(Player.getEntity(), 0.54);*/
	//Entity.setPositionRelative(getPlayerEnt(), 0, 1.2, 0);
	Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 1.3, getPlayerZ());
}

VertexClientPE.ride = function(entity) {
	rideAnimal(getPlayerEnt(), entity);
}

VertexClientPE.onlyDay = function() {
	Level.setTime(1000);
}


VertexClientPE.autoSpammer = function() {
	if(fancyChatState) {
		VertexClientPE.fancyChat(spamMessage);
	} else {
		Server.sendChat(spamMessage);
	}
	if(yesCheatPlusState) {
		Server.sendChat(" ");
	}
}

VertexClientPE.delaySpammer = function() {
	var delaySpamMsg = Math.random().toString(36).replace(/[^a-z]+/g, '');
	if(fancyChatState) {
		VertexClientPE.fancyChat(delaySpamMsg);
	} else {
		Server.sendChat(delaySpamMsg);
	}
}

VertexClientPE.coordsDisplay = function() {
	var x = parseInt(getPlayerX());
	var y = parseInt(getPlayerY());
	var z = parseInt(getPlayerZ());
	ModPE.showTipMessage("\n\n\n" + "X: " + parseInt(x) + " Y: " + parseInt(y) + " Z: " + parseInt(z));
}

var ent;

VertexClientPE.bowAimbot = function(e) {
	var mobs = Entity.getAll();
	for(var i=0; i<mobs.length; i++) {
		ent = mobs[i];
		x = Entity.getX(ent) - Entity.getX(getPlayerEnt());
		z = Entity.getZ(ent) - Entity.getZ(getPlayerEnt());
		if(Entity.getEntityTypeId(ent) != EntityType.ITEM && Entity.getEntityTypeId(ent) != EntityType.ARROW && ent != getPlayerEnt()) {
			setVelX(e, x / 4.5);
			setVelY(e, 0);
			setVelZ(e, z / 4.5);
		}
	}
}

var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerWalkSpeed = 0.2;

VertexClientPE.autoWalk = function() { //some parts of this function are made by @zhuowei
	toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
    var player = getPlayerEnt();
    setVelX(player, playerWalkSpeed * playerDir[0]);
    setVelZ(player, playerWalkSpeed * playerDir[2]);
}

VertexClientPE.boatFly = function() { //some parts of this function are made by @zhuowei
	if(Entity.getRiding(getPlayerEnt()) != null/* && Entity.getEntityTypeId(Entity.getRiding(getPlayerEnt())) == EntityType.BOAT*/) {
		toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
		/*var ent = Entity.getRiding(getPlayerEnt());
		setVelX(ent, playerWalkSpeed * playerDir[0]);
		setVelY(ent, playerWalkSpeed * playerDir[1]);
		setVelZ(ent, playerWalkSpeed * playerDir[2]);
		var ent = Entity.getRider(getPlayerEnt());
		setVelX(ent, playerWalkSpeed * playerDir[0]);
		setVelY(ent, playerWalkSpeed * playerDir[1]);
		setVelZ(ent, playerWalkSpeed * playerDir[2]);*/
		var ent = getPlayerEnt();
		setVelX(ent, playerWalkSpeed * playerDir[0]);
		setVelY(ent, playerWalkSpeed * playerDir[1]);
		setVelZ(ent, playerWalkSpeed * playerDir[2]);
	}
}

function toDirectionalVector(vector, yaw, pitch) { //some parts of this function are made by @zhuowei
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

var freecamEntity;

VertexClientPE.freecam = function(onOrOff) {
	switch(onOrOff) {
		case 0: {
			ModPE.setCamera(Player.getEntity());
			if(freecamEntity != null) {
				Entity.remove(freecamEntity);
			}
			freecamEntity = null;
			break;
		} case 1: {
			freecamEntity = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.VILLAGER);
			ModPE.setCamera(freecamEntity);
			//Entity.setRenderType(freecamEntity, EntityRenderType.player2);
			break;
		}
	}
}

VertexClientPE.fastWalk = function() {
		if(f == 1) {
            Xpos = getPlayerX();
            Zpos = getPlayerZ();
            f = f + 1;
        } else if(f == 3) {
            f = 1;
            Xdiff = getPlayerX() - Xpos;
            Zdiff = getPlayerZ() - Zpos;
            setVelX(getPlayerEnt(), Xdiff);
            setVelZ(getPlayerEnt(), Zdiff);
            Xdiff = 0;
            Zdiff = 0;
        }
        if(f != 1) {
            f = f + 1;
        }
}

VertexClientPE.teleporter = function(x, y, z) {
	setPosition(getPlayerEnt(), x, y, z);
	while(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) != 0) {
		Entity.setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+1, getPlayerZ());
	}
}

VertexClientPE.fireAura = function() {
  
  var mobs = Entity.getAll();
	for(var i = 0; i < mobs.length; i++) {
		var x = Entity.getX(mobs[i]) - getPlayerX();
		var y = Entity.getY(mobs[i]) - getPlayerY();
		var z = Entity.getZ(mobs[i]) - getPlayerZ();
		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
			if(Entity.getX(mobs[i]) > getPlayerX() && Entity.getZ(mobs[i]) > getPlayerZ()) {
				setRot(90, getPitch());
			}
			Entity.setFireTicks(mobs[i], 100);
		}
	}
  
}

var settingsPath = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/";

VertexClientPE.saveAutoSpammerMessage = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "vertexclientpe_spammessage.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(spamMessage.toString());

    outWrite.close();
}

VertexClientPE.loadAutoSpammerSettings = function() {
    if(!java.io.File(settingsPath + "vertexclientpe_spammessage.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "vertexclientpe_spammessage.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str != null && str != undefined) {
		spamMessage = str.toString();
	}
    fos.close();
	return true;
}

VertexClientPE.saveCategorySettings = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "vertexclientpe_categories.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(combatName.toString());
    outWrite.append("," + buildingName.toString());
    outWrite.append("," + movementName.toString());
    outWrite.append("," + chatName.toString());
    outWrite.append("," + miscName.toString());

    outWrite.close();
}

VertexClientPE.loadCategorySettings = function() {
    if(!java.io.File(settingsPath + "vertexclientpe_categories.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "vertexclientpe_categories.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str != null && str != undefined) {
		var _0xbbeb=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x2C","\x73\x70\x6C\x69\x74"];if(VertexClientPE[_0xbbeb[0]]()==_0xbbeb[1]){combatName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[0];buildingName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[1];movementName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[2];chatName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[3];miscName=str.toString()[_0xbbeb[3]](_0xbbeb[2])[4]}
	}
    fos.close();
	return true;
}

VertexClientPE.saveMainSettings = function() {
    java.io.File(settingsPath).mkdirs();
    var newFile = new java.io.File(settingsPath, "vertexclientpe.txt");
    newFile.createNewFile();
    var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
    outWrite.append(hacksListModeSetting.toString());
    outWrite.append("," + mainButtonPositionSetting.toString());
    outWrite.append("," + healthTagsSetting.toString());
    outWrite.append("," + themeSetting.toString());
    outWrite.append("," + playMusicSetting.toString());
    outWrite.append("," + showNewsSetting.toString());
    outWrite.append("," + menuAnimationsSetting.toString());
    outWrite.append("," + nukerMode.toString());
    outWrite.append("," + timerSpeed.toString());
    outWrite.append("," + themeSetup.toString());
    outWrite.append("," + nukerRange.toString());
    outWrite.append("," + killAuraRange.toString());
    outWrite.append("," + spamDelayTime.toString());
	outWrite.append("," + sizeSetting.toString());

    outWrite.close();
	
	VertexClientPE.saveAutoSpammerMessage();
	VertexClientPE.saveCategorySettings();
}

VertexClientPE.loadMainSettings = function() {
    if(!java.io.File(settingsPath + "vertexclientpe.txt").exists())
        return;
    var file = new java.io.File(settingsPath + "vertexclientpe.txt");
    var fos = new java.io.FileInputStream(file);
    var str = new java.lang.StringBuilder();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(java.lang.Character(ch));
	if(str.toString().split(",")[0] != null && str.toString().split(",")[0] != undefined) {
		hacksListModeSetting = str.toString().split(",")[0]; //Here we split text by ","
	}
	if(str.toString().split(",")[1] != null && str.toString().split(",")[1] != undefined) {
		mainButtonPositionSetting = str.toString().split(",")[1]; //Here we split text by ","
	}
	if(str.toString().split(",")[2] != null && str.toString().split(",")[2] != undefined) {
		healthTagsSetting = str.toString().split(",")[2]; //Here we split text by ","
	}
	if(str.toString().split(",")[3] != null && str.toString().split(",")[3] != undefined) {
		themeSetting = str.toString().split(",")[3]; //Here we split text by ","
	}
	if(str.toString().split(",")[4] != null && str.toString().split(",")[4] != undefined) {
		playMusicSetting = str.toString().split(",")[4]; //Here we split text by ","
	}
	if(str.toString().split(",")[5] != null && str.toString().split(",")[5] != undefined) {
		showNewsSetting = str.toString().split(",")[5]; //Here we split text by ","
	}
	if(str.toString().split(",")[6] != null && str.toString().split(",")[6] != undefined) {
		menuAnimationsSetting = str.toString().split(",")[6]; //Here we split text by ","
	}
	if(str.toString().split(",")[7] != null && str.toString().split(",")[7] != undefined) {
		nukerMode = str.toString().split(",")[7]; //Here we split text by ","
	}
	if(str.toString().split(",")[8] != null && str.toString().split(",")[8] != undefined) {
		timerSpeed = str.toString().split(",")[8]; //Here we split text by ","
	}
	if(str.toString().split(",")[9] != null && str.toString().split(",")[9] != undefined) {
		themeSetup = str.toString().split(",")[9]; //Here we split text by ","
	}
	if(str.toString().split(",")[10] != null && str.toString().split(",")[10] != undefined) {
		nukerRange = str.toString().split(",")[10]; //Here we split text by ","
	}
	if(str.toString().split(",")[11] != null && str.toString().split(",")[11] != undefined) {
		killAuraRange = str.toString().split(",")[11]; //Here we split text by ","
	}
	if(str.toString().split(",")[12] != null && str.toString().split(",")[12] != undefined) {
		spamDelayTime = str.toString().split(",")[12]; //Here we split text by ","
	}
	if(str.toString().split(",")[13] != null && str.toString().split(",")[13] != undefined) {
		sizeSetting = str.toString().split(",")[13]; //Here we split text by ","
		if(sizeSetting == "normal") {
			customHeight = topBarHeight / 2;
		} else if(sizeSetting == "small") {
			customHeight = topBarHeight;
		}
	}
    fos.close();
	VertexClientPE.loadAutoSpammerSettings();
	VertexClientPE.loadCategorySettings();
	return true;
}

VertexClientPE.setupTheme = function() {
	if(themeSetting == "green") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/BCA6vgv.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/dY3c1Jl.png");
	}
	if(themeSetting == "red") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/BxuGkEJ.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/S3qiQ01.png");
	}
	if(themeSetting == "blue") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/X5rCyoN.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/t6tGtMk.png");
	}
	if(themeSetting == "purple") {
		ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/3xsluNN.png");
		ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/R9te7Bd.png");
	}
}

VertexClientPE.setupTheme();

var createUiThread = function(func) {
    getContext().runOnUiThread(new java.lang.Runnable({
        run: function() {
            func(getContext());
        }
    }));
};

var GuiSize = android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, 2, getContext().getResources().getDisplayMetrics());
var GetGui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};
var TrimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};
var GetSpritesheet = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));
};
var GetTouchgui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));
};
var GetGui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};

var trimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};

var getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
    var blank = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888);
    var Bitmap = android.graphics.Bitmap;
    var part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
    var part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
    var part3 = Bitmap.createBitmap(bm, x + stretchWidth, 0, bm.getWidth() - x - stretchWidth, y);
    var part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
    var part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
    var part6 = Bitmap.createBitmap(bm, x + stretchWidth, y, bm.getWidth() - x - stretchWidth, stretchHeight);
    var part7 = Bitmap.createBitmap(bm, 0, y + stretchHeight, x, bm.getHeight() - y - stretchHeight);
    var part8 = Bitmap.createBitmap(bm, x, y + stretchHeight, stretchWidth, bm.getHeight() - y - stretchHeight);
    var part9 = Bitmap.createBitmap(bm, x + stretchWidth, y + stretchHeight, bm.getWidth() - x - stretchWidth, bm.getHeight() - y - stretchHeight);
    var canvas = new android.graphics.Canvas(blank);
    canvas.drawBitmap(part1, 0, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part2, width - bm.getWidth() + stretchWidth, y, false), x, 0, null);
    canvas.drawBitmap(part3, width - bm.getWidth() + stretchWidth + x, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part4, x, height - bm.getHeight() + stretchHeight, false), 0, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part5, width - bm.getWidth() + stretchWidth, height - bm.getHeight() + stretchHeight, false), x, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part6, part3.getWidth(), height - bm.getHeight() + stretchHeight, false), width - bm.getWidth() + stretchWidth + x, y, null);
    canvas.drawBitmap(part7, 0, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part8, width - bm.getWidth() + stretchWidth, part7.getHeight(), false), x, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(part9, width - bm.getWidth() + stretchWidth + x, height - bm.getHeight() + stretchHeight + y, null);

    return new android.graphics.drawable.BitmapDrawable(blank);
};

function clientButton(text, desc, color, round) //menu buttons
{
	if(color == null) {
		color = themeSetting;
	}
    var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var defaultButton = new Button(ctx);
    defaultButton.setText(text);
    defaultButton.setTextColor(android.graphics.Color.WHITE);
	defaultButton.setTypeface(VertexClientPE.font);
	if(desc != null && desc != undefined) {
		defaultButton.setOnLongClickListener(new android.view.View.OnLongClickListener() {
			onLongClick: function(v, t) {
				VertexClientPE.toast(desc);
				return true;
			}
		});
	}

	var bg = android.graphics.drawable.GradientDrawable();
	if(round) {
		bg.setCornerRadius(10);
	}
	bg.setColor(android.graphics.Color.parseColor("#0B5B25"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#0F8219"));
	if(color == "red") {
		bg.setColor(android.graphics.Color.parseColor("#5B0C0C"));
		bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#821010"));
	}if(color == "blue") {
		bg.setColor(android.graphics.Color.parseColor("#0A175B"));
		bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#0E3882"));
	}if(color == "purple") {
		bg.setColor(android.graphics.Color.parseColor("#9F018C"));
		bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#BC21AB"));
	}
	
	defaultButton.setTransformationMethod(null);
    defaultButton.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            var action = event.getActionMasked();
            if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
				bg.setColor(android.graphics.Color.parseColor("#0B5B25"));
                if(color == "red") {
					bg.setColor(android.graphics.Color.parseColor("#5B0C0C"));
				}if(color == "blue") {
					bg.setColor(android.graphics.Color.parseColor("#0A175B"));
				}if(color == "purple") {
					bg.setColor(android.graphics.Color.parseColor("#9F018C"));
				}
            } else {
				bg.setColor(android.graphics.Color.parseColor("#0F8219"));
                if(color == "red") {
					bg.setColor(android.graphics.Color.parseColor("#821010"));
				}if(color == "blue") {
					bg.setColor(android.graphics.Color.parseColor("#0E3882"));
				}if(color == "purple") {
					bg.setColor(android.graphics.Color.parseColor("#BC21AB"));
				}
            }
            return false;
        }
    });

	defaultButton.setBackgroundDrawable(bg);
    defaultButton.setPaintFlags(defaultButton.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
    defaultButton.setTextSize(15);
    defaultButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), android.graphics.Color.BLACK);
	defaultButton.setPadding(0, 0, 0, 0);
    defaultButton.setLineSpacing(0, 1.15);
    return defaultButton;
}

function modButton(mod) {
	if(type == null) {
		var type = "Mod";
	}
	
	var modButtonLayout = new LinearLayout(ctx);
	modButtonLayout.setOrientation(LinearLayout.HORIZONTAL);
	
	var modButtonLayoutLeft = new LinearLayout(ctx);
	modButtonLayoutLeft.setOrientation(1);
	modButtonLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 10));
	modButtonLayout.addView(modButtonLayoutLeft);
	
	var modButtonLayoutRight = new LinearLayout(ctx);
	modButtonLayoutRight.setOrientation(1);
	modButtonLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 10));
	modButtonLayout.addView(modButtonLayoutRight);
	
	var defaultClientButton = clientButton(mod.name, mod.desc);
	defaultClientButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 10));
	defaultClientButton.setAlpha(0.54);
	defaultClientButton.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
	defaultClientButton.setMarqueeRepeatLimit(-1);
	defaultClientButton.setSingleLine();
	defaultClientButton.setHorizontallyScrolling(true);
	defaultClientButton.setSelected(true);
	if(mod.isStateMod() && mod.state) {
		defaultClientButton.setTextColor(android.graphics.Color.GREEN);
	}
	defaultClientButton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			mod.onToggle();
			if(mod.isStateMod()) {
				if(mod.state) {
					defaultClientButton.setTextColor(android.graphics.Color.GREEN);
				}if(!mod.state) {
					defaultClientButton.setTextColor(android.graphics.Color.WHITE);
				}
			}
		}
	}));
	//var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
	modButtonLayoutLeft.addView(defaultClientButton);
	
	var defaultInfoButton = clientButton("...", mod.name + " settings");
	defaultInfoButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 10));
	defaultInfoButton.setAlpha(0.54);
	defaultInfoButton.setOnClickListener(new android.view.View.OnClickListener({
	onClick: function(viewarg){
		VertexClientPE.showModDialog(mod, defaultClientButton);
	}
	}));
	modButtonLayoutRight.addView(defaultInfoButton);
	
	return modButtonLayout;
}

function clientTextButton(text, shadow) //menu buttons
{
    var defaultTextButton = new Button(ctx);
    defaultTextButton.setText(text);
	
	if(shadow == true && shadow != null && shadow != undefined) {
		if(android.os.Build.VERSION.SDK_INT > 19) { // KITKAT
			defaultTextButton.setShadowLayer(1, Math.round(defaultTextButton.getLineHeight() / 8), Math.round(defaultTextButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
		} else {
			defaultTextButton.setShadowLayer(0.0001, Math.round(defaultTextButton.getLineHeight() / 8), Math.round(defaultTextButton.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
		}
	}
    defaultTextButton.setPadding(0, 0, 0, 0);
    defaultTextButton.setLineSpacing(0, 1.15);
    return defaultTextButton;
}

function clientTextView(text, shadow) //menu buttons
{
    var defaultTextView = new widget.TextView(ctx);
    defaultTextView.setText(text);
    defaultTextView.setTextColor(android.graphics.Color.WHITE);
    defaultTextView.setTypeface(VertexClientPE.font);
	
	if(shadow == true && shadow != null && shadow != undefined) {
		defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), android.graphics.Color.BLACK);
	}
    defaultTextView.setPadding(0, 0, 0, 0);
    defaultTextView.setLineSpacing(0, 1.15);
    return defaultTextView;
}

function categoryTitle(text) {
	var categoryTitleLayout = new LinearLayout(ctx);
	categoryTitleLayout.setOrientation(LinearLayout.HORIZONTAL);
	
	var categoryTitleLayoutLeft = new LinearLayout(ctx);
	categoryTitleLayoutLeft.setOrientation(1);
	categoryTitleLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutLeft);
	
	var categoryTitleLayoutMiddle = new LinearLayout(ctx);
	categoryTitleLayoutMiddle.setOrientation(1);
	categoryTitleLayoutMiddle.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutMiddle);
	
	var categoryTitleLayoutRight = new LinearLayout(ctx);
	categoryTitleLayoutRight.setOrientation(1);
	categoryTitleLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	categoryTitleLayout.addView(categoryTitleLayoutRight);
	
	var defaultSettingsButton = clientButton("\u270E");
	defaultSettingsButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	defaultSettingsButton.setAlpha(0.54);
	categoryTitleLayoutLeft.addView(defaultSettingsButton);
	
	var defaultTitle = greenSubTitle(text);
	if(themeSetting == "blue") {
		defaultTitle = blueSubTitle(text);
	} if(themeSetting == "red") {
		defaultTitle = redSubTitle(text);
	} if(themeSetting == "purple") {
		defaultTitle = purpleSubTitle(text);
	}
	defaultTitle.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3, display.heightPixels / 20));
	defaultTitle.setGravity(view.Gravity.CENTER);
	categoryTitleLayoutMiddle.addView(defaultTitle);
	
	var defaultArrowButton = clientButton("▽");
	defaultArrowButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3 - display.heightPixels / 4, display.heightPixels / 20));
	defaultArrowButton.setAlpha(0.54);
	categoryTitleLayoutRight.addView(defaultArrowButton);
	
	this.getName = function() {
		return text;
	}
	
	this.getLeftButton = function() {
		return defaultSettingsButton;
	}
	
	this.getMiddleButton = function() {
		return defaultTitle;
	}
	
	this.getRightButton = function() {
		return defaultArrowButton;
	}
	
	this.getLayout = function() {
		return categoryTitleLayout;
	}
}

function greenSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
	var padding = dip2px(8);

	var bg = android.graphics.drawable.GradientDrawable();
	bg.setColor(android.graphics.Color.parseColor("#0B5B25"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#0F8219"));

	var title = clientTextView(subtitle, true);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setAlpha(0.54);
	title.setBackgroundDrawable(bg);
	//title.setPadding(padding, padding, padding, padding);

	return title;
}

function redSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
	var padding = dip2px(8);

	var bg = android.graphics.drawable.GradientDrawable();
	bg.setColor(android.graphics.Color.parseColor("#5B0C0C"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#821010"));

	var title = clientTextView(subtitle, true);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setAlpha(0.54);
	title.setBackgroundDrawable(bg);
	//title.setPadding(padding, padding, padding, padding);

	return title;
}

function blueSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
	var padding = dip2px(8);

	var bg = android.graphics.drawable.GradientDrawable();
	bg.setColor(android.graphics.Color.parseColor("#0A175B"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#0E3882"));

	var title = clientTextView(subtitle, true);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setAlpha(0.54);
	title.setBackgroundDrawable(bg);
	//title.setPadding(padding, padding, padding, padding);

	return title;
}

function purpleSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
	var padding = dip2px(8);

	var bg = android.graphics.drawable.GradientDrawable();
	bg.setColor(android.graphics.Color.parseColor("#9F018C"));
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
	bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#BC21AB"));

	var title = clientTextView(subtitle, true);
	title.setTextColor(android.graphics.Color.WHITE);
	title.setAlpha(0.54);
	title.setBackgroundDrawable(bg);
	//title.setPadding(padding, padding, padding, padding);

	return title;
}

function backgroundGradient(round) // TextView with colored background (edited by peacestorm)
{
	var bg = android.graphics.drawable.GradientDrawable();
	if(round) {
		bg.setCornerRadius(20);
	}
	bg.setColor(android.graphics.Color.parseColor("#700B5B25"));
	bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#700F8219"));
	if(themeSetting == "red") {
		bg.setColor(android.graphics.Color.parseColor("#705B0C0C"));
		bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#70821010"));
	}if(themeSetting == "blue") {
		bg.setColor(android.graphics.Color.parseColor("#700A175B"));
		bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#700E3882"));
	}if(themeSetting == "purple") {
		bg.setColor(android.graphics.Color.parseColor("#709F018C"));
		bg.setStroke(dip2px(2), android.graphics.Color.parseColor("#70BC21AB"));
	}
	bg.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);

	return bg;
}

(VertexClientPE.editCopyrightText = function() {
	VertexClientPE.loadMainSettings();
	ModPE.langEdit("menu.copyright", "©Mojang AB | §2Vertex Client PE by peacestorm");
	if(themeSetting == "red") {
		ModPE.langEdit("menu.copyright", "©Mojang AB | §4Vertex Client PE by peacestorm");
	} if(themeSetting == "blue") {
		ModPE.langEdit("menu.copyright", "©Mojang AB | §1Vertex Client PE by peacestorm");
	} if(themeSetting == "purple") {
		ModPE.langEdit("menu.copyright", "©Mojang AB | §5Vertex Client PE by peacestorm");
	}
})();

var shouldOverride;

VertexClientPE.checkForUpdates = function() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version");
        var connection = url.openConnection();

        // get content
        inputStream = connection.getInputStream();

        // read result
        var loadedVersion = "";
        var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
        var rowVersion = "";
        while((rowVersion = bufferedVersionReader.readLine()) != null) {
            loadedVersion += rowVersion;
        }
        VertexClientPE.latestVersion = loadedVersion.split(" ")[0] + " " + loadedVersion.split(" ")[1];
        latestPocketEditionVersion = loadedVersion.split(" ")[2];

        // close what needs to be closed
        bufferedVersionReader.close();
		
		shouldOverride = true;

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
        VertexClientPE.clientMessage("Can't check for updates, please check your Internet connection.");
        ModPE.log("[Vertex Client PE] VertexClientPE.checkForUpdates() caught an error: " + err);
		shouldOverride = false;
    }
	if(shouldOverride) {
		themeSetup = "off";
		VertexClientPE.setupTheme();
	}
}

VertexClientPE.loadNews = function() {
    try {
        // download content
        var url = new java.net.URL("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/news/News");
        var connection = url.openConnection();

        // get content
        newsInputStream = connection.getInputStream();

        // read result
        var loadedNews = "";
        var bufferedNewsReader = new java.io.BufferedReader(new java.io.InputStreamReader(newsInputStream));
        var rowNews = "";
        while((rowNews = bufferedNewsReader.readLine()) != null) {
            loadedNews += rowNews;
        }
		news = loadedNews.toString();

        // close what needs to be closed
        bufferedNewsReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
		news = "News couldn't be loaded";
        ModPE.log("[Vertex Client PE] VertexClientPE.loadNews() caught an error: " + err);
    }
}

new java.lang.Thread(new java.lang.Runnable() {
	run: function() {
		VertexClientPE.loadMainSettings();
		if(showNewsSetting == "on") {
			VertexClientPE.loadNews();
			var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					VertexClientPE.toast(news);
				}
			}));
		}
	}
}).start();

VertexClientPE.showSplashScreen = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var mainMenuListLayout = new LinearLayout(ctx);
                    mainMenuListLayout.setOrientation(1);
                    mainMenuListLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
                    //--------Add Buttons-------//
					var mainMenuListLayoutTop = new LinearLayout(ctx);
					mainMenuListLayoutTop.setOrientation(1);
					mainMenuListLayoutTop.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() / 6));
					var logo1 = android.util.Base64.decode(logoImage, 0);
					var logoViewer1 = new widget.ImageView(ctx);
					logoViewer1.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight() / 4));
					logoViewer1.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo1, 0, logo1.length));
					var VertexClientPEMainMenuText = "<font color='#008000'>" + VertexClientPE.getVersion("current") + "</font>";
					if(themeSetting == "red") {
						VertexClientPEMainMenuText = "<font color='#FF0000'>" + VertexClientPE.getVersion("current") + "</font>";
					}if(themeSetting == "blue") {
						VertexClientPEMainMenuText = "<font color='#0000FF'>" + VertexClientPE.getVersion("current") + "</font>";
					}if(themeSetting == "purple") {
						VertexClientPEMainMenuText = "<font color='#800080'>" + VertexClientPE.getVersion("current") + "</font>";
					}
					var text = VertexClientPEMainMenuText + " - Welcome back " + ModPE.getPlayerName() + "!";
					var TitleText = clientTextView(text, true);
					TitleText.setText(android.text.Html.fromHtml(text), widget.TextView.BufferType.SPANNABLE);
					TitleText.setTextSize(18);
					TitleText.setGravity(android.view.Gravity.CENTER);
					TitleText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					TitleText.setMarqueeRepeatLimit(-1);
					TitleText.setSingleLine();
					TitleText.setHorizontallyScrolling(true);
					TitleText.setSelected(true);
					var newLineText = new widget.TextView(ctx);
					newLineText.setText("\n\n\n");
					newLineText.setTextSize(10);
					var mainMenuListLayoutMiddle = new LinearLayout(ctx);
					mainMenuListLayoutMiddle.setOrientation(LinearLayout.HORIZONTAL);
					mainMenuListLayoutMiddle.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					var mainMenuListLayoutMiddleLeft = new LinearLayout(ctx);
					mainMenuListLayoutMiddleLeft.setOrientation(1);
					mainMenuListLayoutMiddleLeft.setGravity(android.view.Gravity.RIGHT);
					mainMenuListLayoutMiddleLeft.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					var mainMenuListLayoutMiddleMiddle = new LinearLayout(ctx);
					mainMenuListLayoutMiddleMiddle.setOrientation(1);
					mainMenuListLayoutMiddleMiddle.setGravity(android.view.Gravity.CENTER);
					mainMenuListLayoutMiddleMiddle.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					var mainMenuListLayoutMiddleRight = new LinearLayout(ctx);
					mainMenuListLayoutMiddleRight.setOrientation(1);
					mainMenuListLayoutMiddleRight.setGravity(android.view.Gravity.LEFT);
					mainMenuListLayoutMiddleRight.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 3, ctx.getWindowManager().getDefaultDisplay().getHeight() / 3));
					mainMenuListLayoutMiddle.addView(mainMenuListLayoutMiddleLeft);
					mainMenuListLayoutMiddle.addView(mainMenuListLayoutMiddleMiddle);
					mainMenuListLayoutMiddle.addView(mainMenuListLayoutMiddleRight);
					var youTubeButton = new Button(ctx);
					youTubeButton.setBackground(splashYouTubeButtonClientGUI);
					youTubeButton.setGravity(android.view.Gravity.CENTER);
					youTubeButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 5, display.heightPixels / 5));
					youTubeButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							youTubeButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = splashYouTubeButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								youTubeButton.setBackgroundDrawable(bNP);
								youTubeButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = splashYouTubeButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								youTubeButton.setBackgroundDrawable(bNP);
								youTubeButton.setPadding(0, Math.round(youTubeButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					var playButton = new Button(ctx);
					playButton.setBackground(playButtonClientGUI);
					playButton.setGravity(android.view.Gravity.CENTER);
					playButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 3, display.heightPixels / 3));
					playButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							playButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = playButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								playButton.setBackgroundDrawable(bNP);
								playButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = playButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								playButton.setBackgroundDrawable(bNP);
								playButton.setPadding(0, Math.round(playButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					var twitterButton = new Button(ctx);
					twitterButton.setBackgroundDrawable(splashTwitterButtonClientGUI);
					twitterButton.setGravity(android.view.Gravity.CENTER);
					twitterButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 5, display.heightPixels / 5));
					twitterButton.setOnTouchListener(new android.view.View.OnTouchListener() {
						onTouch: function(v, event) {
							twitterButton.setSoundEffectsEnabled(false);
							var action = event.getActionMasked();
							if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
								var bNP = splashTwitterButtonClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								twitterButton.setBackgroundDrawable(bNP);
								twitterButton.setPadding(0, 0, 0, 0);
							} else {
								var bNP = splashTwitterButtonClickedClientGUI;
								bNP.setFilterBitmap(false);
								bNP.setAntiAlias(false);
								twitterButton.setBackgroundDrawable(bNP);
								twitterButton.setPadding(0, Math.round(twitterButton.getLineHeight() / 8), 0, 0);
							}
							return false;
						}
					});
					
					youTubeButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							showMenuButton();
							VertexClientPE.clientTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							//showAccountManagerButton();
							ModPE.goToURL("https://www.youtube.com/c/AgameRGaming");
					}}));
					playButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							showMenuButton();
							VertexClientPE.clientTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							//showAccountManagerButton();
					}}));
					twitterButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							mainMenuTextList.dismiss();
							showMenuButton();
							VertexClientPE.clientTick();
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							//showAccountManagerButton();
							ModPE.goToURL("http://twitter.com/VertexHX");
					}}))
                    mainMenuListLayout.addView(mainMenuListLayoutTop);
                    mainMenuListLayoutTop.addView(TitleText);
                    mainMenuListLayout.addView(logoViewer1);
                    mainMenuListLayout.addView(newLineText);
                    mainMenuListLayout.addView(mainMenuListLayoutMiddle);
                    mainMenuListLayoutMiddleLeft.addView(youTubeButton);
                    mainMenuListLayoutMiddleMiddle.addView(playButton);
                    mainMenuListLayoutMiddleRight.addView(twitterButton);

                    //More buttons...
                    mainMenuTextList = new widget.PopupWindow(mainMenuListLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    mainMenuTextList.setBackgroundDrawable(backgroundGradient());
                    mainMenuTextList.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

VertexClientPE.showSetupScreen = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					var setupScreenLayout = new LinearLayout(ctx);
					setupScreenLayout.setOrientation(1);
					setupScreenLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var setupScreenLayoutBottom = new LinearLayout(ctx);
					setupScreenLayoutBottom.setOrientation(LinearLayout.HORIZONTAL);
					
					var setupScreenLayoutBottomLeft = new LinearLayout(ctx);
					setupScreenLayoutBottomLeft.setOrientation(1);
					setupScreenLayoutBottomLeft.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomLeft);
					
					var setupScreenLayoutBottomCenter = new LinearLayout(ctx);
					setupScreenLayoutBottomCenter.setOrientation(1);
					setupScreenLayoutBottomCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter);
					
					var setupScreenLayoutBottomCenter1 = new LinearLayout(ctx);
					setupScreenLayoutBottomCenter1.setOrientation(1);
					setupScreenLayoutBottomCenter1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomCenter1.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter1);
					
					var setupScreenLayoutBottomRight = new LinearLayout(ctx);
					setupScreenLayoutBottomRight.setOrientation(1);
					setupScreenLayoutBottomRight.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					setupScreenLayoutBottomRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					setupScreenLayoutBottom.addView(setupScreenLayoutBottomRight);
					
					var logo3 = android.util.Base64.decode(logoImage, 0);
					var logoViewer3 = new widget.ImageView(ctx);
					logoViewer3.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo3, 0, logo3.length));
					setupScreenLayout.addView(logoViewer3);
					setupScreenLayout.addView(setupScreenLayoutBottom);
					
					var setupButtonGreen = clientButton("Green", null, "green");
					setupButtonGreen.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonGreen.setTextColor(android.graphics.Color.GREEN);
					setupButtonGreen.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "green";
							setupButtonGreen.setTextColor(android.graphics.Color.GREEN);
							setupButtonRed.setTextColor(android.graphics.Color.WHITE);
							setupButtonBlue.setTextColor(android.graphics.Color.WHITE);
							setupButtonPurple.setTextColor(android.graphics.Color.WHITE);
						}
					}));
					setupScreenLayoutBottomLeft.addView(setupButtonGreen);
					
					var setupButtonRed = clientButton("Red", null, "red");
					setupButtonRed.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonRed.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "red";
							setupButtonGreen.setTextColor(android.graphics.Color.WHITE);
							setupButtonRed.setTextColor(android.graphics.Color.GREEN);
							setupButtonBlue.setTextColor(android.graphics.Color.WHITE);
							setupButtonPurple.setTextColor(android.graphics.Color.WHITE);
						}
					}));
					setupScreenLayoutBottomCenter.addView(setupButtonRed);
					
					var setupButtonBlue = clientButton("Blue", null, "blue");
					setupButtonBlue.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonBlue.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "blue";
							setupButtonGreen.setTextColor(android.graphics.Color.WHITE);
							setupButtonRed.setTextColor(android.graphics.Color.WHITE);
							setupButtonBlue.setTextColor(android.graphics.Color.GREEN);
							setupButtonPurple.setTextColor(android.graphics.Color.WHITE);
						}
					}));
					setupScreenLayoutBottomCenter1.addView(setupButtonBlue);
					
					var setupButtonPurple = clientButton("Purple", null, "purple");
					setupButtonPurple.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					setupButtonPurple.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							setupColor = "purple";
							setupButtonGreen.setTextColor(android.graphics.Color.WHITE);
							setupButtonRed.setTextColor(android.graphics.Color.WHITE);
							setupButtonBlue.setTextColor(android.graphics.Color.WHITE);
							setupButtonPurple.setTextColor(android.graphics.Color.GREEN);
						}
					}));
					setupScreenLayoutBottomRight.addView(setupButtonPurple);
					
					var setupText = clientTextView("You can always change the color on the Settings Screen.");
					setupText.setGravity(android.view.Gravity.CENTER);
					setupScreenLayout.addView(setupText);
					
					setupScreen = new widget.PopupWindow(setupScreenLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
					setupScreen.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#0080FF")));
					setupScreen.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
			}
		}
	}));
}

var accountManager;
var accountManagerLayoutLeft;
var accountManagerLayoutCenter;
var accountManagerLayoutRight;

VertexClientPE.showAccountManager = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					try {
						ModPE.readData("account_manager");
					} catch(e) {
						//No accounts on the list
					}
					var accountManagerLayout = new LinearLayout(ctx);
					accountManagerLayout.setOrientation(1);
					accountManagerLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var addAccountButton = clientButton("Add account");
					addAccountButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
					addAccountButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							//show add account dialog
							VertexClientPE.showAddAccountDialog();
						}
					}));
					accountManagerLayout.addView(addAccountButton);
					
					var accountManagerScrollView = new ScrollView(ctx);
					
					var accountManagerLayout1 = new LinearLayout(ctx);
					accountManagerLayout1.setOrientation(LinearLayout.HORIZONTAL);
					
					accountManagerScrollView.addView(accountManagerLayout1);
					accountManagerLayout.addView(accountManagerScrollView);
					
					accountManagerLayoutLeft = new LinearLayout(ctx);
					accountManagerLayoutLeft.setOrientation(1);
					accountManagerLayoutLeft.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					accountManagerLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
					accountManagerLayout1.addView(accountManagerLayoutLeft);
					
					accountManagerLayoutCenter = new LinearLayout(ctx);
					accountManagerLayoutCenter.setOrientation(1);
					accountManagerLayoutCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					accountManagerLayoutCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
					accountManagerLayout1.addView(accountManagerLayoutCenter);
					
					accountManagerLayoutRight = new LinearLayout(ctx);
					accountManagerLayoutRight.setOrientation(1);
					accountManagerLayoutRight.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					accountManagerLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 3, LinearLayout.LayoutParams.WRAP_CONTENT));
					accountManagerLayout1.addView(accountManagerLayoutRight);
					
					var skinImage = new android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/custom.png");
					var steveImage = new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/mob/steve.png"));
					var alexImage = new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/mob/alex.png"));
					var skinViewer = new widget.ImageView(ctx);
					var skinViewerText = new widget.TextView(ctx);
					skinViewerText.setText("Sorry, your skin can't be viewed");
					if(ModPE.getCurrentUsedSkin() == "Standard_Alex") {
						skinViewer.setImageBitmap(alexImage);
					}if(ModPE.getCurrentUsedSkin() == "Standard_Steve") {
						skinViewer.setImageBitmap(steveImage);
					}if(ModPE.getCurrentUsedSkin() == "Standard_Custom") {
						skinViewer.setImageBitmap(skinImage);
					}if(ModPE.getCurrentUsedSkin() != "Standard_Alex" && ModPE.getCurrentUsedSkin() != "Standard_Steve" && ModPE.getCurrentUsedSkin() != "Standard_Custom") {
						accountManagerLayout.addView(skinViewerText);
					}
					var layoutParams = new android.widget.LinearLayout.LayoutParams(750, 750);
					skinViewer.setLayoutParams(layoutParams);
					//accountManagerLayout.addView(skinViewer);
					
					if(VertexClientPE.accounts != null) {
						for(var i in VertexClientPE.accounts) {
							var usernameText = new widget.TextView(ctx);
							usernameText.setText(VertexClientPE.accounts[i].username + "\n");
							accountManagerLayoutLeft.addView(usernameText);
							var useButton = clientButton("Use");
							useButton.setLayoutParams(new LinearLayout.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
							useButton.setOnClickListener(new android.view.View.OnClickListener({
								onClick: function(viewarg) {
									ModPE.setPlayerName(VertexClientPE.accounts[i].username.toString());
									accountManager.dismiss();
									showMenuButton();
								}
							}));
							accountManagerLayoutRight.addView(useButton);
						}
					}
					
					accountManager = new widget.PopupWindow(accountManagerLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
					accountManager.setBackgroundDrawable(backgroundGradient());
					accountManager.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
			}
		}
	}));
}

VertexClientPE.downloadPro = function() {
	ModPE.goToURL("http://filecred.com/A8C1G574");
}

VertexClientPE.setup = function() {
	if(VertexClientPE.loadMainSettings() == null) {
		VertexClientPE.showSetupScreen();
		setupDone();
	} else {
		VertexClientPE.showSplashScreen();
	}
}

VertexClientPE.setup();

var coordsButton;

/*var keybind = new JavaAdapter(android.view.KeyEvent.Callback, {
    onKeyUp: function (keyCode, event) {
       switch(keyCode) {
			case KeyEvent.KEYCODE_D:
				print("test");
				return true;
			case KeyEvent.KEYCODE_F:
				moveShip(MOVE_RIGHT);
				return true;
			case KeyEvent.KEYCODE_J:
				fireMachineGun();
				return true;
			case KeyEvent.KEYCODE_K:
				fireMissile();
				return true;
	}
   }
});*/

VertexClientPE.getHighestBlockDifference = function() {
	var x = getPlayerX();
	var y = getPlayerY();
	var z = getPlayerZ();
	while(getTile(x, y, z) == 0) {
		y--;
	} if(getTile(x, y, z) != 0) {
		return getPlayerY() - 2 - y;
	}
}

function newLevel() {
	autoLeaveStage = 0;
	VertexClientPE.playerIsInGame = true;
	VertexClientPE.loadMainSettings();
	VertexClientPE.playMusic();
	new java.lang.Thread(new java.lang.Runnable() {
		run: function() {
			VertexClientPE.checkForUpdates();
			if(VertexClientPE.latestVersion != VertexClientPE.currentVersion && VertexClientPE.latestVersion != undefined) {
				VertexClientPE.clientMessage("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
			} else {
				ctx.runOnUiThread(new java.lang.Runnable() {
					run: function() {
						VertexClientPE.toast("You have the latest version");
					}
				});
			}
		}
	}).start();
	if(hacksList == null) {
		showHacksList();
	}if(hacksList != null) {
		if(!hacksList.isShowing()) {
			showHacksList();
		}
	}
}

function leaveGame() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
			if(hacksList != null) {
				hacksList.dismiss();
				GUI.dismiss();
			}
			if(topBar != null) {
				topBar.dismiss();
				vertexclientpecombatmenu.dismiss(); //Close
				vertexclientpebuildingmenu.dismiss(); //Close
				vertexclientpemovementmenu.dismiss(); //Close
				vertexclientpechatmenu.dismiss(); //Close
				vertexclientpemiscmenu.dismiss(); //Close
				//vertexclientpefavmenu.dismiss(); //Close
			}
			showMenuButton();
			VertexClientPE.saveMainSettings();
			VertexClientPE.editCopyrightText();
			if(mp != null) {
				mp.stop();
			}
			musicText = "None";
			VertexClientPE.playerIsInGame = false;
			VertexClientPE.isRemote = false;
		}
	}));
}

function settingsScreen() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var settingsMenuLayout = new LinearLayout(ctx);
                    settingsMenuLayout.setOrientation(1);
                    settingsMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var settingsMenuScroll = new ScrollView(ctx);
					
					var settingsMenuLayout1 = new LinearLayout(ctx);
                    settingsMenuLayout1.setOrientation(1);
                    settingsMenuLayout1.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					settingsMenuScroll.addView(settingsMenuLayout);
					settingsMenuLayout1.addView(settingsMenuScroll);
					
					var settingsTitle = clientTextView("Settings", true);
					settingsTitle.setTextSize(25);
					settingsTitle.setGravity(android.view.Gravity.CENTER);
					settingsMenuLayout.addView(settingsTitle);
					
					var hacksListModeSettingButton = clientButton("Hacks List Mode");
					if(hacksListModeSetting == "on") {
						hacksListModeSettingButton.setText("Hacks List Mode | Normal");
					} else if(hacksListModeSetting == "counter") {
						hacksListModeSettingButton.setText("Hacks List Mode | Counter");
					} else if(hacksListModeSetting == "off") {
						hacksListModeSettingButton.setText("Hacks List Mode | Hidden");
					}
					hacksListModeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg){
							if(hacksListModeSetting == "off") {
								hacksListModeSetting = "on";
								hacksListModeSettingButton.setText("Hacks List Mode | Normal");
								VertexClientPE.saveMainSettings();
								VertexClientPE.loadMainSettings();
							} else if(hacksListModeSetting == "on"){
								hacksListModeSetting = "counter";
								hacksListModeSettingButton.setText("Hacks List Mode | Counter");
								VertexClientPE.saveMainSettings();
								VertexClientPE.loadMainSettings();
							} else if(hacksListModeSetting == "counter"){
								hacksListModeSetting = "off";
								hacksListModeSettingButton.setText("Hacks List Mode | Hidden");
								VertexClientPE.saveMainSettings();
								VertexClientPE.loadMainSettings();
							}
						}
					}));
					
					var mainButtonPositionSettingButton = clientButton("Main button position", "Sets the main menu's button position");
					if(mainButtonPositionSetting == "top-right") {
						mainButtonPositionSettingButton.setText("Main button position | Top-right");
					} else if(mainButtonPositionSetting == "bottom-right") {
						mainButtonPositionSettingButton.setText("Main button position | Bottom-right");
					}
					mainButtonPositionSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(mainButtonPositionSetting == "top-right") {
							mainButtonPositionSetting = "bottom-right";
							mainButtonPositionSettingButton.setText("Main button position | Bottom-right");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						} else if(mainButtonPositionSetting == "bottom-right") {
							mainButtonPositionSetting = "top-right";
							mainButtonPositionSettingButton.setText("Main button position | Top-right");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						}
					}
					}));
					
					var themeSettingButton = clientButton("Theme", "Sets the Client's theme");
					if(themeSetting == "green") {
						themeSettingButton.setText("Theme | Green");
					} else if(themeSetting == "red") {
						themeSettingButton.setText("Theme | Red");
					} else if(themeSetting == "blue") {
						themeSettingButton.setText("Theme | Blue");
					} else if(themeSetting == "purple") {
						themeSettingButton.setText("Theme | Purple");
					}
					themeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(themeSetting == "green") {
							themeSetting = "red";
							themeSettingButton.setText("Theme | Red");
							themeSetup = "off";
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							VertexClientPE.setupTheme();
						} else if(themeSetting == "red") {
							themeSetting = "blue";
							themeSettingButton.setText("Theme | Blue");
							themeSetup = "off";
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							VertexClientPE.setupTheme();
						} else if(themeSetting == "blue") {
							themeSetting = "purple";
							themeSettingButton.setText("Theme | Purple");
							themeSetup = "off";
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							VertexClientPE.setupTheme();
						} else if(themeSetting == "purple") {
							themeSetting = "green";
							themeSettingButton.setText("Theme | Green");
							themeSetup = "off";
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							VertexClientPE.setupTheme();
						}
					}
					}));
					
					var showNewsSettingButton = clientButton("Show news", "Show news at start");
					if(showNewsSetting == "on") {
						showNewsSettingButton.setText("Show news | ON");
					} else if(showNewsSetting == "off") {
						showNewsSettingButton.setText("Show news | OFF");
					}
					showNewsSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(showNewsSetting == "on") {
							showNewsSetting = "off";
							showNewsSettingButton.setText("Show news | OFF");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						} else if(showNewsSetting == "off") {
							showNewsSetting = "on";
							showNewsSettingButton.setText("Show news | ON");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						}
					}
					}));
					
					var menuAnimationsSettingButton = clientButton("Menu animations", "Show menu animations");
					if(menuAnimationsSetting == "on") {
						menuAnimationsSettingButton.setText("Menu animations | ON");
					} else if(menuAnimationsSetting == "off") {
						menuAnimationsSettingButton.setText("Menu animations | OFF");
					}
					menuAnimationsSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(menuAnimationsSetting == "on") {
							menuAnimationsSetting = "off";
							menuAnimationsSettingButton.setText("Menu animations | OFF");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						} else if(menuAnimationsSetting == "off") {
							menuAnimationsSetting = "on";
							menuAnimationsSettingButton.setText("Menu animations | ON");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						}
					}
					}));
					
					var playMusicSettingButton = clientButton("Automatically play music", "Automatically play music");
					if(playMusicSetting == "on") playMusicSetting = "off";
					/*if(playMusicSetting == "on") {
						playMusicSettingButton.setText("Automatically play music | NORMAL");
					} else */if(playMusicSetting == "shuffle") {
						playMusicSettingButton.setText("Automatically play music | SHUFFLE");
					} else if(playMusicSetting == "off") {
						playMusicSettingButton.setText("Automatically play music | OFF");
					}
					playMusicSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						//if(playMusicSetting == "on") {
						if(playMusicSetting == "off") {
							playMusicSetting = "shuffle";
							playMusicSettingButton.setText("Music | SHUFFLE");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							if(mp != null) {
								mp.stop();
								mp = null;
							}
							VertexClientPE.resetMusic();
							VertexClientPE.playMusic();
						} else if(playMusicSetting == "shuffle") {
							playMusicSetting = "off";
							playMusicSettingButton.setText("Music | OFF");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							VertexClientPE.resetMusic();
							if(mp != null) {
								mp.stop();
								mp = null;
							}
							musicText = "None";
						}/* else if(playMusicSetting == "off") {
							playMusicSetting = "on";
							playMusicSettingButton.setText("Music | NORMAL");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
							VertexClientPE.resetMusic();
							//VertexClientPE.playMusic();
							print("This mode is not ready yet!");
						}*/
					}
					}));
					
					var sizeSettingButton = clientButton("Size setting", "Change menu size to fit your screen size better");
					if(sizeSetting == "normal") {
						sizeSettingButton.setText("Size setting | NORMAL");
					} else if(sizeSetting == "small") {
						sizeSettingButton.setText("Size setting | SMALL");
					}
					sizeSettingButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						if(sizeSetting == "normal") {
							sizeSetting = "small";
							customHeight = topBarHeight;
							sizeSettingButton.setText("Size setting | SMALL");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						} else if(sizeSetting == "small") {
							sizeSetting = "normal";
							customHeight = customHeight;
							sizeSettingButton.setText("Size setting | NORMAL");
							VertexClientPE.saveMainSettings();
							VertexClientPE.loadMainSettings();
						}
						VertexClientPE.toast("Now restart your launcher to make it work!");
					}
					}));
					
					settingsMenuLayout.addView(hacksListModeSettingButton);
					settingsMenuLayout.addView(mainButtonPositionSettingButton);
					settingsMenuLayout.addView(themeSettingButton);
					settingsMenuLayout.addView(showNewsSettingButton);
					
					settingsMenuLayout.addView(menuAnimationsSettingButton);
					settingsMenuLayout.addView(playMusicSettingButton);
					settingsMenuLayout.addView(sizeSettingButton);

                    settingsMenu = new widget.PopupWindow(settingsMenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    settingsMenu.setBackgroundDrawable(backgroundGradient());
                    settingsMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occured: ' + error);
					VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

function informationScreen() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    var informationMenuLayout = new LinearLayout(ctx);
                    informationMenuLayout.setOrientation(1);
                    informationMenuLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var informationTitle = clientTextView("Information", true);
					informationTitle.setTextSize(25);
					informationTitle.setGravity(android.view.Gravity.CENTER);
					informationMenuLayout.addView(informationTitle);
					
					var informationText = clientTextView("© peacestorm 2015 - 2016. Some rights reserved.\nThanks to @Herqux_ and @MyNameIsTriXz for graphic designs.", true);
					
					var websiteButton = clientButton("Website", "Go to the official Vertex Client PE website");
					websiteButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						ModPE.goToURL("http://Vertex-Client.github.io/");
					}
					}));
					
					informationMenuLayout.addView(informationText);
					informationMenuLayout.addView(websiteButton);

                    informationMenu = new widget.PopupWindow(informationMenuLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
                    informationMenu.setBackgroundDrawable(backgroundGradient());
                    informationMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

VertexClientPE.showTopBar = function() {
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					var topBarLayout = new LinearLayout(ctx);
					topBarLayout.setOrientation(LinearLayout.HORIZONTAL);
					topBarLayout.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					
					var topBarLayoutLeft = new LinearLayout(ctx);
					topBarLayoutLeft.setOrientation(1);
					topBarLayoutLeft.setGravity(android.view.Gravity.LEFT);
					topBarLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					topBarLayout.addView(topBarLayoutLeft);
					
					var topBarLayoutCenter = new LinearLayout(ctx);
					topBarLayoutCenter.setOrientation(1);
					topBarLayoutCenter.setGravity(android.view.Gravity.CENTER_HORIZONTAL);
					topBarLayoutCenter.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 2, LinearLayout.LayoutParams.WRAP_CONTENT));
					topBarLayout.addView(topBarLayoutCenter);
					
					var topBarLayoutRight = new LinearLayout(ctx);
					topBarLayoutRight.setOrientation(1);
					topBarLayoutRight.setGravity(android.view.Gravity.RIGHT);
					topBarLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.widthPixels / 4, LinearLayout.LayoutParams.WRAP_CONTENT));
					topBarLayout.addView(topBarLayoutRight);
					
					var moreButton = clientButton("...", null, null, true);
					moreButton.setTextColor(android.graphics.Color.WHITE);
					moreButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
					moreButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							VertexClientPE.showMoreDialog();
						}
					}));
					topBarLayoutLeft.addView(moreButton);
					
					var exitButton = clientButton("X", null, null, true);
					exitButton.setTextColor(android.graphics.Color.WHITE);
					exitButton.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
					exitButton.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function(viewarg) {
							topBar.dismiss();
							vertexclientpecombatmenu.dismiss(); //Close
							vertexclientpebuildingmenu.dismiss(); //Close
							vertexclientpemovementmenu.dismiss(); //Close
							vertexclientpechatmenu.dismiss(); //Close
							vertexclientpemiscmenu.dismiss(); //Close
							//vertexclientpefavmenu.dismiss(); //Close
							showMenuButton();
							showHacksList();
						}
					}));
					topBarLayoutRight.addView(exitButton);
					
					var logo4 = android.util.Base64.decode(logoImage, 0);
					var logoViewer4 = new widget.ImageView(ctx);
					logoViewer4.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo4, 0, logo4.length));
					topBarLayoutCenter.addView(logoViewer4);
					
					topBar = new widget.PopupWindow(topBarLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), topBarHeight);
					/*topBar.setBackgroundDrawable(backgroundGradient());
					if(themeSetting == "red") {
						topBar.setBackgroundDrawable(backgroundRedClientGUI);
					}if(themeSetting == "blue") {
						topBar.setBackgroundDrawable(backgroundBlueClientGUI);
					}if(themeSetting == "purple") {
						topBar.setBackgroundDrawable(backgroundPurpleClientGUI);
					}*/
					topBar.setBackgroundDrawable(backgroundGradient());
					topBar.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
				} catch(error) {
					print('An error occurred: ' + error);
			}
		}
	}));
}

var vertexclientpemenu = null;
var menuBtn = null;

var combattpopx = screenWidth / 3, combattpopy = 0;
var combatmX, combatmY;
var combatdown = false;

var buildingtpopx = Math.floor(screenWidth / 3 + screenWidth / 3), buildingtpopy = screenHeight / 2 - customHeight;
var buildingmX, buildingmY;
var buildingdown = false;

var movementtpopx = screenWidth / 3, movementtpopy = screenHeight / 2 - customHeight;
var movementmX, movementmY;
var movementdown = false;

var chattpopx = 0, chattpopy = 0;
var chatmX, chatmY;
var chatdown = false;

var misctpopx = 0, misctpopy = screenHeight / 2 - customHeight;
var miscmX, miscmY;
var miscdown = false;

var favtpopx = Math.floor(screenWidth / 3 + screenWidth / 3), favtpopy = 0;
var favmX, favmY;
var favdown = false;

var combatMenuShown = false;

VertexClientPE.showCombatMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpecombatmenu = new widget.PopupWindow(ctx);
                var combatMenuLayout1 = new LinearLayout(ctx);
                var combatMenuScrollView = new ScrollView(ctx);
                var combatMenuLayout = new LinearLayout(ctx);
				
                combatMenuLayout.setOrientation(1);
                combatMenuLayout1.setOrientation(1);
				
				combatMenuScrollView.addView(combatMenuLayout);
				
				var combat = new categoryTitle(combatName, true);
				var combatSettings = combat.getLeftButton();
				var combatTitle = combat.getMiddleButton();
				var combatArrow = combat.getRightButton();
				
				combatSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(combat, combatName, 0);
					}
				}));
				
				VertexClientPE.addView(combatMenuLayout1, combat);
				
				if(combatMenuShown == true) {
					combatArrow.setText("△");
					combatMenuLayout1.addView(combatMenuScrollView);
				}else if(combatMenuShown == false) {
					combatArrow.setText("▽");
				}
				
				/*var killAura = new modButton("KillAura", "Automatically kills all the near entities");
				var killAuraBtn = killAura.getLeftButton();
				var killAuraInfoBtn = killAura.getRightButton();
				if(killAuraState == false) {
					killAuraBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(killAuraState == true) {
					killAuraBtn.setTextColor(android.graphics.Color.GREEN);
				}
				killAuraBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(killAuraState == false) {
						if(freezeAuraState == true) {
							freezeAuraState = false;
							freezeAuraBtn.setTextColor(android.graphics.Color.WHITE);
						}
						if(fireAuraState == true) {
							fireAuraState = false;
							fireAuraBtn.setTextColor(android.graphics.Color.WHITE);
						}
						killAuraState = true;
						killAuraBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(killAuraState == true) {
						killAuraState = false;
						killAuraBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				killAuraInfoBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					VertexClientPE.showKillAuraDialog();
				}
				}));
				
				var freezeAura = new modButton("FreezeAura", "Automatically freezes all the near entities");
				var freezeAuraBtn = freezeAura.getLeftButton();
				if(freezeAuraState == false) {
					freezeAuraBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(freezeAuraState == true) {
					freezeAuraBtn.setTextColor(android.graphics.Color.GREEN);
				}
				freezeAuraBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(freezeAuraState == false) {
						if(killAuraState == true) {
							killAuraState = false;
							killAuraBtn.setTextColor(android.graphics.Color.WHITE);
						}
						if(fireAuraState == true) {
							fireAuraState = false;
							fireAuraBtn.setTextColor(android.graphics.Color.WHITE);
						}
						freezeAuraState = true;
						freezeAuraBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(freezeAuraState == true) {
						freezeAuraState = false;
						freezeAuraBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var fireAura = new modButton("FireAura", "Sets all the near entities on fire");
				var fireAuraBtn = fireAura.getLeftButton();
				if(fireAuraState == false) {
					fireAuraBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(fireAuraState == true) {
					fireAuraBtn.setTextColor(android.graphics.Color.GREEN);
				}
				fireAuraBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(fireAuraState == false) {
						if(killAuraState == true) {
							killAuraState = false;
							killAuraBtn.setTextColor(android.graphics.Color.WHITE);
						}
						if(freezeAuraState == true) {
							freezeAuraState = false;
							freezeAuraBtn.setTextColor(android.graphics.Color.WHITE);
						}
						fireAuraState = true;
						fireAuraBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(fireAuraState == true) {
						fireAuraState = false;
						fireAuraBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var dronePlus = new modButton("Drone+", "Focuses on near entities to make it easier to kill them");
				var dronePlusBtn = dronePlus.getLeftButton();
				if(dronePlusState == false) {
					dronePlusBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(dronePlusState == true) {
					dronePlusBtn.setTextColor(android.graphics.Color.GREEN);
				}
				dronePlusBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(dronePlusState == false) {
						dronePlusState = true;
						dronePlusBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(dronePlusState == true) {
						dronePlusState = false;
						dronePlusBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var bowAimbot = new modButton("Bow Aimbot", "Makes shooting with a bow easier");
				var bowAimbotBtn = bowAimbot.getLeftButton();
				if(bowAimbotState == false) {
					bowAimbotBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(bowAimbotState == true) {
					bowAimbotBtn.setTextColor(android.graphics.Color.GREEN);
				}
				bowAimbotBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(bowAimbotState == false) {
						bowAimbotState = true;
						bowAimbotBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(bowAimbotState == true) {
						bowAimbotState = false;
						bowAimbotBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var instaKill = new modButton("InstaKill", "Makes you able to kill an entity in one hit");
				var instaKillBtn = instaKill.getLeftButton();
				if(instaKillState == false) {
					instaKillBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(instaKillState == true) {
					instaKillBtn.setTextColor(android.graphics.Color.GREEN);
				}
				instaKillBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(instaKillState == false) {
						instaKillState = true;
						instaKillBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(instaKillState == true) {
						instaKillState = false;
						instaKillBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var regen = new modButton("Regen", "Instantly refills your health");
				var regenBtn = regen.getLeftButton();
				if(regenState == false) {
					regenBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(regenState == true) {
					regenBtn.setTextColor(android.graphics.Color.GREEN);
				}
				regenBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(regenState == false) {
						regenState = true;
						regenBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(regenState == true) {
						regenState = false;
						regenBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var arrowGun = new modButton("ArrowGun", "Automatically shoots arrows wherever you look");
				var arrowGunBtn = arrowGun.getLeftButton();
				if(arrowGunState == false) {
					arrowGunBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(arrowGunState == true) {
					arrowGunBtn.setTextColor(android.graphics.Color.GREEN);
				}
				arrowGunBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(arrowGunState == false) {
						arrowGunState = true;
						arrowGunBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(arrowGunState == true) {
						arrowGunState = false;
						arrowGunBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var godMode = new modButton("God Mode", "Gives you many hearts");
				var godModeBtn = godMode.getLeftButton();
				if(godModeState == false) {
					godModeBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(godModeState == true) {
					godModeBtn.setTextColor(android.graphics.Color.GREEN);
				}
				godModeBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(godModeState == false) {
						godModeState = true;
						godModeBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(godModeState == true) {
						godModeState = false;
						godModeBtn.setTextColor(android.graphics.Color.WHITE);
						Entity.setMaxHealth(getPlayerEnt(), 20);
						Player.setHealth(20);
					}
				}
				}));
				
				var autoLeave = new modButton("AutoLeave", "Automatically leaves the world/server when your health is (below) 8");
				autoLeaveBtn = autoLeave.getLeftButton();
				if(autoLeaveState == false) {
					autoLeaveBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(autoLeaveState == true) {
					autoLeaveBtn.setTextColor(android.graphics.Color.GREEN);
				}
				autoLeaveBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(autoLeaveState == false) {
						autoLeaveState = true;
						autoLeaveBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(autoLeaveState == true) {
						autoLeaveState = false;
						autoLeaveBtn.setTextColor(android.graphics.Color.WHITE);
						Entity.setMaxHealth(getPlayerEnt(), 20);
						Player.setHealth(20);
					}
				}
				}));
				
				var noHurt = new modButton("NoHurt", "Prevents you from getting hurt");
				noHurtBtn = noHurt.getLeftButton();
				if(noHurtState == false) {
					noHurtBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(noHurtState == true) {
					noHurtBtn.setTextColor(android.graphics.Color.GREEN);
				}
				noHurtBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(noHurtState == false) {
						noHurtState = true;
						noHurtBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(noHurtState == true) {
						noHurtState = false;
						noHurtBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var autoSword = new modButton("AutoSword", "Automatically chooses the best sword for you when attacking entities if available");
				autoSwordBtn = autoSword.getLeftButton();
				if(autoSwordState == false) {
					autoSwordBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(autoSwordState == true) {
					autoSwordBtn.setTextColor(android.graphics.Color.GREEN);
				}
				autoSwordBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(autoSwordState == false) {
						autoSwordState = true;
						autoSwordBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(autoSwordState == true) {
						autoSwordState = false;
						autoSwordBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var criticals = new modButton("Criticals", "Automatically jumps to make the second attack critical, make sure you attack again after hitting an entity and before hitting the ground to make it work");
				criticalsBtn = criticals.getLeftButton();
				if(criticalsState == false) {
					criticalsBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(criticalsState == true) {
					criticalsBtn.setTextColor(android.graphics.Color.GREEN);
				}
				criticalsBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(criticalsState == false) {
						criticalsState = true;
						criticalsBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(criticalsState == true) {
						criticalsState = false;
						criticalsBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var healthTags = new modButton("HealthTags", "Displays an entity's name and health in its nametag");
				var healthTagsBtn = healthTags.getLeftButton();
				if(healthTagsState == false) {
					healthTagsBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(healthTagsState == true) {
					healthTagsBtn.setTextColor(android.graphics.Color.GREEN);
				}
				healthTagsBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(healthTagsState == false) {
						healthTagsState = true;
						healthTagsBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(healthTagsState == true) {
						healthTagsState = false;
						healthTagsBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var follow = new modButton("Follow", "Automatically follow nearby entities", null, true);
				var followBtn = follow.getLeftButton();
				if(followState == false) {
					followBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(followState == true) {
					followBtn.setTextColor(android.graphics.Color.GREEN);
				}
				followBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					var _0xed94=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x67\x65\x74\x4E\x61\x6D\x65","\x73\x68\x6F\x77\x50\x72\x6F\x44\x69\x61\x6C\x6F\x67"];if(VertexClientPE[_0xed94[0]]()!=_0xed94[1]){VertexClientPE[_0xed94[3]](follow[_0xed94[2]]());return}
					if(followState == false) {
						followState = true;
						followBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(followState == true) {
						followState = false;
						followBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));

				*/combatArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(combatMenuShown == true) {
							combatMenuLayout1.removeView(combatMenuScrollView);
							combatArrow.setText("▽");
							combatMenuShown = false;
						}else if(combatMenuShown == false) {
							combatMenuLayout1.addView(combatMenuScrollView);
							combatArrow.setText("△");
							combatMenuShown = true;
						}
                    }
                });
                combatTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        combatdown = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> Now you can move the menu!"), 0).show();
                        return true;
                    }
                });
                combatTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!combatdown) {
                            combatmX = e.getX()
                            combatmY = e.getY()
                        }
                        if(combatdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - combatmX) * -1 / 10;
                                var Y = parseInt(e.getY() - combatmY) * -1 / 10;
                                combattpopx = combattpopx + X;
                                combattpopy = combattpopy + Y;
                                vertexclientpecombatmenu.update(parseInt(combattpopx), parseInt(combattpopy), -1, -1);
                            }
                            if(a == 1) combatdown = false;
                        }
                        return false;
                    }
                }));

				/*if(!VertexClientPE.isRemote) {
					VertexClientPE.addView(combatMenuLayout, killAura);
					VertexClientPE.addView(combatMenuLayout, freezeAura);
					VertexClientPE.addView(combatMenuLayout, fireAura);
					VertexClientPE.addView(combatMenuLayout, dronePlus);
					VertexClientPE.addView(combatMenuLayout, bowAimbot);
					VertexClientPE.addView(combatMenuLayout, instaKill);
					VertexClientPE.addView(combatMenuLayout, regen);
					VertexClientPE.addView(combatMenuLayout, godMode);
					VertexClientPE.addView(combatMenuLayout, noHurt);
					VertexClientPE.addView(combatMenuLayout, criticals);
					VertexClientPE.addView(combatMenuLayout, healthTags);
					VertexClientPE.addView(combatMenuLayout, follow);
				}
				VertexClientPE.addView(combatMenuLayout, arrowGun);
				VertexClientPE.addView(combatMenuLayout, autoSword);
				VertexClientPE.addView(combatMenuLayout, autoLeave);*/
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.modules[index].category == VertexClientPE.category.COMBAT) {
						combatMenuLayout.addView(new modButton(VertexClientPE.modules[index]));
					}
				});

                vertexclientpecombatmenu.setContentView(combatMenuLayout1);
				vertexclientpecombatmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                vertexclientpecombatmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
				vertexclientpecombatmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpecombatmenu.setAnimationStyle(android.R.style.Animation_Translucent);
				}
                vertexclientpecombatmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, combattpopx, combattpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var buildingMenuShown = false;

VertexClientPE.showBuildingMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpebuildingmenu = new widget.PopupWindow(ctx);
                var buildingMenuLayout1 = new LinearLayout(ctx);
                var buildingMenuScrollView = new ScrollView(ctx);
                var buildingMenuLayout = new LinearLayout(ctx);
				
                buildingMenuLayout.setOrientation(1);
                buildingMenuLayout1.setOrientation(1);
				
				buildingMenuScrollView.addView(buildingMenuLayout);
				
				var building = new categoryTitle(buildingName, true);
				var buildingSettings = building.getLeftButton();
				var buildingTitle = building.getMiddleButton();
				var buildingArrow = building.getRightButton();
				
				buildingSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(building, buildingName, 1);
					}
				}));
				
				VertexClientPE.addView(buildingMenuLayout1, building);
				
				if(buildingMenuShown == true) {
					buildingArrow.setText("△");
					buildingMenuLayout1.addView(buildingMenuScrollView);
				}else if(buildingMenuShown == false) {
					buildingArrow.setText("▽");
				}
				
				buildingArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(buildingMenuShown == true) {
							buildingMenuLayout1.removeView(buildingMenuScrollView);
							buildingArrow.setText("▽");
							buildingMenuShown = false;
						}else if(buildingMenuShown == false) {
							buildingMenuLayout1.addView(buildingMenuScrollView);
							buildingArrow.setText("△");
							buildingMenuShown = true;
						}
                    }
                });
                buildingTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        buildingdown = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> Now you can move the menu!"), 0).show();
                        return true;
                    }
                });
                buildingTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!buildingdown) {
                            buildingmX = e.getX()
                            buildingmY = e.getY()
                        }
                        if(buildingdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - buildingmX) * -1 / 10;
                                var Y = parseInt(e.getY() - buildingmY) * -1 / 10;
                                buildingtpopx = buildingtpopx + X;
                                buildingtpopy = buildingtpopy + Y;
                                vertexclientpebuildingmenu.update(parseInt(buildingtpopx), parseInt(buildingtpopy), -1, -1);
                            }
                            if(a == 1) buildingdown = false;
                        }
                        return false;
                    }
                }));

                VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.modules[index].category == VertexClientPE.category.BUILDING) {
						buildingMenuLayout.addView(new modButton(VertexClientPE.modules[index]));
					}
				});


                vertexclientpebuildingmenu.setContentView(buildingMenuLayout1);
				vertexclientpebuildingmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                vertexclientpebuildingmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpebuildingmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpebuildingmenu.setAnimationStyle(android.R.style.Animation_Translucent);
				}
                vertexclientpebuildingmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, buildingtpopx, buildingtpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var movementMenuShown = false;

VertexClientPE.showMovementMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpemovementmenu = new widget.PopupWindow(ctx);
                var movementMenuLayout1 = new LinearLayout(ctx);
                var movementMenuScrollView = new ScrollView(ctx);
                movementMenuLayout = new LinearLayout(ctx);
				
                movementMenuLayout.setOrientation(1);
                movementMenuLayout1.setOrientation(1);
				
				movementMenuScrollView.addView(movementMenuLayout);
				
				var movement = new categoryTitle(movementName, true);
				var movementSettings = movement.getLeftButton();
				var movementTitle = movement.getMiddleButton();
				var movementArrow = movement.getRightButton();
				
				movementSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(movement, movementName, 2);
					}
				}));
				
				VertexClientPE.addView(movementMenuLayout1, movement);
				
				if(movementMenuShown == true) {
					movementArrow.setText("△");
					movementMenuLayout1.addView(movementMenuScrollView);
				}else if(movementMenuShown == false) {
					movementArrow.setText("▽");
				}
				
				movementArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(movementMenuShown == true) {
							movementMenuLayout1.removeView(movementMenuScrollView);
							movementArrow.setText("▽");
							movementMenuShown = false;
						}else if(movementMenuShown == false) {
							movementMenuLayout1.addView(movementMenuScrollView);
							movementArrow.setText("△");
							movementMenuShown = true;
						}
                    }
                });
                movementTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        movementdown = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> Now you can move the menu!"), 0).show();
                        return true;
                    }
                });
                movementTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!movementdown) {
                            movementmX = e.getX()
                            movementmY = e.getY()
                        }
                        if(movementdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - movementmX) * -1 / 10;
                                var Y = parseInt(e.getY() - movementmY) * -1 / 10;
                                movementtpopx = movementtpopx + X;
                                movementtpopy = movementtpopy + Y;
                                vertexclientpemovementmenu.update(parseInt(movementtpopx), parseInt(movementtpopy), -1, -1);
                            }
                            if(a == 1) movementdown = false;
                        }
                        return false;
                    }
                }));

				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.modules[index].category == VertexClientPE.category.MOVEMENT) {
						movementMenuLayout.addView(new modButton(VertexClientPE.modules[index]));
					}
				});

                vertexclientpemovementmenu.setContentView(movementMenuLayout1);
				vertexclientpemovementmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                vertexclientpemovementmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpemovementmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpemovementmenu.setAnimationStyle(android.R.style.Animation_Translucent);
				}
                vertexclientpemovementmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, movementtpopx, movementtpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var chatMenuShown = false;

VertexClientPE.showChatMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpechatmenu = new widget.PopupWindow(ctx);
                var chatMenuLayout1 = new LinearLayout(ctx);
                var chatMenuScrollView = new ScrollView(ctx);
                var chatMenuLayout = new LinearLayout(ctx);
				
                chatMenuLayout.setOrientation(1);
                chatMenuLayout1.setOrientation(1);
				
				chatMenuScrollView.addView(chatMenuLayout);
				
				var chat = new categoryTitle(chatName, true);
				var chatSettings = chat.getLeftButton();
				var chatTitle = chat.getMiddleButton();
				var chatArrow = chat.getRightButton();
				
				chatSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(chat, chatName, 3);
					}
				}));
				
				VertexClientPE.addView(chatMenuLayout1, chat);
				
				if(chatMenuShown == true) {
					chatArrow.setText("△");
					chatMenuLayout1.addView(chatMenuScrollView);
				}else if(chatMenuShown == false) {
					chatArrow.setText("▽");
				}

				chatArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(chatMenuShown == true) {
							chatMenuLayout1.removeView(chatMenuScrollView);
							chatArrow.setText("▽");
							chatMenuShown = false;
						}else if(chatMenuShown == false) {
							chatMenuLayout1.addView(chatMenuScrollView);
							chatArrow.setText("△");
							chatMenuShown = true;
						}
                    }
                });
                chatTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        chatdown = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> Now you can move the menu!"), 0).show();
                        return true;
                    }
                });
                chatTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!chatdown) {
                            chatmX = e.getX()
                            chatmY = e.getY()
                        }
                        if(chatdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - chatmX) * -1 / 10;
                                var Y = parseInt(e.getY() - chatmY) * -1 / 10;
                                chattpopx = chattpopx + X;
                                chattpopy = chattpopy + Y;
                                vertexclientpechatmenu.update(parseInt(chattpopx), parseInt(chattpopy), -1, -1);
                            }
                            if(a == 1) chatdown = false;
                        }
                        return false;
                    }
                }));
				
				VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.modules[index].category == VertexClientPE.category.CHAT) {
						chatMenuLayout.addView(new modButton(VertexClientPE.modules[index]));
					}
				});

                vertexclientpechatmenu.setContentView(chatMenuLayout1);
                vertexclientpechatmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                vertexclientpechatmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpechatmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpechatmenu.setAnimationStyle(android.R.style.Animation_Translucent);
				}
                vertexclientpechatmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, chattpopx, chattpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var miscMenuShown = false;

VertexClientPE.showMiscMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpemiscmenu = new widget.PopupWindow(ctx);
                var miscMenuLayout1 = new LinearLayout(ctx);
                var miscMenuScrollView = new ScrollView(ctx);
                var miscMenuLayout = new LinearLayout(ctx);
				
                miscMenuLayout.setOrientation(1);
                miscMenuLayout1.setOrientation(1);
				
				miscMenuScrollView.addView(miscMenuLayout);
				
				var misc = new categoryTitle(miscName, true);
				var miscSettings = misc.getLeftButton();
				var miscTitle = misc.getMiddleButton();
				var miscArrow = misc.getRightButton();
				
				miscSettings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						VertexClientPE.showCategoryDialog(misc, miscName, 4);
					}
				}));
				
				VertexClientPE.addView(miscMenuLayout1, misc);
				
				if(miscMenuShown == true) {
					miscArrow.setText("△");
					miscMenuLayout1.addView(miscMenuScrollView);
				}else if(miscMenuShown == false) {
					miscArrow.setText("▽");
				}
				
				/*var panic = new modButton("Panic", "Disables all the hacks at once", "Special");
				var panicBtn = panic.getLeftButton();
				panicBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
				 VertexClientPE.panic();
				 topBar.dismiss();
			     showingMenu = false;
                 vertexclientpecombatmenu.dismiss(); //Close
                 vertexclientpebuildingmenu.dismiss(); //Close
                 vertexclientpemovementmenu.dismiss(); //Close
                 vertexclientpechatmenu.dismiss(); //Close
                 vertexclientpemiscmenu.dismiss(); //Close
                 //vertexclientpefavmenu.dismiss(); //Close
	             VertexClientPE.showCombatMenu();
	             VertexClientPE.showBuildingMenu();
	             VertexClientPE.showMovementMenu();
				 VertexClientPE.showChatMenu();
	             VertexClientPE.showMiscMenu();
	             //VertexClientPE.showFavMenu();
				 VertexClientPE.showTopBar();
				}
				}));
				
				var yesCheatPlus = new modButton("YesCheat+", "Makes some hacks work better on servers by adding bypasses");
				var yesCheatPlusBtn = yesCheatPlus.getLeftButton();
				if(yesCheatPlusState == false) {
					yesCheatPlusBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(yesCheatPlusState == true) {
					yesCheatPlusBtn.setTextColor(android.graphics.Color.GREEN);
				}
				yesCheatPlusBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(yesCheatPlusState == false) {
						yesCheatPlusState = true;
						yesCheatPlusBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(yesCheatPlusState == true) {
						yesCheatPlusState = false;
						yesCheatPlusBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var antiLBAH = new modButton("AntiLBAH", "Makes some hacks work better on LBSG by adding bypasses");
				var antiLBAHBtn = antiLBAH.getLeftButton();
				if(antiLBAHState == false) {
					antiLBAHBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(antiLBAHState == true) {
					antiLBAHBtn.setTextColor(android.graphics.Color.GREEN);
				}
				antiLBAHBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					flightMsgShown = false;
					if(antiLBAHState == false) {
						antiLBAHState = true;
						antiLBAHBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(antiLBAHState == true) {
						antiLBAHState = false;
						antiLBAHBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var itemGiver = new modButton("ItemGiver", "Adds items to your inventory", "Special");
				var itemGiverBtn = itemGiver.getLeftButton();
				itemGiverBtn.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg){
						VertexClientPE.showItemGiverDialog();
					}
				}));
				
				var opPerm = new modButton("OP Perm", "Gives you OP permissions. Requires you to be OP. When your OP gets removed you will still have the permission to OP yourself", "Special");
				var opPermBtn = opPerm.getLeftButton();
			    opPermBtn.setTextColor(android.graphics.Color.WHITE);
			    opPermBtn.setOnClickListener(new android.view.View.OnClickListener({
				    onClick: function(viewarg){
						Server.sendChat("/setuperm " + ModPE.getPlayerName() + " command.pocketmine.op");
				    }
			    }));
				
				var leetServerCrasher = new modButton("Leet Server Crasher", "Crashes Leet servers. Doesn't work on some servers", "Special");
				var leetServerCrasherBtn = leetServerCrasher.getLeftButton();
			    leetServerCrasherBtn.setOnClickListener(new android.view.View.OnClickListener({
				    onClick: function(viewarg){
						Server.sendChat("//sphere 10 20");
						Server.sendChat("//set stone");
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> The server should crash now!"), 0).show();
				    }
			    }));
				
				var switchGamemode = new modButton("Switch Gamemode", "Switches your gamemode", "Special");
				var switchGamemodeBtn = switchGamemode.getLeftButton();
			    switchGamemodeBtn.setTextColor(android.graphics.Color.WHITE);
			    switchGamemodeBtn.setOnClickListener(new android.view.View.OnClickListener({
				    onClick: function(viewarg){
						VertexClientPE.switchGameMode();
				    }
			    }));
				
				var xRay = new modButton("X-Ray", "See ores through blocks (make sure Fancy Graphics is off)");
				var xRayBtn = xRay.getLeftButton();
				if(xRayState == false) {
					xRayBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(xRayState == true) {
					xRayBtn.setTextColor(android.graphics.Color.GREEN);
				}
				xRayBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(xRayState == false) {
						xRayState = true;
						VertexClientPE.xRay(1);
						xRayBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(xRayState == true) {
						xRayState = false;
						VertexClientPE.xRay(0);
						xRayBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var derp = new modButton("Derp", "Rotates the player all the time");
				var derpBtn = derp.getLeftButton();
				if(derpState == false) {
					derpBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(derpState == true) {
					derpBtn.setTextColor(android.graphics.Color.GREEN);
				}
				derpBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(derpState == false) {
						derpState = true;
						derpBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(derpState == true) {
						derpState = false;
						derpBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var autoSwitch = new modButton("AutoSwitch", "Switches the item in your hand all the time");
				var autoSwitchBtn = autoSwitch.getLeftButton();
				if(autoSwitchState == false) {
					autoSwitchBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(autoSwitchState == true) {
					autoSwitchBtn.setTextColor(android.graphics.Color.GREEN);
				}
				autoSwitchBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(autoSwitchState == false) {
						autoSwitchState = true;
						autoSwitchBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(autoSwitchState == true) {
						autoSwitchState = false;
						autoSwitchBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var zoom = new modButton("Zoom", "Changes the FOV to zoom in");
				var zoomBtn = zoom.getLeftButton();
				if(zoomState == false) {
					zoomBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(zoomState == true) {
					zoomBtn.setTextColor(android.graphics.Color.GREEN);
				}
				zoomBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(zoomState == false) {
						zoomState = true;
						ModPE.setFov(10);
						zoomBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(zoomState == true) {
						zoomState = false;
						ModPE.resetFov();
						zoomBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var coordsDisplay = new modButton("CoordsDisplay", "Displays the player's coordinates");
				var coordsDisplayBtn = zoom.getLeftButton();
				if(coordsDisplayState == false) {
					coordsDisplayBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(coordsDisplayState == true) {
					coordsDisplayBtn.setTextColor(android.graphics.Color.GREEN);
				}
				coordsDisplayBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(coordsDisplayState == false) {
						coordsDisplayState = true;
						coordsDisplayBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(coordsDisplayState == true) {
						coordsDisplayState = false;
						coordsDisplayBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var onlyDay = new modButton("OnlyDay", "Sets the time to day all the time");
				var onlyDayBtn = onlyDay.getLeftButton();
				if(onlyDayState == false) {
					onlyDayBtn.setTextColor(android.graphics.Color.WHITE);
				} else if(onlyDayState == true) {
					onlyDayBtn.setTextColor(android.graphics.Color.GREEN);
				}
				onlyDayBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(onlyDayState == false) {
						onlyDayState = true;
						onlyDayBtn.setTextColor(android.graphics.Color.GREEN);
					} else if(onlyDayState == true) {
						onlyDayState = false;
						onlyDayBtn.setTextColor(android.graphics.Color.WHITE);
					}
				}
				}));
				
				var pizzaOrder = new modButton("Order a Pizza", "Order a pizza of Domino's");
				var pizzaOrderBtn = pizzaOrder.getLeftButton();
			    pizzaOrderBtn.setOnClickListener(new android.view.View.OnClickListener({
				    onClick: function(viewarg){
						pizzaOrderDialog();
				    }
			    }));*/

				miscArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(miscMenuShown == true) {
							miscMenuLayout1.removeView(miscMenuScrollView);
							miscArrow.setText("▽");
							miscMenuShown = false;
						}else if(miscMenuShown == false) {
							miscMenuLayout1.addView(miscMenuScrollView);
							miscArrow.setText("△");
							miscMenuShown = true;
						}
                    }
                });
                miscTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        miscdown = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> Now you can move the menu!"), 0).show();
                        return true;
                    }
                });
                miscTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!miscdown) {
                            miscmX = e.getX()
                            miscmY = e.getY()
                        }
                        if(miscdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - miscmX) * -1 / 10;
                                var Y = parseInt(e.getY() - miscmY) * -1 / 10;
                                misctpopx = misctpopx + X;
                                misctpopy = misctpopy + Y;
                                vertexclientpemiscmenu.update(parseInt(misctpopx), parseInt(misctpopy), -1, -1);
                            }
                            if(a == 1) miscdown = false;
                        }
                        return false;
                    }
                }));

                VertexClientPE.modules.forEach(function(element, index, array) {
					if(VertexClientPE.modules[index].category == VertexClientPE.category.MISC) {
						miscMenuLayout.addView(new modButton(VertexClientPE.modules[index]));
					}
				});

                vertexclientpemiscmenu.setContentView(miscMenuLayout1);
                vertexclientpemiscmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                vertexclientpemiscmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpemiscmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpemiscmenu.setAnimationStyle(android.R.style.Animation_Translucent);
				}
                vertexclientpemiscmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, misctpopx, misctpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

var favMenuShown = false;

VertexClientPE.showFavMenu = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                vertexclientpefavmenu = new widget.PopupWindow(ctx);
                var favMenuLayout1 = new LinearLayout(ctx);
                var favMenuScrollView = new ScrollView(ctx);
                favMenuLayout = new LinearLayout(ctx);
				
                favMenuLayout.setOrientation(1);
                favMenuLayout1.setOrientation(1);
				
				favMenuScrollView.addView(favMenuLayout);
				
				var favTitleLayout = new LinearLayout(ctx);
				favTitleLayout.setOrientation(LinearLayout.HORIZONTAL);
				
				var favTitleLayoutLeft = new LinearLayout(ctx);
				favTitleLayoutLeft.setOrientation(1);
				favTitleLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayout.addView(favTitleLayoutLeft);
				
				var favTitleLayoutRight = new LinearLayout(ctx);
				favTitleLayoutRight.setOrientation(1);
				favTitleLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayout.addView(favTitleLayoutRight);
				
				if(themeSetting == "green") {
					var favTitle = greenSubTitle("Favourite", true);
				}if(themeSetting == "red") {
					var favTitle = redSubTitle("Favourite", true);
				}if(themeSetting == "blue") {
					var favTitle = blueSubTitle("Favourite", true);
				}if(themeSetting == "purple") {
					var favTitle = purpleSubTitle("Favourite", true);
				}
				favTitle.setAlpha(0.54);
				favTitle.setGravity(android.view.Gravity.CENTER);
				favTitle.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayoutLeft.addView(favTitle);
				
				var favArrow = clientButton("*");
				favArrow.setAlpha(0.54);
				favArrow.setGravity(android.view.Gravity.CENTER);
				favArrow.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 20));
				favTitleLayoutRight.addView(favArrow);
				
				favMenuLayout1.addView(favTitleLayout);
				
				if(favMenuShown == true) {
					favArrow.setText("△");
					favMenuLayout1.addView(favMenuScrollView);
				}else if(favMenuShown == false) {
					favArrow.setText("▽");
				}
				
				var favText = clientTextView("Not available yet!", true);

				favArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(favMenuShown == true) {
							favMenuLayout1.removeView(favMenuScrollView);
							favArrow.setText("▽");
							favMenuShown = false;
						}else if(favMenuShown == false) {
							favMenuLayout1.addView(favMenuScrollView);
							favArrow.setText("△");
							favMenuShown = true;
						}
                    }
                });
                favTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        favdown = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> Now you can move the menu!"), 0).show();
                        return true;
                    }
                });
                favTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!favdown) {
                            favmX = e.getX()
                            favmY = e.getY()
                        }
                        if(favdown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - favmX) * -1 / 10;
                                var Y = parseInt(e.getY() - favmY) * -1 / 10;
                                favtpopx = favtpopx + X;
                                favtpopy = favtpopy + Y;
                                vertexclientpefavmenu.update(parseInt(favtpopx), parseInt(favtpopy), -1, -1);
                            }
                            if(a == 1) favdown = false;
                        }
                        return false;
                    }
                }));

                favMenuLayout.addView(favText);

                vertexclientpefavmenu.setContentView(favMenuLayout1);
                vertexclientpefavmenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                vertexclientpefavmenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpefavmenu.setHeight(screenHeight / 2 - customHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpefavmenu.setAnimationStyle(android.R.style.Animation_Translucent);
				}
                vertexclientpefavmenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, favtpopx, favtpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}

/*VertexClientPE.showNavigator = function() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				var display = new android.util.DisplayMetrics();
				com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
				
				VertexClientPE.loadMainSettings();

                navigator = new widget.PopupWindow(ctx);
				var navigatorGridLayout = new widget.GridLayout(ctx);
                var navigatorMenuLayout1 = new LinearLayout(ctx);
                var navigatorMenuScrollView = new ScrollView(ctx);
                navigatorMenuLayout = new LinearLayout(ctx);
				
                navigatorMenuLayout.setOrientation(1);
                navigatorMenuLayout1.setOrientation(1);
				
				navigatorMenuLayout.addView(navigatorGridLayout)
				navigatorMenuScrollView.addView(navigatorMenuLayout);
				
				var navigatorTitleLayout = new LinearLayout(ctx);
				navigatorTitleLayout.setOrientation(LinearLayout.HORIZONTAL);
				
				var navigatorTitleLayoutLeft = new LinearLayout(ctx);
				navigatorTitleLayoutLeft.setOrientation(1);
				navigatorTitleLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 20));
				navigatorTitleLayout.addView(navigatorTitleLayoutLeft);
				
				var navigatorTitleLayoutRight = new LinearLayout(ctx);
				navigatorTitleLayoutRight.setOrientation(1);
				navigatorTitleLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 20));
				navigatorTitleLayout.addView(navigatorTitleLayoutRight);
				
				if(themeSetting == "green") {
					var navigatorTitle = greenSubTitle("Favourite", true);
				}if(themeSetting == "red") {
					var navigatorTitle = redSubTitle("Favourite", true);
				}if(themeSetting == "blue") {
					var navigatorTitle = blueSubTitle("Favourite", true);
				}if(themeSetting == "purple") {
					var navigatorTitle = purpleSubTitle("Favourite", true);
				}
				navigatorTitle.setAlpha(0.54);
				navigatorTitle.setGravity(android.view.Gravity.CENTER);
				navigatorTitle.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2.5, display.heightPixels / 20));
				navigatorTitleLayoutLeft.addView(navigatorTitle);
				
				var navigatorArrow = clientButton("*");
				navigatorArrow.setAlpha(0.54);
				navigatorArrow.setGravity(android.view.Gravity.CENTER);
				navigatorArrow.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 2 - display.heightPixels / 2.5, display.heightPixels / 20));
				navigatorTitleLayoutRight.addView(navigatorArrow);
				
				navigatorMenuLayout1.addView(navigatorTitleLayout);
				
				if(navigatorMenuShown == true) {
					navigatorArrow.setText("△");
					navigatorMenuLayout1.addView(navigatorMenuScrollView);
				}else if(navigatorMenuShown == false) {
					navigatorArrow.setText("▽");
				}
				
				var navigatorSearchBar = new widget.EditText(ctx);
				navigatorSearchBar.addTextChangedListener(new android.text.TextWatcher() {
					onTextChanged: function() {
						modules.forEach(function(name){
							if(name+"".toLowerCase().indexOf(navigatorSearchBar.getText()+"".toLowerCase())>-1)Display();
						});
					}
				}

				navigatorArrow.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(viewarg) {
						if(navigatorMenuShown == true) {
							navigatorMenuLayout1.removeView(navigatorMenuScrollView);
							navigatorArrow.setText("▽");
							navigatorMenuShown = false;
						}else if(navigatorMenuShown == false) {
							navigatorMenuLayout1.addView(navigatorMenuScrollView);
							navigatorArrow.setText("△");
							navigatorMenuShown = true;
						}
                    }
                });
                navigatorTitle.setOnLongClickListener(new android.view.View.OnLongClickListener() {
                    onLongClick: function(v, t) {
                        navigatordown = true;
                        ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
                        widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> Now you can move the menu!"), 0).show();
                        return true;
                    }
                });
                navigatorTitle.setOnTouchListener(new android.view.View.OnTouchListener({
                    onTouch: function(v, e) {
                        if(!navigatordown) {
                            navigatormX = e.getX()
                            navigatormY = e.getY()
                        }
                        if(navigatordown) {
                            var a = e.getAction()
                            if(a == 2) {
                                var X = parseInt(e.getX() - navigatormX) * -1 / 10;
                                var Y = parseInt(e.getY() - navigatormY) * -1 / 10;
                                navigatortpopx = navigatortpopx + X;
                                navigatortpopy = navigatortpopy + Y;
                                vertexclientpenavigatormenu.update(parseInt(navigatortpopx), parseInt(navigatortpopy), -1, -1);
                            }
                            if(a == 1) navigatordown = false;
                        }
                        return false;
                    }
                }));

                navigatorMenuLayout.addView(navigatorText);

                vertexclientpenavigatormenu.setContentView(navigatorMenuLayout1);
                vertexclientpenavigatormenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                vertexclientpenavigatormenu.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
                vertexclientpenavigatormenu.setHeight(screenHeight);
				if(menuAnimationsSetting == "on") {
					vertexclientpenavigatormenu.setAnimationStyle(android.R.style.Animation_Translucent);
				}
                vertexclientpenavigatormenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, navigatortpopx, navigatortpopy);

            } catch(error) {
                print("Error: " + error);
				VertexClientPE.showBugReportDialog(error);
            }
        }
    });
}*/

function changeColor(view) {
	if(view != null) {
		view.setColorFilter(new android.graphics.LightingColorFilter(android.graphics.Color.RED, 0));
	}
}

VertexClientPE.showLSD = function() {
	ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
				lsdLayout = new LinearLayout(ctx);
				lsdMenu = new widget.PopupWindow(lsdLayout, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight());
				lsdMenu.setTouchable(false);
				lsdMenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
				lsdMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
			} catch(e) {
				print(e);
			}
		}
	})
}

function showMenuButton() {
	VertexClientPE.loadMainSettings();
	var layout = new LinearLayout(ctx);
    layout.setOrientation(1);
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    menuBtn = new Button(ctx);
    menuBtn.setTextColor(android.graphics.Color.WHITE); //Color
	menuBtn.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
	menuBtn.setBackgroundDrawable(iconClientGUI);
	menuBtn.setAlpha(0.54);
	/*menuBtn.setOnKeyListener(new android.view.View.OnKeyListener() {
		onKey: function(view, keyCode, keyEvent) {
			if (KeyEvent.KEYCODE_DEL == keyCode) {
				if(keyEvent.getAction() == KeyEvent.ACTION_UP ) {
					menuBtn.performClick();
				}
				return true;
			}
			menuBtn.performClick();
			return true;
		}
	});*/
	/*menuBtn.addTextChangedListener(new android.text.TextWatcher() {
		afterTextChanged: function(s) {
			if(s.substring(s.length() - 1, s.length()) == "M") {
				menuBtn.performClick();
				menuBtn.setText("");
			}
		}
	});*/
    menuBtn.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
		if(VertexClientPE.playerIsInGame) {
			if(hacksList != null) {
				hacksList.dismiss();
			}
			GUI.dismiss();
			//mainMenu("multiplayer");
			VertexClientPE.showCombatMenu();
			VertexClientPE.showBuildingMenu();
			VertexClientPE.showMovementMenu();
			VertexClientPE.showChatMenu();
			VertexClientPE.showMiscMenu();
			//VertexClientPE.showFavMenu();
			VertexClientPE.showTopBar();
		} else {
			ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
		    widget.Toast.makeText(ctx, new android.text.Html.fromHtml("<b>Vertex Client PE</b> You need to be in game to open the menu!"), 0).show();
		}
    }
    }));
	menuBtn.setOnTouchListener(new android.view.View.OnTouchListener() {
        onTouch: function(v, event) {
            var action = event.getActionMasked();
            if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP) {
                var bNP = iconClientGUI;
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                menuBtn.setBackgroundDrawable(bNP);
                //menuBtn.setPadding(0, 0, 0, 0);
            } else {
                var bNP = iconClickedClientGUI;
                bNP.setFilterBitmap(false);
                bNP.setAntiAlias(false);
                menuBtn.setBackgroundDrawable(bNP);
                //menuBtn.setPadding(0, Math.round(menuBtn.getLineHeight() / 8), 0, 0);
            }
            return false;
        }
    });
    layout.addView(menuBtn);
     
    GUI = new widget.PopupWindow(layout, dip2px(40), dip2px(40));
    GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	if(mainButtonPositionSetting == "top-right") {
		GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
	}if(mainButtonPositionSetting == "bottom-right") {
		GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 90, 0);
	}
}

function showAccountManagerButton() {
	VertexClientPE.loadMainSettings();
	var layout = new LinearLayout(ctx);
    layout.setOrientation(1);
	var display = new android.util.DisplayMetrics();
	com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);
    var menuBtn = clientButton("A");
    menuBtn.setTextColor(android.graphics.Color.WHITE); //Color
	menuBtn.setLayoutParams(new LinearLayout.LayoutParams(display.heightPixels / 10, display.heightPixels / 10));
    menuBtn.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
	if(hacksList != null) {
		hacksList.dismiss();
	}
	GUI.dismiss();
	accountManagerGUI.dismiss();
	VertexClientPE.showAccountManager();
    }
    }));
    layout.addView(menuBtn);
     
    accountManagerGUI = new widget.PopupWindow(layout, dip2px(40), dip2px(40));
    accountManagerGUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	if(mainButtonPositionSetting == "top-right") {
		accountManagerGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 90, 0);
	}if(mainButtonPositionSetting == "bottom-right") {
		accountManagerGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
	}
}

VertexClientPE.clientTick = function() {
    ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler()
                .postDelayed(new java.lang.Runnable({
                    run: function() {
						try{
							if(GUI != null && GUI.isShowing() == false && (vertexclientpemiscmenu == null || vertexclientpemiscmenu.isShowing() == false) && (settingsMenu == null || settingsMenu.isShowing() == false) && (informationMenu == null || informationMenu.isShowing() == false) && (accountManager == null || accountManager.isShowing() == false)) {
								VertexClientPE.isRemote = true;
								net.zhuoweizhang.mcpelauncher.ScriptManager.isRemote = true;
								net.zhuoweizhang.mcpelauncher.ScriptManager.setLevelFakeCallback(true, false);
							}
						}catch(e) {
							print("Use BlockLauncher v1.12.2 or above!");
							ModPE.log(e);
						}
						if(GUI != null && GUI.isShowing() == false && (vertexclientpemiscmenu == null || vertexclientpemiscmenu.isShowing() == false) && (settingsMenu == null || settingsMenu.isShowing() == false) && (informationMenu == null || informationMenu.isShowing() == false) && (accountManager == null || accountManager.isShowing() == false)) {
							VertexClientPE.isRemote = true;
							showMenuButton();
						}
						if(!VertexClientPE.playerIsInGame) {
							if(hacksList != null) {
								if(hacksList.isShowing()) {
									hacksList.dismiss();
								}
							}
						}
                        eval(VertexClientPE.clientTick());
                    }
                }), 1000 / 70);
        }
    }))
}

VertexClientPE.specialTick = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler()
                .postDelayed(new java.lang.Runnable({
                    run: function() {
						if(VertexClientPE.playerIsInGame) {
							if(delaySpammerState) {
								VertexClientPE.delaySpammer();
							}
						}
                        eval(VertexClientPE.specialTick());
                    }
                }), 1000 * spamDelayTime);
        }
    }))
}

VertexClientPE.secondTick = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            new android.os.Handler()
                .postDelayed(new java.lang.Runnable({
                    run: function() {
						VertexClientPE.modules.forEach(function(element, index, array) {
							if(element.isStateMod() && element.state && element.onInterval) {
								element.onInterval();
							}
						});
                        eval(VertexClientPE.secondTick());
                    }
                }), 1000);
        }
    }))
}

VertexClientPE.lsdTick = function() {
	var lsdTime = Math.floor((Math.random() * 3) + 1);
	ctx.runOnUiThread(new java.lang.Runnable({
        run: function() {
            /*new android.os.Handler()
                .postDelayed(new java.lang.Runnable({
                    run: function() {*/
						if(VertexClientPE.playerIsInGame && lsdMenu != null) {
							//if(lsdState) {
								var randomLsd = Math.floor((Math.random() * 4) + 1);
								if(randomLsd == 1) {
									lsdMenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
								} if(randomLsd == 2) {
									lsdMenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
								} if(randomLsd == 3) {
									lsdMenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));
								} if(randomLsd == 4) {
									lsdMenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.YELLOW));
								}
							//}
						}
                        /*eval(VertexClientPE.lsdTick());
                    }
                }), 1000 * 1);*/
        }
    }))
}
 
function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

var hacksList;
var statesTextView;
var musicTextView;

var enabledHacksCounter = 0;

var musicText = "None";

function showHacksList() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					var display = new android.util.DisplayMetrics();
					com.mojang.minecraftpe.MainActivity.currentMainActivity.get().getWindowManager().getDefaultDisplay().getMetrics(display);

					enabledHacksCounter = 0;
					
                    var hacksListLayout = new LinearLayout(ctx);
                    hacksListLayout.setOrientation(LinearLayout.HORIZONTAL);
                    hacksListLayout.setGravity(android.view.Gravity.CENTER_VERTICAL);
					
					var hacksListLayoutLeft = new LinearLayout(ctx);
					hacksListLayoutLeft.setOrientation(1);
					hacksListLayoutLeft.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 15));
					hacksListLayout.addView(hacksListLayoutLeft);
					
					var hacksListLayoutRight = new LinearLayout(ctx);
					hacksListLayoutRight.setOrientation(1);
					hacksListLayoutRight.setLayoutParams(new android.view.ViewGroup.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 15));
					hacksListLayout.addView(hacksListLayoutRight);
					
					var logo2 = android.util.Base64.decode(logoImage, 0);
					logoViewer2 = new widget.ImageView(ctx);
					logoViewer2.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(logo2, 0, logo2.length));
					logoViewer2.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth() / 4, ctx.getWindowManager().getDefaultDisplay().getWidth() / 16));

					var VertexClientPEHacksListText = "Vertex Client PE " + VertexClientPE.getVersion("current");
					var statesText = "";
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(element.isStateMod() && element.state) {
							if(enabledHacksCounter != 0) {
								statesText += " - "
							}
							statesText += element.name;
							enabledHacksCounter++;
						}
					});
					
					statesTextView = clientTextView(statesText, true);
					if(hacksListModeSetting == "on") {
						statesTextView.setText(statesText);
					} else if(hacksListModeSetting == "counter") {
						statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
					}
					musicTextView = clientTextView("♫ Currently playing: " + musicText, true);
					
                    statesTextView.setTextSize(15);
					statesTextView.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					statesTextView.setMarqueeRepeatLimit(-1);
					statesTextView.setSingleLine();
					statesTextView.setHorizontallyScrolling(true);
					statesTextView.setSelected(true);
					musicTextView.setTextSize(15);
					musicTextView.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
					musicTextView.setMarqueeRepeatLimit(-1);
					musicTextView.setSingleLine();
					musicTextView.setHorizontallyScrolling(true);
					musicTextView.setSelected(true);
                    hacksListLayoutLeft.addView(logoViewer2);
                    hacksListLayoutRight.addView(statesTextView);
                    hacksListLayoutRight.addView(musicTextView);
                    hacksList = new widget.PopupWindow(hacksListLayout, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getWidth() / 15);
                    hacksList.setBackgroundDrawable(backgroundGradient(true));
                    hacksList.setTouchable(false);
					if(hacksListModeSetting != "off") {
						hacksList.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
					}
                } catch(error) {
                    print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

function updateHacksList() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
					enabledHacksCounter = 0;
					
					var statesText = "";
					VertexClientPE.modules.forEach(function (element, index, array) {
						if(element.isStateMod() && element.state) {
							if(enabledHacksCounter != 0) {
								statesText += " - "
							}
							statesText += element.name;
							enabledHacksCounter++;
						}
					});
					
					statesTextView.setText(statesText);
					if(hacksListModeSetting == "on") {
						statesTextView.setText(statesText);
					} else if(hacksListModeSetting == "counter") {
						statesTextView.setText(enabledHacksCounter.toString() + " mods enabled");
					}
					musicTextView.setText("♫ Currently playing: " + musicText);
                } catch(error) {
                    print('An error occurred: ' + error);
					VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

VertexClientPE.stealChestContent = function(x, y, z) {
	var itemSlot = 0;
	new android.os.Handler()
		.postDelayed(new java.lang.Runnable({
			run: function() {
				var itemId = Level.getChestSlot(x, y, z, itemSlot);
				var itemCount = Level.getChestSlotCount(x, y, z, itemSlot);
				var itemData = Level.getChestSlotData(x, y, z, itemSlot);
				if(itemId != 0) {
					Level.setChestSlot(x, y, z, itemSlot, 0, 0, 0);
					Player.addItemInventory(itemId, itemCount, itemData);
				}
				itemSlot++;
			}
		}), 1000);
}

VertexClientPE.showChestUI = function(x, y, z) {
	ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                var chestLayout = new LinearLayout(ctx);
                var chestStealButton = clientButton("Steal");
				chestStealButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg) {
						VertexClientPE.stealChestContent(x, y, z);
					}
				}));
                chestLayout.addView(chestStealButton);
                chestUI = new widget.PopupWindow(chestLayout, dip2px(40), dip2px(40));
                chestUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                chestUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
            }
     }));
}

VertexClientPE.hideChestUI = function() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			chestUI.dismiss();
		}
	}));
}

function setupDone() {
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var doneLayout = new LinearLayout(ctx);
			var doneButton = new Button(ctx);
			doneButton.setText("✓");//Text
			doneButton.getBackground().setColorFilter(android.graphics.Color.parseColor("#008000"), android.graphics.PorterDuff.Mode.MULTIPLY);
			doneButton.setTextColor(android.graphics.Color.WHITE);
			doneButton.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					themeSetting = setupColor;
					VertexClientPE.saveMainSettings();
					VertexClientPE.editCopyrightText();
					doneUI.dismiss(); //Close
					setupScreen.dismiss();
					showMenuButton();
					//showAccountManagerButton();
				}
			}));
			doneLayout.addView(doneButton);
			
			doneUI = new widget.PopupWindow(doneLayout, dip2px(40), dip2px(40));
			doneUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			doneUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		} catch(exception) {
			print(exception);
			VertexClientPE.showBugReportDialog(exception);
		}
    }}));
}
	
function exit() {
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var xLayout = new LinearLayout(ctxe);
    var xButton = new Button(ctxe);
    xButton.setText("X");//Text
    xButton.getBackground().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
    xButton.setTextColor(android.graphics.Color.WHITE);
    xButton.setOnClickListener(new android.view.View.OnClickListener({
	    onClick: function(viewarg){
			topBar.dismiss();
			showingMenu = false;
	        vertexclientpecombatmenu.dismiss(); //Close
	        vertexclientpebuildingmenu.dismiss(); //Close
	        vertexclientpemovementmenu.dismiss(); //Close
	        vertexclientpechatmenu.dismiss(); //Close
	        vertexclientpemiscmenu.dismiss(); //Close
	        //vertexclientpefavmenu.dismiss(); //Close
			showMenuButton();
			showHacksList();
	    }
    }));
    xLayout.addView(xButton);
	
    var moreLayout = new LinearLayout(ctxe);
    var moreButton = clientButton("...", "Opens the \"More\" menu");
	moreButton.setCornerRadius(20);
    moreButton.setTextColor(android.graphics.Color.WHITE);
    moreButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
		VertexClientPE.showMoreDialog();
    }
    }));
    moreLayout.addView(moreButton);
	
    exitUI = new widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
    exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	
	moreUI = new widget.PopupWindow(moreLayout, dip2px(40), dip2px(40));
    moreUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    moreUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
    }catch(exception){
    print(exception);
	VertexClientPE.showBugReportDialog(exception);
    }
    }}));
    }
	
function exitSettings(){
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var xSettingsLayout = new LinearLayout(ctxe);
    var xSettingsButton = new Button(ctxe);
    xSettingsButton.setText('X');//Text
    xSettingsButton.getBackground().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
    xSettingsButton.setTextColor(android.graphics.Color.WHITE);
    xSettingsButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    exitSettingsUI.dismiss(); //Close
    settingsMenu.dismiss(); //Close
	showMenuButton();
	showHacksList();
    }
    }));
    xSettingsLayout.addView(xSettingsButton);
	
    exitSettingsUI = new widget.PopupWindow(xSettingsLayout, dip2px(40), dip2px(40));
    exitSettingsUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    exitSettingsUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
    }catch(exception){
    print(exception);
	VertexClientPE.showBugReportDialog(exception);
    }
    }}));
}

function exitInformation(){
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var xInformationLayout = new LinearLayout(ctxe);
    var xInformationButton = new Button(ctxe);
    xInformationButton.setText('X');//Text
    xInformationButton.getBackground().setColorFilter(android.graphics.Color.parseColor("#FF0000"), android.graphics.PorterDuff.Mode.MULTIPLY);
    xInformationButton.setTextColor(android.graphics.Color.WHITE);
    xInformationButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    exitInformationUI.dismiss(); //Close
    informationMenu.dismiss(); //Close
	showMenuButton();
	showHacksList();
    }
    }));
    xInformationLayout.addView(xInformationButton);
	
    exitInformationUI = new widget.PopupWindow(xInformationLayout, dip2px(40), dip2px(40));
    exitInformationUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    exitInformationUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
    }catch(exception){
    print(exception);
	VertexClientPE.showBugReportDialog(exception);
    }
    }}));
}
	
/*function destroyBlock(x, y, z, side) {
    var data = Level.getData(x, y, z);
    var tile = Level.getTile(x, y, z);
    var gamemode = Level.getGameMode();
    if(gamemode == 0) {
        if(stackDropState == true) {
            if(tile == 1 && getCarriedItem() == 270 || tile == 1 && getCarriedItem() == 257 || tile == 1 && getCarriedItem() == 274 || tile == 1 && getCarriedItem() == 278 || tile == 1 && getCarriedItem() == 285 || tile == 4 && getCarriedItem() == 270 || tile == 4 && getCarriedItem() == 257 || tile == 4 && getCarriedItem() == 274 || tile == 4 && getCarriedItem() == 278 || tile == 4 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 4, 63);
            } else if(tile == 1 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 4 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 4, 64);
            }
            if(tile == 2 || tile == 3) {
                Level.dropItem(x, y, z, 0.5, 3, 63);
            }
            if(tile == 5 || tile == 6 || tile == 12 || tile == 13) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 14 && getCarriedItem() == 257 || tile == 14 && getCarriedItem() == 278 || tile == 14 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 14, 63);
            } else if(tile == 14 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 14, 64);
            }
            if(tile == 15 && getCarriedItem() == 257 || tile == 15 && getCarriedItem() == 274 || tile == 15 && getCarriedItem() == 278 || tile == 15 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 15, 63);
            } else if(tile == 15 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 15, 64);
            }
            if(tile == 16 && getCarriedItem() == 270 || tile == 16 && getCarriedItem() == 257 || tile == 16 && getCarriedItem() == 274 || tile == 16 && getCarriedItem() == 278 || tile == 16 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 263, 63);
            } else if(tile == 16 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 263, 64);
            }
            if(tile == 17) {
                Level.dropItem(x, y, z, 0.5, 17, 63, data);
            }
            if(tile == 18 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 18, 63);
            } else if(tile == 18 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 18, 64);
            }
            if(tile == 19 || tile == 20) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 21 && getCarriedItem() == 257 || tile == 21 && getCarriedItem() == 274 || tile == 21 && getCarriedItem() == 278 || tile == 21 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 21, 63);
            } else if(tile == 21 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 21, 64);
            }
            if(tile == 22 && getCarriedItem() == 257 || tile == 22 && getCarriedItem() == 274 || tile == 22 && getCarriedItem() == 278 || tile == 22 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 22, 63);
            } else if(tile == 22 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 22, 64);
            }
            if(tile == 24 && getCarriedItem() == 270 || tile == 24 && getCarriedItem() == 257 || tile == 24 && getCarriedItem() == 274 || tile == 24 && getCarriedItem() == 278 || tile == 24 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 24, 63);
            } else if(tile == 24 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 24, 64);
            }
            if(tile == 26) {
                Level.dropItem(x, y, z, 0.5, 26, 63, data);
            }
            if(tile == 27 && getCarriedItem() == 270 || tile == 27 && getCarriedItem() == 257 || tile == 27 && getCarriedItem() == 274 || tile == 27 && getCarriedItem() == 278 || tile == 27 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 27, 63);
            } else if(tile == 27 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 27, 64);
            }
            if(tile == 30 && getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, 287, 63);
            } else if(tile == 30 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, 287, 64);
            }
            if(tile == 31 && getCarriedItem() == 359 || tile == 32 & getCarriedItem() == 359) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            } else if(tile == 31 && getCarriedItem() != 359 || tile == 32 && getCarriedItem() != 359) {
                Level.dropItem(x, y, z, 0.5, tile, 64, data);
            }
            if(tile == 37 || tile == 38 || tile == 39 || tile == 40) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 41 && getCarriedItem() == 257 || tile == 41 && getCarriedItem() == 278 || tile == 41 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 41, 63);
            } else if(tile == 41 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 41, 64);
            }
            if(tile == 42 && getCarriedItem() == 257 || tile == 42 && getCarriedItem() == 274 || tile == 42 && getCarriedItem() == 278 || tile == 42 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 42, 63);
            } else if(tile == 42 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 42, 64);
            }
            if(tile == 44 && getCarriedItem() == 257 || tile == 44 && getCarriedItem() == 270 || tile == 44 && getCarriedItem() == 274 || tile == 44 && getCarriedItem() == 278 || tile == 44 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 44, 63);
            } else if(tile == 44 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 44, 64);
            }
            if(tile == 45 && getCarriedItem() == 270 || tile == 45 && getCarriedItem() == 257 || tile == 45 && getCarriedItem() == 274 || tile == 45 && getCarriedItem() == 278 || tile == 45 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 45, 63);
            } else if(tile == 45 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 45, 64);
            }
            if(tile == 47) {
                Level.dropItem(x, y, z, 0.5, 340, 61);
            }
            if(tile == 48 && getCarriedItem() == 270 || tile == 48 && getCarriedItem() == 257 || tile == 48 && getCarriedItem() == 274 || tile == 48 && getCarriedItem() == 278 || tile == 48 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 48, 63);
            } else if(tile == 48 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 48, 64);
            }
            if(tile == 49 && getCarriedItem() == 278 || tile == 246 && getCarriedItem() == 278) {
                Level.dropItem(x, y, z, 0.5, 49, 63);
            } else if(tile == 49 && getCarriedItem() != 278 || tile == 246 && getCarriedItem() != 278) {
                Level.dropItem(x, y, z, 0.5, 49, 64);
            }
            if(tile == 50 || tile == 53 || tile == 54) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 56 && getCarriedItem() == 257 || tile == 57 && getCarriedItem() == 257 || tile == 56 && getCarriedItem() == 278 || tile == 57 && getCarriedItem() == 278 || tile == 56 && getCarriedItem() == 285 || tile == 57 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            } else if(tile == 56 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285 || tile == 57 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, tile, 64);
            }
            if(tile == 61 && getCarriedItem() == 270 || tile == 61 && getCarriedItem() == 257 || tile == 61 && getCarriedItem() == 274 || tile == 61 && getCarriedItem() == 278 || tile == 61 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 61, 63);
            } else if(tile == 61 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 61, 64);
            }
            if(tile == 63 || tile == 64 || tile == 65 || tile == 66) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 67 && getCarriedItem() == 270 || tile == 67 && getCarriedItem() == 257 || tile == 67 && getCarriedItem() == 274 || tile == 67 && getCarriedItem() == 278 || tile == 67 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 67, 63);
            } else if(tile == 67 && getCarriedItem() != 270 && getCarriedItem() != 257 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 67, 64);
            }
            if(tile == 73 && getCarriedItem() == 257 || tile == 73 && getCarriedItem() == 278 || tile == 73 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 331, 63);
            } else if(tile == 73 && getCarriedItem() != 257 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 331, 64);
            }
            if(tile == 78 && getCarriedItem() == 256 || tile == 78 && getCarriedItem() == 269 || tile == 78 && getCarriedItem() == 273 || tile == 78 && getCarriedItem() == 277 || tile == 78 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 63);
            } else if(tile == 78 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if(tile == 80 && getCarriedItem() == 256 || tile == 80 && getCarriedItem() == 269 || tile == 80 && getCarriedItem() == 273 || tile == 80 && getCarriedItem() == 277 || tile == 80 && getCarriedItem() == 284) {
                Level.dropItem(x, y, z, 0.5, 332, 60);
            } else if(tile == 80 && getCarriedItem() != 256 && getCarriedItem() != 269 && getCarriedItem() != 273 && getCarriedItem() != 277 && getCarriedItem() != 284) {
                Level.dropItem(x, y, z, 0.5, 332, 64);
            }
            if(tile == 81 || tile == 82 || tile == 83 || tile == 85 || tile == 86 || tile == 89 || tile == 91 || tile == 96 || tile == 102 || tile == 107) {
                Level.dropItem(x, y, z, 0.5, tile, 63);
            }
            if(tile == 87 && getCarriedItem() == 257 || tile == 87 && getCarriedItem() == 270 || tile == 87 && getCarriedItem() == 274 || tile == 87 && getCarriedItem() == 278 || tile == 87 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 87, 63);
            } else if(tile == 87 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 87, 64);
            }
            if(tile == 98 && getCarriedItem() == 257 || tile == 98 && getCarriedItem() == 270 || tile == 98 && getCarriedItem() == 274 || tile == 98 && getCarriedItem() == 278 || tile == 98 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 98, 63);
            } else if(tile == 98 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 98, 64);
            }
            if(tile == 101 && getCarriedItem() == 257 || tile == 101 && getCarriedItem() == 270 || tile == 101 && getCarriedItem() == 274 || tile == 101 && getCarriedItem() == 278 || tile == 101 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 101, 63);
            } else if(tile == 101 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 101, 64);
            }
            if(tile == 103) {
                Level.dropItem(x, y, z, 0.5, 360, 57);
            }
            if(tile == 108 && getCarriedItem() == 257 || tile == 108 && getCarriedItem() == 270 || tile == 108 && getCarriedItem() == 274 || tile == 108 && getCarriedItem() == 278 || tile == 108 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 108, 63);
            } else if(tile == 108 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 108, 64);
            }
            if(tile == 109 && getCarriedItem() == 257 || tile == 109 && getCarriedItem() == 270 || tile == 109 && getCarriedItem() == 274 || tile == 109 && getCarriedItem() == 278 || tile == 109 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 109, 63);
            } else if(tile == 109 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 109, 64);
            }
            if(tile == 112 && getCarriedItem() == 257 || tile == 112 && getCarriedItem() == 270 || tile == 112 && getCarriedItem() == 274 || tile == 112 && getCarriedItem() == 278 || tile == 112 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 112, 63);
            } else if(tile == 112 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 112, 64);
            }
            if(tile == 114 && getCarriedItem() == 257 || tile == 114 && getCarriedItem() == 270 || tile == 114 && getCarriedItem() == 274 || tile == 114 && getCarriedItem() == 278 || tile == 114 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 114, 63);
            } else if(tile == 114 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 114, 64);
            }
            if(tile == 128 && getCarriedItem() == 257 || tile == 128 && getCarriedItem() == 270 || tile == 128 && getCarriedItem() == 274 || tile == 128 && getCarriedItem() == 278 || tile == 128 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 128, 63);
            } else if(tile == 128 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 128, 64);
            }
            if(tile == 134 || tile == 135 || tile == 136 || tile == 158 || tile == 170 || tile == 171 || tile == 245 || tile == 247) {
                Level.dropItem(x, y, z, 0.5, tile, 63, data);
            }
            if(tile == 139 && getCarriedItem() == 257 || tile == 139 && getCarriedItem() == 270 || tile == 139 && getCarriedItem() == 274 || tile == 139 && getCarriedItem() == 278 || tile == 139 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 139, 63);
            } else if(tile == 139 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 139, 64);
            }
            if(tile == 155 && getCarriedItem() == 257 || tile == 155 && getCarriedItem() == 270 || tile == 155 && getCarriedItem() == 274 || tile == 155 && getCarriedItem() == 278 || tile == 155 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 155, 63);
            } else if(tile == 155 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 155, 64);
            }
            if(tile == 156 && getCarriedItem() == 257 || tile == 156 && getCarriedItem() == 270 || tile == 156 && getCarriedItem() == 274 || tile == 156 && getCarriedItem() == 278 || tile == 156 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 156, 63);
            } else if(tile == 156 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 156, 64);
            }
            if(tile == 173 && getCarriedItem() == 257 || tile == 173 && getCarriedItem() == 270 || tile == 173 && getCarriedItem() == 274 || tile == 173 && getCarriedItem() == 278 || tile == 173 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 173, 63);
            } else if(tile == 173 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 173, 64);
            }
            if(tile == 244 && getCarriedItem() == 257 || tile == 244 && getCarriedItem() == 270 || tile == 244 && getCarriedItem() == 274 || tile == 244 && getCarriedItem() == 278 || tile == 244 && getCarriedItem() == 285) {
                Level.dropItem(x, y, z, 0.5, 457, 63);
            } else if(tile == 244 && getCarriedItem() != 257 && getCarriedItem() != 270 && getCarriedItem() != 274 && getCarriedItem() != 278 && getCarriedItem() != 285) {
                Level.dropItem(x, y, z, 0.5, 457, 64);
            }
            if(tile == 250) {
                Level.dropItem(x, y, z, 0, 247, 64);
            }
        }
    }
}*/

function blockEventHook(x, y, z, e, d) {
	if(VertexClientPE.isDevMode()) {
		if(d == 1) {
			if(chestUI == null || !chestUI.isShowing()) {
				VertexClientPE.showChestUI(x, y, z);
			}
		} if(d == 0) {
			if(chestUI != null) {
				VertexClientPE.hideChestUI();
			}
		}
	}
}
 
//End
