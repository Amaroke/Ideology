package amaroke.ideology.models.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginReq {
    private String email;
    private String password;
}