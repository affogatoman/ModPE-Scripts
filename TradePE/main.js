//TODO: make
Trade = {};

//Variables
Trade.HANDING_EME = false;
Trade.PAGE = 0;
Trade.EME_COUNT = 0;
Trade.META = null;
Trade.META_MAPPED = null;
Trade.LANG_KEY = null;
Trade.LANG_DATA = null;
Trade.SELLER = null;

//Trade items
Trade.Items = {
    butcher: {
        name: ["item.beefCooked.name", "item.porkchopCooked.name", "item.helmetCloth.name", "item.chestplateCloth.name", "item.leggingsCloth.name", "item.bootsCloth.name", "item.beefRaw.name", "item.porkchopRaw.name", "item.coal.name", "item.ingotGold.name"],
        meta: [["beef_cooked",0], ["porkchop_cooked",0], ["helmet", 0], ["chestplate", 0], ["leggings", 0], ["boots", 0], ["beef_raw", 0], ["porkchop_raw", 0], ["coal", 0], ["gold_ingot", 0]],
        id: [364, 320, 298, 299, 300, 301, 363, 319, 263, 266],
        dam: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        cost: [1, 1, 2, 4, 2, 2, 1, 1, 1, 1],
        count: [6, 6, 1, 1, 1, 1, 15, 15, 20, 8]
    },
    farmer: {
        name: ["item.apple.name", "item.bread.name", "item.chickenCooked.name", "item.cookie.name", "item.melon.name", "item.arrow.name", "item.flintAndSteel.name", "item.shears.name", "item.chickenRaw.name", "item.wheat.name", "item.fishCooked.name"],
        meta: [["apple",0], ["bread", 0], ["chicken_cooked", 0], ["cookie", 0], ["melon", 0], ["arrow", 0], ["flint_and_steel", 0], ["shears", 0], ["chicken_raw", 0], ["wheat", 0], ["fish_cooked", 0]],
        id: [260, 297, 366, 357, 369, 262, 259, 359, 365, 296, 350],
        dam: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        cost: [1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1],
        count: [6, 3, 7, 9, 6, 5, 1, 1, 16, 19, 11]
    },
    librarian: {
        name: ["librarian"],
        meta: [["apple", 0]],
        id: [260],
        dam: [0],
        cost: [1],
        count: [1]
    },
    priest: {
        name: ["priest"],
        meta: [["apple",0]],
        id: [260],
        dam: [0],
        cost: [1],
        count: [1]
    },
    smith: {
        name: ["smith"],
        meta: [["apple",0]],
        id: [260],
        dam: [0],
        cost: [1],
        count: [1]
    }
};

//Gui
Trade.INTERACTPW = null;
Trade.MAINPW = null;
Trade.NAME = null;
Trade.ITEMBACK = null;
Trade.COST = null;
Trade.COUNT = null;

