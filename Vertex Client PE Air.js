/**
 * ##################################################################################################
 * @name Vertex Client PE
 * @version v1.9
 * @author peacestorm (@AgameR_Modder)
 * @credits _TXMO, MyNameIsTriXz, Godsoft029, ArceusMatt, LPMG, Astro36
 *
 * Thanks to NoCopyrightSounds and all artists for the music!
 *
 * Warning! You're not allowed to copy ANY code without permission from the Vertex development team!
 * Especially RJxModz is not allowed to copy anything!
 *
 * ##################################################################################################
 */

// #############
// # CONSTANTS #
// #############
// Underbar(_) is for preventing duplicate variables such as java.lang.String and String(Javascript)

const AlarmManager_ = android.app.AlarmManager,
    AlertDialog_ = android.app.AlertDialog,
    DownloadManager_ = android.app.DownloadManager,
    Dialog_ = android.app.Dialog,
    Notification_ = android.app.Notification,
    PendingIntent_ = android.app.PendingIntent,
    Context_ = android.content.Context,
    DialogInterface_ = android.content.DialogInterface,
    Intent_ = android.content.Intent,
    Bitmap_ = android.graphics.Bitmap,
    BitmapFactory_ = android.graphics.BitmapFactory,
    Canvas_ = android.graphics.Canvas,
    Color_ = android.graphics.Color,
    BitmapDrawable_ = android.graphics.drawable.BitmapDrawable,
    ColorDrawable_ = android.graphics.drawable.ColorDrawable,
    GradientDrawable_ = android.graphics.drawable.GradientDrawable,
    ScaleDrawable_ = android.graphics.drawable.ScaleDrawable,
    LightingColorFilter_ = android.graphics.LightingColorFilter,
    Paint_ = android.graphics.Paint,
    PixelFormat_ = android.graphics.PixelFormat,
    Point_ = android.graphics.Point,
    PorterDuff_ = android.graphics.PorterDuff,
    Typeface_ = android.graphics.Typeface,
    MediaPlayer_ = android.media.MediaPlayer,
    Uri_ = android.net.Uri,
    Build_ = android.os.Build,
    Environment_ = android.os.Environment,
    Handler_ = android.os.Handler,
    SystemClock_ = android.os.SystemClock,
    PreferenceManager_ = android.preference.PreferenceManager,
    TextToSpeech_ = android.speech.tts.TextToSpeech,
    ViewPager_ = android.support.v4.view.ViewPager,
    Html_ = android.text.Html,
    InputType_ = android.text.InputType,
    TextUtils_ = android.text.TextUtils,
    TextWatcher_ = android.text.TextWatcher,
    Base64_ = android.util.Base64,
    DisplayMetrics_ = android.util.DisplayMetrics,
    TypedValue_ = android.util.TypedValue,
    AlphaAnimation_ = android.view.animation.AlphaAnimation,
    RotateAnimation_ = android.view.animation.RotateAnimation,
    DecelerateInterpolator_ = android.view.animation.DecelerateInterpolator,
    LinearInterpolator_ = android.view.animation.LinearInterpolator,
    Gravity_ = android.view.Gravity,
    MotionEvent_ = android.view.MotionEvent,
    View_ = android.view.View,
    ViewGroup_ = android.view.ViewGroup,
    Window_ = android.view.Window,
    WebChromeClient_ = android.webkit.WebChromeClient,
    WebView_ = android.webkit.WebView,
    WebViewClient_ = android.webkit.WebViewClient,
    Button_ = android.widget.Button,
    CheckBox_ = android.widget.CheckBox,
    CompoundButton_ = android.widget.CompoundButton,
	FrameLayout_ = android.widget.FrameLayout,
    GridLayout_ = android.widget.GridLayout,
    ImageView_ = android.widget.ImageView,
    LinearLayout_ = android.widget.LinearLayout,
    PopupWindow_ = android.widget.PopupWindow,
    SeekBar_ = android.widget.SeekBar,
    ScrollView_ = android.widget.ScrollView,
    Switch_ = android.widget.Switch,
    TableLayout_ = android.widget.TableLayout,
    TableRow_ = android.widget.TableRow,
    TextView_ = android.widget.TextView,
    Toast_ = android.widget.Toast,
    ScriptManager_ = com.mcbox.pesdk.mcpelauncher.ScriptManager,
    HardwareInformation_ = com.mojang.minecraftpe.HardwareInformation,
    MainActivity_ = com.mojang.minecraftpe.MainActivity,
    BufferedReader_ = java.io.BufferedReader,
    File_ = java.io.File,
    FileInputStream_ = java.io.FileInputStream,
    FileOutputStream_ = java.io.FileOutputStream,
    FileReader_ = java.io.FileReader,
    InputStreamReader_ = java.io.InputStreamReader,
    OutputStreamWriter_ = java.io.OutputStreamWriter,
    PrintWriter_ = java.io.PrintWriter,
    Byte_ = java.lang.Byte,
    Character_ = java.lang.Character,
    Float_ = java.lang.Float,
    Integer_ = java.lang.Integer,
    Array_ = java.lang.reflect.Array,
    Runnable_ = java.lang.Runnable,
    String_ = java.lang.String,
    StringBuilder_ = java.lang.StringBuilder,
    System_ = java.lang.System,
    Thread_ = java.lang.Thread,
    URL_ = java.net.URL,
    Locale_ = java.util.Locale,
    ScriptManager__ = net.zhuoweizhang.mcpelauncher.ScriptManager,
    MainMenuOptionsActivity_ = net.zhuoweizhang.mcpelauncher.ui.MainMenuOptionsActivity,
    JSONArray_ = org.json.JSONArray,
    JSONObject_ = org.json.JSONObject,
    CONTEXT = MainActivity_.currentMainActivity.get(),
    GITHUB_URL = "https://github.com/Vertex-Client/Vertex-Client.github.io/raw/master/",
    PATH = "/sdcard/games/com.mojang/";

var ScrollView = android.widget.ScrollView;
var EditText = android.widget.EditText;
var SeekBar = android.widget.SeekBar;
var KeyEvent = android.view.KeyEvent;
var Scanner = java.util.Scanner;
var ByteBuffer = java.nio.ByteBuffer;
var FloatBuffer = java.nio.FloatBuffer;
var ByteOrder = java.nio.ByteOrder;
var ShortBuffer = java.nio.ShortBuffer;
var GLSurfaceView = android.opengl.GLSurfaceView;
var Renderer = GLSurfaceView.Renderer;
var GLU = android.opengl.GLU;
var GL10 = javax.microedition.khronos.opengles.GL10;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var Gravity = android.view.Gravity;

/* try {
	CONTEXT.setTitle("Vertex Client PE");
} catch(e) {
	print(e);
} */

/**
 * ##########
 *  SETTINGS
 * ##########
 */
 
var hacksListModeSetting = "on";
var mainButtonPositionSetting = "top-left";
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
var tapNukerRange = 3;
var menuType = "normal";
var chestTracersRange = 10;
var tabGUIModeSetting = "on";
var chestTracersGroundMode = "on";
var chestTracersParticle = "flame";
var antiLagDropRemoverSetting = "off";
var useLightThemeSetting = "off";
var buttonStyleSetting = "normal";
var mcpeGUISetting = "default";
var chestESPRange = 25;
var transparentBgSetting = "on";
var aimbotUseKillauraRange = "off";
var screenshotModeSetting = "default";
var killToMorphSetting = "off";
var fontSetting = "default";
var showMoneyToastsSetting = "on";
var mainButtonStyleSetting = "normal";
var webBrowserStartPageSetting = "https://google.com/";
var backgroundStyleSetting = "normal";
var modButtonColorBlockedSetting = "red";
var modButtonColorEnabledSetting = "green";
var modButtonColorDisabledSetting = "white";
var arrowGunMode = "slow";
var cmdPrefix = ".";
var commandsSetting = "on";
var shortcutSizeSetting = 32;
var aimbotRangeSetting = 4;
var speedHackFriction = 0.1;
var remoteViewTeleportSetting = "off";
var switchGamemodeSendCommandSetting = "off";
var betterPauseSetting = "off";
var shortcutUIHeightSetting = 3;
var mainButtonTapSetting = "menu";
//------------------------------------
var combatName = "Combat";
var buildingName = "Building";
var movementName = "Movement";
var chatName = "Chat";
var miscName = "Misc";
//End of settings

var modButtonColorBlocked = Color_.RED;
var modButtonColorEnabled = Color_.GREEN;
var modButtonColorDisabled = Color_.WHITE;

var display = new DisplayMetrics_();
CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
var size = new Point_();
CONTEXT.getWindowManager().getDefaultDisplay().getRealSize(size);
var screenWidth = size.x;
var screenHeight = size.y;

var topBarHeight = screenHeight / 10;

var customHeight = topBarHeight / 2;

var sharedPref = CONTEXT.getPreferences(CONTEXT.MODE_PRIVATE);
var editor = sharedPref.edit();

var Launcher = {
    isBlockLauncher: function() {
        return (CONTEXT.getPackageName() == "net.zhuoweizhang.mcpelauncher" || CONTEXT.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
    },
    isToolbox: function() {
        return CONTEXT.getPackageName() == "io.mrarm.mctoolbox";
    },
    isMcpeMaster: function() {
        return CONTEXT.getPackageName() == "com.mcbox.pesdkb.mcpelauncher";
    }
};

var ScreenType = {
    start_screen: "start_screen",
    hud: "hud_screen",
    ingame: "in_game_play_screen",
    survival_inv: "survival_inventory_screen",
    creative_inv: "creative_inventory_screen",
    pause_screen: "pause_screen",
    options_screen: "options_screen"
};

function Vector3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.Distance = function (vector2) {
        var deltax = this.x - vector2.x;
        var deltaz = this.z - vector2.z;
        var deltay = this.y - vector2.y;
        var distance = Math.sqrt(deltax * deltax + deltay * deltay + deltaz * deltaz);
        return distance;
    };
    this.updatePosition = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
    this.getDistanceVector = function (vector) {
        return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    };
    this.moveAlongPoint = function (otherVector, factor) {
        var distanceVector = this.getDistanceVector(otherVector);
        var newPoint = new Vector3(distanceVector.x * factor + this.x, distanceVector.y * factor + this.y, distanceVector.z * factor + this.z);
        return newPoint;
    };
    this.getNormalizedVector = function () {
        return new Vector3((this.x / this.getLength()), (this.y / this.getLength()), (this.z / this.getLength()));
    };
    this.getLength = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    this.add = function (vector) {
        return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    };
    this.multiplyWithNumber = function (num) {
        return new Vector3(this.x * num, this.y * num, this.z * num);
    };
    this.moveAlongDirectionalVector = function (dirvector, distance) {
        var normalizedVector = dirvector.getNormalizedVector();
        return this.add(normalizedVector.multiplyWithNumber(distance));
    };
    this.getYAngle = function () {
        var scalarprod = (this.y) / (this.getLength() * (new Vector3(0, 1, 0)).getLength());
        return Math.acos(scalarprod);
    };
    this.compare = function (vector) {
        if (Math.round(this.x) === Math.round(vector.x) && Math.round(this.y) === Math.round(vector.y) && Math.round(this.z) === Math.round(vector.z)) {
            return true;
        }
        return false;
    };
}

function VectorMathMCPE() {
    this.getDirectionalVectorFromEntity = function(ent){
        var mathPitch = ((Entity.getPitch(ent) + 90) * Math.PI) / 180;
        var mathYaw  = ((Entity.getYaw(ent) + 90)  * Math.PI) / 180;
        return new Vector3((Math.sin(mathPitch) * Math.cos(mathYaw)), (Math.cos(mathPitch)), (Math.sin(mathPitch) * Math.sin(mathYaw)));
    }
    this.extendPlayerFacing = function (distance) {
        var dirVector = this.getDirectionalVectorFromEntity(Player.getEntity());
        var playerPos = new Vector3(Player.getX(), Player.getY(), Player.getZ());
        var newPosition = playerPos.moveAlongDirectionalVector(dirVector, distance);
        return newPosition;
    }
}

function VectorLib() {
	this.getTile = function (vector, id, data) {
        Level.getTile(vector.x, vector.y, vector.z);
    }
    this.setTile = function (vector, id, data) {
        Level.setTile(vector.x, vector.y, vector.z, id, data);
    }
    this.setPlayerPos = function(position){
        Entity.setPosition(Player.getEntity(), position.x, position.y, position.z);
    }
	this.getCoordsInFrontOfEnt = function(ent) {
		var yaw = Entity.getYaw(ent);
		var pitch = Entity.getPitch(ent);
		yaw *= Math.PI / 180;
		pitch *= Math.PI / 180 * -1;

		var x = Math.cos(yaw) * Math.cos(pitch);
		var y = Math.sin(pitch);
		var z = Math.sin(yaw) * Math.cos(pitch);
		
		return new Vector3(Entity.getX(ent) + x, Entity.getY(ent) + y, Entity.getZ(ent) + z);
	}
	this.getTileInFrontOfEnt = function(ent) {
		var vector = this.getCoordsInFrontOfEnt(ent);
		return getTile(vector.x, vector.y, vector.z);
	}
}

var currentScreen = ScreenType.start_screen;

function screenChangeHook(screenName) {
    if(screenName == ScreenType.hud || screenName == ScreenType.ingame) {
        if((hacksList == null || !hacksList.isShowing()) && !VertexClientPE.menuIsShowing) {
            showHacksList();
        }
    } else {
        if(hacksList != null) {
            CONTEXT.runOnUiThread(new Runnable_({
                run: function() {
                    hacksList.dismiss();
                }
            }));
        }
		if(screenName == ScreenType.start_screen) {
			if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
				VertexClientPE.showStartScreenBar();
			}
		} else {
			if(mainMenuTextList != null) {
				if(mainMenuTextList.isShowing()) {
					CONTEXT.runOnUiThread(new Runnable_({
						run: function() {
							mainMenuTextList.dismiss();
						}
					}));
				}
			}
		}
    }
	if(screenName == ScreenType.pause_screen) {
		VertexClientPE.isPaused = true;
		if(!VertexClientPE.menuIsShowing) {
			showPauseUtilities();
		}
	} else if(currentScreen == ScreenType.pause_screen) {
		if(screenName != ScreenType.options_screen) {
			VertexClientPE.isPaused = false;
		}
		if(pauseUtilitiesUI != null) {
			if(pauseUtilitiesUI.isShowing()) {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						pauseUtilitiesUI.dismiss();
					}
				}));
			}
		}
	}
	currentScreen = screenName;
}

// ####################
// # CLIENT FUNCTIONS #
// ####################

//Don't copy anything without my permission!

String.prototype.replaceAll = function (target, replacement, insensitive) {
    if (insensitive) {
        return this.replace(new RegExp(target.replace(/[\\\^\$\.\[\]\|\(\)\?\*\+\{\}\-]/g, ""), "gi"), replacement);
    } else {
        return this.split(target).join(replacement);
    }
};

Array.prototype.getRandomElement = function() {
	return this[Math.floor(Math.random() * this.length)];
}

var isSupported = true;
var isAuthorized = true;

var oldYaw = 0;
var newYaw = 0;

var VertexClientPE = {
    name: "Vertex Client PE",
    getName: function() {
        return VertexClientPE.name;
    },
    author: "peacestorm",
    isDevMode: function() {
        return sharedPref.getBoolean("VertexClientPE.isDevMode", false);
    },
	isDebugMode: function() {
        return sharedPref.getBoolean("VertexClientPE.isDebugMode", false);
    },
	isExpMode: function() {
        return sharedPref.getBoolean("VertexClientPE.isExpMode", false);
    },
	setIsDevMode: function(bool) {
		editor.putBoolean("VertexClientPE.isDevMode", bool);
		editor.commit();
	},
	setIsDebugMode: function(bool) {
		editor.putBoolean("VertexClientPE.isDebugMode", bool);
		editor.commit();
	},
	setIsExpMode: function(bool) {
		editor.putBoolean("VertexClientPE.isExpMode", bool);
		editor.commit();
	},
    isSupported: function() {
        return isSupported;
    },
    accounts: new JSONArray_(),
    customTiles: new JSONArray_(),
    currentWorld: {
        deathX: -1,
        deathY: -1,
        deathZ: -1
    },
    latestReleaseDownloadCount: null,
    Utils: {
        chests: [],
        fov: 70,
        fps: 0,
        world: {
            chatMessages: []
        },
		takeScreenshot: function(mode) {
			var now = new java.util.Date();
			android.text.format.DateFormat.format("yyyy-MM-dd_hh:mm:ss", now);
			var mPath = Environment_.getExternalStorageDirectory().toString() + "/" + now;
			
			switch(mode) {
				case "noGui": {
					ModPE.takeScreenshot(mPath + ".png");
					VertexClientPE.toast(mPath + ".png");
					break;
				} default: {
					try {
						// create bitmap screen capture
						var v1 = CONTEXT.getWindow().getDecorView();
						v1.setDrawingCacheEnabled(true);
						var bm = v1.getDrawingCache();
						var imageFile = new File_(mPath + ".png");
						var outputStream = new FileOutputStream_(imageFile);
						var quality = 100;
						var bitmapDrawable = new BitmapDrawable_(bm);
						bm.compress(Bitmap_.CompressFormat.PNG, quality, outputStream);

						outputStream.flush();
					} catch (e) {
						// Several error may come out with file handling or OOM
						//e.printStackTrace();
						print("@" + e.lineNumber + ": " + e);
					} finally {
						outputStream.close();
					}
					break;
				}
			}
		}
    },
    CombatUtils: {
		aimAt: function(x, y, z) {
            // Credits to Godsoft0329 aka the developer of DragOP
            var velocity = 1;
            var posX = x - Player.getX();
            var posY = y - Player.getY();
            var posZ = z - Player.getZ();
            var realYaw = (Math.atan2(posZ, posX) * 180 / Math.PI) - 90;
            var y2 = Math.sqrt(posX * posX + posZ * posZ);
            var g = 0.007;
            var tmp = (velocity * velocity * velocity * velocity - g * (g * (y2 * y2) + 2 * posY * (velocity * velocity)));
            var pitch = -(180 / Math.PI) * (Math.atan((velocity * velocity - Math.sqrt(tmp)) / (g * y2)));
			
            if(pitch < 89 && pitch > -89) {

                /* imYannic's code */

                oldYaw = newYaw;
                newYaw = realYaw;

                var dist = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2) + Math.pow(posZ, 2));

                yaw = realYaw+(newYaw - oldYaw) * (dist*dist/dist)/(120/45);

                Entity.setRot(getPlayerEnt(), yaw, pitch);

                /* ---- */
            }
        },
        aimAtEnt: function(ent) {
            // Credits to Godsoft0329 aka the developer of DragOP
			if(Entity.getEntityTypeId(ent) == EntityType.PLAYER && Entity.getNameTag(ent) == "") return;
            var x = Entity.getX(ent);
            var y = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) : Entity.getY(ent) + 1;
            var z = Entity.getZ(ent);
            this.aimAt(x, y, z);
        },
		aimAtBlock: function(x, y, z) {
			y += 1;
			this.aimAt(x, y, z);
		}
    }
};

VertexClientPE.menuIsShowing = false;
VertexClientPE.isPaused = false;

VertexClientPE.trailsMode = "off";

VertexClientPE.setWebbrowserStartPage = function(url) {
	editor.putString("VertexClientPE.webBrowser.startPage", url);
	editor.commit();
}

VertexClientPE.getWebbrowserStartPage = function() {
	return sharedPref.getString("VertexClientPE.webBrowser.startPage", "https://google.com/");
}

VertexClientPE.Utils.loadChests = function() {
    VertexClientPE.Utils.chests = [];
    try {
        var x = getPlayerX();
        var y = getPlayerY();
        var z = getPlayerZ();
        var newX;
        var newY;
        var newZ;
        for(var blockX = - chestESPRange; blockX <= chestESPRange; blockX++) {
            for(var blockY = - chestESPRange; blockY <= chestESPRange; blockY++) {
                for(var blockZ = - chestESPRange; blockZ <= chestESPRange; blockZ++) {
                    newX = x + blockX;
                    newY = y + blockY;
                    newZ = z + blockZ;
                    if(getTile(newX, newY, newZ) == 54) {
                        VertexClientPE.Utils.chests.push({
                            x: newX,
                            y: newY,
                            z: newZ
                        });
                    }
                }
            }
        }
    } catch(e) {
        //an error occured
    } finally {
        VertexClientPE.toast("Successfully (re)loaded chests!");
    }
}

VertexClientPE.Utils.getChests = function() {
    return VertexClientPE.Utils.chests;
}

var _0x199a=["\x69\x73\x50\x72\x6F","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x50\x72\x6F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x73\x65\x74\x49\x73\x50\x72\x6F","\x54\x68\x69\x73\x49\x73\x53\x70\x61\x72\x74\x61"];VertexClientPE[_0x199a[0]]=function(){var _0xf36dx1=CONTEXT[_0x199a[1]](CONTEXT.MODE_PRIVATE);return _0xf36dx1[_0x199a[3]](_0x199a[2],null)};VertexClientPE[_0x199a[4]]=function(){var _0xf36dx2=_0x199a[5];return _0xf36dx2}

var _0xda74=["\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x74\x72\x75\x65"];VertexClientPE[_0xda74[0]]= function(){var _0xdb22x1=CONTEXT[_0xda74[1]](CONTEXT.MODE_PRIVATE);if(_0xdb22x1[_0xda74[3]](_0xda74[2],null)== _0xda74[4]){return true}else {return false}}

var _0xb21b=["\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x49\x6E\x74"];VertexClientPE[_0xb21b[0]]= function(){var _0x602dx1=CONTEXT[_0xb21b[1]](CONTEXT.MODE_PRIVATE);var _0x602dx2=_0x602dx1[_0xb21b[3]](_0xb21b[2],0);return _0x602dx2}

var _0xe844=["\x67\x69\x76\x65\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x67\x65\x74\x50\x72\x65\x66\x65\x72\x65\x6E\x63\x65\x73","\x65\x64\x69\x74","\x67\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x68\x61\x73\x45\x61\x72\x6E\x65\x64\x50\x72\x6F\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x74\x72\x75\x65","\x70\x75\x74\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6D\x6D\x69\x74","\x69\x73\x44\x65\x76\x4D\x6F\x64\x65","\x47\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68","\x41\x6C\x72\x65\x61\x64\x79\x20\x67\x61\x76\x65\x20\x70\x72\x6F\x20\x63\x61\x73\x68"];VertexClientPE[_0xe844[0]]= function(){if(!VertexClientPE[_0xe844[1]]()){var _0x3b1cx1=CONTEXT[_0xe844[2]](CONTEXT.MODE_PRIVATE);var _0x3b1cx2=_0x3b1cx1[_0xe844[3]]();var _0x3b1cx3=VertexClientPE[_0xe844[4]]();_0x3b1cx2[_0xe844[6]](_0xe844[5],_0x3b1cx3+ 500);_0x3b1cx2[_0xe844[9]](_0xe844[7],_0xe844[8]);_0x3b1cx2[_0xe844[10]]();if(VertexClientPE[_0xe844[11]]()){print(_0xe844[12])}}else {if(VertexClientPE[_0xe844[11]]()){print(_0xe844[13])}}}

var _0xc116=["\x73\x65\x74\x56\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x76\x65\x72\x74\x65\x78\x43\x61\x73\x68","\x70\x75\x74\x49\x6E\x74","\x63\x6F\x6D\x6D\x69\x74"];VertexClientPE[_0xc116[0]]= function(_0x5824x1){editor[_0xc116[2]](_0xc116[1],_0x5824x1);editor[_0xc116[3]]()}

VertexClientPE.isRemote = function() {
	return Server.getAddress() != null;
}

VertexClientPE.playerIsInGame = false;

VertexClientPE.currentVersion = "1.9";
VertexClientPE.currentVersionDesc = "The ? Update";
VertexClientPE.targetVersion = "MCPE v0.16.x alpha";
VertexClientPE.minVersion = "0.16.0";
VertexClientPE.edition = "Air";
VertexClientPE.latestVersion;
VertexClientPE.latestVersionDesc;

var latestPocketEditionVersion;
var news;

var menuBtn;
var logoViewer2;

var setupColor = "green";

var f = 0;

try {
	VertexClientPE.defaultFont = (Build_.VERSION.SDK_INT > 16)?Typeface_.create("sans-serif-thin", Typeface_.NORMAL):Typeface_.DEFAULT;
	VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
	VertexClientPE.tileFont = Launcher.isBlockLauncher()?new Typeface_.createFromAsset(CONTEXT.getAssets(), "fonts/SegoeWP.ttf"):VertexClientPE.defaultFont;
} catch(e) {
	print("@" + e.lineNumber + ": " + e);
}

VertexClientPE.getDeviceName = function() {
    var manufacturer = Build_.MANUFACTURER;
    var model = Build_.MODEL;
    if (model.startsWith(manufacturer)) {
        return model;
    } else {
        return manufacturer + " " + model;
    }
}

var tts = new TextToSpeech_(CONTEXT, new TextToSpeech_.OnInitListener({
    onInit: function(status) {
        tts.setLanguage(Locale_.US);
    }
}));

//########################################################################################################################################################
// Minecraft Button Library
//########################################################################################################################################################

// Library version: 2.1.0
// Made by Dennis Motta, also known as Desno365
// https://github.com/Desno365/Minecraft-Button-Library

/*
	The MIT License (MIT)

	Copyright (c) 2015 Dennis Motta 

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

var MinecraftButtonLibrary = {};

//########## CUSTOMIZATION VARIABLES ##########
// These are the default values of the library, you can change them to make the buttons look how you want to.
MinecraftButtonLibrary.defaultButtonTextSize = 16; // size of the text
MinecraftButtonLibrary.defaultButtonPadding = 8; // empty space between borders of the button and the text
MinecraftButtonLibrary.defaultButtonTextLineSpacing = 4; // empty space between every line of text (can be seen only when the text gets displayed with 2 or more lines)
MinecraftButtonLibrary.shouldDisplayPaddingAnimationWhenPressed = true; // when true the text is moved down a bit when pressed
MinecraftButtonLibrary.defaultButtonTextColor = "#FFDDDDDD";
MinecraftButtonLibrary.defaultButtonTextPressedColor = "#FFFFFF9C";
MinecraftButtonLibrary.defaultButtonTextShadowColor = "#FF393939";
MinecraftButtonLibrary.defaultButtonTextPressedShadowColor = "#FF3E3E28";
//########## CUSTOMIZATION VARIABLES - END ##########


//########## GLOBAL VARIABLES ##########
MinecraftButtonLibrary.Resources = {};
MinecraftButtonLibrary.ProcessedResources = {};

MinecraftButtonLibrary.context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
MinecraftButtonLibrary.metrics = new android.util.DisplayMetrics();
MinecraftButtonLibrary.context.getWindowManager().getDefaultDisplay().getMetrics(MinecraftButtonLibrary.metrics);
MinecraftButtonLibrary.sdcard = new android.os.Environment.getExternalStorageDirectory();
MinecraftButtonLibrary.LOG_TAG = "Minecraft Button Library ";

MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;
MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = null;
MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = null;
//########## GLOBAL VARIABLES -  END ##########



//########################################################################################################################################################
// LIBRARY
//########################################################################################################################################################

// MinecraftButton(int textSize, bool enableSound, string customTextColor)
// set an argument null if you want to use the default value
function MinecraftButton(textSize, enableSound, customTextColor)
{
	// textSize is the size of the text, enableSound is a boolean that when sets to true makes the button do a sound when pressed, customTextColor is the string of the color

	if(textSize == null)
		textSize = MinecraftButtonLibrary.defaultButtonTextSize;
	if(enableSound == null)
		enableSound = true;
	if(customTextColor == null)
		customTextColor = MinecraftButtonLibrary.defaultButtonTextColor;

	var button = new android.widget.Button(MinecraftButtonLibrary.context);
	button.setTextSize(textSize);
	button.setOnTouchListener(new android.view.View.OnTouchListener()
	{
		onTouch: function(v, motionEvent)
		{
			MinecraftButtonLibrary.onTouch(v, motionEvent, enableSound, customTextColor);
			return false;
		}
	});
	if (android.os.Build.VERSION.SDK_INT >= 14) // 4.0 and up
		button.setAllCaps(false);
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTag(false); // is pressed?
	button.setSoundEffectsEnabled(false);
	button.setGravity(android.view.Gravity.CENTER);
	button.setTextColor(android.graphics.Color.parseColor(customTextColor));
	button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
	MinecraftButtonLibrary.addMinecraftStyleToTextView(button, MinecraftButtonLibrary.defaultButtonTextShadowColor, MinecraftButtonLibrary.defaultButtonTextLineSpacing);

	return button;
}

// ######### TEXTVIEW UTILS functions #########
// use this function on your textview (or subclasses) to apply a Minecraft style on it
MinecraftButtonLibrary.addMinecraftStyleToTextView = function(textview, shadowColor, lineSpacing)
{
	// shadowColor is the string of the color, lineSpacing is the empty space between multiple lines in pixels (it will be converted in dp later)
	// NOTE: you must set the text size before calling this function!

	if(lineSpacing == null)
		lineSpacing = MinecraftButtonLibrary.defaultButtonTextLineSpacing;
	if(shadowColor == null)
		shadowColor = MinecraftButtonLibrary.defaultButtonTextShadowColor;

	textview.setTypeface(MinecraftButtonLibrary.ProcessedResources.font);
	textview.setPaintFlags(textview.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
	textview.setLineSpacing(MinecraftButtonLibrary.convertDpToPixel(lineSpacing), 1);
	MinecraftButtonLibrary.setShadowToMinecraftFont(textview, shadowColor, lineSpacing);
}

MinecraftButtonLibrary.setShadowToMinecraftFont = function(textview, shadowColor, lineSpacing)
{
	if(lineSpacing == null)
		lineSpacing = MinecraftButtonLibrary.defaultButtonTextLineSpacing;

	if (android.os.Build.VERSION.SDK_INT >= 19) // 4.4 and up
		textview.setShadowLayer(1, Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), android.graphics.Color.parseColor(shadowColor));
	else
		textview.setShadowLayer(0.0001, Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), Math.round((textview.getLineHeight() - MinecraftButtonLibrary.convertDpToPixel(lineSpacing)) / 8), android.graphics.Color.parseColor(shadowColor));
}
// ######### TEXTVIEW UTILS functions - END #########


// ######### BUTTON UTILS functions #########
MinecraftButtonLibrary.setButtonBackground = function(button, background)
{
	if (android.os.Build.VERSION.SDK_INT >= 16) // 4.1 and up
		button.setBackground(background);
	else
		button.setBackgroundDrawable(background);
}

MinecraftButtonLibrary.convertDpToPixel = function(dp)
{
	var density = MinecraftButtonLibrary.metrics.density;
	return (dp * density);
}

MinecraftButtonLibrary.onTouch = function(v, motionEvent, enableSound, customTextColor)
{
	if(enableSound == null)
		enableSound = true;
	if(customTextColor == null)
		customTextColor = MinecraftButtonLibrary.defaultButtonTextColor;
	
	var action = motionEvent.getActionMasked();
	if(action == android.view.MotionEvent.ACTION_DOWN)
	{
		// button pressed
		MinecraftButtonLibrary.changeToPressedState(v);
	}
	if(action == android.view.MotionEvent.ACTION_CANCEL || action == android.view.MotionEvent.ACTION_UP)
	{
		// button released
		MinecraftButtonLibrary.changeToNormalState(v, customTextColor);
		
		var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
		if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
		{
			// onClick will run soon

			// play sound
			if(enableSound)
				Level.playSoundEnt(Player.getEntity(), "random.click", 100, 0);
		}
	}
	if(action == android.view.MotionEvent.ACTION_MOVE)
	{
		var rect = new android.graphics.Rect(v.getLeft(), v.getTop(), v.getRight(), v.getBottom());
		if(rect.contains(v.getLeft() + motionEvent.getX(), v.getTop() + motionEvent.getY())) // detect if the event happens inside the view
		{
			// pointer inside the view
			if(v.getTag() == false)
			{
				// restore pressed state
				v.setTag(true); // is pressed?

				MinecraftButtonLibrary.changeToPressedState(v);
			}
		} else
		{
			// pointer outside the view
			if(v.getTag() == true)
			{
				// restore pressed state
				v.setTag(false); // is pressed?

				MinecraftButtonLibrary.changeToNormalState(v, customTextColor);
			}
		}
	}
}

MinecraftButtonLibrary.changeToNormalState = function(button, customTextColor)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(customTextColor));
	MinecraftButtonLibrary.setShadowToMinecraftFont(button, MinecraftButtonLibrary.defaultButtonTextShadowColor, MinecraftButtonLibrary.defaultButtonTextLineSpacing);

	// reset pressed padding
	if(MinecraftButtonLibrary.shouldDisplayPaddingAnimationWhenPressed)
		button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding));
}

MinecraftButtonLibrary.changeToPressedState = function(button)
{
	MinecraftButtonLibrary.setButtonBackground(button, MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable);
	button.setTextColor(android.graphics.Color.parseColor(MinecraftButtonLibrary.defaultButtonTextPressedColor));
	MinecraftButtonLibrary.setShadowToMinecraftFont(button, MinecraftButtonLibrary.defaultButtonTextPressedShadowColor, MinecraftButtonLibrary.defaultButtonTextLineSpacing);

	// make the effect of a pressed button with padding
	if(MinecraftButtonLibrary.shouldDisplayPaddingAnimationWhenPressed)
		button.setPadding(MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) + MinecraftButtonLibrary.convertDpToPixel(2), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding), MinecraftButtonLibrary.convertDpToPixel(MinecraftButtonLibrary.defaultButtonPadding) - MinecraftButtonLibrary.convertDpToPixel(2));
}
// ######### END - BUTTON UTILS functions #########


// ######### CREATE NINE PATCH functions #########
MinecraftButtonLibrary.createNinePatchFromRaw = function(bitmap, top, left, bottom, right)
{
	var buffer = MinecraftButtonLibrary.createNinePatchBuffer(top, left, bottom, right);
	return new android.graphics.drawable.NinePatchDrawable(MinecraftButtonLibrary.context.getResources(), bitmap, buffer.array(), new android.graphics.Rect(), "");
}

MinecraftButtonLibrary.createNinePatchBuffer = function(top, left, bottom, right)
{
	// source https://gist.github.com/briangriffey/4391807

	var NO_COLOR = 0x00000001;
	var buffer = java.nio.ByteBuffer.allocate(84).order(java.nio.ByteOrder.nativeOrder());

	//was translated
	buffer.put(0x01);

	//divx size
	buffer.put(0x02);

	//divy size
	buffer.put(0x02);

	//color size
	buffer.put(0x09);

	//skip
	buffer.putInt(0);
	buffer.putInt(0);
	
	//padding
	buffer.putInt(0);
	buffer.putInt(0);
	buffer.putInt(0);
	buffer.putInt(0);

	//skip 4 bytes
	buffer.putInt(0);

	buffer.putInt(left);
	buffer.putInt(right);
	buffer.putInt(top);
	buffer.putInt(bottom);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);
	buffer.putInt(NO_COLOR);

	return buffer;
}

MinecraftButtonLibrary.createButtonNormalNinePatch = function()
{
	var bitmap = android.graphics.Bitmap.createBitmap(MinecraftButtonLibrary.getImageFromTexturePack("images/gui/spritesheet.png"), 8, 32, 8, 8); // get only the correct image from the spritesheet
	var scaledBitmap = MinecraftButtonLibrary.scaleBitmapToSize(bitmap, MinecraftButtonLibrary.convertDpToPixel(16), MinecraftButtonLibrary.convertDpToPixel(16)); // scale image to a bigger size and based on density

	MinecraftButtonLibrary.ProcessedResources.mcNormalNineDrawable = MinecraftButtonLibrary.createNinePatchFromRaw(scaledBitmap, MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(12), MinecraftButtonLibrary.convertDpToPixel(14)); // convert to NinePatch
}

MinecraftButtonLibrary.createButtonPressedNinePatch = function()
{
	var bitmap = android.graphics.Bitmap.createBitmap(MinecraftButtonLibrary.getImageFromTexturePack("images/gui/spritesheet.png"), 0, 32, 8, 8); // get only the correct image from the spritesheet
	var scaledBitmap = MinecraftButtonLibrary.scaleBitmapToSize(bitmap, MinecraftButtonLibrary.convertDpToPixel(16), MinecraftButtonLibrary.convertDpToPixel(16)); // scale image to a bigger size and based on density

	MinecraftButtonLibrary.ProcessedResources.mcPressedNineDrawable = MinecraftButtonLibrary.createNinePatchFromRaw(scaledBitmap, MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(4), MinecraftButtonLibrary.convertDpToPixel(12), MinecraftButtonLibrary.convertDpToPixel(14)); // convert to NinePatch
}
// ######### END - CREATE NINE PATCH functions #########



MinecraftButtonLibrary.writeFileFromByteArray = function(byteArray, path)
{
	var file = new java.io.File(path);
	if(file.exists())
		file['delete']();
	file.createNewFile();
	var stream = new java.io.FileOutputStream(file);
	stream.write(byteArray);
	stream.close();
	byteArray = null;
}
// ######### END - CREATE TYPEFACE functions #########


// ######### UTILS functions #########
MinecraftButtonLibrary.getImageFromTexturePack = function(path)
{
	// note: throw error if the image wasn't found
	var bytes = ModPE.getBytesFromTexturePack(path);
	return android.graphics.BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
}

MinecraftButtonLibrary.scaleBitmapToSize = function(image, width, height, filter)
{
	if(filter == null)
		filter = false;
	return android.graphics.Bitmap.createScaledBitmap(image, Math.round(width), Math.round(height), filter);
}

MinecraftButtonLibrary.deleteFile = function(path)
{
	var file = new java.io.File(path);

	if(file.isDirectory())
	{
		var directoryFiles = file.listFiles();
		for(var i in directoryFiles)
		{
			deleteFile(directoryFiles[i].getAbsolutePath());
		}
		file['delete']();
	}

	if(file.isFile())
		file['delete']();
}
// ######### END - UTILS functions #########


//########################################################################################################################################################
// START CREATION OF RESOURCES
//########################################################################################################################################################

new java.lang.Thread(new java.lang.Runnable()
{
	run: function()
	{
		try
		{
			MinecraftButtonLibrary.createButtonNormalNinePatch();
			MinecraftButtonLibrary.createButtonPressedNinePatch();
		} catch(e)
		{
			print("Error " + e);
		}
	}
}).start();

var userIsNewToCurrentVersion = false;

var mainMenuTextList;
var GUI;
var accountManager;
var accountManagerGUI;
var backAccountManagerUI;
var exitAccountManagerUI;
var menu;
var fullScreenMenu;
var exitUI;
var exitWebBrowserUI;
var reloadWebBrowserUI;
var exitDashboardUI;
var pauseUtilitiesUI;
var vertexclientpemiscmenu;
var dashboardMenu;
var musicPlayerMenu;
var previewMenu;
var updateCenterMenu;
var shopMenu;
var settingsMenu;
var devSettingsMenu;
var helpMenu;
var addonMenu;
var milestonesMenu;
var updateCenterMenu;
var webBrowserMenu;
var playerCustomizerMenu;
var optiFineMenu;
var informationMenu;
var menuBar;
var hacksList;
var tabGUI;
var shortcutGUI;

/**
 * #########
 *  MODULES
 * #########
 */

