(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{501:function(e,s,n){"use strict";n.r(s);var a=n(4),t=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[e._v("探索抖音禁止录屏")])]),e._v(" "),s("h2",{attrs:{id:"flag-secure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flag-secure"}},[e._v("#")]),e._v(" FLAG_SECURE")]),e._v(" "),s("p",[e._v("在播放付费短剧内容是，执行 "),s("code",[e._v("adb shell dumpsys window windows | grep -A 30 -E 'Window #|mCurrentFocus'")]),e._v(" 发现当前 window 设置了 flag "),s("code",[e._v("SECURE")]),e._v(". 其定义在 "),s("a",{attrs:{href:"https://developer.android.com/reference/android/view/WindowManager.LayoutParams",target:"_blank",rel:"noopener noreferrer"}},[e._v("/WindowManager.LayoutParams"),s("OutboundLink")],1),e._v(" 中, 此 flag: Added in API level 1.")]),e._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/** Window flag: treat the content of the window as secure, preventing\n * it from appearing in screenshots or from being viewed on non-secure\n * displays.\n *\n * <p>See {@link android.view.Display#FLAG_SECURE} for more details about\n * secure surfaces and secure displays.\n */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("FLAG_SECURE")]),e._v("             "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x00002000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("--\nWindow #13 Window{8c106d1 u0 com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.playlet.videodetail.PlayletVideoPlayActivity}:\n  mDisplayId=0 rootTaskId=11350 mSession=Session{7a1d86 21483:u0a10517} mClient=android.os.BinderProxy@cea31f8\n  mOwnerUid=10517 showForAllUsers=false package=com.ss.android.ugc.aweme appop=NONE\n  mAttrs={(0,0)(fillxfill) sim={adjust=nothing forwardNavigation} ty=BASE_APPLICATION hwFlags=#0 isEmuiStyle=0 statusBarColor=#0 navigationBarColor=#ff000000 wanim=0x10302fe\n    fl=KEEP_SCREEN_ON LAYOUT_IN_SCREEN SECURE LAYOUT_INSET_DECOR SPLIT_TOUCH HARDWARE_ACCELERATED DRAWS_SYSTEM_BAR_BACKGROUNDS\n    pfl=FIT_INSETS_CONTROLLED\n    vsysui=LAYOUT_STABLE LAYOUT_FULLSCREEN\n    fitSides=}\n  Requested w=720 h=1600 mLayoutSeq=25844\n  mBaseLayer=21000 mSubLayer=0    mToken=ActivityRecord{70e4774 u0 com.ss.android.ugc.aweme/.playlet.videodetail.PlayletVideoPlayActivity t11350}\n  mActivityRecord=ActivityRecord{70e4774 u0 com.ss.android.ugc.aweme/.playlet.videodetail.PlayletVideoPlayActivity t11350}\n  mAppDied=false    drawnStateEvaluated=true    mightAffectAllDrawn=true\n  mViewVisibility=0x0 mHaveFrame=true mObscured=false\n  mSeq=0 mSystemUiVisibility=0x500\n  mGivenContentInsets=[0,0][0,0] mGivenVisibleInsets=[0,0][0,0]\n  mFullConfiguration={1.15 ?mcc?mnc [zh_CN_#Hans] ldltr sw360dp w360dp h776dp 320dpi nrml long port finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 720, 1600) mAppBounds=Rect(0, 48 - 720, 1600) mWindowingMode=fullscreen mDisplayWindowingMode=fullscreen mActivityType=standard mAlwaysOnTop=undefined mRotation=ROTATION_0} suim:1 fontWeightScale:100changeUserFlag:0 s.1 fontWeightAdjustment=0}\n  mLastReportedConfiguration={1.15 ?mcc?mnc [zh_CN_#Hans] ldltr sw360dp w360dp h776dp 320dpi nrml long port finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 720, 1600) mAppBounds=Rect(0, 48 - 720, 1600) mWindowingMode=fullscreen mDisplayWindowingMode=fullscreen mActivityType=standard mAlwaysOnTop=undefined mRotation=ROTATION_0} suim:1 fontWeightScale:100changeUserFlag:0 s.1 fontWeightAdjustment=0}\n  mHasSurface=true isReadyForDisplay()=true mWindowRemovalAllowed=false\n  Frames: containing=[0,0][720,1600] parent=[0,0][720,1600]\n      display=[0,0][720,1600]\n      content=[0,48][720,1600] visible=[0,48][720,1600]\n      decor=[0,0][720,1600]\n  mFrame=[0,0][720,1600] last=[0,0][720,1600]\n    cutout=DisplayCutout{insets=Rect(0, 48 - 0, 0) waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(310, 0 - 410, 48), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 0)]}} last=DisplayCutout{insets=Rect(0, 48 - 0, 0) waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(310, 0 - 410, 48), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 0)]}}\n  Cur insets: content=[0,48][0,0] visible=[0,48][0,0] stable=[0,48][0,0]    Lst insets: content=[0,48][0,0] visible=[0,48][0,0] stable=[0,48][0,0]\n    surface=[0,0][0,0]\n  WindowStateAnimator{d0be7e6 com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.playlet.videodetail.PlayletVideoPlayActivity}:\n    mSurface=Surface(name=com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.playlet.videodetail.PlayletVideoPlayActivity)/@0x69fceef\n    Surface: shown=true layer=0 alpha=1.0 rect=(0.0,0.0) 720 x 1600 transform=(1.0, 0.0, 1.0, 0.0)\n    mDrawState=HAS_DRAWN       mLastHidden=false\n    mEnterAnimationPending=false      mSystemDecorRect=[0,0][720,1600] mLastClipRect=[0,0][720,1600]\n--\nWindow #14 Window{13235d u0 com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.detail.ui.DetailActivity}:\n  mDisplayId=0 rootTaskId=11350 mSession=Session{7a1d86 21483:u0a10517} mClient=android.os.BinderProxy@9aff934\n  mOwnerUid=10517 showForAllUsers=false package=com.ss.android.ugc.aweme appop=NONE\n  mAttrs={(0,0)(fillxfill) sim={adjust=nothing forwardNavigation} ty=BASE_APPLICATION hwFlags=#0 isEmuiStyle=0 statusBarColor=#0 navigationBarColor=#ff000000 wanim=0x10302fe\n    fl=KEEP_SCREEN_ON LAYOUT_IN_SCREEN SECURE LAYOUT_INSET_DECOR SPLIT_TOUCH HARDWARE_ACCELERATED DRAWS_SYSTEM_BAR_BACKGROUNDS\n    pfl=FIT_INSETS_CONTROLLED\n    vsysui=LAYOUT_STABLE LAYOUT_FULLSCREEN\n    fitSides=}\n  Requested w=720 h=1600 mLayoutSeq=25834\n  mBaseLayer=21000 mSubLayer=0    mToken=ActivityRecord{4894621 u0 com.ss.android.ugc.aweme/.detail.ui.DetailActivity t11350}\n  mActivityRecord=ActivityRecord{4894621 u0 com.ss.android.ugc.aweme/.detail.ui.DetailActivity t11350}\n  mAppDied=false    drawnStateEvaluated=true    mightAffectAllDrawn=true\n  mViewVisibility=0x8 mHaveFrame=true mObscured=true\n  mSeq=0 mSystemUiVisibility=0x500\n  mGivenContentInsets=[0,0][0,0] mGivenVisibleInsets=[0,0][0,0]\n  mFullConfiguration={1.15 ?mcc?mnc [zh_CN_#Hans] ldltr sw360dp w360dp h776dp 320dpi nrml long port finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 720, 1600) mAppBounds=Rect(0, 48 - 720, 1600) mWindowingMode=fullscreen mDisplayWindowingMode=fullscreen mActivityType=standard mAlwaysOnTop=undefined mRotation=ROTATION_0} suim:1 fontWeightScale:100changeUserFlag:0 s.1 fontWeightAdjustment=0}\n  mLastReportedConfiguration={1.15 ?mcc?mnc [zh_CN_#Hans] ldltr sw360dp w360dp h776dp 320dpi nrml long port finger -keyb/v/h -nav/h winConfig={ mBounds=Rect(0, 0 - 720, 1600) mAppBounds=Rect(0, 48 - 720, 1600) mWindowingMode=fullscreen mDisplayWindowingMode=fullscreen mActivityType=standard mAlwaysOnTop=undefined mRotation=ROTATION_0} suim:1 fontWeightScale:100changeUserFlag:0 s.1 fontWeightAdjustment=0}\n  mHasSurface=false isReadyForDisplay()=false mWindowRemovalAllowed=false\n  Frames: containing=[0,0][720,1600] parent=[0,0][720,1600]\n      display=[0,0][720,1600]\n      content=[0,48][720,1600] visible=[0,48][720,1600]\n      decor=[0,0][720,1600]\n  mFrame=[0,0][720,1600] last=[0,0][720,1600]\n    cutout=DisplayCutout{insets=Rect(0, 48 - 0, 0) waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(310, 0 - 410, 48), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 0)]}} last=DisplayCutout{insets=Rect(0, 48 - 0, 0) waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(310, 0 - 410, 48), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 0)]}}\n  Cur insets: content=[0,48][0,0] visible=[0,48][0,0] stable=[0,48][0,0]    Lst insets: content=[0,48][0,0] visible=[0,48][0,0] stable=[0,48][0,0]\n    surface=[0,0][0,0]\n  WindowStateAnimator{8d3acf7 com.ss.android.ugc.aweme/com.ss.android.ugc.aweme.detail.ui.DetailActivity}:\n    mDrawState=NO_SURFACE       mLastHidden=true\n    mEnterAnimationPending=false      mSystemDecorRect=[0,0][720,1600] mLastClipRect=[0,0][720,1600]\n    mTmpSize=[0,0][720,1600]\n  mForceSeamlesslyRotate=false seamlesslyRotate: pending=null finishedFrameNumber=0\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br"),s("span",{staticClass:"line-number"},[e._v("45")]),s("br"),s("span",{staticClass:"line-number"},[e._v("46")]),s("br"),s("span",{staticClass:"line-number"},[e._v("47")]),s("br"),s("span",{staticClass:"line-number"},[e._v("48")]),s("br"),s("span",{staticClass:"line-number"},[e._v("49")]),s("br"),s("span",{staticClass:"line-number"},[e._v("50")]),s("br"),s("span",{staticClass:"line-number"},[e._v("51")]),s("br"),s("span",{staticClass:"line-number"},[e._v("52")]),s("br"),s("span",{staticClass:"line-number"},[e._v("53")]),s("br"),s("span",{staticClass:"line-number"},[e._v("54")]),s("br"),s("span",{staticClass:"line-number"},[e._v("55")]),s("br"),s("span",{staticClass:"line-number"},[e._v("56")]),s("br"),s("span",{staticClass:"line-number"},[e._v("57")]),s("br"),s("span",{staticClass:"line-number"},[e._v("58")]),s("br"),s("span",{staticClass:"line-number"},[e._v("59")]),s("br"),s("span",{staticClass:"line-number"},[e._v("60")]),s("br"),s("span",{staticClass:"line-number"},[e._v("61")]),s("br"),s("span",{staticClass:"line-number"},[e._v("62")]),s("br"),s("span",{staticClass:"line-number"},[e._v("63")]),s("br"),s("span",{staticClass:"line-number"},[e._v("64")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);