Trade.init = function() {
    var ctx = Utils.getContext();
    var mainPw = new android.widget.PopupWindow(ctx);
    var mainLayout = new android.widget.RelativeLayout(ctx);

    var back = Utils.showBackground();
    mainLayout.addView(back);
    var header = Utils.showHeader("Trade");
    mainLayout.addView(header);
    var itemback = Utils.showItemBackground(25+18+16, 65);
    mainLayout.addView(itemback);
    var item = Utils.getItemImage("emerald", 0);
    itemback.setImageBitmap(android.graphics.Bitmap.createScaledBitmap(item, item.getWidth()*Utils.FOUR*1.6, item.getHeight()*Utils.FOUR*1.6, false));
    var cost = Utils.justText("", 25+18+16+4, 69);
    mainLayout.addView(cost);
    var arrow = Utils.renderArrow(ctx.getScreenWidth()/Utils.FOUR/2-8, 60+17);
    mainLayout.addView(arrow);
    var left = Utils.showButton(25, 60, 18, 50, "<", function() {
        Utils.minusPage();
        Utils.updateTradeList(name, itemback2, cost, count);
    });
    mainLayout.addView(left);
    var right = Utils.showButton(ctx.getScreenWidth()/Utils.FOUR-25-18, 60, 18, 50, ">", function() {
        Utils.plusPage();
        Utils.updateTradeList(name, itemback2, cost, count);
    });
    mainLayout.addView(right);
    var buy = Utils.showButton(ctx.getScreenWidth()/Utils.FOUR-25-108, 130, 108, 32, "Buy", function() {
        Utils.buyThing();
    });
    mainLayout.addView(buy);
    var sell = Utils.showButton(25, 130, 64+36+8, 32, "Sell", function() {
        Utils.sellThing();
    });
    mainLayout.addView(sell);
    var itemback2 = Utils.showItemBackground(ctx.getScreenWidth()/Utils.FOUR-25-18-16-40, 65);
    mainLayout.addView(itemback2);
    var count = Utils.justText("", ctx.getScreenWidth()/Utils.FOUR-25-18-16-40+4, 69);
    mainLayout.addView(count);
    var dismiss = Utils.showButton(4, 4, 38, 18, "Back", function() {
        mainPw.dismiss();
    });
    mainLayout.addView(dismiss);
    var name = Utils.justText("", ctx.getScreenWidth()/Utils.FOUR-(36+40+32)-25, 40, 36+40+32);
    mainLayout.addView(name);
    mainPw.setContentView(mainLayout);
    mainPw.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    mainPw.setWidth(ctx.getScreenWidth());
    mainPw.setHeight(ctx.getScreenHeight());
    Trade.MAINPW = mainPw;
    Trade.NAME = name;
    Trade.ITEMBACK = itemback2;
    Trade.COST = cost;
    Trade.COUNT = count;
};

Trade.showScreen = function() {
    Utils.createUiThread(function(ctx) {
        Trade.EME_COUNT = Utils.getAllItems(388, 0);
        Trade.PAGE = 0;
        Utils.updateTradeList(Trade.NAME, Trade.ITEMBACK, Trade.COST, Trade.COUNT);
        Trade.MAINPW.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
    });
};

Utils = {};

Utils.getContext = function() {
    return com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
};

Utils.createUiThread = function(func) {
    Utils.getContext().runOnUiThread(new java.lang.Runnable({
        run: function() {
            func(Utils.getContext());
        }
    }));
};

Utils.FOUR = android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP, 2, Utils.getContext().getResources().getDisplayMetrics());

Utils.hasFontFile = function() {
    return new java.io.File("/sdcard/아포카토맨/minecraft.ttf").exists();
};

Utils.downloadFontFile = function() {
    if(Utils.hasFontFile())
        return;
    else {
        var url = new java.net.URL("https://www.dropbox.com/s/dykptassixwqnl2/minecraft.ttf?dl=1").openConnection().getInputStream();
        var bis = new java.io.BufferedInputStream(url);
        var target = new java.io.File("/sdcard/아포카토맨/minecraft.ttf");
        target.getParentFile().mkdirs();
        var bos = new java.io.BufferedOutputStream(new java.io.FileOutputStream(target));
        var buf = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 4096);
        var read = 0;
        while((read = bis.read(buf)) >= 0)
            bos.write(buf, 0, read);
        bis.close();
        bos.close();
    }
};

Utils.getTypeface = function() {
    return android.graphics.Typeface.createFromFile("/sdcard/아포카토맨/minecraft.ttf");
};

Utils.getSpritesheet = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/spritesheet.png"));
};

Utils.getTouchgui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/touchgui.png"));
};

Utils.getGui = function() {
    return android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/gui.png"));
};

Utils.trimImage = function(bitmap, x, y, width, height) {
    return android.graphics.Bitmap.createBitmap(bitmap, x, y, width, height);
};

Utils.plusPage = function() {
    var type = Utils.getVillagerType(Trade.SELLER);
    if(Trade.PAGE != Trade.Items[type].name.length-1)
        Trade.PAGE++;
};