VertexClientPE.addView = function(layout, modButtonView) {
    try {
        layout.addView(modButtonView.getLayout());
    } catch(e) {
        clientMessage("Error: " + e);
        VertexClientPE.showBugReportDialog(e);
    }
};

VertexClientPE.shopFeatures = [];

VertexClientPE.modules = [];

VertexClientPE.addons = [];

VertexClientPE.loadAddons = function() {
    if(Launcher.isBlockLauncher() || Launcher.isToolbox()) {
        ScriptManager__.callScriptMethod("addonLoadHook", []);
    }
    if(Launcher.isMcpeMaster()) {
        ScriptManager_.callScriptMethod("addonLoadHook", []);
    }
};

VertexClientPE.registerShopFeature = function(obj) {
    VertexClientPE.shopFeatures.push(obj);
};

VertexClientPE.initShopFeatures = function() {
    VertexClientPE.shopFeatures.forEach(function(element, index, array) {
        if(element.bought == "true") {
            element.onUnlock();
        }
    });
};

var inventoryPlusPlus = {
    name: "Inventory++",
    shortName: "Inventory++",
    desc: "None.",
    price: 500,
    onUnlock: function() {
        VertexClientPE.toast("Not available yet!");
    }
};

var optiFine = {
    name: "OptiFine",
    shortName: "OptiFine",
    desc: "More (mostly) performance/lag related settings.",
    price: 200,
    onUnlock: function() {
        //VertexClientPE.toast("Not available yet!");
    }
};

var playerCustomizer = {
    name: "Player Customizer",
    shortName: "PlayerCustomizer",
    desc: "A screen where you can customize your player.",
    price: 1000,
    onUnlock: function() {
        //VertexClientPE.toast("Not available yet!");
    }
};

var webBrowser = {
    name: "Webbrowser",
    shortName: "Webbrowser",
    desc: "Browse the internet within Minecraft PE.",
    price: 500,
    onUnlock: function() {
        //VertexClientPE.toast("Not available yet!");
    }
};

//VertexClientPE.registerShopFeature(inventoryPlusPlus);
VertexClientPE.registerShopFeature(optiFine);
VertexClientPE.registerShopFeature(playerCustomizer);
VertexClientPE.registerShopFeature(webBrowser);

VertexClientPE.registerModule = function(obj) {
    VertexClientPE.modules.push(obj);
};

var shownAddonProDialog = false;

function registerAddon(name, desc, current_version, target_version, mods, songs) {
    var shouldMessage = true;
    if(!VertexClientPE.isPro()) {
        if(!shownAddonProDialog) {
            VertexClientPE.showProDialog("Loading addons");
            shownAddonProDialog = true;
        }
        return;
    }
    try {
        VertexClientPE.addons.push({
            name: name,
            desc: desc,
            current_version: current_version,
            target_version: target_version
        });
        registerSongsFromAddon(songs);
    } catch(e) {
        shouldMessage = false;
        VertexClientPE.toast("An error occurred while loading addons: " + e);
    }
    
    if(shouldMessage) {
        VertexClientPE.addonLoadToast("Successfully loaded the " + name + " addon!");
    }
}

function registerSongsFromAddon(songArray) {
	if(songArray != null) {
		songArray.forEach(function (element, index, array) {
			if(element != null && element.source != null && element.source != undefined) {
				VertexClientPE.MusicUtils.registerSong(element, true);
			}
		});
	}
}

VertexClientPE.getCommandCount = function() {
    var commandCount = 0;
    VertexClientPE.modules.forEach(function(element, index, array) {
        if(element.type == "Command") {
            commandCount++;
        }
    });
    return commandCount;
};

VertexClientPE.getFeatureCount = function() {
    return VertexClientPE.modules.length;
};

function modTick() {
    VertexClientPE.playerIsInGame = true;
	if(betterPauseSetting == "on" && VertexClientPE.isPaused) {
		Entity.setVelX(getPlayerEnt(), 0);
		Entity.setVelY(getPlayerEnt(), 0);
		Entity.setVelZ(getPlayerEnt(), 0);
	}
	if(VertexClientPE.trailsMode != "off") {
		VertexClientPE.showTrails();
	}
}

function attackHook(a, v) {
    //nothing here
}

function entityHurtHook(a, v) {
    //nothing here
}

function entityAddedHook(entity) {
    //nothing here
}

function useItem(x, y, z, itemId, blockId, side, blockDamage) {
    //nothing here
}

function explodeHook(entity, x, y, z, power, onFire) {
    //nothing here
}

function projectileHitBlockHook(projectile, blockX, blockY, blockZ, side) {
    //nothing here
}

function chatReceiveHook(text, sender) {
    //nothing here
}

function textPacketReceiveHook(type, sender, message) {
    //nothing here
}

function chatHook(text) {
    if(text.startsWith(cmdPrefix) && commandsSetting == "on") {
        preventDefault();
        if(Launcher.isBlockLauncher()) {
            CONTEXT.nativeSetTextboxText("");
            CONTEXT.updateTextboxText("");
        }
        VertexClientPE.commandManager(text.substring(1, text.length));
    } else {
        if(text.charAt(0) != "/") {
            VertexClientPE.modules.forEach(function(element, index, array) {
                if(element.isStateMod() && element.state && element.onChat) {
                    if(yesCheatPlusState && element.canBypassYesCheatPlus) {
                        if(!element.canBypassYesCheatPlus()) {
                            return;
                        }
                    }
                    element.onChat(text);
                }
            });
        }
    }
}

/**
 *  ############
 *  # COMMANDS #
 *  ############
 */
 
VertexClientPE.getHighestPageNumber = function() {
    var commands = [];
    VertexClientPE.modules.forEach(function(element, index, array) {
        if(element != null && element.syntax != null && element.type == "Command") {
            commands.push(element);
        }
    });
    var i = 0;
    var page = 1;
    while(commands[i] != null) {
        i++;
        while(i > 8*page) {
            page++;
        }
    }
    return page;
}
 
VertexClientPE.showHelpPage = function(page) {
    var commands = [];
    VertexClientPE.clientMessage("Showing help page " + page + "/" + VertexClientPE.getHighestPageNumber());
    VertexClientPE.modules.forEach(function(element, index, array) {
        if(element != null && element.syntax != null && element.type == "Command") {
            commands.push(element);
        }
    });
    commands.forEach(function(element, index, array) {
        if(element.syntax != null) {
            if(index >= 8*(page-1) && index <= 8*page-1) {
                VertexClientPE.clientMessage(cmdPrefix + element.syntax);
            }
        }
    });
}

var help = {
    syntax: "help <page>",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        var commandSplit = cmd.split(" ");
        if(commandSplit[1] == undefined || commandSplit[1] == null || commandSplit[1] == "1") {
            VertexClientPE.showHelpPage("1");
        } else {
            if(commandSplit[1] != "1" && commandSplit[1] > 1 && commandSplit[1] <= VertexClientPE.getHighestPageNumber()) {
                VertexClientPE.showHelpPage(commandSplit[1]);
            } else if(commandSplit[1] <= 0) {
                VertexClientPE.clientMessage(ChatColor.RED + "Error: page number is too low!");
            } else {
                VertexClientPE.clientMessage(ChatColor.RED + "Error: page number is too high!");
            }
        }
    }
}

var say = {
    syntax: "say <message>",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        sayMsg = cmd.substring(4, cmd.length);
        Server.sendChat(sayMsg);
    }
}

var drop = {
    syntax: "drop [infinite]",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        var commandSplit = cmd.split(" ");
        try {
            if(commandSplit[1] == null || commandSplit[1] == undefined || commandSplit[1] == "infinite") {
                for(var i = 0; i <= 512; i++) {
                    p = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI) / 180;
                    y = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI) / 180;
                    xx = Math.sin(p) * Math.cos(y);
                    yy = Math.sin(p) * Math.sin(y);
                    zz = Math.cos(p);
                    Level.dropItem(Player.getX() + xx, Player.getY() + zz, Player.getZ() + yy, 1, i, 1);
                }
            } else {
                throw new SyntaxError();
            }
        } catch(e) {
            if(e instanceof SyntaxError) {
                VertexClientPE.syntaxError(".drop [infinite]");
            } else {
                VertexClientPE.showBugReportDialog(e);
            }
        }
    }
}

var give = {
    syntax: "give (<item_name|item_id>) [<amount>] [<data>]",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        var commandSplit = cmd.split(" ");
        try {
            if(commandSplit[1] != null) {
                if(Item.internalNameToId(commandSplit[1]) != null) {
                    var itemId = Item.internalNameToId(commandSplit[1]);
                } else {
                    var itemId = commandSplit[1];
                }
            } else {
                VertexClientPE.syntaxError(cmdPrefix + this.syntax);
                return;
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
                VertexClientPE.syntaxError(cmdPrefix + this.syntax);
            }
        } catch(e) {
            //syntax?
        }
    }
}

var tp = {
    syntax: "tp <x> <y> <z>",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        var commandSplit = cmd.split(" ");
        try {
            if(commandSplit[1] != null) {
                var x = commandSplit[1];
            } else {
                VertexClientPE.syntaxError(cmdPrefix + this.syntax);
                return;
            }
            if(commandSplit[2] != null) {
                var y = commandSplit[2];
            } else {
                VertexClientPE.syntaxError(cmdPrefix + this.syntax);
                return;
            }
            if(commandSplit[3] != null) {
                var z = commandSplit[3];
            } else {
                VertexClientPE.syntaxError(cmdPrefix + this.syntax);
                return;
            }
            if(getTile(x, y, z) != null) {
                Entity.setPosition(getPlayerEnt(), x, y, z);
                VertexClientPE.clientMessage(ChatColor.GREEN + "Successfully teleported player to " + x + ", " + y + ", " + z + "!");
            } else {
                VertexClientPE.syntaxError(cmdPrefix + this.syntax);
            }
        } catch(e) {
            //syntax?
        }
    }
}

var version = {
    syntax: "version <current|target|latest>",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        var commandSplit = cmd.split(" ");
        try {
            if(typeof VertexClientPE.getVersion(commandSplit[1]) !== "undefined") {
                VertexClientPE.clientMessage(VertexClientPE.getVersion(commandSplit[1]));
            } else {
                VertexClientPE.syntaxError(cmdPrefix + this.syntax);
            }
        } catch(e) {
            //syntax?
        }
    }
}

var panic_cmd = {
    syntax: "panic",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        panic.onToggle();
    }
}

var p = {
    syntax: "p",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        panic_cmd.onCall(cmd);
    }
}

var gamemode = {
    syntax: "gamemode",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        VertexClientPE.switchGameMode();
        VertexClientPE.clientMessage("Your gamemode has been updated!");
    }
}

var gm = {
    syntax: "gm",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        gamemode.onCall(cmd);
    }
}

var js = {
    syntax: "js",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        VertexClientPE.showJavascriptConsoleDialog();
    }
}

var rename = {
    syntax: "rename <name>",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
        var renameName = cmd.substring(7, cmd.length);
        var renameSlot = Player.getSelectedSlotId();
        var renameItem = Player.getInventorySlot(renameSlot);
        if(renameName  != null && renameName.replaceAll(" ", "") != "" && renameItem != 0) {
            Player.setItemCustomName(renameSlot, renameName);
            VertexClientPE.clientMessage(ChatColor.GREEN + "Successfully renamed item to " + renameName + "!");
        } else if(renameName.replaceAll(" ", "") == "") {
            VertexClientPE.clientMessage(ChatColor.RED + "Error: please enter a valid name!");
        } else if(renameItem == 0) {
            VertexClientPE.clientMessage(ChatColor.RED + "Error: the selected inventory slot is empty!");
        }
    }
}

var w = {
    syntax: "w <url>",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
		var url = cmd.split(" ")[1];
		if(url == null || url.replaceAll(" ") == null) {
			VertexClientPE.syntaxError(this.syntax);
		} else {
			ModPE.goToURL(url);
		}
    }
}

var website = {
    syntax: "website <url>",
    type: "Command",
    isStateMod: function() {
        return false;
    },
    onCall: function(cmd) {
		w.onCall(cmd);
    }
}

VertexClientPE.registerModule(help);
VertexClientPE.registerModule(drop);
VertexClientPE.registerModule(gamemode);
VertexClientPE.registerModule(give);
VertexClientPE.registerModule(gm);
VertexClientPE.registerModule(js);
VertexClientPE.registerModule(p);
VertexClientPE.registerModule(panic_cmd);
VertexClientPE.registerModule(rename);
VertexClientPE.registerModule(say);
VertexClientPE.registerModule(tp);
VertexClientPE.registerModule(version);
VertexClientPE.registerModule(w);
VertexClientPE.registerModule(website);

/**
 *  ##############
 *  # GUI & MORE #
 *  ##############
 */

VertexClientPE.showNotification = function(eventTitle, eventText) {
    var mNM = CONTEXT.getSystemService(Context_.NOTIFICATION_SERVICE);
    var notification = new Notification_(android.R.drawable.ic_menu_edit, eventText, System_.currentTimeMillis());

    // The PendingIntent to launch our activity if the user selects this
    // notification
    var contentIntent = PendingIntent_.getActivity(CONTEXT, 0, new Intent_(CONTEXT), 0);

    // Set the info for the views that show in the notification panel.
    notification.setLatestEventInfo(CONTEXT, eventTitle, eventText, contentIntent);

    // Send the notification.
    mNM.notify(eventTitle, 0, notification);
}

var imgLogo = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/vertex_logo_new.png");
var imgProLogo = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/pro_logo.png");
var imgIcon = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new.png");
var imgIconClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/clienticon_new_clicked.png");
var imgPlayButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/play_button.png");
var imgPlayButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/play_button_clicked.png");
var imgTwitterButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/twitter_button.png");
var imgTwitterButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/twitter_button_clicked.png");
var imgYouTubeButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/youtube_button.png");
var imgYouTubeButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/youtube_button_clicked.png");
var imgGitHubButton = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/github_button.png");
var imgGitHubButtonClicked = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/github_button_clicked.png");
var imgSteveHead = new BitmapFactory_.decodeFile("mnt/sdcard/games/com.mojang/stevehead.png");
var iconClientGUI = new BitmapDrawable_(imgIcon);
var iconClickedClientGUI = new BitmapDrawable_(imgIconClicked)
var playButtonClientGUI = new BitmapDrawable_(imgPlayButton);
var playButtonClickedClientGUI = new BitmapDrawable_(imgPlayButtonClicked);
var splashTwitterButtonClientGUI = new BitmapDrawable_(imgTwitterButton);
var splashTwitterButtonClickedClientGUI = new BitmapDrawable_(imgTwitterButtonClicked);
var splashYouTubeButtonClientGUI = new BitmapDrawable_(imgYouTubeButton);
var splashYouTubeButtonClickedClientGUI = new BitmapDrawable_(imgYouTubeButtonClicked);
var splashGitHubButtonClientGUI = new BitmapDrawable_(imgGitHubButton);
var splashGitHubButtonClickedClientGUI = new BitmapDrawable_(imgGitHubButtonClicked);

var getContext = function() {
    return CONTEXT;
};

ModPE.goToURL = function(url) {
    var uri = Uri_.parse(url);
    var intent = new Intent_(Intent_.ACTION_VIEW, uri);
    CONTEXT.startActivity(intent);
};

ModPE.getAndroidVersion = function() {
    return HardwareInformation_.getAndroidVersion();
}

ModPE.getPlayerName = function() {
	if(Launcher.isToolbox) {
		var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
		var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
		var read, username;
		while((read = br.readLine()) != null) {
			if(read.split(":")[0] == "mp_username") {
				username = read.split(":")[1];
				break;
			}
		}
		br.close();
		return username;
	}
	
	return Player.getName(getPlayerEnt());
};

ModPE.getFov = function() {
    var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
    var read, fov;
    while((read = br.readLine()) != null) {
        if(read.split(":")[0] == "gfx_field_of_view") {
            fov = read.split(":")[1];
            break;
        }
    }
    br.close();
    return fov;
};

ModPE.setPlayerName = function(username) {
    saveSetting("mp_username", username);
}

ModPE.changeClientId = function(clientId) {
    var fileOutputStream = new FileOutputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/clientId.txt"));
    var outputStreamWriter = new OutputStreamWriter_(fileOutputStream);
    outputStreamWriter.write(clientId.toString());
    outputStreamWriter.close();
    fileOutputStream.close();
};

ModPE.getClientId = function() {
    var file = new File_("/sdcard/games/com.mojang/minecraftpe/clientId.txt");
    var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
    var read, username;
    while((read = br.readLine()) != null) {
        username = read;
        break;
    }
    br.close();
    return username;
};

function saveSetting(article, value) {
    var fileInputStream = new FileInputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
    var inputStreamReader = new InputStreamReader_(fileInputStream);
    var bufferedReader = new BufferedReader_(inputStreamReader);
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
    var fileOutputStream = new FileOutputStream_(new File_(Environment_.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/options.txt"));
    var outputStreamWriter = new OutputStreamWriter_(fileOutputStream);
    outputStreamWriter.write(tempSaved + article + ":" + value);
    outputStreamWriter.close();
    fileOutputStream.close();
};

ModPE.getInfo = function(infoName) { //profileName, sessionId
    return PreferenceManager_.getDefaultSharedPreferences(CONTEXT).getString(infoName, null);
}

ModPE.setSession = function(sessionId) {
    MainActivity_.setSession(sessionId);
}

ModPE.playerHasSplitControls = function() {
    var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
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
    var file = new File_("/sdcard/games/com.mojang/minecraftpe/options.txt");
    var br = new BufferedReader_(new InputStreamReader_(new FileInputStream_(file)));
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

VertexClientPE.Utils.loadFov = function() {
    VertexClientPE.Utils.fov = ModPE.getFov();
}

VertexClientPE.Utils.getFov = function() {
    return VertexClientPE.Utils.fov;
}

var reportName;

VertexClientPE.showBugReportDialog = function(exception) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var bugReportTitle = clientTextView("An error occurred", true);
                var btn = clientButton("Report on GitHub");
                var btn1 = clientButton("Close");
                var inputBar = clientEditText();
                var exceptionTextView = clientTextView(exception);
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(bugReportTitle);
                dialogLayout.addView(inputBar);
                dialogLayout.addView(exceptionTextView);
                dialogLayout.addView(btn);
                dialogLayout.addView(btn1);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("An error occurred");
                inputBar.setHint("Title of the issue");
                inputBar.setTextColor(Color_.WHITE);
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        reportName = inputBar.getText();
                        ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/issues/new?title=" + reportName + "&body=" + exception);
                        dialog.dismiss();
                    }
                });
                btn1.setOnClickListener(new View_.OnClickListener() {
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

var moreMenuIsOpen = false;

VertexClientPE.showMoreDialog = function() {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
				if(moreMenuIsOpen) {
					return;
				}
				moreMenuIsOpen = true;
                var moreTitle = clientTextView("More", true);
                var moreHR = clientHR();
                var dashboardButton = clientButton("Dashboard");
				dashboardButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_dialog_dialer, 0, 0);
                var webBrowserButton = clientButton("Webbrowser");
				webBrowserButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_mapmode, 0, 0);
                var playerCustomizerButton = clientButton("Player Customizer");
				playerCustomizerButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.presence_online, 0, 0);
                var optiFineButton = clientButton("OptiFine");
				optiFineButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.ic_menu_zoom, 0, 0);
                var shopButton = clientButton("Shop");
				shopButton.setCompoundDrawablesWithIntrinsicBounds(0, android.R.drawable.stat_notify_more, 0, 0);
                var screenshotButton = clientButton("Take a screenshot");
                var dialogLayout1 = new LinearLayout_(CONTEXT);
                dialogLayout1.setBackgroundDrawable(backgroundGradient());
                dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout1.setPadding(10, 10, 10, 10);
                dialogLayout1.setGravity(Gravity_.CENTER);
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                var dialogScrollView = new ScrollView(CONTEXT);
                dialogScrollView.addView(dialogLayout);
                dialogLayout1.addView(moreTitle);
                dialogLayout1.addView(moreHR);
                dialogLayout1.addView(dialogScrollView);
                dialogLayout.addView(dashboardButton);
                if(sharedPref.getString("VertexClientPE.boughtOptiFine", "false") == "true") {
                    dialogLayout.addView(optiFineButton);
                }
                if(sharedPref.getString("VertexClientPE.boughtPlayerCustomizer", "false") == "true") {
                    dialogLayout.addView(playerCustomizerButton);
                }
                if(sharedPref.getString("VertexClientPE.boughtWebbrowser", "false") == "true") {
                    dialogLayout.addView(webBrowserButton);
                }
                dialogLayout.addView(shopButton);
				if(VertexClientPE.isExpMode()) {
					dialogLayout.addView(screenshotButton);
				}
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout1);
                dialog.setTitle("More");
				dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
                    onDismiss: function() {
						moreMenuIsOpen = false;
                    }
                });
                dialog.show();
                dashboardButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        dashboardScreen();
                        exitDashboard();
                    }
                });
                webBrowserButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        webBrowserScreen();
                        overlayWebBrowser();
                    }
                });
                playerCustomizerButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        playerCustomizerScreen();
                        exitPlayerCustomizer();
                    }
                });
                optiFineButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        optiFineScreen();
                        exitOptiFine();
                    }
                });
                shopButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        shopScreen();
                        exitShop();
                    }
                });
				screenshotButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
						new Thread_(new Runnable_() {
							run: function() {
								dialog.dismiss();
								Thread_.sleep(1000);
								VertexClientPE.Utils.takeScreenshot(screenshotModeSetting);
							}
						}).start();
                    }
                });
            } catch(e) {
                print("Error: " + e);
                VertexClientPE.showBugReportDialog(e);
            }
        }
    });
}

VertexClientPE.showSongDialog = function(song, songBtn, playBar) { //todo; remove/add song buttons from music player song layout when switching favorite
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                VertexClientPE.loadMainSettings();
				var songLayout = songBtn.getParent().getParent();
                var songTitleLayout = new LinearLayout_(CONTEXT);
                songTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
                var songTitle = clientTextView(song.title, true);
                songTitle.setTextSize(20);
                var songFavButton = new Button_(CONTEXT);
                songFavButton.setLayoutParams(new LinearLayout_.LayoutParams(64, 64));
                if(sharedPref.getString("VertexClientPE.songs." + song.title + ".isFavorite", "false") == "true") {
                    songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_on));
                } else {
                    songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_off));
                }
                songFavButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(v) {
                        if(sharedPref.getString("VertexClientPE.songs." + song.title + ".isFavorite", "false") == "true") {
                            editor.putString("VertexClientPE.songs." + song.title + ".isFavorite", "false");
                            editor.commit();
                            songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_off));
							if(currentMPTab == "Favorite") {
								songLayout = songBtn.getParent().getParent();
								songLayout.removeView(songBtn.getParent());
							}
                        } else {
                            editor.putString("VertexClientPE.songs." + song.title + ".isFavorite", "true");
                            editor.commit();
                            songFavButton.setBackgroundDrawable(CONTEXT.getResources().getDrawable(android.R.drawable.btn_star_big_on));
							if(currentMPTab == "Favorite") {
								songBtnLayout = songButton(song, playBar);
								songBtn = songBtnLayout.getChildAt(0);
								songLayout.addView(songBtnLayout);
							}
                        }
                    }
                });
				songTitleLayout.addView(songTitle);
                songTitleLayout.addView(songFavButton);
                var songArtistText = clientTextView("Artist: " + song.artist);
                var songGenreText = clientTextView("Genre: " + song.genre + "\n");
                var closeButton = clientButton("Close");
                closeButton.setPadding(0.5, closeButton.getPaddingTop(), 0.5, closeButton.getPaddingBottom());
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(songTitleLayout);
				if(song.source != null) {
                    dialogLayout.addView(clientTextView("Source: " + song.source + "\n"));
                }
				dialogLayout.addView(songArtistText);
				dialogLayout.addView(songGenreText);
				dialogLayout.addView(clientTextView("\n"));
                
                var settingsLinearLayout = new ScrollView(CONTEXT);
                settingsLinearLayout.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels, display.heightPixels / 3));
                var settingsScrollView = new ScrollView(CONTEXT);
                
                var dialogExtraLayout = new LinearLayout_(CONTEXT);
                dialogExtraLayout.setOrientation(LinearLayout_.HORIZONTAL);
                dialogLayout.addView(dialogExtraLayout);
				dialogExtraLayoutLeft = new LinearLayout_(CONTEXT);
				dialogExtraLayoutLeft.setOrientation(1);
				dialogExtraLayoutLeft.setGravity(Gravity_.CENTER);
				dialogExtraLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
				dialogExtraLayoutRight = new LinearLayout_(CONTEXT);
				dialogExtraLayoutRight.setOrientation(1);
				dialogExtraLayoutRight.setGravity(Gravity_.CENTER);
				dialogExtraLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2, display.heightPixels / 10));
				dialogExtraLayout.addView(dialogExtraLayoutLeft);
				dialogExtraLayout.addView(dialogExtraLayoutRight);
				closeButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
				dialogExtraLayoutLeft.addView(closeButton);
				var downloadButton = clientButton("Download");
				downloadButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
				downloadButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(view) {
						ModPE.goToURL(song.url);
					}
				});
				dialogExtraLayoutRight.addView(downloadButton);
				
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle(song.title);
                dialog.show();
                var window = dialog.getWindow();
                window.setLayout(display.widthPixels, display.heightPixels);
                closeButton.setOnClickListener(new View_.OnClickListener() {
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

function capitalizeColorString(string) {
    if(string == "green") {
		return "Green";
	} else if(string == "red") {
		return "Red";
	} else if(string == "blue") {
		return "Blue";
	} else if(string == "purple") {
		return "Purple";
	} else if(string == "violet") {
		return "Violet";
	} else if(string == "yellow") {
		return "Yellow";
	} else if(string == "orange") {
		return "Orange";
	} else if(string == "brown") {
		return "Brown";
	} else if(string == "grey") {
		return "Grey";
	} else if(string == "white") {
		return "White";
	} else if(string == "black") {
		return "Black";
	}
}

VertexClientPE.showTileDropDown = function(tileView, defaultName, defaultColor, defaultUseLightColor) {
	try {
		CONTEXT.runOnUiThread(new Runnable_() {
			run: function() {
				var tileDropDownLayout = new LinearLayout_(CONTEXT);
				tileDropDownLayout.setOrientation(1);
				tileDropDownLayout.setGravity(android.view.Gravity.CENTER);
				
				var currentName = sharedPref.getString("VertexClientPE.tiles." + defaultName + ".name", defaultName);
				var currentColor = sharedPref.getString("VertexClientPE.tiles." + defaultName + ".color", defaultColor);
				var currentUseLightColor = sharedPref.getBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", defaultUseLightColor);
				
				var tileDropDownEditText = clientEditText(currentName);
				tileDropDownEditText.setInputType(InputType_.TYPE_TEXT_FLAG_NO_SUGGESTIONS);
				tileDropDownEditText.addTextChangedListener(new TextWatcher_() {
                    afterTextChanged: function() {
						currentName = tileDropDownEditText.getText();
                        tileView.setText(currentName);
						editor.putString("VertexClientPE.tiles." + defaultName + ".name", currentName);
						editor.commit();
                    }
                });
				
				var tileDropDownCurrentColorButton = clientButton(capitalizeColorString(currentColor));
				tileDropDownCurrentColorButton.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(v) {
						if(currentColor == "green") {
                            currentColor = "red";
                            tileDropDownCurrentColorButton.setText("Red");
                        } else if(currentColor == "red") {
                            currentColor = "blue";
                            tileDropDownCurrentColorButton.setText("Blue");
                        } else if(currentColor == "blue") {
                            currentColor = "purple";
                            tileDropDownCurrentColorButton.setText("Purple");
                        } else if(currentColor == "purple") {
                            currentColor = "violet";
                            tileDropDownCurrentColorButton.setText("Violet");
                        } else if(currentColor == "violet") {
                            currentColor = "yellow";
                            tileDropDownCurrentColorButton.setText("Yellow");
                        } else if(currentColor == "yellow") {
                            currentColor = "orange";
                            tileDropDownCurrentColorButton.setText("Orange");
                        } else if(currentColor == "orange") {
                            currentColor = "brown";
                            tileDropDownCurrentColorButton.setText("Brown");
                        } else if(currentColor == "brown") {
                            currentColor = "grey";
                            tileDropDownCurrentColorButton.setText("Grey");
                        } else if(currentColor == "grey") {
                            currentColor = "white";
                            tileDropDownCurrentColorButton.setText("White");
                        } else if(currentColor == "white") {
                            currentColor = "black";
                            tileDropDownCurrentColorButton.setText("Black");
                        } else if(currentColor == "black") {
                            currentColor = "green";
                            tileDropDownCurrentColorButton.setText("Green");
                        }
						editor.putString("VertexClientPE.tiles." + defaultName + ".color", currentColor);
						editor.commit();
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				}));
				
				var tileDropDownUseLightColorCheckBox = new CheckBox_(CONTEXT);
				tileDropDownUseLightColorCheckBox.setChecked(currentUseLightColor);
				tileDropDownUseLightColorCheckBox.setText("Lighter color");
				if(themeSetting == "white") {
					tileDropDownUseLightColorCheckBox.setTextColor(Color_.BLACK);
				} else {
					tileDropDownUseLightColorCheckBox.setTextColor(Color_.WHITE);
				}
				tileDropDownUseLightColorCheckBox.setTypeface(VertexClientPE.font);
				
				if(fontSetting == "minecraft") {
					MinecraftButtonLibrary.addMinecraftStyleToTextView(tileDropDownUseLightColorCheckBox);
				}
				tileDropDownUseLightColorCheckBox.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						currentUseLightColor = v.isChecked();
						editor.putBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", currentUseLightColor);
						editor.commit();
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				});
				
				var tileDropDownResetButton = clientButton("Reset");
				tileDropDownResetButton.setOnClickListener(new View_.OnClickListener() {
					onClick: function(v) {
						currentName = defaultName;
						currentColor = defaultColor;
						currentUseLightColor = defaultUseLightColor;
						tileDropDownEditText.setText(currentName);
						tileDropDownCurrentColorButton.setText(capitalizeColorString(currentColor));
						tileDropDownUseLightColorCheckBox.setChecked(currentUseLightColor);
						editor.putString("VertexClientPE.tiles." + defaultName + ".name", currentName);
						editor.putString("VertexClientPE.tiles." + defaultName + ".color", currentColor);
						editor.putBoolean("VertexClientPE.tiles." + defaultName + ".useLightColor", currentUseLightColor);
						editor.commit();
						VertexClientPE.setupButton(tileView, currentName, currentColor, false, currentUseLightColor, "tile", 0.1);
					}
				});
				
				tileDropDownLayout.addView(tileDropDownEditText);
				tileDropDownLayout.addView(tileDropDownCurrentColorButton);
				tileDropDownLayout.addView(tileDropDownUseLightColorCheckBox);
				tileDropDownLayout.addView(tileDropDownResetButton);
				
				var tileDropDown = new PopupWindow_(tileDropDownLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT, true);
				tileDropDown.setWidth(LinearLayout_.LayoutParams.WRAP_CONTENT);
				tileDropDown.setHeight(LinearLayout_.LayoutParams.WRAP_CONTENT);
				tileDropDown.setBackgroundDrawable(new ColorDrawable_(Color_.BLACK));
				tileDropDown.setTouchInterceptor(new android.view.View.OnTouchListener() {
					onTouch: function(v, event) {
						if(event.getAction() == android.view.ACTION_OUTSIDE) {
							tileDropDown.dismiss();
							return true;
						}
						return false;
					}
				});
				
				//sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor)
				
				tileDropDown.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.CENTER, 0, 0);
			}
		});
	} catch(e) {
		print("@" + e.lineNumber + ": " + e);
	}
}

var accountNameInput;
var accountClientIdInput;
var accountName = "unknown";
var accountClientId = "unknown";

VertexClientPE.showAddAccountDialog = function(showBackButton) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                VertexClientPE.loadMainSettings();
                var accountTitle = clientTextView("Add account", true);
                accountNameInput = clientEditText();
                accountNameInput.setTextColor(Color_.WHITE);
                accountNameInput.setSingleLine(true);
                accountNameInput.setHint("Enter an username");
                accountClientIdInput = clientEditText();
                accountClientIdInput.setTextColor(Color_.WHITE);
                accountClientIdInput.setHint("Enter a client id (wip, added later)");
                var okButton = clientButton("Ok");
                var cancelButton = clientButton("Cancel");
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(accountTitle);
                dialogLayout.addView(accountNameInput);
                //dialogLayout.addView(accountClientIdInput);
                dialogLayout.addView(okButton);
                dialogLayout.addView(cancelButton);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("Add account");
                dialog.show();
                okButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        accountName = accountNameInput.getText().toString();
                        if(accountName == null || accountName == "" || accountName.replaceAll(" ", "") == "") {
                            VertexClientPE.toast("Enter an username!");
                            return;
                        }
                        //accountClientId = accountClientIdInput.getText().toString();
                        if(VertexClientPE.accounts.length() != undefined && VertexClientPE.accounts.length() != undefined) {
                            for(var i = 0; i < VertexClientPE.accounts.length(); i++) {
                                if(VertexClientPE.accounts.get(i) == accountName) {
                                    VertexClientPE.toast("This account already exists in your accounts list!");
                                    return;
                                }
                            }
                        }
                        VertexClientPE.accounts.put(accountName);
                        //print("\'" + accountName + "\'");
                        VertexClientPE.saveAccounts();
                        dialog.dismiss();
                        accountManager.dismiss();
						if(backAccountManagerUI != null) {
							backAccountManagerUI.dismiss();
						}
                        exitAccountManagerUI.dismiss();
                        VertexClientPE.showAccountManager(showBackButton);
                        exitAccountManager(showBackButton);
                    }
                });
                cancelButton.setOnClickListener(new View_.OnClickListener() {
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
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var dialogTitle = clientTextView("Pro");
                dialogTitle.setTextSize(25);
                var dialogDesc = clientTextView(featureName + " requires Vertex Client PE Pro!\n");
                var btn = clientButton("Get Pro for free!");
                var btn1 = clientButton("Close");
                var inputBar = clientEditText();
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(dialogTitle);
                dialogLayout.addView(dialogDesc);
                dialogLayout.addView(btn);
                dialogLayout.addView(btn1);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle(featureName + " requires Vertex Client PE Pro");
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        VertexClientPE.downloadPro();
                    }
                });
                btn1.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showUpgradeDialog = function(featureName) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var dialogTitle = clientTextView("Pro");
                dialogTitle.setTextSize(25);
                var dialogDesc = clientTextView("Hey, why not get Vertex Client PE Pro and enjoy all the features for free?");
                var btn = clientButton("Get Pro for free!");
                var btn1 = clientButton("Close");
                var inputBar = clientEditText();
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(dialogTitle);
                dialogLayout.addView(dialogDesc);
                dialogLayout.addView(btn);
                dialogLayout.addView(btn1);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("Hey, why not get Vertex Client PE Pro and enjoy all the features for free?");
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                        VertexClientPE.downloadPro();
                    }
                });
                btn1.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showAddonDialog = function(addon) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var dialogTitle = clientTextView(addon.name);
                dialogTitle.setTextSize(25);
                var dialogDescTitle = clientTextView("Description:");
                var dialogDesc = clientTextView(addon.desc);
                var dialogVersion = clientTextView("Version: " + addon.current_version);
                var dialogTargetVersion = clientTextView("Target version: " + addon.target_version);
                var btn = clientButton("Close");
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                if(addon.target_version == VertexClientPE.currentVersion) {
                    dialogTargetVersion.setTextColor(Color_.GREEN);
                } else {
                    dialogTargetVersion.setTextColor(Color_.RED);
                }
                dialogLayout.addView(dialogTitle);
                dialogLayout.addView(dialogDescTitle);
                dialogLayout.addView(dialogDesc);
                dialogLayout.addView(dialogVersion);
                dialogLayout.addView(dialogTargetVersion);
                dialogLayout.addView(btn);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle(addon.name);
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showBasicDialog = function(title, view, onDialogDismiss) {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var dialogTitle = clientTextView(title);
				dialogTitle.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
				dialogTitle.setMarqueeRepeatLimit(-1);
				dialogTitle.setSingleLine();
				dialogTitle.setHorizontallyScrolling(true);
				dialogTitle.setSelected(true);
                dialogTitle.setTextSize(25);
                var btn = clientButton("Close");
                var inputBar = clientEditText();
                var dialogLayout1 = new LinearLayout_(CONTEXT);
                var dialogScrollView = new ScrollView(CONTEXT);
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout1.setBackgroundDrawable(backgroundGradient());
                dialogLayout1.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout1.setPadding(10, 10, 10, 10);
                dialogLayout1.addView(dialogTitle);
                dialogLayout.addView(view);
                dialogScrollView.addView(dialogLayout);
                dialogLayout1.addView(dialogScrollView);
                dialogLayout1.addView(btn);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout1);
                dialog.setTitle(title);
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                    }
                });
                dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
                    onDismiss: function() {
                        if(onDialogDismiss) {
                            onDialogDismiss();
                        }
                    }
                });
            } catch(e) {
                print("Error: " + e);
                VertexClientPE.showBugReportDialog(e);
            }
        }
    });
}

VertexClientPE.showWhatsNewDialog = function() {
    VertexClientPE.showBasicDialog("What's New", clientTextView("Thanks for upgrading to v" + VertexClientPE.currentVersion + "!\nTo see what's new, please go to the Update Center.\nThe Update Center can by accessed from the 'More' dialog, which can be opened by tapping and holding the menu button."),
        function() {
            userIsNewToCurrentVersion = false;
            VertexClientPE.setHasUsedCurrentVersion(true);
        }
    );
}

var consoleInput;

