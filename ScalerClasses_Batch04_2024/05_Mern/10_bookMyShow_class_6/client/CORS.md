## What is CORS?
CORS stands for Cross-Origin Resource Sharing. It's a security feature
implemented by web browsers to control how resources (like HTML,
JavaScript, or data) can be requested from another domain (origin)
than the one that served the web page.

## Why Do We Need CORS?
When you make an API request from your frontend code (like a React
app running on http://localhost:3000) to a backend server (like
http://localhost:8082), the browser sees this as a "cross-origin"
request because the ports are different.

To protect users, browsers block these requests by default unless the
server explicitly allows them. This prevents malicious websites from
accessing sensitive data from other sites.

## How Does CORS Work?

# Preflight Request:
For certain types of requests, the browser sends an HTTP OPTIONS
request to the server before the actual request. This is called a
preflight request. It checks if the server permits the actual request.
Response with Headers:

If the server allows the request, it responds with specific headers:
1. Access-Control-Allow-Origin: 
Specifies which origins can access the resource.

2. Access-Control-Allow-Methods: 
Specifies which HTTP methods (GET,POST, etc.) are allowed.

3. Access-Control-Allow-Headers: 
Specifies which headers can be used in the actual request.

# How to Avoid CORS Issues During Development
In development, dealing with CORS can be a hassle, so we use a proxy
to make it easier.

**Using Proxy in package.json**
By adding a proxy setting in your package.json, you can instruct the
development server to forward API requests to your backend server.
This makes the browser think the requests are coming from the same
origin.

Here's how you do it:
Add Proxy Setting:
"proxy": "http://localhost:8082"