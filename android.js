/**
 * Created by ChalkPE on 2015-03-22.
 */

var android = {};
android.app = {};
android.app.AlertDialog = function(){};
android.app.AlertDialog.Builder = function(){};
android.app.AlertDialog.Builder.setView = function(){};
android.app.AlertDialog.Builder.show = function(){};
android.content = {};
android.content.Context = function(){};
android.content.Context.getFilesDir = function(){};
android.content.Context.getResources = function(){};
android.content.Context.getWindow = function(){};
android.content.Context.getWindowManager = function(){};
android.content.Context.runOnUiThread = function(){};
android.content.Context.setTheme = function(){};
android.content.res = {};
android.content.res.Resources = function(){};
android.content.res.Resources.getDisplayMetrics = function(){};
android.graphics = {};
android.graphics.drawable = {};
android.graphics.drawable.BitmapDrawable = function(){};
android.graphics.drawable.ColorDrawable = function(){};
android.graphics.drawable.StateListDrawable = function(){};
android.graphics.drawable.StateListDrawable.addState = function(){};
android.graphics.drawable.shapes = {};
android.graphics.Bitmap = function(){};
android.graphics.Bitmap.Config = function(){};
android.graphics.Bitmap.Config.ARGB_8888 = NaN;
android.graphics.Bitmap.createBitmap = function(){};
android.graphics.Bitmap.createScaledBitmap = function(){};
android.graphics.BitmapFactory = function(){};
android.graphics.BitmapFactory.decodeStream = function(){};
android.graphics.Canvas = function(){};
android.graphics.Canvas.drawBitmap = function(){};
android.graphics.Canvas.drawCircle = function(){};
android.graphics.Canvas.drawPath = function(){};
android.graphics.Canvas.drawRect = function(){};
android.graphics.Canvas.drawText = function(){};
android.graphics.Color = function(){};
android.graphics.Color.DKGRAY = NaN;
android.graphics.Color.TRANSPARENT = NaN;
android.graphics.Color.argb = function(){};
android.graphics.Color.parseColor = function(){};
android.graphics.Color.blue = function(){};
android.graphics.Color.green = function(){};
android.graphics.Color.red = function(){};
android.graphics.Color.rgb = function(){};
android.graphics.Paint = function(){};
android.graphics.Paint.ANTI_ALIAS_FLAG = NaN;
android.graphics.Paint.Join = function(){};
android.graphics.Paint.Join.MITER = NaN;
android.graphics.Paint.Style = function(){};
android.graphics.Paint.Style.FILL = NaN;
android.graphics.Paint.Style.STROKE = NaN;
android.graphics.Paint.setAlpha = function(){};
android.graphics.Paint.setColor = function(){};
android.graphics.Paint.setShader = function(){};
android.graphics.Paint.setStrokeJoin = function(){};
android.graphics.Paint.setStrokeWidth = function(){};
android.graphics.Paint.setStyle = function(){};
android.graphics.Path = function(){};
android.graphics.Path.lineTo = function(){};
android.graphics.Path.moveTo = function(){};
android.graphics.Typeface = function(){};
android.graphics.Typeface.MONOSPACE = null;
android.graphics.Typeface.createFromFile = function(){};
android.os = {};
android.os.Environment = function(){};
android.os.Environment.getExternalStorageDirectory = function(){};
android.text = {};
android.text.Html = function(){};
android.text.Html.fromHtml = function(){};
android.util = {};
android.util.DisplayMetrics = function(){};
android.util.DisplayMetrics.density = NaN;
android.util.DisplayMetrics.heightPixels = NaN;
android.util.DisplayMetrics.widthPixels = NaN;
android.util.TypedValue = function(){};
android.util.TypedValue.COMPLEX_UNIT_DIP = NaN;
android.util.TypedValue.COMPLEX_UNIT_PX = NaN;
android.util.TypedValue.applyDimension = function(){};
android.view = {};
android.view.Display = function(){};
android.view.Display.getHeight = function(){};
android.view.Display.getWidth = function(){};
android.view.Gravity = function(){};
android.view.Gravity.BOTTOM = NaN;
android.view.Gravity.CENTER = NaN;
android.view.Gravity.CENTER_VERTICAL = NaN;
android.view.Gravity.LEFT = NaN;
android.view.Gravity.RIGHT = NaN;
android.view.Gravity.TOP = NaN;
android.view.Gravity.MotionEvent = NaN;
android.view.MotionEvent = function(){};
android.view.MotionEvent.ACTION_CANCEL = NaN;
android.view.MotionEvent.ACTION_DOWN = NaN;
android.view.MotionEvent.ACTION_HOVER_ENTER = NaN;
android.view.MotionEvent.ACTION_HOVER_EXIT = NaN;
android.view.MotionEvent.ACTION_MOVE = NaN;
android.view.MotionEvent.ACTION_UP = NaN;
android.view.View = function(){};
android.view.View.FOCUS_DOWN = NaN;
android.view.View.INVISIBLE = NaN;
android.view.View.VISIBLE = NaN;
android.view.View.OnClickListener = function(){};
android.view.View.OnTouchListener = function(){};
android.view.View.getBackground = function(){};
android.view.View.getHeight = function(){};
android.view.View.getLayoutParams = function(){};
android.view.View.setBackground = function(){};
android.view.View.setBackgroundColor = function(){};
android.view.View.setBackgroundDrawable = function(){};
android.view.View.setLayoutParams = function(){};
android.view.View.setOnClickListener = function(){};
android.view.View.setOnTouchListener = function(){};
android.view.View.setPadding = function(){};
android.view.View.setVisibility = function(){};
android.view.View.setX = function(){};
android.view.View.setY = function(){};
android.view.ViewGroup = function(){};
android.view.ViewGroup.prototype = new android.view.View();
android.view.ViewGroup.prototype.constructor = android.view.View;
android.view.ViewGroup.LayoutParams = function(){};
android.view.ViewGroup.LayoutParams.MATCH_PARENT = NaN;
android.view.ViewGroup.LayoutParams.WRAP_CONTENT = NaN;
android.view.ViewGroup.LayoutParams.setMargins = function(){};
android.view.ViewGroup.addView = function(){};
android.view.ViewGroup.removeView = function(){};
android.view.Window = function(){};
android.view.Window.getDecorView = function(){};
android.view.WindowManager = function(){};
android.view.WindowManager.getDefaultDisplay = function(){};
android.webkit = {};
android.webkit.WebSettings = function(){};
android.webkit.WebSettings.setJavaScriptEnabled = function(){};
android.webkit.WebView = function(){};
android.webkit.WebView.prototype = new android.widget.AbsoluteLayout();
android.webkit.WebView.prototype.constructor = android.widget.AbsoluteLayout;
android.webkit.WebView.getSettings = function(){};
android.webkit.WebView.loadUrl = function(){};
android.widget = {};
android.widget.AbsoluteLayout = function(){};
android.widget.AbsoluteLayout.prototype = new android.view.ViewGroup();
android.widget.AbsoluteLayout.prototype.constructor = android.view.ViewGroup;
android.widget.Button = function(){};
android.widget.Button.prototype = new android.widget.TextView();
android.widget.Button.prototype.constructor = android.widget.TextView;
android.widget.FrameLayout = function(){};
android.widget.FrameLayout.prototype = new android.view.ViewGroup();
android.widget.FrameLayout.prototype.constructor = android.view.ViewGroup;
android.widget.ImageView = function(){};
android.widget.ImageView.prototype = new android.view.View();
android.widget.ImageView.prototype.constructor = android.view.View;
android.widget.ImageView.ScaleType = function(){};
android.widget.ImageView.ScaleType.CENTER_INSIDE = NaN;
android.widget.ImageView.setImageBitmap = function(){};
android.widget.ImageView.setScaleType = function(){};
android.widget.LinearLayout = function(){};
android.widget.LinearLayout.prototype = new android.view.ViewGroup();
android.widget.LinearLayout.prototype.constructor = android.view.ViewGroup;
android.widget.LinearLayout.setGravity = function(){};
android.widget.LinearLayout.setOrientation = function(){};
android.widget.PopupWindow = function(){};
android.widget.PopupWindow.dismiss = function(){};
android.widget.PopupWindow.setContentView = function(){};
android.widget.PopupWindow.setFocusable = function(){};
android.widget.PopupWindow.setHeight = function(){};
android.widget.PopupWindow.setTouchable = function(){};
android.widget.PopupWindow.setWidth = function(){};
android.widget.PopupWindow.setWindowLayoutMode = function(){};
android.widget.PopupWindow.showAtLocation = function(){};
android.widget.PopupWindow.update = function(){};
android.widget.RelativeLayout = function(){};
android.widget.RelativeLayout.prototype = new android.view.ViewGroup();
android.widget.RelativeLayout.prototype.constructor = android.view.ViewGroup;
android.widget.ScrollView = function(){};
android.widget.ScrollView.prototype = new android.widget.FrameLayout();
android.widget.ScrollView.prototype.constructor = android.widget.FrameLayout;
android.widget.ScrollView.fullScroll = function(){};
android.widget.TextView = function(){};
android.widget.TextView.prototype = new android.view.View();
android.widget.TextView.prototype.constructor = android.view.View;
android.widget.TextView.setHint = function(){};
android.widget.TextView.setHintTextColor = function(){};
android.widget.TextView.setShadowLayer = function(){};
android.widget.TextView.setSingleLine = function(){};
android.widget.TextView.setText = function(){};
android.widget.TextView.setTextSize = function(){};
android.widget.TextView.setTextColor = function(){};
android.widget.TextView.setTypeface = function(){};
android.widget.TextView.setLineSpacing = function(){};
android.widget.Toast = function(){};
android.widget.Toast.LENGTH_LONG = NaN;
android.widget.Toast.LENGTH_SHORT = NaN;
android.widget.Toast.makeText = function(){};
android.R = {};
android.R.attr = {};
android.R.attr.state_pressed = NaN;
android.R.style = {};
android.R.style.Theme_Holo = NaN;

var com = {};
com.mojang = {};
com.mojang.minecraftpe = {};
com.mojang.minecraftpe.MainActivity = function(){};
com.mojang.minecraftpe.MainActivity.currentMainActivity = {};
com.mojang.minecraftpe.MainActivity.currentMainActivity.get = function(){};

var net = {};
net.zhuoweizhang = {};
net.zhuoweizhang.mcpelauncher = {};
net.zhuoweizhang.mcpelauncher.ScriptManager = function(){};
net.zhuoweizhang.mcpelauncher.ScriptManager.scripts = {};
net.zhuoweizhang.mcpelauncher.ScriptManager.androidContext = new android.content.Context();

var org = {};
org.mozilla = {};
org.mozilla.javascript = {};
org.mozilla.javascript.ScriptableObject = function(){};
org.mozilla.javascript.ScriptableObject.hasProperty = function(){};
org.mozilla.javascript.ScriptableObject.putProperty = function(){};