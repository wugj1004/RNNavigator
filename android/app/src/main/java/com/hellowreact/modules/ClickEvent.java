package com.hellowreact.modules;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * description:
 * </br>
 * author: wugj
 * </br>
 * date: 2018/6/26
 * </br>
 * version:
 */
public class ClickEvent extends Event<ClickEvent> {

    public static final String EVENT_NAME = "nativeToJS";


    public ClickEvent(int viewId) {
        super(viewId);
    }


    @Override
    public String getEventName() {
        return EVENT_NAME;
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        rctEventEmitter.receiveEvent(getViewTag(), getEventName(), serializeEventData());
    }


    @Override
    public short getCoalescingKey() {
        return 0;
    }

    private WritableMap serializeEventData() {
        WritableMap eventData = Arguments.createMap();
        eventData.putString("selected", "aaaaaaaa");

        return eventData;
    }

}