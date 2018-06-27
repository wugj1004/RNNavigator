package com.hellowreact.modules;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
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
public class RNToastModule extends ReactContextBaseJavaModule{

    public RNToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * @return 不能返回null 否则会建立bridge失败
     */
    @Override
    public String getName() {
        return "RNToastModule";
    }

    @ReactMethod
    public void showToast(String msg, Callback callback) {
        callback.invoke("callback传递参数到js");
        Toast.makeText(getReactApplicationContext(), msg, Toast.LENGTH_SHORT).show();
    }
}
