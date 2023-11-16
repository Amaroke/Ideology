package amaroke.ideology.repositories;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import amaroke.ideology.models.User;

@Repository
public class UserRepository {
    public User findUserByEmail(String email) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        // Générez un mot de passe haché pour l'exemple
        String encodedPassword = bCryptPasswordEncoder.encode("123456");

        User user = new User(email, encodedPassword);
        user.setFirstName("FirstName");
        user.setLastName("LastName");
        return user;
    }

}
