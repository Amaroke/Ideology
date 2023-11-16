package amaroke.ideology.models.dto.responses;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ErrorRes {
    HttpStatus httpStatus;
    String message;
}