Utils.minusPage = function() {
    if(Trade.PAGE != 0)
        Trade.PAGE--;
};

Utils.getStretchedImage = function(bm, x, y, stretchWidth, stretchHeight, width, height) {
    var blank = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888);
    var Bitmap = android.graphics.Bitmap;
    var part1 = Bitmap.createBitmap(bm, 0, 0, x, y);
    var part2 = Bitmap.createBitmap(bm, x, 0, stretchWidth, y);
    var part3 = Bitmap.createBitmap(bm, x+stretchWidth, 0, bm.getWidth()-x-stretchWidth, y);
    var part4 = Bitmap.createBitmap(bm, 0, y, x, stretchHeight);
    var part5 = Bitmap.createBitmap(bm, x, y, stretchWidth, stretchHeight);
    var part6 = Bitmap.createBitmap(bm, x+stretchWidth, y, bm.getWidth()-x-stretchWidth, stretchHeight);
    var part7 = Bitmap.createBitmap(bm, 0, y+stretchHeight, x, bm.getHeight()-y-stretchHeight);
    var part8 = Bitmap.createBitmap(bm, x, y+stretchHeight, stretchWidth, bm.getHeight()-y-stretchHeight);
    var part9 = Bitmap.createBitmap(bm, x+stretchWidth, y+stretchHeight, bm.getWidth()-x-stretchWidth, bm.getHeight()-y-stretchHeight);
    var canvas = new android.graphics.Canvas(blank);
    canvas.drawBitmap(part1, 0, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part2, width-bm.getWidth()+stretchWidth, y, false), x, 0, null);
    canvas.drawBitmap(part3, width-bm.getWidth()+stretchWidth+x, 0, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part4, x, height-bm.getHeight()+stretchHeight, false), 0, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part5, width-bm.getWidth()+stretchWidth, height-bm.getHeight()+stretchHeight, false), x, y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part6, part3.getWidth(), height-bm.getHeight()+stretchHeight, false), width-bm.getWidth()+stretchWidth+x, y, null);
    canvas.drawBitmap(part7, 0, height-bm.getHeight()+stretchHeight+y, null);
    canvas.drawBitmap(Bitmap.createScaledBitmap(part8, width-bm.getWidth()+stretchWidth, part7.getHeight(), false), x, height-bm.getHeight()+stretchHeight+y, null);
    canvas.drawBitmap(part9, width-bm.getWidth()+stretchWidth+x, height-bm.getHeight()+stretchHeight+y, null);

    return new android.graphics.drawable.BitmapDrawable(blank);
};

Utils.showBackground = function() {
    var back = new android.view.View(Utils.getContext());
    back.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(Utils.getContext().getScreenWidth(), Utils.getContext().getScreenHeight()));
    var spritesheet = android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(Utils.getSpritesheet(), 0, 0, 16, 16), 16*Utils.FOUR, 16*Utils.FOUR, false);
    back.setBackgroundDrawable(Utils.getStretchedImage(spritesheet, 4*Utils.FOUR, 4*Utils.FOUR, 8*Utils.FOUR, 8*Utils.FOUR, Utils.getContext().getScreenWidth(), Utils.getContext().getScreenHeight()));
    return back;
};

