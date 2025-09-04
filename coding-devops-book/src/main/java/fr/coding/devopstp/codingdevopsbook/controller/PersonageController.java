package fr.coding.devopstp.codingdevopsbook.controller;

import fr.coding.devopstp.codingdevopsbook.entity.PersonageDto;
import fr.coding.devopstp.codingdevopsbook.service.PersonageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class PersonageController {
    private final PersonageService personageService;

    @PostMapping(value = "/save", produces = "application/json")
    public ResponseEntity<?> upload(@RequestBody PersonageDto person)  {
       var p =  personageService.save(person);
        return ResponseEntity.ok().body(p);
    }


    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<?> getAll()  {
        var p =  personageService.getAllPerson();
        return ResponseEntity.ok().body(p);
    }


}
