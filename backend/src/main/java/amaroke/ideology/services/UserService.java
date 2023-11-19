package amaroke.ideology.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;

import amaroke.ideology.repositories.UserRepository;
import amaroke.ideology.models.dto.requests.AuthReq;
import amaroke.ideology.models.entities.UserEntity;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserEntity> getAllUsers() {
        return this.userRepository.findAll();
    }

    public UserEntity createUser(AuthReq userReq) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        UserEntity user = UserEntity.builder().email(userReq.getEmail()).password(encoder.encode(userReq.getPassword()))
                .build();
        userRepository.save(user);

        return user;
    }
}