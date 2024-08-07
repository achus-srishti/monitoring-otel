package org.achu.moni.testapp.vo;

public class MessageCount {

    String name;
    Integer count;

    public MessageCount(String name, Integer count) {
        this.name = name;
        this.count = count;
    }

    public String getName() {
        return name;
    }

    public Integer getCount() {
        return count;
    }

}
