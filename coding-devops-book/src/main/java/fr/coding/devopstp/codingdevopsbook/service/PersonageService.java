package fr.coding.devopstp.codingdevopsbook.service;

import fr.coding.devopstp.codingdevopsbook.entity.Personage;
import fr.coding.devopstp.codingdevopsbook.entity.PersonageDto;
import fr.coding.devopstp.codingdevopsbook.repository.PersonageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonageService {
    private final PersonageRepository repository;
    public Personage save(PersonageDto person) {

        Personage personage = Personage.builder()
                .description(person.getDescription())
                .pathImage(person.getPathImage())
                .build();

        return repository.save(personage);

    }

    public List<Personage> getAllPerson() {
        return repository.findAll();
    }
}
