package fr.coding.devopstp.codingdevopsbook.repository;

import fr.coding.devopstp.codingdevopsbook.entity.Personage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonageRepository extends MongoRepository<Personage, String> {
}
