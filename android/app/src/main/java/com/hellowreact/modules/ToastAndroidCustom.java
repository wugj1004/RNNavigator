package com.hellowreact.modules;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * description:
 * </br>
 * author: wugj
 * </br>
 * date: 2018/6/25
 * </br>
 * version:
 */
public class ToastAndroidCustom extends ReactContextBaseJavaModule{

    public ToastAndroidCustom(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * @return 不能返回null 否则会建立bridge失败
     */
    @Override
    public String getName() {
        return "ToastAndroidCustom";
    }

    @ReactMethod
    public void showToast(String msg) {
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_SHORT).show();
    }
}