VertexClientPE.showJavascriptConsoleDialog = function() {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var javascriptConsoleTitle = clientTextView("Javascript Console", true);
                var btn = clientButton("Send");
                var btn1 = clientButton("Cancel");
                var inputBar = clientEditText();
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(javascriptConsoleTitle);
                dialogLayout.addView(inputBar);
                dialogLayout.addView(btn);
                dialogLayout.addView(btn1);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("Javascript Console");
                inputBar.setHint("Javascript input");
                inputBar.setTextColor(Color_.WHITE);
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
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
                btn1.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showWebbrowserStartPageDialog = function() {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                var webBrowserStartPageDialogTitle = clientTextView("Change Webbrowser startpage", true);
                var btn = clientButton("Close");
                var inputBar = clientEditText();
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(webBrowserStartPageDialogTitle);
                dialogLayout.addView(inputBar);
                dialogLayout.addView(btn);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("Change Webbrowser startpage");
                inputBar.setHint("Webbrowser startpage");
                inputBar.setText(webBrowserStartPageSetting);
                inputBar.setTextColor(Color_.WHITE);
                dialog.show();
                inputBar.addTextChangedListener(new TextWatcher_() {
                    onTextChanged: function() {
                        webBrowserStartPageSetting = inputBar.getText();
                    }
                });
                btn.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        dialog.dismiss();
                    }
                });
                dialog.setOnDismissListener(new DialogInterface_.OnDismissListener() {
                    onDismiss: function() {
                        VertexClientPE.saveMainSettings();
                    }
                });
            } catch(e) {
                print("Error: " + e);
                VertexClientPE.showBugReportDialog(e);
            }
        }
    });
}

VertexClientPE.switchGameMode = function() {
    if(Level.getGameMode() == 0) {
        Level.setGameMode(1);
    } else if(Level.getGameMode() == 1) {
        Level.setGameMode(0);
    }
}

VertexClientPE.spectate = function(playerName) {
    var entities = Entity.getAll();
    for(var i in entities) {
        if(Player.getName(entities[i])  == playerName || Entity.getNameTag(entities[i]) == playerName) {
            ModPE.setCamera(entities[i]);
            VertexClientPE.clientMessage("You're now spectating " + playerName + "!");
            return;
        }
    }
    VertexClientPE.clientMessage("Can't find player " + playerName + "!");
}

VertexClientPE.clientMessage = function(message) {
    var clientName = VertexClientPE.getName();
    if(VertexClientPE.isPro() == "true") {
        clientName += " Pro";
    }
    clientMessage(ChatColor.RED + "[" + ChatColor.DARK_GREEN + clientName + ChatColor.RED + "] " + ChatColor.WHITE + message);
}

VertexClientPE.debugMessage = function(message) {
	clientMessage(ChatColor.GRAY + "[DEBUG] " + ChatColor.WHITE + message);
}

VertexClientPE.toast = function(message, vibrate) {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            if(vibrate || vibrate == null) {
                CONTEXT.getSystemService(Context_.VIBRATOR_SERVICE).vibrate(37);
            }
            var layout = new LinearLayout_(CONTEXT);
            layout.setBackground(backgroundGradient());
            var title = VertexClientPE.getName();
            var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
            var text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + message), 0);
            layout.addView(text);
            toast = new Toast_(CONTEXT);
			toast.setDuration(Toast_.LENGTH_LONG);
            toast.setView(layout);
            toast.show();
        }
    }));
}

VertexClientPE.addonLoadToast = function(message) {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            var layout = new LinearLayout_(CONTEXT);
            layout.setBackground(backgroundSpecial(true));
			var icon = new android.widget.ImageView(CONTEXT);
			icon.setImageResource(android.R.drawable.ic_menu_more);
            var title = VertexClientPE.getName();
            var _0xc62b=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\x20\x50\x72\x6F"];if(VertexClientPE[_0xc62b[0]]()==_0xc62b[1]){title+=_0xc62b[2]}
            var text = clientTextView(new Html_.fromHtml("<b>" + title + "</b> " + message), 0);
            layout.addView(icon);
            layout.addView(text);
            toast = new Toast_(CONTEXT);
            toast.setView(layout);
			toast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
            toast.show();
        }
    }));
}

VertexClientPE.moneyToast = function() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            var layout = new LinearLayout_(CONTEXT);
            layout.setOrientation(1);
            layout.setBackground(backgroundSpecial(16));
            var text = clientTextView("\u26C1 " + VertexClientPE.getVertexCash());
            text.setTextColor(Color_.parseColor("#FFD700"));
            text.setPadding(10, 10, 10, 10);
            layout.addView(text);
            toast = new Toast_(CONTEXT);
            toast.setView(layout);
            toast.setGravity(Gravity_.CENTER | Gravity_.TOP, 0, 0);
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
    var _0xff55=["\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x6F\x75\x74\x64\x61\x74\x65\x64\x2C\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C","\x74\x6F\x61\x73\x74","\x59\x6F\x75\x27\x76\x65\x20\x63\x61\x6D\x65\x20\x61\x63\x72\x6F\x73\x73\x20\x61\x6E\x20\x65\x64\x69\x74\x65\x64\x20\x61\x6E\x64\x20\x75\x6E\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x64\x20\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x20\x73\x63\x72\x69\x70\x74\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x20\x74\x68\x65\x20\x6F\x66\x66\x69\x63\x69\x61\x6C\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x6F\x6E\x20\x6F\x75\x72\x20\x77\x65\x62\x73\x69\x74\x65\x3A\x20\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2E\x6D\x6C"];if(!isAuthorized){if(!isSupported){VertexClientPE[_0xff55[1]](_0xff55[0])}else {VertexClientPE[_0xff55[1]](_0xff55[2])};return}
    var finished = false;
    commandSplit = cmd.split(" ");
    VertexClientPE.modules.forEach(function(element, index, array) {
        if(element.syntax != null && commandSplit[0] == element.syntax.split(" ")[0] && element.type == "Command") {
            if(element.onCall) {
				if(element.isExpMod && element.isExpMod() && !VertexClientPE.isExpMode()) {
					return;
				}
                element.onCall(cmd);
                finished = true;
                return;
            }
        }
    });
    switch(commandSplit[0]) {
        /*case "spectate": //3
            if(commandSplit[1] == null || commandSplit[1] == undefined) {
                VertexClientPE.syntaxError(".spectate <player>");
            } else {
                VertexClientPE.spectate(commandSplit[1]);
            }
            break;*/
        default:
            if(!finished) {
                VertexClientPE.clientMessage(ChatColor.RED + "Error: command \"" + cmd + "\" not found!");
            }
            break;
    }
}

var mpSongTitleView;
var mpPlayButton;
var mpCurrentPositionView;
var mpTotalDurationView;
var mpSeekBarView;
var mpLayout;

VertexClientPE.MusicUtils = {
    milliSecToMinString: function(mSec) {
        var minutes = parseInt(((mSec / (1000*60)) % 60)).toString();
        var seconds = parseInt((mSec / 1000) % 60).toString();
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ":" + seconds;
    },
    songList: [],
    tempSongList: [],
    registerSong: function(song, fromAddon) {
        try {
            if(!(song instanceof Song) && !fromAddon) {
                throw new TypeError("The registered value is not of the type Song.");
                return;
            }
            this.songList.push(song);
        } catch(e) {
            if(e instanceof TypeError) {
                VertexClientPE.toast("TypeError: " + e);
            }
        }
    },
    mp: null,
    randomMusic: null,
    playingFirstTime: true,
    isPaused: false,
    initMusicPlayer: function() {
        if(this.mp == null) {
            this.mp = new MediaPlayer_();
        }
        this.tempSongList = this.songList;
    },
    startMusicPlayer: function(song) {
        this.randomMusic = song==null?this.tempSongList[Math.floor(Math.random() * this.tempSongList.length)]:song;
        this.mp.reset();
        this.mp.setDataSource(this.randomMusic.url);
        this.mp.setOnPreparedListener(new MediaPlayer_.OnPreparedListener() {
            onPrepared: function(mp) {
                musicText = VertexClientPE.MusicUtils.randomMusic.artist + " - " + VertexClientPE.MusicUtils.randomMusic.title;
                if(hacksList != null) {
                    updateHacksList();
                }
                if(mpSongTitleView != null) {
                    mpSongTitleView.setText(musicText);
                }
                if(mpSeekBarView != null) {
                    mpSeekBarView.setMax(VertexClientPE.MusicUtils.mp.getDuration());
                }
                if(mpTotalDurationView != null) {
                    mpTotalDurationView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getDuration()));
                }
                if(mpPlayButton != null) {
                    mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
                }
                mp.start();
                if(playMusicSetting != "shuffle" && song == null && VertexClientPE.MusicUtils.playingFirstTime) {
                    mp.pause();
                    VertexClientPE.MusicUtils.isPaused = true;
                }
                VertexClientPE.MusicUtils.playingFirstTime = false;
            }
        });
        this.mp.setOnBufferingUpdateListener(new MediaPlayer_.OnBufferingUpdateListener() {
            onBufferingUpdate: function(arg0) {
                //onBufferingUpdate
            }
        })
        this.mp.setOnCompletionListener(new MediaPlayer_.OnCompletionListener() {
            onCompletion: function(arg0) {
                VertexClientPE.MusicUtils.mp.reset();
                if(VertexClientPE.MusicUtils.tempSongList.length == 0) {
                    VertexClientPE.MusicUtils.tempSongList = VertexClientPE.MusicUtils.songList;
                    VertexClientPE.MusicUtils.randomMusic = VertexClientPE.MusicUtils.tempSongList[Math.floor(Math.random() * VertexClientPE.MusicUtils.tempSongList.length)];
                    VertexClientPE.MusicUtils.mp.setDataSource(VertexClientPE.MusicUtils.randomMusic.url);
                    VertexClientPE.MusicUtils.mp.prepareAsync();
                } else {
                    if(VertexClientPE.MusicUtils.tempSongList.indexOf(VertexClientPE.MusicUtils.randomMusic) != -1) {
                        VertexClientPE.MusicUtils.tempSongList.slice(VertexClientPE.MusicUtils.randomMusic);
                        VertexClientPE.MusicUtils.randomMusic = VertexClientPE.MusicUtils.tempSongList[Math.floor(Math.random() * VertexClientPE.MusicUtils.tempSongList.length)];
                        VertexClientPE.MusicUtils.mp.setDataSource(VertexClientPE.MusicUtils.randomMusic.url);
                        VertexClientPE.MusicUtils.mp.prepareAsync();
                    }
                }
            }
        });
        
        this.mp.prepareAsync();
    }
}

function Song(songTitle, songArtist, songUrl, songGenre) {
    this.title = songTitle || "Unknown";
    this.artist = songArtist || "Unknown";
    this.genre = songGenre || "Unknown";
    this.url = songUrl;
}

VertexClientPE.MusicUtils.registerSong(new Song("Adventure (feat. Alexa Lusader)", "William Ekh", "http://files-cdn.nocopyrightsounds.co.uk/William%20Ekh%20-%20Adventure%20%28feat.%20Alexa%20Lusader%29.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Blank [NCS Release]", "Disfigure", "http://files-cdn.nocopyrightsounds.co.uk/Disfigure%20-%20Blank.mp3", "Dubstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Can't Wait (feat. Anna Yvette) [NCS Release]", "Jim Yosef", "https://www.dropbox.com/s/noz7mg1ar0n1un2/Jim%20Yosef%20-%20Can%27t%20Wait%20%28feat.%20Anna%20Yvette%29.mp3?dl=1", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Candyland [NCS Release]", "Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20-%20Candyland.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Cloud 9 [NCS Release]", "Itro & Tobu", "http://files-cdn.nocopyrightsounds.co.uk/Itro%20%26%20Tobu%20-%20Cloud%209.mp3", "House"));
VertexClientPE.MusicUtils.registerSong(new Song("Coming Home [NCS Release]", "SirensCeol", "http://files-cdn.nocopyrightsounds.co.uk/SirensCeol%20-%20Coming%20Home.mp3", "Dubstep"));
VertexClientPE.MusicUtils.registerSong(new Song("Daydreamer", "Ahxello & Alex Skrindo", "http://b1.ge.tt/gett/842vbod2/Ahxello+%26+Alex+Skrindo+-+Daydreamer.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Dusk [NCS Release]", "Tobu & Syndec", "http://files-cdn.nocopyrightsounds.co.uk/Tobu%20%26%20Syndec%20-%20Dusk.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Eclipse [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/Jim%20Yosef%20-%20Eclipse.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Entropy", "Distrion & Alex Skrindo", "http://files-cdn.nocopyrightsounds.co.uk/Distrion%20%26%20Alex%20Skrindo%20-%20Entropy.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Fall To Light [NCS Release]", "Laszlo", "http://files-cdn.nocopyrightsounds.co.uk/Laszlo%20-%20Fall%20to%20Light.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Feel Good [NCS Release]", "Syn Cole", "https://www.dropbox.com/s/mitidcr9qbyto93/Syn%20Cole%20-%20Feel%20Good%20%28Radio%20Edit%29%20%5BNCS%5D.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Firefly [NCS Release]", "Jim Yosef", "http://files-cdn.nocopyrightsounds.co.uk/jim-yosef-firefly-ncs-release.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Get Up Again (feat. Axol) [NCS Release]", "Alex Skrindo", "https://www.dropbox.com/s/0b08kt0ezlno0vb/Alex%20Skrindo%20-%20Get%20Up%20Again%20%28Feat.%20Axol%29%20%255BNCS%20Release%255D.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Halcyon [NCS Release]", "JJD", "https://www.dropbox.com/s/mx1on7w0dykslx6/JJD%20-%20Halcyon.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Hello", "OMFG", "http://b1.ge.tt/gett/1a353nd2/OMFG+-+Hello.mp3?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Invincible [NCS Release]", "DEAF KEV", "http://files-cdn.nocopyrightsounds.co.uk/DEAF%20KEV%20-%20Invincible.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("My Heart [NCS Release]", "Different Heaven & EH!DE", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20%26%20EH%21DE%20-%20My%20Heart.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Nekozilla", "Different Heaven", "http://files-cdn.nocopyrightsounds.co.uk/Different%20Heaven%20-%20Nekozilla.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Neopolitan Dreams (Nilow Remix)", "Lisa Mitchell", "http://b1.ge.tt/gett/4WKD4nd2/Lisa+Mitchell+-+Neopolitan+Dreams+%28Nilow+Rmx?index=0&user=user-ixW6scU8M6%E2%80%A6TeP06a11F-&referrer=user-ixW6scU8M6tdtVBWuAeo7oA2hZquSTeP06a11F-&download=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Nova [NCS Release]", "Ahrix", "http://files-cdn.nocopyrightsounds.co.uk/Ahrix%20-%20Nova.mp3"));
VertexClientPE.MusicUtils.registerSong(new Song("Puzzle [NCS Release]", "RetroVision", "https://www.dropbox.com/s/qb5y2bo2npczawn/RetroVision%20-%20Puzzle.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Roots [NCS Release]", "Tobu", "https://www.dropbox.com/s/a2m1fqjxaotszy5/Tobu%20-%20Roots.mp3?dl=1"));
VertexClientPE.MusicUtils.registerSong(new Song("Savannah (feat. Philly K) [NCS Release]", "Diviners", "https://www.dropbox.com/s/2t5tsjib4ihwvaq/Diviners%20-%20Savannah%20%28ft.%20Philly%20K%29.mp3?dl=0"));
VertexClientPE.MusicUtils.registerSong(new Song("Tropic Love [NCS Release]", "Diviners feat. Contacreast", "http://files-cdn.nocopyrightsounds.co.uk/Diviners%20ft.%20Contacreast%20-%20Tropic%20Love%20%28Original%20Mix%29.mp3"));

var settingsPath = Environment_.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/";
var worldsPath = Environment_.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftWorlds/";

VertexClientPE.saveAccounts = function() {
    File_(settingsPath).mkdirs();
    var newFile = new File_(settingsPath, "vertexclientpe_accounts.dat");
    newFile.createNewFile();
    var stream = new FileOutputStream_(newFile);
    try {
        stream.write(VertexClientPE.accounts.toString().getBytes());
    } finally {
        stream.close();
    }
}

VertexClientPE.loadAccounts = function() {
    try {
        if(!File_(settingsPath + "vertexclientpe_accounts.dat").exists())
            return;
        var file = new File_(settingsPath + "vertexclientpe_accounts.dat");
        var readed = (new BufferedReader_(new FileReader_(file)));
        var data = new StringBuilder_();
        var string;
        while((string = readed.readLine()) != null) {
            data.append(string);
            data.append("\n");
        }
        VertexClientPE.accounts = new JSONArray_(data.toString());
    } catch(e) {
        //error
    }
}

VertexClientPE.saveTiles = function() {
    File_(settingsPath).mkdirs();
    var newFile = new File_(settingsPath, "vertexclientpe_customtiles.dat");
    newFile.createNewFile();
    var stream = new FileOutputStream_(newFile);
    try {
        stream.write(VertexClientPE.customTiles.toString().getBytes());
    } finally {
        stream.close();
    }
}

VertexClientPE.loadTiles = function() {
    try {
        if(!File_(settingsPath + "vertexclientpe_customtiles.dat").exists())
            return;
        var file = new File_(settingsPath + "vertexclientpe_customtiles.dat");
        var readed = (new BufferedReader_(new FileReader_(file)));
        var data = new StringBuilder_();
        var string;
        while((string = readed.readLine()) != null) {
            data.append(string);
            data.append("\n");
        }
        VertexClientPE.customTiles = new JSONArray_(data.toString());
    } catch(e) {
        //error
    }
}

VertexClientPE.loadDeathCoords = function() {
    if(!File_(worldsPath + Level.getWorldDir() + "/" + "death.dat").exists())
        return;
    var file = new File_(worldsPath + Level.getWorldDir() + "/" + "death.dat");
    var fos = new FileInputStream_(file);
    var str = new StringBuilder_();
    var ch;
    while((ch = fos.read()) != -1)
        str.append(Character_(ch));
    if(str.toString().split(",")[0] != null && str.toString().split(",")[0] != undefined) {
        VertexClientPE.currentWorld.deathX = parseInt(str.toString().split(",")[0]); //Here we split text by ","
    }
    if(str.toString().split(",")[1] != null && str.toString().split(",")[1] != undefined) {
        VertexClientPE.currentWorld.deathY = parseInt(str.toString().split(",")[1]); //Here we split text by ","
    }
    if(str.toString().split(",")[2] != null && str.toString().split(",")[2] != undefined) {
        VertexClientPE.currentWorld.deathZ = parseInt(str.toString().split(",")[2]); //Here we split text by ","
    }
    fos.close();
    return true;
}

VertexClientPE.saveDeathCoords = function() {
    File_(settingsPath).mkdirs();
    var newFile = new File_(worldsPath + Level.getWorldDir() + "/" + "death.dat");
    newFile.createNewFile();
    var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
    outWrite.append(VertexClientPE.currentWorld.deathX.toString());
    outWrite.append("," + VertexClientPE.currentWorld.deathY.toString());
    outWrite.append("," + VertexClientPE.currentWorld.deathZ.toString());

    outWrite.close();
    
    VertexClientPE.saveAutoSpammerMessage();
    VertexClientPE.saveCategorySettings();
}

VertexClientPE.saveMainSettings = function() {
    File_(settingsPath).mkdirs();
    var newFile = new File_(settingsPath, "vertexclientpe.txt");
    newFile.createNewFile();
    var outWrite = new OutputStreamWriter_(new FileOutputStream_(newFile));
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
    outWrite.append("," + tapNukerRange.toString());
    outWrite.append("," + menuType.toString());
    outWrite.append("," + chestTracersRange.toString());
    outWrite.append("," + tabGUIModeSetting.toString());
    outWrite.append("," + chestTracersGroundMode.toString());
    outWrite.append("," + chestTracersParticle.toString());
    outWrite.append("," + antiLagDropRemoverSetting.toString());
    outWrite.append("," + useLightThemeSetting.toString());
    outWrite.append("," + buttonStyleSetting.toString());
    outWrite.append("," + mcpeGUISetting.toString());
    outWrite.append("," + chestESPRange.toString());
    outWrite.append("," + transparentBgSetting.toString());
    outWrite.append("," + aimbotUseKillauraRange.toString());
    outWrite.append("," + screenshotModeSetting.toString());
    outWrite.append("," + killToMorphSetting.toString());
    outWrite.append("," + fontSetting.toString());
    outWrite.append("," + showMoneyToastsSetting.toString());
    outWrite.append("," + mainButtonStyleSetting.toString());
    outWrite.append("," + webBrowserStartPageSetting.toString());
    outWrite.append("," + backgroundStyleSetting.toString());
    outWrite.append("," + modButtonColorBlockedSetting.toString());
    outWrite.append("," + modButtonColorEnabledSetting.toString());
    outWrite.append("," + modButtonColorDisabledSetting.toString());
    outWrite.append("," + arrowGunMode.toString());
    outWrite.append("," + commandsSetting.toString());
    outWrite.append("," + cmdPrefix.toString());
    outWrite.append("," + shortcutSizeSetting.toString());
    outWrite.append("," + aimbotRangeSetting.toString());
    outWrite.append("," + speedHackFriction.toString());
    outWrite.append("," + remoteViewTeleportSetting.toString());
    outWrite.append("," + switchGamemodeSendCommandSetting.toString());
    outWrite.append("," + betterPauseSetting.toString());
    outWrite.append("," + shortcutUIHeightSetting.toString());
    outWrite.append("," + mainButtonTapSetting.toString());

    outWrite.close();
}

VertexClientPE.loadMainSettings = function () {
    var file = new File_(settingsPath + "vertexclientpe.txt");
    if (file.exists()) {
        var fos = new FileInputStream_(file),
            str = new StringBuilder_(),
            ch;
        while ((ch = fos.read()) != -1) {
            str.append(Character_(ch));
        }
        var arr = str.toString().split(",");
        if (arr[0] != null && arr[0] != undefined) {
            hacksListModeSetting = arr[0]; //Here we split text by ","
        }
        if (arr[1] != null && arr[1] != undefined) {
            mainButtonPositionSetting = arr[1];
        }
        if (arr[2] != null && arr[2] != undefined) {
            healthTagsSetting = arr[2];
        }
        if (arr[3] != null && arr[3] != undefined) {
            themeSetting = arr[3];
        }
        if (arr[4] != null && arr[4] != undefined) {
            playMusicSetting = arr[4];
        }
        if (arr[5] != null && arr[5] != undefined) {
            showNewsSetting = arr[5];
        }
        if (arr[6] != null && arr[6] != undefined) {
            menuAnimationsSetting = arr[6];
        }
        if (arr[7] != null && arr[7] != undefined) {
            nukerMode = arr[7];
        }
        if (arr[8] != null && arr[8] != undefined) {
            timerSpeed = arr[8];
        }
        if (arr[9] != null && arr[9] != undefined) {
            themeSetup = arr[9];
        }
        if (arr[10] != null && arr[10] != undefined) {
            nukerRange = arr[10];
        }
        if (arr[11] != null && arr[11] != undefined) {
            killAuraRange = arr[11];
        }
        if (arr[12] != null && arr[12] != undefined) {
            spamDelayTime = arr[12];
        }
        if (arr[13] != null && arr[13] != undefined) {
            sizeSetting = arr[13];
            if (sizeSetting == "normal") {
                customHeight = topBarHeight / 2;
            } else if (sizeSetting == "small") {
                customHeight = topBarHeight;
            }
        }
        if (arr[14] != null && arr[14] != undefined) {
            tapNukerRange = arr[14];
        }
        if (arr[15] != null && arr[15] != undefined) {
            menuType = arr[15];
        }
        if (arr[16] != null && arr[16] != undefined) {
            chestTracersRange = arr[16];
        }
        if (arr[17] != null && arr[17] != undefined) {
            tabGUIModeSetting = arr[17];
        }
        if (arr[18] != null && arr[18] != undefined) {
            chestTracersGroundMode = arr[18];
        }
        if (arr[19] != null && arr[19] != undefined) {
            chestTracersParticle = arr[19];
        }
        if (arr[20] != null && arr[20] != undefined) {
            antiLagDropRemoverSetting = arr[20];
        }
        if (arr[21] != null && arr[21] != undefined) {
            useLightThemeSetting = arr[21];
        }
        if (arr[22] != null && arr[22] != undefined) {
            buttonStyleSetting = arr[22];
        }
        if (arr[23] != null && arr[23] != undefined) {
            mcpeGUISetting = arr[23];
        }
        if (arr[24] != null && arr[24] != undefined) {
            chestESPRange = arr[24];
        }
		if (arr[25] != null && arr[25] != undefined) {
            transparentBgSetting = arr[25];
        }
		if (arr[26] != null && arr[26] != undefined) {
            aimbotUseKillauraRange = arr[26];
        }
		if (arr[27] != null && arr[27] != undefined) {
            screenshotModeSetting = arr[27];
        }
		if (arr[28] != null && arr[28] != undefined) {
            killToMorphSetting = arr[28];
        }
		if (arr[29] != null && arr[29] != undefined) {
            fontSetting = arr[29];
        }
		if (arr[30] != null && arr[30] != undefined) {
            showMoneyToastsSetting = arr[30];
        }
		if (arr[31] != null && arr[31] != undefined) {
            mainButtonStyleSetting = arr[31];
        }
		if (arr[32] != null && arr[32] != undefined) {
            webbrowserStartPageSetting = arr[32];
        }
		if (arr[33] != null && arr[33] != undefined) {
            backgroundStyleSetting = arr[33];
        }
		if (arr[34] != null && arr[34] != undefined) {
            modButtonColorBlockedSetting = arr[34];
        }
		if (arr[35] != null && arr[35] != undefined) {
            modButtonColorEnabledSetting = arr[35];
        }
		if (arr[36] != null && arr[36] != undefined) {
            modButtonColorDisabledSetting = arr[36];
        }
		if (arr[37] != null && arr[37] != undefined) {
            arrowGunMode = arr[37];
        }
		if (arr[38] != null && arr[38] != undefined) {
            commandsSetting = arr[38];
        }
		if (arr[39] != null && arr[39] != undefined) {
            cmdPrefix = arr[39];
        }
		if (arr[40] != null && arr[40] != undefined) {
            shortcutSizeSetting = arr[40];
        }
		if (arr[41] != null && arr[41] != undefined) {
            aimbotRangeSetting = arr[41];
        }
		if (arr[42] != null && arr[42] != undefined) {
            speedHackFriction = arr[42];
        }
		if (arr[43] != null && arr[43] != undefined) {
            remoteViewTeleportSetting = arr[43];
        }
		if (arr[44] != null && arr[44] != undefined) {
            switchGamemodeSendCommandSetting = arr[44];
        }
		if (arr[45] != null && arr[45] != undefined) {
            betterPauseSetting = arr[45];
        }
		if (arr[46] != null && arr[46] != undefined) {
            shortcutUIHeightSetting = arr[46];
        }
		if (arr[47] != null && arr[47] != undefined) {
            mainButtonTapSetting = arr[47];
        }
        fos.close();
		VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
		MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;
		
        return true;
    }
}

VertexClientPE.resetData = function() {
	editor.clear();
	editor.commit();
	VertexClientPE.toast("Successfully reset all data!");
}

VertexClientPE.setupMCPEGUI = function() {
    VertexClientPE.loadMainSettings();
    if(mcpeGUISetting == "default") {
        ModPE.resetImages();
    }
    if(mcpeGUISetting == "green") {
        ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/BCA6vgv.png");
        ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/dY3c1Jl.png");
    }
    if(mcpeGUISetting == "red") {
        ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/BxuGkEJ.png");
        ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/S3qiQ01.png");
    }
    if(mcpeGUISetting == "blue") {
        ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/X5rCyoN.png");
        ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/t6tGtMk.png");
    }
    if(mcpeGUISetting == "purple") {
        ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/3xsluNN.png");
        ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/R9te7Bd.png");
    }
    if(mcpeGUISetting == "yellow") {
        ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/z1BGkj5.png");
        ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/RXE3pbS.png");
    }
    if(mcpeGUISetting == "white") {
        ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/GlwhFt5.png");
        ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/gsn6Qfp.png");
    }
    if(mcpeGUISetting == "black") {
        ModPE.overrideTexture("images/gui/spritesheet.png","http://i.imgur.com/l7nG7ZU.png");
        ModPE.overrideTexture("images/gui/touchgui.png","http://i.imgur.com/MZeX8XN.png");
    }
    ModPE.overrideTexture("images/gui/title.png","http://Vertex-Client.github.io/bootstrap/img/title.png");
}

VertexClientPE.setupMCPEGUI();

var createUiThread = function(func) {
    getContext().runOnUiThread(new Runnable_({
        run: function() {
            func(getContext());
        }
    }));
};

var GuiSize = TypedValue_.applyDimension(TypedValue_.COMPLEX_UNIT_DIP, 2, getContext().getResources().getDisplayMetrics());
var GetGui = function() {
    return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};
var TrimImage = function(bitmap, x, y, width, height) {
    return Bitmap_.createBitmap(bitmap, x, y, width, height);
};
var GetSpritesheet = function() {
    return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));
};
var GetTouchgui = function() {
    return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));
};
var GetGui = function() {
    return BitmapFactory_.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};

var trimImage = function(bitmap, x, y, width, height) {
    return Bitmap_.createBitmap(bitmap, x, y, width, height);
};

var getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
    var blank = Bitmap_.createBitmap(width, height, Bitmap_.Config.ARGB_8888);
    var Bitmap = Bitmap_;
    var part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
    var part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
    var part3 = Bitmap.createBitmap(bm, x + stretchWidth, 0, bm.getWidth() - x - stretchWidth, y);
    var part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
    var part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
    var part6 = Bitmap.createBitmap(bm, x + stretchWidth, y, bm.getWidth() - x - stretchWidth, stretchHeight);
    var part7 = Bitmap.createBitmap(bm, 0, y + stretchHeight, x, bm.getHeight() - y - stretchHeight);
    var part8 = Bitmap.createBitmap(bm, x, y + stretchHeight, stretchWidth, bm.getHeight() - y - stretchHeight);
    var part9 = Bitmap.createBitmap(bm, x + stretchWidth, y + stretchHeight, bm.getWidth() - x - stretchWidth, bm.getHeight() - y - stretchHeight);
    var canvas = new Canvas_(blank);
    canvas.drawBitmap(part1, 0, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part2, width - bm.getWidth() + stretchWidth, y, false), x, 0, null);
    canvas.drawBitmap(part3, width - bm.getWidth() + stretchWidth + x, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part4, x, height - bm.getHeight() + stretchHeight, false), 0, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part5, width - bm.getWidth() + stretchWidth, height - bm.getHeight() + stretchHeight, false), x, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part6, part3.getWidth(), height - bm.getHeight() + stretchHeight, false), width - bm.getWidth() + stretchWidth + x, y, null);
    canvas.drawBitmap(part7, 0, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part8, width - bm.getWidth() + stretchWidth, part7.getHeight(), false), x, height - bm.getHeight() + stretchHeight + y, null);
    canvas.drawBitmap(part9, width - bm.getWidth() + stretchWidth + x, height - bm.getHeight() + stretchHeight + y, null);

    return new BitmapDrawable_(blank);
};