Utils.showHeader = function(text) {
    var ctx = Utils.getContext();
    var vert = new android.widget.LinearLayout(ctx);
    vert.setOrientation(android.widget.LinearLayout.VERTICAL);
    var horiz = new android.widget.LinearLayout(ctx);
    horiz.setOrientation(android.widget.LinearLayout.HORIZONTAL);
    var left = new android.view.View(ctx);
    var header = Utils.trimImage(Utils.getTouchgui(), 150, 26, 14, 29);
    left.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(header, 0, 0, 2, 25), Utils.FOUR*2, Utils.FOUR*25, false)));
    left.setLayoutParams(new android.widget.LinearLayout.LayoutParams(Utils.FOUR*2, Utils.FOUR*25));
    horiz.addView(left);
    var center = new android.widget.TextView(ctx);
    center.setTypeface(Utils.getTypeface());
    center.setGravity(android.view.Gravity.CENTER);
    center.setTextSize(4*Utils.FOUR);
    center.setTextColor(android.graphics.Color.parseColor("#e1e1e1"));
    center.setText(text);
    center.setShadowLayer(0.00001, Utils.FOUR, Utils.FOUR, android.graphics.Color.DKGRAY);
    center.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(header, 3, 0, 8, 25), ctx.getScreenWidth()-Utils.FOUR*4, Utils.FOUR*25, false)));
    center.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth()-Utils.FOUR*4, Utils.FOUR*25));
    horiz.addView(center);
    var right = new android.view.View(ctx);
    right.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(header, 12, 0, 2, 25), Utils.FOUR*2, Utils.FOUR*25, false)));
    right.setLayoutParams(new android.widget.LinearLayout.LayoutParams(Utils.FOUR*2, Utils.FOUR*25));
    horiz.addView(right);
    vert.addView(horiz);
    var down = new android.view.View(ctx);
    down.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(header, 3, 26, 8, 3), ctx.getScreenWidth(), Utils.FOUR*3, false)));
    down.setLayoutParams(new android.widget.LinearLayout.LayoutParams(ctx.getScreenWidth(), Utils.FOUR*3));
    vert.addView(down);
    vert.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(Utils.getContext().getScreenWidth(), 28*Utils.FOUR));
    return vert;
};

Utils.showButton = function(x, y, width, height, text, onclick) {
    var ctx = Utils.getContext();
    var button = new android.widget.Button(ctx);
    button.setPadding(0, 0, 0, 0);
    var params = new android.widget.RelativeLayout.LayoutParams(width*Utils.FOUR, height*Utils.FOUR);
    params.setMargins(x*Utils.FOUR, y*Utils.FOUR, 0, 0);
    button.setLayoutParams(params);
    var list = new android.graphics.drawable.StateListDrawable();
    list.addState([android.R.attr.state_pressed], Utils.getStretchedImage(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(Utils.getSpritesheet(), 0, 32, 8, 8), 8*Utils.FOUR, 8*Utils.FOUR, false), 2*Utils.FOUR, 2*Utils.FOUR, 4*Utils.FOUR, 4*Utils.FOUR, width*Utils.FOUR, height*Utils.FOUR));
    list.addState([], Utils.getStretchedImage(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(Utils.getSpritesheet(), 8, 32, 8, 8), 8*Utils.FOUR, 8*Utils.FOUR, false), 2*Utils.FOUR, 2*Utils.FOUR, 4*Utils.FOUR, 4*Utils.FOUR, width*Utils.FOUR, height*Utils.FOUR));
    button.setBackgroundDrawable(list);
    if(Utils.hasNonAscii(text)) {
        var unclicked = Utils.getStringBuilder(text, "#e1e1e1");
        button.setText(unclicked);
        var clicked = Utils.getStringBuilder(text, "#ffffa1");
    } else
        button.setText(text);
    button.setTypeface(Utils.getTypeface());
    button.setTextColor(android.graphics.Color.parseColor("#e1e1e1"));
    button.setTextSize(4*Utils.FOUR);
    button.setSingleLine(true);
    var current = false;
    button.setOnTouchListener(new android.view.View.OnTouchListener({
        onTouch: function(view, event) {
            switch(event.getAction()) {
                case android.view.MotionEvent.ACTION_DOWN:
                    view.setTextColor(android.graphics.Color.parseColor("#ffffa1"));
                    if(Utils.hasNonAscii(text))
                        button.setText(clicked);
                    break;
                case android.view.MotionEvent.ACTION_MOVE:
                    if(event.getX() < 0 || event.getY() <0 || event.getX() > width*Utils.FOUR || event.getY() > height*Utils.FOUR) {
                        view.setTextColor(android.graphics.Color.parseColor("#e1e1e1"));
                        if(Utils.hasNonAscii(text))
                            button.setText(unclicked);
                        current = true;
                    } else if(!current) {
                        if(Utils.hasNonAscii(text))
                            button.setText(clicked);
                        view.setTextColor(android.graphics.Color.parseColor("#ffffa1"));
                    }
                    break;
                case android.view.MotionEvent.ACTION_UP:
                    view.setTextColor(android.graphics.Color.parseColor("#e1e1e1"));
                    if(Utils.hasNonAscii(text))
                        button.setText(unclicked);
                    if(current == false && !(event.getX() < 0 || event.getY() <0 || event.getX() > width*Utils.FOUR || event.getY() > height*Utils.FOUR)) {
                        if(typeof onclick === "function")
                            onclick();
                            Utils.clickSound();
                    }
                    current = false;
                    break;
            }
            return false;
        }
    }));
    button.setShadowLayer(0.00001, Utils.FOUR, Utils.FOUR, android.graphics.Color.DKGRAY);
    return button;
};

