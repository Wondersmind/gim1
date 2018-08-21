package com.gim.web;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import javax.servlet.http.HttpSession;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;


public class JsessionIdAvoiderFilter implements Filter {
	
    protected static final Logger LOGGER = LogManager.getLogger(JsessionIdAvoiderFilter.class);

    public void doFilter(ServletRequest req, ServletResponse res,
            FilterChain chain) throws IOException, ServletException {

        if (!(req instanceof HttpServletRequest)) {
            chain.doFilter(req, res);
            return;
        }

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
      
    // Redirect requests with JSESSIONID in URL to clean old links
    /* If you really want clean up some old links which have Jsession id bookmarked clean it. If its new app 
        this  below check is not required. */
        if (request.isRequestedSessionIdFromURL()) {
            String url = request.getRequestURL().append(request.getQueryString() != null ? "?"
                            + request.getQueryString() : "").toString();
            response.setHeader("Location", url);
            response.sendError(HttpServletResponse.SC_MOVED_PERMANENTLY);
            LOGGER.info(" Found url with jsession id in it:"+ request.getRequestURL() +": url="+url);
            return;
        }

        // Prevent rendering of JSESSIONID in URLs for all outgoing links
        HttpServletResponseWrapper wrappedResponse = new HttpServletResponseWrapper(
                response) {
            @Override
            public String encodeRedirectUrl(String url) {
                return url;
            }

            public String encodeRedirectURL(String url) {
                return url;
            }

            public String encodeUrl(String url) {
                return url;
            }

            public String encodeURL(String url) {
                return url;
            }
        };
        chain.doFilter(req, wrappedResponse);

    }

    public void destroy() {
    }

    public void init(FilterConfig arg0) throws ServletException {
    }
}