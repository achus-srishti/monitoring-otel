package org.achu.moni.testapp.controller;

import org.achu.moni.testapp.entity.Log;
import org.achu.moni.testapp.repository.LogRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class AuditController {

    @Autowired
    LogRepository logRepository;

    Logger logger= LoggerFactory.getLogger(AuditController.class.getName());

    @PostMapping("/log/{name}")
    public void log(@PathVariable("name")  String name, @RequestBody  String message) {
        logger.info("Auditing started.");
        logger.info("Audit persisted.");
        logRepository.save(new Log(name, message));
        logger.info("Audit complete.");
    }

}
