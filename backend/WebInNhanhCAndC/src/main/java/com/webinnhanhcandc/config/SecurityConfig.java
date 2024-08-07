package com.webinnhanhcandc.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // Vô hiệu hóa CSRF
                .cors(withDefaults()) // Cho phép CORS
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .anyRequest().permitAll() // Cho phép truy cập không xác thực vào tất cả các endpoint
                );
        return http.build();
    }

//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http.authorizeHttpRequests(authorizeRequests ->
//                        authorizeRequests
//                                .requestMatchers("/api/**").permitAll() // Cho phép truy cập không xác thực vào tất cả các endpoint bắt đầu bằng /api/
//                                .anyRequest().authenticated() // Các request khác cần phải xác thực
//                )
//                .formLogin(formLogin ->
//                        formLogin
//                                .loginPage("/login") // Cấu hình trang đăng nhập tùy chỉnh nếu có
//                                .permitAll()
//                )
//                .logout(logout ->
//                        logout.permitAll()
//                );
//        return http.build();
//    }

//    @Bean
//    public UserDetailsService userDetailsService() {
//        UserDetails user = User.withDefaultPasswordEncoder()
//                .username("user")
//                .password("password")
//                .roles("USER")
//                .build();
//        return new InMemoryUserDetailsManager(user);
//    }
}
