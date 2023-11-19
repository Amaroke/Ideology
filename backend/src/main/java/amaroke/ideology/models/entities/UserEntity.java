package amaroke.ideology.models.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class UserEntity {

    @Id
    @GeneratedValue
    @JsonProperty("id_user")
    private Integer idUser;

    @Column(name = "email", nullable = false, unique = true)
    @JsonProperty("email")
    private String email;

    @Column(name = "password", nullable = false)
    @JsonProperty("password")
    private String password;

}