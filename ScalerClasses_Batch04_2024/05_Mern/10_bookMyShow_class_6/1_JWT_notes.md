## JWT
JSON Web Token (JWT) is an open standard (RFC 7519) for securely
transmitting information between parties as a JSON object. JWTs are
commonly used for authentication and authorization in web
applications.

## Components of JWT
A JWT is composed of three parts:
Header
Payload
Signature

These parts are separated by dots (.) and are encoded in Base64 URL format.

1. Header
The header typically consists of two parts: the type of token (JWT)
and the signing algorithm being used, such as HMAC, SHA256 or RSA.
{
 "alg": "HS256",
 "typ": "JWT"
}

2. Payload
The payload contains the claims. Claims are statements about an
entity (typically, the user) and additional data. There are three types of
claims:

a. **Registered claims**: Predefined claims which are not mandatory but
recommended, e.g., iss (issuer), exp (expiration time), sub (subject),
aud (audience).

b. **Public claims**: Custom claims created to share information, e.g.,
name, role.Custom claims intended to be shared openly and used
across different systems, registered to avoid naming collisions.
In a microservices architecture, various microservices might need to
authenticate and authorize requests based on JWTs. Public claims
allow these services to understand the user information consistently.
In an SSO environment, multiple applications or services need to
authenticate the same user based on a single set of credentials.
Public claims ensure that the user information is consistently
understood across all these systems.

c. **Private claims**: Custom claims agreed upon between parties, e.g.,
user_id.

Example payload:
{
 "sub": "1234567890", // Registered claim: Subject
 "name": "John Doe", // Public claim: User's name
 "email": "john.doe@example.com", // Public claim: User's email
 "role": "admin", // Public claim: User's role
 "user_id": "abc123", // Private claim: Custom user ID
 "department": "sales", // Private claim: User's department
 "permissions": ["read", "write"] // Private claim: User's permissions
}

3. Signature
To create the signature, the encoded header, encoded payload, a
secret, and the algorithm specified in the header are used. For
example, if using HMAC SHA256, the signature is created in the
following way:

HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)


## JWT Structure
A JWT looks like this:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c


## How JWT Works

1. Client Authentication: When a user logs in, the server generates a JWT
and sends it back to the client.

2. Client Storage: The client stores the JWT (usually in localStorage or a
cookie).

3. Subsequent Requests: The client includes the JWT in the header of
each subsequent request to the server, usually in the Authorization
header as a Bearer token.

4. Authorization: Bearer <token>
Server Validation: The server validates the JWT using the secret key. If
the JWT is valid, the server processes the request; otherwise, it rejects
the request.