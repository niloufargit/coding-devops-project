package fr.coding.devopstp.codingdevopsbook.entity;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document
public class Personage {

    @Id
    private String personageId;

    private String pathImage;
    private String description;

}
