package com.gim.web;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.gim.Service.GimManager;
import com.gim.Service.GimManagerImpl;
@Component
public class PermissionInterceptor extends HandlerInterceptorAdapter {
	GimManager GimManager=new GimManagerImpl();
	@Override
    public boolean preHandle (HttpServletRequest request,
                              HttpServletResponse response,
                              Object handler) throws Exception {
    try{ 
	String path=request.getServletPath();
     if(GimManager.isAllow(path))
        return true;
     else{
    	 response.sendRedirect("pagenotallowed.mm");
    	 return false; 
     }
    	
    }
    catch(Exception e){
    	e.printStackTrace();
    	return true;
    }
    }
	public GimManager getGimManager() {
		return GimManager;
	}
	public void setGimManager(GimManager gimManager) {
		GimManager = gimManager;
	}
	
}