VertexClientPE.setupButton = function(buttonView, text, color, round, forceLightColor, style, thickness) {
	buttonView.setText(text);
	if(color == "white") {
		buttonView.setTextColor(Color_.BLACK);
	} else {
		buttonView.setTextColor(Color_.WHITE);
	}
	buttonView.setTransformationMethod(null);
	
	if(style != "invisible") {
		var bg = GradientDrawable_();
		if(round == true) {
			bg.setCornerRadius(10);
		} else if(round != false && round != null) {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			var radius = 0;
			if(round == "left") {
				for(var i = 0; i <= 7; i++) {
					if(i == 0 || i == 1 || i == 6 || i == 7) {
						radiiFloatArray[i] = 8;
					} else {
						radiiFloatArray[i] = radius;
					}
				}
			} if(round == "right") {
				for(var i = 0; i <= 7; i++) {
					if(i == 2 || i == 3 || i == 4 || i == 5) {
						radiiFloatArray[i] = 8;
					} else {
						radiiFloatArray[i] = radius;
					}
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		}
		
		bg.setShape(GradientDrawable_.RECTANGLE);
		
		if(forceLightColor == true) {
			bg.setColor(Color_.parseColor("#00994C"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#00CC66"));
			}
		} else {
			bg.setColor(Color_.parseColor("#0B5B25"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#0F8219"));
			}
		}
		if(color == "red") {
			if(forceLightColor == true) {
				bg.setColor(Color_.parseColor("#FF3333"));
				if(style != "normal_nostrokes") {
					bg.setStroke(thickness, Color_.parseColor("#FF6666"));
				}
			} else {
				bg.setColor(Color_.parseColor("#5B0C0C"));
				if(style != "normal_nostrokes") {
					bg.setStroke(thickness, Color_.parseColor("#821010"));
				}
			}
		} if(color == "blue") {
			if(forceLightColor == true) {
				bg.setColor(Color_.parseColor("#0080FF"));
				if(style != "normal_nostrokes") {
					bg.setStroke(thickness, Color_.parseColor("#3399FF"));
				}
			} else {
				bg.setColor(Color_.parseColor("#0A175B"));
				if(style != "normal_nostrokes") {
					bg.setStroke(thickness, Color_.parseColor("#0E3882"));
				}
			}
		} if(color == "purple") {
			bg.setColor(Color_.parseColor("#9F018C"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#BC21AB"));
			}
		} if(color == "violet") {
			bg.setColor(Color_.parseColor("#842DCE"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#8D38C9"));
			}
		} if(color == "yellow") {
			bg.setColor(Color_.parseColor("#CCCC00"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#FFFF00"));
			}
		} if(color == "orange") {
			bg.setColor(Color_.parseColor("#FF8C00"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#FFA500"));
			}
		} if(color == "brown") {
			bg.setColor(Color_.parseColor("#8B4513"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#CD853F"));
			}
		} if(color == "grey") {
			bg.setColor(Color_.parseColor("#808080"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#A9A9A9"));
			}
		} if(color == "white") {
			bg.setColor(Color_.parseColor("#E1E1E1"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#FFFFFF"));
			}
		} if(color == "black") {
			bg.setColor(Color_.parseColor("#141414"));
			if(style != "normal_nostrokes") {
				bg.setStroke(thickness, Color_.parseColor("#1E1E1E"));
			}
		}
		
		if(style == "legacy") {
			bg.setColor(Color_.parseColor("#000000"));
		}
		if(style == "legacy_inverted") {
			bg.setStroke(thickness, Color_.parseColor("#000000"));
		}
		if(style == "transparent") {
			bg.setColor(Color_.TRANSPARENT);
		}
		
		buttonView.setOnTouchListener(new View_.OnTouchListener() {
			onTouch: function(v, event) {
				var action = event.getActionMasked();
				if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
					if(forceLightColor == true) {
						bg.setColor(Color_.parseColor("#00994C"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#00CC66"));
						}
					} else {
						bg.setColor(Color_.parseColor("#0B5B25"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#0F8219"));
						}
					}
					if(color == "red") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#FF3333"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#FF6666"));
							}
						} else {
							bg.setColor(Color_.parseColor("#5B0C0C"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#821010"));
							}
						}
					} if(color == "blue") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#0080FF"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#3399FF"));
							}
						} else {
							bg.setColor(Color_.parseColor("#0A175B"));
							if(style != "normal_nostrokes") {
								bg.setStroke(thickness, Color_.parseColor("#0E3882"));
							}
						}
					} if(color == "purple") {
						bg.setColor(Color_.parseColor("#9F018C"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#BC21AB"));
						}
					} if(color == "violet") {
						bg.setColor(Color_.parseColor("#842DCE"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#8D38C9"));
						}
					} if(color == "yellow") {
						bg.setColor(Color_.parseColor("#CCCC00"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#FFFF00"));
						}
					} if(color == "orange") {
						bg.setColor(Color_.parseColor("#FF8C00"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#FFA500"));
						}
					} if(color == "brown") {
						bg.setColor(Color_.parseColor("#8B4513"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#CD853F"));
						}
					} if(color == "grey") {
						bg.setColor(Color_.parseColor("#808080"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#A9A9A9"));
						}
					} if(color == "white") {
						bg.setColor(Color_.parseColor("#E1E1E1"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#FFFFFF"));
						}
					} if(color == "black") {
						bg.setColor(Color_.parseColor("#141414"));
						if(style != "normal_nostrokes") {
							bg.setStroke(thickness, Color_.parseColor("#1E1E1E"));
						}
					}
					
					if(style == "legacy") {
						bg.setColor(Color_.parseColor("#000000"));
					}
					if(style == "legacy_inverted") {
						bg.setStroke(thickness, Color_.parseColor("#000000"));
					}
					if(style == "transparent") {
						bg.setColor(Color_.TRANSPARENT);
					}
				} else {
					if(forceLightColor == true) {
						bg.setColor(Color_.parseColor("#00CC66"));
					} else {
						bg.setColor(Color_.parseColor("#0F8219"));
					}
					if(color == "red") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#FF6666"));
						} else {
							bg.setColor(Color_.parseColor("#821010"));
						}
					} if(color == "blue") {
						if(forceLightColor == true) {
							bg.setColor(Color_.parseColor("#3399FF"));
						} else {
							bg.setColor(Color_.parseColor("#0E3882"));
						}
					} if(color == "purple") {
						bg.setColor(Color_.parseColor("#BC21AB"));
					} if(color == "violet") {
						bg.setColor(Color_.parseColor("#8D38C9"));
					} if(color == "yellow") {
						bg.setColor(Color_.parseColor("#FFFF00"));
					} if(color == "orange") {
						bg.setColor(Color_.parseColor("#FFA500"));
					} if(color == "brown") {
						bg.setColor(Color_.parseColor("#CD853F"));
					} if(color == "grey") {
						bg.setColor(Color_.parseColor("#A9A9A9"));
					} if(color == "white") {
						bg.setColor(Color_.parseColor("#FFFFFF"));
					} if(color == "black") {
						bg.setColor(Color_.parseColor("#1E1E1E"));
					}
					
					if(style == "legacy_inverted") {
						bg.setColor(Color_.parseColor("#000000"));
					}
					if(style == "tile") {
						bg.setStroke(dip2px(3), Color_.parseColor("#d3d3d3"));
					}
				}
				return false;
			}
		});
		
		buttonView.setBackgroundDrawable(bg);
	} else {
		buttonView.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	}
	
    buttonView.setPaintFlags(buttonView.getPaintFlags() | Paint_.SUBPIXEL_TEXT_FLAG);
    buttonView.setTextSize(15);
    if(color == "white") {
        buttonView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
    } else {
        buttonView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
    }
}

function drawCircle(color) {
    var drawable = GradientDrawable_();
    drawable.setColor(color);
    drawable.setShape(1);
    return drawable;
}

function drawQuarterCircle(color, radius) {
    var drawable = GradientDrawable_();
    drawable.setColor(color);
    drawable.setCornerRadii([0, 0, 0, 0, 0, 0, radius, radius]);
    return drawable;
}

function fadeIn(duration) {
    var animation = new AlphaAnimation_(0, 1);
    animation.setDuration(duration);
    animation.setInterpolator(new DecelerateInterpolator_());
    return animation;
}

function fadeOut(duration) {
    var animation = new AlphaAnimation_(1, 0);
    animation.setDuration(duration);
    animation.setInterpolator(new DecelerateInterpolator_());
    return animation;
}

function rotate(duration, fromDegrees, toDegrees) {
    var animation = new RotateAnimation_(fromDegrees, toDegrees);
    animation.setDuration(duration);
    animation.setInterpolator(new LinearInterpolator_());
    return animation;
}

function clientButton(text, desc, color, round, forceLightColor, style, thickness) //menu buttons
{
	if(color == null) {
		color = themeSetting;
	}
	if(forceLightColor == null) {
		forceLightColor = useLightThemeSetting=="on";
	}
	if(style == null) {
		style = buttonStyleSetting;
	}
	if(thickness == null) {
		thickness = dip2px(2);
	}
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
    var defaultButton = new Button_(CONTEXT);
    defaultButton.setTypeface(VertexClientPE.font);
    if(desc != null && desc != undefined) {
        defaultButton.setOnLongClickListener(new View_.OnLongClickListener() {
            onLongClick: function(v, t) {
                VertexClientPE.toast(desc);
                return true;
            }
        });
    }

    VertexClientPE.setupButton(defaultButton, text, color, round, forceLightColor, style, thickness);
    defaultButton.setPadding(0, 0, 0, 0);
    defaultButton.setLineSpacing(0, 1.15);
	
	if(fontSetting == "minecraft" && style != "tile") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultButton);
	}
    return defaultButton;
}

function shopFeatureButton(shopFeature, cashTextView) {
    var shopFeatureButtonText = (sharedPref.getString("VertexClientPE.bought" + shopFeature.shortName, "false")=="true")?"Purchased":shopFeature.price.toString();
    var shopFeatureLayout = new LinearLayout_(CONTEXT);
    shopFeatureLayout.setOrientation(LinearLayout_.HORIZONTAL);
    var shopFeatureLayoutLeft = new LinearLayout_(CONTEXT);
    shopFeatureLayoutLeft.setOrientation(1);
    shopFeatureLayoutLeft.setGravity(Gravity_.CENTER);
    shopFeatureLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 8));
    var shopFeatureLayoutRight = new LinearLayout_(CONTEXT);
    shopFeatureLayoutRight.setOrientation(1);
    shopFeatureLayoutRight.setGravity(Gravity_.CENTER);
    shopFeatureLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 8));
    shopFeatureLayout.addView(shopFeatureLayoutLeft);
    shopFeatureLayout.addView(shopFeatureLayoutRight);
    var shopFeatureText = clientTextView(shopFeature.name);
    shopFeatureLayoutLeft.addView(shopFeatureText);
    var shopFeatureClientButton = clientButton(shopFeatureButtonText);
    shopFeatureClientButton.setOnClickListener(new View_.OnClickListener() {
        onClick: function(v) {
            if(sharedPref.getString("VertexClientPE.bought" + shopFeature.shortName, "false") != "true") {
                if(shopFeature.price <= VertexClientPE.getVertexCash()) {
                    editor.putInt("VertexClientPE.vertexCash", VertexClientPE.getVertexCash() - shopFeature.price);
                    editor.commit();
                    cashTextView.setText("\u26C1 " + VertexClientPE.getVertexCash());
                    editor.putString("VertexClientPE.bought" + shopFeature.shortName, "true");
                    editor.commit();
                    shopFeatureClientButton.setText("Purchased");
                    shopFeature.onUnlock();
                } else {
                    VertexClientPE.toast("You need " + (shopFeature.price - VertexClientPE.getVertexCash()).toString() + " more V€rt€xCash to buy this!");
                }
            }
        }
    });
    
    shopFeatureLayoutRight.addView(shopFeatureClientButton);
    return shopFeatureLayout;
}

function songButton(song, barLayout) {
    var songButtonText = song.artist + " - " + song.title;
    var songLayout = new LinearLayout_(CONTEXT);
    songLayout.setOrientation(LinearLayout_.HORIZONTAL);
	var songLeftWidth = display.widthPixels;
    var songClientButton = clientButton(songButtonText);
	songClientButton.setLayoutParams(new LinearLayout_.LayoutParams(songLeftWidth - dip2px(10) - dip2px(50), LinearLayout_.LayoutParams.WRAP_CONTENT));
    songClientButton.setOnClickListener(new View_.OnClickListener() {
        onClick: function(v) {
            VertexClientPE.MusicUtils.isPaused = false;
            barLayout.getLeftTimeView().setText("0:00");
            if(mpPlayButton != null) {
                mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
            }
            VertexClientPE.MusicUtils.startMusicPlayer(song);
        }
    });
	
	var songRightButton = clientButton("...");
	songRightButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(50), LinearLayout_.LayoutParams.WRAP_CONTENT));
    songRightButton.setOnClickListener(new View_.OnClickListener() {
        onClick: function(v) {
            VertexClientPE.showSongDialog(song, songClientButton, barLayout);
        }
    });
    
    songLayout.addView(songClientButton);
    songLayout.addView(songRightButton);
    return songLayout;
}

function musicBar() {
    var musicBarLayout1 = new LinearLayout_(CONTEXT);
    musicBarLayout1.setOrientation(1);
    var musicBarLayout = new LinearLayout_(CONTEXT);
    musicBarLayout.setBackgroundDrawable(backgroundSpecial());
    musicBarLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, LinearLayout_.LayoutParams.WRAP_CONTENT));
    musicBarLayout.setOrientation(LinearLayout_.HORIZONTAL);
    musicBarLayout.setGravity(Gravity_.CENTER);
    var musicBarLayoutLeft = new LinearLayout_(CONTEXT);
    musicBarLayoutLeft.setOrientation(LinearLayout_.HORIZONTAL);
    musicBarLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 8, LinearLayout_.LayoutParams.WRAP_CONTENT));
    var musicBarLayoutMiddle = new LinearLayout_(CONTEXT);
    musicBarLayoutMiddle.setOrientation(LinearLayout_.HORIZONTAL);
    musicBarLayoutMiddle.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - (display.widthPixels / 8) * 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
    var musicBarLayoutRight = new LinearLayout_(CONTEXT);
    musicBarLayoutRight.setOrientation(1);
    musicBarLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 8, LinearLayout_.LayoutParams.WRAP_CONTENT));
    musicBarLayout.addView(musicBarLayoutLeft);
    musicBarLayout.addView(musicBarLayoutMiddle);
    musicBarLayout.addView(musicBarLayoutRight);
    var musicBarSongTitleView = new clientTextView(musicText);
    musicBarSongTitleView.setBackgroundDrawable(backgroundSpecial("top", themeSetting));
    musicBarSongTitleView.setGravity(Gravity_.CENTER);
    musicBarSongTitleView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
    musicBarSongTitleView.setMarqueeRepeatLimit(-1);
    musicBarSongTitleView.setSingleLine();
    musicBarSongTitleView.setHorizontallyScrolling(true);
    musicBarSongTitleView.setSelected(true);
    var musicBarSeekBar = new SeekBar(CONTEXT);
    musicBarSeekBar.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, LinearLayout_.LayoutParams.WRAP_CONTENT, 1));
    if(VertexClientPE.MusicUtils.mp == null) {
        VertexClientPE.MusicUtils.initMusicPlayer();
    }
    var musicBarPlayButton = new Button_(CONTEXT);
    musicBarPlayButton.setPadding(0, 0, 0, 0);
    musicBarPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
    musicBarPlayButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(36), dip2px(36)));
    musicBarPlayButton.setText("");
    var musicBarLeftTimeView = new TextView_(CONTEXT);
    musicBarLeftTimeView.setText("0:00");
    musicBarLeftTimeView.setTextColor(Color_.WHITE);
    var musicBarRightTimeView = new TextView_(CONTEXT);
    musicBarRightTimeView.setText("0:00");
    musicBarRightTimeView.setTextColor(Color_.WHITE);
    musicBarLayoutLeft.addView(musicBarPlayButton);
    musicBarLayoutLeft.addView(musicBarLeftTimeView);
    musicBarLayoutMiddle.addView(musicBarSeekBar);
    musicBarLayoutRight.addView(musicBarRightTimeView);
    
    musicBarLayout1.addView(musicBarSongTitleView);
    musicBarLayout1.addView(musicBarLayout);
    
    this.getSongTitleView = function() {
        return musicBarSongTitleView;
    }
    
    this.getPlayButton = function() {
        return musicBarPlayButton;
    }
    
    this.getLeftTimeView = function() {
        return musicBarLeftTimeView;
    }
    
    this.getSeekBar = function() {
        return musicBarSeekBar;
    }
    
    this.getRightTimeView = function() {
        return musicBarRightTimeView;
    }
    
    this.getBarLayout = function() {
        return musicBarLayout1;
    }
}

function updatePaneButton(updateVersion, updateDesc) {
    var updatePaneLayout = new LinearLayout_(CONTEXT);
    updatePaneLayout.setOrientation(LinearLayout_.HORIZONTAL);
    updatePaneLayout.setGravity(Gravity_.CENTER);
    updatePaneLayout.setBackground(backgroundSpecial(true));
    var updatePaneLayoutLeft = new LinearLayout_(CONTEXT);
    updatePaneLayoutLeft.setOrientation(1);
    updatePaneLayoutLeft.setGravity(Gravity_.CENTER);
    updatePaneLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
    var updatePaneLayoutRight = new LinearLayout_(CONTEXT);
    updatePaneLayoutRight.setOrientation(1);
    updatePaneLayoutRight.setGravity(Gravity_.CENTER);
    updatePaneLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), display.heightPixels / 4));
    updatePaneLayout.addView(updatePaneLayoutLeft);
    updatePaneLayout.addView(updatePaneLayoutRight);
    var updatePaneText = clientTextView("v" + updateVersion);
    updatePaneText.setTypeface(VertexClientPE.font, Typeface_.BOLD);
    var updatePaneDescText = clientTextView(updateDesc);
    updatePaneLayoutLeft.addView(updatePaneText);
    updatePaneLayoutLeft.addView(updatePaneDescText);
    var updatePaneDownloadButton = clientButton("Download");
    updatePaneDownloadButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.stat_sys_download, 0, 0, 0);
    updatePaneDownloadButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
    updatePaneDownloadButton.setOnClickListener(new View_.OnClickListener() {
        onClick: function(v) {
            var updateGithubVersion = updateVersion;
            if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
                updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
            }
            ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/releases/download/v" + updateGithubVersion + "/Vertex_Client_PE_Air.modpkg");
        }
    });
    var updatePaneInformationButton = clientButton("Info");
    updatePaneInformationButton.setCompoundDrawablesWithIntrinsicBounds(android.R.drawable.ic_menu_info_details, 0, 0, 0);
    updatePaneInformationButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.MATCH_PARENT, display.heightPixels / 8));
    updatePaneInformationButton.setOnClickListener(new View_.OnClickListener() {
        onClick: function(v) {
            var updateGithubVersion = updateVersion;
            if(updateGithubVersion.indexOf("Alpha") != -1 || updateGithubVersion.indexOf("Beta") != -1) {
                updateGithubVersion = updateGithubVersion.split(" ")[0] + "-" + updateGithubVersion.split(" ")[1];
            }
            ModPE.goToURL("https://github.com/Vertex-Client/Vertex-Client-PE/releases/tag/v" + updateGithubVersion);
        }
    });
	
    var support = isSupported?"supported":"unsupported";
    var updatePaneTypeText = clientTextView("Current (" + support + ")");
    
    if(updateVersion != VertexClientPE.currentVersion) {
        updatePaneLayoutRight.addView(updatePaneDownloadButton);
    } else {
        updatePaneLayoutRight.addView(updatePaneTypeText);
    }
    
    updatePaneLayoutRight.addView(updatePaneInformationButton);
    
    return updatePaneLayout;
}

function helpSection(title, description) {
    var helpSectionLayout1 = new LinearLayout_(CONTEXT);
    helpSectionLayout1.setOrientation(1);
    helpSectionLayout1.setGravity(Gravity_.CENTER);
    helpSectionLayout1.setBackground(backgroundSpecial(true));
    var helpSectionLayout = new LinearLayout_(CONTEXT);
    helpSectionLayout.setOrientation(LinearLayout_.HORIZONTAL);
    helpSectionLayout.setGravity(Gravity_.CENTER);
    var helpSectionLayoutLeft = new LinearLayout_(CONTEXT);
    helpSectionLayoutLeft.setOrientation(1);
    helpSectionLayoutLeft.setGravity(Gravity_.CENTER);
    helpSectionLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), LinearLayout_.LayoutParams.WRAP_CONTENT));
    var helpSectionLayoutRight = new LinearLayout_(CONTEXT);
    helpSectionLayoutRight.setOrientation(1);
    helpSectionLayoutRight.setGravity(Gravity_.CENTER);
    helpSectionLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 2 - dip2px(10), LinearLayout_.LayoutParams.WRAP_CONTENT));
    helpSectionLayout.addView(helpSectionLayoutLeft);
    helpSectionLayout.addView(helpSectionLayoutRight);
    var helpSectionTitle = clientTextView(title);
    helpSectionTitle.setTypeface(VertexClientPE.font, Typeface_.BOLD);
    helpSectionTitle.setBackgroundDrawable(backgroundSpecial("top", themeSetting));
    var helpSectionDescription = clientTextView(description);
    helpSectionLayoutLeft.addView(helpSectionDescription);
    
    helpSectionLayout1.addView(helpSectionTitle);
    helpSectionLayout1.addView(helpSectionLayout);
    
    return helpSectionLayout1;
}

function tileButton(tileText, tileIcon, tileColor, forceLightColor) {
    var params = new GridLayout_.LayoutParams();
    params.setMargins(5, 5, 5, 5);
    params.width = display.widthPixels / 4 - dip2px(5);
    params.height = display.widthPixels / 4 - dip2px(5);
    
    var defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText), null, sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor), false, sharedPref.getBoolean("VertexClientPE.tiles." + tileText + ".useLightColor", forceLightColor==null?true:forceLightColor), "tile", 0.1);
    defaultTileButton.setTypeface(VertexClientPE.tileFont);
    defaultTileButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
    defaultTileButton.setMarqueeRepeatLimit(-1);
    defaultTileButton.setSingleLine();
    defaultTileButton.setHorizontallyScrolling(true);
    defaultTileButton.setSelected(true);
    defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(0, tileIcon, 0, 0);
    defaultTileButton.setLayoutParams(params);
	
	defaultTileButton.setOnLongClickListener(new View_.OnLongClickListener() {
        onLongClick: function(viewArg) {
			VertexClientPE.showTileDropDown(viewArg, tileText, tileColor, forceLightColor==null?true:forceLightColor);
            return true;
        }
    });
    
    return defaultTileButton;
}

function tileButtonWithCustomDrawable(tileText, tileIcon, tileColor, forceLightColor) {
    var params = new GridLayout_.LayoutParams();
    params.setMargins(5, 5, 5, 5);
    params.width = display.widthPixels / 4 - dip2px(5);
    params.height = display.widthPixels / 4 - dip2px(5);
    
    var defaultTileButton = clientButton(sharedPref.getString("VertexClientPE.tiles." + tileText + ".name", tileText), null, sharedPref.getString("VertexClientPE.tiles." + tileText + ".color", tileColor), false, sharedPref.getBoolean("VertexClientPE.tiles." + tileText + ".useLightColor", forceLightColor==null?true:forceLightColor), "tile", 0.1);
    defaultTileButton.setTypeface(VertexClientPE.tileFont);
    defaultTileButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
    defaultTileButton.setMarqueeRepeatLimit(-1);
    defaultTileButton.setSingleLine();
    defaultTileButton.setHorizontallyScrolling(true);
    defaultTileButton.setSelected(true);
	
	var drawable = tileIcon;
	drawable.setBounds(0, 0, (drawable.getIntrinsicWidth()*0.5), (drawable.getIntrinsicHeight()*0.5));
	var sd = new ScaleDrawable_(drawable, 0, dip2px(16), dip2px(16));
	sd.setLevel(1);
	
    defaultTileButton.setCompoundDrawablesWithIntrinsicBounds(null, sd.getDrawable(), null, null);
    defaultTileButton.setLayoutParams(params);
	
	defaultTileButton.setOnLongClickListener(new View_.OnLongClickListener() {
        onLongClick: function(viewArg) {
			VertexClientPE.showTileDropDown(viewArg, tileText, tileColor, forceLightColor==null?true:forceLightColor);
            return true;
        }
    });
    
    return defaultTileButton;
}

function userBar() {
    var params = new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
	
	var defaultUserLayout = new LinearLayout_(CONTEXT);
	defaultUserLayout.setOrientation(LinearLayout_.HORIZONTAL);
	defaultUserLayout.setGravity(Gravity_.CENTER);
	defaultUserLayout.setLayoutParams(params);
	
	var steveHeadView = new ImageView_(CONTEXT);
	steveHeadView.setImageBitmap(imgSteveHead);
    
    var defaultUserTextView = clientTextView(ModPE.getPlayerName(), true);
	defaultUserTextView.setPadding(dip2px(8), 0, 0, 0);
    defaultUserTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
    defaultUserTextView.setMarqueeRepeatLimit(-1);
    defaultUserTextView.setSingleLine();
    defaultUserTextView.setHorizontallyScrolling(true);
    defaultUserTextView.setSelected(true);
	
	var bg = GradientDrawable_();
	bg.setColor(Color_.parseColor("#70151515"));
	defaultUserLayout.setBackgroundDrawable(bg);
	
	defaultUserLayout.setOnTouchListener(new View_.OnTouchListener() {
		onTouch: function(v, event) {
			var action = event.getActionMasked();
			if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
				bg.setStroke(0, Color_.parseColor("#70151515"));
			} else {
				bg.setStroke(dip2px(3), Color_.parseColor("#d3d3d3"));
			}
			return false;
		}
	});
	
	defaultUserLayout.setOnClickListener(new View_.OnClickListener() {
        onClick: function(viewArg) {
			exitDashboardUI.dismiss();
            dashboardMenu.dismiss();
			VertexClientPE.showAccountManager(true);
			exitAccountManager(true);
        }
    });
	
	defaultUserLayout.addView(steveHeadView);
	defaultUserLayout.addView(defaultUserTextView);
    
    return defaultUserLayout;
}

function addonButton(addon) {
    var addonButtonLayout = new LinearLayout_(CONTEXT);
    addonButtonLayout.setOrientation(1);
    addonButtonLayout.setGravity(Gravity_.CENTER);
    
    var defaultClientButton = clientButton(addon.name + " v" + addon.current_version, addon.desc);
    defaultClientButton.setLayoutParams(new LinearLayout_.LayoutParams(display.heightPixels / 2, display.heightPixels / 8));
    defaultClientButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
    defaultClientButton.setMarqueeRepeatLimit(-1);
    defaultClientButton.setSingleLine();
    defaultClientButton.setHorizontallyScrolling(true);
    defaultClientButton.setSelected(true);
    defaultClientButton.setOnClickListener(new View_.OnClickListener({
        onClick: function(viewarg) {
            VertexClientPE.showAddonDialog(addon);
        }
    }));
    defaultClientButton.setOnLongClickListener(new View_.OnLongClickListener() {
        onLongClick: function(viewArg) {
            VertexClientPE.toast(addon.desc);
            return true;
        }
    });
    //var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
    addonButtonLayout.addView(defaultClientButton);
    
    return addonButtonLayout;
}

var currentMPTab = "All";

function musicPlayerTab(name, tabLayout, songLayout, playBar) {
    var musicPlayerTabHolderLayout = new LinearLayout_(CONTEXT);
    musicPlayerTabHolderLayout.setOrientation(1);
    musicPlayerTabHolderLayout.setGravity(Gravity_.CENTER);
    
    var defaultClientButton = clientButton(name);
    defaultClientButton.setAlpha(0.54);
	defaultClientButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2 - dip2px(5), LinearLayout_.LayoutParams.WRAP_CONTENT));
    if(currentMPTab == name) {
        defaultClientButton.setTextColor(Color_.GREEN);
		if(fontSetting != "minecraft") {
			defaultClientButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
    }
    defaultClientButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
    defaultClientButton.setMarqueeRepeatLimit(-1);
    defaultClientButton.setSingleLine();
    defaultClientButton.setHorizontallyScrolling(true);
    defaultClientButton.setSelected(true);
    defaultClientButton.setOnClickListener(new View_.OnClickListener({
        onClick: function(viewarg) {
            if(currentMPTab != name) {
                currentMPTab = name;
                tabLayout.removeAllViews();
                songLayout.removeAllViews();
                
                var categories = ["All", "Favorite"];
    
                categories.forEach(function(element, index, array) {
                    tabLayout.addView(new musicPlayerTab(element, tabLayout, songLayout, playBar));
                });
				
				VertexClientPE.MusicUtils.songList.forEach(function(element, index, array) {
					if(currentMPTab == "Favorite" && sharedPref.getString("VertexClientPE.songs." + element.title + ".isFavorite", "false") == "false") {
						return;
					}
					songLayout.addView(songButton(element, playBar));
                });
            }
        }
    }));
    //var _0x9276=["\x69\x73\x50\x72\x6F","\x74\x72\x75\x65","\uD83D\uDD12\x20","\x73\x65\x74\x54\x65\x78\x74"];if(isProFeature&&VertexClientPE[_0x9276[0]]()!=_0x9276[1]){defaultClientButton[_0x9276[3]](_0x9276[2]+mod.name)}
    musicPlayerTabHolderLayout.addView(defaultClientButton);
    
    return musicPlayerTabHolderLayout;
}

function accountButton(account, layout) {
	var playerName = account.toString();
	
    var accountManagerAccountLayout = new LinearLayout_(CONTEXT);
    accountManagerAccountLayout.setOrientation(LinearLayout_.HORIZONTAL);
	accountManagerAccountLayout.setPadding(dip2px(10), 0, dip2px(10), 0);
	//accountManagerAccountLayout.setBackgroundDrawable();
	if(playerName == ModPE.getPlayerName()) {
		accountManagerAccountLayout.setBackgroundDrawable(backgroundSpecial(null, "green"));
	}
    
    var accountManagerAccountLayoutLeft = new LinearLayout_(CONTEXT);
    accountManagerAccountLayoutLeft.setOrientation(1);
    accountManagerAccountLayoutLeft.setGravity(Gravity_.CENTER_VERTICAL);
    accountManagerAccountLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
    accountManagerAccountLayout.addView(accountManagerAccountLayoutLeft);
    
    var accountManagerAccountLayoutCenter = new LinearLayout_(CONTEXT);
    accountManagerAccountLayoutCenter.setOrientation(1);
    accountManagerAccountLayoutCenter.setGravity(Gravity_.CENTER);
    accountManagerAccountLayoutCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
    accountManagerAccountLayout.addView(accountManagerAccountLayoutCenter);
    
    var accountManagerAccountLayoutRight = new LinearLayout_(CONTEXT);
    accountManagerAccountLayoutRight.setOrientation(LinearLayout_.HORIZONTAL);
    accountManagerAccountLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, display.heightPixels / 10));
    accountManagerAccountLayout.addView(accountManagerAccountLayoutRight);
    var usernameText = clientTextView(account);
    usernameText.setTextSize(15);
    accountManagerAccountLayoutLeft.addView(usernameText);
    var useButton = clientButton("Use");
    useButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4  - dip2px(10), display.heightPixels / 10));
    useButton.setOnClickListener(new View_.OnClickListener({
        onClick: function(viewarg) {
            //var playerClientId = account.clientId.toString();
            var shouldRestart = false;
            if(playerName != ModPE.getPlayerName()) {
                ModPE.setPlayerName(playerName);
                shouldRestart = true;
            }
            if(shouldRestart) {
                ModPE.restart();
                return;
            }
            accountManager.dismiss();
			if(backAccountManagerUI != null) {
				backAccountManagerUI.dismiss();
			}
            exitAccountManagerUI.dismiss();
            showMenuButton();
        }
    }));
    accountManagerAccountLayoutRight.addView(useButton);
    var deleteButton = clientButton("x");
    deleteButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3 - display.widthPixels / 4  - dip2px(10), display.heightPixels / 10));
    deleteButton.setOnClickListener(new View_.OnClickListener({
        onClick: function(viewarg) {
            VertexClientPE.removeAccount(account.toString(), layout, accountManagerAccountLayout);
        }
    }));
    accountManagerAccountLayoutRight.addView(deleteButton);
    
    return accountManagerAccountLayout;
}

function clientEditText(text) //menu buttons
{
	if(text == null) {
		text = "";
	}
	
    var defaultEditText = new EditText(CONTEXT);
    defaultEditText.setText(text);
    if(themeSetting == "white") {
        defaultEditText.setTextColor(Color_.BLACK);
    } else {
        defaultEditText.setTextColor(Color_.WHITE);
    }
    defaultEditText.setTypeface(VertexClientPE.font);
    
	if(themeSetting == "white") {
		if(fontSetting != "minecraft") {
			defaultEditText.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
		}
	} else {
		if(fontSetting != "minecraft") {
			defaultEditText.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultEditText);
	}
    return defaultEditText;
}

function clientTextView(text, shadow) //menu buttons
{
    var defaultTextView = new TextView_(CONTEXT);
    defaultTextView.setText(text);
    if(themeSetting == "white") {
        defaultTextView.setTextColor(Color_.BLACK);
    } else {
        defaultTextView.setTextColor(Color_.WHITE);
    }
    defaultTextView.setTypeface(VertexClientPE.font);
    
    if(shadow == true && shadow != null && shadow != undefined) {
        if(themeSetting == "white") {
			if(fontSetting != "minecraft") {
				defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
			}
        } else {
			if(fontSetting != "minecraft") {
				defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
			}
        }
    }
    defaultTextView.setPadding(0, 0, 0, 0);
    defaultTextView.setLineSpacing(0, 1.15);
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultTextView);
	}
    return defaultTextView;
}

function clientSectionTitle(text, style) {
    var defaultTextView = new TextView_(CONTEXT);
    defaultTextView.setText(text);
    defaultTextView.setTextColor(Color_.WHITE);
	if(fontSetting != "minecraft") {
		defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
	}
    defaultTextView.setTypeface(VertexClientPE.font);
    
    if(style == "rainbow") {
        var rainbowInt = Array_.newInstance(Integer_.TYPE, 7);
        rainbowInt[0] = Color_.RED;
        rainbowInt[1] = Color_.MAGENTA;
        rainbowInt[2] = Color_.BLUE;
        rainbowInt[3] = Color_.CYAN;
        rainbowInt[4] = Color_.GREEN;
        rainbowInt[5] = Color_.YELLOW;
        rainbowInt[6] = Color_.RED;
        var rainbowBg = new GradientDrawable_(GradientDrawable_.Orientation.LEFT_RIGHT, rainbowInt);
        defaultTextView.setBackgroundDrawable(rainbowBg);
    } else {
        if(themeSetting == "white") {
            defaultTextView.setTextColor(Color_.BLACK);
			if(fontSetting != "minecraft") {
				defaultTextView.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
			}
        }
        defaultTextView.setBackgroundDrawable(backgroundSpecial());
    }
    defaultTextView.setPadding(0, 0, 0, 0);
    defaultTextView.setLineSpacing(0, 1.15);
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultTextView);
	}
    return defaultTextView;
}

function clientScreenTitle(defaultText) {
	defaultScreenTitle = clientTextView(sharedPref.getString("VertexClientPE.tiles." + defaultText + ".name", defaultText), true);
	defaultScreenTitle.setTextSize(25);
	defaultScreenTitle.setGravity(Gravity_.CENTER);
	
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(defaultScreenTitle);
	}
	return defaultScreenTitle;
}

function clientHR() {//horizontal divider
    var defaultView = new View_(CONTEXT);
    defaultView.setLayoutParams(new LinearLayout_.LayoutParams(ViewGroup_.LayoutParams.MATCH_PARENT, 5));
    defaultView.setBackgroundColor(Color_.parseColor("#B3B3B3"));
    
    return defaultView;
}

function settingButton(text, desc) {
    var settingButtonLayout = new LinearLayout_(CONTEXT);
    settingButtonLayout.setOrientation(LinearLayout_.HORIZONTAL);
    
    var settingButtonLayoutLeft = new LinearLayout_(CONTEXT);
    settingButtonLayoutLeft.setOrientation(1);
    settingButtonLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
    settingButtonLayout.addView(settingButtonLayoutLeft);
    
    var settingButtonLayoutMiddle = new LinearLayout_(CONTEXT);
    settingButtonLayoutMiddle.setOrientation(1);
    settingButtonLayoutMiddle.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
    settingButtonLayout.addView(settingButtonLayoutMiddle);
    
    var settingButtonLayoutRight = new LinearLayout_(CONTEXT);
    settingButtonLayoutRight.setOrientation(1);
    settingButtonLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
    settingButtonLayout.addView(settingButtonLayoutRight);
    
    var defaultTitle = clientTextView(text, true);
    defaultTitle.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
    defaultTitle.setGravity(Gravity_.CENTER_VERTICAL);
	
    settingButtonLayoutLeft.addView(defaultTitle);
	var defaultSettingsButton = clientButton("", desc);
    defaultSettingsButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 3, LinearLayout_.LayoutParams.WRAP_CONTENT));
    settingButtonLayoutRight.addView(defaultSettingsButton);
    
    this.getName = function() {
        return text;
    }
    
    this.getButton = function() {
        return defaultSettingsButton;
    }
    
    this.getTitle = function() {
        return defaultTitle;
    }
    
    this.getLayout = function() {
        return settingButtonLayout;
    }
}

function coloredSubTitle(subtitle) // TextView with colored background (edited by peacestorm)
{
    var bg = GradientDrawable_();
    if(useLightThemeSetting == "on") {
        bg.setColor(Color_.parseColor("#00994C"));
        bg.setStroke(dip2px(2), Color_.parseColor("#00CC66"));
    } else {
        bg.setColor(Color_.parseColor("#0B5B25"));
        bg.setStroke(dip2px(2), Color_.parseColor("#0F8219"));
    }
    if(themeSetting == "red") {
        if(useLightThemeSetting == "on") {
            bg.setColor(Color_.parseColor("#FF3333"));
            bg.setStroke(dip2px(2), Color_.parseColor("#FF6666"));
        } else {
            bg.setColor(Color_.parseColor("#5B0C0C"));
            bg.setStroke(dip2px(2), Color_.parseColor("#821010"));
        }
    } if(themeSetting == "blue") {
        if(useLightThemeSetting == "on") {
            bg.setColor(Color_.parseColor("#0080FF"));
            bg.setStroke(dip2px(2), Color_.parseColor("#3399FF"));
        } else {
            bg.setColor(Color_.parseColor("#0A175B"));
            bg.setStroke(dip2px(2), Color_.parseColor("#0E3882"));
        }
    } if(themeSetting == "purple") {
        bg.setColor(Color_.parseColor("#9F018C"));
        bg.setStroke(dip2px(2), Color_.parseColor("#BC21AB"));
    } if(themeSetting == "violet") {
		bg.setColor(Color_.parseColor("#842DCE"));
		bg.setStroke(dip2px(2), Color_.parseColor("#8D38C9"));
	} if(themeSetting == "yellow") {
        bg.setColor(Color_.parseColor("#CCCC00"));
        bg.setStroke(dip2px(2), Color_.parseColor("#FFFF00"));
    } if(themeSetting == "orange") {
        bg.setColor(Color_.parseColor("#FF8C00"));
		bg.setStroke(dip2px(2), Color_.parseColor("#FFA500"));
    } if(themeSetting == "brown") {
		bg.setColor(Color_.parseColor("#8B4513"));
		bg.setStroke(dip2px(2), Color_.parseColor("#CD853F"));
    } if(themeSetting == "grey") {
		bg.setColor(Color_.parseColor("#808080"));
		bg.setStroke(dip2px(2), Color_.parseColor("#A9A9A9"));
    } if(themeSetting == "white") {
        bg.setColor(Color_.parseColor("#E1E1E1"));
        bg.setStroke(dip2px(2), Color_.parseColor("#FFFFFF"));
    } if(themeSetting == "black") {
        bg.setColor(Color_.parseColor("#141414"));
        bg.setStroke(dip2px(2), Color_.parseColor("#1E1E1E"));
    }
    bg.setShape(GradientDrawable_.RECTANGLE);

    var title = clientTextView(subtitle, true);
    title.setAlpha(0.54);
    title.setBackgroundDrawable(bg);

    return title;
}

