package amaroke.ideology.models.dto.responses;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ErrorRes {

    @JsonProperty("http_status")
    HttpStatus httpStatus;

    @JsonProperty("message")
    String message;

}