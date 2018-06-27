package com.hellowreact.view;

import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Toast;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * description:
 * </br>
 * author: wugj
 * </br>
 * date: 2018/6/25
 * </br>
 * version:
 */
public class MyCustomView  extends View {

    private Paint mPaint;

    public MyCustomView(ReactContext context) {
        super(context);
        mPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
        mPaint.setColor(0xffff0000);
    }

    // 这里相当于可以改变color属性
    public void setColor(int color){
        mPaint.setColor(color);
        invalidate();
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        // 测试代码，onMeasure中设置的值通过getWidth()/getHeight()拿到的不一样，问题没找到
        setMeasuredDimension(300, 300);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        canvas.drawRect(0, 0, getWidth(), getHeight(), mPaint);
    }


    public void nativeGetJS() {
        Toast.makeText(getContext(), "js调用原生方法", Toast.LENGTH_SHORT).show();
    }

    /**
     * 模拟事件分发
     * @param event
     * @return
     */
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        /*类似于MyCustomViewManager中定义addEventEmitters方法全局控制分发事件
        WritableMap event0 = Arguments.createMap();
        event0.putString("msg","MyMessage");//key用于js中的nativeEvent
        dispatchEvent("nativeToJS",event0);*/
        return super.onTouchEvent(event);
    }

    /**
     * 处理事件分发
     * @param eventName Java端定义事件名称
     * @param eventData 数据传递
     */
    private void dispatchEvent(String eventName, WritableMap eventData){
        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),//native和js两个视图会依据getId()而关联在一起
                eventName,//事件名称
                eventData
        );
    }
}