Utils.renderItem = function(name, data, x, y, scale) {
    var emerald = Utils.getItemImage(name, data);
    emerald = android.graphics.Bitmap.createScaledBitmap(emerald, emerald.getWidth()*Utils.FOUR*scale, emerald.getHeight()*Utils.FOUR*scale, false);
    var view = new android.view.View(Utils.getContext());
    view.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(emerald));
    var params = new android.widget.RelativeLayout.LayoutParams(emerald.getWidth(), emerald.getHeight());
    params.setMargins(x*Utils.FOUR, y*Utils.FOUR, 0, 0);
    view.setLayoutParams(params);
    return view;
};

Utils.showItemBackground = function(x, y) {
    var view = new android.widget.ImageView(Utils.getContext());
    view.setScaleType(android.widget.ImageView.ScaleType.CENTER);
    var params = new android.widget.RelativeLayout.LayoutParams(40*Utils.FOUR, 40*Utils.FOUR);
    params.setMargins(x*Utils.FOUR, y*Utils.FOUR, 0, 0);
    view.setLayoutParams(params);
    view.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(Utils.getGui(), Utils.getGui().getWidth()*0.78125, Utils.getGui().getHeight()*0.1796875, Utils.getGui().getWidth()*0.0625, Utils.getGui().getWidth()*0.0625), 40*Utils.FOUR, 40*Utils.FOUR, false)));
    return view;
};

Utils.justText = function(str, x, y, width) {
    var text = new android.widget.TextView(Utils.getContext());
    text.setLineSpacing(Utils.FOUR, 1);
    var params;
    if(typeof width === "number")
        params = new android.widget.RelativeLayout.LayoutParams(width*Utils.FOUR, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    else
        params = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    params.setMargins(x*Utils.FOUR, y*Utils.FOUR, 0, 0);
    text.setLayoutParams(params);
    text.setText(Utils.hasNonAscii(str) ? Utils.getStringBuilder(str) : str);
    text.setGravity(android.view.Gravity.CENTER);
    text.setTypeface(Utils.getTypeface());
    text.setTextColor(android.graphics.Color.parseColor("#e1e1e1"));
    text.setTextSize(4*Utils.FOUR);
    text.setShadowLayer(0.00001, Utils.FOUR, Utils.FOUR, android.graphics.Color.DKGRAY);
    return text;
};

Utils.renderArrow = function(x, y) {
    var w = android.graphics.Color.WHITE;
    var b = android.graphics.Color.parseColor("#23000000");
    var pixels = [0,0,0,0,0,0,0,0,0,0,0,0,w,0,0,0,
                  0,0,0,0,0,0,0,0,0,0,0,0,w,w,0,0,
                  0,0,0,0,0,0,0,0,0,0,0,0,w,w,w,0,
                  w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,
                  w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,
                  b,b,b,b,b,b,b,b,b,b,b,b,w,w,w,b,
                  0,0,0,0,0,0,0,0,0,0,0,0,w,w,b,0,
                  0,0,0,w,0,0,0,0,0,0,0,0,w,b,0,0,
                  0,0,w,w,0,0,0,0,0,0,0,0,b,0,0,0,
                  0,w,w,w,0,0,0,0,0,0,0,0,0,0,0,0,
                  w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,
                  w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,
                  b,w,w,w,b,b,b,b,b,b,b,b,b,b,b,b,
                  0,b,w,w,0,0,0,0,0,0,0,0,0,0,0,0,
                  0,0,b,w,0,0,0,0,0,0,0,0,0,0,0,0,
                  0,0,0,b,0,0,0,0,0,0,0,0,0,0,0,0];
    var bitmap = android.graphics.Bitmap.createBitmap(pixels, 0, 16, 16, 16, android.graphics.Bitmap.Config.ARGB_8888);
    var view = new android.view.View(Utils.getContext());
    var params = new android.widget.RelativeLayout.LayoutParams(16*Utils.FOUR, 16*Utils.FOUR);
    params.setMargins(x*Utils.FOUR, y*Utils.FOUR, 0, 0);
    view.setLayoutParams(params);
    view.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(bitmap, 16*Utils.FOUR, 16*Utils.FOUR, false)));
    return view;
};

