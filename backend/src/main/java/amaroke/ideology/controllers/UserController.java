package amaroke.ideology.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import amaroke.ideology.models.dto.responses.UserRes;
import amaroke.ideology.services.UserService;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("")
    public @ResponseBody List<UserRes> getAllUsers() {
        List<UserRes> users = this.userService.getAllUsers().stream().map(UserRes::new).toList();
        return users;
    }

}
