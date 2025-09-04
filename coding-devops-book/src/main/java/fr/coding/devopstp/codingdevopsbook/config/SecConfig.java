//package fr.coding.devopstp.codingdevopsbook.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecConfig {
//
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//        http
//                .cors(AbstractHttpConfigurer::disable)
//                .csrf(Customizer.withDefaults())
//                .sessionManagement(
//                        c -> c.sessionCreationPolicy(
//                                SessionCreationPolicy.ALWAYS
//                        )
//                )
//                .authorizeHttpRequests(requests -> requests
//                        .requestMatchers(HttpMethod.POST, "/book/**").permitAll()
//                        .anyRequest().permitAll()
//                );
//
//        return http.build();
//    }
//
//}
