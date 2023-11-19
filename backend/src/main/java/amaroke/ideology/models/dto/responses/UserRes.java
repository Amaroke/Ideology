package amaroke.ideology.models.dto.responses;

import com.fasterxml.jackson.annotation.JsonProperty;

import amaroke.ideology.models.entities.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserRes {

    public UserRes(UserEntity userEntity) {
        this.idUser = userEntity.getIdUser();
        this.email = userEntity.getEmail();
    }

    @JsonProperty("id_user")
    private Integer idUser;

    @JsonProperty("email")
    private String email;

}
