package org.achu.moni.testapp.controller;

import org.achu.moni.testapp.entity.Message;
import org.achu.moni.testapp.repository.MessageRepository;
import org.achu.moni.testapp.vo.MessageCount;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;


@RestController
public class MessageController {

    @Autowired
    MessageRepository messageRepository;

    Logger logger=LoggerFactory.getLogger(MessageController.class.getName());

    @GetMapping("/message/count/{name}")
    public MessageCount getCount(@PathVariable("name")  String name) {
        logger.info("Came for " + name);
        logger.info("Saving message");
        messageRepository.save(new Message(MessageController.class.getName(), "Hello to " + name, new Date()));
        logger.info("Saved message");
        logger.info("Hitting log service");
        RestTemplate rt=new RestTemplate();
        rt.postForObject("http://localhost:8080/log/"+name, new HttpEntity<>("Log Me"), String.class);
        logger.info("Audit complete");
        logger.info("Sending response.");
        return new MessageCount(name, 10);
    }

}