Utils.getItemImage = function(text, data) {
    var items = android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/items-opaque.png"));
    var uvs = Trade.META[Trade.META_MAPPED.indexOf(text)].uvs[data];
    return android.graphics.Bitmap.createBitmap(items, uvs[0]*items.getWidth(), uvs[1]*items.getHeight(), uvs[2]*items.getWidth()-uvs[0]*items.getWidth(), uvs[3]*items.getHeight()-uvs[1]*items.getHeight());
};

Utils.updateTradeList = function(namev, itemv, costv, countv) {
    var page = Trade.PAGE;
    var type = Utils.getVillagerType(Trade.SELLER);
    if(Utils.hasNonAscii(Lang.getData(Trade.Items[type].name[page])))
        namev.setText(Utils.getStringBuilder(Lang.getData(Trade.Items[type].name[page]), "#e1e1e1"));
    else
        namev.setText(Lang.getData(Trade.Items[type].name[page]));
    var item = Utils.getItemImage(Trade.Items[type].meta[page][0], Trade.Items[type].meta[page][1]);
    itemv.setImageBitmap(android.graphics.Bitmap.createScaledBitmap(item, item.getWidth()*Utils.FOUR*1.6, item.getHeight()*Utils.FOUR*1.6, false));
    costv.setText(""+Trade.Items[type].cost[page]);
    countv.setText(""+Trade.Items[type].count[page]);
};

Utils.getAllItems = function(id, dam) {
    var result = 0;
    for(var i = 9; i <= 44; i++) {
        if(Player.getInventorySlot(i) === id && Player.getInventorySlotData(i) === dam)
            result+=Player.getInventorySlotCount(i);
    }
    return result;
};

Utils.buyThing = function() {
    var type = Utils.getVillagerType(Trade.SELLER);
    if(Trade.EME_COUNT >= Trade.Items[type].cost[Trade.PAGE]) {
        Trade.EME_COUNT-=Trade.Items[type].cost[Trade.PAGE];
        //TODO: remake the addItemInventory function
        addItemInventory(388, -Trade.Items[type].cost[Trade.PAGE], 0);
        addItemInventory(Trade.Items[type].id[Trade.PAGE], Trade.Items[type].count[Trade.PAGE], Trade.Items[type].dam[Trade.PAGE]);
    } else
        Utils.warn("Not Enough Emeralds!");
};

