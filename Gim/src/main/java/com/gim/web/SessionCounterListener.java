package com.gim.web;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
 
public class SessionCounterListener implements HttpSessionListener {
	
  private static int totalActiveSessions;
 
  public static int getTotalActiveSession(){
	return totalActiveSessions;
  }
 
  @Override
  public void sessionCreated(HttpSessionEvent arg0) {
	totalActiveSessions++;
	System.out.println("sessionCreated - add one session into counter");
  }

/*@Override
public void sessionDestroyed(HttpSessionEvent arg0) {
	// TODO Auto-generated method stub
	System.out.println("sessionCreated - destroyed one session into counter");
}*/
 
  @Override
  public void sessionDestroyed(HttpSessionEvent arg0) {
/*	HttpSession session = arg0.getSession(); 
	if(session != null && session.getAttribute("userName") != null){
	String userName = session.getAttribute("userName").toString();
	System.out.println("sessionDestroyed - deduct one session from counter" +userName);
	}*/
  }	
  
/*  private void printCounter(HttpSessionEvent sessionEvent, String userName){
	  
      HttpSession session = sessionEvent.getSession();

      ApplicationContext ctx = 
            WebApplicationContextUtils.
                  getWebApplicationContext(session.getServletContext());

      GimManager GimManager = 
                  (GimManager) ctx.getBean("GimManager");
      User user = null;
      user = GimManager.getUser(userName);
      user.setOnline(false);
      GimManager.mergeUser(user);
      //counterService.printCounter(totalActiveSessions);
}
  */
}