package amaroke.ideology.models.dto.requests;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class AuthReq {

    @JsonProperty("email")
    private String email;

    @JsonProperty("password")
    private String password;

}