function backgroundSpecial(round, color, showProLine, lightColor) {
    var bg = GradientDrawable_();
    if(round == true) {
        bg.setCornerRadius(8);
    } else if(round != false && round != null) {
        var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
        var radius = 0;
        if(round == "left") {
            for(var i = 0; i <= 7; i++) {
                if(i == 0 || i == 1 || i == 6 || i == 7) {
                    radiiFloatArray[i] = 8;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "right") {
            for(var i = 0; i <= 7; i++) {
                if(i == 2 || i == 3 || i == 4 || i == 5) {
                    radiiFloatArray[i] = 8;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "cornerleft") {
            for(var i = 0; i <= 7; i++) {
                if(i == 6 || i == 7) {
                    radiiFloatArray[i] = 180;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "cornerright") {
            for(var i = 0; i <= 7; i++) {
                if(i == 4 || i == 5) {
                    radiiFloatArray[i] = 180;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "bottom") {
            for(var i = 0; i <= 7; i++) {
                if(i >= 4) {
                    radiiFloatArray[i] = 8;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "bottomleft") {
            for(var i = 0; i <= 7; i++) {
                if(i >= 4 && i <= 5) {
                    radiiFloatArray[i] = 8;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "bottomright") {
            for(var i = 0; i <= 7; i++) {
                if(i >= 6) {
                    radiiFloatArray[i] = 8;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "top") {
            for(var i = 0; i <= 7; i++) {
                if(i <= 3) {
                    radiiFloatArray[i] = 8;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "invertcornerright") {
            for(var i = 0; i <= 7; i++) {
                if(i == 2 || i == 3) {
                    radiiFloatArray[i] = -180;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round != false && round != null) {
            bg.setCornerRadius(round);
        }
    }
    if(color == null) {
        bg.setColor(Color_.parseColor("#70151515"));
    } else if(color == "green") {
        if(useLightThemeSetting == "on") {
            bg.setColor(Color_.parseColor("#7000994C"));
        } else {
            bg.setColor(Color_.parseColor("#700B5B25"));
        }
    } else if(color == "red") {
        if(useLightThemeSetting == "on") {
            bg.setColor(Color_.parseColor("#70FF3333"));
        } else {
            bg.setColor(Color_.parseColor("#705B0C0C"));
        }
    } else if(color == "blue") {
        if(useLightThemeSetting == "on") {
            bg.setColor(Color_.parseColor("#700080FF"));
        } else {
            bg.setColor(Color_.parseColor("#700A175B"));
        }
    } else if(color == "purple") {
        bg.setColor(Color_.parseColor("#709F018C"));
    } else if(color == "violet") {
		bg.setColor(Color_.parseColor("#70842DCE"));
	} else if(color == "yellow") {
        bg.setColor(Color_.parseColor("#70CCCC00"));
    } else if(color == "orange") {
        bg.setColor(Color_.parseColor("#70FF8C00"));
    } else if(color == "brown") {
		bg.setColor(Color_.parseColor("#708B4513"));
    } else if(color == "grey") {
		bg.setColor(Color_.parseColor("#70808080"));
    } else if(color == "white") {
        bg.setColor(Color_.parseColor("#70E1E1E1"));
    } else if(color == "black") {
        bg.setColor(Color_.parseColor("#70141414"));
    } else if (typeof color === "string" && color[0] === "#") {
        if (color.indexOf("|") < 0) {
            bg.setColor(Color_.parseColor(color));
        } else {
            var arr = color.split("|");
            bg.setColor(Color_.parseColor(arr[0]));
            bg.setStroke(dip2px(1), Color_.parseColor(arr[1]));
        }
    }
    
    if (showProLine == true && VertexClientPE.isPro()) {
        bg.setStroke(dip2px(2), Color_.parseColor("#70DAA520"));
    }
    bg.setShape(GradientDrawable_.RECTANGLE);

    return bg;
}

VertexClientPE.setupGradient = function(gradientDrawable, color, strokeColor) {
	if(!(gradientDrawable instanceof GradientDrawable_)) {
		throw new TypeError("The type of the first parameter is not GradientDrawable!");
		return;
	}
	var preset = transparentBgSetting=="on"?"#70":"#";
	gradientDrawable.setColor(Color_.parseColor(preset + color));
	gradientDrawable.setStroke(dip2px(2), Color_.parseColor(preset + strokeColor));
}

function backgroundGradient(round) // TextView with colored background (edited by peacestorm)
{
	if(backgroundStyleSetting == "normal") {
		var bg = GradientDrawable_();
		var radius = 0;
		if(round == true) {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
			for(var i = 0; i <= 7; i++) {
				if(i >= 4) {
					radiiFloatArray[i] = 16;
				} else {
					radiiFloatArray[i] = radius;
				}
			}
			bg.setCornerRadii(radiiFloatArray);
		} else if(round == "bottomright") {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
            for(var i = 0; i <= 7; i++) {
                if(i >= 4 && i <= 5) {
                    radiiFloatArray[i] = 16;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round == "bottomleft") {
			var radiiFloatArray = Array_.newInstance(Float_.TYPE, 9);
            for(var i = 0; i <= 7; i++) {
                if(i >= 6) {
                    radiiFloatArray[i] = 16;
                } else {
                    radiiFloatArray[i] = radius;
                }
            }
            bg.setCornerRadii(radiiFloatArray);
        } else if(round != false && round != null) {
			bg.setCornerRadius(round);
		}
		if(useLightThemeSetting == "on") {
			VertexClientPE.setupGradient(bg, "00994C", "00CC66");
		} else {
			VertexClientPE.setupGradient(bg, "0B5B25", "0F8219");
		}
		if(themeSetting == "red") {
			if(useLightThemeSetting == "on") {
				VertexClientPE.setupGradient(bg, "FF3333", "FF6666");
			} else {
				VertexClientPE.setupGradient(bg, "5B0C0C", "821010");
			}
		} if(themeSetting == "blue") {
			if(useLightThemeSetting == "on") {
				VertexClientPE.setupGradient(bg, "0080FF", "3399FF");
			} else {
				VertexClientPE.setupGradient(bg, "0A175B", "0E3882");
			}
		} if(themeSetting == "purple") {
			VertexClientPE.setupGradient(bg, "9F018C", "BC21AB");
		} if(themeSetting == "violet") {
			VertexClientPE.setupGradient(bg, "842DCE", "8D38C9");
		} if(themeSetting == "yellow") {
			VertexClientPE.setupGradient(bg, "CCCC00", "FFFF00");
		} if(themeSetting == "orange") {
			VertexClientPE.setupGradient(bg, "FF8C00", "FFA500");
		} if(themeSetting == "brown") {
			VertexClientPE.setupGradient(bg, "8B4513", "CD853F");
		} if(themeSetting == "grey") {
			VertexClientPE.setupGradient(bg, "808080", "A9A9A9");
		} if(themeSetting == "white") {
			VertexClientPE.setupGradient(bg, "E1E1E1", "FFFFFF");
		} if(themeSetting == "black") {
			VertexClientPE.setupGradient(bg, "141414", "1E1E1E");
		}
		bg.setShape(GradientDrawable_.RECTANGLE);

		return bg;
	} else if(backgroundStyleSetting == "minecraft_dirt") {
		var dirt = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/background.png")), dip2px(64), dip2px(64), false));
		/* if(transparentBgSetting == "on") {
			dirt.setColorFilter(android.graphics.Color.argb(7, 70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
		} else if(transparentBgSetting == "off") { */
			dirt.setColorFilter(android.graphics.Color.rgb(70, 70, 70), android.graphics.PorterDuff.Mode.MULTIPLY);
		//}
		dirt.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
		
		return dirt;
	}
}

VertexClientPE.loadMainSettings();
(VertexClientPE.editCopyrightText = function() {
    ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A72Vertex Client PE by peacestorm");
    if(themeSetting == "red") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A74Vertex Client PE by peacestorm");
    } if(themeSetting == "blue") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A71Vertex Client PE by peacestorm");
    } if(themeSetting == "purple") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A75Vertex Client PE by peacestorm");
    } if(themeSetting == "violet") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A75Vertex Client PE by peacestorm");
    } if(themeSetting == "yellow") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A7eVertex Client PE by peacestorm");
    } if(themeSetting == "orange") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A76Vertex Client PE by peacestorm");
    } if(themeSetting == "brown") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A70Vertex Client PE by peacestorm");
    } if(themeSetting == "grey") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A78Vertex Client PE by peacestorm");
    } if(themeSetting == "white") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A7fVertex Client PE by peacestorm");
    } if(themeSetting == "black") {
        ModPE.langEdit("menu.copyright", "\u00A9Mojang AB | \u00A70Vertex Client PE by peacestorm");
    }
})();

function getRandomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
}

VertexClientPE.checkForUpdates = function() {
    try {
        // download content
        var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version");
        var connection = url.openConnection();

        // get content
        inputStream = connection.getInputStream();

        // read result
        var loadedVersion = "";
        var bufferedVersionReader = new BufferedReader_(new InputStreamReader_(inputStream));
        var rowVersion = "";
        while((rowVersion = bufferedVersionReader.readLine()) != null) {
            loadedVersion += rowVersion;
        }
        
        if(loadedVersion.split(" ")[1] == "Beta" || loadedVersion.split(" ")[1] == "Alpha") {
            VertexClientPE.latestVersion = loadedVersion.split(" ")[0] + " " + loadedVersion.split(" ")[1];
            latestPocketEditionVersion = loadedVersion.split(" ")[2];
        } else {
            VertexClientPE.latestVersion = loadedVersion.split(" ")[0];
            latestPocketEditionVersion = loadedVersion.split(" ")[1];
        }

        // close what needs to be closed
        bufferedVersionReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
        VertexClientPE.clientMessage("Can't check for updates, please check your Internet connection.");
        ModPE.log("[Vertex Client PE] VertexClientPE.checkForUpdates() caught an error: " + err);
        if(sharedPref.getString("VertexClientPE.latestVersion", null) != null && sharedPref.getString("VertexClientPE.latestVersion", null) != undefined) {
            VertexClientPE.latestVersion = sharedPref.getString("VertexClientPE.latestVersion", null);
        } else {
            VertexClientPE.latestVersion = VertexClientPE.currentVersion;
        }
        return;
    }
    
    editor.putString("VertexClientPE.latestVersion", VertexClientPE.latestVersion);
    editor.commit();
}

VertexClientPE.loadUpdateDescription = function() {
    try {
        // download content
        var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/Updater/Version-Desc/" + VertexClientPE.latestVersion);
        var connection = url.openConnection();

        // get content
        inputStream = connection.getInputStream();

        // read result
        var loadedUpdateDesc = "";
        var bufferedUpdateDescReader = new BufferedReader_(new InputStreamReader_(inputStream));
        var rowUpdateDesc = "";
        while((rowUpdateDesc = bufferedUpdateDescReader.readLine()) != null) {
            loadedUpdateDesc += rowUpdateDesc;
        }
        
        VertexClientPE.latestVersionDesc = loadedUpdateDesc;

        // close what needs to be closed
        bufferedUpdateDescReader.close();

        // test
        //clientMessage(VertexClientPE.getVersion("current"); + " " + latestVersion);
    } catch(err) {
        ModPE.log("[Vertex Client PE] VertexClientPE.loadUpdateDescription() caught an error: " + err);
        if(sharedPref.getString("VertexClientPE.latestVersionDesc", null) != null && sharedPref.getString("VertexClientPE.latestVersionDesc", null) != undefined) {
            VertexClientPE.latestVersionDesc = sharedPref.getString("VertexClientPE.latestVersionDesc", null);
        } else {
            VertexClientPE.latestVersionDesc = "Unknown";
        }
        return;
    }
    
    editor.putString("VertexClientPE.latestVersionDesc", VertexClientPE.latestVersionDesc);
    editor.commit();
}

VertexClientPE.loadNews = function() {
    try {
        // download content
        var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/news/News");
        var connection = url.openConnection();

        // get content
        newsInputStream = connection.getInputStream();

        // read result
        var loadedNews = "";
        var bufferedNewsReader = new BufferedReader_(new InputStreamReader_(newsInputStream));
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
    } finally {
        if(news == null || news == undefined) {
            news = "News couldn't be loaded";
        }
    }
}

var _0x498b=["\x6C\x6F\x61\x64\x53\x75\x70\x70\x6F\x72\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x72\x61\x77\x2E\x67\x69\x74\x68\x75\x62\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2F\x56\x65\x72\x74\x65\x78\x2D\x43\x6C\x69\x65\x6E\x74\x2D\x50\x45\x2F\x75\x70\x64\x61\x74\x65\x2F\x53\x75\x70\x70\x6F\x72\x74\x2F","\x63\x75\x72\x72\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E","\x2F\x73\x75\x70\x70\x6F\x72\x74","\x6E\x65\x74","\x6F\x70\x65\x6E\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E","\x67\x65\x74\x49\x6E\x70\x75\x74\x53\x74\x72\x65\x61\x6D","","\x69\x6F","\x72\x65\x61\x64\x4C\x69\x6E\x65","\x20","\x73\x70\x6C\x69\x74","\x75\x6E\x73\x75\x70\x70\x6F\x72\x74\x65\x64","\x63\x6C\x6F\x73\x65","\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x69\x73\x53\x75\x70\x70\x6F\x72\x74\x65\x64\x5F","\x67\x65\x74\x53\x74\x72\x69\x6E\x67","\x66\x61\x6C\x73\x65","\x5B\x56\x65\x72\x74\x65\x78\x20\x43\x6C\x69\x65\x6E\x74\x20\x50\x45\x5D\x20\x56\x65\x72\x74\x65\x78\x43\x6C\x69\x65\x6E\x74\x50\x45\x2E\x6C\x6F\x61\x64\x53\x75\x70\x70\x6F\x72\x74\x28\x29\x20\x63\x61\x75\x67\x68\x74\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x3A\x20","\x6C\x6F\x67","\x70\x75\x74\x53\x74\x72\x69\x6E\x67","\x63\x6F\x6D\x6D\x69\x74","\x53\x75\x70\x70\x6F\x72\x74","\x54\x68\x69\x73\x20\x76\x65\x72\x73\x69\x6F\x6E\x20\x69\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x20\x61\x6E\x79\x6D\x6F\x72\x65\x21\x20\x50\x6C\x65\x61\x73\x65\x20\x75\x70\x67\x72\x61\x64\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x61\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69\x6F\x6E\x2E","\x73\x68\x6F\x77\x42\x61\x73\x69\x63\x44\x69\x61\x6C\x6F\x67"];VertexClientPE[_0x498b[0]]= function(){try{var _0x6663x1= new java[_0x498b[4]].URL(_0x498b[1]+ VertexClientPE[_0x498b[2]]+ _0x498b[3]);var _0x6663x2=_0x6663x1[_0x498b[5]]();supportInputStream= _0x6663x2[_0x498b[6]]();var _0x6663x3=_0x498b[7];var _0x6663x4= new java[_0x498b[8]].BufferedReader( new java[_0x498b[8]].InputStreamReader(supportInputStream));var _0x6663x5=_0x498b[7];while((_0x6663x5= _0x6663x4[_0x498b[9]]())!= null){_0x6663x3+= _0x6663x5};isSupported= _0x6663x3.toString()[_0x498b[11]](_0x498b[10])[0]== _0x498b[12]?false:true;_0x6663x4[_0x498b[13]]()}catch(err){if(sharedPref[_0x498b[15]](_0x498b[14]+ VertexClientPE[_0x498b[2]],null)== _0x498b[16]){isSupported= false}else {isSupported= true};ModPE[_0x498b[18]](_0x498b[17]+ err);return};editor[_0x498b[19]](_0x498b[14]+ VertexClientPE[_0x498b[2]],isSupported.toString());editor[_0x498b[20]]();if(!isSupported){VertexClientPE[_0x498b[23]](_0x498b[21],clientTextView(_0x498b[22]))}}

VertexClientPE.loadMilestones = function() {
    try {
        // download content
        var url = new URL_("https://raw.githubusercontent.com/Vertex-Client/Vertex-Client-PE/update/News");
        var connection = url.openConnection();

        // get content
        newsInputStream = connection.getInputStream();

        // read result
        var loadedNews = "";
        var bufferedNewsReader = new BufferedReader_(new InputStreamReader_(newsInputStream));
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
    } finally {
        if(news == null || news == undefined) {
            news = "News couldn't be loaded";
        }
    }
}

var lastLoop = new Date;
function gameLoop() {
    var thisLoop = new Date;
    VertexClientPE.Utils.fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
}

VertexClientPE.specialTick = function() {
    new Thread_(new Runnable_() {
        run: function() {
            Thread_.sleep(1000 * spamDelayTime);
            if(VertexClientPE.playerIsInGame) {
                if(delaySpammerState) {
                    VertexClientPE.delaySpammer();
                }
            }
            VertexClientPE.specialTick();
        }
    }).start();
}

var secondTickTimer = 0;
var lagTimer = 0;

VertexClientPE.secondTick = function() {
    new Thread_(new Runnable_() {
        run: function() {
            Thread_.sleep(1000);
            VertexClientPE.modules.forEach(function(element, index, array) {
                if(element.isStateMod() && element.state && element.onInterval) {
                    element.onInterval();
                }
            });
            if(secondTickTimer == 60) {
                var extraCash = VertexClientPE.isPro()?20:10;
                VertexClientPE.setVertexCash(VertexClientPE.getVertexCash() + extraCash);
                secondTickTimer = 0;
				if(showMoneyToastsSetting == "on") {
					VertexClientPE.moneyToast();
				}
                if(shopCashText != null) {
                    CONTEXT.runOnUiThread(new Runnable_() {
                        run: function() {
                            shopCashText.setText("\u26C1 " + VertexClientPE.getVertexCash());
                        }
                    });
                }
            } else {
                secondTickTimer += 1;
            }
            
            if(antiLagDropRemoverSetting == "on" && VertexClientPE.playerIsInGame && !VertexClientPE.isRemote() && sharedPref.getString("VertexClientPE.boughtOptiFine", "false") == "true") {
                if(lagTimer == 0) {
                    VertexClientPE.clientMessage("Dropped items will be removed in " + ChatColor.RED + "two minutes" + ChatColor.WHITE + "!");
                    lagTimer++;
                } else {
                    if(lagTimer >= 1 && lagTimer < 120) {
                        if(lagTimer == 60) {
                            VertexClientPE.clientMessage("Dropped items will be removed in " + ChatColor.RED + "one minute" + ChatColor.WHITE + "!");
                        }
                        lagTimer++;
                    } else if(lagTimer == 120) {
                        Entity.getAll().forEach(function(element, index, array) {
                            if(Entity.getEntityTypeId(element) == EntityType.ITEM) {
                                try {
                                    Entity.remove(element);
                                } catch(e) {
                                    print("An error occurred: " + e);
                                }
                            }
                        });
                        VertexClientPE.clientMessage("Successfully removed dropped items!");
                        lagTimer = 0;
                    }
                }
            }
            VertexClientPE.secondTick();
        }
    }).start();
    if(mpCurrentPositionView != null && mpSeekBarView != null) {
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try{
                        mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
                        mpSeekBarView.setProgress(VertexClientPE.MusicUtils.mp.getCurrentPosition());
                } catch(e) {
                    
                }
            }
        }));
    }
	if(!VertexClientPE.playerIsInGame) {
		if(hacksList != null) {
			if(hacksList.isShowing()) {
				hacksList.dismiss();
			}
		}
	}
}

VertexClientPE.showSplashScreen = function () {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function () {
            try {
                var splashScreenLayout = new LinearLayout_(CONTEXT);
                splashScreenLayout.setOrientation(1);
                splashScreenLayout.setGravity(Gravity_.CENTER);
                splashScreenLayout.setBackgroundDrawable(new ColorDrawable_(Color_.rgb(0, 128, 255)));

                var logoViewer5 = new ImageView_(CONTEXT);
                logoViewer5.setPadding(0, dip2px(16), 0, dip2px(16));
                logoViewer5.setImageBitmap(imgLogo);
                logoViewer5.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
				
				var proViewer = new ImageView_(CONTEXT);
                proViewer.setPadding(0, dip2px(16), 0, dip2px(16));
                proViewer.setImageBitmap(imgProLogo);
                proViewer.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
				
				splashScreenLayout.addView(logoViewer5);
				if(VertexClientPE.isPro()) {
					splashScreenLayout.addView(proViewer);
				}
                splashScreenLayout.startAnimation(fadeIn(500));

                new Thread_({
                    run: function () {
                        Thread_.sleep(2500);
                        CONTEXT.runOnUiThread({
                            run: function () {
                                splashScreenLayout.startAnimation(fadeOut(500));
                            }
                        });
                        Thread_.sleep(500);
                        CONTEXT.runOnUiThread({
                            run: function () {
                                splashScreenMenu.dismiss();
                                splashScreenMenu = null;
                            }
                        });
                    }
                }).start();

                splashScreenMenu = new PopupWindow_(splashScreenLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                splashScreenMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.CENTER, 0, 0);
            } catch (e) {
                print("@" + e.lineNumber + ": " + e)
            }
        }
    }));
};

VertexClientPE.showStartScreenBar = function() {
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
					if(userIsNewToCurrentVersion == true) {
						VertexClientPE.showWhatsNewDialog();
					}
					
                    var mainMenuListLayout = new LinearLayout_(CONTEXT);
                    mainMenuListLayout.setOrientation(LinearLayout_.HORIZONTAL);
                    mainMenuListLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    mainMenuListLayout.setPadding(dip2px(8),dip2px(8),dip2px(8),dip2px(8));
					
                    var youTubeButton = new Button_(CONTEXT);
                    youTubeButton.setBackground(splashYouTubeButtonClientGUI);
                    youTubeButton.setGravity(Gravity_.CENTER);
                    youTubeButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
                    youTubeButton.setOnTouchListener(new View_.OnTouchListener() {
                        onTouch: function(v, event) {
                            youTubeButton.setSoundEffectsEnabled(false);
                            var action = event.getActionMasked();
                            if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
                                var bNP = splashYouTubeButtonClientGUI;
                                bNP.setFilterBitmap(false);
                                bNP.setAntiAlias(false);
                                youTubeButton.setBackgroundDrawable(bNP);
                            } else {
                                var bNP = splashYouTubeButtonClickedClientGUI;
                                bNP.setFilterBitmap(false);
                                bNP.setAntiAlias(false);
                                youTubeButton.setBackgroundDrawable(bNP);
                            }
                            return false;
                        }
                    });
					
                    var twitterButton = new Button_(CONTEXT);
                    twitterButton.setBackgroundDrawable(splashTwitterButtonClientGUI);
                    twitterButton.setGravity(Gravity_.CENTER);
                    twitterButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
                    twitterButton.setOnTouchListener(new View_.OnTouchListener() {
                        onTouch: function(v, event) {
                            twitterButton.setSoundEffectsEnabled(false);
                            var action = event.getActionMasked();
                            if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
                                var bNP = splashTwitterButtonClientGUI;
                                bNP.setFilterBitmap(false);
                                bNP.setAntiAlias(false);
                                twitterButton.setBackgroundDrawable(bNP);
                            } else {
                                var bNP = splashTwitterButtonClickedClientGUI;
                                bNP.setFilterBitmap(false);
                                bNP.setAntiAlias(false);
                                twitterButton.setBackgroundDrawable(bNP);
                            }
                            return false;
                        }
                    });
					
                    var gitHubButton = new Button_(CONTEXT);
                    gitHubButton.setBackgroundDrawable(splashGitHubButtonClientGUI);
                    gitHubButton.setGravity(Gravity_.CENTER);
                    gitHubButton.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(42), dip2px(42)));
                    gitHubButton.setOnTouchListener(new View_.OnTouchListener() {
                        onTouch: function(v, event) {
                            gitHubButton.setSoundEffectsEnabled(false);
                            var action = event.getActionMasked();
                            if(action == MotionEvent_.ACTION_CANCEL || action == MotionEvent_.ACTION_UP) {
                                var bNP = splashGitHubButtonClientGUI;
                                bNP.setFilterBitmap(false);
                                bNP.setAntiAlias(false);
                                gitHubButton.setBackgroundDrawable(bNP);
                            } else {
                                var bNP = splashGitHubButtonClickedClientGUI;
                                bNP.setFilterBitmap(false);
                                bNP.setAntiAlias(false);
                                gitHubButton.setBackgroundDrawable(bNP);
                            }
                            return false;
                        }
                    });
                    
                    youTubeButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            ModPE.goToURL("https://www.youtube.com/c/AgameRGaming");
                    }}));
                    twitterButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            ModPE.goToURL("http://twitter.com/VertexHX");
                    }}));
					gitHubButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            ModPE.goToURL("https://github.com/Vertex-Client");
                    }}));
					
					mainMenuListLayout.addView(youTubeButton);
					mainMenuListLayout.addView(twitterButton);
					mainMenuListLayout.addView(gitHubButton);

                    mainMenuTextList = new PopupWindow_(mainMenuListLayout, -2, -2);
					if(mainButtonPositionSetting == "top-right") {
						mainMenuTextList.setBackgroundDrawable(backgroundSpecial("bottomleft", "#212121|#ffffff"));
						mainMenuTextList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					} else {
						mainMenuTextList.setBackgroundDrawable(backgroundSpecial("bottomright", "#212121|#ffffff"));
						mainMenuTextList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
					}
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

var currentStep = 1;

VertexClientPE.showSetupScreen = function() {
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    var setupScreenLayout = new LinearLayout_(CONTEXT);
                    setupScreenLayout.setOrientation(1);
                    setupScreenLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var setupScreenLayoutBottom = new LinearLayout_(CONTEXT);
                    setupScreenLayoutBottom.setOrientation(LinearLayout_.HORIZONTAL);
                    
                    var setupScreenLayoutBottomLeft = new LinearLayout_(CONTEXT);
                    setupScreenLayoutBottomLeft.setOrientation(1);
                    setupScreenLayoutBottomLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
                    setupScreenLayoutBottomLeft.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
					var setupScreenLayoutBottomCenter = new LinearLayout_(CONTEXT);
                    setupScreenLayoutBottomCenter.setOrientation(1);
                    setupScreenLayoutBottomCenter.setGravity(Gravity_.CENTER_HORIZONTAL);
                    setupScreenLayoutBottomCenter.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
					var setupScreenLayoutBottomCenter1 = new LinearLayout_(CONTEXT);
                    setupScreenLayoutBottomCenter1.setOrientation(1);
                    setupScreenLayoutBottomCenter1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    setupScreenLayoutBottomCenter1.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
					var setupScreenLayoutBottomRight = new LinearLayout_(CONTEXT);
                    setupScreenLayoutBottomRight.setOrientation(1);
                    setupScreenLayoutBottomRight.setGravity(Gravity_.CENTER_HORIZONTAL);
                    setupScreenLayoutBottomRight.setLayoutParams(new ViewGroup_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
					
                    var logoViewer3 = new ImageView_(CONTEXT);
                    logoViewer3.setPadding(0, dip2px(16), 0, dip2px(16));
                    logoViewer3.setImageBitmap(imgLogo);
                    logoViewer3.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 4, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16 + dip2px(32)));
                    setupScreenLayout.addView(logoViewer3);
					
					var setupStepRow = new LinearLayout_(CONTEXT);
					setupStepRow.setOrientation(LinearLayout_.HORIZONTAL);
                    setupStepRow.setGravity(Gravity_.CENTER);
					setupScreenLayout.addView(setupStepRow);
					
					var step1Button = new Button_(CONTEXT);
					step1Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
					step1Button.setText("1");
					step1Button.setTextColor(Color_.parseColor("#0080FF"));
					step1Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
					step1Button.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(currentStep != 1) {
								currentStep = 1;
								setupScreenLayoutBottomLeft.removeAllViews();
								setupScreenLayoutBottomCenter.removeAllViews();
								setupScreenLayoutBottomCenter1.removeAllViews();
								setupScreenLayoutBottomRight.removeAllViews();
								step1Button.setTextColor(Color_.parseColor("#0080FF"));
								step2Button.setTextColor(Color_.WHITE);
								step3Button.setTextColor(Color_.WHITE);
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep1Text);
								doneButton.setText("\u2794");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewarg){
										step2Button.performClick();
									}
								}));
							}
						}
					});
					var step2Button = new Button_(CONTEXT);
					step2Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
					step2Button.setText("2");
					step2Button.setTextColor(Color_.WHITE);
					step2Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
					step2Button.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(currentStep != 2) {
								currentStep = 2;
								setupScreenLayoutBottomLeft.removeAllViews();
								setupScreenLayoutBottomCenter.removeAllViews();
								setupScreenLayoutBottomCenter1.removeAllViews();
								setupScreenLayoutBottomRight.removeAllViews();
								step1Button.setTextColor(Color_.WHITE);
								step2Button.setTextColor(Color_.parseColor("#0080FF"));
								step3Button.setTextColor(Color_.WHITE);
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep2Text);
								setupScreenLayoutBottomLeft.addView(setupButtonGreen);
								setupScreenLayoutBottomCenter.addView(setupButtonRed);
								setupScreenLayoutBottomCenter1.addView(setupButtonBlue);
								setupScreenLayoutBottomRight.addView(setupButtonPurple);
								doneButton.setText("\u2794");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewarg){
										step3Button.performClick();
									}
								}));
							}
						}
					});
					var step3Button = new Button_(CONTEXT);
					step3Button.setBackgroundDrawable(drawCircle(Color_.parseColor("#80ffffff")));
					step3Button.setText("3");
					step3Button.setTextColor(Color_.WHITE);
					step3Button.setLayoutParams(new LinearLayout_.LayoutParams(CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16, CONTEXT.getWindowManager().getDefaultDisplay().getWidth() / 16));
					step3Button.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							if(currentStep != 3) {
								currentStep = 3;
								setupScreenLayoutBottomLeft.removeAllViews();
								setupScreenLayoutBottomCenter.removeAllViews();
								setupScreenLayoutBottomCenter1.removeAllViews();
								setupScreenLayoutBottomRight.removeAllViews();
								step1Button.setTextColor(Color_.WHITE);
								step2Button.setTextColor(Color_.WHITE);
								step3Button.setTextColor(Color_.parseColor("#0080FF"));
								setupTextView.startAnimation(textAnim);
								setupTextView.setText(setupStep3Text);
								doneButton.setText("\u2713");
								doneButton.setOnClickListener(new View_.OnClickListener({
									onClick: function(viewarg){
										themeSetting = setupColor;
										VertexClientPE.saveMainSettings();
										VertexClientPE.editCopyrightText();
										logoViewer3.clearAnimation();
										doneUI.dismiss(); //Close
										setupScreen.dismiss();
										showMenuButton();
										VertexClientPE.specialTick();
										VertexClientPE.secondTick();
										VertexClientPE.setupMCPEGUI();
									}
								}));
							}
						}
					});
					
					var space1 = new TextView_(CONTEXT);
					space1.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
					
					var space2 = new TextView_(CONTEXT);
					space2.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
					
					setupStepRow.addView(step1Button);
					setupStepRow.addView(space1, dip2px(8), dip2px(1));
					setupStepRow.addView(step2Button);
					setupStepRow.addView(space2, dip2px(8), dip2px(1));
					setupStepRow.addView(step3Button);
					
					var setupTextView = clientTextView("");
                    setupTextView.setGravity(Gravity_.CENTER);
					setupScreenLayout.addView(setupTextView);
                    
					var setupStep1Text = "Thanks for choosing Vertex Client PE!\nGo to the next step to choose your favourite color. :)";
					var setupStep2Text = "You can always change the color on the settings screen.\nEven more colors are available there.";
					var setupStep3Text = "That's it! Your experience begins here.\nHere's some additional help to get started:\n- You can open the Dashboard and the Shop from the 'More' dialog,\nwhich can be opened by long tapping the menu button.";
					
					setupTextView.setText(setupStep1Text);
					
                    setupScreenLayoutBottom.addView(setupScreenLayoutBottomLeft);
                    setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter);
                    setupScreenLayoutBottom.addView(setupScreenLayoutBottomCenter1);
                    setupScreenLayoutBottom.addView(setupScreenLayoutBottomRight);
					
					setupScreenLayout.addView(setupScreenLayoutBottom);
                    
                    var setupButtonGreen = clientButton("Green", null, "green");
                    setupButtonGreen.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
                    setupButtonGreen.setTextColor(Color_.GREEN);
                    setupButtonGreen.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            setupColor = "green";
                            setupButtonGreen.setTextColor(Color_.GREEN);
                            setupButtonRed.setTextColor(Color_.WHITE);
                            setupButtonBlue.setTextColor(Color_.WHITE);
                            setupButtonPurple.setTextColor(Color_.WHITE);
                        }
                    }));
                    
                    var setupButtonRed = clientButton("Red", null, "red");
                    setupButtonRed.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
                    setupButtonRed.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            setupColor = "red";
                            setupButtonGreen.setTextColor(Color_.WHITE);
                            setupButtonRed.setTextColor(Color_.GREEN);
                            setupButtonBlue.setTextColor(Color_.WHITE);
                            setupButtonPurple.setTextColor(Color_.WHITE);
                        }
                    }));
                    
                    var setupButtonBlue = clientButton("Blue", null, "blue");
                    setupButtonBlue.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
                    setupButtonBlue.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            setupColor = "blue";
                            setupButtonGreen.setTextColor(Color_.WHITE);
                            setupButtonRed.setTextColor(Color_.WHITE);
                            setupButtonBlue.setTextColor(Color_.GREEN);
                            setupButtonPurple.setTextColor(Color_.WHITE);
                        }
                    }));
                    
                    var setupButtonPurple = clientButton("Purple", null, "purple");
                    setupButtonPurple.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
                    setupButtonPurple.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg) {
                            setupColor = "purple";
                            setupButtonGreen.setTextColor(Color_.WHITE);
                            setupButtonRed.setTextColor(Color_.WHITE);
                            setupButtonBlue.setTextColor(Color_.WHITE);
                            setupButtonPurple.setTextColor(Color_.GREEN);
                        }
                    }));
					
					var doneLayout = new LinearLayout_(CONTEXT);
					var doneButton = new Button_(CONTEXT);
					doneButton.setBackgroundDrawable(drawQuarterCircle(Color_.parseColor("#80ffffff"), dip2px(60)));
					doneButton.setGravity(Gravity_.RIGHT | Gravity_.TOP);
					doneButton.setPadding(0, dip2px(8), dip2px(8), 0);
					doneButton.setText("\u2794");//Text
					doneButton.setTextSize(20);
					//doneButton.getBackground().setColorFilter(Color_.parseColor("#008000"), PorterDuff_.Mode.MULTIPLY);
					doneButton.setTextColor(Color_.WHITE);
					doneButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewarg){
							step2Button.performClick();
						}
					}));
					doneLayout.addView(doneButton, dip2px(54), dip2px(54));
                    
                    setupScreen = new PopupWindow_(setupScreenLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    setupScreen.setBackgroundDrawable(new ColorDrawable_(Color_.parseColor("#0080FF")));
                    setupScreen.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
					//set animation after being shown, because the animation is for when it dismisses.
					//setupScreen.setAnimationStyle(android.R.style.Animation_Dialog);
					
					var logoAnim = new android.view.animation.AlphaAnimation(0, 1);
					logoAnim.setInterpolator(new android.view.animation.LinearInterpolator());
					logoAnim.setRepeatCount(android.view.animation.Animation.INFINITE);
					logoAnim.setRepeatMode(android.view.animation.Animation.REVERSE);
					logoAnim.setDuration(1500);
					
					logoViewer3.startAnimation(logoAnim);
					
					var textAnim = new android.view.animation.AlphaAnimation(0, 1);
					textAnim.setInterpolator(new android.view.animation.LinearInterpolator());
					textAnim.setRepeatCount(android.view.animation.Animation.INFINITE);
					textAnim.setDuration(1500);
					textAnim.setAnimationListener(new android.view.animation.Animation.AnimationListener() {
						onAnimationStart: function(arg0) {
							
						},
						onAnimationRepeat: function(arg0) {
							setupTextView.clearAnimation();
						},
						onAnimationEnd: function(arg0) {
							setupTextView.clearAnimation();
						}
					});
					
					setupTextView.startAnimation(textAnim);
					
					doneUI = new PopupWindow_(doneLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
					doneUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					doneUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                    VertexClientPE.showBugReportDialog(error);
            }
        }
    }));
}

var accountManager;
var accountManagerLayoutLeft;
var accountManagerLayoutCenter;
var accountManagerLayoutRight;

ModPE.restart = function () {
    try {
        var alarmManager = CONTEXT.getSystemService("alarm"),
            intent = CONTEXT.getPackageManager().getLaunchIntentForPackage(CONTEXT.getPackageName());
        intent.addFlags(335544320);
        alarmManager.set(3, SystemClock_.elapsedRealtime() + 500, PendingIntent_.getActivity(CONTEXT, 0, intent, 0));
        new File_(CONTEXT.getFilesDir() + "/running.lock").delete();
        new Thread_({
            run() {
                VertexClientPE.toast("Restarting...");
                Thread_.sleep(500);
                System_.exit(0);
            }
        }).start();
    } catch (e) {
        print("@" + e.lineNumber + ": " + e);
    }
};

VertexClientPE.removeAccount = function(str, layout, view) {
    if(VertexClientPE.accounts.length() != null) {
        var tempAccounts = new JSONArray_();
        for(var i = 0; i < VertexClientPE.accounts.length(); i++) {
            if(VertexClientPE.accounts.get(i) != str) {
                tempAccounts.put(VertexClientPE.accounts.get(i));
            }
        }
        VertexClientPE.accounts = tempAccounts;
    }
    if(layout != null && view != null) {
        try {
            layout.removeView(view);
        } catch(e) {
            //error
        }
    }
    VertexClientPE.saveAccounts();
}

