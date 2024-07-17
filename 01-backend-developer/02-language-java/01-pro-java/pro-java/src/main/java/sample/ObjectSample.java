package sample;

import java.util.HashMap;
import java.util.Map;

public class ObjectSample {
    public static void main(String[] args) {
        Map<String, String> map = new HashMap<>();
        map.put("key1", "val1");
        map.put("key2", "val2");

        // obj1の準備
        var obj1 = new Obj();
        obj1.setParam("param");
        Obj.InnerObj innerObj = new Obj.InnerObj();
        innerObj.setInnerParam("innerParam1");
        obj1.setInnerObj(innerObj);
        obj1.setMap(map);

        // obj2の準備
        var obj2 = obj1.copy();
        obj2.setParam("copy_param");
        obj2.getInnerObj().setInnerParam("copy_inner_param");
        var obj2Map = obj2.getMap();
        obj2Map.put("key1", "valval");

        System.out.println(obj1);
        System.out.println(obj2);
    }
}

class Obj {
    String param;

    InnerObj innerObj;

    Map<String, String> map;

    public String getParam() {
        return param;
    }

    public void setParam(String param) {
        this.param = param;
    }

    public InnerObj getInnerObj() {
        return innerObj;
    }

    public void setInnerObj(InnerObj innerObj) {
        this.innerObj = innerObj;
    }

    public Map<String, String> getMap() {
        return map;
    }

    public void setMap(Map<String, String> map) {
        this.map = map;
    }

    public Obj copy() {
        Obj newObj = new Obj();

        newObj.setParam(this.getParam());
        if (this.innerObj != null) {
            InnerObj newInnerObj = new InnerObj();
            newInnerObj.setInnerParam(this.innerObj.getInnerParam());
            newObj.setInnerObj(newInnerObj);
        }

        newObj.setMap(new HashMap<>(this.map));
        return newObj;
    }

    @Override
    public String toString() {
        return "Obj{" +
                "param='" + param + '\'' +
                ", innerObj=" + innerObj +
                ", map=" + map +
                '}';
    }

    static class InnerObj {
        String innerParam;

        public String getInnerParam() {
            return innerParam;
        }

        public void setInnerParam(String innerParam) {
            this.innerParam = innerParam;
        }

        @Override
        public String toString() {
            return "InnerObj{" +
                    "innerParam='" + innerParam + '\'' +
                    '}';
        }
    }
}
