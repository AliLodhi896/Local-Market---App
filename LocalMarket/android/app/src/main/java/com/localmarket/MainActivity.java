package com.localmarket;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.otplessreactnative.OtplessReactNativeManager;
import android.content.Intent;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "LocalMarket";
  }
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    OtplessReactNativeManager.INSTANCE.onNewIntent(intent);
  }
  public void onBackPressed() {
    if (OtplessReactNativeManager.INSTANCE.onBackPressed()) return;
    super.onBackPressed();
  }
  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }


}
