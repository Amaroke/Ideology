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
        this.password = userEntity.getPassword();
        this.firstName = userEntity.getFirstName();
        this.lastName = userEntity.getLastName();
    }

    @JsonProperty("id_user")
    private Integer idUser;

    @JsonProperty("email")
    private String email;

    @JsonProperty("password")
    private String password;

    @JsonProperty("first_name")
    private String firstName;

    @JsonProperty("last_name")
    private String lastName;

}
