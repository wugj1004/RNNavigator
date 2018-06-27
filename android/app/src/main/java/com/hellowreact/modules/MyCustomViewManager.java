package com.hellowreact.modules;

import android.graphics.Color;
import android.view.View;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.hellowreact.view.MyCustomView;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * description:
 * </br>
 * author: wugj
 * </br>
 * date: 2018/6/25
 * </br>
 * version:
 */
public class MyCustomViewManager extends SimpleViewManager<MyCustomView> {
    protected static final String REACT_CLASS = "MyCustomView";

    private static final int CHANGE_COLOR = 1;

    @Override
    public String getName() { // 返回了定义的View Module的名字
        return REACT_CLASS;
    }

    /**
     * 创建可供JS调用的native view
     * @param reactContext
     * @return
     */
    @Override
    protected MyCustomView createViewInstance(ThemedReactContext reactContext) {
        return new MyCustomView(reactContext); // 创建一个View实例供JS使用。
    }

    // 设置属性，一定需要加这个注解，否则不识别
    @ReactProp(name = "color")
    public void setColor(MyCustomView view, String color) {
        view.setColor(Color.parseColor(color));
    }

    /**
     * js->native 事件，返回来数据是一组对应了方法名以及方法对应的一个ID(这个ID需要唯一区分)的Map。
     * 这个在进入App的时候就会运行，得到相应的一组Map。
     */
    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of("changeColor", CHANGE_COLOR);
    }

    /**
     * js->native，接收JS事件以后的处理。JS会通过一些发送,发送相应的指令过来，Native会由receiveCommand来处理。
     * 事件过来时才会执行。
     */
    @Override
    public void receiveCommand(MyCustomView root, int commandId, @Nullable ReadableArray args) {
        super.receiveCommand(root, commandId, args);
        switch (commandId) {
            case CHANGE_COLOR:
                root.nativeGetJS();
                break;
                default:
                    break;
        }
    }

    /**
     * native -> js，暴露了在JS中定义的方法，例如下面的"onChangeColor"是定义在JS中的方法。
     * 这个在进入App的时候就会运行
     */
    @Nullable
    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                /*onChangeColor 字符串是java端发送事件是的名称，registrationName 字符串的值是固定的，不能修改，
                JSGetNative 字符串是定义在js端的回调方法。*/
                .put("nativeToJS", MapBuilder.of("registrationName", "JSGetNative"))
                .build();
    }

    /**
     * native -> js，发射入口。将Native的一些事件也注册给JS。
     * 这个在进入App的时候就会运行。
     */

    @Override
    protected void addEventEmitters(final ThemedReactContext reactContext, final MyCustomView view) {
        super.addEventEmitters(reactContext, view);


        /*等同于MyCustomView中定义的onTouchEvent直接分发事件
        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 调用了JS相应的方法。
                reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher()
                        .dispatchEvent(new ClickEvent(view.getId()));
            }
        });*/
        view.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 调用了JS相应的方法。
                reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher()
                        .dispatchEvent(new ClickEvent(view.getId()));
            }
        });
    }


    /**
     * 销毁对象时释放一些资源
     * @param view
     */
    @Override
    public void onDropViewInstance(MyCustomView view) {
        super.onDropViewInstance(view);
    }

}