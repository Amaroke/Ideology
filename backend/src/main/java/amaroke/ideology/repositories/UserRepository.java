package amaroke.ideology.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import amaroke.ideology.models.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    public default UserEntity findUserByEmail(String email) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        String encodedPassword = bCryptPasswordEncoder.encode("123456");

        UserEntity user = UserEntity.builder().email(email).password(encodedPassword).build();
        user.setFirstName("FirstName");
        user.setLastName("LastName");
        return user;
    }

}
