package org.achu.moni.testapp.repository;

import org.achu.moni.testapp.entity.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

public interface MessageRepository extends CrudRepository<Message, Integer> {
}
