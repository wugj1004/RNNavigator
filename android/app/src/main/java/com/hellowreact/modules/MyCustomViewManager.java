package com.hellowreact.modules;

import android.graphics.Color;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.hellowreact.view.MyCustomView;

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

    @Override
    public String getName() { // 返回了定义的View Module的名字
        return REACT_CLASS;
    }

    @Override
    protected MyCustomView createViewInstance(ThemedReactContext reactContext) {
        return new MyCustomView(reactContext); // 创建一个View实例供JS使用。
    }

    // 设置属性，一定需要加这个注解，不然不认识
    @ReactProp(name = "color")
    public void setColor(MyCustomView view, String color) {
        view.setColor(Color.parseColor(color));
    }
}