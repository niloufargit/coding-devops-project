package fr.coding.devopstp.codingdevopsbook.entity;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PersonageDto {
    private String pathImage;
    private String description;
}
