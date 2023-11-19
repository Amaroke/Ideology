package amaroke.ideology.models.dto.responses;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginRes {

    @JsonProperty("email")
    private String email;

    @JsonProperty("token")
    private String token;

}