VertexClientPE.showDirectUseAccountDialog = function() {
	CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
                VertexClientPE.loadMainSettings();
                var accountTitle = clientTextView("Direct use account", true);
                var accountNameInput = clientEditText();
                accountNameInput.setTextColor(Color_.WHITE);
                accountNameInput.setSingleLine(true);
                accountNameInput.setHint("Enter an username");
                var accountClientIdInput = clientEditText();
                accountClientIdInput.setTextColor(Color_.WHITE);
                accountClientIdInput.setHint("Enter a client id (leave blank for random)");
                var okButton = clientButton("Ok");
                var cancelButton = clientButton("Cancel");
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(accountTitle);
                dialogLayout.addView(accountNameInput);
                dialogLayout.addView(accountClientIdInput);
                dialogLayout.addView(okButton);
                dialogLayout.addView(cancelButton);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("Direct use account");
                dialog.show();
                okButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        var accountName = accountNameInput.getText().toString();
                        var clientId = accountClientIdInput.getText().toString();
                        if(accountName == null || accountName == "" || accountName.replaceAll(" ", "") == "") {
                            VertexClientPE.toast("Enter an username!");
                            return;
                        }
						if(clientId == null || clientId == "" || clientId.replaceAll(" ", "") == "") {
                            clientId = getRandomInt(100, 999999999).toString();
                        }
                        var shouldRestart = false;
						if(accountName != ModPE.getPlayerName()) {
							ModPE.setPlayerName(accountName);
							shouldRestart = true;
						}
						if(clientId != ModPE.getClientId()) {
							ModPE.changeClientId(clientId);
							shouldRestart = true;
						}
						if(shouldRestart) {
							ModPE.restart();
						}
                    }
                });
                cancelButton.setOnClickListener(new View_.OnClickListener() {
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

VertexClientPE.showAccountManager = function(showBackButton) {
    VertexClientPE.loadAccounts();
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
							mainMenuTextList.dismiss();
						}
					}
					
                    var accountManagerLayout1 = new LinearLayout_(CONTEXT);
                    accountManagerLayout1.setOrientation(1);
                    accountManagerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var accountManagerTitle = clientTextView("Account Manager", true);
                    accountManagerTitle.setTextSize(25);
                    accountManagerTitle.setGravity(Gravity_.CENTER);
                    accountManagerLayout1.addView(accountManagerTitle);
					
					var accountManagerEnter = clientTextView("\n");
					accountManagerLayout1.addView(accountManagerEnter);
					
					var accountManagerScrollViewHeight = (display.heightPixels / 3) * 2;
					
					var accountManagerBottomLayout = new LinearLayout_(CONTEXT);
					accountManagerBottomLayout.setOrientation(LinearLayout_.HORIZONTAL);
					accountManagerBottomLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels - accountManagerScrollViewHeight - accountManagerTitle.getLineHeight() / 2 - accountManagerEnter.getLineHeight() / 2));
					accountManagerBottomLayout.setGravity(Gravity_.CENTER);
					
                    var addAccountButton = clientButton("Add account");
                    addAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
                    addAccountButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewArg) {
                            //show add account dialog
                            VertexClientPE.showAddAccountDialog(showBackButton);
                        }
                    }));
                    accountManagerBottomLayout.addView(addAccountButton);
					
					var directUseAccountButton = clientButton("Direct use");
                    directUseAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, display.heightPixels / 10));
                    directUseAccountButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewArg) {
                            VertexClientPE.showDirectUseAccountDialog();
                        }
                    }));
					accountManagerBottomLayout.addView(directUseAccountButton);
					
					var importAccountButton = clientButton("Import");
                    importAccountButton.setLayoutParams(new LinearLayout_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, display.heightPixels / 10));
                    importAccountButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewArg) {
                            VertexClientPE.toast("W.I.P.");
                        }
                    }));
					//accountManagerBottomLayout.addView(importAccountButton);
                    
                    var accountManagerScrollView = new ScrollView(CONTEXT);
					accountManagerScrollView.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, accountManagerScrollViewHeight - accountManagerTitle.getLineHeight() / 2 - accountManagerEnter.getLineHeight() / 2));
                    
                    var accountManagerLayout = new LinearLayout_(CONTEXT);
                    accountManagerLayout.setOrientation(1);
                    
                    accountManagerScrollView.addView(accountManagerLayout);
                    accountManagerLayout1.addView(accountManagerScrollView);
					accountManagerLayout1.addView(accountManagerBottomLayout);
                    
                    var accountsLength = VertexClientPE.accounts.length();
                    if(VertexClientPE.accounts != null && accountsLength != -1) {
                        for(var i = 0; i < accountsLength; i++) {
                            //if(VertexClientPE.accounts[i].username != null && VertexClientPE.accounts[i].username != undefined && VertexClientPE.accounts[i].username != " ") {
                                var usernameLayout = accountButton(VertexClientPE.accounts.get(i), accountManagerLayout);
                                accountManagerLayout.addView(usernameLayout);
                            //}
                        }
                    }
                    
                    accountManager = new PopupWindow_(accountManagerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    accountManager.setBackgroundDrawable(backgroundGradient());
                    accountManager.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

VertexClientPE.downloadPro = function() {
    ModPE.goToURL("http://filecred.com/A8C1G574");
}

VertexClientPE.getHasUsedCurrentVersion = function() {
    return sharedPref.getString("VertexClientPE.lastUsedVersion", null) == VertexClientPE.currentVersion;
}

VertexClientPE.setHasUsedCurrentVersion = function(opt) {
    if(opt == true) {
        editor.putString("VertexClientPE.lastUsedVersion", VertexClientPE.currentVersion);
    }
    if(opt == false) {
        editor.putString("VertexClientPE.lastUsedVersion", null);
    }
    editor.commit();
}

VertexClientPE.setup = function() {
	currentScreen = ScreenType.start_screen;
	new Thread_(new Runnable_({
		run: function() {
			try {
				VertexClientPE.loadMainSettings();
				VertexClientPE.showSplashScreen();
				VertexClientPE.loadSupport();
				VertexClientPE.checkForUpdates();
				VertexClientPE.loadUpdateDescription();
				//VertexClientPE.loadDownloadCount();
				VertexClientPE.initShopFeatures();
				VertexClientPE.loadNews();
				Thread_.sleep(3000);
			} catch(e) {
				
			} finally {
				CONTEXT.runOnUiThread(new Runnable_({
					run: function() {
						if(!VertexClientPE.getHasUsedCurrentVersion()) {
							userIsNewToCurrentVersion = true;
						}
						
						if(VertexClientPE.loadMainSettings() == null) {
							VertexClientPE.showSetupScreen();
						} else {
							VertexClientPE.specialTick();
							VertexClientPE.secondTick();
							showMenuButton();
						}
						
						if(ModPE.getMinecraftVersion() < VertexClientPE.minVersion) {
							VertexClientPE.showBasicDialog("Compatibility", clientTextView("This version may not be compatible with MCPE v" + ModPE.getMinecraftVersion() + "!"));
						}
						
						VertexClientPE.loadAddons();
						
						VertexClientPE.MusicUtils.initMusicPlayer();
						VertexClientPE.MusicUtils.startMusicPlayer();
						
						if(showNewsSetting == "on") {
							VertexClientPE.toast(news);
						}
					}
				}));
			}
		}
	})).start();
}

function downloadFile(path, url) {
    try {
        var file = new File_(path),
            filename = file.getName(),
            downloadManager = new DownloadManager_.Request(new Uri_.parse(url));
        downloadManager.setTitle(filename);
        downloadManager.setNotificationVisibility(0);
        downloadManager.setDestinationInExternalPublicDir(file.getParent().replace("/sdcard", ""), filename);
        CONTEXT.getSystemService(Context_.DOWNLOAD_SERVICE).enqueue(downloadManager);
    } catch (e) {
        print("@" + e.lineNumber + ": " + e);
    }
};

(function checkFiles() {
    var res = ["clienticon_new.png", "clienticon_new_clicked.png", "play_button.png", "play_button_clicked.png", "twitter_button.png", "twitter_button_clicked.png", "youtube_button.png", "youtube_button_clicked.png", "github_button.png", "github_button_clicked.png", "vertex_logo_new.png", "stevehead.png", "pro_logo.png", "minecraft.ttf"],
        isExisting = true;
    for (var i = res.length; i--;) {
        if (!new File_(PATH, res[i]).exists()) {
            downloadFile(PATH + res[i], GITHUB_URL + "bootstrap/img/" + res[i]);
            isExisting = false;
        }
    }
    if (isExisting) {
        VertexClientPE.setup();
    } else {
        new Thread_({
            run() {
                VertexClientPE.toast("Downloading resource files...");
                while (!isExisting) {
                    Thread_.sleep(1000);
                    for (var i = res.length; i--;) {
                        if (!new File_(PATH, res[i]).exists()) {
                            isExisting = false;
                            break;
                        } else {
                            isExisting = true;
                        }
                    }
                }
                VertexClientPE.toast("All files are downloaded successfully. Your launcher will be restarted in 3 seconds.");
                Thread_.sleep(3000);
                ModPE.restart();
            }
        }).start();
    }
})();

var coordsButton;

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

var trailsModes = [
	["off", "OFF"],
	["flame", "Flame"],
	["redstone", "Redstone"]
];

var renderTypes = [
    EntityRenderType.arrow,
    EntityRenderType.bat,
    EntityRenderType.blaze,
    EntityRenderType.boat,
    //EntityRenderType.camera,
    EntityRenderType.chicken,
    EntityRenderType.cow,
    EntityRenderType.creeper,
    EntityRenderType.egg,
    EntityRenderType.enderman,
    EntityRenderType.expPotion,
    EntityRenderType.experienceOrb,
    //EntityRenderType.fallingTile,
    EntityRenderType.fireball,
    EntityRenderType.fishHook,
    EntityRenderType.ghast,
    EntityRenderType.human,
    EntityRenderType.ironGolem,
    //EntityRenderType.item,
    //EntityRenderType.lavaSlime,
    EntityRenderType.lightningBolt,
    //EntityRenderType.map,
    //EntityRenderType.minecart,
    EntityRenderType.mushroomCow,
    EntityRenderType.ocelot,
    //EntityRenderType.painting,
    //EntityRenderType.pig,
    EntityRenderType.player,
    EntityRenderType.rabbit,
    EntityRenderType.sheep,
    EntityRenderType.silverfish,
    EntityRenderType.skeleton,
    //EntityRenderType.slime,
    EntityRenderType.smallFireball,
    EntityRenderType.snowGolem,
    EntityRenderType.snowball,
    //EntityRenderType.spider,
    EntityRenderType.squid,
    EntityRenderType.thrownPotion,
    //EntityRenderType.tnt,
    //EntityRenderType.unknownItem,
    //EntityRenderType.villager,
    EntityRenderType.villagerZombie,
    EntityRenderType.witch,
    //EntityRenderType.wolf,
    EntityRenderType.zombie,
    EntityRenderType.zombiePigman
];

Entity.renderTypeToName = function(rT) {
    switch(rT) {
        case EntityRenderType.arrow:
            return "Arrow";
        case EntityRenderType.bat:
            return "Bat";
        case EntityRenderType.blaze:
            return "Blaze";
        case EntityRenderType.boat:
            return "Boat";
        case EntityRenderType.camera:
            return "Camera";
        case EntityRenderType.chicken:
            return "Chicken";
        case EntityRenderType.cow:
            return "Cow";
        case EntityRenderType.creeper:
            return "Creeper";
        case EntityRenderType.egg:
            return "Egg";
        case EntityRenderType.enderman:
            return "Enderman";
        case EntityRenderType.expPotion:
            return "Experience Potion";
        case EntityRenderType.experienceOrb:
            return "Experience Orb";
        case EntityRenderType.fallingTile:
            return "Falling Tile";
        case EntityRenderType.fireball:
            return "Fireball";
        case EntityRenderType.fishHook:
            return "Fish Hook";
        case EntityRenderType.ghast:
            return "Ghast";
        case EntityRenderType.human:
            return "Human (Zombie)";
        case EntityRenderType.ironGolem:
            return "Iron Golem";
        case EntityRenderType.item:
            return "Item";
        case EntityRenderType.lavaSlime:
            return "Magma Cube";
        case EntityRenderType.lightningBolt:
            return "Lightning Bolt";
        case EntityRenderType.map:
            return "Map";
        case EntityRenderType.minecart:
            return "Minecart";
        case EntityRenderType.mushroomCow:
            return "Mooshroom";
        case EntityRenderType.ocelot:
            return "Ocelot";
        case EntityRenderType.painting:
            return "Painting";
        case EntityRenderType.pig:
            return "Pig";
        case EntityRenderType.player:
            return "Player";
        case EntityRenderType.rabbit:
            return "Rabbit";
        case EntityRenderType.sheep:
            return "Sheep";
        case EntityRenderType.silverfish:
            return "Silverfish";
        case EntityRenderType.skeleton:
            return "Skeleton";
        case EntityRenderType.slime:
            return "Slime";
        case EntityRenderType.smallFireball:
            return "Small Fireball";
        case EntityRenderType.snowGolem:
            return "Snow Golem";
        case EntityRenderType.snowball:
            return "Snowball";
        case EntityRenderType.spider:
            return "Spider";
        case EntityRenderType.squid:
            return "Squid";
        case EntityRenderType.thrownPotion:
            return "Thrown Potion";
        case EntityRenderType.tnt:
            return "TNT";
        case EntityRenderType.unknownItem:
            return "Unknown Item";
        case EntityRenderType.villager:
            return "Villager";
        case EntityRenderType.villagerZombie:
            return "Zombie Villager";
        case EntityRenderType.witch:
            return "Witch";
        case EntityRenderType.wolf:
            return "Wolf";
        case EntityRenderType.zombie:
            return "Zombie";
        case EntityRenderType.zombiePigman:
            return "Zombie Pigman";
        default:
            return "Unknown";
    }
}

VertexClientPE.setPlayerModel = function(rT, layout) {
    Entity.setRenderType(getPlayerEnt(), rT);
    for(var i = 0; i < layout.getChildCount(); i++) {
        if(layout.getChildAt(i).getText() == Entity.renderTypeToName(rT)) {
            layout.getChildAt(i).setTextColor(Color_.GREEN);
        } else {
            layout.getChildAt(i).setTextColor(Color_.WHITE);
        }
    }
}

VertexClientPE.setTrailsMode = function(trailMode, layout) {
    VertexClientPE.trailsMode = trailMode[0];
    for(var i = 0; i < layout.getChildCount(); i++) {
        if(layout.getChildAt(i).getText() == trailMode[1]) {
            layout.getChildAt(i).setTextColor(Color_.GREEN);
        } else {
            layout.getChildAt(i).setTextColor(Color_.WHITE);
        }
    }
}

VertexClientPE.showTrails = function() {
	var trailsParticleType;
	switch(VertexClientPE.trailsMode) {
		case "flame": {
			trailsParticleType = ParticleType.flame;
			break;
		} case "redstone": {
			trailsParticleType = ParticleType.redstone;
			break;
		}
	}
	Level.addParticle(trailsParticleType, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 2);
}

var hasLoadedAddons = false;

VertexClientPE.update = function() {
    CONTEXT.runOnUiThread(new Runnable_({ run: function() {
        var ru = new Runnable_({ run: function() {
            try {
                var updateVersion = VertexClientPE.latestVersion;
                if(VertexClientPE.latestVersion.indexOf("Alpha") != -1 || VertexClientPE.latestVersion.indexOf("Beta") != -1) {
                    updateVersion = VertexClientPE.latestVersion.split(" ")[0] + "-" + VertexClientPE.latestVersion.split(" ")[1];
                }
                var scriptUrl = new URL_("https://github.com/Vertex-Client/Vertex-Client-PE/releases/download/v" + updateVersion + "/Vertex_Client_PE.modpkg");
                var connection = scriptUrl.openConnection();
                connection.setRequestMethod("GET");
                connection.setDoOutput(true);
                connection.connect();
                connection.getContentLength();
                var input = connection.getInputStream();
                var contents = Array_.newInstance(Byte_.TYPE, 1024);
                var bytesRead = 0;
                while((bytesRead = input.read(contents)) != -1) { 
                    newScript += new String_(contents, 0, bytesRead);              
                }
                var patchesFolder = CONTEXT.getDir("modscripts", 0);
                var scriptFile = new File_(patchesFolder, "Vertex_Client_PE.modpkg");
                var printWriter = new PrintWriter_(scriptFile);
                printWriter.write(newScript);
                printWriter.flush();
                printWriter.close();
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
                    function modTick() {};
                    function useItem() {};
                    function attackHook() {};
                    function explodeHook() {};
                    function chatHook() {};
                    ScriptManager__.setEnabled(scriptFile, false);
                    ScriptManager__.setEnabled(scriptFile, true);
                } catch(e) {
                    //clientMessage("Error: Line 5489: " + e);
                }
            } catch(e) {
                clientMessage("Error: Line 5492: " + e);
            }
        }});
        var th = new Thread_(ru);
        th.start();
        }
    }));
}

var removedBlButton = false;

function newLevel() {
    try {
		currentScreen = ScreenType.ingame;
        lagTimer = 0;
        CONTEXT.runOnUiThread(new Runnable_() {
            run: function() {
				if(Launcher.isBlockLauncher()) {
					if(!removedBlButton) {
						parentView.removeView(parentView.getChildAt(0));
						removedBlButton = true;
					}
				}
                if(accountManager != null) {
                    if(accountManager.isShowing()) {
                        accountManager.dismiss();
                        exitAccountManagerUI.dismiss();
                    }
                }
                if(accountManagerGUI != null) {
                    if(accountManagerGUI.isShowing()) {
                        accountManagerGUI.dismiss();
                    }
                }
				if(mainMenuTextList != null) {
					if(mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
            }
        });
        autoLeaveStage = 0;
        VertexClientPE.playerIsInGame = true;
        VertexClientPE.loadMainSettings();
        if(!VertexClientPE.isRemote()) {
            VertexClientPE.loadDeathCoords();
        }
        VertexClientPE.Utils.loadFov();
        if(VertexClientPE.isPro()) {
            if(!VertexClientPE.hasEarnedProVertexCash()) {
				VertexClientPE.giveProVertexCash();
                VertexClientPE.toast("You just earned 500 V€rt€xCash because you activated Pro successfully!");
                VertexClientPE.moneyToast();
                if(shopCashText != null) {
                    shopCashText.setText("\u26C1 " + VertexClientPE.getVertexCash());
                }
            }
        }
        new Thread_(new Runnable_() {
            run: function() {
                VertexClientPE.checkForUpdates();
                if(VertexClientPE.latestVersion != VertexClientPE.currentVersion && VertexClientPE.latestVersion != undefined) {
                    VertexClientPE.clientMessage("There is a new version available (v" + VertexClientPE.latestVersion + " for Minecraft Pocket Edition v" + latestPocketEditionVersion + ")!");
                    if(!isSupported) {
                        //VertexClientPE.update();
                    }
                } else {
                    CONTEXT.runOnUiThread(new Runnable_() {
                        run: function() {
                            VertexClientPE.toast("You have the latest version");
                        }
                    });
                }
            }
        }).start();
        if(hacksList == null && !VertexClientPE.menuIsShowing) {
            showHacksList();
        }if(hacksList != null && !VertexClientPE.menuIsShowing) {
            if(!hacksList.isShowing()) {
                showHacksList();
            }
        }
        if(!VertexClientPE.isPro()) {
            if(getRandomInt(0, 20) == 10) {
                VertexClientPE.showUpgradeDialog();
            }
        }
    } catch(e) {
        VertexClientPE.showBugReportDialog(e);
    }
}

function deathHook(a, v) {
    if(v == getPlayerEnt()) {
        VertexClientPE.currentWorld.deathX = getPlayerX();
        VertexClientPE.currentWorld.deathY = getPlayerY();
        VertexClientPE.currentWorld.deathZ = getPlayerZ();
		if(!VertexClientPE.isRemote()) {
			VertexClientPE.saveDeathCoords();
		}
    }
	if(killToMorphSetting == "on") {
		if(a == getPlayerEnt()) {
			Entity.setRenderType(getPlayerEnt(), Entity.getRenderType(v));
		}
	}
}

function leaveGame() {
	currentScreen = ScreenType.start_screen;
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            if(hacksList != null) {
                hacksList.dismiss();
            }
            if(GUI != null) {
                GUI.dismiss();
            }
            if(menuBar != null || menu != null) {
                VertexClientPE.closeMenu();
            }
            showMenuButton();
            VertexClientPE.saveMainSettings();
            VertexClientPE.editCopyrightText();
            musicText = "None";
            VertexClientPE.playerIsInGame = false;
        }
    }));
	if(mainMenuTextList == null || !mainMenuTextList.isShowing()) {
		VertexClientPE.showStartScreenBar();
	}
	VertexClientPE.isPaused = false;
}

function settingsScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}
                    
                    var settingsMenuLayout = new LinearLayout_(CONTEXT);
                    settingsMenuLayout.setOrientation(1);
                    settingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var settingsMenuScroll = new ScrollView(CONTEXT);
                    
                    var settingsMenuLayout1 = new LinearLayout_(CONTEXT);
                    settingsMenuLayout1.setOrientation(1);
                    settingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var settingsTitle = clientScreenTitle("Settings");
                    settingsMenuLayout1.addView(settingsTitle);
                    
                    settingsMenuScroll.addView(settingsMenuLayout);
                    settingsMenuLayout1.addView(settingsMenuScroll);
                    
                    var generalTitle = clientSectionTitle("HUD", "rainbow");
                    
                    var hacksListModeSettingFunc = new settingButton("Hacks List Mode");
                    var hacksListModeSettingButton = hacksListModeSettingFunc.getButton();
                    if(hacksListModeSetting == "on") {
                        hacksListModeSettingButton.setText("Normal");
                    } else if(hacksListModeSetting == "counter") {
                        hacksListModeSettingButton.setText("Counter");
                    } else if(hacksListModeSetting == "logo") {
                        hacksListModeSettingButton.setText("Logo");
                    } else if(hacksListModeSetting == "off") {
                        hacksListModeSettingButton.setText("Hidden");
                    }
                    hacksListModeSettingButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg){
                            if(hacksListModeSetting == "off") {
                                hacksListModeSetting = "on";
                                hacksListModeSettingButton.setText("Normal");
                                VertexClientPE.saveMainSettings();
                            } else if(hacksListModeSetting == "on") {
                                hacksListModeSetting = "logo";
                                hacksListModeSettingButton.setText("Logo");
                                VertexClientPE.saveMainSettings();
                            } else {
                                hacksListModeSetting = "off";
                                hacksListModeSettingButton.setText("Hidden");
                                VertexClientPE.saveMainSettings();
                            }
                        }
                    }));
                    
					var mainButtonPositionSettingFunc = new settingButton("Main button position", "Sets the main menu's button position.");
                    var mainButtonPositionSettingButton = mainButtonPositionSettingFunc.getButton();
                    if(mainButtonPositionSetting == "top-right") {
                        mainButtonPositionSettingButton.setText("Top-right");
                    } else {
                        mainButtonPositionSettingButton.setText("Top-left");
                    }
                    mainButtonPositionSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(mainButtonPositionSetting == "top-right") {
                            mainButtonPositionSetting = "top-left";
                            mainButtonPositionSettingButton.setText("Top-left");
                            VertexClientPE.saveMainSettings();
                        } else {
                            mainButtonPositionSetting = "top-right";
                            mainButtonPositionSettingButton.setText("Top-right");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var mainButtonStyleSettingFunc = new settingButton("Main button style", "Sets the main menu's button style.");
                    var mainButtonStyleSettingButton = mainButtonStyleSettingFunc.getButton();
                    if(mainButtonStyleSetting == "normal") {
                        mainButtonStyleSettingButton.setText("Normal");
                    } else if(mainButtonStyleSetting == "global_background") {
                        mainButtonStyleSettingButton.setText("Global background (fits better)");
                    } else if(mainButtonStyleSetting == "no_background") {
                        mainButtonStyleSettingButton.setText("Invisible background");
                    } else if(mainButtonStyleSetting == "classic") {
                        mainButtonStyleSettingButton.setText("Classic");
                    }
                    mainButtonStyleSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(mainButtonStyleSetting == "normal") {
                            mainButtonStyleSetting = "global_background";
                            mainButtonStyleSettingButton.setText("Global background (fits better)");
                        } else if(mainButtonStyleSetting == "global_background") {
                            mainButtonStyleSetting = "no_background";
                            mainButtonStyleSettingButton.setText("Invisible background");
                        } else if(mainButtonStyleSetting == "no_background") {
                            mainButtonStyleSetting = "classic";
                            mainButtonStyleSettingButton.setText("Classic");
                        } else if(mainButtonStyleSetting == "classic") {
                            mainButtonStyleSetting = "normal";
                            mainButtonStyleSettingButton.setText("Normal");
                        }
						VertexClientPE.saveMainSettings();
                    }
                    }));
					
					var themeTitle = clientSectionTitle("Theme", "rainbow");
                    
					var themeSettingFunc = new settingButton("Color", "Sets the Client's theme.");
                    var themeSettingButton = themeSettingFunc.getButton();
                    if(themeSetting == "green") {
                        themeSettingButton.setText("Green");
                    } else if(themeSetting == "red") {
                        themeSettingButton.setText("Red");
                    } else if(themeSetting == "blue") {
                        themeSettingButton.setText("Blue");
                    } else if(themeSetting == "purple") {
                        themeSettingButton.setText("Purple");
                    } else if(themeSetting == "violet") {
                        themeSettingButton.setText("Violet");
                    } else if(themeSetting == "yellow") {
                        themeSettingButton.setText("Yellow");
                    } else if(themeSetting == "orange") {
                        themeSettingButton.setText("Orange");
                    } else if(themeSetting == "brown") {
                        themeSettingButton.setText("Brown");
                    } else if(themeSetting == "grey") {
                        themeSettingButton.setText("Grey");
                    } else if(themeSetting == "white") {
                        themeSettingButton.setText("White");
                    } else if(themeSetting == "black") {
                        themeSettingButton.setText("Black");
                    }
                    themeSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(themeSetting == "green") {
                            themeSetting = "red";
                            themeSettingButton.setText("Red");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "red") {
                            themeSetting = "blue";
                            themeSettingButton.setText("Blue");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "blue") {
                            themeSetting = "purple";
                            themeSettingButton.setText("Purple");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "purple") {
                            themeSetting = "violet";
                            themeSettingButton.setText("Violet");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "violet") {
                            themeSetting = "yellow";
                            themeSettingButton.setText("Yellow");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "yellow") {
                            themeSetting = "orange";
                            themeSettingButton.setText("Orange");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "orange") {
                            themeSetting = "brown";
                            themeSettingButton.setText("Brown");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "brown") {
                            themeSetting = "grey";
                            themeSettingButton.setText("Grey");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "grey") {
                            themeSetting = "white";
                            themeSettingButton.setText("White");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "white") {
                            themeSetting = "black";
                            themeSettingButton.setText("Black");
                            VertexClientPE.saveMainSettings();
                        } else if(themeSetting == "black") {
                            themeSetting = "green";
                            themeSettingButton.setText("Green");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
                    var useLightThemeSettingFunc = new settingButton("Lighter theme colors", "Use light theme colors if available.");
                    var useLightThemeSettingButton = useLightThemeSettingFunc.getButton();
                    if(useLightThemeSetting == "on") {
                        useLightThemeSettingButton.setText("ON");
                    } else if(useLightThemeSetting == "off") {
                        useLightThemeSettingButton.setText("OFF");
                    }
                    useLightThemeSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(useLightThemeSetting == "on") {
                            useLightThemeSetting = "off";
                            useLightThemeSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(useLightThemeSetting == "off") {
                            useLightThemeSetting = "on";
                            useLightThemeSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
					var buttonStyleSettingFunc = new settingButton("Button style", "Change the button style.");
                    var buttonStyleSettingButton = buttonStyleSettingFunc.getButton();
                    if(buttonStyleSetting == "normal") {
                        buttonStyleSettingButton.setText("Normal");
                    } else if(buttonStyleSetting == "normal_nostrokes") {
                        buttonStyleSettingButton.setText("Normal (no strokes)");
                    } else if(buttonStyleSetting == "legacy") {
                        buttonStyleSettingButton.setText("Legacy");
                    } else if(buttonStyleSetting == "legacy_inverted") {
                        buttonStyleSettingButton.setText("Legacy (inverted)");
                    } else if(buttonStyleSetting == "transparent") {
                        buttonStyleSettingButton.setText("Transparent");
                    } else if(buttonStyleSetting == "invisible") {
                        buttonStyleSettingButton.setText("Invisible (less lagg)");
                    }
                    buttonStyleSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(buttonStyleSetting == "normal") {
                            buttonStyleSetting = "normal_nostrokes";
                            buttonStyleSettingButton.setText("Normal (no strokes)");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "normal_nostrokes") {
                            buttonStyleSetting = "legacy";
                            buttonStyleSettingButton.setText("Legacy");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "legacy") {
                            buttonStyleSetting = "legacy_inverted";
                            buttonStyleSettingButton.setText("Legacy (inverted)");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "legacy_inverted") {
                            buttonStyleSetting = "transparent";
                            buttonStyleSettingButton.setText("Transparent");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "transparent") {
                            buttonStyleSetting = "invisible";
                            buttonStyleSettingButton.setText("Invisible (less lagg)");
                            VertexClientPE.saveMainSettings();
                        } else if(buttonStyleSetting == "invisible") {
                            buttonStyleSetting = "normal";
                            buttonStyleSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var backgroundStyleSettingFunc = new settingButton("Background style", "Changes the background style.");
                    var backgroundStyleSettingButton = backgroundStyleSettingFunc.getButton();
                    if(backgroundStyleSetting == "normal") {
                        backgroundStyleSettingButton.setText("Normal");
                    } else if(backgroundStyleSetting == "minecraft_dirt") {
                        backgroundStyleSettingButton.setText("Minecraft (dirt)");
                    }
                    backgroundStyleSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(backgroundStyleSetting == "normal") {
                            backgroundStyleSetting = "minecraft_dirt";
                            backgroundStyleSettingButton.setText("Minecraft (dirt)");
                            VertexClientPE.saveMainSettings();
                        } else if(backgroundStyleSetting == "minecraft_dirt") {
                            backgroundStyleSetting = "normal";
                            backgroundStyleSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var transparentBgSettingFunc = new settingButton("Transparent backgrounds", "Makes screens and dialogs transparent.");
                    var transparentBgSettingButton = transparentBgSettingFunc.getButton();
                    if(transparentBgSetting == "on") {
                        transparentBgSettingButton.setText("ON");
                    } else if(transparentBgSetting == "off") {
                        transparentBgSettingButton.setText("OFF");
                    }
                    transparentBgSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(transparentBgSetting == "on") {
                            transparentBgSetting = "off";
                            transparentBgSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(transparentBgSetting == "off") {
                            transparentBgSetting = "on";
                            transparentBgSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
					var mcpeGUISettingFunc = new settingButton("MCPE GUI", "Change the MCPE GUI.");
                    var mcpeGUISettingButton = mcpeGUISettingFunc.getButton();
                    if(mcpeGUISetting == "default") {
                        mcpeGUISettingButton.setText("Default");
                    } else if(mcpeGUISetting == "green") {
                        mcpeGUISettingButton.setText("Green");
                    } else if(mcpeGUISetting == "red") {
                        mcpeGUISettingButton.setText("Red");
                    } else if(mcpeGUISetting == "blue") {
                        mcpeGUISettingButton.setText("Blue");
                    } else if(mcpeGUISetting == "purple") {
                        mcpeGUISettingButton.setText("Purple");
                    } else if(mcpeGUISetting == "yellow") {
                        mcpeGUISettingButton.setText("Yellow");
                    } else if(mcpeGUISetting == "white") {
                        mcpeGUISettingButton.setText("White");
                    } else if(mcpeGUISetting == "black") {
                        mcpeGUISettingButton.setText("Black");
                    }
                    mcpeGUISettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(mcpeGUISetting == "default") {
                            mcpeGUISetting = "green";
                            mcpeGUISettingButton.setText("Green");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "green") {
                            mcpeGUISetting = "red";
                            mcpeGUISettingButton.setText("Red");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "red") {
                            mcpeGUISetting = "blue";
                            mcpeGUISettingButton.setText("Blue");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "blue") {
                            mcpeGUISetting = "purple";
                            mcpeGUISettingButton.setText("Purple");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "purple") {
                            mcpeGUISetting = "yellow";
                            mcpeGUISettingButton.setText("Yellow");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "yellow") {
                            mcpeGUISetting = "white";
                            mcpeGUISettingButton.setText("White");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "white") {
                            mcpeGUISetting = "black";
                            mcpeGUISettingButton.setText("Black");
                            VertexClientPE.saveMainSettings();
                        } else if(mcpeGUISetting == "black") {
                            mcpeGUISetting = "default";
                            mcpeGUISettingButton.setText("Default");
                            VertexClientPE.saveMainSettings();
                        }
                        VertexClientPE.setupMCPEGUI();
                        VertexClientPE.toast("Restart your MCPE launcher now!");
                    }
                    }));
					
					var fontSettingFunc = new settingButton("Font", "Change the font/typeface.");
                    var fontSettingButton = fontSettingFunc.getButton();
                    if(fontSetting == "default") {
                        fontSettingButton.setText("Default");
                    } else if(fontSetting == "minecraft") {
                        fontSettingButton.setText("Minecraft");
                    }
					fontSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewarg) {
							if(fontSetting == "default") {
								fontSetting = "minecraft";
								fontSettingButton.setText("Minecraft");
							} else if(fontSetting == "minecraft") {
								fontSetting = "default";
								fontSettingButton.setText("Default");
							}
							VertexClientPE.font = fontSetting=="minecraft"?Typeface_.createFromFile(new File_(PATH, "minecraft.ttf")):VertexClientPE.defaultFont;
							MinecraftButtonLibrary.ProcessedResources.font = VertexClientPE.font;
							VertexClientPE.saveMainSettings();
						}
                    }));
                    
                    var menuTitle = clientSectionTitle("Menu", "rainbow");
                    
					var menuAnimationsSettingFunc = new settingButton("Menu animations", "Show menu animations.");
                    var menuAnimationsSettingButton = menuAnimationsSettingFunc.getButton();
                    if(menuAnimationsSetting == "on") {
                        menuAnimationsSettingButton.setText("ON");
                    } else if(menuAnimationsSetting == "off") {
                        menuAnimationsSettingButton.setText("OFF");
                    }
                    menuAnimationsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(menuAnimationsSetting == "on") {
                            menuAnimationsSetting = "off";
                            menuAnimationsSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(menuAnimationsSetting == "off") {
                            menuAnimationsSetting = "on";
                            menuAnimationsSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var commandsTitle = clientSectionTitle("Commands", "rainbow");
					
					var commandsSettingFunc = new settingButton("Commands", "Toggle commands off to login on servers like Mineplex PE.");
                    var commandsSettingButton = commandsSettingFunc.getButton();
                    if(commandsSetting == "on") {
                        commandsSettingButton.setText("ON");
                    } else if(commandsSetting == "off") {
                        commandsSettingButton.setText("OFF");
                    }
                    commandsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(commandsSetting == "on") {
                            commandsSetting = "off";
                            commandsSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(commandsSetting == "off") {
                            commandsSetting = "on";
                            commandsSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var cmdPrefixFunc = new settingButton("Command prefix", "Change the first character of all Vertex Client PE commands.");
                    var cmdPrefixButton = cmdPrefixFunc.getButton();
                    cmdPrefixButton.setText(cmdPrefix);
                    cmdPrefixButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(cmdPrefix == ".") {
                            cmdPrefix = "#";
                            cmdPrefixButton.setText("#");
                            VertexClientPE.saveMainSettings();
                        } else if(cmdPrefix == "#") {
                            cmdPrefix = "$";
                            cmdPrefixButton.setText("$");
                            VertexClientPE.saveMainSettings();
                        } else if(cmdPrefix == "$") {
                            cmdPrefix = "@";
                            cmdPrefixButton.setText("@");
                            VertexClientPE.saveMainSettings();
                        } else if(cmdPrefix == "@") {
                            cmdPrefix = ".";
                            cmdPrefixButton.setText(".");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
                    
                    var otherTitle = clientSectionTitle("Other", "rainbow");
                    
					var showNewsSettingFunc = new settingButton("Show news", "Show news at start.");
                    var showNewsSettingButton = showNewsSettingFunc.getButton();
                    if(showNewsSetting == "on") {
                        showNewsSettingButton.setText("ON");
                    } else if(showNewsSetting == "off") {
                        showNewsSettingButton.setText("OFF");
                    }
                    showNewsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(showNewsSetting == "on") {
                            showNewsSetting = "off";
                            showNewsSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        } else if(showNewsSetting == "off") {
                            showNewsSetting = "on";
                            showNewsSettingButton.setText("ON");
                            VertexClientPE.saveMainSettings();
                        }
                    }
                    }));
					
					var showMoneyToastsSettingFunc = new settingButton("Show money updates", "Show a toast message when earning V€rt€xCash.");
                    var showMoneyToastsSettingButton = showMoneyToastsSettingFunc.getButton();
                    if(showMoneyToastsSetting == "on") {
                        showMoneyToastsSettingButton.setText("ON");
                    } else if(showMoneyToastsSetting == "off") {
                        showMoneyToastsSettingButton.setText("OFF");
                    }
                    showMoneyToastsSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(showMoneyToastsSetting == "on") {
                            showMoneyToastsSetting = "off";
                            showMoneyToastsSettingButton.setText("OFF");
                        } else if(showMoneyToastsSetting == "off") {
                            showMoneyToastsSetting = "on";
                            showMoneyToastsSettingButton.setText("ON");
                        }
						VertexClientPE.saveMainSettings();
                    }
                    }));
                    
					var playMusicSettingFunc = new settingButton("Automatically play music", "Automatically play music.");
                    var playMusicSettingButton = playMusicSettingFunc.getButton();
                    if(playMusicSetting == "on") playMusicSetting = "off";
                    /*if(playMusicSetting == "on") {
                        playMusicSettingButton.setText("Normal");
                    } else */if(playMusicSetting == "shuffle") {
                        playMusicSettingButton.setText("Shuffle");
                    } else if(playMusicSetting == "off") {
                        playMusicSettingButton.setText("OFF");
                    }
                    playMusicSettingButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        //if(playMusicSetting == "on") {
                        if(playMusicSetting == "off") {
                            playMusicSetting = "shuffle";
                            playMusicSettingButton.setText("Shuffle");
                            VertexClientPE.saveMainSettings();
                        } else if(playMusicSetting == "shuffle") {
                            playMusicSetting = "off";
                            playMusicSettingButton.setText("OFF");
                            VertexClientPE.saveMainSettings();
                        }/* else if(playMusicSetting == "off") {
                            playMusicSetting = "on";
                            playMusicSettingButton.setText("Normal");
                            VertexClientPE.saveMainSettings();
                            VertexClientPE.loadMainSettings();
                            VertexClientPE.resetMusic();
                            //VertexClientPE.playMusic();
                            print("This mode is not ready yet!");
                        }*/
                    }
                    }));
					
					var webBrowserStartPageSettingFunc = new settingButton("Webbrowser startpage", "Change the default webbrowser page.");
                    var webBrowserStartPageSettingButton = webBrowserStartPageSettingFunc.getButton();
                    webBrowserStartPageSettingButton.setText("Change");
                    webBrowserStartPageSettingButton.setOnClickListener(new View_.OnClickListener({
						onClick: function(viewarg) {
							VertexClientPE.showWebbrowserStartPageDialog();
						}
                    }));
                    
                    settingsMenuLayout.addView(generalTitle);
                    VertexClientPE.addView(settingsMenuLayout, hacksListModeSettingFunc);
                    VertexClientPE.addView(settingsMenuLayout, mainButtonPositionSettingFunc);
                    VertexClientPE.addView(settingsMenuLayout, mainButtonStyleSettingFunc);
                    settingsMenuLayout.addView(themeTitle);
					VertexClientPE.addView(settingsMenuLayout, themeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, useLightThemeSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, buttonStyleSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, backgroundStyleSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, transparentBgSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, mcpeGUISettingFunc);
					VertexClientPE.addView(settingsMenuLayout, fontSettingFunc);
                    settingsMenuLayout.addView(menuTitle);
					VertexClientPE.addView(settingsMenuLayout, menuAnimationsSettingFunc);
					settingsMenuLayout.addView(commandsTitle);
					VertexClientPE.addView(settingsMenuLayout, commandsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, cmdPrefixFunc);
                    settingsMenuLayout.addView(otherTitle);
					VertexClientPE.addView(settingsMenuLayout, showNewsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, showMoneyToastsSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, playMusicSettingFunc);
					VertexClientPE.addView(settingsMenuLayout, webBrowserStartPageSettingFunc);

                    settingsMenu = new PopupWindow_(settingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    settingsMenu.setBackgroundDrawable(backgroundGradient());
                    settingsMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occured: ' + error);
                    VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

function devSettingsScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}
                    
                    var devSettingsMenuLayout = new LinearLayout_(CONTEXT);
                    devSettingsMenuLayout.setOrientation(1);
                    devSettingsMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var devSettingsMenuScroll = new ScrollView(CONTEXT);
                    
                    var devSettingsMenuLayout1 = new LinearLayout_(CONTEXT);
                    devSettingsMenuLayout1.setOrientation(1);
                    devSettingsMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var devSettingsTitle = clientScreenTitle("Developer Settings");
                    devSettingsMenuLayout1.addView(devSettingsTitle);
                    
                    devSettingsMenuScroll.addView(devSettingsMenuLayout);
                    devSettingsMenuLayout1.addView(devSettingsMenuScroll);
                    
                    var generalTitle = clientSectionTitle("General", "rainbow");
                    
                    var debugModeSettingFunc = new settingButton("Debug mode", "Show debug messages.");
                    var debugModeSettingButton = debugModeSettingFunc.getButton();
                    if(VertexClientPE.isDebugMode()) {
                        debugModeSettingButton.setText("ON");
                    } else {
                        debugModeSettingButton.setText("OFF");
                    }
                    debugModeSettingButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg){
                            VertexClientPE.setIsDebugMode(!VertexClientPE.isDebugMode());
							if(VertexClientPE.isDebugMode()) {
								debugModeSettingButton.setText("ON");
							} else {
								debugModeSettingButton.setText("OFF");
							}
                        }
                    }));
					
					var expModeSettingFunc = new settingButton("Experimental features", "Show experimental features that are still in development.");
                    var expModeSettingButton = expModeSettingFunc.getButton();
                    if(VertexClientPE.isExpMode()) {
                        expModeSettingButton.setText("ON");
                    } else {
                        expModeSettingButton.setText("OFF");
                    }
                    expModeSettingButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg){
                            VertexClientPE.setIsExpMode(!VertexClientPE.isExpMode());
							if(VertexClientPE.isExpMode()) {
								expModeSettingButton.setText("ON");
							} else {
								expModeSettingButton.setText("OFF");
							}
                        }
                    }));
					
					var dataTitle = clientSectionTitle("Data", "rainbow");
					
					var resetDataSettingFunc = new settingButton("Reset all data", "Resets all data (including Pro).");
                    var resetDataSettingButton = resetDataSettingFunc.getButton();
                    resetDataSettingButton.setText("Reset");
                    resetDataSettingButton.setOnClickListener(new View_.OnClickListener({
                        onClick: function(viewarg){
                            VertexClientPE.resetData();
                        }
                    }));
                    
                    devSettingsMenuLayout.addView(generalTitle);
                    VertexClientPE.addView(devSettingsMenuLayout, debugModeSettingFunc);
                    VertexClientPE.addView(devSettingsMenuLayout, expModeSettingFunc);
					devSettingsMenuLayout.addView(dataTitle);
                    VertexClientPE.addView(devSettingsMenuLayout, resetDataSettingFunc);

                    devSettingsMenu = new PopupWindow_(devSettingsMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    devSettingsMenu.setBackgroundDrawable(backgroundGradient());
                    devSettingsMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occured: ' + error);
                    VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

function informationScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}
                    
                    var informationMenuLayout1 = new LinearLayout_(CONTEXT);
                    informationMenuLayout1.setOrientation(1);
                    informationMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var informationMenuScrollView = new ScrollView(CONTEXT);

                    var informationMenuLayout = new LinearLayout_(CONTEXT);
                    informationMenuLayout.setOrientation(1);
                    informationMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var informationTitle = clientScreenTitle("Information");
                    
                    informationMenuLayout1.addView(informationTitle);
                    informationMenuLayout1.addView(clientTextView("\n"));
                    informationMenuScrollView.addView(informationMenuLayout);
                    informationMenuLayout1.addView(informationMenuScrollView);
                    
                    var informationText = clientTextView("\u00A9 peacestorm, imYannic, _TXMO, LPMG and Astro36 | 2015 - 2016. Some rights reserved.\nThanks to @_TXMO for the original button graphics and @imYannic for some other graphic designs.", true);
                    
                    var enterOne = clientTextView("\n");
                    var hrView = clientHR();
                    var enterTwo = clientTextView("\n");
                    
                    informationMenuLayout.addView(informationText);
                    informationMenuLayout.addView(enterOne);
                    informationMenuLayout.addView(hrView);
                    informationMenuLayout.addView(enterTwo);
                    
                    var minecraftInfoTitle = clientSectionTitle("Minecraft info");
                
                    var minecraftVersion = ModPE.getMinecraftVersion();
                    var minecraftVersionTextView = clientTextView("Version: " + minecraftVersion);
                    
                    var username = ModPE.getPlayerName();
                    var usernameTextView = clientTextView("Username: " + username);
                    
                    var clientId = ModPE.getClientId();
                    var clientIdTextView = clientTextView("Client ID: " + clientId);
                    
                    var vertexInfoTitle = clientSectionTitle("Vertex info");
                    
                    var vertexVersion = VertexClientPE.currentVersion;
                    var vertexVersionTextView = clientTextView("Version: " + vertexVersion);
					
					var vertexEdition = VertexClientPE.edition;
                    var vertexEditionTextView = clientTextView("Edition: " + vertexEdition);
                    
                    var statusType = "normal user";
                    if(VertexClientPE.isDevMode()) {
                        statusType = "developer";
                    }
                    var statusTextView = clientTextView("Status: " + statusType);
					statusTextView.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							VertexClientPE.setIsDevMode(!VertexClientPE.isDevMode());
							if(VertexClientPE.isDevMode()) {
								statusType = "developer";
								VertexClientPE.toast("You're a developer now!");
							} else {
								statusType = "normal user";
								VertexClientPE.setIsDebugMode(false);
								VertexClientPE.setIsExpMode(false);
								VertexClientPE.toast("You're no longer a developer!");
							}
							statusTextView.setText("Status: " + statusType);
						}
					});
                    
                    var proType = "no";
                    if(VertexClientPE.isPro()) {
                        proType = "yes";
                    }
                    var proTextView = clientTextView("Pro: " + proType);
                    
                    var deviceInfoTitle = clientSectionTitle("Device info");
                    
                    var androidVersion = ModPE.getAndroidVersion();
                    var androidVersionTextView = clientTextView("Android version: " + androidVersion);
                    
                    var deviceType = VertexClientPE.getDeviceName();
                    var deviceTextView = clientTextView("Device: " + deviceType);
                    
                    informationMenuLayout.addView(minecraftInfoTitle);
                    informationMenuLayout.addView(minecraftVersionTextView);
                    informationMenuLayout.addView(usernameTextView);
                    informationMenuLayout.addView(clientIdTextView);
                    //-------------------------------------------
                    informationMenuLayout.addView(vertexInfoTitle);
                    informationMenuLayout.addView(vertexVersionTextView);
                    informationMenuLayout.addView(vertexEditionTextView);
                    informationMenuLayout.addView(statusTextView);
                    informationMenuLayout.addView(proTextView);
                    //-------------------------------------------
                    informationMenuLayout.addView(deviceInfoTitle);
                    informationMenuLayout.addView(androidVersionTextView);
                    informationMenuLayout.addView(deviceTextView);

                    informationMenu = new PopupWindow_(informationMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    informationMenu.setBackgroundDrawable(backgroundGradient());
                    informationMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

var helpSections = [["Where do I report issues?", "You can report issues at http://bit.ly/VertexIssues."], ["How do I earn V€rt€xCash?", "Normal users earn 10 V€rt€xCash every minute, Pro users earn 20 every minute. In addition, Pro users get 500 V€rt€xCash as a gift."], ["How can I add shortcuts?", "Tap the star button in a mod's ... dialog to make it favorite. The mod will now have its own shortcut."], ["Website", "Our website is http://Vertex-Client.ml/."], ["Twitter", "Our Twitter account is @VertexHX."]];

function helpScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}

                    var helpMenuLayout = new LinearLayout_(CONTEXT);
                    helpMenuLayout.setOrientation(1);
                    helpMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var helpMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var helpMenuLayout1 = new LinearLayout_(CONTEXT);
                    helpMenuLayout1.setOrientation(1);
                    helpMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    helpMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    var helpTitle = clientScreenTitle("Help");
                    
                    var helpEnter = clientTextView("\n");
                    
                    helpMenuLayout1.addView(helpTitle);
                    helpMenuLayout1.addView(helpEnter);
                    helpMenuLayoutScroll.addView(helpMenuLayout);
                    helpMenuLayout1.addView(helpMenuLayoutScroll);
                    
                    helpSections.forEach(function(element, index, array) {
                        if(index != 0) {
                            var helpSectionEnter = clientTextView("\n");
                            helpSectionEnter.setTextSize(10);
                            helpMenuLayout.addView(helpSectionEnter);
                        }
                        helpMenuLayout.addView(helpSection(element[0], element[1]));
                    });

                    helpMenu = new PopupWindow_(helpMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    helpMenu.setBackgroundDrawable(backgroundGradient());
                    helpMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function previewScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}

                    var previewMenuLayout = new LinearLayout_(CONTEXT);
                    previewMenuLayout.setOrientation(1);
                    previewMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var previewMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var previewMenuLayout1 = new LinearLayout_(CONTEXT);
                    previewMenuLayout1.setOrientation(1);
                    previewMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    previewMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    var previewTitle = clientScreenTitle("Preview");
                    
                    previewMenuLayout1.addView(previewTitle);
                    previewMenuLayoutScroll.addView(previewMenuLayout);
                    previewMenuLayout1.addView(previewMenuLayoutScroll);
					
					//Webview: set url to latest preview vid
					
					var previewWebView = new WebView_(CONTEXT);
					var wS = previewWebView.getSettings();
					
					var previewLatestUrl = "http://bit.ly/VertexListEmbed";
					var frameVideo = "<html><body><center><iframe width=\"420\" height=\"315\" src=\"" + previewLatestUrl + "\" frameborder=\"0\" allowfullscreen></iframe></center></body></html>";

					wS.setJavaScriptEnabled(true);
					previewWebView.setBackgroundColor(0x00000000);
					previewWebView.setWebChromeClient(new WebChromeClient_());
					previewWebView.setWebViewClient(new WebViewClient_());

					previewWebView.loadData(frameVideo, "text/html", "utf-8");
					
					previewMenuLayout.addView(previewWebView);

                    previewMenu = new PopupWindow_(previewMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    previewMenu.setBackgroundDrawable(backgroundGradient());
					previewMenu.setOnDismissListener(new PopupWindow_.OnDismissListener() {
						onDismiss: function() {
							previewWebView.loadUrl("about:blank");
							if(exitPreviewUI != null) {
								if(exitPreviewUI.isShowing()) {
									exitPreviewUI.dismiss()
								}
							}
						}
					});
                    previewMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function addonScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}

                    var addonMenuLayout = new LinearLayout_(CONTEXT);
                    addonMenuLayout.setOrientation(1);
                    addonMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var addonMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var addonMenuLayout1 = new LinearLayout_(CONTEXT);
                    addonMenuLayout1.setOrientation(1);
                    addonMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var addonTitle = clientScreenTitle("Addons");
                    addonMenuLayout1.addView(addonTitle);
					
					var addonDownloadTextView = clientTextView("Download addons");
					addonDownloadTextView.setGravity(Gravity_.CENTER);
					addonDownloadTextView.setPaintFlags(addonDownloadTextView.getPaintFlags() | Paint_.UNDERLINE_TEXT_FLAG);
					addonDownloadTextView.setOnClickListener(new View_.OnClickListener() {
						onClick: function(v) {
							ModPE.goToURL("http://Vertex-Client.ml/#addons");
						}
					});
					addonMenuLayout1.addView(addonDownloadTextView);
					addonMenuLayout1.addView(clientTextView("\n"));
					
					addonMenuLayoutScroll.addView(addonMenuLayout);
                    addonMenuLayout1.addView(addonMenuLayoutScroll);
                    
                    if(VertexClientPE.addons.length == 0) {
                        var noAddonsText = clientTextView("You either don't have any addons or you should restart to load them!");
						noAddonsText.setGravity(Gravity_.CENTER);
                        addonMenuLayout.addView(noAddonsText);
                    }
                    
                    VertexClientPE.addons.forEach(function(element, index, array) {
                        addonMenuLayout.addView(new addonButton(element));
                    });

                    addonMenu = new PopupWindow_(addonMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    addonMenu.setBackgroundDrawable(backgroundGradient());
                    addonMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function milestonesScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
    CONTEXT.runOnUiThread(new Runnable_({
        run: function () {
            try {
                if (GUI != null && GUI.isShowing()) {
                    GUI.dismiss();
                }
                if (hacksList != null && hacksList.isShowing()) {
                    hacksList.dismiss();
                }
                if (mainMenuTextList != null && mainMenuTextList.isShowing()) {
                    mainMenuTextList.dismiss();
                }
                if (accountManagerGUI != null && accountManagerGUI.isShowing()) {
                    accountManagerGUI.dismiss();
                }

                var milestones = [
                    ["Release of v1.0 Alpha", "Released on 24th January 2016."],
                    ["100 Twitter followers", "Reached in May 2016."],
                    ["50k downloads", "Reached in July 2016."],
                    ["300 Twitter followers", "Reached in September 2016."],
                    ["100k downloads", "Reached in October 2016."]
                ];

                var scrollView = new android.widget.HorizontalScrollView(CONTEXT),
                    layout = new LinearLayout_(CONTEXT),
                    frameLayout = new FrameLayout_(CONTEXT),
                    backgroundParams = new LinearLayout_.LayoutParams(-1, dip2px(2)),
                    backgroundLayout = new LinearLayout_(CONTEXT),
                    foregroundParams,
                    foregroundLayout = new LinearLayout_(CONTEXT),
                    line = new TextView_(CONTEXT),
                    circleSize,
                    circleButton,
                    scaler;

                backgroundParams.setMargins(dip2px(32), dip2px(48), dip2px(48), dip2px(48));
                line.setBackgroundDrawable(new ColorDrawable_(Color_.WHITE));
                line.setLayoutParams(backgroundParams);
                
                backgroundLayout.addView(line);
                backgroundLayout.setLayoutParams(new LinearLayout_.LayoutParams(-1, dip2px(66)));

                foregroundLayout.setGravity(Gravity_.CENTER | Gravity_.LEFT);

                for (var i = 0, len = milestones.length; i < len; i++) {
                    circleSize = i === (len - 1) ? dip2px(48) : dip2px(32);
                    foregroundParams = new LinearLayout_.LayoutParams(dip2px(circleSize), dip2px(circleSize));
                    foregroundParams.setMargins(i === 0 ? 0 : dip2px(32), 0, 0, 0);

                    circleButton = new Button_(CONTEXT);
                    circleButton.setBackgroundDrawable(drawCircle(Color_.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))));
                    circleButton.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
                    circleButton.setGravity(Gravity_.CENTER);
                    circleButton.setHorizontallyScrolling(true);
                    circleButton.setId(i);
                    circleButton.setLayoutParams(foregroundParams);
                    circleButton.setMarqueeRepeatLimit(-1);
                    circleButton.setSelected(true);
                    circleButton.setSingleLine();
                    circleButton.setText(milestones[i][0]);
                    circleButton.setTextColor(Color_.WHITE);
                    circleButton.setTypeface(VertexClientPE.font);

                    circleButton.setOnClickListener(new View_.OnClickListener({
                        onClick(v) {
                            var id = v.getId();
                            VertexClientPE.showBasicDialog(milestones[id][0], clientTextView(milestones[id][1]));
                        }
                    }));
                    circleButton.setOnLongClickListener(new View_.OnLongClickListener({
                        onLongClick(v) {
                            v.setBackgroundDrawable(drawCircle(Color_.rgb(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))));
                            return true;
                        }
                    }));

                    if (fontSetting == "default") {
                        circleButton.setTextColor(Color_.WHITE);
                        circleButton.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
                    } else if (fontSetting == "minecraft") {
                        MinecraftButtonLibrary.addMinecraftStyleToTextView(circleButton);
                    }

                    scaler = new android.view.animation.ScaleAnimation(0.7, 1.0, 0.7, 1.0);
                    scaler.setDuration(500);

                    circleButton.startAnimation(scaler);
                    foregroundLayout.addView(circleButton);
                }

                frameLayout.addView(backgroundLayout);
                frameLayout.addView(foregroundLayout);

                layout.addView(clientScreenTitle("Milestones\n"));
                layout.addView(frameLayout);
                layout.addView(clientTextView("\nThanks for your support!", true));
                layout.setOrientation(1);
                layout.setPadding(dip2px(16), dip2px(16), dip2px(16), dip2px(16));

                scrollView.addView(layout);

                milestonesMenu = new PopupWindow_(scrollView, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                milestonesMenu.setBackgroundDrawable(backgroundGradient());
                milestonesMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
            } catch (e) {
                print("An error occurred: " + e + " #" + e.lineNumber);
            }
        }
    }));
}