Utils.warn = function(txt) {
    Utils.createUiThread(function(ctx) {
        var text = new android.widget.TextView(ctx);
        if(Utils.hasNonAscii(txt))
            text.setText(Utils.getStringBuilder(txt, "#ff0000", 2, "#410000"));
        else
            text.setText(txt);
        text.setSingleLine(true);
        text.setLineSpacing(Utils.FOUR*1.5, 1);
        text.setTypeface(Utils.getTypeface());
        text.setShadowLayer(0.00001, 1.5*Utils.FOUR, 1.5*Utils.FOUR, android.graphics.Color.parseColor("#410000"));
        text.setTextColor(android.graphics.Color.RED);
        text.setTextSize(6*Utils.FOUR);
        var toast = android.widget.Toast.makeText(ctx, "", android.widget.Toast.LENGTH_SHORT);
        toast.setGravity(android.view.Gravity.TOP, 0, 32*Utils.FOUR);
        toast.setView(text);
        toast.show();
    });
};

Utils.sellThing = function() {
    var type = Utils.getVillagerType(Trade.SELLER);
    var counts = Utils.getAllItems(Trade.Items[type].id[Trade.PAGE], Trade.Items[type].dam[Trade.PAGE]);
    if(counts >= Trade.Items[type].count[Trade.PAGE]) {
        addItemInventory(388, Trade.Items[type].cost[Trade.PAGE], 0);
        addItemInventory(Trade.Items[type].id[Trade.PAGE], -Trade.Items[type].count[Trade.PAGE], Trade.Items[type].dam[Trade.PAGE]);
    } else
        Utils.warn("Not Enough items!");
};

