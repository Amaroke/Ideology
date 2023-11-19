package amaroke.ideology.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import amaroke.ideology.auth.JwtUtil;
import amaroke.ideology.models.dto.requests.AuthReq;
import amaroke.ideology.models.dto.responses.ErrorRes;
import amaroke.ideology.models.dto.responses.LoginRes;
import amaroke.ideology.models.entities.UserEntity;
import amaroke.ideology.services.UserService;
import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private JwtUtil jwtUtil;

    @ResponseBody
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthReq authReq, @RequestBody Integer duration) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authReq.getEmail(), authReq.getPassword()));
            String email = authentication.getName();
            UserEntity user = UserEntity.builder().email(email).build();
            String token = jwtUtil.createToken(user, duration);
            LoginRes loginRes = new LoginRes(email, token);
            return ResponseEntity.ok(loginRes);
        } catch (BadCredentialsException e) {
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, "Invalid username or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @ResponseBody
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthReq authReq) {
        try {
            UserEntity newUser = this.userService.createUser(authReq);
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authReq.getEmail(), authReq.getPassword()));
            String email = authentication.getName();
            String token = jwtUtil.createToken(newUser, 60 * 60 * 1000);
            LoginRes loginRes = new LoginRes(email, token);
            return ResponseEntity.ok(loginRes);
        } catch (BadCredentialsException e) {
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, "Invalid username or password");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            ErrorRes errorResponse = new ErrorRes(HttpStatus.BAD_REQUEST, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }
}