/**
  * function playerCustomizerScreen()
  * @author peacestorm
  * @since v1.1
  * @todo Models/morphing, collision size, particles?
 */
function playerCustomizerScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}
					
					var playerCustomizerLayout1 = new LinearLayout_(CONTEXT);
                    playerCustomizerLayout1.setOrientation(1);
                    playerCustomizerLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var playerCustomizerTitle = clientTextView("Player Customizer", true);
                    playerCustomizerTitle.setTextSize(25);
                    playerCustomizerTitle.setGravity(Gravity_.CENTER);
                    playerCustomizerLayout1.addView(playerCustomizerTitle);

                    var playerCustomizerLayout = new LinearLayout_(CONTEXT);
                    playerCustomizerLayout.setOrientation(LinearLayout_.HORIZONTAL);
                    playerCustomizerLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
					
					var playerCustomizerLayoutLeft = new LinearLayout_(CONTEXT);
                    playerCustomizerLayoutLeft.setOrientation(1);
                    playerCustomizerLayoutLeft.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var playerCustomizerLayoutLeftScroll = new ScrollView(CONTEXT);
					
					var playerCustomizerLayoutLeft1 = new LinearLayout_(CONTEXT);
                    playerCustomizerLayoutLeft1.setOrientation(1);
                    playerCustomizerLayoutLeft1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2 - playerCustomizerTitle.getLineHeight() / 2));
					
					var playerCustomizerLayoutRight = new LinearLayout_(CONTEXT);
                    playerCustomizerLayoutRight.setOrientation(1);
                    playerCustomizerLayoutRight.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var playerCustomizerLayoutRightScroll = new ScrollView(CONTEXT);
					
					var playerCustomizerLayoutRight1 = new LinearLayout_(CONTEXT);
                    playerCustomizerLayoutRight1.setOrientation(1);
                    playerCustomizerLayoutRight1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, display.heightPixels / 2 - playerCustomizerTitle.getLineHeight() / 2));
					
					var playerCustomizerLayoutBottom = new LinearLayout_(CONTEXT);
                    playerCustomizerLayoutBottom.setOrientation(1);
                    playerCustomizerLayoutBottom.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var playerCustomizerLayoutBottomScroll = new ScrollView(CONTEXT);
					
					var playerCustomizerLayoutBottom1 = new LinearLayout_(CONTEXT);
                    playerCustomizerLayoutBottom1.setOrientation(1);
                    playerCustomizerLayoutBottom1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, display.heightPixels / 2 - playerCustomizerTitle.getLineHeight() / 2));
					
					var playerCustomizerLeftTitle = clientTextView("Morphing", true);
					playerCustomizerLeftTitle.setGravity(Gravity_.CENTER);
					playerCustomizerLeftTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));
					
					var playerCustomizerRightTitle = clientTextView("Trails", true);
					playerCustomizerRightTitle.setGravity(Gravity_.CENTER);
					playerCustomizerRightTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));
					
					var playerCustomizerBottomTitle = clientTextView("Options", true);
					playerCustomizerBottomTitle.setGravity(Gravity_.CENTER);
					playerCustomizerBottomTitle.setBackgroundDrawable(backgroundSpecial(null, themeSetting));
					
					playerCustomizerLayoutLeftScroll.addView(playerCustomizerLayoutLeft);
					playerCustomizerLayoutLeft1.addView(playerCustomizerLeftTitle);
					playerCustomizerLayoutLeft1.addView(playerCustomizerLayoutLeftScroll);
					
					playerCustomizerLayoutRightScroll.addView(playerCustomizerLayoutRight);
					playerCustomizerLayoutRight1.addView(playerCustomizerRightTitle);
					playerCustomizerLayoutRight1.addView(playerCustomizerLayoutRightScroll);
					
					playerCustomizerLayoutBottomScroll.addView(playerCustomizerLayoutBottom);
					playerCustomizerLayoutBottom1.addView(playerCustomizerBottomTitle);
					playerCustomizerLayoutBottom1.addView(playerCustomizerLayoutBottomScroll);
					
					var killToMorphSettingButton = new Switch_(CONTEXT);
                    killToMorphSettingButton.setText("Automatically morph when killing entities");
                    if(themeSetting == "white") {
                        killToMorphSettingButton.setTextColor(Color_.BLACK);
                    } else {
                        killToMorphSettingButton.setTextColor(Color_.WHITE);
                    }
					killToMorphSettingButton.setTypeface(VertexClientPE.font);
					if(fontSetting == "minecraft") {
						MinecraftButtonLibrary.addMinecraftStyleToTextView(killToMorphSettingButton);
					}
                    killToMorphSettingButton.setChecked(killToMorphSetting == "on");
                    killToMorphSettingButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
                        onCheckedChanged: function() {
                            if(killToMorphSetting == "off") {
                                killToMorphSetting = "on";
                            } else if(killToMorphSetting == "on") {
                                killToMorphSetting = "off";
                            }
                            VertexClientPE.saveMainSettings();
                        }
                    }));
					
					playerCustomizerLayoutBottom.addView(killToMorphSettingButton);
					
                    playerCustomizerLayout1.addView(playerCustomizerLayout);
                    playerCustomizerLayout.addView(playerCustomizerLayoutLeft1);
                    playerCustomizerLayout.addView(playerCustomizerLayoutRight1);
					playerCustomizerLayout1.addView(playerCustomizerLayoutBottom1);
                    
                    renderTypes.forEach(function(element, index, array) {
                        var rTButton = clientButton(Entity.renderTypeToName(element));
                        if(element == Entity.getRenderType(getPlayerEnt())) {
                            rTButton.setTextColor(Color_.GREEN);
                        }
                        rTButton.setOnClickListener(new View_.OnClickListener() {
                            onClick: function() {
                                VertexClientPE.setPlayerModel(element, playerCustomizerLayoutLeft);
                            }
                        });
                        if(Entity.renderTypeToName(element) != "Unknown") {
                            playerCustomizerLayoutLeft.addView(rTButton);
                        }
                    });
					
					trailsModes.forEach(function(element, index, array) {
                        var trailButton = clientButton(element[1]);
                        if(element[0] == VertexClientPE.trailsMode) {
                            trailButton.setTextColor(Color_.GREEN);
                        }
                        trailButton.setOnClickListener(new View_.OnClickListener() {
                            onClick: function() {
                                VertexClientPE.setTrailsMode(element, playerCustomizerLayoutRight);
                            }
                        });
                        playerCustomizerLayoutRight.addView(trailButton);
                    });

                    playerCustomizerMenu = new PopupWindow_(playerCustomizerLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    playerCustomizerMenu.setBackgroundDrawable(backgroundGradient());
                    playerCustomizerMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function optiFineScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}

                    var optiFineLayout = new LinearLayout_(CONTEXT);
                    optiFineLayout.setOrientation(1);
                    optiFineLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var optiFineLayoutScroll = new ScrollView(CONTEXT);
                    
                    var optiFineLayout1 = new LinearLayout_(CONTEXT);
                    optiFineLayout1.setOrientation(1);
                    optiFineLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var optiFineTitle = clientTextView("OptiFine", true);
                    optiFineTitle.setTextSize(25);
                    optiFineTitle.setGravity(Gravity_.CENTER);
                    optiFineLayout1.addView(optiFineTitle);
                    
                    optiFineLayoutScroll.addView(optiFineLayout);
                    optiFineLayout1.addView(optiFineLayoutScroll);
                    
                    var antiLagDropRemoverButton = new Switch_(CONTEXT);
                    antiLagDropRemoverButton.setText("Automatically remove dropped items to reduce lag");
                    if(themeSetting == "white") {
                        antiLagDropRemoverButton.setTextColor(Color_.BLACK);
                    } else {
                        antiLagDropRemoverButton.setTextColor(Color_.WHITE);
                    }
					antiLagDropRemoverButton.setTypeface(VertexClientPE.font);
					if(fontSetting == "minecraft") {
						MinecraftButtonLibrary.addMinecraftStyleToTextView(antiLagDropRemoverButton);
					}
                    antiLagDropRemoverButton.setChecked(antiLagDropRemoverSetting == "on");
                    antiLagDropRemoverButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
                        onCheckedChanged: function() {
                            if(antiLagDropRemoverSetting == "off") {
                                antiLagDropRemoverSetting = "on";
                            } else if(antiLagDropRemoverSetting == "on") {
                                antiLagDropRemoverSetting = "off";
                            }
                            lagTimer = 0;
                            VertexClientPE.saveMainSettings();
                        }
                    }));
                    optiFineLayout.addView(antiLagDropRemoverButton);
					
					var betterPauseButton = new Switch_(CONTEXT);
                    betterPauseButton.setText("Better pause (don't move while paused on multiplayer)");
                    if(themeSetting == "white") {
                        betterPauseButton.setTextColor(Color_.BLACK);
                    } else {
                        betterPauseButton.setTextColor(Color_.WHITE);
                    }
					betterPauseButton.setTypeface(VertexClientPE.font);
					if(fontSetting == "minecraft") {
						MinecraftButtonLibrary.addMinecraftStyleToTextView(betterPauseButton);
					}
                    betterPauseButton.setChecked(betterPauseSetting == "on");
                    betterPauseButton.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
                        onCheckedChanged: function() {
                            if(betterPauseSetting == "off") {
                                betterPauseSetting = "on";
                            } else if(betterPauseSetting == "on") {
                                betterPauseSetting = "off";
                            }
                            VertexClientPE.saveMainSettings();
                        }
                    }));
                    optiFineLayout.addView(betterPauseButton);

                    optiFineMenu = new PopupWindow_(optiFineLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    optiFineMenu.setBackgroundDrawable(backgroundGradient());
                    optiFineMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

var shopCashText;

function shopScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}

                    var shopMenuLayout = new LinearLayout_(CONTEXT);
                    shopMenuLayout.setOrientation(1);
                    shopMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var shopMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var shopMenuLayout1 = new LinearLayout_(CONTEXT);
                    shopMenuLayout1.setOrientation(1);
                    shopMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    shopMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    var shopTitle = clientTextView("Shop", true);
                    shopTitle.setTextSize(25);
                    shopTitle.setGravity(Gravity_.CENTER);
                    shopMenuLayout1.addView(shopTitle);
                    
                    var shopCashLayout = new LinearLayout_(CONTEXT);
                    shopCashLayout.setOrientation(1);
                    shopCashLayout.setLayoutParams(new ViewGroup_.LayoutParams(ViewGroup_.LayoutParams.WRAP_CONTENT, ViewGroup_.LayoutParams.WRAP_CONTENT));
                    shopCashLayout.setBackground(backgroundSpecial(16));
                    shopCashText = clientTextView("\u26C1 " + VertexClientPE.getVertexCash());
                    shopCashText.setTextColor(Color_.parseColor("#FFD700"));
                    shopCashText.setGravity(Gravity_.CENTER);
                    shopCashText.setPadding(10, 10, 10, 10);
                    shopCashLayout.addView(shopCashText);
                    
                    shopMenuLayout1.addView(shopCashLayout);
                    shopMenuLayout1.addView(clientTextView("\n"));
                    shopMenuLayoutScroll.addView(shopMenuLayout);
                    shopMenuLayout1.addView(shopMenuLayoutScroll);
                    
                    VertexClientPE.shopFeatures.forEach(function(element, index, array) {
                        shopMenuLayout.addView(new shopFeatureButton(element, shopCashText));
                    });

                    shopMenu = new PopupWindow_(shopMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    shopMenu.setBackgroundDrawable(backgroundGradient());
                    shopMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function updateCenterScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}

                    var updateCenterMenuLayout = new LinearLayout_(CONTEXT);
                    updateCenterMenuLayout.setOrientation(1);
                    updateCenterMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var updateCenterMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var updateCenterMenuLayout1 = new LinearLayout_(CONTEXT);
                    updateCenterMenuLayout1.setOrientation(1);
                    updateCenterMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    updateCenterMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    var updateCenterTitle = clientScreenTitle("Update Center");
                    
                    updateCenterMenuLayout1.addView(updateCenterTitle);
                    updateCenterMenuLayout1.addView(clientTextView("\n"));
                    updateCenterMenuLayoutScroll.addView(updateCenterMenuLayout);
                    updateCenterMenuLayout1.addView(updateCenterMenuLayoutScroll);
                    
                    var latestUpdateView = updatePaneButton(VertexClientPE.latestVersion, VertexClientPE.latestVersionDesc);
                    var updateEnterView = new TextView_(CONTEXT);
                    updateEnterView.setText("\n");
                    var currentUpdateView = updatePaneButton(VertexClientPE.currentVersion, VertexClientPE.currentVersionDesc);
                    
                    if(VertexClientPE.latestVersion != VertexClientPE.currentVersion) {
                        updateCenterMenuLayout.addView(latestUpdateView);
                        updateCenterMenuLayout.addView(updateEnterView);
                    }
                    updateCenterMenuLayout.addView(currentUpdateView);

                    updateCenterMenu = new PopupWindow_(updateCenterMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    updateCenterMenu.setBackgroundDrawable(backgroundGradient());
                    updateCenterMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                }
            }
        }));
}

function musicPlayerScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    if(GUI != null) {
                        if(GUI.isShowing()) {
                            GUI.dismiss();
                        }
                    }
                    if(hacksList != null) {
                        if(hacksList.isShowing()) {
                            hacksList.dismiss();
                        }
                    }
					if(mainMenuTextList != null) {
						if(mainMenuTextList.isShowing()) {
                            mainMenuTextList.dismiss();
                        }
					}
					if(accountManagerGUI != null) {
						if(accountManagerGUI.isShowing()) {
                            accountManagerGUI.dismiss();
                        }
					}
					if(pauseUtilitiesUI != null) {
						if(pauseUtilitiesUI.isShowing()) {
							pauseUtilitiesUI.dismiss();
						}
					}

                    var musicPlayerMenuLayout = new LinearLayout_(CONTEXT);
                    musicPlayerMenuLayout.setOrientation(1);
                    musicPlayerMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                    
                    var musicPlayerMenuLayoutScroll = new ScrollView(CONTEXT);
                    
                    var musicPlayerMenuLayout1 = new LinearLayout_(CONTEXT);
                    musicPlayerMenuLayout1.setOrientation(1);
                    musicPlayerMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                    musicPlayerMenuLayout1.setPadding(10, 0, 10, 0);
                    
                    var musicPlayerTitle = clientScreenTitle("Music Player");
                    
                    var musicPlayerEnter = new TextView_(CONTEXT);
                    musicPlayerEnter.setText("\n");
                    musicPlayerEnter.setTextSize(10);
                    
                    var musicPlayerBar = new musicBar();
                    mpSongTitleView = musicPlayerBar.getSongTitleView();
                    mpPlayButton = musicPlayerBar.getPlayButton();
                    mpCurrentPositionView = musicPlayerBar.getLeftTimeView();
                    mpTotalDurationView = musicPlayerBar.getRightTimeView();
                    mpSeekBarView = musicPlayerBar.getSeekBar();
                    mpLayout = musicPlayerBar.getBarLayout();
                    if(VertexClientPE.MusicUtils.mp.isPlaying() || VertexClientPE.MusicUtils.isPaused) {
                        if(VertexClientPE.MusicUtils.mp.isPlaying()) {
                            mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
                        } else if(VertexClientPE.MusicUtils.isPaused) {
                            mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
                        }
                        mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
                        mpSeekBarView.setProgress(VertexClientPE.MusicUtils.mp.getCurrentPosition());
                        mpSeekBarView.setMax(VertexClientPE.MusicUtils.mp.getDuration());
                        mpTotalDurationView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getDuration()));
                    } else {
                        mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
                    }
                    mpPlayButton.setOnClickListener(new View_.OnClickListener() {
                        onClick: function(v) {
                            if(VertexClientPE.MusicUtils.mp.isPlaying() && !VertexClientPE.MusicUtils.isPaused) {
                                VertexClientPE.MusicUtils.mp.pause();
                                VertexClientPE.MusicUtils.isPaused = true;
                                mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_play);
                            } else {
                                VertexClientPE.MusicUtils.mp.start();
                                VertexClientPE.MusicUtils.isPaused = false;
                                mpPlayButton.setBackgroundResource(android.R.drawable.ic_media_pause);
                            }
                        }
                    });
                    mpSeekBarView.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
                        onStopTrackingTouch: function(sB) {
                            VertexClientPE.MusicUtils.mp.seekTo(mpSeekBarView.getProgress());
                            mpCurrentPositionView.setText(VertexClientPE.MusicUtils.milliSecToMinString(VertexClientPE.MusicUtils.mp.getCurrentPosition()));
                        }
                    });
					
					var mpTabLayout = new LinearLayout_(CONTEXT);
					mpTabLayout.setOrientation(LinearLayout_.HORIZONTAL);
					
					mpTabLayout.addView(musicPlayerTab("All", mpTabLayout, musicPlayerMenuLayout, musicPlayerBar));
					mpTabLayout.addView(musicPlayerTab("Favorite", mpTabLayout, musicPlayerMenuLayout, musicPlayerBar));
                    
                    musicPlayerMenuLayout1.addView(musicPlayerTitle);
                    musicPlayerMenuLayout1.addView(musicPlayerEnter);
                    musicPlayerMenuLayout1.addView(mpLayout);
					musicPlayerMenuLayout1.addView(mpTabLayout);
                    musicPlayerMenuLayoutScroll.addView(musicPlayerMenuLayout);
                    musicPlayerMenuLayout1.addView(musicPlayerMenuLayoutScroll);
                    
                    VertexClientPE.MusicUtils.songList.forEach(function(element, index, array) {
						if(currentMPTab == "Favorite" && sharedPref.getString("VertexClientPE.songs." + element.title + ".isFavorite", "false") == "false") {
							return;
						}
						musicPlayerMenuLayout.addView(songButton(element, musicPlayerBar));
					});

                    musicPlayerMenu = new PopupWindow_(musicPlayerMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                    musicPlayerMenu.setBackgroundDrawable(backgroundGradient());
                    musicPlayerMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                } catch(error) {
                    print('An error occurred: ' + error);
                    clientMessage(error);
                }
            }
        }));
}

function dashboardScreen() {
    VertexClientPE.menuIsShowing = true;
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                if(GUI != null) {
                    if(GUI.isShowing()) {
                        GUI.dismiss();
                    }
                }
                if(hacksList != null) {
                    if(hacksList.isShowing()) {
                        hacksList.dismiss();
                    }
                }
				if(mainMenuTextList != null) {
					if(mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
				if(accountManagerGUI != null) {
					if(accountManagerGUI.isShowing()) {
						accountManagerGUI.dismiss();
					}
				}
				if(pauseUtilitiesUI != null) {
					if(pauseUtilitiesUI.isShowing()) {
						pauseUtilitiesUI.dismiss();
					}
				}

                var dashboardMenuLayout = new GridLayout_(CONTEXT);
                dashboardMenuLayout.setColumnCount(4);
                dashboardMenuLayout.setRowCount(3);
                
                var dashboardMenuLayoutScroll = new ScrollView(CONTEXT);
                
                var dashboardMenuLayout1 = new LinearLayout_(CONTEXT);
                dashboardMenuLayout1.setOrientation(1);
                dashboardMenuLayout1.setGravity(Gravity_.CENTER_HORIZONTAL);
                
				var dashboardTitleLayout = new LinearLayout_(CONTEXT);
				dashboardTitleLayout.setOrientation(LinearLayout_.HORIZONTAL);
                dashboardTitleLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
				dashboardTitleLayout.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				var dashboardTitleLayoutLeft = new LinearLayout_(CONTEXT);
				dashboardTitleLayoutLeft.setOrientation(1);
				dashboardTitleLayoutLeft.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				var dashboardTitleLayoutCenter = new LinearLayout_(CONTEXT);
				dashboardTitleLayoutCenter.setOrientation(1);
				dashboardTitleLayoutCenter.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 2, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				var dashboardTitleLayoutRight = new LinearLayout_(CONTEXT);
				dashboardTitleLayoutRight.setOrientation(1);
				dashboardTitleLayoutRight.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels / 4, LinearLayout_.LayoutParams.WRAP_CONTENT));
				
				dashboardTitleLayout.addView(dashboardTitleLayoutLeft);
				dashboardTitleLayout.addView(dashboardTitleLayoutCenter);
				dashboardTitleLayout.addView(dashboardTitleLayoutRight);
				
                var dashboardTitle = clientTextView("Dashboard", true);
                dashboardTitle.setTextSize(25);
                dashboardTitle.setGravity(Gravity_.CENTER);
				
                dashboardTitleLayoutLeft.addView(userBar());
                dashboardTitleLayoutCenter.addView(dashboardTitle);
                
                //dashboardMenuLayout1.addView(clientTextView("\n"));
                dashboardMenuLayoutScroll.addView(dashboardMenuLayout);
				dashboardMenuLayout1.addView(dashboardTitleLayout);
                dashboardMenuLayout1.addView(dashboardMenuLayoutScroll);
                
                var settingsIconButton = tileButton("Settings", android.R.drawable.ic_menu_preferences, "green");
                var informationIconButton = tileButton("Information", android.R.drawable.ic_menu_info_details, "yellow", false);
                var updateCenterIconButton = tileButton("Update Center", android.R.drawable.ic_menu_compass, "white", false);
                var musicPlayerIconButton = tileButton("Music Player", android.R.drawable.ic_media_play, "blue", false);
				var previewIconButton = tileButton("Preview", android.R.drawable.ic_menu_gallery, "violet", false);
				var milestonesIconButton = tileButton("Milestones", android.R.drawable.ic_menu_agenda, "grey", false);
                var helpIconButton = tileButton("Help", android.R.drawable.ic_menu_help, "purple", false);
                var addonsIconButton = tileButton("Addons", android.R.drawable.ic_menu_more, "blue");
				var shareIconButton = tileButton("Share", android.R.drawable.ic_menu_share, "brown", false);
				var websiteIconButton = tileButtonWithCustomDrawable("Website", iconClientGUI, "white", false);
                if(Launcher.isBlockLauncher()) {
                    var blockLauncherSettingsIconButton = tileButton("BlockLauncher Settings", net.zhuoweizhang.mcpelauncher.R.drawable.ic_menu_settings_holo_light, "black", false);
                }
                var devSettingsIconButton = tileButton("Developer Settings", android.R.drawable.ic_menu_report_image, "orange", false);
                var restartIconButton = tileButton("Restart", android.R.drawable.ic_menu_rotate, "green", false);
                var shutDownIconButton = tileButton("Shutdown", android.R.drawable.ic_lock_power_off, "red");
				
				// var testIcons = [android.R.drawable.menu_frame, android.R.drawable.picture_frame, android.R.drawable.menu_full_frame, android.R.drawable.gallery_thumb, android.R.drawable.ic_menu_always_landscape_portrait, android.R.drawable.ic_notification_clear_all, android.R.drawable.ic_notification_overlay, android.R.drawable.stat_notify_more /*shop*/, android.R.drawable.title_bar_tall];
				// testIcons.forEach(function(element, index, array) {
					// dashboardMenuLayout.addView(tileButton("test_" + index, element, "red"));
				// });
                
                settingsIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        settingsScreen();
                        exitSettings();
                    }
                });
                
                informationIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        informationScreen();
                        exitInformation();
                    }
                });
                
                updateCenterIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        updateCenterScreen();
                        exitUpdateCenter();
                    }
                });
                
                musicPlayerIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        musicPlayerScreen();
                        exitMusicPlayer();
                    }
                });
				
				previewIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        previewScreen();
                        exitPreview();
                    }
                });
				
				milestonesIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        milestonesScreen();
                        exitMilestones();
                    }
                });
                
                helpIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        helpScreen();
                        exitHelp();
                    }
                });
                
                addonsIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        addonScreen();
                        exitAddon();
                    }
                });
				
				shareIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        var sendIntent = new Intent_();
						sendIntent.setAction(Intent_.ACTION_SEND);
						sendIntent.putExtra(Intent_.EXTRA_TEXT, "I use Vertex Client PE! Get it yourself at http://Vertex-Client.ml/. :D");
						sendIntent.setType("text/plain");
						CONTEXT.startActivity(sendIntent);
                    }
                });
				
				websiteIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        ModPE.goToURL("http://Vertex-Client.ml/");
                    }
                });
                
                if(Launcher.isBlockLauncher()) {
                    blockLauncherSettingsIconButton.setOnClickListener(new View_.OnClickListener() {
                        onClick: function(view) {
                            var blIntent = new Intent_(CONTEXT, MainMenuOptionsActivity_);
                            CONTEXT.startActivity(blIntent);
                        }
                    });
                }
				
				devSettingsIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        exitDashboardUI.dismiss();
                        dashboardMenu.dismiss();
                        devSettingsScreen();
                        exitDevSettings();
                    }
                });
                
                restartIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        ModPE.restart();
                    }
                });
                
                shutDownIconButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
                        VertexClientPE.toast("See you later!");
                        new Thread_(new Runnable_() {
                            run: function() {
                                Thread_.sleep(1000);
                                System_.exit(0);
                            }
                        }).start();
                    }
                });
                
                dashboardMenuLayout.addView(settingsIconButton);
                dashboardMenuLayout.addView(informationIconButton);
                dashboardMenuLayout.addView(updateCenterIconButton);
                dashboardMenuLayout.addView(musicPlayerIconButton);
                dashboardMenuLayout.addView(previewIconButton);
                dashboardMenuLayout.addView(milestonesIconButton);
                dashboardMenuLayout.addView(helpIconButton);
                dashboardMenuLayout.addView(addonsIconButton);
                dashboardMenuLayout.addView(shareIconButton);
                //dashboardMenuLayout.addView(websiteIconButton);
                if(Launcher.isBlockLauncher()) {
                    dashboardMenuLayout.addView(blockLauncherSettingsIconButton);
                }
				if(VertexClientPE.isDevMode()) {
					dashboardMenuLayout.addView(devSettingsIconButton);
				}
				dashboardMenuLayout.addView(restartIconButton);
                dashboardMenuLayout.addView(shutDownIconButton);
                
                dashboardMenu = new PopupWindow_(dashboardMenuLayout1, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight());
                dashboardMenu.setBackgroundDrawable(backgroundGradient());
                dashboardMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
            } catch(error) {
                print('An error occurred: ' + error);
            }
        }
    }));
}

