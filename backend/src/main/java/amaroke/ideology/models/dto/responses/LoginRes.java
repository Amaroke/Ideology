package amaroke.ideology.models.dto.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginRes {
    private String email;
    private String token;
}