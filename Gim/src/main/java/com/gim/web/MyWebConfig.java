package com.gim.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
@EnableWebMvc
@Configuration
public class MyWebConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addInterceptors (InterceptorRegistry registry) {
        registry.addInterceptor(new PermissionInterceptor());
    }

}