Utils.getStringBuilder = function(text, color, scale, shadowc) {
    if(scale == null)
        scale = 1;
    if(shadowc == null)
        shadowc = android.graphics.Color.DKGRAY;
    else
        shadowc = android.graphics.Color.parseColor(shadowc);
    if(text.charCodeAt(text.length-1) == 13)
        text = text.substring(0, text.length-1);
    if(color != null)
        color = android.graphics.Color.parseColor(color);
    var divide = function(a) {
        var b = 0;
        if (a > 256)
            b = a % 256;
        else
            b = a;
        return [b, Math.floor(a / 256)];    
    };
    var builder = new android.text.SpannableStringBuilder(text);
    for(var i = 0; i < text.length; i++) {
        if(text.charAt(i) == " ")
            continue;
        var d = divide(text.charCodeAt(i));
        var x = (((parseInt(d[0], 10)) % 16)) * 16;
        var y = Math.floor(parseInt(d[0], 10) / 16) * 16;
        var num = parseInt(d[1], 10).toString(16).toUpperCase();
        if(num.length < 2)
            num = "0"+num;
        var font = android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/font/glyph_"+num+".png"));
        var bitmap = Utils.trimImage(font, x, y, 15, 16);
        var result = android.graphics.Bitmap.createBitmap(16, 18, android.graphics.Bitmap.Config.ARGB_8888);
        var canvas = new android.graphics.Canvas(result);
        var p = new android.graphics.Paint();
        var p2 = new android.graphics.Paint();
        p.setColorFilter(new android.graphics.PorterDuffColorFilter(shadowc, android.graphics.PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(bitmap, 2, 2, p);
        p2.setColorFilter(new android.graphics.PorterDuffColorFilter(color, android.graphics.PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(bitmap, 0, 0, p2);
        builder.setSpan(new android.text.style.ImageSpan(Utils.getContext(), android.graphics.Bitmap.createScaledBitmap(result, scale*8*Utils.FOUR, scale*9*Utils.FOUR, false)), i, i+1, android.text.Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
    }
    return builder;
};

Utils.hasNonAscii = function(str) {
    return str.split("").some(function(e) {
        return e.charCodeAt(0) > 255;
    });
};

Utils.interactInit = function() {
    var text = new android.widget.TextView(Utils.getContext());
    text.setText("Trade");
    text.setGravity(android.view.Gravity.CENTER);
    text.setTypeface(Utils.getTypeface());
    text.setTextColor(android.graphics.Color.parseColor("#e1e1e1"));
    text.setTextSize(4*Utils.FOUR);
    text.setOnClickListener(new android.view.View.OnClickListener({
        onClick: function() {
            Trade.showScreen();
        }
    }));
    var drawable = new android.graphics.drawable.BitmapDrawable(android.graphics.Bitmap.createScaledBitmap(Utils.trimImage(Utils.getGui(), 0, Utils.getGui().getHeight()*0.640625, Utils.getGui().getWidth()*0.4609375, Utils.getGui().getHeight()*0.078125), 118*0.75*Utils.FOUR, 20*Utils.FOUR, false));
    drawable.setAlpha(200);
    var pw = new android.widget.PopupWindow(Utils.getContext());
    pw.setContentView(text);
    pw.setWidth(118*0.75*Utils.FOUR);
    pw.setHeight(20*Utils.FOUR);
    pw.setBackgroundDrawable(drawable);
    Trade.INTERACTPW = pw;
};

Utils.showInteractPw = function() {
    Utils.createUiThread(function(ctx) {
        Trade.INTERACTPW.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, 0, 24*Utils.FOUR);
    });
};

Utils.getVillagerType = function(ent) {
    var path = Entity.getMobSkin(ent);
    return path.substring(path.lastIndexOf("/")+1, path.length-4);
};

Utils.clickSound = function() {
    Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 7 ,7);
};

var Lang = {};

Lang.readLang = function() {
    var lang = new java.lang.String(ModPE.getBytesFromTexturePack("lang/en_US.lang"))+"";
    var split1 = lang.split("\n");
    var result = split1.map(function(e) {
        return e.split("=");
    });
    Trade.LANG_KEY = result.map(function(e) {
        return e[0];
    });
    Trade.LANG_DATA = result.map(function(e) {
        return e[1];
    });
};

Lang.getData = function(key) {
    var data = Trade.LANG_DATA[Trade.LANG_KEY.indexOf(key)];
    if(typeof data === "undefined")
        return key;
    return data;
};





function modTick() {
    //Initialing
    if(Trade.META == null)
        eval("Trade.META = "+new java.lang.String(ModPE.getBytesFromTexturePack("images/items.meta"))+";");
    if(Trade.META_MAPPED == null)
        Trade.META_MAPPED = Trade.META.map(function(e) {
            return e.name;
        });
    if(Trade.MAINPW == null) {
        Trade.MAINPW = 0;
        Trade.init();
    }
    if(Trade.INTERACTPW == null) {
        Trade.INTERACTPW = 0;
        Utils.interactInit();
    }
    if(Trade.LANG_KEY == null && Trade.LANG_DATA == null) {
        Trade.LANG_KEY = 0;
        Trade.LANG_DATA = 0;
        Lang.readLang();
    }
    
    //Handing Emerald
    if(Player.getCarriedItem() == 388)
        Trade.HANDING_EME = true;
    if(Trade.HANDING_EME && Entity.getEntityTypeId(Player.getPointedEntity()) == 15) {
        if(!Trade.INTERACTPW.isShowing()) {
            Trade.SELLER = Player.getPointedEntity();
            Utils.showInteractPw();
        }
    }
    if(Trade.HANDING_EME && (Player.getCarriedItem() != 388 || Entity.getEntityTypeId(Player.getPointedEntity()) != 15)) {
        Trade.HANDING_EME = false;
        Utils.createUiThread(function() {
            Trade.INTERACTPW.dismiss();
        });
    }
    
    if(Entity.getHealth(Player.getEntity()) <= 0) {
        leaveGame();
    }
}

function newLevel() {
    Player.addItemCreativeInv(388, 1, 0);
}

function leaveGame() {
    Utils.createUiThread(function() {
        if(Trade.MAINPW.isShowing())
            Trade.MAINPW.dismiss();
        if(Trade.INTERACTPW.isShowing())
            Trade.INTERACTPW.dismiss();
    });
}

Utils.downloadFontFile();

