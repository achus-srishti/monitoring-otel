package org.achu.moni.testapp.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="logger")
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "logger_seq")
    @SequenceGenerator(name = "logger_seq", sequenceName = "logger_seq", allocationSize = 1)
    Integer id;
    String app;
    String message;
    Date time;

    public Log(String app, String message) {
        this.app = app;
        this.message = message;
        this.time=new Date();
    }

    public Integer getId() {
        return id;
    }

    public String getApp() {
        return app;
    }

    public String getMessage() {
        return message;
    }

    public Date getTime() {
        return time;
    }
}
