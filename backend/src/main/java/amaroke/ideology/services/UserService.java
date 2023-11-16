package amaroke.ideology.services;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;

import amaroke.ideology.repositories.UserRepository;
import amaroke.ideology.models.dto.requests.UserReq;
import amaroke.ideology.models.dto.responses.UserRes;
import amaroke.ideology.models.entities.UserEntity;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserEntity> getAllUsers() {
        return this.userRepository.findAll();
    }

    public UserRes createUser(UserReq userReq) {
        UserEntity user = UserEntity.builder().email(userReq.getEmail()).password(userReq.getPassword())
                .firstName(userReq.getFirstName()).lastName(userReq.getLastName()).build();
        userRepository.save(user);
        return new UserRes(user);
    }
}