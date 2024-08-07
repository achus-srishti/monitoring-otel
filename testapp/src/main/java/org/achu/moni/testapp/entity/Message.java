package org.achu.moni.testapp.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "message_seq")
    @SequenceGenerator(name = "message_seq", sequenceName = "message_seq", allocationSize = 1)
    Integer id;

    String name;
    String message;
    Date time;

    public Message(String name, String message, Date time) {
        this.name = name;
        this.message = message;
        this.time = time;
    }
}
