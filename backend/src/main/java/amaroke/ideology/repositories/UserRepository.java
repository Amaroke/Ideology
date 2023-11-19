package amaroke.ideology.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import amaroke.ideology.models.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    public default UserEntity findUserByEmail(String email) {
        return this.findAll().stream().filter(user -> user.getEmail().equals(email)).findFirst().orElse(null);
    }

}
