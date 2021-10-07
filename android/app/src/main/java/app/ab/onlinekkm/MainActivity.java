package app.ab.onlinekkm;

import android.os.Bundle;

import com.capacitorjs.plugins.app.AppPlugin;
import com.capacitorjs.plugins.keyboard.KeyboardPlugin;
import com.capacitorjs.plugins.paxstore.PaxstoreSdkPlugin;
import com.capacitorjs.plugins.statusbar.StatusBarPlugin;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(AppPlugin.class);
//    registerPlugin(DevicePlugin.class);
    registerPlugin(KeyboardPlugin.class);
    registerPlugin(StatusBarPlugin.class);
    registerPlugin(PaxstoreSdkPlugin.class);
//    registerPlugin(StoragePlugin.class);
  }
}