var webBrowserWebView;

VertexClientPE.showURLBarDialog = function() {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
				if(webBrowserWebView == null || webBrowserWebView == undefined) {
					throw new Error("webBrowserWebView is not defined!");
				}
                var urlBarDialogTitle = clientTextView("Enter an URL", true);
                var btn = clientButton("Done");
                var inputBar = clientEditText(webBrowserWebView.getUrl());
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
                dialogLayout.addView(urlBarDialogTitle);
                dialogLayout.addView(inputBar);
                dialogLayout.addView(btn);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("Enter an URL");
                inputBar.setHint("URL");
                inputBar.setTextColor(Color_.WHITE);
                dialog.show();
                btn.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
						var newUrl = inputBar.getText().toString();
						webBrowserWebView.loadUrl(newUrl);
						if(newUrl.contains("porn")) {
							VertexClientPE.toast("Eww, you nasty kid!");
						}
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

VertexClientPE.latestOutput = "";

VertexClientPE.evalJSOnWebView = function(whatToEval, webView) {
	webView.evaluateJavascript(whatToEval + ".toString()", new android.webkit.ValueCallback() {
        onReceiveValue: function(s) {
            VertexClientPE.latestOutput = s;
        }
    });
}

VertexClientPE.getEvalOutput = function() {
	return VertexClientPE.latestOutput;
}

var webbrowserFullOutputText = "";

VertexClientPE.showF12Dialog = function() {
    CONTEXT.runOnUiThread(new Runnable_() {
        run: function() {
            try {
				if(webBrowserWebView == null || webBrowserWebView == undefined) {
					throw new Error("webBrowserWebView is not defined!");
				}
                var consoleDialogTitle = clientTextView("Developer Tools (F12)", true);
                var enterButton = clientButton("Enter");
                var closeButton = clientButton("Close");
                var dialogLayout = new LinearLayout_(CONTEXT);
                dialogLayout.setBackgroundDrawable(backgroundGradient());
                dialogLayout.setOrientation(LinearLayout_.VERTICAL);
                dialogLayout.setPadding(10, 10, 10, 10);
				
				var dialogOutputLayout1 = new LinearLayout_(CONTEXT);
				dialogOutputLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogOutputLayout1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - dip2px(10), display.heightPixels / 2));
				dialogOutputLayout1.setBackgroundDrawable(backgroundSpecial());
				
				var dialogOutputScroll = new ScrollView_(CONTEXT);
				
				var dialogOutputLayout = new LinearLayout_(CONTEXT);
				dialogOutputLayout.setOrientation(LinearLayout_.VERTICAL);
				
				var dialogInputLayout1 = new LinearLayout_(CONTEXT);
				dialogInputLayout1.setOrientation(LinearLayout_.VERTICAL);
				dialogInputLayout1.setLayoutParams(new LinearLayout_.LayoutParams(display.widthPixels - dip2px(10), display.heightPixels / 6));
				dialogInputLayout1.setBackgroundDrawable(backgroundSpecial(null, "#212121|#ffffff"));
				
				var dialogInputScroll = new ScrollView_(CONTEXT);
				
				var dialogInputLayout = new LinearLayout_(CONTEXT);
				dialogInputLayout.setOrientation(LinearLayout_.VERTICAL);
				
				var outputTextView = clientTextView(webbrowserFullOutputText);
				dialogOutputLayout.addView(outputTextView);
				
				var inputBar = clientEditText("");
				inputBar.setTextColor(Color_.WHITE);
				dialogInputLayout.addView(inputBar);
				
				dialogOutputScroll.addView(dialogOutputLayout);
				dialogOutputLayout1.addView(dialogOutputScroll);
				
				dialogInputScroll.addView(dialogInputLayout);
				dialogInputLayout1.addView(dialogInputScroll);
				
                dialogLayout.addView(consoleDialogTitle);
				dialogLayout.addView(dialogOutputLayout1);
				dialogLayout.addView(dialogInputLayout1);
                dialogLayout.addView(enterButton);
                dialogLayout.addView(closeButton);
                var dialog = new Dialog_(CONTEXT);
                dialog.requestWindowFeature(Window_.FEATURE_NO_TITLE);
                dialog.getWindow().setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                dialog.setContentView(dialogLayout);
                dialog.setTitle("Developer Tools (F12)");
                dialog.show();
                var window = dialog.getWindow();
                window.setLayout(display.widthPixels, display.heightPixels);
				enterButton.setOnClickListener(new View_.OnClickListener() {
                    onClick: function(view) {
						try {
							var input = inputBar.getText();
							VertexClientPE.evalJSOnWebView(input, webBrowserWebView);
							new Thread_(new Runnable_() {
								run: function() {
									while(VertexClientPE.getEvalOutput() == null || VertexClientPE.getEvalOutput() == "") {
										Thread_.sleep(10);
									}
									CONTEXT.runOnUiThread(new Runnable_() {
										run: function() {
											if(outputTextView.getText() == "") {
												var outputText;
												outputText = VertexClientPE.getEvalOutput();
											} else {
												outputText = outputTextView.getText() + "\n" + VertexClientPE.getEvalOutput();
											}
											webbrowserFullOutputText = outputText;
											outputTextView.setText(outputText);
											VertexClientPE.latestOutput = null;
										}
									});
								}
							}).start();
						} catch(e) {
							print("@" + e.lineNumber + ": " + e);
						}
                    }
                });
                closeButton.setOnClickListener(new View_.OnClickListener() {
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

function webBrowserScreen() {
    VertexClientPE.menuIsShowing = true;
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                if(GUI != null) {
                    if(GUI.isShowing()) {
                        GUI.dismiss();
                    }
                }
                if(hacksList != null) {
                    if(hacksList.isShowing()) {
                        hacksList.dismiss();
                    }
                }
				if(mainMenuTextList != null) {
					if(mainMenuTextList.isShowing()) {
						mainMenuTextList.dismiss();
					}
				}
				if(accountManagerGUI != null) {
					if(accountManagerGUI.isShowing()) {
						accountManagerGUI.dismiss();
					}
				}
				if(pauseUtilitiesUI != null) {
					if(pauseUtilitiesUI.isShowing()) {
						pauseUtilitiesUI.dismiss();
					}
				}

                var webBrowserMenuLayout = new LinearLayout_(CONTEXT);
                webBrowserMenuLayout.setOrientation(1);
                webBrowserMenuLayout.setGravity(Gravity_.CENTER_HORIZONTAL);
                
                var webBrowserTitle = clientTextView("Webbrowser", true);
                webBrowserTitle.setTextSize(25);
                webBrowserTitle.setGravity(Gravity_.CENTER);
                webBrowserMenuLayout.addView(webBrowserTitle);
                
                webBrowserWebView = new WebView_(CONTEXT);
                var wS = webBrowserWebView.getSettings();

                wS.setJavaScriptEnabled(true);
                webBrowserWebView.setWebChromeClient(new WebChromeClient_());
                webBrowserWebView.setWebViewClient(new WebViewClient_());

                webBrowserWebView.loadUrl(webBrowserStartPageSetting);
                
                webBrowserMenuLayout.addView(webBrowserWebView);

                webBrowserMenu = new PopupWindow_(webBrowserMenuLayout, CONTEXT.getWindowManager().getDefaultDisplay().getWidth(), CONTEXT.getWindowManager().getDefaultDisplay().getHeight(), true);
                webBrowserMenu.setBackgroundDrawable(backgroundGradient());
                webBrowserMenu.setOnDismissListener(new PopupWindow_.OnDismissListener() {
                    onDismiss: function() {
						webBrowserWebView.loadUrl("about:blank");
                        if(exitWebBrowserUI != null) {
                            if(exitWebBrowserUI.isShowing()) {
                                xWebBrowserButton.performClick();
                            }
                        }
						webbrowserFullOutputText = null;
                    }
                });
                webBrowserMenu.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
            } catch(error) {
                print('An error occurred: ' + error);
            }
        }
    }));
}

function changeColor(view, color) {
    if(view != null) {
        view.setColorFilter(new LightingColorFilter_(color, 0));
    }
}

function showMenuButton() {
    VertexClientPE.loadMainSettings();
    VertexClientPE.menuIsShowing = false;
    var layout = new LinearLayout_(CONTEXT);
    layout.setOrientation(1);
    layout.setGravity(Gravity_.TOP);
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
    menuBtn = new Button_(CONTEXT);
	menuBtn.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
	menuBtn.setText("\u2022\u2022\u2022");
    menuBtn.setAlpha(0.54);
	menuBtn.setTextSize(16);
	if(themeSetting == "white") {
		menuBtn.setTextColor(Color_.BLACK);
		if(fontSetting != "minecraft") {
			menuBtn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.WHITE);
		}
	} else {
		menuBtn.setTextColor(Color_.WHITE);
		if(fontSetting != "minecraft") {
			menuBtn.setShadowLayer(dip2px(1), dip2px(1), dip2px(1), Color_.BLACK);
		}
	}
	menuBtn.setTypeface(VertexClientPE.font);
	if(fontSetting == "minecraft") {
		MinecraftButtonLibrary.addMinecraftStyleToTextView(menuBtn);
	}
    menuBtn.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewArg){
			VertexClientPE.showMoreDialog();
		}
    }));
    menuBtn.setOnLongClickListener(new View_.OnLongClickListener() {
        onLongClick: function(v, t) {
            VertexClientPE.toast("Tap to open the More dialog!");
            return true;
        }
    });
    layout.addView(menuBtn);
     
    GUI = new PopupWindow_(layout, dip2px(40), dip2px(40));
    if(menuAnimationsSetting == "on") {
        GUI.setAnimationStyle(android.R.style.Animation_Translucent);
    }
	
	var background;
	if(mainButtonStyleSetting == "normal") {
		if(mainButtonPositionSetting == "top-right") {
			background = backgroundSpecial("cornerleft", themeSetting, true);
		} else {
			background = backgroundSpecial("cornerright", themeSetting, true);
		}
	} else if(mainButtonStyleSetting == "global_background") {
		if(mainButtonPositionSetting == "top-right") {
			background = backgroundGradient("bottomleft");
		} else {
			background = backgroundGradient("bottomright");
		}
	} else if(mainButtonStyleSetting == "classic") {
		background = new ColorDrawable_(Color_.parseColor("#1D1D1D"));
	} else if(mainButtonStyleSetting == "no_background") {
		background = new ColorDrawable_(Color_.TRANSPARENT);
	}
	
    if(mainButtonPositionSetting == "top-right") {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(10, 0, 0, 10);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
        GUI.setBackgroundDrawable(background);
        GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
    } else {
		if(mainButtonStyleSetting != "classic" && mainButtonStyleSetting != "global_background") {
			layout.setPadding(0, 0, 10, 10);
		} else {
			layout.setGravity(Gravity_.CENTER);
		}
        GUI.setBackgroundDrawable(background);
        GUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
    }
    
    if((currentScreen == ScreenType.ingame || currentScreen == ScreenType.hud) && VertexClientPE.playerIsInGame) {
		if(hacksList == null) {
			showHacksList();
		} else if(!hacksList.isShowing()) {
			showHacksList();
		}
    }
	if(currentScreen == ScreenType.start_screen) {
		if((mainMenuTextList == null || !mainMenuTextList.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
			VertexClientPE.showStartScreenBar();
		}
	}
	if(currentScreen == ScreenType.pause_screen) {
		if((pauseUtilitiesUI == null || !pauseUtilitiesUI.isShowing()) && !VertexClientPE.menuIsShowing) {
			showPauseUtilities();
		}
	}
	if((accountManagerGUI == null || !accountManagerGUI.isShowing()) && !VertexClientPE.menuIsShowing && !VertexClientPE.playerIsInGame) {
		showAccountManagerButton();
	}
}

function showAccountManagerButton() {
    VertexClientPE.loadMainSettings();
    var layout = new LinearLayout_(CONTEXT);
    layout.setOrientation(1);
    var display = new DisplayMetrics_();
    CONTEXT.getWindowManager().getDefaultDisplay().getMetrics(display);
    var menuBtn = clientButton("AM");
    menuBtn.setLayoutParams(new LinearLayout_.LayoutParams(dip2px(40), dip2px(40)));
    menuBtn.setOnClickListener(new View_.OnClickListener({
		onClick: function(viewarg ){
			if(hacksList != null) {
				hacksList.dismiss();
			}
			GUI.dismiss();
			accountManagerGUI.dismiss();
			VertexClientPE.showAccountManager(false);
			exitAccountManager(false);
		}
    }));
    layout.addView(menuBtn);
     
    accountManagerGUI = new PopupWindow_(layout, dip2px(40), dip2px(40));
    if(menuAnimationsSetting == "on") {
        accountManagerGUI.setAnimationStyle(android.R.style.Animation_Translucent);
    }
    accountManagerGUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
    accountManagerGUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.BOTTOM, 0, 0);
}
 
function dip2px(dips){
    return Math.ceil(dips * CONTEXT.getResources().getDisplayMetrics().density);
}

var statesTextView;
var musicTextView;

var enabledHacksCounter = 0;

var musicText = "None";

function showHacksList() {
    var display = CONTEXT.getWindowManager().getDefaultDisplay(),
        width = display.getWidth(),
        height = display.getHeight();
    if(hacksList == null || !hacksList.isShowing()) {
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    display.getMetrics(new DisplayMetrics_());
                    
                    var hacksListLayout = new LinearLayout_(CONTEXT);
                    hacksListLayout.setOrientation(LinearLayout_.HORIZONTAL);
                    hacksListLayout.setGravity(Gravity_.CENTER_VERTICAL);
                    
                    var hacksListLayoutLeft = new LinearLayout_(CONTEXT);
                    hacksListLayoutLeft.setOrientation(1);
					hacksListLayoutLeft.setGravity(Gravity_.CENTER);
                    hacksListLayoutLeft.setLayoutParams(new ViewGroup_.LayoutParams(width / 8, width / 15));
                    hacksListLayout.addView(hacksListLayoutLeft);
                    
                    var hacksListLayoutRight = new LinearLayout_(CONTEXT);
                    hacksListLayoutRight.setOrientation(1);
					hacksListLayoutRight.setGravity(Gravity_.CENTER);
					if(hacksListModeSetting != "logo") {
						hacksListLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(width / 4, width / 15));
					} else {
						hacksListLayoutRight.setLayoutParams(new ViewGroup_.LayoutParams(LinearLayout_.LayoutParams.WRAP_CONTENT, width / 15));
					}
                    
					hacksListLayout.addView(hacksListLayoutRight);
                    
                    logoViewer2 = new ImageView_(CONTEXT);
                    logoViewer2.setImageBitmap(imgLogo);
                    logoViewer2.setLayoutParams(new LinearLayout_.LayoutParams(width / 8, width / 16));
					
					var versionText = clientTextView("v" + VertexClientPE.currentVersion, true);
					versionText.setGravity(android.view.Gravity.CENTER);
					
					var proText = clientTextView("Pro", true);
					proText.setGravity(android.view.Gravity.CENTER);
					proText.setTextColor(Color_.parseColor("#DAA520"));
                    
                    musicTextView = clientTextView("\u266B Currently playing: " + musicText, true);
                    
                    musicTextView.setTextSize(16);
                    musicTextView.setPadding(0, 0, dip2px(8), 0);
                    musicTextView.setEllipsize(TextUtils_.TruncateAt.MARQUEE);
                    musicTextView.setMarqueeRepeatLimit(-1);
                    musicTextView.setSingleLine();
                    musicTextView.setHorizontallyScrolling(true);
                    musicTextView.setSelected(true);
					logoViewer2.setPadding(dip2px(8), 0, dip2px(8), 0);
					versionText.setPadding(dip2px(8), 0, dip2px(8), 0);
					proText.setPadding(dip2px(8), 0, dip2px(8), 0);
                    hacksListLayoutLeft.addView(logoViewer2);
					if(hacksListModeSetting != "logo") {
						hacksListLayoutRight.addView(musicTextView);
					} else {
						hacksListLayoutRight.addView(versionText);
						if(VertexClientPE.isPro()) {
							hacksListLayoutRight.addView(proText);
						}
					}
					hacksList = new PopupWindow_(hacksListLayout, LinearLayout_.LayoutParams.WRAP_CONTENT, LinearLayout_.LayoutParams.WRAP_CONTENT);
					if(menuAnimationsSetting == "on") {
						hacksList.setAnimationStyle(android.R.style.Animation_Translucent);
					}
					hacksList.setBackgroundDrawable(backgroundGradient(true));
					hacksList.setTouchable(false);
					if(hacksListModeSetting != "off") {
						hacksList.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER | Gravity_.TOP, 0, 0);
					}
                } catch(error) {
                    print('An error occurred: ' + error);
                    VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
    }
}

function updateHacksList() {
        CONTEXT.runOnUiThread(new Runnable_({
            run: function() {
                try {
                    musicTextView.setText("\u266B Currently playing: " + musicText);
                } catch(error) {
                    print('An error occurred: ' + error);
                    VertexClientPE.showBugReportDialog(error);
                }
            }
        }));
}

function showPauseUtilities() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var pauseUtilitiesLayout = new LinearLayout_(CONTEXT);
                var playerViewButton = clientButton("F5");
                playerViewButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        if(Launcher.isToolbox()) {
							var currentView = ModPE.getPlayerViewPerspective();
							if(currentView < 2) {
								ModPE.setPlayerViewPerspective(currentView + 1);
							} else {
								ModPE.setPlayerViewPerspective(0);
							}
						} else {
							VertexClientPE.toast("Sorry, this feature only works on Toolbox!");
						}
                    }
                }));
                pauseUtilitiesLayout.addView(playerViewButton);
                
                pauseUtilitiesUI = new PopupWindow_(pauseUtilitiesLayout, dip2px(40), dip2px(40));
                pauseUtilitiesUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                pauseUtilitiesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, dip2px(80));
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}
    
function exitAccountManager(showBackButton) {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
				var backAccountManagerLayout = new LinearLayout_(CONTEXT);
                var backAccountManagerButton = new Button_(CONTEXT);
                backAccountManagerButton.setText("<");//Text
                backAccountManagerButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backAccountManagerButton.setTextColor(Color_.WHITE);
                backAccountManagerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backAccountManagerUI.dismiss(); //Close
                        exitAccountManagerUI.dismiss(); //Close
                        accountManager.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backAccountManagerLayout.addView(backAccountManagerButton);
				
                var xAccountManagerLayout = new LinearLayout_(CONTEXT);
                var xAccountManagerButton = new Button_(CONTEXT);
                xAccountManagerButton.setText('X');//Text
                xAccountManagerButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xAccountManagerButton.setTextColor(Color_.WHITE);
                xAccountManagerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
						if(showBackButton) {
							backAccountManagerUI.dismiss(); //Close
						}
                        exitAccountManagerUI.dismiss(); //Close
                        accountManager.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xAccountManagerLayout.addView(xAccountManagerButton);
				
				if(showBackButton) {
					backAccountManagerUI = new PopupWindow_(backAccountManagerLayout, dip2px(40), dip2px(40));
					backAccountManagerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
					backAccountManagerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				}
                
                exitAccountManagerUI = new PopupWindow_(xAccountManagerLayout, dip2px(40), dip2px(40));
                exitAccountManagerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitAccountManagerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}
    
function exitSettings() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backSettingsLayout = new LinearLayout_(CONTEXT);
                var backSettingsButton = new Button_(CONTEXT);
                backSettingsButton.setText("<");//Text
                backSettingsButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backSettingsButton.setTextColor(Color_.WHITE);
                backSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backSettingsUI.dismiss(); //Close
                        exitSettingsUI.dismiss(); //Close
                        settingsMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backSettingsLayout.addView(backSettingsButton);
                
                var xSettingsLayout = new LinearLayout_(CONTEXT);
                var xSettingsButton = new Button_(CONTEXT);
                xSettingsButton.setText("X");//Text
                xSettingsButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xSettingsButton.setTextColor(Color_.WHITE);
                xSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backSettingsUI.dismiss(); //Close
                        exitSettingsUI.dismiss(); //Close
                        settingsMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xSettingsLayout.addView(xSettingsButton);
                
                backSettingsUI = new PopupWindow_(backSettingsLayout, dip2px(40), dip2px(40));
                backSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitSettingsUI = new PopupWindow_(xSettingsLayout, dip2px(40), dip2px(40));
                exitSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitDevSettings() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backDevSettingsLayout = new LinearLayout_(CONTEXT);
                var backDevSettingsButton = new Button_(CONTEXT);
                backDevSettingsButton.setText("<");//Text
                backDevSettingsButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backDevSettingsButton.setTextColor(Color_.WHITE);
                backDevSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backDevSettingsUI.dismiss(); //Close
                        exitDevSettingsUI.dismiss(); //Close
                        devSettingsMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backDevSettingsLayout.addView(backDevSettingsButton);
                
                var xDevSettingsLayout = new LinearLayout_(CONTEXT);
                var xDevSettingsButton = new Button_(CONTEXT);
                xDevSettingsButton.setText("X");//Text
                xDevSettingsButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xDevSettingsButton.setTextColor(Color_.WHITE);
                xDevSettingsButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backDevSettingsUI.dismiss(); //Close
                        exitDevSettingsUI.dismiss(); //Close
                        devSettingsMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xDevSettingsLayout.addView(xDevSettingsButton);
                
                backDevSettingsUI = new PopupWindow_(backDevSettingsLayout, dip2px(40), dip2px(40));
                backDevSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backDevSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitDevSettingsUI = new PopupWindow_(xDevSettingsLayout, dip2px(40), dip2px(40));
                exitDevSettingsUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitDevSettingsUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitInformation() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backInformationLayout = new LinearLayout_(CONTEXT);
                var backInformationButton = new Button_(CONTEXT);
                backInformationButton.setText("<");//Text
                backInformationButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backInformationButton.setTextColor(Color_.WHITE);
                backInformationButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backInformationUI.dismiss(); //Close
                        exitInformationUI.dismiss(); //Close
                        informationMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backInformationLayout.addView(backInformationButton);
                
                var xInformationLayout = new LinearLayout_(CONTEXT);
                var xInformationButton = new Button_(CONTEXT);
                xInformationButton.setText("X");//Text
                xInformationButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xInformationButton.setTextColor(Color_.WHITE);
                xInformationButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backInformationUI.dismiss(); //Close
                        exitInformationUI.dismiss(); //Close
                        informationMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xInformationLayout.addView(xInformationButton);
                
                backInformationUI = new PopupWindow_(backInformationLayout, dip2px(40), dip2px(40));
                backInformationUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backInformationUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitInformationUI = new PopupWindow_(xInformationLayout, dip2px(40), dip2px(40));
                exitInformationUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitInformationUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitMusicPlayer() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backMusicPlayerLayout = new LinearLayout_(CONTEXT);
                var backMusicPlayerButton = new Button_(CONTEXT);
                backMusicPlayerButton.setText("<");//Text
                backMusicPlayerButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backMusicPlayerButton.setTextColor(Color_.WHITE);
                backMusicPlayerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backMusicPlayerUI.dismiss(); //Close
                        exitMusicPlayerUI.dismiss(); //Close
                        musicPlayerMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                        mpCurrentPositionView = null;
                        mpSeekBarView = null;
                        mpTotalDurationView = null;
                    }
                }));
                backMusicPlayerLayout.addView(backMusicPlayerButton);
                
                var xMusicPlayerLayout = new LinearLayout_(CONTEXT);
                var xMusicPlayerButton = new Button_(CONTEXT);
                xMusicPlayerButton.setText("X");//Text
                xMusicPlayerButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xMusicPlayerButton.setTextColor(Color_.WHITE);
                xMusicPlayerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backMusicPlayerUI.dismiss(); //Close
                        exitMusicPlayerUI.dismiss(); //Close
                        musicPlayerMenu.dismiss(); //Close
                        showMenuButton();
                        mpCurrentPositionView = null;
                        mpSeekBarView = null;
                        mpTotalDurationView = null;
                    }
                }));
                xMusicPlayerLayout.addView(xMusicPlayerButton);
                
                backMusicPlayerUI = new PopupWindow_(backMusicPlayerLayout, dip2px(40), dip2px(40));
                backMusicPlayerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backMusicPlayerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitMusicPlayerUI = new PopupWindow_(xMusicPlayerLayout, dip2px(40), dip2px(40));
                exitMusicPlayerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitMusicPlayerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitHelp() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backHelpLayout = new LinearLayout_(CONTEXT);
                var backHelpButton = new Button_(CONTEXT);
                backHelpButton.setText("<");//Text
                backHelpButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backHelpButton.setTextColor(Color_.WHITE);
                backHelpButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backHelpUI.dismiss(); //Close
                        exitHelpUI.dismiss(); //Close
                        helpMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backHelpLayout.addView(backHelpButton);
                
                var xHelpLayout = new LinearLayout_(CONTEXT);
                var xHelpButton = new Button_(CONTEXT);
                xHelpButton.setText("X");//Text
                xHelpButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xHelpButton.setTextColor(Color_.WHITE);
                xHelpButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backHelpUI.dismiss(); //Close
                        exitHelpUI.dismiss(); //Close
                        helpMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xHelpLayout.addView(xHelpButton);
                
                backHelpUI = new PopupWindow_(backHelpLayout, dip2px(40), dip2px(40));
                backHelpUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backHelpUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitHelpUI = new PopupWindow_(xHelpLayout, dip2px(40), dip2px(40));
                exitHelpUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitHelpUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitAddon() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backAddonLayout = new LinearLayout_(CONTEXT);
                var backAddonButton = new Button_(CONTEXT);
                backAddonButton.setText("<");//Text
                backAddonButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backAddonButton.setTextColor(Color_.WHITE);
                backAddonButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backAddonUI.dismiss(); //Close
                        exitAddonUI.dismiss(); //Close
                        addonMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backAddonLayout.addView(backAddonButton);
                
                var xAddonLayout = new LinearLayout_(CONTEXT);
                var xAddonButton = new Button_(CONTEXT);
                xAddonButton.setText("X");//Text
                xAddonButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xAddonButton.setTextColor(Color_.WHITE);
                xAddonButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backAddonUI.dismiss(); //Close
                        exitAddonUI.dismiss(); //Close
                        addonMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xAddonLayout.addView(xAddonButton);
                
                backAddonUI = new PopupWindow_(backAddonLayout, dip2px(40), dip2px(40));
                backAddonUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backAddonUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitAddonUI = new PopupWindow_(xAddonLayout, dip2px(40), dip2px(40));
                exitAddonUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitAddonUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitMilestones() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backMilestonesLayout = new LinearLayout_(CONTEXT);
                var backMilestonesButton = new Button_(CONTEXT);
                backMilestonesButton.setText("<");//Text
                backMilestonesButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backMilestonesButton.setTextColor(Color_.WHITE);
                backMilestonesButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backMilestonesUI.dismiss(); //Close
                        exitMilestonesUI.dismiss(); //Close
                        milestonesMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backMilestonesLayout.addView(backMilestonesButton);
                
                var xMilestonesLayout = new LinearLayout_(CONTEXT);
                var xMilestonesButton = new Button_(CONTEXT);
                xMilestonesButton.setText("X");//Text
                xMilestonesButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xMilestonesButton.setTextColor(Color_.WHITE);
                xMilestonesButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backMilestonesUI.dismiss(); //Close
                        exitMilestonesUI.dismiss(); //Close
                        milestonesMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xMilestonesLayout.addView(xMilestonesButton);
                
                backMilestonesUI = new PopupWindow_(backMilestonesLayout, dip2px(40), dip2px(40));
                backMilestonesUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backMilestonesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitMilestonesUI = new PopupWindow_(xMilestonesLayout, dip2px(40), dip2px(40));
                exitMilestonesUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitMilestonesUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitUpdateCenter() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var backUpdateCenterLayout = new LinearLayout_(CONTEXT);
                var backUpdateCenterButton = new Button_(CONTEXT);
                backUpdateCenterButton.setText("<");//Text
                backUpdateCenterButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backUpdateCenterButton.setTextColor(Color_.WHITE);
                backUpdateCenterButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backUpdateCenterUI.dismiss(); //Close
                        exitUpdateCenterUI.dismiss(); //Close
                        updateCenterMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backUpdateCenterLayout.addView(backUpdateCenterButton);
                
                var xUpdateCenterLayout = new LinearLayout_(CONTEXT);
                var xUpdateCenterButton = new Button_(CONTEXT);
                xUpdateCenterButton.setText("X");//Text
                xUpdateCenterButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xUpdateCenterButton.setTextColor(Color_.WHITE);
                xUpdateCenterButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backUpdateCenterUI.dismiss(); //Close
                        exitUpdateCenterUI.dismiss(); //Close
                        updateCenterMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xUpdateCenterLayout.addView(xUpdateCenterButton);
                
                backUpdateCenterUI = new PopupWindow_(backUpdateCenterLayout, dip2px(40), dip2px(40));
                backUpdateCenterUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backUpdateCenterUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitUpdateCenterUI = new PopupWindow_(xUpdateCenterLayout, dip2px(40), dip2px(40));
                exitUpdateCenterUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitUpdateCenterUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

var xWebBrowserButton;
var setStartPageWebBrowserButton;

function overlayWebBrowser() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
				var backPageWebBrowserLayout = new LinearLayout_(CONTEXT);
                var backPageWebBrowserButton = new Button_(CONTEXT);
                backPageWebBrowserButton.setText("\u2190");//Text
                backPageWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
                backPageWebBrowserButton.setTextColor(Color_.WHITE);
                backPageWebBrowserButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
                        if(webBrowserWebView != null) {
							if(webBrowserWebView.canGoBack()) {
								webBrowserWebView.goBack();
							} else {
								VertexClientPE.toast("Can't go any further!");
							}
                        }
                    }
                }));
                backPageWebBrowserLayout.addView(backPageWebBrowserButton);
				
				var forwardPageWebBrowserLayout = new LinearLayout_(CONTEXT);
                var forwardPageWebBrowserButton = new Button_(CONTEXT);
                forwardPageWebBrowserButton.setText("\u2192");//Text
                forwardPageWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
                forwardPageWebBrowserButton.setTextColor(Color_.WHITE);
                forwardPageWebBrowserButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
						if(webBrowserWebView.canGoForward()) {
							webBrowserWebView.goForward();
						} else {
							VertexClientPE.toast("Can't go any further!");
						}
                    }
                }));
                forwardPageWebBrowserLayout.addView(forwardPageWebBrowserButton);
				
                var reloadWebBrowserLayout = new LinearLayout_(CONTEXT);
                var reloadWebBrowserButton = new Button_(CONTEXT);
                reloadWebBrowserButton.setText("\u21BB");//Text
                reloadWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
                reloadWebBrowserButton.setTextColor(Color_.WHITE);
                reloadWebBrowserButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
                        if(webBrowserWebView != null) {
                            webBrowserWebView.reload();
                        }
                    }
                }));
                reloadWebBrowserLayout.addView(reloadWebBrowserButton);
				
				var urlBarWebBrowserLayout = new LinearLayout_(CONTEXT);
                var urlBarWebBrowserButton = new Button_(CONTEXT);
                urlBarWebBrowserButton.setText("...");//Text
                urlBarWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
                urlBarWebBrowserButton.setTextColor(Color_.WHITE);
                urlBarWebBrowserButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
                        VertexClientPE.showURLBarDialog();
                    }
                }));
                urlBarWebBrowserLayout.addView(urlBarWebBrowserButton);
				
				var devWebBrowserLayout = new LinearLayout_(CONTEXT);
                var devWebBrowserButton = new Button_(CONTEXT);
                devWebBrowserButton.setText("F12");//Text
                devWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#0B6138"), PorterDuff_.Mode.MULTIPLY);
                devWebBrowserButton.setTextColor(Color_.WHITE);
                devWebBrowserButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
						VertexClientPE.showF12Dialog();
						VertexClientPE.toast("Still work in progress!");
                    }
                }));
                devWebBrowserLayout.addView(devWebBrowserButton);
                
                var xWebBrowserLayout = new LinearLayout_(CONTEXT);
                xWebBrowserButton = new Button_(CONTEXT);
                xWebBrowserButton.setText("X");//Text
                xWebBrowserButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xWebBrowserButton.setTextColor(Color_.WHITE);
                xWebBrowserButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
                        backPageWebBrowserUI.dismiss(); //Close
                        forwardPageWebBrowserUI.dismiss(); //Close
                        reloadWebBrowserUI.dismiss(); //Close
                        urlBarWebBrowserUI.dismiss(); //Close
                        devWebBrowserUI.dismiss(); //Close
                        exitWebBrowserUI.dismiss(); //Close
                        webBrowserMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xWebBrowserLayout.addView(xWebBrowserButton);
				
				backPageWebBrowserUI = new PopupWindow_(backPageWebBrowserLayout, dip2px(40), dip2px(40));
                backPageWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backPageWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
				
				forwardPageWebBrowserUI = new PopupWindow_(forwardPageWebBrowserLayout, dip2px(40), dip2px(40));
                forwardPageWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
				forwardPageWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(40), 0);
                
                reloadWebBrowserUI = new PopupWindow_(reloadWebBrowserLayout, dip2px(40), dip2px(40));
                reloadWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                reloadWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(80), 0);
				
				urlBarWebBrowserUI = new PopupWindow_(urlBarWebBrowserLayout, dip2px(40), dip2px(40));
                urlBarWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                urlBarWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(120), 0);
				
				devWebBrowserUI = new PopupWindow_(devWebBrowserLayout, dip2px(60), dip2px(40));
                devWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                if(VertexClientPE.isDevMode()) {
					devWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, dip2px(160), 0);
                }
				
                exitWebBrowserUI = new PopupWindow_(xWebBrowserLayout, dip2px(40), dip2px(40));
                exitWebBrowserUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitWebBrowserUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitPlayerCustomizer() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xPlayerCustomizerLayout = new LinearLayout_(CONTEXT);
                var xPlayerCustomizerButton = new Button_(CONTEXT);
                xPlayerCustomizerButton.setText('X');//Text
                xPlayerCustomizerButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xPlayerCustomizerButton.setTextColor(Color_.WHITE);
                xPlayerCustomizerButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        exitPlayerCustomizerUI.dismiss(); //Close
                        playerCustomizerMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xPlayerCustomizerLayout.addView(xPlayerCustomizerButton);
                
                exitPlayerCustomizerUI = new PopupWindow_(xPlayerCustomizerLayout, dip2px(40), dip2px(40));
                exitPlayerCustomizerUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitPlayerCustomizerUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitOptiFine() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xOptiFineLayout = new LinearLayout_(CONTEXT);
                var xOptiFineButton = new Button_(CONTEXT);
                xOptiFineButton.setText('X');//Text
                xOptiFineButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xOptiFineButton.setTextColor(Color_.WHITE);
                xOptiFineButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        exitOptiFineUI.dismiss(); //Close
                        optiFineMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xOptiFineLayout.addView(xOptiFineButton);
                
                exitOptiFineUI = new PopupWindow_(xOptiFineLayout, dip2px(40), dip2px(40));
                exitOptiFineUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitOptiFineUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitPreview() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {				
				var backPreviewLayout = new LinearLayout_(CONTEXT);
                var backPreviewButton = new Button_(CONTEXT);
                backPreviewButton.setText("<");//Text
                backPreviewButton.getBackground().setColorFilter(Color_.parseColor("#00BFFF"), PorterDuff_.Mode.MULTIPLY);
                backPreviewButton.setTextColor(Color_.WHITE);
                backPreviewButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        backPreviewUI.dismiss(); //Close
                        exitPreviewUI.dismiss(); //Close
                        previewMenu.dismiss(); //Close
                        dashboardScreen();
                        exitDashboard();
                    }
                }));
                backPreviewLayout.addView(backPreviewButton);
                
                var xPreviewLayout = new LinearLayout_(CONTEXT);
                var xPreviewButton = new Button_(CONTEXT);
                xPreviewButton.setText('X');//Text
                xPreviewButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xPreviewButton.setTextColor(Color_.WHITE);
                xPreviewButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
						backPreviewUI.dismiss(); //Close
                        exitPreviewUI.dismiss(); //Close
                        previewMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xPreviewLayout.addView(xPreviewButton);
                
                backPreviewUI = new PopupWindow_(backPreviewLayout, dip2px(40), dip2px(40));
                backPreviewUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                backPreviewUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.LEFT | Gravity_.TOP, 0, 0);
                
                exitPreviewUI = new PopupWindow_(xPreviewLayout, dip2px(40), dip2px(40));
                exitPreviewUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitPreviewUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitShop() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xShopLayout = new LinearLayout_(CONTEXT);
                var xShopButton = new Button_(CONTEXT);
                xShopButton.setText('X');//Text
                xShopButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xShopButton.setTextColor(Color_.WHITE);
                xShopButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg){
                        exitShopUI.dismiss(); //Close
                        shopMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xShopLayout.addView(xShopButton);
                
                exitShopUI = new PopupWindow_(xShopLayout, dip2px(40), dip2px(40));
                exitShopUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitShopUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

function exitDashboard() {
    CONTEXT.runOnUiThread(new Runnable_({
        run: function() {
            try {
                var xDashboardLayout = new LinearLayout_(CONTEXT);
                var xDashboardButton = new Button_(CONTEXT);
                xDashboardButton.setText('X');//Text
                xDashboardButton.getBackground().setColorFilter(Color_.parseColor("#FF0000"), PorterDuff_.Mode.MULTIPLY);
                xDashboardButton.setTextColor(Color_.WHITE);
                xDashboardButton.setOnClickListener(new View_.OnClickListener({
                    onClick: function(viewarg) {
                        exitDashboardUI.dismiss(); //Close
                        dashboardMenu.dismiss(); //Close
                        showMenuButton();
                    }
                }));
                xDashboardLayout.addView(xDashboardButton);
                
                exitDashboardUI = new PopupWindow_(xDashboardLayout, dip2px(40), dip2px(40));
                exitDashboardUI.setBackgroundDrawable(new ColorDrawable_(Color_.TRANSPARENT));
                exitDashboardUI.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.RIGHT | Gravity_.TOP, 0, 0);
            } catch(exception) {
                print(exception);
                VertexClientPE.showBugReportDialog(exception);
            }
        }
    }));
}

//What are you doing here? ;-)
